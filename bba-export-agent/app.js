/* ==========================================
   BBA Exports - Interactive Logic & Translation
   ========================================== */

// Translation Dictionary
const translations = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About Us",
    navQuote: "Get a Quote",
    heroBadge: "Global Packaging Partner",
    heroTitle: "Innovative Flexible Packaging Solutions for Global Brands",
    heroDesc: "We manufacture and export high-performance BOPP packaging films, premium PVC shrink films, and custom-tailored flexible packaging solutions that protect your products and elevate your brand presence globally.",
    heroBtnQuote: "Request a Quote",
    heroBtnChat: "Talk to Agent",
    feature1: "Premium Grade Materials",
    feature2: "Export to 50+ Countries",
    feature3: "MOQ 1 Metric Ton",
    filmBadgeText: "BOPP Film Roll",
    statClarity: "Optical Clarity",
    statSealing: "Seal Threshold",
    prodSubtitle: "Our Offerings",
    prodTitle: "Industrial Packaging Product Range",
    boppName: "BOPP Packaging Film",
    boppDesc: "Biaxially Oriented Polypropylene Film featuring superior mechanical, optical, and barrier properties. Ideal for food packaging, labeling, and lamination.",
    specThickness: "Thickness:",
    specType: "Available Types:",
    boppTypes: "Plain, Matt, Pearlized, Heat Sealable",
    specFeatures: "Key Features:",
    boppFeatures: "High clarity, moisture barrier, excellent tensile strength",
    chatAboutProduct: "Inquire about this",
    pvcName: "PVC Shrink Film",
    pvcDesc: "Polyvinyl Chloride shrink film with superb clarity and high shrinkage rates. Perfect for bottle sleeves, caps, cosmetics, and protective multi-packs.",
    specShrinkage: "Shrink Ratio:",
    specApplications: "Applications:",
    pvcApps: "Beverage labels, food jars, battery sleeves, cosmetics",
    pvcFeatures: "Low shrink temperature, glass-like transparency, high glossy finish",
    customName: "Custom Packaging Solutions",
    customDesc: "Tailor-made multi-layer laminate bags, stand-up pouches with zippers, and printed roll stocks customized to your exact moisture and oxygen barrier specs.",
    specPrinting: "Printing:",
    customPrint: "High-definition rotogravure up to 10 colors",
    specPouchTypes: "Pouch Formats:",
    customTypes: "Stand-up, Zipper pouch, Quad seal, Flat bottom",
    specMaterials: "Material Blends:",
    aboutSubtitle: "Why Partner With BBA",
    aboutTitle: "Leading the Way in Export-Grade Flexible Packaging",
    aboutPara1: "BBA Exports has established itself as a premier global distributor and supply chain partner for state-of-the-art packaging films. We serve industrial users, food manufacturers, and cosmetic brands in over 50 countries, offering tailored support for large-scale B2B exports.",
    aboutPara2: "With our streamlined logistics networks, strict QA protocols, and dedicated multi-language assistance, we bridge the gap between production efficiency and international shipping demands. We specialize in custom formulations to match specific regional machinery settings and climate conditions.",
    aboutStat1: "Tons Shipped Annually",
    aboutStat2: "Global Destinations",
    aboutStat3: "Multilingual Support",
    badgeGlobalPort: "FOB/CIF Shipping",
    badgeISO: "ISO 9001:2015 Certified",
    quoteSubtitle: "Get a Proposal",
    quoteTitle: "Request a B2B Export Quote",
    labelName: "Full Name *",
    labelEmail: "Business Email *",
    labelCompany: "Company Name *",
    labelCountry: "Destination Country *",
    labelProduct: "Product Needed *",
    selectProductPlaceholder: "Select a product...",
    optBopp: "BOPP Packaging Film",
    optPvc: "PVC Shrink Film",
    optCustom: "Custom Flexible Packaging",
    labelQuantity: "Order Quantity *",
    labelSpecs: "Specifications & Custom Requirements",
    btnSubmit: "Submit Quote Request",
    errorName: "Please enter your name.",
    errorEmail: "Please enter a valid business email.",
    errorCompany: "Please enter your company name.",
    errorCountry: "Please enter destination country.",
    errorProduct: "Please select a product.",
    errorQuantity: "Please specify the quantity.",
    successTitle: "Quote Request Submitted!",
    successDesc: "Thank you for contacting BBA Exports. Our export sales representative will review your requirements and email a custom quotation within 12 hours.",
    successBtn: "Submit Another Inquiry",
    footerText: "Your premier global packaging partner providing premium BOPP films, PVC shrink films, and custom barrier pouch solutions.",
    footerProducts: "Products",
    footerCompany: "Company",
    footerContact: "Contact Info",
    footerAddress: "Export Division Hub, Marseille, France",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    chatTooltip: "Chat with Export Agent",
    agentName: "BBA Export AI-Agent",
    agentStatus: "Online | Speaks English, Urdu, Chinese",
    agentGreeting: "Welcome to BBA Exports! I am your export inquiry assistant. I can help you with product technical specifications, minimum order quantities (MOQ), global shipping options, and custom packaging quotes in English, Urdu (اردو), or Chinese (中文). How can I assist you today?",
    qaBopp: "BOPP Film Specs",
    qaPvc: "PVC Shrink Film Specs",
    qaCustom: "Custom Packaging Options",
    qaMoq: "MOQ & Lead Times",
    qaShipping: "Shipping & Incoterms",
    qaQuote: "Request Quote Form",
    chatDisclaimer: "Auto-translation active",
    chatInputPlaceholder: "Type your inquiry here...",
    chatSentJustNow: "Just now",
    chatReplying: "Replying..."
  },
  ur: {
    navHome: "ہوم",
    navProducts: "مصنوعات",
    navAbout: "ہمارے بارے میں",
    navQuote: "کوٹیشن حاصل کریں",
    heroBadge: "عالمی پیکیجنگ پارٹنر",
    heroTitle: "عالمی برانڈز کے لیے جدید لچکدار پیکیجنگ سلوشنز",
    heroDesc: "ہم اعلیٰ معیار کی BOPP پیکیجنگ فلمیں، بہترین PVC شرنک فلمیں، اور آپ کی مصنوعات کی حفاظت اور عالمی سطح پر برانڈ کی موجودگی کو بڑھانے کے لیے خصوصی طور پر تیار کردہ پیکیجنگ تیار اور برآمد کرتے ہیں۔",
    heroBtnQuote: "کوٹیشن کی درخواست کریں",
    heroBtnChat: "ایجنٹ سے بات کریں",
    feature1: "اعلیٰ ترین پریمیم میٹریل",
    feature2: "50 سے زائد ممالک میں برآمد",
    feature3: "کم از کم آرڈر 1 میٹرک ٹن",
    filmBadgeText: "BOPP فلم رول",
    statClarity: "آپٹیکل شفافیت",
    statSealing: "سیلنگ درجہ حرارت",
    prodSubtitle: "ہماری پیشکشیں",
    prodTitle: "صنعتی پیکیجنگ مصنوعات کی رینج",
    boppName: "BOPP پیکیجنگ فلم",
    boppDesc: "بہترین مکینیکل، بصری، اور حفاظتی خصوصیات کی حامل بائی ایکسیلی اورینٹڈ پولی پروپیلین فلم۔ خوراک کی پیکیجنگ، لیبلنگ اور لیمینیشن کے لیے موزوں ترین۔",
    specThickness: "موٹائی (تھکنیس):",
    specType: "دستیاب اقسام:",
    boppTypes: "سادہ، میٹ، پرلائزڈ، ہیٹ سیل ایبل",
    specFeatures: "اہم خصوصیات:",
    boppFeatures: "اعلیٰ شفافیت، نمی سے بچاؤ، بہترین لچکدار مضبوطی",
    chatAboutProduct: "اس کے بارے میں پوچھیں",
    pvcName: "PVC شرنک فلم",
    pvcDesc: "بہترین شفافیت اور تیز ترین سکڑنے کی شرح کے حامل پولی وینائل کلورائیڈ فلم۔ بوتل کی آستینیں (سلیوز)، کیپس اور کاسمیٹکس کے لیے موزوں۔",
    specShrinkage: "سکڑنے کا تناسب:",
    specApplications: "درخواستیں (اپلیکیشنز):",
    pvcApps: "مشروبات کے لیبل، فوڈ جار، بیٹری سلیوز، کاسمیٹکس",
    pvcFeatures: "کم درجہ حرارت پر سکڑنا، شیشے جیسی شفافیت، چمکدار فنشنگ",
    customName: "حسب ضرورت پیکیجنگ سلوشنز",
    customDesc: "آپ کی ضرورت کے مطابق کثیر تہہ دار لیمینیٹ بیگز، زپ والے سٹینڈ اپ پاؤچز اور پرنٹڈ رول سٹاک جو نمی اور آکسیجن سے مکمل تحفظ فراہم کریں۔",
    specPrinting: "پرنٹنگ:",
    customPrint: "10 رنگوں تک کی ہائی ڈیفینیشن روٹوگریویور پرنٹنگ",
    specPouchTypes: "پاؤچ کے فارمیٹس:",
    customTypes: "سٹینڈ اپ، زپ پاؤچ، کواڈ سیل، فلیٹ باٹم",
    specMaterials: "میٹریل کا ملاپ:",
    aboutSubtitle: "BBA کے ساتھ شراکت داری کیوں؟",
    aboutTitle: "برآمدی معیار کی لچکدار پیکیجنگ میں سب سے آگے",
    aboutPara1: "BBA Exports نے جدید ترین پیکیجنگ فلموں کے لیے ایک اہم عالمی سپلائر کے طور پر اپنی شناخت بنائی ہے۔ ہم 50 سے زائد ممالک میں صنعتی صارفین اور کاسمیٹک برانڈز کو خدمات فراہم کر رہے ہیں۔",
    aboutPara2: "ہماری تیز رفتار لاجسٹکس، سخت کوالٹی کنٹرول اور کثیر لسانی ٹیم کے ساتھ، ہم بین الاقوامی شپنگ کی ضروریات کو کامیابی سے پورا کرتے ہیں۔ ہم مختلف ممالک کی مشینری کی سیٹنگز کے مطابق فلم تیار کرتے ہیں۔",
    aboutStat1: "سالانہ روانہ کردہ ٹن",
    aboutStat2: "عالمی منزلیں",
    aboutStat3: "کثیر لسانی معاونت",
    badgeGlobalPort: "FOB/CIF شپنگ",
    badgeISO: "ISO 9001:2015 تصدیق شدہ",
    quoteSubtitle: "پروپوزل حاصل کریں",
    quoteTitle: "کاروباری برآمدی کوٹیشن کی درخواست",
    labelName: "پورا نام *",
    labelEmail: "کاروباری ای میل *",
    labelCompany: "کمپنی کا نام *",
    labelCountry: "منزل کا ملک *",
    labelProduct: "مطلوبہ پروڈکٹ *",
    selectProductPlaceholder: "پروڈکٹ منتخب کریں...",
    optBopp: "BOPP پیکیجنگ فلم",
    optPvc: "PVC شرنک فلم",
    optCustom: "خصوصی پیکیجنگ سلوشنز",
    labelQuantity: "آرڈر کی مقدار *",
    labelSpecs: "تفصیلات اور اپنی مرضی کے مطابق ضروریات",
    btnSubmit: "درخواست جمع کروائیں",
    errorName: "براہ کرم اپنا نام درج کریں۔",
    errorEmail: "براہ کرم درست کاروباری ای میل درج کریں۔",
    errorCompany: "براہ کرم اپنی کمپنی کا نام درج کریں۔",
    errorCountry: "براہ کرم منزل کا ملک درج کریں۔",
    errorProduct: "براہ کرم ایک پروڈکٹ منتخب کریں۔",
    errorQuantity: "براہ کرم مقدار واضح کریں۔",
    successTitle: "درخواست کامیابی سے جمع ہو گئی!",
    successDesc: "BBA Exports سے رابطہ کرنے کا شکریہ۔ ہمارا نمائندہ 12 گھنٹے کے اندر آپ کو ای میل کے ذریعے کوٹیشن بھیج دے گا۔",
    successBtn: "ایک اور انکوائری بھیجیں",
    footerText: "آپ کا قابل اعتماد عالمی پیکیجنگ پارٹنر جو پریمیم BOPP فلمیں، PVC شرنک فلمیں اور دیگر پیکیجنگ فراہم کرتا ہے۔",
    footerProducts: "مصنوعات",
    footerCompany: "کمپنی",
    footerContact: "رابطہ کی معلومات",
    footerAddress: "مارسیل، فرانس",
    footerTerms: "سروس کی شرائط",
    footerPrivacy: "رازداری کی پالیسی",
    chatTooltip: "ایکسپورٹ ایجنٹ سے چیٹ کریں",
    agentName: "BBA ایکسپورٹ AI-ایجنٹ",
    agentStatus: "آن لائن | انگریزی، اردو اور چینی زبانوں میں دستیاب",
    agentGreeting: "BBA Exports میں خوش آمدید! میں آپ کا برآمدی معاون ہوں۔ میں پروڈکٹ کی تفصیلات، کم از کم آرڈر (MOQ)، شپنگ، اور کسٹم پیکیجنگ کے بارے میں انگریزی، اردو یا چینی زبان میں مدد کر سکتا ہوں۔ میں آج آپ کی کیا مدد کروں؟",
    qaBopp: "BOPP فلم کی خصوصیات",
    qaPvc: "PVC فلم کی خصوصیات",
    qaCustom: "کسٹم پیکیجنگ آپشنز",
    qaMoq: "آرڈر کی حد اور وقت",
    qaShipping: "شپنگ اور شرائط",
    qaQuote: "کوٹیشن فارم دیکھیں",
    chatDisclaimer: "خودکار ترجمہ فعال ہے",
    chatInputPlaceholder: "اپنا سوال یہاں ٹائپ کریں...",
    chatSentJustNow: "ابھی",
    chatReplying: "جواب دیا جا رہا ہے..."
  },
  zh: {
    navHome: "首页",
    navProducts: "产品中心",
    navAbout: "关于我们",
    navQuote: "获取报价",
    heroBadge: "全球包装合作伙伴",
    heroTitle: "为全球品牌提供创新型柔性包装解决方案",
    heroDesc: "我们制造和出口高性能的BOPP包装薄膜、优质PVC收缩膜以及定制化的柔性包装解决方案，保护您的产品并提升品牌在全球市场的形象。",
    heroBtnQuote: "索取报价单",
    heroBtnChat: "在线咨询",
    feature1: "高档优质原料",
    feature2: "出口至50多个国家",
    feature3: "起订量1公吨起",
    filmBadgeText: "BOPP薄膜卷材",
    statClarity: "光学透明度",
    statSealing: "热封阈值温度",
    prodSubtitle: "我们的产品",
    prodTitle: "工业级包装产品系列",
    boppName: "BOPP包装薄膜",
    boppDesc: "具有优异机械、光学及阻隔性能的双向拉伸聚丙烯薄膜。广泛适用于食品包装、标签和覆膜。",
    specThickness: "厚度范围:",
    specType: "提供类型:",
    boppTypes: "光膜、哑光膜、珠光膜、热封膜",
    specFeatures: "关键特性:",
    boppFeatures: "高透明度、极佳防潮阻隔、高拉伸强度",
    chatAboutProduct: "咨询此产品",
    pvcName: "PVC收缩膜",
    pvcDesc: "具有超高透明度和优异收缩率的聚氯乙烯收缩膜。适用于瓶身标签、瓶盖密封、化妆品包装和促销售卖包装。",
    specShrinkage: "收缩率范围:",
    specApplications: "应用范围:",
    pvcApps: "饮料标签、食品罐封、电池套管、化妆品",
    pvcFeatures: "低收缩温度、玻璃级透明度、镜面光泽",
    customName: "定制化柔性包装",
    customDesc: "量身定制的多层复合包装袋、带拉链自立袋及印刷卷材，可根据您需要的防潮和防氧阻隔规格精确定制。",
    specPrinting: "印刷技术:",
    customPrint: "高清凹版印刷，最多支持10色",
    specPouchTypes: "袋子器型:",
    customTypes: "自立袋、拉链袋、四边封袋、平底袋",
    specMaterials: "材质配比:",
    aboutSubtitle: "为什么选择BBA",
    aboutTitle: "领跑出口级柔性包装行业",
    aboutPara1: "BBA Exports已成长为全球尖端包装薄膜的顶级分销和供应链合作伙伴。我们为50多个国家的工业用户、食品生产商和化妆品品牌提供量身定制的B2B大宗出口支持。",
    aboutPara2: "凭借我们高效的物流网络、严格的质量管理体系（QA）和专属的多语种客户服务，我们完美衔接起生产效率和跨国航运需求。我们可根据不同国家机器设置和气候定制配方。",
    aboutStat1: "年出口货运量(吨)",
    aboutStat2: "全球出口目的地",
    aboutStat3: "多语种客服支持",
    badgeGlobalPort: "支持FOB/CIF海运",
    badgeISO: "ISO 9001:2015质量认证",
    quoteSubtitle: "在线询价",
    quoteTitle: "申请B2B出口报价单",
    labelName: "联系人姓名 *",
    labelEmail: "商业电子邮箱 *",
    labelCompany: "公司名称 *",
    labelCountry: "目的国/地区 *",
    labelProduct: "所需产品类型 *",
    selectProductPlaceholder: "请选择一款产品...",
    optBopp: "BOPP包装薄膜",
    optPvc: "PVC收缩膜",
    optCustom: "定制柔性包装",
    labelQuantity: "采购数量 *",
    labelSpecs: "规格要求与定制说明",
    btnSubmit: "提交询价单",
    errorName: "请输入联系人姓名。",
    errorEmail: "请输入有效的商业电子邮箱。",
    errorCompany: "请输入您的公司名称。",
    errorCountry: "请输入您的目的国。",
    errorProduct: "请选择所需的产品类型。",
    errorQuantity: "请填写采购数量。",
    successTitle: "报价申请提交成功！",
    successDesc: "感谢您联系BBA Exports。我们的出口销售代表将在12小时内审核您的规格要求并发送正式的PDF报价单至您的邮箱。",
    successBtn: "提交另一份询价",
    footerText: "您首选的全球包装合作伙伴，提供优质BOPP薄膜、PVC收缩膜和高阻隔袋装解决方案。",
    footerProducts: "产品大类",
    footerCompany: "公司动态",
    footerContact: "联系我们",
    footerAddress: "法国马赛出口部运营中心",
    footerTerms: "服务条款",
    footerPrivacy: "隐私政策",
    chatTooltip: "在线咨询出口专员",
    agentName: "BBA 出口咨询助手",
    agentStatus: "在线 | 支持中/英/乌尔都语沟通",
    agentGreeting: "欢迎来到BBA Exports！我是您的出口业务助理。我可以使用中文、英文或乌尔都语（Urdu）为您解答产品技术规格、起订量（MOQ）、国际航运物流以及定制包装估价。请问有什么我可以帮您？",
    qaBopp: "BOPP 薄膜参数",
    qaPvc: "PVC 收缩膜参数",
    qaCustom: "定制包装材质",
    qaMoq: "起订量与交期",
    qaShipping: "国际航运条款",
    qaQuote: "索取报价表单",
    chatDisclaimer: "实时自动翻译已开启",
    chatInputPlaceholder: "输入您的咨询问题...",
    chatSentJustNow: "刚刚",
    chatReplying: "正在回复..."
  }
};

