/* 种子案例数据 — 字段契约见 DESIGN.md Section 3 双语约定
   stage 为稳定 ID（pl/ph/jh/sh/cross），展示标签经 i18n 字典映射；
   文本字段为 {zh, en} 语言对。 */
window.CASES_SEED = [
  {
    id: "case-001",
    title: { zh: "操场积水去哪儿了：校园雨水花园改造提案", en: "Where Does the Playground Water Go? A Campus Rain-Garden Proposal" },
    stage: "jh",
    grade: { zh: "七年级", en: "Grade 7" },
    subject: { zh: "科学 · 地理", en: "Science · Geography" },
    hours: { zh: "10 课时", en: "10 class hours" },
    flow: {
      zh: ["观察采访", "定义问题", "构思", "原型", "测试迭代", "公开提案"],
      en: ["Observe & interview", "Define", "Ideate", "Prototype", "Test & iterate", "Public pitch"]
    },
    outcome: {
      zh: "学生分组完成雨季校园积水点测绘图 4 份，用黏土与回收材料搭建 1:50 雨水花园沙盘模型 3 组，向后勤处提交了包含渗透量估算的《南门积水带改造提案书》，其中两个引流方案在次年暑假被纳入校园改造实际施工。",
      en: "Students mapped four waterlogged zones after rain, built three 1:50 rain-garden sand-table models from clay and recycled materials, and submitted a retrofit proposal with percolation estimates to the logistics office; two of the drainage designs were included in the actual campus renovation the following summer."
    },
    reflection: {
      zh: "最初学生把问题定义为『把水排走』，采访园艺师傅后才转向『把水留下来』——定义阶段的采访环节不能省。估算渗透量时数学老师进班支援，跨学科协作的协调成本比预想高，建议提前一周对齐课表。",
      en: "Students first defined the problem as 'draining the water away' and only shifted to 'keeping the water' after interviewing the school gardener — the empathy interviews in the define stage are non-negotiable. The math teacher had to join for the percolation estimates; cross-subject coordination cost more than expected, so align timetables a week ahead."
    },
    context: {
      zh: "雨季操场东侧大面积积水，学生课间无法活动。学生以校园真实空间为对象，学习渗透、径流等水文概念，并向学校后勤部门提出可落地的改造方案。",
      en: "Seasonal puddles made the east playground unusable between classes. Students studied a real campus space, learned infiltration and runoff concepts, and proposed buildable changes to the school's logistics office."
    },
    year: "2025"
  },
  {
    id: "case-002",
    title: { zh: "光盘行动 2.0：为食堂设计一个「刚刚好」的打饭系统", en: "Clean Plate 2.0: Designing a “Just Right” Lunch Serving System" },
    stage: "ph",
    grade: { zh: "五年级", en: "Grade 5" },
    subject: { zh: "综合实践 · 数学", en: "Integrated Practice · Math" },
    hours: { zh: "6 课时", en: "6 class hours" },
    flow: {
      zh: ["实地计量", "定义问题", "头脑风暴", "快速原型", "试行一周"],
      en: ["Field measurement", "Define", "Brainstorm", "Rapid prototyping", "One-week pilot"]
    },
    outcome: {
      zh: "学生连续 5 天计量各年级剩饭量并制成数据海报，设计出『大中小份自选 + 光盘积分卡』打饭方案，试行一周后食堂日均剩饭量下降约三成，积分卡规则被食堂永久采用并沿用至今。",
      en: "Students weighed leftover food across grades for five straight days and turned the data into posters; their 'three portion sizes + clean-plate points card' proposal cut daily leftovers by roughly a third during a one-week pilot, and the points rules were permanently adopted by the cafeteria."
    },
    reflection: {
      zh: "五年级学生的数据记录一开始误差很大，后来改用拍照加饭后称重的双人复核制才可靠。最大的收获是学生第一次意识到『打饭勺一勺的分量』也是可以被设计的系统变量。",
      en: "Fifth graders' measurement records were unreliable at first and only became solid after switching to photo logs with a two-person double-check. The biggest win: students realized for the first time that even 'one scoop of the serving spoon' is a system variable that can be designed."
    },
    context: {
      zh: "从学生每天亲历的午餐浪费切入，用计量、访谈（同学+食堂阿姨）建立共情，设计出让『吃多少打多少』变容易的机制。",
      en: "Starting from the food waste students witness at lunch every day, they measured, interviewed classmates and cafeteria staff to build empathy, and designed mechanisms that make 'take only what you'll eat' easy."
    },
    year: "2024"
  },
  {
    id: "case-003",
    title: { zh: "触摸校园：为视障伙伴设计无障碍校区地图", en: "Campus by Touch: An Accessible Map Co-designed with Visually Impaired Partners" },
    stage: "sh",
    grade: { zh: "高一", en: "Grade 10" },
    subject: { zh: "设计 · 信息技术", en: "Design · IT" },
    hours: { zh: "12 课时", en: "12 class hours" },
    flow: {
      zh: ["共情采访", "定义", "构思", "数字原型", "盲测迭代"],
      en: ["Empathy interviews", "Define", "Ideate", "Digital prototype", "Blind testing & iteration"]
    },
    outcome: {
      zh: "学生邀请市盲校两位学生到校体验并共同工作，产出包含触觉凸点版与语音导航小程序版的无障碍地图各 1 套，标注了 37 处台阶与坡道信息；语音版在校开放日被 200 余名访客试用。",
      en: "Working alongside two students from a municipal school for the blind, the class produced an accessible campus map in two forms — a tactile raised-line version and a voice-navigation mini app — covering 37 steps and ramps; the voice version was tried by over 200 visitors at the school open day."
    },
    reflection: {
      zh: "把『为盲人设计』变成『和盲人伙伴一起设计』是本案例的关键转折——共情采访被替换为持续两天的共同创作后，方案细节的可用性明显提升。学生反思稿里出现频率最高的一句话是『我们原来想象的需求是错的』。",
      en: "The turning point of this case was replacing 'design for the blind' with 'design together with blind partners' — once two days of co-creation replaced one-off empathy interviews, the usability of every detail improved visibly. The most frequent line in student reflections: 'the needs we imagined were wrong.'"
    },
    context: {
      zh: "与市盲校结对开展的双校共创项目。学生先蒙眼走完自己每天经过的校园，再与视障伙伴一起重新定义『好用的校园导航』。",
      en: "A twin-school co-creation project with a municipal school for the blind. Students first walked their own daily campus routes blindfolded, then redefined 'good campus navigation' together with visually impaired partners."
    },
    year: "2025"
  },
  {
    id: "case-004",
    title: { zh: "课间十分钟重启计划：低年级孩子的游戏工坊", en: "Recess Restart: A Game Workshop Run by Lower-Grade Kids" },
    stage: "pl",
    grade: { zh: "二年级", en: "Grade 2" },
    subject: { zh: "班本课程", en: "Class-based course" },
    hours: { zh: "5 课时", en: "5 class hours" },
    flow: {
      zh: ["观察记录", "说说烦恼", "画点子", "试玩", "投票上线"],
      en: ["Observe & record", "Share annoyances", "Sketch ideas", "Play-test", "Class vote"]
    },
    outcome: {
      zh: "全班用绘画记录了 42 个课间烦恼瞬间，产出 11 个自制游戏点子，其中『走廊寻宝格』『石头剪刀布电梯』等 3 个游戏经全班试玩投票后成为班级固定课间游戏，追逐打闹的违纪记录明显减少。",
      en: "The class documented 42 troublesome recess moments through drawings and generated 11 self-made game ideas; three of them — 'Corridor Treasure Grid' and 'Rock-Paper-Scissors Elevator' among them — became fixed class recess games after a play-test vote, and chasing-incident records dropped noticeably."
    },
    reflection: {
      zh: "低年级学生的『定义问题』要靠图片和表演完成，语言抽象能力有限，教师需要把每个环节拆得更小、更具体。投票环节意外成了最热烈的数学讨论——统计票数时孩子们主动提出了分组计数。",
      en: "For lower grades, 'defining the problem' has to happen through pictures and role-play — abstract language only goes so far, so the teacher must break every step into smaller, more concrete pieces. The vote unexpectedly became the liveliest math discussion: kids proposed group counting on their own to tally the ballots."
    },
    context: {
      zh: "针对课间追逐打闹与『不许出教室』两个极端，让学生自己观察、表达并设计出想玩、能玩、安全的课间游戏。",
      en: "Caught between chaotic chasing and 'no leaving the classroom', students observed, voiced, and designed the recess games they actually want to play — fun, playable, and safe."
    },
    year: "2024"
  },
  {
    id: "case-005",
    title: { zh: "不孤单的智能手机：帮社区老人跨越数字鸿沟", en: "Not Alone with a Smartphone: Helping Seniors Cross the Digital Divide" },
    stage: "jh",
    grade: { zh: "八年级", en: "Grade 8" },
    subject: { zh: "道德与法治 · 信息技术", en: "Ethics & Law · IT" },
    hours: { zh: "8 课时", en: "8 class hours" },
    flow: {
      zh: ["入户访谈", "定义痛点", "构思", "制作教学卡", "社区教学日"],
      en: ["Home visits", "Define pain points", "Ideate", "Make teaching cards", "Community teaching day"]
    },
    outcome: {
      zh: "学生入户访谈 12 位老人，整理出『挂号、打车、扫码、防诈骗』四大真实痛点，自制图文对照教学卡 6 套并在社区活动室开设 3 场『孙辈教学日』，累计服务老人 60 余人次，教学卡被社区服务中心留用。",
      en: "After interviewing 12 seniors at home, students distilled four real pain points — hospital appointments, ride-hailing, QR payments, scam prevention — made six illustrated teaching-card sets and ran three 'grandkids teaching days' in the community hall, serving 60+ senior visits; the community center kept the cards in use."
    },
    reflection: {
      zh: "学生起初设计的是『功能大全手册』，访谈后发现老人要的不是功能多，而是『步骤少、字够大、有人问』。有学生奶奶全程参与试讲，提出了『把图标画成菜场里的东西』这一被采纳的关键建议——家人成为设计伙伴是意外收获。",
      en: "Students initially designed an 'everything manual'; interviews showed seniors don't want more features but fewer steps, bigger type, and someone to ask. One student's grandmother joined the trial teaching all the way through and suggested 'draw the icons as things from the market' — adopted. Family members becoming design partners was the unexpected gain."
    },
    context: {
      zh: "基于社区共建关系开展的服务学习项目，学生以『孙辈』身份进入老人真实生活场景，用设计思维打磨一套真正好用的数字助老教学法。",
      en: "A service-learning project built on a community partnership: students enter seniors' real lives in the role of their 'grandkids' and use design thinking to shape a digital-help teaching method that actually works."
    },
    year: "2025"
  },
  {
    id: "case-006",
    title: { zh: "让黑板不再反光：教室光环境的护眼改造", en: "No More Blackboard Glare: An Eye-Friendly Classroom Lighting Retrofit" },
    stage: "cross",
    grade: { zh: "四至八年级选修班", en: "Grades 4–8 elective" },
    subject: { zh: "物理 · 环境系统与社会", en: "Physics · ESS" },
    hours: { zh: "6 课时", en: "6 class hours" },
    flow: {
      zh: ["光照测量", "定义", "跨班头脑风暴", "窗帘与布局原型", "数据对比验证"],
      en: ["Light measurement", "Define", "Cross-class brainstorm", "Curtain & seating prototypes", "Data-validated comparison"]
    },
    outcome: {
      zh: "学生用照度计完成了 6 间教室 72 个点位的光照测量，定位出黑板反光与后排照度不足两大问题，提出分时段窗帘开合表与 3 套座位轮换方案；试行两周后学生问卷报告『黑板看不清』的比例由 41% 降至 9%。",
      en: "Students measured illumination at 72 points across six classrooms, pinpointed blackboard glare and dim back rows, and proposed a time-based curtain schedule plus three seating rotation plans; in a two-week pilot, the share of students reporting 'can't see the board clearly' fell from 41% to 9%."
    },
    reflection: {
      zh: "这是小学与初中混龄组队的尝试：四年级学生负责贴点测量，八年级学生负责照度数据分析，混龄分工的效果好于预期，但两学段课时表几乎无法对齐，最终用『每周一次联合工作坊 + 班内分层任务』化解。",
      en: "A mixed-age experiment pairing primary and middle schoolers: fourth graders handled point-by-point measurement while eighth graders owned the data analysis — the cross-age division worked better than expected, but the two timetables barely aligned, finally solved with 'one joint workshop a week + tiered tasks back in class.'"
    },
    context: {
      zh: "从『上课看不清黑板』这个高频抱怨出发，学生用真实测量数据说服自己、再说服学校——一次数据驱动的环境改造小项目。",
      en: "Starting from the everyday complaint 'I can't see the board', students used real measurement data to convince themselves first, then the school — a small data-driven environment retrofit project."
    },
    year: "2024"
  }
];
