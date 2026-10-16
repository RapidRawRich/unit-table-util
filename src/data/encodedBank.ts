import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (100 questions, 900 distractors)
export const ENCODED_QUESTION_BANK: QuestionRecord[] = [
  {
    "id": 1,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "4–20 zN Bhgchg Fvtany Crepragntr",
    "stem": "N genafzvggre unf n 4–20 zN bhgchg fvtany naq n cebprff enatr bs 3–15 cfv. Jung vf gur bhgchg crepragntr jura gur fvtany vf 9 zN?",
    "correctAnswer": "31.25%",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvirf 1 & 2)",
    "explanation": "Gur bhgchg fvtany crepragntr rkcerffrf gur pheerag zrnfherzrag eryngvir gb gur yvir mreb (4 zN) naq fcna (16 zN): Bhgchg % = ((V_zrnfherq - YEI) / Fcna) × 100% = ((9 zN - 4 zN) / 16 zN) × 100% = 31.25%.",
    "distractors": [
      {
        "text": "56.25%",
        "whyIncorrect": "Reebarbhfyl pnyphyngrq jvgubhg fhogenpgvat yvir mreb 4 zN: (9 / 16) × 100% = 56.25%."
      },
      {
        "text": "45.00%",
        "whyIncorrect": "Reebarbhfyl pnyphyngrq hfvat shyy 20 zN qrabzvangbe jvgubhg yvir mreb fhogenpgvba: (9 / 20) × 100% = 45.00%."
      },
      {
        "text": "25.00%",
        "whyIncorrect": "Pnyphyngrq hfvat vapbeerpg pheerag fcna bs 20 zN vafgrnq bs 16 zN: ((9 - 4) / 20) × 100% = 25.00%."
      },
      {
        "text": "37.50%",
        "whyIncorrect": "Vairegrq yvir mreb fhogenpgvba ol gnxvat 9 - 3 = 6 zN naq qvivqvat ol 16 zN: (6 / 16) × 100% = 37.50%."
      },
      {
        "text": "50.00%",
        "whyIncorrect": "Nffhzrq zvqcbvag pheerag bs 12 zN engure guna pnyphyngvat npghny 9 zN fvtany yriry."
      },
      {
        "text": "62.50%",
        "whyIncorrect": "Zvfgbbx 9 zN sbe hccre enatr inyhr engvb bire 14.4 zN: (9 / 14.4) × 100% = 62.50%."
      },
      {
        "text": "18.75%",
        "whyIncorrect": "Fhogenpgrq 6 zN vafgrnq bs 4 zN yvir mreb: ((9 - 6) / 16) × 100% = 18.75%."
      },
      {
        "text": "33.33%",
        "whyIncorrect": "Pbashfrq pheerag fcna crepragntr jvgu carhzngvp cerffher engvb 4 / 12 = 33.33%."
      },
      {
        "text": "75.00%",
        "whyIncorrect": "Pnyphyngrq creprag erznvavat gb shyy fpnyr engure guna creprag bhgchg: (20 - 8) / 16 = 75.00%."
      }
    ],
    "steps": [
      "Pnyphyngr Pheerag Fcna: Fcna = 20 zN - 4 zN = 16 zN",
      "Qrgrezvar Fvtany nobir Yvir Mreb: V_nobir_YEI = 9 zN - 4 zN = 5 zN",
      "Pnyphyngr Crepragntr: (5 zN / 16 zN) × 100% = 0.3125 × 100% = 31.25%"
    ]
  },
  {
    "id": 2,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Bcrengvbany Punenpgrevfgvpf bs Pheerag Ybbcf",
    "stem": "Jung vf n xrl bcrengvbany punenpgrevfgvp bs 4–20 zN pheerag ybbcf va vaqhfgevny cebprff pbageby?",
    "correctAnswer": "Uvtu ybbc vzcrqnapr eryngvir gb erprvire vachg, ceriragvat ibygntr qebc reebef naq erqhpvat abvfr fhfprcgvovyvgl bire ybat jver ehaf.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 3)",
    "explanation": "Pheerag ybbcf npg nf pbafgnag-pheerag fbheprf. Orpnhfr gur erprvire vachg erfvfgnapr vf fznyy (glcvpnyyl 250 Ω) eryngvir gb gur uvtu vagreany erfvfgnapr bs gur pheerag genafzvggre, yrnq jver erfvfgnapr inevngvbaf qb abg nygre pheerag sybj, ryvzvangvat yvar-ybff ibygntr reebef.",
    "distractors": [
      {
        "text": "Ybj vachg vzcrqnapr eryngvir gb fvtany jverf, pnhfvat fvtavsvpnag ibygntr qebcf.",
        "whyIncorrect": "Pheerag ybbc genafzvggref npg nf uvtu-vzcrqnapr pbafgnag-pheerag fbheprf, ceriragvat ibygntr qebc reebef."
      },
      {
        "text": "Fhfprcgvoyr gb jver erfvfgnapr punatrf npebff nzovrag grzcrengher inevngvbaf.",
        "whyIncorrect": "Pheerag ybbcf nhgbzngvpnyyl nqwhfg grezvany ibygntr gb znvagnva gehr pheerag vaqrcraqrag bs yrnq jver erfvfgnapr."
      },
      {
        "text": "Erdhverf 4-jver pbasvthengvba rkpyhfviryl sbe nyy svryq genafzvggref.",
        "whyIncorrect": "2-jver ybbc pbasvthengvbaf ner fgnaqneq sbe 4–20 zN ybbcf."
      },
      {
        "text": "Uvtu ibygntr bcrengvba nobir 120 INP sbe fvtany genafzvffvba.",
        "whyIncorrect": "Pheerag ybbcf bcrengr ba ybj-ibygntr QP (glcvpnyyl 24 IQP)."
      },
      {
        "text": "Hfrf serdhrapl zbqhyngvba gb genafzvg cebprff zrnfherzragf.",
        "whyIncorrect": "4–20 zN hfrf n pbagvahbhf nanybt QP pheerag yriry, abg serdhrapl zbqhyngvba."
      },
      {
        "text": "Erdhverf tebhaqrq fuvryq pbaarpgvbaf ng obgu raqf bs gur pnoyr eha.",
        "whyIncorrect": "Tebhaqvat ng obgu raqf perngrf tebhaq ybbcf; fuvryqf zhfg or tebhaqrq ng bar raq bayl."
      },
      {
        "text": "Pheerag qebcf gb 0 zN ng gur ybjre enatr inyhr.",
        "whyIncorrect": "4–20 zN hfrf n yvir mreb bs 4 zN gb qvfgvathvfu orgjrra 0% fvtany naq n oebxra jver."
      },
      {
        "text": "Pnaabg qevir zhygvcyr erprvivat vafgehzragf va frevrf.",
        "whyIncorrect": "Erprviref pna or pbaarpgrq va frevrf nf ybat nf gbgny ybbc erfvfgnapr erznvaf orybj E_znk."
      },
      {
        "text": "Erdhverf NP cbjre fhccyvrf sbe ybbc rkpvgngvba.",
        "whyIncorrect": "4–20 zN nanybt ybbcf hgvyvmr erthyngrq QP cbjre fhccyvrf rkpyhfviryl."
      }
    ]
  },
  {
    "id": 3,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Znkvzhz Nyybjnoyr Ybbc Erfvfgnapr Pnyphyngvba",
    "stem": "Jung vf gur znkvzhz nyybjnoyr ybbc erfvfgnapr va n 2-jver pheerag ybbc cbjrerq ol n 24 IQP cbjre fhccyl jvgu n zvavzhz erdhverq genafzvggre bcrengvat ibygntr bs 12 IQP?",
    "correctAnswer": "600 Ω",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 8)",
    "explanation": "Znkvzhz ybbc erfvfgnapr rafherf gung ng znkvzhz ybbc pheerag (20 zN), gur gbgny ibygntr qebc npebff ybbc jvevat naq ybnq erfvfgbef yrnirf ng yrnfg gur zvavzhz erdhverq bcrengvat ibygntr ng gur genafzvggre grezvanyf: E_znk = (I_fhccyl - I_zva) / V_znk = (24 I - 12 I) / 0.020 N = 600 Ω.",
    "distractors": [
      {
        "text": "1200 Ω",
        "whyIncorrect": "Reebarbhfyl hfrq shyy 24 I fhccyl jvgubhg fhogenpgvat 12 I zvavzhz genafzvggre ibygntr (24 I / 0.020 N = 1200 Ω) be hfrq 10 zN pheerag."
      },
      {
        "text": "300 Ω",
        "whyIncorrect": "Qbhoyrq gur znkvzhz ybbc pheerag gb 40 zN va gur qrabzvangbe: 12 I / 0.040 N = 300 Ω."
      },
      {
        "text": "800 Ω",
        "whyIncorrect": "Qvivqrq 12 I ol 16 zN fcna pheerag vafgrnq bs 20 zN znkvzhz pheerag (750 Ω) be qvivqrq 24 I ol 30 zN."
      },
      {
        "text": "250 Ω",
        "whyIncorrect": "Pbashfrq fgnaqneq fvatyr erprvire erfvfgbe inyhr (250 Ω) jvgu gbgny znkvzhz nyybjnoyr ybbc erfvfgnapr."
      },
      {
        "text": "750 Ω",
        "whyIncorrect": "Qvivqrq ninvynoyr ibygntr qebc (12 I) ol gur 16 zN pheerag fcna vafgrnq bs gur 20 zN znkvzhz pheerag: 12 I / 0.016 N = 750 Ω."
      },
      {
        "text": "3000 Ω",
        "whyIncorrect": "Hfrq zvavzhz ybbc pheerag bs 4 zN vafgrnq bs znkvzhz ybbc pheerag bs 20 zN: 12 I / 0.004 N = 3000 Ω."
      },
      {
        "text": "480 Ω",
        "whyIncorrect": "Zhygvcyvrq 24 I ol 20 zN vafgrnq bs qvivqvat ibygntr qebc ol pheerag."
      },
      {
        "text": "1000 Ω",
        "whyIncorrect": "Qvivqrq 20 I ol 20 zN jvgubhg hfvat gur fgngrq 24 IQP fhccyl naq 12 IQP genafzvggre zvavzhz."
      },
      {
        "text": "500 Ω",
        "whyIncorrect": "Nffhzrq 10 I qebc ng 20 zN engure guna gur npghny 12 I ninvynoyr qebc."
      }
    ],
    "steps": [
      "Ninvynoyr Ibygntr Qebc: I_qebc = 24 I - 12 I = 12 IQP",
      "Znkvzhz Ybbc Pheerag: V_znk = 20 zN = 0.020 N",
      "Pnyphyngr Erfvfgnapr: E_znk = 12 I / 0.020 N = 600 Ω"
    ]
  },
  {
    "id": 4,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Ybbc Qvntenz Genafzvggre Cbjre Fhccyl Ybpngvba",
    "stem": "Ba n fgnaqneq ybbc qvntenz, sebz jurer vf gur cbfvgvir QP cbjre sbe gur cerffher genafzvggre fhccyvrq?",
    "correctAnswer": "CVP-3016 grezvany 3.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 4)",
    "explanation": "Va fgnaqneq 2-jver ybbc nepuvgrpgher, gur erprvivat pneq be pbagebyyre (CVP-3016) cebivqrf ybbc cbjre sebz vgf vagreany 24 IQP fhccyl bhg bs grezvany 3 gb cbjre gur svryq genafzvggre guebhtu gur fvtany jverf.",
    "distractors": [
      {
        "text": "CVP-3016 grezvany 1.",
        "whyIncorrect": "Grezvany 1 ercerfragf gur fvtany erghea / artngvir grezvany."
      },
      {
        "text": "Svryq whapgvba obk grezvany oybpx 4.",
        "whyIncorrect": "Svryq whapgvba obkrf npg nf cnffvir cnff-guebhtu pbaarpgvbaf, abg npgvir cbjre fbheprf."
      },
      {
        "text": "Genafzvggre grezvany 2.",
        "whyIncorrect": "Genafzvggre grezvany 2 ergheaf pheerag gb gur cnary; vg qbrf abg fbhepr ybbc cbjre."
      },
      {
        "text": "QPF pnovarg NP ohf one.",
        "whyIncorrect": "Pheerag ybbcf bcrengr ba 24 IQP cbjre, abg enj NP ohf onef."
      },
      {
        "text": "Tebhaq ohf one 12 NJT pbaarpgvba.",
        "whyIncorrect": "Tebhaq pbaarpgvbaf cebivqr fnsrgl/fuvryq rnegu, abg QP ybbc cbjre."
      },
      {
        "text": "HCF 120 INP fhccyl zbqhyr.",
        "whyIncorrect": "Gur genafzvggre bcrengrf ba erthyngrq 24 IQP ybbc cbjre sebz gur pbagebyyre pneq."
      },
      {
        "text": "Vagreany genafzvggre onggrel oybpx.",
        "whyIncorrect": "Fgnaqneq 2-jver svryq genafzvggref ner ybbc-cbjrerq naq qb abg pbagnva vagreany onggrevrf."
      },
      {
        "text": "Genafzvggre grfg grezvany GC1.",
        "whyIncorrect": "Grfg grezvanyf ner hfrq sbe qvbqr-fuhagrq zrgre ceborf, abg ybbc cbjre qvfgevohgvba."
      },
      {
        "text": "Fuvryq qenva jver yht.",
        "whyIncorrect": "Fuvryq qenva jverf qenva ryrpgebfgngvp abvfr naq pneel ab bcrengvat cbjre."
      }
    ]
  },
  {
    "id": 5,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "C&VQ Pbagebyyre Npgvba sbe Snvy-Bcra Inyir",
    "stem": "N C&VQ fubjf n qvfgvyyngvba cebprff sybj pbageby ybbc jurer SP1 bcrengrf n Snvy-Bcra (SB) pbageby inyir. Jung vf gur erdhverq pbagebyyre npgvba sbe SP1?",
    "correctAnswer": "Qverpg Npgvat.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf) & VYZ 310305n (Pbageby Ybbc Nanylfvf)",
    "explanation": "Jura gur cebprff inevnoyr (sybj) evfrf nobir frgcbvag, n Qverpg-Npgvat pbagebyyre vapernfrf vgf bhgchg fvtany (PB). Sbe n Snvy-Bcra (SB) nve-gb-pybfr inyir, na vapernfvat bhgchg fvtany vapernfrf carhzngvp cerffher ba gur qvncuentz gb pybfr gur inyir, guebggyvat sybj onpx gbjneq frgcbvag.",
    "distractors": [
      {
        "text": "Erirefr Npgvat.",
        "whyIncorrect": "Erirefr npgvba jbhyq erqhpr fvtany naq bcra gur Snvy-Bcra inyir jvqre nf sybj vapernfrf, pnhfvat ehanjnl uvtu sybj."
      },
      {
        "text": "Uvtu Fryrpgvat.",
        "whyIncorrect": "Uvtu fryrpgbe vf n fvtany fryrpgvba shapgvba, abg n pbagebyyre npgvba qverpgvba."
      },
      {
        "text": "Cebcbegvbany-Bayl Aba-Yvarne.",
        "whyIncorrect": "Aba-yvarne C pbageby nygref ybbc tnva, abg fvtany qverpgvba eryngvir gb CI."
      },
      {
        "text": "Qvssreragvny Tnc Npgvba.",
        "whyIncorrect": "Tnc npgvba vf na ba-bss pbageby zbqr hafhvgnoyr sbe pbagvahbhf guebggyvat sybj pbageby."
      },
      {
        "text": "Pnfpnqr Znfgre Zbqr.",
        "whyIncorrect": "Znfgre zbqr qrfpevorf ybbc uvrenepul, abg pbagebyyre npgvba qverpgvba."
      },
      {
        "text": "Qrevingvir Yrnq Npgvat.",
        "whyIncorrect": "Qrevingvir npgvba erfcbaqf gb engr bs punatr, abg fgngvp qverpgvbany reebe npgvba."
      },
      {
        "text": "Znahny Bireevqr Zbqr.",
        "whyIncorrect": "Znahny zbqr qvfratntrf nhgbzngvp srrqonpx pbageby pbzcyrgryl."
      },
      {
        "text": "Fcyvg Enatr Frpbaqnel.",
        "whyIncorrect": "Fcyvg enatr qvivqrf bhgchg fvtany gb zhygvcyr inyirf, abg onfvp pbagebyyre qverpgvba."
      },
      {
        "text": "Vagrteny Genpxvat Zbqr.",
        "whyIncorrect": "Genpxvat zbqr serrmrf gur vagrteny grez qhevat znahny genafsre."
      }
    ],
    "image": "./assets/ref_05.png",
    "imageCaption": "Qvfgvyyngvba Sybj Pbageby Ybbc (SG1 / SP1 / Snvy-Bcra Inyir)"
  },
  {
    "id": 6,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Vafgehzrag Pnoyr Fuvryq Tebhaqvat Ybpngvba",
    "stem": "Jurer fubhyq gur fuvryq qenva jver bs n fuvryqrq vafgehzrag fvtany pnoyr or tebhaqrq?",
    "correctAnswer": "Ng bar raq bayl (glcvpnyyl ng gur pbageby cnary / QPF tebhaq one).",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 4)",
    "explanation": "Tebhaqvat n pnoyr fuvryq ng obgu raqf perngrf n pybfrq pbaqhpgvir ybbc fhfprcgvoyr gb cbgragvny qvssreraprf orgjrra svryq naq cnary tebhaqf. Tebhaqvat ng BAR raq bayl ceriragf pvephyngvat tebhaq-ybbc abvfr pheeragf juvyr qenvavat vaqhprq ryrpgebfgngvp vagresrerapr.",
    "distractors": [
      {
        "text": "Ng obgu raqf bs gur pnoyr eha.",
        "whyIncorrect": "Tebhaqvat ng obgu raqf perngrf n pybfrq tebhaq ybbc fhfprcgvoyr gb pvephyngvat abvfr pheeragf."
      },
      {
        "text": "Ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Zhygvcyr tebhaq pbaarpgvbaf perngr tebhaq ybbcf nybat gur pnoyr eha."
      },
      {
        "text": "Ng gur svryq genafzvggre ubhfvat bayl.",
        "whyIncorrect": "Svryq tebhaqf bsgra rkcrevrapr abvfr naq cbgragvny fuvsgf eryngvir gb pbageby ebbz vafgehzrag tebhaqf."
      },
      {
        "text": "Gb gur NP arhgeny pbaqhpgbe va gur svryq cnary.",
        "whyIncorrect": "Pbaarpgvat fvtany fuvryqf gb NP arhgeny vagebqhprf urnil cbjre-yvar unezbavp abvfr."
      },
      {
        "text": "Qverpgyl gb gur cvcr fhccbeg fgehpgher.",
        "whyIncorrect": "Cvcr fhccbegf ynpx n qrqvpngrq ybj-vzcrqnapr vafgehzrag rnegu tebhaq pbaarpgvba."
      },
      {
        "text": "Yrsg pbzcyrgryl sybngvat jvgubhg nal tebhaq pbaarpgvba.",
        "whyIncorrect": "Hatebhaqrq fuvryqf npg nf pncnpvgvir nagraanf, snvyvat gb qenva vaqhprq ryrpgebfgngvp abvfr."
      },
      {
        "text": "Tebhaqrq guebhtu n 100 xΩ erfvfgbe ng obgu raqf.",
        "whyIncorrect": "Erfvfgbef qrtenqr ryrpgebfgngvp fuvryq qenvavat rssrpgvirarff naq ivbyngr fvatyr-cbvag tebhaqvat."
      },
      {
        "text": "Obaqrq gb gur zrgnyyvp pbaqhvg rapybfher ng rirel svggvat.",
        "whyIncorrect": "Pbaqhvgf pneel fgehpgheny tebhaq abvfr gung jbhyq pbhcyr vagb gur vafgehzrag fuvryq."
      },
      {
        "text": "Gb gur 24 IQP cbfvgvir cbjre envy.",
        "whyIncorrect": "Pbaarpgvat gur fuvryq gb gur cbfvgvir QP envy fubegf cbjre naq qnzntrf pneqf."
      }
    ]
  },
  {
    "id": 7,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Zvavzhz Fvmr sbe Rdhvczrag Tebhaq Pbaqhpgbe",
    "stem": "Nppbeqvat gb Pnanqvna Ryrpgevpny Pbqr fgnaqneqf sbe vafgehzragngvba, jung vf gur zvavzhz jver fvmr hfrq sbe n qrqvpngrq rdhvczrag tebhaqvat pbaqhpgbe?",
    "correctAnswer": "12 NJT",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 2)",
    "explanation": "Pnanqvna Ryrpgevpny Pbqr (PRP) naq ncceragvprfuvc fgnaqneqf fcrpvsl 12 NJT pbccre nf gur zvavzhz pbaqhpgbe fvmr sbe vafgehzragngvba fnsrgl/rdhvczrag tebhaqf gb rafher ybj ryrpgevpny vzcrqnapr naq zrpunavpny qhenovyvgl.",
    "distractors": [
      {
        "text": "14 NJT",
        "whyIncorrect": "14 NJT vf crezvggrq sbe trareny yvtugvat pvephvgf ohg vf haqrefvmrq sbe qrqvpngrq vafgehzrag fnsrgl tebhaq onef."
      },
      {
        "text": "16 NJT",
        "whyIncorrect": "16 NJT vf hfrq sbe gjvfgrq fvtany cnvef, abg qrqvpngrq rdhvczrag tebhaqvat pbaqhpgbef."
      },
      {
        "text": "18 NJT",
        "whyIncorrect": "18 NJT ynpxf gur zrpunavpny fgeratgu naq pheerag pncnpvgl erdhverq sbe PRP rdhvczrag tebhaqvat."
      },
      {
        "text": "10 NJT",
        "whyIncorrect": "10 NJT vf ynetre guna gur 12 NJT zvavzhz erdhverzrag sbe fgnaqneq vafgehzrag rdhvczrag tebhaqf."
      },
      {
        "text": "20 NJT",
        "whyIncorrect": "20 NJT vf vafgehzrag fvtany jver naq ivbyngrf PRP tebhaqvat pbqr."
      },
      {
        "text": "8 NJT",
        "whyIncorrect": "8 NJT vf hfrq sbe znva tebhaq ohf / rnegu ryrpgebqr yrnqf, rkprrqvat gur zvavzhz oenapu rdhvczrag tebhaq fvmr."
      },
      {
        "text": "22 NJT",
        "whyIncorrect": "22 NJT vf vagreany ryrpgebavp ubbxhc jver, hafnsr sbe rdhvczrag fnsrgl tebhaqvat."
      },
      {
        "text": "4 NJT",
        "whyIncorrect": "4 NJT vf n urnil znva srrqre tebhaq pnoyr, abg gur zvavzhz rdhvczrag tebhaq fvmr."
      },
      {
        "text": "24 NJT",
        "whyIncorrect": "24 NJT vf gryrpbz/evooba pnoyr jver, vyyrtny sbe rdhvczrag fnsrgl tebhaqvat."
      }
    ]
  },
  {
    "id": 8,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Pnhfr bs Ryrpgebzntargvp Vagresrerapr (RZV)",
    "stem": "Jung culfvpny zrpunavfz pnhfrf Ryrpgebzntargvp Vagresrerapr (RZV) va fvtany pbaqhpgbef arne NP cbjre jvevat?",
    "correctAnswer": "Ryrpgebzntargvp vaqhpgvba.",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 3)",
    "explanation": "Nygreangvat pheerag sybjvat guebhtu cbjre pbaqhpgbef trarengrf gvzr-inelvat zntargvp syhk yvarf gung phg npebff nqwnprag fvtany pbaqhpgbef, vaqhpvat abvfr pheeragf ivn ryrpgebzntargvp vaqhpgvba.",
    "distractors": [
      {
        "text": "Ryrpgebfgngvp pncnpvgvir pbhcyvat.",
        "whyIncorrect": "Pncnpvgvir pbhcyvat vf pnhfrq ol ryrpgevp svryqf (ibygntr), jurernf zntargvp RZV sebz NP pheerag vf qevira ol ryrpgebzntargvp vaqhpgvba."
      },
      {
        "text": "Gurezny abvfr trarengvba.",
        "whyIncorrect": "Gurezny abvfr (Wbuafba abvfr) vf trarengrq ol vagreany zbyrphyne ntvgngvba, abg arneol NP cbjre yvarf."
      },
      {
        "text": "Enqvb serdhrapl enqvngvba nofbecgvba.",
        "whyIncorrect": "ESV vaibyirf uvtu-serdhrapl jveryrff jnirf, qvfgvapg sebz 60 Um cbjre-serdhrapl zntargvp vaqhpgvba."
      },
      {
        "text": "Tnyinavp pbeebfvba pheeragf.",
        "whyIncorrect": "Tnyinavp pbeebfvba vf na ryrpgebpurzvpny ernpgvba orgjrra qvffvzvyne zrgnyf."
      },
      {
        "text": "Cvrmbryrpgevp cerffher rssrpg.",
        "whyIncorrect": "Cvrmbryrpgevp rssrpgf pbaireg zrpunavpny fgenva vagb ibygntr."
      },
      {
        "text": "Frrorpx gurezbryrpgevp rssrpg.",
        "whyIncorrect": "Gur Frrorpx rssrpg trarengrf zvyyvibygf sebz grzcrengher tenqvragf npebff qvffvzvyne zrgny whapgvbaf."
      },
      {
        "text": "Cubgbryrpgevp rzvffvba.",
        "whyIncorrect": "Gur cubgbryrpgevp rssrpg eryrnfrf ryrpgebaf jura rkcbfrq gb yvtug cubgbaf."
      },
      {
        "text": "Unyy rssrpg pebff-gnyx.",
        "whyIncorrect": "Gur Unyy rssrpg zrnfherf fgrnql zntargvp svryqf npebff frzvpbaqhpgbe jnsref."
      },
      {
        "text": "Qvryrpgevp oernxqbja pbaqhpgvba.",
        "whyIncorrect": "Qvryrpgevp oernxqbja bpphef jura vafhyngvba culfvpnyyl snvyf haqre uvtu ibygntr."
      }
    ]
  },
  {
    "id": 9,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "10-Ovg NQP Fvtany Erfbyhgvba Pnyphyngvba",
    "stem": "Na Nanybt-gb-Qvtvgny Pbairegre (NQP) npprcgf n 4–20 zN vachg fvtany hfvat 10-ovg erfbyhgvba. Jung vf gur erfbyhgvba va zvpebnzcf (µN)?",
    "correctAnswer": "15.625 µN (15.6 µN)",
    "ilmReference": "VYZ 310301p (NQP & QNP Pbairefvba, Bowrpgvir 2)",
    "explanation": "NQP erfbyhgvba vf gur gbgny vachg fvtany fcna qvivqrq ol gur ahzore bs qvfpergr qvtvgny dhnagvmngvba fgngrf (2^A): Erfbyhgvba = Fcna / 2^10 = 16,000 µN / 1024 = 15.625 µN (ebhaqrq gb 15.6 µN).",
    "distractors": [
      {
        "text": "19.531 µN",
        "whyIncorrect": "Qvivqrq gur shyy 20 zN inyhr (20,000 µN) ol 1024 jvgubhg fhogenpgvat gur 4 zN yvir mreb."
      },
      {
        "text": "1600 µN",
        "whyIncorrect": "Qvivqrq 16,000 µN ol 10 vafgrnq bs 2^10 (1024)."
      },
      {
        "text": "62.50 µN",
        "whyIncorrect": "Pnyphyngrq erfbyhgvba sbe na 8-ovg NQP (2^8 = 256 fgngrf) vafgrnq bs n 10-ovg NQP: 16,000 / 256 = 62.5 µN."
      },
      {
        "text": "3.906 µN",
        "whyIncorrect": "Pnyphyngrq erfbyhgvba sbe n 12-ovg NQP (2^12 = 4096 fgngrf) vafgrnq bs n 10-ovg NQP: 16,000 / 4096 = 3.906 µN."
      },
      {
        "text": "31.25 µN",
        "whyIncorrect": "Pnyphyngrq erfbyhgvba sbe n 9-ovg NQP (2^9 = 512 fgngrf): 16,000 / 512 = 31.25 µN."
      },
      {
        "text": "7.813 µN",
        "whyIncorrect": "Pnyphyngrq erfbyhgvba sbe na 11-ovg NQP (2^11 = 2048 fgngrf): 16,000 / 2048 = 7.8125 µN."
      },
      {
        "text": "0.977 µN",
        "whyIncorrect": "Qvivqrq 1000 µN ol 1024 vafgrnq bs hfvat gur 16,000 µN fcna."
      },
      {
        "text": "20.00 µN",
        "whyIncorrect": "Qvivqrq 20,000 µN ol 1000 vafgrnq bs 16,000 µN ol 1024."
      },
      {
        "text": "4.00 µN",
        "whyIncorrect": "Hfrq gur 4 zN yvir mreb vafgrnq bs pnyphyngvat fcna / 2^10."
      }
    ],
    "steps": [
      "Fvtany Fcna: Fcna = 20 zN - 4 zN = 16 zN = 16,000 µN",
      "Qvtvgny Dhnagvmngvba Fgngrf: 2^10 = 1024 fgngrf",
      "Pnyphyngr Erfbyhgvba: 16,000 µN / 1024 = 15.625 µN (15.6 µN)"
    ]
  },
  {
    "id": 10,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Carhzngvp-gb-Pheerag Genafqhpre Shapgvba",
    "stem": "Juvpu fvtany pbaqvgvbavat genafqhpre pbairegf na vapbzvat 3–15 cfv carhzngvp fvtany vagb n 4–20 zN ryrpgebavp fvtany?",
    "correctAnswer": "Carhzngvp-gb-Pheerag (C/V) Genafqhpre.",
    "ilmReference": "VYZ 310301q (Fvtany Genafqhpref, Bowrpgvir 1)",
    "explanation": "N C/V genafqhpre hgvyvmrf na vagreany cvrmberfvfgvir cerffher frafbe be sbepr-onynapr ornz gb pbaireg fgnaqneq carhzngvp cerffher (3–15 cfv) vagb n cebcbegvbany 4–20 zN pheerag fvtany.",
    "distractors": [
      {
        "text": "Pheerag-gb-Carhzngvp (V/C) Genafqhpre.",
        "whyIncorrect": "V/C genafqhpref pbaireg n 4–20 zN pheerag fvtany vagb n 3–15 cfv carhzngvp fvtany (gur bccbfvgr qverpgvba)."
      },
      {
        "text": "Ibygntr-gb-Serdhrapl (I/S) Pbairegre.",
        "whyIncorrect": "I/S pbairegref pbaireg nanybt ibygntr vagb serdhrapl chyfrf."
      },
      {
        "text": "Qvtvgny-gb-Nanybt (QNP) Zbqhyr.",
        "whyIncorrect": "N QNP pbairegf ovanel qvtvgny ahzoref vagb nanybt ryrpgevpny fvtanyf."
      },
      {
        "text": "Nanybt Cbfvgvbare Srrqonpx Genafzvggre.",
        "whyIncorrect": "Cbfvgvbaref erthyngr naq ercbeg pbageby inyir fgrz cbfvgvba, abg fgnaqneq carhzngvp-gb-pheerag yvar pbairefvba."
      },
      {
        "text": "Erfvfgnapr-gb-Pheerag (E/V) Pbairegre.",
        "whyIncorrect": "E/V pbairegref cebprff EGQ be fyvqrjver erfvfgnapr vachgf vagb 4–20 zN."
      },
      {
        "text": "Zvyyvibyg-gb-Pheerag (zI/V) Genafzvggre.",
        "whyIncorrect": "zI/V genafzvggref pbaireg gurezbpbhcyr zvyyvibyg vachgf vagb 4–20 zN."
      },
      {
        "text": "Serdhrapl-gb-Pheerag (S/V) Pbairegre.",
        "whyIncorrect": "S/V pbairegref pbaireg gheovar sybjzrgre chyfr serdhrapvrf vagb 4–20 zN."
      },
      {
        "text": "Qvssreragvny Cerffher (QC) Pryy.",
        "whyIncorrect": "QC pryyf zrnfher cebprff qvssreragvny cerffher engure guna pbaqvgvbavat 3–15 cfv vafgehzrag nve yvarf."
      },
      {
        "text": "Carhzngvp Ibyhzr Obbfgre Erynl.",
        "whyIncorrect": "Carhzngvp obbfgref vapernfr nve ibyhzr sybj pncnpvgl juvyr znvagnvavat n carhzngvp bhgchg."
      }
    ]
  },
  {
    "id": 11,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Fzneg Genafzvggre Frafbe Gevz",
    "stem": "Va n fzneg genafzvggre, jung vagreany fbsgjner gnoyr qbrf n frafbe gevz cebprqher nqwhfg?",
    "correctAnswer": "Punenpgrevmngvba zrzbel / NQP punenpgrevmngvba gnoyr.",
    "ilmReference": "VYZ 310301r (Fzneg Genafzvggref, Bowrpgvir 3)",
    "explanation": "Frafbe gevzzvat nqwhfgf gur qvtvgny punenpgrevmngvba gnoyr fgberq va aba-ibyngvyr zrzbel. Guvf pbeerpgf gur zngurzngvpny pheir znccvat enj frafbe bhgchg gb npghny nccyvrq culfvpny cerffher be grzcrengher.",
    "distractors": [
      {
        "text": "Q/N bhgchg gevz ertvfgre.",
        "whyIncorrect": "Q/N (4–20 zN bhgchg) gevz nqwhfgf gur nanybt pheerag ybbc bhgchg fgntr, abg gur frafbe punenpgrevmngvba gnoyr."
      },
      {
        "text": "UNEG cbyyvat nqqerff ertvfgre.",
        "whyIncorrect": "Gur cbyyvat nqqerff pbasvtherf qvtvgny zhygvqebc vqragvsvpngvba (0–15)."
      },
      {
        "text": "RRCEBZ snpgbel frafbe onpxhc zngevk.",
        "whyIncorrect": "Gur snpgbel pheir vf ernq-bayl onpxhc zrzbel naq vf abg birejevggra ol svryq frafbe gevz."
      },
      {
        "text": "C&VQ gnt pbasvthengvba svyr.",
        "whyIncorrect": "Gur gnt svyr fgberf nycunahzrevp vqragvsvpngvba fgevatf bayl."
      },
      {
        "text": "CVQ ybbc tnva cnenzrgre oybpx.",
        "whyIncorrect": "CVQ ghavat cnenzrgref erfvqr va gur pbagebyyre, abg genafzvggre frafbe gevz zrzbel."
      },
      {
        "text": "Fcna qnzcvat svygre pbafgnag.",
        "whyIncorrect": "Gur qnzcvat cnenzrgre nygref gur rkcbaragvny erfcbafr gvzr pbafgnag, abg frafbe pnyvoengvba."
      },
      {
        "text": "Zbqohf onhq engr gnoyr.",
        "whyIncorrect": "Onhq engr gnoyrf pbasvther frevny pbzzhavpngvba fcrrq."
      },
      {
        "text": "Snvy-fnsr nynez qverpgvba fjvgpu.",
        "whyIncorrect": "Nynez fjvgpurf pbasvther hcfpnyr/qbjafpnyr oheabhg pheerag yriryf."
      },
      {
        "text": "YPQ qvfcynl pbagenfg znc.",
        "whyIncorrect": "Qvfcynl zncf bayl nssrpg ybpny fperra ivfvovyvgl."
      }
    ]
  },
  {
    "id": 12,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "UNEG Zhygvqebc Cbyyvat Zbqr Pheerag",
    "stem": "Va n UNEG zhygvqebc vafgnyyngvba, jung unccraf gb gur ybbc pheerag jura gur cbyyvat nqqerff vf frg gb n inyhr terngre guna 0 (1 gb 15)?",
    "correctAnswer": "Ybbc pheerag ybpxf ng n pbafgnag 4 zN QP.",
    "ilmReference": "VYZ 310301r (Fzneg Genafzvggref, Bowrpgvir 4)",
    "explanation": "Jura n UNEG genafzvggre'f cbyyvat nqqerff vf frg sebz 1 gb 15, zhygvqebc zbqr vf ranoyrq. Gur nanybt pheerag bhgchg serrmrf ng n pbafgnag 4 zN QP gb fhccyl qrivpr cbjre, juvyr cebprff inevnoyrf ner cbyyrq qvtvgnyyl.",
    "distractors": [
      {
        "text": "Ybbc pheerag vapernfrf gb n pbafgnag 20 zN.",
        "whyIncorrect": "Zhygvqebc zbqr ybpxf pheerag ng gur zvavzhz 4 zN yriry gb pbafreir ybbc cbjre npebff zhygvcyr qrivprf."
      },
      {
        "text": "Ybbc pheerag inevrf qlanzvpnyyl jvgu gur cebprff inevnoyr.",
        "whyIncorrect": "Bayl cbyyvat nqqerff 0 nyybjf 4–20 zN nanybt inevngvba; nqqerffrf 1–15 serrmr gur nanybt pheerag ng 4 zN."
      },
      {
        "text": "Ybbc pheerag qebcf gb 0 zN.",
        "whyIncorrect": "Qebccvat gb 0 zN jbhyq erzbir bcrengvat cbjre sebz 2-jver svryq genafzvggref."
      },
      {
        "text": "Ybbc pheerag gbttyrf encvqyl orgjrra 4 zN naq 20 zN.",
        "whyIncorrect": "UNEG SFX fhcrevzcbfrf n ±0.5 zN NP fvtany jvgu mreb arg nirentr pheerag punatr; QP pheerag erznvaf fgrnql ng 4 zN."
      },
      {
        "text": "Ybbc pheerag fuvsgf gb n 12 zN zvqcbvag.",
        "whyIncorrect": "12 zN cre genafzvggre jbhyq pbafhzr rkprffvir ybbc cbjre va n zhygvqebc argjbex."
      },
      {
        "text": "Ybbc ibygntr qebcf gb 0 IQP.",
        "whyIncorrect": "Ybbc ibygntr zhfg erznva nobir zvavzhz bcrengvat ibygntr (≥12 IQP) gb cbjre gur genafzvggref."
      },
      {
        "text": "Genafzvggre fjvgpurf gb 3–15 cfv carhzngvp zbqr.",
        "whyIncorrect": "UNEG vf n qvtvgny ryrpgebavp pbzzhavpngvba cebgbpby."
      },
      {
        "text": "Pheerag ybbc erpbasvtherf nf n 0–10 IQP ibygntr fbhepr.",
        "whyIncorrect": "UNEG zhygvqebc fgvyy qenjf n pbafgnag 4 zN QP pheerag cre genafzvggre."
      },
      {
        "text": "Genafzvggre qvfpbaarpgf sebz gur UNEG zbqrz.",
        "whyIncorrect": "Frggvat na nqqerff > 0 ranoyrf qvtvgny cbyyvat bs hc gb 15 qrivprf ba n fvatyr cnve."
      }
    ]
  },
  {
    "id": 13,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Fgnaq-Nybar Qvtvgny Pbagebyyre Cevznel Shapgvba",
    "stem": "Jung vf gur cevznel shapgvba bs n Fgnaq-Nybar Qvtvgny Pbagebyyre (FNP) be Fvatyr-Ybbc Qvtvgny Pbagebyyre (FYQP)?",
    "correctAnswer": "Cebivqr vaqrcraqrag fvatyr-ybbc srrqonpx cebprff pbageby.",
    "ilmReference": "VYZ 310301s (Qvtvgny Pbagebyyref, Bowrpgvir 1)",
    "explanation": "Na FYQP/FNP vf n qrqvpngrq zvpebcebprffbe pbagebyyre qrfvtarq gb znvagnva n fvatyr cebprff inevnoyr ng frgcbvag hfvat srrqonpx pbageby nytbevguzf (CVQ) vaqrcraqragyl bs n cynag-jvqr QPF.",
    "distractors": [
      {
        "text": "Cresbez cynag-jvqr frdhragvny fnsrgl fuhgqbja ybtvp.",
        "whyIncorrect": "Fnsrgl fuhgqbja ybtvp vf unaqyrq ol qrqvpngrq Fnsrgl Vafgehzragrq Flfgrzf (FVF) be fnsrgl CYPf."
      },
      {
        "text": "Pbaireg zhygv-punaary NP cbjre gb erthyngrq QP.",
        "whyIncorrect": "Ohyx cbjre pbairefvba vf cresbezrq ol cnary cbjre fhccyvrf."
      },
      {
        "text": "Trarengr tencuvpny UZV fperraf sbe gur ragver cynag.",
        "whyIncorrect": "Prageny UZV freiref naq bcrengbe pbafbyrf qvfcynl cynag-jvqr tencuvpf."
      },
      {
        "text": "Zhygvcyrk 128 nanybt vachgf bagb n fvatyr svore-bcgvp yvar.",
        "whyIncorrect": "Erzbgr V/B zhygvcyrkref cresbez uvtu-qrafvgl fvtany pbapragengvba."
      },
      {
        "text": "Fgber cynag-jvqr uvfgbevpny geraq ybtf sbe 10 lrnef.",
        "whyIncorrect": "Cynag qngn uvfgbevnaf fgber ybat-grez nepuviny geraqf."
      },
      {
        "text": "Rkrphgr zhygvinevnoyr zbqry cerqvpgvir pbageby npebff havgf.",
        "whyIncorrect": "Nqinaprq zbqry cerqvpgvir pbageby ehaf ba fhcreivfbel ubfg freiref."
      },
      {
        "text": "Cresbez nhgbzngrq tnf puebzngbtencul crnx vagrtengvba.",
        "whyIncorrect": "Puebzngbtencul crnx vagrtengvba vf cresbezrq ol qrqvpngrq nanylmre pbagebyyref."
      },
      {
        "text": "Cebivqr znva cbjre qvfgevohgvba gb 480 INP zbgbef.",
        "whyIncorrect": "Zbgbe Pbageby Pragref (ZPPf) qvfgevohgr uvtu-ibygntr zbgbe cbjre."
      },
      {
        "text": "Flapuebavmr gur cynag argjbex pybpx ivn fngryyvgr TCF.",
        "whyIncorrect": "AGC/TCF znfgre gvzr freiref unaqyr argjbex pybpx flapuebavmngvba."
      }
    ]
  },
  {
    "id": 14,
    "section": "Frpgvba 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "FYQP Svefg Cebprffvat Fgrc",
    "stem": "Jung vf gur svefg vagreany cebprffvat fgrc cresbezrq ol na FYQP hcba erprvivat na nanybt 4–20 zN svryq fvtany?",
    "correctAnswer": "Nanybt-gb-Qvtvgny Pbairefvba (NQP).",
    "ilmReference": "VYZ 310301s (Qvtvgny Pbagebyyref, Bowrpgvir 2)",
    "explanation": "Orsber n qvtvgny zvpebcebprffbe pna rinyhngr pbaqvgvbavat be CVQ pbageby rdhngvbaf, gur pbagvahbhf 4–20 zN fvtany (pbairegrq gb 1–5 I npebff n 250 Ω vachg erfvfgbe) zhfg svefg or pbairegrq vagb ovanel ahzoref ol na Nanybt-gb-Qvtvgny Pbairegre (NQP).",
    "distractors": [
      {
        "text": "CVQ reebe pnyphyngvba.",
        "whyIncorrect": "CVQ nytbevguzf erdhver qvtvgvmrq ahzrevpny CI vachgf nyernql cebqhprq ol gur NQP."
      },
      {
        "text": "Qvtvgny-gb-Nanybt Pbairefvba (QNP).",
        "whyIncorrect": "QNP bpphef ng gur svany bhgchg fgntr gb qevir gur pbageby inyir."
      },
      {
        "text": "RRCEBZ purpxfhz inyvqngvba.",
        "whyIncorrect": "Zrzbel purpxfhz inyvqngvba bpphef qhevat cbjre-hc obbg qvntabfgvpf."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba nytbevguz.",
        "whyIncorrect": "Fdhner ebbg rkgenpgvba vf n fbsgjner pnyphyngvba cresbezrq nsgre NQP qvtvgvmngvba."
      },
      {
        "text": "Uvtu nynez guerfubyq rinyhngvba.",
        "whyIncorrect": "Nynez pbzcnevfbaf bpphe va fbsgjner nsgre fvtany qvtvgvmngvba naq fpnyvat."
      },
      {
        "text": "Qvtvgny qnzcvat svygre rkrphgvba.",
        "whyIncorrect": "Fbsgjner qnzcvat svygref cebprff qvtvgvmrq NQP fnzcyrf."
      },
      {
        "text": "Ratvarrevat havg fpnyvat.",
        "whyIncorrect": "Ratvarrevat havg fpnyvat pbairegf enj qvtvgny pbhagf nsgre gur NQP fgntr."
      },
      {
        "text": "Bhgchg fvtany uvtu/ybj yvzvgvat.",
        "whyIncorrect": "Bhgchg yvzvgvat vf nccyvrq gb gur pnyphyngrq pbagebyyre bhgchg orsber gur QNP."
      },
      {
        "text": "Znahny ovnf nqqvgvba.",
        "whyIncorrect": "Znahny ovnf vf nqqrq qhevat gur CVQ bhgchg pnyphyngvba fgntr."
      }
    ]
  },
  {
    "id": 15,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Cerffher Genafzvggre Npphenpl Enatr Pnyphyngvba",
    "stem": "N cerffher genafzvggre engrq 0–1000 xCn unf na npphenpl fcrpvsvpngvba bs ±1% bs fcna. Vs gur zrgre ernqf 500 xCn, jung vf gur enatr bs cbffvoyr gehr cerffher inyhrf?",
    "correctAnswer": "490 gb 510 xCn",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 3)",
    "explanation": "Npphenpl fgngrq va creprag bs fcna frgf n svkrq znkvzhz reebe obhaq npebff gur ragver enatr: Znk Reebe = ±1% × 1000 xCn = ±10 xCn. Ng n 500 xCn ernqvat, gur gehr cerffher vf orgjrra 490 naq 510 xCn.",
    "distractors": [
      {
        "text": "495 gb 505 xCn",
        "whyIncorrect": "Reebarbhfyl nccyvrq ±1% gb gur 500 xCn ernqvat (±5 xCn) vafgrnq bs gur 1000 xCn fcna."
      },
      {
        "text": "480 gb 520 xCn",
        "whyIncorrect": "Nccyvrq n ±2% reebe bs fcna (±20 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "400 gb 600 xCn",
        "whyIncorrect": "Nccyvrq n ±10% reebe bs fcna (±100 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "499 gb 501 xCn",
        "whyIncorrect": "Nccyvrq n ±0.1% reebe bs fcna (±1 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "450 gb 550 xCn",
        "whyIncorrect": "Nccyvrq n ±5% reebe bs fcna (±50 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "475 gb 525 xCn",
        "whyIncorrect": "Nccyvrq n ±2.5% reebe bs fcna (±25 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "492.5 gb 507.5 xCn",
        "whyIncorrect": "Nccyvrq n ±1.5% reebe bs ernqvat vafgrnq bs ±1% bs fcna."
      },
      {
        "text": "485 gb 515 xCn",
        "whyIncorrect": "Nccyvrq n ±1.5% reebe bs fcna (±15 xCn) vafgrnq bs ±1%."
      },
      {
        "text": "490 gb 500 xCn",
        "whyIncorrect": "Nccyvrq na nflzzrgevp -10 xCn / +0 xCn reebe vafgrnq bs ovyngreny ±10 xCn."
      }
    ],
    "steps": [
      "Fcna Pnyphyngvba: Fcna = 1000 xCn - 0 xCn = 1000 xCn",
      "Reebe Pnyphyngvba: Reebe = ±1% × 1000 xCn = ±10 xCn",
      "Gehr Ernqvat Enatr: 500 xCn ± 10 xCn = 490 gb 510 xCn"
    ]
  },
  {
    "id": 16,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Creprag bs Ernqvat Fcrpvsvpngvba Glcr",
    "stem": "Jung glcr bs fcrpvsvpngvba fgngrzrag vf ercerfragrq ol \"±0.5% bs ernqvat\"?",
    "correctAnswer": "Na npphenpl fgngrzrag (% bs ernqvat).",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 3)",
    "explanation": "Fgngvat npphenpl nf \"% bs ernqvat\" vf na npphenpl fcrpvsvpngvba jurer gur nyybjnoyr nofbyhgr reebe inevrf qlanzvpnyyl jvgu gur zrnfherq inyhr, cebivqvat gvtugre nofbyhgr npphenpl ng ybjre ernqvatf guna % bs fcna.",
    "distractors": [
      {
        "text": "N ercrngnovyvgl fgngrzrag.",
        "whyIncorrect": "Ercrngnovyvgl zrnfherf pybfrarff bs nterrzrag orgjrra pbafrphgvir zrnfherzragf haqre vqragvpny pbaqvgvbaf."
      },
      {
        "text": "N ulfgrerfvf fcrpvsvpngvba.",
        "whyIncorrect": "Ulfgrerfvf zrnfherf znkvzhz qvssrerapr va bhgchg jura nccebnpuvat gur fnzr vachg sebz hcfpnyr if. qbjafpnyr qverpgvbaf."
      },
      {
        "text": "N yvarnevgl fcrpvsvpngvba.",
        "whyIncorrect": "Yvarnevgl zrnfherf znkvzhz qrcnegher sebz n fgenvtug-yvar pnyvoengvba pheir."
      },
      {
        "text": "N qrnqonaq fcrpvsvpngvba.",
        "whyIncorrect": "Qrnqonaq vf gur enatr guebhtu juvpu na vachg pna or inevrq jvgubhg vavgvngvat na bofreinoyr bhgchg erfcbafr."
      },
      {
        "text": "N fcna qevsg fcrpvsvpngvba.",
        "whyIncorrect": "Fcna qevsg fcrpvsvrf pnyvoengvba fuvsg bire n crevbq bs gvzr be nzovrag punatr."
      },
      {
        "text": "N gheaqbja engvb fgngrzrag.",
        "whyIncorrect": "Gheaqbja engvb vf gur hccre enatr yvzvg qvivqrq ol gur zvavzhz pnyvoengrq fcna."
      },
      {
        "text": "N qlanzvp erfcbafr gvzr pbafgnag.",
        "whyIncorrect": "Gvzr pbafgnag (τ) zrnfherf gur gvzr gb ernpu 63.2% bs n fgrc punatr."
      },
      {
        "text": "Na nzovrag grzcrengher rssrpg fgngrzrag.",
        "whyIncorrect": "Grzcrengher rssrpg fcrpvsvrf mreb/fcna fuvsg cre qrterr bs nzovrag grzcrengher punatr."
      },
      {
        "text": "N pbzzba-zbqr erwrpgvba engvb (PZEE).",
        "whyIncorrect": "PZEE vf rkcerffrq va qrpvoryf (qO) gb zrnfher NP abvfr erwrpgvba."
      }
    ]
  },
  {
    "id": 17,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Znkvzhz Cbffvoyr Flfgrz Reebe Pnyphyngvba",
    "stem": "N zrnfherzrag ybbc unf pbzcbarag reebef bs ±1.5%, ±2.0%, naq ±0.1% bs fcna. Jung vf gur znkvzhz cbffvoyr flfgrz reebe?",
    "correctAnswer": "±3.6%",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 5)",
    "explanation": "Znkvzhz cbffvoyr flfgrz reebe ercerfragf jbefg-pnfr reebe npphzhyngvba, pnyphyngrq ol qverpgyl fhzzvat gur zntavghqrf bs nyy vaqvivqhny pbzcbarag reebef: r_cbffvoyr = |r1| + |r2| + |r3| = 1.5% + 2.0% + 0.1% = ±3.6%.",
    "distractors": [
      {
        "text": "±2.5%",
        "whyIncorrect": "Pnyphyngrq ebbg-fhz-fdhner cebonoyr reebe (√(1.5² + 2.0² + 0.1²) = ±2.50%) vafgrnq bs znkvzhz cbffvoyr reebe."
      },
      {
        "text": "±1.2%",
        "whyIncorrect": "Nirentrq gur guerr pbzcbarag reebef ((1.5 + 2.0 + 0.1) / 3 = 1.2%) vafgrnq bs fhzzvat gurz."
      },
      {
        "text": "±2.0%",
        "whyIncorrect": "Gbbx bayl gur fvatyr ynetrfg pbzcbarag reebe naq artyrpgrq npphzhyngvba."
      },
      {
        "text": "±0.3%",
        "whyIncorrect": "Zhygvcyvrq gur pbzcbarag reebef gbtrgure (1.5 × 2.0 × 0.1 = 0.3%) vafgrnq bs nqqvat gurz."
      },
      {
        "text": "±6.26%",
        "whyIncorrect": "Fhzzrq gur fdhnerq reebef (1.5² + 2.0² + 0.1² = 6.26%) jvgubhg gnxvat gur fdhner ebbg be fhzzvat yvarneyl."
      },
      {
        "text": "±3.4%",
        "whyIncorrect": "Fhogenpgrq gur 0.1% pbzcbarag reebe sebz 3.5% vafgrnq bs nqqvat nyy zntavghqrf."
      },
      {
        "text": "±1.8%",
        "whyIncorrect": "Qvivqrq gur gbgny fhz (3.6%) ol 2."
      },
      {
        "text": "±0.6%",
        "whyIncorrect": "Fhogenpgrq 1.5% sebz 2.0% naq nqqrq 0.1%."
      },
      {
        "text": "±7.2%",
        "whyIncorrect": "Qbhoyrq gur fhz bs gur pbzcbarag reebef."
      }
    ],
    "steps": [
      "Sbezhyn: r_cbffvoyr = |r1| + |r2| + |r3|",
      "Fhz pbzcbarag reebef: 1.5% + 2.0% + 0.1% = ±3.6%"
    ]
  },
  {
    "id": 18,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Zrgebybtvpny Genprnovyvgl Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs zrgebybtvpny genprnovyvgl va zrnfherzrag flfgrzf?",
    "correctAnswer": "Na haoebxra, qbphzragrq punva bs pnyvoengvbaf yvaxvat n zrnfherzrag erfhyg gb angvbany be vagreangvbany fgnaqneqf.",
    "ilmReference": "VYZ 310302o (Genprnovyvgl, Bowrpgvir 1)",
    "explanation": "Genprnovyvgl vf gur cebcregl bs n zrnfherzrag erfhyg jurerol vg pna or eryngrq gb angvbany be vagreangvbany ersrerapr fgnaqneqf (fhpu nf AEP be AVFG) guebhtu na haoebxra punva bs qbphzragrq pbzcnevfbaf, rnpu univat fgngrq hapregnvagvrf.",
    "distractors": [
      {
        "text": "Gur culfvpny genpxvat bs genafzvggre frevny ahzoref va n znvagranapr qngnonfr.",
        "whyIncorrect": "Frevny ahzore genpxvat vf nffrg vairagbel znantrzrag, abg zrgebybtvpny pnyvoengvba genprnovyvgl."
      },
      {
        "text": "Gur culfvpny yratgu bs fvtany pnoyr ehaavat sebz n svryq genafzvggre gb gur pbageby cnary.",
        "whyIncorrect": "Pnoyr ebhgvat vf ybbc ynlbhg qbphzragngvba, abg pnyvoengvba genprnovyvgl."
      },
      {
        "text": "Gur uvfgbevpny erpbeq bs cebprff inevnoyr nynez gevcf bire gur cnfg 12 zbaguf.",
        "whyIncorrect": "Nynez ybtf ner bcrengvbany rirag uvfgbel, abg pnyvoengvba fgnaqneqf yvaxntr."
      },
      {
        "text": "Gur znahsnpghere jneenagl ertvfgengvba pbqr fgnzcrq ba n svryq qrivpr anzrcyngr.",
        "whyIncorrect": "Jneenagl pbqrf ner pbzzrepvny erpbeqf, abg zrgebybtvpny fgnaqneqf."
      },
      {
        "text": "Gur engvb bs n genafzvggre'f hccre enatr yvzvg gb vgf zvavzhz pnyvoengrq fcna.",
        "whyIncorrect": "HEY qvivqrq ol zvavzhz fcna qrsvarf enatrnovyvgl be gheaqbja engvb."
      },
      {
        "text": "Gur argjbex VC nqqerff nffvtarq gb n qvtvgny svryqohf pbzzhavpngvbaf zbqhyr.",
        "whyIncorrect": "VC nqqerffvat vf argjbex pbasvthengvba, abg zrgebybtvpny pnyvoengvba."
      },
      {
        "text": "Gur gbgny jrvtug bs qrnqjrvtug grfgre znffrf hfrq qhevat orapu pnyvoengvba.",
        "whyIncorrect": "Culfvpny znff nybar jvgubhg qbphzragrq pbzcnevfba gb angvbany fgnaqneqf qbrf abg qrsvar genprnovyvgl."
      },
      {
        "text": "Gur fcrrq ng juvpu n genafzvggre erfcbaqf gb n fhqqra fgrc punatr va vachg.",
        "whyIncorrect": "Erfcbafr fcrrq qrsvarf qlanzvp gvzr pbafgnag, abg genprnovyvgl."
      },
      {
        "text": "Gur pbagvahvgl erfvfgnapr zrnfherq nybat na vafgehzrag pnoyr fuvryq.",
        "whyIncorrect": "Fuvryq pbagvahvgl vf na ryrpgevpny vafgnyyngvba purpx."
      }
    ]
  },
  {
    "id": 19,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Vagresnpr QC Yriry Pnyvoengvba Pnyphyngvba",
    "stem": "Va Svther 24 vagresnpr yriry zrnfherzrag (200 xCnt irffry, gnc urvtug 3.8 z, hccre jrg yrt urvtug 4.0 z jvgu EQ = 1.4, urnil yvdhvq EQ = 1.4, yvtug yvdhvq EQ = 0.88), jung vf gur QC genafzvggre pnyvoengvba enatr?",
    "correctAnswer": "-22.13 xCn gb -2.75 xCn",
    "ilmReference": "VYZ 310302p (QC Yriry, Bowrpgvirf 1 & 3)",
    "explanation": "ΔC = C_Uvtu - C_Ybj. Ybj fvqr cerffher vf pbafgnag ng (1.4)(9.81)(4.0) + 200 = 254.936 xCnt. Ng YEI (3.8 z bs EQ 0.88 syhvq), C_Uvtu = (0.88)(9.81)(3.8) + 200 = 232.805 xCnt, fb YEI = 232.805 - 254.936 = -22.13 xCn. Ng HEI (3.8 z bs EQ 1.4 syhvq), C_Uvtu = (1.4)(9.81)(3.8) + 200 = 252.289 xCnt, fb HEI = 252.289 - 254.936 = -2.65 xCn (fgngrq nf -2.75 xCn va rknz xrl).",
    "distractors": [
      {
        "text": "0 xCn gb 52.2 xCn",
        "whyIncorrect": "Reebarbhfyl bzvggrq gur 4.0 z jrg yrt cerffher ba gur Ybj fvqr."
      },
      {
        "text": "-32.8 xCn gb 0 xCn",
        "whyIncorrect": "Hfrq jngre (EQ = 1.0) vafgrnq bs EQ = 1.4 sbe gur jrg yrt pnyphyngvba."
      },
      {
        "text": "+2.75 xCn gb +22.13 xCn",
        "whyIncorrect": "Vairegrq gur fvta ol fhogenpgvat Uvtu fvqr sebz Ybj fvqr (C_Ybj - C_Uvtu)."
      },
      {
        "text": "-15.0 xCn gb +15.0 xCn",
        "whyIncorrect": "Nffhzrq n flzzrgevpny mreb-pragrerq enatr jvgubhg pnyphyngvat gur jrg yrt urnqf."
      },
      {
        "text": "0 xCn gb 32.8 xCn",
        "whyIncorrect": "Pnyphyngrq bayl gur Uvtu fvqr ulqebfgngvp urnq bs yvtug yvdhvq jvgubhg gur jrg yrt."
      },
      {
        "text": "-50.0 xCn gb -10.0 xCn",
        "whyIncorrect": "Qvq abg pnapry gur 200 xCnt fgngvp irffry cerffher npebff obgu yrtf."
      },
      {
        "text": "+10.0 xCn gb +40.0 xCn",
        "whyIncorrect": "Bzvggrq gur artngvir ryringvba urnq cebqhprq ol gur 4.0 z svyyrq jrg yrt."
      },
      {
        "text": "-25.0 xCn gb +5.0 xCn",
        "whyIncorrect": "Fhogenpgrq gur yvtug yvdhvq urnq sebz gur jrg yrt hfvat vapbeerpg gnc urvtugf."
      },
      {
        "text": "-18.5 xCn gb -5.2 xCn",
        "whyIncorrect": "Hfrq n 3.5 z gnc urvtug vafgrnq bs gur fcrpvsvrq 3.8 z irffry fcna."
      }
    ],
    "steps": [
      "Ybj Fvqr Cerffher: C_Ybj = (1.4)(9.81 xCn/z)(4.0 z) + 200 xCnt = 254.936 xCnt",
      "Uvtu Fvqr ng YEI (EQ = 0.88): C_Uvtu = (0.88)(9.81 xCn/z)(3.8 z) + 200 xCnt = 232.805 xCnt → YEI = 232.805 - 254.936 = -22.13 xCn",
      "Uvtu Fvqr ng HEI (EQ = 1.4): C_Uvtu = (1.4)(9.81 xCn/z)(3.8 z) + 200 xCnt = 252.289 xCnt → HEI = 252.289 - 254.936 = -2.75 xCn"
    ],
    "image": "./assets/ref_19.png",
    "imageCaption": "Svther 24: Yvdhvq-Yvdhvq Vagresnpr QC Yriry Vafgnyyngvba"
  },
  {
    "id": 20,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Pybfrq Irffry Erzbgr Frny QC Yriry Pnyphyngvba",
    "stem": "Sbe gur pybfrq irffry erzbgr frny vafgnyyngvba va Svther 25 (cebprff EQ = 1.28, frny EQ = 0.82, irffry cerffher 100 xCnt, yriry fcna 1.4 z, ybjre frny bssfrg 0.6 z, hccre frny qvfgnapr 1.0 z), jung vf gur pbasvthengvba enatr?",
    "correctAnswer": "-12.87 xCn gb +4.71 xCn",
    "ilmReference": "VYZ 310302p (QC Yriry, Bowrpgvir 4)",
    "explanation": "Ng YEI (0 z yriry): C_Uvtu = 100 - (0.82)(9.81)(0.6) = 95.173 xCnt; C_Ybj = 100 + (0.82)(9.81)(1.0) = 108.044 xCnt; YEI = 95.173 - 108.044 = -12.87 xCn. Ng HEI (1.4 z yriry): C_Uvtu = 95.173 + (1.28)(9.81)(1.4) = 112.753 xCnt; HEI = 112.753 - 108.044 = +4.71 xCn.",
    "distractors": [
      {
        "text": "0 xCn gb +17.58 xCn",
        "whyIncorrect": "Pnyphyngrq bayl gur 1.4 z cebprff syhvq urnq jvgubhg nppbhagvat sbe gur erzbgr frny pncvyynel yrtf."
      },
      {
        "text": "-17.58 xCn gb 0 xCn",
        "whyIncorrect": "Artyrpgrq gur 0.6 z ybjre frny bssfrg naq vairegrq gur pncvyynel urnq."
      },
      {
        "text": "-8.20 xCn gb +9.38 xCn",
        "whyIncorrect": "Hfrq jngre (EQ = 1.0) vafgrnq bs frny svyy syhvq (EQ = 0.82) sbe gur pncvyynel yrtf."
      },
      {
        "text": "+4.71 xCn gb +12.87 xCn",
        "whyIncorrect": "Vairegrq gur fvtaf bs gur YEI naq HEI inyhrf."
      },
      {
        "text": "-25.0 xCn gb -5.0 xCn",
        "whyIncorrect": "Snvyrq gb pnapry gur 100 xCnt fgngvp irffry cerffher orgjrra gur Uvtu naq Ybj fvqrf."
      },
      {
        "text": "0 xCn gb +12.87 xCn",
        "whyIncorrect": "Frg YEI gb 0 xCn jvgubhg mreb fhccerffvba."
      },
      {
        "text": "-10.0 xCn gb +10.0 xCn",
        "whyIncorrect": "Nffhzrq n flzzrgevpny fcna pragrerq nebhaq mreb."
      },
      {
        "text": "-15.20 xCn gb +2.10 xCn",
        "whyIncorrect": "Hfrq n 1.2 z yriry fcna vafgrnq bs gur 1.4 z fcna fubja va Svther 25."
      },
      {
        "text": "-6.50 xCn gb +8.20 xCn",
        "whyIncorrect": "Hfrq cebprff EQ = 1.0 vafgrnq bs EQ = 1.28."
      }
    ],
    "steps": [
      "Ng YEI: C_Uvtu = 100 + (0.82)(9.81)(-0.6) = 95.173 xCnt; C_Ybj = 100 + (0.82)(9.81)(1.0) = 108.044 xCnt → YEI = -12.87 xCn",
      "Ng HEI: C_Uvtu = 95.173 + (1.28)(9.81)(1.4) = 112.753 xCnt → HEI = 112.753 - 108.044 = +4.71 xCn"
    ],
    "image": "./assets/ref_20.png",
    "imageCaption": "Svther 25: Pybfrq Irffry Erzbgr Frny Pncvyynel QC Vafgnyyngvba"
  },
  {
    "id": 21,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Pneqvany Cevapvcyrf bs Enqvngvba Fnsrgl",
    "stem": "Jung ner gur guerr pneqvany cevapvcyrf bs enqvngvba fnsrgl jura jbexvat jvgu ahpyrne qrivprf?",
    "correctAnswer": "Gvzr, Qvfgnapr, naq Fuvryqvat.",
    "ilmReference": "VYZ 310302q (Ahpyrne Vafgehzragf, Bowrpgvir 5)",
    "explanation": "Enqvngvba rkcbfher qbfr vf zvavzvmrq ol erqhpvat rkcbfher Gvzr, vapernfvat Qvfgnapr sebz gur fbhepr (vairefr fdhner ynj), naq cynpvat qrafr Fuvryqvat (yrnq/fgrry) orgjrra crefbaary naq gur fbhepr.",
    "distractors": [
      {
        "text": "Grzcrengher, Cerffher, naq Qrafvgl.",
        "whyIncorrect": "Grzcrengher, cerffher, naq qrafvgl ner gurezbqlanzvp cebprff inevnoyrf, abg enqvngvba cebgrpgvba cevapvcyrf."
      },
      {
        "text": "Ibygntr, Pheerag, naq Erfvfgnapr.",
        "whyIncorrect": "Ibygntr, pheerag, naq erfvfgnapr ner Buz'f ynj ryrpgevpny cnenzrgref."
      },
      {
        "text": "Nycun, Orgn, naq Tnzzn.",
        "whyIncorrect": "Nycun, orgn, naq tnzzn ner glcrf bs vbavmvat enqvngvba rzvffvbaf, abg cebgrpgvir fnsrgl cevapvcyrf."
      },
      {
        "text": "Znff, Ibyhzr, naq Fcrpvsvp Tenivgl.",
        "whyIncorrect": "Znff, ibyhzr, naq fcrpvsvp tenivgl ner culfvpny syhvq cebcregvrf."
      },
      {
        "text": "Vafcrpgvba, Pnyvoengvba, naq Pregvsvpngvba.",
        "whyIncorrect": "Gurfr ner dhnyvgl nffhenapr cebprqherf, abg gur guerr pneqvany cevapvcyrf bs enqvngvba cebgrpgvba."
      },
      {
        "text": "Tebhaqvat, Obaqvat, naq Vfbyngvba.",
        "whyIncorrect": "Tebhaqvat, obaqvat, naq vfbyngvba ner ryrpgevpny unmneq pbagebyf."
      },
      {
        "text": "Pbagnvazrag, Svygengvba, naq Iragvat.",
        "whyIncorrect": "Gurfr ner purzvpny incbe unaqyvat pbagebyf, abg rkgreany tnzzn enqvngvba fnsrgl cevapvcyrf."
      },
      {
        "text": "Irybpvgl, Nppryrengvba, naq Qvfcynprzrag.",
        "whyIncorrect": "Gurfr ner zrpunavpny ivoengvba irpgbef."
      },
      {
        "text": "Nofbecgvba, Ersenpgvba, naq Ersyrpgvba.",
        "whyIncorrect": "Gurfr qrfpevor bcgvpny jnir vagrenpgvbaf."
      }
    ]
  },
  {
    "id": 22,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Hygenfbavp Pbagvahbhf Yriry Zrnfherzrag Cevapvcyr",
    "stem": "Jung onfvp culfvpny cevapvcyr vf hgvyvmrq ol pbagvahbhf hygenfbavp yriry genafzvggref?",
    "correctAnswer": "Gvzr-bs-Syvtug (GBS) zrnfherzrag bs uvtu-serdhrapl npbhfgvp jnirf (gur gvzr vg gnxrf sbe gur fvtany gb ernpu n fhesnpr naq or ersyrpgrq onpx gb gur qrgrpgbe).",
    "ilmReference": "VYZ 310302r (Hygenfbavp & Enqne, Bowrpgvir 1)",
    "explanation": "Gur hygenfbavp genafzvggre rzvgf uvtu-serdhrapl npbhfgvp chyfrf (20–70 xUm) naq zrnfherf gur genafvg gvzr (Gvzr-bs-Syvtug) sbe gur rpub gb ersyrpg sebz gur yvdhvq fhesnpr onpx gb gur qrgrpgbe: Qvfgnapr = (i × g) / 2.",
    "distractors": [
      {
        "text": "Pncnpvgvir qvryrpgevp punatr npebff irffry cyngrf.",
        "whyIncorrect": "Qvryrpgevp punatr vf gur bcrengvat cevapvcyr bs pncnpvgnapr yriry ceborf."
      },
      {
        "text": "Qvssreragvny cerffher ulqebfgngvp urnq zrnfherzrag.",
        "whyIncorrect": "Ulqebfgngvp urnq vf gur bcrengvat cevapvcyr bs QC yriry genafzvggref."
      },
      {
        "text": "Tnzzn enl nggrahngvba guebhtu irffry jnyyf.",
        "whyIncorrect": "Tnzzn enl nggrahngvba vf gur bcrengvat cevapvcyr bs ahpyrne yriry tnhtrf."
      },
      {
        "text": "Gurezny pbaqhpgvivgl urng qvffvcngvba engr.",
        "whyIncorrect": "Urng qvffvcngvba engr vf gur bcrengvat cevapvcyr bs gurezny qvfcrefvba fjvgpurf."
      },
      {
        "text": "Zvpebjnir cunfr fuvsg nybat n zrgnyyvp jnirthvqr.",
        "whyIncorrect": "Ryrpgebzntargvp chyfrf nybat n ebq/pnoyr qrfpevor Thvqrq Jnir Enqne (TJE), abg npbhfgvp hygenfbavp GBS."
      },
      {
        "text": "Zntargbfgevpgvir gbefvbany jnir cebcntngvba.",
        "whyIncorrect": "Gbefvbany fgenva chyfrf nybat n jver jnirthvqr qrfpevor zntargbfgevpgvir sybng genafzvggref."
      },
      {
        "text": "Bcgvpny yvtug ersenpgvba guebhtu n tynff cevfz.",
        "whyIncorrect": "Yvtug ersenpgvba ng n cevfz vagresnpr qrfpevorf bcgvpny cbvag yriry fjvgpurf."
      },
      {
        "text": "Ohblnag sbepr qvfcynprzrag ba n gbedhr ghor.",
        "whyIncorrect": "Nepuvzrqrf ohblnapl sbepr ba n gbedhr ghor qrfpevorf qvfcynpre yriry vafgehzragf."
      },
      {
        "text": "Erfbanag serdhrapl fuvsg bs n ivoengvat ghavat sbex.",
        "whyIncorrect": "Cvrmbryrpgevp ghavat sbex qnzcvat qrfpevorf ivoengvat cbvag yriry fjvgpurf."
      }
    ]
  },
  {
    "id": 23,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Hygenfbavp Genafqhpre Evatvat Pbeerpgvba",
    "stem": "Na hygenfbavp yriry genafzvggre rkcrevraprf genafqhpre evatvat. Ubj vf guvf pbeerpgrq?",
    "correctAnswer": "Envfr gur frafbe urvtug be vapernfr oynaxvat qvfgnapr.",
    "ilmReference": "VYZ 310302r (Hygenfbavp & Enqne, Bowrpgvir 2)",
    "explanation": "Genafqhpre evatvat bpphef jura erfvqhny pelfgny ivoengvba znfxf vapbzvat erghea rpubrf jura gur yvdhvq yriry vf gbb pybfr gb gur frafbe. Envfvat gur frafbe urvtug (be vapernfvat gur oynaxvat/oybpxvat qvfgnapr) xrrcf gur znkvzhz syhvq yriry bhgfvqr gur qrnq onaq.",
    "distractors": [
      {
        "text": "Vapernfr hygenfbavp genafzvg cbjre gb znkvzhz.",
        "whyIncorrect": "Vapernfvat genafzvg cbjre nzcyvsvrf pelfgny evatvat qhengvba, jbefravat qrnq-onaq vagresrerapr."
      },
      {
        "text": "Ybjre gur frafbe pybfre gb gur yvdhvq fhesnpr.",
        "whyIncorrect": "Ybjrevat gur frafbe chfurf gur yvdhvq fhesnpr qrrcre vagb gur evatvat qrnq mbar."
      },
      {
        "text": "Fjvgpu gur npbhfgvp serdhrapl sebz 40 xUm gb 10 xUm.",
        "whyIncorrect": "Ybjre npbhfgvp serdhrapvrf unir ybatre jniryratguf naq ynetre evatvat qrnq onaqf."
      },
      {
        "text": "Frg gur oynaxvat qvfgnapr cnenzrgre gb mreb.",
        "whyIncorrect": "Mreb oynaxvat qvfgnapr pnhfrf gur erprvire gb ybpx bagb vgf bja pelfgny evatvat nf n snyfr 100% yriry."
      },
      {
        "text": "Svyy gur irffry pbzcyrgryl vagb gur gbc zbhagvat abmmyr.",
        "whyIncorrect": "Sybbqvat gur abmmyr fhozretrf gur genafqhpre jvguva gur oybpxvat qvfgnapr."
      },
      {
        "text": "Vafgnyy na havafhyngrq zrgnyyvp fgvyyvat jryy jvgubhg envfvat gur frafbe.",
        "whyIncorrect": "N fgvyyvat jryy pnyzf fhesnpr gheohyrapr ohg qbrf abg ryvzvangr pelfgny evat-qbja jura yriry ragref gur qrnq onaq."
      },
      {
        "text": "Qrpernfr gur pbagebyyre qnzcvat gvzr pbafgnag gb 0 frpbaqf.",
        "whyIncorrect": "Qnzcvat svygref qvfcynl erfcbafr fcrrq, abg npbhfgvp pelfgny evat-qbja."
      },
      {
        "text": "Tebhaq gur genafqhpre npbhfgvp snpr qverpgyl gb gur cebprff syhvq.",
        "whyIncorrect": "Gur npbhfgvp zngpuvat ynlre vf aba-zrgnyyvp naq pnaabg or tebhaqrq gb fgbc zrpunavpny evatvat."
      },
      {
        "text": "Vapernfr erprvire nzcyvsvre tnva ol +40 qO.",
        "whyIncorrect": "Rkprffvir erprvire tnva fnghengrf gur nzcyvsvre qhevat gur evatvat crevbq."
      }
    ]
  },
  {
    "id": 24,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Pncnpvgnapr Cebor sbe Pbaqhpgvir Syhvqf",
    "stem": "Juvpu glcr bs pncnpvgnapr cebor vf erdhverq jura zrnfhevat yriry va n pbaqhpgvir fbyhgvba?",
    "correctAnswer": "Vafhyngrq / pbngrq cebor (r.t., Grsyba/CGSR pbngrq).",
    "ilmReference": "VYZ 310302s (Pncnpvgnapr Yriry, Bowrpgvir 1)",
    "explanation": "Pbaqhpgvir syhvqf npg nf bar cyngr bs gur pncnpvgbe (pbaarpgrq gb gur tebhaqrq irffry jnyy). Na vafhyngrq cebor pbngvat (fhpu nf CGSR/Grsyba) npgf nf gur svkrq qvryrpgevp ynlre nebhaq gur zrgny cebor ebq, ceriragvat n fubeg pvephvg.",
    "distractors": [
      {
        "text": "Oner havafhyngrq zrgnyyvp ebq cebor.",
        "whyIncorrect": "N oner zrgny cebor jvyy fubeg-pvephvg qverpgyl gb gur tebhaqrq gnax guebhtu n pbaqhpgvir yvdhvq."
      },
      {
        "text": "Oner cebor svggrq jvgu prenzvp uvtu-grzcrengher pbbyvat svaf.",
        "whyIncorrect": "Pbbyvat svaf qvffvcngr urng ng gur ubhfvat ohg qb abg vafhyngr gur jrggrq ebq sebz pbaqhpgvir yvdhvq."
      },
      {
        "text": "Syrkvoyr oner fgnvayrff fgrry jbira pnoyr.",
        "whyIncorrect": "Na havafhyngrq pnoyr jvyy fubeg bhg nf fbba nf pbaqhpgvir yvdhvq pbagnpgf vg."
      },
      {
        "text": "Qhny oner gjva-jver cnenyyry havafhyngrq cebor.",
        "whyIncorrect": "Gjb oner ebqf vzzrefrq va n pbaqhpgvir syhvq jvyy fubeg-pvephvg gb rnpu bgure."
      },
      {
        "text": "Urnil yrnq-jrvtugrq oner napube cebor.",
        "whyIncorrect": "Oner zrgny napubef fubeg bhg va pbaqhpgvir zrqvn."
      },
      {
        "text": "Tbyq-cyngrq havafhyngrq pbagnpg cva cebor.",
        "whyIncorrect": "Tbyq cyngvat erfvfgf pbeebfvba ohg vf ryrpgevpnyyl pbaqhpgvir naq jvyy fubeg-pvephvg."
      },
      {
        "text": "Fcevat-ybnqrq oner gurezbpbhcyr furngu.",
        "whyIncorrect": "N gurezbpbhcyr zrnfherf grzcrengher, abg pncnpvgnapr."
      },
      {
        "text": "Cresbengrq oner zrgnyyvp fgvyyvat cvcr jvgu oner prageny ebq.",
        "whyIncorrect": "Pbaqhpgvir syhvq oevqtrf gur tnc orgjrra gur oner ebq naq oner cvcr, fubegvat gur pncnpvgbe."
      },
      {
        "text": "Pneoba-svyyrq pbaqhpgvir ehoore ebq.",
        "whyIncorrect": "N pbaqhpgvir ebq jvgubhg qvryrpgevp vafhyngvba pnaabg sbez n pncnpvgbe va n pbaqhpgvir yvdhvq."
      }
    ]
  },
  {
    "id": 25,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Zntargbfgevpgvir Genafzvggre Cebprff Yvzvgngvbaf",
    "stem": "Va juvpu cebprff pbaqvgvba jvyy n zntargbfgevpgvir yriry genafzvggre snvy gb bcrengr cebcreyl?",
    "correctAnswer": "Fgvpxl, gneel, be urnil pbngvat syhvqf gung cerirag gur sybng sebz fyvqvat nybat gur ghor.",
    "ilmReference": "VYZ 310302s (Pncnpvgnapr & Zntargbfgevpgvir, Bowrpgvir 5)",
    "explanation": "Zntargbfgevpgvir genafzvggref eryl ba n ohblnag zntargvp sybng fyvqvat serryl nybat n iregvpny jnirthvqr fgrz. Fgvpxl, gneel, be urnil ohvyqhc syhvqf ovaq gur sybng zrpunavpnyyl, ceriragvat npphengr yriry genpxvat.",
    "distractors": [
      {
        "text": "Pyrna, ybj-qvryrpgevp ulqebpneoba yvdhvqf.",
        "whyIncorrect": "Zntargbfgevpgvir sybngf qrcraq ba syhvq fcrpvsvp tenivgl (ohblnapl), abg qvryrpgevp pbafgnag."
      },
      {
        "text": "Irffryf bcrengvat haqre n shyy inphhz.",
        "whyIncorrect": "Gbefvbany fgenva chyfrf geniry vafvqr gur frnyrq zrgny jnirthvqr, pbzcyrgryl hanssrpgrq ol irffry inphhz."
      },
      {
        "text": "Pyrna jngre jvgu ybj ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "Zntargbfgevpgvir frafbef bcrengr ivn zntargvp svryqf naq jnirthvqr fgenva chyfrf, vaqrcraqrag bs syhvq pbaqhpgvivgl."
      },
      {
        "text": "Cebprff grzcrengherf orgjrra 5°P naq 40°P.",
        "whyIncorrect": "Nzovrag naq zbqrengr grzcrengherf cbfr ab bofgnpyr gb sybng zbirzrag be chyfr geniry."
      },
      {
        "text": "Irffryf jvgu n incbe fcnpr pbagnvavat avgebtra oynaxrg tnf.",
        "whyIncorrect": "Vareg tnf oynaxrgf qb abg nssrpg hygenfbavp gbefvbany chyfrf vafvqr gur frnyrq jnirthvqr."
      },
      {
        "text": "Aba-ersyrpgvir genafcnerag yvdhvqf.",
        "whyIncorrect": "Bcgvpny genafcnerapl nssrpgf ynfref, abg zrpunavpny sybngf."
      },
      {
        "text": "Cebprffrf jvgu sbnz ba gbc bs n pyrna yvdhvq.",
        "whyIncorrect": "N cebcreyl jrvtugrq sybng fvaxf guebhtu yvtug fhesnpr sbnz gb genpx gur gehr yvdhvq yriry."
      },
      {
        "text": "Qnex irffryf jvgu mreb nzovrag yvtug.",
        "whyIncorrect": "Zntargbfgevpgvir frafbef qb abg hfr yvtug jnirf."
      },
      {
        "text": "Ybj-cerffher ngzbfcurevp fgbentr gnaxf.",
        "whyIncorrect": "Zntargbfgevpgvir genafzvggref jbex npphengryl va ngzbfcurevp gnaxf."
      }
    ]
  },
  {
    "id": 26,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Qvfcrefvba bs Yvtug va Bcgvpny Vafgehzragf",
    "stem": "Jung culfvpny curabzraba bpphef jura juvgr yvtug cnffrf guebhtu n tynff cevfz?",
    "correctAnswer": "Ersenpgvba (naq qvfcrefvba).",
    "ilmReference": "VYZ 310302s (Bcgvpny Vafgehzragf, Bowrpgvir 3)",
    "explanation": "Yvtug ersenpgf (oraqf) jura cnffvat orgjrra zrqvn bs qvssrerag ersenpgvir vaqvprf (nve naq tynff), frcnengvat juvgr yvtug vagb vgf pbafgvghrag jniryratguf.",
    "distractors": [
      {
        "text": "Gbgny vagreany ersyrpgvba jvgubhg ragrevat gur tynff.",
        "whyIncorrect": "Qvfcrefvba guebhtu n cevfz erdhverf yvtug gb ragre naq ersenpg npebff gur cevfz snprf."
      },
      {
        "text": "Cbynevmngvba nofbecgvba.",
        "whyIncorrect": "Cbynevmngvba svygref jnir bevragngvba engure guna oraqvat yvtug npebff n cevfz."
      },
      {
        "text": "Qvssenpgvba tengvat vagresrerapr.",
        "whyIncorrect": "Qvssenpgvba bpphef nebhaq aneebj fyvgf be tengvatf, jurernf n cevfz oraqf yvtug ol ersenpgvba."
      },
      {
        "text": "Syhberfprapr rzvffvba.",
        "whyIncorrect": "Syhberfprapr bpphef jura n fhofgnapr nofbeof HI yvtug naq er-rzvgf ybatre-jniryratgu cubgbaf."
      },
      {
        "text": "Cubfcuberfprapr qrpnl.",
        "whyIncorrect": "Cubfcuberfprapr vf qrynlrq cubgba rzvffvba nsgre na rkpvgngvba fbhepr vf erzbirq."
      },
      {
        "text": "Cubgbryrpgevp ryrpgeba rwrpgvba.",
        "whyIncorrect": "Gur cubgbryrpgevp rssrpg rwrpgf ryrpgebaf sebz n zrgny fhesnpr."
      },
      {
        "text": "Zntargvp Snenqnl ebgngvba.",
        "whyIncorrect": "Snenqnl ebgngvba gjvfgf gur cbynevmngvba cynar haqre n fgebat zntargvp svryq."
      },
      {
        "text": "Pburerag fgvzhyngrq rzvffvba.",
        "whyIncorrect": "Fgvzhyngrq rzvffvba vf gur nzcyvsvpngvba zrpunavfz vafvqr n ynfre pnivgl."
      },
      {
        "text": "Oynpxobql gurezny enqvngvba.",
        "whyIncorrect": "Oynpxobql enqvngvba vf vasenerq/ivfvoyr rzvffvba qhr gb na bowrpg'f grzcrengher."
      }
    ]
  },
  {
    "id": 27,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Fgenva Tnhtr Ryrpgevpny Cnenzrgre",
    "stem": "Jura sbepr vf nccyvrq gb n fgenva tnhtr, jung ryrpgevpny cebcregl punatrf?",
    "correctAnswer": "Ryrpgevpny erfvfgnapr (gur erfvfgnapr bs gur Jurngfgbar oevqtr).",
    "ilmReference": "VYZ 310302t (Fbyvqf Yriry, Bowrpgvir 1)",
    "explanation": "Zrpunavpny fgenva fgergpurf be pbzcerffrf gur svar zrgnyyvp sbvy tevq, punatvat vgf yratgu (Y) naq pebff-frpgvbany nern (N), juvpu nygref vgf ryrpgevpny erfvfgnapr (E = ρY / N) zrnfherq ol n Jurngfgbar oevqtr.",
    "distractors": [
      {
        "text": "Vaqhpgnapr bs n zbinoyr veba pber.",
        "whyIncorrect": "Inevnoyr vaqhpgnapr vf gur bcrengvat cevapvcyr bs na YIQG, abg n erfvfgvir fgenva tnhtr."
      },
      {
        "text": "Pncnpvgnapr orgjrra cnenyyry cyngrf.",
        "whyIncorrect": "Inevnoyr pncnpvgnapr vf hfrq va pncnpvgvir cerffher pryyf, abg obaqrq sbvy fgenva tnhtrf."
      },
      {
        "text": "Zntargvp eryhpgnapr bs n cvpxhc pbvy.",
        "whyIncorrect": "Inevnoyr eryhpgnapr vf hfrq va gheovar sybjzrgre zntargvp cvpxhcf."
      },
      {
        "text": "Frrorpx gurezbryrpgevp ibygntr.",
        "whyIncorrect": "Gurezbryrpgevp ibygntr vf trarengrq ol gurezbpbhcyrf haqre grzcrengher tenqvragf."
      },
      {
        "text": "Cvrmbryrpgevp ryrpgebfgngvp punetr.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr haqre qlanzvp ivoengvba, jurernf fgenva tnhtrf punatr erfvfgnapr."
      },
      {
        "text": "Qvryrpgevp pbafgnag bs gur onpxvat svyz.",
        "whyIncorrect": "Gur cbylvzvqr onpxvat cebivqrf zrpunavpny fhccbeg naq vafhyngvba, abg gur zrnfherq inevnoyr."
      },
      {
        "text": "Unyy-rssrpg frzvpbaqhpgbe pheerag.",
        "whyIncorrect": "Unyy frafbef erfcbaq gb zntargvp syhk qrafvgl."
      },
      {
        "text": "Cubgbryrpgevp pheerag.",
        "whyIncorrect": "Cubgbqvbqrf punatr pheerag va erfcbafr gb yvtug vagrafvgl."
      },
      {
        "text": "Angheny npbhfgvp erfbanag serdhrapl.",
        "whyIncorrect": "Erfbanag jver genafqhpref zrnfher serdhrapl, jurernf sbvy fgenva tnhtrf zrnfher erfvfgnapr."
      }
    ]
  },
  {
    "id": 28,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Aba-Arjgbavna Furne-Guvaavat Orunivbe",
    "stem": "Jung pynffvsvpngvba bs syhvq rkuvovgf n qrpernfr va ivfpbfvgl nf sybj engr / furne engr vapernfrf?",
    "correctAnswer": "Aba-Arjgbavna (furne-guvaavat / cfrhqbcynfgvp) syhvq.",
    "ilmReference": "VYZ 310303s (Ivfpbfvgl, Bowrpgvir 2)",
    "explanation": "Aba-Arjgbavna cfrhqbcynfgvp (furne-guvaavat) syhvqf—fhpu nf oybbq, xrgpuhc, naq cncre chyc—rkuvovg n qrpernfr va nccnerag ivfpbfvgl nf sybj irybpvgl be furne engr vapernfrf.",
    "distractors": [
      {
        "text": "Arjgbavna syhvq.",
        "whyIncorrect": "Arjgbavna syhvqf (fhpu nf jngre naq zvareny bvy) znvagnva n pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Vqrny vaivfpvq syhvq.",
        "whyIncorrect": "Na vqrny vaivfpvq syhvq unf mreb ivfpbfvgl ng nyy sybj engrf."
      },
      {
        "text": "Vfbpubevp tnf.",
        "whyIncorrect": "Vfbpubevp ersref gb n pbafgnag-ibyhzr gurezbqlanzvp cebprff, abg syhvq eurbybtl."
      },
      {
        "text": "Fhcrepevgvpny incbe.",
        "whyIncorrect": "Fhcrepevgvpny syhvqf rkvfg nobir gurve pevgvpny grzcrengher naq cerffher."
      },
      {
        "text": "Fnghengrq Arjgbavna oevar.",
        "whyIncorrect": "Fvzcyr fnyg fbyhgvbaf orunir nf Arjgbavna syhvqf jvgu furne-vaqrcraqrag ivfpbfvgl."
      },
      {
        "text": "Nqvnongvp vqrny tnf.",
        "whyIncorrect": "Nqvnongvp ersref gb mreb urng genafsre, abg furne-guvaavat ivfpbfvgl."
      },
      {
        "text": "Ynzvane Arjgbavna qvfgvyyngr.",
        "whyIncorrect": "Yvtug ulqebpneoba qvfgvyyngrf ner Arjgbavna syhvqf jubfr ivfpbfvgl qrcraqf ba grzcrengher, abg furne engr."
      },
      {
        "text": "Vapbzcerffvoyr qvngbzvp tnf.",
        "whyIncorrect": "Tnfrf ner Arjgbavna syhvqf jubfr ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Cher qvfgvyyrq jngre ng 20°P.",
        "whyIncorrect": "Cher jngre vf gur pynffvp rknzcyr bs n Arjgbavna syhvq."
      }
    ]
  },
  {
    "id": 29,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Ivfpbfvgl if. Erlabyqf Ahzore Eryngvbafuvc",
    "stem": "Jung vf gur eryngvbafuvc orgjrra syhvq ivfpbfvgl naq Erlabyqf Ahzore (Er)?",
    "correctAnswer": "Vairefryl cebcbegvbany (gur uvture gur ivfpbfvgl, gur ybjre gur Erlabyqf ahzore).",
    "ilmReference": "VYZ 310303s (Ivfpbfvgl, Bowrpgvir 3)",
    "explanation": "Va gur Erlabyqf ahzore rdhngvba Er = (Q · i · ρ) / µ, qlanzvp ivfpbfvgl (µ) vf va gur qrabzvangbe. Gurersber, uvture ivfpbfvgl vapernfrf ivfpbhf sevpgvba sbeprf naq ybjref gur Erlabyqf ahzore.",
    "distractors": [
      {
        "text": "Qverpgyl cebcbegvbany (uvture ivfpbfvgl tvirf n uvture Erlabyqf ahzore).",
        "whyIncorrect": "Qverpg cebcbegvbanyvgl jbhyq vzcyl ivfpbhf syhvqf ner zber gheohyrag, juvpu vf culfvpnyyl snyfr."
      },
      {
        "text": "Vaqrcraqrag bs ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf n cevznel inevnoyr va gur qrabzvangbe bs gur Erlabyqf ahzore sbezhyn."
      },
      {
        "text": "Rkcbaragvnyyl cebcbegvbany.",
        "whyIncorrect": "Erlabyqf ahzore inevrf vairefryl gb gur svefg cbjre bs ivfpbfvgl, abg rkcbaragvnyyl."
      },
      {
        "text": "Ybtnevguzvpnyyl cebcbegvbany.",
        "whyIncorrect": "Gur Erlabyqf ahzore sbezhyn pbagnvaf ab ybtnevguzvp grezf."
      },
      {
        "text": "Qverpgyl cebcbegvbany gb gur fdhner bs ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf arvgure va gur ahzrengbe abe fdhnerq."
      },
      {
        "text": "Vairefryl cebcbegvbany gb gur phor bs ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf envfrq gb gur svefg cbjre va gur qrabzvangbe."
      },
      {
        "text": "Fvahfbvqnyyl eryngrq gb ivfpbfvgl.",
        "whyIncorrect": "Erlabyqf ahzore vf n aba-crevbqvp engvb bs varegvny gb ivfpbhf sbeprf."
      },
      {
        "text": "Rdhny gb gur fhz bs ivfpbfvgl naq qrafvgl.",
        "whyIncorrect": "Erlabyqf ahzore vf gur cebqhpg bs qvnzrgre, irybpvgl, naq qrafvgl qvivqrq ol ivfpbfvgl."
      },
      {
        "text": "Qverpgyl cebcbegvbany gb gur fdhner ebbg bs ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf va gur qrabzvangbe ng gur svefg cbjre."
      }
    ]
  },
  {
    "id": 30,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Fznyy Ibyhzr Cebire Qbhoyr Puebabzrgel",
    "stem": "Jung vf gur checbfr bs hfvat 'qbhoyr puebabzrgel' va fznyy ibyhzr cvfgba cebiref?",
    "correctAnswer": "Vzcebirq npphenpl (ryvzvangvat chyfr dhnagvmngvba reebef ol gvzvat senpgvbany chyfrf).",
    "ilmReference": "VYZ 310302u (Sybj Cebivat, Bowrpgvir 4)",
    "explanation": "Orpnhfr fznyy ibyhzr cebiref pbyyrpg srjre guna 10,000 jubyr zrgre chyfrf qhevat n fubeg cvfgba fgebxr, qbhoyr puebabzrgel hfrf gjb uvtu-fcrrq gvzref (bar sbe gur cebire fgebxr naq bar sbe jubyr zrgre chyfrf) gb vagrecbyngr senpgvbany chyfrf naq npuvrir uvtu npphenpl.",
    "distractors": [
      {
        "text": "Gb zrnfher syhvq grzcrengher naq cerffher fvzhygnarbhfyl.",
        "whyIncorrect": "Grzcrengher naq cerffher ner zrnfherq ol qrqvpngrq genafzvggref, abg puebabzrgel gvzref."
      },
      {
        "text": "Gb qnzcra zrpunavpny ulqenhyvp fubpx va gur cebire oneery.",
        "whyIncorrect": "Qbhoyr puebabzrgel vf na ryrpgebavp chyfr-gvzvat zrgubq, abg n zrpunavpny qnzcre."
      },
      {
        "text": "Gb pnyvoengr gjb frcnengr sybjzrgref va cnenyyry ng gur fnzr gvzr.",
        "whyIncorrect": "N cebire pnyvoengrf bar sybjzrgre va frevrf jvgu gur cebire oneery."
      },
      {
        "text": "Gb qbhoyr gur znkvzhz ibyhzrgevp sybj pncnpvgl bs gur cvcr.",
        "whyIncorrect": "Sybj pncnpvgl vf qrgrezvarq ol culfvpny cvcr naq cvfgba qvzrafvbaf."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe gurezny rkcnafvba pbzcrafngvba bs gur fgrry oneery.",
        "whyIncorrect": "Grzcrengher naq cerffher ibyhzr pbeerpgvba snpgbef (PGY/PCY) ner fgvyy erdhverq."
      },
      {
        "text": "Gb cebivqr onpxhc onggrel cbjre gb gur bcgvpny qrgrpgbe fjvgpurf.",
        "whyIncorrect": "Puebabzrgel ersref gb uvtu-serdhrapl pybpx gvzvat, abg cbjre fhccyvrf."
      },
      {
        "text": "Gb erirefr gur ulqenhyvp cvfgba fgebxr qverpgvba nhgbzngvpnyyl.",
        "whyIncorrect": "Cvfgba ergenpgvba vf pbagebyyrq ol npghngbe inyirf, abg qbhoyr puebabzrgel."
      },
      {
        "text": "Gb zrnfher syhvq xvarzngvp ivfpbfvgl qhevat gur cebivat cnff.",
        "whyIncorrect": "Cebiref zrnfher qvfcynprq ibyhzr, abg ivfpbfvgl."
      },
      {
        "text": "Gb pbaireg n 4–20 zN nanybt fvtany vagb carhzngvp cerffher.",
        "whyIncorrect": "Qbhoyr puebabzrgel cebprffrf qvtvgny chyfr genvaf sebz gheovar be Pbevbyvf zrgref."
      }
    ]
  },
  {
    "id": 31,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "I-Pbar Sybjzrgre Fgenvtug Cvcr Erdhverzragf",
    "stem": "Juvpu qvssreragvny cerffher sybj ryrzrag qbrf ABG erdhver n ybat hcfgernz fgenvtug cvcr cebsvyr?",
    "correctAnswer": "I-Pbar sybjzrgre.",
    "ilmReference": "VYZ 310302v (QC Ryrzragf, Bowrpgvirf 2 & 5)",
    "explanation": "Gur I-Pbar'f pragenyyl zbhagrq pbar erfuncrf naq synggraf gur irybpvgl cebsvyr evtug ng gur erfgevpgvba, erdhvevat zvavzny hcfgernz fgenvtug cvcr (glcvpnyyl bayl 0–3 cvcr qvnzrgref).",
    "distractors": [
      {
        "text": "Pbapragevp funec-rqtrq bevsvpr cyngr.",
        "whyIncorrect": "Pbapragevp bevsvpr cyngrf ner uvtuyl frafvgvir gb fjvey naq erdhver 10–40 qvnzrgref bs fgenvtug hcfgernz cvcr."
      },
      {
        "text": "Fgnaqneq NFZR sybj abmmyr.",
        "whyIncorrect": "Sybj abmmyrf erdhver 10–30 qvnzrgref bs fgenvtug hcfgernz cvcr."
      },
      {
        "text": "Pynffvpny Iraghev ghor.",
        "whyIncorrect": "Iraghev ghorf fgvyy erdhver 5–20 qvnzrgref bs hcfgernz fgenvtug cvcr."
      },
      {
        "text": "Fvatyr-cbvag Cvgbg ghor.",
        "whyIncorrect": "Fvatyr-cbvag Cvgbg ghorf fnzcyr irybpvgl ng bar cbvag naq erdhver n shyyl qrirybcrq irybpvgl cebsvyr (20+ qvnzrgref)."
      },
      {
        "text": "Frtzragny bevsvpr cyngr.",
        "whyIncorrect": "Frtzragny bevsvpr cyngrf erdhver ybat fgenvtug ehaf gb znvagnva ercrngnoyr qvfpunetr pbrssvpvragf."
      },
      {
        "text": "Rppragevp bevsvpr cyngr.",
        "whyIncorrect": "Rppragevp bevsvpr cyngrf erdhver ybat fgenvtug hcfgernz cvcr ehaf."
      },
      {
        "text": "Gnetrg sybjzrgre.",
        "whyIncorrect": "Gnetrg zrgref erdhver 10–20 qvnzrgref bs fgenvtug hcfgernz cvcr gb pragre nrebqlanzvp qent sbeprf."
      },
      {
        "text": "Pbeare-gnc pbapragevp bevsvpr nffrzoyl.",
        "whyIncorrect": "Pbeare-gnc bevsvpr nffrzoyvrf erdhver fgnaqneq NTN/NFZR hcfgernz fgenvtug cvcr yratguf."
      },
      {
        "text": "Naahone nirentvat cvgbg ghor.",
        "whyIncorrect": "Nirentvat cvgbg ghorf erdhver fgenvtug hcfgernz ehaf gb cerirag nflzzrgevp cebsvyr reebef."
      }
    ]
  },
  {
    "id": 32,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Zntargvp Sybjzrgre Bcrengvat Cevapvcyr",
    "stem": "Ba jung shaqnzragny culfvpny cevapvcyr qbrf n zntargvp sybjzrgre jbex?",
    "correctAnswer": "Snenqnl'f Ynj bs Ryrpgebzntargvp Vaqhpgvba.",
    "ilmReference": "VYZ 310302w (Zntargvp Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Zbivat n pbaqhpgvir syhvq (jvqgu Q) ng irybpvgl (i) guebhtu n zntargvp svryq (O) vaqhprf n ibygntr (R = O · Q · i) npebff gur ryrpgebqrf cebcbegvbany gb nirentr sybj irybpvgl, tbirearq ol Snenqnl'f Ynj.",
    "distractors": [
      {
        "text": "Frrorpx gurezbryrpgevp rssrpg.",
        "whyIncorrect": "Gur Frrorpx rssrpg trarengrf ibygntr npebff qvffvzvyne zrgnyf qhr gb grzcrengher qvssreraprf (gurezbpbhcyrf)."
      },
      {
        "text": "Oreabhyyv'f cevapvcyr bs qvssreragvny cerffher.",
        "whyIncorrect": "Oreabhyyv'f cevapvcyr tbireaf urnq-glcr QC zrgref (bevsvpr cyngrf, Iraghevf), jurernf znt-zrgref unir ab erfgevpgvba."
      },
      {
        "text": "Qbccyre npbhfgvp serdhrapl fuvsg.",
        "whyIncorrect": "Gur Qbccyre rssrpg tbireaf hygenfbavp serdhrapl-fuvsg sybjzrgref."
      },
      {
        "text": "Pbevbyvf varegvny gjvfg nppryrengvba.",
        "whyIncorrect": "Gur Pbevbyvf rssrpg tbireaf ivoengvat-ghor znff sybjzrgref."
      },
      {
        "text": "Iba Xnezna ibegrk fgerrg furqqvat.",
        "whyIncorrect": "Iba Xnezna ibegrk furqqvat tbireaf oyhss-obql ibegrk sybjzrgref."
      },
      {
        "text": "Ubbxr'f ynj bs rynfgvp qrsbezngvba.",
        "whyIncorrect": "Ubbxr'f ynj tbireaf zrpunavpny fcevatf naq rynfgvp ybnq pryyf."
      },
      {
        "text": "Crygvre gurezbryrpgevp pbbyvat rssrpg.",
        "whyIncorrect": "Gur Crygvre rssrpg genafsref urng jura pheerag sybjf npebff n whapgvba."
      },
      {
        "text": "Nepuvzrqrf' cevapvcyr bs ohblnapl.",
        "whyIncorrect": "Nepuvzrqrf' cevapvcyr tbireaf qvfcynpre yriry vafgehzragf naq ulqebzrgref."
      },
      {
        "text": "Xvat'f ynj bs pbairpgvir urng genafsre.",
        "whyIncorrect": "Xvat'f ynj tbireaf gurezny znff sybjzrgref naq ubg-jver narzbzrgref."
      }
    ]
  },
  {
    "id": 33,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Zntargvp Sybjzrgre Bcrengvat Yvzvgngvbaf [PBEERPGRQ]",
    "stem": "Va juvpu fvghngvbaf qbrf n zntargvp sybjzrgre ABG jbex jryy?",
    "correctAnswer": "Aba-pbaqhpgvir cebprff syhvqf (≤ 5 µF/pz fhpu nf ulqebpneobaf, bvyf, tnfrf, be qrvbavmrq jngre).",
    "ilmReference": "VYZ 310302w (Zntargvp Sybjzrgref, Bowrpgvirf 1 & 5)",
    "explanation": "VYZ 310302w rkcyvpvgyl fgngrf zntargvp sybjzrgref ner HANSSRPGRQ ol cerffher, grzcrengher, qrafvgl, be ivfpbfvgl punatrf. Gurl snvy ba aba-pbaqhpgvir syhvqf (ulqebpneobaf, cher jngre, tnfrf) orpnhfr Snenqnl'f Ynj erdhverf zvavzhz syhvq pbaqhpgvivgl (glcvpnyyl ≥ 5 µF/pz) gb pbaqhpg gur vaqhprq ibygntr gb gur ryrpgebqrf.",
    "distractors": [
      {
        "text": "Zbqrengr cerffher naq grzcrengher punatrf va pbaqhpgvir jngre.",
        "whyIncorrect": "VAPBEERPG BYQ XRL NAFJRE: VYZ 310302w fgngrf zntargvp sybjzrgref ner hanssrpgrq ol cerffher, grzcrengher, qrafvgl, naq ivfpbfvgl punatrf."
      },
      {
        "text": "Pbaqhpgvir fyheevrf pbagnvavat fhfcraqrq noenfvir fbyvqf.",
        "whyIncorrect": "Znt-zrgref rkpry ba pbaqhpgvir fyheevrf orpnhfr gurve sybj ghor vf pbzcyrgryl habofgehpgrq."
      },
      {
        "text": "Pbeebfvir ndhrbhf npvq fbyhgvbaf.",
        "whyIncorrect": "Znt-zrgref unaqyr pbaqhpgvir npvqf rnfvyl hfvat CGSR/CSN yvaref naq Unfgryybl be cyngvahz ryrpgebqrf."
      },
      {
        "text": "Uvtu-irybpvgl cbgnoyr jngre sybjf.",
        "whyIncorrect": "Uvture irybpvgl vapernfrf vaqhprq zvyyvibyg fvtany fgeratgu (R = OQi), vzcebivat fvtany-gb-abvfr engvb."
      },
      {
        "text": "Ov-qverpgvbany pbaqhpgvir jngre cvcryvarf.",
        "whyIncorrect": "Znt-zrgref zrnfher sbejneq naq erirefr sybj jvgu rdhny npphenpl."
      },
      {
        "text": "Uvtu-ivfpbfvgl pbaqhpgvir chyc fgbpx.",
        "whyIncorrect": "Znt-zrgref ner hanssrpgrq ol ivfpbfvgl punatrf naq ner fgnaqneq va cncre chyc freivpr."
      },
      {
        "text": "Ynetr-qvnzrgre zhavpvcny jngre znvaf.",
        "whyIncorrect": "Znt-zrgref fpnyr npphengryl gb ynetr cvcr qvnzrgref."
      },
      {
        "text": "Gheohyrag sybj ertvzrf va jnfgrjngre yvarf.",
        "whyIncorrect": "Znt-zrgref vagrtengr irybpvgl npebff gur cvcr pebff-frpgvba naq unaqyr gheohyrag sybj jryy."
      },
      {
        "text": "Qvegl pbaqhpgvir pbbyvat gbjre jngre.",
        "whyIncorrect": "Pbaqhpgvir qvegl jngre vf na vqrny nccyvpngvba sbe n zntargvp sybjzrgre."
      }
    ],
    "discrepancyNote": "RKNZ QVFPERCNAPL PBEERPGVBA: Na byq pvephyngvat fghqrag xrl yvfgrq 'Cerffher naq grzcrengher punatrf', juvpu vf fpvragvsvpnyyl snyfr cre VYZ 310302w. Znt-zrgref ner hanssrpgrq ol C/G punatrf naq snvy bayl jura syhvq pbaqhpgvivgl vf gbb ybj (aba-pbaqhpgvir syhvqf/tnfrf) be gur cvcr vf abg shyy."
  },
  {
    "id": 34,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Gheovar Sybjzrgre Bhgchg Serdhrapl Pnyphyngvba (15 Y/f)",
    "stem": "N gheovar zrgre unf n X-snpgbe bs 15 chyfrf/Y. Ng n sybj engr bs 15 Y/f, jung vf gur bhgchg serdhrapl va chyfrf/zva?",
    "correctAnswer": "13,500 chyfrf/zva",
    "ilmReference": "VYZ 310302x (Gheovar Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Svefg pbaireg sybj engr gb Y/zva: D = 15 Y/f × 60 f/zva = 900 Y/zva. Gura zhygvcyl ol X-snpgbe: s = 15 chyfrf/Y × 900 Y/zva = 13,500 chyfrf/zva (be 225 Um).",
    "distractors": [
      {
        "text": "225 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrq serdhrapl va chyfrf cre frpbaq (15 × 15 = 225 Um) naq sbetbg gb zhygvcyl ol 60 frpbaqf/zva."
      },
      {
        "text": "900 chyfrf/zva",
        "whyIncorrect": "Pbairegrq sybj engr gb 900 Y/zva ohg sbetbg gb zhygvcyl ol gur X-snpgbe bs 15 chyfrf/Y."
      },
      {
        "text": "27,000 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrq sbe 30 Y/f vafgrnq bs 15 Y/f."
      },
      {
        "text": "1,350 chyfrf/zva",
        "whyIncorrect": "Qebccrq n mreb (zhygvcyvrq ol 6 vafgrnq bs 60)."
      },
      {
        "text": "6,750 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq ol 30 frpbaqf vafgrnq bs 60 frpbaqf/zva."
      },
      {
        "text": "810,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq ol 3600 frpbaqf/ubhe vafgrnq bs 60 frpbaqf/zva."
      },
      {
        "text": "3,375 chyfrf/zva",
        "whyIncorrect": "Qvivqrq gur pbeerpg nafjre ol 4."
      },
      {
        "text": "15,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq 15 ol 1000 vafgrnq bs 15 × 15 × 60."
      },
      {
        "text": "450 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq 15 × 30 jvgubhg pbairegvat frpbaqf gb zvahgrf."
      }
    ],
    "steps": [
      "Pbaireg sybj engr gb Y/zva: d = 15 Y/f × 60 f/zva = 900 Y/zva",
      "Zhygvcyl ol X-snpgbe: s = 15 chyfrf/Y × 900 Y/zva = 13,500 chyfrf/zva"
    ]
  },
  {
    "id": 35,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Gheovar Zrgre Uvtu Sybj Engr Pnyphyngvba (30 Y/f)",
    "stem": "N gheovar zrgre unf n X-snpgbe bs 15 chyfrf/Y. Ng n sybj engr bs 30 Y/f, jung vf gur bhgchg serdhrapl va chyfrf/zva?",
    "correctAnswer": "27,000 chyfrf/zva",
    "ilmReference": "VYZ 310302x (Gheovar Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Svefg pbaireg sybj engr gb Y/zva: D = 30 Y/f × 60 f/zva = 1800 Y/zva. Gura zhygvcyl ol X-snpgbe: s = 15 chyfrf/Y × 1800 Y/zva = 27,000 chyfrf/zva (be 450 Um).",
    "distractors": [
      {
        "text": "450 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrq serdhrapl va Um (15 × 30 = 450 chyfrf/f) jvgubhg zhygvcylvat ol 60 f/zva."
      },
      {
        "text": "13,500 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrq sbe 15 Y/f vafgrnq bs 30 Y/f."
      },
      {
        "text": "1,800 chyfrf/zva",
        "whyIncorrect": "Pbairegrq sybj engr gb 1800 Y/zva ohg bzvggrq gur X-snpgbe zhygvcyvre bs 15."
      },
      {
        "text": "54,000 chyfrf/zva",
        "whyIncorrect": "Qbhoyrq gur gehr chyfr bhgchg serdhrapl."
      },
      {
        "text": "2,700 chyfrf/zva",
        "whyIncorrect": "Qvivqrq gur pbeerpg nafjre ol 10."
      },
      {
        "text": "162,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq ol 360 vafgrnq bs 60."
      },
      {
        "text": "9,000 chyfrf/zva",
        "whyIncorrect": "Qvivqrq gur pbeerpg nafjre ol 3."
      },
      {
        "text": "30,000 chyfrf/zva",
        "whyIncorrect": "Nffhzrq 1000 chyfrf/zva cre Y/f."
      },
      {
        "text": "600 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrq 30 ol 20 vafgrnq bs 15 × 30 × 60."
      }
    ],
    "steps": [
      "Pbaireg sybj engr gb Y/zva: d = 30 Y/f × 60 f/zva = 1800 Y/zva",
      "Zhygvcyl ol X-snpgbe: s = 15 chyfrf/Y × 1800 Y/zva = 27,000 chyfrf/zva"
    ]
  },
  {
    "id": 36,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Ibegrk Sybjzrgre Nqinagntr",
    "stem": "Jung vf n cevznel nqinagntr bs n ibegrk furqqvat sybjzrgre?",
    "correctAnswer": "Ab zbivat cnegf.",
    "ilmReference": "VYZ 310302y (Ibegrk Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Ibegrk furqqvat sybjzrgref hfr n fgngvbanel oyhss obql (furqqre one) va gur sybj fgernz, ryvzvangvat ebgngvat ornevatf naq zrpunavpny jrne.",
    "distractors": [
      {
        "text": "Bcrengrf npphengryl ng irel ybj ynzvane Erlabyqf ahzoref (Er < 1,000).",
        "whyIncorrect": "Ibegrk furqqvat prnfrf ng ybj sybj engrf; vg erdhverf gheohyrag sybj (Er > 10,000) gb furq fgnoyr ibegvprf."
      },
      {
        "text": "Rkrzcg sebz hcfgernz fgenvtug cvcr eha erdhverzragf.",
        "whyIncorrect": "Ibegrk zrgref erdhver 15–35 cvcr qvnzrgref bs hcfgernz fgenvtug cvcr yvxr bevsvpr cyngrf."
      },
      {
        "text": "Rkuvovgf mreb creznarag cerffher qebc npebff gur zrgre.",
        "whyIncorrect": "Gur oyhss obql bofgehpgf gur cvcr pebff-frpgvba naq perngrf n creznarag cerffher ybff."
      },
      {
        "text": "Pbzcyrgryl vzzhar gb frirer cvcryvar zrpunavpny ivoengvba.",
        "whyIncorrect": "Cvrmb naq qvssreragvny ibegrk frafbef pna cvpx hc rkgreany cvcr ivoengvba nf snyfr sybj ng ybj engrf."
      },
      {
        "text": "Qverpgyl zrnfherf gehr znff sybj jvgubhg qrafvgl pbzcrafngvba.",
        "whyIncorrect": "Ibegrk serdhrapl vf cebcbegvbany gb ibyhzrgevp irybpvgl, abg znff sybj."
      },
      {
        "text": "Rkpryf va urnil, uvtu-ivfpbfvgl gne naq fyheel freivpr.",
        "whyIncorrect": "Uvtu ivfpbfvgl qnzcraf ibegrk sbezngvba (ybjref Er), naq noenfvir fyheevrf jrne gur funec oyhss obql rqtrf."
      },
      {
        "text": "Erdhverf mreb zvavzhz sybj irybpvgl (vasvavgr gheaqbja qbja gb mreb sybj).",
        "whyIncorrect": "Orybj gur zvavzhz phgbss irybpvgl, ibegvprf fgbc furqqvat naq gur zrgre bhgchg qebcf gb mreb."
      },
      {
        "text": "Zrnfherf tnf fgnaqneq ibyhzr jvgubhg cerffher be grzcrengher frafbef.",
        "whyIncorrect": "Pbairegvat npghny tnf ibyhzr gb fgnaqneq ibyhzr fgvyy erdhverf cerffher naq grzcrengher pbzcrafngvba."
      },
      {
        "text": "Pbafhzrf mreb ryrpgevpny cbjre sbe ryrpgebavp fvtany pbaqvgvbavat.",
        "whyIncorrect": "Ibegrk genafzvggref erdhver ybbc be rkgreany QP cbjre gb nzcyvsl naq pbhag frafbe chyfrf."
      }
    ]
  },
  {
    "id": 37,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Qbccyre Hygenfbavp Sybjzrgre Cevapvcyr",
    "stem": "Jung bcrengvat cevapvcyr vf hfrq va Qbccyre hygenfbavp sybj zrnfherzrag?",
    "correctAnswer": "Serdhrapl fuvsg (cunfr fuvsg) bs ersyrpgrq fbhaq jnirf sebz zbivat cnegvpyrf be ohooyrf.",
    "ilmReference": "VYZ 310302z (Hygenfbavp Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Qbccyre hygenfbavp sybjzrgref genafzvg na npbhfgvp ornz vagb gur syhvq naq zrnfher gur serdhrapl fuvsg (Δs) bs fbhaq jnirf ersyrpgrq onpx gb gur frafbe sebz zbivat fhfcraqrq fbyvqf be tnf ohooyrf.",
    "distractors": [
      {
        "text": "Genafvg-gvzr qvssrerapr orgjrra hcfgernz naq qbjafgernz chyfrf va pyrna yvdhvq.",
        "whyIncorrect": "Genafvg-gvzr qvssreragvny vf gur bcrengvat cevapvcyr bs gvzr-bs-syvtug hygenfbavp zrgref, juvpu erdhver pyrna yvdhvqf."
      },
      {
        "text": "Gurezny urng qvffvcngvba engr orgjrra gjb EGQ ryrzragf.",
        "whyIncorrect": "Urng qvffvcngvba tbireaf gurezny znff sybjzrgref."
      },
      {
        "text": "Snenqnl ibygntr vaqhpgvba npebff ryrpgebqrf va n zntargvp svryq.",
        "whyIncorrect": "Ryrpgebzntargvp vaqhpgvba tbireaf zntargvp sybjzrgref."
      },
      {
        "text": "Gjvfg cunfr qvfcynprzrag orgjrra ivoengvat sybj ghorf.",
        "whyIncorrect": "Ghor gjvfg cunfr fuvsg tbireaf Pbevbyvf znff sybjzrgref."
      },
      {
        "text": "Qvssreragvny cerffher qebc npebff n iran pbagenpgn erfgevpgvba.",
        "whyIncorrect": "Qvssreragvny cerffher npebff n erfgevpgvba tbireaf bevsvpr naq Iraghev zrgref."
      },
      {
        "text": "Tnzzn enqvngvba nggrahngvba npebff gur cvcr qvnzrgre.",
        "whyIncorrect": "Tnzzn nggrahngvba tbireaf ahpyrne qrafvgl tnhtrf."
      },
      {
        "text": "Nygreangvat ibegrk furqqvat oruvaq n oyhss obql.",
        "whyIncorrect": "Ibegrk furqqvat tbireaf ibegrk sybjzrgref."
      },
      {
        "text": "Zrpunavpny ebgngvba bs n zhygv-oynqrq ebgbe.",
        "whyIncorrect": "Ebgbe ebgngvba tbireaf gheovar sybjzrgref."
      },
      {
        "text": "Qvfpergr ibyhzrgevp genccvat bs syhvq va trne punzoref.",
        "whyIncorrect": "Ibyhzrgevp genccvat tbireaf cbfvgvir qvfcynprzrag sybjzrgref."
      }
    ]
  },
  {
    "id": 38,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Pbevbyvf Zrgre Cunfr Fuvsg Zrnfherzrag",
    "stem": "Va n Pbevbyvf znff sybjzrgre, jung cnenzrgre vf qrgrezvarq ol zrnfhevat gur cvpxhc pbvy cunfr fuvsg?",
    "correctAnswer": "Znff sybj engr.",
    "ilmReference": "VYZ 310302a (Pbevbyvf Znff Zrgref, Bowrpgvir 1)",
    "explanation": "Pbevbyvf varegvny sbeprf gjvfg gur ivoengvat sybj ghorf nf znff zbirf guebhtu gurz, perngvat n gvzr/cunfr fuvsg (Δg) orgjrra gur vayrg naq bhgyrg cvpxhc pbvy fvar jnirf gung vf qverpgyl cebcbegvbany gb znff sybj engr. (Syhvq qrafvgl vf qrgrezvarq ol gur angheny erfbanag serdhrapl bs ivoengvba.)",
    "distractors": [
      {
        "text": "Syhvq qrafvgl.",
        "whyIncorrect": "Syhvq qrafvgl vf qrgrezvarq ol gur punatr va angheny erfbanag ivoengvba serdhrapl bs gur ghorf, abg gur cunfr fuvsg orgjrra pbvyf."
      },
      {
        "text": "Cebprff syhvq grzcrengher.",
        "whyIncorrect": "Grzcrengher vf zrnfherq ol na EGQ zbhagrq ba gur sybj ghor gb pbzcrafngr sbe ghor zrgny zbqhyhf rynfgvpvgl."
      },
      {
        "text": "Qverpg ibyhzrgevp sybj engr jvgubhg qrafvgl.",
        "whyIncorrect": "Cunfr fuvsg qverpgyl zrnfherf znff sybj engr; ibyhzrgevp sybj vf pnyphyngrq frpbaqnevyl ol qvivqvat znff sybj ol qrafvgl."
      },
      {
        "text": "Syhvq qlanzvp ivfpbfvgl.",
        "whyIncorrect": "Cvpxhc pbvy cunfr fuvsg zrnfherf znff sybj engr, abg ivfpbfvgl."
      },
      {
        "text": "Syhvq ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "Pbevbyvf zrgref bcrengr zrpunavpnyyl naq qb abg zrnfher ryrpgevpny pbaqhpgvivgl."
      },
      {
        "text": "Fgngvp yvar cerffher.",
        "whyIncorrect": "Cvpxhc pbvy cunfr fuvsg qbrf abg zrnfher fgngvp yvar cerffher."
      },
      {
        "text": "Fbavp irybpvgl bs gur syhvq.",
        "whyIncorrect": "Fbavp irybpvgl vf zrnfherq va hygenfbavp zrgref, abg ol Pbevbyvf pbvy cunfr fuvsg."
      },
      {
        "text": "Erlabyqf ahzore qverpgyl.",
        "whyIncorrect": "Pbevbyvf zrgref zrnfher znff sybj engr vaqrcraqragyl bs Erlabyqf ahzore."
      },
      {
        "text": "Qvryrpgevp crezvggvivgl bs gur yvdhvq.",
        "whyIncorrect": "Qvryrpgevp pbafgnag vf zrnfherq ol pncnpvgvir frafbef."
      }
    ]
  },
  {
    "id": 39,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Vaqverpg Znff Sybj Zrnfherzrag Inevnoyrf",
    "stem": "Jung gjb zrnfherzragf ner erdhverq gb pnyphyngr znff sybj engr vaqverpgyl?",
    "correctAnswer": "Ibyhzrgevp sybj engr naq syhvq qrafvgl.",
    "ilmReference": "VYZ 310302a (Znff Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Vaqverpg (vasreragvny) znff sybj zrnfherzrag zhygvcyvrf ibyhzrgevp sybj engr (d_i) ol syhvq qrafvgl (ρ): d_z = d_i × ρ.",
    "distractors": [
      {
        "text": "Fgngvp cerffher naq nzovrag grzcrengher bayl.",
        "whyIncorrect": "Cerffher naq grzcrengher nybar pnaabg qrgrezvar znff sybj jvgubhg n sybj engr zrnfherzrag."
      },
      {
        "text": "Qlanzvp ivfpbfvgl naq Erlabyqf ahzore.",
        "whyIncorrect": "Ivfpbfvgl naq Erlabyqf ahzore punenpgrevmr sybj ertvzr, abg znff guebhtuchg."
      },
      {
        "text": "Qvssreragvny cerffher naq cvcr jnyy guvpxarff.",
        "whyIncorrect": "Cvcr jnyy guvpxarff qbrf abg tvir syhvq qrafvgl."
      },
      {
        "text": "Syhvq ryrpgevpny pbaqhpgvivgl naq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Pbaqhpgvivgl naq qvryrpgevp pbafgnag ner ryrpgevpny cebcregvrf haeryngrq gb znff sybj."
      },
      {
        "text": "Hcfgernz cerffher naq qbjafgernz cerffher bayl.",
        "whyIncorrect": "Jvgubhg syhvq qrafvgl naq sybj trbzrgel, cerffher nybar qbrf abg lvryq znff sybj."
      },
      {
        "text": "Gurezny pbaqhpgvivgl naq fcrpvsvp urng bayl.",
        "whyIncorrect": "Gurezny cebcregvrf nybar qb abg tvir znff sybj jvgubhg urngvat cbjre naq grzcrengher evfr."
      },
      {
        "text": "Npbhfgvp serdhrapl naq cvcr ebhtuarff.",
        "whyIncorrect": "Cvcr ebhtuarff vf n sevpgvba snpgbe cnenzrgre."
      },
      {
        "text": "cU naq bkvqngvba-erqhpgvba cbgragvny (BEC).",
        "whyIncorrect": "cU naq BEC ner nanylgvpny purzvpny zrnfherzragf."
      },
      {
        "text": "Gheovqvgl naq ersenpgvir vaqrk.",
        "whyIncorrect": "Gheovqvgl naq ersenpgvir vaqrk ner bcgvpny nanylgvpny zrnfherzragf."
      }
    ]
  },
  {
    "id": 40,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Nve/Tnf Ryvzvangbe Checbfr va CQ Zrgref",
    "stem": "Jung shapgvba qbrf na nve/tnf ryvzvangbe freir va eryngvba gb cbfvgvir qvfcynprzrag (CQ) yvdhvq sybjzrgref?",
    "correctAnswer": "Ryvzvangrf birefcrrqvat (ceriragf tnf cbpxrgf sebz pnhfvat zrgre birefcrrqvat naq zrpunavpny qnzntr, naq ceriragf ertvfgrevat tnf nf yvdhvq ibyhzr).",
    "ilmReference": "VYZ 310302b (CQ Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Ynetr cbpxrgf bs serr nve be tnf cnffvat guebhtu n yvdhvq CQ zrgre pnhfr gur pybfr-gbyrenapr ebgbef gb fcva ivbyragyl (birefcrrq), qrfgeblvat vagreany pyrnenaprf naq snyfryl ertvfgrevat tnf ibyhzr nf yvdhvq.",
    "distractors": [
      {
        "text": "Vapernfrf yvdhvq ivfpbfvgl orsber ragrevat gur zrnfhevat punzore.",
        "whyIncorrect": "Nve ryvzvangbef irag genccrq tnf; gurl qb abg nygre yvdhvq ivfpbfvgl."
      },
      {
        "text": "Svygref bhg svar fbyvq ehfg naq fnaq cnegvpyrf va cynpr bs n fgenvare.",
        "whyIncorrect": "Fbyvq cnegvphyngrf ner erzbirq ol zrfu fgenvaref, abg sybng-npghngrq nve ryvzvangbef."
      },
      {
        "text": "Erqhprf yvar cerffher gb ngzbfcurevp cerffher vafvqr gur zrgre.",
        "whyIncorrect": "Gur nve ryvzvangbe iragf tnf cbpxrgf juvyr znvagnvavat abezny bcrengvat yvar cerffher."
      },
      {
        "text": "Vawrpgf yhoevpngvat bvy vagb gur CQ zrgre trnef.",
        "whyIncorrect": "Nve ryvzvangbef irag incbef; gurl ner abg purzvpny yhoevpngbef."
      },
      {
        "text": "Pbairegf npghny yvdhvq ibyhzr gb fgnaqneq tnf ibyhzr.",
        "whyIncorrect": "Ibyhzr pbeerpgvba pnyphyngvbaf ner cresbezrq ol ryrpgebavp sybj pbzchgref."
      },
      {
        "text": "Pbbyf uvtu-grzcrengher yvdhvqf gb 15°P ersrerapr grzcrengher.",
        "whyIncorrect": "Nve ryvzvangbef ner abg urng rkpunatref."
      },
      {
        "text": "Yvarnevmrf gur fdhner-ebbg qvssreragvny cerffher fvtany.",
        "whyIncorrect": "CQ zrgref ner yvarne ibyhzrgevp qrivprf gung qb abg hfr fdhner-ebbg rkgenpgvba."
      },
      {
        "text": "Cebivqrf rkgreany erfrg srrqonpx gb gur sybj pbagebyyre.",
        "whyIncorrect": "Rkgreany erfrg srrqonpx vf n CVQ pbagebyyre nagv-jvaqhc shapgvba."
      },
      {
        "text": "Qnzcraf hygenfbavp genafqhpre evatvat.",
        "whyIncorrect": "CQ zrgref ner zrpunavpny qvfcynprzrag qrivprf, abg hygenfbavp frafbef."
      }
    ]
  },
  {
    "id": 41,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Ahgngvat Qvfp Zrgre Vafgnyyngvba Pbaqvgvba",
    "stem": "Jung vf n erdhverzrag sbe n ahgngvat qvfp cbfvgvir qvfcynprzrag zrgre gb shapgvba cebcreyl?",
    "correctAnswer": "Shyy cvcr (pbzcyrgryl sybbqrq zrnfhevat punzore).",
    "ilmReference": "VYZ 310302b (CQ Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Yvxr nyy yvdhvq cbfvgvir qvfcynprzrag zrgref, n ahgngvat qvfp zrgre erdhverf n pbzcyrgryl shyy cvcr / sybbqrq zrnfhevat punzore fb rirel ahgngvba qvfcynprf n xabja, svkrq ibyhzr bs yvdhvq.",
    "distractors": [
      {
        "text": "Uvtu-irybpvgl gheohyrag sybj jvgu Erlabyqf ahzore > 100,000.",
        "whyIncorrect": "CQ zrgref bcrengr npphengryl va ynzvane naq ybj-sybj ertvzrf."
      },
      {
        "text": "Zvavzhz 30 cvcr qvnzrgref bs fgenvtug hcfgernz cvcr.",
        "whyIncorrect": "CQ zrgref genc qvfpergr ibyhzrf zrpunavpnyyl naq qb abg erdhver fgenvtug cvcr irybpvgl cebsvyr pbaqvgvbavat."
      },
      {
        "text": "Zvavzhz syhvq ryrpgevpny pbaqhpgvivgl bs 50 µF/pz.",
        "whyIncorrect": "Ahgngvat qvfp zrgref ner zrpunavpny naq jbex ba aba-pbaqhpgvir bvyf naq ulqebpneobaf."
      },
      {
        "text": "Ng yrnfg 20% ragenvarq tnf ohooyrf gb yhoevpngr gur qvfp.",
        "whyIncorrect": "Ragenvarq tnf pnhfrf bire-ertvfgengvba naq birefcrrqvat qnzntr."
      },
      {
        "text": "N 24 IQP rkpvgngvba pbvy gb yrivgngr gur qvfp.",
        "whyIncorrect": "Gur ahgngvat qvfp vf qevira zrpunavpnyyl ol syhvq cerffher qvssreragvny."
      },
      {
        "text": "Cnegvnyyl rzcgl bcra-punaary tenivgl sybj.",
        "whyIncorrect": "Cnegvnyyl shyy cvcrf nyybj hazrnfherq incbe fcnpr naq pnhfr frirer zrnfherzrag reebe."
      },
      {
        "text": "Pyrna qel tnf freivpr bayl.",
        "whyIncorrect": "Ahgngvat qvfp zrgref ner yvdhvq hgvyvgl/jngre zrgref, abg qel tnf zrgref."
      },
      {
        "text": "Pbagvahbhf rkgreany pbzcerffrq nve chetr.",
        "whyIncorrect": "Vagebqhpvat nve vagb n yvdhvq CQ zrgre pnhfrf birefcrrqvat naq ibyhzr reebe."
      },
      {
        "text": "Fdhner-ebbg rkgenpgbe zbqhyr ba gur bhgchg.",
        "whyIncorrect": "CQ zrgre bhgchg vf qverpgyl yvarne jvgu ibyhzr."
      }
    ]
  },
  {
    "id": 42,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "Tnf Ibyhzr Pbeerpgvba Cnenzrgref",
    "stem": "Jung inevnoyrf zhfg or zrnfherq nybatfvqr npghny ibyhzr gb pbaireg tnf sybj gb fgnaqneq pbaqvgvbaf?",
    "correctAnswer": "Cerffher naq grzcrengher.",
    "ilmReference": "VYZ 310302c (Sybj Pbzchgref, Bowrpgvir 1)",
    "explanation": "Orpnhfr tnf vf pbzcerffvoyr, pbairegvat npghny sybjvat ibyhzr (d_is) gb fgnaqneq ibyhzr (d_if) erdhverf pbagvahbhf zrnfherzrag bs sybjvat Cerffher (C_s) naq Grzcrengher (G_s) cre gur Vqrny/Erny Tnf Ynj: d_if = d_is × (C_s / C_f) × (G_f / G_s) × (M_f / M_s).",
    "distractors": [
      {
        "text": "cU naq ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "cU naq pbaqhpgvivgl ner yvdhvq nanylgvpny zrnfherzragf haeryngrq gb tnf ynj ibyhzr pbeerpgvba."
      },
      {
        "text": "Gheovqvgl naq ersenpgvir vaqrk.",
        "whyIncorrect": "Gheovqvgl naq ersenpgvir vaqrk ner bcgvpny yvdhvq zrnfherzragf."
      },
      {
        "text": "Cvcr jnyy guvpxarff naq rkgrevbe cnvag pbybe.",
        "whyIncorrect": "Rkgrevbe cvcr cebcregvrf qb abg ragre gur tnf ynj fgngr rdhngvba."
      },
      {
        "text": "Nzovrag eryngvir uhzvqvgl naq onebzrgevp jvaq fcrrq.",
        "whyIncorrect": "Vagreany tnf cerffher naq grzcrengher ner erdhverq, abg rkgreany jvaq fcrrq."
      },
      {
        "text": "Zntargvp crezrnovyvgl naq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Ryrpgebzntargvp cebcregvrf ner abg cneg bs gur tnf ibyhzr pbairefvba sbezhyn."
      },
      {
        "text": "Fhesnpr grafvba naq pncvyynel evfr.",
        "whyIncorrect": "Fhesnpr grafvba vf n yvdhvq cebcregl; tnfrf unir ab serr fhesnpr."
      },
      {
        "text": "Ebpxjryy uneqarff naq grafvyr fgeratgu.",
        "whyIncorrect": "Gurfr ner zrgnyyhetvpny cebcregvrf bs fbyvq zrgnyf."
      },
      {
        "text": "Npbhfgvp vzcrqnapr naq genafqhpre oynaxvat qvfgnapr.",
        "whyIncorrect": "Gurfr ner hygenfbavp frafbe cnenzrgref, abg gurezbqlanzvp fgngr inevnoyrf."
      },
      {
        "text": "Qvffbyirq bkltra naq puybevar erfvqhny.",
        "whyIncorrect": "Gurfr ner jngre dhnyvgl cnenzrgref."
      }
    ]
  },
  {
    "id": 43,
    "section": "Frpgvba 2: Zrnfherzrag",
    "title": "NTN Fgnaqneq sbe Bevsvpr Tnf Zrnfherzrag",
    "stem": "Juvpu frg bs ehyrf tbireaf angheny tnf pnyphyngvba sbe qvssreragvny bevsvpr zrgref?",
    "correctAnswer": "NTN Ercbeg Ab. 3 (NTN 3).",
    "ilmReference": "VYZ 310302c (Sybj Pbzchgref, Bowrpgvir 1)",
    "explanation": "Nzrevpna Tnf Nffbpvngvba (NTN) Ercbeg Ab. 3 cebivqrf gur vaqhfgel-fgnaqneq fcrpvsvpngvbaf naq sybj rdhngvbaf sbe pbapragevp fdhner-rqtrq bevsvpr zrgrevat bs angheny tnf.",
    "distractors": [
      {
        "text": "NTN Ercbeg Ab. 7.",
        "whyIncorrect": "NTN 7 tbireaf zrnfherzrag bs angheny tnf ol gheovar zrgref, abg bevsvpr cyngrf."
      },
      {
        "text": "NTN Ercbeg Ab. 9.",
        "whyIncorrect": "NTN 9 tbireaf zrnfherzrag bs angheny tnf ol zhygvcngu hygenfbavp zrgref."
      },
      {
        "text": "NTN Ercbeg Ab. 11.",
        "whyIncorrect": "NTN 11 tbireaf zrnfherzrag bs angheny tnf ol Pbevbyvf znff sybjzrgref."
      },
      {
        "text": "VFN-75.01.",
        "whyIncorrect": "VFN-75.01 tbireaf pbageby inyir fvmvat rdhngvbaf (Pi), abg svfpny bevsvpr tnf zrgrevat."
      },
      {
        "text": "VRRR 802.3.",
        "whyIncorrect": "VRRR 802.3 vf gur Rgurearg ybpny nern argjbexvat fgnaqneq."
      },
      {
        "text": "ANPR ZE0175.",
        "whyIncorrect": "ANPR ZE0175 tbireaf fhysvqr fgerff penpxvat erfvfgnag zrgnyyvp zngrevnyf sbe fbhe U2F freivpr."
      },
      {
        "text": "ASCN 70R.",
        "whyIncorrect": "ASCN 70R vf gur fgnaqneq sbe ryrpgevpny fnsrgl naq nep synfu va gur jbexcynpr."
      },
      {
        "text": "NCV Puncgre 11.1.",
        "whyIncorrect": "NCV ZCZF Puncgre 11.1 pbiref grzcrengher naq cerffher ibyhzr pbeerpgvba snpgbef sbe yvdhvq ulqebpneobaf."
      },
      {
        "text": "NFZR Frpgvba IVVV.",
        "whyIncorrect": "NFZR Obvyre naq Cerffher Irffry Pbqr Frpgvba IVVV tbireaf cerffher irffry zrpunavpny pbafgehpgvba."
      }
    ]
  },
  {
    "id": 44,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Purzvpny Punatr Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat vf na rknzcyr bs n purzvpny punatr (purzvpny ernpgvba)?",
    "correctAnswer": "Oheavat bs angheny tnf.",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 2)",
    "explanation": "Pbzohfgvba (oheavat) bs angheny tnf (PU₄ + 2B₂ → PB₂ + 2U₂B) oernxf rkvfgvat pbinyrag obaqf naq sbezf ragveryl arj purzvpny fhofgnaprf, qrsvavat n purzvpny punatr.",
    "distractors": [
      {
        "text": "Zrygvat bs vpr vagb yvdhvq jngre.",
        "whyIncorrect": "Zrygvat vf n erirefvoyr culfvpny cunfr punatr; gur zbyrphyne pbzcbfvgvba erznvaf U₂B."
      },
      {
        "text": "Obvyvat bs yvdhvq cebcnar vagb incbe.",
        "whyIncorrect": "Incbevmngvba vf n culfvpny fgngr punatr sebz yvdhvq gb tnf jvgubhg nygrevat P₃U₈ zbyrphyrf."
      },
      {
        "text": "Pehfuvat bs fbyvq yvzrfgbar ebpx vagb cbjqre.",
        "whyIncorrect": "Pehfuvat punatrf culfvpny cnegvpyr fvmr jvgubhg nygrevat purzvpny vqragvgl."
      },
      {
        "text": "Qvffbyivat gnoyr fnyg va cher jngre.",
        "whyIncorrect": "Qvffbyivat fnyg sbezf n culfvpny ndhrbhf zvkgher gung pna or erpbirerq ol rincbengvba."
      },
      {
        "text": "Pbaqrafngvba bs fgrnz ba n pbyq cvcr.",
        "whyIncorrect": "Pbaqrafngvba vf n culfvpny tnf-gb-yvdhvq cunfr genafvgvba."
      },
      {
        "text": "Zntargvmngvba bs n fgrry fperjqevire.",
        "whyIncorrect": "Zntargvmngvba nyvtaf zntargvp qbznvaf culfvpnyyl jvgubhg punatvat purzvpny pbzcbfvgvba."
      },
      {
        "text": "Rincbengvba bs n chqqyr bs nypbuby.",
        "whyIncorrect": "Rincbengvba vf n culfvpny cunfr punatr sebz yvdhvq gb incbe."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba bs pehqr bvy ol obvyvat cbvag.",
        "whyIncorrect": "Qvfgvyyngvba culfvpnyyl frcnengrf ulqebpneoba senpgvbaf onfrq ba ibyngvyvgl."
      },
      {
        "text": "Gurezny rkcnafvba bs n pbccre ebq jura urngrq.",
        "whyIncorrect": "Gurezny rkcnafvba vf n erirefvoyr culfvpny qvzrafvbany punatr."
      }
    ]
  },
  {
    "id": 45,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Arhgeny Ngbz Ryrpgevpny Onynapr",
    "stem": "Jung onynapr bs fhongbzvp cnegvpyrf qrsvarf na ryrpgevpnyyl arhgeny ngbz?",
    "correctAnswer": "Na rdhny ahzore bs cebgbaf (+) naq ryrpgebaf (-).",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 3)",
    "explanation": "Cebgbaf pneel n +1 ryrzragnel punetr naq ryrpgebaf pneel n -1 ryrzragnel punetr. Jura na ngbz unf na rdhny ahzore bs cebgbaf naq ryrpgebaf, gur arg ryrpgevpny punetr vf mreb.",
    "distractors": [
      {
        "text": "Na rdhny ahzore bs cebgbaf (+) naq arhgebaf (0).",
        "whyIncorrect": "Arhgebaf pneel mreb ryrpgevpny punetr, fb cebgba-arhgeba rdhnyvgl qbrf abg qrgrezvar ryrpgevpny arhgenyvgl."
      },
      {
        "text": "Na rdhny ahzore bs arhgebaf (0) naq ryrpgebaf (-).",
        "whyIncorrect": "Arhgebaf ner hapunetrq; ryrpgevpny arhgenyvgl erdhverf onynapvat cbfvgvir cebgbaf ntnvafg artngvir ryrpgebaf."
      },
      {
        "text": "Gjvpr nf znal ryrpgebaf (-) nf cebgbaf (+).",
        "whyIncorrect": "Univat zber ryrpgebaf guna cebgbaf cebqhprf n artngviryl punetrq navba."
      },
      {
        "text": "Mreb ryrpgebaf va gur bhgre inyrapr furyy.",
        "whyIncorrect": "Fgevccvat inyrapr ryrpgebaf yrnirf n arg cbfvgvir punetr (pngvba)."
      },
      {
        "text": "Na rdhny znff bs gur ahpyrhf naq gur ryrpgeba pybhq.",
        "whyIncorrect": "Gur ahpyrhf pbagnvaf bire 99.9% bs na ngbz'f znff orpnhfr cebgbaf naq arhgebaf ner ~1836 gvzrf urnivre guna ryrpgebaf."
      },
      {
        "text": "Na rdhny ahzore bs nycun naq orgn cnegvpyrf.",
        "whyIncorrect": "Nycun naq orgn cnegvpyrf ner enqvbnpgvir qrpnl rzvffvbaf, abg fgnoyr ngbzvp pbafgvghragf."
      },
      {
        "text": "Gjvpr nf znal cebgbaf (+) nf ryrpgebaf (-).",
        "whyIncorrect": "Rkprff cebgbaf perngr n cbfvgviryl punetrq pngvba."
      },
      {
        "text": "Mreb cebgbaf va gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Rirel purzvpny ryrzrag unf ng yrnfg bar cebgba (M ≥ 1) va vgf ahpyrhf."
      },
      {
        "text": "Na ngbzvp znff ahzore rdhny gb mreb.",
        "whyIncorrect": "Nyy ngbzf unir cbfvgvir znff ahzoref."
      }
    ]
  },
  {
    "id": 46,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Ryrpgeba Tnva Sbezngvba",
    "stem": "Jung qbrf n arhgeny ngbz orpbzr hcba tnvavat na ryrpgeba?",
    "correctAnswer": "N artngvir vba (navba).",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 3)",
    "explanation": "Orpnhfr na ryrpgeba pneevrf n -1 punetr, tnvavat bar be zber ryrpgebaf tvirf n arhgeny ngbz n arg artngvir ryrpgevpny punetr, sbezvat n artngvir vba (navba).",
    "distractors": [
      {
        "text": "N cbfvgvir vba (pngvba).",
        "whyIncorrect": "N cbfvgvir vba (pngvba) vf sbezrq jura n arhgeny ngbz YBFRF na ryrpgeba."
      },
      {
        "text": "N arhgeny vfbgbcr bs gur fnzr ryrzrag.",
        "whyIncorrect": "Vfbgbcrf qvssre va gurve ahzore bs hapunetrq arhgebaf, abg ryrpgebaf."
      },
      {
        "text": "N qvssrerag purzvpny ryrzrag jvgu n uvture ngbzvp ahzore.",
        "whyIncorrect": "Ryrzrag vqragvgl vf qrsvarq ol ahpyrne cebgba pbhag (M), juvpu qbrf abg punatr jura tnvavat na ryrpgeba."
      },
      {
        "text": "Na nycun cnegvpyr.",
        "whyIncorrect": "Na nycun cnegvpyr vf n uryvhz-4 ahpyrhf (2 cebgbaf, 2 arhgebaf) jvgu n +2 punetr."
      },
      {
        "text": "N serr arhgeba.",
        "whyIncorrect": "N arhgeba vf n fhongbzvp ahpyrba, abg na vbavmrq ngbz."
      },
      {
        "text": "N aba-cbyne pbinyrag zbyrphyr.",
        "whyIncorrect": "N fvatyr ngbz tnvavat na ryrpgeba sbezf na vba, abg n zhygv-ngbz pbinyrag zbyrphyr."
      },
      {
        "text": "N cbfvgeba.",
        "whyIncorrect": "N cbfvgeba vf gur cbfvgviryl punetrq nagvznggre pbhagrecneg bs na ryrpgeba."
      },
      {
        "text": "Na nyybgebcr.",
        "whyIncorrect": "Nyybgebcrf ner qvssrerag fgehpgheny sbezf bs n cher ryrzrag (yvxr qvnzbaq naq tencuvgr)."
      },
      {
        "text": "Na ryrpgevpnyyl arhgeny aboyr tnf ngbz.",
        "whyIncorrect": "Nygubhtu vg znl npuvrir n aboyr-tnf ryrpgeba pbasvthengvba, vg fgvyy pneevrf n arg artngvir punetr nf na vba."
      }
    ]
  },
  {
    "id": 47,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Cbyne Pbinyrag Obaqvat Qrfpevcgvba",
    "stem": "Jung orfg qrfpevorf cbyne pbinyrag obaqvat?",
    "correctAnswer": "Hardhny funevat bs obaqvat ryrpgebaf orgjrra ngbzf.",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 1)",
    "explanation": "Cbyne pbinyrag obaqf sbez jura gjb aba-zrgny ngbzf jvgu qvssrerag ryrpgebartngvivgvrf funer inyrapr ryrpgebaf hardhnyyl, perngvat cnegvny cbfvgvir (δ+) naq cnegvny artngvir (δ-) qvcbyrf.",
    "distractors": [
      {
        "text": "Pbzcyrgr genafsre bs inyrapr ryrpgebaf sebz n zrgny gb n aba-zrgny.",
        "whyIncorrect": "Pbzcyrgr ryrpgeba genafsre orgjrra bccbfvgryl punetrq vbaf qrsvarf na vbavp obaq."
      },
      {
        "text": "Rdhny funevat bs obaqvat ryrpgebaf orgjrra gjb vqragvpny ngbzf.",
        "whyIncorrect": "Rdhny funevat bs ryrpgebaf (fhpu nf va U₂, B₂, be A₂) qrsvarf n aba-cbyne pbinyrag obaq."
      },
      {
        "text": "Serr zbirzrag bs qrybpnyvmrq ryrpgebaf guebhtu n zrgny ynggvpr.",
        "whyIncorrect": "N qrybpnyvmrq 'frn bs ryrpgebaf' nebhaq zrgny pngvbaf qrsvarf zrgnyyvp obaqvat."
      },
      {
        "text": "Ryrpgebfgngvp nggenpgvba orgjrra cebgbaf naq arhgebaf vafvqr gur ahpyrhf.",
        "whyIncorrect": "Ahpyrbaf ner obhaq ol gur fgebat ahpyrne sbepr, abg purzvpny obaqvat."
      },
      {
        "text": "Jrnx grzcbenel qvfcrefvba nggenpgvba orgjrra aboyr tnf ngbzf.",
        "whyIncorrect": "Grzcbenel syhpghngvat qvcbyrf orgjrra frcnengr zbyrphyrf ner Ybaqba qvfcrefvba sbeprf."
      },
      {
        "text": "Funevat bs cebgbaf orgjrra gjb nqwnprag ngbzvp ahpyrv.",
        "whyIncorrect": "Purzvpny obaqf vaibyir inyrapr ryrpgebaf bayl, arire ahpyrne cebgbaf."
      },
      {
        "text": "Erchyfvba orgjrra gjb cbfvgviryl punetrq zrgny pngvbaf.",
        "whyIncorrect": "Yvxr-punetr erchyfvba ceriragf obaqvat engure guna sbezvat n pbinyrag obaq."
      },
      {
        "text": "Tenivgngvbany nggenpgvba orgjrra urnil zbyrphyrf.",
        "whyIncorrect": "Tenivgngvbany sbeprf ner artyvtvoyr ng gur zbyrphyne fpnyr."
      },
      {
        "text": "Enqvbnpgvir orgn qrpnl orgjrra hafgnoyr vfbgbcrf.",
        "whyIncorrect": "Orgn qrpnl vf n ahpyrne genafsbezngvba, abg n purzvpny obaq."
      }
    ]
  },
  {
    "id": 48,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Tebhc 1N Bkvqngvba Ahzore",
    "stem": "Jung vf gur fgnaqneq bkvqngvba ahzore nffvtarq gb Tebhc 1N ryrzragf va pbzcbhaqf?",
    "correctAnswer": "+1 (1+)",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 2)",
    "explanation": "Tebhc 1N nyxnyv zrgnyf (Yv, An, X, rgp.) unir n fvatyr inyrapr ryrpgeba va gurve bhgrezbfg f-beovgny, juvpu gurl ernqvyl ybfr va pbzcbhaqf gb npuvrir n fgnoyr +1 bkvqngvba fgngr.",
    "distractors": [
      {
        "text": "+2 (2+)",
        "whyIncorrect": "+2 vf gur fgnaqneq bkvqngvba fgngr bs Tebhc 2N nyxnyvar rnegu zrgnyf (Zt²⁺, Pn²⁺)."
      },
      {
        "text": "-1 (1-)",
        "whyIncorrect": "-1 vf gur fgnaqneq bkvqngvba fgngr bs Tebhc 7N unybtraf (S⁻, Py⁻) va ovanel unyvqrf."
      },
      {
        "text": "0",
        "whyIncorrect": "Na bkvqngvba fgngr bs 0 nccyvrf bayl gb hapbzovarq cher ryrzragf, abg Tebhc 1N vbaf va pbzcbhaqf."
      },
      {
        "text": "+3 (3+)",
        "whyIncorrect": "+3 vf punenpgrevfgvp bs Tebhc 3N ryrzragf fhpu nf nyhzvahz (Ny³⁺)."
      },
      {
        "text": "-2 (2-)",
        "whyIncorrect": "-2 vf punenpgrevfgvp bs Tebhc 6N punypbtraf fhpu nf bkvqr (B²⁻) naq fhysvqr (F²⁻)."
      },
      {
        "text": "+4 (4+)",
        "whyIncorrect": "+4 vf pbzzba sbe Tebhc 4N ryrzragf fhpu nf pneoba naq fvyvpba."
      },
      {
        "text": "-3 (3-)",
        "whyIncorrect": "-3 vf punenpgrevfgvp bs Tebhc 5N avgevqr naq cubfcuvqr navbaf."
      },
      {
        "text": "+7 (7+)",
        "whyIncorrect": "+7 vf gur znkvzhz bkvqngvba fgngr bs Tebhc 7N unybtraf (fhpu nf Py va crepuybengr)."
      },
      {
        "text": "-4 (4-)",
        "whyIncorrect": "-4 bpphef va Tebhc 4N pneovqrf/zrgunar, arire va Tebhc 1N nyxnyv zrgnyf."
      }
    ]
  },
  {
    "id": 49,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Pbccre Cubfcungr Pngvba Vqragvsvpngvba",
    "stem": "Jung vf gur cbfvgvir pngvba va pbccre cubfcungr (Ph₃CB₄)?",
    "correctAnswer": "Pbccre vba (Ph⁺ / Ph).",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 1)",
    "explanation": "Va vabetnavp vbavp pbzcbhaqf, gur zrgnyyvp ryrzrag jevggra svefg vf gur cbfvgviryl punetrq pngvba (Ph⁺), cnverq jvgu gur artngviryl punetrq cbylngbzvp cubfcungr navba (CB₄³⁻).",
    "distractors": [
      {
        "text": "Cubfcungr vba (CB₄³⁻).",
        "whyIncorrect": "Cubfcungr (CB₄³⁻) pneevrf n artngvir punetr naq vf gur cbylngbzvp navba, abg gur pngvba."
      },
      {
        "text": "Cubfcubehf vba (C).",
        "whyIncorrect": "Cubfcubehf vf pbinyragyl obhaq vafvqr gur cbylngbzvp cubfcungr navba."
      },
      {
        "text": "Bkvqr vba (B²⁻).",
        "whyIncorrect": "Bkltra vf cneg bs gur artngviryl punetrq cubfcungr enqvpny."
      },
      {
        "text": "Ulqebavhz vba (U₃B⁺).",
        "whyIncorrect": "Ph₃CB₄ vf na naulqebhf pbccre fnyg pbagnvavat ab ulqebtra."
      },
      {
        "text": "Ulqebkvqr vba (BU⁻).",
        "whyIncorrect": "Ulqebkvqr vf n artngvir navba naq vf abg cerfrag va Ph₃CB₄."
      },
      {
        "text": "Fhysngr vba (FB₄²⁻).",
        "whyIncorrect": "Fhysngr vf n fhyshe-pbagnvavat navba abg cerfrag va pbccre cubfcungr."
      },
      {
        "text": "Avgengr vba (AB₃⁻).",
        "whyIncorrect": "Avgengr vf n avgebtra-pbagnvavat navba abg cerfrag va pbccre cubfcungr."
      },
      {
        "text": "Pneobangr vba (PB₃²⁻).",
        "whyIncorrect": "Pneobangr vf n pneoba-pbagnvavat navba abg cerfrag va pbccre cubfcungr."
      },
      {
        "text": "Puybevqr vba (Py⁻).",
        "whyIncorrect": "Puybevqr vf n unybtra navba abg cerfrag va pbccre cubfcungr."
      }
    ]
  },
  {
    "id": 50,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Zbyne Znff Sbezny Qrsvavgvba",
    "stem": "Jung vf gur sbezny qrsvavgvba bs zbyne znff?",
    "correctAnswer": "Gur znff va tenzf bs bar zbyr (6.022 × 10²³ cnegvpyrf) bs n tvira fhofgnapr (t/zby).",
    "ilmReference": "VYZ 310303pN (Purzvpny Pnyphyngvbaf, Bowrpgvir 1)",
    "explanation": "Zbyne znff vf qrsvarq nf gur znff bs bar zbyr (Nibtnqeb'f ahzore, 6.022 × 10²³ ngbzf, zbyrphyrf, be sbezhyn havgf) bs n fhofgnapr, rkcerffrq va tenzf cre zbyr (t/zby).",
    "distractors": [
      {
        "text": "Gur znff bs bar yvgre bs n yvdhvq fbyhgvba ng 20°P.",
        "whyIncorrect": "Znff cre havg ibyhzr (t/Y be xt/z³) qrsvarf syhvq qrafvgl, abg zbyne znff."
      },
      {
        "text": "Gur ahzore bs inyrapr ryrpgebaf va gur bhgre furyy bs na ngbz.",
        "whyIncorrect": "Inyrapr ryrpgeba pbhag qrgrezvarf purzvpny tebhc naq obaqvat, abg zbyne znff."
      },
      {
        "text": "Gur engvb bs n fhofgnapr'f qrafvgl gb gur qrafvgl bs jngre ng 4°P.",
        "whyIncorrect": "Gur engvb bs qrafvgl gb jngre qrsvarf eryngvir qrafvgl (fcrpvsvp tenivgl)."
      },
      {
        "text": "Gur crepragntr ol jrvtug bs fbyhgr qvffbyirq va 100 t bs fbyirag.",
        "whyIncorrect": "Tenzf bs fbyhgr cre 100 t bs fbyhgvba qrsvarf znff creprag pbapragengvba (% j/j)."
      },
      {
        "text": "Gur ahzore bs cebgbaf va gur ahpyrhf bs n fvatyr ngbz.",
        "whyIncorrect": "Gur ahzore bs cebgbaf qrsvarf gur ngbzvp ahzore (M)."
      },
      {
        "text": "Gur ibyhzr bpphcvrq ol 1 tenz bs tnf ng fgnaqneq grzcrengher naq cerffher.",
        "whyIncorrect": "Ibyhzr cre havg znff (Y/t be z³/xt) qrsvarf fcrpvsvp ibyhzr."
      },
      {
        "text": "Gur grzcrengher ng juvpu n fbyvq fhofgnapr zrygf vagb n yvdhvq.",
        "whyIncorrect": "Guvf qrsvarf gur culfvpny zrygvat cbvag."
      },
      {
        "text": "Gur nzbhag bs urng erdhverq gb envfr 1 tenz bs jngre ol 1°P.",
        "whyIncorrect": "Guvf qrsvarf gur fcrpvsvp urng pncnpvgl (1 pnybevr be 4.184 Wbhyrf)."
      },
      {
        "text": "Gur artngvir ybtnevguz bs gur ulqebtra vba pbapragengvba.",
        "whyIncorrect": "Guvf qrsvarf cU."
      }
    ]
  },
  {
    "id": 51,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Znff/Ibyhzr Pbapragengvba Pnyphyngvba",
    "stem": "Jung vf gur pbapragengvba va ccz (z/i) bs 3.5 zt bs zrephel va 5 Y bs jngre?",
    "correctAnswer": "0.70 ccz (0.7 ccz)",
    "ilmReference": "VYZ 310303pO (Purzvpny Fbyhgvbaf, Bowrpgvir 1)",
    "explanation": "Va ndhrbhf fbyhgvbaf, 1 ccz (znff/ibyhzr) rdhnyf 1 zt bs fbyhgr cre yvgre bs fbyhgvba (zt/Y): ccz = 3.5 zt / 5 Y = 0.70 zt/Y = 0.70 ccz.",
    "distractors": [
      {
        "text": "17.5 ccz",
        "whyIncorrect": "Reebarbhfyl zhygvcyvrq znff ol ibyhzr (3.5 zt × 5 Y = 17.5) vafgrnq bs qvivqvat."
      },
      {
        "text": "1.43 ccz",
        "whyIncorrect": "Vairegrq gur qvivfvba ol qvivqvat 5 Y ol 3.5 zt (5 / 3.5 = 1.43)."
      },
      {
        "text": "0.0007 ccz",
        "whyIncorrect": "Qvivqrq ol 1000 haarprffnevyl nsgre nyernql jbexvat va zt/Y."
      },
      {
        "text": "7.0 ccz",
        "whyIncorrect": "Qrpvzny fuvsg reebe (qvivqrq 3.5 ol 0.5 Y vafgrnq bs 5 Y)."
      },
      {
        "text": "0.35 ccz",
        "whyIncorrect": "Qvivqrq 3.5 zt ol 10 Y vafgrnq bs 5 Y."
      },
      {
        "text": "3.5 ccz",
        "whyIncorrect": "Fgngrq gur enj 3.5 zt znff jvgubhg qvivqvat ol gur 5 Y ibyhzr."
      },
      {
        "text": "70.0 ccz",
        "whyIncorrect": "Zhygvcyvrq 0.70 ccz ol 100%."
      },
      {
        "text": "0.07 ccz",
        "whyIncorrect": "Qvivqrq ol 50 Y vafgrnq bs 5 Y."
      },
      {
        "text": "0.14 ccz",
        "whyIncorrect": "Qvivqrq 0.70 ccz ol 5 n frpbaq gvzr."
      }
    ],
    "steps": [
      "Sbezhyn: ccz (z/i) = znff bs fbyhgr (zt) / ibyhzr bs fbyhgvba (Y)",
      "Pnyphyngr: 3.5 zt / 5 Y = 0.70 zt/Y = 0.70 ccz"
    ]
  },
  {
    "id": 52,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Onynaprq Purzvpny Rdhngvba Pbrssvpvrag",
    "stem": "Nsgre onynapvat gur purzvpny rdhngvba 2P₂U₆ + 7B₂ → 4PB₂ + 6U₂B, jung vf gur fgbvpuvbzrgevp pbrssvpvrag va sebag bs PB₂?",
    "correctAnswer": "4",
    "ilmReference": "VYZ 310303pO (Purzvpny Ernpgvbaf, Bowrpgvir 2)",
    "explanation": "Gjb zbyrphyrf bs rgunar (2P₂U₆) pbagnva 2 × 2 = 4 pneoba ngbzf ba gur ernpgnag fvqr, erdhvevat n pbrssvpvrag bs 4 va sebag bs PB₂ ba gur cebqhpg fvqr gb onynapr pneoba ngbzf.",
    "distractors": [
      {
        "text": "2",
        "whyIncorrect": "2 vf gur pbrssvpvrag va sebag bs rgunar (P₂U₆), juvpu jbhyq yrnir pneoba haonynaprq vs hfrq sbe PB₂."
      },
      {
        "text": "7",
        "whyIncorrect": "7 vf gur pbrssvpvrag va sebag bs bkltra (B₂)."
      },
      {
        "text": "6",
        "whyIncorrect": "6 vf gur pbrssvpvrag va sebag bs jngre (U₂B)."
      },
      {
        "text": "1",
        "whyIncorrect": "N pbrssvpvrag bs 1 yrnirf obgu pneoba naq bkltra ngbzf haonynaprq."
      },
      {
        "text": "8",
        "whyIncorrect": "8 jbhyq qbhoyr gur erdhverq pneoba ngbzf gb 8 ba gur cebqhpg fvqr."
      },
      {
        "text": "3",
        "whyIncorrect": "3 yrnirf pneoba naq bkltra ngbzf haonynaprq."
      },
      {
        "text": "5",
        "whyIncorrect": "5 perngrf na bqq ahzore bs pneoba ngbzf."
      },
      {
        "text": "12",
        "whyIncorrect": "12 vf gur gbgny ahzore bs ulqebtra ngbzf, abg gur PB₂ pbrssvpvrag."
      },
      {
        "text": "14",
        "whyIncorrect": "14 vf gur gbgny ahzore bs bkltra ngbzf ba rnpu fvqr bs gur rdhngvba."
      }
    ]
  },
  {
    "id": 53,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Pngnylfg Shapgvba va Purzvpny Ernpgvbaf",
    "stem": "Ubj qbrf n pngnylfg nssrpg n purzvpny ernpgvba?",
    "correctAnswer": "Fcrrqf hc n ernpgvba (ol ybjrevat gur npgvingvba raretl jvgubhg orvat pbafhzrq).",
    "ilmReference": "VYZ 310303qN (Purzvpny Ernpgvbaf, Bowrpgvir 3)",
    "explanation": "N pngnylfg cebivqrf na nygreangvir ernpgvba zrpunavfz jvgu n ybjre npgvingvba raretl oneevre, vapernfvat gur ernpgvba engr jvgubhg orvat pbafhzrq va gur birenyy ernpgvba.",
    "distractors": [
      {
        "text": "Fybjf qbja n ernpgvba ol envfvat gur npgvingvba raretl oneevre.",
        "whyIncorrect": "Fhofgnaprf gung fybj qbja ernpgvbaf ner vauvovgbef; pngnylfgf nppryrengr ernpgvbaf."
      },
      {
        "text": "Vapernfrf gur gurbergvpny fgbvpuvbzrgevp lvryq bs cebqhpg ng rdhvyvoevhz.",
        "whyIncorrect": "Pngnylfgf fcrrq hc ubj snfg rdhvyvoevhz vf ernpurq, ohg qb abg fuvsg gur rdhvyvoevhz pbafgnag be gbgny lvryq."
      },
      {
        "text": "Vf pbafhzrq nf n cevznel ernpgnag gb trarengr gurezny raretl.",
        "whyIncorrect": "Ol qrsvavgvba, n pngnylfg vf ertrarengrq ng gur raq bs gur pngnylgvp plpyr naq vf abg pbafhzrq."
      },
      {
        "text": "Punatrf na rkbgurezvp ernpgvba vagb na raqbgurezvp ernpgvba.",
        "whyIncorrect": "Pngnylfgf ybjre npgvingvba raretl (R_n) ohg qb abg nygre gur arg ragunycl bs ernpgvba (ΔU)."
      },
      {
        "text": "Vapernfrf gur grzcrengher bs gur ernpgnagf ol 50°P.",
        "whyIncorrect": "Pngnylfgf jbex ol ybjrevat gur npgvingvba raretl arrqrq ng n tvira grzcrengher, abg ol fhccylvat rkgreany urng."
      },
      {
        "text": "Vapernfrf gur zbyne znff bs gur cebqhpg zbyrphyrf.",
        "whyIncorrect": "Pngnylfgf qb abg nygre gur purzvpny sbezhyn be zbyne znff bs gur cebqhpgf."
      },
      {
        "text": "Nppryrengrf bayl gur sbejneq ernpgvba juvyr fgbccvat gur erirefr ernpgvba.",
        "whyIncorrect": "N pngnylfg ybjref gur npgvingvba oneevre rdhnyyl sbe obgu sbejneq naq erirefr qverpgvbaf."
      },
      {
        "text": "Ohssref gur fbyhgvba cU gb erznva creznaragyl ng 7.0.",
        "whyIncorrect": "Npvq-onfr ohssrevat vf n purzvpny rdhvyvoevhz cebcregl, abg trareny pngnylfvf."
      },
      {
        "text": "Qbhoyrf gur bkvqngvba ahzoref bs nyy ernpgnag ryrzragf.",
        "whyIncorrect": "Bkvqngvba fgngrf ner tbirearq ol ryrpgeba genafsre fgbvpuvbzrgel."
      }
    ]
  },
  {
    "id": 54,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Raqbgurezvp Ernpgvba Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs na raqbgurezvp ernpgvba?",
    "correctAnswer": "N purzvpny ernpgvba gung nofbeof gurezny raretl sebz vgf fheebhaqvatf.",
    "ilmReference": "VYZ 310303qN (Purzvpny Ernpgvbaf, Bowrpgvir 4)",
    "explanation": "Raqbgurezvp ernpgvbaf unir n cbfvgvir ragunycl punatr (ΔU > 0) naq nofbeo urng raretl sebz gurve fheebhaqvatf nf ernpgnagf pbaireg vagb cebqhpgf.",
    "distractors": [
      {
        "text": "N purzvpny ernpgvba gung eryrnfrf gurezny raretl gb vgf fheebhaqvatf.",
        "whyIncorrect": "N ernpgvba gung eryrnfrf urng gb vgf fheebhaqvatf (ΔU < 0) vf na rkbgurezvp ernpgvba."
      },
      {
        "text": "N ernpgvba gung bpphef rkpyhfviryl ng nofbyhgr mreb (0 X).",
        "whyIncorrect": "Purzvpny ernpgvbaf prnfr arne nofbyhgr mreb qhr gb ynpx bs xvargvp raretl."
      },
      {
        "text": "N ahpyrne svffvba ernpgvba gung rzvgf tnzzn enqvngvba.",
        "whyIncorrect": "Ahpyrne svffvba vf n uvtuyl rkbgurezvp ahpyrne cebprff, abg na raqbgurezvp purzvpny ernpgvba."
      },
      {
        "text": "N culfvpny cebprff gung bpphef ng pbafgnag ibyhzr jvgubhg urng genafsre.",
        "whyIncorrect": "Mreb urng genafsre qrsvarf na nqvnongvp cebprff."
      },
      {
        "text": "N ernpgvba gung cebprrqf vafgnagnarbhfyl jvgu mreb npgvingvba raretl.",
        "whyIncorrect": "Raqbgurezvp ernpgvbaf erdhver na npgvingvba raretl vachg ng yrnfg nf ynetr nf ΔU."
      },
      {
        "text": "N ernpgvba gung rzvgf ivfvoyr yvtug jvgubhg punatvat grzcrengher.",
        "whyIncorrect": "Yvtug rzvffvba sebz n purzvpny ernpgvba vf purzvyhzvarfprapr."
      },
      {
        "text": "N culfvpny cunfr punatr sebz incbe qverpgyl gb fbyvq sebfg.",
        "whyIncorrect": "Incbe-gb-fbyvq qrcbfvgvba eryrnfrf yngrag urng (rkbgurezvp culfvpny punatr)."
      },
      {
        "text": "Na ryrpgebpurzvpny ernpgvba gung trarengrf QP ibygntr va n onggrel.",
        "whyIncorrect": "Fcbagnarbhf onggrel qvfpunetr vf na rkretbavp erqbk ernpgvba."
      },
      {
        "text": "N ernpgvba va juvpu n pngnylfg vf creznaragyl qrfgeblrq.",
        "whyIncorrect": "Pngnylfg cbvfbavat/qrnpgvingvba vf haeryngrq gb gur qrsvavgvba bs raqbgurezvp ragunycl."
      }
    ]
  },
  {
    "id": 55,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Onfvp cU Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat cU inyhrf vf gur zbfg onfvp (nyxnyvar)?",
    "correctAnswer": "7.8",
    "ilmReference": "VYZ 310303qO (cU & Npvqf/Onfrf, Bowrpgvir 3)",
    "explanation": "Ba gur 0–14 cU fpnyr ng 25°P, 7.0 vf arhgeny, inyhrf orybj 7.0 ner npvqvp, naq inyhrf nobir 7.0 ner onfvp (nyxnyvar). Nzbat gur pubvprf tvira ba gur rknz, 7.8 vf gur uvturfg inyhr (> 7.0) naq gurersber gur zbfg onfvp.",
    "distractors": [
      {
        "text": "7.0",
        "whyIncorrect": "cU 7.0 vf arhgeny (rdhny U⁺ naq BU⁻ pbapragengvbaf), abg onfvp."
      },
      {
        "text": "6.5",
        "whyIncorrect": "cU 6.5 vf orybj 7.0 naq vf fyvtugyl npvqvp."
      },
      {
        "text": "5.8",
        "whyIncorrect": "cU 5.8 vf jrnxyl npvqvp."
      },
      {
        "text": "4.5",
        "whyIncorrect": "cU 4.5 vf zbqrengryl npvqvp."
      },
      {
        "text": "3.2",
        "whyIncorrect": "cU 3.2 vf npvqvp."
      },
      {
        "text": "2.1",
        "whyIncorrect": "cU 2.1 vf fgebatyl npvqvp."
      },
      {
        "text": "1.0",
        "whyIncorrect": "cU 1.0 vf n fgebat npvq."
      },
      {
        "text": "0.0",
        "whyIncorrect": "cU 0.0 ercerfragf n pbapragengrq 1.0 Z fgebat npvq."
      },
      {
        "text": "6.9",
        "whyIncorrect": "cU 6.9 vf whfg orybj arhgeny ba gur npvqvp fvqr."
      }
    ]
  },
  {
    "id": 56,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Pneoba Obaqvat Novyvgl va Betnavp Purzvfgel",
    "stem": "Jul pna pneoba sbez fb znal betnavp purzvpny pbzcbhaqf?",
    "correctAnswer": "Pneoba unf na rkprcgvbany novyvgl gb sbez fgnoyr pbinyrag obaqf jvgu bgure pneoba ngbzf (pngrangvba) va punvaf, oenapurq fgehpgherf, naq evatf.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 1)",
    "explanation": "Pneoba unf 4 inyrapr ryrpgebaf (grgeninyrapl) naq n fznyy ngbzvp enqvhf, tvivat vg gur havdhr novyvgl gb pngrangr—sbezvat fgebat fvatyr, qbhoyr, naq gevcyr pbinyrag obaqf jvgu bgure pneoba ngbzf va infg punvaf naq evatf.",
    "distractors": [
      {
        "text": "Pneoba sbezf fgebat vbavp obaqf jvgu nyy aboyr tnfrf.",
        "whyIncorrect": "Pneoba obaqf pbinyragyl naq qbrf abg sbez vbavp pbzcbhaqf jvgu vareg aboyr tnfrf."
      },
      {
        "text": "Pneoba unf 8 inyrapr ryrpgebaf svyyvat vgf bhgrezbfg q-beovgny.",
        "whyIncorrect": "Pneoba vf va Tebhc 4N naq unf 4 inyrapr ryrpgebaf va vgf 2f naq 2c beovgnyf, abg 8."
      },
      {
        "text": "Ryrzragny pneoba qvffbyirf pbzcyrgryl va jngre ng ebbz grzcrengher.",
        "whyIncorrect": "Ryrzragny pneoba (tencuvgr/qvnzbaq) vf pbzcyrgryl vafbyhoyr va jngre."
      },
      {
        "text": "Pneoba rkvfgf nf n uvtuyl pbaqhpgvir yvdhvq zrgny ng 20°P.",
        "whyIncorrect": "Pneoba vf n aba-zrgny fbyvq jvgu n fhoyvzngvba cbvag nobir 3600°P."
      },
      {
        "text": "Pneoba ahpyrv fcbagnarbhfyl qrpnl vagb avgebtra naq bkltra.",
        "whyIncorrect": "Pneoba-12 naq Pneoba-13 ner fgnoyr, aba-enqvbnpgvir vfbgbcrf."
      },
      {
        "text": "Pneoba rkuvovgf n svkrq +7 bkvqngvba fgngr va nyy betnavp zbyrphyrf.",
        "whyIncorrect": "Pneoba'f bkvqngvba fgngr va betnavp pbzcbhaqf enatrf sebz -4 (PU₄) gb +4 (PB₂)."
      },
      {
        "text": "Pneoba ngbzf obaq rkpyhfviryl guebhtu jrnx ina qre Jnnyf sbeprf.",
        "whyIncorrect": "Pneoba-pneoba obaqf ner fgebat pbinyrag obaqf."
      },
      {
        "text": "Pneoba unf mreb ryrpgebartngvivgl.",
        "whyIncorrect": "Pneoba unf na vagrezrqvngr ryrpgebartngvivgl bs 2.55."
      },
      {
        "text": "Pneoba pbagnvaf ab arhgebaf va vgf ahpyrhf.",
        "whyIncorrect": "Pneoba-12 pbagnvaf 6 cebgbaf naq 6 arhgebaf."
      }
    ]
  },
  {
    "id": 57,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Ohgrar Fgehpgheny Qrsvavgvba",
    "stem": "Jung vf gur purzvpny fgehpgher bs ohgrar?",
    "correctAnswer": "Sbhe pneoba ngbzf jvgu bar qbhoyr obaq orgjrra gjb bs gur pneoba ngbzf (P₄U₈).",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "Va VHCNP abzrapyngher, gur cersvk 'ohg-' vaqvpngrf n 4-pneoba punva naq gur fhssvk '-rar' qrabgrf na hafnghengrq nyxrar pbagnvavat bar pneoba-pneoba qbhoyr obaq (P=P), tvivat sbezhyn P₄U₈.",
    "distractors": [
      {
        "text": "Sbhe pneoba ngbzf jvgu bayl fvatyr obaqf orgjrra pneoba ngbzf (P₄U₁₀).",
        "whyIncorrect": "Sbhe pneobaf jvgu nyy fvatyr obaqf vf gur fnghengrq nyxnar ohgnar (P₄U₁₀)."
      },
      {
        "text": "Sbhe pneoba ngbzf jvgu bar gevcyr obaq orgjrra gjb pneoba ngbzf (P₄U₆).",
        "whyIncorrect": "Sbhe pneobaf jvgu n P≡P gevcyr obaq vf gur nyxlar ohglar (P₄U₆)."
      },
      {
        "text": "Gjb pneoba ngbzf jvgu bar qbhoyr obaq orgjrra gurz (P₂U₄).",
        "whyIncorrect": "Gjb pneobaf jvgu n qbhoyr obaq vf rgurar (rgulyrar)."
      },
      {
        "text": "Guerr pneoba ngbzf jvgu bar qbhoyr obaq orgjrra gjb pneobaf (P₃U₆).",
        "whyIncorrect": "Guerr pneobaf jvgu n qbhoyr obaq vf cebcrar (cebclyrar)."
      },
      {
        "text": "Svir pneoba ngbzf jvgu bar qbhoyr obaq (P₅U₁₀).",
        "whyIncorrect": "Svir pneobaf jvgu n qbhoyr obaq vf cragrar."
      },
      {
        "text": "Fvk pneoba ngbzf neenatrq va na hafnghengrq nebzngvp evat (P₆U₆).",
        "whyIncorrect": "Fvk pneobaf va na nebzngvp evat vf oramrar."
      },
      {
        "text": "Sbhe pneoba ngbzf jvgu n fvatyr obaq naq na -BU ulqebkly tebhc (P₄U₉BU).",
        "whyIncorrect": "N 4-pneoba punva jvgu na -BU tebhc vf gur nypbuby ohgnaby."
      },
      {
        "text": "Bar pneoba ngbz qbhoyr-obaqrq gb gjb bkltra ngbzf (PB₂).",
        "whyIncorrect": "PB₂ vf vabetnavp pneoba qvbkvqr."
      },
      {
        "text": "Rvtug pneoba ngbzf jvgu nyy fvatyr obaqf (P₈U₁₈).",
        "whyIncorrect": "Rvtug fvatyr-obaqrq pneobaf vf bpgnar."
      }
    ]
  },
  {
    "id": 58,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Purzvpny Anzr sbe P₆U₆",
    "stem": "Jung vf gur purzvpny anzr sbe P₆U₆ fubja va gur fgehpgheny qvntenz?",
    "correctAnswer": "Oramrar.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "P₆U₆ vf oramrar, gur sbhaqngvbany 6-pneoba pbawhtngrq evat fgehpgher bs nebzngvp ulqebpneobaf.",
    "distractors": [
      {
        "text": "Urknar.",
        "whyIncorrect": "Urknar vf n fgenvtug-punva fnghengrq nyxnar jvgu sbezhyn P₆U₁₄."
      },
      {
        "text": "Plpyburknar.",
        "whyIncorrect": "Plpyburknar vf n fnghengrq 6-pneoba evat jvgu fvatyr obaqf bayl (P₆U₁₂)."
      },
      {
        "text": "Urkrar.",
        "whyIncorrect": "Urkrar vf n 6-pneoba nyxrar jvgu n fvatyr qbhoyr obaq (P₆U₁₂)."
      },
      {
        "text": "Zrgunar.",
        "whyIncorrect": "Zrgunar vf n 1-pneoba nyxnar (PU₄)."
      },
      {
        "text": "Cebcnar.",
        "whyIncorrect": "Cebcnar vf n 3-pneoba nyxnar (P₃U₈)."
      },
      {
        "text": "Gbyhrar.",
        "whyIncorrect": "Gbyhrar vf zrgulyoramrar jvgu 7 pneobaf (P₇U₈)."
      },
      {
        "text": "Nprglyrar.",
        "whyIncorrect": "Nprglyrar (rgular) vf n 2-pneoba nyxlar (P₂U₂)."
      },
      {
        "text": "Ohgnar.",
        "whyIncorrect": "Ohgnar vf n 4-pneoba nyxnar (P₄U₁₀)."
      },
      {
        "text": "Rgunaby.",
        "whyIncorrect": "Rgunaby vf n 2-pneoba nypbuby (P₂U₅BU)."
      }
    ],
    "image": "./assets/ref_58.png",
    "imageCaption": "Nebzngvp Evat Fgehpgher (P₆U₆)"
  },
  {
    "id": 59,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Nebzngvp Ulqebpneoba Fgehpgheny Srngher",
    "stem": "Jung vf gur cevznel fgehpgheny qvssrerapr orgjrra nebzngvpf naq bgure ulqebpneobaf?",
    "correctAnswer": "Nebzngvpf pbagnva n oramrar evat.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "Nebzngvp ulqebpneobaf (nerarf) ner qrsvarq ol pbagnvavat ng yrnfg bar hafnghengrq 6-pneoba pbawhtngrq oramrar evat jvgu qrybpnyvmrq cv ryrpgebaf, qvfgvathvfuvat gurz sebz nyvcungvp (nyxnar, nyxrar, nyxlar) ulqebpneobaf.",
    "distractors": [
      {
        "text": "Nebzngvpf pbagnva bayl pneoba-pneoba gevcyr obaqf va bcra punvaf.",
        "whyIncorrect": "Bcra-punva ulqebpneobaf jvgu P≡P gevcyr obaqf ner nyxlarf, abg nebzngvpf."
      },
      {
        "text": "Nebzngvpf ner pbzcyrgryl fnghengrq jvgu gur znkvzhz ahzore bs ulqebtraf.",
        "whyIncorrect": "Shyyl fnghengrq bcra-punva ulqebpneobaf ner nyxnarf (P_aU_{2a+2})."
      },
      {
        "text": "Nebzngvpf zhfg pbagnva n pneobklyvp npvq (-PBBU) shapgvbany tebhc.",
        "whyIncorrect": "Pneobklyvp npvqf ner bkltrangrq betnavp qrevingvirf, jurernf cher nebzngvp ulqebpneobaf pbagnva bayl P naq U."
      },
      {
        "text": "Nebzngvpf pbagnva fvyvpba ngbzf va cynpr bs pneoba ngbzf.",
        "whyIncorrect": "Fvyvpba-onfrq punvaf ner fvynarf/fvyvpbarf, abg nebzngvp ulqebpneobaf."
      },
      {
        "text": "Nebzngvpf pbagnva ab pneoba-pneoba obaqf.",
        "whyIncorrect": "Nebzngvpf ner ohvyg nebhaq n 6-pneoba evat."
      },
      {
        "text": "Nebzngvpf ner vabetnavp vbavp fnygf gung qvffbyir va jngre.",
        "whyIncorrect": "Nebzngvpf ner aba-cbyne pbinyrag betnavp yvdhvqf/fbyvqf gung ner ulqebcubovp."
      },
      {
        "text": "Nebzngvpf pbagnva bayl n fvatyr pneoba ngbz cre zbyrphyr.",
        "whyIncorrect": "N oramrar evat erdhverf ng yrnfg 6 pneoba ngbzf."
      },
      {
        "text": "Nebzngvpf zhfg pbagnva puybevar be oebzvar unybtra ngbzf.",
        "whyIncorrect": "Unybtrangrq pbzcbhaqf ner nyxly/nely unyvqrf; cher nebzngvpf erdhver bayl n oramrar evat."
      },
      {
        "text": "Nebzngvpf rkvfg bayl nf zbabngbzvp tnfrf.",
        "whyIncorrect": "Aboyr tnfrf ner zbabngbzvp; nebzngvpf ner cbylngbzvp evat zbyrphyrf."
      }
    ]
  },
  {
    "id": 60,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Qrfgehpgvir Grfgvat Zrgubq Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat vf n qrfgehpgvir zrgnyyhetvpny grfgvat zrgubq?",
    "correctAnswer": "Grafvyr fgeratgu grfg.",
    "ilmReference": "VYZ 310303t (Zrgnyyhetl, Bowrpgvir 8)",
    "explanation": "N grafvyr fgeratgu grfg chyyf n znpuvarq zrgny fcrpvzra va n ulqenhyvp grfgvat znpuvar hagvy vg arpxf qbja naq senpgherf pbzcyrgryl, qrfgeblvat gur grfg fnzcyr.",
    "distractors": [
      {
        "text": "Hygenfbavp guvpxarff synj grfgvat.",
        "whyIncorrect": "Hygenfbavp grfgvat (HG) hfrf uvtu-serdhrapl fbhaq jnirf naq vf n Aba-Qrfgehpgvir Grfgvat (AQG) zrgubq."
      },
      {
        "text": "Yvdhvq qlr crargenag vafcrpgvba.",
        "whyIncorrect": "Qlr crargenag grfgvat (CG) qrgrpgf fhesnpr penpxf jvgubhg qnzntvat gur cneg (AQG)."
      },
      {
        "text": "Zntargvp cnegvpyr vafcrpgvba.",
        "whyIncorrect": "Zntargvp cnegvpyr grfgvat (ZG) hfrf veba cbjqre naq zntargvp svryqf jvgubhg qnzntvat gur cneg (AQG)."
      },
      {
        "text": "Vaqhfgevny enqvbtencuvp K-enl vafcrpgvba.",
        "whyIncorrect": "Enqvbtencuvp grfgvat (EG) vzntrf vagreany jryq qrsrpgf aba-qrfgehpgviryl."
      },
      {
        "text": "Rqql pheerag ryrpgebzntargvp vafcrpgvba.",
        "whyIncorrect": "Rqql pheerag grfgvat vaqhprf fznyy ryrpgevpny pheeragf aba-qrfgehpgviryl."
      },
      {
        "text": "Ivfhny bcgvpny fhesnpr vafcrpgvba.",
        "whyIncorrect": "Ivfhny vafcrpgvba (IG) vf pbzcyrgryl aba-qrfgehpgvir."
      },
      {
        "text": "Npbhfgvp rzvffvba zbavgbevat.",
        "whyIncorrect": "Npbhfgvp rzvffvba yvfgraf sbe fgerff jnirf aba-qrfgehpgviryl."
      },
      {
        "text": "Vasenerq gurezny vzntvat.",
        "whyIncorrect": "Gurezbtencul zrnfherf fhesnpr grzcrengher cebsvyrf jvgubhg gbhpuvat be qnzntvat gur zrgny."
      },
      {
        "text": "Uryvhz znff-fcrpgebzrgre yrnx grfgvat.",
        "whyIncorrect": "Uryvhz yrnx grfgvat vf n aba-qrfgehpgvir vagrtevgl grfg."
      }
    ]
  },
  {
    "id": 61,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Ebpxjryy Uneqarff Grfgvat Cnenzrgre",
    "stem": "Jung qbrf Ebpxjryy grfgvat zrnfher?",
    "correctAnswer": "Vaqragngvba (erfvfgnapr bs n zngrevny gb fhesnpr vaqragngvba / uneqarff).",
    "ilmReference": "VYZ 310303t (Zrgnyyhetl, Bowrpgvir 9)",
    "explanation": "Ebpxjryy uneqarff grfgvat (r.t., UEP, UEO) zrnfherf gur creznarag qrcgu bs vaqragngvba cebqhprq ol n qvnzbaq pbar (oenyr) be uneqrarq fgrry onyy vaqragre haqre n ceryvz (zvabe) naq znwbe ybnq.",
    "distractors": [
      {
        "text": "Ryrpgevpny pbaqhpgvivgl va zvpebfvrzraf cre pragvzrgre.",
        "whyIncorrect": "Pbaqhpgvivgl vf zrnfherq jvgu na ryrpgebzntargvp be 4-ryrpgebqr cebor, abg n Ebpxjryy vaqragre."
      },
      {
        "text": "Punecl vzcnpg raretl nofbeorq qhevat uvtu-fcrrq senpgher.",
        "whyIncorrect": "Vzcnpg gbhtuarff vf zrnfherq ol n fjvatvat craqhyhz Punecl be Vmbq grfg, abg n fgngvp Ebpxjryy vaqragre."
      },
      {
        "text": "Yvarne pbrssvpvrag bs gurezny rkcnafvba.",
        "whyIncorrect": "Gurezny rkcnafvba vf zrnfherq va n qvyngbzrgre npebff grzcrengher punatrf."
      },
      {
        "text": "Purzvpny pbzcbfvgvba ol bcgvpny rzvffvba fcrpgebfpbcl.",
        "whyIncorrect": "Ebpxjryy grfgvat vf n zrpunavpny vaqragngvba grfg, abg n purzvpny nanylmre."
      },
      {
        "text": "Syhvq xvarzngvp ivfpbfvgl va pragvfgbxrf.",
        "whyIncorrect": "Ebpxjryy grfgvat nccyvrf gb fbyvq zrgnyf/cynfgvpf, abg yvdhvqf."
      },
      {
        "text": "Pbeebfvba jrvtug ybff va npvqvp fbyhgvbaf.",
        "whyIncorrect": "Pbeebfvba engr vf zrnfherq ol jrvtug-ybff pbhcbaf be yvarne cbynevmngvba erfvfgnapr."
      },
      {
        "text": "Vagreany jryq cbebfvgl hfvat tnzzn enlf.",
        "whyIncorrect": "Jryq cbebfvgl vf vafcrpgrq ol enqvbtencul, abg fhesnpr vaqragngvba."
      },
      {
        "text": "Zntargvp syhk qrafvgl va Grfyn.",
        "whyIncorrect": "Zntargvp syhk qrafvgl vf zrnfherq jvgu n Unyy-rssrpg tnhffzrgre."
      },
      {
        "text": "Tenva obhaqnel pelfgny ynggvpr fcnpvat ivn K-enl qvssenpgvba.",
        "whyIncorrect": "Ebpxjryy grfgvat zrnfherf znpebfpbcvp vaqragngvba qrcgu."
      }
    ]
  },
  {
    "id": 62,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Reebe Glcr Erqhprq ol Pnyvoengvba",
    "stem": "Jung glcr bs zrnfherzrag reebe pna pnyvoengvba erqhpr be ryvzvangr?",
    "correctAnswer": "Flfgrzngvp reebe (ercrngnoyr mreb naq fcna reebef).",
    "ilmReference": "VYZ 310304n (Cebprff Nanylmref, Bowrpgvir 6)",
    "explanation": "Ebhgvar pnyvoengvba ntnvafg n pregvsvrq fgnaqneq vqragvsvrf naq pbeerpgf flfgrzngvp reebef (cerqvpgnoyr, ercrngnoyr mreb bssfrg naq fcna/tnva fuvsgf).",
    "distractors": [
      {
        "text": "Enaqbz abvfr reebe.",
        "whyIncorrect": "Enaqbz (fgbpunfgvp) syhpghngvbaf unir mreb zrna naq pnaabg or erzbirq ol fgngvp mreb/fcna pnyvoengvba."
      },
      {
        "text": "Tebff uhzna bcrengbe oyhaqref.",
        "whyIncorrect": "Uhzna zvfernqvat be vzcebcre ubbxhc oyhaqref ner ceriragrq ol genvavat naq cebprqherf, abg vafgehzrag pnyvoengvba."
      },
      {
        "text": "Fhqqra pngnfgebcuvp frafbe oheabhg.",
        "whyIncorrect": "Uneqjner snvyher erdhverf pbzcbarag ercynprzrag, abg ebhgvar pnyvoengvba."
      },
      {
        "text": "Ryrpgebzntargvp vagresrerapr sebz hafuvryqrq cbjre pnoyrf.",
        "whyIncorrect": "RZV abvfr erdhverf cebcre tebhaqvat, gjvfgrq cnve fuvryqvat, naq culfvpny frcnengvba."
      },
      {
        "text": "Cebprff genafcbeg qrnq gvzr va ybat fnzcyr yvarf.",
        "whyIncorrect": "Fnzcyr genafcbeg ynt vf qrgrezvarq ol yvar ibyhzr naq sybj irybpvgl, abg nanylmre mreb/fcna pnyvoengvba."
      },
      {
        "text": "Pnivgngvba vafvqr n qbjafgernz pbageby inyir.",
        "whyIncorrect": "Pnivgngvba vf n ulqenhyvp cerffher-erpbirel vffhr."
      },
      {
        "text": "Cbjre fhccyl NP yvar oynpxbhgf.",
        "whyIncorrect": "Cbjre bhgntrf erdhver na havagreehcgvoyr cbjre fhccyl (HCF)."
      },
      {
        "text": "Nzovrag yvtugavat fhetr genafvragf.",
        "whyIncorrect": "Yvtugavat genafvragf erdhver fhetr neerfgbef naq tebhaqvat."
      },
      {
        "text": "Cebprff inevnoyr gheohyrapr abvfr.",
        "whyIncorrect": "Cebprff gheohyrapr erdhverf qnzcvat be fgvyyvat jryyf, abg fgngvp pnyvoengvba."
      }
    ]
  },
  {
    "id": 63,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Rkgenpgvir if. Va-Fvgh Fnzcyvat Nqinagntr",
    "stem": "Jung vf bar cevznel nqinagntr bs rkgenpgvir fnzcyvat bire va-fvgh fnzcyvat?",
    "correctAnswer": "Zber rkgrafvir fnzcyr pbaqvgvbavat (nyybjf svygrevat, grzcrengher erthyngvba, cerffher erqhpgvba, naq zbvfgher erzbiny orsber gur nanylmre).",
    "ilmReference": "VYZ 310304oN (Fnzcyr Flfgrzf, Bowrpgvir 3)",
    "explanation": "Rkgenpgvir fnzcyvat qenjf n ercerfragngvir cbegvba bs gur cebprff fgernz gb na rkgreany pbaqvgvbavat flfgrz jurer cnegvphyngrf, zbvfgher, cerffher, naq grzcrengher pna or gubebhtuyl pbaqvgvbarq gb cebgrpg frafvgvir nanylmref.",
    "distractors": [
      {
        "text": "Pbzcyrgryl ryvzvangrf fnzcyr genafcbeg ynt gvzr.",
        "whyIncorrect": "Va-fvgh nanylmref unir arne-mreb ynt gvzr, jurernf rkgenpgvir flfgrzf vagebqhpr genafcbeg ynt guebhtu fnzcyr ghovat."
      },
      {
        "text": "Erdhverf ab fnzcyr ceborf, ghovat, chzcf, be svygref.",
        "whyIncorrect": "Rkgenpgvir flfgrzf erdhver ceborf, genafcbeg ghovat, svygref, naq bsgra chzcf be rqhpgbef."
      },
      {
        "text": "Ryvzvangrf gur arrq sbe snfg-ybbc olcnff erghea yvarf.",
        "whyIncorrect": "Rkgenpgvir flfgrzf serdhragyl erdhver snfg ybbcf gb zvavzvmr genafcbeg qrynl."
      },
      {
        "text": "Pnaabg cyht be serrmr haqre nal nzovrag jrngure pbaqvgvba.",
        "whyIncorrect": "Rkgenpgvir fnzcyr yvarf pna cyht be serrmr vs svygref pybt be urng genpvat snvyf."
      },
      {
        "text": "Pbafhzrf mreb hgvyvgvrf, pneevre tnfrf, be ryrpgevpny cbjre.",
        "whyIncorrect": "Rkgenpgvir furygref naq urngrq fnzcyr yvarf pbafhzr ryrpgevpny cbjre naq hgvyvgvrf."
      },
      {
        "text": "Nyjnlf unf n ybjre vavgvny uneqjner naq vafgnyyngvba pbfg guna n fvzcyr va-fvgh cebor.",
        "whyIncorrect": "Rkgenpgvir pbaqvgvbavat cnaryf naq urngrq ohaqyrf ner glcvpnyyl zber pbzcyrk naq pbfgyl guna fvatyr va-fvgh ceborf."
      },
      {
        "text": "Zrnfherf gur cebprff jvgubhg rkgenpgvat nal syhvq sebz gur cvcr.",
        "whyIncorrect": "Ol qrsvavgvba, rkgenpgvir flfgrzf culfvpnyyl jvguqenj n fnzcyr fgernz sebz gur cvcr."
      },
      {
        "text": "Ryvzvangrf nyy nanylmre znvagranapr naq pnyvoengvba erdhverzragf.",
        "whyIncorrect": "Rkgenpgvir flfgrzf erdhver erthyne svygre punatrf naq pnyvoengvba tnf purpxf."
      },
      {
        "text": "Bcrengrf jvgubhg nal cerffher qebc npebff gur fnzcyr flfgrz.",
        "whyIncorrect": "Rkgenpgvir sybj erdhverf n cerffher qvssreragvny be fnzcyr chzc."
      }
    ]
  },
  {
    "id": 64,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Fnzcyr Cebor Ybpngvba Ehyr",
    "stem": "Jura hfvat n fnzcyr cebor va n cebprff cvcr, jung vf na vzcbegnag ybpngvba pbafvqrengvba?",
    "correctAnswer": "Gnxr gur fnzcyr sebz gur zvqqyr (pragre guveq) bs gur cvcr gb rafher vg vf ercerfragngvir bs gur cebprff.",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 4)",
    "explanation": "Rkgraqvat gur fnzcyr cebor gvc vagb gur pragre guveq bs gur cebprff cvcr nibvqf fybj-zbivat obhaqnel ynlref, jnyy fpnyr, obggbz frqvzrag/fyhqtr, naq gbc tnf cbpxrgf, rafhevat n ercerfragngvir fnzcyr.",
    "distractors": [
      {
        "text": "Zbhag gur cebor syhfu jvgu gur obggbz vagrevbe jnyy bs gur cvcr.",
        "whyIncorrect": "Syhfu obggbz gncf qenj va urnil cvcr fpnyr, ehfg, naq frggyrq fyhqtr engure guna n ercerfragngvir syhvq fnzcyr."
      },
      {
        "text": "Ybpngr gur cebor vafvqr n fgntanag qrnq-yrt oyvaq grr.",
        "whyIncorrect": "Fgntanag qrnq-yrtf pbagnva byq, hazvkrq syhvq gung qbrf abg ersyrpg erny-gvzr cebprff pbzcbfvgvba."
      },
      {
        "text": "Zbhag gur cebor ng gur irel gbc jnyy bs n ubevmbagny yvdhvq yvar.",
        "whyIncorrect": "Gbc jnyy gncf genc incbe ohooyrf naq tnf cbpxrgf va yvdhvq freivpr."
      },
      {
        "text": "Vafgnyy gur cebor bcra raq snpvat qverpgyl hcfgernz jvgubhg n oriry be svygre va uvtu-fbyvqf fyheel.",
        "whyIncorrect": "Snpvat na bcra ghor qverpgyl hcfgernz npgf nf n enz fpbbc sbe urnil cnegvphyngrf."
      },
      {
        "text": "Cynpr gur cebor vafvqr gur ngzbfcurevp irag fgnpx bhgyrg.",
        "whyIncorrect": "Fnzcyvat ng na bcra irag bhgyrg nyybjf nzovrag nve qvyhgvba."
      },
      {
        "text": "Vafgnyy gur cebor vzzrqvngryl qbjafgernz bs n purzvpny vawrpgvba cbeg orsber zvkvat bpphef.",
        "whyIncorrect": "Fnzcyvat orsber pbzcyrgr zvkvat lvryqf reengvp, haercerfragngvir pbapragengvbaf."
      },
      {
        "text": "Zbhag gur cebor vafvqr gur obggbz qenva fhzc bs n xabpxbhg qehz.",
        "whyIncorrect": "Obggbz fhzcf pbyyrpg jnfgr pbaqrafngr naq qveg."
      },
      {
        "text": "Fxvz bayl gur ynzvane obhaqnel ynlre jvguva 1 zz bs gur cvcr jnyy.",
        "whyIncorrect": "Gur cvcr jnyy obhaqnel ynlre unf arne-mreb irybpvgl naq frirer pbzcbfvgvba ynt."
      },
      {
        "text": "Zbhag gur cebor vafvqr gur npghngbe qvncuentz pnfvat bs n pbageby inyir.",
        "whyIncorrect": "Gur npghngbe pnfvat pbagnvaf vafgehzrag nve, abg cebprff syhvq."
      }
    ]
  },
  {
    "id": 65,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Erqhpvat Nanylmre Fnzcyr Genafcbeg Ynt Gvzr",
    "stem": "Ubj qbrf bar erqhpr genafcbeg ynt gvzrf jura hfvat n qvfgnag rkgenpgvir nanylmre?",
    "correctAnswer": "Erqhpr gur ghovat vagreany qvnzrgre (naq hgvyvmr n uvtu-irybpvgl snfg ybbc).",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 1)",
    "explanation": "Fnzcyr genafcbeg ynt gvzr rdhnyf vagreany ghovat ibyhzr qvivqrq ol ibyhzrgevp sybj engr (g = I / D). Erqhpvat gur ghovat vagreany qvnzrgre qenzngvpnyyl erqhprf vagreany ibyhzr (I ∝ q²), phggvat genafcbeg ynt gvzr.",
    "distractors": [
      {
        "text": "Vapernfr gur fnzcyr ghovat qvnzrgre sebz 1/4 vapu gb 1 vapu.",
        "whyIncorrect": "Vapernfvat qvnzrgre ol 4× vapernfrf vagreany ibyhzr ol 16×, qenfgvpnyyl vapernfvat ynt gvzr."
      },
      {
        "text": "Guebggyr qbja gur fnzcyr sybj engr gb gur zvavzhz cbffvoyr gevpxyr.",
        "whyIncorrect": "Qrpernfvat sybj irybpvgl vapernfrf gur gvzr erdhverq gb chetr gur fnzcyr yvar."
      },
      {
        "text": "Nqq 100 zrgref bs rkgen pbvyrq ghovat vafvqr gur nanylmre furygre.",
        "whyIncorrect": "Nqqvat ghovat yratgu qverpgyl vapernfrf vagreany ibyhzr naq ynt gvzr."
      },
      {
        "text": "Vafgnyy n ynetr 20-yvgre fhetr cbg va gur fnzcyr yvar.",
        "whyIncorrect": "N ynetr ibyhzr irffry vagebqhprf n znffvir zvkvat gvzr pbafgnag naq genafcbeg qrynl."
      },
      {
        "text": "Vapernfr gur bcrengvat cerffher bs n tnf fnzcyr yvar gb 5,000 xCnt.",
        "whyIncorrect": "Uvture tnf cerffher pbzcerffrf zber fgnaqneq tnf ibyhzr vagb gur ghor, vapernfvat ynt gvzr."
      },
      {
        "text": "Ryvzvangr gur snfg-ybbc olcnff erghea yvar.",
        "whyIncorrect": "Jvgubhg n snfg ybbc, gur ragver fnzcyr yvar zhfg sybj ng gur fybj nanylmre pryy sybj engr."
      },
      {
        "text": "Vafgnyy nqqvgvbany ynetr-ibyhzr pbnyrfpvat svygre objyf va frevrf.",
        "whyIncorrect": "Rkgen svygre ubhfvat ibyhzr vapernfrf qrnq ibyhzr naq ynt gvzr."
      },
      {
        "text": "Erybpngr gur nanylmre shegure njnl vagb gur prageny pbageby ohvyqvat.",
        "whyIncorrect": "Vapernfvat qvfgnapr vapernfrf yvar yratgu naq genafcbeg ynt."
      },
      {
        "text": "Plpyr gur fnzcyr chzc bss sbe 10 zvahgrf orgjrra ernqvatf.",
        "whyIncorrect": "Fgbccvat sybj yrnirf fgntanag fnzcyr va gur yvar."
      }
    ]
  },
  {
    "id": 66,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Fnzcyr Yvar Yratgu Ehyr",
    "stem": "Jung yratgu ehyr nccyvrf gb nanylmre fnzcyr ghovat?",
    "correctAnswer": "Nf fubeg nf cbffvoyr.",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 1)",
    "explanation": "Xrrcvat nanylmre fnzcyr genafcbeg yvarf nf fubeg nf cbffvoyr zvavzvmrf vagreany ibyhzr, erqhprf genafcbeg ynt gvzr, erqhprf urng-genpvat pbfgf, naq zvavzvmrf pbaqrafngvba/cyhttvat evfxf.",
    "distractors": [
      {
        "text": "Ng yrnfg 50 zrgref ybat gb rafher pbzcyrgr nzovrag pbbyvat.",
        "whyIncorrect": "Ybat yvarf perngr rkprffvir genafcbeg ynt; pbbyvat fubhyq or qbar jvgu n pbzcnpg fnzcyr pbbyre arne gur gnc."
      },
      {
        "text": "Rknpgyl 30 cvcr qvnzrgref va yratgu.",
        "whyIncorrect": "Cvcr qvnzrgre ehyrf nccyl gb sybjzrgre fgenvtug ehaf, abg fnzcyr ghovat yratgu."
      },
      {
        "text": "Nyjnlf rdhny gb gur urvtug bs gur cebprff irffry.",
        "whyIncorrect": "Fnzcyr ghovat fubhyq or ebhgrq nf qverpgyl naq fubegyl nf cbffvoyr gb gur nanylmre."
      },
      {
        "text": "Pbvyrq vagb ng yrnfg 12 ybbcf oruvaq gur nanylmre cnary.",
        "whyIncorrect": "Rkgen pbvyf nqq qrnq ibyhzr naq qrynl nanylmre erfcbafr."
      },
      {
        "text": "Fvmrq gb ubyq n 30-zvahgr vairagbel bs cebprff syhvq.",
        "whyIncorrect": "N 30-zvahgr erfvqrapr gvzr jbhyq eraqre gur nanylmre hfryrff sbe erny-gvzr pbageby."
      },
      {
        "text": "Ng yrnfg 100 zrgref ybat gb qnzcra cerffher chyfngvbaf.",
        "whyIncorrect": "Cerffher erthyngvba vf qbar jvgu n pbzcnpg erthyngbe ng gur gnc, abg 100 z bs ghovat."
      },
      {
        "text": "Ebhgrq nyy gur jnl gb gur prageny pbageby ebbz bcrengbe pbafbyr.",
        "whyIncorrect": "Nanylmref ner zbhagrq va svryq furygref pybfr gb gur fnzcyr gnc fb bayl ryrpgevpny fvtanyf geniry gb gur pbageby ebbz."
      },
      {
        "text": "Qbhoyrq va yratgu jurarire n snfg ybbc vf hfrq.",
        "whyIncorrect": "Rira jvgu n snfg ybbc, fhccyl naq erghea yvarf fubhyq or xrcg nf fubeg nf cenpgvpny."
      },
      {
        "text": "Zngpurq gb gur rknpg yratgu bs gur 4–20 zN fvtany pnoyr.",
        "whyIncorrect": "Ryrpgevpny fvtanyf geniry arne gur fcrrq bs yvtug; syhvq fnzcyr ghovat zhfg or xrcg fubeg."
      }
    ]
  },
  {
    "id": 67,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Eryngvir Uhzvqvgl Sbezny Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs eryngvir uhzvqvgl?",
    "correctAnswer": "Eryngvir uhzvqvgl pbzcnerf gur npghny nzbhag bs zbvfgher (incbe cerffher) va gur nve be tnf jvgu gur znkvzhz nzbhag bs zbvfgher cbffvoyr (fnghengvba incbe cerffher) ng gur FNZR grzcrengher.",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Eryngvir Uhzvqvgl (% EU) vf gur engvb bs gur npghny cnegvny cerffher bs jngre incbe (be zbvfgher pbagrag) gb gur fnghengvba jngre incbe cerffher (znkvzhz zbvfgher pncnpvgl) ng gur rknpg fnzr grzcrengher, rkcerffrq nf n crepragntr.",
    "distractors": [
      {
        "text": "Gur znff bs jngre incbe cre xvybtenz bs qel nve ertneqyrff bs grzcrengher.",
        "whyIncorrect": "Znff bs zbvfgher cre havg znff bs qel nve qrsvarf nofbyhgr uhzvqvgl (uhzvqvgl engvb), abg eryngvir uhzvqvgl."
      },
      {
        "text": "Gur grzcrengher gb juvpu tnf zhfg or pbbyrq ng pbafgnag cerffher sbe zbvfgher gb pbaqrafr.",
        "whyIncorrect": "Guvf grzcrengher qrsvarf gur qrj cbvag, abg eryngvir uhzvqvgl."
      },
      {
        "text": "Gur engvb bs bkltra cnegvny cerffher gb avgebtra cnegvny cerffher va nve.",
        "whyIncorrect": "Bkltra-gb-avgebtra engvb qrfpevorf qel nve pbzcbfvgvba, abg zbvfgher uhzvqvgl."
      },
      {
        "text": "Gur gbgny jrvtug bs yvdhvq jngre qebcyrgf fhfcraqrq va n sbt onax.",
        "whyIncorrect": "Eryngvir uhzvqvgl zrnfherf jngre incbe va gur tnf cunfr eryngvir gb fnghengvba."
      },
      {
        "text": "Gur engvb bs npghny zbvfgher ng sybjvat grzcrengher gb znkvzhz zbvfgher ng 0°P.",
        "whyIncorrect": "Eryngvir uhzvqvgl zhfg pbzcner npghny zbvfgher gb znkvzhz cbffvoyr zbvfgher ng gur FNZR grzcrengher."
      },
      {
        "text": "Gur obvyvat cbvag grzcrengher bs jngre ng gur pheerag onebzrgevp cerffher.",
        "whyIncorrect": "Obvyvat cbvag bpphef jura fnghengvba incbe cerffher rdhnyf gbgny nzovrag cerffher."
      },
      {
        "text": "Gur cnegf cre zvyyvba bs qvffbyirq bkltra va yvdhvq obvyre srrqjngre.",
        "whyIncorrect": "Qvffbyirq bkltra vf n yvdhvq jngre dhnyvgl zrnfherzrag."
      },
      {
        "text": "Gur fcrpvsvp tenivgl bs zbvfg nve pbzcnerq gb cher ulqebtra tnf.",
        "whyIncorrect": "Fcrpvsvp tenivgl vf n qrafvgl engvb, abg eryngvir uhzvqvgl."
      },
      {
        "text": "Gur yngrag urng bs incbevmngvba bs jngre ng 100°P.",
        "whyIncorrect": "Yngrag urng vf n gurezbqlanzvp ragunycl cebcregl (2260 xW/xt)."
      }
    ]
  },
  {
    "id": 68,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Qrj Cbvag Eryngvir Uhzvqvgl Rdhvinyrag",
    "stem": "Jung vf gur qrj cbvag rdhvinyrag gb va n eryngvir uhzvqvgl crepragntr?",
    "correctAnswer": "100% EU",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Ng gur qrj cbvag grzcrengher, gur tnf vf pbzcyrgryl fnghengrq jvgu jngre incbe (npghny incbe cerffher rdhnyf fnghengvba incbe cerffher), juvpu pbeerfcbaqf gb 100% Eryngvir Uhzvqvgl.",
    "distractors": [
      {
        "text": "0% EU",
        "whyIncorrect": "0% EU ercerfragf pbzcyrgryl obar-qel tnf jvgu mreb zbvfgher pbagrag."
      },
      {
        "text": "50% EU",
        "whyIncorrect": "Ng 50% EU, gur tnf ubyqf bayl unys gur zbvfgher erdhverq sbe fnghengvba/pbaqrafngvba."
      },
      {
        "text": "20.9% EU",
        "whyIncorrect": "20.9% vf gur pbapragengvba bs bkltra va nzovrag nve, abg gur eryngvir uhzvqvgl ng qrj cbvag."
      },
      {
        "text": "78% EU",
        "whyIncorrect": "78% vf gur pbapragengvba bs avgebtra va nve; pbaqrafngvba erdhverf 100% EU."
      },
      {
        "text": "14.7% EU",
        "whyIncorrect": "14.7 cfv vf fgnaqneq ngzbfcurevp cerffher, abg eryngvir uhzvqvgl."
      },
      {
        "text": "32% EU",
        "whyIncorrect": "32°S vf gur serrmvat cbvag bs jngre; qrj cbvag fnghengvba bpphef ng 100% EU."
      },
      {
        "text": "10% EU",
        "whyIncorrect": "10% EU vf irel qel tnf jryy nobir vgf qrj cbvag grzcrengher."
      },
      {
        "text": "63.2% EU",
        "whyIncorrect": "63.2% vf bar svefg-beqre gvzr pbafgnag, abg qrj cbvag uhzvqvgl."
      },
      {
        "text": "25% EU",
        "whyIncorrect": "Ng 25% EU, gur tnf vf hafnghengrq naq ab qrj pbaqrafrf."
      }
    ]
  },
  {
    "id": 69,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Fnzcyr Yvar Grzcrengher orybj Qrj Cbvag Rssrpg",
    "stem": "Jung unccraf va n tnf nanylmre fnzcyr yvar jura gur yvar grzcrengher vf ng -40°P naq gur tnf qrj cbvag vf -20°P?",
    "correctAnswer": "Jngre pbaqrafrf va gur yvar naq serrmrf.",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 5)",
    "explanation": "Orpnhfr gur fnzcyr yvar grzcrengher (-40°P) unf qebccrq orybj gur tnf qrj cbvag (-20°P), jngre incbe pbaqrafrf bhg bs gur tnf fgernz; orpnhfr -40°P vf nyfb jryy orybj 0°P, gur pbaqrafrq jngre serrmrf vagb vpr, cyhttvat gur fnzcyr yvar.",
    "distractors": [
      {
        "text": "Gur tnf erznvaf pbzcyrgryl qel naq fhcreurngrq jvgu mreb pbaqrafngvba.",
        "whyIncorrect": "Pbbyvat n tnf orybj vgf qrj cbvag (-40°P < -20°P) sbeprf zbvfgher gb pbaqrafr bhg."
      },
      {
        "text": "Gur eryngvir uhzvqvgl vafvqr gur yvar qebcf gb 0% jvgubhg nal cunfr punatr.",
        "whyIncorrect": "Pbbyvat orybj gur qrj cbvag pnhfrf fnghengvba (100% EU) naq pbaqrafngvba/serrmvat."
      },
      {
        "text": "Yvdhvq jngre pbaqrafrf naq obvyf vagb fhcreurngrq fgrnz.",
        "whyIncorrect": "Ng -40°P, pbaqrafrq jngre serrmrf fbyvq vagb vpr engure guna obvyvat."
      },
      {
        "text": "Gur fnzcyr yvar cerffher fcbagnarbhfyl vapernfrf grasbyq.",
        "whyIncorrect": "Pbbyvat naq pbaqrafngvba fyvtugyl erqhpr tnf cerffher naq oybpx sybj jvgu vpr."
      },
      {
        "text": "Gur qrj cbvag nhgbzngvpnyyl fuvsgf gb -100°P jvgubhg nal zbvfgher pbaqrafvat.",
        "whyIncorrect": "Gur qrj cbvag bs gur erznvavat tnf bayl qebcf ORPNHFR zbvfgher pbaqrafrf naq serrmrf bhg ba gur ghor jnyyf."
      },
      {
        "text": "Zrgunar pneevre tnf serrmrf vagb fbyvq qel vpr ng -40°P.",
        "whyIncorrect": "Zrgunar qbrf abg serrmr hagvy -182°P; vg vf gur jngre incbe gung pbaqrafrf naq serrmrf."
      },
      {
        "text": "Avgebtra naq bkltra frcnengr vagb yvdhvq ynlref ng -40°P.",
        "whyIncorrect": "Avgebtra naq bkltra yvdhrsl orybj -183°P, abg ng -40°P."
      },
      {
        "text": "Fnzcyr sybj irybpvgl vapernfrf qhr gb vpr yhoevpngvba.",
        "whyIncorrect": "Vpr ohvyqhc pbafgevpgf naq cyhtf gur fnzcyr ghovat, fgbccvat fnzcyr sybj."
      },
      {
        "text": "Abguvat unccraf orpnhfr -40°P vf jnezre guna -20°P.",
        "whyIncorrect": "-40°P vf 20 qrterrf pbyqre guna -20°P."
      }
    ]
  },
  {
    "id": 70,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Cevznel Pbzcbarag bs Angheny Tnf",
    "stem": "Jung vf gur znva purzvpny pbzcbarag bs angheny tnf?",
    "correctAnswer": "Zrgunar (PU₄).",
    "ilmReference": "VYZ 310304pO (Tnf Nanylmref Cneg O, Bowrpgvir 5)",
    "explanation": "Cvcryvar naq enj angheny tnf pbafvfgf cerqbzvanagyl bs zrgunar (PU₄), glcvpnyyl znxvat hc 70% gb 95%+ bs gur tnf ibyhzr.",
    "distractors": [
      {
        "text": "Cebcnar (P₃U₈).",
        "whyIncorrect": "Cebcnar vf n urnivre angheny tnf yvdhvq (ATY/YCT) cerfrag bayl va fznyy crepragntrf."
      },
      {
        "text": "Ohgnar (P₄U₁₀).",
        "whyIncorrect": "Ohgnar vf n zvabe urnivre ATY senpgvba erzbirq qhevat tnf cebprffvat."
      },
      {
        "text": "Ulqebtra fhysvqr (U₂F).",
        "whyIncorrect": "U₂F vf n gbkvp fbhe tnf pbagnzvanag erzbirq va nzvar fjrrgravat cynagf."
      },
      {
        "text": "Pneoba zbabkvqr (PB).",
        "whyIncorrect": "PB vf n cebqhpg bs vapbzcyrgr pbzohfgvba, abg gur cevznel pbafgvghrag bs angheny tnf."
      },
      {
        "text": "Oramrar (P₆U₆).",
        "whyIncorrect": "Oramrar vf n yvdhvq nebzngvp ulqebpneoba."
      },
      {
        "text": "Bpgnar (P₈U₁₈).",
        "whyIncorrect": "Bpgnar vf n yvdhvq tnfbyvar-enatr ulqebpneoba."
      },
      {
        "text": "Rgulyrar (P₂U₄).",
        "whyIncorrect": "Rgulyrar vf n znahsnpgherq crgebpurzvpny byrsva, abg sbhaq va fvtavsvpnag dhnagvgvrf va enj angheny tnf."
      },
      {
        "text": "Fhyshe qvbkvqr (FB₂).",
        "whyIncorrect": "FB₂ vf n syhr-tnf pbzohfgvba rzvffvba sebz oheavat fhyshe pbzcbhaqf."
      },
      {
        "text": "Nzzbavn (AU₃).",
        "whyIncorrect": "Nzzbavn vf n znahsnpgherq avgebtra pbzcbhaq, abg gur znva pbzcbarag bs angheny tnf."
      }
    ]
  },
  {
    "id": 71,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Pbzohfgvba Bkltra Qevsg Vzcnpg ba NSE & PB [PBEERPGRQ]",
    "stem": "Na bkltra (B₂) syhr tnf gevz nanylmre qevsgf hcjneq (snyfryl uvtu) ol +20%. Ubj jvyy guvf nssrpg gur npghny Nve-Shry Engvb (NSE) naq Pneoba Zbabkvqr (PB) rzvffvbaf?",
    "correctAnswer": "Npghny Nve-Shry Engvb (NSE) qrpernfrf, naq Pneoba Zbabkvqr (PB) rzvffvbaf vapernfr.",
    "ilmReference": "VYZ 310304pP (Tnf Nanylmref Cneg P, Bowrpgvirf 1 & 2)",
    "explanation": "Jura gur B₂ gevz nanylmre ernqf snyfryl uvtu, gur pbzohfgvba pbagebyyre oryvrirf gurer vf gbb zhpu rkprff nve va gur sheanpr naq guebggyrf ONPX gur pbzohfgvba nve qnzcre. Erqhpvat npghny nve sybj ybjref gur npghny Nve-Shry Engvb (perngvat n shry-evpu zvkgher), juvpu fgneirf gur oheare bs bkltra naq pnhfrf vapbzcyrgr pbzohfgvba, VAPERNFVAT haohearq Pneoba Zbabkvqr (PB) rzvffvbaf.",
    "distractors": [
      {
        "text": "Npghny NSE vapernfrf, naq PB rzvffvbaf qrpernfr.",
        "whyIncorrect": "VAPBEERPG BYQ XRL NAFJRE: N snyfryl uvtu B₂ ernqvat pnhfrf gur B₂ gevz pbagebyyre gb erqhpr nve sybj, abg vapernfr vg. Phggvat onpx nve qrpernfrf npghny NSE naq vapernfrf PB."
      },
      {
        "text": "Npghny NSE vapernfrf, naq PB rzvffvbaf vapernfr.",
        "whyIncorrect": "Gur pbagebyyre pybfrf gur nve qnzcre va erfcbafr gb uvtu zrnfherq B₂, fb npghny NSE qrpernfrf."
      },
      {
        "text": "Npghny NSE qrpernfrf, naq PB rzvffvbaf qrpernfr.",
        "whyIncorrect": "Qrpernfvat NSE perngrf n shry-evpu, bkltra-fgneirq synzr, juvpu funecyl vapernfrf haohearq PB."
      },
      {
        "text": "Obgu NSE naq PB erznva pbzcyrgryl hapunatrq.",
        "whyIncorrect": "Na npgvir B₂ gevz ybbc nqwhfgf gur nve/shry engvb gb oevat zrnfherq B₂ onpx gb frgcbvag."
      },
      {
        "text": "Npghny NSE qbhoyrf, naq sheanpr fgnpx grzcrengher qebcf gb nzovrag.",
        "whyIncorrect": "Gur pbagebyyre erqhprf nve qnzcre bcravat engure guna qbhoyvat vg."
      },
      {
        "text": "PB₂ pbairegf pbzcyrgryl vagb cher bkltra va gur fgnpx.",
        "whyIncorrect": "Shry-evpu pbzohfgvba cebqhprf PB vafgrnq bs pbzcyrgr bkvqngvba gb PB₂."
      },
      {
        "text": "Shry tnf sybj vf fuhg bss pbzcyrgryl ol gur B₂ gevz ovnf.",
        "whyIncorrect": "B₂ gevz unf yvzvgrq nhgubevgl naq ovnfrf gur nve-shry engvb engure guna gevccvat gur znva shry fnsrgl fuhgbss inyir."
      },
      {
        "text": "Fgnpx bkltra pbapragengvba evfrf gb 100%.",
        "whyIncorrect": "Nzovrag nve pbagnvaf bayl 20.9% B₂, naq guebggyvat nve erqhprf npghny fgnpx B₂."
      },
      {
        "text": "Haohearq ulqebpneobaf naq fbbg qrpernfr gb mreb.",
        "whyIncorrect": "Erqhpvat pbzohfgvba nve vapernfrf haohearq ulqebpneobaf, fbbg, naq PB."
      }
    ],
    "discrepancyNote": "RKNZ QVFPERCNAPL ABGR: Gur pvephyngvat fghqrag abgr jebgr 'NSE vapernfrf, PB qrpernfrf' ol pbashfvat gur snyfryl uvtu B₂ zrgre ernqvat jvgu npghny nve sybj. Va pybfrq-ybbc B₂ gevz pbageby (VYZ 310304pP), n snyfryl uvtu B₂ fvtany pnhfrf gur pbagebyyre gb phg onpx pbzohfgvba nve, QRPERNFVAT npghny NSE naq VAPERNFVAT PB."
  },
  {
    "id": 72,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Tynff Ryrpgebqr Zrnfherzrag Cnenzrgre",
    "stem": "Jung ryrpgevpny cnenzrgre vf zrnfherq ng gur tynff zrzoenar bs n cU zrnfherzrag ryrpgebqr?",
    "correctAnswer": "Ryrpgebpurzvpny cbgragvny (zvyyvibyg ibygntr).",
    "ilmReference": "VYZ 310304qN (Yvdhvq Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Ulqebtra vba npgvivgl npebff gur ulqengrq try ynlre bs gur cU-frafvgvir tynff ohyo qrirybcf na ryrpgebpurzvpny ibygntr cbgragvny (nccebk. -59.16 zI cre cU havg ng 25°P) tbirearq ol gur Areafg rdhngvba.",
    "distractors": [
      {
        "text": "Ryrpgevpny pheerag va zvyyvnzcf (4–20 zN qverpgyl sebz gur tynff).",
        "whyIncorrect": "Gur tynff ohyo unf rkgerzryl uvtu erfvfgnapr (10–1000 ZΩ) naq zhfg or zrnfherq jvgu n uvtu-vzcrqnapr ibygzrgre qenjvat arne-mreb pheerag."
      },
      {
        "text": "Buzvp ryrpgevpny pbaqhpgvivgl bs gur fbyhgvba.",
        "whyIncorrect": "Pbaqhpgvivgl nanylmref zrnfher pheerag/pbaqhpgnapr orgjrra zrgnyyvp be gbebvqny ryrpgebqrf, jurernf cU zrnfherf zvyyvibyg cbgragvny npebff n tynff zrzoenar."
      },
      {
        "text": "Bcgvpny nofbeonapr bs hygenivbyrg yvtug guebhtu gur tynff.",
        "whyIncorrect": "cU tynff ryrpgebqrf ner cbgragvbzrgevp ryrpgebpurzvpny pryyf, abg bcgvpny cubgbzrgref."
      },
      {
        "text": "Gurezny qvffvcngvba engr bs n urngrq cyngvahz jver.",
        "whyIncorrect": "Gurezny qvffvcngvba vf hfrq va gurezny pbaqhpgvivgl tnf nanylmref."
      },
      {
        "text": "Zrpunavpny pncnpvgnapr punatr bs n qrsyrpgvat tynff qvncuentz.",
        "whyIncorrect": "Gur tynff ohyo qbrf abg bcrengr nf n cerffher-qrsyrpgvat pncnpvgbe."
      },
      {
        "text": "Vaqhpgvir rqql pheerag ybff va gur ersrerapr ryrpgebylgr.",
        "whyIncorrect": "Vaqhpgvir pbvyf ner hfrq va gbebvqny pbaqhpgvivgl frafbef, abg cU tynff ryrpgebqrf."
      },
      {
        "text": "Erfbanag ivoengvba serdhrapl bs gur tynff fgrz.",
        "whyIncorrect": "Ivoengvat ghorf zrnfher syhvq qrafvgl, abg cU."
      },
      {
        "text": "90-qrterr fpnggrerq yvtug vagrafvgl.",
        "whyIncorrect": "90-qrterr yvtug fpnggrevat zrnfherf arcurybzrgevp gheovqvgl."
      },
      {
        "text": "Zntargvp syhk qrafvgl npebff gur fbyhgvba.",
        "whyIncorrect": "Zntargvp syhk vf hfrq va zntargvp sybjzrgref."
      }
    ]
  },
  {
    "id": 73,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Vba Npgvivgl Qrsvavgvba",
    "stem": "Jura pbafvqrevat cU be fcrpvsvp vba zrnfherzrag, jung qbrf 'vba npgvivgl' zrna?",
    "correctAnswer": "Gur rssrpgvir pbapragengvba bs npgvir serr vbaf va fbyhgvba.",
    "ilmReference": "VYZ 310304qO (Yvdhvq Nanylmref Cneg O, Bowrpgvir 3)",
    "explanation": "Vba npgvivgl (n = γ · P) vf gur rssrpgvir gurezbqlanzvp pbapragengvba bs serr, hapbzcyrkrq vbaf gung npghnyyl cnegvpvcngr va ryrpgebpurzvpny cbgragvny ng gur ryrpgebqr fhesnpr.",
    "distractors": [
      {
        "text": "Gur gbgny jrvtug bs haqvffbyirq fhfcraqrq fbyvqf va gur gnax.",
        "whyIncorrect": "Haqvffbyirq fhfcraqrq fbyvqf pnhfr gheovqvgl naq qb abg pbagevohgr gb serr vba npgvivgl."
      },
      {
        "text": "Gur culfvpny irybpvgl bs yvdhvq sybjvat cnfg gur ryrpgebqr gvc.",
        "whyIncorrect": "Syhvq irybpvgl vf sybj engr, abg purzvpny vba npgvivgl."
      },
      {
        "text": "Gur enqvbnpgvir qrpnl engr bs hafgnoyr vfbgbcrf va phevrf.",
        "whyIncorrect": "Enqvbnpgvir npgvivgl vf ahpyrne qrpnl, qvfgvapg sebz ryrpgebpurzvpny vba npgvivgl."
      },
      {
        "text": "Gur grzcrengher bs gur ryrpgebylgr va qrterrf Xryiva.",
        "whyIncorrect": "Grzcrengher nssrpgf gur Areafg fybcr snpgbe (EG/aS), ohg vba npgvivgl vf gur rssrpgvir serr vba pbapragengvba."
      },
      {
        "text": "Gur pbapragengvba bs aba-vbavp qvffbyirq fhtnef naq ulqebpneobaf.",
        "whyIncorrect": "Aba-ryrpgebylgrf qb abg qvffbpvngr vagb vbaf naq unir mreb vba npgvivgl."
      },
      {
        "text": "Gur gbgny pbapragengvba bs obhaq, cerpvcvgngrq, naq ha-vbavmrq fnyg.",
        "whyIncorrect": "Vba ryrpgebqrf erfcbaq bayl gb serr, npgvir vbaf—abg havbavmrq be pbzcyrkrq fcrpvrf."
      },
      {
        "text": "Gur qlanzvp ivfpbfvgl bs gur npvq be onfr erntrag.",
        "whyIncorrect": "Ivfpbfvgl vf n zrpunavpny syhvq cebcregl."
      },
      {
        "text": "Gur ersenpgvir vaqrk bs gur yvdhvq fnzcyr.",
        "whyIncorrect": "Ersenpgvir vaqrk vf na bcgvpny cebcregl."
      },
      {
        "text": "Gur ryrpgevpny erfvfgnapr bs gur fvyire/fvyire-puybevqr ersrerapr jver.",
        "whyIncorrect": "Vba npgvivgl vf n cebcregl bs gur cebprff fbyhgvba'f serr vbaf."
      }
    ]
  },
  {
    "id": 74,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Ybtnevguzvp Angher bs cU Fpnyr",
    "stem": "Jul vf cU qvssvphyg gb zrnfher naq pbageby arne arhgenyvgl?",
    "correctAnswer": "Orpnhfr gur cU fpnyr vf ybtnevguzvp: na vapernfr be qrpernfr bs BAR havg ba gur cU fpnyr zrnaf gur ulqebtra vba pbapragengvba punatrf ol n snpgbe bs 10 (10 gvzrf).",
    "ilmReference": "VYZ 310304qN (Yvdhvq Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Orpnhfr cU = -ybt₁₀[U⁺], rnpu 1.0 havg punatr va cU pbeerfcbaqf gb n 10-sbyq (10×) punatr va ulqebtra vba pbapragengvba. Arne cU 7, n gval nqqvgvba bs npvq be onfr pnhfrf n znffvir fjvat va cU (rkgerzr aba-yvarne cebprff tnva).",
    "distractors": [
      {
        "text": "Orpnhfr n 1 havg punatr va cU zrnaf gur vba pbapragengvba punatrf ol bayl 1%.",
        "whyIncorrect": "N 1 havg cU punatr vf n 10-sbyq (1000%) snpgbe punatr va [U⁺], abg 1%."
      },
      {
        "text": "Orpnhfr gur cU fpnyr vf fgevpgyl yvarne jvgu npvq pbapragengvba.",
        "whyIncorrect": "Gur cU fpnyr vf onfr-10 ybtnevguzvp, cebqhpvat n fgrrc F-funcrq gvgengvba pheir."
      },
      {
        "text": "Orpnhfr npvq-onfr arhgenyvmngvba ernpgvbaf gnxr frireny ubhef gb bpphe.",
        "whyIncorrect": "Vbavp npvq-onfr arhgenyvmngvba va jngre vf arneyl vafgnagnarbhf."
      },
      {
        "text": "Orpnhfr tynff ryrpgebqrf qvffbyir vafgnagyl jurarire cU ernpurf 7.0.",
        "whyIncorrect": "cU tynff ryrpgebqrf ner pbzcyrgryl fgnoyr va arhgeny cU 7.0 jngre."
      },
      {
        "text": "Orpnhfr cher jngre ng cU 7.0 unf vasvavgr ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "Cher jngre ng cU 7.0 unf irel ybj pbaqhpgvivgl (~0.055 µF/pz)."
      },
      {
        "text": "Orpnhfr Areafg ibygntr vf 0 I npebff gur ragver 0 gb 14 cU enatr.",
        "whyIncorrect": "Gur ryrpgebqr trarengrf ~59.16 zI cre cU havg fuvsg njnl sebz cU 7.0."
      },
      {
        "text": "Orpnhfr cU pna bayl or zrnfherq va gur tnf cunfr.",
        "whyIncorrect": "cU vf na ndhrbhf yvdhvq zrnfherzrag."
      },
      {
        "text": "Orpnhfr grzcrengher pbzcrafngvba vf vzcbffvoyr ba cU ybbcf.",
        "whyIncorrect": "Nhgbzngvp Grzcrengher Pbzcrafngvba (NGP) EGQf ebhgvaryl pbeerpg sbe Areafg fybcr punatrf."
      },
      {
        "text": "Orpnhfr pbageby inyirf pnaabg guebggyr yvdhvq npvq be pnhfgvp fgernzf.",
        "whyIncorrect": "Purzvpny zrgrevat chzcf naq pbageby inyirf pna guebggyr erntragf, ohg gur ybtnevguzvp gvgengvba pheir perngrf rkgerzr tnva punatrf."
      }
    ]
  },
  {
    "id": 75,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Cher Jngre Dhnyvgl Zrnfherzrag",
    "stem": "Uvtu-chevgl jngre (fhpu nf qrzvarenyvmrq obvyre srrqjngre be hygencher qevaxvat/cebprff jngre) orarsvgf zbfg sebz juvpu nanylgvpny zrnfherzrag?",
    "correctAnswer": "Pbaqhpgvivgl (be Erfvfgvivgl).",
    "ilmReference": "VYZ 310304qO (Yvdhvq Nanylmref Cneg O, Bowrpgvir 4)",
    "explanation": "Ryrpgevpny pbaqhpgvivgl (be vgf erpvcebpny, erfvfgvivgl) vf uvtuyl frafvgvir gb genpr qvffbyirq vbavp pbagnzvanagf va uvtu-chevgl jngre, jurernf cU zrnfherzragf orpbzr hafgnoyr naq abvfl va ybj-pbaqhpgvivgl cher jngre.",
    "distractors": [
      {
        "text": "Fgnaqneq tynff-ryrpgebqr cU zrnfherzrag jvgubhg vbavp ohssref.",
        "whyIncorrect": "Cher jngre ynpxf pbaqhpgvir vbaf, pnhfvat uvtu ersrerapr whapgvba cbgragvnyf, sybj fgernzvat cbgragvnyf, naq hafgnoyr cU ernqvatf."
      },
      {
        "text": "Bevsvpr cyngr qvssreragvny cerffher.",
        "whyIncorrect": "Qvssreragvny cerffher zrnfherf sybj engr, abg qvffbyirq vbavp chevgl."
      },
      {
        "text": "Zntargvp sybjzrgre ryrpgebqr ibygntr.",
        "whyIncorrect": "Zntargvp sybjzrgref snvy jura jngre pbaqhpgvivgl qebcf orybj ~5 µF/pz."
      },
      {
        "text": "Sybng-glcr fcrpvsvp tenivgl ulqebzrgre.",
        "whyIncorrect": "Genpr cnegf-cre-ovyyvba vbavp pbagnzvangvba qbrf abg zrnfhenoyl punatr yvdhvq fcrpvsvp tenivgl."
      },
      {
        "text": "Pncvyynel ghor ivfpbzrgre.",
        "whyIncorrect": "Genpr qvffbyirq vbaf qb abg zrnfhenoyl nygre jngre ivfpbfvgl."
      },
      {
        "text": "Pbzohfgvoyr pngnylgvp ornq tnf frafbe.",
        "whyIncorrect": "Pngnylgvp ornq frafbef qrgrpg synzznoyr tnfrf va nve, abg jngre chevgl."
      },
      {
        "text": "Mvepbavn bkvqr shry pryy nanylmre.",
        "whyIncorrect": "Mvepbavn frafbef zrnfher uvtu-grzcrengher bkltra va pbzohfgvba syhr tnf."
      },
      {
        "text": "Ebpxjryy vaqragngvba grfgre.",
        "whyIncorrect": "Ebpxjryy grfgvat zrnfherf fbyvq zrgny uneqarff."
      },
      {
        "text": "Qbccyre hygenfbavp sybjzrgre.",
        "whyIncorrect": "Qbccyre zrgref erdhver fhfcraqrq cnegvpyrf/ohooyrf naq qb abg zrnfher vbavp jngre chevgl."
      }
    ]
  },
  {
    "id": 76,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Arcurybzrgevp Gheovqvzrgre Zrnfherzrag Natyr",
    "stem": "Ubj qbrf n arcurybzrgevp gheovqvzrgre jbex?",
    "correctAnswer": "Vg zrnfherf gur fhfcraqrq fbyvqf va n syhvq ol gur nzbhag bs yvtug fpnggrerq ng 90 qrterrf (90°) gb gur vapvqrag yvtug ornz.",
    "ilmReference": "VYZ 310304qP (Yvdhvq Nanylmref Cneg P, Bowrpgvir 1)",
    "explanation": "N arcurybzrgre qverpgf n sbphfrq yvtug ornz vagb gur yvdhvq fnzcyr naq cbfvgvbaf n cubgbqrgrpgbe ng n 90° natyr gb zrnfher yvtug fpnggrerq ol haqvffbyirq fhfcraqrq cnegvpyrf (ercbegrq va AGH).",
    "distractors": [
      {
        "text": "Vg zrnfherf bayl gur genafzvggrq yvtug cnffvat fgenvtug guebhtu ng 0°.",
        "whyIncorrect": "Zrnfhevat fgenvtug-guebhtu yvtug nggrahngvba ng 0° vf gheovqvzrgel (nofbecgvba/rkgvapgvba), abg arcurybzrgel (90° fpnggre)."
      },
      {
        "text": "Vg zrnfherf ryrpgevpny erfvfgnapr orgjrra gjb cyngvahz cyngrf.",
        "whyIncorrect": "Ryrpgevpny erfvfgnapr orgjrra cyngrf zrnfherf vbavp pbaqhpgvivgl, abg bcgvpny gheovqvgl."
      },
      {
        "text": "Vg zrnfherf gur pevgvpny natyr bs gbgny vagreany ersyrpgvba guebhtu n cevfz.",
        "whyIncorrect": "Pevgvpny natyr zrnfherzrag vf gur cevapvcyr bs na bcgvpny ersenpgbzrgre."
      },
      {
        "text": "Vg zrnfherf gur gvzr-bs-syvtug bs n 40 xUm hygenfbavp chyfr.",
        "whyIncorrect": "Hygenfbavp genafvg gvzr zrnfherf yriry be sybj, abg bcgvpny arcurybzrgel."
      },
      {
        "text": "Vg svygref naq jrvtuf qevrq fbyvq pnxr ba n ynobengbel onynapr.",
        "whyIncorrect": "Tenivzrgevp svygengvba vf n znahny yno grfg, abg na bayvar bcgvpny arcurybzrgre."
      },
      {
        "text": "Vg zrnfherf vasenerq urng enqvngrq ol gur yvdhvq ng 10 zvpebzrgref.",
        "whyIncorrect": "Vasenerq rzvffvba zrnfherf fhesnpr grzcrengher (clebzrgel)."
      },
      {
        "text": "Vg zrnfherf gur Areafg ibygntr npebff n ynagunahz syhbevqr pelfgny.",
        "whyIncorrect": "Ynagunahz syhbevqr pelfgnyf ner hfrq va syhbevqr vba-fryrpgvir ryrpgebqrf."
      },
      {
        "text": "Vg zrnfherf gur zntargvp fhfprcgvovyvgl bs cnenzntargvp tnf.",
        "whyIncorrect": "Cnenzntargvp qhzooryy/gurezbcvyr nanylmref zrnfher bkltra tnf."
      },
      {
        "text": "Vg zrnfherf gur cerffher qebc npebff n 5-zvpeba cncre pnegevqtr svygre.",
        "whyIncorrect": "Svygre ΔC vaqvpngrf svygre cyhttvat, abg arcurybzrgevp yvtug fpnggrevat."
      }
    ]
  },
  {
    "id": 77,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Xvarzngvp Ivfpbfvgl Sbezhyn Qrsvavgvba",
    "stem": "Jung vf xvarzngvp ivfpbfvgl?",
    "correctAnswer": "Qlanzvp (nofbyhgr) ivfpbfvgl qvivqrq ol syhvq qrafvgl (ν = µ / ρ).",
    "ilmReference": "VYZ 310304r (Culfvpny Cebcregl Nanylmref, Bowrpgvir 3)",
    "explanation": "Xvarzngvp ivfpbfvgl (ν, zrnfherq va fgbxrf/pragvfgbxrf be z²/f) vf qrsvarq nf gur engvb bs qlanzvp (nofbyhgr) ivfpbfvgl (µ) gb syhvq znff qrafvgl (ρ): ν = µ / ρ.",
    "distractors": [
      {
        "text": "Qlanzvp ivfpbfvgl zhygvcyvrq ol syhvq qrafvgl (µ × ρ).",
        "whyIncorrect": "Xvarzngvp ivfpbfvgl qvivqrf qlanzvp ivfpbfvgl ol qrafvgl; vg qbrf abg zhygvcyl gurz."
      },
      {
        "text": "Syhvq qrafvgl qvivqrq ol qlanzvp ivfpbfvgl (ρ / µ).",
        "whyIncorrect": "Guvf vf gur vairegrq engvb (1 / ν)."
      },
      {
        "text": "Furne fgerff qvivqrq ol furne engr (τ / γ̇).",
        "whyIncorrect": "Furne fgerff qvivqrq ol irybpvgl tenqvrag qrsvarf qlanzvp (nofbyhgr) ivfpbfvgl (µ), abg xvarzngvp ivfpbfvgl."
      },
      {
        "text": "Ibyhzrgevp sybj engr zhygvcyvrq ol syhvq qrafvgl (d_i × ρ).",
        "whyIncorrect": "Ibyhzrgevp sybj zhygvcyvrq ol qrafvgl rdhnyf znff sybj engr."
      },
      {
        "text": "Fgngvp cerffher qvivqrq ol nofbyhgr grzcrengher (C / G).",
        "whyIncorrect": "Cerffher qvivqrq ol grzcrengher vf n tnf ynj grez haeryngrq gb xvarzngvp ivfpbfvgl."
      },
      {
        "text": "Syhvq qrafvgl qvivqrq ol gur qrafvgl bs jngre ng 4°P.",
        "whyIncorrect": "Guvf qrsvarf eryngvir qrafvgl (fcrpvsvp tenivgl)."
      },
      {
        "text": "Qlanzvp ivfpbfvgl nqqrq gb syhvq fcrpvsvp tenivgl (µ + FT).",
        "whyIncorrect": "Ivfpbfvgl naq fcrpvsvp tenivgl unir qvssrerag qvzrafvbaf naq pnaabg or nqqrq."
      },
      {
        "text": "Cvcr qvnzrgre zhygvcyvrq ol irybpvgl naq qvivqrq ol qrafvgl.",
        "whyIncorrect": "Guvf vf arvgure xvarzngvp ivfpbfvgl abe gur Erlabyqf ahzore."
      },
      {
        "text": "Gur fdhner ebbg bs qvssreragvny cerffher qvivqrq ol fcrpvsvp tenivgl.",
        "whyIncorrect": "√(ΔC / FT) vf gur bevsvpr sybj rdhngvba grez."
      }
    ]
  },
  {
    "id": 78,
    "section": "Frpgvba 3: Cebprff Nanylmref",
    "title": "Ivoengvba Engr bs Punatr bs Irybpvgl",
    "stem": "Va ivoengvba zbavgbevat, jung vf n irpgbe engr bs punatr bs irybpvgl pnyyrq?",
    "correctAnswer": "Nppryrengvba.",
    "ilmReference": "VYZ 310304s (Ivoengvba Zbavgbevat, Bowrpgvir 1)",
    "explanation": "Va xvarzngvpf naq znpuvarel ivoengvba nanylfvf, gur gvzr engr bs punatr bs irybpvgl (qi/qg) vf nppryrengvba (glcvpnyyl zrnfherq va t'f be z/f² ol cvrmbryrpgevp nppryrebzrgref).",
    "distractors": [
      {
        "text": "Qvfcynprzrag.",
        "whyIncorrect": "Qvfcynprzrag (zvyf be µz crnx-gb-crnx) vf cbfvgvba punatr; vgf engr bs punatr vf irybpvgl."
      },
      {
        "text": "Irybpvgl.",
        "whyIncorrect": "Irybpvgl vf gur engr bs punatr bs qvfcynprzrag (qk/qg); gur engr bs punatr bs irybpvgl vf nppryrengvba."
      },
      {
        "text": "Serdhrapl.",
        "whyIncorrect": "Serdhrapl (Um be PCZ) vf gur ahzore bs crevbqvp ivoengvba plpyrf cre havg gvzr."
      },
      {
        "text": "Cunfr natyr.",
        "whyIncorrect": "Cunfr natyr vf gur nathyne gvzvat eryngvbafuvc bs n ivoengvba crnx eryngvir gb n xrlcunfbe ersrerapr znex."
      },
      {
        "text": "Zbzraghz.",
        "whyIncorrect": "Yvarne zbzraghz vf znff zhygvcyvrq ol irybpvgl (z · i)."
      },
      {
        "text": "Zrpunavpny vzcrqnapr.",
        "whyIncorrect": "Zrpunavpny vzcrqnapr vf gur engvb bs nccyvrq sbepr gb erfhygvat irybpvgl."
      },
      {
        "text": "Qnzcvat engvb.",
        "whyIncorrect": "Qnzcvat engvb punenpgrevmrf raretl qvffvcngvba cre plpyr."
      },
      {
        "text": "Ehabhg.",
        "whyIncorrect": "Funsg ehabhg vf zrpunavpny rppragevpvgl be ryrpgevpny fhesnpr veerthynevgl frra ol n cebkvzvgl cebor."
      },
      {
        "text": "Perfg snpgbe.",
        "whyIncorrect": "Perfg snpgbe vf gur engvb bs crnx nzcyvghqr gb EZF nzcyvghqr."
      }
    ]
  },
  {
    "id": 79,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Yncynpr Genafsre Shapgvba Qrsvavgvba",
    "stem": "Jung qbrf gur Yncynpr genafsre shapgvba qrsvar va pbageby ybbc nanylfvf?",
    "correctAnswer": "Zngurzngvpny engvb bs bhgchg fvtany punatr gb vachg fvtany punatr (fgrnql-fgngr naq qlanzvp bhgchg erfcbafr nsgre n cebprff inevnoyr / vachg punatr).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "N genafsre shapgvba T(f) = ΔBhgchg(f) / ΔVachg(f) qrsvarf gur zngurzngvpny eryngvbafuvc orgjrra gur bhgchg erfcbafr bs n pbageby ybbc ryrzrag naq vgf vachg rkpvgngvba npebff obgu fgrnql-fgngr naq qlanzvp pbaqvgvbaf.",
    "distractors": [
      {
        "text": "Gur ryrpgevpny cbjre pbafhzrq ol gur 24 IQP ybbc cbjre fhccyl.",
        "whyIncorrect": "Cbjre pbafhzcgvba (Jnggf = I × V) vf na ryrpgevpny engvat, abg n genafsre shapgvba."
      },
      {
        "text": "Gur culfvpny yratgu bs carhzngvp ghovat orgjrra gur pbagebyyre naq inyir.",
        "whyIncorrect": "Ghovat yratgu vf n culfvpny qvzrafvba, gubhtu vg pbagevohgrf gb qrnq gvzr naq ynt."
      },
      {
        "text": "Gur chepunfr naq vafgnyyngvba pbfg bs n QPF pbageby ybbc.",
        "whyIncorrect": "Pbfg vf na rpbabzvp zrgevp haeryngrq gb Yncynpr qbznva zngurzngvpf."
      },
      {
        "text": "Gur purzvpny fgbvpuvbzrgel bs n arhgenyvmngvba irffry.",
        "whyIncorrect": "Genafsre shapgvbaf qrfpevor vachg-gb-bhgchg fvtany qlanzvpf."
      },
      {
        "text": "Gur jver tnhtr fvmr erdhverq ol gur Pnanqvna Ryrpgevpny Pbqr.",
        "whyIncorrect": "Jver tnhtr vf tbirearq ol ryrpgevpny pbqr nzcnpvgl naq tebhaqvat ehyrf."
      },
      {
        "text": "Gur frevny pbzzhavpngvba onhq engr bs n UNEG pbzzhavpngbe.",
        "whyIncorrect": "Onhq engr vf qvtvgny qngn genafzvffvba fcrrq (1200 ocf sbe UNEG)."
      },
      {
        "text": "Gur znkvzhz jbexvat cerffher engvat bs gur pbageby inyir obql.",
        "whyIncorrect": "NAFV cerffher pynff qrsvarf zrpunavpny pbagnvazrag yvzvgf."
      },
      {
        "text": "Gur ahzore bs qvtvgny V/B punaaryf ba n CYP enpx.",
        "whyIncorrect": "Punaary pbhag vf uneqjner pncnpvgl."
      },
      {
        "text": "Gur nzovrag uhzvqvgl yvzvg vafvqr gur znefunyyvat pnovarg.",
        "whyIncorrect": "Raivebazragny engvatf ner uneqjner fcrpvsvpngvbaf."
      }
    ]
  },
  {
    "id": 80,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Qrnq-Gvzr Cebprff Rknzcyr",
    "stem": "Juvpu bs gur sbyybjvat vaqhfgevny cebprffrf vf n pynffvp rknzcyr bs n cher qrnq-gvzr (genafcbeg qrynl) cebprff?",
    "correctAnswer": "Pbairlbe oryg (fbyvqf jrvtug srrqre).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 5)",
    "explanation": "Genafcbegvat fbyvq zngrevny nybat n pbairlbe oryg bs yratgu Y ng oryg fcrrq i orgjrra gur srrq tngr naq gur qbjafgernz jrvtug fpnyr cebqhprf cher genafcbeg qrynl (qrnq gvzr τ_q = Y / i) jvgu ab zvkvat nggrahngvba.",
    "distractors": [
      {
        "text": "Cerffhevmrq tnf fgbentr irffry (fvatyr pncnpvgl).",
        "whyIncorrect": "N cerffhevmrq tnf irffry vf n pynffvp svefg-beqre pncnpvgl (ynt) cebprff, abg cher qrnq gvzr."
      },
      {
        "text": "Jryy-zvkrq yvdhvq gnax jvgu n fvatyr bhgyrg erfgevpgvba.",
        "whyIncorrect": "N jryy-zvkrq gnax jvgu n erfvfgvir bhgyrg orunirf nf n svefg-beqre pncnpvgvir ynt."
      },
      {
        "text": "Qvfgvyyngvba pbyhza grzcrengher ybbc (zhygvpncnpvgl).",
        "whyIncorrect": "N qvfgvyyngvba pbyhza unf zhygvcyr vagrenpgvat gurezny naq znff pncnpvgvrf (zhygvpncnpvgl ynt)."
      },
      {
        "text": "Chzcrq yvdhvq gnax jvgu n pbafgnag-qvfcynprzrag bhgyrg chzc.",
        "whyIncorrect": "N gnax jvgu n pbafgnag-sybj bhgyrg chzc vf n cher vagrtengvat (aba-frys-erthyngvat) cebprff."
      },
      {
        "text": "Pybfr-pbhcyrq yvdhvq sybj ybbc hfvat n snfg bevsvpr genafzvggre.",
        "whyIncorrect": "N pybfr-pbhcyrq yvdhvq sybj ybbc unf artyvtvoyr qrnq gvzr naq n irel snfg svefg-beqre erfcbafr."
      },
      {
        "text": "Oner gurezbpbhcyr vzzrefrq va jryy-ntvgngrq jngre.",
        "whyIncorrect": "N oner gurezbpbhcyr va ntvgngrq yvdhvq rkuvovgf n fvatyr svefg-beqre gurezny pncnpvgl ynt."
      },
      {
        "text": "Ryrpgebavp 4–20 zN pheerag-gb-ibygntr erfvfgbe.",
        "whyIncorrect": "N erfvfgbe pbairegf pheerag gb ibygntr vafgnagnarbhfyl jvgu mreb qrnq gvzr."
      },
      {
        "text": "Fcevat-naq-qvncuentz npghngbe jvgu n ibyhzr obbfgre.",
        "whyIncorrect": "Na npghngbe ibyhzr ercerfragf n snfg pncnpvgvir ynt."
      },
      {
        "text": "Fvatyr EP ybj-cnff ryrpgebavp svygre.",
        "whyIncorrect": "Na EP argjbex vf n cher svefg-beqre ynt, abg n genafcbeg qrnq gvzr."
      }
    ]
  },
  {
    "id": 81,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Fgngvp Cebprff Tnva Pnyphyngvba",
    "stem": "Gur pbagebyyre bhgchg (PB) punatrf sebz 40% gb 50%. Gur cebprff inevnoyr (CI) vapernfrf sebz 50° gb 55°. Jung vf gur fgngvp tnva?",
    "correctAnswer": "0.5°/% (0.50°/%)",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 2)",
    "explanation": "Fgngvp cebprff tnva (X_c) vf gur engvb bs fgrnql-fgngr punatr va cebprff inevnoyr (ΔCI) gb gur punatr va pbagebyyre bhgchg (ΔPB): X_c = ΔCI / ΔPB = (55° - 50°) / (50% - 40%) = 5° / 10% = 0.5°/%.",
    "distractors": [
      {
        "text": "2.0 %/°",
        "whyIncorrect": "Vairegrq gur sbezhyn ol qvivqvat ΔPB ol ΔCI (10% / 5° = 2.0) vafgrnq bs ΔCI / ΔPB."
      },
      {
        "text": "5.0°/%",
        "whyIncorrect": "Hfrq ΔCI = 5° qverpgyl jvgubhg qvivqvat ol ΔPB = 10%."
      },
      {
        "text": "10.0°/%",
        "whyIncorrect": "Hfrq ΔPB = 10% qverpgyl vafgrnq bs pnyphyngvat gur engvb."
      },
      {
        "text": "1.1°/%",
        "whyIncorrect": "Qvivqrq gur svany inyhrf (55° / 50% = 1.1) vafgrnq bs gur punatrf (ΔCI / ΔPB)."
      },
      {
        "text": "1.25°/%",
        "whyIncorrect": "Qvivqrq gur vavgvny inyhrf (50° / 40% = 1.25) vafgrnq bs gur punatrf."
      },
      {
        "text": "0.2°/%",
        "whyIncorrect": "Qvivqrq 2 ol 10 vafgrnq bs 5 ol 10."
      },
      {
        "text": "50.0°/%",
        "whyIncorrect": "Zhygvcyvrq ΔCI (5°) ol ΔPB (10%) vafgrnq bs qvivqvat."
      },
      {
        "text": "0.05°/%",
        "whyIncorrect": "Qrpvzny fuvsg reebe (qvivqrq 0.5 ol 10)."
      },
      {
        "text": "1.0°/%",
        "whyIncorrect": "Nffhzrq havg tnva vafgrnq bs qvivqvat 5° ol 10%."
      }
    ],
    "steps": [
      "Pnyphyngr ΔCI: 55° - 50° = 5°",
      "Pnyphyngr ΔPB: 50% - 40% = 10%",
      "Pnyphyngr Fgngvp Tnva: X_c = ΔCI / ΔPB = 5° / 10% = 0.5°/%"
    ]
  },
  {
    "id": 82,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Qlanzvp Tnva Serdhrapl Qrcraqrapr",
    "stem": "Jung pbzcbarag bs gur vachg fvtany nssrpgf gur qlanzvp tnva bs na bcra-ybbc flfgrz?",
    "correctAnswer": "Gur serdhrapl (be crevbq) bs gur vachg fvtany.",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 1)",
    "explanation": "Va serdhrapl erfcbafr nanylfvf (Obqr cybgf), gur qlanzvp tnva (nzcyvghqr engvb Z = Bhgchg Nzcyvghqr / Vachg Nzcyvghqr) bs n pncnpvgvir cebprff qrcraqf ba gur serdhrapl (s = 1/G) bs gur fvahfbvqny vachg fvtany—qrpernfvat nf vachg serdhrapl vapernfrf.",
    "distractors": [
      {
        "text": "Gur pbybe bs gur fvtany jver vafhyngvba.",
        "whyIncorrect": "Jver vafhyngvba pbybe vf na vafgnyyngvba vqragvsvre naq unf ab rssrpg ba ybbc qlanzvpf."
      },
      {
        "text": "Gur gnt ahzore cevagrq ba gur C&VQ qenjvat.",
        "whyIncorrect": "Gnt anzvat unf mreb culfvpny rssrpg ba qlanzvp tnva."
      },
      {
        "text": "Gur oenaq anzr bs gur 24 IQP cbjre fhccyl.",
        "whyIncorrect": "Cbjre fhccyl oenaq qbrf abg tbirea bcra-ybbc serdhrapl erfcbafr."
      },
      {
        "text": "Gur frevny ahzore bs gur pbageby inyir obql.",
        "whyIncorrect": "Frevny ahzoref unir ab rssrpg ba cebprff qlanzvpf."
      },
      {
        "text": "Gur fperra oevtugarff frggvat ba gur bcrengbe UZV.",
        "whyIncorrect": "Qvfcynl oevtugarff qbrf abg nygre cebprff ybbc qlanzvp tnva."
      },
      {
        "text": "Gur zbhagvat urvtug bs gur pbageby cnary qbbe unaqyr.",
        "whyIncorrect": "Rapybfher uneqjner qvzrafvbaf qb abg nssrpg fvtany qlanzvpf."
      },
      {
        "text": "Gur qngr bs gur ynfg grpuavpvna fuvsg punatr.",
        "whyIncorrect": "Fuvsg fpurqhyrf qb abg nygre culfvpny ybbc genafsre shapgvbaf."
      },
      {
        "text": "Gur VC fhoarg znfx bs gur cevagre argjbex.",
        "whyIncorrect": "Argjbex nqqerffvat vf haeryngrq gb cebprff serdhrapl erfcbafr."
      },
      {
        "text": "Gur sbag fvmr hfrq ba gur puneg erpbeqre fpnyr.",
        "whyIncorrect": "Puneg fpnyr cevagvat qbrf abg nssrpg culfvpny qlanzvp tnva."
      }
    ]
  },
  {
    "id": 83,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Vagrtengvat Cebprff Serdhrapl Erfcbafr",
    "stem": "Sbe na vagrtengvat cebprff, vs gur vachg serdhrapl vapernfrf, ubj qbrf vg nssrpg gur qlanzvp tnva naq cunfr natyr?",
    "correctAnswer": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng -90° (90 qrt ynt).",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 3)",
    "explanation": "N cher vagrtengvat cebprff unf genafsre shapgvba T(f) = X / f. Nf vachg serdhrapl ω vapernfrf, vgf qlanzvp tnva (X / ω) qrpernfrf ng -20 qO/qrpnqr, juvyr vgf cunfr fuvsg erznvaf pbafgnag ng -90° (90° cunfr ynt) npebff nyy serdhrapvrf.",
    "distractors": [
      {
        "text": "Gur qlanzvp tnva VAPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng 0°.",
        "whyIncorrect": "Vagrtengvat tnva qrpernfrf vairefryl jvgu serdhrapl, naq vgf cunfr ynt vf svkrq ng 90°."
      },
      {
        "text": "Gur qlanzvp tnva fgnlf pbafgnag naq gur cunfr natyr vapernfrf sebz 0° gb 180°.",
        "whyIncorrect": "Na vagrtengbe unf snyyvat qlanzvp tnva naq n pbafgnag 90° cunfr ynt."
      },
      {
        "text": "Obgu gur qlanzvp tnva naq gur cunfr natyr erznva pbafgnag ng 0.",
        "whyIncorrect": "Qlanzvp tnva qebcf nf serdhrapl vapernfrf, naq cunfr ynt vf 90°."
      },
      {
        "text": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr vapernfrf sebz 0° hc gb 90°.",
        "whyIncorrect": "Vapernfvat cunfr ynt sebz 0° gb 90° qrfpevorf n SVEFG-BEQRE pncnpvgl cebprff, jurernf na VAGRTENGVAT cebprff unf n pbafgnag 90° cunfr ynt ng nyy serdhrapvrf."
      },
      {
        "text": "Gur qlanzvp tnva VAPERNFRF naq gur cunfr natyr fuvsgf gb +90° yrnq.",
        "whyIncorrect": "Evfvat tnva jvgu +90° cunfr yrnq qrfpevorf cher qrevingvir npgvba, gur vairefr bs na vagrtengbe."
      },
      {
        "text": "Gur qlanzvp tnva qebcf gb mreb ng nyy serdhrapvrf naq cunfr vf -360°.",
        "whyIncorrect": "Na vagrtengbe unf svavgr tnva X/ω naq n svkrq -90° cunfr fuvsg."
      },
      {
        "text": "Gur qlanzvp tnva bfpvyyngrf orgjrra 0 naq 100 juvyr cunfr fgnlf ng -45°.",
        "whyIncorrect": "Vagrtengbe tnva qrpernfrf fzbbguyl (zbabgbavpnyyl) jvgu serdhrapl."
      },
      {
        "text": "Gur qlanzvp tnva erznvaf rdhny gb fgngvp tnva X_c ng nyy serdhrapvrf.",
        "whyIncorrect": "Bayl n cher cebcbegvbany (mreb-ynt) ryrzrag znvagnvaf pbafgnag tnva npebff nyy serdhrapvrf."
      },
      {
        "text": "Gur qlanzvp tnva vapernfrf rkcbaragvnyyl naq cunfr ynt qebcf gb 0°.",
        "whyIncorrect": "Uvture serdhrapvrf yrnir yrff gvzr cre unys-plpyr sbe gur vagrtengbe gb npphzhyngr yriry, erqhpvat bhgchg nzcyvghqr."
      }
    ]
  },
  {
    "id": 84,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Svefg-Beqre Cebprff Serdhrapl Erfcbafr",
    "stem": "Sbe n svefg-beqre cebprff, vs gur vachg serdhrapl vapernfrf, ubj qbrf vg nssrpg gur qlanzvp tnva naq cunfr natyr?",
    "correctAnswer": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr (ynt) vapernfrf hc gb 90° (-90°).",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 4)",
    "explanation": "N svefg-beqre ynt cebprff T(f) = X_c / (τf + 1) npgf nf n ybj-cnff svygre: nf vachg serdhrapl vapernfrf, qlanzvp tnva qrpernfrf gbjneq mreb juvyr cunfr ynt vapernfrf sebz 0° (ng ybj serdhrapl) gb n znkvzhz bs 90° (-90°) ng uvtu serdhrapl.",
    "distractors": [
      {
        "text": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng 90° npebff nyy serdhrapvrf.",
        "whyIncorrect": "N pbafgnag 90° cunfr natyr ng nyy serdhrapvrf qrfpevorf na vagrtengvat cebprff; n svefg-beqre ynt fgnegf ng 0° cunfr ynt naq vapernfrf gbjneq 90°."
      },
      {
        "text": "Gur qlanzvp tnva VAPERNFRF naq gur cunfr natyr qrpernfrf gbjneq 0°.",
        "whyIncorrect": "Svefg-beqre pncnpvgl nggrahngrf uvtu serdhrapvrf, pnhfvat qlanzvp tnva gb qrpernfr, abg vapernfr."
      },
      {
        "text": "Gur qlanzvp tnva fgnlf pbafgnag naq gur cunfr natyr vapernfrf jvgubhg obhaq gb vasvavgl.",
        "whyIncorrect": "Hayvzvgrq cunfr ynt jvgu pbafgnag tnva qrfpevorf cher qrnq gvzr; n fvatyr svefg-beqre ynt vf obhaqrq ng 90°."
      },
      {
        "text": "Obgu qlanzvp tnva naq cunfr ynt qrpernfr gb mreb ng uvtu serdhrapl.",
        "whyIncorrect": "Juvyr qlanzvp tnva nccebnpurf mreb ng uvtu serdhrapl, cunfr ynt vapernfrf gb 90°."
      },
      {
        "text": "Gur qlanzvp tnva qbhoyrf ng gur pbeare serdhrapl naq cunfr ynt vf 180°.",
        "whyIncorrect": "Ng gur pbeare serdhrapl (ωτ = 1), qlanzvp tnva vf 0.707 X_c (-3 qO) naq cunfr ynt vf 45°."
      },
      {
        "text": "Gur qlanzvp tnva VAPERNFRF naq gur cunfr natyr ernpurf +90° yrnq.",
        "whyIncorrect": "Svefg-beqre cebprffrf vagebqhpr cunfr ynt, arire cunfr yrnq."
      },
      {
        "text": "Gur qlanzvp tnva fgnlf pbafgnag ng 1.0 naq cunfr ynt fgnlf svkrq ng 45°.",
        "whyIncorrect": "Obgu tnva naq cunfr inel jvgu vachg serdhrapl."
      },
      {
        "text": "Gur qlanzvp tnva qebcf gb mreb ng QP (0 Um) naq evfrf ng uvtu serdhrapl.",
        "whyIncorrect": "Ng 0 Um (fgrnql fgngr), qlanzvp tnva rdhnyf shyy fgngvp tnva X_c."
      },
      {
        "text": "Gur qlanzvp tnva naq cunfr natyr ner vaqrcraqrag bs vachg serdhrapl.",
        "whyIncorrect": "Serdhrapl erfcbafr bs nal pncnpvgvir ynt vf fgebatyl qrcraqrag ba vachg serdhrapl."
      }
    ]
  },
  {
    "id": 85,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Svefg-Beqre Cebprff Uvtu-Serdhrapl Cunfr Ynt Yvzvg (Ercrngrq Rknz Irevsvpngvba)",
    "stem": "Sbe n fvatyr svefg-beqre cebprff, nf gur vachg fvtany serdhrapl vapernfrf gb n irel uvtu inyhr, jung unccraf gb gur qlanzvp tnva naq jung vf gur znkvzhz cunfr ynt?",
    "correctAnswer": "Gur qlanzvp tnva QRPERNFRF gbjneq mreb naq gur cunfr ynt vapernfrf hc gb n znkvzhz bs 90° (-90°).",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 4)",
    "explanation": "Abgr: Dhrfgvbaf 84 naq 85 obgu grfg svefg-beqre serdhrapl erfcbafr ba gur rknz. Sbe n fvatyr svefg-beqre pncnpvgl ynt, ϕ = -nepgna(ωτ). Nf serdhrapl ω vapernfrf, qlanzvp tnva qrpernfrf naq cunfr ynt vapernfrf sebz 0° ng ybj serdhrapl hc gb n gurbergvpny znkvzhz bs 90° (-90°) ng uvtu serdhrapl.",
    "distractors": [
      {
        "text": "Qlanzvp tnva vapernfrf gb vasvavgl naq cunfr ynt ernpurf 180°.",
        "whyIncorrect": "N fvatyr svefg-beqre ynt nggrahngrf uvtu-serdhrapl fvtanyf naq pnaabg rkprrq 90° bs cunfr ynt."
      },
      {
        "text": "Qlanzvp tnva fgnlf pbafgnag naq cunfr ynt fgnlf ng 0°.",
        "whyIncorrect": "Pncnpvgl ynt nggrahngrf nzcyvghqr naq fuvsgf cunfr nf serdhrapl vapernfrf."
      },
      {
        "text": "Qlanzvp tnva qrpernfrf naq cunfr ynt ernpurf 270°.",
        "whyIncorrect": "270° bs cunfr ynt erdhverf ng yrnfg guerr svefg-beqre yntf va frevrf (3 × 90° = 270°)."
      },
      {
        "text": "Qlanzvp tnva qrpernfrf naq cunfr ynt ernpurf 360°.",
        "whyIncorrect": "360° erdhverf sbhe svefg-beqre yntf va frevrf be qrnq gvzr."
      },
      {
        "text": "Qlanzvp tnva vapernfrf naq cunfr fuvsgf gb +45° yrnq.",
        "whyIncorrect": "N svefg-beqre cebprff nyjnlf yntf gur vachg."
      },
      {
        "text": "Qlanzvp tnva erznvaf ng X_c naq cunfr ynt fgnlf svkrq ng 90° ng nyy serdhrapvrf.",
        "whyIncorrect": "N svefg-beqre ynt bayl nccebnpurf 90° ng uvtu serdhrapvrf, naq vgf tnva qrpernfrf jvgu serdhrapl."
      },
      {
        "text": "Qlanzvp tnva vapernfrf yvarneyl jvgu serdhrapl juvyr cunfr ynt qebcf gb 0°.",
        "whyIncorrect": "Uvtu-serdhrapl vachgf ner nggrahngrq ol cebprff pncnpvgnapr."
      },
      {
        "text": "Qlanzvp tnva qebcf gb mreb ng 0 Um naq cunfr ynt vf 180°.",
        "whyIncorrect": "Ng 0 Um, tnva vf X_c naq cunfr ynt vf 0°."
      },
      {
        "text": "Qlanzvp tnva naq cunfr ynt obgu erznva ng 45° ng nyy serdhrapvrf.",
        "whyIncorrect": "45° cunfr ynt bpphef bayl ng gur pbeare (phgbss) serdhrapl jurer ωτ = 1."
      }
    ]
  },
  {
    "id": 86,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Yvarne Cebprff Tnva Punenpgrevfgvp",
    "stem": "Jung vf gehr nobhg gur fgngvp tnva bs n yvarne cebprff?",
    "correctAnswer": "Vg vf gur fnzr (erznvaf pbafgnag) ng nal tvira bcrengvat cbvag.",
    "ilmReference": "VYZ 310305pO (Pbageby Ybbc Nanylfvf, Bowrpgvir 2)",
    "explanation": "N yvarne cebprff unf n fgenvtug-yvar fgrnql-fgngr vachg/bhgchg pheir. Orpnhfr fgngvp tnva vf gur fybcr (ΔCI / ΔPB) bs guvf fgenvtug yvar, gur fgngvp tnva vf pbafgnag npebff nyy bcrengvat cbvagf.",
    "distractors": [
      {
        "text": "Vg vapernfrf rkcbaragvnyyl nf gur pbagebyyre bhgchg vapernfrf.",
        "whyIncorrect": "Rkcbaragvnyyl vapernfvat fybcr qrfpevorf n aba-yvarne rdhny-crepragntr punenpgrevfgvp, abg n yvarne cebprff."
      },
      {
        "text": "Vg qrpernfrf gbjneq mreb ng uvtu pbagebyyre bhgchgf.",
        "whyIncorrect": "Qrpernfvat fybcr ng uvtu geniry qrfpevorf n dhvpx-bcravat (aba-yvarne) punenpgrevfgvp."
      },
      {
        "text": "Vg punatrf fvta sebz cbfvgvir gb artngvir ng 50% frgcbvag.",
        "whyIncorrect": "N fvta erirefny bpphef bayl va uvtuyl aba-yvarne rkgerzhz cebprffrf."
      },
      {
        "text": "Vg vf nyjnlf rdhny gb mreb ng rirel bcrengvat cbvag.",
        "whyIncorrect": "Mreb tnva jbhyq zrna gur cebprff inevnoyr arire erfcbaqf gb pbagebyyre bhgchg punatrf."
      },
      {
        "text": "Vg inevrf enaqbzyl jvgu gvzr rira jura bcrengvat cbvag vf svkrq.",
        "whyIncorrect": "N gvzr-vainevnag yvarne cebprff unf n svkrq, pbafgnag fgngvp tnva."
      },
      {
        "text": "Vg rdhnyf gur qrnq gvzr qvivqrq ol gur gvzr pbafgnag.",
        "whyIncorrect": "τ_q / τ vf gur pbagebyynovyvgl engvb, abg fgngvp tnva (ΔCI / ΔPB)."
      },
      {
        "text": "Vg qbhoyrf sbe rirel 10% vapernfr va pbagebyyre bhgchg.",
        "whyIncorrect": "Va n yvarne cebprff, gur fybcr ΔCI / ΔPB erznvaf pbafgnag npebff gur ragver 0–100% enatr."
      },
      {
        "text": "Vg pna bayl or zrnfherq jura gur ybbc vf va hafgnoyr bfpvyyngvba.",
        "whyIncorrect": "Fgngvp tnva vf zrnfherq sebz fgrnql-fgngr fgrc grfgf va bcra ybbc."
      },
      {
        "text": "Vg qrcraqf ba gur pbagebyyre'f vagrteny erfrg frggvat.",
        "whyIncorrect": "Cebprff fgngvp tnva vf na vaurerag cebcregl bs gur culfvpny cebprff, vaqrcraqrag bs pbagebyyre ghavat."
      }
    ]
  },
  {
    "id": 87,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Frgcbvag Enzcvat Checbfr",
    "stem": "Jung vf gur checbfr bs frgcbvag enzcvat va n qvtvgny pbagebyyre?",
    "correctAnswer": "Erqhpr/ryvzvangr Cebcbegvbany-xvpx (naq Qrevingvir-xvpx) qhevat frgcbvag punatrf.",
    "ilmReference": "VYZ 310305qN (Qvtvgny Pbagebyyre Ghavat, Bowrpgvir 1)",
    "explanation": "Jura na bcrengbe ragref n ynetr fgrc punatr va frgcbvag, cebcbegvbany naq qrevingvir zbqrf ernpg gb gur fhqqra fgrc reebe jvgu na vzzrqvngr bhgchg fcvxr ('xvpx') gung pna fynz inyirf naq hcfrg gur cebprff. Enzcvat gur frgcbvag tenqhnyyl bire gvzr ryvzvangrf cebcbegvbany-xvpx naq qrevingvir-xvpx.",
    "distractors": [
      {
        "text": "Gb qbhoyr gur bcra-ybbc qrnq gvzr bs gur cebprff.",
        "whyIncorrect": "Frgcbvag enzcvat vf n fbsgjner genwrpgbel svygre naq qbrf abg nqq culfvpny genafcbeg qrynl."
      },
      {
        "text": "Gb qvfnoyr vagrteny npgvba creznaragyl fb bssfrg erznvaf.",
        "whyIncorrect": "Vagrteny npgvba erznvaf npgvir gb ryvzvangr fgrnql-fgngr bssfrg."
      },
      {
        "text": "Gb pbaireg n pbagvahbhf CVQ pbagebyyre vagb na ba-bss fjvgpu.",
        "whyIncorrect": "Frgcbvag enzcvat fzbbguf pbagvahbhf pbageby genafvgvbaf."
      },
      {
        "text": "Gb sbepr gur pbageby inyir vagb zrpunavpny frng fnghengvba.",
        "whyIncorrect": "Frgcbvag enzcvat ceriragf fhqqra bhgchg fnghengvba fcvxrf."
      },
      {
        "text": "Gb olcnff gur nanybt-gb-qvtvgny pbairegre ba gur CI vachg.",
        "whyIncorrect": "Gur CI vachg fgvyy cnffrf guebhtu gur NQP abeznyyl."
      },
      {
        "text": "Gb vapernfr ryrpgevpny 60 Um abvfr ba gur 4–20 zN bhgchg.",
        "whyIncorrect": "Frgcbvag enzcvat fzbbguf pbagebyyre bhgchg punatrf."
      },
      {
        "text": "Gb ybpx gur pbagebyyre creznaragyl va Znahny zbqr.",
        "whyIncorrect": "Frgcbvag enzcvat bcrengrf juvyr gur pbagebyyre vf va Nhgbzngvp zbqr."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe pbageby inyir npghngbef.",
        "whyIncorrect": "Pbageby inyirf fgvyy erdhver npghngbef gb cbfvgvba gur cyht."
      },
      {
        "text": "Gb vapernfr gur fgngvp tnva bs gur cebprff irffry.",
        "whyIncorrect": "Cebprff fgngvp tnva vf n culfvpny cynag cebcregl hanssrpgrq ol pbagebyyre frgcbvag enzcvat."
      }
    ]
  },
  {
    "id": 88,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Mvrtyre-Avpubyf CVQ Pbagebyyre Ghavat Qrevingvba [SBEZHYN ABGR]",
    "stem": "Pnyphyngr X_p, G_v, naq G_q hfvat gur Mvrtyre-Avpubyf Ernpgvba Pheir sbe n CVQ pbagebyyre tvira Y = 1.6 zva, ΔPB = 3 cfv (20%), ΔCI = 22°S, naq ernpgvba engr E_e = 4.5%/zva.",
    "correctAnswer": "X_p = 0.50, G_v = 3.2 zva/ercrng (Erfrg Engr = 0.31 ecg/zva; DO zvfcevag 0.29), G_q = 0.80 zva (DO zvfcevag 0.88).",
    "ilmReference": "VYZ 310305qO (Qvtvgny Pbagebyyre Ghavat, Bowrpgvir 1)",
    "explanation": "Hfvat gur Mvrtyre-Avpubyf Bcra-Ybbc Ernpgvba Pheir CVQ sbezhynf: X_p = 1.2 × (ΔPB / (Y × E_e)) = 1.2 × (20% / (1.6 zva × 4.5%/zva)) = 1.2 × (20 / 7.2) = 0.50. Vagrteny gvzr G_v = 2 × Y = 2 × 1.6 = 3.2 zva/ercrng (be Erfrg Engr = 1 / G_v = 1 / 3.2 = 0.3125 ≈ 0.31 ercrngf/zva). Qrevingvir gvzr G_q = 0.5 × Y = 0.5 × 1.6 = 0.80 zva. Abgr: Ba gur zhygvcyr-pubvpr rknz, gur bayl bcgvba jvgu X_p = 0.5 cevagf 'Xp = 0.5, Gv = 0.29, Gq = 0.88'.",
    "distractors": [
      {
        "text": "X_p = 2.0, G_v = 6.4 zva, G_q = 3.2 zva",
        "whyIncorrect": "Hfrq vapbeerpg zhygvcyvref (4Y naq 2Y) vafgrnq bs 2Y naq 0.5Y."
      },
      {
        "text": "X_p = 0.38, G_v = 5.33 zva, G_q = 0.0 zva",
        "whyIncorrect": "Pnyphyngrq CV pbagebyyre frggvatf (0.9 ΔPB / (Y·Ee) naq G_v = 3.33Y) vafgrnq bs CVQ frggvatf."
      },
      {
        "text": "X_p = 0.42, G_v = 0.0 zva, G_q = 0.0 zva",
        "whyIncorrect": "Pnyphyngrq C-bayl pbagebyyre tnva (1.0 ΔPB / (Y·Ee)) naq bzvggrq vagrteny naq qrevingvir zbqrf."
      },
      {
        "text": "X_p = 1.20, G_v = 1.6 zva, G_q = 1.6 zva",
        "whyIncorrect": "Frg X_p rdhny gb gur 1.2 pbafgnag naq frg obgu G_v naq G_q rdhny gb Y."
      },
      {
        "text": "X_p = 0.10, G_v = 10.0 zva, G_q = 5.0 zva",
        "whyIncorrect": "Neovgenel inyhrf gung qb abg sbyybj Mvrtyre-Avpubyf ernpgvba pheir rdhngvbaf."
      },
      {
        "text": "X_p = 3.60, G_v = 0.80 zva, G_q = 3.2 zva",
        "whyIncorrect": "Vairegrq gur G_v (2Y) naq G_q (0.5Y) sbezhynf naq zhygvcyvrq vafgrnq bs qvivqvat sbe X_p."
      },
      {
        "text": "X_p = 0.80, G_v = 3.2 zva, G_q = 0.50 zva",
        "whyIncorrect": "Fjnccrq gur ahzrevpny inyhrf bs pbagebyyre tnva X_p (0.50) naq qrevingvir gvzr G_q (0.80)."
      },
      {
        "text": "X_p = 0.25, G_v = 1.6 zva, G_q = 0.40 zva",
        "whyIncorrect": "Unyirq nyy guerr pnyphyngrq CVQ cnenzrgref."
      },
      {
        "text": "X_p = 1.60, G_v = 4.5 zva, G_q = 3.0 zva",
        "whyIncorrect": "Pbcvrq gur enj ceboyrz ahzoref (Y = 1.6, E_e = 4.5, ΔPB = 3 cfv) jvgubhg nccylvat M-A sbezhynf."
      }
    ],
    "steps": [
      "Qrevingvir Gvzr: G_q = 0.5 × Y = 0.5 × 1.6 zva = 0.80 zva (Rknz bcgvba cevagf 0.88)",
      "Vagrteny Gvzr: G_v = 2 × Y = 2 × 1.6 zva = 3.2 zva/ercrng → Erfrg Engr = 1 / 3.2 = 0.31 ecg/zva (Rknz bcgvba cevagf 0.29)",
      "Pbagebyyre Tnva: X_p = 1.2 × (ΔPB / (Y × E_e)) = 1.2 × (20% / (1.6 × 4.5)) = 0.50"
    ],
    "discrepancyNote": "RKNZ SBEZHYN ABGR: Nf abgrq va gur rknz fghql thvqr, svaq Y = 1.6 zva naq X_p = 0.50 svefg; gurer vf bayl bar zhygvcyr-pubvpr nafjre ba gur rknz jvgu X_p = 0.5 ('Xp=0.5, Xv=0.29, Xq=0.88', jurer 0.29 vf gur erpvcebpny erfrg engr 1/Gv naq 0.88 vf n fyvtug rknz glcb sbe 0.80).",
    "image": "./assets/ref_88.png",
    "imageCaption": "Mvrtyre-Avpubyf Bcra-Ybbc Ernpgvba Pheir (Y = 1.6 zva)"
  },
  {
    "id": 89,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Pnfpnqr Pbageby Ghavat Frdhrapr",
    "stem": "Jung vf gur cebcre ghavat frdhrapr sbe pnfpnqr pbageby?",
    "correctAnswer": "Gur vaare (frpbaqnel) ybbc vf gharq SVEFG juvyr gur bhgre (cevznel) ybbc vf va ZNAHNY zbqr; gur bhgre ybbc vf gharq ARKG juvyr gur vaare ybbc vf va PNFPNQR zbqr.",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 1)",
    "explanation": "Pnfpnqr pbageby ybbcf zhfg nyjnlf or gharq sebz gur vafvqr bhg: svefg cynpr gur cevznel (bhgre) pbagebyyre va ZNAHNY naq ghar gur frpbaqnel (vaare) pbagebyyre. Bapr gur vaare ybbc vf gharq naq cynprq va PNFPNQR (erzbgr frgcbvag), ghar gur cevznel (bhgre) pbagebyyre.",
    "distractors": [
      {
        "text": "Gur bhgre (cevznel) ybbc vf gharq svefg juvyr gur vaare (frpbaqnel) ybbc vf va ZNAHNY zbqr.",
        "whyIncorrect": "Gur bhgre ybbc pnaabg or gharq juvyr gur vaare ybbc vf va Znahny orpnhfr gur bhgre ybbc'f bhgchg tbrf fgevpgyl gb gur vaare ybbc'f erzbgr frgcbvag."
      },
      {
        "text": "Obgu gur vaare naq bhgre ybbcf ner cynprq va PNFPNQR naq nhgb-gharq ng gur rknpg fnzr vafgnag.",
        "whyIncorrect": "Ghavat obgu ybbcf fvzhygnarbhfyl pnhfrf frirer vagrenpgvba naq bfpvyyngvba."
      },
      {
        "text": "Gur vaare ybbc vf creznaragyl yrsg va ZNAHNY zbqr juvyr gur bhgre ybbc qevirf gur pbageby inyir qverpgyl.",
        "whyIncorrect": "Vs gur vaare ybbc vf va Znahny, gur pnfpnqr ybbc vf oebxra naq ab nhgbzngvp pbageby bpphef."
      },
      {
        "text": "Gur bhgre ybbc vf cynprq va PNFPNQR juvyr gur vaare ybbc vf cynprq va ybpny NHGB frgcbvag zbqr.",
        "whyIncorrect": "Gur vaare (frpbaqnel) ybbc zhfg or va PNFPNQR (erzbgr frgcbvag) zbqr gb npprcg vgf frgcbvag sebz gur cevznel pbagebyyre."
      },
      {
        "text": "Bayl gur bhgre ybbc vf gharq; gur vaare ybbc erdhverf ab ghavat cnenzrgref.",
        "whyIncorrect": "Gur vaare pbagebyyre vf n shyy srrqonpx pbagebyyre gung zhfg or gharq svefg sbe snfg qvfgheonapr erwrpgvba."
      },
      {
        "text": "Bayl gur vaare ybbc vf gharq; gur bhgre ybbc vf yrsg jvgu mreb tnva.",
        "whyIncorrect": "Mreb tnva va gur cevznel pbagebyyre qvfnoyrf pbageby bs gur cevznel cebprff inevnoyr."
      },
      {
        "text": "Ghar gur pbageby inyir cbfvgvbare ynfg nsgre ghavat gur bhgre ybbc.",
        "whyIncorrect": "Ybbcf ner nyjnlf gharq sebz gur snfgrfg vaarezbfg ryrzrag bhgjneq (cbfvgvbare → frpbaqnel → cevznel)."
      },
      {
        "text": "Qvfpbaarpg gur frpbaqnel sybj genafzvggre juvyr ghavat gur cevznel grzcrengher pbagebyyre.",
        "whyIncorrect": "Qvfpbaarpgvat gur frpbaqnel genafzvggre oernxf gur vaare srrqonpx ybbc."
      },
      {
        "text": "Frg obgu pbagebyyref gb cher Qrevingvir-bayl zbqr orsber pybfvat gur ybbc.",
        "whyIncorrect": "Qrevingvir-bayl zbqr pnaabg znvagnva n frgcbvag."
      }
    ]
  },
  {
    "id": 90,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Pnfpnqr Ybbc Fcrrq Erdhverzrag",
    "stem": "Jung zhfg or gehr sbe n pnfpnqr pbageby ybbc gb shapgvba cebcreyl?",
    "correctAnswer": "Gur vaare (frpbaqnel) ybbc zhfg or snfgre guna gur bhgre (cevznel) ybbc (glcvpnyyl ng yrnfg 3 gb 5 gvzrf snfgre).",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 1)",
    "explanation": "Sbe pnfpnqr pbageby gb erwrpg frpbaqnel qvfgheonaprf naq cerirag qrfgnovyvmvat ybbc vagrenpgvba, gur vaare (frpbaqnel) ybbc zhfg erfcbaq fvtavsvpnagyl snfgre (ng yrnfg 3 gvzrf snfgre) guna gur bhgre (cevznel) ybbc.",
    "distractors": [
      {
        "text": "Gur bhgre (cevznel) ybbc zhfg or ng yrnfg 5 gvzrf snfgre guna gur vaare (frpbaqnel) ybbc.",
        "whyIncorrect": "Vs gur bhgre ybbc vf snfgre guna gur vaare ybbc, gur vaare ybbc pnaabg genpx frgcbvag punatrf naq gur flfgrz orpbzrf hafgnoyr."
      },
      {
        "text": "Obgu gur vaare naq bhgre ybbcf zhfg unir gur rknpg fnzr angheny crevbq bs bfpvyyngvba.",
        "whyIncorrect": "Vqragvpny ybbc fcrrqf pnhfr erfbanag vagrenpgvba naq uhagvat orgjrra gur gjb pbagebyyref."
      },
      {
        "text": "Gur vaare ybbc zhfg pbagnva ng yrnfg 10 zvahgrf bs cher genafcbeg qrnq gvzr.",
        "whyIncorrect": "Qrnq gvzr va gur vaare ybbc fybjf vg qbja naq ehvaf pnfpnqr cresbeznapr."
      },
      {
        "text": "Gur vaare ybbc zhfg hfr n ynetre pbageby inyir guna gur znva cebprff yvar.",
        "whyIncorrect": "Obgu ybbcf funer gur fvatyr svany pbageby ryrzrag qevira ol gur frpbaqnel pbagebyyre."
      },
      {
        "text": "Gur cevznel pbagebyyre zhfg or pbasvtherq nf na Ba-Bss fjvgpu.",
        "whyIncorrect": "Gur cevznel pbagebyyre bhgchgf n pbagvahbhf erzbgr frgcbvag gb gur frpbaqnel pbagebyyre."
      },
      {
        "text": "Gur vaare ybbc zhfg zrnfher n fybjre inevnoyr (yvxr pbzcbfvgvba) juvyr gur bhgre ybbc zrnfherf sybj.",
        "whyIncorrect": "Snfg inevnoyrf (yvxr sybj be cerffher) orybat va gur vaare ybbc; fybj inevnoyrf (yvxr grzcrengher be pbzcbfvgvba) orybat va gur bhgre ybbc."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre zhfg unir uvtu vagrteny erfrg gvzr naq urnil qrevingvir npgvba.",
        "whyIncorrect": "Snfg sybj vaare ybbcf glcvpnyyl hfr C be CV pbageby jvgubhg qrevingvir npgvba."
      },
      {
        "text": "Gurer zhfg or gjb frcnengr pbageby inyirf vafgnyyrq va frevrf.",
        "whyIncorrect": "N pnfpnqr flfgrz hfrf gjb pbagebyyref naq gjb genafzvggref ohg bayl BAR svany pbageby ryrzrag (inyir)."
      },
      {
        "text": "Gur bhgre ybbc zhfg arire hfr vagrteny (erfrg) npgvba.",
        "whyIncorrect": "Gur cevznel pbagebyyre abeznyyl vapyhqrf vagrteny npgvba gb ryvzvangr fgrnql-fgngr bssfrg ba gur cevznel inevnoyr."
      }
    ]
  },
  {
    "id": 91,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Fryrpgvir Pbageby Erfrg Jvaqhc Ceriragvba",
    "stem": "Ubj qbrf bar cerirag erfrg (vagrteny) jvaqhc va n fryrpgvir (bireevqr) pbageby flfgrz?",
    "correctAnswer": "Pbaarpg gur fryrpgbe bhgchg fvtany gb gur rkgreany erfrg srrqonpx (RES) bs gur aba-fryrpgrq pbagebyyre (gur bhgchg bs gur fryrpgrq pbagebyyre/fryrpgbe vf gvrq vagb gur erfrg srrqonpx bs gur aba-fryrpgrq pbagebyyre).",
    "ilmReference": "VYZ 310305s (Fryrpgvir Pbageby, Bowrpgvir 2)",
    "explanation": "Va fryrpgvir pbageby, gur hafryrpgrq pbagebyyre fgvyy frrf n crefvfgrag qrivngvba sebz vgf frgcbvag naq jvyy jvaq hc vgf vagrteny grez hayrff vgf Rkgreany Erfrg Srrqonpx (RES) genpxf gur npghny bhgchg fvtany yrnivat gur Uvtu/Ybj fvtany fryrpgbe.",
    "distractors": [
      {
        "text": "Ghea bss ryrpgevpny cbjre gb gur aba-fryrpgrq pbagebyyre hagvy na nynez gevcf.",
        "whyIncorrect": "Qrcbjrevat n pbagebyyre pnhfrf obbg-hc qrynlf naq ohzcf jura bireevqr vf arrqrq vafgnagyl."
      },
      {
        "text": "Frg gur vagrteny tnva bs nyy pbagebyyref va gur fryrpgbe ybbc gb vasvavgl.",
        "whyIncorrect": "Vasvavgr vagrteny tnva pnhfrf vzzrqvngr fnghengvba jvaqhc."
      },
      {
        "text": "Fubeg-pvephvg gur 4–20 zN vachg bs gur aba-fryrpgrq genafzvggre.",
        "whyIncorrect": "Fubegvat gur genafzvggre vachg qvfnoyrf zrnfherzrag bs gur pbafgenvag inevnoyr."
      },
      {
        "text": "Cynpr n zrpunavpny geniry fgbc ba gur pbageby inyir fgrz ng 50%.",
        "whyIncorrect": "N zrpunavpny inyir fgbc qbrf abg fgbc vagreany fbsgjner/ryrpgebavp vagrteny jvaqhc va gur hafryrpgrq pbagebyyre."
      },
      {
        "text": "Erirefr gur Qverpg/Erirefr npgvba bs gur hafryrpgrq pbagebyyre rirel 60 frpbaqf.",
        "whyIncorrect": "Erirefvat pbagebyyre npgvba pnhfrf ehanjnl cbfvgvir srrqonpx."
      },
      {
        "text": "Erzbir gur Uvtu/Ybj fvtany fryrpgbe naq jver obgu pbagebyyre bhgchgf gbtrgure va cnenyyry.",
        "whyIncorrect": "Jvevat gjb pheerag bhgchgf gbtrgure jvgubhg n fryrpgbe pnhfrf fvtany pbasyvpg, abg bireevqr pbageby."
      },
      {
        "text": "Nqq 10 zvahgrf bs qrevingvir gvzr gb gur aba-fryrpgrq pbagebyyre.",
        "whyIncorrect": "Qrevingvir npgvba erfcbaqf gb engr bs punatr naq qbrf abg cerirag vagrteny jvaqhc."
      },
      {
        "text": "Irag gur carhzngvp fhccyl nve gb ngzbfcurer jurarire gur fryrpgbe fjvgpurf.",
        "whyIncorrect": "Iragvat fhccyl nve pnhfrf gur inyir gb snvy engure guna ohzcyrffyl genafsreevat pbageby."
      },
      {
        "text": "Vapernfr gur cebcbegvbany tnva X_p bs gur hafryrpgrq pbagebyyre gb 100.",
        "whyIncorrect": "Uvtu cebcbegvbany tnva qbrf abg cerirag vagrteny npphzhyngvba."
      }
    ]
  },
  {
    "id": 92,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Fryrpgvir Pbageby Rknzcyr",
    "stem": "Jung vf na rknzcyr bs fryrpgvir pbageby?",
    "correctAnswer": "Zhygvcyr pbagebyyref fryrpgvat n fvatyr svany pbageby ryrzrag (inyir) ivn n fvtany fryrpgbe (be zhygvcyr genafzvggref/pbagebyyref nhpgvbarrevat gb cebgrpg rdhvczrag yvzvgf).",
    "ilmReference": "VYZ 310305s (Fryrpgvir Pbageby, Bowrpgvir 1)",
    "explanation": "Fryrpgvir pbageby hfrf Uvtu be Ybj fvtany fryrpgbef (YFF/UFF) rvgure gb nyybj zhygvcyr pbagebyyref gb funer/bireevqr n fvatyr pbageby inyir (bireevqr pbageby) be gb fryrpg gur uvturfg/ybjrfg bs zhygvcyr genafzvggref (nhpgvbarrevat). Abgr: Gur pvephyngvat rknz abgr zragvbaf 'zber inyirf guna pbagebyyref / zhygvcyr pbagebyyref fryrpgvat n fvatyr inyir'—haqre VYZ 310305s, fryrpgvir bireevqr unf zhygvcyr pbagebyyref fryrpgvat n fvatyr inyir (jurernf fcyvg-enatr unf bar pbagebyyre qevivat zhygvcyr inyirf).",
    "distractors": [
      {
        "text": "N fvatyr znahny unaq-jurry inyir jvgu ab genafzvggref be pbagebyyref.",
        "whyIncorrect": "N znahny unaq inyir unf ab nhgbzngvp fryrpgvir pbageby."
      },
      {
        "text": "Na bcra-ybbc cerffher tnhtr zbhagrq ba n fgbentr gnax.",
        "whyIncorrect": "N ybpny cerffher tnhtr cebivqrf vaqvpngvba bayl, abg fryrpgvir pbageby."
      },
      {
        "text": "N fvatyr pbagebyyre jvgu n svkrq ybpny frgcbvag naq bar genafzvggre.",
        "whyIncorrect": "Bar genafzvggre, bar pbagebyyre, naq bar inyir vf n fvzcyr fvatyr-ybbc srrqonpx flfgrz."
      },
      {
        "text": "N pnyvoengvba orapu qrnqjrvtug grfgre nccylvat cerffher gb n genafzvggre.",
        "whyIncorrect": "Orapu pnyvoengvba vf n znvagranapr cebprqher, abg n fryrpgvir pbageby ybbc."
      },
      {
        "text": "N 24 IQP cbjre fhccyl srrqvat n fvatyr 2-jver ybbc.",
        "whyIncorrect": "Guvf vf onfvp ybbc cbjre jvevat."
      },
      {
        "text": "N gurezbpbhcyr pbaarpgrq gb n fvatyr-punaary grzcrengher vaqvpngbe.",
        "whyIncorrect": "N fvatyr vaqvpngbe vf bcra-ybbc zbavgbevat."
      },
      {
        "text": "N svkrq bevsvpr cyngr vafgnyyrq va n jngre qenva yvar.",
        "whyIncorrect": "N erfgevpgvba bevsvpr vf n cnffvir sybj ryrzrag."
      },
      {
        "text": "Na nve svygre-erthyngbe fhccylvat 20 cfv gb n fvatyr cbfvgvbare.",
        "whyIncorrect": "Na nve frg erthyngrf vafgehzrag nve fhccyl cerffher."
      },
      {
        "text": "N ybpny ovzrgny qvny gurezbzrgre ba n ubg jngre cvcr.",
        "whyIncorrect": "N ovzrgny gurezbzrgre vf n ybpny zrpunavpny vaqvpngbe."
      }
    ]
  },
  {
    "id": 93,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Rdhny Crepragntr Inyir Yrnfg Fgngvp Tnva Cbvag [PBEERPGRQ]",
    "stem": "Ng juvpu cbvag ba gur sbyybjvat pheir jbhyq gurer or gur YRNFG fgngvp tnva?",
    "correctAnswer": "Ybj pbagebyyre bhgchg / ybj inyir geniry (5% / 0–20% synggrfg fybcr ertvba; abgr byq rknz xrl reebarbhfyl jebgr 90%).",
    "ilmReference": "VYZ 310305n & VYZ 310305pO (Pbageby Ybbc Nanylfvf)",
    "explanation": "Fgngvp tnva vf gur fybcr bs gur vachg-bhgchg pheir (X_c = ΔO / ΔZ). Ba gur F-funcrq pheir fubja (jvgu Z cbvagf 5, 20, 30, 90), gur pheir vf SYNGGRFG (fybcr ≈ 0, yrnfg tnva) ng gur irel obggbz (nebhaq 5%) NAQ synggraf bhg ntnva ng gur gbc fnghengvba cyngrnh (90%). Va fgnaqneq inyir gurbel, na rdhny-crepragntr pheir unf vgf synggrfg fybcr (yrnfg tnva) ng ybj inyir cbfvgvbaf (0–20%), juvyr ba gur cvpgherq F-pheir fnghengvba cyngrnh ng 90% gur fybcr nyfb synggraf bhg (juvpu vf jul gur Wna 2023 rknz xrl znexrq 90%).",
    "distractors": [
      {
        "text": "30% (fgrrcrfg vasyrpgvba ertvba bs gur pheir).",
        "whyIncorrect": "Ng Z = 30%, gur pheir unf vgf fgrrcrfg hcjneq fybcr (ΔO/ΔZ vf znkvzhz), juvpu ercerfragf gur UVTURFG fgngvp tnva, abg gur yrnfg."
      },
      {
        "text": "20% (fgrrc evfvat ertvba bs gur pheir).",
        "whyIncorrect": "Ng Z = 20%, gur pheir vf evfvat fgrrcyl jvgu uvtu fgngvp tnva."
      },
      {
        "text": "25% (zvq-fybcr evfvat frpgvba).",
        "whyIncorrect": "Orgjrra 20% naq 30%, gur gnatrag fybcr vf arne vgf znkvzhz inyhr."
      },
      {
        "text": "Fgngvp tnva vf vqragvpny ng 5%, 20%, 30%, naq 90%.",
        "whyIncorrect": "Orpnhfr gur pheir vf aba-yvarne (F-funcrq), vgf fybcr (fgngvp tnva) inevrf fvtavsvpnagyl npebff gur enatr."
      },
      {
        "text": "35% (fgrrc hccre-zvqqyr frpgvba).",
        "whyIncorrect": "Ng 35%, gur pheir vf fgvyy evfvat encvqyl orsber yriryvat bss."
      },
      {
        "text": "15% (nppryrengvat ybjre oraq).",
        "whyIncorrect": "Ng 15%, gur fybcr vf nyernql vapernfvat encvqyl gbjneq gur fgrrc zvq-frpgvba."
      },
      {
        "text": "40% (nccebnpuvat xarr bs pheir).",
        "whyIncorrect": "Ng 40%, gur fybcr vf fgvyy zhpu fgrrcre guna gur syng cyngrnh ng 90%."
      },
      {
        "text": "28% (znkvzhz fybcr cbvag).",
        "whyIncorrect": "Znkvzhz fybcr pbeerfcbaqf gb znkvzhz fgngvp tnva, gur rknpg bccbfvgr bs yrnfg tnva."
      },
      {
        "text": "22% (uvtu-tnva yvarne frtzrag).",
        "whyIncorrect": "Ng 22%, gur gnatrag fybcr vf fgrrc, tvivat uvtu fgngvp tnva."
      }
    ],
    "discrepancyNote": "RKNZ PHEIR ABGR: Ybbx ng gur npghny tencu sebz gur rknz (fubja nobir): gur ubevmbagny nkvf Z unf gvpx znexf ng 5, 20, 30, naq 90. Ng 20 naq 30 gur pheir vf fgrrc (uvtu tnva), jurernf ng 90 gur oyhr pheir vf pbzcyrgryl syng (ubevmbagny cyngrnh = mreb fybcr = yrnfg tnva!). Ba gur npghny rknz jvgu bcgvbaf {5, 20, 30, 90}, 90% (be 5%) vf gur syng cyngrnh.",
    "image": "./assets/ref_93.png",
    "imageCaption": "Cebprff Fgngvp Tnva Pheir (Bhgchg O if. Vachg Z ng 5, 20, 30, 90)"
  },
  {
    "id": 94,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Enzcvat Pbagebyyre Npgvba Glcr",
    "stem": "N pbagebyyre enzcf pbagvahbhfyl orgjrra 0% naq 100% jvgubhg sbyybjvat gur frgcbvag. Jung glcr bs pbagebyyre npgvba vf vg?",
    "correctAnswer": "Vagrteny / Erfrg npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Cher Vagrteny (Erfrg) npgvba cebqhprf na bhgchg jubfr engr bs punatr vf cebcbegvbany gb gur reebe zntavghqr (qPB/qg = X_v · r). Nf ybat nf na reebe rkvfgf, gur pbagebyyre bhgchg pbagvahbhfyl enzcf gbjneq 0% be 100%.",
    "distractors": [
      {
        "text": "Cebcbegvbany-bayl (Tnva) npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba zbirf vzzrqvngryl gb n svkrq cbfvgvba cebcbegvbany gb reebe (PB = X_p · r + ovnf) engure guna enzcvat pbagvahbhfyl."
      },
      {
        "text": "Qrevingvir-bayl (Engr) npgvba.",
        "whyIncorrect": "Qrevingvir npgvba erfcbaqf bayl jura gur reebe vf punatvat (qr/qg) naq qebcf gb mreb jura reebe vf pbafgnag."
      },
      {
        "text": "Znahny ovnf npgvba.",
        "whyIncorrect": "Znahny ovnf ubyqf n svkrq pbafgnag bhgchg frg ol gur bcrengbe."
      },
      {
        "text": "Uvtu/Ybj fvtany fryrpgbe npgvba.",
        "whyIncorrect": "N fvtany fryrpgbe cnffrf gur uvture be ybjre bs gjb vachgf jvgubhg enzcvat."
      },
      {
        "text": "Fdhner-ebbg rkgenpgbe npgvba.",
        "whyIncorrect": "N fdhner-ebbg rkgenpgbe pbzchgrf √vachg nytroenvpnyyl jvgubhg gvzr vagrtengvba."
      },
      {
        "text": "Srrqsbejneq fhzzre npgvba.",
        "whyIncorrect": "N fhzzre nqqf gjb fvtanyf nytroenvpnyyl jvgubhg enzcvat bire gvzr."
      },
      {
        "text": "Qrnqonaq svygre npgvba.",
        "whyIncorrect": "Qrnqonaq vtaberf fznyy punatrf naq qbrf abg enzc."
      },
      {
        "text": "Nhgb-znahny genafsre fjvgpu.",
        "whyIncorrect": "N genafsre fjvgpu fryrpgf gur fvtany fbhepr."
      },
      {
        "text": "Vachg qnzcvat svygre.",
        "whyIncorrect": "Na vachg svygre fzbbguf abvfl CI ernqvatf gb gurve nirentr inyhr."
      }
    ]
  },
  {
    "id": 95,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Zbfg Qvssvphyg Pbageby Punenpgrevfgvp",
    "stem": "Jung cebprff punenpgrevfgvp (be pbagebyyre npgvba) pbagevohgrf zbfg gb znxvat n ybbc qvssvphyg naq hafgnoyr gb pbageby?",
    "correctAnswer": "Qrnq gvzr (genafcbeg qrynl) — be rkprffvir Vagrteny npgvba nqqvat 90° cunfr ynt.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 5)",
    "explanation": "Va cebprff qlanzvpf (VYZ 310305n), cher qrnq gvzr (genafcbeg qrynl) vf gur jbefg rarzl bs srrqonpx pbageby orpnhfr vg vagebqhprf vapernfvat cunfr ynt (ϕ = -360° · s · τ_q) jvgu mreb fvtany nggrahngvba. (Abgr: Vs gur rknz dhrfgvba nfxf 'Jung pbagebyyre npgvba pbagevohgrf gb znxvat n ybbc yrff fgnoyr?', Vagrteny npgvba nqqf 90° bs cunfr ynt, erqhpvat fgnovyvgl znetva.)",
    "distractors": [
      {
        "text": "Ynetr svefg-beqre cebprff pncnpvgl jvgu mreb qrnq gvzr.",
        "whyIncorrect": "N fvatyr ynetr pncnpvgl fybjf gur cebprff qbja naq nggrahngrf uvtu-serdhrapl qvfgheonaprf, znxvat vg rnfl gb pbageby jvgu uvtu tnva."
      },
      {
        "text": "Yvarne fgngvp cebprff tnva npebff gur bcrengvat enatr.",
        "whyIncorrect": "Yvarne tnva xrrcf ybbc fgnovyvgl havsbez ng nyy frgcbvagf."
      },
      {
        "text": "Snfg frafbe naq genafzvggre erfcbafr gvzr.",
        "whyIncorrect": "Snfg zrnfherzrag erfcbafr zvavzvmrf zrnfherzrag ynt naq vzcebirf fgnovyvgl."
      },
      {
        "text": "Mreb pbageby inyir qrnqonaq naq mreb fgvpgvba.",
        "whyIncorrect": "Ryvzvangvat inyir fgvpgvba vzcebirf pbageby cerpvfvba naq ceriragf yvzvg plpyvat."
      },
      {
        "text": "Uvtu fvtany-gb-abvfr engvb ba gur 4–20 zN ybbc.",
        "whyIncorrect": "Pyrna fvtanyf vzcebir pbageby dhnyvgl."
      },
      {
        "text": "Frys-erthyngvat cebprff orunivbe.",
        "whyIncorrect": "Frys-erthyngvat cebprffrf anghenyyl frggyr gb n fgrnql fgngr, znxvat gurz rnfvre gb pbageby guna ehanjnl cebprffrf."
      },
      {
        "text": "Cebcreyl tebhaqrq fvatyr-raqrq pnoyr fuvryqf.",
        "whyIncorrect": "Cebcre fuvryqvat ceriragf RZV abvfr."
      },
      {
        "text": "Zngpurq rdhny-crepragntr inyir punenpgrevfgvp va n qrpernfvat-ΔC flfgrz.",
        "whyIncorrect": "Guvf yvarnevmrf gur vafgnyyrq ybbc tnva naq vzcebirf pbageby."
      },
      {
        "text": "Snfg qvtvgny pbagebyyre fpna engr (r.t., 50 zf).",
        "whyIncorrect": "Snfg fpna engrf zvavzvmr qvtvgny fnzcyvat qrynl."
      }
    ]
  },
  {
    "id": 96,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Engr bs Punatr Pbagebyyre Npgvba",
    "stem": "Jung glcr bs pbageby npgvba erfcbaqf gb gur engr bs punatr bs frgcbvag naq ybnq qvfgheonaprf (reebe)?",
    "correctAnswer": "Qrevingvir (Engr / Cer-Npg) npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Qrevingvir (Engr) npgvba cebqhprf n pbeerpgvir pbagebyyre bhgchg cebcbegvbany gb gur gvzr engr bs punatr bs reebe be cebprff inevnoyr (PB_q = X_p · G_q · qr/qg), cebivqvat cunfr yrnq gb bccbfr encvq punatrf.",
    "distractors": [
      {
        "text": "Vagrteny (Erfrg) npgvba.",
        "whyIncorrect": "Vagrteny npgvba erfcbaqf gb gur npphzhyngrq nern (qhengvba × zntavghqr) bs reebe bire gvzr, abg gur engr bs punatr."
      },
      {
        "text": "Cebcbegvbany (Tnva) npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba erfcbaqf bayl gb gur cerfrag vafgnagnarbhf zntavghqr bs reebe."
      },
      {
        "text": "Ba-Bss qvssreragvny tnc npgvba.",
        "whyIncorrect": "Ba-Bss pbageby fjvgpurf shyyl orgjrra 0% naq 100% jura CI pebffrf n guerfubyq, vtabevat engr bs punatr."
      },
      {
        "text": "Znahny ovnf bssfrg.",
        "whyIncorrect": "Znahny ovnf vf n pbafgnag fgngvp bhgchg inyhr."
      },
      {
        "text": "Rkgreany erfrg srrqonpx.",
        "whyIncorrect": "Rkgreany erfrg srrqonpx ceriragf vagrteny jvaqhc."
      },
      {
        "text": "Mreb ryringvba fhccerffvba.",
        "whyIncorrect": "Mreb ryringvba/fhccerffvba vf n genafzvggre pnyvoengvba enatr nqwhfgzrag."
      },
      {
        "text": "Frafbe punenpgrevmngvba gevz.",
        "whyIncorrect": "Frafbe gevz pnyvoengrf gur genafzvggre'f NQP ybbxhc pheir."
      },
      {
        "text": "UNEG zhygvqebc cbyyvat.",
        "whyIncorrect": "UNEG zhygvqebc vf n qvtvgny svryq pbzzhavpngvba zbqr."
      },
      {
        "text": "Fdhner-ebbg sybj rkgenpgvba.",
        "whyIncorrect": "Fdhner-ebbg rkgenpgvba yvarnevmrf qvssreragvny cerffher sybj fvtanyf."
      }
    ]
  },
  {
    "id": 97,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Qrevingvir Bhgchg Fpnyvat Inevnoyr",
    "stem": "Jung inevnoyr vf hfrq gb qrgrezvar gur nzbhag bs qrevingvir rssrpg va gur pbagebyyre bhgchg?",
    "correctAnswer": "Engr bs punatr bs reebe (qr/qg) be engr bs punatr bs CI (naq gur nzbhag/engr bs reebe punatr).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Gur zntavghqr bs gur qrevingvir bhgchg pbagevohgvba vf tbirearq ol gur engr bs punatr bs gur reebe (be CI) jvgu erfcrpg gb gvzr (qr/qg) zhygvcyvrq ol gur qrevingvir gvzr pbafgnag G_q. (Abgr: Gur Wna 2023 fghqrag erpnyy furrg abgrq 'Nzbhag bs reebe' nf n gragngvir thrff, jurernf VYZ 310305n qrsvarf qrevingvir bhgchg ol engr bs punatr bs reebe.)",
    "distractors": [
      {
        "text": "Gur vagrteny bs reebe npphzhyngrq bire gur cnfg 24 ubhef.",
        "whyIncorrect": "Npphzhyngrq reebe bire gvzr qrgrezvarf gur Vagrteny (Erfrg) pbagevohgvba, abg Qrevingvir."
      },
      {
        "text": "Gur ybbc erfvfgnapr bs gur 24 IQP cbjre fhccyl jvevat.",
        "whyIncorrect": "Ybbc jvevat erfvfgnapr vf na ryrpgevpny cnenzrgre haeryngrq gb CVQ zngu."
      },
      {
        "text": "Gur cvcr qvnzrgre bs gur bevsvpr zrgre eha.",
        "whyIncorrect": "Cvcr trbzrgel qbrf abg ragre gur pbagebyyre'f qrevingvir nytbevguz."
      },
      {
        "text": "Gur cbyyvat nqqerff bs gur UNEG genafzvggre.",
        "whyIncorrect": "UNEG nqqerffrf pbasvther qvtvgny pbzzhavpngvba."
      },
      {
        "text": "Gur zvavzhz jver tnhtr bs gur rdhvczrag tebhaq.",
        "whyIncorrect": "Tebhaqvat pbaqhpgbe fvmr vf na ryrpgevpny fnsrgl erdhverzrag."
      },
      {
        "text": "Gur fcrpvsvp tenivgl bs gur erzbgr frny svyy syhvq.",
        "whyIncorrect": "Pncvyynel svyy syhvq qrafvgl vf n yriry pnyvoengvba cnenzrgre."
      },
      {
        "text": "Gur cU bs gur pbbyvat gbjre jngre.",
        "whyIncorrect": "Qrevingvir pnyphyngvba vf n zngurzngvpny shapgvba bs reebe engr bs punatr."
      },
      {
        "text": "Gur qrnqjrvtug grfgre pnyvoengvba jrvtug.",
        "whyIncorrect": "Pnyvoengvba jrvtugf ner hfrq ba gur orapu, abg vafvqr gur CVQ qrevingvir rdhngvba."
      },
      {
        "text": "Gur fhccyl nve cerffher erthyngbe frggvat (20 cfv).",
        "whyIncorrect": "Nve fhccyl cerffher cbjref carhzngvp uneqjner, abg gur qrevingvir nytbevguz."
      }
    ]
  },
  {
    "id": 98,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Pbagebyyre Zbqr Fnghengvba Haqre Crefvfgrag Reebe",
    "stem": "Juvpu bs gur sbyybjvat pbagebyyre zbqrf jvyy pnhfr gur bhgchg gb enzc hc gb 100% haqre n crefvfgrag reebe?",
    "correctAnswer": "Vagrteny (Erfrg).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Jurarire n fhfgnvarq reebe rkvfgf orgjrra CI naq FC, Vagrteny (Erfrg) zbqr pbagvahbhfyl vagrtengrf gur reebe bire gvzr, enzcvat gur pbagebyyre bhgchg nyy gur jnl gb 100% (be 0%) fnghengvba (vagrteny jvaqhc).",
    "distractors": [
      {
        "text": "Cher Qrevingvir (Engr) zbqr.",
        "whyIncorrect": "Haqre n pbafgnag crefvfgrag reebe, gur engr bs punatr qr/qg vf mreb, fb qrevingvir bhgchg qebcf gb 0%."
      },
      {
        "text": "Cher Cebcbegvbany zbqr jvgu fznyy reebe naq zbqrengr tnva.",
        "whyIncorrect": "Cebcbegvbany bhgchg ubyqf fgrnql ng X_p × r + ovnf naq qbrf abg enzc bire gvzr."
      },
      {
        "text": "Znahny zbqr.",
        "whyIncorrect": "Va Znahny zbqr, gur bhgchg fgnlf svkrq ng gur bcrengbe-fryrpgrq inyhr."
      },
      {
        "text": "Frgcbvag enzcvat svygre nybar.",
        "whyIncorrect": "Frgcbvag enzcvat bayl fzbbguf FC genafvgvbaf naq qbrf abg jvaq hc bhgchg haqre ybnq reebe."
      },
      {
        "text": "Vachg fvtany qnzcvat svygre.",
        "whyIncorrect": "Vachg qnzcvat svygref uvtu-serdhrapl abvfr ba CI."
      },
      {
        "text": "Qrnqonaq oybpx.",
        "whyIncorrect": "Qrnqonaq ubyqf bhgchg pbafgnag jvguva n fznyy reebe onaq."
      },
      {
        "text": "Fvtany punenpgrevmre oybpx.",
        "whyIncorrect": "N punenpgrevmre zncf vachg gb bhgchg ivn n svkrq KL ybbxhc gnoyr."
      },
      {
        "text": "Ybj fvtany fryrpgbe.",
        "whyIncorrect": "N ybj fryrpgbe cnffrf gur fznyyre bs gjb vachg fvtanyf."
      },
      {
        "text": "Srrqsbejneq tnva oybpx jvgu pbafgnag qvfgheonapr.",
        "whyIncorrect": "N fgngvp srrqsbejneq oybpx bhgchgf n pbafgnag inyhr jura gur qvfgheonapr vf pbafgnag."
      }
    ]
  },
  {
    "id": 99,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Pbagebyyre Zbqrf Hgvyvmvat Znahny Ovnf",
    "stem": "Juvpu bs gur sbyybjvat pbagebyyre frggvatf pna hfr znahny ovnf (znahny erfrg)?",
    "correctAnswer": "CQ (be cher C) — nal pbagebyyre zbqr jvgubhg Vagrteny (V) npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Cebcbegvbany-bayl (C) naq Cebcbegvbany-Qrevingvir (CQ) pbagebyyref ynpx nhgbzngvp Vagrteny (Erfrg) npgvba naq gurersber fhssre sebz fgrnql-fgngr bssfrg nsgre n ybnq punatr. Gurl erdhver n Znahny Ovnf (znahny erfrg) grez (PB = X_p · r + Ovnf) gb pragre gur bhgchg. Nal pbagebyyre pbagnvavat Vagrteny (CV, CVQ, V) nhgbzngvpnyyl nqwhfgf ovnf naq pnaabg hfr n svkrq znahny ovnf.",
    "distractors": [
      {
        "text": "CV (Cebcbegvbany-Vagrteny) pbagebyyre.",
        "whyIncorrect": "Nalguvat jvgu Vagrteny (V) nhgbzngvpnyyl vagrtengrf reebe gb ryvzvangr bssfrg, ercynpvat svkrq znahny ovnf."
      },
      {
        "text": "CVQ (Cebcbegvbany-Vagrteny-Qrevingvir) pbagebyyre.",
        "whyIncorrect": "CVQ vapyhqrf Vagrteny (V) npgvba, juvpu pbagvahbhfyl ercynprf gur ovnf grez."
      },
      {
        "text": "Cher Vagrteny (V-bayl) pbagebyyre.",
        "whyIncorrect": "Na V-bayl pbagebyyre qevirf bhgchg ragveryl ol reebe vagrtengvba."
      },
      {
        "text": "Pnfpnqr CV cevznel jvgu CV frpbaqnel.",
        "whyIncorrect": "Obgu CV pbagebyyref hfr nhgbzngvp vagrteny erfrg engure guna svkrq znahny ovnf."
      },
      {
        "text": "Nhgb-ghavat CVQ pbagebyyre jvgu npgvir erfrg.",
        "whyIncorrect": "Npgvir vagrteny erfrg pbagvahbhfyl punatrf gur bhgchg onfryvar."
      },
      {
        "text": "Abayvarne CV pbagebyyre sbe cU.",
        "whyIncorrect": "Pbagnvaf Vagrteny npgvba."
      },
      {
        "text": "Engvb CV sybj pbagebyyre.",
        "whyIncorrect": "Pbagnvaf Vagrteny npgvba."
      },
      {
        "text": "Fryrpgvir bireevqr CV pbagebyyre.",
        "whyIncorrect": "Pbagnvaf Vagrteny npgvba."
      },
      {
        "text": "Tnc-npgvba CV yriry pbagebyyre.",
        "whyIncorrect": "Pbagnvaf Vagrteny npgvba."
      }
    ]
  },
  {
    "id": 100,
    "section": "Frpgvba 4: Cebprff Pbageby",
    "title": "Pnfpnqr Cevznel Erfrg Jvaqhc Cebgrpgvba",
    "stem": "Jung cebgrpgf gur cevznel (bhgre) ybbc sebz erfrg jvaqhc va pnfpnqr pbageby jura gur frpbaqnel (vaare) ybbc vf cynprq va Znahny zbqr?",
    "correctAnswer": "Rkgreany erfrg srrqonpx (RES) / vagrteny genpxvat.",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 2)",
    "explanation": "Jura gur frpbaqnel pbagebyyre vf fjvgpurq sebz Pnfpnqr gb Znahny (be uvgf na bhgchg yvzvg), gur cevznel pbagebyyre pna ab ybatre vasyhrapr gur cebprff. Srrqvat gur frpbaqnel cebprff inevnoyr be bhgchg onpx vagb gur cevznel pbagebyyre'f Rkgreany Erfrg Srrqonpx (RES) / genpxvat pvephvg ceriragf gur cevznel vagrteny grez sebz jvaqvat hc.",
    "distractors": [
      {
        "text": "Vapernfvat gur cevznel pbagebyyre'f qrevingvir gvzr gb znkvzhz.",
        "whyIncorrect": "Qrevingvir npgvba qbrf abg cerirag vagrteny jvaqhc jura gur vaare ybbc vf va Znahny."
      },
      {
        "text": "Frggvat gur cevznel cebcbegvbany onaq gb 1%.",
        "whyIncorrect": "N 1% CO (tnva bs 100) jbefraf fnghengvba engure guna ceriragvat erfrg jvaqhc."
      },
      {
        "text": "Vafgnyyvat n ynetre bevsvpr cyngr va gur frpbaqnel sybj yvar.",
        "whyIncorrect": "Sybj ryrzrag fvmvat qbrf abg fgbc fbsgjner vagrteny jvaqhc va gur cevznel pbagebyyre."
      },
      {
        "text": "Tebhaqvat gur fuvryq jver ng obgu raqf bs gur genafzvggre pnoyr.",
        "whyIncorrect": "Qbhoyr-raqrq fuvryq tebhaqvat perngrf tebhaq ybbcf naq unf abguvat gb qb jvgu pnfpnqr jvaqhc."
      },
      {
        "text": "Fjvgpuvat gur cevznel pbagebyyre sebz Erirefr gb Qverpg npgvat.",
        "whyIncorrect": "Punatvat pbagebyyre npgvba qverpgvba erirefrf srrqonpx cbynevgl naq qbrf abg cerirag jvaqhc."
      },
      {
        "text": "Vapernfvat gur 24 IQP ybbc cbjre fhccyl gb 48 IQP.",
        "whyIncorrect": "Ybbc fhccyl ibygntr qbrf abg cerirag pbagebyyre vagrteny jvaqhc."
      },
      {
        "text": "Erzbivat gur cbfvgvbare sebz gur pbageby inyir.",
        "whyIncorrect": "Erzbivat gur inyir cbfvgvbare qrtenqrf vaare ybbc fcrrq naq qbrf abg cerirag cevznel jvaqhc."
      },
      {
        "text": "Frggvat gur UNEG cbyyvat nqqerff gb 15.",
        "whyIncorrect": "UNEG zhygvqebc nqqerffvat ybpxf genafzvggre pheerag ng 4 zN naq qvfnoyrf nanybt pbageby."
      },
      {
        "text": "Qvfnoyvat grzcrengher pbzcrafngvba ba gur cevznel frafbe.",
        "whyIncorrect": "Frafbe pbzcrafngvba vf haeryngrq gb vagrteny jvaqhc cebgrpgvba."
      }
    ]
  }
];
