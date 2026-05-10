const READING_PASSAGES = {
  "d1-reading":
    "Bank of America Corp is planning to cut about 300 jobs in its investment banking and capital markets group as it struggles to rein in costs and weak revenue growth. The layoffs are not as severe as cuts in retail banking. The bank is also assigning junior bankers to broader groups of companies, which may lead to more layoffs. These changes are part of Project New BAC to improve profits as the sluggish economy and new regulations raise costs. The first phase is expected to cut about 30,000 jobs and 5 billion USD in annual expenses.",
  "d2-reading":
    "Companies pricing decisions depend on production and distribution costs, demand level, and competitor prices. They also consider overall objectives, targets, and market positioning. Firms with excess capacity or falling market share tend to cut prices, while firms facing inflation or urgent cash needs tend to raise prices. Demand is elastic when sales change with price, and inelastic when sales stay stable. Price cuts may have negative psychological effects if buyers think products are lower quality.",
  "d3-reading":
    "The three most important industrial economies are the USA, Germany and Japan. Germany struggles with reunification costs and recession, while Japan is also in deep recession. The USA has a large budget deficit and is expected to recover only slowly because consumer and investor confidence is weak and stimulus room is limited. German interest-rate cuts may help ERM members but Germany's role as Europe's largest export market may decline.",
  "d5-reading":
    "Apple planned to use a larger screen for the next iPhone and started ordering displays from suppliers in South Korea and Japan. The new screen was expected to be 4 inches, about 30 percent larger viewing area than before. Early production started at LG Display, Sharp and Japan Display. Apple made this move as a competitive response to Samsung and broader consumer demand for larger displays as users increasingly do laptop-like tasks on smartphones.",
  "pdf-pricing-detailed":
    "Company's pricing decisions depend on one or more of three basic factors: production and distribution costs, the level of demand, and the prices (or probable prices) of current and potential competitors. Companies are also consider their overall objectives and their consequent profit or sales target, such as seeking maximum revenue, or maximum market share, etc. pricing strategy must also consider market positioning: quality products generally require \"prestige pricing\" and will probably not sell if their price is thought to be too low.\n\nObviously, firms with excess production capacity, a large inventory, or a falling market share, tend to cut prices. Firms experiencing cost inflation, or in urgent need of cash, tend to raise its prices.\n\nWhen sales respond directly to price variations, demand is said to be elastic. If sales remain stable after a change in price, demand is inelastic. Although it is an elementary law of economics that the lower price, the greater the sales, there are numerous exceptions. For example, price cuts can have unpredictable psychological effects: buyer may believe that the product is faulty or of lower quality, or will soon become very hard to get hold of, and so on.",
  "pdf-bank-savings":
    "Banks are places where people can keep their money. Most people use banks to save money in their savings accounts and to pay money from their checking accounts. Today, when a person earns money from their job, their paycheck is often electronically deposited into their savings or checking account. Then, he or she can pay their bills by writing checks from their checking accounts or pay online where their bills are electronically connected to their bank accounts.\n\nBanks also give loans to people. Banks use the money that their customers deposit to lend to people to buy new houses, cars, or to start businesses among other reasons. The bank makes money from lending by charging interest. In other words, people have to pay back more than they borrowed. This amount depends on how risky the bank thinks the borrower is and how fast the loan is paid back among other things.\n\nRecently, banks are taking a lot of heat for interest rate hikes and fees going out of control. Giving banks business may seem like putting yourself in harm's way, but of course, it still beats hiding your money under a mattress. Understand how banks work, however, and you'll know where to look out for fees and how to avoid lining banks' pockets by paying more interest than you're earning.",
  "pdf-financial-analysis":
    "Companies engage in financial analysis to monitor performance and make informed decisions. They compare financial statements over time to identify trends and irregularities. One key tool is ratio analysis, which examines profitability, liquidity, and efficiency. While financial analysis provides useful insights, it is essential to consider external factors, such as market trends and regulations, to understand fully the causes of financial performance changes.",
};

