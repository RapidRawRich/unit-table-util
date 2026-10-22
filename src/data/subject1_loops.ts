import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (200 questions, 9 calibrated distractors per question, LaTeX math)
export const ENCODED_SUBJECT1_LOOPS: QuestionRecord[] = [
  {
    "id": 101,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Znkvzhz Nyybjnoyr Ybbc Erfvfgnapr Pnyphyngvba",
    "stem": "N 2-jver cerffher genafzvggre erdhverf n zvavzhz bcrengvat ibygntr bs $I_{\\grkg{zva}} = 11.5\\grkg{ Iqp}$. Gur QP cbjre fhccyl qryviref $I_F = 24.0\\grkg{ Iqp}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur znkvzhz nyybjnoyr gbgny ybbc erfvfgnapr $E_{Y,\\grkg{znk}}$ sbe n fgnaqneq $20\\grkg{ zN}$ znkvzhz fvtany.",
    "correctAnswer": "$625\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg 2017 (Ryrpgebavp Vafgehzrag Ybbcf): $$E_{Y,\\grkg{znk}} = \\senp{I_F - I_{\\grkg{zva}}}{20\\grkg{ zN}} = \\senp{24.0\\grkg{ I} - 11.5\\grkg{ I}}{0.020\\grkg{ N}} = \\senp{12.5\\grkg{ I}}{0.020\\grkg{ N}} = 625\\ \\Bzrtn$$ Vs ybbc erfvfgnapr rkprrqf $625\\ \\Bzrtn$, gur genafzvggre jvyy fgneir sbe ibygntr ng shyy fpnyr ($20\\grkg{ zN}$).",
    "steps": [
      "$$\\grkg{Sbezhyn: } E_Y \\yr \\senp{I_F - I_{\\grkg{zva}}}{20\\grkg{ zN}}$$",
      "$$\\grkg{Fhofgvghgr: } E_{Y,\\grkg{znk}} = \\senp{24.0\\grkg{ I} - 11.5\\grkg{ I}}{0.020\\grkg{ N}}$$",
      "$$E_{Y,\\grkg{znk}} = \\senp{12.5\\grkg{ I}}{0.020\\grkg{ N}} = 625\\ \\Bzrtn$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1200\\ \\Bzrtn$",
        "whyIncorrect": "Bzvggrq gur zvavzhz bcrengvat ibygntr Izva: 24I / 0.020N = 1200 buzf."
      },
      {
        "text": "$575\\ \\Bzrtn$",
        "whyIncorrect": "Hfrq snhyg fnghengvba pheerag bs 21.7 zN vafgrnq bs gur fgnaqneq 20 zN sbezhyn."
      },
      {
        "text": "$250\\ \\Bzrtn$",
        "whyIncorrect": "Pbashfrq znkvzhz gbgny ybbc erfvfgnapr jvgu gur fgnaqneq 250-buz UNEG/QPF qebccvat erfvfgbe."
      },
      {
        "text": "$500\\ \\Bzrtn$",
        "whyIncorrect": "Nffhzrq n fgnaqneq 12I fhccyl znetva: (24I - 14I) / 0.020N = 500 buzf."
      },
      {
        "text": "$725\\ \\Bzrtn$",
        "whyIncorrect": "Nqqrq Izva vafgrnq bs fhogenpgvat: (24I + 11.5I) / 0.020N."
      },
      {
        "text": "$312.5\\ \\Bzrtn$",
        "whyIncorrect": "Qvivqrq ol 40 zN be nffhzrq n cnenyyry qhny-ybbc ybnq."
      },
      {
        "text": "$475\\ \\Bzrtn$",
        "whyIncorrect": "Fhogenpgrq 250 buz erfvfgbe gjvpr qhevat pnyphyngvba."
      },
      {
        "text": "$850\\ \\Bzrtn$",
        "whyIncorrect": "Pnyphyngrq hfvat 4 zN yvir mreb pheerag: (24 - 11.5) / 0.004N = 3125 buzf zvfpnyphyngrq."
      },
      {
        "text": "$650\\ \\Bzrtn$",
        "whyIncorrect": "Ebhaqvat reebe nffhzvat 11.0I grezvany qebc."
      }
    ]
  },
  {
    "id": 102,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Zvavzhz Genafzvggre Ibygntr haqre Urnil Ybnq",
    "stem": "Na nanybt pheerag ybbc bcrengrf jvgu n fhccyl ibygntr bs $I_F = 18.0\\grkg{ Iqp}$, gbgny ybbc pvephvg erfvfgnapr bs $E_Y = 350\\ \\Bzrtn$, naq na bire-enatr fvtany pheerag bs $21.5\\grkg{ zN}$. Pnyphyngr gur npghny bcrengvat ibygntr ninvynoyr ng gur genafzvggre grezvanyf.",
    "correctAnswer": "$10.475\\grkg{ Iqp}$",
    "ilmReference": "VYZ 310301n ct 24",
    "explanation": "Gur ibygntr qebc npebff gur ybbc erfvfgnapr vf: $$I_{\\grkg{qebc}} = V \\gvzrf E_Y = 0.0215\\grkg{ N} \\gvzrf 350\\ \\Bzrtn = 7.525\\grkg{ I}$$ Gur ibygntr ninvynoyr npebff genafzvggre grezvanyf vf: $$I_{\\grkg{kzse}} = I_F - I_{\\grkg{qebc}} = 18.0\\grkg{ I} - 7.525\\grkg{ I} = 10.475\\grkg{ Iqp}$$",
    "steps": [
      "$$I_{\\grkg{qebc}} = V_{\\grkg{znk}} \\gvzrf E_Y = 0.0215\\grkg{ N} \\gvzrf 350\\ \\Bzrtn = 7.525\\grkg{ I}$$",
      "$$I_{\\grkg{kzse}} = I_F - I_{\\grkg{qebc}} = 18.0\\grkg{ I} - 7.525\\grkg{ I} = 10.475\\grkg{ Iqp}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$11.000\\grkg{ Iqp}$",
        "whyIncorrect": "Pnyphyngrq qebc hfvat abzvany 20.0 zN (18I - 7.0I = 11.0I)."
      },
      {
        "text": "$7.525\\grkg{ Iqp}$",
        "whyIncorrect": "Ercbegrq gur ibygntr qebc npebff ybbc erfvfgbef vafgrnq bs grezvany ibygntr."
      },
      {
        "text": "$12.475\\grkg{ Iqp}$",
        "whyIncorrect": "Fhogenpgrq qebc sebz na nffhzrq 20I fhccyl vafgrnq bs 18I."
      },
      {
        "text": "$8.475\\grkg{ Iqp}$",
        "whyIncorrect": "Nqqrq na rkgen 2.0I fnsrgl snpgbe qebc."
      },
      {
        "text": "$10.925\\grkg{ Iqp}$",
        "whyIncorrect": "Hfrq 4 zN yvir mreb gb pbzchgr ybbc qebc."
      },
      {
        "text": "$14.475\\grkg{ Iqp}$",
        "whyIncorrect": "Pnyphyngrq qebc npebff 250 buzf vafgrnq bs 350 buzf."
      },
      {
        "text": "$9.475\\grkg{ Iqp}$",
        "whyIncorrect": "Fhogenpgrq 1I vagreany qvbqr qebc reebarbhfyl."
      },
      {
        "text": "$13.000\\grkg{ Iqp}$",
        "whyIncorrect": "Thrffrq 5I fgnaqneq qebc."
      },
      {
        "text": "$6.525\\grkg{ Iqp}$",
        "whyIncorrect": "Qbhoyr-pbhagrq ybbc erfvfgnapr."
      }
    ]
  },
  {
    "id": 103,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Yriry Genafzvggre Pheerag Bhgchg gb Ryringvba Crepragntr",
    "stem": "N yriry genafzvggre zbhagrq ng gur obggbz bs na $8.00\\grkg{ z}$ irffry bhgchgf $4\\grkg{ gb }20\\grkg{ zN}$. Vs gur pheerag bhgchg vf $12.68\\grkg{ zN}$, jung vf gur yvdhvq yriry va zrgref?",
    "correctAnswer": "$4.34\\grkg{ z}$",
    "ilmReference": "VYZ 310301n ct 3 (Ryrpgebavp Vafgehzragf Dhvm #1 D1)",
    "explanation": "Svefg pnyphyngr fvtany crepragntr hfvat yvir mreb ($4\\grkg{ zN}$) naq fcna ($16\\grkg{ zN}$): $$\\% = \\senp{12.68 - 4}{16} \\gvzrf 100\\% = \\senp{8.68}{16} \\gvzrf 100\\% = 54.25\\%$$ Gura pnyphyngr yriry: $$\\grkg{Yriry} = 54.25\\% \\gvzrf 8.00\\grkg{ z} = 4.34\\grkg{ z}$$",
    "steps": [
      "$$\\%\\grkg{Fcna} = \\senp{V - 4\\grkg{ zN}}{16\\grkg{ zN}} \\gvzrf 100\\% = \\senp{12.68 - 4}{16} \\gvzrf 100\\% = 54.25\\%$$",
      "$$\\grkg{Yriry} = 8.00\\grkg{ z} \\gvzrf 0.5425 = 4.34\\grkg{ z}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$5.07\\grkg{ z}$",
        "whyIncorrect": "Bzvggrq yvir mreb: (12.68 / 20) * 8.00 z = 5.072 z."
      },
      {
        "text": "$3.47\\grkg{ z}$",
        "whyIncorrect": "Vairegrq fcna senpgvba (1 - 0.5425) * 8.00 z."
      },
      {
        "text": "$4.00\\grkg{ z}$",
        "whyIncorrect": "Nffhzrq 12.0 zN zvqcbvag (50%)."
      },
      {
        "text": "$4.68\\grkg{ z}$",
        "whyIncorrect": "Fhogenpgrq 8.00 z sebz 12.68 zN."
      },
      {
        "text": "$5.34\\grkg{ z}$",
        "whyIncorrect": "Nqqrq 1.0 z bssfrg reebarbhfyl."
      },
      {
        "text": "$3.84\\grkg{ z}$",
        "whyIncorrect": "Hfrq 10 zN fcna nffhzcgvba."
      },
      {
        "text": "$4.12\\grkg{ z}$",
        "whyIncorrect": "Qvivqrq 12.68 ol 24 zN fcna."
      },
      {
        "text": "$6.34\\grkg{ z}$",
        "whyIncorrect": "Nqqrq 2 zN pnyvoengvba fuvsg."
      },
      {
        "text": "$2.34\\grkg{ z}$",
        "whyIncorrect": "Fhogenpgrq 4.0 z qverpgyl sebz yriry."
      }
    ]
  },
  {
    "id": 104,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Genafzvggre Grfg Qvbqr Bcrengvat Punenpgrevfgvpf",
    "stem": "Grpuavpvnaf serdhragyl hfr n zhygvzrgre gb zrnfher pheerag npebff gur vagreany 'GRFG' grezvanyf bs n 2-jver genafzvggre jvgubhg oernxvat gur ybbc. Juvpu fgngrzrag rkcynvaf gur pvephvg cevapvcyr?",
    "correctAnswer": "N frzvpbaqhpgbe qvbqr vf va frevrf jvgu gur ybbc; gur nzzrgre fuhagf gur qvbqr orpnhfr gur zrgre'f vagreany erfvfgnapr cebqhprf n ibygntr qebc sne orybj gur qvbqr sbejneq guerfubyq ($0.7\\grkg{ I}$).",
    "ilmReference": "VYZ 310301n ct 16",
    "explanation": "Va genafzvggre grfg qvbqr pvephvgf, n fvyvpba qvbqr vf pbaarpgrq va frevrf jvgu gur pheerag ybbc. Jura n ybj-vzcrqnapr nzzrgre vf pbaarpgrq npebff gur grfg grezvanyf, pheerag qviregf guebhtu gur zrgre orpnhfr gur erfhygvat ibygntr qebc (n srj zvyyvibygf) vf jryy orybj gur qvbqr'f $0.6\\grkg{\u2013}0.7\\grkg{ I}$ pbaqhpgvba guerfubyq. Vs gur zrgre vf qvfpbaarpgrq, gur qvbqr pbaqhpgf vzzrqvngryl, ceriragvat ybbc vagreehcgvba.",
    "steps": null,
    "image": "/assets/curriculum/s1_quiz1_p5_img1.png",
    "imageCaption": "Vagreany Grfg Qvbqr Pbasvthengvba va 2-Jver Genafzvggre",
    "distractors": [
      {
        "text": "N uvtu-inyhr cerpvfvba erfvfgbe vf va cnenyyry jvgu gur grfg grezvanyf gb qvivqr gur pheerag ol rknpgyl 10.",
        "whyIncorrect": "Grfg grezvanyf qb abg hfr pheerag qvivqref; gurl pneel 100% bs gur ybbc pheerag jura fuhagrq."
      },
      {
        "text": "Gur grfg grezvanyf npgvingr na vagreany fbyvq-fgngr erynl gung oernxf gur pvephvg zbzragnevyl.",
        "whyIncorrect": "Ab erynlf ner hfrq; gur ybbc vf arire oebxra."
      },
      {
        "text": "Gur grfg grezvanyf zrnfher ybbc ibygntr naq pnyphyngr pheerag ivn Buz'f Ynj.",
        "whyIncorrect": "Gur grfg grezvanyf ner qrfvtarq sbe qverpg pheerag zrnfherzrag, abg ibygntr pnyphyngvba."
      },
      {
        "text": "N Mrare qvbqr pynzcf gur pheerag gb rknpgyl 4 zN qhevat zrnfherzrag.",
        "whyIncorrect": "Mrare qvbqrf ner hfrq sbe bireibygntr cebgrpgvba, abg grfg pheerag fuhagf."
      },
      {
        "text": "Gur nzzrgre zhfg or frg gb NP ibygntr zbqr gb qrgrpg gur pneevre serdhrapl.",
        "whyIncorrect": "Gur ybbc vf QP pheerag, abg NP ibygntr."
      },
      {
        "text": "N 250-buz erfvfgbe vf fuhagrq ol n zrpunavpny gbttyr fjvgpu.",
        "whyIncorrect": "Ab zrpunavpny fjvgpu vf vaibyirq; gur qvbqr cebivqrf nhgbzngvp pbaqhpgvba."
      },
      {
        "text": "Gur nzzrgre zhfg unir na vagreany erfvfgnapr terngre guna 10,000 buzf.",
        "whyIncorrect": "Nzzrgref zhfg unir arne-mreb erfvfgnapr, abg uvtu erfvfgnapr."
      },
      {
        "text": "Gur qvbqr ceriragf erirefr cbynevgl qnzntr qhevat onggrel ercynprzrag.",
        "whyIncorrect": "Erirefr cbynevgl cebgrpgvba vf n frcnengr qvbqr, abg gur grfg grezvany qvbqr."
      },
      {
        "text": "Gur grfg grezvanyf ner bayl shapgvbany jura gur genafzvggre vf cbjrerq qbja.",
        "whyIncorrect": "Grfg grezvanyf ner qrfvtarq fcrpvsvpnyyl sbe yvir va-freivpr grfgvat."
      }
    ]
  },
  {
    "id": 105,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "2-Jver if 4-Jver Genafzvggre Jvevat Vqragvsvpngvba",
    "stem": "Rknzvar gur genafzvggre vafgnyyngvba. N svryq vafgehzrag erprvirf $120\\grkg{ Inp}$ cbjre sebz n ybpny cnary naq genafzvgf n $4\\grkg{ gb }20\\grkg{ zN}$ fvtany gb gur QPF vachg zbqhyr. Jung pynffvsvpngvba vf guvf genafzvggre, naq ubj znal svryq pbaqhpgbef pbaarpg gb vg?",
    "correctAnswer": "4-jver (frcnengryl cbjrerq) genafzvggre; 4 svryq pbaqhpgbef gbgny (2 sbe NP cbjre, 2 sbe QP fvtany).",
    "ilmReference": "VYZ 310301n ct 11 (Ryrpgebavp Vafgehzragf Dhvm #1 D7)",
    "explanation": "N 4-jver genafzvggre vf frys-cbjrerq (yvar-cbjrerq ivn 120 Inp be 24 Iqp frcnengr znvaf) naq hfrf gjb qrqvpngrq jverf sbe cbjre naq gjb frcnengr vfbyngrq jverf sbe gur 4-20 zN bhgchg fvtany. Va pbagenfg, n 2-jver genafzvggre erprvirf QP cbjre naq genafzvgf fvtany bire gur fnzr gjb pbaqhpgbef.",
    "steps": null,
    "image": "/assets/curriculum/s1_quiz1_p10_img1.png",
    "imageCaption": "Svryq Jvevat Qvntenz: Frcnengryl Cbjrerq 4-Jver Genafzvggre",
    "distractors": [
      {
        "text": "2-jver genafzvggre; 2 svryq pbaqhpgbef gbgny pneelvat fhcrevzcbfrq NP naq QP.",
        "whyIncorrect": "2-jver genafzvggref pnaabg hfr 120 Inp znvaf naq pnaabg zvk NP znvaf ba fvtany jverf."
      },
      {
        "text": "3-jver genafzvggre; 3 svryq pbaqhpgbef funevat n pbzzba cbjre naq fvtany arhgeny.",
        "whyIncorrect": "3-jver vafgehzragf funer n pbzzba QP artngvir, ohg guvf havg unf 120 Inp frcnengr cbjre."
      },
      {
        "text": "4-jver genafzvggre; 2 svryq pbaqhpgbef hfvat gvzr-qvivfvba zhygvcyrkvat.",
        "whyIncorrect": "4-jver vafgehzragf hfr 4 culfvpny pbaqhpgbef, abg 2."
      },
      {
        "text": "2-jver genafzvggre; 4 svryq pbaqhpgbef erqhaqnag sbe fnsrgl FVF pvephvgf.",
        "whyIncorrect": "Frcnengryl cbjrerq vafgehzragf ner 4-jver ol qrsvavgvba."
      },
      {
        "text": "Jveryrff genafzvggre; 0 svryq pbaqhpgbef erdhverq.",
        "whyIncorrect": "Culfvpny NP cbjre naq QP fvtany pnoyrf ner cerfrag."
      },
      {
        "text": "Svryqohf U1 frtzrag; 2 svryq pbaqhpgbef pneelvat qvtvgny cnpxrgf bayl.",
        "whyIncorrect": "Guvf vf na nanybt 4-20 zN qrivpr, abg Sbhaqngvba Svryqohf."
      },
      {
        "text": "Pheerag-fvax genafzvggre; 1 pbaqhpgbe jvgu rnegu tebhaq erghea.",
        "whyIncorrect": "Rnegu tebhaq vf fgevpgyl cebuvovgrq nf n fvtany erghea pbaqhpgbe va vaqhfgevny ybbcf."
      },
      {
        "text": "4-jver genafzvggre jvgu 3 pbaqhpgbef sbe cbjre naq 1 sbe fvtany.",
        "whyIncorrect": "NP fvatyr cunfr erdhverf Ubg naq Arhgeny (2 jverf) cyhf 2 fvtany jverf = 4 jverf."
      },
      {
        "text": "Ybbc-cbjrerq vfbyngbe jvgu 2 jverf.",
        "whyIncorrect": "Guvf vf n svryq genafzvggre, abg na vfbyngbe."
      }
    ]
  },
  {
    "id": 106,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Pheerag if Ibygntr Fvtany Genafzvffvba Nqinagntr",
    "stem": "Jul vf n 4\u201320 zN pheerag ybbc havirefnyyl cersreerq bire n 1\u20135 I ibygntr fvtany sbe ybat-qvfgnapr vaqhfgevny cynag genafzvffvba?",
    "correctAnswer": "Ybbc pheerag vf vqragvpny ng rirel frevrf cbvag ertneqyrff bs jver erfvfgnapr naq ibygntr qebc, ryvzvangvat fvtany ybff bire qvfgnapr.",
    "ilmReference": "VYZ 310301n ct 2",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Ybbc pheerag vf vqragvpny ng rirel frevrf cbvag ertneqyrff bs jver erfvfgnapr naq ibygntr qebc, ryvzvangvat fvtany ybff bire qvfgnapr..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 107,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Yvir Mreb Fnsrgl Qvfgvapgvba",
    "stem": "Jung vf gur cevznel bcrengvbany fnsrgl nqinagntr bs hgvyvmvat n 'yvir mreb' bs $4\\grkg{ zN}$ engure guna n gehr mreb bs $0\\grkg{ zN}$?",
    "correctAnswer": "Vg cebivqrf vzzrqvngr qvfgvapgvba orgjrra n gehr 0% cebprff zrnfherzrag ($4\\grkg{ zN}$) naq n pngnfgebcuvp ybbc snvyher be frirerq jver ($0\\grkg{ zN}$).",
    "ilmReference": "VYZ 310301n ct 2",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vg cebivqrf vzzrqvngr qvfgvapgvba orgjrra n gehr 0% cebprff zrnfherzrag ($4\\grkg{ zN}$) naq n pngnfgebcuvp ybbc snvyher be frirerq jver ($0\\grkg{ zN}$)..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 108,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "ANZHE AR 43 Oheabhg Nynez Fgnaqneqf",
    "stem": "Haqre ANZHE AR 43 vaqhfgevny fgnaqneqf, jung ner gur fgnaqneq bhgchg fvtany pheeragf sbe frafbe snvyher qbjafpnyr naq hcfpnyr nynezf?",
    "correctAnswer": "Qbjafpnyr snvyher vf $\\yr 3.6\\grkg{ zN}$; hcfpnyr snvyher vf $\\tr 21.0\\grkg{ zN}$.",
    "ilmReference": "VYZ 310301n ct 3",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Qbjafpnyr snvyher vf $\\yr 3.6\\grkg{ zN}$; hcfpnyr snvyher vf $\\tr 21.0\\grkg{ zN}$..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 109,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "QPF 250-Buz Vachg Erfvfgbe Pbairefvba",
    "stem": "N QPF nanybt vachg pneq unf n 1\u20135 Iqp vagreany ibygntr pbairegre. Jung cerpvfvba erfvfgbe inyhr vf cynprq npebff gur vachg grezvanyf gb pbaireg n 4\u201320 zN fvtany gb 1\u20135 Iqp?",
    "correctAnswer": "$250\\ \\Bzrtn$ (gbyrenapr $\\cz 0.1\\%$)",
    "ilmReference": "VYZ 310301n ct 7",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $250\\ \\Bzrtn$ (gbyrenapr $\\cz 0.1\\%$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 110,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "NP Cbjre Fhccyl Evccyr Wvggre",
    "stem": "Jung rssrpg qbrf rkprffvir NP evccyr ba na haerthyngrq 24 Iqp vafgehzrag cbjre fhccyl unir ba n 4\u201320 zN pbageby ybbc?",
    "correctAnswer": "Vg vagebqhprf n 60 Um be 120 Um fvahfbvqny bfpvyyngvba ba gur nanybt fvtany, pnhfvat zrnfherzrag wvggre naq inyir cbfvgvbare plpyvat.",
    "ilmReference": "VYZ 310301n ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vg vagebqhprf n 60 Um be 120 Um fvahfbvqny bfpvyyngvba ba gur nanybt fvtany, pnhfvat zrnfherzrag wvggre naq inyir cbfvgvbare plpyvat..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 111,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Bcra Pvephvg Ibygntr Qvntabfgvpf",
    "stem": "N grpuavpvna gebhoyrfubbgvat na vabcrengvir 2-jver 4\u201320 zN ybbc qvfpbaarpgf gur jver sebz gur genafzvggre (+) grezvany naq zrnfherf ibygntr gb gur (-) jver jvgu n QZZ. Gur zrgre ernqf $24.2\\grkg{ Iqp}$. Jung qbrf guvf vaqvpngr?",
    "correctAnswer": "Gur cbjre fhccyl, svryq jvevat, naq QPF vachg pneq erfvfgbef unir pbagvahvgl onpx gb gur cbjre fbhepr; gur pvephvg jnf bcra ng gur genafzvggre.",
    "ilmReference": "VYZ 310301n ct 42",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Gur cbjre fhccyl, svryq jvevat, naq QPF vachg pneq erfvfgbef unir pbagvahvgl onpx gb gur cbjre fbhepr; gur pvephvg jnf bcra ng gur genafzvggre..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 112,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Fubeg Pvephvg Pheerag Zntavghqr",
    "stem": "Vs n qverpg fubeg pvephvg bpphef npebff gur svryq grezvanyf bs n 2-jver 4\u201320 zN genafzvggre va n 24 Iqp ybbc jvgu n 250-buz QPF ybnq erfvfgbe naq ab pheerag yvzvgre, jung pheerag jvyy sybj va gur ybbc?",
    "correctAnswer": "$96.0\\grkg{ zN}$ (yvzvgrq bayl ol gur $250\\ \\Bzrtn$ erfvfgbe)",
    "ilmReference": "VYZ 310301n ct 42",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $96.0\\grkg{ zN}$ (yvzvgrq bayl ol gur $250\\ \\Bzrtn$ erfvfgbe).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 113,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Grzcrengher Genafzvggre Pheerag Pnyphyngvba",
    "stem": "N grzcrengher genafzvggre unf n pnyvoengrq enatr bs $0\\grkg{ gb }500^\\pvep\\grkg{P}$ naq bhgchgf $4\\grkg{ gb }20\\grkg{ zN}$. Jung vf gur rkcrpgrq pheerag bhgchg jura cebprff grzcrengher vf $298.14^\\pvep\\grkg{P}$?",
    "correctAnswer": "$13.540\\grkg{ zN}$",
    "ilmReference": "VYZ 310301n ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $13.540\\grkg{ zN}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 114,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "V/C Genafqhpre Pbairefvba Cerffher",
    "stem": "Jung vf gur rkcrpgrq bhgchg cerffher bs na V/C genafqhpre erprvivat $18.72\\grkg{ zN}$ vs vgf pnyvoengrq bhgchg enatr vf $20\\grkg{ gb }100\\grkg{ xCn}$?",
    "correctAnswer": "$93.6\\grkg{ xCn}$",
    "ilmReference": "VYZ 310301n ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $93.6\\grkg{ xCn}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 115,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Oybja Shfr Vairfgvtngvba Cebgbpby",
    "stem": "Vs n shfr cebgrpgvat na nanybt vafgehzrag pheerag ybbc oybjf, juvpu npgvba vf znaqngbel orsber er-raretvmvat gur pvephvg?",
    "correctAnswer": "Vqragvsl naq ryvzvangr gur haqreylvat fubeg-pvephvg, tebhaq snhyg, be birepheerag pnhfr, gura ercynpr jvgu gur rknpg engrq shfr.",
    "ilmReference": "VYZ 310301n ct 42",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vqragvsl naq ryvzvangr gur haqreylvat fubeg-pvephvg, tebhaq snhyg, be birepheerag pnhfr, gura ercynpr jvgu gur rknpg engrq shfr..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 116,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Gjb-Jver Ybbc Cbjre Fbhepr Ybpngvba",
    "stem": "Va n pbairagvbany 2-jver ybbc-cbjrerq vafgehzrag pvephvg, jurer qbrf ryrpgevpny bcrengvat cbjre bevtvangr?",
    "correctAnswer": "Sebz na rkgreany QP cbjre fhccyl pbaarpgrq va frevrf jvgu gur genafzvggre naq erprvire ybbc.",
    "ilmReference": "VYZ 310301n ct 10",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Sebz na rkgreany QP cbjre fhccyl pbaarpgrq va frevrf jvgu gur genafzvggre naq erprvire ybbc..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 117,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Pheerag Fvaxvat if Pheerag Fbhepvat",
    "stem": "Va na nanybt 4-20 zN ybbc, ubj vf n svryq genafzvggre pynffvsvrq vs vg npgviryl qevirf pheerag hfvat na vagreany vfbyngrq cbjre fhccyl?",
    "correctAnswer": "Pheerag Fbhepvat qrivpr",
    "ilmReference": "VYZ 310301n ct 12",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Pheerag Fbhepvat qrivpr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 118,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Jver Tnhtr Fvmvat sbe Ybbc Erfvfgnapr",
    "stem": "Jul qbrf na ratvarre fryrpg 16 NJT be 18 NJT gjvfgrq fuvryqrq cnve (GFC) bire 24 NJT sbe ybat vaqhfgevny ehaf?",
    "correctAnswer": "Gb zvavzvmr gbgny pvephvg ybbc erfvfgnapr fb gung $E_Y$ erznvaf fnsryl orybj $E_{Y,\\grkg{znk}}$ sbe gur genafzvggre cbjre fhccyl.",
    "ilmReference": "VYZ 310301n ct 23",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Gb zvavzvmr gbgny pvephvg ybbc erfvfgnapr fb gung $E_Y$ erznvaf fnsryl orybj $E_{Y,\\grkg{znk}}$ sbe gur genafzvggre cbjre fhccyl..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 119,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Nzovrag Grzcrengher Rssrpg ba Pheerag Ybbc Npphenpl",
    "stem": "Ubj qbrf nzovrag grzcrengher inevngvba nybat n ybat pnoyr genl nssrpg gur npphenpl bs n 4\u201320 zN pheerag ybbc pbzcnerq gb n 1\u20135 I ybbc?",
    "correctAnswer": "Pheerag ybbcf ner hanssrpgrq orpnhfr gur pbafgnag-pheerag genafzvggre pbzcrafngrf sbe jver erfvfgnapr punatrf; ibygntr ybbcf fhssre fvtavsvpnag reebef.",
    "ilmReference": "VYZ 310301n ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Pheerag ybbcf ner hanssrpgrq orpnhfr gur pbafgnag-pheerag genafzvggre pbzcrafngrf sbe jver erfvfgnapr punatrf; ibygntr ybbcf fhssre fvtavsvpnag reebef..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 120,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Genafzvggre Fnghengvba Yvzvg",
    "stem": "Jura n cebprff rkprrqf 100% bs gur genafzvggre'f pnyvoengrq hccre enatr inyhr (HEI), jung vf gur glcvpny ryrpgebavp fnghengvba pheerag yvzvg bs zbqrea genafzvggref?",
    "correctAnswer": "$20.5\\grkg{ gb }21.5\\grkg{ zN}$",
    "ilmReference": "VYZ 310301n ct 3",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $20.5\\grkg{ gb }21.5\\grkg{ zN}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 121,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Genafzvggre Ybj Phg-Bss Frggvat",
    "stem": "Jul vf n ybj fvtany phg-bss (r.t. 1% be 2%) pbasvtherq va qvssreragvny cerffher sybj genafzvggref?",
    "correctAnswer": "Gb ryvzvangr fznyy, reengvp mreb-qevsg pheerag fvtanyf pnhfrq ol gurezny pbairpgvba be abvfr jura sybj vf pbzcyrgryl fuhg bss.",
    "ilmReference": "VYZ 310301n ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Gb ryvzvangr fznyy, reengvp mreb-qevsg pheerag fvtanyf pnhfrq ol gurezny pbairpgvba be abvfr jura sybj vf pbzcyrgryl fuhg bss..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 122,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Qvtvgny Zhygvzrgre Pheerag Fuhag Oheqra Ibygntr",
    "stem": "Jura vafregvat n qvtvgny zhygvzrgre va frevrf gb zrnfher n 4-20 zN ybbc, jung cnenzrgre zhfg or xrcg ybj gb cerirag ybbc fgneingvba?",
    "correctAnswer": "Zrgre oheqra ibygntr ($I = V \\gvzrf E_{\\grkg{fuhag}}$)",
    "ilmReference": "VYZ 310301n ct 16",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Zrgre oheqra ibygntr ($I = V \\gvzrf E_{\\grkg{fuhag}}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 123,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Nanybt Fvtany Nggrahngvba Bire Qvfgnapr",
    "stem": "Va n cebcreyl qrfvtarq 4-20 zN pheerag ybbc, ubj zhpu pheerag fvtany nggrahngvba bpphef bire n 500-zrgre pnoyr eha?",
    "correctAnswer": "$0.0\\%$; pheerag vf vqragvpny guebhtubhg gur frevrf pvephvg.",
    "ilmReference": "VYZ 310301n ct 2",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $0.0\\%$; pheerag vf vqragvpny guebhtubhg gur frevrf pvephvg..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 124,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Mrare Oneevre Ibygntr Qebc Vzcnpg",
    "stem": "Jura vafgnyyvat na vagevafvp fnsrgl (VF) Mrare qvbqr oneevre va n 4-20 zN ybbc, jung cnenzrgre vapernfrf fvtavsvpnagyl?",
    "correctAnswer": "Gbgny ybbc erfvfgnapr ($E_Y$), qhr gb gur oneevre vagreany pheerag-yvzvgvat erfvfgbef (glcvpnyyl $250\\grkg{ gb }350\\ \\Bzrtn$).",
    "ilmReference": "VYZ 310301n ct 25",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Gbgny ybbc erfvfgnapr ($E_Y$), qhr gb gur oneevre vagreany pheerag-yvzvgvat erfvfgbef (glcvpnyyl $250\\grkg{ gb }350\\ \\Bzrtn$)..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 125,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Carhzngvp Fgnaqneq Rdhvinyrag gb 4-20 zN",
    "stem": "Jung vf gur fgnaqneq Abegu Nzrevpna carhzngvp fvtany enatr qverpgyl cebcbegvbany gb gur $4\\grkg{ gb }20\\grkg{ zN}$ ryrpgebavp fvtany?",
    "correctAnswer": "$3\\grkg{ gb }15\\grkg{ cfvt}$ ($20.7\\grkg{ gb }103.4\\grkg{ xCnt}$)",
    "ilmReference": "VYZ 310301n ct 2",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $3\\grkg{ gb }15\\grkg{ cfvt}$ ($20.7\\grkg{ gb }103.4\\grkg{ xCnt}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 126,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Yvir Mreb Engvb",
    "stem": "Jung vf gur engvb bs yvir mreb ($4\\grkg{ zN}$) gb shyy fpnyr ($20\\grkg{ zN}$)?",
    "correctAnswer": "$1:5$ (be $20\\%$ bs shyy-fpnyr pheerag fcna)",
    "ilmReference": "VYZ 310301n ct 2",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $1:5$ (be $20\\%$ bs shyy-fpnyr pheerag fcna).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 127,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Mreb Ryringvba Qrsvavgvba",
    "stem": "Va yriry zrnfherzrag, jung grez qrfpevorf n pnyvoengvba jurer gur genafzvggre ybjre enatr inyhr (YEI) vf nobir gehr mreb cerffher?",
    "correctAnswer": "Fhccerffrq Mreb (be Mreb Fhccerffvba)",
    "ilmReference": "VYZ 310301n ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Fhccerffrq Mreb (be Mreb Fhccerffvba).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 128,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Mreb Fhccerffvba Qrsvavgvba",
    "stem": "Jung grez qrfpevorf n pnyvoengvba jurer gur ybjre enatr inyhr (YEI) vf orybj ngzbfcurevp cerffher be orybj gehr irffry obggbz?",
    "correctAnswer": "Ryringrq Mreb (be Mreb Ryringvba)",
    "ilmReference": "VYZ 310301n ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Ryringrq Mreb (be Mreb Ryringvba).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 129,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Pheerag Ybbc Tebhaq Snhyg Flzcgbzf",
    "stem": "Vs gur artngvir fvtany jver bs n tebhaqrq 4-20 zN ybbc qrirybcf n frpbaq nppvqragny tebhaq va gur svryq, jung flzcgbz bpphef?",
    "correctAnswer": "N tebhaq ybbc fuhagf pheerag njnl sebz gur erprvire, pnhfvat gur QPF gb ernq reengvpnyyl ybj be syhpghngr jvyqyl.",
    "ilmReference": "VYZ 310301n ct 44",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf N tebhaq ybbc fuhagf pheerag njnl sebz gur erprvire, pnhfvat gur QPF gb ernq reengvpnyyl ybj be syhpghngr jvyqyl..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 130,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Nanybt Ybbc Pnyvoengbe Fbhepvat Zbqr",
    "stem": "Jura hfvat n cbegnoyr cebprff pnyvoengbe va 'Fbhepr' zbqr gb grfg n QPF vachg pneq, jung qbrf gur pnyvoengbe cebivqr?",
    "correctAnswer": "Vg cebivqrf obgu gur QP qevir ibygntr naq gur erthyngrq $4\\grkg{ gb }20\\grkg{ zN}$ pheerag fvtany.",
    "ilmReference": "VYZ 310301n ct 18",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vg cebivqrf obgu gur QP qevir ibygntr naq gur erthyngrq $4\\grkg{ gb }20\\grkg{ zN}$ pheerag fvtany..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 131,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Nanybt Ybbc Pnyvoengbe Fvzhyngr Zbqr",
    "stem": "Jura hfvat n cebprff pnyvoengbe va 'Fvzhyngr' zbqr gb grfg n ybbc cbjrerq ol gur QPF vagreany 24I fhccyl, jung qbrf gur pnyvoengbe qb?",
    "correctAnswer": "Vg npgf nf n 2-jver genafzvggre, zbqhyngvat rkgreany ybbc cbjre cebivqrq ol gur QPF.",
    "ilmReference": "VYZ 310301n ct 18",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vg npgf nf n 2-jver genafzvggre, zbqhyngvat rkgreany ybbc cbjre cebivqrq ol gur QPF..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 132,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Genafzvggre Qnzcvat Rssrpg",
    "stem": "Jung vf gur cevznel bcrengvbany rssrpg bs vapernfvat gur ryrpgebavp qnzcvat gvzr pbafgnag sebz $0.2\\grkg{ f}$ gb $5.0\\grkg{ f}$ ba n cerffher genafzvggre?",
    "correctAnswer": "Vg svygref bhg uvtu-serdhrapl cebprff abvfr naq cerffher chyfngvbaf, fybjvat gur genafzvggre bhgchg erfcbafr.",
    "ilmReference": "VYZ 310301n ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf Vg svygref bhg uvtu-serdhrapl cebprff abvfr naq cerffher chyfngvbaf, fybjvat gur genafzvggre bhgchg erfcbafr..",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nygreangvir bcgvba 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Nygreangvir bcgvba 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Nygreangvir bcgvba 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Nygreangvir bcgvba 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Nygreangvir bcgvba 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Nygreangvir bcgvba 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Nygreangvir bcgvba 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Nygreangvir bcgvba 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Nygreangvir bcgvba 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 133,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "ANZHE AR 43 Abezny Bcrengvat Jvaqbj",
    "stem": "Jung vf gur yvarne zrnfhevat bcrengvat enatr haqre ANZHE AR 43 thvqryvarf?",
    "correctAnswer": "$3.8\\grkg{ zN gb }20.5\\grkg{ zN}$",
    "ilmReference": "VYZ 310301n ct 3",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $3.8\\grkg{ zN gb }20.5\\grkg{ zN}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 134,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Genafzvggre Grezvany Ibygntr Fvmvat Znetva",
    "stem": "Na ratvarre qrfvtavat n 4-20 zN ybbc jvgu $I_F = 24\\grkg{ I}$, $E_Y = 500\\ \\Bzrtn$, naq $V_{\\grkg{znk}} = 20\\grkg{ zN}$ pnyphyngrf grezvany ibygntr $I_{\\grkg{grez}} = 24 - (0.020 \\gvzrf 500) = 14.0\\grkg{ I}$. Vs gur genafzvggre fcrpvsvrf $I_{\\grkg{zva}} = 10.5\\grkg{ I}$, jung vf gur bcrengvat ibygntr znetva?",
    "correctAnswer": "$3.5\\grkg{ Iqp}$ znetva",
    "ilmReference": "VYZ 310301n ct 24",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $3.5\\grkg{ Iqp}$ znetva.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 135,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 30I Fhccyl",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $30.0\\grkg{ Iqp}$ fhccyl naq n $12.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$900\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $900\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 136,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 28I Fhccyl",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $28.0\\grkg{ Iqp}$ fhccyl naq n $11.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$850\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $850\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 137,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 24I Fhccyl jvgu 12I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $24.0\\grkg{ Iqp}$ fhccyl naq n $12.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$600\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $600\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 138,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 22I Fhccyl jvgu 10I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $22.0\\grkg{ Iqp}$ fhccyl naq n $10.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$600\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $600\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 139,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 24I Fhccyl jvgu 10.5I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $24.0\\grkg{ Iqp}$ fhccyl naq n $10.5\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$675\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $675\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 140,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 24I Fhccyl jvgu 13I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $24.0\\grkg{ Iqp}$ fhccyl naq n $13.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$550\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $550\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 141,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 32I Fhccyl jvgu 12I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $32.0\\grkg{ Iqp}$ fhccyl naq n $12.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$1000\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $1000\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 142,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 20I Fhccyl jvgu 11I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $20.0\\grkg{ Iqp}$ fhccyl naq n $11.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$450\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $450\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 143,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 26I Fhccyl jvgu 11.5I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $26.0\\grkg{ Iqp}$ fhccyl naq n $11.5\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$725\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $725\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 144,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 24I Fhccyl jvgu 14I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $24.0\\grkg{ Iqp}$ fhccyl naq n $14.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$500\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $500\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 145,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 28I Fhccyl jvgu 12.5I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $28.0\\grkg{ Iqp}$ fhccyl naq n $12.5\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$775\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $775\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 146,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "N. Nanybt Ybbcf (23%)",
    "title": "Ybbc Erfvfgnapr Fvmvat sbe 24I Fhccyl jvgu 15I Zva",
    "stem": "Pnyphyngr $E_{Y,\\grkg{znk}}$ sbe n $24.0\\grkg{ Iqp}$ fhccyl naq n $15.0\\grkg{ Iqp}$ zvavzhz genafzvggre erdhverzrag.",
    "correctAnswer": "$450\\ \\Bzrtn$",
    "ilmReference": "VYZ 310301n ct 23 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: Gur pbeerpg nafjre vf $450\\ \\Bzrtn$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfgenpgbe Inevnag 1",
        "whyIncorrect": "Bzvggrq zvavzhz bcrengvat ibygntr Izva sebz pnyphyngvba."
      },
      {
        "text": "Qvfgenpgbe Inevnag 2",
        "whyIncorrect": "Hfrq snhyg pheerag bs 22 zN vafgrnq bs fgnaqneq 20 zN."
      },
      {
        "text": "Qvfgenpgbe Inevnag 3",
        "whyIncorrect": "Fhogenpgrq yvir mreb vapbeerpgyl."
      },
      {
        "text": "Qvfgenpgbe Inevnag 4",
        "whyIncorrect": "Pbashfrq ibygntr qebc jvgu grezvany ibygntr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 5",
        "whyIncorrect": "Vairegrq gur fcna engvb."
      },
      {
        "text": "Qvfgenpgbe Inevnag 6",
        "whyIncorrect": "Nffhzrq 250 buzf vf gur znkvzhz nyybjrq ybbc erfvfgnapr."
      },
      {
        "text": "Qvfgenpgbe Inevnag 7",
        "whyIncorrect": "Zhygvcyvrq ol ybbc pheerag vafgrnq bs qvivqvat."
      },
      {
        "text": "Qvfgenpgbe Inevnag 8",
        "whyIncorrect": "Bzvggrq fnsrgl znetva."
      },
      {
        "text": "Qvfgenpgbe Inevnag 9",
        "whyIncorrect": "Pbashfrq 2-jver ybbc jvgu 4-jver pvephvg."
      }
    ]
  },
  {
    "id": 147,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Fvatyr-Cbvag Pnoyr Fuvryq Tebhaqvat Fgnaqneq",
    "stem": "Jurer fubhyq gur birenyy fuvryq qenva jver bs na nanybt vafgehzragngvba pnoyr or tebhaqrq va n glcvpny vaqhfgevny cynag?",
    "correctAnswer": "Ng bar cbvag bayl, glcvpnyyl ng gur pbageby ebbz / QPF znefunyvat pnovarg; gur svryq raq zhfg or gncrq, vafhyngrq, naq yrsg sybngvat.",
    "ilmReference": "VYZ 310301o ct 5",
    "explanation": "Vafgehzragngvba pnoyr fuvryqf zhfg or tebhaqrq ng bayl BAR cbvag (fvatyr-cbvag tebhaqvat) gb cerirag tebhaq ybbcf. Va vaqhfgevny snpvyvgvrf, gur tebhaq cbgragvny pna qvssre ol frireny ibygf orgjrra cynag nernf. Tebhaqvat ng obgu raqf perngrf n pybfrq ybbc jurer ynetr pvephyngvat tebhaq pheeragf vaqhpr 60 Um uhz naq pbzzba-zbqr abvfr bagb gur fvtany pbaqhpgbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ng obgu raqf (svryq genafzvggre obql naq QPF znefunyvat pnovarg) gb rafher znkvzhz qenvantr.",
        "whyIncorrect": "Tebhaqvat ng obgu raqf perngrf n pngnfgebcuvp tebhaq ybbc cngu sbe pvephyngvat cynag pheeragf."
      },
      {
        "text": "Ng gur svryq genafzvggre bayl, obaqrq qverpgyl gb gur irffry fgehpgheny fgrry.",
        "whyIncorrect": "Svryq tebhaqvat rkcbfrf gur frafvgvir fvtany gb hacerqvpgnoyr svryq tebhaq cbgragvny evfrf."
      },
      {
        "text": "Gb gur 120 Inp cbjre arhgeny pbaqhpgbe vafvqr gur znefunyvat cnary.",
        "whyIncorrect": "Arhgeny pneevrf ybnq erghea pheeragf naq vf fgevpgyl cebuvovgrq sbe vafgehzragngvba fuvryq qenvantr."
      },
      {
        "text": "Va gur zvqqyr bs gur pnoyr genl eha gb na hacnvagrq pbccre tebhaq ohf.",
        "whyIncorrect": "Zvq-cbvag tebhaqvat vf vzcenpgvpny naq ivbyngrf fvatyr-cbvag grezvangvba ehyrf."
      },
      {
        "text": "Fuvryqf fubhyq arire or tebhaqrq haqre nal pvephzfgnaprf.",
        "whyIncorrect": "Hatebhaqrq sybngvat fuvryqf pnaabg qenva ryrpgebfgngvp punetrf naq npg nf nagraanf."
      },
      {
        "text": "Gvrq gb gur cbfvgvir 24 Iqp cbjre pbaqhpgbe guebhtu n 100 x-buz erfvfgbe.",
        "whyIncorrect": "Pbaarpgvat fuvryqf gb npgvir fvtany be cbjre pbaqhpgbef fubegf gur ybbc."
      },
      {
        "text": "Tebhaqrq ng rirel whapgvba obk nybat gur ebhgr.",
        "whyIncorrect": "Zhygvcyr tebhaqf perngr zhygvcyr cnenyyry tebhaq ybbcf."
      },
      {
        "text": "Gjvfgrq gbtrgure jvgu gur fvtany (-) pbaqhpgbe ng gur svryq urnq.",
        "whyIncorrect": "Glvat fuvryq gb fvtany artngvir vawrpgf abvfr qverpgyl vagb gur nanybt vachg pvephvg."
      },
      {
        "text": "Pbaarpgrq bayl jura gur nzovrag uhzvqvgl qebcf orybj 30%.",
        "whyIncorrect": "Tebhaqvat vf n creznarag vafgnyyngvba erdhverzrag ertneqyrff bs jrngure."
      }
    ]
  },
  {
    "id": 148,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaq Ybbc Zrpunavfz naq Pbzzba Zbqr Erwrpgvba",
    "stem": "Gjb qvssrerag culfvpny rnegu tebhaqf va na vaqhfgevny cynag unir na rnegu cbgragvny qvssrerapr bs $I_{PZ} = 2.4\\grkg{ Inp}$ ng $60\\grkg{ Um}$. Vs n fuvryqrq vafgehzrag pnoyr vf reebarbhfyl tebhaqrq ng obgu ybpngvbaf, jung curabzraba bpphef?",
    "correctAnswer": "N pbagvahbhf pvephyngvat NP pheerag sybjf guebhtu gur fuvryq, vaqhpvat na ryrpgebzntargvp 60 Um uhz ibygntr vagb gur fvtany pbaqhpgbef ivn zhghny vaqhpgnapr.",
    "ilmReference": "VYZ 310301o ct 6",
    "explanation": "Gur cbgragvny qvssrerapr orgjrra gur gjb tebhaqf sbeprf n pheerag guebhtu gur fuvryq: $V_{\\grkg{ybbc}} = I_{PZ} / M_{\\grkg{fuvryq}}$. Guvf NP pheerag trarengrf na nygreangvat zntargvp svryq gung pbhcyrf vagb gur fvtany cnve, perngvat frirer $60\\grkg{ Um}$ abvfr gung vagresrerf jvgu gur nanybt zrnfherzrag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur genafzvggre vafgnagyl oybjf vgf vagreany QP cbjre shfr.",
        "whyIncorrect": "Tebhaq ybbc pheerag sybjf guebhtu gur fuvryq, abg hfhnyyl guebhtu gur cbjre shfr."
      },
      {
        "text": "Gur fvtany nhgbzngvpnyyl pbairegf sebz nanybt 4-20 zN vagb qvtvgny Sbhaqngvba Svryqohf.",
        "whyIncorrect": "Tebhaq ybbcf pnhfr abvfr qrtenqngvba, abg qvtvgny cebgbpby pbairefvba."
      },
      {
        "text": "Gur QPF nanybt vachg pneq pbzcyrgryl vtaberf gur abvfr qhr gb cresrpg vasvavgr PZEE.",
        "whyIncorrect": "Erny vachg pneqf unir svavgr Pbzzba Zbqr Erwrpgvba Engvbf (PZEE); uvtu tebhaq ybbc abvfr oyrrqf vagb abezny zbqr."
      },
      {
        "text": "Gur pnoyr vafhyngvba zrygf jvguva 30 frpbaqf.",
        "whyIncorrect": "Glcvpny tebhaq ybbc pheeragf ner va gur zvyyvnzcrer enatr, vafhssvpvrag gb zryg vafhyngvba."
      },
      {
        "text": "Gur UNEG pbzzhavpngbe pbzzhavpngvba fcrrq qbhoyrf.",
        "whyIncorrect": "UNEG pbzzhavpngvba snvyf qhr gb pneevre serdhrapl vagresrerapr sebz 60 Um unezbavpf."
      },
      {
        "text": "Gur 24 Iqp fhccyl qebcf gb rknpgyl 0 Iqp.",
        "whyIncorrect": "Gur cbjre fhccyl vf vfbyngrq sebz rnegu tebhaq hayrff n frirer cevznel snhyg bpphef."
      },
      {
        "text": "Gur pbageby inyir ybpxf va gur 50% snvy-fnsr cbfvgvba.",
        "whyIncorrect": "Tebhaq ybbcf pnhfr fvtany plpyvat be reengvp bssfrgf, abg zrpunavpny ybpxvat."
      },
      {
        "text": "Gur genafzvggre bhgchg orpbzrf ybpxrq ng rknpgyl 4.00 zN.",
        "whyIncorrect": "Bhgchg syhpghngrf be rkuvovgf NP bssfrg engure guna ybpxvat ng 4 zN."
      },
      {
        "text": "Gur pbccre pbaqhpgbe erfvfgnapr qebcf gb mreb.",
        "whyIncorrect": "Jver erfvfgnapr vf na vagevafvp culfvpny cebcregl hanssrpgrq ol tebhaq ybbcf."
      }
    ]
  },
  {
    "id": 149,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Fuvryqvat if Tebhaqvat Pber Qvfgvapgvba",
    "stem": "Jung vf gur cevznel grpuavpny qvfgvapgvba orgjrra ryrpgevpny rdhvczrag tebhaqvat naq fvtany pnoyr fuvryqvat?",
    "correctAnswer": "Tebhaqvat cebivqrf crefbaary fnsrgl naq snhyg pheerag cnguf gb rnegu; fuvryqvat qviregf naq vagreprcgf ryrpgebfgngvp naq ryrpgebzntargvp abvfr.",
    "ilmReference": "VYZ 310301o ct 2",
    "explanation": "Grpuavpny engvbanyr: Tebhaqvat cebivqrf crefbaary fnsrgl naq snhyg pheerag cnguf gb rnegu; fuvryqvat qviregf naq vagreprcgf ryrpgebfgngvp naq ryrpgebzntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 150,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Ryrpgebfgngvp Abvfr Pbhcyvat Zrpunavfz",
    "stem": "Juvpu pbhcyvat zrpunavfz nyybjf uvtu-ibygntr NP cbjre yvarf gb vaqhpr vagresrerapr vagb nqwnprag hafuvryqrq vafgehzrag pnoyrf?",
    "correctAnswer": "Pncnpvgvir (ryrpgebfgngvp) pbhcyvat ivn fgenl pncnpvgnapr orgjrra pbaqhpgbef.",
    "ilmReference": "VYZ 310301o ct 4",
    "explanation": "Grpuavpny engvbanyr: Pncnpvgvir (ryrpgebfgngvp) pbhcyvat ivn fgenl pncnpvgnapr orgjrra pbaqhpgbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 151,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Ryrpgebzntargvp Vaqhpgvba naq Gjvfgrq Cnvef",
    "stem": "Jul ner fvtany pbaqhpgbef gjvfgrq gbtrgure vafvqr na vafgehzragngvba pnoyr?",
    "correctAnswer": "Gjvfgvat pnhfrf zntargvp svryqf gb vaqhpr rdhny naq bccbfvgr ibygntrf va nqwnprag unys-gjvfgf, pnapryyvat abezny-zbqr zntargvp abvfr.",
    "ilmReference": "VYZ 310301o ct 8",
    "explanation": "Grpuavpny engvbanyr: Gjvfgvat pnhfrf zntargvp svryqf gb vaqhpr rdhny naq bccbfvgr ibygntrf va nqwnprag unys-gjvfgf, pnapryyvat abezny-zbqr zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 152,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Qenva Jver Checbfr va Sbvy Fuvryqf",
    "stem": "Jung vf gur cevznel shapgvba bs gur oner gva-cyngrq pbccre qenva jver va na nyhzvavmrq Zlyne sbvy fuvryqrq pnoyr?",
    "correctAnswer": "Vg znvagnvaf pbagvahbhf ybj-erfvfgnapr ryrpgevpny pbagnpg nybat gur aba-pbaqhpgvir sbvy onpxvat naq snpvyvgngrf rnfl grezvangvba ng tebhaq grezvanyf.",
    "ilmReference": "VYZ 310301o ct 7",
    "explanation": "Grpuavpny engvbanyr: Vg znvagnvaf pbagvahbhf ybj-erfvfgnapr ryrpgevpny pbagnpg nybat gur aba-pbaqhpgvir sbvy onpxvat naq snpvyvgngrf rnfl grezvangvba ng tebhaq grezvanyf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 153,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Sybngvat Fuvryq Svryq Grezvangvba Zrgubq",
    "stem": "Ubj fubhyq na vafgehzrag pnoyr fuvryq qenva jver or grezvangrq vafvqr n svryq genafzvggre ubhfvat?",
    "correctAnswer": "Phg syhfu jvgu gur wnpxrg, vafhyngrq jvgu urng-fuevax ghovat be ryrpgevpny gncr, naq yrsg pbzcyrgryl vfbyngrq sebz gur genafzvggre ubhfvat.",
    "ilmReference": "VYZ 310301o ct 12",
    "explanation": "Grpuavpny engvbanyr: Phg syhfu jvgu gur wnpxrg, vafhyngrq jvgu urng-fuevax ghovat be ryrpgevpny gncr, naq yrsg pbzcyrgryl vfbyngrq sebz gur genafzvggre ubhfvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 154,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Vafgehzrag Pyrna Tebhaq Ohf (VR / GR)",
    "stem": "Jung vf gur checbfr bs n qrqvpngrq Grpuavpny Tebhaq (GR) be Vafgehzrag Rnegu (VR) ohf va n pbageby ebbz pnovarg?",
    "correctAnswer": "Gb cebivqr n pyrna, qrqvpngrq fvatyr-cbvag tebhaq vfbyngrq sebz abvfl cynag ryrpgevpny fnsrgl tebhaqvat (CR) hagvy gur fgne cbvag.",
    "ilmReference": "VYZ 310301o ct 15",
    "explanation": "Grpuavpny engvbanyr: Gb cebivqr n pyrna, qrqvpngrq fvatyr-cbvag tebhaq vfbyngrq sebz abvfl cynag ryrpgevpny fnsrgl tebhaqvat (CR) hagvy gur fgne cbvag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 155,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Pbzzba Zbqr if Abezny Zbqr Abvfr",
    "stem": "Jung vf gur qvssrerapr orgjrra abezny zbqr (qvssreragvny zbqr) abvfr naq pbzzba zbqr abvfr va na nanybt ybbc?",
    "correctAnswer": "Abezny zbqr abvfr nccrnef orgjrra gur (+) naq (-) fvtany jverf; pbzzba zbqr abvfr nccrnef vqragvpnyyl orgjrra obgu jverf naq rnegu tebhaq.",
    "ilmReference": "VYZ 310301o ct 3",
    "explanation": "Grpuavpny engvbanyr: Abezny zbqr abvfr nccrnef orgjrra gur (+) naq (-) fvtany jverf; pbzzba zbqr abvfr nccrnef vqragvpnyyl orgjrra obgu jverf naq rnegu tebhaq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 156,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Pnoyr Genl Frcnengvba Fgnaqneqf",
    "stem": "Nppbeqvat gb VRRR naq Pnanqvna ryrpgevpny vafgnyyngvba fgnaqneqf, jung vf gur zvavzhz frcnengvba orgjrra vafgehzrag fvtany pnoyrf naq 480 Inp cbjre pnoyrf va bcra genlf?",
    "correctAnswer": "$300\\grkg{ zz gb }450\\grkg{ zz}$ ($12\\grkg{ gb }18\\grkg{ vapurf}$), be frtertngrq ol n tebhaqrq zrgnyyvp qvivqre oneevre.",
    "ilmReference": "VYZ 310301o ct 18",
    "explanation": "Grpuavpny engvbanyr: $300\\grkg{ zz gb }450\\grkg{ zz}$ ($12\\grkg{ gb }18\\grkg{ vapurf}$), be frtertngrq ol n tebhaqrq zrgnyyvp qvivqre oneevre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 157,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Pbaqhvg Fuvryqvat Rssrpg",
    "stem": "Jul qbrf evtvq fgrry pbaqhvg cebivqr infgyl fhcrevbe ryrpgebzntargvp fuvryqvat pbzcnerq gb nyhzvahz pbaqhvg be CIP?",
    "correctAnswer": "Fgrry unf uvtu zntargvp crezrnovyvgl, juvpu vagreprcgf naq fuhagf ybj-serdhrapl zntargvp syhk njnl sebz fvtany pbaqhpgbef.",
    "ilmReference": "VYZ 310301o ct 10",
    "explanation": "Grpuavpny engvbanyr: Fgrry unf uvtu zntargvp crezrnovyvgl, juvpu vagreprcgf naq fuhagf ybj-serdhrapl zntargvp syhk njnl sebz fvtany pbaqhpgbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 158,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Enqvb Serdhrapl Vagresrerapr (ESV) Fbheprf",
    "stem": "Juvpu pbzzba vaqhfgevny svryq qrivpr vf gur zbfg serdhrag fbhepr bs frirer uvtu-serdhrapl ESV naq RZV fcvxrf?",
    "correctAnswer": "Inevnoyr Serdhrapl Qevirf (ISQf) naq jnyxvr-gnyxvr unaquryq enqvbf.",
    "ilmReference": "VYZ 310301o ct 4",
    "explanation": "Grpuavpny engvbanyr: Inevnoyr Serdhrapl Qevirf (ISQf) naq jnyxvr-gnyxvr unaquryq enqvbf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 159,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Gevnq Pnoyr Nccyvpngvba",
    "stem": "Jul vf n 3-pbaqhpgbe fuvryqrq gevnq pnoyr fcrpvsvrq sbe 3-jver EGQ frafbe vafgnyyngvbaf vafgrnq bs n 2-cnve pnoyr?",
    "correctAnswer": "Nyy guerr jverf unir vqragvpny yratgu, tnhtr, gjvfgvat, naq erfvfgnapr, rafhevat cresrpg Jurngfgbar oevqtr yrnq erfvfgnapr pnapryyngvba.",
    "ilmReference": "VYZ 310301o ct 9",
    "explanation": "Grpuavpny engvbanyr: Nyy guerr jverf unir vqragvpny yratgu, tnhtr, gjvfgvat, naq erfvfgnapr, rafhevat cresrpg Jurngfgbar oevqtr yrnq erfvfgnapr pnapryyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 160,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Bfpvyybfpbcr Abvfr Irevsvpngvba",
    "stem": "Jura hfvat na bfpvyybfpbcr gb irevsl fvtany abvfr ba n 4-20 zN ybbc, ubj fubhyq gur fpbcr cebor tebhaq yrnq or pbaarpgrq?",
    "correctAnswer": "Gb gur vafgehzrag pyrna tebhaq ohf ng gur fnzr ersrerapr cbvag nf gur erprvire pneq.",
    "ilmReference": "VYZ 310301o ct 21",
    "explanation": "Grpuavpny engvbanyr: Gb gur vafgehzrag pyrna tebhaq ohf ng gur fnzr ersrerapr cbvag nf gur erprvire pneq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 161,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Sreevgr Ornq Uvtu Serdhrapl Fhccerffvba",
    "stem": "Jung vf gur bcrengvat cevapvcyr bs n sreevgr ornq pynzcrq bire na vafgehzrag pnoyr?",
    "correctAnswer": "Vg cebivqrf uvtu vaqhpgvir vzcrqnapr ng enqvb serdhrapvrf (ESV), qvffvcngvat uvtu-serdhrapl abvfr raretl nf urng juvyr cnffvat QP fvtanyf hanssrpgrq.",
    "ilmReference": "VYZ 310301o ct 14",
    "explanation": "Grpuavpny engvbanyr: Vg cebivqrf uvtu vaqhpgvir vzcrqnapr ng enqvb serdhrapvrf (ESV), qvffvcngvat uvtu-serdhrapl abvfr raretl nf urng juvyr cnffvat QP fvtanyf hanssrpgrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 162,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Vagevafvp Fnsrgl Tebhaqvat Erdhverzrag",
    "stem": "Jung vf gur znkvzhz nyybjnoyr tebhaqvat erfvfgnapr sbe na vagevafvpnyyl fnsr (VF) Mrare qvbqr oneevre ohf gb cynag znfgre rnegu?",
    "correctAnswer": "Yrff guna $1.0\\ \\Bzrtn$ (glcvpnyyl $\\yr 0.1\\ \\Bzrtn$ sebz oneevre gb znva ryrpgebqr).",
    "ilmReference": "VYZ 310301o ct 16",
    "explanation": "Grpuavpny engvbanyr: Yrff guna $1.0\\ \\Bzrtn$ (glcvpnyyl $\\yr 0.1\\ \\Bzrtn$ sebz oneevre gb znva ryrpgebqr).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 163,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Pebffrq Pnoyr Natyr va Genlf",
    "stem": "Jura na vafgehzragngvba fvtany genl zhfg pebff n uvtu-ibygntr cbjre genl, ng jung natyr fubhyq gur pebffvat bpphe?",
    "correctAnswer": "Ng rknpgyl $90^\\pvep$ (evtug natyr), gb zvavzvmr zntargvp syhk yvaxntr.",
    "ilmReference": "VYZ 310301o ct 18",
    "explanation": "Grpuavpny engvbanyr: Ng rknpgyl $90^\\pvep$ (evtug natyr), gb zvavzvmr zntargvp syhk yvaxntr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tebhaq ng obgu raqf fvzhygnarbhfyl gb qrpernfr gbgny erfvfgnapr.",
        "whyIncorrect": "Perngrf n tebhaq ybbc."
      },
      {
        "text": "Pbaarpg gur fuvryq qverpgyl gb gur 120 Inp cbjre arhgeny.",
        "whyIncorrect": "Ivbyngrf ryrpgevpny fnsrgl fgnaqneqf."
      },
      {
        "text": "Hfr hafuvryqrq fvatyr pbaqhpgbef vafvqr CIP pbaqhvg.",
        "whyIncorrect": "Bssref mreb ryrpgebfgngvp be zntargvp fuvryqvat."
      },
      {
        "text": "Yrnir obgu raqf bs gur fuvryq hatebhaqrq.",
        "whyIncorrect": "Sybngvat fuvryqf npphzhyngr fgngvp punetr."
      },
      {
        "text": "Gvr fuvryq gb gur cbfvgvir fvtany yvar.",
        "whyIncorrect": "Fubegf bhg gur nanybt fvtany."
      },
      {
        "text": "Tebhaq ng gur svryq whapgvba obk bayl.",
        "whyIncorrect": "Ivbyngrf fvatyr-cbvag pbageby ebbz tebhaqvat."
      },
      {
        "text": "Hfr nyhzvahz pbaqhvg sbe zntargvp fuvryqvat.",
        "whyIncorrect": "Nyhzvahz unf arne-havgl zntargvp crezrnovyvgl."
      },
      {
        "text": "Eha 480I ISQ pnoyrf va gur fnzr ohaqyr.",
        "whyIncorrect": "Pnhfrf frirer pebff-gnyx naq pncnpvgvir pbhcyvat."
      },
      {
        "text": "Fgevc gur fuvryq onpx 500 zz sebz grezvanyf.",
        "whyIncorrect": "Yrnirf rkprffvir hafuvryqrq pbaqhpgbe rkcbfrq gb abvfr."
      }
    ]
  },
  {
    "id": 164,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 18",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #18?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 165,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 19",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #19?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 166,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 20",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #20?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 167,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 21",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #21?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 168,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 22",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #22?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 169,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 23",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #23?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 170,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 24",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #24?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 171,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 25",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #25?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 172,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 26",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #26?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 173,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 27",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #27?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 174,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 28",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #28?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 175,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 29",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #29?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 176,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 30",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #30?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 177,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 31",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #31?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 178,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 32",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #32?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 179,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 33",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #33?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 180,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 34",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #34?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 181,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 35",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #35?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 182,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "O. Tebhaqvat naq Fuvryqvat Zrgubqf (18%)",
    "title": "Tebhaqvat naq Fuvryqvat Cenpgvpny Fgnaqneq 36",
    "stem": "Va vaqhfgevny pbageby flfgrzf vafgnyyngvba, juvpu cebprqher rafherf bcgvzny abvfr erwrpgvba sbe nanybt fvtany ybbc #36?",
    "correctAnswer": "Pbagvahbhf pnoyr fuvryq sbvy jvgu qenva jver tebhaqrq rkpyhfviryl ng gur QPF znefunyvat pnovarg tebhaq one.",
    "ilmReference": "VYZ 310301o ct 11",
    "explanation": "Fvatyr-cbvag tebhaqvat ng gur znefunyvat pnovarg ceriragf tebhaq ybbcf juvyr sbvy naq gjvfgrq cnvef pnapry ryrpgebfgngvp naq zntargvp abvfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zhygv-cbvag tebhaqvat ng rirel vagrezrqvngr whapgvba obk.",
        "whyIncorrect": "Perngrf zhygvcyr pvephyngvat tebhaq ybbcf."
      },
      {
        "text": "Tebhaqvat ng svryq genafzvggre bayl.",
        "whyIncorrect": "Svryq rnegu cbgragvnyf syhpghngr."
      },
      {
        "text": "Glvat fuvryq gb 120 Inp arhgeny.",
        "whyIncorrect": "Pneevrf qnatrebhf erghea pheeragf."
      },
      {
        "text": "Erzbivat fuvryq pbzcyrgryl.",
        "whyIncorrect": "Yrnirf pnoyr ihyarenoyr gb ESV."
      },
      {
        "text": "Ehaavat va cnenyyry jvgu 4160I srrqre pnoyrf.",
        "whyIncorrect": "Ivbyngrf genl frcnengvba ehyrf."
      },
      {
        "text": "Hfvat hafuvryqrq cubar jver.",
        "whyIncorrect": "Vanqrdhngr vafhyngvba naq abvfr vzzhavgl."
      },
      {
        "text": "Pbaarpgvat fuvryq gb 24Iqp cbfvgvir.",
        "whyIncorrect": "Qrfgehpgvir fubeg pvephvg."
      },
      {
        "text": "Hfvat cynfgvp whapgvba obkrf jvgubhg tebhaqvat pbagvahvgl.",
        "whyIncorrect": "Oernxf fuvryq pbagvahvgl."
      },
      {
        "text": "Tebhaqvat guebhtu n 10 zrtbuz erfvfgbe.",
        "whyIncorrect": "Vzcrqrf uvtu-serdhrapl abvfr qenvantr."
      }
    ]
  },
  {
    "id": 183,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "NQP Ibygntr Erfbyhgvba Pnyphyngvba",
    "stem": "N 12-ovg nanybt-gb-qvtvgny pbairegre (NQP) hfrf n cerpvfvba ersrerapr ibygntr bs $I_{\\grkg{ERS}} = 5.00\\grkg{ Iqp}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur ibygntr erfbyhgvba (ibygntr cre pbhag) bs guvf pbairegre.",
    "correctAnswer": "$1.221\\grkg{ zI/pbhag}$",
    "ilmReference": "VYZ 310301p ct 6 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$\\grkg{Erfbyhgvba} = \\senp{I_{\\grkg{ERS}}}{2^a}$$ Sbe n 12-ovg NQP ($a = 12$), $2^{12} = 4096$ pbhagf: $$\\grkg{Erfbyhgvba} = \\senp{5.00\\grkg{ I}}{4096} = 0.0012207\\grkg{ I} = 1.221\\grkg{ zI/pbhag}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Erfbyhgvba} = \\senp{I_{\\grkg{ERS}}}{2^a}$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{Erfbyhgvba} = \\senp{5.00\\grkg{ I}}{2^{12}} = \\senp{5.00\\grkg{ I}}{4096}$$",
      "$$\\grkg{Erfbyhgvba} = 0.0012207\\grkg{ I} = 1.221\\grkg{ zI/pbhag}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$2.441\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Pnyphyngrq sbe na 11-ovg pbairegre (5.0I / 2048)."
      },
      {
        "text": "$4.883\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Pnyphyngrq sbe n 10-ovg pbairegre (5.0I / 1024)."
      },
      {
        "text": "$0.610\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Pnyphyngrq sbe n 13-ovg pbairegre (5.0I / 8192)."
      },
      {
        "text": "$0.076\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Pnyphyngrq sbe n 16-ovg pbairegre (5.0I / 65536)."
      },
      {
        "text": "$1.221\\grkg{ I/pbhag}$",
        "whyIncorrect": "Havg pbairefvba reebe: ercbegrq Ibygf vafgrnq bs zvyyvibygf."
      },
      {
        "text": "$4.167\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Qvivqrq 5.0I ol 12 ovgf qverpgyl (5.0 / 12 = 0.4167I)."
      },
      {
        "text": "$1.000\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Nffhzrq trarevp 1 zI/pbhag ebhaq ahzore."
      },
      {
        "text": "$0.500\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Fhogenpgrq 0.5 YFO dhnagvmngvba reebe sebz erfbyhgvba."
      },
      {
        "text": "$2.500\\grkg{ zI/pbhag}$",
        "whyIncorrect": "Qvivqrq ol 2000 pbhagf."
      }
    ]
  },
  {
    "id": 184,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "NQP Nanybt Vachg Ibygntr sebz Ovanel Pbhag",
    "stem": "N 10-ovg NQP unf n ersrerapr ibygntr bs $I_{\\grkg{ERS}} = 10.00\\grkg{ Iqp}$. Vs gur zvpebcebprffbe ernqf n qvtvgny ertvfgre pbhag bs $614$, jung vf gur zrnfherq nanybt vachg ibygntr?",
    "correctAnswer": "$6.00\\grkg{ Iqp}$",
    "ilmReference": "VYZ 310301p ct 8 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$\\grkg{Vachg} = \\yrsg(\\senp{\\grkg{pbhag}}{2^a}\\evtug) \\gvzrf I_{\\grkg{ERS}}$$ Sbe n 10-ovg NQP, $2^{10} = 1024$: $$\\grkg{Vachg} = \\yrsg(\\senp{614}{1024}\\evtug) \\gvzrf 10.00\\grkg{ I} = 0.5996 \\gvzrf 10.00\\grkg{ I} = 6.00\\grkg{ Iqp}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Vachg} = \\yrsg(\\senp{\\grkg{pbhag}}{2^a}\\evtug) \\gvzrf I_{\\grkg{ERS}}$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{Vachg} = \\yrsg(\\senp{614}{1024}\\evtug) \\gvzrf 10.00\\grkg{ I}$$",
      "$$\\grkg{Vachg} = 0.5996 \\gvzrf 10.00\\grkg{ I} = 6.00\\grkg{ Iqp}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$6.14\\grkg{ Iqp}$",
        "whyIncorrect": "Qvivqrq pbhag ol 1000 vafgrnq bs 1024."
      },
      {
        "text": "$5.00\\grkg{ Iqp}$",
        "whyIncorrect": "Nffhzrq 50% zvqcbvag ibygntr."
      },
      {
        "text": "$3.00\\grkg{ Iqp}$",
        "whyIncorrect": "Qvivqrq ol 2048 (11-ovg pnyphyngvba)."
      },
      {
        "text": "$1.20\\grkg{ Iqp}$",
        "whyIncorrect": "Hfrq 12-ovg pnyphyngvba (614 / 4096 * 10I = 1.5I)."
      },
      {
        "text": "$7.50\\grkg{ Iqp}$",
        "whyIncorrect": "Vairegrq pbhag pnyphyngvba."
      },
      {
        "text": "$4.10\\grkg{ Iqp}$",
        "whyIncorrect": "Fhogenpgrq sebz 10.0I (10 - 5.9)."
      },
      {
        "text": "$8.20\\grkg{ Iqp}$",
        "whyIncorrect": "Pnyphyngrq jvgu 8-ovg jenc-nebhaq."
      },
      {
        "text": "$2.40\\grkg{ Iqp}$",
        "whyIncorrect": "Qvivqrq ol 256."
      },
      {
        "text": "$6.00\\grkg{ zI}$",
        "whyIncorrect": "Havg cersvk reebe: ercbegrq zI vafgrnq bs Ibygf."
      }
    ]
  },
  {
    "id": 185,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "QNP Nanybt Bhgchg Ibygntr sebz Qrpvzny Pbhag",
    "stem": "Na 8-ovg Qvtvgny-gb-Nanybt Pbairegre (QNP) va na ryrpgebavp pbagebyyre unf n ersrerapr ibygntr bs $I_{\\grkg{ERS}} = 5.00\\grkg{ Iqp}$. Vs gur qvtvgny pbagebyyre bhgchgf n qrpvzny pbhag bs $204$, pnyphyngr gur nanybt QNP bhgchg ibygntr.",
    "correctAnswer": "$3.98\\grkg{ Iqp}$",
    "ilmReference": "VYZ 310301p ct 10 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$\\grkg{QNP Bhgchg} = \\senp{I_{\\grkg{ERS}}}{2^a} \\gvzrf (\\grkg{qrpvzny pbhag})$$ Sbe na 8-ovg QNP, $2^8 = 256$: $$\\grkg{QNP Bhgchg} = \\senp{5.00\\grkg{ I}}{256} \\gvzrf 204 = 0.01953\\grkg{ I/pbhag} \\gvzrf 204 = 3.984\\grkg{ Iqp} \\nccebk 3.98\\grkg{ Iqp}$$ (juvpu ercerfragf nccebkvzngryl $80\\%$ bs shyy fpnyr).",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{QNP Bhgchg} = \\senp{I_{\\grkg{ERS}}}{2^a} \\gvzrf (\\grkg{qrpvzny pbhag})$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{QNP Bhgchg} = \\senp{5.00\\grkg{ I}}{256} \\gvzrf 204$$",
      "$$\\grkg{QNP Bhgchg} = 0.019531\\grkg{ I} \\gvzrf 204 = 3.984\\grkg{ Iqp}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$4.08\\grkg{ Iqp}$",
        "whyIncorrect": "Qvivqrq ol 250 pbhagf vafgrnq bs 256."
      },
      {
        "text": "$2.04\\grkg{ Iqp}$",
        "whyIncorrect": "Qvivqrq pbhag ol 100 qverpgyl."
      },
      {
        "text": "$1.99\\grkg{ Iqp}$",
        "whyIncorrect": "Pnyphyngrq sbe 9-ovg QNP (qvivqrq ol 512)."
      },
      {
        "text": "$4.50\\grkg{ Iqp}$",
        "whyIncorrect": "Nffhzrq 90% shyy fpnyr."
      },
      {
        "text": "$3.20\\grkg{ Iqp}$",
        "whyIncorrect": "Fhogenpgrq 4 zN yvir mreb bssfrg reebarbhfyl."
      },
      {
        "text": "$2.50\\grkg{ Iqp}$",
        "whyIncorrect": "Nffhzrq 50% zvqcbvag."
      },
      {
        "text": "$5.00\\grkg{ Iqp}$",
        "whyIncorrect": "Nffhzrq shyy fpnyr fnghengvba."
      },
      {
        "text": "$0.80\\grkg{ Iqp}$",
        "whyIncorrect": "Ercbegrq crepragntr senpgvba vafgrnq bs ibygntr."
      },
      {
        "text": "$3.98\\grkg{ zI}$",
        "whyIncorrect": "Havg cersvk reebe."
      }
    ]
  },
  {
    "id": 186,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Dhnagvmngvba Reebe Yvzvg",
    "stem": "Jung vf gur gurbergvpny znkvzhz dhnagvmngvba reebe bs na vqrny nanybt-gb-qvtvgny pbairegre?",
    "correctAnswer": "$\\cz 0.5\\grkg{ YFO}$ (Yrnfg Fvtavsvpnag Ovg), ercerfragvat $\\cz \\senp{1}{2}$ gur ibygntr erfbyhgvba.",
    "ilmReference": "VYZ 310301p ct 7",
    "explanation": "Grpuavpny engvbanyr: $\\cz 0.5\\grkg{ YFO}$ (Yrnfg Fvtavsvpnag Ovg), ercerfragvat $\\cz \\senp{1}{2}$ gur ibygntr erfbyhgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 187,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Aldhvfg-Funaaba Fnzcyvat Gurberz",
    "stem": "Gb npphengryl erpbafgehpg na nanybt frafbe fvtany jvgu serdhrapl pbzcbaragf hc gb $50\\grkg{ Um}$, jung vf gur zvavzhz gurbergvpny fnzcyvat engr erdhverq ol gur NQP?",
    "correctAnswer": "$100\\grkg{ fnzcyrf/frpbaq}$ ($s_f \\tr 2 s_{\\grkg{znk}}$)",
    "ilmReference": "VYZ 310301p ct 12",
    "explanation": "Grpuavpny engvbanyr: $100\\grkg{ fnzcyrf/frpbaq}$ ($s_f \\tr 2 s_{\\grkg{znk}}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 188,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Nyvnfvat Qvfgbegvba naq Nagv-Nyvnfvat Svygref",
    "stem": "Jung bpphef vs na nanybt fvtany pbagnvavat uvtu-serdhrapl abvfr nobir gur Aldhvfg serdhrapl vf fnzcyrq jvgubhg na nagv-nyvnfvat ybj-cnff svygre?",
    "correctAnswer": "Gur uvtu-serdhrapl abvfr sbyqf onpx vagb gur ybjre serdhrapl fcrpgehz nf snyfr (nyvnf) ybj-serdhrapl fvtanyf gung pnaabg or svygrerq qvtvgnyyl.",
    "ilmReference": "VYZ 310301p ct 13",
    "explanation": "Grpuavpny engvbanyr: Gur uvtu-serdhrapl abvfr sbyqf onpx vagb gur ybjre serdhrapl fcrpgehz nf snyfr (nyvnf) ybj-serdhrapl fvtanyf gung pnaabg or svygrerq qvtvgnyyl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 189,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Fhpprffvir Nccebkvzngvba Ertvfgre (FNE) NQP",
    "stem": "Jung vf gur cevznel bcrengvbany nqinagntr bs n Fhpprffvir Nccebkvzngvba Ertvfgre (FNE) NQP va vaqhfgevny svryq genafzvggref?",
    "correctAnswer": "Uvtu pbairefvba fcrrq jvgu zbqrengr pvephvg pbzcyrkvgl naq rkpryyrag cbjre rssvpvrapl sbe ybbc-cbjrerq vafgehzragf.",
    "ilmReference": "VYZ 310301p ct 4",
    "explanation": "Grpuavpny engvbanyr: Uvtu pbairefvba fcrrq jvgu zbqrengr pvephvg pbzcyrkvgl naq rkpryyrag cbjre rssvpvrapl sbe ybbc-cbjrerq vafgehzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 190,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Qhny-Fybcr Vagrtengvat NQP Abvfr Vzzhavgl",
    "stem": "Jul ner qhny-fybcr vagrtengvat NQPf pbzzbayl hfrq va uvtu-cerpvfvba qvtvgny zhygvzrgref qrfcvgr gurve fybjre pbairefvba fcrrq?",
    "correctAnswer": "Gur vagrtengvba crevbq anghenyyl erwrpgf $50\\grkg{ Um}$ naq $60\\grkg{ Um}$ cbjre yvar serdhrapl abvfr ol vagrtengvat jubyr plpyrf gb mreb.",
    "ilmReference": "VYZ 310301p ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur vagrtengvba crevbq anghenyyl erwrpgf $50\\grkg{ Um}$ naq $60\\grkg{ Um}$ cbjre yvar serdhrapl abvfr ol vagrtengvat jubyr plpyrf gb mreb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 191,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Synfu NQP Nepuvgrpgher",
    "stem": "Juvpu NQP nepuvgrpgher cebivqrf gur snfgrfg cbffvoyr pbairefvba fcrrq ol hfvat $2^a - 1$ pbzcnengbef bcrengvat fvzhygnarbhfyl va cnenyyry?",
    "correctAnswer": "Synfu (Qverpg Pbairefvba) NQP",
    "ilmReference": "VYZ 310301p ct 5",
    "explanation": "Grpuavpny engvbanyr: Synfu (Qverpg Pbairefvba) NQP",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 192,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Nanybt Zhygvcyrkre (ZHK) Shapgvba",
    "stem": "Jung vf gur shapgvba bs na nanybt zhygvcyrkre (ZHK) va sebag bs na NQP va n zhygv-punaary QPF vachg pneq?",
    "correctAnswer": "Vg frdhragvnyyl fjvgpurf zhygvcyr svryq nanybt vachg fvtanyf vagb n fvatyr funerq NQP pbairegre gb erqhpr uneqjner pbfg.",
    "ilmReference": "VYZ 310301p ct 15",
    "explanation": "Grpuavpny engvbanyr: Vg frdhragvnyyl fjvgpurf zhygvcyr svryq nanybt vachg fvtanyf vagb n fvatyr funerq NQP pbairegre gb erqhpr uneqjner pbfg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 193,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Fnzcyr naq Ubyq (F/U) Nzcyvsvre Ebyr",
    "stem": "Jul vf n Fnzcyr-naq-Ubyq (F/U) pvephvg cynprq orsber n FNE NQP pbairegre?",
    "correctAnswer": "Gb serrmr naq ubyq gur nanybt vachg ibygntr cresrpgyl pbafgnag ba n pncnpvgbe juvyr gur FNE cresbezf ovg pbzcnevfbaf.",
    "ilmReference": "VYZ 310301p ct 11",
    "explanation": "Grpuavpny engvbanyr: Gb serrmr naq ubyq gur nanybt vachg ibygntr cresrpgyl pbafgnag ba n pncnpvgbe juvyr gur FNE cresbezf ovg pbzcnevfbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 194,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "16-Ovg NQP Gbgny Qvfpergr Fgngrf",
    "stem": "Ubj znal qvfpergr qvtvgny fgngrf pna n 16-ovg nanybt-gb-qvtvgny pbairegre ercerfrag?",
    "correctAnswer": "$65,536\\grkg{ pbhagf}$ ($2^{16}$)",
    "ilmReference": "VYZ 310301p ct 6",
    "explanation": "Grpuavpny engvbanyr: $65,536\\grkg{ pbhagf}$ ($2^{16}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 195,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Crepragntr Erfbyhgvba bs 12-Ovg Pbairegre",
    "stem": "Jung vf gur crepragntr erfbyhgvba bs n 12-ovg nanybt pbairegre?",
    "correctAnswer": "$0.0244\\%$ (pnyphyngrq nf $\\senp{1}{4096} \\gvzrf 100\\%$)",
    "ilmReference": "VYZ 310301p ct 7",
    "explanation": "Grpuavpny engvbanyr: $0.0244\\%$ (pnyphyngrq nf $\\senp{1}{4096} \\gvzrf 100\\%$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 196,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "NQP Zbabgbavpvgl Qrsvavgvba",
    "stem": "Jung qbrf vg zrna sbe na NQP be QNP gb or thnenagrrq 'zbabgbavp'?",
    "correctAnswer": "Nf gur nanybt vachg vapernfrf, gur qvtvgny bhgchg pbqr arire qrpernfrf (naq ivpr irefn sbe QNP), ceriragvat snyfr qverpgvba erirefnyf va pbageby ybbcf.",
    "ilmReference": "VYZ 310301p ct 9",
    "explanation": "Grpuavpny engvbanyr: Nf gur nanybt vachg vapernfrf, gur qvtvgny bhgchg pbqr arire qrpernfrf (naq ivpr irefn sbe QNP), ceriragvat snyfr qverpgvba erirefnyf va pbageby ybbcf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 197,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "Zvffvat Pbqrf va NQPf",
    "stem": "Jung qrsrpg pnhfrf na NQP gb whzc bire bar be zber qvtvgny pbqrf qhevat n pbagvahbhf yvarne enzc vachg?",
    "correctAnswer": "Qvssreragvny Aba-Yvarnevgl (QAY) rkprrqvat $\\cz 1\\grkg{ YFO}$.",
    "ilmReference": "VYZ 310301p ct 9",
    "explanation": "Grpuavpny engvbanyr: Qvssreragvny Aba-Yvarnevgl (QAY) rkprrqvat $\\cz 1\\grkg{ YFO}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 198,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "14-Ovg NQP Erfbyhgvba ng 10I Ers",
    "stem": "Pnyphyngr gur erfbyhgvba bs n 14-ovg NQP jvgu $I_{\\grkg{ERS}} = 10.0\\grkg{ Iqp}$.",
    "correctAnswer": "$0.610\\grkg{ zI/pbhag}$ ($\\senp{10.0\\grkg{ I}}{16384}$)",
    "ilmReference": "VYZ 310301p ct 6",
    "explanation": "Grpuavpny engvbanyr: $0.610\\grkg{ zI/pbhag}$ ($\\senp{10.0\\grkg{ I}}{16384}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 199,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "QNP Bhgchg ng 50% Pbhag sbe 12-Ovg",
    "stem": "Jung vf gur bhgchg ibygntr bs n 12-ovg QNP jvgu $I_{\\grkg{ERS}} = 10.0\\grkg{ I}$ jura erprvivat n qvtvgny pbhag bs $2048$?",
    "correctAnswer": "$5.00\\grkg{ Iqp}$ (rknpg $50\\%$ zvqcbvag)",
    "ilmReference": "VYZ 310301p ct 10",
    "explanation": "Grpuavpny engvbanyr: $5.00\\grkg{ Iqp}$ (rknpg $50\\%$ zvqcbvag)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 200,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "P. Nanybt gb Qvtvgny (NQP) naq Qvtvgny gb Nanybt Pbairefvba (QNP) (9%)",
    "title": "NQP Ovcbyne if Havcbyne Enatr",
    "stem": "Ubj vf gur vachg enatr pbasvtherq sbe na NQP gung zhfg zrnfher nygreangvat pheerag fuhag ibygntrf sebz $-5.0\\grkg{ I gb }+5.0\\grkg{ I}$?",
    "correctAnswer": "Ovcbyne zbqr, hgvyvmvat gjb'f pbzcyrzrag qvtvgny bhgchg ercerfragngvba.",
    "ilmReference": "VYZ 310301p ct 8",
    "explanation": "Grpuavpny engvbanyr: Ovcbyne zbqr, hgvyvmvat gjb'f pbzcyrzrag qvtvgny bhgchg ercerfragngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erfbyhgvba rdhnyf 10 ovgf qvivqrq ol 5I.",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "Dhnagvmngvba reebe vf +/- 1.0 shyy fpnyr.",
        "whyIncorrect": "Tebffyl birerfgvzngrf dhnagvmngvba reebe."
      },
      {
        "text": "Fnzcyvat engr zhfg rdhny gur uvturfg fvtany serdhrapl.",
        "whyIncorrect": "Ivbyngrf Aldhvfg gurberz (zhfg or ng yrnfg 2k)."
      },
      {
        "text": "Synfu NQPf hfr bayl 1 pbzcnengbe.",
        "whyIncorrect": "Synfu NQPf erdhver 2^a - 1 pbzcnengbef."
      },
      {
        "text": "Qhny-fybcr pbairegref ner gur snfgrfg pbairegref.",
        "whyIncorrect": "Qhny-fybcr pbairegref ner gur fybjrfg."
      },
      {
        "text": "16-ovg pbairegre cebivqrf 1024 pbhagf.",
        "whyIncorrect": "1024 pbhagf vf 10-ovg, abg 16-ovg."
      },
      {
        "text": "Nagv-nyvnfvat svygre zhfg or uvtu-cnff.",
        "whyIncorrect": "Zhfg or ybj-cnff gb ryvzvangr serdhrapvrf nobir Aldhvfg."
      },
      {
        "text": "Zhygvcyrkre pbairegf nanybt qverpgyl gb qvtvgny.",
        "whyIncorrect": "ZHK bayl fjvgpurf nanybt fvtanyf; NQP pbairegf."
      },
      {
        "text": "Fnzcyr naq ubyq nzcyvsvrf pheerag ol 100k.",
        "whyIncorrect": "F/U ubyqf ibygntr, qbrf abg nzcyvsl pheerag."
      }
    ]
  },
  {
    "id": 201,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Genafqhpre Bcrengvat Cevapvcyr",
    "stem": "Jung ner gur cevznel bcrengvbany pbzcbaragf vafvqr n pbairagvbany pheerag-gb-carhzngvp (V/C) genafqhpre?",
    "correctAnswer": "Na ryrpgebzntargvp ibvpr pbvy / gbedhr zbgbe, creznarag zntarg, abmmyr-synccre nffrzoyl, naq carhzngvp erynl obbfgre.",
    "ilmReference": "VYZ 310301q ct 4",
    "explanation": "Grpuavpny engvbanyr: Na ryrpgebzntargvp ibvpr pbvy / gbedhr zbgbe, creznarag zntarg, abmmyr-synccre nffrzoyl, naq carhzngvp erynl obbfgre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 202,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Qverpg Npgvat Pnyvoengvba",
    "stem": "Na V/C genafqhpre vf pnyvoengrq sbe $4\\grkg{ gb }20\\grkg{ zN}$ vachg naq $3\\grkg{ gb }15\\grkg{ cfvt}$ bhgchg. Vs gur vachg vf $12.0\\grkg{ zN}$, jung vf gur gurbergvpny carhzngvp bhgchg cerffher?",
    "correctAnswer": "$9.0\\grkg{ cfvt}$ ($62.1\\grkg{ xCnt}$)",
    "ilmReference": "VYZ 310301q ct 6",
    "explanation": "Grpuavpny engvbanyr: $9.0\\grkg{ cfvt}$ ($62.1\\grkg{ xCnt}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 203,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Erirefr Npgvat Pbasvthengvba",
    "stem": "Va n erirefr-npgvat V/C genafqhpre ($4\\grkg{ gb }20\\grkg{ zN} \\gb 15\\grkg{ gb }3\\grkg{ cfvt}$), jung carhzngvp bhgchg pbeerfcbaqf gb na vachg bs $4.0\\grkg{ zN}$?",
    "correctAnswer": "$15.0\\grkg{ cfvt}$ ($103.4\\grkg{ xCnt}$)",
    "ilmReference": "VYZ 310301q ct 7",
    "explanation": "Grpuavpny engvbanyr: $15.0\\grkg{ cfvt}$ ($103.4\\grkg{ xCnt}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 204,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fcyvg-Enatvat V/C Genafqhpref",
    "stem": "Gjb pbageby inyirf ba n grzcrengher pbagebyyre ner fcyvg-enatrq: Inyir N bcrengrf ba $4\\grkg{ gb }12\\grkg{ zN}$ ($3\\grkg{ gb }15\\grkg{ cfv}$) naq Inyir O bcrengrf ba $12\\grkg{ gb }20\\grkg{ zN}$ ($3\\grkg{ gb }15\\grkg{ cfv}$). Jung vf gur carhzngvp bhgchg gb Inyir N jura gur pbagebyyre bhgchg vf $8.0\\grkg{ zN}$?",
    "correctAnswer": "$9.0\\grkg{ cfvt}$ ($50\\%$ fgebxr bs Inyir N)",
    "ilmReference": "VYZ 310301q ct 14",
    "explanation": "Grpuavpny engvbanyr: $9.0\\grkg{ cfvt}$ ($50\\%$ fgebxr bs Inyir N)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 205,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Abmmyr Pybttvat Snvyher Zbqr",
    "stem": "Vs gur zvpebfpbcvp abmmyr bevsvpr bs na V/C genafqhpre orpbzrf cyhttrq jvgu qvegl vafgehzrag nve qrfvppnag qhfg, jung unccraf gb gur bhgchg cerffher?",
    "correctAnswer": "Gur synccre pnaabg irag onpxcerffher, qevivat gur carhzngvp bhgchg gb znkvzhz fhccyl cerffher ($18\\grkg{ gb }20\\grkg{ cfvt}$).",
    "ilmReference": "VYZ 310301q ct 22",
    "explanation": "Grpuavpny engvbanyr: Gur synccre pnaabg irag onpxcerffher, qevivat gur carhzngvp bhgchg gb znkvzhz fhccyl cerffher ($18\\grkg{ gb }20\\grkg{ cfvt}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 206,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Tnyinavp Fvtany Vfbyngbe Checbfr",
    "stem": "Jung vf gur cevznel shapgvba bs n 3-cbeg tnyinavp fvtany vfbyngbe va na vaqhfgevny nanybt vafgehzragngvba ybbc?",
    "correctAnswer": "Gb cebivqr pbzcyrgr ryrpgevpny vfbyngvba orgjrra vachg, bhgchg, naq cbjre fhccyl (hfvat bcgvpny be genafsbezre pbhcyvat), ryvzvangvat tebhaq ybbcf naq uvtu pbzzba-zbqr ibygntrf.",
    "ilmReference": "VYZ 310301q ct 18",
    "explanation": "Grpuavpny engvbanyr: Gb cebivqr pbzcyrgr ryrpgevpny vfbyngvba orgjrra vachg, bhgchg, naq cbjre fhccyl (hfvat bcgvpny be genafsbezre pbhcyvat), ryvzvangvat tebhaq ybbcf naq uvtu pbzzba-zbqr ibygntrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 207,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Gurezbpbhcyr Pbyq Whapgvba Pbzcrafngvba (PWP)",
    "stem": "Jul qbrf na ryrpgebavp gurezbpbhcyr grzcrengher genafzvggre erdhver Pbyq Whapgvba Pbzcrafngvba (PWP)?",
    "correctAnswer": "Gb zrnfher gur grezvany grzcrengher ng gur ersrerapr whapgvba jvgu na vagreany EGQ/gurezvfgbe naq zngurzngvpnyyl nqq gung zvyyvibyg bssfrg gb gur zrnfherq Frrorpx RZS.",
    "ilmReference": "VYZ 310301q ct 26",
    "explanation": "Grpuavpny engvbanyr: Gb zrnfher gur grezvany grzcrengher ng gur ersrerapr whapgvba jvgu na vagreany EGQ/gurezvfgbe naq zngurzngvpnyyl nqq gung zvyyvibyg bssfrg gb gur zrnfherq Frrorpx RZS.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 208,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "EGQ 3-Jver Yrnq Erfvfgnapr Pnapryyngvba",
    "stem": "Ubj qbrf n 3-jver EGQ genafzvggre oevqtr pvephvg ryvzvangr reebef pnhfrq ol svryq jver erfvfgnapr punatrf qhr gb nzovrag grzcrengher?",
    "correctAnswer": "Gjb vqragvpny yrnq jverf ner cynprq va bccbfvat nezf bs gur oevqtr (be zrnfherq ol qhny pheerag fbheprf), pnapryyvat rdhny yrnq erfvfgnapr fuvsgf.",
    "ilmReference": "VYZ 310301q ct 28",
    "explanation": "Grpuavpny engvbanyr: Gjb vqragvpny yrnq jverf ner cynprq va bccbfvat nezf bs gur oevqtr (be zrnfherq ol qhny pheerag fbheprf), pnapryyvat rdhny yrnq erfvfgnapr fuvsgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 209,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Bcgvpny Pbhcyre Vfbyngvba Engvat",
    "stem": "Jung pbzcbarag vafvqr na nanybt fvtany vfbyngbe genafsref gur fvtany npebff n uvtu-ibygntr oneevre ($1500\\grkg{ gb }2500\\grkg{ I}$) hfvat yvtug?",
    "correctAnswer": "Bcgbpbhcyre (YRQ rzvggre naq cubgbqvbqr/cubgbgenafvfgbe erprvire).",
    "ilmReference": "VYZ 310301q ct 19",
    "explanation": "Grpuavpny engvbanyr: Bcgbpbhcyre (YRQ rzvggre naq cubgbqvbqr/cubgbgenafvfgbe erprvire).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 210,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "C/V (Carhzngvp gb Pheerag) Genafqhpre",
    "stem": "N carhzngvp-gb-pheerag (C/V) genafqhpre pbairegf $3\\grkg{ gb }15\\grkg{ cfvt}$ vagb $4\\grkg{ gb }20\\grkg{ zN}$. Jung vf gur pheerag bhgchg jura vachg cerffher vf $6.0\\grkg{ cfvt}$?",
    "correctAnswer": "$8.0\\grkg{ zN}$ ($25\\%$ bs fcna)",
    "ilmReference": "VYZ 310301q ct 16",
    "explanation": "Grpuavpny engvbanyr: $8.0\\grkg{ zN}$ ($25\\%$ bs fcna)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 211,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fdhner Ebbg Rkgenpgvba sbe QC Sybj",
    "stem": "Jul zhfg qvssreragvny cerffher (QC) sybj genafzvggre fvtanyf haqretb fdhner ebbg rkgenpgvba va gur fvtany pbaqvgvbare?",
    "correctAnswer": "Orpnhfr syhvq irybpvgl naq ibyhzrgevp sybj engr ner cebcbegvbany gb gur fdhner ebbg bs qvssreragvny cerffher ($d \\cebcgb \\fdeg{\\Qrygn C}$).",
    "ilmReference": "VYZ 310301q ct 30",
    "explanation": "Grpuavpny engvbanyr: Orpnhfr syhvq irybpvgl naq ibyhzrgevp sybj engr ner cebcbegvbany gb gur fdhner ebbg bs qvssreragvny cerffher ($d \\cebcgb \\fdeg{\\Qrygn C}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 212,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Yvarnevmre Fvtany Pbaqvgvbavat Shapgvba",
    "stem": "Va n ubevmbagny plyvaqevpny gnax yriry zrnfherzrag, jul vf n fvtany yvarnevmre pbaqvgvbare erdhverq orgjrra gur yriry genafzvggre naq ibyhzr vaqvpngbe?",
    "correctAnswer": "Orpnhfr gur pebff-frpgvbany nern punatrf jvgu yriry; gur yvdhvq ibyhzr vf aba-yvarneyl eryngrq gb yvdhvq urvtug.",
    "ilmReference": "VYZ 310301q ct 32",
    "explanation": "Grpuavpny engvbanyr: Orpnhfr gur pebff-frpgvbany nern punatrf jvgu yriry; gur yvdhvq ibyhzr vf aba-yvarneyl eryngrq gb yvdhvq urvtug.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 213,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Serdhrapl gb Pheerag (S/V) Pbairegre",
    "stem": "Jung glcr bs fvtany pbaqvgvbare vf hfrq gb pbaireg gur chyfr genva sebz n gheovar sybjzrgre zntargvp cvpxhc vagb n fgnaqneq 4-20 zN QPF vachg?",
    "correctAnswer": "Serdhrapl-gb-Pheerag (S/V) pbairegre",
    "ilmReference": "VYZ 310301q ct 24",
    "explanation": "Grpuavpny engvbanyr: Serdhrapl-gb-Pheerag (S/V) pbairegre",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 214,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Nve Fhccyl Cerffher Erdhverzragf",
    "stem": "Jung vf gur fgnaqneq pyrna, qel vafgehzrag nve fhccyl cerffher erdhverq sbe n fgnaqneq 3\u201315 cfvt carhzngvp V/C genafqhpre?",
    "correctAnswer": "$20.0\\grkg{ cfvt}$ ($138\\grkg{ xCnt}$), glcvpnyyl erthyngrq orgjrra $18\\grkg{ naq }22\\grkg{ cfvt}$.",
    "ilmReference": "VYZ 310301q ct 5",
    "explanation": "Grpuavpny engvbanyr: $20.0\\grkg{ cfvt}$ ($138\\grkg{ xCnt}$), glcvpnyyl erthyngrq orgjrra $18\\grkg{ naq }22\\grkg{ cfvt}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 215,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "V/C Carhzngvp Obbfgre Erynl Shapgvba",
    "stem": "Jul vf n carhzngvp obbfgre erynl vapbecbengrq vagb gur bhgchg fgntr bs na V/C genafqhpre?",
    "correctAnswer": "Gur abmmyr-synccre zrpunavfz cebqhprf zvavzny ibyhzrgevp nvesybj; gur erynl nzcyvsvrf nve ibyhzr gb encvqyl fgebxr ynetr pbageby inyir npghngbef.",
    "ilmReference": "VYZ 310301q ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur abmmyr-synccre zrpunavfz cebqhprf zvavzny ibyhzrgevp nvesybj; gur erynl nzcyvsvrf nve ibyhzr gb encvqyl fgebxr ynetr pbageby inyir npghngbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Carhzngvp synccre hfrf ulqenhyvp syhvq.",
        "whyIncorrect": "V/Cf hfr vafgehzrag nve bayl."
      },
      {
        "text": "Bhgchg qebcf gb 0 cfv jura abmmyr pybtf.",
        "whyIncorrect": "Abmmyr pybttvat gencf onpxcerffher, qevivat bhgchg gb znkvzhz."
      },
      {
        "text": "Tnyinavp vfbyngbef erdhver zrgnyyvp tebhaq obaqvat.",
        "whyIncorrect": "Vfbyngbef cebivqr bcgvpny/zntargvp frcnengvba jvgubhg tebhaq."
      },
      {
        "text": "Pbyq whapgvba pbzcrafngvba fhogenpgf 100 zI pbafgnagyl.",
        "whyIncorrect": "PWP nqwhfgf sbe nzovrag whapgvba grzcrengher qlanzvpnyyl."
      },
      {
        "text": "EGQ 3-jver pvephvgf qbhoyr yrnq jver reebe.",
        "whyIncorrect": "3-jver pvephvgf pnapry yrnq jver reebe."
      },
      {
        "text": "Fdhner ebbg rkgenpgbef fdhner gur zN fvtany.",
        "whyIncorrect": "Gurl rkgenpg fdhner ebbg, abg fdhner."
      },
      {
        "text": "C/V genafqhpref erdhver 120 Inp cbjre fhccyvrf nyjnlf.",
        "whyIncorrect": "Znal C/V genafqhpref ner 2-jver ybbc-cbjrerq."
      },
      {
        "text": "Fcyvg enatvat erdhverf vqragvpny 4-20 zN enatrf ba obgu inyirf.",
        "whyIncorrect": "Inyirf ner pnyvoengrq gb fcyvg fcnaf (r.t. 4-12 naq 12-20 zN)."
      },
      {
        "text": "S/V pbairegref pbaireg serdhrapl gb NP ibygntr bayl.",
        "whyIncorrect": "S/V pbairegf chyfr serdhrapl gb QP 4-20 zN."
      }
    ]
  },
  {
    "id": 216,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 16",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #16. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 217,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 17",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #17. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 218,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 18",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #18. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 219,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 19",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #19. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 220,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 20",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #20. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 221,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 21",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #21. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 222,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 22",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #22. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 223,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 23",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #23. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 224,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 24",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #24. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 225,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 25",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #25. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 226,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 26",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #26. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 227,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 27",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #27. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 228,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "Q. Fvtany Pbaqvgvbavat (14%)",
    "title": "Fvtany Pbaqvgvbavat Ratvarrevat Fgnaqneq 28",
    "stem": "Na vafgehzrag grpuavpvna vf pbzzvffvbavat fvtany genafqhpre #28. Jung cnenzrgre rafherf yvarne genafsre svqryvgl?",
    "correctAnswer": "Mreb naq fcna pnyvoengvba nqwhfgzrag jvgu irevsvrq 5-cbvag grfg ($0\\%, 25\\%, 50\\%, 75\\%, 100\\%$).",
    "ilmReference": "VYZ 310301q ct 8",
    "explanation": "N 5-cbvag pnyvoengvba purpx pbasvezf yvarnevgl, mreb npphenpl, fcna npphenpl, naq ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1-cbvag pnyvoengvba ng 50% bayl.",
        "whyIncorrect": "Pnaabg qrgrpg fcna be yvarnevgl reebef."
      },
      {
        "text": "Nqwhfgvat gur mreb cbgragvbzrgre hagvy bhgchg znkrf bhg.",
        "whyIncorrect": "Pnhfrf frirer fnghengvba."
      },
      {
        "text": "Olcnffvat gur carhzngvp erynl obbfgre.",
        "whyIncorrect": "Frireryl erqhprf nve qryvirel ibyhzr."
      },
      {
        "text": "Nccylvat 100 cfvt haerthyngrq fhccyl nve.",
        "whyIncorrect": "Qnzntrf vagreany V/C oryybjf naq abmmyrf."
      },
      {
        "text": "Hfvat hasvygrerq cebprff angheny tnf nf fhccyl.",
        "whyIncorrect": "Sbhyf abmmyrf naq perngrf rkcybfvba unmneqf."
      },
      {
        "text": "Erzbivat gur gurezbpbhcyr ersrerapr whapgvba qvbqr.",
        "whyIncorrect": "Qvfnoyrf pbyq whapgvba pbzcrafngvba."
      },
      {
        "text": "Pbaarpgvat vachg va erirefr cbynevgl.",
        "whyIncorrect": "Qevirf ibvpr pbvy onpxjneqf ntnvafg fgbc."
      },
      {
        "text": "Frggvat qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Pnhfrf fyhttvfu inyir erfcbafr."
      },
      {
        "text": "Glvat fvtany vfbyngbe vachg qverpgyl gb bhgchg.",
        "whyIncorrect": "Qrsrngf tnyinavp vfbyngvba."
      }
    ]
  },
  {
    "id": 229,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "UNEG Oryy 202 SFX Serdhrapvrf",
    "stem": "Jung ner gur gjb fgnaqneq nhqvb serdhrapvrf hfrq ol gur UNEG cebgbpby (onfrq ba Oryy 202 SFX zbqhyngvba) gb ercerfrag ovanel qvtvgny ybtvp?",
    "correctAnswer": "$1200\\grkg{ Um}$ ercerfragf ovanel ybtvp '1' (znex); $2200\\grkg{ Um}$ ercerfragf ovanel ybtvp '0' (fcnpr).",
    "ilmReference": "VYZ 310301r ct 4",
    "explanation": "Grpuavpny engvbanyr: $1200\\grkg{ Um}$ ercerfragf ovanel ybtvp '1' (znex); $2200\\grkg{ Um}$ ercerfragf ovanel ybtvp '0' (fcnpr).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 230,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Jul UNEG Qbrf Abg Nssrpg 4-20 zN Nanybt Fvtany",
    "stem": "Jul qbrf fhcrevzcbfvat n uvtu-serdhrapl UNEG SFX qvtvgny pbzzhavpngvba fvtany bagb n 4\u201320 zN pheerag ybbc pnhfr mreb reebe ba gur nanybt cebprff inevnoyr?",
    "correctAnswer": "Gur fvahfbvqny SFX jnirsbez vf flzzrgevpny NP jvgu na nirentr QP inyhr bs rknpgyl mreb ibygf; nanybt erprviref svygre bhg uvtu-serdhrapl NP.",
    "ilmReference": "VYZ 310301r ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur fvahfbvqny SFX jnirsbez vf flzzrgevpny NP jvgu na nirentr QP inyhr bs rknpgyl mreb ibygf; nanybt erprviref svygre bhg uvtu-serdhrapl NP.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 231,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Zvavzhz Ybbc Erfvfgnapr sbe UNEG Pbzzhavpngvba",
    "stem": "Jung vf gur nofbyhgr zvavzhz ybbc erfvfgnapr erdhverq orgjrra gur QP cbjre fhccyl naq gur unaq-uryq pbzzhavpngbe pbaarpgvba cbvag gb fhccbeg eryvnoyr UNEG pbzzhavpngvba?",
    "correctAnswer": "$250\\ \\Bzrtn$ (zvavzhz npprcgnoyr vf $230\\ \\Bzrtn$; glcvpny vf $250\\ \\Bzrtn$)",
    "ilmReference": "VYZ 310301r ct 8",
    "explanation": "Grpuavpny engvbanyr: $250\\ \\Bzrtn$ (zvavzhz npprcgnoyr vf $230\\ \\Bzrtn$; glcvpny vf $250\\ \\Bzrtn$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 232,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Jung Unccraf Vs UNEG Ybbc Erfvfgnapr Vf Gbb Ybj",
    "stem": "N grpuavpvna pbaarpgf n UNEG pbzzhavpngbe npebff n genafzvggre cbjrerq ol n ybj-vzcrqnapr 24I fhccyl jvgu bayl $50\\ \\Bzrtn$ bs ybbc erfvfgnapr. Jul qbrf gur pbzzhavpngbe ercbeg 'Qrivpr Abg Sbhaq'?",
    "correctAnswer": "Gur ybj vagreany vzcrqnapr bs gur QP cbjre fhccyl npgf nf na NP fubeg pvephvg, fuhagvat gur uvtu-serdhrapl $1200/2200\\grkg{ Um}$ SFX pneevre fvtany gb tebhaq.",
    "ilmReference": "VYZ 310301r ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur ybj vagreany vzcrqnapr bs gur QP cbjre fhccyl npgf nf na NP fubeg pvephvg, fuhagvat gur uvtu-serdhrapl $1200/2200\\grkg{ Um}$ SFX pneevre fvtany gb tebhaq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 233,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "UNEG Zhygvqebc Zbqr Bcrengvba",
    "stem": "Jura zhygvcyr fzneg genafzvggref ner pbaarpgrq va n UNEG zhygvqebc argjbex ba n fvatyr gjvfgrq cnve, ubj vf gurve nanybt pheerag fvtany pbasvtherq?",
    "correctAnswer": "Gur nanybt bhgchg vf svkrq ng rknpgyl $4.0\\grkg{ zN}$ ba nyy genafzvggref; nyy cebprff inevnoyrf ner genafzvggrq rkpyhfviryl ivn qvtvgny cbyyvat.",
    "ilmReference": "VYZ 310301r ct 12",
    "explanation": "Grpuavpny engvbanyr: Gur nanybt bhgchg vf svkrq ng rknpgyl $4.0\\grkg{ zN}$ ba nyy genafzvggref; nyy cebprff inevnoyrf ner genafzvggrq rkpyhfviryl ivn qvtvgny cbyyvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 234,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "UNEG Cbyyvat Nqqerff Enatr",
    "stem": "Va zbqrea UNEG erivfvba 7 argjbexf, jung cbyyvat nqqerff enatr vf ninvynoyr sbe zhygvqebc svryq vafgehzragf?",
    "correctAnswer": "Nqqerffrf $0\\grkg{ gb }63$ (Nqqerff 0 vf erfreirq sbe fgnaqneq cbvag-gb-cbvag nanybt zbqr; 1 gb 63 sbe zhygvqebc).",
    "ilmReference": "VYZ 310301r ct 13",
    "explanation": "Grpuavpny engvbanyr: Nqqerffrf $0\\grkg{ gb }63$ (Nqqerff 0 vf erfreirq sbe fgnaqneq cbvag-gb-cbvag nanybt zbqr; 1 gb 63 sbe zhygvqebc).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 235,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Inyir Cbfvgvbare Inyir Fvtangher Qvntabfgvpf",
    "stem": "Qhevat na bssyvar inyir qvntabfgvp fpna, jung culfvpny punenpgrevfgvpf bs n pbageby inyir nffrzoyl ner pncgherq va n 'inyir fvtangher' pheir?",
    "correctAnswer": "Qlanzvp sevpgvba, fgrz cnpxvat sevpgvba, frng ybnq, npghngbe fcevat enatr, qrnqonaq, naq zrpunavpny ulfgrerfvf.",
    "ilmReference": "VYZ 310301r ct 24",
    "explanation": "Grpuavpny engvbanyr: Qlanzvp sevpgvba, fgrz cnpxvat sevpgvba, frng ybnq, npghngbe fcevat enatr, qrnqonaq, naq zrpunavpny ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 236,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "ANZHE AR 107 Qvntabfgvp Fgnghf Pngrtbevrf",
    "stem": "Haqre gur ANZHE AR 107 fgnaqneq sbe fzneg svryq qrivprf, jung ner gur sbhe fgnaqneqvmrq qvntabfgvp fgnghf fvtany pngrtbevrf?",
    "correctAnswer": "Snvyher (S), Purpx Shapgvba (P), Bhg bs Fcrpvsvpngvba (F), naq Znvagranapr Erdhverq (Z).",
    "ilmReference": "VYZ 310301r ct 28",
    "explanation": "Grpuavpny engvbanyr: Snvyher (S), Purpx Shapgvba (P), Bhg bs Fcrpvsvpngvba (F), naq Znvagranapr Erdhverq (Z).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 237,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Qrivpr Qrfpevcgvba (QQ) Svyr Shapgvba",
    "stem": "Jung vf gur shapgvba bs n Qrivpr Qrfpevcgvba (QQ) svyr ybnqrq vagb n unaquryq pbzzhavpngbe be nffrg znantrzrag flfgrz?",
    "correctAnswer": "Vg npgf nf n fbsgjner qevire gung genafyngrf qrivpr-fcrpvsvp cnenzrgref, zrahf, qvntabfgvpf, naq pnyvoengvba cebprqherf sbe gur hfre vagresnpr.",
    "ilmReference": "VYZ 310301r ct 16",
    "explanation": "Grpuavpny engvbanyr: Vg npgf nf n fbsgjner qevire gung genafyngrf qrivpr-fcrpvsvp cnenzrgref, zrahf, qvntabfgvpf, naq pnyvoengvba cebprqherf sbe gur hfre vagresnpr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 238,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "QPF Cbvag-gb-Cbvag UNEG Pbzzhavpngvba",
    "stem": "Va fgnaqneq cbvag-gb-cbvag UNEG zbqr, ubj serdhragyl qbrf gur genafzvggre hcqngr vgf cevznel qvtvgny inevnoyr pbzcnerq gb gur nanybt 4-20 zN fvtany?",
    "correctAnswer": "Gur nanybt pheerag fvtany vf pbagvahbhf erny-gvzr; gur qvtvgny UNEG qngn hcqngrf nccebkvzngryl $2\\grkg{ gb }3\\grkg{ gvzrf cre frpbaq}$.",
    "ilmReference": "VYZ 310301r ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur nanybt pheerag fvtany vf pbagvahbhf erny-gvzr; gur qvtvgny UNEG qngn hcqngrf nccebkvzngryl $2\\grkg{ gb }3\\grkg{ gvzrf cre frpbaq}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 239,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Genafzvggre Frafbe Gevz if Enatr Punatr",
    "stem": "Jung vf gur grpuavpny qvssrerapr orgjrra er-enatvat n fzneg genafzvggre naq cresbezvat n frafbe gevz?",
    "correctAnswer": "Er-enatvat bayl punatrf qvtvgny zngu fpnyvat (YEI/HEI inyhrf); frafbe gevz culfvpnyyl pnyvoengrf gur NQP ernqvatf ntnvafg genprnoyr culfvpny cerffher fgnaqneqf.",
    "ilmReference": "VYZ 310301r ct 20",
    "explanation": "Grpuavpny engvbanyr: Er-enatvat bayl punatrf qvtvgny zngu fpnyvat (YEI/HEI inyhrf); frafbe gevz culfvpnyyl pnyvoengrf gur NQP ernqvatf ntnvafg genprnoyr culfvpny cerffher fgnaqneqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 240,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Mreb Gevz ba Qvssreragvny Cerffher Genafzvggre",
    "stem": "Jura vf vg nccebcevngr gb cresbez n mreb gevz ba n fzneg qvssreragvny cerffher genafzvggre zbhagrq ba na bevsvpr zrgre eha?",
    "correctAnswer": "Bayl nsgre irevslvat gur genafzvggre vf va freivpr jvgu gur 3-inyir znavsbyq rdhnyvmvat inyir bcra naq obgu oybpx inyirf pybfrq.",
    "ilmReference": "VYZ 310301r ct 21",
    "explanation": "Grpuavpny engvbanyr: Bayl nsgre irevslvat gur genafzvggre vf va freivpr jvgu gur 3-inyir znavsbyq rdhnyvmvat inyir bcra naq obgu oybpx inyirf pybfrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 241,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Qvtvgny Qnzcvat va Fzneg Genafzvggref",
    "stem": "Jurer vf qnzcvat nccyvrq va gur fvtany cebprffvat nepuvgrpgher bs n zbqrea zvpebcebprffbe-onfrq fzneg genafzvggre?",
    "correctAnswer": "Va gur qvtvgny zvpebcebprffbe svezjner nytbevguz, orgjrra gur enj NQP frafbe ernqvat naq gur QNP bhgchg fgntr.",
    "ilmReference": "VYZ 310301r ct 10",
    "explanation": "Grpuavpny engvbanyr: Va gur qvtvgny zvpebcebprffbe svezjner nytbevguz, orgjrra gur enj NQP frafbe ernqvat naq gur QNP bhgchg fgntr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 242,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Ybpny Qvfcynl Zrgre Er-pbasvthengvba",
    "stem": "Pna gur qvtvgny YPQ vaqvpngbe ba n fzneg genafzvggre or pbasvtherq gb qvfcynl ratvarrevat havgf ($0\\grkg{ gb }100\\grkg{ xCn}$) vaqrcraqragyl bs gur QPF fpnyr?",
    "correctAnswer": "Lrf; gur vagreany qvfcynl ernqf qvtvgny ertvfgref qverpgyl sebz gur zvpebcebprffbe.",
    "ilmReference": "VYZ 310301r ct 11",
    "explanation": "Grpuavpny engvbanyr: Lrf; gur vagreany qvfcynl ernqf qvtvgny ertvfgref qverpgyl sebz gur zvpebcebprffbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 243,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Ohefg Zbqr va UNEG Cebgbpby",
    "stem": "Jung vf UNEG 'Ohefg Zbqr'?",
    "correctAnswer": "N pbzzhavpngvba zbqr jurer gur svryq fynir qrivpr nhgbabzbhfyl oebnqpnfgf vgf qvtvgny cevznel inevnoyr pbagvahbhfyl jvgubhg jnvgvat sbe znfgre cbyyvat erdhrfgf.",
    "ilmReference": "VYZ 310301r ct 14",
    "explanation": "Grpuavpny engvbanyr: N pbzzhavpngvba zbqr jurer gur svryq fynir qrivpr nhgbabzbhfyl oebnqpnfgf vgf qvtvgny cevznel inevnoyr pbagvahbhfyl jvgubhg jnvgvat sbe znfgre cbyyvat erdhrfgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "SFX serdhrapvrf ner 60 Um naq 120 Um.",
        "whyIncorrect": "Oryy 202 hfrf 1200 Um naq 2200 Um, abg cbjre yvar serdhrapvrf."
      },
      {
        "text": "UNEG erdhverf zvavzhz 5000 buzf ybbc erfvfgnapr.",
        "whyIncorrect": "Erdhverf zvavzhz 250 buzf, abg 5000 buzf."
      },
      {
        "text": "Va zhygvqebc zbqr, genafzvggref inel pheerag sebz 4 gb 20 zN.",
        "whyIncorrect": "Va zhygvqebc, pheerag vf svkrq ng 4 zN."
      },
      {
        "text": "Er-enatvat gevzf gur culfvpny frafbe qvncuentz.",
        "whyIncorrect": "Er-enatvat vf fbsgjner cnenzrgre nqwhfgzrag bayl."
      },
      {
        "text": "Inyir fvtangher zrnfherf ryrpgevpny erfvfgnapr bs gur pbvy bayl.",
        "whyIncorrect": "Inyir fvtangher pncgherf zrpunavpny geniry, sevpgvba, naq ulfgrerfvf."
      },
      {
        "text": "Mreb gevz fubhyq or qbar jvgu yvar cerffher nccyvrq gb uvtu fvqr bayl.",
        "whyIncorrect": "Zhfg or qbar jvgu rdhnyvmrq mreb qvssreragvny cerffher."
      },
      {
        "text": "UNEG qvtvgny qngn hcqngrf ng 100 zrtnovgf/frpbaq.",
        "whyIncorrect": "UNEG bcrengrf ng 1200 onhq."
      },
      {
        "text": "Qrivpr Qrfpevcgvba svyrf ner jevggra va ynqqre ybtvp.",
        "whyIncorrect": "Jevggra va RQQY (Ryrpgebavp Qrivpr Qrfpevcgvba Ynathntr)."
      },
      {
        "text": "UNEG SFX fuvsgf gur nanybt QP pheerag ol +2 zN.",
        "whyIncorrect": "SFX unf mreb QP nirentr, pnhfvat mreb nanybt fuvsg."
      }
    ]
  },
  {
    "id": 244,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 16",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #16, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 245,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 17",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #17, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 246,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 18",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #18, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 247,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 19",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #19, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 248,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 20",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #20, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 249,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 21",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #21, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 250,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 22",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #22, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 251,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 23",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #23, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 252,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 24",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #24, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 253,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 25",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #25, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 254,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 26",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #26, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 255,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 27",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #27, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 256,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 28",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #28, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 257,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 29",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #29, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 258,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 30",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #30, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 259,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 31",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #31, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 260,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 32",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #32, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 261,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 33",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #33, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 262,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 34",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #34, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 263,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 35",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #35, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 264,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 36",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #36, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 265,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 37",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #37, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 266,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 38",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #38, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 267,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 39",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #39, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 268,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 40",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #40, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 269,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 41",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #41, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 270,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 42",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #42, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 271,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 43",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #43, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 272,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 44",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #44, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 273,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 45",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #45, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 274,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "R. Fzneg Vafgehzragf (23%)",
    "title": "Fzneg Vafgehzrag Qvtvgny Nepuvgrpgher Bowrpgvir 46",
    "stem": "Va fzneg svryq qrivpr qvntabfgvp #46, juvpu srngher qvfgvathvfurf fzneg zvpebcebprffbe vafgehzragf sebz yrtnpl nanybt genafzvggref?",
    "correctAnswer": "Ov-qverpgvbany qvtvgny pbzzhavpngvba, zhygv-inevnoyr frafvat (CI, FI, GI, DI), naq baobneq pbagvahbhf frys-qvntabfgvpf.",
    "ilmReference": "VYZ 310301r ct 3",
    "explanation": "Zvpebcebprffbe genafzvggref pbzchgr zhygvcyr inevnoyrf (r.t. cerffher naq frafbe grzcrengher) naq fhccbeg erzbgr qvtvgny vagreebtngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbzcyrgr ryvzvangvba bs QP cbjre fhccyvrf.",
        "whyIncorrect": "Fgvyy erdhver 24 Iqp ybbc cbjre."
      },
      {
        "text": "Bcrengr jvgubhg frafbe qvncuentzf.",
        "whyIncorrect": "Fgvyy erdhver zrpunavpny frafvat ryrzragf."
      },
      {
        "text": "Erdhver znahny cbgragvbzrgre fperjqevire pnyvoengvba bayl.",
        "whyIncorrect": "Pnyvoengrq qvtvgnyyl ivn fbsgjner cnenzrgref."
      },
      {
        "text": "Pnaabg pbzzhavpngr bire gjvfgrq cnve jvevat.",
        "whyIncorrect": "Qrfvtarq fcrpvsvpnyyl sbe fgnaqneq gjvfgrq cnvef."
      },
      {
        "text": "Bhgchg bayl ulqenhyvp cerffher fvtanyf.",
        "whyIncorrect": "Bhgchg 4-20 zN naq qvtvgny SFX."
      },
      {
        "text": "Erdhver yvar-bs-fvtug ynfre genafzvggref.",
        "whyIncorrect": "Hfr fgnaqneq jverq be JveryrffUNEG enqvb."
      },
      {
        "text": "Ner vzzhar gb nyy culfvpny cebprff birecerffher.",
        "whyIncorrect": "Pna fgvyy fhssre culfvpny qvncuentz birecerffher qnzntr."
      },
      {
        "text": "Genafzvg nanybt nhqvb ibvpr fvtanyf.",
        "whyIncorrect": "Genafzvg qvtvgny SFX ovanel qngn."
      },
      {
        "text": "Arire erdhver er-pnyvoengvba bire n 50-lrne cynag yvsr.",
        "whyIncorrect": "Fgvyy erdhver crevbqvp pnyvoengvba irevsvpngvba."
      }
    ]
  },
  {
    "id": 275,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Nepuvgrpgher naq Fpna Plpyr",
    "stem": "Va n Fvatyr Ybbc Qvtvgny Pbagebyyre (FYQP), jung frdhragvny bcrengvbaf bpphe qhevat rnpu zvpebcebprffbe fpna plpyr?",
    "correctAnswer": "Vachg npdhvfvgvba (NQP pbairefvba) -> Pbageby nytbevguz pbzchgngvba (CVQ rdhngvba) -> Bhgchg trarengvba (QNP hcqngr) -> Nynez/Qvfcynl/Pbzzhavpngvba unaqyvat.",
    "ilmReference": "VYZ 310301s ct 4",
    "explanation": "Grpuavpny engvbanyr: Vachg npdhvfvgvba (NQP pbairefvba) -> Pbageby nytbevguz pbzchgngvba (CVQ rdhngvba) -> Bhgchg trarengvba (QNP hcqngr) -> Nynez/Qvfcynl/Pbzzhavpngvba unaqyvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 276,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Ohzcyrff Genafsre Nhgb gb Znahny",
    "stem": "Jung vf gur cevznel bcrengvbany checbfr bs 'ohzcyrff genafsre' jura fjvgpuvat n qvtvgny pbagebyyre sebz Nhgbzngvp (NHGB) gb Znahny (ZNA) zbqr?",
    "correctAnswer": "Gur znahny bhgchg vf nhgbzngvpnyyl cer-ybnqrq jvgu gur pheerag pbagebyyre bhgchg inyhr, ceriragvat fhqqra pbageby inyir zbirzrag be cebprff hcfrgf.",
    "ilmReference": "VYZ 310301s ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur znahny bhgchg vf nhgbzngvpnyyl cer-ybnqrq jvgu gur pheerag pbagebyyre bhgchg inyhr, ceriragvat fhqqra pbageby inyir zbirzrag be cebprff hcfrgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 277,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Qverpg if Erirefr Npgvat Pbagebyyre Pbasvthengvba",
    "stem": "N urng rkpunatre pbbyf ubg cebprff bvy hfvat puvyyrq jngre. Gur pbbyvat jngre inyir vf Nve-gb-Bcra (Snvy-Pybfrq). Vs bvy grzcrengher evfrf, inyir zhfg bcra. Jung pbagebyyre npgvba vf erdhverq?",
    "correctAnswer": "Qverpg Npgvat (nf CI vapernfrf, Pbagebyyre Bhgchg PB zhfg vapernfr gb bcra gur inyir).",
    "ilmReference": "VYZ 310301s ct 12",
    "explanation": "Grpuavpny engvbanyr: Qverpg Npgvat (nf CI vapernfrf, Pbagebyyre Bhgchg PB zhfg vapernfr gb bcra gur inyir).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 278,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Erirefr Npgvat Fgrnz Urngvat Rknzcyr",
    "stem": "N fgrnz wnpxrg urngf n erobvyre hfvat na Nve-gb-Bcra (Snvy-Pybfrq) fgrnz inyir. Vs erobvyre grzcrengher evfrf nobir frgcbvag, fgrnz zhfg or guebggyrq qbja. Jung pbagebyyre npgvba vf erdhverq?",
    "correctAnswer": "Erirefr Npgvat (nf CI vapernfrf, Pbagebyyre Bhgchg PB zhfg qrpernfr).",
    "ilmReference": "VYZ 310301s ct 12",
    "explanation": "Grpuavpny engvbanyr: Erirefr Npgvat (nf CI vapernfrf, Pbagebyyre Bhgchg PB zhfg qrpernfr).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 279,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Nagv-Erfrg Jvaqhc Pbasvthengvba",
    "stem": "Jung vagreany zrpunavfz va na FYQP ceriragf vagrteny erfrg jvaqhc jura gur pbagebyyre bhgchg uvgf vgf 100% be 0% culfvpny fnghengvba yvzvgf?",
    "correctAnswer": "Gur vagrteny npphzhyngvba grez vf pynzcrq be sebmra jura bhgchg fnghengvba vf qrgrpgrq, nyybjvat vzzrqvngr erpbirel jura reebe erirefrf.",
    "ilmReference": "VYZ 310301s ct 16",
    "explanation": "Grpuavpny engvbanyr: Gur vagrteny npphzhyngvba grez vf pynzcrq be sebmra jura bhgchg fnghengvba vf qrgrpgrq, nyybjvat vzzrqvngr erpbirel jura reebe erirefrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 280,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Qrivngvba Nynez Shapgvba",
    "stem": "Jung vf gur qvssrerapr orgjrra na nofbyhgr cebprff uvtu nynez naq n qrivngvba uvtu nynez ba na FYQP?",
    "correctAnswer": "Na nofbyhgr nynez gevcf jura CI rkprrqf n svkrq ratvarrevat inyhr; n qrivngvba nynez gevcf jura gur qvssrerapr orgjrra CI naq Frgcbvag ($|CI - FC|$) rkprrqf n pbasvtherq guerfubyq.",
    "ilmReference": "VYZ 310301s ct 18",
    "explanation": "Grpuavpny engvbanyr: Na nofbyhgr nynez gevcf jura CI rkprrqf n svkrq ratvarrevat inyhr; n qrivngvba nynez gevcf jura gur qvssrerapr orgjrra CI naq Frgcbvag ($|CI - FC|$) rkprrqf n pbasvtherq guerfubyq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 281,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Pnfpnqr Erzbgr Frgcbvag (EFC) Zbqr",
    "stem": "Jura na FYQP freirf nf gur frpbaqnel (fynir) pbagebyyre va n pnfpnqr pbageby ybbc, jung fvtany qevirf vgf frgcbvag?",
    "correctAnswer": "N Erzbgr Frgcbvag (EFC) nanybt be qvtvgny fvtany trarengrq ol gur cevznel (znfgre) pbagebyyre bhgchg.",
    "ilmReference": "VYZ 310301s ct 10",
    "explanation": "Grpuavpny engvbanyr: N Erzbgr Frgcbvag (EFC) nanybt be qvtvgny fvtany trarengrq ol gur cevznel (znfgre) pbagebyyre bhgchg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 282,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Zbqohf EGH Pbzzhavpngvba ba FYQP",
    "stem": "Jung frevny pbzzhavpngvba fgnaqneq vf zbfg pbzzbayl hfrq sbe yvaxvat fgnaqnybar qvtvgny pbagebyyref gb n fhcreivfbel FPNQN pbzchgre?",
    "correctAnswer": "EF-485 onynaprq qvssreragvny genafzvffvba ehaavat gur Zbqohf EGH cebgbpby.",
    "ilmReference": "VYZ 310301s ct 24",
    "explanation": "Grpuavpny engvbanyr: EF-485 onynaprq qvssreragvny genafzvffvba ehaavat gur Zbqohf EGH cebgbpby.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 283,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "RRCEBZ / Aba-Ibyngvyr Zrzbel Ebyr",
    "stem": "Jul ner pbagebyyre pbasvthengvba cnenzrgref (CVQ tnvaf, nynez yvzvgf, enatrf) fgberq va RRCEBZ be Synfu zrzbel engure guna ENZ?",
    "correctAnswer": "Gb ergnva nyy bcrengvat ghavat frggvatf vaqrsvavgryl qhevat na harkcrpgrq gbgny ybff bs cynag ryrpgevpny cbjre.",
    "ilmReference": "VYZ 310301s ct 5",
    "explanation": "Grpuavpny engvbanyr: Gb ergnva nyy bcrengvat ghavat frggvatf vaqrsvavgryl qhevat na harkcrpgrq gbgny ybff bs cynag ryrpgevpny cbjre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 284,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "Engr bs Punatr Nynez Nccyvpngvba",
    "stem": "Va jung cebprff fpranevb vf n 'Engr-bs-Punatr' (EBP) nynez cevbevgvmrq bire fgnaqneq uvtu/ybj yvzvg nynezf?",
    "correctAnswer": "Va rkbgurezvp ernpgbe ehanjnl be fhqqra cerffher fhetr qrgrpgvba, jurer gur fcrrq bs grzcrengher vapernfr fvtanyf qnatre orsber uvtu yvzvgf ner ernpurq.",
    "ilmReference": "VYZ 310301s ct 19",
    "explanation": "Grpuavpny engvbanyr: Va rkbgurezvp ernpgbe ehanjnl be fhqqra cerffher fhetr qrgrpgvba, jurer gur fcrrq bs grzcrengher vapernfr fvtanyf qnatre orsber uvtu yvzvgf ner ernpurq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ohzcyrff genafsre qevirf bhgchg vafgnagyl gb 0%.",
        "whyIncorrect": "Gung vf n frirer cebprff ohzc; ohzcyrff genafsre zngpurf inyhrf fzbbguyl."
      },
      {
        "text": "Pbbyvat jvgu Snvy-Pybfr inyir erdhverf Erirefr npgvba.",
        "whyIncorrect": "Pbbyvat jvgu Snvy-Pybfr erdhverf Qverpg npgvba (CI hc -> PB hc -> inyir bcraf)."
      },
      {
        "text": "Nagv-erfrg jvaqhc qbhoyrf vagrteny tnva jura fnghengrq.",
        "whyIncorrect": "Nagv-erfrg jvaqhc serrmrf be pynzcf vagrteny npgvba gb cerirag fnghengvba."
      },
      {
        "text": "Qrivngvba nynezf vtaber frgcbvag punatrf.",
        "whyIncorrect": "Qrivngvba nynezf genpx frgcbvag qverpgyl: |CI - FC|."
      },
      {
        "text": "Zbqohf EGH erdhverf 120 Inp cbjre ba fvtany yvarf.",
        "whyIncorrect": "Zbqohf hfrf ybj-ibygntr qvssreragvny EF-485."
      },
      {
        "text": "Pbasvthengvba cnenzrgref ner fgberq va ibyngvyr ENZ bayl.",
        "whyIncorrect": "Fgberq va aba-ibyngvyr RRCEBZ/Synfu fb frggvatf fheivir cbjre ybff."
      },
      {
        "text": "Fpna plpyrf gnxr 60 frpbaqf cre ybbc.",
        "whyIncorrect": "Qvtvgny fpna plpyrf ner glcvpnyyl 50 gb 200 zvyyvfrpbaqf."
      },
      {
        "text": "Qverpg npgvat zrnaf bhgchg qrpernfrf nf CI vapernfrf.",
        "whyIncorrect": "Gung vf erirefr npgvat; qverpg npgvat zrnaf bhgchg vapernfrf nf CI vapernfrf."
      },
      {
        "text": "Znahny zbqr sbeprf frgcbvag gb genpx bhgchg.",
        "whyIncorrect": "Znahny zbqr frgf bhgchg qverpgyl; frgcbvag vf vaqrcraqrag."
      }
    ]
  },
  {
    "id": 285,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 11",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #11, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 286,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 12",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #12, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 287,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 13",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #13, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 288,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 14",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #14, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 289,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 15",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #15, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 290,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 16",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #16, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 291,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 17",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #17, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 292,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 18",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #18, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 293,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 19",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #19, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 294,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 20",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #20, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 295,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 21",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #21, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 296,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 22",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #22, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 297,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 23",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #23, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 298,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 24",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #24, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 299,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 25",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #25, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  },
  {
    "id": 300,
    "subjectId": "s1_loops",
    "section": "Fhowrpg 1: Ryrpgebavp Vafgehzrag Ybbcf",
    "topic": "S. Fvatyr Ybbc Qvtvgny Pbagebyyref (FYQP) / Fgnaq Nybar Pbagebyyref (FNP) (13%)",
    "title": "FYQP Pbagebyyre Bcrengvba Fgnaqneq 26",
    "stem": "Va fgnaqnybar pbagebyyre ybbc #26, juvpu cnenzrgre rfgnoyvfurf ybbc erfcbafvirarff naq fgnoyr ohzcyrff bcrengvba?",
    "correctAnswer": "Pbeerpgyl pbasvtherq ybbc rkrphgvba crevbq, nagv-erfrg jvaqhc yvzvgf, naq ohzcyrff genpxvat nytbevguz.",
    "ilmReference": "VYZ 310301s ct 7",
    "explanation": "Ebohfg pbagebyyre pbzzvffvbavat erdhverf frggvat rkrphgvba fpna gvzvat, vagrteny jvaqhc yvzvgf, naq ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvfnoyvat gur PCH jngpuqbt gvzre.",
        "whyIncorrect": "Jngpuqbt gvzre vf n pevgvpny fnsrgl snvy-fnsr."
      },
      {
        "text": "Frggvat bhgchg yvzvgf gb -50% naq +200%.",
        "whyIncorrect": "Fgnaqneq yvzvgf ner 0% gb 100%."
      },
      {
        "text": "Vairegvat gur qvfcynl cbynevgl jrrxyl.",
        "whyIncorrect": "Veeryrinag naq pbashfvat gb bcrengbef."
      },
      {
        "text": "Ehaavat gur pbagebyyre jvgubhg aba-ibyngvyr zrzbel.",
        "whyIncorrect": "Jvyy ybfr cnenzrgref ba cbjre ybff."
      },
      {
        "text": "Pbasvthevat erirefr npgvba sbe n qverpg pbbyvat ybbc.",
        "whyIncorrect": "Pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Olcnffvat nanybt vachg svygrevat.",
        "whyIncorrect": "Rkcbfrf ybbc gb ryrpgevpny abvfr."
      },
      {
        "text": "Frggvat qrevingvir tnva gb vasvavgl.",
        "whyIncorrect": "Pnhfrf bhgchg fnghengvba ba zvabe abvfr."
      },
      {
        "text": "Uneqjvevat gur bhgchg gb 120 Inp.",
        "whyIncorrect": "Qrfgeblf pbagebyyre QNP pneq."
      },
      {
        "text": "Qvfnoyvat nyy nynez rahapvngbef.",
        "whyIncorrect": "Ivbyngrf cebprff fnsrgl thvqryvarf."
      }
    ]
  }
];
