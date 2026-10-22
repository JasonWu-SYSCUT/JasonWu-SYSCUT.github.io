import type {
  Award,
  Direction,
  EducationItem,
  ExperienceItem,
  Metric,
  NavItem,
  Product,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "首页" },
  { id: "expertise", label: "技术方向" },
  { id: "products", label: "AI4S 产品" },
  { id: "experience", label: "经历" },
  { id: "contact", label: "联系方式" },
];

export const METRICS: Metric[] = [
  {
    value: "7",
    label: "SCI Publications",
    desc: "生物医药与人工智能交叉研究成果",
  },
  {
    value: "12.86M",
    label: "Raw Data Records",
    desc: "大规模分子数据处理与标准化经验",
  },
  {
    value: "1,800+",
    label: "ML / DL Models",
    desc: "大规模模型训练、优化与系统性评估经验",
  },
];

export const DIRECTIONS: Direction[] = [
  {
    id: "harness",
    index: "03",
    title: "Tencent Harness Engineering",
    subtitle: "Harness工程 & Agent策略",
    intro:
      "面向通用 Agent 产品与垂直领域场景，开展 Harness 架构、工具编排、TeamAgent 协同和垂类Agent的设计与工程实践",
    tags: ["Agent Systems", "Harness", "TeamAgent", "Tool Orchestration", "Multi-Agent"],
    image:
      "images/proj-harness.png",
    modal: {
      overview:
        "在腾讯实习期间，围绕通用型 Agent 的 Harness Engineering，对真实业务场景中的智能体进行能力构建、执行成本性能优化和多智能体协作。",
      keyWork: [
        "垂直领域智能体WebAgent的构建实现与测评调优",
        "通用 Agent 系统的 Harness 架构开发，如工具调用、任务编排与上下文工程",
        "TeamAgent 多智能体协同作业系统的设计、实现与调优",
        "通用 Agent 型工具的桌面App开发",
      ],
      expertise: [
        "Agent Architecture",
        "Harness Engineering",
        "TeamAgent",
        "Tool Calling",
        "Workflow Orchestration",
      ],
      results: [
        "在真实业务场景中参与智能体能力构建与Harness工程开发，积累从任务拆解到执行落地的完整工程经验，掌握Harness工程架构设计。",
        "构建了垂类智能体WebAgent,达到行业内竞品的同级水平表现",
        "积累了对 TeamAgent 多智能体系统设计构建的深刻理解、工程实现与优化经验。",
      ],
    },
  },
  {
    id: "ai4s",
    index: "02",
    title: "AI4S Agentic Workflows",
    subtitle: "科研智能体与工作流工程",
    intro:
      "面向生物医学科研数据与复杂科研任务，探索 LLM 驱动的数据处理工作流、知识工程、Agentic RAG 与科研流程智能体化，实现 AI 与传统科研工作流的深度融合。",
    tags: ["LLM Workflows", "Agentic RAG", "GraphRAG", "Biomedical Data"],
    image:
      "images/proj-ai4s.png",
    modal: {
      overview:
        "研究人工智能技术在生物医学领域的文献阅读、数据分析、可视化展示与模型训练等科研流程中的运用，将传统以规则、脚本和人工操作为主的工作流，与 LLM、Agent、自主工具调用和知识检索技术结合。",
      keyWork: [
        "大规模生物医学文献与异构数据的自动化收集、清洗、解析和结构化处理",
        "搭建 LLM 工作流完成复杂生物医学数据分类、抽取、标注和知识组织",
        "持续自动化更新的高质量领域知识库，赋能垂类智能体自我成长",
        "基于领域语料库构建 RAG 与 GraphRAG Agent",
        "使用复杂任务拆解、意图路由和多轮工具调用完成科研问题求解",
        "将科研领域的传统处理流程转化为更加智能、自动化的 AI 工作流",
      ],
      expertise: [
        "Biomedical Data Engineering",
        "LLM Workflow",
        "Agentic GraphRAG",
        "Knowledge Graph",
      ],
      results: [
        "含 3800+ 细分领域的大型标准化知识框架下的自动化归类",
        "面向大规模科研文献的结构化处理、解析抽提与知识图谱构建",
        "GraphRAG 系统相关评估中，整体问答准确率及知识完整度相对早期 Naive RAG 提升 20%+。",
        "相关能力沉淀于 ArticleBase、BioTreasury、BioCurateGPT 等代表成果。",
      ],
    },
  },
  {
    id: "aidd",
    index: "01",
    title: "AI-Driven Drug Discovery",
    subtitle: "人工智能辅助药物研发",
    intro:
      "面向抗肿瘤、抗病毒及激酶相关药物发现任务，开展多来源分子数据治理、SMILES分子表征、单/多任务建模及系统评测，探索以数据和模型支持候选分子筛选。。",
    tags: [
      "Drug Discovery",
      "Molecular ML",
      "Deep Learning",
      "Feature Engineering",
    ],
    image:
      "images/proj-aidd.png",
    modal: {
      overview:
        "围绕药物研发流程，将生物医药知识与机器学习方法结合，系统研究数据质量、分子表示、模型架构对分子性质及生物活性预测的影响。",
      keyWork: [
        "面对大规模多源异构药物分子记录，完成数据获取、清洗、标准化与样本构建，形成约714万条高质量标注数据。",
        "针对生物活性数据的长尾分布和类别不平衡，设计递进式负样本筛选与动态填充策略，改善下游模型的数据质量。",
        "基于分子指纹SMILES、分子描述符和分子图等11种表征方案，对比12类ML/DL算法在不同预测任务中的适用性。",
        "完成62套单/多任务方案、1800+模型的批量训练、超参优化与系统评测，重点考察模型性能、稳定性与泛化能力.",
      ],
      expertise: [
        "Python",
        "PyTorch",
        "RDKit",
        "Molecular Representation",
        "ML / DL",
        "Model Evaluation",
      ],
      results: [
        "建立从原始数据清洗、特征工程到模型训练与评估的完整建模流水线",
        "通过多方案横向对比，形成对模型泛化能力与多维度性能评估的系统性认识",
        "积累了针对癌细胞、抗癌靶标、病毒蛋白、疾病通路酶蛋白的药物性质预测算法设计经验"
      ],
    },
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "articlebase",
    name: "ArticleBase",
    en: "Scientific Knowledge & Agentic RAG",
    desc: "面向科研文献的智能知识组织与问答平台，支持领域文献管理、知识库检索、GraphRAG 及科研智能体应用。",
    tags: ["Agentic RAG", "Knowledge Base"],
    icon: "images/icon-articlebase-nobg.png",
    href: "https://articlebase.cn/",
    hrefLabel: "Visit Site",
  },
  {
    id: "wenxian-toutiao",
    name: "文献头条",
    en: "Scientific Literature Monitoring & Curation",
    desc: "持续追踪前沿学术期刊最新论文，结合 AI 辅助分类与内容解读，帮助科研人员高效了解最新研究进展。",
    tags: ["文献解析", "微信小程序"],
    icon: "images/icon-wenxian-toutiao-nobg.png",
    isQr: true,
  },
  {
    id: "biogdp",
    name: "BioGDP",
    en: "Biomedical Scientific Illustration",
    desc: "生物医学科研绘图与图形资源平台，提供专业的生命科学插图素材、可编辑图形和科研示意图模板，帮助研究人员高效制作科学插图。",
    tags: ["科研绘图", "前端JS工程"],
    icon: "images/icon-biogdp-nobg.png",
    href: "https://biogdp.com/",
    hrefLabel: "Visit Site",
    paper: "https://academic.oup.com/nar/article/53/D1/D1670/7848844",
    impactFactor: "16.9",
    citations: 1988,
  },
  {
    id: "biotreasury",
    name: "BioTreasury",
    en: "Bioinformatics Tool Discovery & Community",
    desc: "面向生物信息学的软件、数据库与科研工具检索、评价及分享平台，帮助研究人员发现、筛选与比较合适的分析工具。",
    tags: ["生物信息学","软件资源"],
    icon: "images/icon-biotreasury-nobg.png",
    href: "https://biotreasury.cn/zh/",
    hrefLabel: "Visit Site",
    paper: "https://link.springer.com/article/10.1007/s11427-023-2509-x",
    impactFactor: "8",
    citations: 5,
  },
  {
    id: "biocurategpt",
    name: "BioCurateGPT",
    en: "AI-powered Biomedical Data Curation",
    desc: "面向生物医学数据整理、审编及结构化处理任务的 AI 智能体平台，探索通过多智能体协作与大模型辅助实现科研数据工作流自动化。",
    tags: ["Data Curation", "Agentic Workflow"],
    icon: "images/icon-biocurategpt-nobg.png",
    href: "https://curategpt.renlab.cn/",
    hrefLabel: "Visit Site",
  },
  {
    id: "deepcancer",
    name: "DeepCancer",
    en: "Deep Learning for Anticancer Drug Discovery",
    desc: "基于深度学习的抗肿瘤药物研发平台，支持面向肿瘤靶点及癌细胞的活性预测、虚拟筛选等计算辅助药物发现任务。",
    tags: ["癌细胞","抑癌靶点","药物性质预测"],
    icon: "images/icon-deepcancer-nobg.png",
    href: "https://deepcancermap.idruglab.cn/#/home",
    hrefLabel: "Visit Site",
    paper: "https://www.sciencedirect.com/science/article/pii/S0223523423003677",
    impactFactor: "7.4",
    citations: 37,
  },
  {
    id: "fp-gnn",
    name: "FP-GNN",
    en: "Molecular Fingerprints × Graph Neural Networks",
    desc: "融合分子指纹与图神经网络的深度学习算法，通过结合不同分子表示的信息，实现分子性质及生物活性预测。",
    tags: ["图神经网络", "特征工程", "深度学习算法"],
    icon: "images/icon-fpgnn-nobg.png",
    href: "https://github.com/idrugLab/FP-GNN",
    hrefLabel: "GitHub",
    paper: "https://academic.oup.com/bib/article/23/6/bbac408/6702671",
    impactFactor: "13.9",
    citations: 327,
  },
  {
    id: "vddb",
    name: "VDDB",
    en: "Antiviral Drug Discovery Database",
    desc: "面向抗病毒药物发现的数据资源与机器学习平台，整合病毒及相关药物研究信息，支持计算辅助抗病毒药物研发。",
    tags: ["病毒", "数据库"],
    icon: "images/icon-vddb-nobg.png",
    href: "https://vddb.idruglab.cn/",
    hrefLabel: "Visit Site",
    paper: "https://onlinelibrary.wiley.com/doi/full/10.1002/mef2.32",
    impactFactor: "7.1",
    citations: 7,
  },
];