const EXAMS_CORE = [
  {
    id: "de-1",
    title: "De 1",
    questions: [
      {
        id: "d1-fb-1",
        type: "mcq",
        prompt:
          "Fill in the blank: '____ are products or raw materials bought from another country for use in your own country.'",
        options: ["imports", "inventory", "dividend", "revenue"],
        answer: "imports",
        explanation:
          "'Imports' nghia la hang hoa/nguyen lieu duoc mua tu nuoc ngoai vao nuoc minh de su dung.",
      },
      {
        id: "d1-fb-2",
        type: "mcq",
        prompt:
          "Most companies expect to sell their ____ for cash within one year.",
        options: ["inventory", "liabilities", "audit", "market share"],
        answer: "inventory",
        explanation:
          "'Inventory' la hang ton kho, thuong duoc ban va chuyen thanh tien trong ky ngan han.",
      },
      {
        id: "d1-fb-3",
        type: "mcq",
        prompt:
          "Net sales minus the Cost of Goods Sold equals ____.",
        options: ["gross profit", "net income", "dividend", "depreciation"],
        answer: "gross profit",
        explanation:
          "Cong thuc co ban: Net Sales - COGS = Gross Profit (loi nhuan gop).",
      },
      {
        id: "d1-fb-4",
        type: "mcq",
        prompt:
          "A country's ____ is made up of the current account, financial account and the capital account.",
        options: [
          "balance of payment",
          "income statement",
          "operating budget",
          "market share",
        ],
        answer: "balance of payment",
        explanation:
          "Can can thanh toan quoc gia gom current account, financial account va capital account.",
      },
      {
        id: "d1-fb-5",
        type: "mcq",
        prompt:
          "The main function of auditing is to review and evaluate financial records. The missing word is ____.",
        options: ["auditing", "marketing", "pricing", "outsourcing"],
        answer: "auditing",
        explanation:
          "Chuc nang cua 'auditing' la xem xet, danh gia ho so tai chinh de dam bao do tin cay.",
      },
      {
        id: "d1-mc-1",
        type: "mcq",
        prompt:
          "How does this article describe Bank of America's revenue growth?",
        options: ["Low", "Moderate", "High", "Very high"],
        answer: "Low",
        passageId: "d1-reading",
        explanation:
          "Doan van noi ro 'weak revenue growth', nen toc do tang truong doanh thu la thap (Low).",
      },
      {
        id: "d1-mc-2",
        type: "mcq",
        prompt:
          "How do these cuts compare to Bank of America's cuts in retail banking?",
        options: [
          "They're more severe",
          "They're not as severe",
          "They're about the same",
          "They aren't the same",
        ],
        answer: "They're not as severe",
        passageId: "d1-reading",
        explanation:
          "Bai doc ghi cat giam moi 'not as severe' so voi retail banking, nen la nhe hon.",
      },
      {
        id: "d1-mc-3",
        type: "mcq",
        prompt: "Why is Bank of America 'bloated'?",
        options: [
          "Because of sluggish economy",
          "Because of the junior bankers",
          "Because of all the acquisitions they have made",
          "Because of new regulations",
        ],
        answer: "Because of all the acquisitions they have made",
        passageId: "d1-reading",
        explanation:
          "Doan van neu cong ty bi 'bloated after decades of acquisitions', nghia la phinh to do mua lai nhieu.",
      },
      {
        id: "d1-mc-4",
        type: "mcq",
        prompt:
          "How much will the first round of layoffs cut expenses over the next couple of years?",
        options: ["$5 bn", "$30,000", "$3 bn", "$7 bn"],
        answer: "$5 bn",
        passageId: "d1-reading",
        explanation:
          "Doan van neu first phase cat giam '5 billion in annual expenses'.",
      },
      {
        id: "d1-match-1",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'An occasion when someone buys or sells something, or when money is exchanged.'",
        options: ["transaction", "balance sheet", "dilution", "subsidy"],
        answer: "transaction",
        explanation:
          "Dinh nghia mo ta mot lan mua ban/trao doi tien, dung voi 'transaction'.",
      },
      {
        id: "d1-match-2",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A statement that shows the value of a company's assets and its debts.'",
        options: ["trade barriers", "balance sheet", "cost accounting", "obsession"],
        answer: "balance sheet",
        explanation:
          "'Balance sheet' la bao cao the hien tai san va no phai tra tai mot thoi diem.",
      },
    ],
  },
  {
    id: "de-2",
    title: "De 2",
    questions: [
      {
        id: "d2-fb-1",
        type: "mcq",
        prompt:
          "One of the main objectives of corporate finance is to reduce the ____ of the company.",
        options: ["financial risks", "gross margin", "inventory", "tax return"],
        answer: "financial risks",
        explanation:
          "Muc tieu quan trong cua corporate finance la kiem soat va giam rui ro tai chinh.",
      },
      {
        id: "d2-fb-2",
        type: "mcq",
        prompt:
          "Their company is ____ because they have difficulty in making payments on its debt.",
        options: ["overleveraged", "liquid", "profitable", "audited"],
        answer: "overleveraged",
        explanation:
          "'Overleveraged' la tinh trang vay/no qua cao, gay kho trong tra no.",
      },
      {
        id: "d2-fb-3",
        type: "mcq",
        prompt:
          "Assets are the ____ of the company that have been acquired through transactions.",
        options: ["resources", "liabilities", "losses", "fees"],
        answer: "resources",
        explanation:
          "Assets duoc xem la cac nguon luc (resources) doanh nghiep so huu/kiem soat.",
      },
      {
        id: "d2-fb-4",
        type: "mcq",
        prompt:
          "Financial statement analysis includes ____.",
        options: ["financial ratios", "trade barriers", "surface mail", "quota"],
        answer: "financial ratios",
        explanation:
          "Phan tich BCTC su dung cac ty so tai chinh (financial ratios) de danh gia suc khoe tai chinh.",
      },
      {
        id: "d2-fb-5",
        type: "mcq",
        prompt:
          "Holders of preferred stock are entitled to a fixed ____ whenever the board decides to pay.",
        options: ["dividend", "liability", "asset", "tariff"],
        answer: "dividend",
        explanation:
          "Co dong uu dai duoc huong muc co tuc co dinh, tuc 'dividend'.",
      },
      {
        id: "d2-mc-1",
        type: "mcq",
        prompt:
          "When pricing, a company needs to consider:",
        options: [
          "Production and distribution costs, demand, and competitor prices",
          "Only profit goals and market share",
          "Only market positioning",
          "Production/distribution costs, demand, competitor prices, objectives, sales targets, and market positioning",
        ],
        answer:
          "Production/distribution costs, demand, competitor prices, objectives, sales targets, and market positioning",
        passageId: "d2-reading",
        explanation:
          "Dinh gia day du phai ket hop chi phi, cau, gia doi thu, muc tieu, target va dinh vi thi truong.",
      },
      {
        id: "d2-mc-2",
        type: "mcq",
        prompt: "Companies intend to reduce prices when:",
        options: [
          "They are in excess production capacity",
          "They experience cost inflation",
          "Their market share is rising",
          "Both A and C",
        ],
        answer: "They are in excess production capacity",
        passageId: "d2-reading",
        explanation:
          "Khi du cong suat/ton kho lon/thi phan giam, doanh nghiep co xu huong giam gia de day ban.",
      },
      {
        id: "d2-mc-3",
        type: "mcq",
        prompt: "The word 'elastic' in the passage is closest in meaning to:",
        options: ["stable", "unstable", "changeable", "unchangeable"],
        answer: "changeable",
        passageId: "d2-reading",
        explanation:
          "'Elastic demand' la cau thay doi theo gia, nen gan nghia nhat voi 'changeable'.",
      },
      {
        id: "d2-match-1",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A promise or an assurance, especially one given in writing...'",
        options: ["guarantee", "embargo", "tax return", "grant"],
        answer: "guarantee",
        explanation:
          "'Guarantee' la loi bao dam/cam ket bang van ban ve chat luong hoac dieu kien.",
      },
      {
        id: "d2-match-2",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A government order that restricts commerce...'",
        options: ["debt financing", "embargo", "subsidy", "mission"],
        answer: "embargo",
        explanation:
          "'Embargo' la lenh han che thuong mai giua cac quoc gia.",
      },
    ],
  },
  {
    id: "de-3",
    title: "De 3",
    questions: [
      {
        id: "d3-fb-1",
        type: "mcq",
        prompt: "Annual net profit of the company ____ 20% in the wake of tough competition.",
        options: ["fell", "rose", "stayed", "doubled"],
        answer: "fell",
        explanation:
          "'Fell' dung vi loi nhuan rong giam 20% sau canh tranh gay gat; cac lua chon con lai khong phu hop ngu canh.",
      },
      {
        id: "d3-fb-2",
        type: "mcq",
        prompt: "Shareholders receive ____ payments called dividends.",
        options: ["periodic", "random", "daily", "unlimited"],
        answer: "periodic",
        explanation:
          "'Periodic' nghia la dinh ky, dung voi dac diem co tuc duoc chi tra theo ky (thang/quy/nam).",
      },
      {
        id: "d3-fb-3",
        type: "mcq",
        prompt: "Successful ____ helps a firm to spread costs over a larger output.",
        options: ["exporting", "importing", "auditing", "borrowing"],
        answer: "exporting",
        explanation:
          "'Exporting' giup mo rong dau ra, tang san luong tieu thu va phan bo chi phi co dinh tren quy mo lon hon.",
      },
      {
        id: "d3-fb-4",
        type: "mcq",
        prompt:
          "In theory, price is really ____ by the discovery of what customers perceive in the value.",
        options: ["determined", "hidden", "ignored", "removed"],
        answer: "determined",
        explanation:
          "'Determined' (duoc xac dinh) dung theo cum 'price is determined by...', the hien gia do gia tri cam nhan cua khach hang quyet dinh.",
      },
      {
        id: "d3-fb-5",
        type: "mcq",
        prompt:
          "Bookkeeping is a process of detailed ____ of all the financial transactions of a business.",
        options: ["recording", "deleting", "forecasting", "exporting"],
        answer: "recording",
        explanation:
          "Bookkeeping la quy trinh ghi chep chi tiet giao dich tai chinh, vi vay 'recording' la dap an chinh xac.",
      },
      {
        id: "d3-fb-6",
        type: "mcq",
        prompt:
          "At the end of each month, it is usual to ____ accounts of assets and liabilities.",
        options: ["balance", "erase", "freeze", "postpone"],
        answer: "balance",
        explanation:
          "'Balance accounts' la doi chieu/can doi tai khoan tai san va no phai tra vao cuoi ky ke toan.",
      },
      {
        id: "d3-fb-7",
        type: "mcq",
        prompt: "The balance sheet presents a company's ____ at a specified date.",
        options: ["financial position", "marketing plan", "tax code", "inventory flow"],
        answer: "financial position",
        explanation:
          "Bang can doi ke toan cho biet tinh hinh tai chinh cua doanh nghiep tai mot thoi diem cu the.",
      },
      {
        id: "d3-fb-8",
        type: "mcq",
        prompt:
          "Britain spent nearly 5000 million pounds more on ____ food than selling abroad.",
        options: ["importing", "exporting", "pricing", "auditing"],
        answer: "importing",
        explanation:
          "Cau cho thay Anh chi nhieu hon cho viec mua vao tu nuoc ngoai, nen dap an dung la 'importing'.",
      },
      {
        id: "d3-fb-9",
        type: "mcq",
        prompt: "Financial audits are performed to ascertain validity and ____ of information.",
        options: ["reliability", "popularity", "speed", "volume"],
        answer: "reliability",
        explanation:
          "Muc tieu kiem toan tai chinh la xac minh tinh hop le va do tin cay cua thong tin, tuong ung voi 'reliability'.",
      },
      {
        id: "d3-fb-10",
        type: "mcq",
        prompt:
          "Independent audit is a ____ required review of the accuracy of financial records.",
        options: ["legally", "partly", "rarely", "casually"],
        answer: "legally",
        explanation:
          "'Legally required' la cum co nghia 'duoc yeu cau boi phap luat', dung voi ban chat cua kiem toan doc lap.",
      },
      {
        id: "d3-mc-1",
        type: "mcq",
        prompt:
          "According to the article, the three most important industrial economies are:",
        options: [
          "The USA, Germany and Japan",
          "The USA, China and Japan",
          "Germany, China and Russia",
          "The USA, China and Russia",
        ],
        answer: "The USA, Germany and Japan",
        passageId: "d3-reading",
        explanation:
          "Doan doc neu ro ba nen kinh te cong nghiep quan trong nhat la My, Duc va Nhat Ban.",
      },
      {
        id: "d3-mc-2",
        type: "mcq",
        prompt: "At that time, recession is being faced by:",
        options: ["Germany only", "The USA only", "Germany and Japan", "Japan only"],
        answer: "Germany and Japan",
        passageId: "d3-reading",
        explanation:
          "Noi dung bai cho thay Duc va Nhat dang doi mat suy thoai trong giai doan de cap.",
      },
      {
        id: "d3-mc-3",
        type: "mcq",
        prompt: "The election of a new US president was expected to help the economy:",
        options: ["Recover a little", "Recover impressively", "Stay unchanged", "Stop growing"],
        answer: "Recover a little",
        passageId: "d3-reading",
        explanation:
          "Bai doc cho rang viec bau tong thong moi chi ky vong giup kinh te hoi phuc nhe, khong phai dot pha lon.",
      },
      {
        id: "d3-mc-4",
        type: "mcq",
        prompt: "Problems faced by the US in the passage include:",
        options: [
          "Lack of confidence and limited stimulus room",
          "Only trade surplus",
          "Only high consumer confidence",
          "No budget deficit",
        ],
        answer: "Lack of confidence and limited stimulus room",
        passageId: "d3-reading",
        explanation:
          "Doan van nhan manh My gap van de ve niem tin va du dia kich thich kinh te bi han che.",
      },
      {
        id: "d3-mc-5",
        type: "mcq",
        prompt: "Lower German interest rates may result in:",
        options: [
          "A decline in Germany's importance as Europe's largest export market",
          "Higher German budget surplus only",
          "Immediate global boom",
          "No impact on Europe",
        ],
        answer:
          "A decline in Germany's importance as Europe's largest export market",
        passageId: "d3-reading",
        explanation:
          "Lai suat Duc giam co the lam yeu vai tro thi truong xuat khau lon nhat chau Au cua Duc theo nhan dinh trong bai.",
      },
    ],
  },
  {
    id: "de-4",
    title: "De 4",
    questions: [
      {
        id: "d4-fb-1",
        type: "mcq",
        prompt: "The principal aim of corporate finance is enhancing the ____.",
        options: ["corporate value", "tax rate", "import quota", "audit delay"],
        answer: "corporate value",
        explanation:
          "Muc tieu cot loi cua corporate finance la toi da hoa gia tri doanh nghiep, nen 'corporate value' la dap an dung.",
      },
      {
        id: "d4-fb-3",
        type: "mcq",
        prompt: "Successful ____ helps a firm spread costs over a larger output.",
        options: ["promotion", "embargo", "depreciation", "liquidation"],
        answer: "promotion",
        explanation:
          "'Promotion' giup tang nhu cau va san luong tieu thu, tu do phan bo chi phi tren dau ra lon hon.",
      },
      {
        id: "d4-fb-4",
        type: "mcq",
        prompt:
          "In theory, price is really ____ by customer perception of value.",
        options: ["determined", "blocked", "reduced", "cancelled"],
        answer: "determined",
        explanation:
          "Gia duoc xac dinh boi gia tri khach hang cam nhan, phu hop cau truc 'is determined by'.",
      },
      {
        id: "d4-fb-5",
        type: "mcq",
        prompt:
          "Bookkeeping is a process of detailed ____ of all financial transactions.",
        options: ["recording", "forgetting", "advertising", "outsourcing"],
        answer: "recording",
        explanation:
          "Bookkeeping la ghi chep chi tiet moi giao dich tai chinh, nen dap an la 'recording'.",
      },
      {
        id: "d4-fb-6",
        type: "mcq",
        prompt: "At month end, it is usual to ____ accounts with multiple entries.",
        options: ["balance", "close forever", "export", "ignore"],
        answer: "balance",
        explanation:
          "Cuoi thang can doi chieu va can bang tai khoan, vi vay 'balance' la chinh xac.",
      },
      {
        id: "d4-fb-7",
        type: "mcq",
        prompt: "The balance sheet presents a company's ____.",
        options: ["financial position", "new logo", "sales script", "distribution map"],
        answer: "financial position",
        explanation:
          "Bang can doi ke toan phan anh tinh hinh tai chinh cua cong ty tai mot thoi diem.",
      },
      {
        id: "d4-fb-8",
        type: "mcq",
        prompt: "The most essential requirement of an auditor is knowledge of ____.",
        options: ["accounting", "graphic design", "manufacturing", "shipping"],
        answer: "accounting",
        explanation:
          "Kiem toan vien can nen tang ke toan de danh gia so sach va bao cao, nen chon 'accounting'.",
      },
      {
        id: "d4-fb-9",
        type: "mcq",
        prompt: "Financial audits ascertain the validity and ____ of information.",
        options: ["reliability", "popularity", "color", "length"],
        answer: "reliability",
        explanation:
          "Kiem toan tai chinh nham xac minh tinh hop le va do tin cay cua thong tin, tuong ung 'reliability'.",
      },
      {
        id: "d4-fb-10",
        type: "mcq",
        prompt: "Independent audit is a ____ required review.",
        options: ["legally", "optionally", "verbally", "informally"],
        answer: "legally",
        explanation:
          "Kiem toan doc lap la yeu cau theo phap luat trong nhieu truong hop, nen cum dung la 'legally required'.",
      },
      {
        id: "d4-match-1",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'The ratio at which one country's currency can be exchanged for another.'",
        options: ["exchange rate", "quota", "outlay", "tariff"],
        answer: "exchange rate",
        explanation:
          "Ty le quy doi giua hai dong tien duoc goi la 'exchange rate'.",
      },
      {
        id: "d4-match-2",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Possibilities of filling unsatisfied needs in a sector.'",
        options: ["market opportunities", "bottom line", "surplus", "cross-selling"],
        answer: "market opportunities",
        explanation:
          "Nhu cau chua duoc dap ung trong thi truong tao ra 'market opportunities'.",
      },
      {
        id: "d4-match-3",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A limit on import/export quantity that must not be exceeded.'",
        options: ["quota", "procedure", "exchange rate", "financial accounting"],
        answer: "quota",
        explanation:
          "Gioi han so luong xuat/nhap khau la 'quota'.",
      },
      {
        id: "d4-match-4",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Accounting that provides financial reports for investors and banks.'",
        options: ["financial accounting", "management accounting", "cost accounting", "audit trail"],
        answer: "financial accounting",
        explanation:
          "'Financial accounting' phuc vu bao cao ben ngoai nhu nha dau tu va ngan hang.",
      },
      {
        id: "d4-match-5",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'The official or formal way of doing something in business/law/politics.'",
        options: ["procedure", "surplus", "tariff", "quota"],
        answer: "procedure",
        explanation:
          "Cach thuc chinh thuc de thuc hien cong viec duoc goi la 'procedure'.",
      },
    ],
  },
  {
    id: "de-5",
    title: "De 5",
    questions: [
      {
        id: "d5-fb-1",
        type: "mcq",
        prompt:
          "Corporate finance aims at getting the maximum ____ on invested capital.",
        options: ["returns", "depreciation", "quota", "tariff"],
        answer: "returns",
        explanation:
          "Muc tieu cua corporate finance la toi da hoa loi nhuan/ty suat sinh loi tren von dau tu, nen la 'returns'.",
      },
      {
        id: "d5-fb-2",
        type: "mcq",
        prompt:
          "Management accounting information is ____ because it is only for management use.",
        options: ["confidential", "public", "random", "seasonal"],
        answer: "confidential",
        explanation:
          "Thong tin ke toan quan tri dung noi bo cho ban lanh dao, vi vay co tinh 'confidential'.",
      },
      {
        id: "d5-fb-3",
        type: "mcq",
        prompt:
          "____ involves activities such as competitions and product tasting.",
        options: ["promotion", "recording", "depreciation", "outsourcing"],
        answer: "promotion",
        explanation:
          "Cuoc thi, dung thu san pham la cac hoat dong xuc tien ban hang, thuoc 'promotion'.",
      },
      {
        id: "d5-fb-4",
        type: "mcq",
        prompt: "The choice of distribution method will ____ on many circumstances.",
        options: ["depend", "import", "liquidate", "audit"],
        answer: "depend",
        explanation:
          "Cau dung theo cum co dinh 'depend on', the hien su phu thuoc vao nhieu yeu to.",
      },
      {
        id: "d5-fb-5",
        type: "mcq",
        prompt: "All businesses apply the same ____ in double-entry records.",
        options: ["principles", "embargoes", "subsidies", "exports"],
        answer: "principles",
        explanation:
          "He thong ke toan kep dua tren cac nguyen tac chung, nen dap an la 'principles'.",
      },
      {
        id: "d5-fb-6",
        type: "mcq",
        prompt: "It is necessary to open an account to ____ goods purchased for resale.",
        options: ["record", "destroy", "delay", "borrow"],
        answer: "record",
        explanation:
          "Hang mua de ban lai can duoc ghi nhan vao tai khoan, vi vay dung la 'record'.",
      },
      {
        id: "d5-fb-7",
        type: "mcq",
        prompt: "Liabilities are ____ of the company owed to creditors.",
        options: ["obligations", "revenues", "assets", "incentives"],
        answer: "obligations",
        explanation:
          "Liabilities la cac nghia vu no phai tra cho chu no, tuong ung voi 'obligations'.",
      },
      {
        id: "d5-fb-8",
        type: "mcq",
        prompt:
          "The resulting ____ expense may not indicate the economic value being used up.",
        options: ["depreciation", "promotion", "distribution", "marketing"],
        answer: "depreciation",
        explanation:
          "Chi phi khau hao ('depreciation expense') co the khong phan anh day du gia tri kinh te thuc su tieu hao.",
      },
      {
        id: "d5-fb-9",
        type: "mcq",
        prompt:
          "An audit gives reasonable assurance that statements are free from ____.",
        options: ["material error", "gross profit", "market share", "short sales"],
        answer: "material error",
        explanation:
          "Muc tieu kiem toan la dam bao hop ly bao cao khong co sai sot trong yeu ('material error').",
      },
      {
        id: "d5-fb-10",
        type: "mcq",
        prompt:
          "The channel of ____ for consumer products depends on product type.",
        options: ["distribution", "dilution", "acquisition", "liquidity"],
        answer: "distribution",
        explanation:
          "Kenh phan phoi cho hang tieu dung thay doi theo loai san pham, nen dap an la 'distribution'.",
      },
      {
        id: "d5-mc-1",
        type: "mcq",
        prompt:
          "How many suppliers will most likely be involved in producing Apple's new iPhone screens?",
        options: ["Two", "Three", "Four", "Five"],
        answer: "Three",
        passageId: "d5-reading",
        explanation:
          "Theo doan doc, Apple du kien su dung ba nha cung cap man hinh cho mau iPhone moi.",
      },
      {
        id: "d5-mc-2",
        type: "mcq",
        prompt: "Are all suppliers in Japan?",
        options: ["Yes", "No", "Yes, plus one in Singapore", "None of the above"],
        answer: "No",
        passageId: "d5-reading",
        explanation:
          "Bai doc cho thay nha cung cap khong nam toan bo tai Nhat, vi vay dap an la 'No'.",
      },
      {
        id: "d5-mc-3",
        type: "mcq",
        prompt:
          "Apple equips the next iPhone with a larger screen mainly to:",
        options: [
          "Compete with its rival",
          "Support Samsung",
          "Reduce screen cost",
          "Stop producing smartphones",
        ],
        answer: "Compete with its rival",
        passageId: "d5-reading",
        explanation:
          "Ly do chinh cua man hinh lon hon la tang suc canh tranh voi doi thu tren thi truong smartphone.",
      },
      {
        id: "d5-mc-4",
        type: "mcq",
        prompt: "Why are companies making bigger displays?",
        options: [
          "Because consumers use phones for laptop-like tasks",
          "Because bigger screens are cheaper only",
          "Because old screens are unavailable",
          "Because laws force all phones to be larger",
        ],
        answer: "Because consumers use phones for laptop-like tasks",
        passageId: "d5-reading",
        explanation:
          "Nguoi dung ngay cang dung dien thoai cho cong viec giong laptop, nen doanh nghiep day manh man hinh lon.",
      },
      {
        id: "d5-mc-5",
        type: "mcq",
        prompt: "How big is Apple's new screen compared to the old one?",
        options: ["3.5 inches", "4 inches", "5 inches", "2.8 inches"],
        answer: "4 inches",
        passageId: "d5-reading",
        explanation:
          "Doan van neu ro kich thuoc man hinh moi la 4 inches.",
      },
      {
        id: "d5-match-1",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Preparing/using financial information to support management decisions.'",
        options: ["management accounting", "financial accounting", "market research", "trade surplus"],
        answer: "management accounting",
        explanation:
          "Viec xu ly thong tin tai chinh de ho tro quyet dinh quan ly la 'management accounting'.",
      },
      {
        id: "d5-match-2",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A positive balance of trade where exports exceed imports.'",
        options: ["trade surplus", "trade deficit", "tariff", "security"],
        answer: "trade surplus",
        explanation:
          "Khi xuat khau lon hon nhap khau se tao ra 'trade surplus' (thang du thuong mai).",
      },
      {
        id: "d5-match-3",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Property/goods pledged if a debt cannot be repaid.'",
        options: ["security", "incentive", "surface mail", "outlay"],
        answer: "security",
        explanation:
          "Tai san dam bao cho khoan no duoc goi la 'security'.",
      },
      {
        id: "d5-match-4",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Research to determine viability of a new product/service.'",
        options: ["market research", "cross-selling", "quota", "outlay"],
        answer: "market research",
        explanation:
          "Nghien cuu de danh gia tinh kha thi cua san pham/dich vu moi la 'market research'.",
      },
      {
        id: "d5-match-5",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'Sending letters/parcels by road, sea, or train (not aircraft).' ",
        options: ["surface mail", "airmail", "security", "management accounting"],
        answer: "surface mail",
        explanation:
          "Gui thu/kien bang duong bo, duong bien hoac duong sat (khong bang may bay) la 'surface mail'.",
      },
    ],
  },
  {
    id: "de-6",
    title: "De 6 (TACN2)",
    questions: [
      {
        id: "d6-fb-3",
        type: "mcq",
        prompt:
          "The balance is the difference between two sides of accounts and ____ the amount left in that account.",
        options: ["represents", "eliminates", "records", "increases"],
        answer: "represents",
        explanation:
          "Balance the hien (represents) phan chenhlech con lai giua hai ben tai khoan.",
      },
      {
        id: "d6-fb-4",
        type: "mcq",
        prompt:
          "To reduce money supply, central bank sells bonds and withdraws cash from ____.",
        options: ["circulation", "inventory", "creditors", "resources"],
        answer: "circulation",
        explanation:
          "Rut tien khoi luu thong (circulation) la cach lam giam cung tien tren thi truong.",
      },
      {
        id: "d6-fb-5",
        type: "mcq",
        prompt:
          "In a free market, producers can buy inputs and sell goods ____ being restricted by government regulations.",
        options: ["without", "before", "after", "throughout"],
        answer: "without",
        explanation:
          "Cum dung la 'without being restricted' de dien ta khong bi han che boi quy dinh.",
      },
      {
        id: "d6-fb-7",
        type: "mcq",
        prompt:
          "Financial accounting information is designed primarily to assist investors and creditors in deciding where to place their ____.",
        options: ["resources", "imports", "inventory", "obligations"],
        answer: "resources",
        explanation:
          "Nha dau tu/chu no can thong tin de phan bo nguon luc (resources) tai chinh.",
      },
      {
        id: "d6-fb-9",
        type: "mcq",
        prompt:
          "Mutually beneficial trade often arises when one country has a competitive ____.",
        options: ["advantage", "tariff", "quota", "embargo"],
        answer: "advantage",
        explanation:
          "Loi the canh tranh (competitive advantage) tao dieu kien cho thuong mai cung co loi.",
      },
      {
        id: "d6-fb-10",
        type: "mcq",
        prompt:
          "Government-placed restrictions on trade between nations are called trade ____.",
        options: ["barriers", "returns", "ratios", "transactions"],
        answer: "barriers",
        explanation:
          "Han che do chinh phu dat ra voi thuong mai quoc te duoc goi la trade barriers.",
      },
      {
        id: "d6-mc-4",
        type: "mcq",
        prompt: "In basic economics, price and sales are usually:",
        options: ["Inversely related", "Not related", "Always equal", "Randomly related"],
        answer: "Inversely related",
        passageId: "d2-reading",
        explanation:
          "Gia giam thi luong ban co xu huong tang va nguoc lai, tuc quan he nghich bien.",
      },
      {
        id: "d6-mc-5",
        type: "mcq",
        prompt: "Contrary to expected effects, cutting prices may:",
        options: [
          "Be misunderstood by buyers",
          "Always increase demand dramatically",
          "Guarantee higher quality perception",
          "Remove all competition",
        ],
        answer: "Be misunderstood by buyers",
        passageId: "d2-reading",
        explanation:
          "Giam gia co the gay hieu ung tam ly, nguoi mua nghi hang kem chat luong.",
      },
      {
        id: "d6-match-1",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'An amount of money given by government or organization for a specific purpose.'",
        options: ["grant", "mortgage", "royalties", "transaction"],
        answer: "grant",
        explanation:
          "'Grant' la khoan tien tai tro/cap phat cho muc dich cu the.",
      },
      {
        id: "d6-match-3",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'A situation when two or more companies join together.'",
        options: ["merger", "dilution", "expenditure", "royalties"],
        answer: "merger",
        explanation:
          "Su sap nhap giua cac cong ty duoc goi la 'merger'.",
      },
      {
        id: "d6-match-4",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'The action of making something less valuable.'",
        options: ["dilution", "transaction", "mortgage", "grant"],
        answer: "dilution",
        explanation:
          "'Dilution' la su lam giam gia tri/ty le so huu.",
      },
      {
        id: "d6-match-5",
        type: "mcq",
        prompt:
          "Match the word with its definition: 'The total amount of money that a company spends.'",
        options: ["expenditure", "acquisition", "subsidiary", "guarantee"],
        answer: "expenditure",
        explanation:
          "'Expenditure' co nghia la tong chi phi/so tien da chi ra.",
      },
    ],
  },
];