// Chat Agent Automated Multilingual Responses
const agentReplies = {
  en: {
    welcome: "Hello! How can BBA Exports support your flexible packaging requirements today?",
    bopp: "Our **BOPP Packaging Film** comes in Plain, Matt, Pearlized, and Heat Sealable grades. Thicknesses range from 12 to 40 microns. It provides excellent moisture barrier and high clarity. MOQ is **1 Metric Ton**. What specific thickness or grade do you require?",
    pvc: "Our **PVC Shrink Film** offers high shrinkage (50%-60%) at low temperatures, making it ideal for cosmetics and bottle sleeves. Available in rolls or pre-cut sleeves. What dimensions and shrinkage ratios are you looking for?",
    custom: "We offer customized **flexible pouches** (Stand-up, zipper, side gussets) with up to 10-color rotogravure printing. Standard structures are PET/AL/PE or BOPP/CPP. Minimum order for custom pouches is usually **10,000 pieces** per design. Do you have a artwork design or structure preference?",
    moq: "Our standard Minimum Order Quantities (MOQ) are:\n- **BOPP & PVC Films:** 1 Metric Ton (approx. 1,000 kg).\n- **Custom Pouches:** 10,000 units.\nLead time is typically **15-20 days** from deposit and artwork approval.",
    shipping: "We ship worldwide from our primary logistical hubs in Europe. We support **FOB (Marseille/Genova)**, **CFR**, and **CIF** terms to any major global port. Ocean freight usually takes 15-30 days depending on the destination country.",
    sample: "Yes, we provide **free sample rolls** (A4 sheets or 100m sample rolls) for machinery trials! The sample is free, but we kindly request customers to cover the DHL/FedEx courier shipping costs.",
    formPrompt: "Certainly! You can request a comprehensive quote by filling out the **Request a Quote Form** on this page, or let me know your specs here and I will pass them to our team.",
    fallback: "Thank you for the inquiry. Could you please specify your required film thickness (microns), roll width, and estimated order quantity so I can give you a accurate estimate? You can also use our Quote Form on this page.",
    greet: "Hello! Thank you for reaching out. How can BBA Exports help you with flexible films today?"
  },
  ur: {
    welcome: "السلام علیکم! آج BBA Exports لچکدار پیکیجنگ کی ضروریات میں آپ کی کیا مدد کر سکتا ہے؟",
    bopp: "ہماری **BOPP پیکیجنگ فلم** سادہ (Plain)، میٹ (Matt)، پرلائزڈ اور ہیٹ سیل ایبل اقسام میں دستیاب ہے۔ موٹائی 12 سے 40 مائیکرون تک ہے۔ یہ نمی سے بہترین تحفظ فراہم کرتی ہے۔ کم از کم آرڈر **1 میٹرک ٹن** ہے۔ آپ کو کس موٹائی کی ضرورت ہے؟",
    pvc: "ہماری **PVC شرنک فلم** کم درجہ حرارت پر بہترین سکڑاؤ (50%-60%) فراہم کرتی ہے، جو کاسمیٹکس اور بوتل کے لیبلز کے لیے بہترین ہے۔ یہ رولز اور کٹے ہوئے سلیوز کی شکل میں دستیاب ہے۔",
    custom: "ہم 10 رنگوں تک کی روٹوگریویور پرنٹنگ کے ساتھ کسٹم **پاؤچز** (زپ والے، سٹینڈ اپ) پیش کرتے ہیں۔ کسٹم پاؤچز کا کم از کم آرڈر **10,000 ٹکڑے** ہے۔ کیا آپ کے پاس ڈیزائن یا مخصوص سائز موجود ہے؟",
    moq: "ہمارے معیاری کم از کم آرڈر (MOQ) درج ذیل ہیں:\n- **BOPP اور PVC فلمیں:** 1 میٹرک ٹن (تقریباً 1000 کلوگرام)۔\n- **حسب ضرورت پاؤچز:** 10,000 پیسز۔\nآرڈر کی تیاری میں عام طور پر **15 سے 20 دن** لگتے ہیں۔",
    shipping: "ہم یورپ کے اہم لاجسٹک مراکز سے دنیا بھر میں شپمنٹ بھیجتے ہیں۔ ہم **FOB**، **CFR** اور **CIF** شرائط پر کام کرتے ہیں۔ سمندری سفر میں منزل کے لحاظ سے 15 سے 30 دن لگتے ہیں۔",
    sample: "جی ہاں، ہم ٹرائل کے لیے **مفت نمونے (Samples)** فراہم کرتے ہیں! نمونہ مفت ہے لیکن کسٹمر کو DHL یا FedEx کے اخراجات ادا کرنے ہوتے ہیں۔",
    formPrompt: "یقیناً! آپ اس صفحے پر موجود **کوٹیشن فارم** کو پُر کر کے تفصیلی پیشکش حاصل کر سکتے ہیں۔",
    fallback: "انکوائری کے لیے شکریہ۔ کیا آپ براہ کرم فلم کی مطلوبہ موٹائی (مائیکرون)، چوڑائی اور مقدار بتا سکتے ہیں تاکہ ہم درست تخمینہ لگا سکیں؟ آپ فارم کا استعمال بھی کر سکتے ہیں۔",
    greet: "ہیلو! رابطہ کرنے کا شکریہ۔ آج ہم پیکیجنگ فلمز کے حوالے سے آپ کی کیا مدد کر سکتے ہیں؟"
  },
  zh: {
    welcome: "您好！请问BBA Exports今天能为您的柔性包装需求提供什么帮助？",
    bopp: "我们的**BOPP包装薄膜**提供光膜、哑光膜、珠光膜和热封膜等级。厚度范围为12至40微米。具有优良的防潮阻隔性和高透明度。起订量（MOQ）为**1公吨**。请问您需要什么规格和厚度？",
    pvc: "我们的**PVC收缩膜**在低温下具有高收缩率（50%-60%），非常适合化妆品瓶和饮料标签。提供卷材或预切套管。您需要什么尺寸和收缩率？",
    custom: "我们提供定制化**柔性包装袋**（自立袋、拉链袋、侧风琴袋），支持最多10色凹版印刷。材质结构一般为PET/AL/PE或BOPP/CPP。定制袋起订量为**10,000个**。您有设计图纸或材质要求吗？",
    moq: "我们的标准起订量（MOQ）为：\n- **BOPP 与 PVC 膜卷:** 1公吨 (约 1,000 公斤)。\n- **定制包装袋:** 10,000个。\n交货期通常在收到定金和确认设计稿后 **15-20 天**左右。",
    shipping: "我们从欧洲的主要物流中心发货至全球。支持运往全球主要港口的 **FOB**、**CFR** 和 **CIF** 条款。海运一般需要15-30天左右，具体取决于目的国。",
    sample: "是的！我们提供**免费样品卷材**（A4纸样或100米长样品卷）供您进行上机测试！样品免费，但快递费（DHL/FedEx）需由客户承担。",
    formPrompt: "好的！您可以直接填写此页面上的**申请B2B出口报价单**表单，或者在这里留下您的具体参数，我将立即转交给销售团队。",
    fallback: "感谢您的咨询。请问您需要什么厚度（微米）、卷材宽度和预计采购数量？这样我可以为您提供更精准的估价。您也可以填写页面底部的报价表单。",
    greet: "您好！感谢您的咨询。请问今天有什么关于柔性薄膜的疑问我可以帮您解答？"
  }
};

