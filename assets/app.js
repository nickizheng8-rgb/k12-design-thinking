/* ============================================================
   K12 设计思维教学案例库 — 站点交互
   模块：导航 / 滚动入场 / 案例库渲染与筛选 / 详情 Dialog / 提交表单
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 公共工具 ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* 学段 → 标签配色类（DESIGN.md Section 2） */
  var STAGE_CLASS = {
    "小学低年级": "tag-rose",
    "小学高年级": "tag-yellow",
    "初中": "tag-green",
    "高中": "tag-blue",
    "跨学段": "tag-gray"
  };
  function stageClass(stage) { return STAGE_CLASS[stage] || "tag-gray"; }

  /* 数据层：种子 + 用户提交（localStorage 持久化） */
  var STORE_KEY = "dt_k12_cases_user_v1";
  function loadUserCases() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function saveUserCases(list) {
    localStorage.setItem(STORE_KEY, JSON.stringify(list));
  }
  function allCases() {
    return (window.CASES_SEED || []).concat(loadUserCases());
  }

  /* ---------- SiteNav ---------- */
  function initNav() {
    var nav = $(".site-nav");
    var toggle = $(".nav-toggle");
    var panel = $(".nav-panel");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (toggle && panel) {
      toggle.addEventListener("click", function () {
        var open = panel.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  /* ---------- 滚动入场（IntersectionObserver） ---------- */
  function revealNow(el) { el.classList.add("is-in"); }
  function revealAsync(root) {
    var items = $$(".reveal", root);
    requestAnimationFrame(function () {
      items.forEach(revealNow);
    });
  }
  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(revealNow);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revealNow(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 案例库 ---------- */
  function caseCardNode(c) {
    var li = document.createElement("li");
    li.className = "case-grid__item";
    var card = document.createElement("button");
    card.type = "button";
    card.className = "case-card";
    card.setAttribute("data-id", c.id);
    card.setAttribute("aria-haspopup", "dialog");

    var tags = document.createElement("div");
    tags.className = "case-card__tags";
    var stage = document.createElement("span");
    stage.className = "tag " + stageClass(c.stage);
    stage.textContent = c.stage;
    tags.appendChild(stage);
    if (c.subject) {
      var subj = document.createElement("span");
      subj.className = "tag tag-gray";
      subj.textContent = c.subject;
      tags.appendChild(subj);
    }

    var title = document.createElement("h3");
    title.className = "case-card__title";
    title.textContent = c.title;

    var meta = document.createElement("p");
    meta.className = "case-card__meta";
    meta.textContent = c.grade + " · " + c.hours;
    if (c.year) {
      var sep = document.createElement("em");
      sep.textContent = "|";
      meta.appendChild(sep);
      meta.appendChild(document.createTextNode(c.year + " 年"));
    }

    var flow = document.createElement("div");
    flow.className = "case-card__flow";
    (c.flow || []).slice(0, 5).forEach(function (s) {
      var st = document.createElement("span");
      st.className = "step";
      st.textContent = s;
      flow.appendChild(st);
    });

    var excerpt = document.createElement("p");
    excerpt.className = "case-card__excerpt";
    excerpt.textContent = (c.outcome || "").slice(0, 76);

    var more = document.createElement("span");
    more.className = "case-card__more";
    more.textContent = "阅读完整案例 ";
    var arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    more.appendChild(arrow);

    card.appendChild(tags);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(flow);
    card.appendChild(excerpt);
    card.appendChild(more);
    li.appendChild(card);
    return li;
  }

  function fillDialog(dialog, c) {
    var stageEl = $(".case-dialog__stage", dialog);
    stageEl.className = "badge case-dialog__stage";
    stageEl.textContent = c.stage;
    $("h2", dialog).textContent = c.title;
    $(".case-dialog__meta", dialog).textContent = "";
    [c.grade, c.subject, c.hours, c.year ? c.year + " 年收录" : ""].forEach(function (m) {
      if (!m) return;
      var span = document.createElement("span");
      span.textContent = m;
      $(".case-dialog__meta", dialog).appendChild(span);
    });
    $(".case-dialog__context", dialog).textContent = c.context || "—";
    var flowWrap = $(".case-dialog__flow", dialog);
    flowWrap.textContent = "";
    (c.flow || []).forEach(function (s) {
      var st = document.createElement("span");
      st.className = "step case-card__flow-step";
      st.style.cssText = "font-size:12px;font-weight:500;border:1px solid var(--line-soft);padding:4px 10px;border-radius:2px;";
      st.textContent = s;
      flowWrap.appendChild(st);
    });
    $(".case-dialog__outcome", dialog).textContent = c.outcome || "—";
    $(".case-dialog__reflection", dialog).textContent = c.reflection || "—";
  }

  function initCasesPage() {
    var list = $("#case-list");
    if (!list) return;

    var dialog = $("#case-dialog");
    var filterStage = "全部";
    var keyword = "";

    function render() {
      var cases = allCases().filter(function (c) {
        var okStage = filterStage === "全部" || c.stage === filterStage;
        var kw = keyword.trim().toLowerCase();
        var okKw = !kw ||
          (c.title + " " + (c.outcome || "") + " " + (c.context || "") + " " + (c.subject || "") + " " + (c.grade || ""))
            .toLowerCase().indexOf(kw) !== -1;
        return okStage && okKw;
      });
      list.textContent = "";
      if (!cases.length) {
        var empty = $(".empty-state");
        if (empty) empty.hidden = false;
        return;
      }
      var empty = $(".empty-state");
      if (empty) empty.hidden = true;
      cases.forEach(function (c, i) {
        var node = caseCardNode(c);
        node.style.setProperty("--i", Math.min(i % 6, 5));
        node.classList.add("reveal");
        list.appendChild(node);
      });
      revealAsync(list);
      var count = $("#case-count");
      if (count) count.textContent = "共收录 " + cases.length + " 个案例";
    }

    list.addEventListener("click", function (e) {
      var card = e.target.closest(".case-card");
      if (!card || !dialog) return;
      var c = allCases().filter(function (x) { return x.id === card.getAttribute("data-id"); })[0];
      if (!c) return;
      fillDialog(dialog, c);
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });

    $$("input[name='stage-filter']").forEach(function (input) {
      input.addEventListener("change", function () {
        filterStage = input.value;
        render();
      });
    });
    var search = $("#case-search");
    if (search) {
      search.addEventListener("input", function () {
        keyword = search.value;
        render();
      });
    }
    if (dialog) {
      $(".case-dialog__close", dialog).addEventListener("click", function () { dialog.close(); });
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog) dialog.close();
      });
      dialog.addEventListener("close", function () {
        var opener = list.querySelector(".case-card:focus");
        if (opener) opener.focus();
      });
    }
    render();
  }

  /* ---------- 首页精选案例 ---------- */
  function initFeatured() {
    var list = $("#featured-list");
    if (!list) return;
    allCases().slice(0, 3).forEach(function (c, i) {
      var node = caseCardNode(c);
      node.style.setProperty("--i", i);
      node.classList.add("reveal");
      list.appendChild(node);
    });
    revealAsync(list);
  }

  /* ---------- 提交表单 ---------- */
  function initForm() {
    var form = $("#case-form");
    if (!form) return;

    function setError(id, msg) {
      var field = $("#" + id).closest(".field");
      var err = $(".field__error", field);
      var input = $("#" + id);
      if (msg) {
        field.classList.add("has-error");
        input.setAttribute("aria-invalid", "true");
        if (err) err.textContent = msg;
      } else {
        field.classList.remove("has-error");
        input.removeAttribute("aria-invalid");
        if (err) err.textContent = "";
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var title = $("#f-title").value.trim();
      var stage = $("#f-stage").value;
      var grade = $("#f-grade").value.trim();
      var hours = $("#f-hours").value.trim();
      var flow = $("#f-flow").value.trim();
      var outcome = $("#f-outcome").value.trim();
      var reflection = $("#f-reflection").value.trim();
      var context = $("#f-context").value.trim();
      var subject = $("#f-subject").value.trim();
      var teacher = $("#f-teacher").value.trim();
      var consent = $("#f-consent").checked;

      var ok = true;
      if (title.length < 4) { setError("f-title", "请填写至少 4 个字的案例标题。"); ok = false; } else setError("f-title", "");
      if (!stage) { setError("f-stage", "请选择学段。"); ok = false; } else setError("f-stage", "");
      if (!grade) { setError("f-grade", "请填写年级。"); ok = false; } else setError("f-grade", "");
      if (!hours) { setError("f-hours", "请填写课时。"); ok = false; } else setError("f-hours", "");
      if (flow.length < 2) { setError("f-flow", "请填写设计流程，用「、」或逗号分隔各环节。"); ok = false; } else setError("f-flow", "");
      if (outcome.length < 20) { setError("f-outcome", "请描述学生成果（至少 20 字），这是案例最有价值的部分。"); ok = false; } else setError("f-outcome", "");
      if (reflection.length < 20) { setError("f-reflection", "请写下你的反思（至少 20 字），真实的教学反思对同行最有帮助。"); ok = false; } else setError("f-reflection", "");
      if (!consent) { setError("f-consent", "需要确认公开授权后才能提交。"); ok = false; } else setError("f-consent", "");
      if (!ok) {
        var firstErr = $(".has-error input, .has-error textarea, .has-error select", form);
        if (firstErr) firstErr.focus();
        return;
      }

      var list = loadUserCases();
      var id = "user-" + Date.now().toString(36);
      list.push({
        id: id,
        title: title,
        stage: stage,
        grade: grade,
        subject: subject || "未注明",
        hours: hours,
        flow: flow.split(/[、，,;；\n]+/).map(function (s) { return s.trim(); }).filter(Boolean),
        outcome: outcome,
        reflection: reflection,
        context: context || "—",
        teacher: teacher,
        year: String(new Date().getFullYear())
      });
      saveUserCases(list);

      var refCode = "DT-" + id.toUpperCase();
      $("#success-ref").textContent = refCode;
      form.hidden = true;
      var success = $("#form-success");
      success.classList.add("is-visible");
      success.setAttribute("tabindex", "-1");
      success.focus();
    });

    var resetBtn = $("#btn-another");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        form.hidden = false;
        $("#form-success").classList.remove("is-visible");
        $("#f-title").focus();
      });
    }
  }

  /* ---------- 启动 ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initReveal();
    initCasesPage();
    initFeatured();
    initForm();
  });
})();