const EXAMS = EXAMS_CORE.concat(
  typeof window !== "undefined" && window.EXAMS_PDF_EXTRA
    ? window.EXAMS_PDF_EXTRA
    : [],
);

const app = document.getElementById("app");

const state = {
  mode: null,
  practiceExamIndex: 0,
  practiceQuestionIndex: 0,
  practiceAnswers: {},
  practiceQuestionsByExam: {},
  testQuestions: [],
  testIndex: 0,
  testAnswers: {},
  testDone: false,
};

function normalizeText(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function shuffle(array) {
  const next = [...array];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

const ESSAY_STOPWORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "to",
  "of",
  "in",
  "is",
  "are",
  "for",
  "with",
  "that",
  "this",
  "its",
  "be",
  "by",
  "on",
  "at",
  "as",
  "from",
]);

function normalizeEssayWords(text) {
  return normalizeText(text).replace(/[^a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ0-9\s]/g, " ");
}

function essayMatchesModel(userText, modelAnswer, minRatio = 0.36) {
  const modelPiece = normalizeEssayWords(modelAnswer || "");
  const modelTokens = modelPiece
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !ESSAY_STOPWORDS.has(token));
  const uniqueTokens = [...new Set(modelTokens)];
  if (uniqueTokens.length === 0) {
    return normalizeText(userText).length >= 25;
  }
  const hay = normalizeEssayWords(userText);
  let hits = 0;
  uniqueTokens.forEach((token) => {
    if (hay.includes(token)) {
      hits += 1;
    }
  });
  return hits / uniqueTokens.length >= minRatio;
}