// Global App State
let currentLang = "en";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const icon = mobileMenuBtn.querySelector("i");
    if (navMenu.classList.contains("open")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close Mobile Menu on Link Click
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      mobileMenuBtn.querySelector("i").className = "fa-solid fa-bars";
      
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Language Dropdown Selector Toggle
  const langBtn = document.getElementById("langBtn");
  const langSelector = document.querySelector(".lang-selector");
  const langDropdown = document.getElementById("langDropdown");

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSelector.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    langSelector.classList.remove("open");
  });

  // Select Language Event
  const langOptions = document.querySelectorAll(".lang-option");
  const currentLangLabel = document.getElementById("currentLangLabel");

  langOptions.forEach(option => {
    option.addEventListener("click", () => {
      const selectedLang = option.getAttribute("data-lang");
      
      langOptions.forEach(o => o.classList.remove("active"));
      option.classList.add("active");
      
      currentLang = selectedLang;
      
      // Update label
      if (currentLang === "en") currentLangLabel.textContent = "English";
      if (currentLang === "ur") currentLangLabel.textContent = "اردو";
      if (currentLang === "zh") currentLangLabel.textContent = "中文";

      // Trigger Translation Update
      updatePageLanguage();
    });
  });

  // ==========================================
  // Form Validation & Submission
  // ==========================================
  const quoteForm = document.getElementById("quoteForm");
  const formSuccessOverlay = document.getElementById("formSuccessOverlay");
  const btnResetForm = document.getElementById("btnResetForm");
  const btnSubmitQuote = document.getElementById("btnSubmitQuote");

  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate B2B API Submission
      btnSubmitQuote.classList.add("loading");
      btnSubmitQuote.disabled = true;

      setTimeout(() => {
        btnSubmitQuote.classList.remove("loading");
        btnSubmitQuote.disabled = false;
        formSuccessOverlay.classList.add("active");
        quoteForm.reset();
        clearValidationErrors();
      }, 1500); // Simulate network delay
    }
  });

  btnResetForm.addEventListener("click", () => {
    formSuccessOverlay.classList.remove("active");
  });

  // Inputs Keyup/Change Listeners to Clear Errors in Real-Time
  const formInputs = quoteForm.querySelectorAll("input, select, textarea");
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      const group = input.closest(".form-group");
      if (group && group.classList.contains("invalid")) {
        group.classList.remove("invalid");
      }
    });
  });

  function validateForm() {
    let isValid = true;
    
    const fields = [
      { id: "fullName", errorId: "errorFullName" },
      { id: "email", errorId: "errorEmail", isEmail: true },
      { id: "companyName", errorId: "errorCompany" },
      { id: "country", errorId: "errorCountry" },
      { id: "productSelect", errorId: "errorProduct" },
      { id: "quantity", errorId: "errorQuantity" }
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const group = input.closest(".form-group");
      let fieldValid = true;

      if (!input.value.trim()) {
        fieldValid = false;
      } else if (field.isEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          fieldValid = false;
        }
      }

      if (!fieldValid) {
        group.classList.add("invalid");
        isValid = false;
      } else {
        group.classList.remove("invalid");
      }
    });

    return isValid;
  }

  function clearValidationErrors() {
    const invalidGroups = quoteForm.querySelectorAll(".form-group.invalid");
    invalidGroups.forEach(group => group.classList.remove("invalid"));
  }

  // ==========================================
  // Floating Chat Widget Interactions
  // ==========================================
  const chatWidgetContainer = document.getElementById("chatWidgetContainer");
  const chatTriggerBtn = document.getElementById("chatTriggerBtn");
  const chatHeaderCloseBtn = document.getElementById("chatHeaderCloseBtn");
  const chatInputField = document.getElementById("chatInputField");
  const chatInputForm = document.getElementById("chatInputForm");
  const chatMessages = document.getElementById("chatMessages");
  const typingIndicator = document.getElementById("typingIndicator");
  const chatBody = document.getElementById("chatBody");
  const quickActions = document.getElementById("chatQuickActions");

  // Toggle Chat Portal open/close
  chatTriggerBtn.addEventListener("click", () => {
    chatWidgetContainer.classList.toggle("open");
    // Scroll chat body to bottom when opening
    if (chatWidgetContainer.classList.contains("open")) {
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 100);
    }
  });

  chatHeaderCloseBtn.addEventListener("click", () => {
    chatWidgetContainer.classList.remove("open");
  });

  // Hero Chat Button Link
  const heroBtnChat = document.getElementById("heroBtnChat");
  heroBtnChat.addEventListener("click", () => {
    chatWidgetContainer.classList.add("open");
    setTimeout(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 100);
  });

  // Product Card Inquire Buttons
  const productChatButtons = document.querySelectorAll(".btn-product-chat");
  productChatButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const product = btn.getAttribute("data-product");
      chatWidgetContainer.classList.add("open");
      
      // Auto-send a system message indicating interest
      setTimeout(() => {
        let inquiryMsg = "";
        if (currentLang === "en") inquiryMsg = `Hello! I would like to inquire about ${product}. Please share specifications and pricing.`;
        if (currentLang === "ur") inquiryMsg = `السلام علیکم! میں ${product} کے بارے میں معلومات حاصل کرنا چاہتا ہوں۔ براہ کرم قیمت اور تفصیلات بتائیں۔`;
        if (currentLang === "zh") inquiryMsg = `您好！我想咨询关于 ${product} 的产品参数与报价。`;
        
        addUserMessage(inquiryMsg);
        triggerAgentReply(product.toLowerCase());
      }, 300);
    });
  });

  // Handle Quick Action Clicks
  quickActions.addEventListener("click", (e) => {
    if (e.target.classList.contains("quick-action-btn")) {
      const action = e.target.getAttribute("data-action");
      const userText = e.target.textContent;
      
      addUserMessage(userText);
      triggerAgentReply(action);
    }
  });

  // Handle Text Submission via Chat Input
  chatInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInputField.value.trim();
    if (!text) return;

    addUserMessage(text);
    chatInputField.value = "";
    
    // Parse user input for keywords to generate simulated replies
    parseUserTextAndReply(text);
  });

  function addUserMessage(text) {
    const time = getFormattedTime();
    const msgHTML = `
      <div class="message outgoing">
        <div class="message-content">
          <p>${escapeHTML(text)}</p>
          <span class="message-time">${time}</span>
        </div>
      </div>
    `;
    chatMessages.insertAdjacentHTML("beforeend", msgHTML);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function addAgentMessage(text) {
    const time = getFormattedTime();
    const msgHTML = `
      <div class="message incoming">
        <div class="message-content">
          <p>${formatMarkdown(escapeHTML(text))}</p>
          <span class="message-time">${time}</span>
        </div>
      </div>
    `;
    chatMessages.insertAdjacentHTML("beforeend", msgHTML);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getFormattedTime() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  // Basic HTML Escaper to prevent injection
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Simplified Markdown renderer for Chat agent replies
  function formatMarkdown(str) {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }

  function triggerAgentReply(actionKey) {
    // Show typing indicator
    typingIndicator.classList.add("active");
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingIndicator.classList.remove("active");
      
      let replyText = "";
      const dictionary = agentReplies[currentLang];
      
      switch (actionKey) {
        case "bopp_specs":
        case "bopp":
          replyText = dictionary.bopp;
          break;
        case "pvc_specs":
        case "pvc":
          replyText = dictionary.pvc;
          break;
        case "custom_pkg":
        case "custom packaging":
          replyText = dictionary.custom;
          break;
        case "moq":
          replyText = dictionary.moq;
          break;
        case "shipping":
          replyText = dictionary.shipping;
          break;
        case "sample":
          replyText = dictionary.sample;
          break;
        case "quote":
          replyText = dictionary.formPrompt;
          // Smooth scroll browser view to the quote form section
          document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
          break;
        default:
          replyText = dictionary.fallback;
      }
      
      addAgentMessage(replyText);
    }, 1200); // Simulated delay
  }

  function parseUserTextAndReply(text) {
    typingIndicator.classList.add("active");
    chatBody.scrollTop = chatBody.scrollHeight;

    const lowerText = text.toLowerCase();

    setTimeout(() => {
      typingIndicator.classList.remove("active");
      
      let replyText = "";
      const dictionary = agentReplies[currentLang];

      // Multi-lingual Keyword Matching
      // English Matches
      const matchesEnBopp = lowerText.includes("bopp") || lowerText.includes("polypropylene") || lowerText.includes("plain film");
      const matchesEnPvc = lowerText.includes("pvc") || lowerText.includes("shrink") || lowerText.includes("sleeve");
      const matchesEnCustom = lowerText.includes("custom") || lowerText.includes("pouch") || lowerText.includes("bag") || lowerText.includes("print");
      const matchesEnMoq = lowerText.includes("moq") || lowerText.includes("minimum") || lowerText.includes("lead time") || lowerText.includes("delivery");
      const matchesEnShip = lowerText.includes("ship") || lowerText.includes("export") || lowerText.includes("port") || lowerText.includes("fob") || lowerText.includes("cif") || lowerText.includes("incoterms");
      const matchesEnSample = lowerText.includes("sample") || lowerText.includes("free") || lowerText.includes("trial");
      const matchesEnQuote = lowerText.includes("quote") || lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("inquiry");
      const matchesEnGreet = lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey") || lowerText.includes("welcome");

      // Urdu Matches
      const matchesUrBopp = lowerText.includes("فلم") || lowerText.includes("بی او پی پی");
      const matchesUrPvc = lowerText.includes("پی وی سی") || lowerText.includes("شرنک");
      const matchesUrCustom = lowerText.includes("پاؤچ") || lowerText.includes("پرنٹ");
      const matchesUrMoq = lowerText.includes("کم از کم") || lowerText.includes("آرڈر");
      const matchesUrShip = lowerText.includes("شپ") || lowerText.includes("بندرگاہ");
      const matchesUrSample = lowerText.includes("نمونہ") || lowerText.includes("سیمپل");
      const matchesUrQuote = lowerText.includes("قیمت") || lowerText.includes("کوٹیشن") || lowerText.includes("ریٹ");
      const matchesUrGreet = lowerText.includes("سلام") || lowerText.includes("السلام") || lowerText.includes("ہیلو");

      // Chinese Matches
      const matchesZhBopp = lowerText.includes("薄膜") || lowerText.includes("光膜") || lowerText.includes("热封");
      const matchesZhPvc = lowerText.includes("收缩") || lowerText.includes("套管") || lowerText.includes("套标");
      const matchesZhCustom = lowerText.includes("自立袋") || lowerText.includes("定制") || lowerText.includes("拉链");
      const matchesZhMoq = lowerText.includes("起订") || lowerText.includes("交期") || lowerText.includes("天");
      const matchesZhShip = lowerText.includes("海运") || lowerText.includes("发货") || lowerText.includes("港口") || lowerText.includes("航运");
      const matchesZhSample = lowerText.includes("样品") || lowerText.includes("样卷") || lowerText.includes("免费");
      const matchesZhQuote = lowerText.includes("价格") || lowerText.includes("报价") || lowerText.includes("多少钱");
      const matchesZhGreet = lowerText.includes("您好") || lowerText.includes("你好") || lowerText.includes("哈罗");

      // Match Logic
      if (matchesEnBopp || matchesUrBopp || matchesZhBopp) {
        replyText = dictionary.bopp;
      } else if (matchesEnPvc || matchesUrPvc || matchesZhPvc) {
        replyText = dictionary.pvc;
      } else if (matchesEnCustom || matchesUrCustom || matchesZhCustom) {
        replyText = dictionary.custom;
      } else if (matchesEnMoq || matchesUrMoq || matchesZhMoq) {
        replyText = dictionary.moq;
      } else if (matchesEnShip || matchesUrShip || matchesZhShip) {
        replyText = dictionary.shipping;
      } else if (matchesEnSample || matchesUrSample || matchesZhSample) {
        replyText = dictionary.sample;
      } else if (matchesEnQuote || matchesUrQuote || matchesZhQuote) {
        replyText = dictionary.formPrompt;
        document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
      } else if (matchesEnGreet || matchesUrGreet || matchesZhGreet) {
        replyText = dictionary.greet;
      } else {
        replyText = dictionary.fallback;
      }

      addAgentMessage(replyText);
    }, 1200);
  }

  // ==========================================
  // Multi-Language Translation Updates
  // ==========================================
  function updatePageLanguage() {
    const dict = translations[currentLang];

    // Check Text Direction (RTL vs LTR)
    if (currentLang === "ur") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ur");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", currentLang);
    }

    // Translate standard elements with data-i18n
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      if (dict[key]) {
        elem.innerHTML = dict[key];
      }
    });

    // Translate Placeholders
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const companyInput = document.getElementById("companyName");
    const countryInput = document.getElementById("country");
    const quantityInput = document.getElementById("quantity");
    const specsTextarea = document.getElementById("specifications");

    if (currentLang === "ur") {
      fullNameInput.placeholder = "جیسے: محمد احمد";
      emailInput.placeholder = "ahmed@company.com";
      companyInput.placeholder = "کمپنی کا نام درج کریں";
      countryInput.placeholder = "جیسے: سعودی عرب، متحدہ عرب امارات";
      quantityInput.placeholder = "جیسے: 5 ٹن، 50000 پاؤچ";
      specsTextarea.placeholder = "موٹائی (مائیکرون)، چوڑائی، لمبائی، پرنٹنگ کے بارے میں لکھیں...";
      chatInputField.placeholder = "اپنا سوال یہاں لکھیں...";
    } else if (currentLang === "zh") {
      fullNameInput.placeholder = "例如：王伟";
      emailInput.placeholder = "wangwei@company.com";
      companyInput.placeholder = "请输入您的公司名称";
      countryInput.placeholder = "例如：美国、沙特阿拉伯";
      quantityInput.placeholder = "例如：5吨 或 50,000个包装袋";
      specsTextarea.placeholder = "请输入薄膜厚度（微米）、分切宽度、卷长、印刷图案要求或具体应用...";
      chatInputField.placeholder = "在此输入您的咨询问题...";
    } else {
      fullNameInput.placeholder = "John Doe";
      emailInput.placeholder = "john@company.com";
      companyInput.placeholder = "Enter Company Name";
      countryInput.placeholder = "e.g., United States, Saudi Arabia";
      quantityInput.placeholder = "e.g., 5 Tons, 50,000 Pouches";
      specsTextarea.placeholder = "Enter thickness (micron), width, roll length, printing requirements, or application detail...";
      chatInputField.placeholder = "Type your inquiry here...";
    }

    // Update Initial Chat Message content inside container if no other conversations have happened
    const currentMessagesCount = chatMessages.querySelectorAll(".message").length;
    if (currentMessagesCount === 1) {
      const welcomeMsg = chatMessages.querySelector(".message.incoming .message-content p");
      if (welcomeMsg) {
        welcomeMsg.textContent = dict.agentGreeting;
      }
    }
  }

  // Run initial localization setup
  updatePageLanguage();
});
