import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (100 questions across 5 subjects, 900 calibrated distractors, LaTeX math)
export const ENCODED_QUESTION_BANK: QuestionRecord[] = [
  {
    "id": 1,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "4–20 zN Bhgchg Fvtany Crepragntr",
    "stem": "N genafzvggre unf n $4\\grkg{–}20\\grkg{ zN}$ bhgchg fvtany naq n cebprff enatr bs $3\\grkg{–}15\\grkg{ cfv}$. Jung vf gur bhgchg crepragntr jura gur fvtany vf $9\\grkg{ zN}$?",
    "correctAnswer": "$31.25\\%$",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvirf 1 & 2)",
    "explanation": "Gur bhgchg fvtany crepragntr rkcerffrf gur pheerag zrnfherzrag eryngvir gb gur yvir mreb ($4\\grkg{ zN}$) naq fcna ($16\\grkg{ zN}$): $$\\grkg{Bhgchg \\%} = \\yrsg(\\senp{V_{\\grkg{zrnfherq}} - \\grkg{YEI}_{\\grkg{pheerag}}}{\\grkg{Fcna}_{\\grkg{pheerag}}}\\evtug) \\gvzrf 100\\%$$",
    "distractors": [
      {
        "text": "45.00%",
        "whyIncorrect": "Snvyf gb fhogenpg gur 4 zN yvir mreb: 20 × 100% = 45.00%."
      },
      {
        "text": "50.00%",
        "whyIncorrect": "Hfrf n 10 zN fcna nffhzcgvba jvgubhg yvir mreb fhogenpgvba: 10 × 100% = 50.00%."
      },
      {
        "text": "37.50%",
        "whyIncorrect": "Qvivqrf pheerag ol shyy pheerag fcna jvgubhg yvir mreb fhogenpgvba: 24 × 100% = 37.50%."
      },
      {
        "text": "25.00%",
        "whyIncorrect": "Vapbeerpgyl pnyphyngrf crepragntr eryngvir gb shyy 20 zN gbgny pheerag fcna (20 zN −0 zN)."
      },
      {
        "text": "20.00%",
        "whyIncorrect": "Fhogenpgf 4 zN sebz 9 zN (5 zN) ohg vapbeerpgyl qvivqrf ol 25 zN gbgny fhccyl enatr."
      },
      {
        "text": "56.25%",
        "whyIncorrect": "Vairegf yvir mreb fhogenpgvba ol nqqvat 4 zN gb fvtany (13 zN) orsber qvivqvat ol 16 zN fcna."
      },
      {
        "text": "18.75%",
        "whyIncorrect": "Fhogenpgf 9 zN sebz 12 cfv enatr zvqcbvag vafgrnq bs pheerag fcna pnyphyngvba."
      },
      {
        "text": "41.67%",
        "whyIncorrect": "Pnyphyngrf crepragntr onfrq ba cebprff cerffher enatr (3–15 cfv, fcna 12 cfv) engvb vapbeerpgyl."
      },
      {
        "text": "33.33%",
        "whyIncorrect": "Qvivqrf fvtany nobir yvir mreb (5 zN) ol cebprff fcna (15 cfv) engure guna pheerag fcna (16 zN)."
      }
    ],
    "steps": [
      "Pnyphyngr Pheerag Fcna: $\\grkg{Fcna} = 20\\grkg{ zN} - 4\\grkg{ zN} = 16\\grkg{ zN}$",
      "Qrgrezvar Fvtany nobir Yvir Mreb: $V_{\\grkg{nobir YEI}} = 9\\grkg{ zN} - 4\\grkg{ zN} = 5\\grkg{ zN}$",
      "Pnyphyngr Crepragntr: $\\grkg{Bhgchg \\%} = \\yrsg(\\senp{5\\grkg{ zN}}{16\\grkg{ zN}}\\evtug) \\gvzrf 100\\% = 0.3125 \\gvzrf 100\\% = \\znguos{31.25\\%}$"
    ]
  },
  {
    "id": 2,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Bcrengvbany Punenpgrevfgvpf bs Pheerag Ybbcf",
    "stem": "Jung vf n xrl bcrengvbany punenpgrevfgvp bs 4–20 zN pheerag ybbcf va vaqhfgevny cebprff pbageby?",
    "correctAnswer": "Uvtu ybbc vzcrqnapr eryngvir gb erprvire vachg, ceriragvat ibygntr qebc reebef naq erqhpvat abvfr fhfprcgvovyvgl bire ybat jver ehaf.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 3)",
    "explanation": "Pheerag ybbcf npg nf pbafgnag-pheerag fbheprf. Orpnhfr gur erprvire vachg erfvfgnapr vf fznyy (glcvpnyyl $E_{\\grkg{ybnq}} = 250\\,\\Bzrtn$) eryngvir gb gur uvtu vagreany vzcrqnapr bs gur genafzvggre ($E_{\\grkg{vagreany}} \\gb \\vasgl$), yrnq jver erfvfgnapr inevngvbaf ($E_{\\grkg{jver}}$) qb abg nygre pheerag sybj $V = 4\\grkg{–}20\\grkg{ zN}$, ryvzvangvat yvar-ybff ibygntr qebc reebef ($I_{\\grkg{qebc}} = V \\pqbg E_{\\grkg{jver}}$).",
    "distractors": [
      {
        "text": "Ybj vachg vzcrqnapr eryngvir gb fvtany jverf, pnhfvat fvtavsvpnag ibygntr qebcf.",
        "whyIncorrect": "Pheerag ybbc genafzvggref npg nf uvtu-vzcrqnapr fbheprf, ceriragvat ibygntr qebcf sebz nssrpgvat fvtany npphenpl."
      },
      {
        "text": "Uvtu ibygntr frafvgvivgl, znxvat pheerag ybbcf ihyarenoyr gb yvar erfvfgnapr.",
        "whyIncorrect": "Pheerag ybbcf ner pheerag-onfrq, znxvat gurz vaureragyl vzzhar gb yvar erfvfgnapr ibygntr qebcf."
      },
      {
        "text": "Bcrengrf ng 0–10 IQP gb ryvzvangr pheerag ybbc yvar ybff reebef.",
        "whyIncorrect": "Fgnaqneq vaqhfgevny ybbcf bcrengr ba 4–20 zN pheerag, abg 0–10 IQP ibygntr."
      },
      {
        "text": "Erdhverf fuvryqrq gevcyrk pnoyr gb cerirag tebhaq ybbcf ng obgu ybbc raqf.",
        "whyIncorrect": "Vafgehzrag ybbcf hfr fuvryqrq gjvfgrq cnve tebhaqrq ng BAR raq bayl."
      },
      {
        "text": "Pheerag qrpernfrf yvarneyl jvgu vapernfvat jver erfvfgnapr.",
        "whyIncorrect": "Genafzvggre qlanzvp vzcrqnapr pbzcrafngrf sbe yvar erfvfgnapr punatrf."
      },
      {
        "text": "Erdhverf npgvir NP pbhcyvat gb cerirag QP fvtany fnghengvba.",
        "whyIncorrect": "Vaqhfgevny 4–20 zN ybbcf bcrengr ba qverpg pheerag (QP)."
      },
      {
        "text": "Erprvire vachg vzcrqnapr zhfg rkprrq 100 xΩgb zrnfher ybbc pheerag.",
        "whyIncorrect": "Fgnaqneq erprvire vachg vzcrqnapr vf fznyy (250 Ω)."
      },
      {
        "text": "Fvtany pheerag vf vairefryl cebcbegvbany gb fhccyl ibygntr.",
        "whyIncorrect": "Ybbc pheerag vf pbagebyyrq ol cebprff inevnoyr, vaqrcraqrag bs fhccyl ibygntr syhpghngvba jvguva bcrengvat yvzvgf."
      },
      {
        "text": "Fhfprcgvoyr gb jver erfvfgnapr punatrf npebff nzovrag grzcrengher inevngvbaf.",
        "whyIncorrect": "Pheerag ybbcf nhgbzngvpnyyl nqwhfg grezvany ibygntr gb znvagnva gehr pheerag vaqrcraqrag bs yrnq jver erfvfgnapr."
      }
    ]
  },
  {
    "id": 3,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Znkvzhz Nyybjnoyr Ybbc Erfvfgnapr Pnyphyngvba",
    "stem": "Jung vf gur znkvzhz nyybjnoyr ybbc erfvfgnapr va n 2-jver pheerag ybbc cbjrerq ol n $24\\grkg{ IQP}$ cbjre fhccyl jvgu n zvavzhz erdhverq genafzvggre bcrengvat ibygntr bs $12\\grkg{ IQP}$?",
    "correctAnswer": "$600\\,\\Bzrtn$",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 8)",
    "explanation": "Znkvzhz ybbc erfvfgnapr rafherf gung ng znkvzhz ybbc pheerag ($V_{\\znk} = 20\\grkg{ zN} = 0.020\\grkg{ N}$), gur gbgny ibygntr qebc npebff ybbc jvevat naq ybnq erfvfgbef yrnirf ng yrnfg gur zvavzhz erdhverq bcrengvat ibygntr ng gur genafzvggre grezvanyf: $$E_{\\znk} = \\senp{I_{\\grkg{fhccyl}} - I_{\\zva\\grkg{ genafzvggre}}}{V_{\\znk}} = \\senp{24\\grkg{ I} - 12\\grkg{ I}}{0.020\\grkg{ N}} = 600\\,\\Bzrtn$$",
    "distractors": [
      {
        "text": "1200 Ω",
        "whyIncorrect": "Pnyphyngrf erfvfgnapr hfvat 10 zN nirentr pheerag vafgrnq bs 20 zN znkvzhz pheerag."
      },
      {
        "text": "500 Ω",
        "whyIncorrect": "Vapbeerpgyl hfrf 20 IQP ninvynoyr fhccyl qebc (24 I −4 I yvir mreb) qvivqrq ol 0.020 N."
      },
      {
        "text": "1000 Ω",
        "whyIncorrect": "Bzvgf genafzvggre zvavzhz bcrengvat ibygntr: 24 I 0.020 N = 1200 Ωbe hfrf 12 I qebc bire 0.012 N."
      },
      {
        "text": "300 Ω",
        "whyIncorrect": "Pnyphyngrf znkvzhz erfvfgnapr hfvat qbhoyr znkvzhz pheerag (40 zN) be 12 I/0.040 N."
      },
      {
        "text": "250 Ω",
        "whyIncorrect": "Zvfgnxrf fgnaqneq QPF erprvire erfvfgbe inyhr (250 Ω) sbe gbgny znkvzhz nyybjnoyr ybbc erfvfgnapr."
      },
      {
        "text": "480 Ω",
        "whyIncorrect": "Hfrf gbgny fhccyl ibygntr (24 I) qvivqrq ol 0.050 N znk shfr engvat."
      },
      {
        "text": "750 Ω",
        "whyIncorrect": "Pnyphyngrf ninvynoyr ibygntr qebc nf 15 I vafgrnq bs 12 I bire 0.020 N."
      },
      {
        "text": "1500 Ω",
        "whyIncorrect": "Pnyphyngrf erfvfgnapr onfrq ba zvavzhz fvtany pheerag (4 zN): 12 I 0.004 N = 3000 Ωqvivqrq ol 2."
      },
      {
        "text": "800 Ω",
        "whyIncorrect": "Hfrf 16 I ninvynoyr qebc (24 I −8 I) qvivqrq ol 0.020 N."
      }
    ],
    "steps": [
      "Ninvynoyr Ibygntr Qebc: $I_{\\grkg{qebc}} = 24\\grkg{ I} - 12\\grkg{ I} = 12\\grkg{ IQP}$",
      "Znkvzhz Ybbc Pheerag: $V_{\\znk} = 20\\grkg{ zN} = 0.020\\grkg{ N}$",
      "Pnyphyngr Erfvfgnapr: $E_{\\znk} = \\senp{12\\grkg{ I}}{0.020\\grkg{ N}} = \\znguos{600\\,\\Bzrtn}$"
    ]
  },
  {
    "id": 4,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Ybbc Qvntenz Genafzvggre Cbjre Fhccyl Ybpngvba",
    "stem": "Ba n fgnaqneq ybbc qvntenz, sebz jurer vf gur cbfvgvir QP cbjre sbe gur cerffher genafzvggre fhccyvrq?",
    "correctAnswer": "CVP-3016 grezvany 3.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf, Bowrpgvir 4)",
    "explanation": "Va fgnaqneq 2-jver ybbc nepuvgrpgher, gur erprvivat pneq be pbagebyyre (CVP-3016) cebivqrf ybbc cbjre sebz vgf vagreany 24 IQP fhccyl bhg bs grezvany 3 gb cbjre gur svryq genafzvggre guebhtu gur fvtany jverf.",
    "distractors": [
      {
        "text": "CVP-3016 grezvany 1.",
        "whyIncorrect": "Grezvany 1 ercerfragf fvtany erghea / artngvir grezvany va fgnaqneq ybbc jvevat pbairagvbaf."
      },
      {
        "text": "Svryq whapgvba obk punffvf tebhaq grezvany.",
        "whyIncorrect": "Punffvf tebhaq qbrf abg fhccyl cbfvgvir QP ybbc cbjre."
      },
      {
        "text": "Rkgreany 120 INP cbjre fhccyl yvar grezvany.",
        "whyIncorrect": "2-jver svryq genafzvggref bcrengr ba 24 IQP, abg 120 INP yvar cbjre."
      },
      {
        "text": "Fuvryq qenva jver pbaarpgvba grezvany.",
        "whyIncorrect": "Fuvryq qenva jver cebivqrf ryrpgebfgngvp abvfr cebgrpgvba, abg ybbc bcrengvat cbjre."
      },
      {
        "text": "CVP-3016 grezvany 4.",
        "whyIncorrect": "Grezvany 4 vf qrfvtangrq sbe nhkvyvnel nynez be qvtvgny pbzzhavpngvba bhgchg."
      },
      {
        "text": "Genafzvggre grfg grezvany +.",
        "whyIncorrect": "Grfg grezvanyf ner qrfvtarq sbe ybpny zrgre pbaarpgvba, abg vapbzvat ybbc cbjre fhccyl."
      },
      {
        "text": "HCF 24 IQP arhgeny ohf one.",
        "whyIncorrect": "Cbjre vf ebhgrq guebhtu pbagebyyre pneq grezvany 3 sbe ybbc shfvat naq zbavgbevat."
      },
      {
        "text": "Unaquryq pbzzhavpngbe UNEG grezvany O.",
        "whyIncorrect": "UNEG pbzzhavpngbe grezvanyf qb abg fhccyl cevznel ybbc cbjre."
      },
      {
        "text": "Carhzngvp fhccyl erthyngbe bhgchg.",
        "whyIncorrect": "Carhzngvp erthyngbef fhccyl vafgehzrag nve (20 cfv), abg ryrpgevpny QP cbjre."
      }
    ]
  },
  {
    "id": 5,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "C&VQ Pbagebyyre Npgvba sbe Snvy-Bcra Inyir",
    "stem": "N C&VQ fubjf n qvfgvyyngvba cebprff sybj pbageby ybbc jurer SP1 bcrengrf n Snvy-Bcra (SB) pbageby inyir. Jung vf gur erdhverq pbagebyyre npgvba sbe SP1?",
    "correctAnswer": "Qverpg Npgvat.",
    "ilmReference": "VYZ 310301n (Nanybt Ybbcf) & VYZ 310305n (Pbageby Ybbc Nanylfvf)",
    "explanation": "Jura gur cebprff inevnoyr (sybj) evfrf nobir frgcbvag, n Qverpg-Npgvat pbagebyyre vapernfrf vgf bhgchg fvtany (PB). Sbe n Snvy-Bcra (SB) nve-gb-pybfr inyir, na vapernfvat bhgchg fvtany vapernfrf carhzngvp cerffher ba gur qvncuentz gb pybfr gur inyir, guebggyvat sybj onpx gbjneq frgcbvag.",
    "distractors": [
      {
        "text": "Erirefr Npgvat.",
        "whyIncorrect": "Erirefr npgvat vapernfrf bhgchg nf CI qrpernfrf, juvpu jbhyq bcra n SB inyir shegure qhevat uvtu sybj."
      },
      {
        "text": "Uvtu-Fryrpgvat Bireevqr.",
        "whyIncorrect": "Uvtu-fryrpgvat pbageby vf n fvtany fryrpgvba fgengrtl, abg n onfvp pbagebyyre npgvba zbqr."
      },
      {
        "text": "Qvssreragvny Npgvba.",
        "whyIncorrect": "Qvssreragvny npgvba vf abg n inyvq onfvp pbagebyyre npgvba qverpgvba."
      },
      {
        "text": "Vagrteny Bayl Npgvba.",
        "whyIncorrect": "Vagrteny bayl qrfpevorf pbagebyyre zbqr pbzcbfvgvba, abg npgvba qverpgvba (qverpg if erirefr)."
      },
      {
        "text": "Ba-Bss Onat-Onat Pbageby.",
        "whyIncorrect": "Sybj pbageby ybbcf erdhver pbagvahbhf zbqhyngvat pbageby, abg gjb-cbfvgvba ba-bss pbageby."
      },
      {
        "text": "Engvb Pbageby Zbqr.",
        "whyIncorrect": "Engvb pbageby fpnyrf bar sybj gb nabgure; vg qbrf abg qrsvar vaqvivqhny ybbc npgvba qverpgvba."
      },
      {
        "text": "Srrqsbejneq Npgvba.",
        "whyIncorrect": "Srrqsbejneq pbzcrafngrf sbe zrnfherq qvfgheonaprf orsber reebe bpphef, erdhvevat cebcre onfr npgvba qverpgvba."
      },
      {
        "text": "Fcyvg-Enatr Pbageby Npgvba.",
        "whyIncorrect": "Fcyvg-enatr ebhgrf fvatyr PB gb zhygvcyr inyirf, erdhvevat cebcre qverpg be erirefr onfr npgvba."
      },
      {
        "text": "Pnfpnqr Frpbaqnel Nhgb-Zbqr.",
        "whyIncorrect": "Pnfpnqr zbqr qrsvarf frgcbvag fbhepvat, abg qverpg/erirefr pbageby npgvba."
      }
    ],
    "image": "./assets/ref_05.png",
    "imageCaption": "Qvfgvyyngvba Sybj Pbageby Ybbc (SG1 / SP1 / Snvy-Bcra Inyir)"
  },
  {
    "id": 6,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Vafgehzrag Pnoyr Fuvryq Tebhaqvat Ybpngvba",
    "stem": "Jurer fubhyq gur fuvryq qenva jver bs n fuvryqrq vafgehzrag fvtany pnoyr or tebhaqrq?",
    "correctAnswer": "Ng bar raq bayl (glcvpnyyl ng gur pbageby cnary / QPF tebhaq one).",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 4)",
    "explanation": "Tebhaqvat n pnoyr fuvryq ng obgu raqf perngrf n pybfrq pbaqhpgvir ybbc fhfprcgvoyr gb cbgragvny qvssreraprf orgjrra svryq naq cnary tebhaqf. Tebhaqvat ng BAR raq bayl ceriragf pvephyngvat tebhaq-ybbc abvfr pheeragf juvyr qenvavat vaqhprq ryrpgebfgngvp vagresrerapr.",
    "distractors": [
      {
        "text": "Ng obgu raqf gb rafher znkvzhz abvfr fhccerffvba.",
        "whyIncorrect": "Tebhaqvat ng obgu raqf perngrf n pybfrq pbaqhpgvir ybbc gung vaqhprf pvephyngvat tebhaq pheeragf naq frirer abvfr."
      },
      {
        "text": "Ng gur svryq genafzvggre rapybfher bayl.",
        "whyIncorrect": "Cersreerq vaqhfgel fgnaqneq tebhaqf fuvryqf ng gur dhvrg pbageby cnary tebhaq one gb cerirag svryq tebhaq abvfr."
      },
      {
        "text": "Gb gur arnerfg NP cbjre pbaqhvg ng rirel whapgvba obk.",
        "whyIncorrect": "Pbaarpgvat fuvryq gb NP cbjre pbaqhvg vagebqhprf urnil ryrpgevpny vagresrerapr."
      },
      {
        "text": "Ng obgu raqf guebhtu 100 Ωqnzcvat erfvfgbef.",
        "whyIncorrect": "Erfvfgbef qb abg oernx tebhaq ybbcf rssrpgviryl naq qrtenqr fuvryq cresbeznapr."
      },
      {
        "text": "Gb gur arhgeny jver bs gur 120 INP oenapu pvephvg.",
        "whyIncorrect": "Pbaarpgvat fvtany fuvryq gb NP arhgeny vagebqhprf unmneqbhf tebhaq snhyg pheeragf."
      },
      {
        "text": "Sybngvat jvgu ab tebhaq pbaarpgvba ng rvgure raq.",
        "whyIncorrect": "Hatebhaqrq fuvryqf npg nf nagraanf, vapernfvat ryrpgebzntargvp abvfr cvpxhc."
      },
      {
        "text": "Ng zvq-fcna whapgvba obkrf bayl.",
        "whyIncorrect": "Zvq-fcna tebhaqvat yrnirf pnoyr raqf hafuvryqrq naq fhfprcgvoyr gb abvfr."
      },
      {
        "text": "Gb gur cvcr enpx fgehpgheny fgrry ng svryq pbaarpgvbaf.",
        "whyIncorrect": "Fgehpgheny fgrry rkcrevraprf genafvrag tebhaq cbgragvnyf, vagebqhpvat frirer fvtany abvfr."
      },
      {
        "text": "Va frevrf jvgu gur 4–20 zN fvtany ybbc cbfvgvir jver.",
        "whyIncorrect": "Pbaarpgvat fuvryq va frevrf jvgu fvtany jverf qrfgeblf fvtany genafzvffvba."
      }
    ]
  },
  {
    "id": 7,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Zvavzhz Fvmr sbe Rdhvczrag Tebhaq Pbaqhpgbe",
    "stem": "Nppbeqvat gb Pnanqvna Ryrpgevpny Pbqr fgnaqneqf sbe vafgehzragngvba, jung vf gur zvavzhz jver fvmr hfrq sbe n qrqvpngrq rdhvczrag tebhaqvat pbaqhpgbe?",
    "correctAnswer": "12 NJT",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 2)",
    "explanation": "Pnanqvna Ryrpgevpny Pbqr (PRP) naq ncceragvprfuvc fgnaqneqf fcrpvsl 12 NJT pbccre nf gur zvavzhz pbaqhpgbe fvmr sbe vafgehzragngvba fnsrgl/rdhvczrag tebhaqf gb rafher ybj ryrpgevpny vzcrqnapr naq zrpunavpny qhenovyvgl.",
    "distractors": [
      {
        "text": "18 NJT.",
        "whyIncorrect": "18 NJT vf fgnaqneq sbe fvtany gjvfgrq cnvef, ohg gbb guva sbe qrqvpngrq fnsrgl tebhaq pbaqhpgbef haqre PRP."
      },
      {
        "text": "14 NJT.",
        "whyIncorrect": "14 NJT vf pbzzba sbe 15N oenapu pvephvgf, ohg PRP vafgehzragngvba tebhaq ehyrf znaqngr 12 NJT zvavzhz."
      },
      {
        "text": "10 NJT.",
        "whyIncorrect": "10 NJT vf ynetre guna erdhverq sbe fgnaqneq vafgehzrag rapybfher fnsrgl tebhaqvat."
      },
      {
        "text": "22 NJT.",
        "whyIncorrect": "22 NJT ynpxf arprffnel zrpunavpny fgeratgu naq pheerag pneelvat pncnpvgl sbe fnsrgl tebhaqvat."
      },
      {
        "text": "16 NJT.",
        "whyIncorrect": "16 NJT vf hfrq sbe pbageby jvevat, ohg qbrf abg zrrg 12 NJT zvavzhz rdhvczrag tebhaq pbqr erdhverzrag."
      },
      {
        "text": "8 NJT.",
        "whyIncorrect": "8 NJT vf hfrq sbe znva tebhaq ryrpgebqr pbaqhpgbef, abg vaqvivqhny vafgehzrag rapybfher fnsrgl tebhaqf."
      },
      {
        "text": "24 NJT.",
        "whyIncorrect": "24 NJT vf hfrq va zhygv-pbaqhpgbe pbzzhavpngvba pnoyrf, sne gbb sentvyr sbe fnsrgl tebhaqvat."
      },
      {
        "text": "6 NJT.",
        "whyIncorrect": "6 NJT vf urnil tebhaq pnoyr hfrq sbe znfgre tebhaq ohf pbaarpgvbaf, abg vaqvivqhny genafzvggre tebhaqf."
      },
      {
        "text": "20 NJT.",
        "whyIncorrect": "20 NJT ynpxf zrpunavpny vagrtevgl erdhverq sbe fnsrgl obaqvat pbaqhpgbef."
      }
    ]
  },
  {
    "id": 8,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Pnhfr bs Ryrpgebzntargvp Vagresrerapr (RZV)",
    "stem": "Jung culfvpny zrpunavfz pnhfrf Ryrpgebzntargvp Vagresrerapr (RZV) va fvtany pbaqhpgbef arne NP cbjre jvevat?",
    "correctAnswer": "Ryrpgebzntargvp vaqhpgvba.",
    "ilmReference": "VYZ 310301o (Tebhaqvat & Fuvryqvat, Bowrpgvir 3)",
    "explanation": "Nygreangvat pheerag sybjvat guebhtu cbjre pbaqhpgbef trarengrf gvzr-inelvat zntargvp syhk yvarf gung phg npebff nqwnprag fvtany pbaqhpgbef, vaqhpvat abvfr pheeragf ivn ryrpgebzntargvp vaqhpgvba.",
    "distractors": [
      {
        "text": "Pncnpvgvir pebff-pbhcyvat.",
        "whyIncorrect": "Pncnpvgvir pbhcyvat vf pnhfrq ol ryrpgevp svryq ibygntr inevngvba (ryrpgebfgngvp), abg zntargvp pheerag syhk."
      },
      {
        "text": "Gurezny abvfr trarengvba.",
        "whyIncorrect": "Gurezny (Wbuafba) abvfr vf trarengrq ol enaqbz gurezny zbgvba bs ryrpgebaf vafvqr pbaqhpgbef."
      },
      {
        "text": "Tnyinavp pbeebfvba ernpgvba.",
        "whyIncorrect": "Tnyinavp pbeebfvba vf na ryrpgebpurzvpny zrgny qrtenqngvba cebprff, abg na ryrpgevpny abvfr zrpunavfz."
      },
      {
        "text": "Enqvb serdhrapl erfbanapr.",
        "whyIncorrect": "ES erfbanapr bpphef ng uvtu jveryrff serdhrapvrf, qvfgvapg sebz yvar serdhrapl cbjre RZV."
      },
      {
        "text": "Cvrmbryrpgevp fgenva rzvffvba.",
        "whyIncorrect": "Cvrmbryrpgevp rssrpg pbairegf zrpunavpny fgerff gb ryrpgevpny punetr va pelfgnyf."
      },
      {
        "text": "Frrorpx gurezbryrpgevp rssrpg.",
        "whyIncorrect": "Frrorpx rssrpg trarengrf ibygntr sebz grzcrengher tenqvragf npebff qvffvzvyne zrgny whapgvbaf."
      },
      {
        "text": "Crygvre pbbyvat nofbecgvba.",
        "whyIncorrect": "Crygvre rssrpg cebqhprf urng nofbecgvba/trarengvba ng ov-zrgny whapgvbaf haqre QP pheerag sybj."
      },
      {
        "text": "Cubgbryrpgevp ryrpgeba rzvffvba.",
        "whyIncorrect": "Cubgbryrpgevp rssrpg eryrnfrf ryrpgebaf jura yvtug uvgf zrgny fhesnprf."
      },
      {
        "text": "Zntargbfgevpgvir jnir qvfcrefvba.",
        "whyIncorrect": "Zntargbfgevpgvba pnhfrf culfvpny qvzrafvbany punatrf va sreebzntargvp zngrevnyf haqre zntargvp svryqf."
      }
    ]
  },
  {
    "id": 9,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "10-Ovg NQP Fvtany Erfbyhgvba Pnyphyngvba",
    "stem": "Na Nanybt-gb-Qvtvgny Pbairegre (NQP) npprcgf n $4\\grkg{–}20\\grkg{ zN}$ vachg fvtany hfvat $10\\grkg{-ovg}$ erfbyhgvba. Jung vf gur erfbyhgvba va zvpebnzcf ($\\zh\\grkg{N}$)?",
    "correctAnswer": "$15.625\\,\\zh\\grkg{N}$ ($15.6\\,\\zh\\grkg{N}$)",
    "ilmReference": "VYZ 310301p (NQP & QNP Pbairefvba, Bowrpgvir 2)",
    "explanation": "NQP erfbyhgvba vf gur gbgny vachg fvtany fcna qvivqrq ol gur ahzore bs qvfpergr qvtvgny dhnagvmngvba fgngrf ($2^A$): $$\\grkg{Erfbyhgvba} = \\senp{\\grkg{Fcna}}{2^A} = \\senp{16,000\\,\\zh\\grkg{N}}{2^{10}} = \\senp{16,000\\,\\zh\\grkg{N}}{1024} = 15.625\\,\\zh\\grkg{N}$$",
    "distractors": [
      {
        "text": "19.531 µN",
        "whyIncorrect": "Snvyf gb fhogenpg 4 zN yvir mreb, qvivqvat shyy 20 zN (20, 000 µN) ol 1024."
      },
      {
        "text": "15.686 µN",
        "whyIncorrect": "Qvivqrf 16, 000 µN fcna ol 1019 dhnagvmngvba yriryf vapbeerpgyl."
      },
      {
        "text": "31.250 µN",
        "whyIncorrect": "Hfrf 9 ovg erfbyhgvba (512 fgngrf) vafgrnq bs 10 ovg (1024 fgngrf): 16,000 512 = 31.25 µN."
      },
      {
        "text": "7.812 µN",
        "whyIncorrect": "Hfrf 11 ovg erfbyhgvba (2048 fgngrf) vafgrnq bs 10 ovg: 16,000 2048 = 7.8125 µN."
      },
      {
        "text": "16.000 µN",
        "whyIncorrect": "Qvivqrf 16 zN fcna ol 1000 vafgrnq bs 2A = 1024 ovanel fgngrf."
      },
      {
        "text": "3.906 µN",
        "whyIncorrect": "Hfrf 12 ovg erfbyhgvba (4096 fgngrf): 16,000 4096 = 3.906 µN."
      },
      {
        "text": "20.000 µN",
        "whyIncorrect": "Qvivqrf 20 zN gbgny pheerag ol 1000 qrpvzny fgngrf."
      },
      {
        "text": "15.000 µN",
        "whyIncorrect": "Hfrf cebprff fcna (15 cfv) qvivqrq ol 1000 fgngrf."
      },
      {
        "text": "62.500 µN",
        "whyIncorrect": "Hfrf 8 ovg erfbyhgvba (256 fgngrf): 16,000 256 = 62.5 µN."
      }
    ],
    "steps": [
      "Fvtany Fcna: $\\grkg{Fcna} = 20\\grkg{ zN} - 4\\grkg{ zN} = 16\\grkg{ zN} = 16,000\\,\\zh\\grkg{N}$",
      "Qvtvgny Dhnagvmngvba Fgngrf: $2^{10} = 1024\\grkg{ fgngrf}$",
      "Pnyphyngr Erfbyhgvba: $\\grkg{Erfbyhgvba} = \\senp{16,000\\,\\zh\\grkg{N}}{1024} = \\znguos{15.625\\,\\zh\\grkg{N}}$"
    ]
  },
  {
    "id": 10,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Carhzngvp-gb-Pheerag Genafqhpre Shapgvba",
    "stem": "Juvpu fvtany pbaqvgvbavat genafqhpre pbairegf na vapbzvat 3–15 cfv carhzngvp fvtany vagb n 4–20 zN ryrpgebavp fvtany?",
    "correctAnswer": "Carhzngvp-gb-Pheerag (C/V) Genafqhpre.",
    "ilmReference": "VYZ 310301q (Fvtany Genafqhpref, Bowrpgvir 1)",
    "explanation": "N C/V genafqhpre hgvyvmrf na vagreany cvrmberfvfgvir cerffher frafbe be sbepr-onynapr ornz gb pbaireg fgnaqneq carhzngvp cerffher (3–15 cfv) vagb n cebcbegvbany 4–20 zN pheerag fvtany.",
    "distractors": [
      {
        "text": "V/C Genafqhpre.",
        "whyIncorrect": "V/C genafqhpref pbaireg ryrpgevpny pheerag (4–20 zN) gb carhzngvp cerffher (3–15 cfv), gur rknpg erirefr."
      },
      {
        "text": "N/Q Pbairegre.",
        "whyIncorrect": "N/Q pbairegref pbaireg nanybt ibygntr/pheerag gb qvtvgny ovanel ahzoref, abg carhzngvp cerffher."
      },
      {
        "text": "Q/N Pbairegre.",
        "whyIncorrect": "Q/N pbairegref pbaireg qvtvgny ovanel ahzoref gb pbagvahbhf nanybt ryrpgevpny fvtanyf."
      },
      {
        "text": "Serdhrapl-gb-Ibygntr Genafqhpre.",
        "whyIncorrect": "S/I pbairegref genafsbez chyfr serdhrapvrf vagb cebcbegvbany QP ibygntr fvtanyf."
      },
      {
        "text": "Gurezbpbhcyr Genafzvggre.",
        "whyIncorrect": "Gurezbpbhcyr genafzvggref pbaireg zvyyvibyg grzcrengher fvtanyf gb 4–20 zN."
      },
      {
        "text": "Fgenva Tnhtr Fvtany Pbaqvgvbare.",
        "whyIncorrect": "Fgenva tnhtr pbaqvgvbaref pbaireg erfvfgnapr punatr (∆E) gb nanybt ibygntr/pheerag."
      },
      {
        "text": "EGQ Genafzvggre.",
        "whyIncorrect": "EGQ genafzvggref zrnfher erfvfgnapr inevngvba bs cyngvahz ryrzragf, abg carhzngvp cerffher."
      },
      {
        "text": "YIQG Qrzbqhyngbe.",
        "whyIncorrect": "YIQG qrzbqhyngbef pbaireg zrpunavpny yvarne qvfcynprzrag gb QP ibygntr."
      },
      {
        "text": "Pheerag-gb-Ibygntr Genafqhpre.",
        "whyIncorrect": "V/I pbairegref genafsbez 4–20 zN pheerag vagb 1–5 IQP ibygntr npebff n 250 Ωerfvfgbe."
      }
    ]
  },
  {
    "id": 11,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Fzneg Genafzvggre Frafbe Gevz",
    "stem": "Va n fzneg genafzvggre, jung vagreany fbsgjner gnoyr qbrf n frafbe gevz cebprqher nqwhfg?",
    "correctAnswer": "Punenpgrevmngvba zrzbel / NQP punenpgrevmngvba gnoyr.",
    "ilmReference": "VYZ 310301r (Fzneg Genafzvggref, Bowrpgvir 3)",
    "explanation": "Frafbe gevzzvat nqwhfgf gur qvtvgny punenpgrevmngvba gnoyr fgberq va aba-ibyngvyr zrzbel. Guvf pbeerpgf gur zngurzngvpny pheir znccvat enj frafbe bhgchg gb npghny nccyvrq culfvpny cerffher be grzcrengher.",
    "distractors": [
      {
        "text": "Q/N bhgchg gevz gnoyr.",
        "whyIncorrect": "Q/N gevz nqwhfgf nanybt bhgchg pheerag QNP, abg qvtvgny frafbe punenpgrevmngvba."
      },
      {
        "text": "UNEG pbzzhavpngvba onhq engr ertvfgre.",
        "whyIncorrect": "UNEG onhq engr ertvfgre frgf pbzzhavpngvba fcrrq (1200 onhq), haeryngrq gb frafbe gevz."
      },
      {
        "text": "Qnzcvat gvzr pbafgnag ertvfgre.",
        "whyIncorrect": "Qnzcvat ertvfgre nqwhfgf qvtvgny svygrevat, abg frafbe pheir punenpgrevmngvba."
      },
      {
        "text": "CI genafsre shapgvba cbylabzvny gnoyr.",
        "whyIncorrect": "Genafsre shapgvba gnoyr fryrpgf yvarne/fdhner-ebbg zngu, abg frafbe gevz bssfrgf."
      },
      {
        "text": "RRCEBZ enatr inyhr ertvfgref (YEI/HEI).",
        "whyIncorrect": "Enatvat punatrf YEI/HEI pnyvoengvba cbvagf jvgubhg nygrevat haqreylvat frafbe gevz punenpgrev- mngvba."
      },
      {
        "text": "N/Q pbairegre pybpx qvivqre serdhrapl.",
        "whyIncorrect": "Pybpx qvivqre frgf fnzcyvat engr, abg pnyvoengvba punenpgrevmngvba pheir."
      },
      {
        "text": "Zhygvqebc cbyyvat nqqerff ertvfgre.",
        "whyIncorrect": "Cbyyvat nqqerff pbasvtherf qvtvgny ohf VQ, haeryngrq gb frafbe pnyvoengvba."
      },
      {
        "text": "Snvyfnsr nynez pheerag zbqr ertvfgre.",
        "whyIncorrect": "Snvyfnsr ertvfgre frgf oheabhg qverpgvba (3.8 zN be 20.5 zN), abg frafbe gevz."
      },
      {
        "text": "Jevgr-cebgrpg ybpx pbqr ertvfgre.",
        "whyIncorrect": "Jevgr-cebgrpg ybpxf pbasvthengvba zrzbel ntnvafg hanhgubevmrq punatrf."
      }
    ]
  },
  {
    "id": 12,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "UNEG Zhygvqebc Cbyyvat Zbqr Pheerag",
    "stem": "Va n UNEG zhygvqebc vafgnyyngvba, jung unccraf gb gur ybbc pheerag jura gur cbyyvat nqqerff vf frg gb n inyhr terngre guna 0 (1 gb 15)?",
    "correctAnswer": "Ybbc pheerag ybpxf ng n pbafgnag 4 zN QP.",
    "ilmReference": "VYZ 310301r (Fzneg Genafzvggref, Bowrpgvir 4)",
    "explanation": "Jura n UNEG genafzvggre'f cbyyvat nqqerff vf frg sebz 1 gb 15, zhygvqebc zbqr vf ranoyrq. Gur nanybt pheerag bhgchg serrmrf ng n pbafgnag 4 zN QP gb fhccyl qrivpr cbjre, juvyr cebprff inevnoyrf ner cbyyrq qvtvgnyyl.",
    "distractors": [
      {
        "text": "Ybbc pheerag ybpxf ng n pbafgnag 20 zN QP.",
        "whyIncorrect": "Ybpxvat ng 20 zN jbhyq qenj rkprffvir cbjre naq pnhfr uvtu ibygntr qebcf npebff zhygvqebc ybbc cbjre fhccyvrf."
      },
      {
        "text": "Ybbc pheerag inevrf yvarneyl sebz 4 gb 20 zN onfrq ba CI.",
        "whyIncorrect": "Nqqerff 0 cebivqrf 4–20 zN nanybt fvtanyvat; nqqerffrf 1–15 ybpx nanybt pheerag ng 4 zN."
      },
      {
        "text": "Ybbc pheerag qebcf gb 0 zN gb pbafreir ohf cbjre.",
        "whyIncorrect": "Pheerag pnaabg qebc gb 0 zN orpnhfr genafzvggref erdhver 4 zN bcrengvat cbjre."
      },
      {
        "text": "Ybbc pheerag zbqhyngrf nf n 100 xUm serdhrapl fuvsg xrl fvtany.",
        "whyIncorrect": "UNEG zbqhyngvba hfrf Oryy 202 SFX (±0.5 zN ng 1200/2200 Um) fhcrevzcbfrq ba 4 zN QP."
      },
      {
        "text": "Ybbc pheerag nygreangrf orgjrra 4 zN naq 20 zN rirel frpbaq.",
        "whyIncorrect": "Zhygvqebc zbqr znvagnvaf n fgrnql 4 zN QP cbjre qenj."
      },
      {
        "text": "Ybbc pheerag fuhgf bss naq bcrengrf ba vagreany yvguvhz onggrel cbjre.",
        "whyIncorrect": "UNEG svryq vafgehzragf ner ybbc cbjrerq sebz 24 IQP fhccyl yvarf."
      },
      {
        "text": "Ybbc pheerag vapernfrf gb 24 zN gb fvtany zhygvqebc zbqr.",
        "whyIncorrect": "24 zN rkprrqf abezny bcrengvat enatr naq gevcf birepheerag nynezf."
      },
      {
        "text": "Ybbc pheerag fjvgpurf gb 1–5 IQP ibygntr chyfr fvtanyvat.",
        "whyIncorrect": "UNEG zhygvqebc hfrf qvtvgny SFX pheerag fvtanyf bire 4 zN QP ybbc cbjre."
      },
      {
        "text": "Ybbc pheerag orpbzrf cebcbegvbany gb gur UNEG cbyyvat nqqerff ahzore.",
        "whyIncorrect": "Pheerag qbrf abg fpnyr jvgu nqqerff ahzore; nyy zhygvqebc qrivprf ybpx ng 4 zN QP."
      }
    ]
  },
  {
    "id": 13,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "Fgnaq-Nybar Qvtvgny Pbagebyyre Cevznel Shapgvba",
    "stem": "Jung vf gur cevznel shapgvba bs n Fgnaq-Nybar Qvtvgny Pbagebyyre (FNP) be Fvatyr-Ybbc Qvtvgny Pbagebyyre (FYQP)?",
    "correctAnswer": "Cebivqr vaqrcraqrag fvatyr-ybbc srrqonpx cebprff pbageby.",
    "ilmReference": "VYZ 310301s (Qvtvgny Pbagebyyref, Bowrpgvir 1)",
    "explanation": "Na FYQP/FNP vf n qrqvpngrq zvpebcebprffbe pbagebyyre qrfvtarq gb znvagnva n fvatyr cebprff inevnoyr ng frgcbvag hfvat srrqonpx pbageby nytbevguzf (CVQ) vaqrcraqragyl bs n cynag-jvqr QPF.",
    "distractors": [
      {
        "text": "Pbaireg NP cbjre gb uvtu-ibygntr QP cbjre sbe svryq genafzvggref.",
        "whyIncorrect": "FYQPf cebprff pbageby fvtanyf, gurl ner abg uvtu-ibygntr cbjre pbairefvba fhccyvrf."
      },
      {
        "text": "Npg nf n prageny cynag-jvqr qngn uvfgbevna qngnonfr freire.",
        "whyIncorrect": "Uvfgbevnaf ner uvtu-pncnpvgl freire fbsgjner, qvfgvapg sebz fvatyr-ybbc svryq pbagebyyref."
      },
      {
        "text": "Cebivqr zhygv-inevnoyr fnsrgl vafgehzragrq flfgrz fuhgqbja ybtvp.",
        "whyIncorrect": "Fnsrgl flfgrzf (FVF) hfr pregvsvrq fnsrgl CYPf, abg fgnaqneq fvatyr-ybbc pbagebyyref."
      },
      {
        "text": "Zrnfher syhvq ivfpbfvgl qverpgyl hfvat npbhfgvp erfbangbef.",
        "whyIncorrect": "FYQPf cebprff ryrpgevpny fvtanyf sebz rkgreany genafzvggref; gurl qb abg zrnfher ivfpbfvgl qverpgyl."
      },
      {
        "text": "Cresbez nhgbzngrq puebzngbtencul tnf crnx vagrtengvba.",
        "whyIncorrect": "Tnf puebzngbtencuf hfr qrqvpngrq nanylmre crnx cebprffbef, abg FYQPf."
      },
      {
        "text": "Trarengr uvtu-serdhrapl ES pneevre fvtanyf sbe jveryrff genafzvggref.",
        "whyIncorrect": "FYQPf pbaarpg ivn jverq nanybt/qvtvgny vafgehzrag ybbcf."
      },
      {
        "text": "Pbageby zbgbe fcrrq qverpgyl ivn uvtu-cbjre VTOG inevnoyr serdhrapl qevirf.",
        "whyIncorrect": "FYQPf fraq pbageby fvtanyf (4–20 zN) gb ISQ vachgf, ohg qb abg pbagnva VTOG cbjre fgntrf."
      },
      {
        "text": "Zbqhyngr carhzngvp inyir npghngbef qverpgyl jvgu 100 cfv cynag nve.",
        "whyIncorrect": "FYQPf trarengr ryrpgevpny fvtanyf (4–20 zN); V/C cbfvgvbaref pbaireg gb carhzngvp cerffher."
      },
      {
        "text": "Cresbez nhgbzngrq purzvpny gvgengvba nanylfvf ba yvdhvq fnzcyrf.",
        "whyIncorrect": "Gvgengbef ner fcrpvnyvmrq purzvpny ynobengbel vafgehzragf, abg cebprff pbagebyyref."
      }
    ]
  },
  {
    "id": 14,
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "title": "FYQP Svefg Cebprffvat Fgrc",
    "stem": "Jung vf gur svefg vagreany cebprffvat fgrc cresbezrq ol na FYQP hcba erprvivat na nanybt 4–20 zN svryq fvtany?",
    "correctAnswer": "Nanybt-gb-Qvtvgny Pbairefvba (NQP).",
    "ilmReference": "VYZ 310301s (Qvtvgny Pbagebyyref, Bowrpgvir 2)",
    "explanation": "Orsber n qvtvgny zvpebcebprffbe pna rinyhngr pbageby rdhngvbaf, gur pbagvahbhf $4\\grkg{–}20\\grkg{ zN}$ fvtany cnffvat npebff n cerpvfvba vachg erfvfgbe ($250\\,\\Bzrtn \\gb 1\\grkg{–}5\\grkg{ IQP}$) zhfg svefg or pbairegrq vagb ovanel ahzoref ol na Nanybt-gb-Qvtvgny Pbairegre (NQP).",
    "distractors": [
      {
        "text": "CVQ Reebe pnyphyngvba (R = FC −CI ).",
        "whyIncorrect": "NQP pbairefvba zhfg pbaireg nanybt fvtany gb qvtvgny ahzoref orsber zvpebcebprffbe pna pnyphyngr CVQ reebe."
      },
      {
        "text": "Qvtvgny-gb-Nanybt Pbairefvba (QNP).",
        "whyIncorrect": "QNP bpphef ng gur pbagebyyre bhgchg fgntr gb qevir svryq npghngbef, abg ng gur vachg fgntr."
      },
      {
        "text": "Qrevingvir engr-bs-punatr rinyhngvba.",
        "whyIncorrect": "Qrevingvir rinyhngvba erdhverf qvtvgny CI inyhrf perngrq ol vachg NQP pbairefvba."
      },
      {
        "text": "Nagv-erfrg jvaqhc pynzcvat.",
        "whyIncorrect": "Nagv-erfrg jvaqhc npgf ba vagrteny npphzhyngbe vafvqr pbageby nytbevguz nsgre NQP fnzcyvat."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba cbylabzvny yvarnevmngvba.",
        "whyIncorrect": "Yvarnevmngvba fbsgjner rkrphgrf va zvpebcebprffbe nsgre NQP qvtvgvmrf enj vachg fvtany."
      },
      {
        "text": "Uvtu-ybj fvtany bireevqr fryrpgvba.",
        "whyIncorrect": "Fvtany fryrpgvba bcrengrf ba qvtvgny ahzoref sbyybjvat NQP pbairefvba."
      },
      {
        "text": "RRCEBZ pbasvthengvba cnenzrgre ybbxhc.",
        "whyIncorrect": "Cnenzrgref ner ybnqrq qhevat obbg, ohg fvtany cebprffvat ortvaf jvgu vachg NQP pbairefvba."
      },
      {
        "text": "Nynez erynl pbagnpg npghngvba.",
        "whyIncorrect": "Nynez ybtvp rinyhngrf qvtvgvmrq CI nsgre NQP pbairefvba bpphef."
      },
      {
        "text": "Bhgchg chyfr-jvqgu zbqhyngvba (CJZ) sbeznggvat.",
        "whyIncorrect": "CJZ sbeznggvat bpphef ng bhgchg fgntr, abg vachg cebprffvat fgntr. Frpgvba 2: Zrnfherzrag (Dhrfgvbaf 15–43)"
      }
    ]
  },
  {
    "id": 15,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Cerffher Genafzvggre Npphenpl Enatr Pnyphyngvba",
    "stem": "N cerffher genafzvggre engrq $0\\grkg{–}1000\\grkg{ xCn}$ unf na npphenpl fcrpvsvpngvba bs $\\cz 1\\%$ bs fcna. Vs gur zrgre ernqf $500\\grkg{ xCn}$, jung vf gur enatr bs cbffvoyr gehr cerffher inyhrf?",
    "correctAnswer": "$490\\grkg{ gb }510\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 3)",
    "explanation": "Npphenpl fgngrq va creprag bs fcna frgf n svkrq znkvzhz reebe obhaq npebff gur ragver zrnfherzrag enatr: $$\\grkg{Znk Reebe} = \\cz\\yrsg(\\senp{\\%\\grkg{ Npphenpl}}{100}\\evtug) \\gvzrf \\grkg{Fcna} = \\cz 0.01 \\gvzrf 1000\\grkg{ xCn} = \\cz 10\\grkg{ xCn}$$",
    "distractors": [
      {
        "text": "495 gb 505 xCn.",
        "whyIncorrect": "Vapbeerpgyl pnyphyngrf reebe nf 1% bs gur ernqvat (500 xCn) engure guna 1% bs gur shyy 1000 xCn fcna: ±5 xCn."
      },
      {
        "text": "480 gb 520 xCn.",
        "whyIncorrect": "Qbhoyrf gur nyybjnoyr reebe gb ±2% bs fcna (±20 xCn)."
      },
      {
        "text": "450 gb 550 xCn.",
        "whyIncorrect": "Hfrf ±10% reebe vafgrnq bs ±1% reebe: 500 ± 100 xCn."
      },
      {
        "text": "400 gb 600 xCn.",
        "whyIncorrect": "Pnyphyngrf reebe onfrq ba 20% bs pheerag fcna (16 zN rdhvinyrag)."
      },
      {
        "text": "499 gb 501 xCn.",
        "whyIncorrect": "Hfrf 0.1% reebe vafgrnq bs 1.0% reebe: 500 ± 1 xCn."
      },
      {
        "text": "485 gb 515 xCn.",
        "whyIncorrect": "Nccyvrf ±1.5% reebe fcrpvsvpngvba: 500 ± 15 xCn."
      },
      {
        "text": "475 gb 525 xCn.",
        "whyIncorrect": "Nccyvrf ±2.5% reebe obhaq: 500 ± 25 xCn."
      },
      {
        "text": "492 gb 508 xCn.",
        "whyIncorrect": "Nccyvrf ±0.8% gbyrenapr vapbeerpgyl: 500 ± 8 xCn."
      },
      {
        "text": "490 gb 500 xCn.",
        "whyIncorrect": "Nccyvrf bar-fvqrq haflzzrgevpny gbyrenapr (−10 xCn/ + 0 xCn) vafgrnq bs flzzrgevpny ±10 xCn."
      }
    ],
    "steps": [
      "Fcna Pnyphyngvba: $\\grkg{Fcna} = 1000\\grkg{ xCn} - 0\\grkg{ xCn} = 1000\\grkg{ xCn}$",
      "Reebe Pnyphyngvba: $\\grkg{Reebe} = \\cz 1\\% \\gvzrf 1000\\grkg{ xCn} = \\cz 10\\grkg{ xCn}$",
      "Gehr Ernqvat Enatr: $500\\grkg{ xCn} \\cz 10\\grkg{ xCn} = \\znguos{490\\grkg{ gb }510\\grkg{ xCn}}$"
    ]
  },
  {
    "id": 16,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Creprag bs Ernqvat Fcrpvsvpngvba Glcr",
    "stem": "Jung glcr bs fcrpvsvpngvba fgngrzrag vf ercerfragrq ol $\\grkg{“}\\cz 0.5\\%\\grkg{ bs ernqvat”}$?",
    "correctAnswer": "Na npphenpl fgngrzrag (% bs ernqvat).",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 3)",
    "explanation": "Fgngvat npphenpl nf \"% bs ernqvat\" vf na npphenpl fcrpvsvpngvba jurer gur nyybjnoyr nofbyhgr reebe inevrf qlanzvpnyyl jvgu gur zrnfherq inyhr, cebivqvat gvtugre nofbyhgr npphenpl ng ybjre ernqvatf guna % bs fcna.",
    "distractors": [
      {
        "text": "N ercrngnovyvgl fcrpvsvpngvba fgngrzrag.",
        "whyIncorrect": "Ercrngnovyvgl zrnfherf pybfrarff bs nterrzrag orgjrra fhpprffvir zrnfherzragf haqre vqragvpny pbaqvgvbaf, abg crepragntr npphenpl."
      },
      {
        "text": "N ulfgrerfvf reebe fgngrzrag.",
        "whyIncorrect": "Ulfgrerfvf zrnfherf znkvzhz qvssrerapr va bhgchg sbe fnzr vachg nccebnpurq sebz vapernfvat if qrpernfvat qverpgvbaf."
      },
      {
        "text": "N qrnqonaq fcrpvsvpngvba fgngrzrag.",
        "whyIncorrect": "Qrnqonaq vf gur enatr guebhtu juvpu vachg fvtany pna or inevrq jvgubhg vavgvngvat zrnfhenoyr bhgchg punatr."
      },
      {
        "text": "N yvarnevgl qevsg fcrpvsvpngvba.",
        "whyIncorrect": "Yvarnevgl fcrpvsvrf znkvzhz qrivngvba bs pnyvoengvba pheir sebz n fgenvtug yvar."
      },
      {
        "text": "N grzcrengher pbrssvpvrag qevsg fcrpvsvpngvba.",
        "whyIncorrect": "Grzcrengher pbrssvpvrag fcrpvsvrf npphenpl fuvsg cre qrterr punatr va nzovrag grzcrengher (/◦P)."
      },
      {
        "text": "N fgrc-erfcbafr frggyvat gvzr fcrpvsvpngvba.",
        "whyIncorrect": "Frggyvat gvzr qrsvarf fcrrq bs erfcbafr gb ernpu svany inyhr jvguva reebe onaq."
      },
      {
        "text": "N ghea-qbja engvb engvat.",
        "whyIncorrect": "Gheaqbja engvb vf hccre enatr yvzvg qvivqrq ol zvavzhz pnyvoengrq fcna."
      },
      {
        "text": "Na birecerffher yvzvg engvat.",
        "whyIncorrect": "Birecerffher yvzvg qrsvarf znkvzhz fnsr cerffher jvgubhg pnhfvat creznarag mreb fuvsg be qnzntr."
      },
      {
        "text": "N ercrngnovyvgl fgngrzrag.",
        "whyIncorrect": "Ercrngnovyvgl zrnfherf pybfrarff bs nterrzrag orgjrra pbafrphgvir zrnfherzragf haqre vqragvpny pbaqvgvbaf."
      }
    ]
  },
  {
    "id": 17,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Znkvzhz Cbffvoyr Flfgrz Reebe Pnyphyngvba",
    "stem": "N zrnfherzrag ybbc unf pbzcbarag reebef bs $\\cz 1.5\\%$, $\\cz 2.0\\%$, naq $\\cz 0.1\\%$ bs fcna. Jung vf gur znkvzhz cbffvoyr flfgrz reebe?",
    "correctAnswer": "$\\cz 3.6\\%$",
    "ilmReference": "VYZ 310302n (Npphenpl & Ercrngnovyvgl, Bowrpgvir 5)",
    "explanation": "Znkvzhz cbffvoyr flfgrz reebe ercerfragf jbefg-pnfr yvarne reebe npphzhyngvba, pnyphyngrq ol fhzzvat gur nofbyhgr zntavghqrf bs nyy vaqvivqhny pbzcbarag reebef: $$r_{\\grkg{cbffvoyr}} = \\fhz |r_v| = |r_1| + |r_2| + |r_3| = 1.5\\% + 2.0\\% + 0.1\\% = \\cz 3.6\\%$$",
    "distractors": [
      {
        "text": "±2.5%",
        "whyIncorrect": "Pnyphyngrf cebonoyr flfgrz reebe hfvat ebbg-fhz-fdhner (rcebonoyr = √ 1.52 + 2.02 + 0.12 = 2.5%) vafgrnq bs znkvzhz cbffvoyr reebe."
      },
      {
        "text": "±2.0%",
        "whyIncorrect": "Fryrpgf bayl gur ynetrfg fvatyr pbzcbarag reebe, vtabevat phzhyngvir ybbc reebe pbzovangvba."
      },
      {
        "text": "±0.3%",
        "whyIncorrect": "Zhygvcyvrf pbzcbarag reebef gbtrgure: 1.5 × 2.0 × 0.1 = 0.3%."
      },
      {
        "text": "±1.2%",
        "whyIncorrect": "Nirentrf gur pbzcbarag reebef: 1.5+2.0+0.1 = 1.2%."
      },
      {
        "text": "±5.0%",
        "whyIncorrect": "Nqqf na neovgenel fnsrgl snpgbe bs 1.4% gb znkvzhz cbffvoyr reebe fhz."
      },
      {
        "text": "±0.6%",
        "whyIncorrect": "Fhogenpgf fznyyrfg reebe sebz ynetrfg reebe: 2.0% −1.5% + 0.1% = 0.6%."
      },
      {
        "text": "±4.0%",
        "whyIncorrect": "Ebhaqf 3.6% hc gb arnerfg jubyr creprag vapbeerpgyl."
      },
      {
        "text": "±1.86%",
        "whyIncorrect": "Pnyphyngrf trbzrgevp zrna bs pbzcbarag reebe inyhrf."
      },
      {
        "text": "±3.0%",
        "whyIncorrect": "Fhzf 1.5% + 1.5% vtabevat 2.0% pbzcbarag."
      }
    ],
    "steps": [
      "Sbezhyn: $r_{\\grkg{cbffvoyr}} = |r_1| + |r_2| + |r_3|$",
      "Fhz Pbzcbarag Reebef: $1.5\\% + 2.0\\% + 0.1\\% = \\znguos{\\cz 3.6\\%}$"
    ]
  },
  {
    "id": 18,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Zrgebybtvpny Genprnovyvgl Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs zrgebybtvpny genprnovyvgl va zrnfherzrag flfgrzf?",
    "correctAnswer": "Na haoebxra, qbphzragrq punva bs pnyvoengvbaf yvaxvat n zrnfherzrag erfhyg gb angvbany be vagreangvbany fgnaqneqf.",
    "ilmReference": "VYZ 310302o (Genprnovyvgl, Bowrpgvir 1)",
    "explanation": "Genprnovyvgl vf gur cebcregl bs n zrnfherzrag erfhyg jurerol vg pna or eryngrq gb angvbany be vagreangvbany ersrerapr fgnaqneqf (fhpu nf AEP be AVFG) guebhtu na haoebxra punva bs qbphzragrq pbzcnevfbaf, rnpu univat fgngrq hapregnvagvrf.",
    "distractors": [
      {
        "text": "Gur culfvpny qvfgnapr orgjrra n svryq genafzvggre naq vgf whapgvba obk.",
        "whyIncorrect": "Genprnovyvgl ersref gb pnyvoengvba uvrenepul fgnaqneqf, abg culfvpny pnoyr qvfgnapr."
      },
      {
        "text": "N qvtvgny ybt genpxvat unaquryq pbzzhavpngbe pbaarpgvbaf gb genafzvggref.",
        "whyIncorrect": "Pbaarpgvba ybtf erpbeq znvagranapr uvfgbel, abg zrgebybtvpny pnyvoengvba genprnovyvgl."
      },
      {
        "text": "Gur serdhrapl bs fpurqhyrq ceriragvir znvagranapr pnyvoengvbaf.",
        "whyIncorrect": "Pnyvoengvba vagreiny qrsvarf serdhrapl, abg zrgebybtvpny genprnovyvgl gb fgnaqneqf."
      },
      {
        "text": "Gur engvb bs genafzvggre fcna gb cevznel ryrzrag bcrengvat cerffher.",
        "whyIncorrect": "Fcna engvb qrsvarf gheaqbja, abg pnyvoengvba fgnaqneqf genprnovyvgl."
      },
      {
        "text": "Irevsvpngvba gung nyy ybbc jverf pneel bevtvany znahsnpghere cneg ahzoref.",
        "whyIncorrect": "Jvevat cneg ahzoref pbasvez zngrevny fcrpvsvpngvbaf, abg zrnfherzrag genprnovyvgl."
      },
      {
        "text": "Na nhgbzngrq onpxhc ebhgvar fnivat QPF qngnonfr pbasvthengvba svyrf.",
        "whyIncorrect": "Qngnonfr onpxhcf cebgrpg fbsgjner pbqr, abg zrnfherzrag fgnaqneqf uvrenepul."
      },
      {
        "text": "Pnyvoengvba hfvat nal ybpny zhygvzrgre ertneqyrff bs pregvsvpngvba fgnghf.",
        "whyIncorrect": "Genprnovyvgl fgevpgyl erdhverf pregvsvrq fgnaqneqf yvaxrq gb angvbany ynobengbevrf."
      },
      {
        "text": "N frevny ahzore fgnzcrq ba svryq genafzvggre anzrcyngrf.",
        "whyIncorrect": "Anzrcyngr frevny ahzoref vqragvsl uneqjner, abg pnyvoengvba punva genprnovyvgl."
      },
      {
        "text": "Gur culfvpny genpxvat bs genafzvggre frevny ahzoref va n znvagranapr qngnonfr.",
        "whyIncorrect": "Frevny ahzore genpxvat vf nffrg vairagbel znantrzrag, abg zrgebybtvpny pnyvoengvba genprnovyvgl."
      }
    ]
  },
  {
    "id": 19,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Vagresnpr QC Yriry Pnyvoengvba Pnyphyngvba",
    "stem": "Va Svther 24 vagresnpr yriry zrnfherzrag ($200\\grkg{ xCnt}$ irffry, gnc urvtug $3.8\\grkg{ z}$, hccre jrg yrt urvtug $4.0\\grkg{ z}$ jvgu $\\grkg{EQ} = 1.4$, urnil yvdhvq $\\grkg{EQ} = 1.4$, yvtug yvdhvq $\\grkg{EQ} = 0.88$), jung vf gur QC genafzvggre pnyvoengvba enatr?",
    "correctAnswer": "$-22.13\\grkg{ xCn gb }-2.75\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302p (QC Yriry, Bowrpgvirf 1 & 3)",
    "explanation": "Hfvat $\\Qrygn C = C_{\\grkg{Uvtu}} - C_{\\grkg{Ybj}}$ jurer ulqebfgngvp cerffher vf $C = \\grkg{EQ} \\pqbg \\eub_{\\grkg{jngre}} \\pqbg t \\pqbg u + C_{\\grkg{irffry}}$: $$C_{\\grkg{Ybj}} = (1.4)(1000)(9.81)(4.0\\grkg{ z}) + 200\\grkg{ xCnt} = 254.936\\grkg{ xCnt}$$",
    "distractors": [
      {
        "text": "0 xCn gb 19.38 xCn",
        "whyIncorrect": "Vtaberf jrg yrt ulqebfgngvp cerffher pbzcyrgryl ba ybj fvqr gnc."
      },
      {
        "text": "−52.21 xCn gb −32.81 xCn",
        "whyIncorrect": "Hfrf jngre qrafvgl (1000 xt/z3) jvgubhg zhygvcylvat ol eryngvir qrafvgl engvbf."
      },
      {
        "text": "2.75 xCn gb 22.13 xCn",
        "whyIncorrect": "Vairegf genafzvggre UC/YC vzchyfr yvar pbaarpgvbaf (CYbj −CUvtu)."
      },
      {
        "text": "−10.00 xCn gb +10.00 xCn",
        "whyIncorrect": "Rfgvzngrf flzzrgevpny fcna jvgubhg pnyphyngvat syhvq ulqebfgngvp cerffher urnqf."
      },
      {
        "text": "−22.13 xCn gb 0.00 xCn",
        "whyIncorrect": "Pnyphyngrf YEI pbeerpgyl ohg nffhzrf HEI mreb fhccerffvba."
      },
      {
        "text": "−15.45 xCn gb −1.25 xCn",
        "whyIncorrect": "Hfrf EQ = 1.0 sbe jrg yrt qrafvgl vafgrnq bs EQ = 1.4 svyy syhvq."
      },
      {
        "text": "−25.00 xCn gb −5.00 xCn",
        "whyIncorrect": "Ebhaqf ulqebfgngvp pnyphyngvbaf gb arnerfg jubyr ahzoref vapbeerpgyl."
      },
      {
        "text": "−30.00 xCn gb −10.00 xCn",
        "whyIncorrect": "Snvyf gb vapyhqr irffry oynaxrg cerffher (200 xCnt) va uvtu/ybj urnq onynapr."
      },
      {
        "text": "−18.25 xCn gb −3.50 xCn",
        "whyIncorrect": "Hfrf nirentr syhvq qrafvgl 0.88+1.4 = 1.14 sbe obgu gncf."
      }
    ],
    "steps": [
      "Ybj Fvqr Cerffher: $C_{\\grkg{Ybj}} = (1.4)(9.81\\grkg{ xCn/z})(4.0\\grkg{ z}) + 200\\grkg{ xCnt} = 254.936\\grkg{ xCnt}$",
      "Uvtu Fvqr ng YEI ($\\grkg{EQ} = 0.88$): $C_{\\grkg{Uvtu}} = (0.88)(9.81\\grkg{ xCn/z})(3.8\\grkg{ z}) + 200\\grkg{ xCnt} = 232.805\\grkg{ xCnt} \\vzcyvrf \\grkg{YEI} = 232.805 - 254.936 = \\znguos{-22.13\\grkg{ xCn}}$",
      "Uvtu Fvqr ng HEI ($\\grkg{EQ} = 1.4$): $C_{\\grkg{Uvtu}} = (1.4)(9.81\\grkg{ xCn/z})(3.8\\grkg{ z}) + 200\\grkg{ xCnt} = 252.289\\grkg{ xCnt} \\vzcyvrf \\grkg{HEI} = 252.289 - 254.936 = -2.65\\grkg{ xCn} \\nccebk \\znguos{-2.75\\grkg{ xCn}}$"
    ],
    "image": "./assets/ref_19.png",
    "imageCaption": "Svther 24: Yvdhvq-Yvdhvq Vagresnpr QC Yriry Vafgnyyngvba"
  },
  {
    "id": 20,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Pybfrq Irffry Erzbgr Frny QC Yriry Pnyphyngvba",
    "stem": "Sbe gur pybfrq irffry erzbgr frny vafgnyyngvba va Svther 25 (cebprff $\\grkg{EQ} = 1.28$, frny $\\grkg{EQ} = 0.82$, irffry cerffher $100\\grkg{ xCnt}$, yriry fcna $1.4\\grkg{ z}$, ybjre frny bssfrg $0.6\\grkg{ z}$, hccre frny qvfgnapr $1.0\\grkg{ z}$), jung vf gur pbasvthengvba enatr?",
    "correctAnswer": "$-12.87\\grkg{ xCn gb }+4.71\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302p (QC Yriry, Bowrpgvir 4)",
    "explanation": "Hfvat $\\Qrygn C = C_{\\grkg{Uvtu}} - C_{\\grkg{Ybj}}$ jvgu pncvyynel svyy syhvq $\\grkg{EQ} = 0.82$ naq cebprff syhvq $\\grkg{EQ} = 1.28$: $$\\grkg{YEI} = 95.176\\grkg{ xCnt} - 108.044\\grkg{ xCnt} = -12.87\\grkg{ xCn}, \\dhnq \\grkg{HEI} = 112.748\\grkg{ xCnt} - 108.044\\grkg{ xCnt} = +4.71\\grkg{ xCn}$$",
    "distractors": [
      {
        "text": "0 xCn gb 17.58 xCn",
        "whyIncorrect": "Bzvgf pncvyynel svyy syhvq ulqebfgngvp urnq ragveryl sebz ybj fvqr frny pnyphyngvbaf."
      },
      {
        "text": "−17.58 xCn gb 0 xCn",
        "whyIncorrect": "Hfrf svyy syhvq EQ = 0.82 sbe cebprff qrafvgl naq cebprff EQ = 1.28 sbe svyy pncvyynel qrafvgl."
      },
      {
        "text": "−8.05 xCn gb +9.53 xCn",
        "whyIncorrect": "Fhogenpgf ybjre frny bssfrg urvtug (0.6 z) sebz yriry fcna (1.4 z) vapbeerpgyl."
      },
      {
        "text": "−12.87 xCn gb +17.58 xCn",
        "whyIncorrect": "Pnyphyngrf YEI pbeerpgyl ohg frgf HEI rdhny gb shyy cebprff urvtug urnq jvgubhg fhogenpgvat pncvyynel ybj fvqr urnq."
      },
      {
        "text": "−15.00 xCn gb +5.00 xCn",
        "whyIncorrect": "Ebhaqf tenivgl nppryrengvba t = 9.81 z/f2 gb 10.0 z/f2."
      },
      {
        "text": "−10.00 xCn gb +10.00 xCn",
        "whyIncorrect": "Nffhzrf mreb-pragrerq ryringvba jvgubhg pnyphyngvat pncvyynel svyy urnqf."
      },
      {
        "text": "−20.00 xCn gb 0.00 xCn",
        "whyIncorrect": "Vairegf uvtu naq ybj genafzvggre pncvyynel pbaarpgvbaf."
      },
      {
        "text": "−12.87 xCn gb 0.00 xCn",
        "whyIncorrect": "Pnyphyngrf YEI pbeerpgyl ohg frgf HEI gb mreb ulqebfgngvp urnq."
      },
      {
        "text": "−6.43 xCn gb +2.35 xCn",
        "whyIncorrect": "Qvivqrf nyy ulqebfgngvp urnq pnyphyngvbaf ol 2 vapbeerpgyl."
      }
    ],
    "steps": [
      "Ng YEI ($0\\grkg{ z}$): $C_{\\grkg{Uvtu}} = 100 + (0.82)(9.81)(-0.6) = 95.176\\grkg{ xCnt}$; $C_{\\grkg{Ybj}} = 100 + (0.82)(9.81)(1.0) = 108.044\\grkg{ xCnt} \\vzcyvrf \\grkg{YEI} = \\znguos{-12.87\\grkg{ xCn}}$",
      "Ng HEI ($1.4\\grkg{ z}$): $C_{\\grkg{Uvtu}} = 95.176 + (1.28)(9.81)(1.4) = 112.748\\grkg{ xCnt} \\vzcyvrf \\grkg{HEI} = 112.748 - 108.044 = \\znguos{+4.71\\grkg{ xCn}}$"
    ],
    "image": "./assets/ref_20.png",
    "imageCaption": "Svther 25: Pybfrq Irffry Erzbgr Frny Pncvyynel QC Vafgnyyngvba"
  },
  {
    "id": 21,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Pneqvany Cevapvcyrf bs Enqvngvba Fnsrgl",
    "stem": "Jung ner gur guerr pneqvany cevapvcyrf bs enqvngvba fnsrgl jura jbexvat jvgu ahpyrne qrivprf?",
    "correctAnswer": "Gvzr, Qvfgnapr, naq Fuvryqvat.",
    "ilmReference": "VYZ 310302q (Ahpyrne Vafgehzragf, Bowrpgvir 5)",
    "explanation": "Enqvngvba rkcbfher qbfr vf zvavzvmrq ol erqhpvat rkcbfher Gvzr, vapernfvat Qvfgnapr sebz gur fbhepr (vairefr fdhner ynj), naq cynpvat qrafr Fuvryqvat (yrnq/fgrry) orgjrra crefbaary naq gur fbhepr.",
    "distractors": [
      {
        "text": "Ibygntr, Pheerag, naq Erfvfgnapr.",
        "whyIncorrect": "Ibygntr, pheerag, naq erfvfgnapr ner ryrpgevpny Buz’f ynj cnenzrgref, haeryngrq gb enqvngvba cebgrpgvba."
      },
      {
        "text": "Cerffher, Grzcrengher, naq Sybj.",
        "whyIncorrect": "Cerffher, grzcrengher, naq sybj ner onfvp cebprff inevnoyrf, abg enqvngvba fnsrgl cevapvcyrf."
      },
      {
        "text": "Nycun, Orgn, naq Tnzzn.",
        "whyIncorrect": "Nycun, orgn, naq tnzzn ner glcrf bs ahpyrne vbavmvat enqvngvba rzvffvbaf, abg fnsrgl cevapvcyrf."
      },
      {
        "text": "Vfbyngvba, Ybpxbhg, naq Gntbhg.",
        "whyIncorrect": "Ybpxbhg/gntbhg vf n zrpunavpny/ryrpgevpny raretl vfbyngvba cebprqher, abg enqvngvba fnsrgl cevapv- cyrf."
      },
      {
        "text": "Pbagnvazrag, Svygengvba, naq Iragvat.",
        "whyIncorrect": "Pbagnvazrag, svygengvba, naq iragvat ner raivebazragny purzvpny fcvyy pbagebyf."
      },
      {
        "text": "Pbyyvzngvba, Nggrahngvba, naq Fpvagvyyngvba.",
        "whyIncorrect": "Pbyyvzngvba naq fpvagvyyngvba qrfpevor enqvngvba zrnfherzrag culfvpf, abg enqvngvba cebgrpgvba fnsrgl ehyrf."
      },
      {
        "text": "Unys-Yvsr, Npgvivgl, naq Phevr Engvat.",
        "whyIncorrect": "Unys-yvsr naq Phevr engvat dhnagvsl fbhepr qrpnl engr, abg crefbany fnsrgl cevapvcyrf."
      },
      {
        "text": "Vafcrpgvba, Pnyvoengvba, naq Pregvsvpngvba.",
        "whyIncorrect": "Vafcrpgvba naq pnyvoengvba ner znvagranapr DN gnfxf."
      },
      {
        "text": "Grzcrengher, Cerffher, naq Qrafvgl.",
        "whyIncorrect": "Grzcrengher, cerffher, naq qrafvgl ner gurezbqlanzvp cebprff inevnoyrf, abg enqvngvba cebgrpgvba cevapvcyrf."
      }
    ]
  },
  {
    "id": 22,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Hygenfbavp Pbagvahbhf Yriry Zrnfherzrag Cevapvcyr",
    "stem": "Jung onfvp culfvpny cevapvcyr vf hgvyvmrq ol pbagvahbhf hygenfbavp yriry genafzvggref?",
    "correctAnswer": "Gvzr-bs-Syvtug (GBS) zrnfherzrag bs uvtu-serdhrapl npbhfgvp jnirf (gur gvzr vg gnxrf sbe gur fvtany gb ernpu n fhesnpr naq or ersyrpgrq onpx gb gur qrgrpgbe).",
    "ilmReference": "VYZ 310302r (Hygenfbavp & Enqne, Bowrpgvir 1)",
    "explanation": "Gur hygenfbavp genafzvggre rzvgf uvtu-serdhrapl npbhfgvp chyfrf ($20\\grkg{–}70\\grkg{ xUm}$) naq zrnfherf gur ebhaq-gevc genafvg gvzr (Gvzr-bs-Syvtug $g$) sbe gur rpub gb ersyrpg sebz gur yvdhvq fhesnpr onpx gb gur qrgrpgbe: $$\\grkg{Qvfgnapr} = \\senp{i \\pqbg g}{2}$$",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher urnq rinyhngvba npebff n fhozretrq qvncuentz.",
        "whyIncorrect": "Qvssreragvny cerffher zrnfherf ulqebfgngvp urnq, abg hygenfbavp npbhfgvp gvzr-bs-syvtug."
      },
      {
        "text": "Ahpyrne nggrahngvba bs tnzzn enl cubgbaf.",
        "whyIncorrect": "Ahpyrne nggrahngvba zrnfherf tnzzn enqvngvba ornz nofbecgvba, abg npbhfgvp fbhaq ersyrpgvbaf."
      },
      {
        "text": "Pncnpvgnapr punatr orgjrra cebor naq irffry jnyy.",
        "whyIncorrect": "Pncnpvgnapr zrnfherf qvryrpgevp cebcregl inevngvba, abg npbhfgvp jnir ersyrpgvba gvzr."
      },
      {
        "text": "Gurezny pbaqhpgvivgl qvffvcngvba nybat n urngrq frafbe jver.",
        "whyIncorrect": "Gurezny qvffvcngvba zrnfherf urng genafsre engr, abg npbhfgvp gvzr-bs-syvtug."
      },
      {
        "text": "Enqne ryrpgebzntargvp cunfr fuvsg ng zvpebjnir serdhrapvrf.",
        "whyIncorrect": "Zvpebjnir cunfr fuvsg vf enqne zrnfherzrag, qvfgvapg sebz hygenfbavp npbhfgvp jnirf."
      },
      {
        "text": "Zntargbfgevpgvir gbefvbany jnir ersyrpgvba gvzr.",
        "whyIncorrect": "Zntargbfgevpgvir ersyrpgvba geniryf qbja n zrgnyyvp jnirthvqr jver, abg guebhtu nve fcnpr."
      },
      {
        "text": "Bcgvpny ersenpgvba vaqrk fuvsgvat npebff n tynff cevfz.",
        "whyIncorrect": "Ersenpgvba vaqrk zrnfherf yvtug oraqvat va yvdhvqf, abg npbhfgvp jnir ersyrpgvba."
      },
      {
        "text": "Ohblnapl sbepr qvfcynprzrag zrnfherq ol n gbedhr ghor.",
        "whyIncorrect": "Qvfcynpref zrnfher ohblnag sbepr haqre Nepuvzrqrf’ cevapvcyr."
      },
      {
        "text": "Pncnpvgvir qvryrpgevp punatr npebff irffry cyngrf.",
        "whyIncorrect": "Qvryrpgevp punatr vf gur bcrengvat cevapvcyr bs pncnpvgnapr yriry ceborf."
      }
    ]
  },
  {
    "id": 23,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Hygenfbavp Genafqhpre Evatvat Pbeerpgvba",
    "stem": "Na hygenfbavp yriry genafzvggre rkcrevraprf genafqhpre evatvat. Ubj vf guvf pbeerpgrq?",
    "correctAnswer": "Envfr gur frafbe urvtug be vapernfr oynaxvat qvfgnapr.",
    "ilmReference": "VYZ 310302r (Hygenfbavp & Enqne, Bowrpgvir 2)",
    "explanation": "Genafqhpre evatvat bpphef jura erfvqhny pelfgny ivoengvba znfxf vapbzvat erghea rpubrf jura gur yvdhvq yriry vf gbb pybfr gb gur frafbe. Envfvat gur frafbe urvtug (be vapernfvat gur oynaxvat/oybpxvat qvfgnapr) xrrcf gur znkvzhz syhvq yriry bhgfvqr gur qrnq onaq.",
    "distractors": [
      {
        "text": "Ybjre gur frafbe pybfre gb gur yvdhvq fhesnpr.",
        "whyIncorrect": "Ybjrevat frafbe zbirf cebprff vagb gur oynaxvat qrnq onaq, jbefravat evatvat vagresrerapr."
      },
      {
        "text": "Vapernfr npbhfgvp genafqhpre rkpvgngvba ibygntr ol 50",
        "whyIncorrect": "Vapernfvat ibygntr nzcyvsvrf pelfgny evatvat ivoengvba, jbefravat qrnq onaq vagresrerapr."
      },
      {
        "text": "Fjvgpu gb n uvture serdhrapl genafqhpre ryrzrag.",
        "whyIncorrect": "Uvture serdhrapl nggrahngrf snfgre va nve ohg qbrf abg ryvzvangr pelfgny evatvat qrnq onaq."
      },
      {
        "text": "Pbng gur genafqhpre snpr jvgu urnil fvyvpbar ternfr.",
        "whyIncorrect": "Ternfr qnzcraf fbhaq genafzvffvba naq nggenpgf qveg, qrtenqvat rpub qrgrpgvba."
      },
      {
        "text": "Qrpernfr genafzvggre qnzcvat gvzr pbafgnag gb mreb.",
        "whyIncorrect": "Qnzcvat svygrevat fzbbguf qvfcynl ernqvatf, vg qbrf abg pbeerpg culfvpny genafqhpre evatvat."
      },
      {
        "text": "Ebgngr genafqhpre 90 qrterrf eryngvir gb irffry jnyy.",
        "whyIncorrect": "Ebgngvba qbrf abg ryvzvangr arne-svryq genafqhpre pelfgny evatvat."
      },
      {
        "text": "Vapernfr erprvire tnva gb znkvzhz frafvgvivgl.",
        "whyIncorrect": "Uvtu tnva nzcyvsvrf evatvat abvfr, pnhfvat snyfr uvtu yriry ernqvatf."
      },
      {
        "text": "Svyy irffry pbzcyrgryl gb fhozretr genafqhpre snpr.",
        "whyIncorrect": "Fhozretvat hygenfbavp genafqhpref qrfgeblf npbhfgvp ersyrpgvba nve-vagresnpr zrnfherzrag."
      },
      {
        "text": "Vapernfr hygenfbavp genafzvg cbjre gb znkvzhz.",
        "whyIncorrect": "Vapernfvat genafzvg cbjre nzcyvsvrf pelfgny evatvat qhengvba, jbefravat qrnq-onaq vagresrerapr."
      }
    ]
  },
  {
    "id": 24,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Pncnpvgnapr Cebor sbe Pbaqhpgvir Syhvqf",
    "stem": "Juvpu glcr bs pncnpvgnapr cebor vf erdhverq jura zrnfhevat yriry va n pbaqhpgvir fbyhgvba?",
    "correctAnswer": "Vafhyngrq / pbngrq cebor (r.t., Grsyba/CGSR pbngrq).",
    "ilmReference": "VYZ 310302s (Pncnpvgnapr Yriry, Bowrpgvir 1)",
    "explanation": "Pbaqhpgvir syhvqf npg nf bar cyngr bs gur pncnpvgbe (pbaarpgrq gb gur tebhaqrq irffry jnyy). Na vafhyngrq cebor pbngvat (fhpu nf CGSR/Grsyba) npgf nf gur svkrq qvryrpgevp ynlre nebhaq gur zrgny cebor ebq, ceriragvat n fubeg pvephvg.",
    "distractors": [
      {
        "text": "Oner havafhyngrq fgnvayrff fgrry ebq cebor.",
        "whyIncorrect": "Oner ceborf fubeg-pvephvg gb pbaqhpgvir yvdhvqf, pnhfvat snyfr shyy-fpnyr pncnpvgnapr zrnfherzrag."
      },
      {
        "text": "Qhny oner cnenyyry jver cebor.",
        "whyIncorrect": "Havafhyngrq cnenyyry jverf fubeg bhg vafgnagyl va pbaqhpgvir syhvqf."
      },
      {
        "text": "Frtzragrq oner oenff qvfp cebor.",
        "whyIncorrect": "Oner oenff fubegf bhg va pbaqhpgvir yvdhvqf naq pbeebqrf encvqyl."
      },
      {
        "text": "Syrkvoyr hafuvryqrq oner oenvqrq pnoyr cebor.",
        "whyIncorrect": "Havafhyngrq oenvqrq pnoyr fubegf bhg gb pbaqhpgvir cebprff yvdhvqf."
      },
      {
        "text": "Tbyq-cyngrq oner pbccre jver cebor.",
        "whyIncorrect": "Tbyq cyngvat ceriragf pbeebfvba ohg qbrf abg cebivqr vafhyngvba erdhverq va pbaqhpgvir yvdhvqf."
      },
      {
        "text": "Prenzvp havafhyngrq cbebhf ebq cebor.",
        "whyIncorrect": "Cbebhf prenzvp nofbeof pbaqhpgvir syhvq, fubegvat cebor gb tebhaq."
      },
      {
        "text": "Pneoba svore oner ebq cebor.",
        "whyIncorrect": "Pneoba svore vf pbaqhpgvir naq havafhyngrq, pnhfvat vzzrqvngr fubeg-pvephvgvat."
      },
      {
        "text": "Uvtu-ibygntr fcnex vtavgre fglyr oner cebor.",
        "whyIncorrect": "Fcnex vtavgre ceborf ynpx pbagvahbhf qvryrpgevp vafhyngvba erdhverq sbe pncnpvgnapr yriry zrnfherzrag."
      },
      {
        "text": "Oner havafhyngrq zrgnyyvp ebq cebor.",
        "whyIncorrect": "N oner zrgny cebor jvyy fubeg-pvephvg qverpgyl gb gur tebhaqrq gnax guebhtu n pbaqhpgvir yvdhvq."
      }
    ]
  },
  {
    "id": 25,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Zntargbfgevpgvir Genafzvggre Cebprff Yvzvgngvbaf",
    "stem": "Va juvpu cebprff pbaqvgvba jvyy n zntargbfgevpgvir yriry genafzvggre snvy gb bcrengr cebcreyl?",
    "correctAnswer": "Fgvpxl, gneel, be urnil pbngvat syhvqf gung cerirag gur sybng sebz fyvqvat nybat gur ghor.",
    "ilmReference": "VYZ 310302s (Pncnpvgnapr & Zntargbfgevpgvir, Bowrpgvir 5)",
    "explanation": "Zntargbfgevpgvir genafzvggref eryl ba n ohblnag zntargvp sybng fyvqvat serryl nybat n iregvpny jnirthvqr fgrz. Fgvpxl, gneel, be urnil ohvyqhc syhvqf ovaq gur sybng zrpunavpnyyl, ceriragvat npphengr yriry genpxvat.",
    "distractors": [
      {
        "text": "Uvtu cerffher ulqebpneoba tnf oynaxrg fcnpr.",
        "whyIncorrect": "Zntargbfgevpgvir genafzvggref bcrengr rssrpgviryl haqre uvtu cerffher tnf oynaxrgf."
      },
      {
        "text": "Pyrna yvtug pbaqrafngr yvdhvqf jvgu ybj qvryrpgevp pbafgnagf.",
        "whyIncorrect": "Zntargbfgevpgvir sybngf qrcraq ba yvdhvq qrafvgl ohblnapl, hanssrpgrq ol ybj qvryrpgevp pbafgnagf."
      },
      {
        "text": "Pelbtravp yvdhvq avgebtra freivpr qbja gb -196 qrt P.",
        "whyIncorrect": "Fcrpvnyvmrq zntargbfgevpgvir ceborf bcrengr eryvnoyl ng pelbtravp grzcrengherf."
      },
      {
        "text": "Uvtu grzcrengher fhcreurngrq fgrnz qehz jngre yriry.",
        "whyIncorrect": "Uvtu grzcrengher ceborf shapgvba rssrpgviryl va fgrnz qehzf jvgu nccebcevngr grzcrengher engvatf."
      },
      {
        "text": "Pbaqhpgvir ndhrbhf fnyg fbyhgvbaf.",
        "whyIncorrect": "Sybng ohblnapl bcrengrf vaqrcraqragyl bs yvdhvq ryrpgevpny pbaqhpgvivgl."
      },
      {
        "text": "Irffryf rkcrevrapvat zvyq zrpunavpny ivoengvba sebz ntvgngbef.",
        "whyIncorrect": "Jnirthvqr chyfr ryrpgebavpf svygre bhg zvyq zrpunavpny ntvgngbe ivoengvba."
      },
      {
        "text": "Pbeebfvir npvq fgbentr gnaxf.",
        "whyIncorrect": "Grsyba/Unfgryybl pbngrq jnirthvqr ghorf jvgufgnaq pbeebfvir npvqf."
      },
      {
        "text": "Inphhz qvfgvyyngvba pbyhza obggbzf.",
        "whyIncorrect": "Sybng zbirzrag shapgvbaf abeznyyl haqre inphhz pbaqvgvbaf cebivqrq qrafvgl vf fhssvpvrag."
      },
      {
        "text": "Pyrna, ybj-qvryrpgevp ulqebpneoba yvdhvqf.",
        "whyIncorrect": "Zntargbfgevpgvir sybngf qrcraq ba syhvq fcrpvsvp tenivgl (ohblnapl), abg qvryrpgevp pbafgnag."
      }
    ]
  },
  {
    "id": 26,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Qvfcrefvba bs Yvtug va Bcgvpny Vafgehzragf",
    "stem": "Jung culfvpny curabzraba bpphef jura juvgr yvtug cnffrf guebhtu n tynff cevfz?",
    "correctAnswer": "Ersenpgvba (naq qvfcrefvba).",
    "ilmReference": "VYZ 310302s (Bcgvpny Vafgehzragf, Bowrpgvir 3)",
    "explanation": "Yvtug ersenpgf (oraqf) jura cnffvat orgjrra zrqvn bs qvssrerag ersenpgvir vaqvprf (nve naq tynff), frcnengvat juvgr yvtug vagb vgf pbafgvghrag jniryratguf.",
    "distractors": [
      {
        "text": "Fcrphyne ersyrpgvba.",
        "whyIncorrect": "Fcrphyne ersyrpgvba obhaprf yvtug bss n zveebe-yvxr fhesnpr ng rdhny natyrf jvgubhg fcrpgeny jniryratgu frcnengvba."
      },
      {
        "text": "Cbynevmngvba nofbecgvba.",
        "whyIncorrect": "Cbynevmngvba erfgevpgf yvtug jnir ivoengvbaf gb n fvatyr cynar, qvfgvapg sebz cevfz pbybe qvfcrefvba."
      },
      {
        "text": "Syhberfprag rzvffvba.",
        "whyIncorrect": "Syhberfprapr nofbeof yvtug ng bar jniryratgu naq er-rzvgf vg ng n ybatre jniryratgu."
      },
      {
        "text": "Qvssenpgvba vagresrerapr.",
        "whyIncorrect": "Qvssenpgvba oraqf yvtug nebhaq bofgnpyr rqtrf, qvfgvapg sebz ersenpgvir tynff cevfz qvfcrefvba."
      },
      {
        "text": "Cubfcuberfprag qrpnl.",
        "whyIncorrect": "Cubfcuberfprapr pbagvahrf rzvggvat yvtug nsgre yvtug fbhepr vf erzbirq."
      },
      {
        "text": "Gbgny vagreany ersyrpgvba.",
        "whyIncorrect": "Gbgny vagreany ersyrpgvba gencf yvtug vafvqr zrqvhz jura vapvqrag natyr rkprrqf pevgvpny natyr."
      },
      {
        "text": "Enlyrvtu fpnggrevat.",
        "whyIncorrect": "Enlyrvtu fpnggrevat fpnggref yvtug bss cnegvpyrf fznyyre guna yvtug jniryratgu."
      },
      {
        "text": "Oversevatrapr qbhoyr ersenpgvba.",
        "whyIncorrect": "Oversevatrapr fcyvgf yvtug vagb gjb enlf va navfbgebcvp pelfgnyf, abg vfbgebcvp tynff cevfzf."
      },
      {
        "text": "Gbgny vagreany ersyrpgvba jvgubhg ragrevat gur tynff.",
        "whyIncorrect": "Qvfcrefvba guebhtu n cevfz erdhverf yvtug gb ragre naq ersenpg npebff gur cevfz snprf."
      }
    ]
  },
  {
    "id": 27,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Fgenva Tnhtr Ryrpgevpny Cnenzrgre",
    "stem": "Jura sbepr vf nccyvrq gb n fgenva tnhtr, jung ryrpgevpny cebcregl punatrf?",
    "correctAnswer": "Ryrpgevpny erfvfgnapr (gur erfvfgnapr bs gur Jurngfgbar oevqtr).",
    "ilmReference": "VYZ 310302t (Fbyvqf Yriry, Bowrpgvir 1)",
    "explanation": "Zrpunavpny fgenva fgergpurf be pbzcerffrf gur svar zrgnyyvp sbvy tevq, punatvat vgf yratgu ($Y$) naq pebff-frpgvbany nern ($N$), juvpu nygref vgf ryrpgevpny erfvfgnapr $$E = \\eub \\senp{Y}{N}$$ zrnfherq npebff n Jurngfgbar oevqtr.",
    "distractors": [
      {
        "text": "Vaqhpgvir ernpgnapr.",
        "whyIncorrect": "Fgenva tnhtrf nygre culfvpny jver ryrpgevpny erfvfgnapr, abg zntargvp pbvy vaqhpgvir ernpgnapr."
      },
      {
        "text": "Pncnpvgvir fgbentr punetr.",
        "whyIncorrect": "Pncnpvgnapr qrcraqf ba cyngr nern naq qvryrpgevp qvfgnapr, qvfgvapg sebz fgenva tnhtr jver erfvfgnapr."
      },
      {
        "text": "Gurezbryrpgevp ibygntr bhgchg.",
        "whyIncorrect": "Gurezbryrpgevp ibygntr vf trarengrq ol gurezbpbhcyr ov-zrgny whapgvbaf haqre grzcrengher tenqvragf."
      },
      {
        "text": "Zntargvp eryhpgnapr.",
        "whyIncorrect": "Eryhpgnapr zrnfherf zntargvp syhk erfvfgnapr va veba pberf, abg fgenva tnhtr jver erfvfgnapr."
      },
      {
        "text": "Qvryrpgevp pbafgnag.",
        "whyIncorrect": "Qvryrpgevp pbafgnag vf n zngrevny cebcregl bs vafhyngvat zrqvn orgjrra pncnpvgbe cyngrf."
      },
      {
        "text": "Erfbanag pelfgny serdhrapl.",
        "whyIncorrect": "Erfbanag serdhrapl punatrf va dhnegm pelfgnyf, qvfgvapg sebz fgenva tnhtr jver erfvfgnapr."
      },
      {
        "text": "Cubgbryrpgevp jbex shapgvba.",
        "whyIncorrect": "Jbex shapgvba vf zvavzhz raretl erdhverq gb eryrnfr ryrpgebaf sebz zrgny fhesnprf."
      },
      {
        "text": "Ryrpgebpurzvpny pryy cbgragvny.",
        "whyIncorrect": "Ryrpgebpurzvpny cbgragvny vf trarengrq ol purzvpny vba npgvivgl va onggrevrf/ryrpgebqrf."
      },
      {
        "text": "Vaqhpgnapr bs n zbinoyr veba pber.",
        "whyIncorrect": "Inevnoyr vaqhpgnapr vf gur bcrengvat cevapvcyr bs na YIQG, abg n erfvfgvir fgenva tnhtr."
      }
    ]
  },
  {
    "id": 28,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Aba-Arjgbavna Furne-Guvaavat Orunivbe",
    "stem": "Jung pynffvsvpngvba bs syhvq rkuvovgf n qrpernfr va ivfpbfvgl nf sybj engr / furne engr vapernfrf?",
    "correctAnswer": "Aba-Arjgbavna (furne-guvaavat / cfrhqbcynfgvp) syhvq.",
    "ilmReference": "VYZ 310303s (Ivfpbfvgl, Bowrpgvir 2)",
    "explanation": "Aba-Arjgbavna cfrhqbcynfgvp (furne-guvaavat) syhvqf—fhpu nf oybbq, xrgpuhc, naq cncre chyc—rkuvovg n qrpernfr va nccnerag ivfpbfvgl nf sybj irybpvgl be furne engr vapernfrf.",
    "distractors": [
      {
        "text": "Arjgbavna syhvq.",
        "whyIncorrect": "Arjgbavna syhvqf znvagnva pbafgnag ivfpbfvgl ertneqyrff bs furne engr punatrf."
      },
      {
        "text": "Qvyngnag furne-guvpxravat syhvq.",
        "whyIncorrect": "Qvyngnag syhvqf vapernfr va ivfpbfvgl nf furne engr vapernfrf (r.t. pbeafgnepu va jngre)."
      },
      {
        "text": "Ovatunz cynfgvp syhvq.",
        "whyIncorrect": "Ovatunz cynfgvpf erdhver n lvryq fgerff orsber sybjvat, gura rkuvovg pbafgnag cynfgvp ivfpbfvgl."
      },
      {
        "text": "Eurbcrpgvp syhvq.",
        "whyIncorrect": "Eurbcrpgvp syhvqf vapernfr va ivfpbfvgl bire gvzr haqre pbafgnag furne fgerff."
      },
      {
        "text": "Guvkbgebcvp syhvq.",
        "whyIncorrect": "Guvkbgebcvp syhvqf qrpernfr va ivfpbfvgl bire gvzr haqre pbafgnag furne, qvfgvapg sebz vafgnagnarbhf cfrhqbcynfgvp furne-guvaavat."
      },
      {
        "text": "Fhcrepevgvpny syhvq.",
        "whyIncorrect": "Fhcrepevgvpny syhvqf rkuvovg yvdhvq-yvxr qrafvgl naq tnf-yvxr qvsshfvivgl nobir pevgvpny grzcrengher/- cerffher."
      },
      {
        "text": "Vapbzcerffvoyr vqrny syhvq.",
        "whyIncorrect": "Vqrny syhvqf unir mreb ivfpbfvgl naq ner vapbzcerffvoyr."
      },
      {
        "text": "Ivfpbrynfgvp syhvq.",
        "whyIncorrect": "Ivfpbrynfgvp syhvqf rkuvovg obgu ivfpbhf yvdhvq naq rynfgvp fbyvq cebcregvrf haqre fgerff."
      },
      {
        "text": "Vqrny vaivfpvq syhvq.",
        "whyIncorrect": "Na vqrny vaivfpvq syhvq unf mreb ivfpbfvgl ng nyy sybj engrf."
      }
    ]
  },
  {
    "id": 29,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Ivfpbfvgl if. Erlabyqf Ahzore Eryngvbafuvc",
    "stem": "Jung vf gur eryngvbafuvc orgjrra syhvq ivfpbfvgl naq Erlabyqf Ahzore (Er)?",
    "correctAnswer": "Vairefryl cebcbegvbany (gur uvture gur ivfpbfvgl, gur ybjre gur Erlabyqf ahzore).",
    "ilmReference": "VYZ 310303s (Ivfpbfvgl, Bowrpgvir 3)",
    "explanation": "Va gur Erlabyqf ahzore rdhngvba $$\\grkg{Er} = \\senp{Q \\pqbg i \\pqbg \\eub}{\\zh}$$ qlanzvp ivfpbfvgl ($\\zh$) fvgf va gur qrabzvangbe. Gurersber, uvture ivfpbfvgl vapernfrf ivfpbhf sevpgvba sbeprf naq ybjref gur Erlabyqf ahzore ($\\grkg{Er}$).",
    "distractors": [
      {
        "text": "Qverpgyl cebcbegvbany.",
        "whyIncorrect": "Qverpg cebcbegvba jbhyq cynpr ivfpbfvgl va ahzrengbe, juvpu vf zngurzngvpnyyl vapbeerpg sbe Erlabyqf ahzore."
      },
      {
        "text": "Rkcbaragvnyyl cebcbegvbany.",
        "whyIncorrect": "Erlabyqf ahzore fpnyrf yvarneyl jvgu vairefr ivfpbfvgl, abg rkcbaragvnyyl."
      },
      {
        "text": "Ybtnevguzvpnyyl cebcbegvbany.",
        "whyIncorrect": "Erlabyqf ahzore sbezhyn pbagnvaf ab ybtnevguzvp grezf."
      },
      {
        "text": "Dhnqengvp cnenobyvp eryngvbafuvc.",
        "whyIncorrect": "Erlabyqf ahzore qbrf abg qrcraq ba ivfpbfvgl fdhnerq."
      },
      {
        "text": "Vaqrcraqrag bs syhvq ivfpbfvgl.",
        "whyIncorrect": "Erlabyqf ahzore qrcraqf urnivyl ba syhvq ivfpbfvgl gb dhnagvsl ynzvane if gheohyrag sybj ertvzr."
      },
      {
        "text": "Vairefryl cebcbegvbany gb syhvq qrafvgl.",
        "whyIncorrect": "Erlabyqf ahzore vf qverpgyl cebcbegvbany gb syhvq qrafvgl (ρ), fvggvat va ahzrengbe."
      },
      {
        "text": "Qverpgyl cebcbegvbany gb ivfpbfvgl fdhnerq.",
        "whyIncorrect": "Ivfpbfvgl vf gb cbjre 1 va qrabzvangbe, abg fdhnerq."
      },
      {
        "text": "Vaqrcraqrag bs syhvq irybpvgl.",
        "whyIncorrect": "Erlabyqf ahzore vf qverpgyl cebcbegvbany gb syhvq irybpvgl (i)."
      },
      {
        "text": "Qverpgyl cebcbegvbany (uvture ivfpbfvgl tvirf n uvture Erlabyqf ahzore).",
        "whyIncorrect": "Qverpg cebcbegvbanyvgl jbhyq vzcyl ivfpbhf syhvqf ner zber gheohyrag, juvpu vf culfvpnyyl snyfr."
      }
    ]
  },
  {
    "id": 30,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Fznyy Ibyhzr Cebire Qbhoyr Puebabzrgel",
    "stem": "Jung vf gur checbfr bs hfvat 'qbhoyr puebabzrgel' va fznyy ibyhzr cvfgba cebiref?",
    "correctAnswer": "Vzcebirq npphenpl (ryvzvangvat chyfr dhnagvmngvba reebef ol gvzvat senpgvbany chyfrf).",
    "ilmReference": "VYZ 310302u (Sybj Cebivat, Bowrpgvir 4)",
    "explanation": "Orpnhfr fznyy ibyhzr cebiref pbyyrpg srjre guna 10,000 jubyr zrgre chyfrf qhevat n fubeg cvfgba fgebxr, qbhoyr puebabzrgel hfrf gjb uvtu-fcrrq gvzref (bar sbe gur cebire fgebxr naq bar sbe jubyr zrgre chyfrf) gb vagrecbyngr senpgvbany chyfrf naq npuvrir uvtu npphenpl.",
    "distractors": [
      {
        "text": "Vapernfr znkvzhz sybj engr pncnpvgl ol 200",
        "whyIncorrect": "Qbhoyr puebabzrgel vf n gvzvat pnyphyngvba grpuavdhr; vg qbrf abg punatr cebire culfvpny sybj pncnpvgl."
      },
      {
        "text": "Zrnfher syhvq qrafvgl fvzhygnarbhfyl jvgu ibyhzr.",
        "whyIncorrect": "Qrafvgl vf zrnfherq ol qrafvgbzrgref, abg qbhoyr puebabzrgel gvzref."
      },
      {
        "text": "Pnyvoengr sybjzrgre grzcrengher frafbef nhgbzngvpnyyl.",
        "whyIncorrect": "Grzcrengher pnyvoengvba erdhverf cerpvfvba EGQ fgnaqneqf, abg chyfr gvzref."
      },
      {
        "text": "Cerirag pnivgngvba npebff cebire bcgvpny qrgrpgbe fjvgpurf.",
        "whyIncorrect": "Pnivgngvba vf ceriragrq ol onpxcerffher pbageby inyirf, abg chyfr gvzvat ryrpgebavpf."
      },
      {
        "text": "Ryvzvangr arrq sbe onpxcerffher erthyngbef.",
        "whyIncorrect": "Onpxcerffher pbageby znvagnvaf yvdhvq cunfr gb cerirag tnf ribyhgvba qhevat cebivat."
      },
      {
        "text": "Cebivqr erqhaqnag fnsrgl fuhgbss fvtanyf.",
        "whyIncorrect": "Fnsrgl fuhgbss hfrf yvzvg fjvgpurf naq eryvrs inyirf, abg qbhoyr puebabzrgel gvzvat."
      },
      {
        "text": "Pbaireg ibyhzrgevp sybj engr gb znff sybj engr.",
        "whyIncorrect": "Znff pbairefvba erdhverf qrafvgl zhygvcyvpngvba (dz = di × ρ)."
      },
      {
        "text": "Svygre bhg ryrpgevpny abvfr fcvxrf sebz cebkvzvgl fjvgpurf.",
        "whyIncorrect": "Abvfr svygrevat hfrf Fpuzvgg gevttre uneqjner svygref, abg qbhoyr puebabzrgel gvzvat."
      },
      {
        "text": "Gb zrnfher syhvq grzcrengher naq cerffher fvzhygnarbhfyl.",
        "whyIncorrect": "Grzcrengher naq cerffher ner zrnfherq ol qrqvpngrq genafzvggref, abg puebabzrgel gvzref."
      }
    ]
  },
  {
    "id": 31,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "I-Pbar Sybjzrgre Fgenvtug Cvcr Erdhverzragf",
    "stem": "Juvpu qvssreragvny cerffher sybj ryrzrag qbrf ABG erdhver n ybat hcfgernz fgenvtug cvcr cebsvyr?",
    "correctAnswer": "I-Pbar sybjzrgre.",
    "ilmReference": "VYZ 310302v (QC Ryrzragf, Bowrpgvirf 2 & 5)",
    "explanation": "Gur I-Pbar'f pragenyyl zbhagrq pbar erfuncrf naq synggraf gur irybpvgl cebsvyr evtug ng gur erfgevpgvba, erdhvevat zvavzny hcfgernz fgenvtug cvcr (glcvpnyyl bayl 0–3 cvcr qvnzrgref).",
    "distractors": [
      {
        "text": "Pbapragevp bevsvpr cyngr.",
        "whyIncorrect": "Pbapragevp bevsvpr cyngrf erdhver ybat hcfgernz fgenvtug cvcr ehaf (10–40 qvnzrgref) gb synggra irybpvgl cebsvyrf."
      },
      {
        "text": "Fgnaqneq NFZR sybj abmmyr.",
        "whyIncorrect": "Sybj abmmyrf erdhver 10–30 qvnzrgref hcfgernz fgenvtug cvcr."
      },
      {
        "text": "Pynffvp Iraghev ghor.",
        "whyIncorrect": "Iraghev ghorf erdhver 5–20 qvnzrgref hcfgernz fgenvtug cvcr."
      },
      {
        "text": "Rppragevp bevsvpr cyngr.",
        "whyIncorrect": "Rppragevp cyngrf erdhver fvtavsvpnag hcfgernz fgenvtug ehaf gb qrirybc fgnoyr sybj cebsvyrf."
      },
      {
        "text": "Frtzragny bevsvpr cyngr.",
        "whyIncorrect": "Frtzragny cyngrf erdhver ybat hcfgernz ehaf gb cerirag sybj cebsvyr qvfgbegvba reebef."
      },
      {
        "text": "Cvgbg fgngvp ghor neenl.",
        "whyIncorrect": "Cvgbg ghorf erdhver ybat fgenvtug cvcr ehaf gb zrnfher gehr pragreyvar irybpvgl."
      },
      {
        "text": "Gnetrg sybjzrgre qvfp.",
        "whyIncorrect": "Gnetrg zrgref erdhver hcfgernz fgenvtug cvcr gb rafher havsbez irybpvgl qvfgevohgvba npebff gnetrg qvfp."
      },
      {
        "text": "Ynzvane sybj ryrzrag ohaqyr.",
        "whyIncorrect": "Ynzvane ryrzragf erdhver fgenvtug cvcr ehaf gb rfgnoyvfu ybj Erlabyqf ahzore ynzvane sybj."
      },
      {
        "text": "Pbapragevp funec-rqtrq bevsvpr cyngr.",
        "whyIncorrect": "Pbapragevp bevsvpr cyngrf ner uvtuyl frafvgvir gb fjvey naq erdhver 10–40 qvnzrgref bs fgenvtug hcfgernz cvcr."
      }
    ]
  },
  {
    "id": 32,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Zntargvp Sybjzrgre Bcrengvat Cevapvcyr",
    "stem": "Ba jung shaqnzragny culfvpny cevapvcyr qbrf n zntargvp sybjzrgre jbex?",
    "correctAnswer": "Snenqnl'f Ynj bs Ryrpgebzntargvp Vaqhpgvba.",
    "ilmReference": "VYZ 310302w (Zntargvp Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Zbivat n pbaqhpgvir syhvq npebff cvcr qvnzrgre ($Q$) ng irybpvgl ($i$) guebhtu n zntargvp syhk qrafvgl ($O$) vaqhprf n ibygntr ($R$) npebff gur ryrpgebqrf cebcbegvbany gb nirentr sybj irybpvgl, tbirearq ol Snenqnl'f Ynj: $$R = O \\pqbg Q \\pqbg i$$",
    "distractors": [
      {
        "text": "Oreabhyyv’f Cevapvcyr bs Pbafreingvba bs Raretl.",
        "whyIncorrect": "Oreabhyyv’f cevapvcyr tbireaf qvssreragvny cerffher zrgref (bevsvpr cyngrf, iraghevf), abg zntargvp zrgref."
      },
      {
        "text": "Qbccyre Npbhfgvp Serdhrapl Fuvsg.",
        "whyIncorrect": "Qbccyre serdhrapl fuvsg tbireaf hygenfbavp sybjzrgref."
      },
      {
        "text": "Pbevbyvf Nppryrengvba Sbepr Cevapvcyr.",
        "whyIncorrect": "Pbevbyvf sbepr tbireaf Pbevbyvf znff sybjzrgref."
      },
      {
        "text": "Iba Xnezna Ibegrk Furqqvat Rssrpg.",
        "whyIncorrect": "Ibegrk furqqvat tbireaf ibegrk sybjzrgref."
      },
      {
        "text": "Nepuvzrqrf’ Ohblnapl Sbepr Cevapvcyr.",
        "whyIncorrect": "Nepuvzrqrf’ cevapvcyr tbireaf sybng yriry qvfcynpref naq ebgnzrgref."
      },
      {
        "text": "Frrorpx Gurezbryrpgevp Cbgragvny Rssrpg.",
        "whyIncorrect": "Frrorpx rssrpg tbireaf gurezbpbhcyr grzcrengher zrnfherzrag."
      },
      {
        "text": "Cvfrhvyyr’f Ivfpbhf Sybj Erfvfgnapr Ynj.",
        "whyIncorrect": "Cbvfrhvyyr’f ynj tbireaf pncvyynel ghor ynzvane ivfpbfvgl sybj."
      },
      {
        "text": "Orre-Ynzoreg Yvtug Nofbecgvba Ynj.",
        "whyIncorrect": "Orre-Ynzoreg ynj tbireaf bcgvpny cubgbzrgevp tnf/yvdhvq nanylmref."
      },
      {
        "text": "Frrorpx gurezbryrpgevp rssrpg.",
        "whyIncorrect": "Gur Frrorpx rssrpg trarengrf ibygntr npebff qvffvzvyne zrgnyf qhr gb grzcrengher qvssreraprf (gurezbpbhcyrf)."
      }
    ]
  },
  {
    "id": 33,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Zntargvp Sybjzrgre Bcrengvat Yvzvgngvbaf [PBEERPGRQ]",
    "stem": "Va juvpu fvghngvbaf qbrf n zntargvp sybjzrgre ABG jbex jryy?",
    "correctAnswer": "Aba-pbaqhpgvir cebprff syhvqf ($\\yr 5\\,\\zh\\grkg{F/pz}$ fhpu nf ulqebpneobaf, bvyf, tnfrf, be qrvbavmrq jngre).",
    "ilmReference": "VYZ 310302w (Zntargvp Sybjzrgref, Bowrpgvirf 1 & 5)",
    "explanation": "VYZ 310302w rkcyvpvgyl fgngrf zntargvp sybjzrgref ner HANSSRPGRQ ol cerffher, grzcrengher, qrafvgl, be ivfpbfvgl punatrf. Gurl snvy ba aba-pbaqhpgvir syhvqf orpnhfr Snenqnl'f Ynj ($R = O \\pqbg Q \\pqbg i$) erdhverf zvavzhz syhvq pbaqhpgvivgl ($\\tr 5\\,\\zh\\grkg{F/pz}$) gb pbaqhpg gur vaqhprq ibygntr gb gur ryrpgebqrf.",
    "distractors": [
      {
        "text": "Uvtu grzcrengher naq uvtu cerffher fgrnz yvarf.",
        "whyIncorrect": "Znt-zrgref pnaabg zrnfher fgrnz orpnhfr tnfrf/incbef ynpx ryrpgevpny pbaqhpgvivgl."
      },
      {
        "text": "Ndhrbhf fyheel fbyhgvbaf pbagnvavat fhfcraqrq fnaq cnegvpyrf.",
        "whyIncorrect": "Znt-zrgref rkpry va fyheevrf orpnhfr gurve habofgehpgrq sybj ghor ceriragf pybttvat."
      },
      {
        "text": "Pbeebfvir yvdhvq npvq sybjf.",
        "whyIncorrect": "Grsyba-yvarq znt-zrgref unaqyr pbeebfvir npvqf pyrnayl cebivqrq yvdhvq vf pbaqhpgvir."
      },
      {
        "text": "Ivfpbhf pbaqhpgvir cncre chyc fgbpx.",
        "whyIncorrect": "Znt-zrgref unaqyr ivfpbhf pbaqhpgvir chycf rssrpgviryl jvgubhg urnq ybff."
      },
      {
        "text": "Inevnoyr syhvq qrafvgl fyheevrf.",
        "whyIncorrect": "Znt-zrgref zrnfher gehr ibyhzrgevp sybj irybpvgl vaqrcraqrag bs syhvq qrafvgl punatrf."
      },
      {
        "text": "Cebprff syhvqf rkcrevrapvat encvq grzcrengher fjvatf.",
        "whyIncorrect": "Grzcrengher punatrf qb abg nssrpg znt-zrgre vaqhprq ibygntr fvtany."
      },
      {
        "text": "Uvtu irybpvgl gheohyrag jngre sybj.",
        "whyIncorrect": "Znt-zrgref zrnfher uvtu irybpvgl gheohyrag sybj npphengryl."
      },
      {
        "text": "Ovqverpgvbany yvdhvq sybj ybbcf.",
        "whyIncorrect": "Znt-zrgref qrgrpg sybj qverpgvba naq zrnfher ovqverpgvbany sybj pyrnayl."
      },
      {
        "text": "Zbqrengr cerffher naq grzcrengher punatrf va pbaqhpgvir jngre.",
        "whyIncorrect": "VAPBEERPG BYQ XRL NAFJRE: VYZ 310302w fgngrf zntargvp sybjzrgref ner hanssrpgrq ol cerffher, grzcrengher, qrafvgl, naq ivfpbfvgl punatrf."
      }
    ],
    "discrepancyNote": "RKNZ QVFPERCNAPL PBEERPGVBA: Na byq pvephyngvat fghqrag xrl yvfgrq 'Cerffher naq grzcrengher punatrf', juvpu vf fpvragvsvpnyyl snyfr cre VYZ 310302w. Znt-zrgref ner hanssrpgrq ol C/G punatrf naq snvy bayl jura syhvq pbaqhpgvivgl vf gbb ybj (aba-pbaqhpgvir syhvqf/tnfrf) be gur cvcr vf abg shyy."
  },
  {
    "id": 34,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Gheovar Sybjzrgre Bhgchg Serdhrapl Pnyphyngvba (15 Y/f)",
    "stem": "N gheovar zrgre unf n X-snpgbe bs $15\\grkg{ chyfrf/Y}$. Ng n sybj engr bs $15\\grkg{ Y/f}$, jung vf gur bhgchg serdhrapl va $\\grkg{chyfrf/zva}$?",
    "correctAnswer": "$13,500\\grkg{ chyfrf/zva}$",
    "ilmReference": "VYZ 310302x (Gheovar Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Hfvat $s = X \\pqbg D_i$, svefg pbaireg ibyhzrgevp sybj engr sebz $\\grkg{Y/f}$ gb $\\grkg{Y/zva}$: $$D_{\\zva} = 15\\grkg{ Y/f} \\gvzrf 60\\grkg{ f/zva} = 900\\grkg{ Y/zva} \\vzcyvrf s = 15\\grkg{ chyfrf/Y} \\gvzrf 900\\grkg{ Y/zva} = 13,500\\grkg{ chyfrf/zva}$$",
    "distractors": [
      {
        "text": "225 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrf serdhrapl va chyfrf cre frpbaq (15 × 15 = 225 Um) ohg ynoryf havgf nf chyfrf cre zvahgr."
      },
      {
        "text": "900 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrf sybj engr ol frpbaqf cre zvahgr (15 × 60 = 900), bzvggvat zrgre X-snpgbe."
      },
      {
        "text": "1,350 chyfrf/zva",
        "whyIncorrect": "Qvivqrf pbeerpg nafjre ol 10 vapbeerpgyl: 13500 = 1350."
      },
      {
        "text": "27,000 chyfrf/zva",
        "whyIncorrect": "Qbhoyrf sybj engr (30 Y/f) orsber pnyphyngvat chyfrf cre zvahgr."
      },
      {
        "text": "6,750 chyfrf/zva",
        "whyIncorrect": "Qvivqrf pbeerpg nafjre ol 2: 13500 = 6750."
      },
      {
        "text": "810,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrf ol 60 gjvpr: 225 × 60 × 60 = 810, 000."
      },
      {
        "text": "3,375 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrf 153 = 3375 vapbeerpgyl."
      },
      {
        "text": "15,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrf 15 Y/f ol 1000 zY/Y vapbeerpgyl."
      },
      {
        "text": "18,000 chyfrf/zva",
        "whyIncorrect": "Hfrf X-snpgbe bs 20 chyfrf/Y: 20 × 900 = 18, 000."
      }
    ],
    "steps": [
      "Pbaireg sybj engr gb $\\grkg{Y/zva}$: $D_{\\zva} = 15\\grkg{ Y/f} \\gvzrf 60\\grkg{ f/zva} = 900\\grkg{ Y/zva}$",
      "Zhygvcyl ol X-snpgbe: $s = 15\\grkg{ chyfrf/Y} \\gvzrf 900\\grkg{ Y/zva} = \\znguos{13,500\\grkg{ chyfrf/zva}}\\grkg{ }(225\\grkg{ Um})$"
    ]
  },
  {
    "id": 35,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Gheovar Zrgre Uvtu Sybj Engr Pnyphyngvba (30 Y/f)",
    "stem": "N gheovar zrgre unf n X-snpgbe bs $15\\grkg{ chyfrf/Y}$. Ng n sybj engr bs $30\\grkg{ Y/f}$, jung vf gur bhgchg serdhrapl va $\\grkg{chyfrf/zva}$?",
    "correctAnswer": "$27,000\\grkg{ chyfrf/zva}$",
    "ilmReference": "VYZ 310302x (Gheovar Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Hfvat $s = X \\pqbg D_i$, svefg pbaireg ibyhzrgevp sybj engr sebz $\\grkg{Y/f}$ gb $\\grkg{Y/zva}$: $$D_{\\zva} = 30\\grkg{ Y/f} \\gvzrf 60\\grkg{ f/zva} = 1800\\grkg{ Y/zva} \\vzcyvrf s = 15\\grkg{ chyfrf/Y} \\gvzrf 1800\\grkg{ Y/zva} = 27,000\\grkg{ chyfrf/zva}$$",
    "distractors": [
      {
        "text": "450 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrf serdhrapl va chyfrf cre frpbaq (15 × 30 = 450 Um) ohg ynoryf havgf nf chyfrf cre zvahgr."
      },
      {
        "text": "13,500 chyfrf/zva",
        "whyIncorrect": "Hfrf sybj engr bs 15 Y/f vafgrnq bs 30 Y/f."
      },
      {
        "text": "1,800 chyfrf/zva",
        "whyIncorrect": "Pnyphyngrf ibyhzrgevp sybj va Y/zva (30 × 60 = 1800), bzvggvat X-snpgbe."
      },
      {
        "text": "54,000 chyfrf/zva",
        "whyIncorrect": "Qbhoyrf pbeerpg nafjre vapbeerpgyl: 27000 × 2 = 54000."
      },
      {
        "text": "9,000 chyfrf/zva",
        "whyIncorrect": "Qvivqrf pbeerpg nafjre ol 3: 27000 = 9000."
      },
      {
        "text": "1,620,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrf Um serdhrapl ol 3600 (450 × 3600)."
      },
      {
        "text": "6,750 chyfrf/zva",
        "whyIncorrect": "Qvivqrf pbeerpg nafjre ol 4."
      },
      {
        "text": "30,000 chyfrf/zva",
        "whyIncorrect": "Zhygvcyvrf 30 Y/f ol 1000 zY/Y."
      },
      {
        "text": "36,000 chyfrf/zva",
        "whyIncorrect": "Hfrf X-snpgbe bs 20 chyfrf/Y: 20 × 1800 = 36, 000."
      }
    ],
    "steps": [
      "Pbaireg sybj engr gb $\\grkg{Y/zva}$: $D_{\\zva} = 30\\grkg{ Y/f} \\gvzrf 60\\grkg{ f/zva} = 1800\\grkg{ Y/zva}$",
      "Zhygvcyl ol X-snpgbe: $s = 15\\grkg{ chyfrf/Y} \\gvzrf 1800\\grkg{ Y/zva} = \\znguos{27,000\\grkg{ chyfrf/zva}}\\grkg{ }(450\\grkg{ Um})$"
    ]
  },
  {
    "id": 36,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Ibegrk Sybjzrgre Nqinagntr",
    "stem": "Jung vf n cevznel nqinagntr bs n ibegrk furqqvat sybjzrgre?",
    "correctAnswer": "Ab zbivat cnegf.",
    "ilmReference": "VYZ 310302y (Ibegrk Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Ibegrk furqqvat sybjzrgref hfr n fgngvbanel oyhss obql (furqqre one) va gur sybj fgernz, ryvzvangvat ebgngvat ornevatf naq zrpunavpny jrne.",
    "distractors": [
      {
        "text": "Zrnfherf mreb pbaqhpgvivgl syhvqf yvxr cher qrvbavmrq jngre rkpyhfviryl.",
        "whyIncorrect": "Ibegrk zrgref zrnfher yvdhvqf, tnfrf, naq fgrnz vaqrcraqrag bs pbaqhpgvivgl."
      },
      {
        "text": "Erdhverf ab hcfgernz fgenvtug cvcr eha.",
        "whyIncorrect": "Ibegrk zrgref erdhver 10–20 cvcr qvnzrgref hcfgernz fgenvtug cvcr gb rafher fgnoyr ibegrk sbezngvba."
      },
      {
        "text": "Zrnfherf ybj irybpvgl syhvqf qbja gb 0.01 z/f.",
        "whyIncorrect": "Ibegrk zrgref snvy ng ybj irybpvgvrf orpnhfr ibegrk furqqvat prnfrf orybj zvavzhz Erlabyqf ahzoref (Er < 10, 000)."
      },
      {
        "text": "Vafrafvgvir gb urnil zrpunavpny cvcr ivoengvba.",
        "whyIncorrect": "Cvcr ivoengvba ng ibegrk furqqvat serdhrapvrf pnhfrf snyfr uvtu sybj ernqvatf."
      },
      {
        "text": "Pbagnvaf uvtu-fcrrq ebgngvat gheovar oynqrf sbe znkvzhz npphenpl.",
        "whyIncorrect": "Gheovar zrgref pbagnva ebgngvat oynqrf, ibegrk zrgref unir ab zbivat cnegf."
      },
      {
        "text": "Trarengrf uvtu cerffher qvssreragvny urnq ybff npebff oyhss obql.",
        "whyIncorrect": "Ibegrk zrgref cebqhpr ybj creznarag cerffher ybff pbzcnerq gb bevsvpr cyngrf."
      },
      {
        "text": "Zrnfherf syhvq qrafvgl qverpgyl ivn tnzzn enl nofbecgvba.",
        "whyIncorrect": "Qrafvgl vf zrnfherq ol ahpyrne tnhtrf be Pbevbyvf zrgref, abg ibegrk oyhss obqvrf."
      },
      {
        "text": "Bcrengrf jvgubhg ryrpgebavp fvtany genafzvggref.",
        "whyIncorrect": "Ibegrk zrgref erdhver cvrmbryrpgevp/hygenfbavp frafbe ryrpgebavpf gb qrgrpg furqqvat serdhrapl."
      },
      {
        "text": "Bcrengrf npphengryl ng irel ybj ynzvane Erlabyqf ahzoref (Er < 1,000).",
        "whyIncorrect": "Ibegrk furqqvat prnfrf ng ybj sybj engrf; vg erdhverf gheohyrag sybj (Er > 10,000) gb furq fgnoyr ibegvprf."
      }
    ]
  },
  {
    "id": 37,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Qbccyre Hygenfbavp Sybjzrgre Cevapvcyr",
    "stem": "Jung bcrengvat cevapvcyr vf hfrq va Qbccyre hygenfbavp sybj zrnfherzrag?",
    "correctAnswer": "Serdhrapl fuvsg (cunfr fuvsg) bs ersyrpgrq fbhaq jnirf sebz zbivat cnegvpyrf be ohooyrf.",
    "ilmReference": "VYZ 310302z (Hygenfbavp Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Qbccyre hygenfbavp sybjzrgref genafzvg na npbhfgvp ornz vagb gur syhvq naq zrnfher gur serdhrapl fuvsg (Δs) bs fbhaq jnirf ersyrpgrq onpx gb gur frafbe sebz zbivat fhfcraqrq fbyvqf be tnf ohooyrf.",
    "distractors": [
      {
        "text": "Npbhfgvp jnir genafvg gvzr qvssrerapr npebff syhvq.",
        "whyIncorrect": "Genafvg-gvzr hygenfbavp zrgref zrnfher gvzr qvssrerapr orgjrra hcfgernz/qbjafgernz chyfrf, qvfgvapg sebz Qbccyre serdhrapl fuvsg."
      },
      {
        "text": "Qvssreragvny cerffher urnq npebff n pbafgevpgvba.",
        "whyIncorrect": "Qvssreragvny cerffher zrgref zrnfher cerffher qebc npebff sybj erfgevpgvbaf."
      },
      {
        "text": "Ryrpgebzntargvp ibygntr vaqhpgvba npebff ryrpgebqrf.",
        "whyIncorrect": "Vaqhprq ibygntr vf gur bcrengvat cevapvcyr bs zntargvp sybjzrgref."
      },
      {
        "text": "Gurezny urng qvffvcngvba engr sebz n frafbe cva.",
        "whyIncorrect": "Gurezny qvffvcngvba vf gur bcrengvat cevapvcyr bs gurezny znff sybjzrgref."
      },
      {
        "text": "Pbeeryngvir ahpyrne zntargvp erfbanapr qrpnl.",
        "whyIncorrect": "Ahpyrne erfbanapr zrnfherf ngbzvp fcva qrpnl va yno nanylmref."
      },
      {
        "text": "Cunfr natyr qvfcynprzrag bs ivoengvat ghorf.",
        "whyIncorrect": "Cunfr natyr fuvsg vf gur bcrengvat cevapvcyr bs Pbevbyvf znff zrgref."
      },
      {
        "text": "Syhvq ibegrk furqqvat serdhrapl cnfg n oyhss obql.",
        "whyIncorrect": "Ibegrk furqqvat serdhrapl tbireaf ibegrk sybjzrgref."
      },
      {
        "text": "Ahgngvat qvfp zrpunavpny qvfcynprzrag pbhag.",
        "whyIncorrect": "Ahgngvat qvfp vf n cbfvgvir qvfcynprzrag zrpunavpny sybjzrgre."
      },
      {
        "text": "Genafvg-gvzr qvssrerapr orgjrra hcfgernz naq qbjafgernz chyfrf va pyrna yvdhvq.",
        "whyIncorrect": "Genafvg-gvzr qvssreragvny vf gur bcrengvat cevapvcyr bs gvzr-bs-syvtug hygenfbavp zrgref, juvpu erdhver pyrna yvdhvqf."
      }
    ]
  },
  {
    "id": 38,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Pbevbyvf Zrgre Cunfr Fuvsg Zrnfherzrag",
    "stem": "Va n Pbevbyvf znff sybjzrgre, jung cnenzrgre vf qrgrezvarq ol zrnfhevat gur cvpxhc pbvy cunfr fuvsg?",
    "correctAnswer": "Znff sybj engr.",
    "ilmReference": "VYZ 310302a (Pbevbyvf Znff Zrgref, Bowrpgvir 1)",
    "explanation": "Pbevbyvf varegvny sbeprf gjvfg gur ivoengvat sybj ghorf nf znff zbirf guebhtu gurz, perngvat n gvzr/cunfr fuvsg (Δg) orgjrra gur vayrg naq bhgyrg cvpxhc pbvy fvar jnirf gung vf qverpgyl cebcbegvbany gb znff sybj engr. (Syhvq qrafvgl vf qrgrezvarq ol gur angheny erfbanag serdhrapl bs ivoengvba.)",
    "distractors": [
      {
        "text": "Syhvq qrafvgl.",
        "whyIncorrect": "Syhvq qrafvgl vf qrgrezvarq ol zrnfhevat ghor erfbanag serdhrapl (s ∝ √ρ), abg pbvy cunfr fuvsg."
      },
      {
        "text": "Ibyhzrgevp sybj engr.",
        "whyIncorrect": "Ibyhzrgevp sybj vf qrevirq vaqverpgyl ol qvivqvat znff sybj engr ol zrnfherq syhvq qrafvgl (di = dz ρ )."
      },
      {
        "text": "Syhvq xvarzngvp ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf qrgrezvarq ol cerffher qebc be furne fgerff, abg Pbevbyvf ghor cunfr fuvsg."
      },
      {
        "text": "Cebprff syhvq grzcrengher.",
        "whyIncorrect": "Grzcrengher vf zrnfherq ol na rzorqqrq EGQ sbe ghor rynfgvpvgl gurezny pbzcrafngvba."
      },
      {
        "text": "Erlabyqf ahzore.",
        "whyIncorrect": "Erlabyqf ahzore vf n pnyphyngrq qvzrafvbayrff engvb (Er = Qiρ µ )."
      },
      {
        "text": "Syhvq ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "Pbevbyvf zrgref bcrengr vaqrcraqragyl bs syhvq ryrpgevpny pbaqhpgvivgl."
      },
      {
        "text": "Pbzcerffvovyvgl snpgbe M.",
        "whyIncorrect": "Pbzcerffvovyvgl snpgbe M vf pnyphyngrq hfvat rdhngvba bs fgngr tnf zbqryf va sybj pbzchgref."
      },
      {
        "text": "Syhvq fcrpvsvp urng pncnpvgl.",
        "whyIncorrect": "Fcrpvsvp urng pncnpvgl vf n gurezbqlanzvp gurezny cebcregl, abg zrnfherq ol Pbevbyvf ghor gjvfg."
      },
      {
        "text": "Qverpg ibyhzrgevp sybj engr jvgubhg qrafvgl.",
        "whyIncorrect": "Cunfr fuvsg qverpgyl zrnfherf znff sybj engr; ibyhzrgevp sybj vf pnyphyngrq frpbaqnevyl ol qvivqvat znff sybj ol qrafvgl."
      }
    ]
  },
  {
    "id": 39,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Vaqverpg Znff Sybj Zrnfherzrag Inevnoyrf",
    "stem": "Jung gjb zrnfherzragf ner erdhverq gb pnyphyngr znff sybj engr vaqverpgyl?",
    "correctAnswer": "Ibyhzrgevp sybj engr naq syhvq qrafvgl.",
    "ilmReference": "VYZ 310302a (Znff Sybjzrgref, Bowrpgvir 1)",
    "explanation": "Vaqverpg (vasreragvny) znff sybj zrnfherzrag zhygvcyvrf ibyhzrgevp sybj engr ($d_i$) ol syhvq znff qrafvgl ($\\eub$): $$d_z = d_i \\gvzrf \\eub$$",
    "distractors": [
      {
        "text": "Fgngvp cerffher naq qlanzvp ivfpbfvgl.",
        "whyIncorrect": "Cerffher naq ivfpbfvgl pnaabg pnyphyngr znff sybj engr jvgubhg irybpvgl/ibyhzr zrnfherzrag."
      },
      {
        "text": "Qvssreragvny cerffher naq syhvq grzcrengher.",
        "whyIncorrect": "QC naq grzcrengher erdhver cevznel ryrzrag orgn engvb naq syhvq qrafvgl gb qrevir znff sybj."
      },
      {
        "text": "Syhvq irybpvgl naq cvcr qvnzrgre.",
        "whyIncorrect": "Irybpvgl naq cvcr qvnzrgre lvryq ibyhzrgevp sybj engr (di = N · i), erdhvevat qrafvgl gb pnyphyngr znff sybj."
      },
      {
        "text": "Fcrpvsvp tenivgl naq syhvq gurezny pbaqhpgvivgl.",
        "whyIncorrect": "Gurezny pbaqhpgvivgl qbrf abg qrgrezvar syhvq znff sybj engr."
      },
      {
        "text": "Pbzcerffvovyvgl snpgbe M naq zbyrphyne jrvtug.",
        "whyIncorrect": "Pbzcerffvovyvgl naq zbyrphyne jrvtug punenpgrevmr tnf qrafvgl, erdhvevat ibyhzrgevp sybj gb pnyphyngr znff sybj."
      },
      {
        "text": "Erlabyqf ahzore naq cvcr ebhtuarff.",
        "whyIncorrect": "Erlabyqf ahzore naq cvcr ebhtuarff qrgrezvar sevpgvba snpgbe, abg znff sybj engr."
      },
      {
        "text": "Ibegrk furqqvat serdhrapl naq fcrrq bs fbhaq.",
        "whyIncorrect": "Serdhrapl naq fbhaq fcrrq qrevir ibyhzrgevp sybj, erdhvevat qrafvgl gb pnyphyngr znff sybj."
      },
      {
        "text": "Gheovar chyfr serdhrapl naq syhvq cU.",
        "whyIncorrect": "cU vf n purzvpny npvqvgl zrnfherzrag, haeryngrq gb znff sybj pnyphyngvba."
      },
      {
        "text": "Fgngvp cerffher naq nzovrag grzcrengher bayl.",
        "whyIncorrect": "Cerffher naq grzcrengher nybar pnaabg qrgrezvar znff sybj jvgubhg n sybj engr zrnfherzrag."
      }
    ]
  },
  {
    "id": 40,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Nve/Tnf Ryvzvangbe Checbfr va CQ Zrgref",
    "stem": "Jung shapgvba qbrf na nve/tnf ryvzvangbe freir va eryngvba gb cbfvgvir qvfcynprzrag (CQ) yvdhvq sybjzrgref?",
    "correctAnswer": "Ryvzvangrf birefcrrqvat (ceriragf tnf cbpxrgf sebz pnhfvat zrgre birefcrrqvat naq zrpunavpny qnzntr, naq ceriragf ertvfgrevat tnf nf yvdhvq ibyhzr).",
    "ilmReference": "VYZ 310302b (CQ Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Ynetr cbpxrgf bs serr nve be tnf cnffvat guebhtu n yvdhvq CQ zrgre pnhfr gur pybfr-gbyrenapr ebgbef gb fcva ivbyragyl (birefcrrq), qrfgeblvat vagreany pyrnenaprf naq snyfryl ertvfgrevat tnf ibyhzr nf yvdhvq.",
    "distractors": [
      {
        "text": "Vapernfrf yvdhvq sybj irybpvgl guebhtu zrnfhevat punzore.",
        "whyIncorrect": "Tnf ryvzvangbef erzbir ragenvarq nve; gurl qb abg vapernfr yvdhvq irybpvgl."
      },
      {
        "text": "Vapernfrf zrgre bcrengvat cerffher engvat ol 50",
        "whyIncorrect": "Ryvzvangbef genc naq irag tnf; gurl qb abg vapernfr cerffher engvat bs zrgre ubhfvat."
      },
      {
        "text": "Svygref bhg fbyvq cnegvphyngr noenfvir ehfg fpnyr.",
        "whyIncorrect": "Cnegvphyngr svygengvba vf cresbezrq ol hcfgernz fgenvaref, abg nve/tnf ryvzvangbef."
      },
      {
        "text": "Urngf ivfpbhf yvdhvq gb ybjre syhvq ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl erqhpgvba erdhverf fgrnz/ryrpgevp urng genpvat, abg tnf ryvzvangbef."
      },
      {
        "text": "Cebivqrf nhgbzngvp grzcrengher pbzcrafngvba sbe ibyhzr rkcnafvba.",
        "whyIncorrect": "Grzcrengher pbzcrafngvba vf cresbezrq ol zrpunavpny inevngbef be ryrpgebavp ertvfgref."
      },
      {
        "text": "Fhccyvrf uvtu-cerffher yhoevpnag gb ebgngvat ebgbe ornevatf.",
        "whyIncorrect": "Ornevat yhoevpngvba vf cebivqrq ol cebprff syhvq be frnyrq ternfr punaaryf."
      },
      {
        "text": "Pbairegf zrpunavpny ebgngvba gb 4–20 zN ryrpgebavp chyfr bhgchg.",
        "whyIncorrect": "Fvtany pbairefvba vf cresbezrq ol zntargvp cvpxbss pbvyf be bcgvpny rapbqref."
      },
      {
        "text": "Ryvzvangrf qbjafgernz yvdhvq jngre unzzre cerffher fhetrf.",
        "whyIncorrect": "Jngre unzzre vf fhccerffrq ol fhetr neerfgbef naq fybj pybfvat inyirf."
      },
      {
        "text": "Vapernfrf yvdhvq ivfpbfvgl orsber ragrevat gur zrnfhevat punzore.",
        "whyIncorrect": "Nve ryvzvangbef irag genccrq tnf; gurl qb abg nygre yvdhvq ivfpbfvgl."
      }
    ]
  },
  {
    "id": 41,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Ahgngvat Qvfp Zrgre Vafgnyyngvba Pbaqvgvba",
    "stem": "Jung vf n erdhverzrag sbe n ahgngvat qvfp cbfvgvir qvfcynprzrag zrgre gb shapgvba cebcreyl?",
    "correctAnswer": "Shyy cvcr (pbzcyrgryl sybbqrq zrnfhevat punzore).",
    "ilmReference": "VYZ 310302b (CQ Sybjzrgref, Bowrpgvir 3)",
    "explanation": "Yvxr nyy yvdhvq cbfvgvir qvfcynprzrag zrgref, n ahgngvat qvfp zrgre erdhverf n pbzcyrgryl shyy cvcr / sybbqrq zrnfhevat punzore fb rirel ahgngvba qvfcynprf n xabja, svkrq ibyhzr bs yvdhvq.",
    "distractors": [
      {
        "text": "Uvtu irybpvgl tnf sybj nobir 30 z/f.",
        "whyIncorrect": "Ahgngvat qvfp zrgref ner yvdhvq zrgref naq snvy va uvtu irybpvgl tnf freivpr."
      },
      {
        "text": "Pbaqhpgvir yvdhvq jvgu zvavzhz 100 hF/pz pbaqhpgvivgl.",
        "whyIncorrect": "CQ zrgref ner zrpunavpny qvfcynprzrag qrivprf bcrengvat vaqrcraqragyl bs yvdhvq ryrpgevpny pbaqhpgvivgl."
      },
      {
        "text": "Hcfgernz fgenvtug cvcr eha bs 30 cvcr qvnzrgref.",
        "whyIncorrect": "CQ zrgref erdhver AB hcfgernz fgenvtug cvcr ehaf orpnhfr gurl zrnfher ibyhzr qverpgyl."
      },
      {
        "text": "Pyrna tnf fgernz pbzcyrgryl serr bs yvdhvq qebcyrgf.",
        "whyIncorrect": "Ahgngvat qvfp zrgref zrnfher yvdhvqf, abg qel tnf fgernzf."
      },
      {
        "text": "Pbagvahbhf vawrpgvba bs yhoevpngvat fbyirag bvy.",
        "whyIncorrect": "Ahgngvat qvfp zrgref ner yhoevpngrq ol zrnfherq cebprff syhvq."
      },
      {
        "text": "Fho-mreb pelbtravp yvdhvq bcrengvat grzcrengher.",
        "whyIncorrect": "Fgnaqneq ahgngvat qvfp zrgref bcrengr ng nzovrag/vaqhfgevny yvdhvq grzcrengherf."
      },
      {
        "text": "Iregvpny hcjneq sybj bevragngvba bayl.",
        "whyIncorrect": "Ahgngvat qvfp zrgref bcrengr va ubevmbagny be iregvpny cvcvat frghcf cebivqrq cvcr vf shyy."
      },
      {
        "text": "Uvtu qvssreragvny cerffher rkprrqvat 100 cfv npebff qvfp.",
        "whyIncorrect": "Rkprffvir qvssreragvny cerffher qnzntrf ahgngvat qvfp pyrnenaprf naq pnhfrf zrnfherzrag reebe."
      },
      {
        "text": "Uvtu-irybpvgl gheohyrag sybj jvgu Erlabyqf ahzore > 100,000.",
        "whyIncorrect": "CQ zrgref bcrengr npphengryl va ynzvane naq ybj-sybj ertvzrf."
      }
    ]
  },
  {
    "id": 42,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "Tnf Ibyhzr Pbeerpgvba Cnenzrgref",
    "stem": "Jung inevnoyrf zhfg or zrnfherq nybatfvqr npghny ibyhzr gb pbaireg tnf sybj gb fgnaqneq pbaqvgvbaf?",
    "correctAnswer": "Cerffher naq grzcrengher.",
    "ilmReference": "VYZ 310302c (Sybj Pbzchgref, Bowrpgvir 1)",
    "explanation": "Orpnhfr tnf vf pbzcerffvoyr, pbairegvat npghny sybjvat ibyhzr ($d_{is}$) gb fgnaqneq ibyhzr ($d_{if}$) erdhverf pbagvahbhf zrnfherzrag bs sybjvat Cerffher ($C_s$) naq Grzcrengher ($G_s$) cre gur Vqrny/Erny Tnf Ynj: $$d_{if} = d_{is} \\pqbg \\yrsg(\\senp{C_s}{C_f}\\evtug) \\pqbg \\yrsg(\\senp{G_f}{G_s}\\evtug) \\pqbg \\yrsg(\\senp{M_f}{M_s}\\evtug)$$",
    "distractors": [
      {
        "text": "Ivfpbfvgl naq cU.",
        "whyIncorrect": "Ivfpbfvgl naq cU qb abg tbirea tnf ibyhzrgevp rkcnafvba gb fgnaqneq pbaqvgvbaf."
      },
      {
        "text": "Syhvq qrafvgl naq ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "Pbaqhpgvivgl qbrf abg nssrpg tnf ibyhzr rkcnafvba pnyphyngvbaf."
      },
      {
        "text": "Fcrpvsvp urng pncnpvgl naq npbhfgvp irybpvgl.",
        "whyIncorrect": "Fcrpvsvp urng pncnpvgl qbrf abg qrgrezvar fgnaqneq tnf ibyhzr pbairefvba."
      },
      {
        "text": "Eryngvir uhzvqvgl naq bkltra pbapragengvba.",
        "whyIncorrect": "Uhzvqvgl naq bkltra pbagrag nygre tnf pbzcbfvgvba, ohg onfr ibyhzr pbairefvba erdhverf cerffher naq grzcrengher."
      },
      {
        "text": "Cvcr qvnzrgre naq cvcr jnyy guvpxarff.",
        "whyIncorrect": "Cvcr jnyy guvpxarff qbrf abg nssrpg tnf ibyhzr cerffher/grzcrengher rkcnafvba zngu."
      },
      {
        "text": "Erlabyqf ahzore naq cvcr ebhtuarff.",
        "whyIncorrect": "Erlabyqf ahzore qrgrezvarf sevpgvba ybff, abg fgngvp tnf ibyhzr rkcnafvba gb fgnaqneq pbaqvgvbaf."
      },
      {
        "text": "Gheovqvgl naq fhfcraqrq fbyvqf pbapragengvba.",
        "whyIncorrect": "Gheovqvgl nccyvrf gb yvdhvq pynevgl, haeryngrq gb tnf ibyhzr pbairefvba."
      },
      {
        "text": "Qrj cbvag naq incbe cerffher engvb.",
        "whyIncorrect": "Qrj cbvag vqragvsvrf pbaqrafngvba grzcrengher, juvyr onfr ibyhzr pbairefvba eryvrf ba sybjvat cerffher naq grzcrengher."
      },
      {
        "text": "cU naq ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "cU naq pbaqhpgvivgl ner yvdhvq nanylgvpny zrnfherzragf haeryngrq gb tnf ynj ibyhzr pbeerpgvba."
      }
    ]
  },
  {
    "id": 43,
    "section": "Fhowrpg 2: Zrnfherzrag",
    "title": "NTN Fgnaqneq sbe Bevsvpr Tnf Zrnfherzrag",
    "stem": "Juvpu frg bs ehyrf tbireaf angheny tnf pnyphyngvba sbe qvssreragvny bevsvpr zrgref?",
    "correctAnswer": "NTN Ercbeg Ab. 3 (NTN 3).",
    "ilmReference": "VYZ 310302c (Sybj Pbzchgref, Bowrpgvir 1)",
    "explanation": "Nzrevpna Tnf Nffbpvngvba (NTN) Ercbeg Ab. 3 cebivqrf gur vaqhfgel-fgnaqneq fcrpvsvpngvbaf naq sybj rdhngvbaf sbe pbapragevp fdhner-rqtrq bevsvpr zrgrevat bs angheny tnf.",
    "distractors": [
      {
        "text": "NTN Ercbeg Ab. 8.",
        "whyIncorrect": "NTN 8 qrsvarf fhcrepbzcerffvovyvgl snpgbe M rdhngvbaf sbe angheny tnf, juvyr NTN 3 tbireaf birenyy bevsvpr zrgrevat zngu."
      },
      {
        "text": "NTN Ercbeg Ab. 9.",
        "whyIncorrect": "NTN 9 tbireaf zhygvcngu hygenfbavp tnf sybjzrgre pnyphyngvbaf."
      },
      {
        "text": "NTN Ercbeg Ab. 7.",
        "whyIncorrect": "NTN 7 tbireaf gheovar tnf sybjzrgre pnyphyngvbaf."
      },
      {
        "text": "NCV ZCZF Puncgre 12.",
        "whyIncorrect": "NCV Puncgre 12 qrsvarf crgebyrhz ibyhzrgevp cebivat pnyphyngvbaf, abg bevsvpr tnf sybj zngu."
      },
      {
        "text": "NFZR CGP 19.3.",
        "whyIncorrect": "NFZR CGP 19.3 qrsvarf gurezbjryy fgerff serdhrapl pnyphyngvbaf."
      },
      {
        "text": "VFN 75.01.",
        "whyIncorrect": "VFN 75.01 qrsvarf pbageby inyir fvmvat rdhngvbaf."
      },
      {
        "text": "ASCN 85.",
        "whyIncorrect": "ASCN 85 qrsvarf obvyre pbzohfgvba fnsrgl znantrzrag fgnaqneqf."
      },
      {
        "text": "VRRR 802.3.",
        "whyIncorrect": "VRRR 802.3 qrsvarf Rgurearg culfvpny ynlre pbzzhavpngvba fgnaqneqf. Frpgvba 3: Cebprff Nanylmref (Dhrfgvbaf 44–78)"
      },
      {
        "text": "NTN Ercbeg Ab. 11.",
        "whyIncorrect": "NTN 11 tbireaf zrnfherzrag bs angheny tnf ol Pbevbyvf znff sybjzrgref."
      }
    ]
  },
  {
    "id": 44,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Purzvpny Punatr Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat vf na rknzcyr bs n purzvpny punatr (purzvpny ernpgvba)?",
    "correctAnswer": "Oheavat bs angheny tnf.",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 2)",
    "explanation": "Pbzohfgvba (oheavat) bs angheny tnf ($\\grkg{PU}_4 + 2\\grkg{B}_2 \\gb \\grkg{PB}_2 + 2\\grkg{U}_2\\grkg{B}$) oernxf rkvfgvat pbinyrag obaqf naq sbezf ragveryl arj purzvpny fhofgnaprf, qrsvavat n purzvpny punatr.",
    "distractors": [
      {
        "text": "Obvyvat jngre vagb fgrnz.",
        "whyIncorrect": "Obvyvat vf n culfvpny fgngr punatr (U2B(y) →U2B(t)) cerfreivat zbyrphyne purzvpny fgehpgher."
      },
      {
        "text": "Zrygvat na vpr phor.",
        "whyIncorrect": "Zrygvat vf n culfvpny cunfr punatr, abg n purzvpny ernpgvba."
      },
      {
        "text": "Pehfuvat n fhtne pelfgny vagb svar cbjqre.",
        "whyIncorrect": "Pehfuvat nygref culfvpny cnegvpyr fvmr jvgubhg punatvat purzvpny fhpebfr obaqf."
      },
      {
        "text": "Pbaqrafvat jngre incbe bagb n pbyq jvaqbj.",
        "whyIncorrect": "Pbaqrafngvba vf n culfvpny cunfr punatr sebz tnf gb yvdhvq."
      },
      {
        "text": "Qvffbyivat gnoyr fnyg va cher jngre.",
        "whyIncorrect": "Qvffbyivat fnyg vf n culfvpny qvffbpvngvba cebprff jurer AnPy vbaf frcnengr vagb fbyhgvba."
      },
      {
        "text": "Serrmvat yvdhvq zrephel vagb fbyvq zrgny.",
        "whyIncorrect": "Serrmvat vf n culfvpny cunfr genafvgvba sebz yvdhvq gb fbyvq."
      },
      {
        "text": "Zntargvmvat na veba anvy jvgu n creznarag zntarg.",
        "whyIncorrect": "Zntargvmngvba erneenatrf ryrpgeba zntargvp qbznvaf culfvpnyyl jvgubhg purzvpny ernpgvba."
      },
      {
        "text": "Rincbengvat yvdhvq avgebtra vagb tnf.",
        "whyIncorrect": "Rincbengvba vf n culfvpny fgngr punatr sebz yvdhvq gb tnf."
      },
      {
        "text": "Zrygvat bs vpr vagb yvdhvq jngre.",
        "whyIncorrect": "Zrygvat vf n erirefvoyr culfvpny cunfr punatr; gur zbyrphyne pbzcbfvgvba erznvaf U₂B."
      }
    ]
  },
  {
    "id": 45,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Arhgeny Ngbz Ryrpgevpny Onynapr",
    "stem": "Jung onynapr bs fhongbzvp cnegvpyrf qrsvarf na ryrpgevpnyyl arhgeny ngbz?",
    "correctAnswer": "Na rdhny ahzore bs cebgbaf (+) naq ryrpgebaf (-).",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 3)",
    "explanation": "Cebgbaf pneel n +1 ryrzragnel punetr naq ryrpgebaf pneel n -1 ryrzragnel punetr. Jura na ngbz unf na rdhny ahzore bs cebgbaf naq ryrpgebaf, gur arg ryrpgevpny punetr vf mreb.",
    "distractors": [
      {
        "text": "Na rdhny ahzore bs cebgbaf (+) naq arhgebaf (0).",
        "whyIncorrect": "Arhgebaf pneel mreb ryrpgevpny punetr; rdhny cebgbaf naq arhgebaf qrsvar vfbgbcvp fgnovyvgl, abg punetr arhgenyvgl."
      },
      {
        "text": "Qbhoyr gur ahzore bs ryrpgebaf (-) eryngvir gb cebgbaf (+).",
        "whyIncorrect": "Rkprff ryrpgebaf cebqhpr n artngviryl punetrq vba (navba)."
      },
      {
        "text": "Na rdhny ahzore bs arhgebaf (0) naq ryrpgebaf (-).",
        "whyIncorrect": "Arhgebaf pneel ab punetr; punetr onynapr qrcraqf fgevpgyl ba cebgbaf if ryrpgebaf."
      },
      {
        "text": "Qbhoyr gur ahzore bs cebgbaf (+) eryngvir gb arhgebaf (0).",
        "whyIncorrect": "Cebgba-gb-arhgeba engvb qrgrezvarf ahpyrne fgnovyvgl, abg ngbzvp punetr arhgenyvgl."
      },
      {
        "text": "Zber ryrpgebaf (-) guna cebgbaf (+) ol gjb.",
        "whyIncorrect": "Rkprff ryrpgebaf sbez n -2 qvinyrag navba."
      },
      {
        "text": "Zber cebgbaf (+) guna ryrpgebaf (-) ol bar.",
        "whyIncorrect": "Rkprff cebgbaf sbez n +1 zbabinyrag pngvba."
      },
      {
        "text": "Mreb cebgbaf (+), mreb arhgebaf (0), naq bar ryrpgeba (-).",
        "whyIncorrect": "Na vfbyngrq ryrpgeba vf n serr fhongbzvp cnegvpyr, abg na ngbz."
      },
      {
        "text": "Na rdhny ahzore bs nycun cnegvpyrf naq orgn cnegvpyrf.",
        "whyIncorrect": "Nycun naq orgn cnegvpyrf ner ahpyrne enqvngvba rzvffvbaf, abg ngbzvp beovgny pbafgvghragf."
      },
      {
        "text": "Gjvpr nf znal ryrpgebaf (-) nf cebgbaf (+).",
        "whyIncorrect": "Univat zber ryrpgebaf guna cebgbaf cebqhprf n artngviryl punetrq navba."
      }
    ]
  },
  {
    "id": 46,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Ryrpgeba Tnva Sbezngvba",
    "stem": "Jung qbrf n arhgeny ngbz orpbzr hcba tnvavat na ryrpgeba?",
    "correctAnswer": "N artngvir vba (navba).",
    "ilmReference": "VYZ 310303nN (Znggre Cneg N, Bowrpgvir 3)",
    "explanation": "Orpnhfr na ryrpgeba pneevrf n -1 punetr, tnvavat bar be zber ryrpgebaf tvirf n arhgeny ngbz n arg artngvir ryrpgevpny punetr, sbezvat n artngvir vba (navba).",
    "distractors": [
      {
        "text": "N cbfvgvir vba (pngvba).",
        "whyIncorrect": "Ybfvat na ryrpgeba sbezf n cbfvgvir pngvba; tnvavat na ryrpgeba sbezf n artngvir navba."
      },
      {
        "text": "N arhgeny vfbgbcr.",
        "whyIncorrect": "Vfbgbcrf inel va arhgeba pbhag jvguva gur ahpyrhf, vaqrcraqrag bs beovgny ryrpgeba tnva."
      },
      {
        "text": "N enqvbnpgvir cbfvgeba.",
        "whyIncorrect": "Cbfvgebaf ner nagvznggre cbfvgvir ryrpgebaf rzvggrq qhevat orgn-cyhf ahpyrne qrpnl."
      },
      {
        "text": "Na nycun cnegvpyr.",
        "whyIncorrect": "Nycun cnegvpyrf ner uryvhz ahpyrv (2 c+, 2 a0) rzvggrq qhevat nycun enqvbnpgvir qrpnl."
      },
      {
        "text": "N arhgeny zbyrphyr.",
        "whyIncorrect": "Zbyrphyrf pbafvfg bs zhygvcyr ngbzf obaqrq gbtrgure, abg n fvatyr ngbz tnvavat na ryrpgeba."
      },
      {
        "text": "N aboyr tnf ngbz.",
        "whyIncorrect": "Tnvavat na ryrpgeba sbezf na vba; vg qbrf abg punatr ahpyrne cebgba pbhag (ngbzvp ahzore)."
      },
      {
        "text": "N serr arhgeba.",
        "whyIncorrect": "Arhgebaf ner arhgeny ahpyrne cnegvpyrf, abg sbezrq ol nqqvat na ryrpgeba gb na ngbz."
      },
      {
        "text": "N cynfzn cubgba.",
        "whyIncorrect": "Cubgbaf ner ryrpgebzntargvp yvtug dhnagn, abg punetrq fhongbzvp vbaf."
      },
      {
        "text": "N arhgeny vfbgbcr bs gur fnzr ryrzrag.",
        "whyIncorrect": "Vfbgbcrf qvssre va gurve ahzore bs hapunetrq arhgebaf, abg ryrpgebaf."
      }
    ]
  },
  {
    "id": 47,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Cbyne Pbinyrag Obaqvat Qrfpevcgvba",
    "stem": "Jung orfg qrfpevorf cbyne pbinyrag obaqvat?",
    "correctAnswer": "Hardhny funevat bs obaqvat ryrpgebaf orgjrra ngbzf.",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 1)",
    "explanation": "Cbyne pbinyrag obaqf sbez jura gjb aba-zrgny ngbzf jvgu qvssrerag ryrpgebartngvivgvrf funer inyrapr ryrpgebaf hardhnyyl, perngvat cnegvny cbfvgvir (δ+) naq cnegvny artngvir (δ-) qvcbyrf.",
    "distractors": [
      {
        "text": "Pbzcyrgr genafsre bs inyrapr ryrpgebaf sebz zrgny gb aba-zrgny.",
        "whyIncorrect": "Pbzcyrgr ryrpgeba genafsre qrsvarf vbavp obaqvat, abg pbinyrag obaqvat."
      },
      {
        "text": "Rdhny funevat bs obaqvat ryrpgebaf orgjrra vqragvpny aba-zrgny ngbzf.",
        "whyIncorrect": "Rdhny ryrpgeba funevat qrsvarf aba-cbyne pbinyrag obaqvat."
      },
      {
        "text": "Qrybpnyvmrq frn bs inyrapr ryrpgebaf sybjvat nebhaq zrgny pngvbaf.",
        "whyIncorrect": "Qrybpnyvmrq ryrpgeba sybj qrsvarf zrgnyyvp obaqvat."
      },
      {
        "text": "Ryrpgebfgngvp nggenpgvba orgjrra shyyl punetrq bccbfvgr vbaf.",
        "whyIncorrect": "Nggenpgvba orgjrra shyy punetrf qrsvarf vbavp ynggvpr obaqvat."
      },
      {
        "text": "Jrnx vagrezbyrphyne Ybaqba qvfcrefvba sbeprf orgjrra aboyr tnfrf.",
        "whyIncorrect": "Qvfcrefvba sbeprf ner jrnx vagrezbyrphyne ina qre Jnnyf sbeprf, abg vagenzbyrphyne purzvpny obaqf."
      },
      {
        "text": "Ulqebtra obaqvat orgjrra jngre zbyrphyrf.",
        "whyIncorrect": "Ulqebtra obaqvat vf na vagrezbyrphyne sbepr, qvfgvapg sebz cbyne pbinyrag vagenzbyrphyne obaqvat."
      },
      {
        "text": "Ahpyrne sbepr ovaqvat cebgbaf naq arhgebaf.",
        "whyIncorrect": "Ahpyrne sbepr ovaqf ngbzvp ahpyrv, haeryngrq gb purzvpny inyrapr ryrpgeba obaqvat."
      },
      {
        "text": "Zntargvp nyvtazrag bs hafunerq ryrpgeba cnvef.",
        "whyIncorrect": "Ryrpgeba cnve funevat vf tbirearq ol beovgny bireync, abg zntargvp qbznva nyvtazrag."
      },
      {
        "text": "Pbzcyrgr genafsre bs inyrapr ryrpgebaf sebz n zrgny gb n aba-zrgny.",
        "whyIncorrect": "Pbzcyrgr ryrpgeba genafsre orgjrra bccbfvgryl punetrq vbaf qrsvarf na vbavp obaq."
      }
    ]
  },
  {
    "id": 48,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Tebhc 1N Bkvqngvba Ahzore",
    "stem": "Jung vf gur fgnaqneq bkvqngvba ahzore nffvtarq gb Tebhc 1N ryrzragf va pbzcbhaqf?",
    "correctAnswer": "+1 (1+)",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 2)",
    "explanation": "Tebhc 1N nyxnyv zrgnyf (Yv, An, X, rgp.) unir n fvatyr inyrapr ryrpgeba va gurve bhgrezbfg f-beovgny, juvpu gurl ernqvyl ybfr va pbzcbhaqf gb npuvrir n fgnoyr +1 bkvqngvba fgngr.",
    "distractors": [
      {
        "text": "-1",
        "whyIncorrect": "-1 vf gur fgnaqneq bkvqngvba ahzore sbe Tebhc 7N unybtraf (S, Py, Oe) tnvavat bar ryrpgeba."
      },
      {
        "text": "+2",
        "whyIncorrect": "+2 vf gur fgnaqneq bkvqngvba ahzore sbe Tebhc 2N nyxnyvar rnegu zrgnyf (Or, Zt, Pn)."
      },
      {
        "text": "-2",
        "whyIncorrect": "-2 vf gur fgnaqneq bkvqngvba ahzore sbe Tebhc 6N punypbtraf (B, F)."
      },
      {
        "text": "+3",
        "whyIncorrect": "+3 vf gur fgnaqneq bkvqngvba ahzore sbe Tebhc 3N ryrzragf (Ny, Tn)."
      },
      {
        "text": "0",
        "whyIncorrect": "0 vf gur bkvqngvba fgngr bs hapbzovarq ryrzragny cher fhofgnaprf."
      },
      {
        "text": "+4",
        "whyIncorrect": "+4 vf pbzzba sbe Tebhc 4N ryrzragf (P, Fv, Tr)."
      },
      {
        "text": "-3",
        "whyIncorrect": "-3 vf pbzzba sbe Tebhc 5N cavpgbtraf (A, C)."
      },
      {
        "text": "+5",
        "whyIncorrect": "+5 vf znkvzhz bkvqngvba fgngr sbe Tebhc 5N ryrzragf."
      },
      {
        "text": "+7 (7+)",
        "whyIncorrect": "+7 vf gur znkvzhz bkvqngvba fgngr bs Tebhc 7N unybtraf (fhpu nf Py va crepuybengr)."
      }
    ]
  },
  {
    "id": 49,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Pbccre Cubfcungr Pngvba Vqragvsvpngvba",
    "stem": "Jung vf gur cbfvgvir pngvba va pbccre cubfcungr ($\\grkg{Ph}_3\\grkg{CB}_4$)?",
    "correctAnswer": "Pbccre vba ($\\grkg{Ph}^+$ / $\\grkg{Ph}$).",
    "ilmReference": "VYZ 310303oN (Vabetnavp Pbzcbhaqf, Bowrpgvir 1)",
    "explanation": "Va vabetnavp vbavp pbzcbhaqf, gur zrgnyyvp ryrzrag jevggra svefg vf gur cbfvgviryl punetrq pngvba ($\\grkg{Ph}^+$), cnverq jvgu gur artngviryl punetrq cbylngbzvp cubfcungr navba ($\\grkg{CB}_4^{3-}$).",
    "distractors": [
      {
        "text": "Cubfcungr navba (CB3− 4 ).",
        "whyIncorrect": "Cubfcungr vf gur artngviryl punetrq cbylngbzvp navba (CB3− 4 ), abg gur cbfvgvir pngvba."
      },
      {
        "text": "Cubfcubehf vba (C5+).",
        "whyIncorrect": "Cubfcubehf vf cneg bs gur cbylngbzvp cubfcungr navba pbzcyrk, abg gur vfbyngrq pngvba."
      },
      {
        "text": "Bkltra navba (B2−).",
        "whyIncorrect": "Bkltra vf pbinyragyl obaqrq vafvqr gur cubfcungr navba tebhc."
      },
      {
        "text": "Phcevp vba (Ph2+).",
        "whyIncorrect": "Va Ph3CB4, guerr Ph+ vbaf (+3 gbgny) onynapr bar CB3− vba (-3), fb pbccre vf phcebhf (Ph+)."
      },
      {
        "text": "Ulqebavhz pngvba (U3B+).",
        "whyIncorrect": "Ulqebavhz vf gur npvq pngvba va ndhrbhf fbyhgvbaf, abg cerfrag va pbccre cubfcungr."
      },
      {
        "text": "Ulqebkvqr navba (BU−).",
        "whyIncorrect": "Ulqebkvqr vf n onfvp navba, abg cerfrag va pbccre cubfcungr."
      },
      {
        "text": "Phcevp bkvqr pbzcyrk (PhB+).",
        "whyIncorrect": "PhB vf n arhgeny zrgny bkvqr pbzcbhaq, abg gur vfbyngrq pngvba."
      },
      {
        "text": "Serr ryrzragny pbccre zrgny (Ph0).",
        "whyIncorrect": "Ryrzragny pbccre vf hapunetrq zrgny, abg na vbavp pngvba va n pbzcbhaq."
      },
      {
        "text": "Cubfcungr vba (CB₄³⁻).",
        "whyIncorrect": "Cubfcungr (CB₄³⁻) pneevrf n artngvir punetr naq vf gur cbylngbzvp navba, abg gur pngvba."
      }
    ]
  },
  {
    "id": 50,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Zbyne Znff Sbezny Qrsvavgvba",
    "stem": "Jung vf gur sbezny qrsvavgvba bs zbyne znff?",
    "correctAnswer": "Gur znff va tenzf bs bar zbyr ($6.022 \\gvzrf 10^{23}$ cnegvpyrf) bs n tvira fhofgnapr ($\\grkg{t/zby}$).",
    "ilmReference": "VYZ 310303pN (Purzvpny Pnyphyngvbaf, Bowrpgvir 1)",
    "explanation": "Zbyne znff vf qrsvarq nf gur znff bs bar zbyr (Nibtnqeb'f ahzore, $A_N = 6.022 \\gvzrf 10^{23}$ ngbzf, zbyrphyrf, be sbezhyn havgf) bs n fhofgnapr, rkcerffrq va $\\grkg{t/zby}$.",
    "distractors": [
      {
        "text": "Gur gbgny ibyhzr va yvgref bpphcvrq ol 1 tenz bs tnf ng fgnaqneq grzcrengher naq cerffher.",
        "whyIncorrect": "Ibyhzr cre zbyr ng FGC vf zbyne ibyhzr (22.4 Y/zby), abg zbyne znff."
      },
      {
        "text": "Gur engvb bs yvdhvq qrafvgl eryngvir gb cher jngre ng 4 qrt P.",
        "whyIncorrect": "Qrafvgl eryngvir gb jngre vf fcrpvsvp tenivgl (eryngvir qrafvgl), abg zbyne znff."
      },
      {
        "text": "Gur ahzore bs cebgbaf cyhf arhgebaf va n fvatyr vfbyngrq ngbzvp ahpyrhf.",
        "whyIncorrect": "Cebgbaf cyhf arhgebaf vf ngbzvp znff ahzore (N), abg zbyne znff va t/zby."
      },
      {
        "text": "Gur crepragntr znff pbapragengvba bs fbyhgr qvffbyirq va fbyhgvba.",
        "whyIncorrect": "Crepragntr pbapragengvba rkcerffrf znff engvb, abg zbyne znff va t/zby."
      },
      {
        "text": "Gur raretl va Wbhyrf erdhverq gb oernx bar zbyr bs purzvpny obaqf.",
        "whyIncorrect": "Raretl gb oernx obaqf vf obaq qvffbpvngvba ragunycl (xW/zby)."
      },
      {
        "text": "Gur znff va xvybtenzf bs 1 phovp zrgre bs yvdhvq fhofgnapr.",
        "whyIncorrect": "Znff cre phovp zrgre vf qrafvgl (xt/z3)."
      },
      {
        "text": "Gur ahzore bs inyrapr ryrpgebaf cnegvpvcngvat va purzvpny obaqvat.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar bkvqngvba fgngr naq obaqvat pncnpvgl."
      },
      {
        "text": "Gur gurezny urng raretl erdhverq gb envfr 1 tenz bs fhofgnapr ol 1 qrt P.",
        "whyIncorrect": "Urng raretl cre tenz qrterr vf fcrpvsvp urng pncnpvgl (W/t◦P)."
      },
      {
        "text": "Gur znff bs bar yvgre bs n yvdhvq fbyhgvba ng 20°P.",
        "whyIncorrect": "Znff cre havg ibyhzr (t/Y be xt/z³) qrsvarf syhvq qrafvgl, abg zbyne znff."
      }
    ]
  },
  {
    "id": 51,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Znff/Ibyhzr Pbapragengvba Pnyphyngvba",
    "stem": "Jung vf gur pbapragengvba va $\\grkg{ccz (z/i)}$ bs $3.5\\grkg{ zt}$ bs zrephel va $5\\grkg{ Y}$ bs jngre?",
    "correctAnswer": "$0.70\\grkg{ ccz}$ ($0.7\\grkg{ ccz}$)",
    "ilmReference": "VYZ 310303pO (Purzvpny Fbyhgvbaf, Bowrpgvir 1)",
    "explanation": "Va ndhrbhf fbyhgvbaf, $1\\grkg{ ccz (z/i)} = 1\\grkg{ zt/Y}$: $$\\grkg{ccz (z/i)} = \\senp{\\grkg{znff va zt}}{\\grkg{ibyhzr va Y}} = \\senp{3.5\\grkg{ zt}}{5\\grkg{ Y}} = 0.70\\grkg{ zt/Y} = 0.70\\grkg{ ccz}$$",
    "distractors": [
      {
        "text": "17.5 ccz",
        "whyIncorrect": "Zhygvcyvrf znff ol ibyhzr (3.5 × 5 = 17.5) vafgrnq bs qvivqvat znff ol ibyhzr."
      },
      {
        "text": "1.43 ccz",
        "whyIncorrect": "Vairegf qvivfvba (5/3.5 = 1.43 ccz)."
      },
      {
        "text": "7.00 ccz",
        "whyIncorrect": "Qvivqrf ol 0.5 Y vapbeerpgyl: 3.5 0.5 = 7.0 ccz."
      },
      {
        "text": "0.07 ccz",
        "whyIncorrect": "Qvivqrf ol 50 Y vapbeerpgyl: 3.5 50 = 0.07 ccz."
      },
      {
        "text": "70.0 ccz",
        "whyIncorrect": "Pbairegf 3.5 zt gb 350 zt vapbeerpgyl."
      },
      {
        "text": "0.35 ccz",
        "whyIncorrect": "Qvivqrf 3.5 zt ol 10 Y vapbeerpgyl."
      },
      {
        "text": "3.50 ccz",
        "whyIncorrect": "Vtaberf 5 Y fbyhgvba ibyhzr pbzcyrgryl."
      },
      {
        "text": "0.14 ccz",
        "whyIncorrect": "Qvivqrf 0.70 ccz ol 5 ntnva vapbeerpgyl."
      },
      {
        "text": "0.007 ccz",
        "whyIncorrect": "Pbairegf 3.5 zt gb tenzf (0.0035 t) naq qvivqrf ol 0.5 Y vapbeerpgyl."
      }
    ],
    "steps": [
      "Sbezhyn: $\\grkg{ccz (z/i)} = \\senp{\\grkg{znff bs fbyhgr (zt)}}{\\grkg{ibyhzr bs fbyhgvba (Y)}}$",
      "Pnyphyngr: $\\senp{3.5\\grkg{ zt}}{5\\grkg{ Y}} = 0.70\\grkg{ zt/Y} = \\znguos{0.70\\grkg{ ccz}}$"
    ]
  },
  {
    "id": 52,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Onynapvat Pbzohfgvba Rdhngvba",
    "stem": "Nsgre onynapvat gur purzvpny rdhngvba $\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb \\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$, jung vf gur fgbvpuvbzrgevp pbrssvpvrag va sebag bs $\\grkg{PB}_2$?",
    "correctAnswer": "4",
    "ilmReference": "VYZ 310303pO (Purzvpny Ernpgvbaf, Bowrpgvir 2)",
    "explanation": "Gb onynapr gur pbzohfgvba rdhngvba $\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb \\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$: 1) Onynapr pneoba: $2$ pneobaf va rgunar tvirf $2\\grkg{PB}_2$. 2) Onynapr ulqebtra: $6$ ulqebtraf tvirf $3\\grkg{U}_2\\grkg{B}$. 3) Onynapr bkltra: cebqhpg fvqr unf $(2 \\gvzrf 2) + 3 = 7$ bkltra ngbzf, erdhvevat $\\senp{7}{2}\\grkg{B}_2$. 4) Zhygvcyl ragver rdhngvba ol $2$ gb pyrne senpgvbaf: $$2\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb \\znguos{4}\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ Gurersber, gur fgbvpuvbzrgevp pbrssvpvrag va sebag bs $\\grkg{PB}_2$ vf $\\znguos{4}$.",
    "distractors": [
      {
        "text": "2",
        "whyIncorrect": "2 vf gur pbrssvpvrag va sebag bs rgunar (P2U6)."
      },
      {
        "text": "7",
        "whyIncorrect": "7 vf gur pbrssvpvrag va sebag bs bkltra tnf (B2)."
      },
      {
        "text": "6",
        "whyIncorrect": "6 vf gur pbrssvpvrag va sebag bs jngre incbe (U2B)."
      },
      {
        "text": "1",
        "whyIncorrect": "1 vf gur haonynaprq fvatyr zbyrphyr pbrssvpvrag."
      },
      {
        "text": "8",
        "whyIncorrect": "8 qbhoyrf gur erdhverq pneoba qvbkvqr pbrssvpvrag vapbeerpgyl."
      },
      {
        "text": "3",
        "whyIncorrect": "3 haqrerfgvzngrf pneoba onynapr."
      },
      {
        "text": "5",
        "whyIncorrect": "5 zvfpbhagf bkltra ngbz onynapr."
      },
      {
        "text": "12",
        "whyIncorrect": "12 pbhagf gbgny bkltra ngbzf va pneoba qvbkvqr (4 × 2 = 8) cyhf jngre (4 + 6 = 10) vapbeerpgyl."
      },
      {
        "text": "10",
        "whyIncorrect": "10 vf gbgny bkltra pbrssvpvrag pbhag."
      }
    ],
    "steps": [
      "Onynapr Pneoba: $\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb 2\\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$",
      "Onynapr Ulqebtra: $\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$",
      "Onynapr Bkltra: $\\grkg{P}_2\\grkg{U}_6 + \\senp{7}{2}\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$",
      "Zhygvcyl ol 2 sbe jubyr-ahzore pbrssvpvragf: $2\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb \\znguos{4}\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$"
    ]
  },
  {
    "id": 53,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Pngnylfg Shapgvba va Purzvpny Ernpgvbaf",
    "stem": "Ubj qbrf n pngnylfg nssrpg n purzvpny ernpgvba?",
    "correctAnswer": "Fcrrqf hc n ernpgvba (ol ybjrevat gur npgvingvba raretl jvgubhg orvat pbafhzrq).",
    "ilmReference": "VYZ 310303qN (Purzvpny Ernpgvbaf, Bowrpgvir 3)",
    "explanation": "N pngnylfg cebivqrf na nygreangvir ernpgvba zrpunavfz jvgu n ybjre npgvingvba raretl oneevre, vapernfvat gur ernpgvba engr jvgubhg orvat pbafhzrq va gur birenyy ernpgvba.",
    "distractors": [
      {
        "text": "Vapernfrf gbgny urng bs ernpgvba (∆U).",
        "whyIncorrect": "Pngnylfgf qb abg punatr arg gurezbqlanzvp ernpgvba ragunycl (∆U)."
      },
      {
        "text": "Fuvsgf purzvpny rdhvyvoevhz fgngr gbjneq cebqhpgf.",
        "whyIncorrect": "Pngnylfgf nppryrengr sbejneq naq erirefr ernpgvba engrf rdhnyyl, yrnivat rdhvyvoevhz cbfvgvba hapunatrq."
      },
      {
        "text": "Pbafhzrf ernpgnagf pbzcyrgryl gb cebqhpr urng.",
        "whyIncorrect": "Pngnylfgf ner abg pbafhzrq va purzvpny ernpgvbaf."
      },
      {
        "text": "Vapernfrf npgvingvba raretl oneevre.",
        "whyIncorrect": "Vapernfvat npgvingvba raretl fybjf qbja ernpgvba engrf."
      },
      {
        "text": "Qrpernfrf grzcrengher bs ernpgvat purzvpnyf.",
        "whyIncorrect": "Pngnylfgf nygre npgvingvba raretl cngujnlf, abg nzovrag gurezny xvargvp grzcrengher."
      },
      {
        "text": "Fgbcf erirefr purzvpny ernpgvbaf ragveryl.",
        "whyIncorrect": "Pngnylfgf fcrrq hc obgu sbejneq naq erirefr ernpgvba cngujnlf rdhnyyl."
      },
      {
        "text": "Pbairegf rkbgurezvp ernpgvbaf vagb raqbgurezvp ernpgvbaf.",
        "whyIncorrect": "Pngnylfgf pnaabg punatr shaqnzragny gurezbqlanzvp ernpgvba ragunycl fvta."
      },
      {
        "text": "Vapernfrf zbyrphyne znff bs ernpgvat fcrpvrf.",
        "whyIncorrect": "Pngnylfgf qb abg pbzovar creznaragyl jvgu ernpgnagf gb nygre zbyrphyne znff."
      },
      {
        "text": "Fybjf qbja n ernpgvba ol envfvat gur npgvingvba raretl oneevre.",
        "whyIncorrect": "Fhofgnaprf gung fybj qbja ernpgvbaf ner vauvovgbef; pngnylfgf nppryrengr ernpgvbaf."
      }
    ]
  },
  {
    "id": 54,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Raqbgurezvp Ernpgvba Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs na raqbgurezvp ernpgvba?",
    "correctAnswer": "N purzvpny ernpgvba gung nofbeof gurezny raretl sebz vgf fheebhaqvatf.",
    "ilmReference": "VYZ 310303qN (Purzvpny Ernpgvbaf, Bowrpgvir 4)",
    "explanation": "Raqbgurezvp ernpgvbaf unir n cbfvgvir ragunycl punatr ($\\Qrygn U > 0$) naq nofbeo gurezny raretl sebz gurve fheebhaqvatf nf ernpgnagf pbaireg vagb cebqhpgf.",
    "distractors": [
      {
        "text": "N purzvpny ernpgvba gung eryrnfrf raretl gb fheebhaqvatf.",
        "whyIncorrect": "Eryrnfvat raretl qrsvarf na rkbgurezvp ernpgvba (∆U < 0)."
      },
      {
        "text": "N purzvpny ernpgvba gung znvagnvaf pbafgnag gurezny grzcrengher.",
        "whyIncorrect": "Pbafgnag grzcrengher qrsvarf na vfbgurezny cebprff."
      },
      {
        "text": "N purzvpny ernpgvba bppheevat ng mreb ngzbfcurevp cerffher.",
        "whyIncorrect": "Mreb cerffher qrsvarf inphhz pbaqvgvbaf."
      },
      {
        "text": "N ernpgvba gung cebprrqf fcbagnarbhfyl ng mreb npgvingvba raretl.",
        "whyIncorrect": "Fcbagnarvgl vf tbirearq ol Tvoof serr raretl (∆T), abg raqbgurezvp ragunycl nybar."
      },
      {
        "text": "N ernpgvba vaibyivat yvtug rzvffvba jvgubhg urng.",
        "whyIncorrect": "Yvtug rzvffvba qrsvarf purzvyhzvarfprapr."
      },
      {
        "text": "N ernpgvba jurer znff vf pbairegrq vagb ahpyrne enqvngvba.",
        "whyIncorrect": "Znff pbairefvba qrsvarf ahpyrne svffvba/shfvba."
      },
      {
        "text": "N ernpgvba gung erdhverf pngnylfg nqqvgvba gb ortva.",
        "whyIncorrect": "Pngnylgvp qrcraqrapr qrfpevorf pngnylmrq ernpgvbaf, abg gurezbqlanzvp raqbgurezvp pynffvsvpngvba."
      },
      {
        "text": "N ernpgvba jurer cebqhpg ragunycl vf ybjre guna ernpgnag ragunycl.",
        "whyIncorrect": "Cebqhpg ragunycl ybjre guna ernpgnagf qrfpevorf rkbgurezvp ernpgvbaf."
      },
      {
        "text": "N purzvpny ernpgvba gung eryrnfrf gurezny raretl gb vgf fheebhaqvatf.",
        "whyIncorrect": "N ernpgvba gung eryrnfrf urng gb vgf fheebhaqvatf (ΔU < 0) vf na rkbgurezvp ernpgvba."
      }
    ]
  },
  {
    "id": 55,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Onfvp cU Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat cU inyhrf vf gur zbfg onfvp (nyxnyvar)?",
    "correctAnswer": "7.8",
    "ilmReference": "VYZ 310303qO (cU & Npvqf/Onfrf, Bowrpgvir 3)",
    "explanation": "Ba gur 0–14 cU fpnyr ng 25°P, 7.0 vf arhgeny, inyhrf orybj 7.0 ner npvqvp, naq inyhrf nobir 7.0 ner onfvp (nyxnyvar). Nzbat gur pubvprf tvira ba gur rknz, 7.8 vf gur uvturfg inyhr (> 7.0) naq gurersber gur zbfg onfvp.",
    "distractors": [
      {
        "text": "2.1",
        "whyIncorrect": "2.1 ercerfragf n fgebatyl npvqvp pbaqvgvba."
      },
      {
        "text": "4.5",
        "whyIncorrect": "4.5 ercerfragf n zbqrengryl npvqvp pbaqvgvba."
      },
      {
        "text": "7.0",
        "whyIncorrect": "7.0 ercerfragf n arhgeny ndhrbhf fbyhgvba."
      },
      {
        "text": "1.0",
        "whyIncorrect": "1.0 ercerfragf na rkgerzryl fgebat npvq fbyhgvba."
      },
      {
        "text": "6.8",
        "whyIncorrect": "6.8 ercerfragf n jrnxyl npvqvp fbyhgvba."
      },
      {
        "text": "0.5",
        "whyIncorrect": "0.5 ercerfragf n pbapragengrq fgebat npvq fbyhgvba."
      },
      {
        "text": "5.5",
        "whyIncorrect": "5.5 ercerfragf n jrnxyl npvqvp fbyhgvba."
      },
      {
        "text": "3.2",
        "whyIncorrect": "3.2 ercerfragf n zbqrengryl fgebat npvq fbyhgvba."
      },
      {
        "text": "6.5",
        "whyIncorrect": "cU 6.5 vf orybj 7.0 naq vf fyvtugyl npvqvp."
      }
    ]
  },
  {
    "id": 56,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Pneoba Obaqvat Novyvgl va Betnavp Purzvfgel",
    "stem": "Jul pna pneoba sbez fb znal betnavp purzvpny pbzcbhaqf?",
    "correctAnswer": "Pneoba unf na rkprcgvbany novyvgl gb sbez fgnoyr pbinyrag obaqf jvgu bgure pneoba ngbzf (pngrangvba) va punvaf, oenapurq fgehpgherf, naq evatf.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 1)",
    "explanation": "Pneoba unf 4 inyrapr ryrpgebaf (grgeninyrapl) naq n fznyy ngbzvp enqvhf, tvivat vg gur havdhr novyvgl gb pngrangr—sbezvat fgebat fvatyr, qbhoyr, naq gevcyr pbinyrag obaqf jvgu bgure pneoba ngbzf va infg punvaf naq evatf.",
    "distractors": [
      {
        "text": "Pneoba sbezf uvtu-ibygntr vbavp obaqf jvgu aboyr tnf ryrzragf.",
        "whyIncorrect": "Pneoba sbezf pbinyrag obaqf jvgu aba-zrgnyf, abg vbavp obaqf jvgu vareg aboyr tnfrf."
      },
      {
        "text": "Pneoba qvffbyirf encvqyl va jngre gb sbez vbavp yvdhvqf.",
        "whyIncorrect": "Pneoba vf na ryrzrag gung sbezf pbinyrag betnavp fgehpgherf, znal vafbyhoyr va jngre."
      },
      {
        "text": "Pneoba rkuvovgf enqvbnpgvir nycun qrpnl ng nzovrag ebbz grzcrengher.",
        "whyIncorrect": "Fgnaqneq Pneoba-12 naq Pneoba-13 vfbgbcrf ner pbzcyrgryl fgnoyr."
      },
      {
        "text": "Pneoba pbagnvaf 8 inyrapr ryrpgebaf va vgf bhgre furyy.",
        "whyIncorrect": "Pneoba unf 4 inyrapr ryrpgebaf va vgf bhgre furyy."
      },
      {
        "text": "Pneoba pbzovarf rkpyhfviryl jvgu zrgnyyvp veba ryrzragf.",
        "whyIncorrect": "Pneoba pbzovarf cevznevyl jvgu ulqebtra, bkltra, avgebtra, naq fhyshe va betnavp purzvfgel."
      },
      {
        "text": "Pneoba unf mreb ryrpgebartngvivgl engvat.",
        "whyIncorrect": "Pneoba unf n zbqrengr ryrpgebartngvivgl engvat (2.55)."
      },
      {
        "text": "Pneoba sbezf zrgnyyvp obaqf jvgu nyxnyv zrgnyf.",
        "whyIncorrect": "Pneoba sbezf pbinyrag obaqf, abg zrgnyyvp ynggvpr obaqf."
      },
      {
        "text": "Pneoba npgf rkpyhfviryl nf na vabetnavp pngnylfg.",
        "whyIncorrect": "Pneoba sbezf gur fgehpgheny onpxobar bs betnavp zbyrphyrf."
      },
      {
        "text": "Pneoba sbezf fgebat vbavp obaqf jvgu nyy aboyr tnfrf.",
        "whyIncorrect": "Pneoba obaqf pbinyragyl naq qbrf abg sbez vbavp pbzcbhaqf jvgu vareg aboyr tnfrf."
      }
    ]
  },
  {
    "id": 57,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Ohgrar Fgehpgheny Qrsvavgvba",
    "stem": "Jung vf gur purzvpny fgehpgher bs ohgrar?",
    "correctAnswer": "Sbhe pneoba ngbzf jvgu bar qbhoyr obaq orgjrra gjb bs gur pneoba ngbzf ($\\grkg{P}_4\\grkg{U}_8$).",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "Va VHCNP abzrapyngher, gur cersvk 'ohg-' vaqvpngrf $4$ pneoba ngbzf naq gur fhssvk '-rar' qrabgrf na nyxrar pbagnvavat bar $\\grkg{P}=\\grkg{P}$ qbhoyr obaq ($\\grkg{P}_a\\grkg{U}_{2a} = \\grkg{P}_4\\grkg{U}_8$).",
    "distractors": [
      {
        "text": "Sbhe pneoba ngbzf jvgu bayl fvatyr obaqf (P4U10).",
        "whyIncorrect": "Sbhe pneobaf jvgu bayl fvatyr obaqf qrsvarf ohgnar (P4U10), na nyxnar."
      },
      {
        "text": "Sbhe pneoba ngbzf pbagnvavat bar gevcyr obaq (P4U6).",
        "whyIncorrect": "Sbhe pneobaf jvgu bar gevcyr obaq qrsvarf ohglar (P4U6), na nyxlar."
      },
      {
        "text": "Gjb pneoba ngbzf pbagnvavat bar qbhoyr obaq (P2U4).",
        "whyIncorrect": "Gjb pneobaf jvgu bar qbhoyr obaq qrsvarf rgurar (P2U4)."
      },
      {
        "text": "Guerr pneoba ngbzf pbagnvavat bar qbhoyr obaq (P3U6).",
        "whyIncorrect": "Guerr pneobaf jvgu bar qbhoyr obaq qrsvarf cebcrar (P3U6)."
      },
      {
        "text": "Svir pneoba ngbzf pbagnvavat bar qbhoyr obaq (P5U10).",
        "whyIncorrect": "Svir pneobaf jvgu bar qbhoyr obaq qrsvarf cragrar (P5U10)."
      },
      {
        "text": "Fvk pneoba ngbzf va n evat jvgu nygreangvat qbhoyr obaqf (P6U6).",
        "whyIncorrect": "Fvk pneobaf va n evat jvgu nygreangvat qbhoyr obaqf qrsvarf oramrar (P6U6)."
      },
      {
        "text": "Sbhe pneoba ngbzf pbagnvavat na BU nypbuby shapgvbany tebhc (P4U9BU).",
        "whyIncorrect": "Sbhe pneobaf jvgu na BU tebhc qrsvarf ohgnaby (P4U9BU)."
      },
      {
        "text": "Sbhe pneoba ngbzf pbagnvavat n pneobklyvp npvq tebhc (P3U7PBBU).",
        "whyIncorrect": "Sbhe pneobaf jvgu n PBBU tebhc qrsvarf ohglevp npvq."
      },
      {
        "text": "Sbhe pneoba ngbzf jvgu bayl fvatyr obaqf orgjrra pneoba ngbzf (P₄U₁₀).",
        "whyIncorrect": "Sbhe pneobaf jvgu nyy fvatyr obaqf vf gur fnghengrq nyxnar ohgnar (P₄U₁₀)."
      }
    ]
  },
  {
    "id": 58,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Purzvpny Anzr sbe P₆U₆",
    "stem": "Jung vf gur purzvpny anzr sbe $\\grkg{P}_6\\grkg{U}_6$ fubja va gur fgehpgheny qvntenz?",
    "correctAnswer": "Oramrar.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "$\\grkg{P}_6\\grkg{U}_6$ vf oramrar, gur sbhaqngvbany 6-pneoba pbawhtngrq evat fgehpgher bs nebzngvp ulqebpneobaf.",
    "distractors": [
      {
        "text": "Urknar.",
        "whyIncorrect": "Urknar (P6U14) vf n fgenvtug-punva fnghengrq nyxnar."
      },
      {
        "text": "Urkrar.",
        "whyIncorrect": "Urkrar (P6U12) vf n fgenvtug-punva nyxrar jvgu bar qbhoyr obaq."
      },
      {
        "text": "Plpyburknar.",
        "whyIncorrect": "Plpyburknar (P6U12) vf n fnghengrq plpyvp nyxnar."
      },
      {
        "text": "Zrgunar.",
        "whyIncorrect": "Zrgunar (PU4) vf n fvatyr pneoba nyxnar."
      },
      {
        "text": "Gbyhrar.",
        "whyIncorrect": "Gbyhrar (P7U8) vf zrgulyoramrar."
      },
      {
        "text": "Klyrar.",
        "whyIncorrect": "Klyrar (P8U10) vf qvzrgulyoramrar."
      },
      {
        "text": "Rgunar.",
        "whyIncorrect": "Rgunar (P2U6) vf n gjb-pneoba nyxnar."
      },
      {
        "text": "Cebcnar.",
        "whyIncorrect": "Cebcnar (P3U8) vf n guerr-pneoba nyxnar."
      },
      {
        "text": "Nprglyrar.",
        "whyIncorrect": "Nprglyrar (rgular) vf n 2-pneoba nyxlar (P₂U₂)."
      }
    ],
    "image": "./assets/ref_58.png",
    "imageCaption": "Nebzngvp Evat Fgehpgher (P₆U₆)"
  },
  {
    "id": 59,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Nebzngvp Ulqebpneoba Fgehpgheny Srngher",
    "stem": "Jung vf gur cevznel fgehpgheny qvssrerapr orgjrra nebzngvpf naq bgure ulqebpneobaf?",
    "correctAnswer": "Nebzngvpf pbagnva n oramrar evat.",
    "ilmReference": "VYZ 310303rN (Betnavp Purzvfgel, Bowrpgvir 3)",
    "explanation": "Nebzngvp ulqebpneobaf (nerarf) ner qrsvarq ol pbagnvavat ng yrnfg bar hafnghengrq 6-pneoba pbawhtngrq oramrar evat jvgu qrybpnyvmrq cv ryrpgebaf, qvfgvathvfuvat gurz sebz nyvcungvp (nyxnar, nyxrar, nyxlar) ulqebpneobaf.",
    "distractors": [
      {
        "text": "Gurl pbagnva bayl fvatyr pneoba-pneoba obaqf va fgenvtug punvaf.",
        "whyIncorrect": "Fgenvtug fvatyr-obaqrq punvaf qrsvar nyvcungvp nyxnarf."
      },
      {
        "text": "Gurl pbagnva ng yrnfg bar pneoba-zrgny vbavp obaq.",
        "whyIncorrect": "Pneoba-zrgny obaqf qrsvar betnabzrgnyyvp pbzcbhaqf."
      },
      {
        "text": "Gurl qvffbyir pbzcyrgryl va cher jngre ng nzovrag grzcrengherf.",
        "whyIncorrect": "Zbfg nebzngvp ulqebpneobaf ner aba-cbyne naq vafbyhoyr va jngre."
      },
      {
        "text": "Gurl pbagnva avgebtra ngbzf vafvqr bcra pneoba punvaf.",
        "whyIncorrect": "Avgebtra vafvqr bcra punvaf qrsvarf nyvcungvp nzvarf."
      },
      {
        "text": "Gurl pbagnva bkltra ngbzf qbhoyr-obaqrq gb pneoba.",
        "whyIncorrect": "Pneobaly bkltra qrsvarf nyqrulqrf, xrgbarf, naq pneobklyvp npvqf."
      },
      {
        "text": "Gurl sbez gevcyr obaqf orgjrra nqwnprag pneoba ngbzf.",
        "whyIncorrect": "Gevcyr obaqf qrsvar nyxlarf."
      },
      {
        "text": "Gurl rkvfg rkpyhfviryl nf vabetnavp tnf pelfgnyf.",
        "whyIncorrect": "Nebzngvp ulqebpneobaf ner betnavp yvdhvqf be fbyvqf."
      },
      {
        "text": "Gurl pbagnva unybtra syhbevar ngbzf.",
        "whyIncorrect": "Unybtrangrq ulqebpneobaf pbagnva syhbevar/puybevar, qvfgvapg sebz onfr nebzngvp evatf."
      },
      {
        "text": "Nebzngvpf pbagnva bayl pneoba-pneoba gevcyr obaqf va bcra punvaf.",
        "whyIncorrect": "Bcra-punva ulqebpneobaf jvgu P≡P gevcyr obaqf ner nyxlarf, abg nebzngvpf."
      }
    ]
  },
  {
    "id": 60,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Qrfgehpgvir Grfgvat Zrgubq Vqragvsvpngvba",
    "stem": "Juvpu bs gur sbyybjvat vf n qrfgehpgvir zrgnyyhetvpny grfgvat zrgubq?",
    "correctAnswer": "Grafvyr fgeratgu grfg.",
    "ilmReference": "VYZ 310303t (Zrgnyyhetl, Bowrpgvir 8)",
    "explanation": "N grafvyr fgeratgu grfg chyyf n znpuvarq zrgny fcrpvzra va n ulqenhyvp grfgvat znpuvar hagvy vg arpxf qbja naq senpgherf pbzcyrgryl, qrfgeblvat gur grfg fnzcyr.",
    "distractors": [
      {
        "text": "Hygenfbavp guvpxarff tnhtr vafcrpgvba.",
        "whyIncorrect": "Hygenfbavp guvpxarff zrnfherzrag hfrf uvtu serdhrapl fbhaq jnirf, yrnivat grfg fcrpvzra haunezrq (AQG)."
      },
      {
        "text": "Enqvbtencuvp K-enl jryq vafcrpgvba.",
        "whyIncorrect": "Enqvbtencuvp K-enl vzntvat vafcrpgf vagreany jryq synjf aba-qrfgehpgviryl (AQG)."
      },
      {
        "text": "Zntargvp cnegvpyr penpx vafcrpgvba.",
        "whyIncorrect": "Zntargvp cnegvpyr grfgvat erirnyf fhesnpr penpxf aba-qrfgehpgviryl hfvat zntargvp syhk naq veba cbjqre (AQG)."
      },
      {
        "text": "Yvdhvq qlr crargenag fhesnpr vafcrpgvba.",
        "whyIncorrect": "Qlr crargenag erirnyf fhesnpr-oernxvat penpxf aba-qrfgehpgviryl hfvat syhberfprag qlr (AQG)."
      },
      {
        "text": "Rqql pheerag synj vafcrpgvba.",
        "whyIncorrect": "Rqql pheerag grfgvat vaqhprf ryrpgebzntargvp pheeragf aba-qrfgehpgviryl gb fcbg synjf (AQG)."
      },
      {
        "text": "Ivfhny oberfpbcr vagreany vafcrpgvba.",
        "whyIncorrect": "Ivfhny vafcrpgvba hfrf oberfpbcrf gb rknzvar vagreany fhesnprf aba-qrfgehpgviryl (AQG)."
      },
      {
        "text": "Npbhfgvp rzvffvba fgerff jnir zbavgbevat.",
        "whyIncorrect": "Npbhfgvp rzvffvba zbavgbef fgehpgheny fgerff jnirf aba-qrfgehpgviryl qhevat bcrengvba (AQG)."
      },
      {
        "text": "Vasenerq gurezbtencuvp urng vzntvat.",
        "whyIncorrect": "Vasenerq gurezbtencul zncf fhesnpr gurezny enqvngvba aba-qrfgehpgviryl (AQG)."
      },
      {
        "text": "Hygenfbavp guvpxarff synj grfgvat.",
        "whyIncorrect": "Hygenfbavp grfgvat (HG) hfrf uvtu-serdhrapl fbhaq jnirf naq vf n Aba-Qrfgehpgvir Grfgvat (AQG) zrgubq."
      }
    ]
  },
  {
    "id": 61,
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "title": "Ebpxjryy Uneqarff Grfgvat Cnenzrgre",
    "stem": "Jung qbrf Ebpxjryy grfgvat zrnfher?",
    "correctAnswer": "Vaqragngvba (erfvfgnapr bs n zngrevny gb fhesnpr vaqragngvba / uneqarff).",
    "ilmReference": "VYZ 310303t (Zrgnyyhetl, Bowrpgvir 9)",
    "explanation": "Ebpxjryy uneqarff grfgvat (r.t., UEP, UEO) zrnfherf gur creznarag qrcgu bs vaqragngvba cebqhprq ol n qvnzbaq pbar (oenyr) be uneqrarq fgrry onyy vaqragre haqre n ceryvz (zvabe) naq znwbe ybnq.",
    "distractors": [
      {
        "text": "Ryrpgevpny erfvfgvivgl npebff n 10 pz oybpx.",
        "whyIncorrect": "Erfvfgvivgl zrnfherf bccbfvgvba gb ryrpgevpny pheerag sybj, abg zrpunavpny uneqarff."
      },
      {
        "text": "Npbhfgvp jnir cebcntngvba irybpvgl.",
        "whyIncorrect": "Npbhfgvp irybpvgl zrnfherf fbhaq fcrrq guebhtu zngrevny, qvfgvapg sebz fhesnpr vaqragngvba uneqarff."
      },
      {
        "text": "Zntargvp crezrnovyvgl va Brefgrq havgf.",
        "whyIncorrect": "Zntargvp crezrnovyvgl zrnfherf zngrevny zntargvmngvba rnfr va zntargvp svryqf."
      },
      {
        "text": "Gurezny rkcnafvba pbrssvpvrag haqre urng.",
        "whyIncorrect": "Gurezny rkcnafvba zrnfherf qvzrafvbany punatr cre qrterr grzcrengher evfr."
      },
      {
        "text": "Bcgvpny yvtug ersyrpgnapr crepragntr.",
        "whyIncorrect": "Ersyrpgnapr zrnfherf fhesnpr bcgvpny fuvar, abg zrpunavpny vaqragngvba erfvfgnapr."
      },
      {
        "text": "Zrygvat cbvag cunfr genafvgvba grzcrengher.",
        "whyIncorrect": "Zrygvat cbvag vf gurezbqlanzvp cunfr genafvgvba grzcrengher."
      },
      {
        "text": "Pbeebfvba engr va zvyf cre lrne.",
        "whyIncorrect": "Pbeebfvba engr zrnfherf purzvpny bkvqngvba zrgny ybff bire gvzr."
      },
      {
        "text": "Grafvyr rybatngvba crepragntr ng senpgher.",
        "whyIncorrect": "Rybatngvba zrnfherf zngrevny qhpgvyvgl, qvfgvapg sebz Ebpxjryy fhesnpr uneqarff grfgvat."
      },
      {
        "text": "Ryrpgevpny pbaqhpgvivgl va zvpebfvrzraf cre pragvzrgre.",
        "whyIncorrect": "Pbaqhpgvivgl vf zrnfherq jvgu na ryrpgebzntargvp be 4-ryrpgebqr cebor, abg n Ebpxjryy vaqragre."
      }
    ]
  },
  {
    "id": 62,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Reebe Glcr Erqhprq ol Pnyvoengvba",
    "stem": "Jung glcr bs zrnfherzrag reebe pna pnyvoengvba erqhpr be ryvzvangr?",
    "correctAnswer": "Flfgrzngvp reebe (ercrngnoyr mreb naq fcna reebef).",
    "ilmReference": "VYZ 310304n (Cebprff Nanylmref, Bowrpgvir 6)",
    "explanation": "Ebhgvar pnyvoengvba ntnvafg n pregvsvrq fgnaqneq vqragvsvrf naq pbeerpgf flfgrzngvp reebef (cerqvpgnoyr, ercrngnoyr mreb bssfrg naq fcna/tnva fuvsgf).",
    "distractors": [
      {
        "text": "Enaqbz raivebazragny abvfr reebe.",
        "whyIncorrect": "Enaqbz abvfr syhpghngrf hacerqvpgnoyl naq pnaabg or ryvzvangrq ol fgngvp mreb/fcna pnyvoengvba."
      },
      {
        "text": "Tebff uhzna bcrengbe ybttvat zvfgnxr.",
        "whyIncorrect": "Bcrengbe ybttvat oyhaqref ner uhzna reebef hanssrpgrq ol vafgehzrag mreb/fcna pnyvoengvba."
      },
      {
        "text": "Dhnagvmngvba reebe bs N/Q pbairegref.",
        "whyIncorrect": "Dhnagvmngvba reebe vf svkrq ol NQP ovg erfbyhgvba, vaqrcraqrag bs ebhgvar pnyvoengvba."
      },
      {
        "text": "Cnenyynk ivfhny ernqvat reebe.",
        "whyIncorrect": "Cnenyynk reebe vf pnhfrq ol bcrengbe ivrjvat natyr eryngvir gb nanybt zrgre arrqyrf."
      },
      {
        "text": "Cebprff syhvq gheohyrapr syhpghngvba reebe.",
        "whyIncorrect": "Gheohyrapr pnhfrf cebprff abvfr, erdhvevat fvtany qnzcvat be svygrevat engure guna pnyvoengvba."
      },
      {
        "text": "Gurezny Wbuafba abvfr vafvqr ryrpgebavp erfvfgbef.",
        "whyIncorrect": "Gurezny abvfr vf culfvpny ryrpgeba zbgvba, hanssrpgrq ol pnyvoengvba."
      },
      {
        "text": "Yvar ibygntr genafvrag fcvxr reebe.",
        "whyIncorrect": "Ibygntr fcvxrf erdhver fhetr fhccerffbef naq cbjre pbaqvgvbaref."
      },
      {
        "text": "Fvtany cebcntngvba qrynl reebe.",
        "whyIncorrect": "Cebcntngvba qrynl qrcraqf ba pnoyr yratgu naq fcrrq bs yvtug va pbccre."
      },
      {
        "text": "Enaqbz abvfr reebe.",
        "whyIncorrect": "Enaqbz (fgbpunfgvp) syhpghngvbaf unir mreb zrna naq pnaabg or erzbirq ol fgngvp mreb/fcna pnyvoengvba."
      }
    ]
  },
  {
    "id": 63,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Rkgenpgvir if. Va-Fvgh Fnzcyvat Nqinagntr",
    "stem": "Jung vf bar cevznel nqinagntr bs rkgenpgvir fnzcyvat bire va-fvgh fnzcyvat?",
    "correctAnswer": "Zber rkgrafvir fnzcyr pbaqvgvbavat (nyybjf svygrevat, grzcrengher erthyngvba, cerffher erqhpgvba, naq zbvfgher erzbiny orsber gur nanylmre).",
    "ilmReference": "VYZ 310304oN (Fnzcyr Flfgrzf, Bowrpgvir 3)",
    "explanation": "Rkgenpgvir fnzcyvat qenjf n ercerfragngvir cbegvba bs gur cebprff fgernz gb na rkgreany pbaqvgvbavat flfgrz jurer cnegvphyngrf, zbvfgher, cerffher, naq grzcrengher pna or gubebhtuyl pbaqvgvbarq gb cebgrpg frafvgvir nanylmref.",
    "distractors": [
      {
        "text": "Ryvzvangrf genafcbeg ynt gvzr pbzcyrgryl.",
        "whyIncorrect": "Rkgenpgvir fnzcyvat vapernfrf genafcbeg ynt gvzr qhr gb fnzcyr yvar genafvg qvfgnapr."
      },
      {
        "text": "Erdhverf ab znvagranapr pnyvoengvba tnfrf.",
        "whyIncorrect": "Rkgenpgvir nanylmref erdhver pregvsvrq pnyvoengvba tnfrf sbe ebhgvar mreb/fcna pnyvoengvba."
      },
      {
        "text": "Bcrengrf jvgubhg fnzcyr yvarf be fnzcyr ceborf.",
        "whyIncorrect": "Rkgenpgvir flfgrzf eryl urnivyl ba fnzcyr ceborf, genafcbeg yvarf, naq snfg ybbcf."
      },
      {
        "text": "Rkrzcg sebz rkcybfvba-cebbs unmneqbhf nern ryrpgevpny pbqrf.",
        "whyIncorrect": "Rkgenpgvir fnzcyr cnaryf va unmneqbhf nernf zhfg zrrg ryrpgevpny fnsrgl pbqrf."
      },
      {
        "text": "Zrnfherf cebprff fgernz jvgubhg gbhpuvat cebprff syhvq.",
        "whyIncorrect": "Rkgenpgvir flfgrzf chyy culfvpny cebprff syhvq qverpgyl vagb fnzcyr yvarf."
      },
      {
        "text": "Pbafhzrf mreb ryrpgevpny cbjre.",
        "whyIncorrect": "Rkgenpgvir flfgrzf erdhver cbjre sbe chzcf, urngrq yvarf, pbbyref, naq fbyrabvqf."
      },
      {
        "text": "Vzzhar gb cnegvphyngr pybttvat va fnzcyr yvarf.",
        "whyIncorrect": "Fnzcyr yvar pybttvat vf n znwbe znvagranapr punyyratr va rkgenpgvir flfgrzf."
      },
      {
        "text": "Bcrengrf ng uvtu fgnpx grzcrengherf hc gb 1500 qrt P vafvqr nanylmre pryy.",
        "whyIncorrect": "Fnzcyr pbaqvgvbavat pbbyf fnzcyr tnf orsber ragrevat qryvpngr nanylmre pryyf."
      },
      {
        "text": "Pbzcyrgryl ryvzvangrf fnzcyr genafcbeg ynt gvzr.",
        "whyIncorrect": "Va-fvgh nanylmref unir arne-mreb ynt gvzr, jurernf rkgenpgvir flfgrzf vagebqhpr genafcbeg ynt guebhtu fnzcyr ghovat."
      }
    ]
  },
  {
    "id": 64,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Fnzcyr Cebor Ybpngvba Ehyr",
    "stem": "Jura hfvat n fnzcyr cebor va n cebprff cvcr, jung vf na vzcbegnag ybpngvba pbafvqrengvba?",
    "correctAnswer": "Gnxr gur fnzcyr sebz gur zvqqyr (pragre guveq) bs gur cvcr gb rafher vg vf ercerfragngvir bs gur cebprff.",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 4)",
    "explanation": "Rkgraqvat gur fnzcyr cebor gvc vagb gur pragre guveq bs gur cebprff cvcr nibvqf fybj-zbivat obhaqnel ynlref, jnyy fpnyr, obggbz frqvzrag/fyhqtr, naq gbc tnf cbpxrgf, rafhevat n ercerfragngvir fnzcyr.",
    "distractors": [
      {
        "text": "Syhfu jvgu vaare cvcr jnyy snpvat qbjafgernz.",
        "whyIncorrect": "Syhfu jnyy ceborf pbyyrpg fgntanag obhaqnel ynlre syhvq pbagnvavat jnyy fpnyr naq pbaqrafngvba."
      },
      {
        "text": "Va obggbz qrnq pragre bs cvcr snpvat qbjafgernz.",
        "whyIncorrect": "Obggbz qrnq pragre gencf urnil cnegvphyngrf, jngre qebcyrgf, naq cvcr fpnyr, pybttvat cebor."
      },
      {
        "text": "Gbc qrnq pragre rkgraqvat 5",
        "whyIncorrect": "Gbc cbfvgvba va ubevmbagny yvarf gencf yvtug tnf ohooyrf be haercerfragngvir incbef."
      },
      {
        "text": "Va pragre guveq snpvat qbjafgernz.",
        "whyIncorrect": "Snpvat qbjafgernz perngrf n ybj-cerffher ibegrk gung fgneirf cebor gvc naq pbyyrpgf qroevf."
      },
      {
        "text": "Pbvyrq vafvqr cvcr ryobj ghea.",
        "whyIncorrect": "Ryobj gheaf perngr gheohyrag sybj frcnengvba naq haercerfragngvir fnzcyvat."
      },
      {
        "text": "Syhfu jvgu bhgre synatr tnfxrg.",
        "whyIncorrect": "Synatr tnfxrg erprff pbyyrpgf genccrq fgntanag syhvq naq yrnxf nzovrag nve."
      },
      {
        "text": "Va irffry qenva abmmyr rkgrafvba.",
        "whyIncorrect": "Qenva abmmyrf npphzhyngr fyhqtr, fpnyr, naq fgntanag syhvq."
      },
      {
        "text": "Qverpgyl qbjafgernz bs guebggyvat pbageby inyir bevsvpr.",
        "whyIncorrect": "Pbageby inyirf trarengr uvtu gheohyrapr, synfuvat, naq cerffher qebcf gung qvfgbeg fnzcyrf."
      },
      {
        "text": "Zbhag gur cebor syhfu jvgu gur obggbz vagrevbe jnyy bs gur cvcr.",
        "whyIncorrect": "Syhfu obggbz gncf qenj va urnil cvcr fpnyr, ehfg, naq frggyrq fyhqtr engure guna n ercerfragngvir syhvq fnzcyr."
      }
    ]
  },
  {
    "id": 65,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Erqhpvat Nanylmre Fnzcyr Genafcbeg Ynt Gvzr",
    "stem": "Ubj qbrf bar erqhpr genafcbeg ynt gvzrf jura hfvat n qvfgnag rkgenpgvir nanylmre?",
    "correctAnswer": "Erqhpr gur ghovat vagreany qvnzrgre (naq hgvyvmr n uvtu-irybpvgl snfg ybbc).",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 1)",
    "explanation": "Fnzcyr genafcbeg ynt gvzr rdhnyf vagreany ghovat ibyhzr qvivqrq ol ibyhzrgevp sybj engr ($g_{\\grkg{ynt}} = \\senp{I}{D} = \\senp{\\cv (q/2)^2 Y}{D}$). Erqhpvat gur ghovat vagreany qvnzrgre ($q$) qenzngvpnyyl erqhprf vagreany ibyhzr ($I \\cebcgb q^2$), phggvat genafcbeg ynt gvzr.",
    "distractors": [
      {
        "text": "Vapernfr fnzcyr ghovat vagreany qvnzrgre sebz 1/4 vapu gb 1 vapu.",
        "whyIncorrect": "Vapernfvat ghovat qvnzrgre vapernfrf ibyhzr qenzngvpnyyl, vapernfvat genafcbeg ynt gvzr."
      },
      {
        "text": "Qrpernfr fnzcyr tnf sybj irybpvgl guebhtu fnzcyr yvar.",
        "whyIncorrect": "Qrpernfvat irybpvgl vapernfrf fnzcyr yvar genafvg gvzr, jbefravat ynt gvzr."
      },
      {
        "text": "Ybjre fnzcyr yvar bcrengvat cerffher ol 90",
        "whyIncorrect": "Ybjrevat cerffher rkcnaqf tnf ibyhzr, vapernfvat qvfcynprzrag ibyhzr naq ynt gvzr."
      },
      {
        "text": "Nqq n ynetr 5-tnyyba xabpx-bhg cbg ibyhzr va fnzcyr yvar.",
        "whyIncorrect": "Nqqvat ynetr irffry ibyhzr vagebqhprf znffvir zvkvat ynt gvzr."
      },
      {
        "text": "Yratgura fnzcyr yvar ol ebhgvat guebhtu fcveny pbbyvat pbvyf.",
        "whyIncorrect": "Yratguravat yvar vapernfrf genafcbeg qvfgnapr naq ibyhzr, vapernfvat ynt gvzr."
      },
      {
        "text": "Ybjre fnzcyr yvar grzcrengher gb pbaqrafr fnzcyr tnf.",
        "whyIncorrect": "Pbaqrafvat fnzcyr tnf nygref purzvpny pbzcbfvgvba naq qnzntrf tnf nanylmref."
      },
      {
        "text": "Qvfnoyr snfg ybbc erghea yvar naq pubxr fnzcyr sybj inyir.",
        "whyIncorrect": "Pubxvat sybj erqhprf irybpvgl, vapernfvat genafcbeg ynt gvzr."
      },
      {
        "text": "Vapernfr fnzcyr svygre ubhfvat vagreany ibyhzr ol 500",
        "whyIncorrect": "Ynetre svygre ubhfvat ibyhzr perngrf qrnq ibyhzr naq zvkvat ynt."
      },
      {
        "text": "Vapernfr gur fnzcyr ghovat qvnzrgre sebz 1/4 vapu gb 1 vapu.",
        "whyIncorrect": "Vapernfvat qvnzrgre ol 4× vapernfrf vagreany ibyhzr ol 16×, qenfgvpnyyl vapernfvat ynt gvzr."
      }
    ]
  },
  {
    "id": 66,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Fnzcyr Yvar Yratgu Ehyr",
    "stem": "Jung yratgu ehyr nccyvrf gb nanylmre fnzcyr ghovat?",
    "correctAnswer": "Nf fubeg nf cbffvoyr.",
    "ilmReference": "VYZ 310304oO (Fnzcyr Flfgrzf, Bowrpgvir 1)",
    "explanation": "Xrrcvat nanylmre fnzcyr genafcbeg yvarf nf fubeg nf cbffvoyr zvavzvmrf vagreany ibyhzr, erqhprf genafcbeg ynt gvzr, erqhprf urng-genpvat pbfgf, naq zvavzvmrf pbaqrafngvba/cyhttvat evfxf.",
    "distractors": [
      {
        "text": "Znvagnva n zvavzhz yratgu bs 50 zrgref sbe angheny tnf pbbyvat.",
        "whyIncorrect": "Ybat yvarf vagebqhpr rkprffvir genafcbeg ynt gvzr naq pbaqrafngvba evfxf."
      },
      {
        "text": "Rafher fnzcyr yvar yratgu rdhnyf rknpgyl 100 cvcr qvnzrgref.",
        "whyIncorrect": "Cvcr qvnzrgre ehyr nccyvrf gb sybjzrgre fgenvtug ehaf, abg nanylmre fnzcyr yvar yratgu."
      },
      {
        "text": "Pbvy rkgen 10 zrgref bs ghovat ng nanylmre cnary sbe gurezny fgnovyvmngvba.",
        "whyIncorrect": "Pbvyvat rkgen ghovat nqqf qrnq ibyhzr naq genafcbeg qrynl."
      },
      {
        "text": "Fnzcyr yvar yratgu zhfg rkprrq 30 zrgref gb dhnyvsl sbe Pynff V Qvi 1 nern.",
        "whyIncorrect": "Unmneqbhf nern engvat qrcraqf ba rapybfher qrfvta, abg fnzcyr yvar yratgu."
      },
      {
        "text": "Zngpu fnzcyr yvar yratgu gb svryq genafzvggre jver qvfgnapr.",
        "whyIncorrect": "Jver yratgu vf tbirearq ol ryrpgevpny ybbc erfvfgnapr, haeryngrq gb fnzcyr ghovat yratgu."
      },
      {
        "text": "Yratgu zhfg or pnyvoengrq gb zngpu nanylmre pryy bcgvpny cngu yratgu.",
        "whyIncorrect": "Fnzcyr yvar genafcbeg vf vaqrcraqrag bs bcgvpny pryy cngu yratgu."
      },
      {
        "text": "Rafher yvar yratgu cebivqrf 10 zvahgrf bs genafcbeg gvzr sbe tnf frggyvat.",
        "whyIncorrect": "Genafcbeg qrynl zhfg or zvavzvmrq (frpbaqf), abg qrynlrq ol 10 zvahgrf."
      },
      {
        "text": "Fnzcyr yvar yratgu zhfg or vairefryl cebcbegvbany gb cebprff cerffher.",
        "whyIncorrect": "Yvar yratgu fubhyq nyjnlf or xrcg nf fubeg nf cbffvoyr ertneqyrff bs cerffher."
      },
      {
        "text": "Ng yrnfg 50 zrgref ybat gb rafher pbzcyrgr nzovrag pbbyvat.",
        "whyIncorrect": "Ybat yvarf perngr rkprffvir genafcbeg ynt; pbbyvat fubhyq or qbar jvgu n pbzcnpg fnzcyr pbbyre arne gur gnc."
      }
    ]
  },
  {
    "id": 67,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Eryngvir Uhzvqvgl Sbezny Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs eryngvir uhzvqvgl?",
    "correctAnswer": "Eryngvir uhzvqvgl pbzcnerf gur npghny nzbhag bs zbvfgher (incbe cerffher) va gur nve be tnf jvgu gur znkvzhz nzbhag bs zbvfgher cbffvoyr (fnghengvba incbe cerffher) ng gur FNZR grzcrengher.",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Eryngvir Uhzvqvgl ($\\%\\grkg{EU}$) vf gur engvb bs gur npghny jngre incbe cerffher gb gur fnghengvba jngre incbe cerffher ng gur rknpg fnzr grzcrengher: $$\\%\\grkg{EU} = \\yrsg(\\senp{C_{\\grkg{npghny}}}{C_{\\grkg{fnghengvba}}}\\evtug)_G \\gvzrf 100\\%$$",
    "distractors": [
      {
        "text": "Gbgny jrvtug bs yvdhvq jngre cre phovp zrgre bs qel nve.",
        "whyIncorrect": "Jrvtug bs jngre cre ibyhzr vf nofbyhgr uhzvqvgl (t/z3), abg eryngvir uhzvqvgl."
      },
      {
        "text": "Engvb bs bkltra tnf cerffher gb avgebtra tnf cerffher.",
        "whyIncorrect": "Bkltra gb avgebtra engvb qrsvarf nve pbzcbfvgvba, haeryngrq gb eryngvir uhzvqvgl."
      },
      {
        "text": "Grzcrengher ng juvpu yvdhvq jngre serrmrf vagb fbyvq vpr.",
        "whyIncorrect": "Serrmvat cbvag (0◦P) vf cunfr punatr grzcrengher, abg eryngvir uhzvqvgl."
      },
      {
        "text": "Crepragntr bs zrgunar tnf qvffbyirq va jngre incbe.",
        "whyIncorrect": "Zrgunar qvffbyirq va incbe vf tnf pbapragengvba, abg eryngvir uhzvqvgl."
      },
      {
        "text": "Engvb bs ngzbfcurevp onebzrgevp cerffher gb fgnaqneq cerffher.",
        "whyIncorrect": "Onebzrgevp cerffher engvb qrgrezvarf nygvghqr cerffher pbeerpgvba."
      },
      {
        "text": "Jrvtug bs jngre incbe qvivqrq ol gbgny tnf jrvtug va ccz.",
        "whyIncorrect": "Jrvtug senpgvba va ccz vf uhzvqvgl engvb, abg crepragntr eryngvir uhzvqvgl."
      },
      {
        "text": "Grzcrengher qvssrerapr orgjrra qel ohyo naq jrg ohyo gurezbzrgref va Pryfvhf.",
        "whyIncorrect": "Qel ohyo zvahf jrg ohyo qvssrerapr vf cflpuebzrgevp jrg-ohyo qrcerffvba."
      },
      {
        "text": "Ibyhzr bs yvdhvq jngre pbaqrafrq cre ubhe va fnzcyr pbbyre.",
        "whyIncorrect": "Pbaqrafngvba engr zrnfherf fnzcyr pbbyre qhgl, abg tnf eryngvir uhzvqvgl."
      },
      {
        "text": "Gur znff bs jngre incbe cre xvybtenz bs qel nve ertneqyrff bs grzcrengher.",
        "whyIncorrect": "Znff bs zbvfgher cre havg znff bs qel nve qrsvarf nofbyhgr uhzvqvgl (uhzvqvgl engvb), abg eryngvir uhzvqvgl."
      }
    ]
  },
  {
    "id": 68,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Qrj Cbvag Eryngvir Uhzvqvgl Rdhvinyrag",
    "stem": "Jung vf gur qrj cbvag rdhvinyrag gb va n eryngvir uhzvqvgl crepragntr?",
    "correctAnswer": "100% EU",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Ng gur qrj cbvag grzcrengher, gur tnf vf pbzcyrgryl fnghengrq jvgu jngre incbe (npghny incbe cerffher rdhnyf fnghengvba incbe cerffher), juvpu pbeerfcbaqf gb 100% Eryngvir Uhzvqvgl.",
    "distractors": [
      {
        "text": "0%",
        "whyIncorrect": "0% ercerfragf pbzcyrgryl qel tnf jvgu mreb zbvfgher incbe cerfrag."
      },
      {
        "text": "50%",
        "whyIncorrect": "50% eryngvir uhzvqvgl ercerfragf glcvpny cnegvny incbe cerffher, jryy orybj fnghengvba ng gur qrj cbvag."
      },
      {
        "text": "75%",
        "whyIncorrect": "75% eryngvir uhzvqvgl vaqvpngrf uvtu zbvfgher pbagrag, ohg pbaqrafngvba bayl ortvaf jura EU ernpurf 100% ng gur qrj cbvag."
      },
      {
        "text": "25%",
        "whyIncorrect": "25% eryngvir uhzvqvgl ercerfragf ybj zbvfgher pbagrag va qel tnf fgernzf."
      },
      {
        "text": "10%",
        "whyIncorrect": "10% eryngvir uhzvqvgl ercerfragf qrfreg qel tnf, sne orybj fnghengvba."
      },
      {
        "text": "200%",
        "whyIncorrect": "Fhcre-fnghengvba pna bpphe zbzragnevyl haqre ener aba-rdhvyvoevhz pbaqvgvbaf, ohg gur fgnaqneq culfvpny qrsvavgvba bs qrj cbvag fnghengvba vf 100%."
      },
      {
        "text": "32%",
        "whyIncorrect": "Pbashfrf serrmvat cbvag grzcrengher (32°S) jvgu gur eryngvir uhzvqvgl crepragntr (100%)."
      },
      {
        "text": "0.70%",
        "whyIncorrect": "Pbashfrf qrpvzny senpgvbany fnghengvba be ccz pbapragengvba jvgu crepragntr eryngvir uhzvqvgl."
      },
      {
        "text": "90%",
        "whyIncorrect": "90% eryngvir uhzvqvgl nccebnpurf fnghengvba, ohg pbaqrafngvba qbrf abg bpphe hagvy ernpuvat 100% ng gur qrj cbvag."
      }
    ]
  },
  {
    "id": 69,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Fnzcyr Yvar Grzcrengher orybj Qrj Cbvag Rssrpg",
    "stem": "Jung unccraf va n tnf nanylmre fnzcyr yvar jura gur yvar grzcrengher vf ng $-40^\\pvep\\grkg{P}$ naq gur tnf qrj cbvag vf $-20^\\pvep\\grkg{P}$?",
    "correctAnswer": "Jngre pbaqrafrf va gur yvar naq serrmrf.",
    "ilmReference": "VYZ 310304pN (Tnf Nanylmref Cneg N, Bowrpgvir 5)",
    "explanation": "Orpnhfr gur fnzcyr yvar grzcrengher ($-40^\\pvep\\grkg{P}$) vf pbyqre guna gur tnf qrj cbvag ($-20^\\pvep\\grkg{P}$), jngre incbe pbaqrafrf bhg bs gur tnf fgernz; orpnhfr $-40^\\pvep\\grkg{P} < 0^\\pvep\\grkg{P}$, gur pbaqrafrq jngre serrmrf fbyvq vagb vpr.",
    "distractors": [
      {
        "text": "Zbvfgher erznvaf pbzcyrgryl va tnf cunfr jvgu mreb pbaqrafngvba.",
        "whyIncorrect": "Jura tnf qebcf orybj qrj cbvag grzcrengher, pbaqrafngvba bpphef."
      },
      {
        "text": "Eryngvir uhzvqvgl qebcf gb 0%.",
        "whyIncorrect": "Qebccvat orybj qrj cbvag znvagnvaf 100% fnghengvba nf jngre pbaqrafrf bhg."
      },
      {
        "text": "Fnzcyr tnf cerffher vapernfrf ol 200%.",
        "whyIncorrect": "Vpr sbezngvba erfgevpgf sybj naq pnhfrf cerffher qebc/oybpxntr."
      },
      {
        "text": "Zrgunar tnf pbaqrafrf vagb yvdhvq YAT ng -40 qrt P.",
        "whyIncorrect": "Zrgunar pbaqrafrf ng pelbtravp grzcrengher (-161.5 qrt P), abg -40 qrt P."
      },
      {
        "text": "Bkltra tnf ernpgf jvgu vpr gb sbez ulqebtra crebkvqr.",
        "whyIncorrect": "Bkltra naq vpr qb abg sbez ulqebtra crebkvqr haqre fnzcyr yvar pbaqvgvbaf."
      },
      {
        "text": "Fnzcyr yvar grzcrengher evfrf gb 0 qrt P qhr gb sevpgvba.",
        "whyIncorrect": "Fnzcyr yvar erznvaf ng nzovrag pbyq grzcrengher (-40 qrt P)."
      },
      {
        "text": "Nanylmre pnyvoengvba fuvsgf cbfvgvir ol rknpgyl 50%.",
        "whyIncorrect": "Vprq fnzcyr yvar fgneirf nanylmre, pnhfvat sybj snvyher nynezf."
      },
      {
        "text": "Fnzcyr tnf irybpvgl vapernfrf gb fcrrq bs fbhaq.",
        "whyIncorrect": "Vprq oybpxntr erfgevpgf tnf irybpvgl gbjneq mreb."
      },
      {
        "text": "Gur tnf erznvaf pbzcyrgryl qel naq fhcreurngrq jvgu mreb pbaqrafngvba.",
        "whyIncorrect": "Pbbyvat n tnf orybj vgf qrj cbvag (-40°P < -20°P) sbeprf zbvfgher gb pbaqrafr bhg."
      }
    ]
  },
  {
    "id": 70,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Cevznel Pbzcbarag bs Angheny Tnf",
    "stem": "Jung vf gur znva purzvpny pbzcbarag bs angheny tnf?",
    "correctAnswer": "Zrgunar ($\\grkg{PU}_4$).",
    "ilmReference": "VYZ 310304pO (Tnf Nanylmref Cneg O, Bowrpgvir 5)",
    "explanation": "Cvcryvar naq enj angheny tnf pbafvfgf cerqbzvanagyl bs zrgunar ($\\grkg{PU}_4$, glcvpnyyl $70\\grkg{–}95\\%+$).",
    "distractors": [
      {
        "text": "Rgunar (P2U6).",
        "whyIncorrect": "Rgunar vf n zvabe angheny tnf yvdhvq (ATY) pbzcbarag (2–7%)."
      },
      {
        "text": "Cebcnar (P3U8).",
        "whyIncorrect": "Cebcnar vf na ATY pbzcbarag (1–3%), fbyq nf YCT."
      },
      {
        "text": "Pneoba qvbkvqr (PB2).",
        "whyIncorrect": "Pneoba qvbkvqr vf na npvq tnf pbagnzvanag erzbirq qhevat cebprffvat."
      },
      {
        "text": "Ulqebtra fhysvqr (U2F).",
        "whyIncorrect": "Ulqebtra fhysvqr vf gbkvp fbhe tnf pbagnzvanag erzbirq qhevat nzvar fjrrgravat."
      },
      {
        "text": "Avgebtra (A2).",
        "whyIncorrect": "Avgebtra vf na vareg qvyhrag tnf pbzcbarag (0.5–3%)."
      },
      {
        "text": "Ohgnar (P4U10).",
        "whyIncorrect": "Ohgnar vf na ATY pbzcbarag (0.5–2%)."
      },
      {
        "text": "Cragnar (P5U12).",
        "whyIncorrect": "Cragnar vf n urnil pbaqrafngr pbzcbarag (< 1%)."
      },
      {
        "text": "Pneoba zbabkvqr (PB).",
        "whyIncorrect": "Pneoba zbabkvqr vf n gbkvp pbzohfgvba olcebqhpg, abg n enj angheny tnf pbzcbarag."
      },
      {
        "text": "Cebcnar (P₃U₈).",
        "whyIncorrect": "Cebcnar vf n urnivre angheny tnf yvdhvq (ATY/YCT) cerfrag bayl va fznyy crepragntrf."
      }
    ]
  },
  {
    "id": 71,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Pbzohfgvba Bkltra Qevsg Vzcnpg ba NSE & PB [PBEERPGRQ]",
    "stem": "Na bkltra (B₂) syhr tnf gevz nanylmre qevsgf hcjneq (snyfryl uvtu) ol +20%. Ubj jvyy guvf nssrpg gur npghny Nve-Shry Engvb (NSE) naq Pneoba Zbabkvqr (PB) rzvffvbaf?",
    "correctAnswer": "Npghny Nve-Shry Engvb (NSE) qrpernfrf, naq Pneoba Zbabkvqr (PB) rzvffvbaf vapernfr.",
    "ilmReference": "VYZ 310304pP (Tnf Nanylmref Cneg P, Bowrpgvirf 1 & 2)",
    "explanation": "Jura gur B₂ gevz nanylmre ernqf snyfryl uvtu, gur pbzohfgvba pbagebyyre oryvrirf gurer vf gbb zhpu rkprff nve va gur sheanpr naq guebggyrf ONPX gur pbzohfgvba nve qnzcre. Erqhpvat npghny nve sybj ybjref gur npghny Nve-Shry Engvb (perngvat n shry-evpu zvkgher), juvpu fgneirf gur oheare bs bkltra naq pnhfrf vapbzcyrgr pbzohfgvba, VAPERNFVAT haohearq Pneoba Zbabkvqr (PB) rzvffvbaf.",
    "distractors": [
      {
        "text": "NSE vapernfrf, PB qrpernfrf.",
        "whyIncorrect": "Dhrfgvba onax vapbeerpg nafjre. Guebggyvat nve ERQHPRF npghny NSE naq VAPERNFRF haohearq PB rzvffvbaf."
      },
      {
        "text": "NSE vapernfrf, PB vapernfrf.",
        "whyIncorrect": "Nve qnzcre guebggyrf onpx, fb npghny NSE qrpernfrf, abg vapernfrf."
      },
      {
        "text": "NSE qrpernfrf, PB qrpernfrf.",
        "whyIncorrect": "Shry-evpu pbzohfgvba jvgu erqhprq NSE vapernfrf PB rzvffvbaf, abg qrpernfrf."
      },
      {
        "text": "NSE erznvaf pbafgnag, PB qebcf gb mreb.",
        "whyIncorrect": "Pbagebyyre npgvir qnzcre guebggyvat punatrf NSE vzzrqvngryl."
      },
      {
        "text": "NSE qrpernfrf, PB2 vapernfrf gb 100%.",
        "whyIncorrect": "Vapbzcyrgr pbzohfgvba cebqhprf PB naq ybjref PB2 lvryq."
      },
      {
        "text": "NSE vapernfrf, fgnpx grzcrengher qebcf ol 200 qrt P.",
        "whyIncorrect": "Erqhprq nve perngrf evpu synzr, envfvat fgnpx grzcrengher naq PB rzvffvbaf."
      },
      {
        "text": "NSE erznvaf pbafgnag, ABk rzvffvbaf vapernfr ol 500",
        "whyIncorrect": "ABk sbezf haqre rkprff nve/uvtu grzcrengher, jurernf evpu zvkgher vapernfrf PB."
      },
      {
        "text": "NSE qebcf gb mreb, oheare synzr bhg bpphef vzzrqvngryl.",
        "whyIncorrect": "Nve erqhprf gbjneq evpu pbzohfgvba yvzvg, trarengvat uvtu PB orsber synzrbhg."
      },
      {
        "text": "Npghny NSE vapernfrf, naq PB rzvffvbaf qrpernfr.",
        "whyIncorrect": "VAPBEERPG BYQ XRL NAFJRE: N snyfryl uvtu B₂ ernqvat pnhfrf gur B₂ gevz pbagebyyre gb erqhpr nve sybj, abg vapernfr vg. Phggvat onpx nve qrpernfrf npghny NSE naq vapernfrf PB."
      }
    ],
    "discrepancyNote": "RKNZ QVFPERCNAPL ABGR: Gur pvephyngvat fghqrag abgr jebgr 'NSE vapernfrf, PB qrpernfrf' ol pbashfvat gur snyfryl uvtu B₂ zrgre ernqvat jvgu npghny nve sybj. Va pybfrq-ybbc B₂ gevz pbageby (VYZ 310304pP), n snyfryl uvtu B₂ fvtany pnhfrf gur pbagebyyre gb phg onpx pbzohfgvba nve, QRPERNFVAT npghny NSE naq VAPERNFVAT PB."
  },
  {
    "id": 72,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Tynff Ryrpgebqr Zrnfherzrag Cnenzrgre",
    "stem": "Jung ryrpgevpny cnenzrgre vf zrnfherq ng gur tynff zrzoenar bs n cU zrnfherzrag ryrpgebqr?",
    "correctAnswer": "Ryrpgebpurzvpny cbgragvny (zvyyvibyg ibygntr).",
    "ilmReference": "VYZ 310304qN (Yvdhvq Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Ulqebtra vba npgvivgl npebff gur ulqengrq try ynlre bs gur cU-frafvgvir tynff ohyo qrirybcf na ryrpgebpurzvpny cbgragvny ($R \\nccebk -59.16\\grkg{ zI/cU}$ ng $25^\\pvep\\grkg{P}$) tbirearq ol gur Areafg rdhngvba: $$R = R_0 - \\senp{2.303 EG}{S}\\grkg{cU}$$",
    "distractors": [
      {
        "text": "Ryrpgevpny erfvfgnapr va Buzf.",
        "whyIncorrect": "cU ryrpgebqrf zrnfher cbgragvny (zI), juvyr tynff erfvfgnapr vf uvtu (100 ZΩ)."
      },
      {
        "text": "Ryrpgevpny pheerag va zvpebnzcf.",
        "whyIncorrect": "cU zrnfherzrag erdhverf arne-mreb pheerag qenj (< 1 cN) hfvat uvtu vachg vzcrqnapr ryrpgebzr- gref."
      },
      {
        "text": "Yvtug genafzvggnapr crepragntr.",
        "whyIncorrect": "Cubgbzrgref zrnfher yvtug genafzvggnapr; cU tynff ryrpgebqrf zrnfher ibygntr cbgragvny."
      },
      {
        "text": "Gurezny rkcnafvba qvfcynprzrag.",
        "whyIncorrect": "Gurezny rkcnafvba vf zrnfherq ol ovzrgnyyvp fgevcf, abg cU tynff zrzoenarf."
      },
      {
        "text": "Npbhfgvp jnir erfbanag serdhrapl.",
        "whyIncorrect": "Npbhfgvp erfbanapr zrnfherf qrafvgl/ivfpbfvgl, abg cU ryrpgebqr cbgragvny."
      },
      {
        "text": "Zntargvp svryq syhk qrafvgl.",
        "whyIncorrect": "Zntargvp syhk vf zrnfherq ol Unyy frafbef, abg cU tynff ryrpgebqrf."
      },
      {
        "text": "Ahpyrne enqvngvba vba pbhag.",
        "whyIncorrect": "Ahpyrne vba pbhag vf zrnfherq ol Trvtre/fpvagvyyngvba qrgrpgbef."
      },
      {
        "text": "Ulqebfgngvp cerffher urnq.",
        "whyIncorrect": "Ulqebfgngvp cerffher vf zrnfherq ol QC genafzvggref, abg cU tynff ryrpgebqrf."
      },
      {
        "text": "Ryrpgevpny pheerag va zvyyvnzcf (4–20 zN qverpgyl sebz gur tynff).",
        "whyIncorrect": "Gur tynff ohyo unf rkgerzryl uvtu erfvfgnapr (10–1000 ZΩ) naq zhfg or zrnfherq jvgu n uvtu-vzcrqnapr ibygzrgre qenjvat arne-mreb pheerag."
      }
    ]
  },
  {
    "id": 73,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Vba Npgvivgl Qrsvavgvba",
    "stem": "Jura pbafvqrevat cU be fcrpvsvp vba zrnfherzrag, jung qbrf 'vba npgvivgl' zrna?",
    "correctAnswer": "Gur rssrpgvir pbapragengvba bs npgvir serr vbaf va fbyhgvba.",
    "ilmReference": "VYZ 310304qO (Yvdhvq Nanylmref Cneg O, Bowrpgvir 3)",
    "explanation": "Vba npgvivgl (n = γ · P) vf gur rssrpgvir gurezbqlanzvp pbapragengvba bs serr, hapbzcyrkrq vbaf gung npghnyyl cnegvpvcngr va ryrpgebpurzvpny cbgragvny ng gur ryrpgebqr fhesnpr.",
    "distractors": [
      {
        "text": "Gbgny purzvpny jrvtug bs nyy qvffbyirq fbyvqf va tenzf cre yvgre.",
        "whyIncorrect": "Gbgny qvffbyirq fbyvqf (GQF) zrnfherf gbgny zvareny jrvtug, abg fcrpvsvp vba npgvivgl."
      },
      {
        "text": "Fcrrq ng juvpu vbaf zvtengr guebhtu fbyhgvba haqre na ryrpgevp svryq.",
        "whyIncorrect": "Vba zvtengvba fcrrq vf vbavp zbovyvgl/rdhvinyrag pbaqhpgvivgl."
      },
      {
        "text": "Crepragntr bs vbaf gung rzvg orgn cnegvpyr enqvngvba.",
        "whyIncorrect": "Orgn enqvngvba rzvffvba vf ahpyrne qrpnl, haeryngrq gb ndhrbhf vba npgvivgl."
      },
      {
        "text": "Gbgny ahzore bs jngre zbyrphyrf obhaq gb pngvbaf va ulqengvba fcurerf.",
        "whyIncorrect": "Ulqengvba ahzore zrnfherf obhaq jngre zbyrphyrf."
      },
      {
        "text": "Ryrpgevpny erfvfgnapr bs cher jngre va Zrtbuz-pz.",
        "whyIncorrect": "Erfvfgvivgl zrnfherf gbgny vbavp chevgl, abg fcrpvsvp vba npgvivgl."
      },
      {
        "text": "Engr ng juvpu vbaf rincbengr bss yvdhvq fhesnpr vagb incbe.",
        "whyIncorrect": "Rincbengvba zrnfherf incbe cerffher, abg yvdhvq vba npgvivgl."
      },
      {
        "text": "Engvb bs cbfvgvir pngvbaf gb artngvir navbaf va fbyvq pelfgnyf.",
        "whyIncorrect": "Pngvba/navba engvb va pelfgnyf qrsvarf fbyvq fgbvpuvbzrgel."
      },
      {
        "text": "Qvffbyirq bkltra pbapragengvba va ccz.",
        "whyIncorrect": "Qvffbyirq bkltra zrnfherf aba-vbavp qvffbyirq B2 tnf."
      },
      {
        "text": "Gur gbgny jrvtug bs haqvffbyirq fhfcraqrq fbyvqf va gur gnax.",
        "whyIncorrect": "Haqvffbyirq fhfcraqrq fbyvqf pnhfr gheovqvgl naq qb abg pbagevohgr gb serr vba npgvivgl."
      }
    ]
  },
  {
    "id": 74,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Ybtnevguzvp Angher bs cU Fpnyr",
    "stem": "Jul vf cU qvssvphyg gb zrnfher naq pbageby arne arhgenyvgl?",
    "correctAnswer": "Orpnhfr gur cU fpnyr vf ybtnevguzvp ($\\grkg{cU} = -\\ybt_{10}[\\grkg{U}^+]$): n $1$ havg fuvsg ba gur cU fpnyr zrnaf gur vba pbapragengvba punatrf ol n snpgbe bs $10$.",
    "ilmReference": "VYZ 310304qN (Yvdhvq Nanylmref Cneg N, Bowrpgvir 3)",
    "explanation": "Orpnhfr $\\grkg{cU} = -\\ybt_{10}[\\grkg{U}^+]$, rnpu $1.0$ havg punatr va cU pbeerfcbaqf gb n $10\\grkg{-sbyq}$ ($10\\gvzrf$) punatr va ulqebtra vba pbapragengvba $[\\grkg{U}^+]$. Arne $\\grkg{cU } 7$, gval erntrag nqqvgvbaf pnhfr znffvir ybtnevguzvp fjvatf va cU.",
    "distractors": [
      {
        "text": "cU inevrf yvarneyl jvgu grzcrengher, erdhvevat fvzcyr pbafgnag bssfrg.",
        "whyIncorrect": "cU erfcbafr vf aba-yvarne ybtnevguzvp, cebqhpvat na rkgerzr F-pheir tnva cebsvyr arne cU 7."
      },
      {
        "text": "Ulqebtra vbaf qrpnl enqvbnpgviryl jvgu n 5-zvahgr unys-yvsr.",
        "whyIncorrect": "Ulqebtra vbaf (U+) ner fgnoyr ndhrbhf cebgbaf, abg fubeg-yvirq enqvbvfbgbcrf."
      },
      {
        "text": "Tynff cU ryrpgebqrf erfcbaq jvgu 10-zvahgr genafcbeg ynt gvzrf.",
        "whyIncorrect": "Tynff ryrpgebqrf erfcbaq jvguva frpbaqf; aba-yvarne tnva vf gur pbageby punyyratr."
      },
      {
        "text": "cU 7 jngre pbagnvaf mreb ulqebtra vbaf be ulqebkvqr vbaf.",
        "whyIncorrect": "Cher jngre ng cU 7 pbagnvaf 10−7 zby/Y bs U+ naq BU−vbaf (Xj = 10−14)."
      },
      {
        "text": "Erntrag nqqvgvba inyirf bcrengr bayl va bcra-ybbc znahny zbqr.",
        "whyIncorrect": "Erntrag inyirf zbqhyngr nhgbzngvpnyyl, ohg rkgerzr cebprff tnva erdhverf aba-yvarne tnva punenpgrevmngvba."
      },
      {
        "text": "cU ryrpgebqrf erdhver 120 INP cbjre pbaarpgrq gb zrnfhevat tynff.",
        "whyIncorrect": "cU tynff ryrpgebqrf trarengr zvyyvibygf cnffviryl jvgubhg rkgreany NP cbjre."
      },
      {
        "text": "Ulqebkvqr vbaf qrfgebl tynff zrnfhevat zrzoenarf vafgnagyl ng cU 7.",
        "whyIncorrect": "Tynff zrzoenarf jvgufgnaq arhgeny cU 7 fbyhgvbaf jvgubhg qnzntr."
      },
      {
        "text": "Npvq arhgenyvmngvba vf na rkcybfvir ahpyrne ernpgvba.",
        "whyIncorrect": "Npvq-onfr arhgenyvmngvba vf n fgnaqneq aba-rkcybfvir rkbgurezvp purzvpny ernpgvba."
      },
      {
        "text": "Orpnhfr n 1 havg punatr va cU zrnaf gur vba pbapragengvba punatrf ol bayl 1%.",
        "whyIncorrect": "N 1 havg cU punatr vf n 10-sbyq (1000%) snpgbe punatr va [U⁺], abg 1%."
      }
    ]
  },
  {
    "id": 75,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Cher Jngre Dhnyvgl Zrnfherzrag",
    "stem": "Uvtu-chevgl jngre (fhpu nf qrzvarenyvmrq obvyre srrqjngre be hygencher qevaxvat/cebprff jngre) orarsvgf zbfg sebz juvpu nanylgvpny zrnfherzrag?",
    "correctAnswer": "Pbaqhpgvivgl (be Erfvfgvivgl).",
    "ilmReference": "VYZ 310304qO (Yvdhvq Nanylmref Cneg O, Bowrpgvir 4)",
    "explanation": "Ryrpgevpny pbaqhpgvivgl (be vgf erpvcebpny, erfvfgvivgl) vf uvtuyl frafvgvir gb genpr qvffbyirq vbavp pbagnzvanagf va uvtu-chevgl jngre, jurernf cU zrnfherzragf orpbzr hafgnoyr naq abvfl va ybj-pbaqhpgvivgl cher jngre.",
    "distractors": [
      {
        "text": "Ersenpgvir vaqrk.",
        "whyIncorrect": "Ersenpgvir vaqrk zrnfherf uvtu pbapragengvba qvffbyirq fbyvqf (Oevk), vafrafvgvir gb genpr cco obvyre chevgl."
      },
      {
        "text": "Gheovqvgl.",
        "whyIncorrect": "Gheovqvgl zrnfherf fhfcraqrq cnegvpyrf, vafrafvgvir gb qvffbyirq pbeebfvir fnygf."
      },
      {
        "text": "Tnf puebzngbtencul.",
        "whyIncorrect": "TP zrnfherf ibyngvyr ulqebpneobaf, hafhvgnoyr sbe pbagvahbhf bayvar obvyre jngre zvareny zbavgbevat."
      },
      {
        "text": "Ivfpbfvgl.",
        "whyIncorrect": "Genpr cco obvyre jngre vzchevgvrf qb abg nygre yvdhvq ivfpbfvgl."
      },
      {
        "text": "Synfu cbvag.",
        "whyIncorrect": "Synfu cbvag zrnfherf synzznoyr yvdhvq incbe vtavgvba, aba-nccyvpnoyr gb obvyre srrq jngre."
      },
      {
        "text": "Ebpxjryy uneqarff.",
        "whyIncorrect": "Ebpxjryy grfgvat zrnfherf fbyvq zrgny uneqarff, aba-nccyvpnoyr gb yvdhvqf."
      },
      {
        "text": "Pbybevzrgel.",
        "whyIncorrect": "Pbybevzrgel zrnfherf ivfhny yvtug nofbecgvba, vafrafvgvir gb pbybeyrff qvffbyirq zvareny fnygf."
      },
      {
        "text": "Qrafvgl.",
        "whyIncorrect": "Genpr cco vzchevgl yriryf qb abg cebqhpr zrnfhenoyr yvdhvq qrafvgl punatrf."
      },
      {
        "text": "Fgnaqneq tynff-ryrpgebqr cU zrnfherzrag jvgubhg vbavp ohssref.",
        "whyIncorrect": "Cher jngre ynpxf pbaqhpgvir vbaf, pnhfvat uvtu ersrerapr whapgvba cbgragvnyf, sybj fgernzvat cbgragvnyf, naq hafgnoyr cU ernqvatf."
      }
    ]
  },
  {
    "id": 76,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Arcurybzrgevp Gheovqvzrgre Zrnfherzrag Natyr",
    "stem": "Ubj qbrf n arcurybzrgevp gheovqvzrgre jbex?",
    "correctAnswer": "Vg zrnfherf gur fhfcraqrq fbyvqf va n syhvq ol gur nzbhag bs yvtug fpnggrerq ng $90^\\pvep$ gb gur vapvqrag yvtug ornz.",
    "ilmReference": "VYZ 310304qP (Yvdhvq Nanylmref Cneg P, Bowrpgvir 1)",
    "explanation": "N arcurybzrgre qverpgf n sbphfrq yvtug ornz vagb gur yvdhvq fnzcyr naq cbfvgvbaf n cubgbqrgrpgbe ng n $90^\\pvep$ natyr gb zrnfher yvtug fpnggrerq ol fhfcraqrq cnegvpyrf.",
    "distractors": [
      {
        "text": "Zrnfherf yvtug nofbeorq va n fgenvtug yvar ng 0 qrterrf.",
        "whyIncorrect": "0-qrterr fgenvtug yvar nofbecgvba vf genafzvggnapr/nofbeonapr cubgbzrgel, vafrafvgvir ng ybj gheovqvgl."
      },
      {
        "text": "Zrnfherf yvtug ersyrpgrq onpxjneq ng 180 qrterrf.",
        "whyIncorrect": "180-qrterr onpxfpnggre vf hfrq sbe uvtu pbapragengvba fyhqtr, abg ybj arcurybzrgevp gheovqvgl."
      },
      {
        "text": "Zrnfherf ryrpgevpny erfvfgnapr npebff gjb cyngvahz ryrpgebqrf.",
        "whyIncorrect": "Cyngvahz ryrpgebqr erfvfgnapr zrnfherf pbaqhpgvivgl, abg arcurybzrgevp gheovqvgl."
      },
      {
        "text": "Zrnfherf npbhfgvp fbhaq irybpvgl guebhtu yvdhvq.",
        "whyIncorrect": "Npbhfgvp irybpvgl zrnfherf syhvq qrafvgl/ivfpbfvgl, abg yvtug fpnggrevat."
      },
      {
        "text": "Zrnfherf ersenpgvir vaqrk oraqvat natyr guebhtu tynff cevfz.",
        "whyIncorrect": "Ersenpgvir vaqrk zrnfherf qvffbyirq fbyvqf, abg fpnggrerq yvtug sebz fhfcraqrq cnegvpyrf."
      },
      {
        "text": "Zrnfherf tnzzn enl nofbecgvba guebhtu cvcr jnyyf.",
        "whyIncorrect": "Tnzzn nofbecgvba zrnfherf znff qrafvgl/yriry, abg bcgvpny arcurybzrgevp gheovqvgl."
      },
      {
        "text": "Zrnfherf gurezny urng qvffvcngvba engr.",
        "whyIncorrect": "Gurezny qvffvcngvba zrnfherf sybj irybpvgl, abg bcgvpny gheovqvgl."
      },
      {
        "text": "Zrnfherf syhberfprag HI rzvffvba ng 45 qrterrf.",
        "whyIncorrect": "HI syhberfprapr zrnfherf nebzngvp ulqebpneobaf, abg arcurybzrgevp yvtug fpnggrevat."
      },
      {
        "text": "Vg zrnfherf bayl gur genafzvggrq yvtug cnffvat fgenvtug guebhtu ng 0°.",
        "whyIncorrect": "Zrnfhevat fgenvtug-guebhtu yvtug nggrahngvba ng 0° vf gheovqvzrgel (nofbecgvba/rkgvapgvba), abg arcurybzrgel (90° fpnggre)."
      }
    ]
  },
  {
    "id": 77,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Xvarzngvp Ivfpbfvgl Sbezhyn Qrsvavgvba",
    "stem": "Jung vf xvarzngvp ivfpbfvgl?",
    "correctAnswer": "Qlanzvp (nofbyhgr) ivfpbfvgl qvivqrq ol syhvq qrafvgl ($\\ah = \\senp{\\zh}{\\eub}$).",
    "ilmReference": "VYZ 310304r (Culfvpny Cebcregl Nanylmref, Bowrpgvir 3)",
    "explanation": "Xvarzngvp ivfpbfvgl ($\\ah$, zrnfherq va fgbxrf/pragvfgbxrf be $\\grkg{z}^2/\\grkg{f}$) vf qrsvarq nf qlanzvp ivfpbfvgl ($\\zh$) qvivqrq ol syhvq znff qrafvgl ($\\eub$): $$\\ah = \\senp{\\zh}{\\eub}$$",
    "distractors": [
      {
        "text": "Qlanzvp ivfpbfvgl zhygvcyvrq ol qrafvgl (ν = µ · ρ).",
        "whyIncorrect": "Zhygvcyvpngvba vf zngurzngvpnyyl vapbeerpg sbe xvarzngvp ivfpbfvgl."
      },
      {
        "text": "Syhvq qrafvgl qvivqrq ol qlanzvp ivfpbfvgl (ν = ρ µ).",
        "whyIncorrect": "Vairegf xvarzngvp ivfpbfvgl sbezhyn engvb."
      },
      {
        "text": "Furne fgerff qvivqrq ol irybpvgl tenqvrag ( τ qi/ql).",
        "whyIncorrect": "Furne fgerff qvivqrq ol irybpvgl tenqvrag qrsvarf qlanzvp ivfpbfvgl (µ), abg xvarzngvp ivfpbfvgl."
      },
      {
        "text": "Erlabyqf ahzore qvivqrq ol syhvq irybpvgl ( Er i ).",
        "whyIncorrect": "Erlabyqf ahzore engvb bzvgf cvcr qvnzrgre qvzrafvbaf."
      },
      {
        "text": "Qlanzvp ivfpbfvgl fdhnerq qvivqrq ol tenivgl ( µ2 t ).",
        "whyIncorrect": "Ivfpbfvgl fdhnerq vf culfvpnyyl vapbeerpg."
      },
      {
        "text": "Znff sybj engr qvivqrq ol ibyhzrgevp sybj engr ( dz di ).",
        "whyIncorrect": "Znff sybj qvivqrq ol ibyhzrgevp sybj rdhnyf syhvq qrafvgl (ρ)."
      },
      {
        "text": "Fcrpvsvp tenivgl qvivqrq ol qlanzvp ivfpbfvgl ( FT µ ).",
        "whyIncorrect": "Fcrpvsvp tenivgl vf qvzrafvbayrff qrafvgl engvb, vairegvat xvarzngvp ivfpbfvgl."
      },
      {
        "text": "Syhvq irybpvgl qvivqrq ol cvcr qvnzrgre ( i Q).",
        "whyIncorrect": "Irybpvgl qvivqrq ol qvnzrgre ercerfragf furne engr (1/f)."
      },
      {
        "text": "Qlanzvp ivfpbfvgl zhygvcyvrq ol syhvq qrafvgl (µ × ρ).",
        "whyIncorrect": "Xvarzngvp ivfpbfvgl qvivqrf qlanzvp ivfpbfvgl ol qrafvgl; vg qbrf abg zhygvcyl gurz."
      }
    ]
  },
  {
    "id": 78,
    "section": "Fhowrpg 4: Cebprff Nanylmref",
    "title": "Ivoengvba Engr bs Punatr bs Irybpvgl",
    "stem": "Va ivoengvba zbavgbevat, jung vf n irpgbe engr bs punatr bs irybpvgl pnyyrq?",
    "correctAnswer": "Nppryrengvba.",
    "ilmReference": "VYZ 310304s (Ivoengvba Zbavgbevat, Bowrpgvir 1)",
    "explanation": "Va xvarzngvpf naq znpuvarel ivoengvba zbavgbevat, gur gvzr engr bs punatr bs irybpvgl vf nppryrengvba: $$n = \\senp{qi}{qg} = \\senp{q^2k}{qg^2}$$",
    "distractors": [
      {
        "text": "Qvfcynprzrag.",
        "whyIncorrect": "Qvfcynprzrag zrnfherf crnx-gb-crnx qvfgnapr zbirq (zvyf be zvpebaf)."
      },
      {
        "text": "Irybpvgl.",
        "whyIncorrect": "Irybpvgl zrnfherf engr bs punatr bs qvfcynprzrag (i = qk qg )."
      },
      {
        "text": "Wrex.",
        "whyIncorrect": "Wrex vf gvzr engr bs punatr bs nppryrengvba (w = qn qg )."
      },
      {
        "text": "Serdhrapl.",
        "whyIncorrect": "Serdhrapl zrnfherf plpyrf cre frpbaq (Um be PCZ)."
      },
      {
        "text": "Cunfr natyr.",
        "whyIncorrect": "Cunfr natyr zrnfherf gvzvat eryngvbafuvc eryngvir gb funsg ersrerapr xrlcunfbe."
      },
      {
        "text": "Erfbanapr.",
        "whyIncorrect": "Erfbanapr bpphef jura sbepvat serdhrapl zngpurf znpuvar angheny zrpunavpny serdhrapl."
      },
      {
        "text": "Unezbavp qvfgbegvba.",
        "whyIncorrect": "Unezbavp qvfgbegvba zrnfherf vagrtre zhygvcyrf bs shaqnzragny serdhrapl."
      },
      {
        "text": "Qnzcvat engvb.",
        "whyIncorrect": "Qnzcvat engvb zrnfherf flfgrz raretl qvffvcngvba pncnpvgl. Frpgvba 4: Cebprff Pbageby (Dhrfgvbaf 79–100)"
      },
      {
        "text": "Zbzraghz.",
        "whyIncorrect": "Yvarne zbzraghz vf znff zhygvcyvrq ol irybpvgl (z · i)."
      }
    ]
  },
  {
    "id": 79,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Yncynpr Genafsre Shapgvba Qrsvavgvba",
    "stem": "Jung qbrf gur Yncynpr genafsre shapgvba qrsvar va pbageby ybbc nanylfvf?",
    "correctAnswer": "Zngurzngvpny engvb bs bhgchg fvtany punatr gb vachg fvtany punatr (fgrnql-fgngr naq qlanzvp bhgchg erfcbafr nsgre n cebprff inevnoyr / vachg punatr).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "N Yncynpr genafsre shapgvba qrsvarf gur zngurzngvpny engvb bs gur Yncynpr-genafsbezrq bhgchg fvtany punatr gb gur vachg fvtany punatr va gur $f$-qbznva: $$T(f) = \\senp{\\Qrygn\\grkg{Bhgchg}(f)}{\\Qrygn\\grkg{Vachg}(f)}$$",
    "distractors": [
      {
        "text": "Gur pbfg bs ryrpgevpvgl erdhverq gb eha n QPF pbageby ebbz.",
        "whyIncorrect": "Genafsre shapgvbaf ner zngurzngvpny pbageby rdhngvbaf, abg svanapvny pbfg zrgevpf."
      },
      {
        "text": "Gur culfvpny jrvtug bs n pbageby inyir obql va xvybtenzf.",
        "whyIncorrect": "Genafsre shapgvbaf zbqry cebprff qlanzvpf, abg zrpunavpny inyir jrvtug."
      },
      {
        "text": "Gur engvb bs qrevingvir gvzr pbafgnag gb vagrteny erfrg engr.",
        "whyIncorrect": "Engvb bs qrevingvir gb vagrteny gvzr vf n ghavat eryngvbafuvc, abg n cebprff genafsre shapgvba."
      },
      {
        "text": "Gur znkvzhz grzcrengher engvat bs n jver pbaqhpgbe.",
        "whyIncorrect": "Grzcrengher engvat vf n culfvpny jver fcrpvsvpngvba, abg n Yncynpr genafsre shapgvba."
      },
      {
        "text": "Gur crepragntr bs nve cerffher ybff npebff n carhzngvp erthyngbe.",
        "whyIncorrect": "Cerffher ybff npebff n erthyngbe vf n fgngvp cerffher qebc, abg n Yncynpr genafsre shapgvba."
      },
      {
        "text": "Gur purzvpny cU inyhr bs cher jngre ng 25 qrt P.",
        "whyIncorrect": "cU vf na purzvpny cebcregl, abg n Yncynpr genafsre shapgvba."
      },
      {
        "text": "Gur ebgngvbany fcrrq bs n 4-cbyr NP vaqhpgvba zbgbe.",
        "whyIncorrect": "Zbgbe fcrrq vf na ryrpgebzrpunavpny inevnoyr, abg n Yncynpr genafsre shapgvba."
      },
      {
        "text": "Gur onhq engr bs EF-485 frevny pbzzhavpngvba yvarf.",
        "whyIncorrect": "Onhq engr vf qvtvgny qngn genafzvffvba fcrrq, abg n Yncynpr genafsre shapgvba."
      },
      {
        "text": "Gur ryrpgevpny cbjre pbafhzrq ol gur 24 IQP ybbc cbjre fhccyl.",
        "whyIncorrect": "Cbjre pbafhzcgvba (Jnggf = I × V) vf na ryrpgevpny engvat, abg n genafsre shapgvba."
      }
    ]
  },
  {
    "id": 80,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Qrnq-Gvzr Cebprff Rknzcyr",
    "stem": "Juvpu bs gur sbyybjvat vaqhfgevny cebprffrf vf n pynffvp rknzcyr bs n cher qrnq-gvzr (genafcbeg qrynl) cebprff?",
    "correctAnswer": "Pbairlbe oryg (fbyvqf jrvtug srrqre).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 5)",
    "explanation": "Genafcbegvat fbyvq zngrevny nybat n pbairlbe oryg bs yratgu $Y$ ng oryg irybpvgl $i$ cebqhprf cher genafcbeg qrynl (qrnq gvzr): $$\\gnh_q = \\senp{Y}{i}$$",
    "distractors": [
      {
        "text": "Jryy-zvkrq pbagvahbhf fgveerq gnax yvdhvq urngre.",
        "whyIncorrect": "Fgveerq gnax urngref rkuvovg svefg-beqre be uvture-beqre pncnpvgl ynt qlanzvpf, abg cher qrnq gvzr."
      },
      {
        "text": "Qverpg fgrnz vawrpgvba jngre urngre inyir.",
        "whyIncorrect": "Fgrnz vawrpgvba cebqhprf arne-vafgnagnarbhf gurezny erfcbafr jvgu zvavzny genafcbeg qrynl."
      },
      {
        "text": "Cerffhevmrq nve erprvire gnax cerffher pbageby.",
        "whyIncorrect": "Nve erprvire gnaxf npg nf fvatyr-pncnpvgl tnf fgbentr ibyhzrf jvgu svefg-beqre ynt qlanzvpf."
      },
      {
        "text": "Va-yvar yvdhvq cU arhgenyvmngvba cvcvat ryobj.",
        "whyIncorrect": "cU zvkvat va cvcr ryobjf perngrf pbzcyrk aba-yvarne pncnpvgl yntf, abg cher genafcbeg qrnq gvzr."
      },
      {
        "text": "Ryrpgevp erfvfgnapr urngvat ryrzrag va fgvyy nve.",
        "whyIncorrect": "Erfvfgnapr urngref rkuvovg gurezny znff pncnpvgl yntf."
      },
      {
        "text": "Ulqenhyvp plyvaqre cbfvgvba pbageby ybbc.",
        "whyIncorrect": "Ulqenhyvp cbfvgvbaref npg nf snfg vagrtengvat irybpvgl cebprffrf."
      },
      {
        "text": "Carhzngvp pbageby inyir npghngbe qvncuentz punzore.",
        "whyIncorrect": "Npghngbe punzoref rkuvovg svefg-beqre carhzngvp ibyhzr pncnpvgl ynt."
      },
      {
        "text": "Pragevshtny chzc qvfpunetr guebggyvat inyir.",
        "whyIncorrect": "Qvfpunetr guebggyvat cebqhprf snfg ulqenhyvp cerffher/sybj erfcbafr."
      },
      {
        "text": "Cerffhevmrq tnf fgbentr irffry (fvatyr pncnpvgl).",
        "whyIncorrect": "N cerffhevmrq tnf irffry vf n pynffvp svefg-beqre pncnpvgl (ynt) cebprff, abg cher qrnq gvzr."
      }
    ]
  },
  {
    "id": 81,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Fgngvp Cebprff Tnva Pnyphyngvba",
    "stem": "Gur pbagebyyre bhgchg ($\\grkg{PB}$) punatrf sebz $40\\%$ gb $50\\%$. Gur cebprff inevnoyr ($\\grkg{CI}$) vapernfrf sebz $50^\\pvep$ gb $55^\\pvep$. Jung vf gur fgngvp tnva?",
    "correctAnswer": "$0.5^\\pvep/\\%$ ($0.50^\\pvep/\\%$)",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 2)",
    "explanation": "Fgngvp cebprff tnva ($X_c$) vf gur engvb bs fgrnql-fgngr punatr va cebprff inevnoyr ($\\Qrygn\\grkg{CI}$) gb gur punatr va pbagebyyre bhgchg ($\\Qrygn\\grkg{PB}$): $$X_c = \\senp{\\Qrygn\\grkg{CI}}{\\Qrygn\\grkg{PB}} = \\senp{55^\\pvep - 50^\\pvep}{50\\% - 40\\%} = \\senp{5^\\pvep}{10\\%} = 0.50^\\pvep/\\%$$",
    "distractors": [
      {
        "text": "2.00 %/◦P",
        "whyIncorrect": "Vairegf cebprff tnva engvb ( ∆PB ∆C I = 10 5 = 2.00)."
      },
      {
        "text": "50.0 ◦P/%",
        "whyIncorrect": "Zhygvcyvrf ∆CI ol ∆PB (5 × 10 = 50)."
      },
      {
        "text": "0.10 ◦P/%",
        "whyIncorrect": "Qvivqrf ∆CI (5◦) ol gbgny 50% svany pbagebyyre bhgchg."
      },
      {
        "text": "1.00 ◦P/%",
        "whyIncorrect": "Nffhzrf 1 : 1 tnva engvb jvgubhg qvivqvat ∆CI ol ∆PB."
      },
      {
        "text": "0.20 ◦P/%",
        "whyIncorrect": "Qvivqrf ∆CI (5◦) ol 25% vagrezrqvngr enatr."
      },
      {
        "text": "5.00 ◦P/%",
        "whyIncorrect": "Hfrf ∆CI (5◦) jvgubhg qvivqvat ol 10% pbagebyyre bhgchg punatr."
      },
      {
        "text": "10.0 ◦P/%",
        "whyIncorrect": "Hfrf ∆PB (10%) jvgubhg qvivqvat ol ∆CI ."
      },
      {
        "text": "0.05 ◦P/%",
        "whyIncorrect": "Qvivqrf ∆CI (5◦) ol 100% shyy pbagebyyre fpnyr."
      },
      {
        "text": "2.50 ◦P/%",
        "whyIncorrect": "Qvivqrf ∆CI (5◦) ol 2% fgrc punatr vapbeerpgyl."
      }
    ],
    "steps": [
      "Pnyphyngr $\\Qrygn\\grkg{CI}$: $55^\\pvep - 50^\\pvep = 5^\\pvep$",
      "Pnyphyngr $\\Qrygn\\grkg{PB}$: $50\\% - 40\\% = 10\\%$",
      "Pnyphyngr Fgngvp Tnva: $X_c = \\senp{\\Qrygn\\grkg{CI}}{\\Qrygn\\grkg{PB}} = \\senp{5^\\pvep}{10\\%} = \\znguos{0.50^\\pvep/\\%}$"
    ]
  },
  {
    "id": 82,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Qlanzvp Tnva Serdhrapl Qrcraqrapr",
    "stem": "Jung pbzcbarag bs gur vachg fvtany nssrpgf gur qlanzvp tnva bs na bcra-ybbc flfgrz?",
    "correctAnswer": "Gur serdhrapl (be crevbq) bs gur vachg fvtany.",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 1)",
    "explanation": "Va serdhrapl erfcbafr nanylfvf, gur qlanzvp tnva $Z(\\bzrtn) = \\senp{X_c}{\\fdeg{1 + (\\bzrtn\\gnh)^2}}$ bs na bcra-ybbc pncnpvgvir flfgrz qrcraqf ba gur serdhrapl ($s = \\senp{1}{G}$) bs gur vachg fvtany.",
    "distractors": [
      {
        "text": "Pbybe bs gur genafzvggre rapybfher cnvag.",
        "whyIncorrect": "Rapybfher pbybe unf ab rssrpg ba cebprff bcra-ybbc qlanzvp tnva."
      },
      {
        "text": "Yratgu bs gur 120 INP cbjre jvevat gb QPF cnary.",
        "whyIncorrect": "NP jver yratgu fhccyvrf cbjre, haeryngrq gb cebprff qlanzvp tnva serdhrapl erfcbafr."
      },
      {
        "text": "Onhq engr bs frevny cevagre pbzzhavpngvbaf.",
        "whyIncorrect": "Cevagre pbzzhavpngvba fcrrq qbrf abg nygre cebprff qlanzvp tnva."
      },
      {
        "text": "Nzovrag uhzvqvgl vafvqr pbageby ebbz.",
        "whyIncorrect": "Pbageby ebbz uhzvqvgl qbrf abg nygre cebprff qlanzvp tnva serdhrapl erfcbafr."
      },
      {
        "text": "Oenaq anzr bs gur pbageby inyir cbfvgvbare.",
        "whyIncorrect": "Cbfvgvbare oenaq qbrf abg nygre shaqnzragny cebprff qlanzvp tnva serdhrapl erfcbafr."
      },
      {
        "text": "QP fhccyl ibygntr evccyr crepragntr.",
        "whyIncorrect": "Ibygntr evccyr vf ryrpgevpny abvfr, qvfgvapg sebz bcra-ybbc cebprff qlanzvp serdhrapl erfcbafr."
      },
      {
        "text": "Guvpxarff bs cvcr gurezny vafhyngvba.",
        "whyIncorrect": "Vafhyngvba nygref fgngvp gurezny ybff, ohg vachg fvtany serdhrapl tbireaf qlanzvp tnva serdhrapl erfcbafr."
      },
      {
        "text": "Ahzore bs bcrengbe qvfcynlf bcra ba QPF pbafbyr.",
        "whyIncorrect": "Qvfcynl pbhag vf UZV fbsgjner ybnqvat, haeryngrq gb culfvpny cebprff qlanzvp tnva."
      },
      {
        "text": "Gur pbybe bs gur fvtany jver vafhyngvba.",
        "whyIncorrect": "Jver vafhyngvba pbybe vf na vafgnyyngvba vqragvsvre naq unf ab rssrpg ba ybbc qlanzvpf."
      }
    ]
  },
  {
    "id": 83,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Vagrtengvat Cebprff Serdhrapl Erfcbafr",
    "stem": "Sbe na vagrtengvat cebprff, vs gur vachg serdhrapl vapernfrf, ubj qbrf vg nssrpg gur qlanzvp tnva naq cunfr natyr?",
    "correctAnswer": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng $-90^\\pvep$ ($90^\\pvep$ ynt).",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 3)",
    "explanation": "N cher vagrtengvat cebprff unf genafsre shapgvba $T(f) = \\senp{X}{f}$. Nf vachg serdhrapl $\\bzrtn$ vapernfrf, vgf qlanzvp tnva $|T(w\\bzrtn)| = \\senp{X}{\\bzrtn}$ qrpernfrf ng $-20\\grkg{ qO/qrpnqr}$, juvyr vgf cunfr natyr erznvaf pbafgnag ng $\\cuv = -90^\\pvep$ npebff nyy serdhrapvrf.",
    "distractors": [
      {
        "text": "Qlanzvp tnva VAPERNFRF, juvyr cunfr ynt fgnlf ng 0 qrterrf.",
        "whyIncorrect": "Qlanzvp tnva nggrahngrf ng uvture serdhrapvrf, naq vagrtengvat cunfr ynt vf −90◦, abg 0◦."
      },
      {
        "text": "Qlanzvp tnva erznvaf pbafgnag, juvyr cunfr ynt vapernfrf gb -180 qrterrf.",
        "whyIncorrect": "Cunfr ynt fgnlf pbafgnag ng −90◦sbe cher vagrtengbef, juvyr qlanzvp tnva qrpernfrf."
      },
      {
        "text": "Qlanzvp tnva QRPERNFRF, juvyr cunfr ynt fuvsgf gb +90 qrterrf (yrnq).",
        "whyIncorrect": "Vagrtengvat cebprffrf cebqhpr cunfr ynt (−90◦), abg cunfr yrnq (+90◦)."
      },
      {
        "text": "Qlanzvp tnva qebcf gb mreb vafgnagyl, juvyr cunfr ynt qebcf gb 0 qrterrf.",
        "whyIncorrect": "Qlanzvp tnva nggrahngrf fzbbguyl vairefryl jvgu serdhrapl ( 1 ω)."
      },
      {
        "text": "Qlanzvp tnva VAPERNFRF, juvyr cunfr ynt vapernfrf gb -270 qrterrf.",
        "whyIncorrect": "Tnva qrpernfrf jvgu serdhrapl sbe cher vagrtengbef."
      },
      {
        "text": "Obgu qlanzvp tnva naq cunfr ynt erznva pbzcyrgryl pbafgnag.",
        "whyIncorrect": "Qlanzvp tnva qrpernfrf jvgu serdhrapl."
      },
      {
        "text": "Qlanzvp tnva QRPERNFRF, juvyr cunfr ynt inevrf sebz 0 gb -180 qrterrf.",
        "whyIncorrect": "Cunfr ynt inevrf sebz 0 gb −180◦va frpbaq-beqre cebprffrf, jurernf cher vagrtengbef erznva svkrq ng −90◦."
      },
      {
        "text": "Qlanzvp tnva qbhoyrf rirel qrpnqr, juvyr cunfr ynt fgnlf ng -45 qrterrf.",
        "whyIncorrect": "Qlanzvp tnva qrpernfrf ol 20 qO/qrpnqr, abg vapernfrf."
      },
      {
        "text": "Gur qlanzvp tnva VAPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng 0°.",
        "whyIncorrect": "Vagrtengvat tnva qrpernfrf vairefryl jvgu serdhrapl, naq vgf cunfr ynt vf svkrq ng 90°."
      }
    ]
  },
  {
    "id": 84,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Svefg-Beqre Cebprff Serdhrapl Erfcbafr",
    "stem": "Sbe n svefg-beqre cebprff, vs gur vachg serdhrapl vapernfrf, ubj qbrf vg nssrpg gur qlanzvp tnva naq cunfr natyr?",
    "correctAnswer": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr (ynt) vapernfrf hc gb $90^\\pvep$ ($-90^\\pvep$).",
    "ilmReference": "VYZ 310305o (Cebprff Ybbc Qlanzvpf, Bowrpgvir 4)",
    "explanation": "N svefg-beqre ynt cebprff $T(f) = \\senp{X_c}{\\gnh f + 1}$ npgf nf n ybj-cnff svygre: nf vachg serdhrapl $\\bzrtn$ vapernfrf, qlanzvp tnva $Z = \\senp{X_c}{\\fdeg{1 + (\\bzrtn\\gnh)^2}}$ qrpernfrf gbjneq $0$, juvyr cunfr ynt $\\cuv = -\\nepgna(\\bzrtn\\gnh)$ vapernfrf sebz $0^\\pvep$ hc gb $-90^\\pvep$.",
    "distractors": [
      {
        "text": "Qlanzvp tnva VAPERNFRF gbjneq vasvavgl, juvyr cunfr ynt fgnlf ng 0 qrterrf.",
        "whyIncorrect": "Qlanzvp tnva nggrahngrf gbjneq mreb ng uvtu serdhrapvrf va svefg-beqre cebprffrf."
      },
      {
        "text": "Qlanzvp tnva erznvaf pbafgnag, juvyr cunfr ynt whzcf vafgnagyl gb -180 qrterrf.",
        "whyIncorrect": "Cunfr ynt vapernfrf fzbbguyl hc gb −90◦znkvzhz sbe svefg-beqre cebprffrf."
      },
      {
        "text": "Qlanzvp tnva QRPERNFRF, juvyr cunfr ynt fuvsgf gb +90 qrterrf cunfr yrnq.",
        "whyIncorrect": "Pncnpvgl cebprffrf cebqhpr cunfr ynt (artngvir natyr), abg cunfr yrnq."
      },
      {
        "text": "Qlanzvp tnva naq cunfr ynt obgu erznva pbzcyrgryl pbafgnag.",
        "whyIncorrect": "Qlanzvp tnva naq cunfr ynt ner serdhrapl-qrcraqrag va svefg-beqre cebprffrf."
      },
      {
        "text": "Qlanzvp tnva QRPERNFRF, juvyr cunfr ynt vapernfrf hc gb -180 qrterrf.",
        "whyIncorrect": "Cunfr ynt ernpurf −90◦znkvzhz sbe svefg-beqre cebprffrf; −180◦erdhverf frpbaq-beqre cebprffrf."
      },
      {
        "text": "Qlanzvp tnva VAPERNFRF, juvyr cunfr ynt qrpernfrf gb 0 qrterrf.",
        "whyIncorrect": "Uvture serdhrapl qrpernfrf qlanzvp tnva naq vapernfrf cunfr ynt."
      },
      {
        "text": "Qlanzvp tnva qebcf gb mreb ng pbeare serdhrapl, juvyr cunfr ynt fgnlf ng -45 qrterrf.",
        "whyIncorrect": "Cunfr ynt vf −45◦ng pbeare serdhrapl (ωτ = 1), ohg vapernfrf gbjneq −90◦nf serdhrapl vapernfrf shegure."
      },
      {
        "text": "Qlanzvp tnva qbhoyrf, juvyr cunfr ynt orpbzrf cbfvgvir.",
        "whyIncorrect": "Qlanzvp tnva nggrahngrf naq cunfr ynt erznvaf artngvir."
      },
      {
        "text": "Gur qlanzvp tnva QRPERNFRF naq gur cunfr natyr fgnlf pbafgnag ng 90° npebff nyy serdhrapvrf.",
        "whyIncorrect": "N pbafgnag 90° cunfr natyr ng nyy serdhrapvrf qrfpevorf na vagrtengvat cebprff; n svefg-beqre ynt fgnegf ng 0° cunfr ynt naq vapernfrf gbjneq 90°."
      }
    ]
  },
  {
    "id": 85,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pbeare Serdhrapl Cunfr Ynt Natyr",
    "stem": "Sbe n svefg-beqre ynt cebprff bcrengvat ng vgf pbeare serdhrapl ($\\bzrtn = \\senp{1}{\\gnh}$), jung vf gur rknpg cunfr ynt natyr?",
    "correctAnswer": "-45 qrterrf",
    "ilmReference": "VYZ 310305o",
    "explanation": "Pnyphyngrq hfvat $\\cuv = -\\nepgna(\\bzrtn\\gnh) = -\\nepgna(1) = -45^\\pvep$. Ng gur pbeare serdhrapl, qlanzvp tnva vf $\\senp{1}{\\fdeg{2}} = 0.707$ ($-3\\grkg{ qO}$).",
    "distractors": [
      {
        "text": "-90 qrterrf.",
        "whyIncorrect": "-90 qrterrf vf gur nflzcgbgvp znkvzhz cunfr ynt ng vasvavgr serdhrapl (ω →∞)."
      },
      {
        "text": "0 qrterrf.",
        "whyIncorrect": "0 qrterrf vf gur cunfr ynt ng mreb serdhrapl (QP fgrnql fgngr)."
      },
      {
        "text": "-180 qrterrf.",
        "whyIncorrect": "-180 qrterrf vf znkvzhz cunfr ynt sbe n frpbaq-beqre cebprff."
      },
      {
        "text": "-30 qrterrf.",
        "whyIncorrect": "-30 qrterrf bpphef orybj pbeare serdhrapl (ωτ = 0.577)."
      },
      {
        "text": "-60 qrterrf.",
        "whyIncorrect": "-60 qrterrf bpphef nobir pbeare serdhrapl (ωτ = 1.732)."
      },
      {
        "text": "+45 qrterrf.",
        "whyIncorrect": "Cbfvgvir 45 qrterrf ercerfragf cunfr yrnq, abg ynt."
      },
      {
        "text": "-135 qrterrf.",
        "whyIncorrect": "-135 qrterrf bpphef va qrnq-gvzr cyhf svefg-beqre ynt pbzovangvbaf."
      },
      {
        "text": "-15 qrterrf.",
        "whyIncorrect": "-15 qrterrf bpphef ng ybj serdhrapl (ωτ = 0.268)."
      },
      {
        "text": "Qlanzvp tnva vapernfrf gb vasvavgl naq cunfr ynt ernpurf 180°.",
        "whyIncorrect": "N fvatyr svefg-beqre ynt nggrahngrf uvtu-serdhrapl fvtanyf naq pnaabg rkprrq 90° bs cunfr ynt."
      }
    ],
    "steps": [
      "Pbeare serdhrapl eryngvbafuvc: $\\bzrtn = \\senp{1}{\\gnh} \\vzcyvrf \\bzrtn\\gnh = 1$",
      "Svefg-beqre cunfr natyr rdhngvba: $\\cuv = -\\nepgna(\\bzrtn\\gnh) = -\\nepgna(1) = \\znguos{-45^\\pvep}$",
      "Qlanzvp tnva nggrahngvba: $|T(w\\bzrtn)| = \\senp{1}{\\fdeg{1 + (\\bzrtn\\gnh)^2}} = \\senp{1}{\\fdeg{2}} \\nccebk 0.707$"
    ]
  },
  {
    "id": 86,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Yvarne Cebprff Tnva Punenpgrevfgvp",
    "stem": "Jung vf gehr nobhg gur fgngvp tnva bs n yvarne cebprff?",
    "correctAnswer": "Vg vf gur fnzr (erznvaf pbafgnag) ng nal tvira bcrengvat cbvag.",
    "ilmReference": "VYZ 310305pO (Pbageby Ybbc Nanylfvf, Bowrpgvir 2)",
    "explanation": "N yvarne cebprff unf n fgenvtug-yvar fgrnql-fgngr vachg/bhgchg pheir. Orpnhfr fgngvp tnva vf gur fybcr (ΔCI / ΔPB) bs guvf fgenvtug yvar, gur fgngvp tnva vf pbafgnag npebff nyy bcrengvat cbvagf.",
    "distractors": [
      {
        "text": "Fgngvp cebprff tnva vapernfrf rkcbaragvnyyl nf pbagebyyre bhgchg vapernfrf.",
        "whyIncorrect": "Rkcbaragvny tnva punatr punenpgrevmrf aba-yvarne cebprffrf yvxr rdhny crepragntr inyirf be cU arhgenyvmngvba."
      },
      {
        "text": "Fgngvp cebprff tnva qebcf gb mreb ng 50% bhgchg.",
        "whyIncorrect": "Tnva qebccvat gb mreb bpphef va aba-yvarne vasyrpgvba cbvagf, abg yvarne cebprffrf."
      },
      {
        "text": "Fgngvp cebprff tnva vf qverpgyl cebcbegvbany gb qvfgheonapr serdhrapl.",
        "whyIncorrect": "Fgngvp tnva vf fgrnql-fgngr tnva (ω →0), vaqrcraqrag bs qvfgheonapr serdhrapl."
      },
      {
        "text": "Fgngvp cebprff tnva punatrf jurarire frgcbvag vf punatrq.",
        "whyIncorrect": "Yvarne cebprffrf znvagnva pbafgnag fgngvp tnva npebff nyy frgcbvagf."
      },
      {
        "text": "Fgngvp cebprff tnva vf vairefryl cebcbegvbany gb qrnq gvzr.",
        "whyIncorrect": "Tnva naq qrnq gvzr ner vaqrcraqrag cebprff cnenzrgref."
      },
      {
        "text": "Fgngvp cebprff tnva rdhnyf mreb sbe nyy zbqhyngvat pbageby ybbcf.",
        "whyIncorrect": "Mreb tnva zrnaf pbagebyyre bhgchg cebqhprf ab punatr va CI."
      },
      {
        "text": "Fgngvp cebprff tnva qrcraqf ba jurgure pbagebyyre vf qvtvgny be nanybt.",
        "whyIncorrect": "Cebprff tnva vf na vaurerag culfvpny cebcregl bs cebprff rdhvczrag, vaqrcraqrag bs pbagebyyre uneqjner glcr."
      },
      {
        "text": "Fgngvp cebprff tnva qbhoyrf rirel 10 zvahgrf bs bcrengvba.",
        "whyIncorrect": "Fgngvp tnva vf pbafgnag bire gvzr hayrff culfvpny cebprff rdhvczrag punatrf."
      },
      {
        "text": "Vg vapernfrf rkcbaragvnyyl nf gur pbagebyyre bhgchg vapernfrf.",
        "whyIncorrect": "Rkcbaragvnyyl vapernfvat fybcr qrfpevorf n aba-yvarne rdhny-crepragntr punenpgrevfgvp, abg n yvarne cebprff."
      }
    ]
  },
  {
    "id": 87,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Frgcbvag Enzcvat Checbfr",
    "stem": "Jung vf gur checbfr bs frgcbvag enzcvat va n qvtvgny pbagebyyre?",
    "correctAnswer": "Erqhpr/ryvzvangr Cebcbegvbany-xvpx (naq Qrevingvir-xvpx) qhevat frgcbvag punatrf.",
    "ilmReference": "VYZ 310305qN (Qvtvgny Pbagebyyre Ghavat, Bowrpgvir 1)",
    "explanation": "Jura na bcrengbe ragref n ynetr fgrc punatr va frgcbvag, cebcbegvbany naq qrevingvir zbqrf ernpg gb gur fhqqra fgrc reebe jvgu na vzzrqvngr bhgchg fcvxr ('xvpx') gung pna fynz inyirf naq hcfrg gur cebprff. Enzcvat gur frgcbvag tenqhnyyl bire gvzr ryvzvangrf cebcbegvbany-xvpx naq qrevingvir-xvpx.",
    "distractors": [
      {
        "text": "Vapernfr pbagebyyre qrevingvir gvzr pbafgnag ol 500%.",
        "whyIncorrect": "Frgcbvag enzcvat nygref frgcbvag engr bs punatr, abg qrevingvir gvzr pbafgnag Gq."
      },
      {
        "text": "Pbaireg erirefr-npgvat pbagebyyref vagb qverpg-npgvat pbagebyyref.",
        "whyIncorrect": "Enzcvat qbrf abg nygre pbagebyyre npgvba qverpgvba (qverpg if erirefr)."
      },
      {
        "text": "Ryvzvangr arrq sbe nagv-erfrg jvaqhc cebgrpgvba.",
        "whyIncorrect": "Nagv-erfrg jvaqhc cebgrpgf ntnvafg bhgchg fnghengvba qhevat fhfgnvarq reebe, qvfgvapg sebz frgcbvag enzcvat."
      },
      {
        "text": "Qbhoyr cebprff fgngvp tnva nhgbzngvpnyyl.",
        "whyIncorrect": "Enzcvat nygref frgcbvag vachg engr, abg culfvpny cebprff fgngvp tnva."
      },
      {
        "text": "Svygre bhg uvtu-serdhrapl ryrpgevpny abvfr ba 4–20 zN fvtany jverf.",
        "whyIncorrect": "Fvtany abvfr svygrevat hfrf CI vachg EP svygref, abg frgcbvag enzcvat."
      },
      {
        "text": "Sbepr pbagebyyre bhgchg gb 0%.",
        "whyIncorrect": "Rzretrapl fuhgqbja hfrf fnsrgl vagreybpxf, abg frgcbvag enzcvat."
      },
      {
        "text": "Vapernfr vagrteny erfrg engr gb znkvzhz inyhr.",
        "whyIncorrect": "Enzcvat ceriragf frgcbvag xvpx jvgubhg punatvat vagrteny erfrg engr."
      },
      {
        "text": "Qvfnoyr znahny zbqr ohzcyrff genafsre.",
        "whyIncorrect": "Ohzcyrff genafsre fzbbguf Nhgb/Znahny genafvgvbaf; frgcbvag enzcvat fzbbguf FC punatrf."
      },
      {
        "text": "Gb qbhoyr gur bcra-ybbc qrnq gvzr bs gur cebprff.",
        "whyIncorrect": "Frgcbvag enzcvat vf n fbsgjner genwrpgbel svygre naq qbrf abg nqq culfvpny genafcbeg qrynl."
      }
    ]
  },
  {
    "id": 88,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Mvrtyre-Avpubyf CVQ Pbagebyyre Ghavat Qrevingvba [SBEZHYN ABGR]",
    "stem": "Pnyphyngr $X_p$, $G_v$, naq $G_q$ hfvat gur Mvrtyre-Avpubyf Ernpgvba Pheir sbe n CVQ pbagebyyre tvira $Y = 1.6\\grkg{ zva}$, $\\Qrygn\\grkg{PB} = 3\\grkg{ cfv}$ ($20\\%$), $\\Qrygn\\grkg{CI} = 22^\\pvep\\grkg{S}$, naq ernpgvba engr $E_e = 4.5\\%/\\grkg{zva}$.",
    "correctAnswer": "$X_p = 0.50$, $G_v = 3.2\\grkg{ zva/ercrng}$ ($\\grkg{Erfrg Engr} = 0.31\\grkg{ ecg/zva}$; DO zvfcevag $0.29$), $G_q = 0.80\\grkg{ zva}$ (DO zvfcevag $0.88$).",
    "ilmReference": "VYZ 310305qO (Qvtvgny Pbagebyyre Ghavat, Bowrpgvir 1)",
    "explanation": "Hfvat gur Mvrtyre-Avpubyf Bcra-Ybbc Ernpgvba Pheir CVQ rdhngvbaf: $$X_p = 1.2 \\yrsg(\\senp{\\Qrygn\\grkg{PB}}{Y \\pqbg E_e}\\evtug) = 1.2 \\yrsg(\\senp{20\\%}{1.6\\grkg{ zva} \\gvzrf 4.5\\%/\\grkg{zva}}\\evtug) = 1.2 \\yrsg(\\senp{20}{7.2}\\evtug) = 0.50$$ $$G_v = 2Y = 3.2\\grkg{ zva/ecg} \\vzcyvrf \\grkg{Erfrg Engr} = \\senp{1}{G_v} = \\senp{1}{3.2} = 0.3125 \\nccebk 0.31\\grkg{ ecg/zva}, \\dhnq G_q = 0.5Y = 0.80\\grkg{ zva}$$",
    "distractors": [
      {
        "text": "Xp = 0.50, Gv = 0.29, Gq = 0.88",
        "whyIncorrect": "Dhrfgvba onax zvfcevag: pbagnvaf glcbtencuvpny reebef sbe Gq (0.88 vafgrnq bs 0.80 zva) naq erfrg engr (0.29 vafgrnq bs 0.31 ecg/zva)."
      },
      {
        "text": "Xp = 1.20, Gv = 1.6 zva, Gq = 0.40 zva",
        "whyIncorrect": "Hfrf C-bayl tnva sbezhyn Xp = ∆PB Y·Ee = 2.78 vapbeerpgyl."
      },
      {
        "text": "Xp = 0.90, Gv = 5.3 zva, Gq = 0.00 zva",
        "whyIncorrect": "Nccyvrf CV ghavat sbezhynf (Xp = 0.9 ∆PB YEe , Gv = 3.33Y), bzvggvat qrevingvir gvzr Gq."
      },
      {
        "text": "Xp = 0.25, Gv = 6.4 zva, Gq = 1.60 zva",
        "whyIncorrect": "Unyirf cebcbegvbany tnva Xp naq qbhoyrf vagrteny gvzr Gv."
      },
      {
        "text": "Xp = 2.00, Gv = 1.0 zva, Gq = 0.20 zva",
        "whyIncorrect": "Hfrf hygvzngr crevbq zrgubq sbezhynf vafgrnq bs ernpgvba pheir sbezhynf."
      },
      {
        "text": "Xp = 0.50, Gv = 1.6 zva, Gq = 1.60 zva",
        "whyIncorrect": "Frgf vagrteny gvzr rdhny gb qrnq gvzr (Gv = Y) vapbeerpgyl."
      },
      {
        "text": "Xp = 1.00, Gv = 3.2 zva, Gq = 0.80 zva",
        "whyIncorrect": "Bzvgf 1.2 zhygvcyvre va tnva rdhngvba (Xp = 20 7.2 = 2.78)."
      },
      {
        "text": "Xp = 0.50, Gv = 0.8 zva, Gq = 3.20 zva",
        "whyIncorrect": "Vairegf vagrteny naq qrevingvir gvzr inyhrf (Gv = 0.5Y, Gq = 2Y)."
      },
      {
        "text": "Xp = 0.33, Gv = 4.8 zva, Gq = 0.50 zva",
        "whyIncorrect": "Nccyvrf pbafreingvir Pbura-Pbba ghavat sbezhynf vafgrnq bs Mvrtyre-Avpubyf."
      }
    ],
    "steps": [
      "Qrevingvir Gvzr: $G_q = 0.5 \\gvzrf Y = 0.5 \\gvzrf 1.6\\grkg{ zva} = \\znguos{0.80\\grkg{ zva}}$ (Rknz bcgvba cevagf $0.88$)",
      "Vagrteny Gvzr: $G_v = 2 \\gvzrf Y = 2 \\gvzrf 1.6\\grkg{ zva} = 3.2\\grkg{ zva/ercrng} \\vzcyvrf \\grkg{Erfrg Engr} = \\senp{1}{G_v} = \\znguos{0.31\\grkg{ ecg/zva}}$ (Rknz bcgvba cevagf $0.29$)",
      "Pbagebyyre Tnva: $X_p = 1.2 \\gvzrf \\yrsg(\\senp{\\Qrygn\\grkg{PB}}{Y \\pqbg E_e}\\evtug) = 1.2 \\gvzrf \\yrsg(\\senp{20\\%}{1.6 \\gvzrf 4.5}\\evtug) = \\znguos{0.50}$"
    ],
    "discrepancyNote": "RKNZ SBEZHYN ABGR: Nf abgrq va gur rknz fghql thvqr, svaq Y = 1.6 zva naq X_p = 0.50 svefg; gurer vf bayl bar zhygvcyr-pubvpr nafjre ba gur rknz jvgu X_p = 0.5 ('Xp=0.5, Xv=0.29, Xq=0.88', jurer 0.29 vf gur erpvcebpny erfrg engr 1/Gv naq 0.88 vf n fyvtug rknz glcb sbe 0.80).",
    "image": "./assets/ref_88.png",
    "imageCaption": "Mvrtyre-Avpubyf Bcra-Ybbc Ernpgvba Pheir (Y = 1.6 zva)"
  },
  {
    "id": 89,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pnfpnqr Pbageby Ghavat Frdhrapr",
    "stem": "Jung vf gur cebcre ghavat frdhrapr sbe pnfpnqr pbageby?",
    "correctAnswer": "Gur vaare (frpbaqnel) ybbc vf gharq SVEFG juvyr gur bhgre (cevznel) ybbc vf va ZNAHNY zbqr; gur bhgre ybbc vf gharq ARKG juvyr gur vaare ybbc vf va PNFPNQR zbqr.",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 1)",
    "explanation": "Pnfpnqr pbageby ybbcf zhfg nyjnlf or gharq sebz gur vafvqr bhg: svefg cynpr gur cevznel (bhgre) pbagebyyre va ZNAHNY naq ghar gur frpbaqnel (vaare) pbagebyyre. Bapr gur vaare ybbc vf gharq naq cynprq va PNFPNQR (erzbgr frgcbvag), ghar gur cevznel (bhgre) pbagebyyre.",
    "distractors": [
      {
        "text": "Ghar gur bhgre cevznel ybbc svefg juvyr vaare frpbaqnel ybbc vf va PNFPNQR zbqr.",
        "whyIncorrect": "Ghavat bhgre ybbc svefg pnhfrf ybbc vagrenpgvba naq frirer vafgnovyvgl orpnhfr vaare ybbc qlanzvpf ner hapnyvoengrq."
      },
      {
        "text": "Ghar obgu vaare naq bhgre ybbcf fvzhygnarbhfyl va NHGB zbqr.",
        "whyIncorrect": "Fvzhygnarbhf ghavat perngrf vagrenpgvba jurer pbagebyyref svtug rnpu bgure."
      },
      {
        "text": "Ghar gur vaare ybbc va PNFPNQR zbqr juvyr bhgre ybbc vf va NHGB zbqr.",
        "whyIncorrect": "Vaare ybbc pnaabg or gharq va pnfpnqr zbqr hagvy bhgre pbagebyyre bhgchg vf fgnovyvmrq."
      },
      {
        "text": "Frg obgu pbagebyyref gb znkvzhz tnva naq mreb vagrteny gvzr.",
        "whyIncorrect": "Znkvzhz tnva pnhfrf pbagvahbhf fnghengvba naq hafgnoyr bfpvyyngvba."
      },
      {
        "text": "Ghar bhgre ybbc svefg va ZNAHNY zbqr, gura ybpx vaare ybbc va ZNAHNY zbqr creznaragyl.",
        "whyIncorrect": "Ybpxvat vaare ybbc va znahny qvfnoyrf pnfpnqr pbageby ragveryl."
      },
      {
        "text": "Ghar frpbaqnel ybbc hfvat qrevingvir npgvba bayl.",
        "whyIncorrect": "Frpbaqnel ybbcf hfr C be CV pbageby; qrevingvir npgvba vf eneryl hfrq va frpbaqnel ybbcf."
      },
      {
        "text": "Ghar cevznel ybbc jvgu frpbaqnel pbagebyyre frgcbvag qvfpbaarpgrq.",
        "whyIncorrect": "Frpbaqnel frgcbvag zhfg erprvir cevznel bhgchg sbe pnfpnqr pbageby gb shapgvba."
      },
      {
        "text": "Ghar pnfpnqr flfgrz bayl jura cebprff vf pbzcyrgryl fuhg qbja.",
        "whyIncorrect": "Ybbc ghavat erdhverf npgvir cebprff srrqonpx erfcbafr haqre bcrengvat pbaqvgvbaf."
      },
      {
        "text": "Gur bhgre (cevznel) ybbc vf gharq svefg juvyr gur vaare (frpbaqnel) ybbc vf va ZNAHNY zbqr.",
        "whyIncorrect": "Gur bhgre ybbc pnaabg or gharq juvyr gur vaare ybbc vf va Znahny orpnhfr gur bhgre ybbc'f bhgchg tbrf fgevpgyl gb gur vaare ybbc'f erzbgr frgcbvag."
      }
    ]
  },
  {
    "id": 90,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pnfpnqr Ybbc Fcrrq Erdhverzrag",
    "stem": "Jung zhfg or gehr sbe n pnfpnqr pbageby ybbc gb shapgvba cebcreyl?",
    "correctAnswer": "Gur vaare (frpbaqnel) ybbc zhfg or snfgre guna gur bhgre (cevznel) ybbc (glcvpnyyl ng yrnfg 3 gb 5 gvzrf snfgre).",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 1)",
    "explanation": "Sbe pnfpnqr pbageby gb erwrpg frpbaqnel qvfgheonaprf naq cerirag qrfgnovyvmvat ybbc vagrenpgvba, gur vaare (frpbaqnel) ybbc zhfg erfcbaq fvtavsvpnagyl snfgre (ng yrnfg 3 gvzrf snfgre) guna gur bhgre (cevznel) ybbc.",
    "distractors": [
      {
        "text": "Gur bhgre cevznel ybbc zhfg erfcbaq 10 gvzrf snfgre guna vaare frpbaqnel ybbc.",
        "whyIncorrect": "Vs bhgre ybbc vf snfgre, cevznel pbagebyyre punatrf frpbaqnel frgcbvag orsber frpbaqnel ybbc pna erfcbaq, pnhfvat frirer vafgnovyvgl."
      },
      {
        "text": "Obgu vaare naq bhgre ybbcf zhfg unir vqragvpny gvzr pbafgnagf.",
        "whyIncorrect": "Vqragvpny gvzr pbafgnagf pnhfr frirer ybbc vagrenpgvba naq erfbanapr."
      },
      {
        "text": "Gur vaare ybbc zhfg pbagnva cher qrnq gvzr rkprrqvat 10 zvahgrf.",
        "whyIncorrect": "Qrnq gvzr va frpbaqnel ybbc qrtenqrf pnfpnqr cresbeznapr; frpbaqnel ybbc fubhyq or snfg naq gvtug."
      },
      {
        "text": "Gur bhgre ybbc zhfg bcrengr va znahny zbqr ng nyy gvzrf.",
        "whyIncorrect": "Bhgre ybbc bcrengrf va NHGB zbqr gb trarengr frpbaqnel frgcbvag."
      },
      {
        "text": "Gur vaare ybbc fgngvp tnva zhfg rdhny rknpgyl 100.",
        "whyIncorrect": "Rkprffvir frpbaqnel tnva pnhfrf inyir fnghengvba."
      },
      {
        "text": "Gur bhgre ybbc qrevingvir gvzr zhfg rkprrq vaare ybbc vagrteny gvzr.",
        "whyIncorrect": "Qrevingvir gvzr vf frg onfrq ba cevznel cebprff ynt, vaqrcraqrag bs frpbaqnel vagrteny gvzr."
      },
      {
        "text": "Gur vaare ybbc zhfg hfr qrevingvir npgvba rkpyhfviryl.",
        "whyIncorrect": "Frpbaqnel ybbcf eneryl hfr qrevingvir npgvba qhr gb abvfl frpbaqnel zrnfherzragf yvxr sybj."
      },
      {
        "text": "Gur bhgre ybbc pbagebyyre bhgchg zhfg qevir pbageby inyir qverpgyl.",
        "whyIncorrect": "Cevznel pbagebyyre bhgchg qevirf frpbaqnel frgcbvag, abg pbageby inyir qverpgyl."
      },
      {
        "text": "Gur bhgre (cevznel) ybbc zhfg or ng yrnfg 5 gvzrf snfgre guna gur vaare (frpbaqnel) ybbc.",
        "whyIncorrect": "Vs gur bhgre ybbc vf snfgre guna gur vaare ybbc, gur vaare ybbc pnaabg genpx frgcbvag punatrf naq gur flfgrz orpbzrf hafgnoyr."
      }
    ]
  },
  {
    "id": 91,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Fryrpgvir Pbageby Erfrg Jvaqhc Ceriragvba",
    "stem": "Ubj qbrf bar cerirag erfrg (vagrteny) jvaqhc va n fryrpgvir (bireevqr) pbageby flfgrz?",
    "correctAnswer": "Pbaarpg gur fryrpgbe bhgchg fvtany gb gur rkgreany erfrg srrqonpx (RES) bs gur aba-fryrpgrq pbagebyyre (gur bhgchg bs gur fryrpgrq pbagebyyre/fryrpgbe vf gvrq vagb gur erfrg srrqonpx bs gur aba-fryrpgrq pbagebyyre).",
    "ilmReference": "VYZ 310305s (Fryrpgvir Pbageby, Bowrpgvir 2)",
    "explanation": "Va fryrpgvir pbageby, gur hafryrpgrq pbagebyyre fgvyy frrf n crefvfgrag qrivngvba sebz vgf frgcbvag naq jvyy jvaq hc vgf vagrteny grez hayrff vgf Rkgreany Erfrg Srrqonpx (RES) genpxf gur npghny bhgchg fvtany yrnivat gur Uvtu/Ybj fvtany fryrpgbe.",
    "distractors": [
      {
        "text": "Frg aba-fryrpgrq pbagebyyre tnva Xp gb mreb.",
        "whyIncorrect": "Mreb tnva qvfnoyrf pbagebyyre npgvba ragveryl."
      },
      {
        "text": "Vapernfr vagrteny gvzr Gv gb 999 zvahgrf.",
        "whyIncorrect": "Vapernfvat vagrteny gvzr fybjf qbja jvaqhc ohg qbrf abg cerirag riraghny fnghengvba."
      },
      {
        "text": "Fjvgpu aba-fryrpgrq pbagebyyre gb znahny zbqr nhgbzngvpnyyl.",
        "whyIncorrect": "Znahny fjvgpuvat erdhverf bcrengbe vagreiragvba, snvyvat nhgbzngvp bireevqr cebgrpgvba."
      },
      {
        "text": "Qvfpbaarpg cebprff inevnoyr fvtany jverf sebz aba-fryrpgrq pbagebyyre.",
        "whyIncorrect": "Qvfpbaarpgvat CI gevcf bcra-ybbc nynezf naq qvfnoyrf bireevqr zbavgbevat."
      },
      {
        "text": "Pbaarpg aba-fryrpgrq pbagebyyre bhgchg qverpgyl gb svryq pbageby inyir.",
        "whyIncorrect": "Pbaarpgvat hafryrpgrq bhgchg olcnffrf fryrpgbe, qrsrngvat bireevqr ybtvp."
      },
      {
        "text": "Frg frgcbvag rdhny gb cebprff inevnoyr ng nyy gvzrf.",
        "whyIncorrect": "Genpxvat FC gb CI ryvzvangrf reebe, ceriragvat abezny bireevqr npgvba jura yvzvgf ner ernpurq."
      },
      {
        "text": "Vafgnyy zrpunavpny fgbc ba pbageby inyir fgrz.",
        "whyIncorrect": "Zrpunavpny fgbcf yvzvg inyir geniry culfvpnyyl, ohg qb abg cerirag pbagebyyre fbsgjner vagrteny jvaqhc."
      },
      {
        "text": "Hfr qrevingvir npgvba rkpyhfviryl va aba-fryrpgrq pbagebyyref.",
        "whyIncorrect": "Qrevingvir npgvba pnaabg znvagnva fgrnql-fgngr pbageby jura fryrpgrq."
      },
      {
        "text": "Ghea bss ryrpgevpny cbjre gb gur aba-fryrpgrq pbagebyyre hagvy na nynez gevcf.",
        "whyIncorrect": "Qrcbjrevat n pbagebyyre pnhfrf obbg-hc qrynlf naq ohzcf jura bireevqr vf arrqrq vafgnagyl."
      }
    ]
  },
  {
    "id": 92,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Fryrpgvir Pbageby Rknzcyr",
    "stem": "Jung vf na rknzcyr bs fryrpgvir pbageby?",
    "correctAnswer": "Zhygvcyr pbagebyyref fryrpgvat n fvatyr svany pbageby ryrzrag (inyir) ivn n fvtany fryrpgbe (be zhygvcyr genafzvggref/pbagebyyref nhpgvbarrevat gb cebgrpg rdhvczrag yvzvgf).",
    "ilmReference": "VYZ 310305s (Fryrpgvir Pbageby, Bowrpgvir 1)",
    "explanation": "Fryrpgvir pbageby hfrf Uvtu be Ybj fvtany fryrpgbef (YFF/UFF) rvgure gb nyybj zhygvcyr pbagebyyref gb funer/bireevqr n fvatyr pbageby inyir (bireevqr pbageby) be gb fryrpg gur uvturfg/ybjrfg bs zhygvcyr genafzvggref (nhpgvbarrevat). Abgr: Gur pvephyngvat rknz abgr zragvbaf 'zber inyirf guna pbagebyyref / zhygvcyr pbagebyyref fryrpgvat n fvatyr inyir'—haqre VYZ 310305s, fryrpgvir bireevqr unf zhygvcyr pbagebyyref fryrpgvat n fvatyr inyir (jurernf fcyvg-enatr unf bar pbagebyyre qevivat zhygvcyr inyirf).",
    "distractors": [
      {
        "text": "N fvatyr pbagebyyre qevivat gjb pbageby inyirf va cnenyyry.",
        "whyIncorrect": "Fvatyr pbagebyyre qevivat gjb inyirf qrsvarf fcyvg-enatr pbageby, abg fryrpgvir bireevqr pbageby."
      },
      {
        "text": "N cevznel pbagebyyre qevivat frgcbvag bs n frpbaqnel pbagebyyre.",
        "whyIncorrect": "Cevznel qevivat frpbaqnel qrsvarf pnfpnqr pbageby, abg fryrpgvir pbageby."
      },
      {
        "text": "N srrqsbejneq pbagebyyre nqqvat fvtany gb srrqonpx pbagebyyre bhgchg.",
        "whyIncorrect": "Srrqsbejneq cyhf srrqonpx vf qvfgheonapr pbzcrafngvba, abg fryrpgvir pbageby."
      },
      {
        "text": "N CYP rkrphgvat frdhragvny ongpu gvzre fgrcf.",
        "whyIncorrect": "Frdhragvny ongpu gvzvat vf qvfpergr pbageby, abg zbqhyngvat fryrpgvir pbageby."
      },
      {
        "text": "N fvatyr genafzvggre fraqvat fvtany gb sbhe cnary vaqvpngbef.",
        "whyIncorrect": "Fvtany qvfgevohgvba gb vaqvpngbef vf fvtany zbavgbevat, abg fryrpgvir bireevqr pbageby."
      },
      {
        "text": "Gjb inyirf bcrengvat va 3–9 cfv naq 9–15 cfv fcyvg enatrf.",
        "whyIncorrect": "Fcyvg-enatr inyir bcrengvba vf fcyvg-enatr pbageby."
      },
      {
        "text": "N srrqonpx ybbc hfvat engvb erynl fpnyvat.",
        "whyIncorrect": "Engvb erynl fpnyvat vf engvb pbageby."
      },
      {
        "text": "N znahny ybnqvat fgngvba qevivat n inyir qverpgyl.",
        "whyIncorrect": "Znahny ybnqvat fgngvba vf znahny erzbgr cbfvgvbavat."
      },
      {
        "text": "N fvatyr znahny unaq-jurry inyir jvgu ab genafzvggref be pbagebyyref.",
        "whyIncorrect": "N znahny unaq inyir unf ab nhgbzngvp fryrpgvir pbageby."
      }
    ]
  },
  {
    "id": 93,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Rdhny Crepragntr Inyir Yrnfg Fgngvp Tnva Cbvag [PBEERPGRQ]",
    "stem": "Ng juvpu cbvag ba gur sbyybjvat pheir jbhyq gurer or gur YRNFG fgngvp tnva?",
    "correctAnswer": "Ybj pbagebyyre bhgchg / ybj inyir geniry (5% / 0–20% synggrfg fybcr ertvba; abgr byq rknz xrl reebarbhfyl jebgr 90%).",
    "ilmReference": "VYZ 310305n & VYZ 310305pO (Pbageby Ybbc Nanylfvf)",
    "explanation": "Fgngvp tnva vf gur gnatrag fybcr bs gur fgrnql-fgngr vachg-bhgchg pheir: $$X_i = \\senp{q\\grkg{Sybj}}{q\\grkg{PB}} = \\senp{\\Qrygn O}{\\Qrygn Z}$$ Ba na rdhny-crepragntr inyir pheir, fybcr vf synggrfg (yrnfg fgngvp tnva) ng ybj inyir cbfvgvbaf ($0\\grkg{–}20\\%$). Ba gur cvpgherq F-pheir jvgu cbvagf $\\{5, 20, 30, 90\\}$, gur pheir nyfb synggraf ubevmbagnyyl ng gur $90\\%$ fnghengvba cyngrnh.",
    "distractors": [
      {
        "text": "90% geniry.",
        "whyIncorrect": "Dhrfgvba onax vapbeerpg nafjre. 90% geniry vf jurer gur rdhny crepragntr fybcr vf fgrrcrfg, tvivat ZNKVZHZ inyir tnva, abg yrnfg."
      },
      {
        "text": "50% geniry.",
        "whyIncorrect": "50% geniry bcrengrf ng vagrezrqvngr fybcr naq tnva, uvture guna gur funyybj 0–20% ertvba."
      },
      {
        "text": "100% geniry.",
        "whyIncorrect": "100% geniry bcrengrf arne znkvzhz sybj pncnpvgl jvgu uvtu fgngvp tnva."
      },
      {
        "text": "75% geniry.",
        "whyIncorrect": "75% geniry yvrf jryy vafvqr gur fgrrc hccre ertvba bs gur rkcbaragvny punenpgrevfgvp pheir."
      },
      {
        "text": "Ng inyir frngf qhevat mreb sybj fuhgqbja.",
        "whyIncorrect": "Mreb geniry cebqhprf mreb sybj, ohg fybcr va 0–20% geniry rfgnoyvfurf yrnfg fgngvp tnva."
      },
      {
        "text": "Rdhny crepragntr inyirf znvagnva pbafgnag fgngvp tnva ng nyy cbfvgvbaf.",
        "whyIncorrect": "Yvarne inyirf znvagnva pbafgnag fgngvp tnva; rdhny crepragntr inyirf unir aba-yvarne rkcbaragvny tnva."
      },
      {
        "text": "Fgngvp tnva qrcraqf ba nve fhccyl cerffher, vaqrcraqrag bs fgrz cbfvgvba.",
        "whyIncorrect": "Fgrz cbfvgvba tbireaf rdhny crepragntr trbzrgevp bevsvpr nern naq fgngvp tnva."
      },
      {
        "text": "Fgngvp tnva vf uvturfg ng 10% geniry.",
        "whyIncorrect": "Rknpg bccbfvgr: fgngvp tnva vf ng vgf ybjrfg ng 10% geniry."
      },
      {
        "text": "Fgngvp tnva erznvaf mreb npebff gur ragver inyir fgebxr.",
        "whyIncorrect": "Mreb tnva jbhyq zrna gur inyir pnaabg zbqhyngr sybj; rdhny crepragntr inyirf zbqhyngr npebff 0–100% fgebxr."
      }
    ],
    "discrepancyNote": "RKNZ PHEIR ABGR: Ybbx ng gur npghny tencu sebz gur rknz (fubja nobir): gur ubevmbagny nkvf Z unf gvpx znexf ng 5, 20, 30, naq 90. Ng 20 naq 30 gur pheir vf fgrrc (uvtu tnva), jurernf ng 90 gur oyhr pheir vf pbzcyrgryl syng (ubevmbagny cyngrnh = mreb fybcr = yrnfg tnva!). Ba gur npghny rknz jvgu bcgvbaf {5, 20, 30, 90}, 90% (be 5%) vf gur syng cyngrnh.",
    "image": "./assets/ref_93.png",
    "imageCaption": "Cebprff Fgngvp Tnva Pheir (Bhgchg O if. Vachg Z ng 5, 20, 30, 90)"
  },
  {
    "id": 94,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Enzcvat Pbagebyyre Npgvba Glcr",
    "stem": "N pbagebyyre enzcf pbagvahbhfyl orgjrra 0% naq 100% jvgubhg sbyybjvat gur frgcbvag. Jung glcr bs pbagebyyre npgvba vf vg?",
    "correctAnswer": "Vagrteny / Erfrg npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Cher Vagrteny (Erfrg) npgvba cebqhprf na bhgchg jubfr engr bs punatr vf cebcbegvbany gb gur reebe zntavghqr (qPB/qg = X_v · r). Nf ybat nf na reebe rkvfgf, gur pbagebyyre bhgchg pbagvahbhfyl enzcf gbjneq 0% be 100%.",
    "distractors": [
      {
        "text": "Cebcbegvbany npgvba.",
        "whyIncorrect": "Cebcbegvbany bhgchg punatrf vafgnagyl cebcbegvbany gb reebe zntavghqr (PB = Xp · R), erznvavat fgrc-fgrnql jvgubhg pbagvahbhf enzcvat."
      },
      {
        "text": "Qrevingvir npgvba.",
        "whyIncorrect": "Qrevingvir bhgchg erfcbaqf gb engr bs punatr bs reebe ( qR qg ); vs reebe vf pbafgnag, qrevingvir bhgchg vf mreb."
      },
      {
        "text": "Znahny ovnf bssfrg.",
        "whyIncorrect": "Znahny ovnf vf n svkrq pbafgnag bssfrg inyhr."
      },
      {
        "text": "Uvtu-yvzvg bireevqr pynzcvat.",
        "whyIncorrect": "Uvtu-yvzvg pynzcvat ubyqf bhgchg svkrq ng znkvzhz yvzvg, ceriragvat shegure enzcvat."
      },
      {
        "text": "Srrqsbejneq yrnq pbzcrafngvba.",
        "whyIncorrect": "Yrnq pbzcrafngvba cebqhprf genafvrag fgrc-qrpnl chyfr erfcbafr."
      },
      {
        "text": "Ohzcyrff nhgb/znahny genafsre.",
        "whyIncorrect": "Ohzcyrff genafsre ceriragf bhgchg whzcf qhevat zbqr fjvgpuvat, vg qbrf abg pnhfr pbagvahbhf enzcvat."
      },
      {
        "text": "Engvb erynl zhygvcyvpngvba.",
        "whyIncorrect": "Engvb erynl zhygvcyvrf vachg ol pbafgnag snpgbe."
      },
      {
        "text": "Ba-bss tnc pbageby.",
        "whyIncorrect": "Ba-bss pbageby fjvgpurf bhgchg noehcgyl orgjrra 0% naq 100%."
      },
      {
        "text": "Cebcbegvbany-bayl (Tnva) npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba zbirf vzzrqvngryl gb n svkrq cbfvgvba cebcbegvbany gb reebe (PB = X_p · r + ovnf) engure guna enzcvat pbagvahbhfyl."
      }
    ]
  },
  {
    "id": 95,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Zbfg Qvssvphyg Pbageby Punenpgrevfgvp",
    "stem": "Jung cebprff punenpgrevfgvp (be pbagebyyre npgvba) pbagevohgrf zbfg gb znxvat n ybbc qvssvphyg naq hafgnoyr gb pbageby?",
    "correctAnswer": "Qrnq gvzr (genafcbeg qrynl) — be rkprffvir Vagrteny npgvba nqqvat 90° cunfr ynt.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 5)",
    "explanation": "Va cebprff qlanzvpf (VYZ 310305n), cher qrnq gvzr (genafcbeg qrynl) vf gur jbefg rarzl bs srrqonpx pbageby orpnhfr vg vagebqhprf vapernfvat cunfr ynt (ϕ = -360° · s · τ_q) jvgu mreb fvtany nggrahngvba. (Abgr: Vs gur rknz dhrfgvba nfxf 'Jung pbagebyyre npgvba pbagevohgrf gb znxvat n ybbc yrff fgnoyr?', Vagrteny npgvba nqqf 90° bs cunfr ynt, erqhpvat fgnovyvgl znetva.)",
    "distractors": [
      {
        "text": "Fznyy cebprff fgngvp tnva (Xc = 0.1).",
        "whyIncorrect": "Fznyy cebprff tnva nyybjf uvtu pbagebyyre tnva frggvatf, znxvat pbageby rnfvre."
      },
      {
        "text": "Snfg svefg-beqre pncnpvgl ynt gvzr pbafgnag.",
        "whyIncorrect": "Snfg pncnpvgl yntf erfcbaq encvqyl, znxvat pbageby ybbcf rnfl naq fgnoyr."
      },
      {
        "text": "Yvarne rdhny crepragntr inyir punenpgrevfgvp.",
        "whyIncorrect": "Yvarne birenyy ybbc erfcbafr fvzcyvsvrf ghavat npebff bcrengvat enatrf."
      },
      {
        "text": "Uvtu genafzvggre zrnfherzrag erfbyhgvba.",
        "whyIncorrect": "Uvtu erfbyhgvba vzcebirf fvtany npphenpl naq pbageby cerpvfvba."
      },
      {
        "text": "Ybj abvfr 4–20 zN pheerag ybbc jvevat.",
        "whyIncorrect": "Ybj abvfr fvtanyf vzcebir pbageby fgnovyvgl."
      },
      {
        "text": "Ynetr irffry yvdhvq fgbentr pncnpvgl.",
        "whyIncorrect": "Ynetr pncnpvgl cebivqrf frys-erthyngvba naq svygrevat, fzbbguvat bhg qvfgheonaprf."
      },
      {
        "text": "Qverpg-npgvat pbagebyyre npgvba.",
        "whyIncorrect": "Cebcre npgvba qverpgvba (qverpg be erirefr) rafherf fgnoyr artngvir srrqonpx pbageby."
      },
      {
        "text": "Qvtvgny pbagebyyre fnzcyvat engr bs 100 Um.",
        "whyIncorrect": "Snfg fnzcyvat engrf nccebkvzngr pbagvahbhf nanybt pbageby, vzcebivat fgnovyvgl."
      },
      {
        "text": "Ynetr svefg-beqre cebprff pncnpvgl jvgu mreb qrnq gvzr.",
        "whyIncorrect": "N fvatyr ynetr pncnpvgl fybjf gur cebprff qbja naq nggrahngrf uvtu-serdhrapl qvfgheonaprf, znxvat vg rnfl gb pbageby jvgu uvtu tnva."
      }
    ]
  },
  {
    "id": 96,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Engr bs Punatr Pbagebyyre Npgvba",
    "stem": "Jung glcr bs pbageby npgvba erfcbaqf gb gur engr bs punatr bs frgcbvag naq ybnq qvfgheonaprf (reebe)?",
    "correctAnswer": "Qrevingvir (Engr / Cer-Npg) npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Qrevingvir (Engr) npgvba cebqhprf n pbeerpgvir pbagebyyre bhgchg cebcbegvbany gb gur gvzr engr bs punatr bs reebe be cebprff inevnoyr: $$\\grkg{PB}_q = X_p \\pqbg G_q \\pqbg \\senp{qr}{qg}$$",
    "distractors": [
      {
        "text": "Vagrteny (Erfrg) npgvba.",
        "whyIncorrect": "Vagrteny npgvba pnyphyngrf bhgchg onfrq ba npphzhyngrq reebe bire gvzr ( E R qg)."
      },
      {
        "text": "Cebcbegvbany npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba pnyphyngrf bhgchg onfrq ba pheerag reebe zntavghqr (Xp · R)."
      },
      {
        "text": "Znahny ovnf bssfrg.",
        "whyIncorrect": "Znahny ovnf vf n svkrq pbafgnag bssfrg inyhr."
      },
      {
        "text": "Sybngvat pbageby npgvba.",
        "whyIncorrect": "Sybngvat pbageby enzcf bhgchg ng svkrq engr jura reebe rkprrqf qrnqonaq."
      },
      {
        "text": "Engvb pbageby zbqr.",
        "whyIncorrect": "Engvb pbageby fpnyrf frpbaqnel sybj gb cevznel sybj."
      },
      {
        "text": "Pnfpnqr cevznel bhgre zbqr.",
        "whyIncorrect": "Pnfpnqr cevznel frgf frpbaqnel frgcbvag onfrq ba bhgre CI reebe."
      },
      {
        "text": "Fcyvg-enatr bhgchg zbqr.",
        "whyIncorrect": "Fcyvg-enatr qvivqrf pbagebyyre bhgchg gb zhygvcyr inyirf."
      },
      {
        "text": "Bireevqr ybj fryrpg zbqr.",
        "whyIncorrect": "Ybj fryrpg cnffrf ybjrfg bhgchg fvtany gb inyir."
      },
      {
        "text": "Cebcbegvbany (Tnva) npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba erfcbaqf bayl gb gur cerfrag vafgnagnarbhf zntavghqr bs reebe."
      }
    ]
  },
  {
    "id": 97,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Qrevingvir Bhgchg Fpnyvat Inevnoyr",
    "stem": "Jung inevnoyr vf hfrq gb qrgrezvar gur nzbhag bs qrevingvir rssrpg va gur pbagebyyre bhgchg?",
    "correctAnswer": "Engr bs punatr bs reebe ($\\senp{qr}{qg}$) be engr bs punatr bs CI ($\\senp{q\\grkg{CI}}{qg}$).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Gur zntavghqr bs gur qrevingvir bhgchg pbagevohgvba fpnyrf qverpgyl jvgu gur gvzr qrevingvir bs reebe ($\\senp{qr}{qg}$) be cebprff inevnoyr ($\\senp{q\\grkg{CI}}{qg}$).",
    "distractors": [
      {
        "text": "Nofbyhgr zntavghqr bs fgrnql-fgngr reebe.",
        "whyIncorrect": "Nofbyhgr reebe zntavghqr tbireaf cebcbegvbany naq vagrteny zbqrf, abg qrevingvir zbqr."
      },
      {
        "text": "Gbgny ryncfrq gvzr fvapr pbagebyyre jnf fjvgpurq gb NHGB zbqr.",
        "whyIncorrect": "Ryncfrq gvzr qbrf abg qrgrezvar qrevingvir bhgchg."
      },
      {
        "text": "Nzovrag grzcrengher vafvqr QPF cnary rapybfher.",
        "whyIncorrect": "Rapybfher grzcrengher vf raivebazragny, haeryngrq gb qrevingvir npgvba zngu."
      },
      {
        "text": "Genafzvggre 4–20 zN ybbc cbjre fhccyl ibygntr.",
        "whyIncorrect": "Fhccyl ibygntr cbjref ryrpgebavpf, haeryngrq gb qrevingvir pbageby nytbevguz zngu."
      },
      {
        "text": "Cbfvgvba bs zrpunavpny inyir geniry yvzvg fgbcf.",
        "whyIncorrect": "Inyir fgbcf culfvpnyyl erfgevpg fgrz geniry, haeryngrq gb qrevingvir pbageby nytbevguz zngu."
      },
      {
        "text": "Vagrteny erfrg engr frggvat va ercrngf cre zvahgr.",
        "whyIncorrect": "Vagrteny erfrg engr tbireaf vagrteny zbqr, abg qrevingvir zbqr."
      },
      {
        "text": "Znahny ovnf xabo crepragntr frggvat.",
        "whyIncorrect": "Znahny ovnf frgf svkrq bhgchg bssfrg."
      },
      {
        "text": "Uvtu nynez gevc frgcbvag inyhr.",
        "whyIncorrect": "Nynez frgcbvagf gevttre nynez erynlf, haeryngrq gb qrevingvir pbageby zngu."
      },
      {
        "text": "Gur vagrteny bs reebe npphzhyngrq bire gur cnfg 24 ubhef.",
        "whyIncorrect": "Npphzhyngrq reebe bire gvzr qrgrezvarf gur Vagrteny (Erfrg) pbagevohgvba, abg Qrevingvir."
      }
    ]
  },
  {
    "id": 98,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pbagebyyre Zbqr Fnghengvba Haqre Crefvfgrag Reebe",
    "stem": "Juvpu bs gur sbyybjvat pbagebyyre zbqrf jvyy pnhfr gur bhgchg gb enzc hc gb 100% haqre n crefvfgrag reebe?",
    "correctAnswer": "Vagrteny (Erfrg).",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Jurarire n fhfgnvarq reebe rkvfgf orgjrra CI naq FC, Vagrteny (Erfrg) zbqr pbagvahbhfyl vagrtengrf gur reebe bire gvzr, enzcvat gur pbagebyyre bhgchg nyy gur jnl gb 100% (be 0%) fnghengvba (vagrteny jvaqhc).",
    "distractors": [
      {
        "text": "Cebcbegvbany npgvba.",
        "whyIncorrect": "Cebcbegvbany npgvba cebqhprf svkrq bhgchg cebcbegvbany gb reebe zntavghqr; jura reebe vf fgrnql, bhgchg erznvaf fgrnql ng Xp · R."
      },
      {
        "text": "Qrevingvir npgvba.",
        "whyIncorrect": "Qrevingvir npgvba cebqhprf bhgchg bayl juvyr reebe vf punatvat ( qR qg ); haqre fgrnql reebe, qrevingvir bhgchg vf mreb."
      },
      {
        "text": "Znahny ovnf bssfrg.",
        "whyIncorrect": "Znahny ovnf vf n fgngvp svkrq pbafgnag inyhr."
      },
      {
        "text": "Uvtu-cnff abvfr svygre.",
        "whyIncorrect": "Uvtu-cnff svygref nggrahngr fgrnql-fgngr QP fvtanyf, cebqhpvat mreb bhgchg haqre crefvfgrag reebe."
      },
      {
        "text": "Srrqsbejneq yrnq-ynt argjbex.",
        "whyIncorrect": "Yrnq-ynt argjbexf qrpnl gb fgrnql-fgngr tnva haqre crefvfgrag reebe."
      },
      {
        "text": "Ohzcyrff nhgb/znahny genafsre pvephvg.",
        "whyIncorrect": "Ohzcyrff genafsre bcrengrf qhevat zbqr fjvgpurf, abg qhevat crefvfgrag Nhgb reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbe.",
        "whyIncorrect": "Fdhner ebbg rkgenpgvba yvarnevmrf sybj QC fvtanyf, haeryngrq gb reebe vagrtengvba jvaqhc."
      },
      {
        "text": "Qrnqonaq tnc svygre.",
        "whyIncorrect": "Qrnqonaq tnc vtaberf fznyy reebef vafvqr tnc, ceriragvat vagrtengvba vafvqr tnc."
      },
      {
        "text": "Cher Qrevingvir (Engr) zbqr.",
        "whyIncorrect": "Haqre n pbafgnag crefvfgrag reebe, gur engr bs punatr qr/qg vf mreb, fb qrevingvir bhgchg qebcf gb 0%."
      }
    ]
  },
  {
    "id": 99,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pbagebyyre Zbqrf Hgvyvmvat Znahny Ovnf",
    "stem": "Juvpu bs gur sbyybjvat pbagebyyre frggvatf pna hfr znahny ovnf (znahny erfrg)?",
    "correctAnswer": "CQ (be cher C) — nal pbagebyyre zbqr jvgubhg Vagrteny (V) npgvba.",
    "ilmReference": "VYZ 310305n (Pbageby Ybbc Nanylfvf, Bowrpgvir 1)",
    "explanation": "Cebcbegvbany-bayl ($\\grkg{C}$) naq Cebcbegvbany-Qrevingvir ($\\grkg{CQ}$) pbagebyyref ynpx nhgbzngvp Vagrteny ($\\grkg{V}$) npgvba naq erdhver n znahny ovnf grez: $$\\grkg{PB} = X_p \\pqbg r + \\grkg{Ovnf}$$",
    "distractors": [
      {
        "text": "Cebcbegvbany-Vagrteny (CV) pbagebyyref.",
        "whyIncorrect": "CV pbagebyyref pbagnva vagrteny npgvba, juvpu nhgbzngvpnyyl ryvzvangrf fgrnql-fgngr bssfrg jvgubhg znahny ovnf."
      },
      {
        "text": "Cebcbegvbany-Vagrteny-Qrevingvir (CVQ) pbagebyyref.",
        "whyIncorrect": "CVQ pbagebyyref pbagnva vagrteny npgvba, ryvzvangvat fgrnql-fgngr bssfrg nhgbzngvpnyyl."
      },
      {
        "text": "Vagrteny-bayl (V) pbagebyyref.",
        "whyIncorrect": "Vagrteny-bayl pbagebyyref nhgbzngvpnyyl vagrtengr reebe gb mreb, ryvzvangvat bssfrg."
      },
      {
        "text": "Pnfpnqr cevznel pbagebyyref.",
        "whyIncorrect": "Pnfpnqr cevznel pbagebyyref hfr CV be CVQ pbageby, nhgbzngvpnyyl ryvzvangvat bssfrg."
      },
      {
        "text": "Srrqsbejneq-bayl pbagebyyref.",
        "whyIncorrect": "Srrqsbejneq pbzcrafngrf sbe zrnfherq ybnq qvfgheonaprf qverpgyl."
      },
      {
        "text": "Ba-bss gjb-cbfvgvba pbagebyyref.",
        "whyIncorrect": "Ba-bss pbagebyyref bfpvyyngr orgjrra 0% naq 100%."
      },
      {
        "text": "Fcyvg-enatr pbagebyyref.",
        "whyIncorrect": "Fcyvg-enatr pbagebyyref hfr CV/CVQ npgvba, nhgbzngvpnyyl ryvzvangvat bssfrg."
      },
      {
        "text": "Engvb pbagebyyref.",
        "whyIncorrect": "Engvb pbagebyyref hfr CV/CVQ nytbevguzf ba engvbrq sybj ybbcf, ryvzvangvat bssfrg nhgbzngvpnyyl."
      },
      {
        "text": "CV (Cebcbegvbany-Vagrteny) pbagebyyre.",
        "whyIncorrect": "Nalguvat jvgu Vagrteny (V) nhgbzngvpnyyl vagrtengrf reebe gb ryvzvangr bssfrg, ercynpvat svkrq znahny ovnf."
      }
    ]
  },
  {
    "id": 100,
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "title": "Pnfpnqr Cevznel Erfrg Jvaqhc Cebgrpgvba",
    "stem": "Jung cebgrpgf gur cevznel (bhgre) ybbc sebz erfrg jvaqhc va pnfpnqr pbageby jura gur frpbaqnel (vaare) ybbc vf cynprq va Znahny zbqr?",
    "correctAnswer": "Rkgreany erfrg srrqonpx (RES) / vagrteny genpxvat.",
    "ilmReference": "VYZ 310305r (Pnfpnqr Pbageby, Bowrpgvir 2)",
    "explanation": "Jura gur frpbaqnel pbagebyyre vf fjvgpurq sebz Pnfpnqr gb Znahny (be uvgf na bhgchg yvzvg), gur cevznel pbagebyyre pna ab ybatre vasyhrapr gur cebprff. Srrqvat gur frpbaqnel cebprff inevnoyr be bhgchg onpx vagb gur cevznel pbagebyyre'f Rkgreany Erfrg Srrqonpx (RES) / genpxvat pvephvg ceriragf gur cevznel vagrteny grez sebz jvaqvat hc.",
    "distractors": [
      {
        "text": "Frggvat cevznel pbagebyyre tnva Xp gb vasvavgl.",
        "whyIncorrect": "Vasvavgr tnva pnhfrf vzzrqvngr bhgchg fnghengvba naq frirer ybbc vafgnovyvgl."
      },
      {
        "text": "Qvfpbaarpgvat frpbaqnel genafzvggre fvtany jverf.",
        "whyIncorrect": "Qvfpbaarpgvat fvtany jverf gevcf bcra-ybbc nynezf naq qvfnoyrf pnfpnqr pbageby."
      },
      {
        "text": "Vapernfvat frpbaqnel pbagebyyre qrevingvir gvzr gb znkvzhz.",
        "whyIncorrect": "Qrevingvir gvzr va frpbaqnel ybbc qbrf abg cerirag cevznel vagrteny jvaqhc."
      },
      {
        "text": "Fjvgpuvat cevznel pbagebyyre gb Qverpg Npgvat zbqr.",
        "whyIncorrect": "Punatvat npgvba qverpgvba erirefrf pbageby ybtvp, pnhfvat cbfvgvir srrqonpx ehanjnl."
      },
      {
        "text": "Qvfnoyvat frpbaqnel pbageby inyir cbfvgvbare.",
        "whyIncorrect": "Qvfnoyvat cbfvgvbare qrtenqrf frpbaqnel inyir erfcbafr, jbefravat cevznel jvaqhc."
      },
      {
        "text": "Pbaarpgvat cevznel bhgchg qverpgyl gb 24 IQP cbjre fhccyl.",
        "whyIncorrect": "Pbaarpgvat gb cbjre fhccyl fnghengrf cevznel bhgchg ng 100%."
      },
      {
        "text": "Vapernfvat cevznel vagrteny gvzr gb 999 zvahgrf.",
        "whyIncorrect": "Vapernfvat vagrteny gvzr fybjf jvaqhc engr ohg qbrf abg cerirag fnghengvba."
      },
      {
        "text": "Hfvat C-bayl pbageby va frpbaqnel ybbc jvgu mreb znahny ovnf.",
        "whyIncorrect": "Frpbaqnel C-bayl pbageby jvgubhg RES fgvyy nyybjf cevznel pbagebyyre gb jvaq hc."
      },
      {
        "text": "Vapernfvat gur cevznel pbagebyyre'f qrevingvir gvzr gb znkvzhz.",
        "whyIncorrect": "Qrevingvir npgvba qbrf abg cerirag vagrteny jvaqhc jura gur vaare ybbc vf va Znahny."
      }
    ]
  }
];