function formatMatchCorrectAnswer(question) {
  return question.rows
    .map((row, idx) => `${idx + 1}. ${row.term}`)
    .join(" · ");
}

function parseMatchUserAnswer(raw) {
  if (!raw || typeof raw !== "string") {
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function isMatchAnswerComplete(assignments, rowCount) {
  if (!assignments || typeof assignments !== "object") {
    return false;
  }
  for (let i = 0; i < rowCount; i += 1) {
    const key = String(i);
    if (!assignments[key] || !String(assignments[key]).trim()) {
      return false;
    }
  }
  return true;
}

function isMatchCorrect(question, userRaw) {
  const obj = parseMatchUserAnswer(userRaw);
  if (!obj) {
    return false;
  }
  return question.rows.every(
    (_row, i) =>
      normalizeText(obj[String(i)] || "") === normalizeText(question.rows[i].term),
  );
}

function isQuestionCorrect(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null || userAnswer === "") {
    return false;
  }
  if (question.type === "essay") {
    return essayMatchesModel(userAnswer, question.answer);
  }
  if (question.type === "match") {
    return isMatchCorrect(question, userAnswer);
  }
  return normalizeText(userAnswer) === normalizeText(question.answer);
}

function describeMatchMismatch(question, userRaw) {
  const obj = parseMatchUserAnswer(userRaw);
  if (!obj) {
    return "Chua noi du hoac du lieu sai dinh dang.";
  }
  const wrongIdx = [];
  question.rows.forEach((row, i) => {
    if (normalizeText(obj[String(i)] || "") !== normalizeText(row.term)) {
      wrongIdx.push(`${i + 1} (${row.term})`);
    }
  });
  if (wrongIdx.length === 0) {
    return "";
  }
  return `Hang sai: ${wrongIdx.join(", ")}.`;
}

function readMatchAssignmentsFromDom(rowCount, rootSelector) {
  const assignments = {};
  for (let i = 0; i < rowCount; i += 1) {
    const slot = document.querySelector(
      `${rootSelector} [data-match-slot="${i}"]`,
    );
    if (!slot) {
      assignments[String(i)] = "";
      continue;
    }
    const chip = slot.querySelector("[data-match-term]");
    assignments[String(i)] = chip ? chip.dataset.matchTerm || "" : "";
  }
  return assignments;
}

function wireMatchDragPractice(rowCount) {
  const root = document.getElementById("practiceMatchRoot");
  const pool = document.getElementById("matchPool");
  if (!pool || !root) {
    return;
  }

  const moveChipBackToPool = (chipEl) => {
    if (!chipEl) {
      return;
    }
    chipEl.draggable = true;
    chipEl.classList.remove("cursor-default");
    pool.appendChild(chipEl);
  };

  pool.querySelectorAll(".match-chip").forEach((chip) => {
    const handleChipDragStart = (event) => {
      event.dataTransfer.setData(
        "text/plain",
        JSON.stringify({
          origin: chip.dataset.origin || "pool",
          term: chip.dataset.matchTerm || "",
          fromSlot:
            chip.dataset.fromSlot !== undefined ? chip.dataset.fromSlot : "",
        }),
      );
      event.dataTransfer.effectAllowed = "move";
    };

    const handleChipClick = () => {
      const selected = root.querySelector(".match-chip.selected-chip");
      if (selected && selected !== chip) {
        selected.classList.remove(
          "selected-chip",
          "ring-2",
          "ring-amber-400",
          "ring-offset-1",
        );
      }
      chip.classList.toggle("selected-chip");
      chip.classList.toggle("ring-2");
      chip.classList.toggle("ring-amber-400");
      chip.classList.toggle("ring-offset-1");
    };

    chip.addEventListener("dragstart", handleChipDragStart);
    chip.addEventListener("click", handleChipClick);
  });

  for (let i = 0; i < rowCount; i += 1) {
    const slot = root.querySelector(`[data-match-slot="${i}"]`);
    if (!slot) {
      continue;
    }

    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      let payload = null;
      try {
        payload = JSON.parse(event.dataTransfer.getData("text/plain") || "{}");
      } catch {
        payload = null;
      }
      if (!payload || !payload.term) {
        return;
      }

      const existing = slot.querySelector(".match-chip");
      if (existing) {
        moveChipBackToPool(existing);
      }

      const chip = [...document.querySelectorAll(".match-chip")].find(
        (element) => element.dataset.matchTerm === payload.term,
      );

      if (!chip) {
        return;
      }

      chip.dataset.origin = "slot";
      chip.dataset.fromSlot = String(i);
      slot.appendChild(chip);
    });

    slot.addEventListener("click", () => {
      const selected = root.querySelector(".match-chip.selected-chip");
      if (!selected) {
        const existing = slot.querySelector(".match-chip");
        if (existing) {
          moveChipBackToPool(existing);
        }
        return;
      }

      const existing = slot.querySelector(".match-chip");
      if (existing && existing !== selected) {
        moveChipBackToPool(existing);
      }

      if (selected.parentElement === pool) {
        pool.removeChild(selected);
      }

      selected.classList.remove("selected-chip");
      selected.dataset.origin = "slot";
      selected.dataset.fromSlot = String(i);
      slot.appendChild(selected);
    });
  }
}

