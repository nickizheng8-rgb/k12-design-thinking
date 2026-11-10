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
    year: "2026"
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
    year: "2026"
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
    year: "2026"
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
    year: "2026"
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
    year: "2026"
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
    year: "2026"
  },
  {
    id: "case-007",
    title: { zh: "旧校服去哪儿了：一场有温度的回收再造计划", en: "Where Do Old Uniforms Go? A Warm-Hearted Upcycling Campaign" },
    stage: "jh",
    grade: { zh: "七年级", en: "Grade 7" },
    subject: { zh: "化学 · 设计", en: "Chemistry · Design" },
    hours: { zh: "8 课时", en: "8 class hours" },
    flow: {
      zh: ["回收统计", "采访定义", "材料实验", "再造原型", "义卖展示"],
      en: ["Collection audit", "Interviews & define", "Material experiments", "Upcycling prototypes", "Charity sale"]
    },
    outcome: {
      zh: "学生清点并分类回收旧校服 217 件，访谈 40 名同学后发现『有纪念意义不舍得扔』是最大障碍；设计出帆布袋、抱枕、收纳袋 3 类再造品 14 件，在校义卖筹得 680 元捐给对口帮扶学校，回收流程被德育处写进每学年期末常规。",
      en: "Students collected and sorted 217 old uniforms and interviewed 40 classmates, finding that 'they carry memories, so I can't throw them away' was the biggest barrier; they designed 14 upcycled items in three lines — tote bags, cushions and storage pouches — raised 680 yuan for a partner school at a charity sale, and the recycling routine was written into the school's term-end procedures."
    },
    reflection: {
      zh: "化学老师本以为难点在面料识别，实际难点在情感：同学们不愿让『有故事的校服』变成材料。后来加入『给校服写一句话』环节，旧衣才真正进入回收箱。义卖定价完全由学生用成本加成法算出，比课堂练习扎实得多。",
      en: "The chemistry teacher expected fabric identification to be the hard part; the real difficulty was emotional — classmates refused to turn 'uniforms with stories' into raw material. Adding a 'write one sentence for your uniform' step finally moved clothes into the collection bins. Students priced the sale themselves with cost-plus math, a far more solid application than any worksheet."
    },
    context: {
      zh: "每年换季都有成堆旧校服被丢弃。学生从『浪费』的抱怨出发，用设计思维把情感障碍变成方案的一部分。",
      en: "Every season change leaves piles of discarded uniforms. Starting from complaints about waste, students used design thinking to turn the emotional barrier into part of the solution."
    },
    year: "2026"
  },
  {
    id: "case-008",
    title: { zh: "为校园流浪猫设计一个家", en: "Designing a Home for the Campus Stray Cats" },
    stage: "ph",
    grade: { zh: "四年级", en: "Grade 4" },
    subject: { zh: "科学 · 道德与法治", en: "Science · Ethics & Law" },
    hours: { zh: "6 课时", en: "6 class hours" },
    flow: {
      zh: ["观察投喂点", "定义需求", "画设计图", "搭建猫屋", "两周观察迭代"],
      en: ["Observe feeding spots", "Define needs", "Sketch designs", "Build cat shelters", "Two-week observation & iteration"]
    },
    outcome: {
      zh: "学生连续两周定点观察校园 3 只流浪猫的活动路线与躲雨习惯，总结出『保暖、防潮、有两个出口』的设计标准；用木条和防水布搭建 2 座猫屋，经 3 次位置调整后被猫稳定使用，24 篇观察日记成为班级阅读角最受欢迎的材料。",
      en: "Over two weeks students tracked the routes and rain-shelter habits of three campus stray cats and derived design criteria — warm, dry, with two exits; they built two shelters from wood strips and waterproof cloth, relocated them three times before the cats settled in, and the 24 observation journal entries became the reading corner's most popular material."
    },
    reflection: {
      zh: "孩子们最初的猫屋画满了蝴蝶结和铃铛——『用户需求』这一课是猫教的：第一版猫屋因为放在人多的操场边被猫回避了整整一周。把『猫是否住进去』作为唯一评价标准后，所有讨论突然变得务实。",
      en: "The children's first drawings were covered in ribbons and bells — the lesson about 'user needs' was taught by the cats themselves: version one sat ignored for a whole week beside the busy playground. Once 'do the cats actually move in' became the only success criterion, every discussion turned practical."
    },
    context: {
      zh: "校园流浪猫冬天没有固定的避风处，学生想帮忙但喂食反而引来矛盾。项目让关爱落地为可验证的设计。",
      en: "Campus stray cats had no sheltered spot in winter; students wanted to help but feeding caused friction. The project turned care into verifiable design."
    },
    year: "2026"
  },
  {
    id: "case-009",
    title: { zh: "给放学路做安全设计", en: "Designing a Safer Walk Home from School" },
    stage: "jh",
    grade: { zh: "八年级", en: "Grade 8" },
    subject: { zh: "地理 · 数学", en: "Geography · Math" },
    hours: { zh: "7 课时", en: "7 class hours" },
    flow: {
      zh: ["路口蹲点计数", "绘制风险地图", "采访交警和家长", "方案设计", "提案路演"],
      en: ["Junction counts", "Risk mapping", "Interviews with police & parents", "Solution design", "Proposal roadshow"]
    },
    outcome: {
      zh: "学生在上下学高峰对校门口 4 个路口做了 3 天人流车流计数，绘制带热力标注的风险地图 1 套，识别出『对向车流视觉盲区』等 5 个风险点；设计的错峰放学与家长等候区划线方案被交警中队采纳试用，试点周事故零发生、接娃平均等候时间缩短 8 分钟。",
      en: "Students counted pedestrian and vehicle flows for three days at four junctions around the school gate, produced a risk map with heat annotations identifying five danger points including a sight-line blind spot against oncoming traffic; their staggered dismissal and painted parent waiting-zone proposal was trialed by the local traffic police — zero incidents in the pilot week and average pick-up waits shortened by 8 minutes."
    },
    reflection: {
      zh: "数学课学的平均数第一次有了『让交警点头』的分量。最大的意外是家长比想象中抗拒改变接娃习惯，学生们不得不给方案加了一周的双语告示和现场引导——说服用户的时间要算进课时。",
      en: "Averages from math class finally carried the weight of getting a nod from traffic police. The biggest surprise: parents resisted changing pick-up habits more than expected, and students had to add a week of bilingual notices and on-site guiding — time spent persuading users must be budgeted into the hours."
    },
    context: {
      zh: "校门口放学时段的交通混乱是每个学校的老大难。学生用真实数据代替『我觉得危险』，向成人世界提出有依据的方案。",
      en: "After-school chaos at the school gate is every school's chronic headache. Students replaced 'I feel it's dangerous' with real data and proposed evidence-based solutions to the adult world."
    },
    year: "2026"
  },
  {
    id: "case-010",
    title: { zh: "让沉睡的书被借走：图书馆滞销书唤醒计划", en: "Waking the Sleeping Books: A Library Revival Project" },
    stage: "sh",
    grade: { zh: "高二", en: "Grade 11" },
    subject: { zh: "信息技术 · 设计", en: "IT · Design" },
    hours: { zh: "9 课时", en: "9 class hours" },
    flow: {
      zh: ["借阅数据分析", "读者访谈", "定义『沉睡书』", "漂流角与推荐卡设计", "一个月数据追踪"],
      en: ["Borrowing-data analysis", "Reader interviews", "Define 'sleeping books'", "Drift-corner & recommendation card design", "One-month data tracking"]
    },
    outcome: {
      zh: "学生分析图书馆近三年 12,000 条借阅记录，找出 1,300 余本零借阅图书，访谈 26 位读者后定位出『找不到、不知道、不感兴趣』三类原因；设计『主题漂流角 + 手写推荐卡』方案上线一个月，滞销书借出量从 0 提升到 103 册，推荐卡被图书馆员做成常设栏目。",
      en: "Analyzing 12,000 borrowing records from three years, students identified 1,300+ books with zero checkouts and, after interviewing 26 readers, traced the causes to three buckets — can't find it, never heard of it, not interested; their 'theme drift corner + handwritten recommendation cards' scheme lifted dormant-book checkouts from zero to 103 volumes in one month, and the librarian made the cards a permanent feature."
    },
    reflection: {
      zh: "学生最初想做一个图书推荐 App，但接入图书馆系统成本太高；漂流角半天就落地。教训是『先做能立刻验证的最小方案』。另一个收获：手写推荐卡的情绪价值远超算法——『这本书让我哭过』比任何标签都有效。",
      en: "Students first pitched a book-recommendation app, but the cost of touching the library system was too high; the drift corner launched in half a day. The lesson: build the smallest solution you can verify immediately. Another takeaway — handwritten cards carry emotional value no algorithm matches; 'this book made me cry' outperforms any tag."
    },
    context: {
      zh: "图书馆藏书越买越多，借阅率却逐年下降。学生用真实借阅数据做『图书体检』，让沉睡的书重新被需要。",
      en: "The library keeps buying more books while borrowing rates keep falling. Students ran a 'health check' on the collection with real data, making sleeping books needed again."
    },
    year: "2026"
  },
  {
    id: "case-011",
    title: { zh: "课桌椅匹配行动：为长高的我们换桌椅", en: "The Desk-Height Match: Right Furniture for Growing Bodies" },
    stage: "cross",
    grade: { zh: "五至七年级", en: "Grades 5–7" },
    subject: { zh: "生物 · 数学", en: "Biology · Math" },
    hours: { zh: "5 课时", en: "5 class hours" },
    flow: {
      zh: ["身高桌椅普测", "标准对照", "跨班提案", "调换执行", "舒适度回访"],
      en: ["Height & desk survey", "Standard comparison", "Cross-class proposal", "Swap execution", "Comfort follow-up"]
    },
    outcome: {
      zh: "学生测量 6 个班级 312 套课桌椅与使用者身高，按国家标准算出 47% 的桌椅高度不匹配；制作『桌椅身高对照卡』贴到每间教室，推动后勤完成 3 个班级的整体调换，回访显示写作业时『腿顶着桌子』的报告率从 38% 降到 6%。",
      en: "Students measured 312 desk-chair sets and their users across six classes, finding 47% mismatched against national standards by height; they posted a self-made 'desk-height comparison card' in every classroom and pushed the logistics office to complete swaps for three whole classes — follow-up showed reports of 'knees hitting the desk' dropping from 38% to 6%."
    },
    reflection: {
      zh: "数据本身不会改变学校，会沟通才会：学生第一次提案被搁置，第二次附上了教室实拍对比照和各班签名，才推动调换。人体工学国标检索是信息课没教过的真实检索场景。",
      en: "Data alone doesn't change a school — communication does: the first proposal was shelved, and only the second, with side-by-side classroom photos and signatures from each class, moved the logistics office. Looking up ergonomic national standards was a real retrieval task no IT lesson had ever set."
    },
    context: {
      zh: "『桌子太矮了』是学生每天都在说的话，却从来没人量过。项目让学生为自己每天 8 小时相伴的家具做一次数据驱动的优化。",
      en: "'The desk is too low' is something students say every day, yet no one had ever measured. The project has students data-optimize the furniture they sit with eight hours a day."
    },
    year: "2026"
  },
  {
    id: "case-012",
    title: { zh: "一顿年夜饭的碳足迹：低碳家宴改造", en: "The Carbon Footprint of a Family Feast: A Low-Carbon New Year's Dinner" },
    stage: "sh",
    grade: { zh: "高一 ESS 班", en: "Grade 10 ESS class" },
    subject: { zh: "环境系统与社会 · 化学", en: "ESS · Chemistry" },
    hours: { zh: "8 课时", en: "8 class hours" },
    flow: {
      zh: ["家宴食材清单", "碳足迹核算", "低碳替代构思", "试做家宴", "家庭反馈收集"],
      en: ["Menu ingredient audit", "Carbon-footprint accounting", "Low-carbon substitution ideation", "Trial cooking", "Family feedback collection"]
    },
    outcome: {
      zh: "21 名学生各自核算自家一顿年夜饭的碳足迹（覆盖 4 个菜系、人均 18.6 kg CO₂e），共同编写《低碳年菜替换手册》：红烧肉换菌菇炖鸡、空运虾改本地鱼等 12 条替换建议；12 个家庭试做低碳版家宴，人均碳足迹下降 31%，手册被社区公众号转载。",
      en: "Twenty-one students each audited their family's New Year's Eve dinner (covering four regional cuisines, 18.6 kg CO₂e per person on average) and co-authored a low-carbon substitution handbook with 12 swaps — braised pork to mushroom chicken stew, flown-in prawns to local fish; twelve families cooked the low-carbon versions, cutting per-person footprint by 31%, and the handbook was reposted by a community WeChat account."
    },
    reflection: {
      zh: "碳核算网上工具给的数字打架，学生学会了标注数据来源和不确定性——这比得出一个漂亮数字更接近真实的科学。有学生家长从抵触到主动问『那牛肉换鸡肉能减多少』，家庭对话本身就是这门课的成果。",
      en: "Online carbon calculators gave conflicting numbers, and students learned to flag data sources and uncertainty — closer to real science than a neat figure. One parent moved from resistance to asking 'how much would swapping beef for chicken save'; the dinner-table conversation itself was the deliverable."
    },
    context: {
      zh: "把『气候变化』从课本拉到年夜饭的餐桌上：每个家庭的一顿饭，就是最贴身的数据样本和最有共鸣的行动起点。",
      en: "Pulling 'climate change' from the textbook onto the New Year's dinner table: every family's one meal is the most personal data sample and the most relatable starting point for action."
    },
    year: "2026"
  },
  {
    id: "case-013",
    title: { zh: "改造我们自己的设计思维教室", en: "Renovating Our Own Design Thinking Classroom" },
    stage: "jh",
    grade: { zh: "七年级", en: "Grade 7" },
    subject: { zh: "劳动 · 设计", en: "Labor Practice · Design" },
    hours: { zh: "10 课时", en: "10 class hours" },
    flow: {
      zh: ["使用观察", "痛点访谈", "分区规划", "原型改造", "使用回访"],
      en: ["Usage observation", "Pain-point interviews", "Zone planning", "Prototype renovation", "Usage follow-up"]
    },
    outcome: {
      zh: "学生用两周记录本班教室的真实使用方式，访谈 28 名同学和任课教师后收拢出三大核心痛点：材料收纳混乱、固定课桌阻碍小组协作、作品没有展示处；产出两套分区方案并落地『可拼组桌椅布局 + 材料自取墙 + 作品轮展轨』三项改造，回访显示课前桌椅重组时间由 7 分钟缩短到 2 分钟，材料『找不到』的报告率下降七成。",
      en: "Recording how their own classroom was actually used for two weeks and interviewing 28 classmates and teachers, students distilled three core pain points — chaotic material storage, fixed desks blocking group work, and nowhere to display work; they produced two zoning schemes and delivered three renovations: a reconfigurable desk layout, a self-serve materials wall, and a rotating work-display rail. Follow-up showed desk re-grouping time before class dropping from 7 minutes to 2, and 'can't find the materials' reports down by seventy percent."
    },
    reflection: {
      zh: "改造涉及预算和后勤审批，学生学会了在『想要』与『能改』之间分层推进：零成本的桌椅重排先行，低成本的自制材料墙次之，大改造写成提案交学校。『拆掉讲台』的提议被否决后，小组才真正理解约束也是设计的一部分。",
      en: "Renovation meant budgets and approvals, so students learned to layer 'want' against 'can': zero-cost desk rearrangement first, low-cost self-built storage next, and big changes written up as a proposal to the school. After the 'remove the lectern' idea was vetoed, the team finally understood that constraints are part of the design."
    },
    context: {
      zh: "设计思维课自己的教室体验却很糟：储物乱、桌子固定、作品没处放。学生决定用刚学会的方法，把这间教室当成第一个真实用户来改造。",
      en: "The design thinking classroom itself was a poor experience: messy storage, fixed desks, nowhere to show work. Students decided to apply their new method to the room they use every week — treating it as their first real user."
    },
    year: "2026"
  },
  {
    id: "case-014",
    title: { zh: "让角落安静下来：校园噪音治理计划（Sound Controlling Project）", en: "Sound Controlling Project: Quieting the Campus Corner" },
    stage: "jh",
    grade: { zh: "八年级", en: "Grade 8" },
    subject: { zh: "物理 · 信息技术", en: "Physics · IT" },
    hours: { zh: "9 课时", en: "9 class hours" },
    flow: {
      zh: ["分贝测量", "噪音溯源", "降噪构思", "软硬方案原型", "两周复测"],
      en: ["Decibel measurement", "Source tracing", "Noise-control ideation", "Soft & hard prototypes", "Two-week re-measurement"]
    },
    outcome: {
      zh: "学生用分贝仪对教学楼连廊拐角完成 5 天点位测量，记录到课间噪音峰值 78 分贝（一墙之隔的自习室窗边 62 分贝），溯源出三个成因：硬质墙面的声音反射、无引导的穿行动线、口头提醒收效甚微；组合方案包含自制吸音板装饰面 6 块、地面箭头动线贴纸与『轻声公约』加分贝显示屏提示，两周复测峰值降至 64 分贝，自习室相关投诉清零。",
      en: "Measuring five days at the teaching-building corridor corner with sound-level meters, students logged lunch-break peaks of 78 dB (62 dB by the study-room window one wall away) and traced three causes: sound-reflecting hard walls, unguided foot traffic, and verbal reminders that barely worked; their combined fix — six self-made acoustic panels, floor arrow stickers to guide flow, and a 'quiet charter' with a live decibel display — brought peaks down to 64 dB in a two-week re-measurement, with study-room complaints dropping to zero."
    },
    reflection: {
      zh: "学生原以为『贴禁止喧哗标语』最有效，实测几乎不起作用——数据让班级从道德说教转向环境设计。吸音材料的防火等级是后勤把关时补上的硬约束；物理课的反射与吸声概念第一次长在了真实空间里。",
      en: "Students assumed 'no shouting' signs would work best — measurement showed they barely did, and data moved the class from moralizing to environmental design. The fire rating of acoustic materials was a hard constraint added when the logistics office stepped in; reflection and absorption from physics class finally lived in a real space."
    },
    context: {
      zh: "教学楼连廊拐角是全校最吵的位置，紧邻的自习室和两个班级常年受扰。学生决定不做『安静倡议』，而是用测量和设计真正降低分贝。",
      en: "The corridor corner is the loudest spot on campus, troubling the study room and two classrooms next door year-round. Students chose measurement and design over yet another 'keep quiet' campaign — the goal was real decibels, not slogans."
    },
    year: "2026"
  },
  {
    id: "case-015",
    title: { zh: "新生不迷路：开学季校园导视系统设计", en: "No More Lost Newcomers: A Campus Wayfinding System for Opening Week" },
    stage: "jh",
    grade: { zh: "七年级", en: "Grade 7" },
    subject: { zh: "美术 · 信息技术", en: "Art · IT" },
    hours: { zh: "8 课时", en: "8 class hours" },
    flow: {
      zh: ["迷路跟踪", "标识盘点", "新生访谈", "导视设计", "开学实测"],
      en: ["Lost-walk shadowing", "Signage audit", "New-student interviews", "Wayfinding design", "First-day field test"]
    },
    outcome: {
      zh: "学生跟踪记录 15 名新生入学首周的问路经历（累计 42 次），盘点全校标识 86 处，发现 31 处缺失或指代不清；设计出统一色块楼层标识、地面导流线与楼梯口『问路二维码』导航卡共 3 类 57 处，次年开学首周新生问路次数降至 9 次，方案由总务处制成常设标识。",
      en: "Shadowing 15 new students through their first week (42 requests for directions in total) and auditing all 86 signs on campus, students found 31 missing or ambiguous; they designed three kinds of wayfinding — color-coded floor signage, floor-flow lines, and stairwell 'ask-the-way QR' navigation cards — 57 installations in all. Lost-direction requests in the next opening week fell to 9, and the general affairs office made the system permanent."
    },
    reflection: {
      zh: "学生最初想做一块酷炫的电子导览屏，被预算否决后改用『印刷标识 + 二维码』组合，『最便宜能落地的方案』从此成为组内口头禅。手绘导视平面图时才发现，美术课学的比例尺第一次派上了真实用场。",
      en: "Students first pitched a flashy digital navigation screen; the budget veto pushed them to a 'printed signage + QR code' combo, and 'the cheapest thing that can actually ship' became the team's mantra. Sketching the wayfinding floor plans, they realized the scale from art class had found its first real use."
    },
    context: {
      zh: "每年开学，新生都会在综合楼里找错教室——标识残缺、口径不一，靠问路撑过九月。学生决定把『问路』变成一个可以被设计的系统问题。",
      en: "Every September, new students get lost in the main building — signs are broken and inconsistent, and asking around is the only navigation. Students decided to turn 'asking the way' into a system that can be designed."
    },
    year: "2026"
  },
  {
    id: "case-016",
    title: { zh: "给书包减重：超重书包的调查与储物改造", en: "Lighten the Load: An Overweight Backpack Survey and Storage Redesign" },
    stage: "jh",
    grade: { zh: "七年级", en: "Grade 7" },
    subject: { zh: "生物 · 数学", en: "Biology · Math" },
    hours: { zh: "6 课时", en: "6 class hours" },
    flow: {
      zh: ["称重普查", "比例计算", "原因访谈", "储物改造", "两周坚持追踪"],
      en: ["Weigh-in census", "Ratio calculation", "Cause interviews", "Storage redesign", "Two-week habit tracking"]
    },
    outcome: {
      zh: "学生称量全班 44 个书包并对照体重，算出平均超重 15%（最重达体重的 24%），访谈后定位主因是『课间没时间回储物柜』；设计『课时分区携带清单 + 储物柜分层贴标 + 周五清仓制』组合方案，两周追踪后书包平均减重 1.1 千克，超重人数比例从 82% 降到 34%，校医将『书包体重对照卡』张贴进医务室。",
      en: "Weighing all 44 backpacks in the class against body weight, students calculated an average 15% overload (the heaviest at 24%) and traced the main cause to 'no time to return to the locker between classes'; their combined fix — a per-period carry list, layered locker labels, and a Friday clean-out rule — cut average backpack weight by 1.1 kg in two weeks, with the overloaded share dropping from 82% to 34%. The school nurse posted the students' weight-comparison card in the clinic."
    },
    reflection: {
      zh: "调查数据摊开后，家长群比班级先沸腾——学生的调查报告第一次被家长主动转发。最难的不是给出减重建议，而是『坚持两周』：孩子们自发发明了同桌互查打卡，让大家明白行为设计比知识传授难教得多。",
      en: "Once the survey data went public, the parent chat group boiled over before the class did — the first time students saw their own report forwarded by parents. The hard part was never the weight-loss advice but 'sticking with it for two weeks': kids invented desk-mate check-ins on their own, and everyone learned that designing behavior is far harder to teach than knowledge."
    },
    context: {
      zh: "医生建议书包不超过体重的 10%，但学生背着的书包普遍超了。项目用秤和比例把一句养生常识变成自己班级的真实数据与行为改造。",
      en: "Doctors say a backpack should weigh no more than 10% of body weight — most students carry far more. The project turns that health rule of thumb into real class data and a behavior redesign."
    },
    year: "2026"
  },
  {
    id: "case-017",
    title: { zh: "不只是 I like…：Y6 创意自我介绍发布会", en: "Introduce Yourself in a Creative Way: The Y6 Launch Event" },
    stage: "ph",
    grade: { zh: "Y6（六年级）", en: "Year 6" },
    subject: { zh: "英语 · 班本课程", en: "English · Class-based course" },
    hours: { zh: "5 课时", en: "5 class hours" },
    flow: {
      zh: ["搭档深挖访谈", "定义记忆点", "创意构思", "原型制作", "发布会与互评"],
      en: ["Partner deep-dive interview", "Define your memory hook", "Creative ideation", "Prototype making", "Launch event & peer review"]
    },
    outcome: {
      zh: "全班 36 名学生每人完成一件创意自我介绍作品，涵盖『猜猜我是谁』互动卡、漫画海报、90 秒英文短视频、随身物收藏盒等 5 类形式；发布会当天人人登台，英文开口发言率由前测的 45% 升至 83%，班级互评选出『最想认识的同学』12 名并结成新同桌，作品墙成为家长开放日的打卡点。",
      en: "All 36 students produced a creative self-introduction piece across five formats — 'guess who' interactive cards, comic posters, 90-second English videos, personal-object collection boxes and more; everyone presented on launch day, the share of students willing to speak English on stage rose from 45% (pre-test) to 83%, peer votes elected 12 'classmates I most want to know' who became new desk mates, and the work wall became the photo stop of the parents' open day."
    },
    reflection: {
      zh: "学生最初的介绍全是『我叫……我喜欢……』——搭档深挖访谈才挖出『我收集了 27 架纸飞机』这样被记住的细节。上台前的英语焦虑是真实的：同桌排练两遍再登台成了固定动作；最安静的学生靠一只模型飞机完成了全场最难忘的介绍。",
      en: "Early drafts were all 'My name is… I like…' — the partner deep-dive interview surfaced memorable details like 'I have folded 27 paper planes.' Stage anxiety in English was real: rehearsing twice with a desk mate became the fixed ritual before going on stage, and the quietest student gave the most unforgettable intro of the day with a single model plane."
    },
    context: {
      zh: "新班级成立第一周，彼此还叫不出名字。让学生把『自我介绍』当成一个设计挑战：用户是即将共处一年的同学，目标是被真正记住。",
      en: "Week one of a brand-new class, when names are still fuzzy. Students treat 'introduce yourself' as a design challenge: the users are the classmates they will spend the year with, and the goal is to be genuinely remembered."
    },
    year: "2026"
  },
  {
    id: "case-018",
    title: { zh: "改造校园快递货架：让取件不再翻找", en: "Overhauling the Campus Delivery Shelf: A Pickup-Flow Redesign" },
    stage: "sh",
    grade: { zh: "高二", en: "Grade 11" },
    subject: { zh: "数学 · 通用技术", en: "Math · General Technology" },
    hours: { zh: "9 课时", en: "9 class hours" },
    flow: {
      zh: ["高峰计时观察", "货架测绘", "取件访谈", "分区编号设计", "两周复测"],
      en: ["Peak-hour timing", "Shelf mapping", "Pickup interviews", "Zoning & numbering design", "Two-week re-measurement"]
    },
    outcome: {
      zh: "学生在午间高峰蹲点一周，实测收发室日均包裹 300 余件、平均取件排队 11 分钟；访谈 60 名师生定位三大痛点：无排序规则、生鲜与大件混放、错拿频发；设计『姓氏拼音分区 + 生鲜文件大件分色 + 取件动线单循环』方案，两周复测平均取件时间降至 4 分钟，错拿丢失投诉由每周 8 起降为零，方案被收发室阿姨固化为日常规则。",
      en: "Spending a week of lunchtime observation at the mail room (300+ packages a day, average queue 11 minutes), students interviewed 60 teachers and students and pinned down three pain points — no sorting rules, fresh food mixed with large parcels, frequent mix-ups; their redesign — pinyin-surname zones, color-coded fresh/document/oversized sections, and a one-way pickup flow — brought average pickup time down to 4 minutes in a two-week re-measurement, cut mix-up reports from eight per week to zero, and the mail-room keeper made the rules permanent."
    },
    reflection: {
      zh: "学生最初想做智能快递柜，一问价格便作罢——『先排序，再上技术』成了项目口号。分色标签加地面箭头只花半天就改造完成。数据采集要占用午休，小组排班时才发现连『测多久才够』都要先设计。",
      en: "Students first pitched smart parcel lockers, then priced them out — 'sort first, tech later' became the project slogan. The color-coded labels and floor arrows took half a day to install. Data collection ate into lunch breaks, and the team only then realized even 'how long is enough measuring' needed designing."
    },
    context: {
      zh: "网购是校园生活的一部分，但收发室的货架半年没被『设计』过。学生把每天都要排队的地方当成第一个服务设计对象。",
      en: "Online shopping is part of campus life, yet the mail-room shelf had gone half a year without anyone designing it. Students took the queue they stood in every day as their first service-design subject."
    },
    year: "2026"
  },
  {
    id: "case-019",
    title: { zh: "如何提升动物园营业额：给真实甲方的增收提案", en: "How to Grow Zoo Revenue: A Proposal for a Real Client" },
    stage: "sh",
    grade: { zh: "高一", en: "Grade 10" },
    subject: { zh: "经济 · 商业研习", en: "Economics · Business Studies" },
    hours: { zh: "12 课时", en: "12 class hours" },
    flow: {
      zh: ["客户需求界定", "客流收入数据分析", "游客访谈与动线观察", "增收方案构思", "园方路演"],
      en: ["Client briefing", "Visitor & revenue data analysis", "Guest interviews and flow observation", "Revenue idea ideation", "Proposal roadshow to the zoo"]
    },
    outcome: {
      zh: "学生受市动物园委托分析近三年票务数据，发现客流高度集中于周末、二次消费占比不足 8%；120 份游客访谈定位出『可看性低、互动少、没有记忆点』三大问题；产出三组增收方案——动物投喂体验时段、周末研学课程包、亲子会员卡——园方采纳研学课程包试点，试点月二次消费提升 21%，周末客流增长 13%。",
      en: "Commissioned by a city zoo, students analyzed three years of ticketing data and found visits concentrated on weekends with secondary spending under 8%; 120 visitor interviews traced the problems to low watchability, little interaction, and no memorable moments. They produced three revenue streams — animal-feeding experience sessions, weekend study-course packages, and a parent-child membership card; the zoo piloted the course package, lifting secondary spending 21% and weekend visits 13% in the pilot month."
    },
    reflection: {
      zh: "真实商业数据是敏感的：园方只开放部分票务数据，学生学会用停车场车辆数交叉估算客流——在不完整信息下做判断是商赛里学不到的一课。第一次面对真正的『甲方』，提案 PPT 被要求改了三版，学生才懂『说服比正确更重要』。",
      en: "Real business data is sensitive: the zoo opened only part of its ticketing records, and students learned to cross-estimate visitor numbers from parking-lot counts — a lesson in judging with incomplete information that no business competition had taught. Facing a real client for the first time, their deck came back for three rounds of revision; being persuasive, they found, matters more than being right."
    },
    context: {
      zh: "把商业研习课堂搬进真实动物园：收入 = 客流 × 转化 × 客单价，这次每一项都要用真实数据说话，甲方是认真等待提案的园方。",
      en: "Taking the business-studies classroom into a real zoo: revenue = traffic × conversion × spend per visitor — and this time every term has to be argued with real data, for a client actually waiting for the proposal."
    },
    year: "2026"
  }
];