export const AWARDS: Award[] = [
  {
    competition: "第十八届“挑战杯”全国大学生课外学术科技作品竞赛",
    prize: "国赛特等奖",
    role: "负责人",
    project: "精诚制药、AI赋能——深度学习驱动的药物设计与发现方法研究及其应用",
  },
  {
    competition: "第十四届“挑战杯”中国大学生创业计划竞赛",
    prize: "国赛铜奖",
    role: "负责人",
    project: "科云美学——生物医学通用绘图平台，引领科研绘图新时代",
  },
  {
    competition: "第八届中国国际大学生创新创业大赛",
    prize: "省赛银奖",
    role: "负责人",
    project: "神农智药——中药现代化AI药物发现引领者",
  },
  {
    competition: "第十二届全国大学生电子商务“创新、创意及创业”挑战赛",
    prize: "省赛特等奖",
    role: "负责人",
    project: "神农智药——中药现代化AI药物发现引领者",
  },
  {
    competition: "第三届全国博士后创新创业大赛",
    prize: "国赛铜奖",
    role: "成员",
    project: "伏羲慧眼-生成式眼科人工智能大模型项目",
  },
  {
    competition: "国际基因工程机器大赛（iGEM）",
    prize: "国际银奖",
    role: "Dry Lab 负责人",
    project: "Nootka-Boom：基于合成生物学的酵母圆柚酮生物合成及绿色驱蚊应用",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: "腾讯 PCG 大数据平台 数据挖掘中心",
    role: "通用 Agent 产品 / Harness Engineering",
    period: "2026.05 - 2026.09 · 算法实习生",
    desc: "围绕通用 Agent 系统、垂类智能体与 TeamAgent 协作开展工程研发。",
  },
  {
    org: "广州锐竞信息科技有限责任公司",
    role: "LLM Algorithm & AI Application Engineering",
    period: "2023.09 — 2026.03 · 算法研究&全栈开发",
    desc: "围绕科研文献智能处理、领域知识工程、Agentic RAG、生物医学数据处理和智能体系统等开展研发实践。",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "中山大学",
    degree: "生物信息学 · 博士",
    period: "2023.09 — 2028.06",
  },
  {
    school: "华南理工大学",
    degree: "生物制药 · 本科",
    period: "2019.09 — 2023.06",
  },
];

export const CONTACT = {
  name: "巫景行",
  tagline: "BIO × AI · AGENT SYSTEMS · AI FOR SCIENCE",
  email: "wujx99@mail2.sysu.edu.cn",
  phone: "13632228717",
  wechat: "wujasonx",
  motto: "Research-minded. Engineering-driven. Product-oriented.",
};