function wireMatchDragTest(rowCount) {
  const root = document.getElementById("testMatchRoot");
  const pool = document.getElementById("matchPoolTest");
  if (!pool || !root) {
    return;
  }

  const moveChipBackToPool = (chipEl) => {
    if (!chipEl) {
      return;
    }
    chipEl.draggable = true;
    pool.appendChild(chipEl);
  };

  pool.querySelectorAll(".match-chip").forEach((chip) => {
    chip.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData(
        "text/plain",
        JSON.stringify({ term: chip.dataset.matchTerm || "" }),
      );
      event.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("click", () => {
      const selected = root.querySelector(".match-chip.selected-chip");
      if (selected && selected !== chip) {
        selected.classList.remove(
          "selected-chip",
          "ring-2",
          "ring-amber-400",
          "ring-offset-1",
        );
      }
      chip.classList.toggle("selected-chip");
      chip.classList.toggle("ring-2");
      chip.classList.toggle("ring-amber-400");
      chip.classList.toggle("ring-offset-1");
    });
  });

  for (let i = 0; i < rowCount; i += 1) {
    const slot = root.querySelector(`[data-match-slot="${i}"]`);
    if (!slot) {
      continue;
    }
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      let payload = null;
      try {
        payload = JSON.parse(event.dataTransfer.getData("text/plain") || "{}");
      } catch {
        payload = null;
      }
      if (!payload || !payload.term) {
        return;
      }
      const prev = slot.querySelector(".match-chip");
      if (prev) {
        moveChipBackToPool(prev);
      }
      const chip = [...document.querySelectorAll("#testMatchRoot .match-chip")].find(
        (element) => element.dataset.matchTerm === payload.term,
      );
      if (!chip) {
        return;
      }
      slot.appendChild(chip);
    });
    slot.addEventListener("click", () => {
      const selected = root.querySelector(".match-chip.selected-chip");
      if (!selected) {
        const prev = slot.querySelector(".match-chip");
        if (prev) {
          moveChipBackToPool(prev);
        }
        return;
      }
      const prev = slot.querySelector(".match-chip");
      if (prev && prev !== selected) {
        moveChipBackToPool(prev);
      }
      if (selected.parentElement === pool) {
        pool.removeChild(selected);
      }
      selected.classList.remove("selected-chip");
      slot.appendChild(selected);
    });
  }
}

