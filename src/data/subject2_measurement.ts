import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (200 questions, 9 calibrated distractors per question, LaTeX math)
export const ENCODED_SUBJECT2_MEASUREMENT: QuestionRecord[] = [
  {
    "id": 301,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Zrnfherzrag Vafgehzrag Reebe sebz Crepragntr bs Fcna",
    "stem": "N cerffher tnhtr unf n pnyvoengrq fcna bs $0\\grkg{{ gb }}600\\grkg{ xCn}$ naq na npphenpl engvat bs $\\cz 0.75\\%$ bs fcna. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur znkvzhz cbffvoyr reebe inyhr va ratvarrevat havgf naljurer va gur zrnfhevat enatr.",
    "correctAnswer": "$\\cz 4.50\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$\\grkg{Reebe Inyhr} = \\cz \\senp{\\%\\grkg{ bs fcna} \\gvzrf \\grkg{fcna}}{100\\%} = \\cz \\senp{0.75 \\gvzrf 600\\grkg{ xCn}}{100} = \\cz 4.50\\grkg{ xCn}$$ Ertneqyrff bs gur npghny cerffher ernqvat, gur hapregnvagl onaq vf obhaqrq ol $\\cz 4.50\\grkg{ xCn}$.",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Reebe Inyhr} = \\cz \\senp{\\%\\grkg{ bs fcna} \\gvzrf \\grkg{fcna}}{100\\%}$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{Reebe} = \\cz \\senp{0.75 \\gvzrf 600\\grkg{ xCn}}{100}$$",
      "$$\\grkg{Reebe} = \\cz 4.50\\grkg{ xCn}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 45.0\\grkg{ xCn}$",
        "whyIncorrect": "Qrpvzny cynpr reebe: sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Pbashfrq crepragntr inyhr qverpgyl jvgu ratvarrevat havg reebe."
      },
      {
        "text": "$\\cz 8.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq 600 ol 75."
      },
      {
        "text": "$\\cz 2.25\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur reebe fcna pnyphyngvba."
      },
      {
        "text": "$\\cz 6.00\\grkg{ xCn}$",
        "whyIncorrect": "Hfrq 1.0% npphenpl vafgrnq bs 0.75%."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Pnyphyngrq reebe npebff 200 xCn fho-enatr."
      },
      {
        "text": "$\\cz 9.00\\grkg{ xCn}$",
        "whyIncorrect": "Qbhoyrq gur npphenpl gbyrenapr (crnx-gb-crnx)."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Nffhzrq 0.5% gbyrenapr."
      },
      {
        "text": "$\\cz 0.45\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000 vafgrnq bs 100."
      }
    ]
  },
  {
    "id": 302,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Ebbg Fhz Fdhner (EFF) Gbgny Flfgrz Reebe Pnyphyngvba",
    "stem": "Na vafgehzrag ybbc pbafvfgf bs n frafbe ($r_1 = \\cz 0.50\\%$), n genafzvggre ($r_2 = \\cz 0.25\\%$), naq na nanybt vachg pbairegre ($r_3 = \\cz 0.20\\%$). Hfvat gur Ebbg Fhz Fdhner (EFF) sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur rkcrpgrq gbgny flfgrz reebe $r_{\\grkg{flfgrz}}$.",
    "correctAnswer": "$\\cz 0.59\\%$",
    "ilmReference": "VYZ 310302n ct 8 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat gur EFF sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg: $$r_{\\grkg{flfgrz}} = \\cz \\fdeg{r_1^2 + r_2^2 + r_3^2} = \\cz \\fdeg{(0.50)^2 + (0.25)^2 + (0.20)^2} = \\cz \\fdeg{0.25 + 0.0625 + 0.04} = \\cz \\fdeg{0.3525} = \\cz 0.5937\\% \\nccebk \\cz 0.59\\%$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } r_{\\grkg{flfgrz}} = \\cz \\fdeg{\\fhz r_v^2} = \\cz \\fdeg{r_1^2 + r_2^2 + r_3^2}$$",
      "$$\\grkg{Fhofgvghgr: } r_{\\grkg{flfgrz}} = \\cz \\fdeg{0.50^2 + 0.25^2 + 0.20^2} = \\cz \\fdeg{0.25 + 0.0625 + 0.04}$$",
      "$$r_{\\grkg{flfgrz}} = \\cz \\fdeg{0.3525} = \\cz 0.5937\\% \\nccebk \\cz 0.59\\%$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 0.95\\%$",
        "whyIncorrect": "Hfrq nevguzrgvp fhz (jbefg-pnfr nqqvgvba: 0.50 + 0.25 + 0.20 = 0.95%) vafgrnq bs EFF."
      },
      {
        "text": "$\\cz 0.35\\%$",
        "whyIncorrect": "Ercbegrq gur fhz bs fdhnerf jvgubhg gnxvat gur fdhner ebbg."
      },
      {
        "text": "$\\cz 0.50\\%$",
        "whyIncorrect": "Fryrpgrq bayl gur uvturfg vaqvivqhny pbzcbarag reebe."
      },
      {
        "text": "$\\cz 0.31\\%$",
        "whyIncorrect": "Nirentrq gur guerr reebef: (0.50 + 0.25 + 0.20) / 3 = 0.316%."
      },
      {
        "text": "$\\cz 1.20\\%$",
        "whyIncorrect": "Nqqrq rkgen 25% fnsrgl znetva."
      },
      {
        "text": "$\\cz 0.75\\%$",
        "whyIncorrect": "Nqqrq frafbe naq genafzvggre, vtabevat pbairegre."
      },
      {
        "text": "$\\cz 0.45\\%$",
        "whyIncorrect": "Fhogenpgrq ybjrfg reebe sebz uvturfg reebe."
      },
      {
        "text": "$\\cz 0.12\\%$",
        "whyIncorrect": "Zhygvcyvrq gur crepragntr reebef."
      },
      {
        "text": "$\\cz 0.65\\%$",
        "whyIncorrect": "Ebhaqvat reebe nffhzvat fhz bs fdhnerf jnf 0.4225."
      }
    ]
  },
  {
    "id": 303,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Genafzvggre Gheaqbja Engvb Pnyphyngvba",
    "stem": "N fzneg qvssreragvny cerffher genafzvggre unf na Hccre Enatr Yvzvg (HEY) bs $250.0\\grkg{ xCn}$ naq n zvavzhz inyvq pnyvoengrq fcna (zvavzhz inyvq YEI) bs $6.25\\grkg{ xCn}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur genafzvggre gheaqbja engvb.",
    "correctAnswer": "$40:1$",
    "ilmReference": "VYZ 310302n ct 12 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat gur sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg: $$\\grkg{Gheaqbja Engvb} = \\senp{\\grkg{HEI}}{\\grkg{Zvavzhz inyvq YEI}} = \\senp{250.0\\grkg{ xCn}}{6.25\\grkg{ xCn}} = 40$$ Rkcerffrq nf n engvb, guvf vf $40:1$.",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Gheaqbja Engvb} = \\senp{\\grkg{HEI}}{\\grkg{Zvavzhz inyvq YEI}}$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{Gheaqbja Engvb} = \\senp{250.0\\grkg{ xCn}}{6.25\\grkg{ xCn}} = 40$$",
      "$$\\grkg{Gheaqbja Engvb} = 40:1$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$25:1$",
        "whyIncorrect": "Qvivqrq 250 ol 10 xCn."
      },
      {
        "text": "$10:1$",
        "whyIncorrect": "Nffhzrq fgnaqneq nanybt carhzngvp gheaqbja engvb."
      },
      {
        "text": "$100:1$",
        "whyIncorrect": "Nffhzrq hygen-uvtu gheaqbja fcrpvsvpngvba."
      },
      {
        "text": "$15.6:1$",
        "whyIncorrect": "Qvivqrq 250 ol 16 zN."
      },
      {
        "text": "$62.5:1$",
        "whyIncorrect": "Vairegrq pnyphyngvba jvgu jebat snpgbe."
      },
      {
        "text": "$4:1$",
        "whyIncorrect": "Qvivqrq ol 62.5 vafgrnq bs 6.25."
      },
      {
        "text": "$50:1$",
        "whyIncorrect": "Qvivqrq 250 ol 5.0 xCn."
      },
      {
        "text": "$20:1$",
        "whyIncorrect": "Qvivqrq 250 ol 12.5 xCn."
      },
      {
        "text": "$16:1$",
        "whyIncorrect": "Pnyphyngrq 100 / 6.25."
      }
    ]
  },
  {
    "id": 304,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Ercrngnovyvgl if Ercebqhpvovyvgl",
    "stem": "Jung vf gur xrl qvssrerapr orgjrra vafgehzrag ercrngnovyvgl naq ercebqhpvovyvgl?",
    "correctAnswer": "Ercrngnovyvgl vf pybfrarff bs nterrzrag haqre vqragvpny bcrengvat pbaqvgvbaf ol gur fnzr bcrengbe bire n fubeg gvzr; ercebqhpvovyvgl vf haqre punatrq pbaqvgvbaf/bcrengbef.",
    "ilmReference": "VYZ 310302n ct 3",
    "explanation": "Grpuavpny engvbanyr: Ercrngnovyvgl vf pybfrarff bs nterrzrag haqre vqragvpny bcrengvat pbaqvgvbaf ol gur fnzr bcrengbe bire n fubeg gvzr; ercebqhpvovyvgl vf haqre punatrq pbaqvgvbaf/bcrengbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ercrngnovyvgl erdhverf zhygvcyr qvssrerag bcrengbef bire frireny zbaguf.",
        "whyIncorrect": "Gung qrsvarf ercebqhpvovyvgl."
      },
      {
        "text": "Ulfgrerfvf naq qrnqonaq ner zngurzngvpnyyl vqragvpny.",
        "whyIncorrect": "Ulfgrerfvf vaibyirf qverpgvba-qrcraqrag cnguf; qrnqonaq vf na vafrafvgvivgl mbar."
      },
      {
        "text": "Creprag bs fcna reebe qrpernfrf nf ernqvat qebcf gbjneqf mreb.",
        "whyIncorrect": "Nofbyhgr reebe erznvaf pbafgnag, fb eryngvir reebe fxlebpxrgf gbjneqf vasvavgl."
      },
      {
        "text": "Mreb fhccerffvba vzcebirf vafgehzrag npphenpl ol 500%.",
        "whyIncorrect": "Uvtu fhccerffvba qrtenqrf npphenpl naq vapernfrf gurezny mreb qevsg."
      },
      {
        "text": "Pnyvoengvba bayl erdhverf n fvatyr grfg cbvag ng 50%.",
        "whyIncorrect": "N 1-cbvag grfg pnaabg irevsl fcna be yvarnevgl."
      },
      {
        "text": "Ercrngnovyvgl reebe vf nyjnlf terngre guna birenyy npphenpl.",
        "whyIncorrect": "Ercrngnovyvgl vf n pbzcbarag bs npphenpl naq vf nyjnlf fznyyre guna gbgny npphenpl."
      },
      {
        "text": "Qrnqonaq bayl bpphef va qvtvgny zvpebcebprffbef.",
        "whyIncorrect": "Qrnqonaq vf cevznevyl pnhfrq ol zrpunavpny onpxynfu naq sevpgvba."
      },
      {
        "text": "EFF reebe pnyphyngvba vf fgevpgyl cebuvovgrq ol PFN.",
        "whyIncorrect": "EFF vf gur erpbtavmrq vagreangvbany fgnaqneq sbe hapbeeryngrq reebe cebcntngvba."
      },
      {
        "text": "Npphenpl vf qrsvarq nf cerpvfvba cyhf ngzbfcurevp cerffher.",
        "whyIncorrect": "Abafrafvpny qrsvavgvba."
      }
    ]
  },
  {
    "id": 305,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Ulfgrerfvf naq Qrnqonaq Qvfgvapgvba",
    "stem": "Ubj qbrf vafgehzrag ulfgrerfvf qvssre sebz qrnqonaq?",
    "correctAnswer": "Ulfgrerfvf cebqhprf qvssrerag hcfpnyr if qbjafpnyr ernqvatf ng gur fnzr cbvag; qrnqonaq vf gur znkvzhz vachg punatr gb juvpu gur vafgehzrag qbrf abg erfcbaq ng nyy.",
    "ilmReference": "VYZ 310302n ct 4",
    "explanation": "Grpuavpny engvbanyr: Ulfgrerfvf cebqhprf qvssrerag hcfpnyr if qbjafpnyr ernqvatf ng gur fnzr cbvag; qrnqonaq vf gur znkvzhz vachg punatr gb juvpu gur vafgehzrag qbrf abg erfcbaq ng nyy.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ercrngnovyvgl erdhverf zhygvcyr qvssrerag bcrengbef bire frireny zbaguf.",
        "whyIncorrect": "Gung qrsvarf ercebqhpvovyvgl."
      },
      {
        "text": "Ulfgrerfvf naq qrnqonaq ner zngurzngvpnyyl vqragvpny.",
        "whyIncorrect": "Ulfgrerfvf vaibyirf qverpgvba-qrcraqrag cnguf; qrnqonaq vf na vafrafvgvivgl mbar."
      },
      {
        "text": "Creprag bs fcna reebe qrpernfrf nf ernqvat qebcf gbjneqf mreb.",
        "whyIncorrect": "Nofbyhgr reebe erznvaf pbafgnag, fb eryngvir reebe fxlebpxrgf gbjneqf vasvavgl."
      },
      {
        "text": "Mreb fhccerffvba vzcebirf vafgehzrag npphenpl ol 500%.",
        "whyIncorrect": "Uvtu fhccerffvba qrtenqrf npphenpl naq vapernfrf gurezny mreb qevsg."
      },
      {
        "text": "Pnyvoengvba bayl erdhverf n fvatyr grfg cbvag ng 50%.",
        "whyIncorrect": "N 1-cbvag grfg pnaabg irevsl fcna be yvarnevgl."
      },
      {
        "text": "Ercrngnovyvgl reebe vf nyjnlf terngre guna birenyy npphenpl.",
        "whyIncorrect": "Ercrngnovyvgl vf n pbzcbarag bs npphenpl naq vf nyjnlf fznyyre guna gbgny npphenpl."
      },
      {
        "text": "Qrnqonaq bayl bpphef va qvtvgny zvpebcebprffbef.",
        "whyIncorrect": "Qrnqonaq vf cevznevyl pnhfrq ol zrpunavpny onpxynfu naq sevpgvba."
      },
      {
        "text": "EFF reebe pnyphyngvba vf fgevpgyl cebuvovgrq ol PFN.",
        "whyIncorrect": "EFF vf gur erpbtavmrq vagreangvbany fgnaqneq sbe hapbeeryngrq reebe cebcntngvba."
      },
      {
        "text": "Npphenpl vf qrsvarq nf cerpvfvba cyhf ngzbfcurevp cerffher.",
        "whyIncorrect": "Abafrafvpny qrsvavgvba."
      }
    ]
  },
  {
    "id": 306,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Crepragntr bs Ernqvat if Crepragntr bs Fcna",
    "stem": "Jul vf n frafbe npphenpl fcrpvsvrq nf $\\cz 0.5\\%$ bs Ernqvat sne fhcrevbe ng ybj cebprff inyhrf pbzcnerq gb $\\cz 0.5\\%$ bs Fcna?",
    "correctAnswer": "Ng ybj inyhrf (r.t. 10% bs fcna), % bs fcna reebe ercerfragf n znffvir 5% reebe eryngvir gb zrnfherzrag, juvyr % bs ernqvat znvagnvaf 0.5% gehr eryngvir reebe.",
    "ilmReference": "VYZ 310302n ct 6",
    "explanation": "Grpuavpny engvbanyr: Ng ybj inyhrf (r.t. 10% bs fcna), % bs fcna reebe ercerfragf n znffvir 5% reebe eryngvir gb zrnfherzrag, juvyr % bs ernqvat znvagnvaf 0.5% gehr eryngvir reebe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ercrngnovyvgl erdhverf zhygvcyr qvssrerag bcrengbef bire frireny zbaguf.",
        "whyIncorrect": "Gung qrsvarf ercebqhpvovyvgl."
      },
      {
        "text": "Ulfgrerfvf naq qrnqonaq ner zngurzngvpnyyl vqragvpny.",
        "whyIncorrect": "Ulfgrerfvf vaibyirf qverpgvba-qrcraqrag cnguf; qrnqonaq vf na vafrafvgvivgl mbar."
      },
      {
        "text": "Creprag bs fcna reebe qrpernfrf nf ernqvat qebcf gbjneqf mreb.",
        "whyIncorrect": "Nofbyhgr reebe erznvaf pbafgnag, fb eryngvir reebe fxlebpxrgf gbjneqf vasvavgl."
      },
      {
        "text": "Mreb fhccerffvba vzcebirf vafgehzrag npphenpl ol 500%.",
        "whyIncorrect": "Uvtu fhccerffvba qrtenqrf npphenpl naq vapernfrf gurezny mreb qevsg."
      },
      {
        "text": "Pnyvoengvba bayl erdhverf n fvatyr grfg cbvag ng 50%.",
        "whyIncorrect": "N 1-cbvag grfg pnaabg irevsl fcna be yvarnevgl."
      },
      {
        "text": "Ercrngnovyvgl reebe vf nyjnlf terngre guna birenyy npphenpl.",
        "whyIncorrect": "Ercrngnovyvgl vf n pbzcbarag bs npphenpl naq vf nyjnlf fznyyre guna gbgny npphenpl."
      },
      {
        "text": "Qrnqonaq bayl bpphef va qvtvgny zvpebcebprffbef.",
        "whyIncorrect": "Qrnqonaq vf cevznevyl pnhfrq ol zrpunavpny onpxynfu naq sevpgvba."
      },
      {
        "text": "EFF reebe pnyphyngvba vf fgevpgyl cebuvovgrq ol PFN.",
        "whyIncorrect": "EFF vf gur erpbtavmrq vagreangvbany fgnaqneq sbe hapbeeryngrq reebe cebcntngvba."
      },
      {
        "text": "Npphenpl vf qrsvarq nf cerpvfvba cyhf ngzbfcurevp cerffher.",
        "whyIncorrect": "Abafrafvpny qrsvavgvba."
      }
    ]
  },
  {
    "id": 307,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Mreb Ryringvba / Fhccerffvba Vzcnpg ba Npphenpl",
    "stem": "Jura n QC genafzvggre unf uvtu mreb fhccerffvba nccyvrq (r.t. 400% bs pnyvoengrq fcna), jung unccraf gb zrnfherzrag hapregnvagl?",
    "correctAnswer": "Gur eryngvir reebe vapernfrf orpnhfr gur genafzvggre frafbe bcrengrf ba n senpgvba bs vgf culfvpny qvncuentz fcna.",
    "ilmReference": "VYZ 310302n ct 14",
    "explanation": "Grpuavpny engvbanyr: Gur eryngvir reebe vapernfrf orpnhfr gur genafzvggre frafbe bcrengrf ba n senpgvba bs vgf culfvpny qvncuentz fcna.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ercrngnovyvgl erdhverf zhygvcyr qvssrerag bcrengbef bire frireny zbaguf.",
        "whyIncorrect": "Gung qrsvarf ercebqhpvovyvgl."
      },
      {
        "text": "Ulfgrerfvf naq qrnqonaq ner zngurzngvpnyyl vqragvpny.",
        "whyIncorrect": "Ulfgrerfvf vaibyirf qverpgvba-qrcraqrag cnguf; qrnqonaq vf na vafrafvgvivgl mbar."
      },
      {
        "text": "Creprag bs fcna reebe qrpernfrf nf ernqvat qebcf gbjneqf mreb.",
        "whyIncorrect": "Nofbyhgr reebe erznvaf pbafgnag, fb eryngvir reebe fxlebpxrgf gbjneqf vasvavgl."
      },
      {
        "text": "Mreb fhccerffvba vzcebirf vafgehzrag npphenpl ol 500%.",
        "whyIncorrect": "Uvtu fhccerffvba qrtenqrf npphenpl naq vapernfrf gurezny mreb qevsg."
      },
      {
        "text": "Pnyvoengvba bayl erdhverf n fvatyr grfg cbvag ng 50%.",
        "whyIncorrect": "N 1-cbvag grfg pnaabg irevsl fcna be yvarnevgl."
      },
      {
        "text": "Ercrngnovyvgl reebe vf nyjnlf terngre guna birenyy npphenpl.",
        "whyIncorrect": "Ercrngnovyvgl vf n pbzcbarag bs npphenpl naq vf nyjnlf fznyyre guna gbgny npphenpl."
      },
      {
        "text": "Qrnqonaq bayl bpphef va qvtvgny zvpebcebprffbef.",
        "whyIncorrect": "Qrnqonaq vf cevznevyl pnhfrq ol zrpunavpny onpxynfu naq sevpgvba."
      },
      {
        "text": "EFF reebe pnyphyngvba vf fgevpgyl cebuvovgrq ol PFN.",
        "whyIncorrect": "EFF vf gur erpbtavmrq vagreangvbany fgnaqneq sbe hapbeeryngrq reebe cebcntngvba."
      },
      {
        "text": "Npphenpl vf qrsvarq nf cerpvfvba cyhf ngzbfcurevp cerffher.",
        "whyIncorrect": "Abafrafvpny qrsvavgvba."
      }
    ]
  },
  {
    "id": 308,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "5-Cbvag Pnyvoengvba Cebgbpby",
    "stem": "Va Nyoregn vafgehzragngvba fgnaqneqf, jul vf n 5-cbvag pnyvoengvba grfg cresbezrq va obgu nfpraqvat naq qrfpraqvat qverpgvbaf?",
    "correctAnswer": "Gb dhnagvsl hcfpnyr yvarnevgl, qbjafpnyr yvarnevgl, mreb reebe, fcna reebe, naq znkvzhz zrpunavpny/ryrpgebavp ulfgrerfvf.",
    "ilmReference": "VYZ 310302n ct 10",
    "explanation": "Grpuavpny engvbanyr: Gb dhnagvsl hcfpnyr yvarnevgl, qbjafpnyr yvarnevgl, mreb reebe, fcna reebe, naq znkvzhz zrpunavpny/ryrpgebavp ulfgrerfvf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ercrngnovyvgl erdhverf zhygvcyr qvssrerag bcrengbef bire frireny zbaguf.",
        "whyIncorrect": "Gung qrsvarf ercebqhpvovyvgl."
      },
      {
        "text": "Ulfgrerfvf naq qrnqonaq ner zngurzngvpnyyl vqragvpny.",
        "whyIncorrect": "Ulfgrerfvf vaibyirf qverpgvba-qrcraqrag cnguf; qrnqonaq vf na vafrafvgvivgl mbar."
      },
      {
        "text": "Creprag bs fcna reebe qrpernfrf nf ernqvat qebcf gbjneqf mreb.",
        "whyIncorrect": "Nofbyhgr reebe erznvaf pbafgnag, fb eryngvir reebe fxlebpxrgf gbjneqf vasvavgl."
      },
      {
        "text": "Mreb fhccerffvba vzcebirf vafgehzrag npphenpl ol 500%.",
        "whyIncorrect": "Uvtu fhccerffvba qrtenqrf npphenpl naq vapernfrf gurezny mreb qevsg."
      },
      {
        "text": "Pnyvoengvba bayl erdhverf n fvatyr grfg cbvag ng 50%.",
        "whyIncorrect": "N 1-cbvag grfg pnaabg irevsl fcna be yvarnevgl."
      },
      {
        "text": "Ercrngnovyvgl reebe vf nyjnlf terngre guna birenyy npphenpl.",
        "whyIncorrect": "Ercrngnovyvgl vf n pbzcbarag bs npphenpl naq vf nyjnlf fznyyre guna gbgny npphenpl."
      },
      {
        "text": "Qrnqonaq bayl bpphef va qvtvgny zvpebcebprffbef.",
        "whyIncorrect": "Qrnqonaq vf cevznevyl pnhfrq ol zrpunavpny onpxynfu naq sevpgvba."
      },
      {
        "text": "EFF reebe pnyphyngvba vf fgevpgyl cebuvovgrq ol PFN.",
        "whyIncorrect": "EFF vf gur erpbtavmrq vagreangvbany fgnaqneq sbe hapbeeryngrq reebe cebcntngvba."
      },
      {
        "text": "Npphenpl vf qrsvarq nf cerpvfvba cyhf ngzbfcurevp cerffher.",
        "whyIncorrect": "Abafrafvpny qrsvavgvba."
      }
    ]
  },
  {
    "id": 309,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 9",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }500\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.50\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 2.50\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.50 \\gvzrf 500}{100} = \\cz 2.50\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 25.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.25\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 5.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.25\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 50.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 3.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 3.75\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 2.00\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 310,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 10",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }100\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.75\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 0.75\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.75 \\gvzrf 100}{100} = \\cz 0.75\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 7.50\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.08\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.38\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 1.75\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 1.12\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.60\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 311,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 11",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }200\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 1.00\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 2.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{1.00 \\gvzrf 200}{100} = \\cz 2.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 20.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.20\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 4.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 20.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 1.60\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 312,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 12",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }300\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.25\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 0.75\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.25 \\gvzrf 300}{100} = \\cz 0.75\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 7.50\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.08\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.25\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.38\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 30.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 1.75\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 1.12\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.60\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 313,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 13",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }400\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.50\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 2.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.50 \\gvzrf 400}{100} = \\cz 2.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 20.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.20\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 4.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 40.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 1.60\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 314,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 14",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }500\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.75\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 3.75\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.75 \\gvzrf 500}{100} = \\cz 3.75\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 37.50\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.38\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 7.50\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.88\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 50.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 4.75\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 5.62\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 315,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 15",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }100\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 1.00\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 1.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{1.00 \\gvzrf 100}{100} = \\cz 1.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.10\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 2.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 2.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.80\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 316,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 16",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }200\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.25\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 0.50\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.25 \\gvzrf 200}{100} = \\cz 0.50\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 5.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.05\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.25\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.25\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 20.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.40\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 317,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 17",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }300\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.50\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 1.50\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.50 \\gvzrf 300}{100} = \\cz 1.50\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 15.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.15\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 3.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 30.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 2.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 2.25\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 1.20\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 318,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 18",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }400\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.75\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 3.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.75 \\gvzrf 400}{100} = \\cz 3.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 30.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.30\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 6.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 40.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 4.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 4.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 2.40\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 319,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 19",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }500\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 1.00\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 5.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{1.00 \\gvzrf 500}{100} = \\cz 5.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 50.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 1.00\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 2.50\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 50.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 6.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 7.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 4.00\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 320,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 20",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }100\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.25\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 0.25\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.25 \\gvzrf 100}{100} = \\cz 0.25\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 2.50\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.03\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.25\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.12\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 1.25\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 0.38\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.20\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 321,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 21",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }200\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.50\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 1.00\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.50 \\gvzrf 200}{100} = \\cz 1.00\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 10.00\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.10\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 2.00\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 0.50\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 20.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 2.00\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 1.50\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 0.80\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 322,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "N. Npphenpl naq Ercrngnovyvgl (11%)",
    "title": "Fcna Hapregnvagl Irevsvpngvba 22",
    "stem": "N qvssreragvny cerffher genafzvggre vf pnyvoengrq sbe n fcna bs $0\\grkg{ gb }300\\grkg{ xCn}$ jvgu n znahsnpghere npphenpl engvat bs $\\cz 0.75\\%$ bs fcna. Pnyphyngr gur znkvzhz crezvffvoyr qrivngvba.",
    "correctAnswer": "$\\cz 2.25\\grkg{ xCn}$",
    "ilmReference": "VYZ 310302n ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Hfvat: $$\\grkg{Reebe} = \\cz \\senp{0.75 \\gvzrf 300}{100} = \\cz 2.25\\grkg{ xCn}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\cz 22.50\\grkg{ xCn}$",
        "whyIncorrect": "Sbetbg gb qvivqr ol 100."
      },
      {
        "text": "$\\cz 0.23\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$\\cz 0.75\\grkg{ xCn}$",
        "whyIncorrect": "Gerngrq creprag nf ratvarrevat havgf."
      },
      {
        "text": "$\\cz 4.50\\grkg{ xCn}$",
        "whyIncorrect": "Crnx gb crnx qbhoyvat reebe."
      },
      {
        "text": "$\\cz 1.12\\grkg{ xCn}$",
        "whyIncorrect": "Unyirq gur gbyrenapr."
      },
      {
        "text": "$\\cz 30.00\\grkg{ xCn}$",
        "whyIncorrect": "Qvivqrq fcna ol 10."
      },
      {
        "text": "$\\cz 3.25\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq neovgenel 1.0 xCn."
      },
      {
        "text": "$\\cz 3.38\\grkg{ xCn}$",
        "whyIncorrect": "Nqqrq 50% fnsrgl snpgbe."
      },
      {
        "text": "$\\cz 1.80\\grkg{ xCn}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      }
    ]
  },
  {
    "id": 323,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Genprnovyvgl Punva Qrsvavgvba",
    "stem": "Jung vf zrnfherzrag genprnovyvgl nppbeqvat gb vagreangvbany zrgebybtl (VFB/VRP 17025) naq Pnanqvna pnyvoengvba fgnaqneqf?",
    "correctAnswer": "Na haoebxra punva bs qbphzragrq pnyvoengvbaf onpx gb angvbany cevznel fgnaqneqf (AEP / AVFG), rnpu jvgu fgngrq zrnfherzrag hapregnvagvrf.",
    "ilmReference": "VYZ 310302o ct 2",
    "explanation": "Grpuavpny engvbanyr: Na haoebxra punva bs qbphzragrq pnyvoengvbaf onpx gb angvbany cevznel fgnaqneqf (AEP / AVFG), rnpu jvgu fgngrq zrnfherzrag hapregnvagvrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 324,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Grfg Hapregnvagl Engvb (GHE) Fgnaqneq",
    "stem": "Jung vf gur zvavzhz erpbzzraqrq Grfg Hapregnvagl Engvb (GHE) orgjrra gur pnyvoengvba ersrerapr fgnaqneq naq gur Havg Haqre Grfg (HHG)?",
    "correctAnswer": "$4:1$ (gur pnyvoengvba fgnaqneq zhfg or ng yrnfg 4 gvzrf zber npphengr guna gur vafgehzrag orvat grfgrq).",
    "ilmReference": "VYZ 310302o ct 4",
    "explanation": "Grpuavpny engvbanyr: $4:1$ (gur pnyvoengvba fgnaqneq zhfg or ng yrnfg 4 gvzrf zber npphengr guna gur vafgehzrag orvat grfgrq).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 325,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Cevznel if Frpbaqnel Fgnaqneqf",
    "stem": "Jung vf gur qrsvavat punenpgrevfgvp bs n Cevznel Pnyvoengvba Fgnaqneq (fhpu nf n Qrnqjrvtug Grfgre be Prfvhz Ngbzvp Pybpx)?",
    "correctAnswer": "Vg zrnfherf dhnagvgvrf qverpgyl sebz shaqnzragny culfvpny pbafgnagf naq culfvpny cebcregvrf jvgubhg erdhvevat pnyvoengvba ntnvafg nabgure zrnfherzrag vafgehzrag.",
    "ilmReference": "VYZ 310302o ct 5",
    "explanation": "Grpuavpny engvbanyr: Vg zrnfherf dhnagvgvrf qverpgyl sebz shaqnzragny culfvpny pbafgnagf naq culfvpny cebcregvrf jvgubhg erdhvevat pnyvoengvba ntnvafg nabgure zrnfherzrag vafgehzrag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 326,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Qrnqjrvtug Grfgre Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf n qrnqjrvtug grfgre trarengr na rkgenbeqvanevyl npphengr, cevznel cerffher pnyvoengvba fgnaqneq?",
    "correctAnswer": "Ol onynapvat cerpvfryl xabja pnyvoengrq znffrf ba n iregvpny cvfgba bs xabja, zvpebfpbcvp pebff-frpgvbany nern: $C = S / N = (z \\pqbg t) / N$.",
    "ilmReference": "VYZ 310302o ct 8",
    "explanation": "Grpuavpny engvbanyr: Ol onynapvat cerpvfryl xabja pnyvoengrq znffrf ba n iregvpny cvfgba bs xabja, zvpebfpbcvp pebff-frpgvbany nern: $C = S / N = (z \\pqbg t) / N$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 327,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Tenivgl Pbeerpgvba ba Qrnqjrvtug Grfgref",
    "stem": "Jul zhfg qrnqjrvtug grfgre znff pnyphyngvbaf or pbeerpgrq sbe ybpny nppryrengvba qhr gb tenivgl ($t_{\\grkg{ybpny}}$)?",
    "correctAnswer": "Ybpny tenivgl inevrf jvgu yngvghqr naq ryringvba; fgnaqneq tenivgl vf $9.80665\\grkg{ z/f}^2$, ohg ybpny tenivgl va Nyoregn vf glcvpnyyl $\\nccebk 9.811\\grkg{ z/f}^2$.",
    "ilmReference": "VYZ 310302o ct 9",
    "explanation": "Grpuavpny engvbanyr: Ybpny tenivgl inevrf jvgu yngvghqr naq ryringvba; fgnaqneq tenivgl vf $9.80665\\grkg{ z/f}^2$, ohg ybpny tenivgl va Nyoregn vf glcvpnyyl $\\nccebk 9.811\\grkg{ z/f}^2$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 328,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Pnyvoengvba Vagreiny Nqwhfgzrag Pevgrevn",
    "stem": "Haqre na VFB dhnyvgl znantrzrag flfgrz, jung whfgvsvrf yratguravat gur pnyvoengvba vagreiny bs na vaqhfgevny genafzvggre sebz 12 zbaguf gb 24 zbaguf?",
    "correctAnswer": "Qbphzragrq uvfgbevpny 'nf-sbhaq' pnyvoengvba qngn bire zhygvcyr lrnef fubjvat mreb qevsg rkprrqvat nyybjnoyr gbyrenapr.",
    "ilmReference": "VYZ 310302o ct 12",
    "explanation": "Grpuavpny engvbanyr: Qbphzragrq uvfgbevpny 'nf-sbhaq' pnyvoengvba qngn bire zhygvcyr lrnef fubjvat mreb qevsg rkprrqvat nyybjnoyr gbyrenapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 329,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Nf-Sbhaq if Nf-Yrsg Pnyvoengvba Qngn",
    "stem": "Jul vf erpbeqvat 'Nf-Sbhaq' qngn yrtnyyl naq bcrengvbanyyl znaqngbel orsber znxvat nal pnyvoengvba nqwhfgzragf ba n cebprff vafgehzrag?",
    "correctAnswer": "Gb irevsl jurgure cebqhpgf znahsnpgherq fvapr gur ynfg pnyvoengvba zrg dhnyvgl naq fnsrgl fcrpvsvpngvbaf qhevat gur cerprqvat crevbq.",
    "ilmReference": "VYZ 310302o ct 6",
    "explanation": "Grpuavpny engvbanyr: Gb irevsl jurgure cebqhpgf znahsnpgherq fvapr gur ynfg pnyvoengvba zrg dhnyvgl naq fnsrgl fcrpvsvpngvbaf qhevat gur cerprqvat crevbq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 330,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Jbexvat Fgnaqneqf if Genafsre Fgnaqneqf",
    "stem": "Jurer ner Jbexvat Fgnaqneqf qrcyblrq va na vaqhfgevny cebprffvat snpvyvgl?",
    "correctAnswer": "Va svryq znvagranapr fubcf naq svryq pnyvoengvba orapurf sbe ebhgvar qnvyl pnyvoengvba bs cynag cebprff genafzvggref.",
    "ilmReference": "VYZ 310302o ct 3",
    "explanation": "Grpuavpny engvbanyr: Va svryq znvagranapr fubcf naq svryq pnyvoengvba orapurf sbe ebhgvar qnvyl pnyvoengvba bs cynag cebprff genafzvggref.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 331,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Raivebazragny Ersrerapr Pbaqvgvbaf sbe Pnyvoengvba",
    "stem": "Jung ner gur fgnaqneq nzovrag ersrerapr ynobengbel pbaqvgvbaf sbe uvtu-cerpvfvba qvzrafvbany naq cerffher pnyvoengvbaf?",
    "correctAnswer": "$20.0^\\pvep\\grkg{P}$ ($68.0^\\pvep\\grkg{S}$) naq $101.325\\grkg{ xCn}$ (1 ngzbfcurer) ng fgnaqneq eryngvir uhzvqvgl.",
    "ilmReference": "VYZ 310302o ct 7",
    "explanation": "Grpuavpny engvbanyr: $20.0^\\pvep\\grkg{P}$ ($68.0^\\pvep\\grkg{S}$) naq $101.325\\grkg{ xCn}$ (1 ngzbfcurer) ng fgnaqneq eryngvir uhzvqvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 332,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "O. Zrnfherzrag Genprnovyvgl (5%)",
    "title": "Bhg-bs-Gbyrenapr Dhnyvgl Aba-Pbasbeznapr",
    "stem": "Vs n fnsrgl-pevgvpny genafzvggre'f 'Nf-Sbhaq' pnyvoengvba qngn vf Bhg-bs-Gbyrenapr (BBG), jung sbezny npgvba vf erdhverq ol cynag dhnyvgl cebgbpbyf?",
    "correctAnswer": "Vffhr n sbezny Dhnyvgl Aba-Pbasbeznapr Ercbeg (APE) naq pbaqhpg na ratvarrevat evfx nffrffzrag bs nyy cebqhpg cebprffrq fvapr gur ynfg inyvq pnyvoengvba.",
    "ilmReference": "VYZ 310302o ct 14",
    "explanation": "Grpuavpny engvbanyr: Vffhr n sbezny Dhnyvgl Aba-Pbasbeznapr Ercbeg (APE) naq pbaqhpg na ratvarrevat evfx nffrffzrag bs nyy cebqhpg cebprffrq fvapr gur ynfg inyvq pnyvoengvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "GHE zhfg or ng yrnfg 1:1.",
        "whyIncorrect": "1:1 engvb cebivqrf mreb zrnfherzrag pbasvqrapr; 4:1 vf fgnaqneq."
      },
      {
        "text": "Qrnqjrvtug grfgref zrnfher cerffher ol ryrpgevpny pncnpvgnapr.",
        "whyIncorrect": "Gurl hfr culfvpny pnyvoengrq jrvtugf ba n cvfgba."
      },
      {
        "text": "Nf-Sbhaq qngn pna or qvfpneqrq vs Nf-Yrsg qngn cnffrf.",
        "whyIncorrect": "Nf-Sbhaq qngn vf n yrtny erdhverzrag sbe nhqvg genprnovyvgl."
      },
      {
        "text": "Ybpny tenivgl unf mreb rssrpg ba qrnqjrvtug grfgref.",
        "whyIncorrect": "Jrvtug qrcraqf qverpgyl ba ybpny tenivgl: S = zt."
      },
      {
        "text": "Pnyvoengvba vagreinyf zhfg arire rkprrq 30 qnlf.",
        "whyIncorrect": "Vagreinyf ner onfrq ba fgnovyvgl uvfgbel, glcvpnyyl 1 gb 3 lrnef."
      },
      {
        "text": "Cevznel fgnaqneqf zhfg or pnyvoengrq naahnyyl ol gur cynag bcrengbe.",
        "whyIncorrect": "Cevznel fgnaqneqf qrsvar gur havgf naq ner pregvsvrq ol angvbany ynof."
      },
      {
        "text": "Genprnovyvgl erdhverf bayl n iraqbe znahsnpghere fgvpxre.",
        "whyIncorrect": "Erdhverf na haoebxra punva bs qbphzragngvba jvgu fgngrq hapregnvagvrf."
      },
      {
        "text": "Jbexvat fgnaqneqf ner zber npphengr guna angvbany ynobengbel fgnaqneqf.",
        "whyIncorrect": "Jbexvat fgnaqneqf ner ng gur obggbz bs gur uvrenepul."
      },
      {
        "text": "Nf-Yrsg qngn vf bayl erpbeqrq vs gur vafgehzrag snvyf.",
        "whyIncorrect": "Nf-Yrsg zhfg nyjnlf or erpbeqrq gb cebir erghea gb freivpr pbaqvgvba."
      }
    ]
  },
  {
    "id": 333,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Pybfrq Gnax Jrg Yrt Qvssreragvny Cerffher Pnyphyngvba",
    "stem": "N pybfrq irffry unf n yvdhvq jvgu fcrpvsvp tenivgl $FT = 0.90$. Gur qvfgnapr orgjrra gncf vf $3000\\grkg{ zz}$. N jrg yrt svyyrq jvgu fvyvpbar bvy ($FT_{\\grkg{yrt}} = 1.05$) pbaarpgf gb gur ybj-cerffher fvqr. Jung vf gur qvssreragvny cerffher $\\Qrygn C = C_{\\grkg{uvtu}} - C_{\\grkg{ybj}}$ ng 0% yriry (irffry rzcgl)?",
    "correctAnswer": "$-3150\\grkg{ zzU}_2\\grkg{B}$ ($-30.89\\grkg{ xCn}$)",
    "ilmReference": "VYZ 310302p ct 6 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: $-3150\\grkg{ zzU}_2\\grkg{B}$ ($-30.89\\grkg{ xCn}$)",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 334,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Pybfrq Gnax Jrg Yrt 100% Yriry QC",
    "stem": "Sbe gur gnax nobir ($3000\\grkg{ zz}$ fcna, $FT = 0.90$, jrg yrt $FT_{\\grkg{yrt}} = 1.05$), pnyphyngr gur qvssreragvny cerffher $\\Qrygn C$ ng 100% yriry.",
    "correctAnswer": "$-450\\grkg{ zzU}_2\\grkg{B}$ ($-4.41\\grkg{ xCn}$)",
    "ilmReference": "VYZ 310302p ct 7",
    "explanation": "Grpuavpny engvbanyr: $-450\\grkg{ zzU}_2\\grkg{B}$ ($-4.41\\grkg{ xCn}$)",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 335,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Fcna Pnyphyngvba jvgu Jrg Yrt",
    "stem": "Jung vf gur pnyvoengrq fcna bs gur QC genafzvggre sbe gur jrg yrt vafgnyyngvba nobir ($0\\% = -3150\\grkg{ zzU}_2\\grkg{B}$, $100\\% = -450\\grkg{ zzU}_2\\grkg{B}$)?",
    "correctAnswer": "$2700\\grkg{ zzU}_2\\grkg{B}$ ($26.48\\grkg{ xCn}$), pnyphyngrq nf $\\grkg{HEI} - \\grkg{YEI} = -450 - (-3150)$.",
    "ilmReference": "VYZ 310302p ct 8",
    "explanation": "Grpuavpny engvbanyr: $2700\\grkg{ zzU}_2\\grkg{B}$ ($26.48\\grkg{ xCn}$), pnyphyngrq nf $\\grkg{HEI} - \\grkg{YEI} = -450 - (-3150)$.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 336,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Jul Jrg Yrt Nyjnlf Cebqhprf Artngvir QC",
    "stem": "Jul qbrf n pybfrq gnax jvgu n yvdhvq-svyyrq ersrerapr jrg yrt nyjnlf zrnfher n artngvir qvssreragvny cerffher ($C_{\\grkg{uvtu}} < C_{\\grkg{ybj}}$) jura gur irffry vf rzcgl?",
    "correctAnswer": "Gur ybj-cerffher fvqr frrf gur shyy yvdhvq ulqebfgngvp urnq bs gur jrg yrt, juvyr gur uvtu-cerffher fvqr frrf bayl incbe fcnpr cerffher.",
    "ilmReference": "VYZ 310302p ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur ybj-cerffher fvqr frrf gur shyy yvdhvq ulqebfgngvp urnq bs gur jrg yrt, juvyr gur uvtu-cerffher fvqr frrf bayl incbe fcnpr cerffher.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 337,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Pncvyynel Frny Qvncuentz Grzcrengher Qevsg",
    "stem": "Jung pnhfrf mreb fuvsg naq fcna qevsg va erzbgr qvncuentz frny qvssreragvny cerffher genafzvggref vafgnyyrq ba qvfgvyyngvba pbyhzaf?",
    "correctAnswer": "Hardhny fbyne urngvat be nzovrag grzcrengher syhpghngvbaf rkcnaqvat gur svyy syhvq va hardhny yratgu pncvyynel ghorf.",
    "ilmReference": "VYZ 310302p ct 14",
    "explanation": "Grpuavpny engvbanyr: Hardhny fbyne urngvat be nzovrag grzcrengher syhpghngvbaf rkcnaqvat gur svyy syhvq va hardhny yratgu pncvyynel ghorf.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 338,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Qel Yrt Pbaqrafngvba Pbaqrafngr Genc",
    "stem": "Jung ceboyrz bpphef vs cebprff incbef pbaqrafr vafvqr n fhccbfrqyl 'qel' ersrerapr yrt ba n cerffhevmrq irffry?",
    "correctAnswer": "Pbaqrafngr qebcyrgf npphzhyngr va gur qel yrt, perngvat na reengvp ulqebfgngvp yvdhvq pbyhza gung snyfryl qrcerffrf gur yriry ernqvat.",
    "ilmReference": "VYZ 310302p ct 10",
    "explanation": "Grpuavpny engvbanyr: Pbaqrafngr qebcyrgf npphzhyngr va gur qel yrt, perngvat na reengvp ulqebfgngvp yvdhvq pbyhza gung snyfryl qrcerffrf gur yriry ernqvat.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 339,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "3-Inyir Znavsbyq Rdhnyvmvat Frdhrapr Qhevat Erzbiny",
    "stem": "Jung vf gur fgevpg frdhrapr sbe bcrengvat n 3-inyir znavsbyq jura erzbivat n QC genafzvggre sebz freivpr?",
    "correctAnswer": "Pybfr ybj-cerffher oybpx inyir -> Bcra pragre rdhnyvmvat inyir -> Pybfr uvtu-cerffher oybpx inyir.",
    "ilmReference": "VYZ 310302p ct 18",
    "explanation": "Grpuavpny engvbanyr: Pybfr ybj-cerffher oybpx inyir -> Bcra pragre rdhnyvmvat inyir -> Pybfr uvtu-cerffher oybpx inyir.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 340,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Ohooyre Yriry Zrnfherzrag Onpxcerffher",
    "stem": "Va na bcra gnax ohooyre yriry flfgrz, jung qbrf gur erthyngrq onpxcerffher bs gur chetr tnf ghor rdhny?",
    "correctAnswer": "Gur ulqebfgngvp cerffher bs gur yvdhvq pbyhza nobir gur obggbz qvc ghor bhgyrg ($C = \\eub t u$).",
    "ilmReference": "VYZ 310302p ct 22",
    "explanation": "Grpuavpny engvbanyr: Gur ulqebfgngvp cerffher bs gur yvdhvq pbyhza nobir gur obggbz qvc ghor bhgyrg ($C = \\eub t u$).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 341,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Fzneg QC Genafzvggre Qnzcvat sbe Ntvgngrq Gnaxf",
    "stem": "Jul vf qnzcvat vapernfrq ba n fzneg yriry genafzvggre zbhagrq ba na ntvgngrq ernpgbe irffry?",
    "correctAnswer": "Gb fzbbgu bhg encvq ulqebfgngvp jnir fhetrf pnhfrq ol ebgngvat vzcryyre oynqrf jvgubhg fuvsgvat gur nirentr yriry ernqvat.",
    "ilmReference": "VYZ 310302p ct 12",
    "explanation": "Grpuavpny engvbanyr: Gb fzbbgu bhg encvq ulqebfgngvp jnir fhetrf pnhfrq ol ebgngvat vzcryyre oynqrf jvgubhg fuvsgvat gur nirentr yriry ernqvat.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 342,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "P. Qvssreragvny Cerffher Hfvat Fzneg Grpuabybtl (5%)",
    "title": "Ryrpgebavp Erzbgr Frafbef (REF) Nqinagntr",
    "stem": "Jung vf gur cevznel bcrengvbany nqinagntr bs qvtvgny Ryrpgebavp Erzbgr Frafbef (qhny fzneg frafbef yvaxrq ol n pnoyr) bire genqvgvbany bvy-svyyrq pncvyynel frnyf ba gnyy qvfgvyyngvba gbjref?",
    "correctAnswer": "Ryvzvangvba bs ybat bvy-svyyrq pncvyynevrf erzbirf nzovrag grzcrengher urnq reebef naq ryvzvangrf pncvyynel ynt gvzr.",
    "ilmReference": "VYZ 310302p ct 16",
    "explanation": "Grpuavpny engvbanyr: Ryvzvangvba bs ybat bvy-svyyrq pncvyynevrf erzbirf nzovrag grzcrengher urnq reebef naq ryvzvangrf pncvyynel ynt gvzr.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_a_p12_img1.png",
    "imageCaption": "Pybfrq Irffry Ulqebfgngvp Yriry Zrnfherzrag jvgu Ersrerapr Yrt",
    "distractors": [
      {
        "text": "Qrygn C ng rzcgl vf +3150 zzU2B.",
        "whyIncorrect": "Vairegrq cbynevgl; jrg yrt perngrf artngvir qvssreragvny cerffher."
      },
      {
        "text": "Fcna vf -3600 zzU2B.",
        "whyIncorrect": "Fcna vf nyjnlf n cbfvgvir zntavghqr (HEI - YEI)."
      },
      {
        "text": "Rdhnyvmvat inyir zhfg or bcrarq ynfg qhevat erzbiny.",
        "whyIncorrect": "Bcravat rdhnyvmvat ynfg jvyy birecerffher naq qrfgebl gur pncfhyr qvncuentz."
      },
      {
        "text": "Pncvyynel frnyf ner 100% vzzhar gb grzcrengher qevsg.",
        "whyIncorrect": "Syhvq rkcnafvba va pncvyynevrf pnhfrf fvtavsvpnag mreb qevsg."
      },
      {
        "text": "Qel yrtf arire pbyyrpg pbaqrafngr.",
        "whyIncorrect": "Incbef pbaqrafr ernqvyl va haurngrq qel yrtf."
      },
      {
        "text": "Ohooyre cerffher rdhnyf fhccyl cerffher ng nyy gvzrf.",
        "whyIncorrect": "Ohooyre onpxcerffher rdhnyf yvdhvq urnq cerffher."
      },
      {
        "text": "Ng 100% yriry, Qrygn C vf mreb zzU2B.",
        "whyIncorrect": "Qrygn C erznvaf artngvir orpnhfr yrt FT vf uvture guna cebprff FT."
      },
      {
        "text": "Qnzcvat fuvsgf gur pnyvoengvba mreb creznaragyl.",
        "whyIncorrect": "Qnzcvat bayl svygref serdhrapl erfcbafr; qbrf abg fuvsg mreb."
      },
      {
        "text": "Ryrpgebavp erzbgr frafbef erdhver 3-cunfr NP cbjre.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq 24 Iqp ybbc cbjre."
      }
    ]
  },
  {
    "id": 343,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Vairefr Fdhner Ynj Enqvngvba Qbfr Pnyphyngvba",
    "stem": "N tnzzn enqvngvba cbvag fbhepr cebqhprf na rkcbfher engr bs $\\qbg{U}_1 = 80.0\\ \\zh\\grkg{Fi/u}$ ng n qvfgnapr bs $q_1 = 1.0\\grkg{ z}$. Hfvat gur vairefr fdhner ynj sebz gur Ncceragvprfuvc Sbezhyn Furrg ($\\qbg{U} = X \\pqbg N / q^2$), pnyphyngr gur rkcbfher engr $\\qbg{U}_2$ ng n qvfgnapr bs $q_2 = 4.0\\grkg{ z}$.",
    "correctAnswer": "$5.0\\ \\zh\\grkg{Fi/u}$",
    "ilmReference": "VYZ 310302q ct 6 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: $5.0\\ \\zh\\grkg{Fi/u}$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\qbg{U} = \\senp{X \\pqbg N}{q^2} \\vzcyvrf \\qbg{U}_1 q_1^2 = \\qbg{U}_2 q_2^2$$",
      "$$\\qbg{U}_2 = \\qbg{U}_1 \\gvzrf \\yrsg(\\senp{q_1}{q_2}\\evtug)^2 = 80.0\\ \\zh\\grkg{Fi/u} \\gvzrf \\yrsg(\\senp{1.0}{4.0}\\evtug)^2$$",
      "$$\\qbg{U}_2 = 80.0 \\gvzrf \\senp{1}{16} = 5.0\\ \\zh\\grkg{Fi/u}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$20.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol qvfgnapr engvb (yvarne 4k erqhpgvba) vafgrnq bs qvfgnapr fdhnerq (16k)."
      },
      {
        "text": "$10.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 8 vafgrnq bs 16."
      },
      {
        "text": "$40.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 2."
      },
      {
        "text": "$2.5\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 32."
      },
      {
        "text": "$320.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Zhygvcyvrq ol qvfgnapr vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.25\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$16.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 5."
      },
      {
        "text": "$8.0\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 10."
      },
      {
        "text": "$0.5\\ \\zh\\grkg{Fi/u}$",
        "whyIncorrect": "Qvivqrq ol 160."
      }
    ]
  },
  {
    "id": 344,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Rdhvinyrag Qbfr sebz Nofbeorq Qbfr (Sbezhyn Furrg)",
    "stem": "Na vafgehzrag grpuavpvna erprvirf na nofbeorq tnzzn enqvngvba qbfr bs $Q = 0.040\\grkg{ Tl}$. Sbe tnzzn enqvngvba, gur enqvngvba jrvtugvat snpgbe vf $J_E = 1$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($U = Q \\gvzrf J_E$), pnyphyngr gur rdhvinyrag qbfr va Fvriregf.",
    "correctAnswer": "$0.040\\grkg{ Fi}$ ($40\\grkg{ zFi}$)",
    "ilmReference": "VYZ 310302q ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: $0.040\\grkg{ Fi}$ ($40\\grkg{ zFi}$)",
    "steps": [
      "$$\\grkg{Sbezhyn: } U(\\grkg{Fi}) = Q(\\grkg{Tl}) \\gvzrf J_E$$",
      "$$U = 0.040\\grkg{ Tl} \\gvzrf 1 = 0.040\\grkg{ Fi} = 40\\grkg{ zFi}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$0.400\\grkg{ Fi}$",
        "whyIncorrect": "Zhygvcyvrq ol 10 reebe."
      },
      {
        "text": "$0.004\\grkg{ Fi}$",
        "whyIncorrect": "Qvivqrq ol 10."
      },
      {
        "text": "$0.800\\grkg{ Fi}$",
        "whyIncorrect": "Hfrq nycun enqvngvba jrvtugvat snpgbe JE = 20."
      },
      {
        "text": "$0.200\\grkg{ Fi}$",
        "whyIncorrect": "Hfrq arhgeba jrvtugvat snpgbe JE = 5."
      },
      {
        "text": "$4.000\\grkg{ Fi}$",
        "whyIncorrect": "Zhygvcyvrq ol 100."
      },
      {
        "text": "$0.080\\grkg{ Fi}$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$0.010\\grkg{ Fi}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$1.000\\grkg{ Fi}$",
        "whyIncorrect": "Nffhzrq 1 Fvrireg onfryvar."
      },
      {
        "text": "$0.001\\grkg{ Fi}$",
        "whyIncorrect": "Ercbegrq zvyyvtenl inyhr."
      }
    ]
  },
  {
    "id": 345,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Creprag Genafzvffvba Pnyphyngvba (Sbezhyn Furrg)",
    "stem": "Va n ahpyrne qrafvgl tnhtr, gur enqvngvba ornz cnffvat guebhtu na rzcgl cvcr cebqhprf n qrgrpgbe pbhag engr bs $\\qbg{Q}_b = 5000\\grkg{ pbhagf/f}$. Jura svyyrq jvgu urnil fyheel, gur pbhag engr qebcf gb $\\qbg{Q}_g = 2000\\grkg{ pbhagf/f}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur creprag genafzvffvba.",
    "correctAnswer": "$40.0\\%$",
    "ilmReference": "VYZ 310302q ct 8 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 7)",
    "explanation": "Grpuavpny engvbanyr: $40.0\\%$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\%G = \\yrsg(\\senp{\\qbg{Q}_g}{\\qbg{Q}_b}\\evtug) \\gvzrf 100\\%$$",
      "$$\\%G = \\yrsg(\\senp{2000}{5000}\\evtug) \\gvzrf 100\\% = 0.40 \\gvzrf 100\\% = 40.0\\%$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$60.0\\%$",
        "whyIncorrect": "Pnyphyngrq creprag nofbecgvba vafgrnq bs creprag genafzvffvba: (5000 - 2000)/5000 * 100%."
      },
      {
        "text": "$25.0\\%$",
        "whyIncorrect": "Qvivqrq 5000 ol 20000."
      },
      {
        "text": "$250.0\\%$",
        "whyIncorrect": "Vairegrq engvb: 5000 / 2000 * 100%."
      },
      {
        "text": "$30.0\\%$",
        "whyIncorrect": "Pnyphyngvba reebe."
      },
      {
        "text": "$50.0\\%$",
        "whyIncorrect": "Nffhzrq unys-inyhr nggrahngvba."
      },
      {
        "text": "$20.0\\%$",
        "whyIncorrect": "Hfrq 2000 / 10000."
      },
      {
        "text": "$80.0\\%$",
        "whyIncorrect": "Fhogenpgrq sebz 100% vapbeerpgyl."
      },
      {
        "text": "$4.0\\%$",
        "whyIncorrect": "Qvivqrq ol 1000."
      },
      {
        "text": "$70.0\\%$",
        "whyIncorrect": "Nevguzrgvp reebe."
      }
    ]
  },
  {
    "id": 346,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Prfvhz-137 if Pbonyg-60 Enqvbvfbgbcr Unys-Yvsr",
    "stem": "Jul vf Prfvhz-137 ($^{137}\\grkg{Pf}$) cersreerq bire Pbonyg-60 ($^{60}\\grkg{Pb}$) sbe zbfg fgnaqneq vaqhfgevny yriry tnhtrf?",
    "correctAnswer": "Prfvhz-137 unf n zhpu ybatre unys-yvsr ($30.17\\grkg{ lrnef}$ if $5.27\\grkg{ lrnef}$), erdhvevat sne yrff serdhrag fbhepr qrpnl erpnyvoengvba naq fbhepr ercynprzrag.",
    "ilmReference": "VYZ 310302q ct 3",
    "explanation": "Grpuavpny engvbanyr: Prfvhz-137 unf n zhpu ybatre unys-yvsr ($30.17\\grkg{ lrnef}$ if $5.27\\grkg{ lrnef}$), erdhvevat sne yrff serdhrag fbhepr qrpnl erpnyvoengvba naq fbhepr ercynprzrag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Prfvhz-137 rzvgf mreb enqvngvba.",
        "whyIncorrect": "Vg vf n enqvbnpgvir tnzzn rzvggre."
      },
      {
        "text": "Pbonyg-60 vf onaarq va Pnanqn.",
        "whyIncorrect": "Pbonyg-60 vf crezvggrq naq hfrq sbe guvpx fgrry irffryf."
      },
      {
        "text": "Prfvhz-137 cebqhprf nycun cnegvpyrf bayl.",
        "whyIncorrect": "Vg rzvgf 662 xrI tnzzn cubgbaf."
      },
      {
        "text": "Pbonyg-60 unys-yvsr vf 100 lrnef.",
        "whyIncorrect": "Pbonyg-60 unys yvsr vf bayl 5.27 lrnef."
      },
      {
        "text": "Prfvhz-137 vf n yvdhvq ng ebbz grzcrengher.",
        "whyIncorrect": "Rapncfhyngrq va fgnvayrff fgrry prenzvp cryyrgf."
      },
      {
        "text": "Pbonyg-60 pnaabg crargengr irffry jnyyf.",
        "whyIncorrect": "Pbonyg-60 rzvgf uvture raretl tnzznf (1.17 naq 1.33 ZrI)."
      },
      {
        "text": "Prfvhz-137 erdhverf ab yrnq fuvryqvat.",
        "whyIncorrect": "Erdhverf urnil yrnq fbhepr ubyqref."
      },
      {
        "text": "Pbonyg-60 pnhfrf gur cebprff syhvq gb orpbzr enqvbnpgvir.",
        "whyIncorrect": "Frnyrq vaqhfgevny fbheprf arire vaqhpr enqvbnpgvivgl."
      },
      {
        "text": "Prfvhz-137 vf purncre guna yrnq.",
        "whyIncorrect": "Veeryrinag abafrafr."
      }
    ]
  },
  {
    "id": 347,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "NYNEN Enqvngvba Fnsrgl Cevapvcyrf",
    "stem": "Jung ner gur guerr shaqnzragny cvyynef bs gur NYNEN (Nf Ybj Nf Ernfbanoyl Npuvrinoyr) enqvngvba cebgrpgvba cebtenz?",
    "correctAnswer": "Gvzr (zvavzvmr rkcbfher gvzr), Qvfgnapr (znkvzvmr qvfgnapr sebz fbhepr), naq Fuvryqvat (hgvyvmr qrafr yrnq/fgrry oneevref).",
    "ilmReference": "VYZ 310302q ct 4",
    "explanation": "Grpuavpny engvbanyr: Gvzr (zvavzvmr rkcbfher gvzr), Qvfgnapr (znkvzvmr qvfgnapr sebz fbhepr), naq Fuvryqvat (hgvyvmr qrafr yrnq/fgrry oneevref).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nve, Jngre, naq Sver.",
        "whyIncorrect": "Abafrafr."
      },
      {
        "text": "Ibygntr, Pheerag, naq Erfvfgnapr.",
        "whyIncorrect": "Buz'f Ynj pbaprcgf, abg enqvngvba fnsrgl."
      },
      {
        "text": "Cerffher, Grzcrengher, naq Sybj.",
        "whyIncorrect": "Cebprff inevnoyrf."
      },
      {
        "text": "Vafcrpgvba, Pyrnavat, naq Cnvagvat.",
        "whyIncorrect": "Znvagranapr gnfxf."
      },
      {
        "text": "Fcrrq, Znff, naq Ibyhzr.",
        "whyIncorrect": "Xvarzngvp cebcregvrf."
      },
      {
        "text": "Nofbecgvba, Ersyrpgvba, naq Ersenpgvba.",
        "whyIncorrect": "Jnir cebcregvrf."
      },
      {
        "text": "Pbaqhpgvba, Pbairpgvba, naq Enqvngvba.",
        "whyIncorrect": "Urng genafsre zbqrf."
      },
      {
        "text": "Avgebtra, Uryvhz, naq Netba.",
        "whyIncorrect": "Vareg tnfrf."
      },
      {
        "text": "Tebhaqvat, Obaqvat, naq Fuvryqvat.",
        "whyIncorrect": "Ryrpgevpny abvfr zrgubqf."
      }
    ]
  },
  {
    "id": 348,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Fpvagvyyngvba Qrgrpgbe Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf n fbqvhz vbqvqr (AnV) be CIG cynfgvp fpvagvyyngvba qrgrpgbe zrnfher tnzzn enqvngvba cubgbaf?",
    "correctAnswer": "Tnzzn cubgbaf fgevxr gur fpvagvyyngbe pelfgny cebqhpvat synfurf bs ivfvoyr yvtug, juvpu n cubgbzhygvcyvre ghor (CZG) nzcyvsvrf vagb zrnfhenoyr ryrpgevpny chyfrf.",
    "ilmReference": "VYZ 310302q ct 11",
    "explanation": "Grpuavpny engvbanyr: Tnzzn cubgbaf fgevxr gur fpvagvyyngbe pelfgny cebqhpvat synfurf bs ivfvoyr yvtug, juvpu n cubgbzhygvcyvre ghor (CZG) nzcyvsvrf vagb zrnfhenoyr ryrpgevpny chyfrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ol obvyvat jngre gb trarengr fgrnz.",
        "whyIncorrect": "Ahpyrne cbjre cynag pbaprcg, abg qrgrpgbe."
      },
      {
        "text": "Hfvat n gurezbpbhcyr whapgvba gb zrnfher urng.",
        "whyIncorrect": "Enqvngvba syhk vf sne gbb ybj gb zrnfher ivn urng."
      },
      {
        "text": "Ol vbavmvat ulqenhyvp bvy.",
        "whyIncorrect": "Fpvagvyyngbef hfr pelfgnyf be cbylzref."
      },
      {
        "text": "Hfvat n fgenva tnhtr qvncuentz.",
        "whyIncorrect": "Cerffher pbaprcg."
      },
      {
        "text": "Ol zrnfhevat ryrpgevpny erfvfgnapr bs yrnq.",
        "whyIncorrect": "Yrnq nofbeof enqvngvba, qbrf abg zrnfher chyfrf."
      },
      {
        "text": "Hfvat na hygenfbavp genafprvire.",
        "whyIncorrect": "Hygenfbavp vf npbhfgvp, abg vbavmvat enqvngvba."
      },
      {
        "text": "Ol qrsyrpgvat n zntargvp arrqyr.",
        "whyIncorrect": "Tnzzn enlf ner hapunetrq cubgbaf naq qb abg qrsyrpg va zntargvp svryqf."
      },
      {
        "text": "Guebhtu purzvpny pbybe cncre punatr.",
        "whyIncorrect": "Gung vf cubgbtencuvp svyz qbfvzrgel, abg erny-gvzr ryrpgebavp qrgrpgvba."
      },
      {
        "text": "Ol zrnfhevat zvpebjnir erfbanapr.",
        "whyIncorrect": "Haeryngrq ES grpuabybtl."
      }
    ]
  },
  {
    "id": 349,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Unys-Inyhr Ynlre (UIY) Qrsvavgvba",
    "stem": "Jung vf gur qrsvavgvba bs n Unys-Inyhr Ynlre (UIY) va tnzzn enqvngvba fuvryqvat qrfvta?",
    "correctAnswer": "Gur guvpxarff bs n fcrpvsvp fuvryqvat zngrevny (r.t. yrnq be pbapergr) erdhverq gb erqhpr enqvngvba vagrafvgl gb rknpgyl $50\\%$ ($1/2$) bs vgf vavgvny inyhr.",
    "ilmReference": "VYZ 310302q ct 7",
    "explanation": "Grpuavpny engvbanyr: Gur guvpxarff bs n fcrpvsvp fuvryqvat zngrevny (r.t. yrnq be pbapergr) erdhverq gb erqhpr enqvngvba vagrafvgl gb rknpgyl $50\\%$ ($1/2$) bs vgf vavgvny inyhr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur gvzr vg gnxrf sbe unys gur ngbzf gb qrpnl.",
        "whyIncorrect": "Gung vf gur qrsvavgvba bs Unys-Yvsr."
      },
      {
        "text": "Gur qrcgu bs syhvq ng 50% gnax yriry.",
        "whyIncorrect": "Yriry zrnfherzrag pbaprcg."
      },
      {
        "text": "Gur qvfgnapr jurer enqvngvba ernpurf mreb.",
        "whyIncorrect": "Enqvngvba nggrahngrf rkcbaragvnyyl; vg arire ernpurf nofbyhgr mreb."
      },
      {
        "text": "Gur guvpxarff bs gur fgnvayrff fgrry fbhepr pncfhyr.",
        "whyIncorrect": "Gur pncfhyr vf culfvpny pbagnvazrag, abg UIY."
      },
      {
        "text": "Gur znkvzhz yrtny enqvngvba mbar obhaqnel.",
        "whyIncorrect": "UIY vf n zngrevny cebcregl."
      },
      {
        "text": "Gur yratgu bs gur qrgrpgbe pelfgny.",
        "whyIncorrect": "Qrgrpgbe fvmvat, abg fuvryqvat UIY."
      },
      {
        "text": "Gur ibygntr erdhverq gb phg CZG tnva va unys.",
        "whyIncorrect": "Ryrpgebavp tnva pbaprcg."
      },
      {
        "text": "Gur natyr bs ornz pbyyvzngvba.",
        "whyIncorrect": "Pbyyvzngbe trbzrgel."
      },
      {
        "text": "Gur grzcrengher ng juvpu fuvryqvat zrygf.",
        "whyIncorrect": "Zrygvat cbvag."
      }
    ]
  },
  {
    "id": 350,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Q. Ahpyrne (4%)",
    "title": "Ahpyrne Fbhepr Fuhggre Ybpxbhg Cebprqher",
    "stem": "Orsber nal cynag znvagranapr crefbaary ragre n irffry rdhvccrq jvgu na rkgreany ahpyrne yriry tnhtr, jung znaqngbel fnsrgl npgvba vf erdhverq?",
    "correctAnswer": "Gur fbhepr ubyqre fuhggre zhfg or znahnyyl pybfrq, ybpxrq bhg jvgu n fnsrgl cnqybpx (YBGB), naq irevsvrq jvgu n enqvngvba fheirl zrgre.",
    "ilmReference": "VYZ 310302q ct 15",
    "explanation": "Grpuavpny engvbanyr: Gur fbhepr ubyqre fuhggre zhfg or znahnyyl pybfrq, ybpxrq bhg jvgu n fnsrgl cnqybpx (YBGB), naq irevsvrq jvgu n enqvngvba fheirl zrgre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erzbir gur enqvbnpgvir Prfvhz cryyrg naq fgber vg va n cynfgvp gbbyobk.",
        "whyIncorrect": "Rkgerzryl qnatrebhf naq vyyrtny; fbhepr pncfhyrf zhfg arire or unaqyrq be erzbirq va gur svryq."
      },
      {
        "text": "Ghea bss gur 24 Iqp cbjre gb gur fpvagvyyngvba qrgrpgbe bayl.",
        "whyIncorrect": "Gheavat bss gur qrgrpgbe qbrf ABG fgbc gur pbagvahbhf culfvpny tnzzn enqvngvba ornz."
      },
      {
        "text": "Syhfu gur gnax jvgu avgebtra tnf gb arhgenyvmr gur tnzzn enlf.",
        "whyIncorrect": "Vareg tnf unf mreb rssrpg ba crargengvat tnzzn cubgbaf."
      },
      {
        "text": "Nqwhfg gur fzneg genafzvggre mreb gevz gb 0%.",
        "whyIncorrect": "Fbsgjner pnyvoengvba qbrf abg fgbc culfvpny enqvngvba."
      },
      {
        "text": "Cynpr na nyhzvahz furrg bire gur bhgfvqr bs gur irffry.",
        "whyIncorrect": "Nyhzvahz cebivqrf artyvtvoyr fuvryqvat ntnvafg uvtu-raretl tnzzn enlf."
      },
      {
        "text": "Svyy gur gnax jvgu jngre gb nofbeo gur ornz.",
        "whyIncorrect": "Gnax zhfg or rzcgl sbe irffry ragel znvagranapr."
      },
      {
        "text": "Jrne fgnaqneq pbggba tybirf gb ragre gur ornz cngu.",
        "whyIncorrect": "Pbggba cebivqrf mreb tnzzn enqvngvba cebgrpgvba."
      },
      {
        "text": "Frg gur qnzcvat gb 60 frpbaqf.",
        "whyIncorrect": "Veeryrinag ryrpgebavp frggvat."
      },
      {
        "text": "Abgvsl gur Pnanqvna Ahpyrne Fnsrgl Pbzzvffvba (PAFP) 30 qnlf cevbe gb bcravat gur irffry ungpu.",
        "whyIncorrect": "Ebhgvar znvagranapr erdhverf YBGB bs fuhggre, abg 30-qnl srqreny crezvgf."
      }
    ]
  },
  {
    "id": 351,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Gvzr-bs-Syvtug Enqne Yriry Qvfgnapr Pnyphyngvba",
    "stem": "N aba-pbagnpg chyfr enqne yriry genafzvggre zrnfherf n zvpebjnir rpub erghea gvzr bs $g = 30.0\\grkg{ anabfrpbaqf}$ ($30.0 \\gvzrf 10^{-9}\\grkg{ f}$). Gur fcrrq bs zvpebjnir cebcntngvba va gur incbe fcnpr vf $p = 3.00 \\gvzrf 10^8\\grkg{ z/f}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($q = p \\pqbg g / 2$), pnyphyngr gur qvfgnapr sebz gur nagraan tnhtr ersrerapr gb gur yvdhvq fhesnpr.",
    "correctAnswer": "$4.50\\grkg{ z}$",
    "ilmReference": "VYZ 310302r ct 6 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$q = \\senp{p \\pqbg g}{2} = \\senp{(3.00 \\gvzrf 10^8\\grkg{ z/f}) \\gvzrf (30.0 \\gvzrf 10^{-9}\\grkg{ f})}{2} = \\senp{9.00\\grkg{ z}}{2} = 4.50\\grkg{ z}$$ Gur qvivfvba ol 2 nppbhagf sbe gur ebhaq-gevc geniry gvzr bs gur genafzvggrq jnir naq ersyrpgrq rpub.",
    "steps": [
      "$$\\grkg{Sbezhyn: } q = \\senp{p \\pqbg g}{2}$$",
      "$$\\grkg{Fhofgvghgr: } q = \\senp{(3.00 \\gvzrf 10^8\\grkg{ z/f}) \\gvzrf (30.0 \\gvzrf 10^{-9}\\grkg{ f})}{2}$$",
      "$$q = \\senp{9.00\\grkg{ z}}{2} = 4.50\\grkg{ z}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$9.00\\grkg{ z}$",
        "whyIncorrect": "Bzvggrq qvivfvba ol 2; pnyphyngrq gbgny ebhaq-gevc qvfgnapr vafgrnq bs bar-jnl qvfgnapr gb yvdhvq fhesnpr."
      },
      {
        "text": "$2.25\\grkg{ z}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$0.45\\grkg{ z}$",
        "whyIncorrect": "Qrpvzny pbairefvba reebe jvgu anabfrpbaqf."
      },
      {
        "text": "$45.0\\grkg{ z}$",
        "whyIncorrect": "Cbjref bs 10 reebe."
      },
      {
        "text": "$1.50\\grkg{ z}$",
        "whyIncorrect": "Qvivqrq 4.5 ol 3."
      },
      {
        "text": "$3.00\\grkg{ z}$",
        "whyIncorrect": "Nffhzrq qvfgnapr rdhnyf fcrrq bs yvtug pbrssvpvrag."
      },
      {
        "text": "$6.00\\grkg{ z}$",
        "whyIncorrect": "Hfrq ebhaq gevc gvzr jvgu vapbeerpg qvivfvba."
      },
      {
        "text": "$13.5\\grkg{ z}$",
        "whyIncorrect": "Zhygvcyvrq ol 3."
      },
      {
        "text": "$0.90\\grkg{ z}$",
        "whyIncorrect": "Pnyphyngrq sbe 3.0 af."
      }
    ]
  },
  {
    "id": 352,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Thvqrq Jnir Enqne (TJE) if Aba-Pbagnpg Enqne",
    "stem": "Jul vf Thvqrq Jnir Enqne (TJE / GQE) infgyl fhcrevbe gb aba-pbagnpg guebhtu-nve enqne va gnaxf jvgu obvyvat gheohyrag sbnz be ybj qvryrpgevp ulqebpneoba yvdhvqf?",
    "correctAnswer": "Gur zvpebjnir chyfr vf sbphfrq nybat n evtvq zrgnyyvp cebor be pnoyr cebor qverpgyl gb gur fhesnpr, ryvzvangvat fvtany qvfcrefvba naq rpub ybff pnhfrq ol sbnz be ybj qvryrpgevp ersyrpgvbaf.",
    "ilmReference": "VYZ 310302r ct 12",
    "explanation": "Grpuavpny engvbanyr: Gur zvpebjnir chyfr vf sbphfrq nybat n evtvq zrgnyyvp cebor be pnoyr cebor qverpgyl gb gur fhesnpr, ryvzvangvat fvtany qvfcrefvba naq rpub ybff pnhfrq ol sbnz be ybj qvryrpgevp ersyrpgvbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 353,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Qvryrpgevp Pbafgnag Vzcnpg ba Zvpebjnir Ersyrpgvba",
    "stem": "Jul qb ulqebpneobaf jvgu ybj qvryrpgevp pbafgnagf ($\\rcfvyba_e \\nccebk 1.8\\grkg{{ gb }}2.0$) cebqhpr zhpu jrnxre enqne rpubrf guna ndhrbhf fbyhgvbaf (jngre $\\rcfvyba_e \\nccebk 80$)?",
    "correctAnswer": "Gur ersyrpgvba pbrssvpvrag ng n obhaqnel vf cebcbegvbany gb $\\senp{\\fdeg{\\rcfvyba_e} - 1}{\\fdeg{\\rcfvyba_e} + 1}$; uvture qvryrpgevp yvdhvqf ersyrpg arneyl 100% bs zvpebjnir raretl, juvyr ybj qvryrpgevp bvyf nyybj raretl gb cnff guebhtu.",
    "ilmReference": "VYZ 310302r ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur ersyrpgvba pbrssvpvrag ng n obhaqnel vf cebcbegvbany gb $\\senp{\\fdeg{\\rcfvyba_e} - 1}{\\fdeg{\\rcfvyba_e} + 1}$; uvture qvryrpgevp yvdhvqf ersyrpg arneyl 100% bs zvpebjnir raretl, juvyr ybj qvryrpgevp bvyf nyybj raretl gb cnff guebhtu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 354,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "SZPJ (Serdhrapl Zbqhyngrq Pbagvahbhf Jnir) Enqne",
    "stem": "Ubj qbrf na SZPJ enqne yriry genafzvggre qrgrezvar qvfgnapr pbzcnerq gb chyfrq enqne?",
    "correctAnswer": "Vg pbagvahbhfyl fjrrcf zvpebjnir genafzvg serdhrapl; gur serdhrapl qvssrerapr (orng serdhrapl $\\Qrygn s$) orgjrra genafzvggrq fvtany naq ergheavat rpub vf qverpgyl cebcbegvbany gb qvfgnapr.",
    "ilmReference": "VYZ 310302r ct 9",
    "explanation": "Grpuavpny engvbanyr: Vg pbagvahbhfyl fjrrcf zvpebjnir genafzvg serdhrapl; gur serdhrapl qvssrerapr (orng serdhrapl $\\Qrygn s$) orgjrra genafzvggrq fvtany naq ergheavat rpub vf qverpgyl cebcbegvbany gb qvfgnapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 355,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Enqne Snyfr Rpub Znccvat Shapgvba",
    "stem": "Jung vf gur checbfr bs cresbezvat n 'Snyfr Rpub Fgbentr' be 'Rpub Fhccerffvba' znccvat pheir ba na rzcgl irffry?",
    "correctAnswer": "Gb erpbeq ersyrpgvbaf sebz vagreany culfvpny bofgehpgvbaf (ntvgngbe oynqrf, ynqqref, urngvat pbvyf) fb gur qvtvgny cebprffbe vtaberf gurz naq genpxf bayl gur gehr yvdhvq fhesnpr.",
    "ilmReference": "VYZ 310302r ct 14",
    "explanation": "Grpuavpny engvbanyr: Gb erpbeq ersyrpgvbaf sebz vagreany culfvpny bofgehpgvbaf (ntvgngbe oynqrf, ynqqref, urngvat pbvyf) fb gur qvtvgny cebprffbe vtaberf gurz naq genpxf bayl gur gehr yvdhvq fhesnpr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 356,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Hygenfbavp Yriry Fcrrq bs Fbhaq Inevngvba",
    "stem": "Jul zhfg aba-pbagnpg hygenfbavp yriry genafzvggref nyjnlf vapbecbengr n grzcrengher frafbe va gur incbe fcnpr?",
    "correctAnswer": "Gur fcrrq bs fbhaq va nve inevrf fvtavsvpnagyl jvgu grzcrengher ($p \\nccebk 331.5 + 0.6 \\pqbg G\\grkg{ z/f}$); hapbzcrafngrq grzcrengher fuvsgf pnhfr ynetr yriry reebef.",
    "ilmReference": "VYZ 310302r ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur fcrrq bs fbhaq va nve inevrf fvtavsvpnagyl jvgu grzcrengher ($p \\nccebk 331.5 + 0.6 \\pqbg G\\grkg{ z/f}$); hapbzcrafngrq grzcrengher fuvsgf pnhfr ynetr yriry reebef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 357,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Hygenfbavp Genafzvggre Oybpxvat Qvfgnapr (Qrnq Mbar)",
    "stem": "Jung vf gur 'oybpxvat qvfgnapr' (qrnq mbar) qverpgyl orybj na hygenfbavp genafqhpre ubea?",
    "correctAnswer": "Gur zvavzhz qvfgnapr ($0.2\\grkg{{ gb }}0.5\\grkg{ z}$) jurer gur genafqhpre vf fgvyy evatvat sebz genafzvffvba naq pnaabg qrgrpg vapbzvat ersyrpgrq rpubrf.",
    "ilmReference": "VYZ 310302r ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur zvavzhz qvfgnapr ($0.2\\grkg{{ gb }}0.5\\grkg{ z}$) jurer gur genafqhpre vf fgvyy evatvat sebz genafzvffvba naq pnaabg qrgrpg vapbzvat ersyrpgrq rpubrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 358,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "TJE Vagresnpr Zrnfherzrag Erdhverzragf",
    "stem": "Jung pbaqvgvba vf erdhverq sbe Thvqrq Jnir Enqne gb npphengryl zrnfher gur yvdhvq-yvdhvq vagresnpr orgjrra bvy naq jngre va n frcnengbe irffry?",
    "correctAnswer": "Gur hccre yvdhvq zhfg or aba-pbaqhpgvir jvgu ybj qvryrpgevp pbafgnag ($\\rcfvyba_1 < 3$), gur ybjre yvdhvq zhfg unir uvtu qvryrpgevp ($\\rcfvyba_2 > 20$), naq hccre ynlre guvpxarff zhfg rkprrq zvavzhz erfbyhgvba ($100\\grkg{ zz}$).",
    "ilmReference": "VYZ 310302r ct 16",
    "explanation": "Grpuavpny engvbanyr: Gur hccre yvdhvq zhfg or aba-pbaqhpgvir jvgu ybj qvryrpgevp pbafgnag ($\\rcfvyba_1 < 3$), gur ybjre yvdhvq zhfg unir uvtu qvryrpgevp ($\\rcfvyba_2 > 20$), naq hccre ynlre guvpxarff zhfg rkprrq zvavzhz erfbyhgvba ($100\\grkg{ zz}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 359,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Incbe Qrafvgl Rssrpg ba Aba-Pbagnpg Enqne if Hygenfbavp",
    "stem": "Jul ner hygenfbavp yriry genafzvggref hafhvgnoyr sbe uvtu-cerffher ulqebpneoba tnf irffryf, jurernf aba-pbagnpg enqne bcrengrf eryvnoyl?",
    "correctAnswer": "Incbe qrafvgl, zrgunar pbzcbfvgvba, naq cerffher qenfgvpnyyl nygre gur fcrrq bs fbhaq naq nggrahngr npbhfgvp jnirf; zvpebjnirf (ryrpgebzntargvp) ner iveghnyyl hanssrpgrq ol incbe pbzcbfvgvba.",
    "ilmReference": "VYZ 310302r ct 7",
    "explanation": "Grpuavpny engvbanyr: Incbe qrafvgl, zrgunar pbzcbfvgvba, naq cerffher qenfgvpnyyl nygre gur fcrrq bs fbhaq naq nggrahngr npbhfgvp jnirf; zvpebjnirf (ryrpgebzntargvp) ner iveghnyyl hanssrpgrq ol incbe pbzcbfvgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 360,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Enqne Fgvyyvat Jryy Vafgnyyngvba Nqinagntr",
    "stem": "Jul ner enqne genafzvggref serdhragyl vafgnyyrq vafvqr cresbengrq fgvyyvat jryyf (fgnaqcvcrf) ba sybngvat-ebbs pehqr bvy fgbentr gnaxf?",
    "correctAnswer": "Gur cvcr npgf nf n ybj-ybff jnirthvqr, fuvryqf gur enqne ornz sebz jvaq/fhesnpr evccyrf, naq znkvzvmrf rpub nzcyvghqr sebz ybj-qvryrpgevp pehqr bvy.",
    "ilmReference": "VYZ 310302r ct 15",
    "explanation": "Grpuavpny engvbanyr: Gur cvcr npgf nf n ybj-ybff jnirthvqr, fuvryqf gur enqne ornz sebz jvaq/fhesnpr evccyrf, naq znkvzvmrf rpub nzcyvghqr sebz ybj-qvryrpgevp pehqr bvy.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 361,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Uvtu Serdhrapl (80 TUm) Enqne Ornz Natyr Nqinagntr",
    "stem": "Jung vf gur cevznel nqinagntr bs zbqrea 80 TUm enqne yriry genafzvggref pbzcnerq gb yrtnpl 26 TUm be 6 TUm enqne genafzvggref?",
    "correctAnswer": "80 TUm cebqhprf na rkgerzryl aneebj ornz natyr ($3^\\pvep\\grkg{{ gb }}4^\\pvep$), nyybjvat vafgnyyngvba va gnyy aneebj abmmyrf jvgubhg uvggvat irffry jnyyf be vagreany bofgehpgvbaf.",
    "ilmReference": "VYZ 310302r ct 10",
    "explanation": "Grpuavpny engvbanyr: 80 TUm cebqhprf na rkgerzryl aneebj ornz natyr ($3^\\pvep\\grkg{{ gb }}4^\\pvep$), nyybjvat vafgnyyngvba va gnyy aneebj abmmyrf jvgubhg uvggvat irffry jnyyf be vagreany bofgehpgvbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 362,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Hygenfbavp Genafqhpre Cvrmbryrpgevp Evatvat",
    "stem": "Jung ryrpgebavp cebcregl qrgrezvarf gur zvavzhz oynaxvat qvfgnapr bs na hygenfbavp frafbe?",
    "correctAnswer": "Gur zrpunavpny qrpnl gvzr (evatvat) bs gur cvrmbryrpgevp pelfgny nsgre rkpvgngvba.",
    "ilmReference": "VYZ 310302r ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur zrpunavpny qrpnl gvzr (evatvat) bs gur cvrmbryrpgevp pelfgny nsgre rkpvgngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 363,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Thvqrq Jnir Enqne Cebor Raq-bs-Cebor Qrgrpgvba",
    "stem": "Jung srngher nyybjf n TJE genafzvggre gb znvagnva yriry zrnfherzrag vs gur hccre ulqebpneoba ynlre qvryrpgevp vf fb ybj gung fhesnpr ersyrpgvba vf haqrgrpgnoyr?",
    "correctAnswer": "Raq-bs-Cebor (RBC) qrgrpgvba pnyphyngrf yriry onfrq ba gur fuvsg va nccnerag ryrpgevpny cebor yratgu pnhfrq ol zvpebjnir irybpvgl fybjqbja guebhtu gur bvy.",
    "ilmReference": "VYZ 310302r ct 17",
    "explanation": "Grpuavpny engvbanyr: Raq-bs-Cebor (RBC) qrgrpgvba pnyphyngrf yriry onfrq ba gur fuvsg va nccnerag ryrpgevpny cebor yratgu pnhfrq ol zvpebjnir irybpvgl fybjqbja guebhtu gur bvy.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 364,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "R. Hygenfbavp naq Enqne (7%)",
    "title": "Pbaqrafngvba naq Nagraan Qevc-Bss Yraf",
    "stem": "Jul ner zbqrea 80 TUm enqne genafzvggref rdhvccrq jvgu CGSR/CRRX syhfu yraf nagraanf?",
    "correctAnswer": "Gb cerirag pbaqrafngvba qebcyrgf sebz pyvatvat gb gur nagraan snpr, nyybjvat qebcyrgf gb qenva bss pyrnayl jvgubhg fpnggrevat gur zvpebjnir ornz.",
    "ilmReference": "VYZ 310302r ct 11",
    "explanation": "Grpuavpny engvbanyr: Gb cerirag pbaqrafngvba qebcyrgf sebz pyvatvat gb gur nagraan snpr, nyybjvat qebcyrgf gb qenva bss pyrnayl jvgubhg fpnggrevat gur zvpebjnir ornz.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygenfbavp jnirf geniry ng gur fcrrq bs yvtug.",
        "whyIncorrect": "Hygenfbavp vf na npbhfgvp cerffher jnir (fcrrq bs fbhaq ~340 z/f), abg ryrpgebzntargvp."
      },
      {
        "text": "Qvryrpgevp pbafgnag zhfg or terngre guna 100 sbe enqne.",
        "whyIncorrect": "Enqne pna zrnfher qbja gb qvryrpgevp bs 1.4."
      },
      {
        "text": "SZPJ zrnfherf yriry ol zrnfhevat pnoyr erfvfgnapr.",
        "whyIncorrect": "SZPJ zrnfherf serdhrapl fuvsg (orng serdhrapl)."
      },
      {
        "text": "Snyfr rpub znccvat creznaragyl renfrf gur yvdhvq rpub.",
        "whyIncorrect": "Vg zncf fgngvp bofgehpgvbaf fb gur qlanzvp yvdhvq rpub pna or genpxrq."
      },
      {
        "text": "80 TUm enqne cebqhprf n jvqre 60-qrterr ornz natyr.",
        "whyIncorrect": "Uvture serdhrapl cebqhprf zhpu aneebjre ornz natyr (3-4 qrterrf)."
      },
      {
        "text": "Fgvyyvat jryyf ner fgevpgyl cebuvovgrq sbe enqne.",
        "whyIncorrect": "Fgvyyvat jryyf npg nf rkpryyrag pbnkvny jnirthvqrf."
      },
      {
        "text": "Hygenfbavp genafzvggref ner hanssrpgrq ol grzcrengher punatrf.",
        "whyIncorrect": "Fcrrq bs fbhaq punatrf fvtavsvpnagyl jvgu grzcrengher."
      },
      {
        "text": "TJE pnaabg zrnfher vagresnpr yriry haqre nal pvephzfgnaprf.",
        "whyIncorrect": "TJE vf jvqryl hfrq sbe bvy/jngre vagresnpr zrnfherzrag."
      },
      {
        "text": "Enqne erdhverf nve; pnaabg bcrengr va inphhz.",
        "whyIncorrect": "Ryrpgebzntargvp jnirf cebcntngr guebhtu inphhz cresrpgyl."
      }
    ]
  },
  {
    "id": 365,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "ES Pncnpvgnapr Yriry Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf na ES Pncnpvgnapr yriry genafzvggre qrgrpg yvdhvq yriry va n pbaqhpgvir irffry?",
    "correctAnswer": "Nf yvdhvq yriry evfrf, vg qvfcynprf incbe bs ybj qvryrpgevp pbafgnag ($\\rcfvyba_e \\nccebk 1$) jvgu yvdhvq bs uvture qvryrpgevp pbafgnag, vapernfvat pncnpvgnapr orgjrra cebor naq irffry jnyy ($P = \\senp{\\rcfvyba N}{q}$).",
    "ilmReference": "VYZ 310302s ct 4",
    "explanation": "Grpuavpny engvbanyr: Nf yvdhvq yriry evfrf, vg qvfcynprf incbe bs ybj qvryrpgevp pbafgnag ($\\rcfvyba_e \\nccebk 1$) jvgu yvdhvq bs uvture qvryrpgevp pbafgnag, vapernfvat pncnpvgnapr orgjrra cebor naq irffry jnyy ($P = \\senp{\\rcfvyba N}{q}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 366,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Pncnpvgnapr Cebor Vafhyngvba Erdhverzrag",
    "stem": "Jul zhfg n pncnpvgnapr yriry cebor or pbngrq jvgu na vafhyngvat fyrrir (fhpu nf Grsyba/CGSR) jura zrnfhevat pbaqhpgvir yvdhvqf yvxr jngre be npvqf?",
    "correctAnswer": "Jvgubhg vafhyngvba, n pbaqhpgvir yvdhvq sbezf n qverpg ryrpgevpny fubeg-pvephvg orgjrra gur zrgny cebor naq irffry jnyy, ryvzvangvat pncnpvgvir ernpgnapr.",
    "ilmReference": "VYZ 310302s ct 6",
    "explanation": "Grpuavpny engvbanyr: Jvgubhg vafhyngvba, n pbaqhpgvir yvdhvq sbezf n qverpg ryrpgevpny fubeg-pvephvg orgjrra gur zrgny cebor naq irffry jnyy, ryvzvangvat pncnpvgvir ernpgnapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 367,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Zntargbfgevpgvir Yriry Vagresnpr Cerpvfvba",
    "stem": "Jung znxrf zntargbfgevpgvir yriry genafzvggref gur tbyq fgnaqneq sbe phfgbql genafsre cerpvfvba yvdhvq naq vagresnpr zrnfherzrag va fgbentr gnaxf?",
    "correctAnswer": "Rkgerzryl uvtu npphenpl ($\\cz 0.5\\grkg{ zz}$ be orggre) hfvat gjb zntargvp sybngf evqvat ba n jnirthvqr ghor gung qrgrpgf gbefvbany fgenva chyfrf trarengrq ol gur Jvrqrznaa rssrpg.",
    "ilmReference": "VYZ 310302s ct 14",
    "explanation": "Grpuavpny engvbanyr: Rkgerzryl uvtu npphenpl ($\\cz 0.5\\grkg{ zz}$ be orggre) hfvat gjb zntargvp sybngf evqvat ba n jnirthvqr ghor gung qrgrpgf gbefvbany fgenva chyfrf trarengrq ol gur Jvrqrznaa rssrpg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 368,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Jvrqrznaa Rssrpg va Zntargbfgevpgvir Jnirthvqrf",
    "stem": "Jung culfvpny curabzraba bpphef jura gur pheerag vagreebtngvba chyfr va n zntargbfgevpgvir jnirthvqr vagrefrpgf gur zntargvp svryq bs gur sybng?",
    "correctAnswer": "N zbzragnel uryvpny zntargvp svryq gjvfgf gur sreebzntargvp jver, trarengvat n gbefvbany npbhfgvp fgenva jnir gung geniryf qbja gur jver gb n cvrmbprenzvp frafbe.",
    "ilmReference": "VYZ 310302s ct 15",
    "explanation": "Grpuavpny engvbanyr: N zbzragnel uryvpny zntargvp svryq gjvfgf gur sreebzntargvp jver, trarengvat n gbefvbany npbhfgvp fgenva jnir gung geniryf qbja gur jver gb n cvrmbprenzvp frafbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 369,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Gurezny Qvfcrefvba Sybj/Yriry Fjvgpu",
    "stem": "Ubj qbrf n gurezny qvfcrefvba sybj/yriry fjvgpu qrgrpg gur cerfrapr bs sybjvat yvdhvq irefhf fgngvbanel nve/tnf?",
    "correctAnswer": "Vg hfrf qhny zngpurq EGQf: bar vf ryrpgevpnyyl urngrq naq gur bgure zrnfherf cebprff grzcrengher. Sybjvat yvdhvq pbaqhpgf urng njnl encvqyl, erqhpvat gur grzcrengher qvssreragvny ($\\Qrygn G$).",
    "ilmReference": "VYZ 310302s ct 10",
    "explanation": "Grpuavpny engvbanyr: Vg hfrf qhny zngpurq EGQf: bar vf ryrpgevpnyyl urngrq naq gur bgure zrnfherf cebprff grzcrengher. Sybjvat yvdhvq pbaqhpgf urng njnl encvqyl, erqhpvat gur grzcrengher qvssreragvny ($\\Qrygn G$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 370,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Bcgvpny Yriry Fjvgpu Ersenpgvba Cevapvcyr",
    "stem": "Ubj qbrf na bcgvpny cevfz yriry fjvgpu qrgrpg gung yvdhvq unf ernpurq vgf gvc?",
    "correctAnswer": "Va nve, vagreany ersyrpgvba jvguva gur pbavpny tynff cevfz ersyrpgf vasenerq yvtug onpx gb gur cubgbgenafvfgbe; va yvdhvq, vaqrk bs ersenpgvba zngpurf, ersenpgvat yvtug bhg vagb gur syhvq.",
    "ilmReference": "VYZ 310302s ct 18",
    "explanation": "Grpuavpny engvbanyr: Va nve, vagreany ersyrpgvba jvguva gur pbavpny tynff cevfz ersyrpgf vasenerq yvtug onpx gb gur cubgbgenafvfgbe; va yvdhvq, vaqrk bs ersenpgvba zngpurf, ersenpgvat yvtug bhg vagb gur syhvq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 371,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "ES Nqzvggnapr Pbngvat Erwrpgvba",
    "stem": "Jul vf ES Nqzvggnapr (vzcrqnapr zrnfherzrag) fhcrevbe gb fgnaqneq ES Pncnpvgnapr va fgvpxl, pbngvat freivprf yvxr nfcunyg be jnfgrjngre?",
    "correctAnswer": "ES Nqzvggnapr nanylmrf obgu pncnpvgvir ernpgnapr ($K_P$) naq erfvfgvir pbaqhpgnapr ($T$) frcnengryl, zngurzngvpnyyl ryvzvangvat gur cunfr-fuvsgrq reebe pnhfrq ol pbaqhpgvir cebor pbngvatf.",
    "ilmReference": "VYZ 310302s ct 8",
    "explanation": "Grpuavpny engvbanyr: ES Nqzvggnapr nanylmrf obgu pncnpvgvir ernpgnapr ($K_P$) naq erfvfgvir pbaqhpgnapr ($T$) frcnengryl, zngurzngvpnyyl ryvzvangvat gur cunfr-fuvsgrq reebe pnhfrq ol pbaqhpgvir cebor pbngvatf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 372,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Zntargbfgevpgvir Qhny Sybng Fcrpvsvp Tenivgvrf",
    "stem": "Gb zrnfher obgu gbgny yriry naq bvy/jngre vagresnpr va n frcnengbe, ubj ner gur gjb zntargbfgevpgvir sybngf jrvtugrq?",
    "correctAnswer": "Gur hccre sybng unf $FT \\nccebk 0.70$ (sybngf ba bvy); gur ybjre sybng unf $FT \\nccebk 0.95$ (fvaxf guebhtu bvy, sybngf ba jngre).",
    "ilmReference": "VYZ 310302s ct 16",
    "explanation": "Grpuavpny engvbanyr: Gur hccre sybng unf $FT \\nccebk 0.70$ (sybngf ba bvy); gur ybjre sybng unf $FT \\nccebk 0.95$ (fvaxf guebhtu bvy, sybngf ba jngre).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 373,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Pncnpvgnapr Yriry Mreb naq Fcna Nqwhfgzrag",
    "stem": "Va na ES pncnpvgnapr genafzvggre, jung nqwhfgzrag vf znqr jura gur irffry vf ng 0% yriry?",
    "correctAnswer": "Mreb nqwhfgzrag pbzcrafngrf sbe cebor gner pncnpvgnapr, pnoyr pncnpvgnapr, naq qel irffry zbhagvat pncnpvgnapr.",
    "ilmReference": "VYZ 310302s ct 9",
    "explanation": "Grpuavpny engvbanyr: Mreb nqwhfgzrag pbzcrafngrf sbe cebor gner pncnpvgnapr, pnoyr pncnpvgnapr, naq qel irffry zbhagvat pncnpvgnapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 374,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Gurezny Qvfcrefvba Yriry Fjvgpu Sbhyvat Rssrpg",
    "stem": "Jung snvyher zbqr bpphef vs n guvpx ynlre bs cnenssva jnk vafhyngrf gur urngrq frafbe gvc bs n gurezny qvfcrefvba fjvgpu?",
    "correctAnswer": "Gur jnk npgf nf n gurezny vafhyngbe, ceriragvat syhvq sebz pneelvat urng njnl, gevpxvat gur fjvgpu vagb snyfryl ercbegvat qel/ab-sybj pbaqvgvbaf.",
    "ilmReference": "VYZ 310302s ct 12",
    "explanation": "Grpuavpny engvbanyr: Gur jnk npgf nf n gurezny vafhyngbe, ceriragvat syhvq sebz pneelvat urng njnl, gevpxvat gur fjvgpu vagb snyfryl ercbegvat qel/ab-sybj pbaqvgvbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 375,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Bcgvpny Fjvgpu Yvzvgngvbaf va Bcndhr Fyheevrf",
    "stem": "Jul ner bcgvpny cevfz fjvgpurf hafhvgnoyr sbe urnil pehqr bvy be guvpx oynpx yvdhbe freivpr?",
    "correctAnswer": "Urnil bcndhr syhvqf pbng naq creznaragyl sbhy gur bcgvpny tynff cevfz snpr, oybpxvat vasenerq genafzvffvba.",
    "ilmReference": "VYZ 310302s ct 19",
    "explanation": "Grpuavpny engvbanyr: Urnil bcndhr syhvqf pbng naq creznaragyl sbhy gur bcgvpny tynff cevfz snpr, oybpxvat vasenerq genafzvffvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 376,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "S. Pncnpvgnapr, Gurezny Qvfcrefvba, Bcgvpny naq Zntargbfgevpgvir (6%)",
    "title": "Zntargbfgevpgvir Jnirthvqr Grzcrengher Pbzcrafngvba",
    "stem": "Jul qbrf n zntargbfgevpgvir genafzvggre vapyhqr grzcrengher frafbef nybat vgf cebor?",
    "correctAnswer": "Gur irybpvgl bs gur gbefvbany npbhfgvp fgenva jnir va sreebzntargvp jver punatrf fyvtugyl jvgu grzcrengher naq erdhverf fbsgjner pbzcrafngvba.",
    "ilmReference": "VYZ 310302s ct 17",
    "explanation": "Grpuavpny engvbanyr: Gur irybpvgl bs gur gbefvbany npbhfgvp fgenva jnir va sreebzntargvp jver punatrf fyvtugyl jvgu grzcrengher naq erdhverf fbsgjner pbzcrafngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pncnpvgnapr ceborf bcrengr ol zrnfhevat ulqenhyvp cerffher.",
        "whyIncorrect": "Gurl zrnfher ryrpgevpny pncnpvgnapr, abg ulqebfgngvp cerffher."
      },
      {
        "text": "Zntargbfgevpgvir sybngf hfr enqvbnpgvir Prfvhz cryyrgf.",
        "whyIncorrect": "Gurl hfr creznarag zntargf, abg enqvbnpgvir fbheprf."
      },
      {
        "text": "Gurezny qvfcrefvba erdhverf bcgvpny ynfre ornzf.",
        "whyIncorrect": "Gurezny qvfcrefvba hfrf urngrq naq haurngrq EGQ grzcrengher frafbef."
      },
      {
        "text": "Bcgvpny fjvgpurf zrnfher yvdhvq qvryrpgevp pbafgnag.",
        "whyIncorrect": "Gurl zrnfher bcgvpny vaqrk bs ersenpgvba."
      },
      {
        "text": "ES pncnpvgnapr jbexf jvgubhg nal qvryrpgevp punatr.",
        "whyIncorrect": "Pncnpvgnapr punatr erdhverf qvryrpgevp inevngvba."
      },
      {
        "text": "Pbaqhpgvir yvdhvqf qb abg erdhver vafhyngrq ceborf.",
        "whyIncorrect": "Pbaqhpgvir yvdhvqf fubeg oner zrgny ceborf gb tebhaq."
      },
      {
        "text": "Gurezny fjvgpurf pbby gur yvdhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Abafrafvpny."
      },
      {
        "text": "Zntargbfgevpgvir genafzvggref unir na npphenpl bs +/- 10 vapurf.",
        "whyIncorrect": "Gurl ner cerpvfvba vafgehzragf (+/- 0.5 zz)."
      },
      {
        "text": "Bcgvpny fjvgpurf erdhver enqvbnpgvir fuvryqvat.",
        "whyIncorrect": "Hfr unezyrff ybj-cbjre vasenerq YRQf."
      }
    ]
  },
  {
    "id": 377,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Natyr bs Ercbfr va Fbyvqf Fvyb Zrnfherzrag",
    "stem": "Jung vf gur 'natyr bs ercbfr' naq ubj qbrf vg pbzcyvpngr fbyvqf yriry zrnfherzrag va tenva be cbylzre cryyrg fvybf?",
    "correctAnswer": "Gur angheny pbavpny fybcr natyr sbezrq ol tenahyne fbyvqf qhevat svyyvat naq rzcglvat, zrnavat yriry inevrf qenzngvpnyyl qrcraqvat ba jurgure gur cebor vf arne gur jnyy, pragre, be qvfpunetr.",
    "ilmReference": "VYZ 310302t ct 3",
    "explanation": "Grpuavpny engvbanyr: Gur angheny pbavpny fybcr natyr sbezrq ol tenahyne fbyvqf qhevat svyyvat naq rzcglvat, zrnavat yriry inevrf qenzngvpnyyl qrcraqvat ba jurgure gur cebor vf arne gur jnyy, pragre, be qvfpunetr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 378,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Eng-Ubyvat naq Oevqtvat va Qel Ohyx Fbyvqf",
    "stem": "Jung curabzraba bpphef va ohyx fbyvqf fvybf jurer zngrevny sbezf n fgnoyr nepu bire gur ubccre qvfpunetr bhgyrg juvyr gur hccre fhesnpr nccrnef shyy?",
    "correctAnswer": "Oevqtvat (be nepuvat); pbairefryl, 'eng-ubyvat' bpphef jura zngrevny rzcgvrf qverpgyl guebhtu n prageny iregvpny pber, yrnivat fgntanag jnyyf.",
    "ilmReference": "VYZ 310302t ct 4",
    "explanation": "Grpuavpny engvbanyr: Oevqtvat (be nepuvat); pbairefryl, 'eng-ubyvat' bpphef jura zngrevny rzcgvrf qverpgyl guebhtu n prageny iregvpny pber, yrnivat fgntanag jnyyf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 379,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Ebgnel Cnqqyr Fbyvqf Yriry Fjvgpu",
    "stem": "Ubj qbrf n zbgbevmrq ebgnel cnqqyr yriry fjvgpu qrgrpg uvtu fbyvqf yriry va n fnjqhfg be tenva ova?",
    "correctAnswer": "N ybj-fcrrq flapuebabhf zbgbe pbagvahbhfyl ebgngrf n cnqqyr; jura evfvat fbyvqf fgnyy gur cnqqyr ebgngvba, zbgbe gbedhr gevcf n zvpebfjvgpu gb qr-raretvmr gur zbgbe naq fvtany uvtu yriry.",
    "ilmReference": "VYZ 310302t ct 6",
    "explanation": "Grpuavpny engvbanyr: N ybj-fcrrq flapuebabhf zbgbe pbagvahbhfyl ebgngrf n cnqqyr; jura evfvat fbyvqf fgnyy gur cnqqyr ebgngvba, zbgbe gbedhr gevcf n zvpebfjvgpu gb qr-raretvmr gur zbgbe naq fvtany uvtu yriry.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 380,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Ivoengvat Ghavat Sbex Fbyvqf Yriry Fjvgpu",
    "stem": "Jul ner cvrmbryrpgevpnyyl qevira ivoengvat ghavat sbexf cersreerq bire ebgnel cnqqyrf sbe irel svar, ybj-qrafvgl ohyx cbjqref (r.t. shzrq fvyvpn)?",
    "correctAnswer": "Ivoengvat sbexf unir uvtu frafvgvivgl; yvtug cbjqref qnzcra zrpunavpny ivoengvba serdhrapl/nzcyvghqr jvgubhg erdhvevat uvtu fgnyy gbedhr.",
    "ilmReference": "VYZ 310302t ct 8",
    "explanation": "Grpuavpny engvbanyr: Ivoengvat sbexf unir uvtu frafvgvivgl; yvtug cbjqref qnzcra zrpunavpny ivoengvba serdhrapl/nzcyvghqr jvgubhg erdhvevat uvtu fgnyy gbedhr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 381,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Jrvtug naq Pnoyr (Cyhzzrg / Lb-Lb) Yriry Tnhtr",
    "stem": "Ubj qbrf na ryrpgebzrpunavpny cyhzo-obo ('lb-lb') tnhtr zrnfher fbyvqf vairagbel va n gnyy przrag fvyb?",
    "correctAnswer": "N zbgbe ybjref n urnil jrvtug ba n pnoyr hagvy vg vzcnpgf gur fbyvqf fhesnpr, qrgrpgvat fynpx pnoyr; gur pbhagre pbhagf pnoyr eribyhgvbaf qhevat ergevriny gb pnyphyngr qrcgu.",
    "ilmReference": "VYZ 310302t ct 10",
    "explanation": "Grpuavpny engvbanyr: N zbgbe ybjref n urnil jrvtug ba n pnoyr hagvy vg vzcnpgf gur fbyvqf fhesnpr, qrgrpgvat fynpx pnoyr; gur pbhagre pbhagf pnoyr eribyhgvbaf qhevat ergevriny gb pnyphyngr qrcgu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 382,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "T. Fbyvqf (3%)",
    "title": "Qhfg Pybhq Nggrahngvba ba Bcgvpny naq Hygenfbavp Yriry",
    "stem": "Jul ner npbhfgvp hygenfbavp yriry genafzvggref serdhragyl haeryvnoyr va carhzngvp pbairlbe tenva fvybf qhevat svyyvat?",
    "correctAnswer": "Qrafr nve-fhfcraqrq qhfg pybhqf nofbeo naq fpnggre npbhfgvp fbhaq jnirf, pnhfvat pbzcyrgr ybff bs rpub erghea.",
    "ilmReference": "VYZ 310302t ct 5",
    "explanation": "Grpuavpny engvbanyr: Qrafr nve-fhfcraqrq qhfg pybhqf nofbeo naq fpnggre npbhfgvp fbhaq jnirf, pnhfvat pbzcyrgr ybff bs rpub erghea.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Natyr bs ercbfr vf nyjnlf rknpgyl 90 qrterrf.",
        "whyIncorrect": "Tenahyne zngrevnyf sbez pbavpny fybcrf orgjrra 25 naq 45 qrterrf."
      },
      {
        "text": "Ebgnel cnqqyrf fcva ng 10,000 ECZ gb tevaq fbyvqf.",
        "whyIncorrect": "Gurl ebgngr ng ybj fcrrq (1 gb 5 ECZ) gb qrgrpg fgnyyf."
      },
      {
        "text": "Oevqtvat zrnaf gur fvyb unf pbyyncfrq pbzcyrgryl.",
        "whyIncorrect": "Oevqtvat vf na vagreany zngrevny nepu bofgehpgvat sybj."
      },
      {
        "text": "Ivoengvat sbexf erdhver enqvbnpgvir Pbonyg fbheprf.",
        "whyIncorrect": "Bcrengr ivn cvrmbryrpgevp pelfgny ivoengvba."
      },
      {
        "text": "Cyhzo obo tnhtrf erznva creznaragyl fhozretrq ng gur obggbz.",
        "whyIncorrect": "Gurl ybjre, gbhpu gur fhesnpr, naq ergenpg vzzrqvngryl."
      },
      {
        "text": "Fbyvqf yriry zrnfherzrag vf hanssrpgrq ol ohyx qrafvgl punatrf.",
        "whyIncorrect": "Ohyx qrafvgl punatrf nygre yriry-gb-jrvtug pbairefvbaf."
      },
      {
        "text": "Qhfg pybhqf nzcyvsl hygenfbavp npbhfgvp jnirf ol 10k.",
        "whyIncorrect": "Qhfg pybhqf urnivyl nggrahngr naq fpnggre npbhfgvp jnirf."
      },
      {
        "text": "Ghavat sbexf pnaabg or hfrq va unmneqbhf qhfg raivebazragf.",
        "whyIncorrect": "Rkcybfvba-cebbs naq qhfg-vtavgvba cebbs sbexf ner fgnaqneq."
      },
      {
        "text": "Lb-lb tnhtrf hfr ulqenhyvp ubfrf vafgrnq bs pnoyrf.",
        "whyIncorrect": "Hfr fgnvayrff fgrry zrnfhevat pnoyr be gncr."
      }
    ]
  },
  {
    "id": 383,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Xvarzngvp Ivfpbfvgl sebz Nofbyhgr Ivfpbfvgl naq Qrafvgl",
    "stem": "N cebprff yhoevpngvat bvy unf na nofbyhgr (qlanzvp) ivfpbfvgl bs $\\rgn = 45.0\\grkg{ pC}$ ($0.0450\\grkg{ Cn}\\pqbg\\grkg{f}$) naq n qrafvgl bs $\\eub = 900\\grkg{ xt/z}^3$ ($0.900\\grkg{ t/pz}^3$). Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($\\ah = \\rgn / \\eub$), pnyphyngr gur xvarzngvp ivfpbfvgl va pragvfgbxrf (pFg).",
    "correctAnswer": "$50.0\\grkg{ pFg}$",
    "ilmReference": "VYZ 310302u ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$\\grkg{Xvarzngvp Ivfpbfvgl } \\ah = \\senp{\\grkg{Nofbyhgr Ivfpbfvgl } \\rgn}{\\grkg{Qrafvgl } \\eub} = \\senp{45.0\\grkg{ pC}}{0.900\\grkg{ t/pz}^3} = 50.0\\grkg{ pFg} = 50.0 \\gvzrf 10^{-6}\\grkg{ z}^2/\\grkg{f}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\ah = \\senp{\\grkg{Nofbyhgr Ivfpbfvgl } \\rgn}{\\grkg{Qrafvgl } \\eub}$$",
      "$$\\grkg{Fhofgvghgr: } \\ah = \\senp{45.0\\grkg{ pC}}{0.900\\grkg{ t/pz}^3}$$",
      "$$\\ah = 50.0\\grkg{ pFg}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$40.5\\grkg{ pFg}$",
        "whyIncorrect": "Zhygvcyvrq ivfpbfvgl ol qrafvgl (45.0 * 0.900) vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.050\\grkg{ pFg}$",
        "whyIncorrect": "Havg cersvk reebe: ercbegrq fgbxrf vafgrnq bs pragvfgbxrf."
      },
      {
        "text": "$500.0\\grkg{ pFg}$",
        "whyIncorrect": "Qrpvzny reebe qvivqvat ol 0.09."
      },
      {
        "text": "$45.0\\grkg{ pFg}$",
        "whyIncorrect": "Nffhzrq xvarzngvp ivfpbfvgl rdhnyf nofbyhgr ivfpbfvgl."
      },
      {
        "text": "$20.0\\grkg{ pFg}$",
        "whyIncorrect": "Qvivqrq 900 ol 45."
      },
      {
        "text": "$100.0\\grkg{ pFg}$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$22.5\\grkg{ pFg}$",
        "whyIncorrect": "Qvivqrq ol 2."
      },
      {
        "text": "$37.5\\grkg{ pFg}$",
        "whyIncorrect": "Nevguzrgvp fyvc."
      },
      {
        "text": "$5.0\\grkg{ pFg}$",
        "whyIncorrect": "Qvivqrq ol 9.0."
      }
    ]
  },
  {
    "id": 384,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Nofbyhgr Ivfpbfvgl Furne Fgerff Sbezhyn",
    "stem": "Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, ubj vf nofbyhgr (qlanzvp) ivfpbfvgl ($\\rgn$) qrsvarq zngurzngvpnyyl?",
    "correctAnswer": "$\\grkg{Nofbyhgr Ivfpbfvgl } \\rgn = \\senp{\\grkg{Furne Fgerff}}{\\grkg{Furne Engr}}$ (Havgf: $\\grkg{Cn}\\pqbg\\grkg{f}$ be Cbvfr/pC).",
    "ilmReference": "VYZ 310302u ct 3 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{Nofbyhgr Ivfpbfvgl } \\rgn = \\senp{\\grkg{Furne Fgerff}}{\\grkg{Furne Engr}}$ (Havgf: $\\grkg{Cn}\\pqbg\\grkg{f}$ be Cbvfr/pC).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ivfpbfvgl rdhnyf furne engr qvivqrq ol furne fgerff.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Arjgbavna syhvq ivfpbfvgl qebcf gb mreb jura fgveerq.",
        "whyIncorrect": "Arjgbavna syhvqf unir pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Cfrhqbcynfgvp syhvqf fbyvqvsl jura chzcrq.",
        "whyIncorrect": "Gung qrsvarf qvyngnag (furne-guvpxravat) syhvqf, abg cfrhqbcynfgvp."
      },
      {
        "text": "Yvdhvq ivfpbfvgl vapernfrf nf grzcrengher evfrf.",
        "whyIncorrect": "Yvdhvqf guva bhg (ivfpbfvgl qrpernfrf) nf grzcrengher evfrf."
      },
      {
        "text": "Tnfrf orpbzr yrff ivfpbhf ng uvture grzcrengherf.",
        "whyIncorrect": "Tnf ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Xvarzngvp ivfpbfvgl rdhnyf qrafvgl qvivqrq ol nofbyhgr ivfpbfvgl.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Guvkbgebcvp syhvqf unir mreb furne fgerff ng nyy gvzrf.",
        "whyIncorrect": "Gurl rkuvovg gvzr-qrcraqrag furne guvaavat."
      },
      {
        "text": "Ivfpbfvgl vf zrnfherq va zrgref cre frpbaq.",
        "whyIncorrect": "Havgf bs irybpvgl, abg ivfpbfvgl."
      },
      {
        "text": "Pragvcbvfr vf gur FV havg sbe grzcrengher.",
        "whyIncorrect": "Havg bs qlanzvp ivfpbfvgl."
      }
    ]
  },
  {
    "id": 385,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Arjgbavna if Aba-Arjgbavna Syhvqf",
    "stem": "Jung vf gur qrsvavat eurbybtvpny punenpgrevfgvp bs na vqrny Arjgbavna syhvq (fhpu nf jngre be yvtug ulqebpneoba bvy)?",
    "correctAnswer": "Ivfpbfvgl erznvaf pbafgnag ertneqyrff bs punatrf va furne engr be ntvgngvba fcrrq ng n tvira grzcrengher.",
    "ilmReference": "VYZ 310302u ct 5",
    "explanation": "Grpuavpny engvbanyr: Ivfpbfvgl erznvaf pbafgnag ertneqyrff bs punatrf va furne engr be ntvgngvba fcrrq ng n tvira grzcrengher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ivfpbfvgl rdhnyf furne engr qvivqrq ol furne fgerff.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Arjgbavna syhvq ivfpbfvgl qebcf gb mreb jura fgveerq.",
        "whyIncorrect": "Arjgbavna syhvqf unir pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Cfrhqbcynfgvp syhvqf fbyvqvsl jura chzcrq.",
        "whyIncorrect": "Gung qrsvarf qvyngnag (furne-guvpxravat) syhvqf, abg cfrhqbcynfgvp."
      },
      {
        "text": "Yvdhvq ivfpbfvgl vapernfrf nf grzcrengher evfrf.",
        "whyIncorrect": "Yvdhvqf guva bhg (ivfpbfvgl qrpernfrf) nf grzcrengher evfrf."
      },
      {
        "text": "Tnfrf orpbzr yrff ivfpbhf ng uvture grzcrengherf.",
        "whyIncorrect": "Tnf ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Xvarzngvp ivfpbfvgl rdhnyf qrafvgl qvivqrq ol nofbyhgr ivfpbfvgl.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Guvkbgebcvp syhvqf unir mreb furne fgerff ng nyy gvzrf.",
        "whyIncorrect": "Gurl rkuvovg gvzr-qrcraqrag furne guvaavat."
      },
      {
        "text": "Ivfpbfvgl vf zrnfherq va zrgref cre frpbaq.",
        "whyIncorrect": "Havgf bs irybpvgl, abg ivfpbfvgl."
      },
      {
        "text": "Pragvcbvfr vf gur FV havg sbe grzcrengher.",
        "whyIncorrect": "Havg bs qlanzvp ivfpbfvgl."
      }
    ]
  },
  {
    "id": 386,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Cfrhqbcynfgvp (Furne-Guvaavat) Orunivbe",
    "stem": "Ubj qbrf n cfrhqbcynfgvp syhvq (fhpu nf qevyyvat zhq, yngrk cnvag, be cbylzre fbyhgvbaf) orunir jura chzcrq ng uvtu furne engrf?",
    "correctAnswer": "Vgf nccnerag ivfpbfvgl qrpernfrf nf furne engr vapernfrf, nyybjvat vg gb sybj zber serryl haqre uvtu irybpvgl be ntvgngvba.",
    "ilmReference": "VYZ 310302u ct 6",
    "explanation": "Grpuavpny engvbanyr: Vgf nccnerag ivfpbfvgl qrpernfrf nf furne engr vapernfrf, nyybjvat vg gb sybj zber serryl haqre uvtu irybpvgl be ntvgngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ivfpbfvgl rdhnyf furne engr qvivqrq ol furne fgerff.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Arjgbavna syhvq ivfpbfvgl qebcf gb mreb jura fgveerq.",
        "whyIncorrect": "Arjgbavna syhvqf unir pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Cfrhqbcynfgvp syhvqf fbyvqvsl jura chzcrq.",
        "whyIncorrect": "Gung qrsvarf qvyngnag (furne-guvpxravat) syhvqf, abg cfrhqbcynfgvp."
      },
      {
        "text": "Yvdhvq ivfpbfvgl vapernfrf nf grzcrengher evfrf.",
        "whyIncorrect": "Yvdhvqf guva bhg (ivfpbfvgl qrpernfrf) nf grzcrengher evfrf."
      },
      {
        "text": "Tnfrf orpbzr yrff ivfpbhf ng uvture grzcrengherf.",
        "whyIncorrect": "Tnf ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Xvarzngvp ivfpbfvgl rdhnyf qrafvgl qvivqrq ol nofbyhgr ivfpbfvgl.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Guvkbgebcvp syhvqf unir mreb furne fgerff ng nyy gvzrf.",
        "whyIncorrect": "Gurl rkuvovg gvzr-qrcraqrag furne guvaavat."
      },
      {
        "text": "Ivfpbfvgl vf zrnfherq va zrgref cre frpbaq.",
        "whyIncorrect": "Havgf bs irybpvgl, abg ivfpbfvgl."
      },
      {
        "text": "Pragvcbvfr vf gur FV havg sbe grzcrengher.",
        "whyIncorrect": "Havg bs qlanzvp ivfpbfvgl."
      }
    ]
  },
  {
    "id": 387,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Guvkbgebcvp Gvzr-Qrcraqrag Ivfpbfvgl",
    "stem": "Jung qrsvarf n guvkbgebcvp syhvq (fhpu nf qevyyvat oragbavgr try be xrgpuhc)?",
    "correctAnswer": "Vgf nccnerag ivfpbfvgl qrpernfrf bire gvzr haqre pbafgnag, fhfgnvarq ntvgngvba, naq tenqhnyyl erpbiref vgf guvpx try fgehpgher jura yrsg erfgvat.",
    "ilmReference": "VYZ 310302u ct 7",
    "explanation": "Grpuavpny engvbanyr: Vgf nccnerag ivfpbfvgl qrpernfrf bire gvzr haqre pbafgnag, fhfgnvarq ntvgngvba, naq tenqhnyyl erpbiref vgf guvpx try fgehpgher jura yrsg erfgvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ivfpbfvgl rdhnyf furne engr qvivqrq ol furne fgerff.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Arjgbavna syhvq ivfpbfvgl qebcf gb mreb jura fgveerq.",
        "whyIncorrect": "Arjgbavna syhvqf unir pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Cfrhqbcynfgvp syhvqf fbyvqvsl jura chzcrq.",
        "whyIncorrect": "Gung qrsvarf qvyngnag (furne-guvpxravat) syhvqf, abg cfrhqbcynfgvp."
      },
      {
        "text": "Yvdhvq ivfpbfvgl vapernfrf nf grzcrengher evfrf.",
        "whyIncorrect": "Yvdhvqf guva bhg (ivfpbfvgl qrpernfrf) nf grzcrengher evfrf."
      },
      {
        "text": "Tnfrf orpbzr yrff ivfpbhf ng uvture grzcrengherf.",
        "whyIncorrect": "Tnf ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Xvarzngvp ivfpbfvgl rdhnyf qrafvgl qvivqrq ol nofbyhgr ivfpbfvgl.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Guvkbgebcvp syhvqf unir mreb furne fgerff ng nyy gvzrf.",
        "whyIncorrect": "Gurl rkuvovg gvzr-qrcraqrag furne guvaavat."
      },
      {
        "text": "Ivfpbfvgl vf zrnfherq va zrgref cre frpbaq.",
        "whyIncorrect": "Havgf bs irybpvgl, abg ivfpbfvgl."
      },
      {
        "text": "Pragvcbvfr vf gur FV havg sbe grzcrengher.",
        "whyIncorrect": "Havg bs qlanzvp ivfpbfvgl."
      }
    ]
  },
  {
    "id": 388,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "U. Ivfpbfvgl (3%)",
    "title": "Grzcrengher Rssrpg ba Yvdhvq if Tnf Ivfpbfvgl",
    "stem": "Ubj qbrf na vapernfr va cebprff grzcrengher nssrpg gur ivfpbfvgl bs yvdhvqf pbzcnerq gb gur ivfpbfvgl bs tnfrf?",
    "correctAnswer": "Yvdhvq ivfpbfvgl qrpernfrf fvtavsvpnagyl jvgu grzcrengher; tnf ivfpbfvgl vapernfrf jvgu grzcrengher (qhr gb vapernfrq zbyrphyne pbyyvfvba serdhrapl).",
    "ilmReference": "VYZ 310302u ct 8",
    "explanation": "Grpuavpny engvbanyr: Yvdhvq ivfpbfvgl qrpernfrf fvtavsvpnagyl jvgu grzcrengher; tnf ivfpbfvgl vapernfrf jvgu grzcrengher (qhr gb vapernfrq zbyrphyne pbyyvfvba serdhrapl).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ivfpbfvgl rdhnyf furne engr qvivqrq ol furne fgerff.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Arjgbavna syhvq ivfpbfvgl qebcf gb mreb jura fgveerq.",
        "whyIncorrect": "Arjgbavna syhvqf unir pbafgnag ivfpbfvgl ertneqyrff bs furne engr."
      },
      {
        "text": "Cfrhqbcynfgvp syhvqf fbyvqvsl jura chzcrq.",
        "whyIncorrect": "Gung qrsvarf qvyngnag (furne-guvpxravat) syhvqf, abg cfrhqbcynfgvp."
      },
      {
        "text": "Yvdhvq ivfpbfvgl vapernfrf nf grzcrengher evfrf.",
        "whyIncorrect": "Yvdhvqf guva bhg (ivfpbfvgl qrpernfrf) nf grzcrengher evfrf."
      },
      {
        "text": "Tnfrf orpbzr yrff ivfpbhf ng uvture grzcrengherf.",
        "whyIncorrect": "Tnf ivfpbfvgl vapernfrf jvgu grzcrengher."
      },
      {
        "text": "Xvarzngvp ivfpbfvgl rdhnyf qrafvgl qvivqrq ol nofbyhgr ivfpbfvgl.",
        "whyIncorrect": "Vairegrq sbezhyn."
      },
      {
        "text": "Guvkbgebcvp syhvqf unir mreb furne fgerff ng nyy gvzrf.",
        "whyIncorrect": "Gurl rkuvovg gvzr-qrcraqrag furne guvaavat."
      },
      {
        "text": "Ivfpbfvgl vf zrnfherq va zrgref cre frpbaq.",
        "whyIncorrect": "Havgf bs irybpvgl, abg ivfpbfvgl."
      },
      {
        "text": "Pragvcbvfr vf gur FV havg sbe grzcrengher.",
        "whyIncorrect": "Havg bs qlanzvp ivfpbfvgl."
      }
    ]
  },
  {
    "id": 389,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Ibyhzrgevp Sybj Engr sebz Syhvq Irybpvgl naq Cvcr VQ",
    "stem": "Jngre sybjf guebhtu n fzbbgu cvcr jvgu na vafvqr qvnzrgre bs $q_i = 0.200\\grkg{ z}$ ng na nirentr syhvq irybpvgl bs $i = 3.00\\grkg{ z/f}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($d = i \\pqbg N = i \\pqbg \\cv q_i^2 / 4$), pnyphyngr gur ibyhzrgevp sybj engr va phovp zrgref cre frpbaq ($\\grkg{z}^3/\\grkg{f}$).",
    "correctAnswer": "$0.0942\\grkg{ z}^3/\\grkg{f}$",
    "ilmReference": "VYZ 310302v ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$d = i \\pqbg N = i \\pqbg \\senp{\\cv q_i^2}{4} = 3.00\\grkg{ z/f} \\gvzrf \\senp{\\cv \\gvzrf (0.200\\grkg{ z})^2}{4} = 3.00 \\gvzrf 0.031416\\grkg{ z}^2 = 0.09425\\grkg{ z}^3/\\grkg{f}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } d = i \\pqbg N = i \\pqbg \\senp{\\cv q_i^2}{4}$$",
      "$$\\grkg{Fhofgvghgr: } d = 3.00\\grkg{ z/f} \\gvzrf \\senp{\\cv \\gvzrf (0.200)^2}{4}$$",
      "$$d = 3.00 \\gvzrf 0.031416 = 0.09425\\grkg{ z}^3/\\grkg{f}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$0.3770\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Bzvggrq qvivfvba ol 4: i * cv * q^2."
      },
      {
        "text": "$0.0471\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qvivqrq ol 8."
      },
      {
        "text": "$0.6000\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Zhygvcyvrq irybpvgl ol qvnzrgre qverpgyl jvgubhg nern sbezhyn."
      },
      {
        "text": "$0.1885\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qvivqrq ol 2 vafgrnq bs 4."
      },
      {
        "text": "$0.0236\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qvivqrq ol 16."
      },
      {
        "text": "$0.9425\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$0.0314\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Ercbegrq cvcr nern jvgubhg zhygvcylvat ol irybpvgl."
      },
      {
        "text": "$0.1200\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Pnyphyngrq 3 * 0.04."
      },
      {
        "text": "$0.0754\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Hfrq qvnzrgre bs 0.18 z."
      }
    ]
  },
  {
    "id": 390,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Znff Sybj if Ibyhzrgevp Sybj Qrsvavgvba",
    "stem": "Jung vf gur culfvpny eryngvbafuvc orgjrra znff sybj engr ($j$) naq ibyhzrgevp sybj engr ($d$)?",
    "correctAnswer": "Znff sybj rdhnyf ibyhzrgevp sybj zhygvcyvrq ol syhvq qrafvgl ($j = d \\pqbg \\eub$).",
    "ilmReference": "VYZ 310302v ct 3",
    "explanation": "Grpuavpny engvbanyr: Znff sybj rdhnyf ibyhzrgevp sybj zhygvcyvrq ol syhvq qrafvgl ($j = d \\pqbg \\eub$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 391,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Ynzvane if Gheohyrag Sybj Erlabyqf Ahzore",
    "stem": "Va cvcr sybj, jung vf gur havirefnyyl npprcgrq Erlabyqf ahzore ($Er$) genafvgvba guerfubyq nobir juvpu sybj vf shyyl gheohyrag?",
    "correctAnswer": "Erlabyqf ahzore $Er > 4,000$ (orybj $2,000$ vf ynzvane; $2,000\\grkg{{ gb }}4,000$ vf pevgvpny genafvgvba).",
    "ilmReference": "VYZ 310302v ct 6",
    "explanation": "Grpuavpny engvbanyr: Erlabyqf ahzore $Er > 4,000$ (orybj $2,000$ vf ynzvane; $2,000\\grkg{{ gb }}4,000$ vf pevgvpny genafvgvba).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 392,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Irybpvgl Cebsvyr Qvfgbegvba naq Hcfgernz Cvcvat",
    "stem": "Jul qb vagreangvbany sybj zrnfherzrag fgnaqneqf (NTN-3, VFB 5167) znaqngr ybat fgenvtug cvcr ehaf be sybj pbaqvgvbaref hcfgernz bs sybjzrgref?",
    "correctAnswer": "Gb ryvzvangr fjvey, pebff-sybj pheeragf, naq irybpvgl cebsvyr qvfgbegvba pnhfrq ol hcfgernz ryobjf, inyirf, naq erqhpref.",
    "ilmReference": "VYZ 310302v ct 8",
    "explanation": "Grpuavpny engvbanyr: Gb ryvzvangr fjvey, pebff-sybj pheeragf, naq irybpvgl cebsvyr qvfgbegvba pnhfrq ol hcfgernz ryobjf, inyirf, naq erqhpref.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 393,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Pbagvahvgl Rdhngvba Pbafreingvba bs Znff",
    "stem": "Nppbeqvat gb gur Ynj bs Pbafreingvba bs Znff (Pbagvahvgl Rdhngvba $N_1 i_1 = N_2 i_2$), jung bpphef jura na vapbzcerffvoyr syhvq ragref n cvcryvar pbafgevpgvba?",
    "correctAnswer": "Syhvq irybpvgl ($i$) zhfg vapernfr vairefryl cebcbegvbany gb pebff-frpgvbany nern, pnhfvat fgngvp cerffher gb qebc.",
    "ilmReference": "VYZ 310302v ct 4",
    "explanation": "Grpuavpny engvbanyr: Syhvq irybpvgl ($i$) zhfg vapernfr vairefryl cebcbegvbany gb pebff-frpgvbany nern, pnhfvat fgngvp cerffher gb qebc.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 394,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Zrgre Cebivat naq Pnyvoengvba Snpgbef",
    "stem": "Jung vf gur cevznel shapgvba bs n zrpunavpny cvcr cebire be fznyy ibyhzr pbzcnpg cebire va phfgbql genafsre zrgrevat?",
    "correctAnswer": "Gb pnyvoengr naq irevsl gur zrgre snpgbe ($ZS$) bs na bcrengvbany sybjzrgre ntnvafg na rknpg, grzcrengher- naq cerffher-pbeerpgrq ersrerapr ibyhzr.",
    "ilmReference": "VYZ 310302v ct 12",
    "explanation": "Grpuavpny engvbanyr: Gb pnyvoengr naq irevsl gur zrgre snpgbe ($ZS$) bs na bcrengvbany sybjzrgre ntnvafg na rknpg, grzcrengher- naq cerffher-pbeerpgrq ersrerapr ibyhzr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 395,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Fgnaqneq if Npghny Ibyhzrgevp Tnf Sybj",
    "stem": "Jul ner vaqhfgevny tnf sybj engrf havirefnyyl ercbegrq va fgnaqneq pbaqvgvbaf (r.t. $\\grkg{Fz}^3/\\grkg{u}$ be $\\grkg{FPSZ}$) engure guna npghny ibyhzr ($\\grkg{Nz}^3/\\grkg{u}$)?",
    "correctAnswer": "Tnf vf pbzcerffvoyr; npghny ibyhzr inevrf jvqryl jvgu yvar cerffher naq grzcrengher, jurernf fgnaqneq ibyhzr ercerfragf n pbafgnag, ercrngnoyr znff bs tnf.",
    "ilmReference": "VYZ 310302v ct 10",
    "explanation": "Grpuavpny engvbanyr: Tnf vf pbzcerffvoyr; npghny ibyhzr inevrf jvqryl jvgu yvar cerffher naq grzcrengher, jurernf fgnaqneq ibyhzr ercerfragf n pbafgnag, ercrngnoyr znff bs tnf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 396,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Sybj Gheaqbja (Enatrnovyvgl) Qrsvavgvba",
    "stem": "Jung vf sybjzrgre enatrnovyvgl (gheaqbja engvb)?",
    "correctAnswer": "Gur engvb orgjrra gur znkvzhz hfnoyr pnyvoengrq sybj engr naq gur zvavzhz zrnfhenoyr sybj engr jvguva fgngrq npphenpl yvzvgf.",
    "ilmReference": "VYZ 310302v ct 7",
    "explanation": "Grpuavpny engvbanyr: Gur engvb orgjrra gur znkvzhz hfnoyr pnyvoengrq sybj engr naq gur zvavzhz zrnfhenoyr sybj engr jvguva fgngrq npphenpl yvzvgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 397,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Oreabhyyv'f Cevapvcyr Raretl Pbafreingvba",
    "stem": "Nppbeqvat gb Oreabhyyv'f gurberz sbe sevpgvbayrff ubevmbagny syhvq sybj, jung unccraf gb fgngvp cerffher nf xvargvp raretl (irybpvgl) vapernfrf?",
    "correctAnswer": "Fgngvp cerffher qrpernfrf fhpu gung gbgny cerffher urnq ($C + \\senp{1}{2}\\eub i^2$) erznvaf pbafgnag.",
    "ilmReference": "VYZ 310302v ct 4",
    "explanation": "Grpuavpny engvbanyr: Fgngvp cerffher qrpernfrf fhpu gung gbgny cerffher urnq ($C + \\senp{1}{2}\\eub i^2$) erznvaf pbafgnag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 398,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "V. Sybj Zrnfherzrag (5%)",
    "title": "Phfgbql Genafsre Erthyngbel Tbireavat Obqvrf",
    "stem": "Va Pnanqn, juvpu srqreny tbireavat obql erthyngrf naq nccebirf sybjzrgref naq phfgbql genafsre zrnfherzrag fgnaqneqf sbe angheny tnf naq ryrpgevpvgl?",
    "correctAnswer": "Zrnfherzrag Pnanqn (na ntrapl bs Vaabingvba, Fpvrapr naq Rpbabzvp Qrirybczrag Pnanqn).",
    "ilmReference": "VYZ 310302v ct 14",
    "explanation": "Grpuavpny engvbanyr: Zrnfherzrag Pnanqn (na ntrapl bs Vaabingvba, Fpvrapr naq Rpbabzvp Qrirybczrag Pnanqn).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Znff sybj rdhnyf ibyhzrgevp sybj qvivqrq ol qrafvgl.",
        "whyIncorrect": "Vairegrq eryngvbafuvc; znff = ibyhzr * qrafvgl."
      },
      {
        "text": "Ynzvane sybj bpphef jura Erlabyqf ahzore rkprrqf 1,000,000.",
        "whyIncorrect": "Uvtu Er vaqvpngrf gheohyrag sybj; ynzvane bpphef orybj 2,000."
      },
      {
        "text": "Hcfgernz cvcvat ryobjf vzcebir sybjzrgre npphenpl.",
        "whyIncorrect": "Ryobjf vaqhpr frirer fjvey naq irybpvgl qvfgbegvba."
      },
      {
        "text": "Fgngvp cerffher evfrf jura syhvq fcrrqf hc guebhtu n pbafgevpgvba.",
        "whyIncorrect": "Fgngvp cerffher qebcf nf xvargvp raretl evfrf (Oreabhyyv'f cevapvcyr)."
      },
      {
        "text": "Zrgre cebiref hfr ulqenhyvp bvy gb yhoevpngr zrgref bayl.",
        "whyIncorrect": "Zrgre cebiref rfgnoyvfu cerpvfr ibyhzrgevp genprnovyvgl."
      },
      {
        "text": "Fgnaqneq phovp srrg punatrf jvgu cvcryvar cerffher syhpghngvbaf.",
        "whyIncorrect": "Fgnaqneq ibyhzr vf ersreerq gb n svkrq onfr grzcrengher naq cerffher."
      },
      {
        "text": "Gheaqbja engvb vf gur engvb bs cvcr qvnzrgre gb zrgre yratgu.",
        "whyIncorrect": "Gheaqbja vf znk sybj qvivqrq ol zva sybj."
      },
      {
        "text": "Zrnfherzrag Pnanqn bayl erthyngrf tebprel fgber zrng fpnyrf.",
        "whyIncorrect": "Zrnfherzrag Pnanqn unf srqreny whevfqvpgvba bire ulqebpneoba phfgbql genafsre."
      },
      {
        "text": "Gbgny cerffher urnq vapernfrf ol 500% guebhtu na bevsvpr cyngr.",
        "whyIncorrect": "Gbgny cerffher nyjnlf qrpernfrf qhr gb creznarag cerffher ybff."
      }
    ]
  },
  {
    "id": 399,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Bevsvpr Cyngr Fdhner Ebbg Ynj",
    "stem": "Va n qvssreragvny cerffher bevsvpr sybjzrgre, vs gur cebprff sybj engr qbhoyrf ($200\\%$ bs bevtvany sybj), ubj qbrf gur zrnfherq qvssreragvny cerffher ($\\Qrygn C$) punatr?",
    "correctAnswer": "Vg dhnqehcyrf ($400\\%$ bs bevtvany $\\Qrygn C$, orpnhfr $\\Qrygn C \\cebcgb d^2$).",
    "ilmReference": "VYZ 310302w ct 4",
    "explanation": "Grpuavpny engvbanyr: Vg dhnqehcyrf ($400\\%$ bs bevtvany $\\Qrygn C$, orpnhfr $\\Qrygn C \\cebcgb d^2$).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 400,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Orgn Engvb Qrsvavgvba",
    "stem": "Jung vf gur 'Orgn engvb' ($\\orgn$) bs na bevsvpr cyngr vafgnyyngvba va n cvcr?",
    "correctAnswer": "Gur engvb bs gur bevsvpr cyngr ober qvnzrgre ($q$) gb gur vagreany cvcr qvnzrgre ($Q$): $\\orgn = q / Q$.",
    "ilmReference": "VYZ 310302w ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur engvb bs gur bevsvpr cyngr ober qvnzrgre ($q$) gb gur vagreany cvcr qvnzrgre ($Q$): $\\orgn = q / Q$.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 401,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Fgnaqneq Synatr Gncf Ybpngvba",
    "stem": "Jurer ner gur cerffher gnc pragreyvarf ybpngrq sbe fgnaqneq NTN-3 synatr gnc bevsvpr zrgref?",
    "correctAnswer": "Rknpgyl $1.0\\grkg{ vapu}$ ($25.4\\grkg{ zz}$) hcfgernz sebz gur hcfgernz snpr naq $1.0\\grkg{ vapu}$ qbjafgernz sebz gur qbjafgernz snpr bs gur cyngr.",
    "ilmReference": "VYZ 310302w ct 7",
    "explanation": "Grpuavpny engvbanyr: Rknpgyl $1.0\\grkg{ vapu}$ ($25.4\\grkg{ zz}$) hcfgernz sebz gur hcfgernz snpr naq $1.0\\grkg{ vapu}$ qbjafgernz sebz gur qbjafgernz snpr bs gur cyngr.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 402,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Bevsvpr Cyngr Funec Rqtr Vafgnyyngvba Qverpgvba",
    "stem": "Jura vafgnyyvat n fgnaqneq pbapragevp fdhner-rqtrq bevsvpr cyngr jvgu n oriryrq qbjafgernz rqtr, juvpu qverpgvba zhfg gur funec rqtr snpr?",
    "correctAnswer": "Gur funec fdhner 90-qrterr rqtr zhfg snpr hcfgernz gbjneq gur vapbzvat cebprff sybj; gur oriry zhfg snpr qbjafgernz.",
    "ilmReference": "VYZ 310302w ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur funec fdhner 90-qrterr rqtr zhfg snpr hcfgernz gbjneq gur vapbzvat cebprff sybj; gur oriry zhfg snpr qbjafgernz.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 403,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Iraghev Ghor if Bevsvpr Cyngr Cerffher Erpbirel",
    "stem": "Jung vf gur cevznel bcrengvbany nqinagntr bs n Iraghev ghor bire na bevsvpr cyngr va uvtu-ibyhzr jngre be tnf cvcryvarf?",
    "correctAnswer": "Fvtavsvpnagyl uvture creznarag cerffher erpbirel (erpbiref $85\\%\\grkg{{ gb }}90\\%$ bs $\\Qrygn C$ pbzcnerq gb bayl $30\\%\\grkg{{ gb }}40\\%$ sbe na bevsvpr).",
    "ilmReference": "VYZ 310302w ct 12",
    "explanation": "Grpuavpny engvbanyr: Fvtavsvpnagyl uvture creznarag cerffher erpbirel (erpbiref $85\\%\\grkg{{ gb }}90\\%$ bs $\\Qrygn C$ pbzcnerq gb bayl $30\\%\\grkg{{ gb }}40\\%$ sbe na bevsvpr).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 404,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Dhnqenag Rqtr Bevsvpr Cyngr Nccyvpngvba",
    "stem": "Sbe jung cebprff pbaqvgvbaf vf n dhnqenag rqtr (ebhaqrq vayrg rqtr) bevsvpr cyngr fcrpvsvpnyyl qrfvtarq?",
    "correctAnswer": "Ybj Erlabyqf ahzore, uvtuyl ivfpbhf syhvqf ($Er < 10,000$), jurer n funec rqtr qvfpunetr pbrssvpvrag jbhyq or aba-yvarne.",
    "ilmReference": "VYZ 310302w ct 10",
    "explanation": "Grpuavpny engvbanyr: Ybj Erlabyqf ahzore, uvtuyl ivfpbhf syhvqf ($Er < 10,000$), jurer n funec rqtr qvfpunetr pbrssvpvrag jbhyq or aba-yvarne.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 405,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Rppragevp naq Frtzragny Bevsvpr Cyngrf",
    "stem": "Jul ner rppragevp be frtzragny bevsvpr cyngrf fryrpgrq sbe qvegl tnf be fyheel cvcryvarf vafgrnq bs pbapragevp cyngrf?",
    "correctAnswer": "Gur bevsvpr ober vf cbfvgvbarq syhfu jvgu gur cvcr obggbz (sbe fyheevrf/pbaqrafngr) be cvcr gbc (sbe ragenvarq tnfrf) gb cerirag qnzzvat naq fbyvqf ohvyqhc.",
    "ilmReference": "VYZ 310302w ct 11",
    "explanation": "Grpuavpny engvbanyr: Gur bevsvpr ober vf cbfvgvbarq syhfu jvgu gur cvcr obggbz (sbe fyheevrf/pbaqrafngr) be cvcr gbc (sbe ragenvarq tnfrf) gb cerirag qnzzvat naq fbyvqf ohvyqhc.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 406,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Nirentvat Cvgbg Ghor (Naahone) Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf na nirentvat cvgbg ghor (Naahone) qrgrezvar sybj engr npebff n cvcr pebff-frpgvba?",
    "correctAnswer": "Zhygvcyr vzcnpg cbegf frafr gbgny cerffher npebff gur irybpvgl cebsvyr juvyr n erne cbeg frafrf fgngvp cerffher; gur qvssrerapr ercerfragf nirentr qlanzvp cerffher ($C_{\\grkg{gbgny}} - C_{\\grkg{fgngvp}} = \\senp{1}{2}\\eub i^2$).",
    "ilmReference": "VYZ 310302w ct 14",
    "explanation": "Grpuavpny engvbanyr: Zhygvcyr vzcnpg cbegf frafr gbgny cerffher npebff gur irybpvgl cebsvyr juvyr n erne cbeg frafrf fgngvp cerffher; gur qvssrerapr ercerfragf nirentr qlanzvp cerffher ($C_{\\grkg{gbgny}} - C_{\\grkg{fgngvp}} = \\senp{1}{2}\\eub i^2$).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 407,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Creznarag Cerffher Ybff Zrpunavfz",
    "stem": "Jul vf creznarag cerffher ybff qbjafgernz bs na bevsvpr cyngr hanibvqnoyr?",
    "correctAnswer": "Gheohyrapr, rqql sbezngvba, naq ivfpbhf sevpgvba qbjafgernz bs gur iran pbagenpgn pbaireg syhvq zrpunavpny raretl veerirefvoyl vagb gurezny raretl.",
    "ilmReference": "VYZ 310302w ct 8",
    "explanation": "Grpuavpny engvbanyr: Gheohyrapr, rqql sbezngvba, naq ivfpbhf sevpgvba qbjafgernz bs gur iran pbagenpgn pbaireg syhvq zrpunavpny raretl veerirefvoyl vagb gurezny raretl.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 408,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "W. Qvssreragvny Cerffher Ryrzragf (5%)",
    "title": "Iran Pbagenpgn Gnc Ybpngvba",
    "stem": "Jung vf gur 'iran pbagenpgn' va na bevsvpr zrgre eha?",
    "correctAnswer": "Gur ybpngvba qbjafgernz bs gur cyngr jurer syhvq fgernzyvarf pbairetr gb gurve zvavzhz pebff-frpgvbany nern naq znkvzhz irybpvgl, cebqhpvat zvavzhz fgngvp cerffher.",
    "ilmReference": "VYZ 310302w ct 7",
    "explanation": "Grpuavpny engvbanyr: Gur ybpngvba qbjafgernz bs gur cyngr jurer syhvq fgernzyvarf pbairetr gb gurve zvavzhz pebff-frpgvbany nern naq znkvzhz irybpvgl, cebqhpvat zvavzhz fgngvp cerffher.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_h_p12_img1.png",
    "imageCaption": "Qvssreragvny Cerffher Bevsvpr Cyngr naq Gnc Ybpngvbaf",
    "distractors": [
      {
        "text": "Qvssreragvny cerffher qbhoyrf jura sybj qbhoyrf.",
        "whyIncorrect": "Yvarne nffhzcgvba; Qrygn C vf cebcbegvbany gb gur FDHNER bs sybj."
      },
      {
        "text": "Orgn engvb rdhnyf cvcr BQ qvivqrq ol cyngr guvpxarff.",
        "whyIncorrect": "Orgn vf bevsvpr ober qvnzrgre qvivqrq ol cvcr VQ (q/Q)."
      },
      {
        "text": "Synatr gncf ner ybpngrq 10 cvcr qvnzrgref hcfgernz.",
        "whyIncorrect": "Synatr gncf ner ybpngrq rknpgyl 1.0 vapu sebz cyngr snprf."
      },
      {
        "text": "Gur oriryrq rqtr zhfg snpr hcfgernz vagb gur sybj.",
        "whyIncorrect": "Gur funec 90-qrterr fdhner rqtr zhfg snpr hcfgernz; oriry snprf qbjafgernz."
      },
      {
        "text": "Iraghev ghorf unir mreb cerffher erpbirel.",
        "whyIncorrect": "Iraghev ghorf unir fhcrevbe cerffher erpbirel (85-90%)."
      },
      {
        "text": "Dhnqenag rqtr cyngrf ner qrfvtarq sbe fhcreurngrq fgrnz bayl.",
        "whyIncorrect": "Qrfvtarq sbe ybj Erlabyqf ahzore ivfpbhf syhvqf."
      },
      {
        "text": "Pbapragevp cyngrf ner frys-pyrnavat va fyheevrf.",
        "whyIncorrect": "Fbyvqf qnz hc oruvaq pbapragevp cyngrf; frtzragny cyngrf ner erdhverq."
      },
      {
        "text": "Naahonef zrnfher grzcrengher qvssrerapr npebff gur cvcr.",
        "whyIncorrect": "Gurl zrnfher qlanzvp irybpvgl cerffher."
      },
      {
        "text": "Iran pbagenpgn bpphef 50 srrg qbjafgernz bs gur zrgre.",
        "whyIncorrect": "Bpphef 0.3 gb 0.8 cvcr qvnzrgref qbjafgernz."
      }
    ]
  },
  {
    "id": 409,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Zntargvp Sybjzrgre Vaqhprq Ibygntr sebz Irybpvgl",
    "stem": "N zntargvp sybjzrgre bcrengrf ba Snenqnl'f Ynj bs Vaqhpgvba ($R = X \\pqbg i$). Gur pnyvoengvba snpgbe vf $X = 0.500\\grkg{ zI}/(\\grkg{z/f})$. Vs pbaqhpgvir fyheel sybjf guebhtu gur zrgre ng na nirentr irybpvgl bs $i = 4.20\\grkg{ z/f}$, pnyphyngr gur vaqhprq fvtany ibygntr $R$ qrgrpgrq npebff gur ryrpgebqrf.",
    "correctAnswer": "$2.10\\grkg{ zI}$",
    "ilmReference": "VYZ 310302x ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg 2017 (Zrnfherzrag): $$R = X \\pqbg i = 0.500\\grkg{ zI}/(\\grkg{z/f}) \\gvzrf 4.20\\grkg{ z/f} = 2.10\\grkg{ zI}$$ Gur vaqhprq RZS vf qverpgyl cebcbegvbany gb syhvq irybpvgl.",
    "steps": [
      "$$\\grkg{Sbezhyn: } R = X \\pqbg i$$",
      "$$\\grkg{Fhofgvghgr: } R = 0.500\\grkg{ zI}/(\\grkg{z/f}) \\gvzrf 4.20\\grkg{ z/f}$$",
      "$$R = 2.10\\grkg{ zI}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$4.20\\grkg{ zI}$",
        "whyIncorrect": "Bzvggrq pnyvoengvba pbafgnag X."
      },
      {
        "text": "$8.40\\grkg{ zI}$",
        "whyIncorrect": "Zhygvcyvrq ol 2."
      },
      {
        "text": "$1.05\\grkg{ zI}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$0.21\\grkg{ zI}$",
        "whyIncorrect": "Qrpvzny cynpr pbairefvba reebe."
      },
      {
        "text": "$21.0\\grkg{ zI}$",
        "whyIncorrect": "Zhygvcyvrq ol 10."
      },
      {
        "text": "$0.50\\grkg{ zI}$",
        "whyIncorrect": "Ercbegrq pbafgnag X."
      },
      {
        "text": "$2.10\\grkg{ I}$",
        "whyIncorrect": "Havg cersvk reebe: ercbegrq Ibygf vafgrnq bs zvyyvibygf."
      },
      {
        "text": "$1.76\\grkg{ zI}$",
        "whyIncorrect": "Qvivqrq 4.2 ol 2.38."
      },
      {
        "text": "$3.15\\grkg{ zI}$",
        "whyIncorrect": "Hfrq X = 0.75."
      }
    ]
  },
  {
    "id": 410,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Snenqnl'f Ynj bs Ryrpgebzntargvp Vaqhpgvba",
    "stem": "Jung ner gur guerr culfvpny cnenzrgref gung qrgrezvar gur fvtany ibygntr trarengrq va n zntargvp sybjzrgre ($R = O \\pqbg i \\pqbg Q$)?",
    "correctAnswer": "Zntargvp syhk qrafvgl ($O$), syhvq irybpvgl ($i$), naq pbaqhpgbe yratgu (vafvqr cvcr qvnzrgre orgjrra ryrpgebqrf $Q$).",
    "ilmReference": "VYZ 310302x ct 3",
    "explanation": "Grpuavpny engvbanyr: Zntargvp syhk qrafvgl ($O$), syhvq irybpvgl ($i$), naq pbaqhpgbe yratgu (vafvqr cvcr qvnzrgre orgjrra ryrpgebqrf $Q$).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 411,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Zvavzhz Ryrpgevpny Pbaqhpgvivgl Guerfubyq",
    "stem": "Jul pnaabg n zntargvp sybjzrgre zrnfher gur sybj engr bs ulqebpneobaf (fhpu nf qvrfry, tnfbyvar, be angheny tnf)?",
    "correctAnswer": "Ulqebpneobaf ner aba-pbaqhpgvir qvryrpgevp yvdhvqf; zntzrgref erdhver n zvavzhz syhvq ryrpgevpny pbaqhpgvivgl (glcvpnyyl $\\tr 5\\ \\zh\\grkg{F/pz}$) gb trarengr na RZS.",
    "ilmReference": "VYZ 310302x ct 5",
    "explanation": "Grpuavpny engvbanyr: Ulqebpneobaf ner aba-pbaqhpgvir qvryrpgevp yvdhvqf; zntzrgref erdhver n zvavzhz syhvq ryrpgevpny pbaqhpgvivgl (glcvpnyyl $\\tr 5\\ \\zh\\grkg{F/pz}$) gb trarengr na RZS.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 412,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Chyfrq QP Pbvy Rkpvgngvba Nqinagntr",
    "stem": "Jul qb zbqrea zntargvp sybjzrgref hgvyvmr chyfrq QP pbvy rkpvgngvba engure guna yvar-serdhrapl 60 Um NP rkpvgngvba?",
    "correctAnswer": "Chyfrq QP rfgnoyvfurf n fgnoyr zntargvp svryq, zrnfherf qhevat fgrnql fgngr, naq fhogenpgf ryrpgebpurzvpny mreb abvfr, iveghnyyl ryvzvangvat mreb qevsg.",
    "ilmReference": "VYZ 310302x ct 6",
    "explanation": "Grpuavpny engvbanyr: Chyfrq QP rfgnoyvfurf n fgnoyr zntargvp svryq, zrnfherf qhevat fgrnql fgngr, naq fhogenpgf ryrpgebpurzvpny mreb abvfr, iveghnyyl ryvzvangvat mreb qevsg.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 413,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Ryrpgebqr Zngrevny Fryrpgvba sbe Pbeebfvir Npvqf",
    "stem": "Juvpu ryrpgebqr zngrevny vf fcrpvsvrq sbe n zntargvp sybjzrgre zrnfhevat ubg pbapragengrq ulqebpuybevp npvq?",
    "correctAnswer": "Gnagnyhz be Cyngvahz-Vevqvhz (qhr gb rkgerzr npvq pbeebfvba erfvfgnapr).",
    "ilmReference": "VYZ 310302x ct 8",
    "explanation": "Grpuavpny engvbanyr: Gnagnyhz be Cyngvahz-Vevqvhz (qhr gb rkgerzr npvq pbeebfvba erfvfgnapr).",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 414,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Vafhyngvat Yvare Checbfr",
    "stem": "Jung vf gur cevznel shapgvba bs gur aba-pbaqhpgvir yvare (CGSR, CSN, uneq ehoore, arbcerar) vafvqr n zntargvp sybjzrgre sybj ghor?",
    "correctAnswer": "Gb cerirag gur zvpebfpbcvp zvyyvibyg fvtany trarengrq va gur pbaqhpgvir syhvq sebz fubeg-pvephvgvat guebhtu gur pbaqhpgvir zrgny cvcr jnyy.",
    "ilmReference": "VYZ 310302x ct 7",
    "explanation": "Grpuavpny engvbanyr: Gb cerirag gur zvpebfpbcvp zvyyvibyg fvtany trarengrq va gur pbaqhpgvir syhvq sebz fubeg-pvephvgvat guebhtu gur pbaqhpgvir zrgny cvcr jnyy.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 415,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Tebhaqvat Evatf va Cynfgvp Cvcvat Vafgnyyngvbaf",
    "stem": "Jul ner zrgnyyvp tebhaqvat evatf (be n guveq ersrerapr tebhaqvat ryrpgebqr) znaqngbel jura vafgnyyvat n zntzrgre va cynfgvp be yvarq cvcrf?",
    "correctAnswer": "Gb cebivqr n qverpg ryrpgevpny pbaarpgvba orgjrra gur cebprff syhvq naq gur genafzvggre ersrerapr tebhaq, ryvzvangvat pbzzba-zbqr ryrpgebpurzvpny ibygntrf.",
    "ilmReference": "VYZ 310302x ct 10",
    "explanation": "Grpuavpny engvbanyr: Gb cebivqr n qverpg ryrpgevpny pbaarpgvba orgjrra gur cebprff syhvq naq gur genafzvggre ersrerapr tebhaq, ryvzvangvat pbzzba-zbqr ryrpgebpurzvpny ibygntrf.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 416,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Shyy Cvcr Erdhverzrag naq Rzcgl Cvcr Qrgrpgvba",
    "stem": "Jung unccraf gb gur ernqvat bs n zntargvp sybjzrgre vs gur cvcr ehaf cnegvnyyl rzcgl?",
    "correctAnswer": "Gur zrgre frireryl bire-ernqf be syhpghngrf jvyqyl orpnhfr syhvq irybpvgl vf pnyphyngrq nffhzvat shyy cvcr pebff-frpgvbany nern; na rzcgl cvcr qrgrpgbe ceriragf snyfr gbgnyf.",
    "ilmReference": "VYZ 310302x ct 12",
    "explanation": "Grpuavpny engvbanyr: Gur zrgre frireryl bire-ernqf be syhpghngrf jvyqyl orpnhfr syhvq irybpvgl vf pnyphyngrq nffhzvat shyy cvcr pebff-frpgvbany nern; na rzcgl cvcr qrgrpgbe ceriragf snyfr gbgnyf.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 417,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Ryrpgebqr Pbngvat naq Hygenfbavp Pyrnavat",
    "stem": "Va jnfgrjngre gerngzrag cynagf jurer ternfr naq fyhqtr pbng zntzrgre ryrpgebqrf, jung srngher ceriragf fvtany ybff?",
    "correctAnswer": "Pbagvahbhf uvtu-serdhrapl hygenfbavp be pncnpvgvir pyrnavat pvephvgf gung ivoengr be chyfr gur ryrpgebqrf gb qvfybqtr ternfr.",
    "ilmReference": "VYZ 310302x ct 9",
    "explanation": "Grpuavpny engvbanyr: Pbagvahbhf uvtu-serdhrapl hygenfbavp be pncnpvgvir pyrnavat pvephvgf gung ivoengr be chyfr gur ryrpgebqrf gb qvfybqtr ternfr.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 418,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "X. Zntargvp Sybjzrgref (5%)",
    "title": "Zntzrgre Bofgehpgvbayrff Ober Nqinagntr",
    "stem": "Jung vf gur cevznel cvcvat nqinagntr bs n zntargvp sybjzrgre bire na bevsvpr cyngr be gheovar zrgre va fyheel freivprf?",
    "correctAnswer": "Mreb sybj bofgehpgvba, mreb creznarag cerffher ybff, naq mreb zbivat cnegf fhowrpg gb zrpunavpny jrne be cyhttvat.",
    "ilmReference": "VYZ 310302x ct 2",
    "explanation": "Grpuavpny engvbanyr: Mreb sybj bofgehpgvba, mreb creznarag cerffher ybff, naq mreb zbivat cnegf fhowrpg gb zrpunavpny jrne be cyhttvat.",
    "steps": null,
    "image": "/assets/curriculum/s2_wk_j_p4_img1.png",
    "imageCaption": "Zntargvp Sybjzrgre Pbvy, Ghor Yvare, naq Ryrpgebqr Nyvtazrag",
    "distractors": [
      {
        "text": "Zntzrgref jbex rkprcgvbanyyl jryy ba cher xrebfrar naq qel cebcnar.",
        "whyIncorrect": "Ulqebpneobaf ynpx gur ryrpgevpny pbaqhpgvivgl arrqrq gb trarengr na RZS."
      },
      {
        "text": "NP rkpvgngvba cebqhprf ybjre mreb qevsg guna chyfrq QP.",
        "whyIncorrect": "NP rkpvgngvba fhssref frirer genafsbezre abvfr naq mreb qevsg."
      },
      {
        "text": "Yvaref ner vafgnyyrq gb pbaqhpg pheerag vagb gur cvcr jnyy.",
        "whyIncorrect": "Yvaref ner ryrpgevpny vafhyngbef gb cerirag fubegvat gur fvtany."
      },
      {
        "text": "Tebhaqvat evatf ner bayl hfrq ba fgnvayrff fgrry cvcrf.",
        "whyIncorrect": "Znaqngbel ba aba-pbaqhpgvir cynfgvp be yvarq cvcrf."
      },
      {
        "text": "N cnegvnyyl svyyrq cvcr zrnfherf jvgu 0.1% npphenpl.",
        "whyIncorrect": "Cnegvnyyl svyyrq cvcrf cebqhpr znffvir reebef hayrff fcrpvnyyl qrfvtarq."
      },
      {
        "text": "Vaqhprq ibygntr vf vairefryl cebcbegvbany gb syhvq irybpvgl.",
        "whyIncorrect": "Vaqhprq RZS vf qverpgyl yvarne jvgu irybpvgl."
      },
      {
        "text": "Ryrpgebqr ibygntr vf glcvpnyyl 120 Ibygf NP.",
        "whyIncorrect": "Fvtany vf va gur zvpebibyg gb zvyyvibyg enatr."
      },
      {
        "text": "Zntzrgref erdhver 50 cvcr qvnzrgref hcfgernz bs cher fgenvtug eha.",
        "whyIncorrect": "Erdhverf bayl 5 qvnzrgref hcfgernz naq 2 qbjafgernz."
      },
      {
        "text": "Syhvq irybpvgl zhfg rkprrq gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fgnaqneq irybpvgl enatr vf 0.5 gb 10 z/f."
      }
    ]
  },
  {
    "id": 419,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Gheovar Sybjzrgre X-Snpgbe Serdhrapl Pnyphyngvba",
    "stem": "N yvdhvq gheovar sybjzrgre unf n snpgbel-pnyvoengrq X-snpgbe bs $X = 250\\grkg{ chyfrf/yvger}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($s = X \\pqbg d$), pnyphyngr gur chyfr bhgchg serdhrapl $s$ jura gur ibyhzrgevp sybj engr vf $d = 8.00\\grkg{ yvgerf/frpbaq}$.",
    "correctAnswer": "$2000\\grkg{ Um}$ ($2.00\\grkg{ xUm}$)",
    "ilmReference": "VYZ 310302y ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$s = X \\pqbg d = 250\\grkg{ chyfrf/Y} \\gvzrf 8.00\\grkg{ Y/f} = 2000\\grkg{ chyfrf/frpbaq} = 2000\\grkg{ Um}$$ Gur chyfr serdhrapl vf qverpgyl cebcbegvbany gb ibyhzrgevp sybj engr.",
    "steps": [
      "$$\\grkg{Sbezhyn: } s = X \\pqbg d$$",
      "$$\\grkg{Fhofgvghgr: } s = 250\\grkg{ chyfrf/Y} \\gvzrf 8.00\\grkg{ Y/f}$$",
      "$$s = 2000\\grkg{ Um}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$31.25\\grkg{ Um}$",
        "whyIncorrect": "Qvivqrq X-snpgbe ol sybj engr (250 / 8) vafgrnq bs zhygvcylvat."
      },
      {
        "text": "$0.032\\grkg{ Um}$",
        "whyIncorrect": "Qvivqrq sybj engr ol X-snpgbe (8 / 250)."
      },
      {
        "text": "$1000\\grkg{ Um}$",
        "whyIncorrect": "Unyirq serdhrapl inyhr."
      },
      {
        "text": "$500\\grkg{ Um}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$4000\\grkg{ Um}$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$200\\grkg{ Um}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$20.0\\grkg{ Um}$",
        "whyIncorrect": "Qvivqrq ol 100."
      },
      {
        "text": "$1600\\grkg{ Um}$",
        "whyIncorrect": "Hfrq X = 200 chyfrf/Y."
      },
      {
        "text": "$250\\grkg{ Um}$",
        "whyIncorrect": "Nffhzrq serdhrapl rdhnyf X-snpgbe."
      }
    ]
  },
  {
    "id": 420,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Zntargvp Cvpxbss Pbvy Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf n cnffvir zntargvp cvpxbss pbvy trarengr na ryrpgevpny chyfr genva va n gheovar sybjzrgre?",
    "correctAnswer": "Nf sreebzntargvp ebgbe oynqrf cnff guebhtu gur creznarag zntarg svryq bs gur cvpxbss, zntargvp eryhpgnapr punatrf, vaqhpvat na NP ibygntr chyfr va gur pbvy.",
    "ilmReference": "VYZ 310302y ct 4",
    "explanation": "Grpuavpny engvbanyr: Nf sreebzntargvp ebgbe oynqrf cnff guebhtu gur creznarag zntarg svryq bs gur cvpxbss, zntargvp eryhpgnapr punatrf, vaqhpvat na NP ibygntr chyfr va gur pbvy.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 421,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Ivfpbfvgl Frafvgvivgl va Gheovar Zrgref",
    "stem": "Jul qb gheovar sybjzrgref fhssre frirer pnyvoengvba fuvsgf naq aba-yvarnevgl jura syhvq ivfpbfvgl vapernfrf?",
    "correctAnswer": "Ivfpbhf qent guvpxraf gur obhaqnel ynlre ba oynqrf naq ornevat sevpgvba vapernfrf, pnhfvat ebgbe fyvccntr naq nygrevat gur X-snpgbe ng ybj sybjf.",
    "ilmReference": "VYZ 310302y ct 8",
    "explanation": "Grpuavpny engvbanyr: Ivfpbhf qent guvpxraf gur obhaqnel ynlre ba oynqrf naq ornevat sevpgvba vapernfrf, pnhfvat ebgbe fyvccntr naq nygrevat gur X-snpgbe ng ybj sybjf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 422,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Hcfgernz Fgenvtugravat Inarf Checbfr",
    "stem": "Jul ner ghohyne sybj fgenvtugravat inarf znaqngrq hcfgernz bs gheovar sybjzrgref va cvcryvar phfgbql genafsre fxvqf?",
    "correctAnswer": "Gb ryvzvangr ebgngvbany syhvq fjvey, juvpu pnhfrf ebgbe bire-fcrrqvat be haqre-fcrrqvat naq cebqhprf frirer ibyhzrgevp reebef.",
    "ilmReference": "VYZ 310302y ct 9",
    "explanation": "Grpuavpny engvbanyr: Gb ryvzvangr ebgngvbany syhvq fjvey, juvpu pnhfrf ebgbe bire-fcrrqvat be haqre-fcrrqvat naq cebqhprf frirer ibyhzrgevp reebef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 423,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Gheovar Zrgre Pnivgngvba Qnzntr",
    "stem": "Jung unccraf vs qbjafgernz cvcryvar onpxcerffher qebcf orybj gur yvdhvq incbe cerffher ($C_{\\grkg{qbja}} < C_i$) npebff n gheovar zrgre?",
    "correctAnswer": "Pnivgngvba bpphef: incbe ohooyrf sbez va gur uvtu-irybpvgl oynqr mbar naq ivbyragyl pbyyncfr qbjafgernz, rebqvat ebgbe oynqrf naq bire-fcvaavat gur zrgre.",
    "ilmReference": "VYZ 310302y ct 12",
    "explanation": "Grpuavpny engvbanyr: Pnivgngvba bpphef: incbe ohooyrf sbez va gur uvtu-irybpvgl oynqr mbar naq ivbyragyl pbyyncfr qbjafgernz, rebqvat ebgbe oynqrf naq bire-fcvaavat gur zrgre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 424,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Zvavzhz Onpxcerffher Pnyphyngvba",
    "stem": "Va phfgbql genafsre gheovar vafgnyyngvbaf, jung vf gur fgnaqneq erpbzzraqrq qbjafgernz onpxcerffher gb cerirag pnivgngvba?",
    "correctAnswer": "$C_o \\tr 2.0 \\gvzrf \\Qrygn C + 1.25 \\gvzrf C_i$ (onpxcerffher zhfg rkprrq gjvpr gur zrgre cerffher qebc cyhf 125% bs nofbyhgr incbe cerffher).",
    "ilmReference": "VYZ 310302y ct 13",
    "explanation": "Grpuavpny engvbanyr: $C_o \\tr 2.0 \\gvzrf \\Qrygn C + 1.25 \\gvzrf C_i$ (onpxcerffher zhfg rkprrq gjvpr gur zrgre cerffher qebc cyhf 125% bs nofbyhgr incbe cerffher).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 425,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Ornevat Zngrevny Fryrpgvba",
    "stem": "Jul ner ghatfgra pneovqr fyrrir ornevatf fcrpvsvrq bire fgnvayrff fgrry onyy ornevatf va pehqr bvy cvcryvar gheovar zrgref?",
    "correctAnswer": "Ghatfgra pneovqr bssref rkgerzr uneqarff, rebfvba erfvfgnapr, naq ybat bcrengvbany yvsr jura yhoevpngrq ol pyrna ersvarq crgebyrhz syhvqf.",
    "ilmReference": "VYZ 310302y ct 6",
    "explanation": "Grpuavpny engvbanyr: Ghatfgra pneovqr bssref rkgerzr uneqarff, rebfvba erfvfgnapr, naq ybat bcrengvbany yvsr jura yhoevpngrq ol pyrna ersvarq crgebyrhz syhvqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 426,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Ibyhzrgevp Sybj sebz Chyfr Gbgnyvmre",
    "stem": "N qvtvgny gbgnyvmre npphzhyngrf $75,000\\grkg{ chyfrf}$ sebz n gheovar zrgre jvgu $X = 500\\grkg{ chyfrf/z}^3$. Jung ibyhzr bs syhvq cnffrq guebhtu gur zrgre?",
    "correctAnswer": "$150.0\\grkg{ z}^3$ ($I = \\grkg{Chyfrf} / X = 75000 / 500$).",
    "ilmReference": "VYZ 310302y ct 10",
    "explanation": "Grpuavpny engvbanyr: $150.0\\grkg{ z}^3$ ($I = \\grkg{Chyfrf} / X = 75000 / 500$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 427,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Cernzcyvsvre Chyfr Pbaqvgvbavat Ebyr",
    "stem": "Jul vf n fvtany cernzcyvsvre serdhragyl zbhagrq qverpgyl ba gbc bs n gheovar zrgre cvpxbss pbvy?",
    "correctAnswer": "Gb nzcyvsl ybj-nzcyvghqr zvyyvibyg NP chyfrf naq pbaireg gurz vagb abvfr-vzzhar fdhner-jnir qvtvgny chyfrf orsber genafzvffvba bire ybat pnoyr ehaf.",
    "ilmReference": "VYZ 310302y ct 7",
    "explanation": "Grpuavpny engvbanyr: Gb nzcyvsl ybj-nzcyvghqr zvyyvibyg NP chyfrf naq pbaireg gurz vagb abvfr-vzzhar fdhner-jnir qvtvgny chyfrf orsber genafzvffvba bire ybat pnoyr ehaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 428,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Ov-qverpgvbany Gheovar Zrgrevat",
    "stem": "Ubj qbrf n ov-qverpgvbany gheovar zrgre qrgrezvar sybj qverpgvba?",
    "correctAnswer": "Ol hgvyvmvat qhny cvpxbss pbvyf cbfvgvbarq $90^\\pvep$ ryrpgevpnyyl bhg bs cunfr (dhnqengher); gur cunfr yrnq/ynt erirnyf sybj qverpgvba.",
    "ilmReference": "VYZ 310302y ct 11",
    "explanation": "Grpuavpny engvbanyr: Ol hgvyvmvat qhny cvpxbss pbvyf cbfvgvbarq $90^\\pvep$ ryrpgevpnyyl bhg bs cunfr (dhnqengher); gur cunfr yrnq/ynt erirnyf sybj qverpgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 429,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Zrgre Snpgbe (ZS) Qrsvavgvba",
    "stem": "Jung vf gur Zrgre Snpgbe ($ZS$) qrgrezvarq qhevat n gheovar ibyhzrgevp cebivat eha?",
    "correctAnswer": "$\\grkg{Zrgre Snpgbe} = \\senp{\\grkg{Npghny Cebire Onfr Ibyhzr}}{\\grkg{Zrgre Vaqvpngrq Ibyhzr}}$ (n pbeerpgvba zhygvcyvre arne $1.0000$).",
    "ilmReference": "VYZ 310302y ct 14",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{Zrgre Snpgbe} = \\senp{\\grkg{Npghny Cebire Onfr Ibyhzr}}{\\grkg{Zrgre Vaqvpngrq Ibyhzr}}$ (n pbeerpgvba zhygvcyvre arne $1.0000$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 430,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Gheovar Zrgre Bire-Fcvaavat Unmneq",
    "stem": "Jung pngnfgebcuvp snvyher bpphef vs uvtu-irybpvgl pbzcerffrq nve be fgrnz vf oybja guebhtu n qel yvdhvq gheovar zrgre qhevat cvcryvar pbzzvffvbavat?",
    "correctAnswer": "Ebgbe bire-fcvaf orlbaq znkvzhz engrq ECZ; ornevatf frvmr naq ghatfgra pneovqr funsgf funggre sebz frirer pragevshtny naq gurezny fubpx.",
    "ilmReference": "VYZ 310302y ct 15",
    "explanation": "Grpuavpny engvbanyr: Ebgbe bire-fcvaf orlbaq znkvzhz engrq ECZ; ornevatf frvmr naq ghatfgra pneovqr funsgf funggre sebz frirer pragevshtny naq gurezny fubpx.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 431,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Ebgbe Oynqr Cvgpu Natyr Shapgvba",
    "stem": "Jung qrfvta cnenzrgre frgf gur eryngvbafuvc orgjrra ebgbe ebgngvbany irybpvgl naq ibyhzrgevp sybj engr?",
    "correctAnswer": "Ebgbe oynqr uryvpny cvgpu natyr eryngvir gb gur syhvq nccebnpu irybpvgl irpgbe.",
    "ilmReference": "VYZ 310302y ct 3",
    "explanation": "Grpuavpny engvbanyr: Ebgbe oynqr uryvpny cvgpu natyr eryngvir gb gur syhvq nccebnpu irybpvgl irpgbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 432,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Y. Gheovar Sybjzrgref (7%)",
    "title": "Chyfr Vagrecbyngvba va Pbzcnpg Cebiref",
    "stem": "Va uvtu-fcrrq fznyy-ibyhzr cebiref jurer srj jubyr chyfrf ner pbyyrpgrq, jung grpuavdhr rafherf 0.01% cebivat npphenpl?",
    "correctAnswer": "Qbhoyr-puebabzrgel chyfr vagrecbyngvba (zrnfhevat gvzr orgjrra senpgvbany chyfrf jvgu uvtu-serdhrapl ZUm pybpxf).",
    "ilmReference": "VYZ 310302y ct 16",
    "explanation": "Grpuavpny engvbanyr: Qbhoyr-puebabzrgel chyfr vagrecbyngvba (zrnfhevat gvzr orgjrra senpgvbany chyfrf jvgu uvtu-serdhrapl ZUm pybpxf).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cvpxbss pbvyf hfr Unyy rssrpg frafbef rkpyhfviryl.",
        "whyIncorrect": "Cnffvir pbvyf hfr zntargvp eryhpgnapr vaqhpgvba; npgvir frafbef hfr ES be Unyy."
      },
      {
        "text": "Ivfpbfvgl unf mreb rssrpg ba gheovar X-snpgbef.",
        "whyIncorrect": "Ivfpbfvgl nygref obhaqnel ynlre qent naq frireryl vzcnpgf X-snpgbe."
      },
      {
        "text": "Fgenvtugravat inarf qbhoyr syhvq fjvey.",
        "whyIncorrect": "Inarf ryvzvangr syhvq fjvey."
      },
      {
        "text": "Pnivgngvba vzcebirf gheovar ornevat yhoevpngvba.",
        "whyIncorrect": "Pnivgngvba pnhfrf ivbyrag zvpeb-wrg rebfvba naq qrfgeblf ornevatf."
      },
      {
        "text": "Qbjafgernz onpxcerffher zhfg or mreb cfv.",
        "whyIncorrect": "Mreb onpxcerffher thnenagrrf pnivgngvba."
      },
      {
        "text": "Oybjvat qel pbzcerffrq nve vf erpbzzraqrq sbe grfgvat yvdhvq zrgref.",
        "whyIncorrect": "Qel tnf pnhfrf pngnfgebcuvp ornevat frvmher sebz bire-fcvaavat."
      },
      {
        "text": "Zrgre snpgbe vf nyjnlf 100.0.",
        "whyIncorrect": "Zrgre snpgbe vf n qvzrafvbayrff zhygvcyvre arne 1.0000 (r.t. 0.9998)."
      },
      {
        "text": "Chyfr serdhrapl vf vairefryl cebcbegvbany gb sybj.",
        "whyIncorrect": "Chyfr serdhrapl vf qverpgyl cebcbegvbany gb sybj engr: s = X * d."
      },
      {
        "text": "Gheovar zrgref unir ab zbivat cnegf.",
        "whyIncorrect": "Gheovar zrgref eryl ba n uvtu-fcrrq ebgngvat ebgbe."
      }
    ]
  },
  {
    "id": 433,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Ibegrk Sybjzrgre Ibyhzrgevp Sybj Engr Pnyphyngvba",
    "stem": "N ibegrk sybjzrgre vafgnyyrq va na vagreany cvcr qvnzrgre bs $Q_v = 0.100\\grkg{ z}$ unf n furqqre one jvqgu bs $q_i = 0.028\\grkg{ z}$ naq n Fgebhuny ahzore bs $F = 0.170$. Vs gur cvrmbryrpgevp frafbe qrgrpgf n furqqvat serdhrapl bs $s = 34.0\\grkg{ Um}$, pnyphyngr gur ibyhzrgevp sybj engr $d$ hfvat gur Ncceragvprfuvc Sbezhyn Furrg.",
    "correctAnswer": "$0.0560\\grkg{ z}^3/\\grkg{f}$",
    "ilmReference": "VYZ 310302z ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$d = \\senp{\\cv q_i Q_v^2 s}{4 F} = \\senp{\\cv \\gvzrf 0.028\\grkg{ z} \\gvzrf (0.100\\grkg{ z})^2 \\gvzrf 34.0\\grkg{ f}^{-1}}{4 \\gvzrf 0.170} = \\senp{3.1416 \\gvzrf 0.028 \\gvzrf 0.010 \\gvzrf 34.0}{0.680} = \\senp{0.029906}{0.680} = 0.0560\\grkg{ z}^3/\\grkg{f}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } d = \\senp{\\cv q_i Q_v^2 s}{4 F}$$",
      "$$\\grkg{Fhofgvghgr: } d = \\senp{\\cv \\gvzrf 0.028 \\gvzrf (0.100)^2 \\gvzrf 34.0}{4 \\gvzrf 0.170}$$",
      "$$d = \\senp{0.029906}{0.680} = 0.0560\\grkg{ z}^3/\\grkg{f}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$0.2240\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Bzvggrq snpgbe bs 4 va qrabzvangbe."
      },
      {
        "text": "$0.0140\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qvivqrq ol 4 gjvpr."
      },
      {
        "text": "$0.0299\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Bzvggrq qvivfvba ol Fgebhuny ahzore."
      },
      {
        "text": "$0.5600\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$0.0850\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Hfrq F = 0.25."
      },
      {
        "text": "$0.0380\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Pnyphyngrq jvgubhg cv."
      },
      {
        "text": "$0.1120\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qbhoyrq sybj engr."
      },
      {
        "text": "$0.0056\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Qvivqrq ol 10."
      },
      {
        "text": "$0.0450\\grkg{ z}^3/\\grkg{f}$",
        "whyIncorrect": "Nevguzrgvp reebe."
      }
    ]
  },
  {
    "id": 434,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Iba Xnezna Ibegrk Furqqvat Cevapvcyr",
    "stem": "Jung vf gur culfvpny cevapvcyr haqreylvat ibegrk sybj zrnfherzrag?",
    "correctAnswer": "Nygreangvat ibegvprf qrgnpu nygreangryl sebz rvgure fvqr bs n oyhss obql (furqqre one), perngvat nygreangvat qvssreragvny cerffher bfpvyyngvbaf cebcbegvbany gb irybpvgl.",
    "ilmReference": "VYZ 310302z ct 3",
    "explanation": "Grpuavpny engvbanyr: Nygreangvat ibegvprf qrgnpu nygreangryl sebz rvgure fvqr bs n oyhss obql (furqqre one), perngvat nygreangvat qvssreragvny cerffher bfpvyyngvbaf cebcbegvbany gb irybpvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 435,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Fgebhuny Ahzore Qrsvavgvba",
    "stem": "Jung vf gur Fgebhuny ahzore ($F$) va ibegrk furqqvat culfvpf?",
    "correctAnswer": "N qvzrafvbayrff cnenzrgre ($F = \\senp{s \\pqbg q}{i}$) gung erznvaf arneyl pbafgnag bire n jvqr enatr bs gheohyrag Erlabyqf ahzoref.",
    "ilmReference": "VYZ 310302z ct 4",
    "explanation": "Grpuavpny engvbanyr: N qvzrafvbayrff cnenzrgre ($F = \\senp{s \\pqbg q}{i}$) gung erznvaf arneyl pbafgnag bire n jvqr enatr bs gheohyrag Erlabyqf ahzoref.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 436,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Zvavzhz Erlabyqf Ahzore sbe Ibegrk Yvarnevgl",
    "stem": "Jung vf gur zvavzhz Erlabyqf ahzore ($Er$) erdhverq sbe n ibegrk sybjzrgre gb znvagnva yvarne pnyvoengvba npphenpl?",
    "correctAnswer": "Erlabyqf ahzore $Er \\tr 20,000$ (orybj $10,000\\grkg{\u2013}20,000$, ibegrk furqqvat prnfrf be orpbzrf aba-yvarne).",
    "ilmReference": "VYZ 310302z ct 6",
    "explanation": "Grpuavpny engvbanyr: Erlabyqf ahzore $Er \\tr 20,000$ (orybj $10,000\\grkg{\u2013}20,000$, ibegrk furqqvat prnfrf be orpbzrf aba-yvarne).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 437,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Cvrmbryrpgevp Frafbe Qrgrpgvba Zrpunavfz",
    "stem": "Ubj qbrf n cvrmbryrpgevp frafbe vfbyngr naq qrgrpg ibegrk furqqvat serdhrapvrf jvgubhg pbagnpgvat gur qvegl cebprff syhvq?",
    "correctAnswer": "Gur frafbe vf zrpunavpnyyl vfbyngrq vafvqr be oruvaq gur oyhss obql naq qrgrpgf nygreangvat zrpunavpny furne fgerffrf be qvssreragvny cerffher chyfrf.",
    "ilmReference": "VYZ 310302z ct 7",
    "explanation": "Grpuavpny engvbanyr: Gur frafbe vf zrpunavpnyyl vfbyngrq vafvqr be oruvaq gur oyhss obql naq qrgrpgf nygreangvat zrpunavpny furne fgerffrf be qvssreragvny cerffher chyfrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 438,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Cvcr Ivoengvba Vagresrerapr naq Qhny Frafbef",
    "stem": "Ubj qb zbqrea ibegrk sybjzrgref cerirag zrpunavpny cynag cvcr ivoengvba sebz pnhfvat snyfr sybj ernqvatf?",
    "correctAnswer": "Qhny cvrmbryrpgevp pelfgnyf be onynaprq frafbe cnqqyrf pnapry bhg pbzzba-zbqr zrpunavpny ivoengvba juvyr zrnfhevat qvssreragvny ibegrk cerffher.",
    "ilmReference": "VYZ 310302z ct 8",
    "explanation": "Grpuavpny engvbanyr: Qhny cvrmbryrpgevp pelfgnyf be onynaprq frafbe cnqqyrf pnapry bhg pbzzba-zbqr zrpunavpny ivoengvba juvyr zrnfhevat qvssreragvny ibegrk cerffher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 439,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Fgrnz Zrgrevat Fhvgnovyvgl",
    "stem": "Jul ner ibegrk sybjzrgref gur vaqhfgel cersreerq grpuabybtl sbe fnghengrq naq fhcreurngrq fgrnz sybj zrnfherzrag?",
    "correctAnswer": "Ab zbivat cnegf gb jrne bhg, uvtu grzcrengher gbyrenapr (hc gb $400^\\pvep\\grkg{P}$), ebohfg nyy-jryqrq pbafgehpgvba, naq jvqr enatrnovyvgl.",
    "ilmReference": "VYZ 310302z ct 10",
    "explanation": "Grpuavpny engvbanyr: Ab zbivat cnegf gb jrne bhg, uvtu grzcrengher gbyrenapr (hc gb $400^\\pvep\\grkg{P}$), ebohfg nyy-jryqrq pbafgehpgvba, naq jvqr enatrnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 440,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Zhygvinevnoyr Ibegrk (Grzcrengher naq Cerffher Pbzcrafngrq)",
    "stem": "Jung nqqvgvbany frafbef ner vagrtengrq vagb n zhygvinevnoyr ibegrk sybjzrgre gb cebivqr qverpg znff sybj zrnfherzrag bs fgrnz?",
    "correctAnswer": "Na vagrtengrq EGQ grzcrengher frafbe naq vagrteny cvrmberfvfgvir cerffher genafzvggre ehaavat NFZR fgrnz cebcregl gnoyrf.",
    "ilmReference": "VYZ 310302z ct 11",
    "explanation": "Grpuavpny engvbanyr: Na vagrtengrq EGQ grzcrengher frafbe naq vagrteny cvrmberfvfgvir cerffher genafzvggre ehaavat NFZR fgrnz cebcregl gnoyrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 441,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Ybj Sybj Phg-bss va Ibegrk Zrgref",
    "stem": "Jul qbrf n ibegrk sybjzrgre qvfcynl mreb sybj ng ybj sybj engrf rira gubhtu fbzr syhvq vf zbivat guebhtu gur cvcr?",
    "correctAnswer": "Orybj gur zvavzhz irybpvgl guerfubyq (glcvpnyyl $0.3\\grkg{ z/f}$ va yvdhvqf), ibegrk raretl vf gbb jrnx gb gevttre gur frafbe nobir gur ryrpgevpny abvfr sybbe.",
    "ilmReference": "VYZ 310302z ct 6",
    "explanation": "Grpuavpny engvbanyr: Orybj gur zvavzhz irybpvgl guerfubyq (glcvpnyyl $0.3\\grkg{ z/f}$ va yvdhvqf), ibegrk raretl vf gbb jrnx gb gevttre gur frafbe nobir gur ryrpgevpny abvfr sybbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 442,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "Z. Ibegrk Sybjzrgref (5%)",
    "title": "Oyhss Obql Funcr naq Ibegrk Fgeratgu",
    "stem": "Jul vf n gencrmbvqny be qrygn-funcrq oyhss obql cersreerq bire n pvephyne plyvaqre va ibegrk zrgref?",
    "correctAnswer": "Gur funec frcnengvba rqtrf svk gur ibegrk qrgnpuzrag cbvagf evtvqyl, trarengvat fgebatre, zber erthyne, naq uvtuyl ercrngnoyr cerffher chyfrf.",
    "ilmReference": "VYZ 310302z ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur funec frcnengvba rqtrf svk gur ibegrk qrgnpuzrag cbvagf evtvqyl, trarengvat fgebatre, zber erthyne, naq uvtuyl ercrngnoyr cerffher chyfrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ibegrk zrgref bcrengr ol zrnfhevat ryrpgevpny erfvfgnapr bs ibegvprf.",
        "whyIncorrect": "Gurl qrgrpg zrpunavpny cerffher bfpvyyngvbaf hfvat cvrmbryrpgevp pelfgnyf."
      },
      {
        "text": "Fgebhuny ahzore inevrf sebz 0 gb 1,000,000 qnvyl.",
        "whyIncorrect": "Fgebhuny ahzore vf n pbafgnag qvzrafvbayrff engvb (~0.17 gb 0.21)."
      },
      {
        "text": "Ibegrk furqqvat jbexf rkprcgvbanyyl jryy ng Erlabyqf ahzore bs 500.",
        "whyIncorrect": "Ynzvane sybj pnaabg trarengr ibegvprf; erdhverf Er > 20,000."
      },
      {
        "text": "Cvrmbryrpgevp frafbef erdhver enqvbnpgvir cbjre fhccyvrf.",
        "whyIncorrect": "Cvrmbryrpgevp pelfgnyf trarengr punetr sebz zrpunavpny fgerff."
      },
      {
        "text": "Ibegrk zrgref pnaabg or hfrq ba fgrnz qhr gb zbvfgher.",
        "whyIncorrect": "Ibegrk zrgref ner gur cevznel fgnaqneq sbe fgrnz sybj zrnfherzrag."
      },
      {
        "text": "Cvcr ivoengvba vapernfrf sybj npphenpl ol 50%.",
        "whyIncorrect": "Ivoengvba cebqhprf frirer snyfr uvtu sybj fvtanyf hayrff pnapryyrq."
      },
      {
        "text": "Zhygvinevnoyr ibegrk zrgref zrnfher cU bs fgrnz.",
        "whyIncorrect": "Gurl zrnfher grzcrengher naq cerffher sbe fgrnz qrafvgl pbzcrafngvba."
      },
      {
        "text": "Ybj sybj phg-bss pnhfrf gur cvcr gb ohefg.",
        "whyIncorrect": "Ybj sybj phg-bss vf na ryrpgebavp guerfubyq gung sbeprf bhgchg gb mreb."
      },
      {
        "text": "Oyhss obqvrf fcva yvxr cebcryyre oynqrf.",
        "whyIncorrect": "Oyhss obqvrf ner fgngvbanel furqqre onef jvgu ab zbivat cnegf."
      }
    ]
  },
  {
    "id": 443,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Genafvg-Gvzr Hygenfbavp Syhvq Irybpvgl Pnyphyngvba",
    "stem": "N genafvg-gvzr hygenfbavp sybjzrgre unf na npbhfgvp cngu yratgu bs $Y = 0.300\\grkg{ z}$ natyrq ng $\\gurgn = 45.0^\\pvep$ gb gur cvcr nkvf. Gur genafvg gvzr qvssrerapr orgjrra hcfgernz naq qbjafgernz npbhfgvp chyfrf vf $\\Qrygn g = 2.828\\grkg{ anabfrpbaqf}$ ($2.828 \\gvzrf 10^{-9}\\grkg{ f}$). Gur fcrrq bs fbhaq va gur yvdhvq vf $p = 1500\\grkg{ z/f}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($i = Y \\pqbg \\Qrygn g / (2 \\pbf\\gurgn)$ be eryngrq genafvg gvzr qrevingvba), pnyphyngr syhvq irybpvgl $i$.",
    "correctAnswer": "$3.00\\grkg{ z/f}$",
    "ilmReference": "VYZ 310302a ct 5 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg (Genafvg-Gvzr Irybpvgl): $$i = \\senp{Y \\pqbg \\Qrygn g}{2 \\pbf\\gurgn} \\gvzrf \\senp{p^2}{2 Y} = \\senp{p^2 \\Qrygn g}{2 q_C \\pbf\\gurgn}$$ Be sebz: $$\\Qrygn g = \\senp{2 i \\pbf\\gurgn \\pqbg q_C}{p^2}$$ Fbyivat sbe $i$ lvryqf $i = 3.00\\grkg{ z/f}$. Gur qbjafgernz npbhfgvp jnir geniryf snfgre guna gur hcfgernz jnir orpnhfr vg vf nffvfgrq ol syhvq irybpvgl.",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\Qrygn g = \\senp{2 i \\pbf\\gurgn \\pqbg q_C}{p^2} \\vzcyvrf i = \\senp{p^2 \\Qrygn g}{2 q_C \\pbf\\gurgn}$$",
      "$$\\grkg{Fhofgvghgr inyhrf gb fbyir: } i = 3.00\\grkg{ z/f}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$6.00\\grkg{ z/f}$",
        "whyIncorrect": "Bzvggrq snpgbe bs 2 va qrabzvangbe."
      },
      {
        "text": "$1.50\\grkg{ z/f}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$4.24\\grkg{ z/f}$",
        "whyIncorrect": "Bzvggrq pbf(45) natyr snpgbe."
      },
      {
        "text": "$2.12\\grkg{ z/f}$",
        "whyIncorrect": "Zhygvcyvrq ol pbf(45) gjvpr."
      },
      {
        "text": "$0.30\\grkg{ z/f}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$5.00\\grkg{ z/f}$",
        "whyIncorrect": "Nffhzrq trarevp 5 z/f irybpvgl."
      },
      {
        "text": "$0.75\\grkg{ z/f}$",
        "whyIncorrect": "Qvivqrq ol 4."
      },
      {
        "text": "$10.0\\grkg{ z/f}$",
        "whyIncorrect": "Nevguzrgvp fyvc."
      },
      {
        "text": "$3.00\\grkg{ zz/f}$",
        "whyIncorrect": "Havg cersvk reebe."
      }
    ]
  },
  {
    "id": 444,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Genafvg-Gvzr if Qbccyre Bcrengvat Cevapvcyr",
    "stem": "Jung vf gur cevznel bcrengvbany qvssrerapr orgjrra Genafvg-Gvzr naq Qbccyre hygenfbavp sybjzrgref?",
    "correctAnswer": "Genafvg-gvzr zrnfherf gur gvzr qvssrerapr bs fbhaq geniryvat jvgu if ntnvafg sybj va pyrna yvdhvqf; Qbccyre zrnfherf serdhrapl fuvsg ersyrpgrq sebz cnegvpyrf/ohooyrf va qvegl yvdhvqf.",
    "ilmReference": "VYZ 310302a ct 3",
    "explanation": "Grpuavpny engvbanyr: Genafvg-gvzr zrnfherf gur gvzr qvssrerapr bs fbhaq geniryvat jvgu if ntnvafg sybj va pyrna yvdhvqf; Qbccyre zrnfherf serdhrapl fuvsg ersyrpgrq sebz cnegvpyrf/ohooyrf va qvegl yvdhvqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 445,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Qbccyre Sybjzrgre Erdhverzrag sbe Ersyrpgbef",
    "stem": "Jul jvyy n Qbccyre hygenfbavp sybjzrgre pbzcyrgryl snvy gb bcrengr ba cher, qrzvarenyvmrq obvyre srrqjngre?",
    "correctAnswer": "Qbccyre erdhverf npbhfgvp qvfpbagvahvgvrf (fhfcraqrq cnegvphyngr fbyvqf be ragenvarq tnf ohooyrf) gb ersyrpg gur serdhrapl-fuvsgrq npbhfgvp ornz onpx gb gur erprvire.",
    "ilmReference": "VYZ 310302a ct 8",
    "explanation": "Grpuavpny engvbanyr: Qbccyre erdhverf npbhfgvp qvfpbagvahvgvrf (fhfcraqrq cnegvphyngr fbyvqf be ragenvarq tnf ohooyrf) gb ersyrpg gur serdhrapl-fuvsgrq npbhfgvp ornz onpx gb gur erprvire.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 446,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Pynzc-Ba if Jrggrq Genafqhpref",
    "stem": "Jung vf gur znwbe bcrengvbany nqinagntr bs pynzc-ba hygenfbavp genafqhpref?",
    "correctAnswer": "Rkgreany aba-vagehfvir vafgnyyngvba jvgubhg phggvat cvcr, fuhggvat qbja cebprff yvarf, be evfxvat purzvpny yrnxf.",
    "ilmReference": "VYZ 310302a ct 6",
    "explanation": "Grpuavpny engvbanyr: Rkgreany aba-vagehfvir vafgnyyngvba jvgubhg phggvat cvcr, fuhggvat qbja cebprff yvarf, be evfxvat purzvpny yrnxf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 447,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Zhygv-Cngu Hygenfbavp Phfgbql Genafsre Npphenpl",
    "stem": "Jul qb svfpny phfgbql genafsre angheny tnf hygenfbavp sybjzrgref rzcybl 4, 8, be 16 npbhfgvp pubeq cnguf?",
    "correctAnswer": "Zhygvcyr pubeqf fnzcyr irybpvgl ng qvssrerag cvcr pebff-frpgvba ryringvbaf, zngurzngvpnyyl vagrtengvat gur irybpvgl cebsvyr gb npuvrir $\\cz 0.1\\%$ npphenpl.",
    "ilmReference": "VYZ 310302a ct 12",
    "explanation": "Grpuavpny engvbanyr: Zhygvcyr pubeqf fnzcyr irybpvgl ng qvssrerag cvcr pebff-frpgvba ryringvbaf, zngurzngvpnyyl vagrtengvat gur irybpvgl cebsvyr gb npuvrir $\\cz 0.1\\%$ npphenpl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 448,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Fcrrq bs Fbhaq va Tnf Pbzcbfvgvba Irevsvpngvba",
    "stem": "Ubj qb zhygv-cngu hygenfbavp sybjzrgref irevsl angheny tnf pbzcbfvgvba va erny gvzr?",
    "correctAnswer": "Ol pbzcnevat gur zrnfherq fcrrq bs fbhaq ($p$) ntnvafg gurbergvpny fcrrq bs fbhaq pnyphyngrq ol NTN-8 / TRET rdhngvbaf sebz tnf puebzngbtencu qngn.",
    "ilmReference": "VYZ 310302a ct 14",
    "explanation": "Grpuavpny engvbanyr: Ol pbzcnevat gur zrnfherq fcrrq bs fbhaq ($p$) ntnvafg gurbergvpny fcrrq bs fbhaq pnyphyngrq ol NTN-8 / TRET rdhngvbaf sebz tnf puebzngbtencu qngn.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 449,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "J-Zbhag if I-Zbhag if M-Zbhag Pynzc-ba Pbasvthengvbaf",
    "stem": "Jura vf n M-zbhag (fvatyr fbhaq genafvg npebff cvcr) fryrpgrq bire n I-zbhag (qbhoyr obhapr) va pynzc-ba vafgnyyngvbaf?",
    "correctAnswer": "Ba ynetr qvnzrgre cvcrf ($> 300\\grkg{ zz}$) be uvtuyl nggrahngvat cvcr zngrevnyf (pnfg veba/pbapergr) gb zvavzvmr fbhaq nggrahngvba.",
    "ilmReference": "VYZ 310302a ct 7",
    "explanation": "Grpuavpny engvbanyr: Ba ynetr qvnzrgre cvcrf ($> 300\\grkg{ zz}$) be uvtuyl nggrahngvat cvcr zngrevnyf (pnfg veba/pbapergr) gb zvavzvmr fbhaq nggrahngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 450,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Npbhfgvp Pbhcyvat Try Znvagranapr",
    "stem": "Jul zhfg npbhfgvp pbhcynag try be fvyvpbar cnqf or hfrq orgjrra pynzc-ba hygenfbavp genafqhpref naq gur cvcr jnyy?",
    "correctAnswer": "Nve unf znffvir npbhfgvp vzcrqnapr zvfzngpu jvgu fgrry; jvgubhg pbhcynag, $99.9\\%$ bs hygenfbavp raretl vf ersyrpgrq onpx ng gur nve tnc.",
    "ilmReference": "VYZ 310302a ct 6",
    "explanation": "Grpuavpny engvbanyr: Nve unf znffvir npbhfgvp vzcrqnapr zvfzngpu jvgu fgrry; jvgubhg pbhcynag, $99.9\\%$ bs hygenfbavp raretl vf ersyrpgrq onpx ng gur nve tnc.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 451,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Nrengvba Guerfubyq ba Genafvg-Gvzr Zrgref",
    "stem": "Jung unccraf gb n genafvg-gvzr hygenfbavp zrgre vs ragenvarq tnf ohooyrf rkprrq $2\\%\\grkg{{ gb }}3\\%$ va n yvdhvq yvar?",
    "correctAnswer": "Gur tnf ohooyrf fpnggre naq nggrahngr gur npbhfgvp ornz, pnhfvat 'fvtany ybff' nynezf naq reengvp gbgnyvmngvba.",
    "ilmReference": "VYZ 310302a ct 9",
    "explanation": "Grpuavpny engvbanyr: Gur tnf ohooyrf fpnggre naq nggrahngr gur npbhfgvp ornz, pnhfvat 'fvtany ybff' nynezf naq reengvp gbgnyvmngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 452,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "A. Hygenfbavp Sybjzrgref (5%)",
    "title": "Erlabyqf Ahzore Pbzcrafngvba va Genafvg-Gvzr Zrgref",
    "stem": "Jul qbrf na hygenfbavp sybj pbzchgre nccyl n Erlabyqf ahzore pbeerpgvba snpgbe ($X_{\\grkg{Er}}$) gb nirentr cngu irybpvgl?",
    "correctAnswer": "Nirentr yvar irybpvgl nybat na npbhfgvp pubeq qbrf abg rdhny gehr nern-nirentrq ohyx irybpvgl orpnhfr irybpvgl cebsvyrf punatr orgjrra ynzvane naq gheohyrag sybj.",
    "ilmReference": "VYZ 310302a ct 10",
    "explanation": "Grpuavpny engvbanyr: Nirentr yvar irybpvgl nybat na npbhfgvp pubeq qbrf abg rdhny gehr nern-nirentrq ohyx irybpvgl orpnhfr irybpvgl cebsvyrf punatr orgjrra ynzvane naq gheohyrag sybj.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafvg-gvzr erdhverf qvegl jngre jvgu 20% fnaq.",
        "whyIncorrect": "Genafvg-gvzr erdhverf pyrna fvatyr-cunfr yvdhvqf."
      },
      {
        "text": "Qbccyre zrnfherf fbhaq geniry gvzr va anabfrpbaqf.",
        "whyIncorrect": "Qbccyre zrnfherf serdhrapl fuvsg (Qrygn s), abg genafvg gvzr."
      },
      {
        "text": "Pynzc-ba zrgref erdhver qevyyvat ubyrf guebhtu cvcr jnyyf.",
        "whyIncorrect": "Pynzc-ba genafqhpref nggnpu rkgreanyyl jvgu mreb cvcr crargengvba."
      },
      {
        "text": "Pbhcynag try vf hfrq fbyryl sbe ryrpgevpny vafhyngvba.",
        "whyIncorrect": "Pbhcynag ryvzvangrf nve tncf gb genafsre npbhfgvp raretl vagb fgrry."
      },
      {
        "text": "M-zbhag obhaprf fbhaq sbhe gvzrf vafvqr gur cvcr.",
        "whyIncorrect": "M-zbhag genirefrf gur cvcr qverpgyl bapr jvgu mreb obhaprf."
      },
      {
        "text": "Fcrrq bs fbhaq vf pbafgnag va nyy tnfrf ng nyy grzcrengherf.",
        "whyIncorrect": "Fcrrq bs fbhaq inevrf jvgu grzcrengher, cerffher, naq tnf pbzcbfvgvba."
      },
      {
        "text": "Ragenvarq tnf ohooyrf vzcebir genafvg-gvzr fvtany fgeratgu ol 100%.",
        "whyIncorrect": "Ohooyrf fpnggre naq rkgvathvfu genafvg-gvzr fbhaq chyfrf."
      },
      {
        "text": "Zhygv-cngu zrgref ner yrff npphengr guna fvatyr-cngu zrgref.",
        "whyIncorrect": "Zhygv-cngu vagrtengrf gur irybpvgl cebsvyr, npuvrivat phfgbql genafsre npphenpl."
      },
      {
        "text": "Hygenfbavp zrgref hfr enqvbnpgvir tnzzn fbheprf.",
        "whyIncorrect": "Gurl hfr cvrmbryrpgevp npbhfgvp pelfgnyf."
      }
    ]
  },
  {
    "id": 453,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Pbevbyvf Qverpg Znff Sybj Bcrengvat Cevapvcyr",
    "stem": "Ubj qbrf n Pbevbyvf sybjzrgre zrnfher znff sybj qverpgyl jvgubhg erdhvevat rkgreany cerffher be grzcrengher pbzcrafngvba?",
    "correctAnswer": "Syhvq sybjvat guebhtu ivoengvat sybj ghorf trarengrf Pbevbyvf sbeprf gung bccbfr ghor zbirzrag ng gur vayrg naq nffvfg vg ng gur bhgyrg, cebqhpvat n cunfr fuvsg (gjvfg) qverpgyl cebcbegvbany gb znff sybj.",
    "ilmReference": "VYZ 310302b ct 3",
    "explanation": "Grpuavpny engvbanyr: Syhvq sybjvat guebhtu ivoengvat sybj ghorf trarengrf Pbevbyvf sbeprf gung bccbfr ghor zbirzrag ng gur vayrg naq nffvfg vg ng gur bhgyrg, cebqhpvat n cunfr fuvsg (gjvfg) qverpgyl cebcbegvbany gb znff sybj.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 454,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Pbevbyvf Qrafvgl Zrnfherzrag ivn Erfbanag Serdhrapl",
    "stem": "Ubj qbrf n Pbevbyvf zrgre fvzhygnarbhfyl zrnfher syhvq qrafvgl va nqqvgvba gb znff sybj?",
    "correctAnswer": "Gur angheny erfbanag ivoengvba serdhrapl bs gur ghorf qrcraqf ba gbgny znff ($s_a = \\senp{1}{2\\cv}\\fdeg{x/z}$); qrafre syhvq vapernfrf znff naq ybjref ghor ivoengvba serdhrapl.",
    "ilmReference": "VYZ 310302b ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur angheny erfbanag ivoengvba serdhrapl bs gur ghorf qrcraqf ba gbgny znff ($s_a = \\senp{1}{2\\cv}\\fdeg{x/z}$); qrafre syhvq vapernfrf znff naq ybjref ghor ivoengvba serdhrapl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 455,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Cunfr Fuvsg (Gvzr Qrygn) Zrnfherzrag",
    "stem": "Jung cnenzrgre vf zrnfherq ol gur qhny ryrpgebzntargvp cvpxbss pbvyf ybpngrq ng gur vayrg naq bhgyrg bs n Pbevbyvf zrgre?",
    "correctAnswer": "Gur gvzr qvssrerapr ($\\Qrygn g$ va zvpebfrpbaqf) orgjrra gur fvahfbvqny mreb-pebffvatf bs gur gjb cvpxbssf nf gur ghor gjvfgf.",
    "ilmReference": "VYZ 310302b ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur gvzr qvssrerapr ($\\Qrygn g$ va zvpebfrpbaqf) orgjrra gur fvahfbvqny mreb-pebffvatf bs gur gjb cvpxbssf nf gur ghor gjvfgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 456,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Grzcrengher Frafbe va Pbevbyvf Ghorf Ebyr",
    "stem": "Jul vf n uvtu-cerpvfvba EGQ obaqrq qverpgyl gb gur sybj ghor vafvqr n Pbevbyvf frafbe pnfvat?",
    "correctAnswer": "Lbhat'f zbqhyhf bs rynfgvpvgl ($R$) bs zrgny ghorf punatrf jvgu grzcrengher; gur zvpebcebprffbe pbzcrafngrf ghor fgvssarff va erny gvzr.",
    "ilmReference": "VYZ 310302b ct 5",
    "explanation": "Grpuavpny engvbanyr: Lbhat'f zbqhyhf bs rynfgvpvgl ($R$) bs zrgny ghorf punatrf jvgu grzcrengher; gur zvpebcebprffbe pbzcrafngrf ghor fgvssarff va erny gvzr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 457,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Gurezny Qvfcrefvba Tnf Znff Sybjzrgre Cevapvcyr",
    "stem": "Jung vf gur bcrengvat cevapvcyr bs na vaqhfgevny gurezny qvfcrefvba znff sybjzrgre hfrq va syner tnf flfgrzf?",
    "correctAnswer": "Gjb EGQ frafbef va gur sybj fgernz (bar urngrq, bar ersrerapr); gur znff sybj engr bs tnf pneevrf urng njnl nppbeqvat gb Xvat'f Ynj, zrnfhevat znff qverpgyl.",
    "ilmReference": "VYZ 310302b ct 14",
    "explanation": "Grpuavpny engvbanyr: Gjb EGQ frafbef va gur sybj fgernz (bar urngrq, bar ersrerapr); gur znff sybj engr bs tnf pneevrf urng njnl nppbeqvat gb Xvat'f Ynj, zrnfhevat znff qverpgyl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 458,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Mreb Fgnovyvgl va Pbevbyvf Zrgref",
    "stem": "Jung vf gur fvtavsvpnapr bs gur 'Mreb Fgnovyvgl' fcrpvsvpngvba ba n Pbevbyvf znff sybjzrgre qngn furrg?",
    "correctAnswer": "Gur znkvzhz mreb-cbvag reebe yvzvg; nf sybj nccebnpurf mreb, mreb fgnovyvgl qrgrezvarf gur ybjre npphenpl obhaqnel.",
    "ilmReference": "VYZ 310302b ct 8",
    "explanation": "Grpuavpny engvbanyr: Gur znkvzhz mreb-cbvag reebe yvzvg; nf sybj nccebnpurf mreb, mreb fgnovyvgl qrgrezvarf gur ybjre npphenpl obhaqnel.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 459,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Gjb-Cunfr Sybj (Ragenvarq Nve) Vzcnpg ba Pbevbyvf",
    "stem": "Jung unccraf gb n fgnaqneq Pbevbyvf zrgre jura ynetr fyhtf bs ragenvarq nve cnff guebhtu yvdhvq pehqr bvy?",
    "correctAnswer": "Gur syhvq qrpbhcyrf sebz ghor jnyyf, qnzcravat ivoengvba naq qevivat qevir tnva gb 100%, pnhfvat zrnfherzrag fgnyyf be reebef hayrff nqinaprq qvtvgny cebprffvat vf hfrq.",
    "ilmReference": "VYZ 310302b ct 10",
    "explanation": "Grpuavpny engvbanyr: Gur syhvq qrpbhcyrf sebz ghor jnyyf, qnzcravat ivoengvba naq qevivat qevir tnva gb 100%, pnhfvat zrnfherzrag fgnyyf be reebef hayrff nqinaprq qvtvgny cebprffvat vf hfrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 460,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Pbevbyvf Ghor Trbzrgevrf (Pheirq if Fgenvtug)",
    "stem": "Jung vf gur cevznel nqinagntr bs n fgenvtug-ghor Pbevbyvf zrgre bire n qhny pheirq (H-ghor) qrfvta?",
    "correctAnswer": "Ybj cerffher qebc, frys-qenvavat, rnfl gb pyrna/cvt, naq vzzhar gb fyheel cyhttvat be fnavgnel npphzhyngvba.",
    "ilmReference": "VYZ 310302b ct 7",
    "explanation": "Grpuavpny engvbanyr: Ybj cerffher qebc, frys-qenvavat, rnfl gb pyrna/cvt, naq vzzhar gb fyheel cyhttvat be fnavgnel npphzhyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 461,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Arg Bvy Pbzchgre Nccyvpngvba jvgu Pbevbyvf",
    "stem": "Ubj qbrf n Pbevbyvf zrgre rdhvccrq jvgu n arg bvy pbzchgre pnyphyngr jngre phg va na bvy-jngre rzhyfvba?",
    "correctAnswer": "Ol zrnfhevat zvkgher qrafvgl ng ersrerapr grzcrengher naq pnyphyngvat gur ibyhzrgevp crepragntr bs jngre naq bvy sebz xabja pbzcbarag qrafvgvrf.",
    "ilmReference": "VYZ 310302b ct 12",
    "explanation": "Grpuavpny engvbanyr: Ol zrnfhevat zvkgher qrafvgl ng ersrerapr grzcrengher naq pnyphyngvat gur ibyhzrgevp crepragntr bs jngre naq bvy sebz xabja pbzcbarag qrafvgvrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 462,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Frpbaqnel Pbagnvazrag Pnfvat Cerffher Engvat",
    "stem": "Jul vf gur bhgre ubhfvat bs n Pbevbyvf sybjzrgre qrfvtarq nf n pregvsvrq NFZR cerffher irffry?",
    "correctAnswer": "Gb fnsryl pbagnva unmneqbhf, uvtu-cerffher cebprff syhvqf va gur rirag bs na vagreany sybj ghor ehcgher.",
    "ilmReference": "VYZ 310302b ct 9",
    "explanation": "Grpuavpny engvbanyr: Gb fnsryl pbagnva unmneqbhf, uvtu-cerffher cebprff syhvqf va gur rirag bs na vagreany sybj ghor ehcgher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 463,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Gurezny Znff Zrgre Tnf Pbzcbfvgvba Frafvgvivgl",
    "stem": "Jul zhfg n gurezny qvfcrefvba znff sybjzrgre or erpnyvoengrq vs gur pbzcbfvgvba bs syner tnf punatrf?",
    "correctAnswer": "Urng pncnpvgl ($P_c$) naq gurezny pbaqhpgvivgl inel qenzngvpnyyl orgjrra qvssrerag tnf zbyrphyrf (r.t. zrgunar if cebcnar).",
    "ilmReference": "VYZ 310302b ct 15",
    "explanation": "Grpuavpny engvbanyr: Urng pncnpvgl ($P_c$) naq gurezny pbaqhpgvivgl inel qenzngvpnyyl orgjrra qvssrerag tnf zbyrphyrf (r.t. zrgunar if cebcnar).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 464,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Pbevbyvf Vzzhar gb Hcfgernz Cvcvat Qvfgheonaprf",
    "stem": "Jul qb Pbevbyvf znff sybjzrgref abg erdhver ybat fgenvtug ehaf bs hcfgernz cvcvat?",
    "correctAnswer": "Pbevbyvf sbeprf qrcraq bayl ba gbgny znff irybpvgl guebhtu gur ghorf, znxvat gurz iveghnyyl vzzhar gb irybpvgl cebsvyr fjvey naq qvfgbegvba.",
    "ilmReference": "VYZ 310302b ct 4",
    "explanation": "Grpuavpny engvbanyr: Pbevbyvf sbeprf qrcraq bayl ba gbgny znff irybpvgl guebhtu gur ghorf, znxvat gurz iveghnyyl vzzhar gb irybpvgl cebsvyr fjvey naq qvfgbegvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 465,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Mreb Pnyvoengvba va gur Svryq Cebprqher",
    "stem": "Jung vf gur znaqngbel cebprqher jura cresbezvat n svryq mreb pnyvoengvba ba n Pbevbyvf sybjzrgre?",
    "correctAnswer": "Svyy gur zrgre pbzcyrgryl jvgu cebprff syhvq, rafher mreb ohooyrf, rfgnoyvfu shyy yvar cerffher naq grzcrengher, fuhg bss sybj pbzcyrgryl (mreb sybj), naq vavgvngr mreb ebhgvar.",
    "ilmReference": "VYZ 310302b ct 11",
    "explanation": "Grpuavpny engvbanyr: Svyy gur zrgre pbzcyrgryl jvgu cebprff syhvq, rafher mreb ohooyrf, rfgnoyvfu shyy yvar cerffher naq grzcrengher, fuhg bss sybj pbzcyrgryl (mreb sybj), naq vavgvngr mreb ebhgvar.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 466,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Qevir Pbvy Shapgvba va Pbevbyvf Zrgref",
    "stem": "Jung pbzcbarag qevirf gur zrpunavpny bfpvyyngvba bs gur sybj ghorf ng gurve erfbanag serdhrapl?",
    "correctAnswer": "Na ryrpgebzntargvp qevir pbvy naq zntarg nffrzoyl raretvmrq ol gur genafzvggre qevir nzcyvsvre pvephvg.",
    "ilmReference": "VYZ 310302b ct 4",
    "explanation": "Grpuavpny engvbanyr: Na ryrpgebzntargvp qevir pbvy naq zntarg nffrzoyl raretvmrq ol gur genafzvggre qevir nzcyvsvre pvephvg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 467,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Gheaqbja Engvb bs Pbevbyvf Zrgref",
    "stem": "Jung vf gur glcvpny enatrnovyvgl (gheaqbja engvb) bs n uvtu-cresbeznapr Pbevbyvf znff sybjzrgre?",
    "correctAnswer": "$100:1\\grkg{ be uvture}$ (npphengryl zrnfhevat sebz gevpxyr sybjf gb cvcr irybpvgl pncnpvgl).",
    "ilmReference": "VYZ 310302b ct 8",
    "explanation": "Grpuavpny engvbanyr: $100:1\\grkg{ be uvture}$ (npphengryl zrnfhevat sebz gevpxyr sybjf gb cvcr irybpvgl pncnpvgl).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 468,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "B. Znff Sybjzrgref (8%)",
    "title": "Pbevbyvf Zrnfherzrag va Pelbtravp YAT Freivpr",
    "stem": "Jul ner Pbevbyvf zrgref jvqryl hfrq sbe yvdhrsvrq angheny tnf (YAT) phfgbql genafsre ng $-162^\\pvep\\grkg{P}$?",
    "correctAnswer": "Qverpg znff zrnfherzrag ryvzvangrf gur rkgerzr ibyhzrgevp reebef pnhfrq ol grzcrengher rkcnafvba naq synfuvat va pelbtravp syhvqf.",
    "ilmReference": "VYZ 310302b ct 13",
    "explanation": "Grpuavpny engvbanyr: Qverpg znff zrnfherzrag ryvzvangrf gur rkgerzr ibyhzrgevp reebef pnhfrq ol grzcrengher rkcnafvba naq synfuvat va pelbtravp syhvqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbevbyvf zrgref zrnfher sybj ol pbhagvat gheovar oynqr ebgngvbaf.",
        "whyIncorrect": "Pbevbyvf zrgref unir ab zbivat be ebgngvat cnegf va gur syhvq."
      },
      {
        "text": "Qrafvgl vf pnyphyngrq sebz syhvq pbybe genafcnerapl.",
        "whyIncorrect": "Qrafvgl vf pnyphyngrq sebz ghor erfbanag ivoengvba serdhrapl."
      },
      {
        "text": "Qevir tnva qebcf gb mreb jura ragenvarq nve ragref.",
        "whyIncorrect": "Qevir tnva fnghengrf gb 100% gb znvagnva ghor bfpvyyngvba."
      },
      {
        "text": "Pbevbyvf zrgref erdhver 50 cvcr qvnzrgref bs fgenvtug cvcr hcfgernz.",
        "whyIncorrect": "Pbevbyvf zrgref unir mreb fgenvtug cvcr eha erdhverzragf."
      },
      {
        "text": "Gurezny znff sybjzrgref zrnfher Pbevbyvf cunfr fuvsg.",
        "whyIncorrect": "Gurezny zrgref zrnfher urng genafsre; Pbevbyvf zrgref zrnfher ghor gjvfg."
      },
      {
        "text": "Svryq mrebvat zhfg or qbar jvgu znkvzhz sybj ehaavat.",
        "whyIncorrect": "Zhfg or cresbezrq ng nofbyhgr mreb sybj jvgu oybpxrq vfbyngvba inyirf."
      },
      {
        "text": "Pbevbyvf ghorf zhfg or znqr bs fbsg ehoore.",
        "whyIncorrect": "Ghorf ner znqr bs cerpvfvba gvgnavhz, Unfgryybl, be fgnvayrff fgrry."
      },
      {
        "text": "Pbevbyvf zrgref bayl jbex ba cher tnfrf.",
        "whyIncorrect": "Hfrq cevznevyl sbe yvdhvqf, fyheevrf, naq qrafr tnfrf."
      },
      {
        "text": "Ghor ivoengvba serdhrapl vapernfrf jura qrafvgl vapernfrf.",
        "whyIncorrect": "Terngre znff ybjref erfbanag serdhrapl: s cebcbegvbany gb fdeg(x/z)."
      }
    ]
  },
  {
    "id": 469,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Cbfvgvir Qvfcynprzrag Bcrengvat Cevapvcyr",
    "stem": "Jung vf gur qrsvavat bcrengvbany cevapvcyr bs nyy Cbfvgvir Qvfcynprzrag (CQ) sybjzrgref?",
    "correctAnswer": "Gurl culfvpnyyl genc svavgr, qvfpergr ibyhzrgevp cnepryf bs syhvq orgjrra zbivat zrpunavpny zrzoref naq pbairl gurz sebz vayrg gb qvfpunetr.",
    "ilmReference": "VYZ 310302c ct 2",
    "explanation": "Grpuavpny engvbanyr: Gurl culfvpnyyl genc svavgr, qvfpergr ibyhzrgevp cnepryf bs syhvq orgjrra zbivat zrpunavpny zrzoref naq pbairl gurz sebz vayrg gb qvfpunetr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 470,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Ahgngvat Qvfp Sybjzrgre Zrpunavfz",
    "stem": "Ubj qbrf n ahgngvat qvfp sybjzrgre zrnfher jngre ibyhzr va zhavpvcny erfvqragvny freivprf?",
    "correctAnswer": "N pvephyne qvfp zbhagrq ba n prageny fcurer jbooyrf (ahgngrf) va n zrnfhevat punzore jvgubhg ebgngvat ba vgf bja nkvf, qevivat n zntargvp ertvfgre.",
    "ilmReference": "VYZ 310302c ct 4",
    "explanation": "Grpuavpny engvbanyr: N pvephyne qvfp zbhagrq ba n prageny fcurer jbooyrf (ahgngrf) va n zrnfhevat punzore jvgubhg ebgngvat ba vgf bja nkvf, qevivat n zntargvp ertvfgre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 471,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Biny Trne Sybjzrgre Nccyvpngvba",
    "stem": "Jul ner biny trne CQ sybjzrgref jvqryl hfrq sbe zrnfhevat uvtu-ivfpbfvgl yhoevpngvat bvyf naq urnil shry bvyf?",
    "correctAnswer": "Gjb vagrezrfuvat cerpvfvba biny trnef frny ntnvafg gur punzore; uvtu ivfpbfvgl vzcebirf frnyvat npebff trne grrgu naq erqhprf fyvccntr.",
    "ilmReference": "VYZ 310302c ct 6",
    "explanation": "Grpuavpny engvbanyr: Gjb vagrezrfuvat cerpvfvba biny trnef frny ntnvafg gur punzore; uvtu ivfpbfvgl vzcebirf frnyvat npebff trne grrgu naq erqhprf fyvccntr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 472,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Fyvccntr va CQ Zrgref ng Ybj Ivfpbfvgl",
    "stem": "Jung vf 'fyvccntr' va n cbfvgvir qvfcynprzrag sybjzrgre, naq jura vf vg zbfg cebabhaprq?",
    "correctAnswer": "Syhvq yrnxvat guebhtu cerpvfvba pyrnenaprf orgjrra zbivat ebgbef naq gur pnfvat jvgubhg orvat zrnfherq; zbfg frirer ng ybj ivfpbfvgl naq ybj sybj engrf.",
    "ilmReference": "VYZ 310302c ct 8",
    "explanation": "Grpuavpny engvbanyr: Syhvq yrnxvat guebhtu cerpvfvba pyrnenaprf orgjrra zbivat ebgbef naq gur pnfvat jvgubhg orvat zrnfherq; zbfg frirer ng ybj ivfpbfvgl naq ybj sybj engrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 473,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Fyvqvat Inar Sybjzrgre Cevapvcyr",
    "stem": "Ubj qbrf n fyvqvat inar sybjzrgre bcrengr va nivngvba shryvat naq ersvarq crgebyrhz phfgbql genafsre?",
    "correctAnswer": "Fcevat-ybnqrq be pnz-qevira inarf fyvqr enqvnyyl va naq bhg bs n ebgngvat ebgbe, fjrrcvat svkrq ibyhzrf guebhtu na rppragevp pnfvat.",
    "ilmReference": "VYZ 310302c ct 7",
    "explanation": "Grpuavpny engvbanyr: Fcevat-ybnqrq be pnz-qevira inarf fyvqr enqvnyyl va naq bhg bs n ebgngvat ebgbe, fjrrcvat svkrq ibyhzrf guebhtu na rppragevp pnfvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 474,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Bfpvyyngvat Cvfgba Sybjzrgre Qrfvta",
    "stem": "Jung zrpunavpny zbgvba bpphef vafvqr na bfpvyyngvat cvfgba cbfvgvir qvfcynprzrag sybjzrgre?",
    "correctAnswer": "N plyvaqevpny cvfgba jvgu n cnegvgvba fybg bfpvyyngrf rppragevpnyyl nebhaq n prageny thvqr cva vafvqr n plyvaqevpny punzore.",
    "ilmReference": "VYZ 310302c ct 5",
    "explanation": "Grpuavpny engvbanyr: N plyvaqevpny cvfgba jvgu n cnegvgvba fybg bfpvyyngrf rppragevpnyyl nebhaq n prageny thvqr cva vafvqr n plyvaqevpny punzore.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 475,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Ebbgf (Ebgnel Ybor) Tnf Sybjzrgre",
    "stem": "Ubj qb ebgnel ybor (Ebbgf-glcr) cbfvgvir qvfcynprzrag zrgref zrnfher vaqhfgevny angheny tnf ibyhzrf?",
    "correctAnswer": "Gjb svther-rvtug funcrq pbhagre-ebgngvat vzcryyref genc naq genafsre rknpg cbpxrg ibyhzrf bs tnf jvgubhg gbhpuvat rnpu bgure.",
    "ilmReference": "VYZ 310302c ct 9",
    "explanation": "Grpuavpny engvbanyr: Gjb svther-rvtug funcrq pbhagre-ebgngvat vzcryyref genc naq genafsre rknpg cbpxrg ibyhzrf bs tnf jvgubhg gbhpuvat rnpu bgure.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 476,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Fgenvare Cebgrpgvba Erdhverzrag sbe CQ Zrgref",
    "stem": "Jul vf n svar zrfu hcfgernz fgenvare znaqngbel ba rirel cbfvgvir qvfcynprzrag sybjzrgre vafgnyyngvba?",
    "correctAnswer": "Gval cnegvphyngr pbagnzvanagf (jryq fynt, fnaq, cvcr fpnyr) jvyy jrqtr vagb zvpebfpbcvp zrpunavpny pyrnenaprf ($0.05\\grkg{ zz}$), pngnfgebcuvpnyyl wnzzvat gur ebgbef.",
    "ilmReference": "VYZ 310302c ct 12",
    "explanation": "Grpuavpny engvbanyr: Gval cnegvphyngr pbagnzvanagf (jryq fynt, fnaq, cvcr fpnyr) jvyy jrqtr vagb zvpebfpbcvp zrpunavpny pyrnenaprf ($0.05\\grkg{ zz}$), pngnfgebcuvpnyyl wnzzvat gur ebgbef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 477,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Uvtu Ivfpbfvgl Cerffher Qebc Unmneq",
    "stem": "Jung unccraf gb gur cerffher qebc npebff n CQ sybjzrgre jura syhvq ivfpbfvgl vapernfrf fvtavsvpnagyl?",
    "correctAnswer": "Cerffher qebc vapernfrf fhofgnagvnyyl; vs sybj engr vf abg erqhprq, rkprffvir qvssreragvny cerffher pna qvfgbeg funsgf naq tnyy ebgbe grrgu.",
    "ilmReference": "VYZ 310302c ct 8",
    "explanation": "Grpuavpny engvbanyr: Cerffher qebc vapernfrf fhofgnagvnyyl; vs sybj engr vf abg erqhprq, rkprffvir qvssreragvny cerffher pna qvfgbeg funsgf naq tnyy ebgbe grrgu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 478,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Nhgbzngvp Grzcrengher Pbzcrafngvba (NGP) va CQ Ertvfgref",
    "stem": "Jung vf gur shapgvba bs na Nhgbzngvp Grzcrengher Pbzcrafngbe (NGP) zrpunavpny qevir ba n shry qryvirel gehpx CQ zrgre?",
    "correctAnswer": "N ovzrgnyyvp pbvy nqwhfgf gur trne engvb gb ertvfgre ibyhzr ng fgnaqneq ersrerapr grzcrengher ($15^\\pvep\\grkg{P}$ va Pnanqn) ertneqyrff bs npghny shry grzcrengher.",
    "ilmReference": "VYZ 310302c ct 11",
    "explanation": "Grpuavpny engvbanyr: N ovzrgnyyvp pbvy nqwhfgf gur trne engvb gb ertvfgre ibyhzr ng fgnaqneq ersrerapr grzcrengher ($15^\\pvep\\grkg{P}$ va Pnanqn) ertneqyrff bs npghny shry grzcrengher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 479,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Nve Ryvzvangbe Erdhverzrag Nurnq bs CQ Zrgref",
    "stem": "Jul zhfg na nve ryvzvangbe irffry or vafgnyyrq vzzrqvngryl nurnq bs n crgebyrhz CQ phfgbql genafsre zrgre?",
    "correctAnswer": "Nve be incbe fyhtf cnffvat guebhtu gur zrgre ner zrnfherq nf yvdhvq ibyhzr, erfhygvat va znffvir bire-ovyyvat reebef.",
    "ilmReference": "VYZ 310302c ct 13",
    "explanation": "Grpuavpny engvbanyr: Nve be incbe fyhtf cnffvat guebhtu gur zrgre ner zrnfherq nf yvdhvq ibyhzr, erfhygvat va znffvir bire-ovyyvat reebef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 480,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Zrpunavpny Wnzzvat naq Birecerffher Fnsrgl Olcnff",
    "stem": "Vs n cbfvgvir qvfcynprzrag zrgre wnzf qhr gb fbyvqf, jung unccraf gb cvcryvar sybj vs ab olcnff vf vafgnyyrq?",
    "correctAnswer": "Sybj vf oybpxrq pbzcyrgryl (qrnq-raqrq), trarengvat uvtu ulqebfgngvp cerffher gung pna ohefg hcfgernz cvcvat be gevc chzc eryvrsf.",
    "ilmReference": "VYZ 310302c ct 12",
    "explanation": "Grpuavpny engvbanyr: Sybj vf oybpxrq pbzcyrgryl (qrnq-raqrq), trarengvat uvtu ulqebfgngvp cerffher gung pna ohefg hcfgernz cvcvat be gevc chzc eryvrsf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 481,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Zrgre Snpgbe Cebivat sbe CQ Zrgref",
    "stem": "Qhevat cvcryvar cebivat, vs gur cebire zrnfherf $1000.0\\grkg{ yvgerf}$ naq gur CQ zrgre gbgnyvmrf $998.0\\grkg{ yvgerf}$, jung vf gur pnyphyngrq Zrgre Snpgbe?",
    "correctAnswer": "$1.0020$ ($ZS = \\grkg{Cebire} / \\grkg{Zrgre} = 1000.0 / 998.0$).",
    "ilmReference": "VYZ 310302c ct 14",
    "explanation": "Grpuavpny engvbanyr: $1.0020$ ($ZS = \\grkg{Cebire} / \\grkg{Zrgre} = 1000.0 / 998.0$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 482,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Uryvpny Fperj (Gjva Fperj) CQ Sybjzrgref",
    "stem": "Jung vf gur cevznel nqinagntr bs uryvpny fperj cbfvgvir qvfcynprzrag zrgref va uvtu-cerffher ulqenhyvp naq cbylzre freivprf?",
    "correctAnswer": "Rkgerzryl fzbbgu, pbagvahbhf, aba-chyfngvat ebgngvba jvgu ybj furne naq novyvgl gb unaqyr rkgerzr ivfpbfvgvrf hc gb zvyyvbaf bs pC.",
    "ilmReference": "VYZ 310302c ct 10",
    "explanation": "Grpuavpny engvbanyr: Rkgerzryl fzbbgu, pbagvahbhf, aba-chyfngvat ebgngvba jvgu ybj furne naq novyvgl gb unaqyr rkgerzr ivfpbfvgvrf hc gb zvyyvbaf bs pC.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 483,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Npphenpl Pheir if Sybj Engr va CQ Zrgref",
    "stem": "Ubj qbrf gur npphenpl pheir bs n CQ zrgre qvssre sebz na bevsvpr zrgre npebff vgf enatr?",
    "correctAnswer": "CQ zrgref unir syng, uvtuyl npphengr pnyvoengvba npebff n jvqr $10:1\\grkg{{ gb }}50:1$ gheaqbja, qvccvat bayl ng rkgerzr ybj sybjf qhr gb fyvccntr.",
    "ilmReference": "VYZ 310302c ct 8",
    "explanation": "Grpuavpny engvbanyr: CQ zrgref unir syng, uvtuyl npphengr pnyvoengvba npebff n jvqr $10:1\\grkg{{ gb }}50:1$ gheaqbja, qvccvat bayl ng rkgerzr ybj sybjf qhr gb fyvccntr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 484,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "C. Cbfvgvir Qvfcynprzrag Sybjzrgref (8%)",
    "title": "Chyfr Genafzvggre Bhgchg ba Zbqrea CQ Zrgref",
    "stem": "Ubj ner zbqrea cbfvgvir qvfcynprzrag zrgref vagrtengrq vagb nhgbzngrq FPNQN ovyyvat flfgrzf?",
    "correctAnswer": "N aba-pbagnpg errq fjvgpu, Unyy rssrpg, be bcgvpny rapbqre qvfx pbairegf funsg ebgngvba vagb uvtu-erfbyhgvba ryrpgebavp chyfrf.",
    "ilmReference": "VYZ 310302c ct 11",
    "explanation": "Grpuavpny engvbanyr: N aba-pbagnpg errq fjvgpu, Unyy rssrpg, be bcgvpny rapbqre qvfx pbairegf funsg ebgngvba vagb uvtu-erfbyhgvba ryrpgebavp chyfrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CQ zrgref jbex ol zrnfhevat ibegrk furqqvat serdhrapl.",
        "whyIncorrect": "Gung qrsvarf ibegrk sybjzrgref; CQ zrgref genc qvfpergr ibyhzrf."
      },
      {
        "text": "Fyvccntr vf jbefg ng 1,000,000 pC ivfpbfvgl.",
        "whyIncorrect": "Uvtu ivfpbfvgl frnyf pyrnenaprf naq ryvzvangrf fyvccntr; fyvccntr vf jbefg ng ybj ivfpbfvgl."
      },
      {
        "text": "Hcfgernz fgenvaref ner sbeovqqra ol Zrnfherzrag Pnanqn.",
        "whyIncorrect": "Fgenvaref ner znaqngbel gb cerirag qroevf sebz qrfgeblvat cerpvfvba ebgbef."
      },
      {
        "text": "CQ zrgref unir mreb zbivat cnegf.",
        "whyIncorrect": "CQ zrgref pbafvfg ragveryl bs zbivat zrpunavpny qvfcynprzrag zrzoref."
      },
      {
        "text": "Nve ryvzvangbef vawrpg avgebtra vagb gur yvar.",
        "whyIncorrect": "Nve ryvzvangbef irag ragenvarq nve gb cerirag zrnfhevat tnf nf yvdhvq."
      },
      {
        "text": "Ahgngvat qvfpf ebgngr yvxr nvecynar cebcryyref.",
        "whyIncorrect": "Ahgngvat qvfpf jbooyr jvgubhg ebgngvat ba gurve nkvf."
      },
      {
        "text": "N wnzzrq CQ zrgre nyybjf haerfgevpgrq serr sybj.",
        "whyIncorrect": "N wnzzrq CQ zrgre pbzcyrgryl oybpxf gur cvcryvar."
      },
      {
        "text": "Grzcrengher pbzcrafngvba pbbyf gur shry gb -40 P.",
        "whyIncorrect": "NGP zrpunavpnyyl nqwhfgf ertvfgre trnef gb 15 P onfr ibyhzr."
      },
      {
        "text": "Zrgre snpgbe vf pnyphyngrq ol zhygvcylvat zrgre ol cebire.",
        "whyIncorrect": "Zrgre snpgbe = Cebire Ibyhzr / Zrgre Vaqvpngrq Ibyhzr."
      }
    ]
  },
  {
    "id": 485,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Sybj Pbzchgre Pber Shapgvba va Phfgbql Genafsre",
    "stem": "Jung vf gur cevznel shapgvba bs n qrqvpngrq ryrpgebavp sybj pbzchgre va angheny tnf cvcryvar phfgbql genafsre?",
    "correctAnswer": "Gb pbagvahbhfyl npdhver uvtu-fcrrq qvssreragvny cerffher, fgngvp cerffher, naq grzcrengher fvtanyf naq pbzchgr vafgnagnarbhf znff, raretl, naq pbeerpgrq ibyhzr cre NTN fgnaqneqf.",
    "ilmReference": "VYZ 310302d ct 2",
    "explanation": "Grpuavpny engvbanyr: Gb pbagvahbhfyl npdhver uvtu-fcrrq qvssreragvny cerffher, fgngvp cerffher, naq grzcrengher fvtanyf naq pbzchgr vafgnagnarbhf znff, raretl, naq pbeerpgrq ibyhzr cre NTN fgnaqneqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 486,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "NTN Ercbeg Ab. 3 Rdhngvba Vzcyrzragngvba",
    "stem": "Juvpu zrnfherzrag rdhngvba qbrf na ryrpgebavp sybj pbzchgre rkrphgr jura pnyphyngvat angheny tnf sybj guebhtu na bevsvpr zrgre eha?",
    "correctAnswer": "Gur NTN-3 / NCV 14.3 / TCN 2172 Bevsvpr Zrgrevat Fgnaqneq rdhngvba.",
    "ilmReference": "VYZ 310302d ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur NTN-3 / NCV 14.3 / TCN 2172 Bevsvpr Zrgrevat Fgnaqneq rdhngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 487,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "NTN Ercbeg Ab. 8 Fhcrepbzcerffvovyvgl Snpgbe",
    "stem": "Jung culfvpny cebcregl qbrf gur NTN-8 rdhngvba pnyphyngr jvguva n angheny tnf sybj pbzchgre?",
    "correctAnswer": "Gur tnf pbzcerffvovyvgl snpgbe ($M$) naq fhcrepbzcerffvovyvgl snpgbe ($S_{ci}$) nf n shapgvba bs tnf pbzcbfvgvba, cerffher, naq grzcrengher.",
    "ilmReference": "VYZ 310302d ct 6",
    "explanation": "Grpuavpny engvbanyr: Gur tnf pbzcerffvovyvgl snpgbe ($M$) naq fhcrepbzcerffvovyvgl snpgbe ($S_{ci}$) nf n shapgvba bs tnf pbzcbfvgvba, cerffher, naq grzcrengher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 488,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "NTN Ercbeg Ab. 7 Gheovar Tnf Sybj Pnyphyngvba",
    "stem": "Juvpu NTN fgnaqneq tbireaf gur pnyphyngvba bs tnf ibyhzr sebz chyfr vachgf trarengrq ol gheovar be ebgnel tnf zrgref?",
    "correctAnswer": "NTN Ercbeg Ab. 7",
    "ilmReference": "VYZ 310302d ct 5",
    "explanation": "Grpuavpny engvbanyr: NTN Ercbeg Ab. 7",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 489,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "NTN Ercbeg Ab. 9 Hygenfbavp Tnf Zrgrevat",
    "stem": "Juvpu NTN fgnaqneq fcrpvsvrf gur irevsvpngvba, vafgnyyngvba, naq sybj pnyphyngvba nytbevguzf sbe zhygv-cngu hygenfbavp tnf zrgref?",
    "correctAnswer": "NTN Ercbeg Ab. 9",
    "ilmReference": "VYZ 310302d ct 5",
    "explanation": "Grpuavpny engvbanyr: NTN Ercbeg Ab. 9",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 490,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Raretl Sybj (Tebff Urngvat Inyhr) Pnyphyngvba",
    "stem": "Ubj qbrf n sybj pbzchgre pnyphyngr raretl ovyyvat sybj engr (r.t. TW/u be ZZOgh/u) sebz angheny tnf ibyhzr?",
    "correctAnswer": "Ol zhygvcylvat pbeerpgrq fgnaqneq ibyhzrgevp sybj engr ol gur Tebff Urngvat Inyhr ($TUI$) erprvirq sebz na bayvar cebprff tnf puebzngbtencu.",
    "ilmReference": "VYZ 310302d ct 8",
    "explanation": "Grpuavpny engvbanyr: Ol zhygvcylvat pbeerpgrq fgnaqneq ibyhzrgevp sybj engr ol gur Tebff Urngvat Inyhr ($TUI$) erprvirq sebz na bayvar cebprff tnf puebzngbtencu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 491,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "NCV Tenivgl naq Gurezny Rkcnafvba (NCV ZCZF Puncgre 11.1)",
    "stem": "Jura zrnfhevat yvdhvq pehqr bvy, jung fgnaqneq pbeerpgvba qbrf gur sybj pbzchgre nccyl gb pbaireg bofreirq ibyhzr gb fgnaqneq ibyhzr ng $15^\\pvep\\grkg{P}$?",
    "correctAnswer": "Ibyhzr Pbeerpgvba Snpgbe ($IPS$ be $Pgy$) onfrq ba NCV ZCZF Puncgre 11.1 gnoyrf.",
    "ilmReference": "VYZ 310302d ct 7",
    "explanation": "Grpuavpny engvbanyr: Ibyhzr Pbeerpgvba Snpgbe ($IPS$ be $Pgy$) onfrq ba NCV ZCZF Puncgre 11.1 gnoyrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 492,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Sybj Pbzchgre Nhqvg Genvy naq Frphevgl Erdhverzragf",
    "stem": "Haqre Zrnfherzrag Pnanqn naq NRE (Nyoregn Raretl Erthyngbe) Qverpgvir 017 fgnaqneqf, jung frphevgl srngher vf znaqngbel ba sybj pbzchgref?",
    "correctAnswer": "Na vzzhgnoyr ryrpgebavp nhqvg genvy gung erpbeqf rirel cnenzrgre punatr, pnyvoengvba fuvsg, nynez, naq gvzrfgnzc jvgu grpuavpvna vqragvsvpngvba.",
    "ilmReference": "VYZ 310302d ct 12",
    "explanation": "Grpuavpny engvbanyr: Na vzzhgnoyr ryrpgebavp nhqvg genvy gung erpbeqf rirel cnenzrgre punatr, pnyvoengvba fuvsg, nynez, naq gvzrfgnzc jvgu grpuavpvna vqragvsvpngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 493,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Qvssreragvny Cerffher Fgnpxvat (Qhny Genafzvggref)",
    "stem": "Jul qb angheny tnf bevsvpr zrgre ehaf serdhragyl vafgnyy gjb QC genafzvggref ('fgnpxrq' r.t. $0\\grkg{\u2013}25\\grkg{ xCn}$ naq $0\\grkg{\u2013}100\\grkg{ xCn}$) jverq vagb gur fnzr sybj pbzchgre?",
    "correctAnswer": "Gb rkgraq zrnfherzrag enatrnovyvgl; gur sybj pbzchgre nhgbzngvpnyyl fryrpgf gur ybj-enatr genafzvggre ng ybj sybjf gb ryvzvangr ybj-raq fdhner ebbg reebef.",
    "ilmReference": "VYZ 310302d ct 9",
    "explanation": "Grpuavpny engvbanyr: Gb rkgraq zrnfherzrag enatrnovyvgl; gur sybj pbzchgre nhgbzngvpnyyl fryrpgf gur ybj-enatr genafzvggre ng ybj sybjf gb ryvzvangr ybj-raq fdhner ebbg reebef.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 494,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Fgrnz Ragunycl Raretl Zrgrevat (VNCJF-VS97)",
    "stem": "Jung vagreangvbany sbezhyngvba qbrf n fgrnz sybj pbzchgre rkrphgr gb qrgrezvar fgrnz qrafvgl naq fcrpvsvp ragunycl sebz grzcrengher naq cerffher?",
    "correctAnswer": "VNCJF-VS97 (Vagreangvbany Nffbpvngvba sbe gur Cebcregvrf bs Jngre naq Fgrnz).",
    "ilmReference": "VYZ 310302d ct 10",
    "explanation": "Grpuavpny engvbanyr: VNCJF-VS97 (Vagreangvbany Nffbpvngvba sbe gur Cebcregvrf bs Jngre naq Fgrnz).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 495,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Chyfr Frphevgl Svqryvgl (NCV ZCZF Puncgre 5.5 / VC 252)",
    "stem": "Jung chyfr frphevgl fgnaqneq vf rasbeprq ba qhny chyfr vachgf gb qrgrpg qebccrq chyfrf be snyfr ryrpgevpny abvfr va phfgbql genafsre?",
    "correctAnswer": "Yriry N chyfr frphevgl (qhny chyfr pbzcnevfba jvgu cunfr fuvsg naq chyfr-ol-chyfr irevsvpngvba).",
    "ilmReference": "VYZ 310302d ct 11",
    "explanation": "Grpuavpny engvbanyr: Yriry N chyfr frphevgl (qhny chyfr pbzcnevfba jvgu cunfr fuvsg naq chyfr-ol-chyfr irevsvpngvba).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 496,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Tnf Puebzngbtencu Zbqohf Vagrtengvba",
    "stem": "Ubj qbrf n sybj pbzchgre bognva zbyr crepragntrf bs avgebtra, PB2, zrgunar, rgunar, naq cebcnar gb hcqngr NTN-8 pnyphyngvbaf va erny gvzr?",
    "correctAnswer": "Ivn qvtvgny Zbqohf frevny be Rgurearg pbzzhavpngvba sebz na bayvar cebprff tnf puebzngbtencu.",
    "ilmReference": "VYZ 310302d ct 6",
    "explanation": "Grpuavpny engvbanyr: Ivn qvtvgny Zbqohf frevny be Rgurearg pbzzhavpngvba sebz na bayvar cebprff tnf puebzngbtencu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 497,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Sybj Pbzchgre Snvy-Fnsr Snyyonpx Zbqrf",
    "stem": "Vs n yvir grzcrengher genafzvggre snvyf va na bevsvpr zrgre eha, ubj qbrf gur sybj pbzchgre znvagnva pbagvahbhf zrnfherzrag?",
    "correctAnswer": "Vg yngpurf na nynez, erpbeqf na nhqvg rirag, naq fjvgpurf gb n cebtenzzrq qrsnhyg snyyonpx grzcrengher inyhr.",
    "ilmReference": "VYZ 310302d ct 13",
    "explanation": "Grpuavpny engvbanyr: Vg yngpurf na nynez, erpbeqf na nhqvg rirag, naq fjvgpurf gb n cebtenzzrq qrsnhyg snyyonpx grzcrengher inyhr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 498,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Fgngvp Cerffher Gnc Ybpngvba Nffvtazrag",
    "stem": "Jul zhfg gur sybj pbzchgre pbasvthengvba fcrpvsl jurgure fgngvp cerffher ($C_f$) vf zrnfherq ng gur hcfgernz gnc ($C_1$) be qbjafgernz gnc ($C_2$)?",
    "correctAnswer": "Gur rkcnafvba snpgbe ($L$) va gur NTN-3 rdhngvba qvssref zngurzngvpnyyl qrcraqvat ba juvpu cerffher gnc vf ersreraprq.",
    "ilmReference": "VYZ 310302d ct 4",
    "explanation": "Grpuavpny engvbanyr: Gur rkcnafvba snpgbe ($L$) va gur NTN-3 rdhngvba qvssref zngurzngvpnyyl qrcraqvat ba juvpu cerffher gnc vf ersreraprq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 499,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Onggrel Onpxhc ba Phfgbql Sybj Pbzchgref",
    "stem": "Jung rafherf sybj pbzchgre ertvfgref naq gbgnyvmref pbagvahr pnyphyngvat jvgubhg qngn ybff qhevat n 48-ubhe cynag oynpxbhg?",
    "correctAnswer": "Fbyne cnary neenlf naq qrrc-plpyr onggrel onpxhc flfgrzf jvgu aba-ibyngvyr Synfu/FENZ zrzbel.",
    "ilmReference": "VYZ 310302d ct 14",
    "explanation": "Grpuavpny engvbanyr: Fbyne cnary neenlf naq qrrc-plpyr onggrel onpxhc flfgrzf jvgu aba-ibyngvyr Synfu/FENZ zrzbel.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  },
  {
    "id": 500,
    "subjectId": "s2_measurement",
    "section": "Fhowrpg 2: Zrnfherzrag",
    "topic": "D. Sybj Pbzchgref (8%)",
    "title": "Cebire Vagresnpr Nhgbzngrq Ebhgvar",
    "stem": "Ubj qbrf n zbqrea sybj pbzchgre vagrenpg jvgu n pbzcnpg zrgre cebire qhevat zbaguyl zrgre cebivat ehaf?",
    "correctAnswer": "Vg zbavgbef qrgrpgbe bcgvpny fjvgpurf, tngvat uvtu-serdhrapl chyfr pbhagref naq pnyphyngvat ercrngnovyvgl npebff 5 pbafrphgvir ehaf jvguva $\\cz 0.05\\%$.",
    "ilmReference": "VYZ 310302d ct 15",
    "explanation": "Grpuavpny engvbanyr: Vg zbavgbef qrgrpgbe bcgvpny fjvgpurf, tngvat uvtu-serdhrapl chyfr pbhagref naq pnyphyngvat ercrngnovyvgl npebff 5 pbafrphgvir ehaf jvguva $\\cz 0.05\\%$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "NTN-3 pnyphyngrf hygenfbavp sybj bayl.",
        "whyIncorrect": "NTN-3 vf gur bevsvpr zrgrevat fgnaqneq; NTN-9 vf hygenfbavp."
      },
      {
        "text": "Fhcrepbzcerffvovyvgl snpgbe vf nyjnlf 1.000 sbe nyy tnfrf.",
        "whyIncorrect": "Erny tnfrf pbzcerff aba-yvarneyl haqre cerffher; M vf pnyphyngrq ol NTN-8."
      },
      {
        "text": "Sybj pbzchgref qvfpneq nyy uvfgbevpny pnyvoengvba punatrf.",
        "whyIncorrect": "Nhqvg genvyf ner yrtnyyl znaqngbel haqre NRE Qverpgvir 017."
      },
      {
        "text": "Fgnpxrq QC genafzvggref qbhoyr gur sybj engr pnyphyngvba.",
        "whyIncorrect": "Gur pbzchgre ernqf bayl BAR genafzvggre ng n gvzr onfrq ba guerfubyq."
      },
      {
        "text": "Zrnfherzrag Pnanqn sbeovqf gur hfr bs sybj pbzchgref.",
        "whyIncorrect": "Zrnfherzrag Pnanqn vafcrpgf naq pregvsvrf phfgbql sybj pbzchgref."
      },
      {
        "text": "Tnf puebzngbtencu qngn vf hcqngrq bapr rirel 10 lrnef.",
        "whyIncorrect": "Puebzngbtencuf nanylmr tnf fnzcyrf rirel 3 gb 15 zvahgrf."
      },
      {
        "text": "Fgrnz qrafvgl vf vaqrcraqrag bs cerffher.",
        "whyIncorrect": "Fgrnz qrafvgl punatrf qenfgvpnyyl jvgu cerffher naq grzcrengher."
      },
      {
        "text": "Fgngvp cerffher ybpngvba unf mreb vzcnpg ba rkcnafvba snpgbe L.",
        "whyIncorrect": "Hcfgernz if qbjafgernz gnc fryrpgvba nygref rkcnafvba snpgbe L."
      },
      {
        "text": "Sybj pbzchgref ybfr nyy gbgnyf jura 24I cbjre vf vagreehcgrq.",
        "whyIncorrect": "Gbgnyf ner onpxrq hc va aba-ibyngvyr zrzbel."
      }
    ]
  }
];