function formatMatchAnswerForSummary(question, raw) {
  const obj = parseMatchUserAnswer(raw);
  if (!obj) {
    return raw || "(khong tra loi)";
  }
  return question.rows
    .map((row, i) => `${i + 1}. ${obj[String(i)] || "-"}`)
    .join("; ");
}

function hydrateTestMatchSlots(question, raw) {
  const obj = parseMatchUserAnswer(raw);
  const root = document.getElementById("testMatchRoot");
  const pool = document.getElementById("matchPoolTest");
  if (!root || !pool || !obj) {
    return;
  }

  question.rows.forEach((row, i) => {
    const term = obj[String(i)];
    if (!term) {
      return;
    }
    const chip = [...root.querySelectorAll(".match-chip")].find(
      (element) => element.dataset.matchTerm === term,
    );
    const slot = root.querySelector(`[data-match-slot="${i}"]`);
    if (!chip || !slot) {
      return;
    }
    if (chip.parentElement === pool) {
      pool.removeChild(chip);
    }
    const prev = slot.querySelector(".match-chip");
    if (prev && prev !== chip) {
      pool.appendChild(prev);
    }
    slot.appendChild(chip);
  });
}

function buildShuffledQuestion(question) {
  if (question.type === "match") {
    const terms = question.rows.map((row) => row.term);
    return {
      ...question,
      matchPool: shuffle([...terms]),
    };
  }
  if (question.type === "essay") {
    return { ...question };
  }
  return {
    ...question,
    options: shuffle(question.options),
  };
}

function buildShuffledExamQuestions(exam) {
  return shuffle(exam.questions).map((question) => buildShuffledQuestion(question));
}

function getPracticeQuestions(exam) {
  if (!state.practiceQuestionsByExam[exam.id]) {
    state.practiceQuestionsByExam[exam.id] = buildShuffledExamQuestions(exam);
  }
  return state.practiceQuestionsByExam[exam.id];
}

function getTestStats() {
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  state.testQuestions.forEach((question) => {
    const userAnswer = state.testAnswers[question.id];
    if (!userAnswer) {
      return;
    }

    answeredCount += 1;
    const isCorrect = isQuestionCorrect(question, userAnswer);
    if (isCorrect) {
      correctCount += 1;
      return;
    }

    wrongCount += 1;
  });

  return { answeredCount, correctCount, wrongCount };
}

function getPracticeStats(exam) {
  const saved = state.practiceAnswers[exam.id] || {};
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  exam.questions.forEach((question) => {
    const userAnswer = saved[question.id];
    if (!userAnswer) {
      return;
    }

    answeredCount += 1;
    const isCorrect = isQuestionCorrect(question, userAnswer);
    if (isCorrect) {
      correctCount += 1;
      return;
    }

    wrongCount += 1;
  });

  return { answeredCount, correctCount, wrongCount };
}

function renderModeSelect() {
  app.innerHTML = `
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Chon cach hoc</h2>
      <div class="grid gap-3 md:grid-cols-2">
        <button id="practiceBtn" class="rounded-xl border border-slate-300 bg-slate-50 p-4 text-left hover:bg-slate-100">
          <p class="text-lg font-semibold">On luyen</p>
          <p class="mt-1 text-sm text-slate-600">Lam lan luot tung cau theo tung de. Sai se hien dap an dung ngay.</p>
        </button>
        <button id="testBtn" class="rounded-xl border border-blue-300 bg-blue-50 p-4 text-left hover:bg-blue-100">
          <p class="text-lg font-semibold">Thi nhanh</p>
          <p class="mt-1 text-sm text-slate-600">Lay ngau nhien cau tu de goc, nop bai va cham diem cuoi bai.</p>
        </button>
      </div>
    </div>
  `;

  document.getElementById("practiceBtn").addEventListener("click", () => {
    state.mode = "practice";
    state.practiceExamIndex = 0;
    state.practiceQuestionIndex = 0;
    state.practiceQuestionsByExam = {};
    renderPracticeExamSelect();
  });

  document.getElementById("testBtn").addEventListener("click", () => {
    state.mode = "test";
    startTest();
  });
}

function renderPracticeExamSelect() {
  const examOptionsHtml = EXAMS.map(
    (exam, index) => `
      <button
        data-practice-exam-index="${index}"
        class="choose-practice-exam rounded-xl border border-slate-300 bg-slate-50 p-4 text-left hover:bg-slate-100"
      >
        <p class="text-lg font-semibold">${exam.title}</p>
        <p class="mt-1 text-sm text-slate-600">Ma de: ${exam.id} • ${exam.questions.length} cau</p>
      </button>
    `,
  ).join("");

  app.innerHTML = `
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Chon ma de de on luyen</h2>
      <p class="text-sm text-slate-600">Chon 1 de bat ky de bat dau on luyen.</p>
      <div class="grid gap-3 md:grid-cols-2">
        ${examOptionsHtml}
      </div>
      <button id="backModeBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Quay lai</button>
    </div>
  `;

  document.querySelectorAll(".choose-practice-exam").forEach((button) => {
    button.addEventListener("click", (event) => {
      const selectedExamIndex = Number(
        event.currentTarget.dataset.practiceExamIndex,
      );
      state.practiceExamIndex = selectedExamIndex;
      state.practiceQuestionIndex = 0;
      renderPractice();
    });
  });

  document.getElementById("backModeBtn").addEventListener("click", renderModeSelect);
}

function renderPractice() {
  const exam = EXAMS[state.practiceExamIndex];
  const practiceQuestions = getPracticeQuestions(exam);
  const question = practiceQuestions[state.practiceQuestionIndex];
  const qType = question.type || "mcq";
  const progress = `${state.practiceQuestionIndex + 1}/${practiceQuestions.length}`;
  const practiceStats = getPracticeStats(exam);
  const savedAnswer = (state.practiceAnswers[exam.id] || {})[question.id] || "";

  const passageHtml = question.passageId
    ? `
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Doan van co dinh</p>
        <p class="text-sm leading-6 text-slate-700">${READING_PASSAGES[question.passageId]}</p>
      </div>
    `
    : "";

  let answerBodyHtml = "";
  if (qType === "mcq") {
    answerBodyHtml = question.options
      .map(
        (option) => `
        <label class="block cursor-pointer rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <input type="radio" name="answer" value="${escapeHtml(option)}" class="mr-2" />
          <span>${escapeHtml(option)}</span>
        </label>
      `,
      )
      .join("");
  } else if (qType === "match") {
    answerBodyHtml = `
      <div id="practiceMatchRoot" class="space-y-4">
        <p class="text-xs text-slate-500">
          Gia tu kho sang o ben phai. Hoac click 1 cuc tu trong kho, roi click len o dich.
        </p>
        <div class="space-y-3">
          ${question.rows
            .map(
              (row, index) => `
            <div class="flex flex-col gap-2 rounded-xl border border-slate-100 p-3 md:flex-row md:items-start">
              <div class="flex-1 text-sm leading-6 text-slate-800">${escapeHtml(row.def)}</div>
              <div
                data-match-slot="${index}"
                class="match-slot min-h-[48px] min-w-[168px] flex-shrink-0 rounded-lg border-2 border-dashed border-indigo-200 bg-white px-2 py-2"
                tabindex="0"
                aria-label="O noi cho dong ${index + 1}"
              ></div>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="rounded-xl bg-slate-50 p-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Tu trong kho</p>
          <div id="matchPool" class="flex flex-wrap gap-2"></div>
        </div>
      </div>`;
  } else if (qType === "essay") {
    answerBodyHtml = `
      <textarea
        id="essayInput"
        class="mt-3 min-h-[160px] w-full rounded-xl border border-slate-300 p-3 text-sm text-slate-800 focus:border-blue-400 focus:outline-none"
        aria-label="Cau tra loi viet"
        spellcheck="false"
      ></textarea>
      <p class="mt-2 text-xs text-slate-500">
        He thong chap nhan bien the gan nghia (so sanh bang tu khoa). Hay viet day du bang tieng Anh như trong de.
      </p>`;
  }

  app.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h2 class="text-xl font-semibold">On luyen - ${exam.title}</h2>
        <span class="rounded-full bg-slate-100 px-3 py-1 text-sm">${progress}</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm">
        <span class="rounded-full bg-slate-100 px-3 py-1">Da tra loi: ${practiceStats.answeredCount}/${practiceQuestions.length}</span>
        <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Dung: ${practiceStats.correctCount}</span>
        <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-800">Sai: ${practiceStats.wrongCount}</span>
      </div>
      <p class="text-sm text-slate-500">Dang on theo ${exam.title} (${practiceQuestions.length} cau). Thu tu cau hoi va dap an da duoc tron ngau nhien.</p>
      ${passageHtml}
      <div class="rounded-xl border border-slate-200 p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">${
          qType === "match"
            ? "Noi (keo tha)"
            : qType === "essay"
              ? "Tu luan / viet cau"
              : "Trac nghiem"
        }</p>
        <p class="mt-2 font-medium text-slate-900">${escapeHtml(question.prompt)}</p>
        <div class="mt-4 space-y-2">${answerBodyHtml}</div>
      </div>
      <div class="flex flex-wrap gap-2">
        <button id="checkPracticeBtn" class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Kiem tra</button>
        <button id="changePracticeExamBtn" class="rounded-lg border border-blue-300 px-4 py-2 text-blue-700 hover:bg-blue-50">Doi ma de</button>
        <button id="backHomeBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Ve menu</button>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-slate-700">Danh sach cau (bam so de xem lai)</p>
        <div class="flex flex-wrap gap-2">
          ${practiceQuestions
            .map((item, index) => {
              const isActive = index === state.practiceQuestionIndex;
              const saved = (state.practiceAnswers[exam.id] || {})[item.id];
              const hasAnswer = Boolean(saved);
              const colorClass = isActive
                ? "bg-blue-600 text-white border-blue-600"
                : hasAnswer
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                  : "bg-white text-slate-700 border-slate-300";
              return `<button data-practice-q-index="${index}" class="jump-practice-question rounded-md border px-3 py-1 text-sm ${colorClass}">${index + 1}</button>`;
            })
            .join("")}
        </div>
      </div>
      <div id="practiceResult"></div>
    </div>
  `;

  if (qType === "mcq" && savedAnswer) {
    const inputToSelect = [...document.querySelectorAll('input[name="answer"]')].find(
      (input) =>
        normalizeText(input.value) === normalizeText(savedAnswer),
    );
    if (inputToSelect) {
      inputToSelect.checked = true;
    }
  }

  if (qType === "match") {
    const poolMount = document.getElementById("matchPool");
    if (poolMount && question.matchPool) {
      poolMount.innerHTML = question.matchPool
        .map(
          (term) =>
            `<div tabindex="0" draggable="true" data-match-term="${escapeHtml(term)}" class="match-chip cursor-move select-none rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-indigo-900 shadow-sm outline-none hover:bg-indigo-50 focus:ring-2 focus:ring-blue-400">${escapeHtml(term)}</div>`,
        )
        .join("");
      wireMatchDragPractice(question.rows.length);
    }
  }

  if (qType === "essay") {
    const essayBox = document.getElementById("essayInput");
    if (essayBox) {
      essayBox.value = savedAnswer;
    }
  }

  document.getElementById("checkPracticeBtn").addEventListener("click", () => {
    if (!state.practiceAnswers[exam.id]) {
      state.practiceAnswers[exam.id] = {};
    }

    let userAnswer = "";

    if (qType === "essay") {
      userAnswer = document.getElementById("essayInput")?.value.trim() || "";
      if (!userAnswer) {
        renderPracticeResult("Vui long nhap cau tra loi.", false, true);
        return;
      }
    } else if (qType === "match") {
      const assignments = readMatchAssignmentsFromDom(
        question.rows.length,
        "#practiceMatchRoot",
      );
      if (!isMatchAnswerComplete(assignments, question.rows.length)) {
        renderPracticeResult("Vui long noi du tung dong voi cuc tu trong kho.", false, true);
        return;
      }
      userAnswer = JSON.stringify(assignments);
    } else {
      userAnswer =
        document.querySelector('input[name="answer"]:checked')?.value || "";
      if (!userAnswer) {
        renderPracticeResult("Vui long chon dap an.", false, true);
        return;
      }
    }

    state.practiceAnswers[exam.id][question.id] = userAnswer;
    const isCorrect = isQuestionCorrect(question, userAnswer);

    if (isCorrect) {
      const explanation = question.explanation || "Ban lam dung.";
      renderPracticeResult(`Chinh xac! ${explanation}`, true);
      return;
    }

    const explanation = question.explanation || "";
    if (qType === "essay") {
      renderPracticeResult(
        `Chua dat nguong giong dap an mau hoac tu khoa. Dap an mau: ${question.answer}. ${explanation}`,
        false,
      );
      return;
    }
    if (qType === "match") {
      renderPracticeResult(
        `Sai. ${describeMatchMismatch(question, userAnswer)} Ket qua dung: ${formatMatchCorrectAnswer(question)}. ${explanation}`,
        false,
      );
      return;
    }
    renderPracticeResult(
      `Sai. Dap an dung: ${question.answer}. ${explanation}`,
      false,
    );
  });

  document.getElementById("backHomeBtn").addEventListener("click", resetApp);
  document
    .getElementById("changePracticeExamBtn")
    .addEventListener("click", renderPracticeExamSelect);

  document.querySelectorAll(".jump-practice-question").forEach((button) => {
    button.addEventListener("click", (event) => {
      const nextIndex = Number(event.currentTarget.dataset.practiceQIndex);
      state.practiceQuestionIndex = nextIndex;
      renderPractice();
    });
  });
}

function renderPracticeResult(message, isCorrect, isWarning = false) {
  const colorClass = isWarning
    ? "bg-amber-50 text-amber-700 border-amber-200"
    : isCorrect
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-rose-50 text-rose-700 border-rose-200";

  const canGoNext = !isWarning;
  const btn = canGoNext
    ? `<button id="nextPracticeBtn" class="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Cau tiep theo</button>`
    : "";

  document.getElementById("practiceResult").innerHTML = `
    <div class="rounded-lg border p-3 ${colorClass}">
      <p>${message}</p>
      ${btn}
    </div>
  `;

  if (canGoNext) {
    document.getElementById("nextPracticeBtn").addEventListener("click", () => {
      const exam = EXAMS[state.practiceExamIndex];
      const practiceQuestions = getPracticeQuestions(exam);
      const isEndOfExam =
        state.practiceQuestionIndex >= practiceQuestions.length - 1;

      if (!isEndOfExam) {
        state.practiceQuestionIndex += 1;
        renderPractice();
        return;
      }

      app.innerHTML = `
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">Hoan thanh on luyen ${exam.title}</h2>
          <p class="text-slate-600">Ban da lam het toan bo cau hoi cua ma de ${exam.id}.</p>
          <div class="flex flex-wrap gap-2">
            <button id="restartBtn" class="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">On lai de nay</button>
            <button id="chooseAnotherExamBtn" class="rounded-lg border border-blue-300 px-4 py-2 text-blue-700 hover:bg-blue-50">Chon ma de khac</button>
            <button id="goHomeBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Ve menu</button>
          </div>
        </div>
      `;
      document.getElementById("restartBtn").addEventListener("click", () => {
        state.practiceQuestionIndex = 0;
        state.practiceQuestionsByExam[exam.id] = buildShuffledExamQuestions(exam);
        renderPractice();
      });
      document
        .getElementById("chooseAnotherExamBtn")
        .addEventListener("click", renderPracticeExamSelect);
      document.getElementById("goHomeBtn").addEventListener("click", resetApp);
    });
  }
}

function startTest() {
  const allQuestions = EXAMS.flatMap((exam) =>
    exam.questions.map((q) => ({
      ...buildShuffledQuestion(q),
      sourceExam: exam.title,
    })),
  );
  state.testQuestions = shuffle(allQuestions).slice(0, 16);
  state.testIndex = 0;
  state.testAnswers = {};
  state.testDone = false;
  renderTest();
}

function isTestAnswerFilled(question) {
  const raw = state.testAnswers[question.id];
  if (raw === undefined || raw === null || raw === "") {
    return false;
  }
  const qType = question.type || "mcq";
  if (qType === "match") {
    const parsed = parseMatchUserAnswer(raw);
    return isMatchAnswerComplete(parsed, question.rows.length);
  }
  return true;
}

function renderTest() {
  if (state.testDone) {
    renderTestResult();
    return;
  }

  const question = state.testQuestions[state.testIndex];
  const qType = question.type || "mcq";
  const progress = `${state.testIndex + 1}/${state.testQuestions.length}`;
  const stats = getTestStats();
  const passageHtml = question.passageId
    ? `
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Doan van co dinh</p>
        <p class="text-sm leading-6 text-slate-700">${READING_PASSAGES[question.passageId]}</p>
      </div>
    `
    : "";

  let answerBodyHtml = "";
  if (qType === "mcq") {
    answerBodyHtml = question.options
      .map((option) => {
        const checked =
          normalizeText(state.testAnswers[question.id] || "") ===
          normalizeText(option)
            ? "checked"
            : "";
        return `
        <label class="block cursor-pointer rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <input type="radio" name="testAnswer" value="${escapeHtml(option)}" class="mr-2" ${checked} />
          <span>${escapeHtml(option)}</span>
        </label>
      `;
      })
      .join("");
  } else if (qType === "match") {
    answerBodyHtml = `
      <div id="testMatchRoot" class="space-y-4">
        <p class="text-xs text-slate-500">Keo tu kho vao tung dong (hoac click chon cuc tu roi click o).</p>
        <div class="space-y-3">
          ${question.rows
            .map(
              (row, index) => `
            <div class="flex flex-col gap-2 rounded-xl border border-slate-100 p-3 md:flex-row md:items-start">
              <div class="flex-1 text-sm leading-6 text-slate-800">${escapeHtml(row.def)}</div>
              <div
                data-match-slot="${index}"
                class="match-slot min-h-[48px] min-w-[168px] flex-shrink-0 rounded-lg border-2 border-dashed border-indigo-200 bg-white px-2 py-2"
                tabindex="0"
                aria-label="O noi cho dong ${index + 1}"
              ></div>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="rounded-xl bg-slate-50 p-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Tu trong kho</p>
          <div id="matchPoolTest" class="flex flex-wrap gap-2"></div>
        </div>
      </div>`;
  } else if (qType === "essay") {
    answerBodyHtml = `
      <textarea
        id="essayTestInput"
        class="mt-3 min-h-[160px] w-full rounded-xl border border-slate-300 p-3 text-sm text-slate-800 focus:border-blue-400 focus:outline-none"
        aria-label="Cau tra loi viet"
        spellcheck="false"
      ></textarea>`;
  }

  const typeLabel =
    qType === "match"
      ? "Noi (keo tha)"
      : qType === "essay"
        ? "Tu luan / viet cau"
        : "Trac nghiem";

  app.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h2 class="text-xl font-semibold">Thi nhanh</h2>
        <span class="rounded-full bg-blue-100 px-3 py-1 text-sm">${progress}</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm">
        <span class="rounded-full bg-slate-100 px-3 py-1">Da tra loi: ${stats.answeredCount}/${state.testQuestions.length}</span>
        <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Dung tam thoi: ${stats.correctCount}</span>
        <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-800">Sai tam thoi: ${stats.wrongCount}</span>
      </div>
      <p class="text-sm text-slate-500">Moi cau duoc random tu de goc. Nop bai de cham diem.</p>
      ${passageHtml}
      <div class="rounded-xl border border-slate-200 p-4">
        <p class="mb-1 text-xs text-slate-500">Nguon: ${escapeHtml(question.sourceExam)}</p>
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">${typeLabel}</p>
        <p class="mt-2 font-medium text-slate-900">${escapeHtml(question.prompt)}</p>
        <div class="mt-4 space-y-2">${answerBodyHtml}</div>
      </div>
      <div class="flex flex-wrap gap-2">
        <button id="prevTestBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50" ${state.testIndex === 0 ? "disabled" : ""}>Lui</button>
        <button id="nextTestBtn" class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">${state.testIndex === state.testQuestions.length - 1 ? "Nop bai" : "Tiep"}</button>
        <button id="restartTestBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Thi lai bo de moi</button>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-slate-700">Danh sach cau (bam so de xem lai)</p>
        <div class="flex flex-wrap gap-2">
          ${state.testQuestions
            .map((item, index) => {
              const isActive = index === state.testIndex;
              const hasAnswer = isTestAnswerFilled(item);
              const colorClass = isActive
                ? "bg-blue-600 text-white border-blue-600"
                : hasAnswer
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                  : "bg-white text-slate-700 border-slate-300";
              return `<button data-q-index="${index}" class="jump-question rounded-md border px-3 py-1 text-sm ${colorClass}">${index + 1}</button>`;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;

  if (qType === "match") {
    const poolMount = document.getElementById("matchPoolTest");
    if (poolMount && question.matchPool) {
      poolMount.innerHTML = question.matchPool
        .map(
          (term) =>
            `<div tabindex="0" draggable="true" data-match-term="${escapeHtml(term)}" class="match-chip cursor-move select-none rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-indigo-900 shadow-sm outline-none hover:bg-indigo-50 focus:ring-2 focus:ring-blue-400">${escapeHtml(term)}</div>`,
        )
        .join("");
      wireMatchDragTest(question.rows.length);
      hydrateTestMatchSlots(question, state.testAnswers[question.id] || "");
    }
  }

  if (qType === "essay") {
    const essayBox = document.getElementById("essayTestInput");
    if (essayBox) {
      essayBox.value = state.testAnswers[question.id] || "";
    }
  }

  document.getElementById("prevTestBtn").addEventListener("click", () => {
    saveTestAnswer(question);
    if (state.testIndex > 0) {
      state.testIndex -= 1;
      renderTest();
    }
  });

  document.getElementById("nextTestBtn").addEventListener("click", () => {
    saveTestAnswer(question);
    if (!isTestAnswerFilled(question)) {
      alert("Vui long tra loi day du cau nay truoc khi tiep tuc.");
      return;
    }

    if (state.testIndex < state.testQuestions.length - 1) {
      state.testIndex += 1;
      renderTest();
      return;
    }

    state.testDone = true;
    renderTest();
  });

  document.getElementById("restartTestBtn").addEventListener("click", startTest);

  document.querySelectorAll(".jump-question").forEach((button) => {
    button.addEventListener("click", (event) => {
      saveTestAnswer(question);
      const nextIndex = Number(event.currentTarget.dataset.qIndex);
      state.testIndex = nextIndex;
      renderTest();
    });
  });
}

function saveTestAnswer(question) {
  const qType = question.type || "mcq";
  if (qType === "essay") {
    state.testAnswers[question.id] =
      document.getElementById("essayTestInput")?.value.trim() || "";
    return;
  }
  if (qType === "match") {
    const assignments = readMatchAssignmentsFromDom(
      question.rows.length,
      "#testMatchRoot",
    );
    state.testAnswers[question.id] = JSON.stringify(assignments);
    return;
  }
  const value =
    document.querySelector('input[name="testAnswer"]:checked')?.value || "";
  state.testAnswers[question.id] = value;
}

function renderTestResult() {
  const details = state.testQuestions.map((question, index) => {
    const raw = state.testAnswers[question.id] || "(khong tra loi)";
    const userAnswerDisplay =
      (question.type || "mcq") === "match"
        ? formatMatchAnswerForSummary(question, raw === "(khong tra loi)" ? "" : raw)
        : raw;
    const correct = isQuestionCorrect(
      question,
      raw === "(khong tra loi)" ? "" : raw,
    );
    return {
      index: index + 1,
      question,
      userAnswerDisplay,
      correct,
    };
  });

  const correctCount = details.filter((item) => item.correct).length;
  const total = details.length;
  const score10 = ((correctCount / total) * 10).toFixed(2);

  const wrongCount = total - correctCount;

  app.innerHTML = `
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Ket qua bai thi nhanh</h2>
      <div class="rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p class="text-lg font-semibold">${correctCount}/${total} cau dung</p>
        <p class="text-sm text-rose-700">So cau sai: ${wrongCount}</p>
        <p>Diem quy doi: <span class="font-bold">${score10}/10</span></p>
      </div>
      <div class="space-y-3">
        ${details
          .map((item) => {
            const badge = item.correct
              ? '<span class="text-emerald-700">Dung</span>'
              : '<span class="text-rose-700">Sai</span>';
            return `
              <div class="rounded-xl border border-slate-200 p-3">
                <p class="font-medium">Cau ${item.index}: ${escapeHtml(item.question.prompt)}</p>
                <p class="mt-2 text-sm">Ban lam: <span class="font-semibold whitespace-pre-wrap">${escapeHtml(item.userAnswerDisplay)}</span> — ${badge}</p>
                ${
                  item.correct
                    ? `<p class="text-sm text-slate-700">Giai thich: ${escapeHtml(item.question.explanation || "Ban da lam dung.")}</p>`
                    : `<p class="text-sm text-slate-700">Dap an dung: <span class="font-semibold whitespace-pre-wrap">${escapeHtml(
                        (item.question.type || "mcq") === "match"
                          ? formatMatchCorrectAnswer(item.question)
                          : String(item.question.answer),
                      )}</span></p><p class="text-sm text-slate-700">Giai thich: ${escapeHtml(item.question.explanation || "Hay doi chieu lai muc trong de.")}</p>`
                }
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="flex flex-wrap gap-2">
        <button id="newTestBtn" class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Thi bo moi</button>
        <button id="homeBtn" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Ve menu</button>
      </div>
    </div>
  `;

  document.getElementById("newTestBtn").addEventListener("click", startTest);
  document.getElementById("homeBtn").addEventListener("click", resetApp);
}

function resetApp() {
  state.mode = null;
  state.practiceExamIndex = 0;
  state.practiceQuestionIndex = 0;
  state.practiceAnswers = {};
  state.practiceQuestionsByExam = {};
  state.testQuestions = [];
  state.testIndex = 0;
  state.testAnswers = {};
  state.testDone = false;
  renderModeSelect();
}

renderModeSelect();
