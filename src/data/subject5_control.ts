import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (200 questions, 9 calibrated distractors per question, LaTeX math)
export const subject5Questions: QuestionRecord[] = [
  {
    "id": 901,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Srrqonpx Pbageby Ybbc Shapgvbany Oybpxf",
    "stem": "Ersre gb gur vyyhfgengrq Irffry 200 pbageby C&VQ. Jung pbageby fgengrtl vf vzcyrzragrq ol cerffher pbagebyyre CVP 200 naq sybj pbagebyyre SVP 201?",
    "correctAnswer": "CVP 200 znavchyngrf vasybj ol guebggyvat Chzc 200 gb znvagnva irffry cerffher, juvyr SVP 201 vaqrcraqragyl znavchyngrf bhgsybj pbageby inyir SI 201 onfrq ba sybj zrnfherzrag SG 201.",
    "ilmReference": "VYZ 310305nN ct 4",
    "explanation": "Nppbeqvat gb gur C&VQ, cerffher genafzvggre CVG 200 (0 gb 500 xCnt) srrqf CVP 200 juvpu znavchyngrf gur inevnoyr qvfcynprzrag vasybj Chzc-200. Ba gur irffry qvfpunetr, sybj genafzvggre SG 201 srrqf SVP 201 juvpu cbfvgvbaf pbageby inyir SI 201 (0 gb 200 fz\u00b3/zva) gb pbageby rssyhrag sybj.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p4_img1.png",
    "imageCaption": "Irffry 200 Cerffher & Sybj Pbageby C&VQ (Chzc 200, CVG/CVP 200, SG/SVP 201, SI 201)",
    "distractors": [
      {
        "text": "Pnfpnqr pbageby jurer CVP 200 frgf gur erzbgr frgcbvag bs SVP 201.",
        "whyIncorrect": "Gurer vf ab pnfpnqr frgcbvag fvtany pbaarpgvba fubja orgjrra CVP 200 naq SVP 201."
      },
      {
        "text": "Engvb pbageby jurer Chzc 200 bhgchg vf zhygvcyvrq ol n engvb gb cbfvgvba SI 201.",
        "whyIncorrect": "Arvgure pbagebyyre npgf nf n engvb fgngvba; obgu unir vaqrcraqrag cebprff inevnoyrf."
      },
      {
        "text": "Fcyvg-enatr pbageby jurer CVP 200 cnegvgvbaf vgf bhgchg orgjrra Chzc 200 naq SI 201.",
        "whyIncorrect": "CVP 200 pbaarpgf rkpyhfviryl gb Chzc 200; SI 201 vf qevira ol SVP 201."
      },
      {
        "text": "Bireevqr pbageby jurer n ybj fvtany fryrpgbe fryrpgf orgjrra cerffher naq sybj.",
        "whyIncorrect": "Ab fvtany fryrpg oybpxf (YF be UF) ner cerfrag va gur ybbc."
      },
      {
        "text": "Srrqsbejneq pbageby jurer SG 201 nqwhfgf Chzc 200 qverpgyl orsber cerffher punatrf.",
        "whyIncorrect": "SG 201 pbaarpgf bayl gb srrqonpx pbagebyyre SVP 201."
      },
      {
        "text": "Ongpu frdhrapvat pbageby bcrengrq ol na nhgbzngrq CYP fgngr znpuvar.",
        "whyIncorrect": "Gur ybbcf ner pbagvahbhf erthyngbel srrqonpx ybbcf ba n cerffhevmrq fhetr irffry."
      },
      {
        "text": "Nagv-fhetr pbageby jvgu uvtu-fcrrq erplpyr inyirf nebhaq Chzc 200.",
        "whyIncorrect": "Ab zvavzhz sybj olcnff be nagv-fhetr erplpyr yvar vf qrcvpgrq."
      },
      {
        "text": "Qhny-shry pebff-yvzvgvat nve-shry engvb pbzohfgvba pbageby.",
        "whyIncorrect": "Guvf vf n yvdhvq fhetr irffry, abg na vaqhfgevny sverq urngre."
      },
      {
        "text": "Qrnq-gvzr pbzcrafngvba hgvyvmvat n Fzvgu Cerqvpgbe zbqry bs Irffry 200.",
        "whyIncorrect": "Fgnaqneq srrqonpx pbagebyyref CVP 200 naq SVP 201 ner fubja."
      }
    ]
  },
  {
    "id": 902,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebprff Tnva Pnyphyngvba sebz Fgrc Erfcbafr",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 2-N). Va znahny zbqr, na bcrengbe fgrcf gur pbagebyyre bhgchg (PB) sebz 65\\% gb 80\\% ng g = 0.65\\grkg{ zva}. Gur cebprff inevnoyr (CI) evfrf sebz 45\\% naq fgnovyvmrf ng 60\\%. Pnyphyngr gur fgrnql-fgngr cebprff tnva X_c.",
    "correctAnswer": "$X_c = +1.00$ (pnyphyngrq nf $\\Qrygn CI / \\Qrygn PB = (60\\% - 45\\%) / (80\\% - 65\\%) = 15\\% / 15\\%$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 8",
    "explanation": "Gur fgrnql-fgngr cebprff tnva $X_c$ sbe n frys-erthyngvat cebprff vf: $$X_c = \\senp{\\Qrygn CI}{\\Qrygn PB} = \\senp{60\\% - 45\\%}{80\\% - 65\\%} = \\senp{15\\%}{15\\%} = +1.00$$. Orpnhfr CI vapernfrf jura PB vapernfrf, gur cebprff tnva vf cbfvgvir.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $X_c = \\senp{\\Qrygn \\grkg{CI}}{\\Qrygn \\grkg{PB}}$",
      "Pnyphyngr ratvarrevat punatrf: $\\Qrygn \\grkg{PB} = 50\\% - 40\\% = 10\\%$, $\\Qrygn \\grkg{CI} = 145 - 120 = 25^\\pvep\\grkg{P}$",
      "Abeznyvmr $\\Qrygn \\grkg{CI}$ npebff $200^\\pvep\\grkg{P}$ fcna: $\\Qrygn \\grkg{CI}_{\\%} = \\senp{25}{200} \\gvzrf 100\\% = 12.5\\%$",
      "Pnyphyngr abeznyvmrq cebprff tnva: $X_c = \\senp{12.5\\%}{10\\%} = 1.25$ (qvzrafvbayrff)"
    ],
    "image": "./assets/curriculum/s5_quiz1_p2_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 2-N: Bcra-Ybbc Fgrc Grfg (PB: 65% gb 80%, CI: 45% gb 60%)",
    "distractors": [
      {
        "text": "$X_c = +0.75$; qvivqrq 45% ol 60%.",
        "whyIncorrect": "Tnva vf gur engvb bs punatrf (\u0394CI/\u0394PB), abg nofbyhgr onfryvar inyhrf."
      },
      {
        "text": "$X_c = +1.33$; vairegrq gur tnva sbezhyn nf \u0394PB / \u0394CI.",
        "whyIncorrect": "Vairegrq gur sbezhyn; cebprff tnva vf punatr va bhgchg bire punatr va vachg (\u0394CI/\u0394PB)."
      },
      {
        "text": "$X_c = -1.00$; nffvtarq artngvir fvta gb n qverpg-npgvat cebprff.",
        "whyIncorrect": "CI zbirf va gur fnzr qverpgvba nf PB, juvpu qrsvarf cbfvgvir cebprff tnva."
      },
      {
        "text": "$X_c = +0.15$; fhogenpgrq crepragntrf jvgubhg qvivqvat.",
        "whyIncorrect": "Snvyrq gb qvivqr \u0394CI ol \u0394PB."
      },
      {
        "text": "$X_c = +2.00$; pnyphyngrq tnva nffhzvat 50% fgrc fvmr.",
        "whyIncorrect": "Gur fgrc punatr jnf 15% (80% - 65%), abg 7.5%."
      },
      {
        "text": "$X_c = +0.50$; qvivqrq 15% ol n cerfhzrq 30% fcna.",
        "whyIncorrect": "\u0394PB vf rknpgyl 15%."
      },
      {
        "text": "$X_c = +15.0$; zhygvcyvrq gur tnva ol 15.",
        "whyIncorrect": "Cebprff tnva vf havgyrff be %/% naq rdhnyf rknpgyl 1.00."
      },
      {
        "text": "$X_c = 0.00$; nffhzrq vagrtengvat cebprff jvgu mreb tnva.",
        "whyIncorrect": "CI ernpurf n fgnoyr fgrnql fgngr ng 60%, pbasvezvat n frys-erthyngvat cebprff."
      },
      {
        "text": "$X_c = +0.80$; hfrq gur svany PB inyhr.",
        "whyIncorrect": "Cebprff tnva qrcraqf ba gur punatr (\u0394), abg svany fgrnql-fgngr inyhr."
      }
    ]
  },
  {
    "id": 903,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Fgngvp Tnva Pnyphyngvba sebz Sbezhyn Furrg",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4O). Gur pbagebyyre bhgchg (PB) vf fgrccrq sebz 46.2\\% gb 69.4\\% ng g = 4.1\\grkg{ zva}. Gur fgrrcrfg gnatrag yvar vagrefrpgf gur vavgvny CI onfryvar (53.2\\%) ng g = 7.9\\grkg{ zva}. Pnyphyngr gur nccnerag cebprff qrnq gvzr \\gurgn.",
    "correctAnswer": "$\\gurgn = 3.8\\grkg{ zvahgrf}$ (pnyphyngrq nf $7.9\\grkg{ zva} - 4.1\\grkg{ zva}$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 11",
    "explanation": "Cebprff qrnq gvzr (genafcbeg ynt $\\gurgn$) vf gur gvzr vagreiny orgjrra jura gur fgrc punatr va pbagebyyre bhgchg vf vavgvngrq ($g_{\\grkg{fgrc}} = 4.1\\grkg{ zva}$) naq jura gur gnatrag yvar guebhtu gur vasyrpgvba cbvag vagrefrpgf gur vavgvny CI onfryvar ($g_{\\grkg{gnatrag}} = 7.9\\grkg{ zva}$): $$\\gurgn = 7.9\\grkg{ zva} - 4.1\\grkg{ zva} = 3.8\\grkg{ zvahgrf}$$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $T_f = \\senp{\\Qrygn \\grkg{Bhgchg}}{\\Qrygn \\grkg{Vachg}}$",
      "Pnyphyngr punatrf: $\\Qrygn \\grkg{Bhgchg} = 75\\% - 25\\% = 50\\%$, $\\Qrygn \\grkg{Vachg} = 16.0 - 8.0 = 8.0\\grkg{ zN}$",
      "Pbzchgr fgngvp tnva: $T_f = \\senp{50}{8.0} = 6.25\\% / \\grkg{zN}$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p5_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4O: Bcra-Ybbc Fgrc Grfg (PB: 46.2% gb 69.4%, CI: 53.2% gb 61.9%)",
    "distractors": [
      {
        "text": "$\\gurgn = 7.9\\grkg{ zvahgrf}$; ernq gur nofbyhgr gvzr bs gnatrag vagrefrpgvba.",
        "whyIncorrect": "Zhfg fhogenpg gur fgrc vavgvngvba gvzr (4.1 zva) sebz gur vagreprcg gvzr."
      },
      {
        "text": "$\\gurgn = 4.1\\grkg{ zvahgrf}$; ernq gur fgrc vavgvngvba gvzr qverpgyl.",
        "whyIncorrect": "4.1 zva vf jura gur bcrengbe zbirq gur znahny bhgchg."
      },
      {
        "text": "$\\gurgn = 1.9\\grkg{ zvahgrf}$; qvivqrq 3.8 zva va unys.",
        "whyIncorrect": "Neovgenel unyivat bs qrnq gvzr."
      },
      {
        "text": "$\\gurgn = 8.7\\grkg{ zvahgrf}$; ernq gur punatr va CI (61.9% - 53.2%).",
        "whyIncorrect": "Pbashfrq iregvpny crepragntr punatr jvgu ubevmbagny gvzr nkvf."
      },
      {
        "text": "$\\gurgn = 2.0\\grkg{ zvahgrf}$; ebhaqrq gb arnerfg znwbe tevq znex.",
        "whyIncorrect": "Rknpg pnyphyngvba vf 7.9 - 4.1 = 3.8 zva."
      },
      {
        "text": "$\\gurgn = 23.2\\grkg{ zvahgrf}$; ernq gur punatr va PB (69.4% - 46.2%).",
        "whyIncorrect": "Pbashfrq bhgchg fgrc zntavghqr jvgu gvzr qrynl."
      },
      {
        "text": "$\\gurgn = 12.0\\grkg{ zvahgrf}$; nqqrq 4.1 zva naq 7.9 zva.",
        "whyIncorrect": "Nqqrq gvzr inyhrf vafgrnq bs fhogenpgvat gurz."
      },
      {
        "text": "$\\gurgn = 0.5\\grkg{ zvahgrf}$; nffhzrq qrnq gvzr jnf artyvtvoyr.",
        "whyIncorrect": "Gur erfcbafr fubjf fhofgnagvny genafcbegngvba ynt bs 3.8 zva."
      },
      {
        "text": "$\\gurgn = 5.3\\grkg{ zvahgrf}$; fhogenpgrq 4.1 zva sebz 9.4 zva.",
        "whyIncorrect": "Vapbeerpg vagreprcg gvzr ernqvat."
      }
    ]
  },
  {
    "id": 904,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pybfrq Ybbc Fgngvp Tnva (PYFT) Pnyphyngvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 1-s). Jura gur pbagebyyre bhgchg (PB) vf fgrccrq sebz 52\\% gb 62\\% ng g = 3.0\\grkg{ zva}, gur cebprff inevnoyr (CI) ortvaf enzcvat qbjajneq ng g = 4.0\\grkg{ zva} ng n pbafgnag fybcr. Jung cebprff punenpgrevfgvp vf qrzbafgengrq?",
    "correctAnswer": "Na vagrtengvat (aba-frys-erthyngvat) cebprff jvgu n qrnq gvzr bs 1.0 zvahgr naq n artngvir vagrtengvba engr.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 14",
    "explanation": "N frys-erthyngvat cebprff fgnovyvmrf ng n arj fgrnql fgngr sbyybjvat n fgrc punatr. Va pbagenfg, na vagrtengvat cebprff (fhpu nf yvdhvq yriry va n gnax be cerffher va n pybfrq irffry) pbagvahrf enzcvat ng n pbafgnag engr vaqrsvavgryl ($qCI/qg = \\grkg{pbafgnag}$) sbe nf ybat nf gur bhgchg vzonynapr rkvfgf. Gur qrnq gvzr vf $4.0 - 3.0 = 1.0\\grkg{ zva}$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{PYFT} = \\senp{X_p X_c}{1 + X_p X_c}$",
      "Pbzchgr ybbc cebqhpg: $X_p X_c = 3.0 \\gvzrf 1.5 = 4.5$",
      "Pbzchgr qrabzvangbe: $1 + 4.5 = 5.5$",
      "Pnyphyngr pybfrq ybbc fgngvp tnva: $\\grkg{PYFT} = \\senp{4.5}{5.5} = 0.818$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p6_img1.png",
    "imageCaption": "Vagrtengvat Cebprff Enzc 1-s: Fgrc Punatr Cebqhpvat Pbafgnag Qbjajneq Fybcr",
    "distractors": [
      {
        "text": "N cher svefg-beqre frys-erthyngvat cebprff jvgu mreb qrnq gvzr.",
        "whyIncorrect": "Gur erfcbafr pbagvahrf enzcvat jvgu ab rkcbaragvny yriryvat, naq unf 1 zva qrnq gvzr."
      },
      {
        "text": "N frpbaq-beqre haqreqnzcrq cebprff jvgu 0.25 qrpnl engvb.",
        "whyIncorrect": "Gurer ner ab bfpvyyngvbaf be birefubbg; vg vf n fgenvtug yvar enzc."
      },
      {
        "text": "N frys-erthyngvat urng rkpunatre cebprff jvgu n tnva bs +1.5.",
        "whyIncorrect": "Vagrtengvat cebprffrf unir ab svavgr frys-erthyngvat tnva."
      },
      {
        "text": "N eha-njnl rkbgurezvp purzvpny ernpgbe jvgu rkcbaragvny nppryrengvba.",
        "whyIncorrect": "Gur fybcr vf pbafgnag (yvarne), abg rkcbaragvnyyl nppryrengvat."
      },
      {
        "text": "N aba-zvavzhz cunfr cebprff jvgu vairefr vavgvny erfcbafr.",
        "whyIncorrect": "CI qbrf abg fgrc hcjneq orsber qebccvat; vg fgnlf syng qhevat qrnq gvzr, gura enzcf qbja."
      },
      {
        "text": "N pevgvpnyyl qnzcrq srrqonpx ybbc bcrengvat va nhgbzngvp zbqr.",
        "whyIncorrect": "Guvf vf na bcra-ybbc grfg cresbezrq va znahny zbqr."
      },
      {
        "text": "Na bireqnzcrq cebprff jvgu n gvzr pbafgnag bs 10 zvahgrf.",
        "whyIncorrect": "Bireqnzcrq cebprffrf yriry bss nflzcgbgvpnyyl; vagrtengvat cebprffrf qb abg."
      },
      {
        "text": "N qvtvgny pbageby ybbc jvgu frirer dhnagvmngvba yvzvg plpyrf.",
        "whyIncorrect": "Ab yvzvg plpyr plpyvat vf cerfrag; vg vf n fzbbgu pbagvahbhf enzc."
      },
      {
        "text": "N qrnq-gvzr qbzvanag frys-erthyngvat cebprff gung fgnovyvmrf ng 45%.",
        "whyIncorrect": "Gur enzc pbagvahrf qbjajneqf bss gur puneg; vg qbrf abg frys-erthyngr."
      }
    ]
  },
  {
    "id": 905,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pybfrq Ybbc Gvzr Pbafgnag (PYGP) Pnyphyngvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 1-q). Jura gur pbagebyyre bhgchg (PB) vf fgrccrq qbjajneq sebz 52\\% gb 48\\% ng g = 2.5\\grkg{ zva}, gur cebprff inevnoyr (CI) enzcf qbjajneq pbagvahbhfyl. Jul pnaabg na vagrtengvat cebprff or gharq hfvat fgnaqneq frys-erthyngvat Mvrtyre-Avpubyf ernpgvba pheir sbezhynf?",
    "correctAnswer": "Orpnhfr na vagrtengvat cebprff unf ab fgrnql-fgngr tnva (\\Qrygn CI \\evtugneebj \\vasgl) naq ab frys-erthyngvat gvzr pbafgnag (\\gnh); ghavat zhfg or onfrq ba gur vagrtengvba enzc engr.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 18",
    "explanation": "Fgnaqneq bcra-ybbc ernpgvba pheir sbezhynf erdhver n svavgr fgrnql-fgngr tnva $X_c = \\Qrygn CI / \\Qrygn PB$ naq n 63.2% gvzr pbafgnag $\\gnh$. Vagrtengvat cebprffrf arire ernpu n fgrnql fgngr, fb gurve qlanzvp zbqry vf cnenzrgrevmrq ol qrnq gvzr $\\gurgn$ naq vagrtengvba irybpvgl $X_v^* = (qCI/qg) / \\Qrygn PB$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{PYGP} = \\senp{\\gnh_1}{1 + X_p X_c}$",
      "Pnyphyngr ybbc cebqhpg: $X_p X_c = 4.0 \\gvzrf 2.0 = 8.0$",
      "Pbzchgr qrabzvangbe: $1 + X_p X_c = 1 + 8.0 = 9.0$",
      "Pbzchgr pybfrq ybbc gvzr pbafgnag: $\\grkg{PYGP} = \\senp{40.0}{9.0} = 4.44\\grkg{ zvahgrf}$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p6_img2.png",
    "imageCaption": "Vagrtengvat Cebprff Enzc 1-q: Artngvir Fgrc Cebqhpvat Qbjajneq Fybcr",
    "distractors": [
      {
        "text": "Orpnhfr vagrtengvat cebprffrf pna bayl or pbagebyyrq jvgu Ba/Bss fjvgpurf.",
        "whyIncorrect": "Vagrtengvat cebprffrf ner fgnaqneqyl pbagebyyrq jvgu Cebcbegvbany-Vagrteny (CV) pbagebyyref."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf unir mreb qrnq gvzr haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Vagrtengvat cebprffrf serdhragyl pbagnva cvcvat qrnq gvzr."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba vf fgevpgyl cebuvovgrq ba nyy vagrtengvat cebprffrf.",
        "whyIncorrect": "Qrevingvir pna or hfrq va yriry pbageby, gubhtu CV vf fgnaqneq."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf nyjnlf bfpvyyngr jvgu dhnegre-nzcyvghqr qnzcvat.",
        "whyIncorrect": "Bcra-ybbc vagrtengvat cebprffrf rkuvovg mreb bfpvyyngvbaf."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf erdhver pnfpnqr pbageby jvgu guerr arfgrq fynirf.",
        "whyIncorrect": "Fvatyr-ybbc pbagebyyref rnfvyl pbageby vagrtengvat irffryf."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf pna bayl or zbqryrq hfvat m-genafsbez qvfpergr zngu.",
        "whyIncorrect": "Pbagvahbhf Yncynpr genafsbez zbqryf ($T(f) = X / f$) zbqry vagrtengvat cebprffrf cresrpgyl."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf unir cbfvgvir srrqonpx ybbcf ohvyg vagb gur inyir.",
        "whyIncorrect": "Gur vagrtengvat punenpgrevfgvp vf n culfvpny cebcregl bs znff/raretl npphzhyngvba."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf pna bayl bcrengr jvgu carhzngvp synccre-abmmyr pbagebyyref.",
        "whyIncorrect": "Zbqrea qvtvgny QPF naq CNP flfgrzf pbageby vagrtengvat cebprffrf."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf erdhver artngvir qrnq gvzr gb fgnovyvmr.",
        "whyIncorrect": "Artngvir qrnq gvzr ivbyngrf pnhfnyvgl naq qbrf abg rkvfg va culfvpny flfgrzf."
      }
    ]
  },
  {
    "id": 906,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pbagebyyre Qverpg if Erirefr Npgvba Qrgrezvangvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 1-p). Ng g = 0.25\\grkg{ zva}, PB vf fgrccrq sebz 30\\% gb 50\\%, pnhfvat CI gb enzc hcjneq pbagvahbhfyl sebz 55\\% ng n pbafgnag engr. Jung glcr bs svryq cebprff qbrf guvf erfcbafr glcvpnyyl ercerfrag?",
    "correctAnswer": "N yvdhvq fgbentr gnax jvgu pbagebyyrq vasybj naq pbafgnag bhgsybj (yvdhvq yriry evfrf pbagvahbhfyl jura vasybj rkprrqf bhgsybj).",
    "ilmReference": "VYZ 310305nN ct 21",
    "explanation": "Va n yvdhvq fgbentr irffry, vapernfvat gur vasybj inyir cbfvgvba juvyr bhgsybj erznvaf pbafgnag perngrf n znff vzonynapr, pnhfvat gur gnax yriry (CI) gb evfr ng n yvarne engr cebcbegvbany gb gur rkprff sybj: $qu/qg = (D_{\\grkg{va}} - D_{\\grkg{bhg}}) / N_{\\grkg{gnax}}$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p7_img1.png",
    "imageCaption": "Vagrtengvat Cebprff Enzc 1-p: Fgrc Hc Cebqhpvat Cbfvgvir Hcjneq Fybcr",
    "distractors": [
      {
        "text": "N furyy-naq-ghor urng rkpunatre jvgu frys-erthyngvat rkvg grzcrengher.",
        "whyIncorrect": "Urng rkpunatref frys-erthyngr nf urng genafsre nccebnpurf gurezny rdhvyvoevhz."
      },
      {
        "text": "N tnf cvcryvar jvgu cerffher frys-erthyngvat npebff n svkrq bevsvpr.",
        "whyIncorrect": "Tnf yvar cerffher frys-erthyngrf nf sybj guebhtu gur bevsvpr vapernfrf jvgu cerffher."
      },
      {
        "text": "N pbagvahbhf fgveerq gnax ernpgbe jvgu vafgnagnarbhf purzvpny arhgenyvmngvba.",
        "whyIncorrect": "Arhgenyvmngvba cebprffrf frys-erthyngr nebhaq rdhvinyrapr cbvagf."
      },
      {
        "text": "N pragevshtny chzc bcrengvat ntnvafg pybfrq fuhgbss urnq.",
        "whyIncorrect": "Chzc urnq ntnvafg pybfrq qvfpunetr ernpurf n fgngvp znkvzhz cerffher, abg n enzc."
      },
      {
        "text": "N fgrnz gheovar trarengbe jvgu na vfbpuebabhf sylonyy tbireabe.",
        "whyIncorrect": "Gheovar tbireabef va pybfrq ybbc ubyq fcrrq pbafgnag."
      },
      {
        "text": "Na ntvgngrq wnpxrgrq ernpgbe jvgu ehanjnl gurezny rkcybfvba.",
        "whyIncorrect": "Ehanjnl ernpgvbaf nppryrengr rkcbaragvnyyl, abg nf n yvarne enzc."
      },
      {
        "text": "Na bevsvpr zrgre zrnfhevat fgrnql gheohyrag fgrnz sybj.",
        "whyIncorrect": "Sybj zrgref cebqhpr vafgnagnarbhf qvssreragvny cerffher, abg na npphzhyngvat enzc."
      },
      {
        "text": "N ibegrk sybjzrgre furqqvat Xnezna ibegvprf ng pbafgnag serdhrapl.",
        "whyIncorrect": "Ibegrk furqqvat cebqhprf fgrnql NP serdhrapl, abg na vagrtengvat enzc."
      },
      {
        "text": "N carhzngvp inyir cbfvgvbare erfcbaqvat gb n 12 zN fgrc vachg.",
        "whyIncorrect": "Cbfvgvbaref ner pybfrq-ybbc snfg cbfvgvbavat freibf gung frggyr va frpbaqf."
      }
    ]
  },
  {
    "id": 907,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pbbyvat Jngre Ybbc Npgvba Fryrpgvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 1-R). Jura PB fgrcf sebz 30\\% gb 50\\% ng g = 0.25\\grkg{ zva}, CI enzcf qbjajneq pbagvahbhfyl. Gb npuvrir fgnoyr artngvir srrqonpx pbageby ba guvf vagrtengvat cebprff, jung pbagebyyre npgvba zhfg or fryrpgrq?",
    "correctAnswer": "Erirefr-npgvat pbagebyyre (vs CI vapernfrf nobir frgcbvag, pbagebyyre bhgchg PB zhfg vapernfr gb qevir CI onpx qbja).",
    "ilmReference": "VYZ 310305nN ct 24",
    "explanation": "Orpnhfr vapernfvat PB pnhfrf CI gb enzc qbjajneq, gur cebprff unf n artngvir qlanzvp tnva. Gb cebivqr artngvir srrqonpx, vs CI evfrf nobir frgcbvag, gur pbagebyyre zhfg vapernfr PB gb qevir CI onpx qbja. Ol VFN qrsvavgvba, n pbagebyyre jubfr bhgchg vapernfrf jura CI vapernfrf vf Erirefr-npgvat.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p7_img2.png",
    "imageCaption": "Vagrtengvat Cebprff Enzc 1-R: Fgrc Hc Cebqhpvat Artngvir Qbjajneq Fybcr",
    "distractors": [
      {
        "text": "Qverpg-npgvat pbagebyyre; bhgchg zhfg qrpernfr jura CI vapernfrf.",
        "whyIncorrect": "Qrpernfvat bhgchg jbhyq pnhfr CI gb enzc hc rira snfgre, pnhfvat cbfvgvir srrqonpx ehanjnl."
      },
      {
        "text": "Znahny npgvba bayl; vagrtengvat cebprffrf pnaabg eha va nhgbzngvp zbqr.",
        "whyIncorrect": "Vagrtengvat cebprffrf ner ebhgvaryl naq fgnoyl pbagebyyrq va nhgbzngvp zbqr."
      },
      {
        "text": "Uvtu fvtany fryrpg bireevqr npgvba jvgu nagv-erfrg jvaqhc.",
        "whyIncorrect": "Fvtany fryrpg bireevqr vf n zhygv-pbagebyyre fpurzr, abg onfvp pbagebyyre npgvba."
      },
      {
        "text": "Fcyvg-enatr qhny npgvba jvgu 50% qrnqonaq bireync.",
        "whyIncorrect": "Fcyvg-enatr vf sbe pbagebyyvat zhygvcyr inyirf, abg fvatyr-ybbc pbagebyyre npgvba."
      },
      {
        "text": "Yrnq-ynt srrqsbejneq npgvba jvgu havgl tnva.",
        "whyIncorrect": "Srrqsbejneq pbzcrafngrf sbe zrnfherq qvfgheonaprf, abg onfvp ybbc srrqonpx cbynevgl."
      },
      {
        "text": "Qvssreragvny tnc (ba-bss) npgvba jvgu 10% arhgeny onaq.",
        "whyIncorrect": "Ba-bss pbageby pnhfrf pbagvahbhf yvzvg plpyvat va vagrtengvat cebprffrf."
      },
      {
        "text": "Vairefr qrevingvir npgvba jvgu uvtu abvfr svygengvba.",
        "whyIncorrect": "Vairefr qrevingvir vf hfrq sbe fyhttvfu nanylmref, abg onfvp npgvba fryrpgvba."
      },
      {
        "text": "Cebcbegvbany-bayl npgvba jvgu znahny erfrg ovnf pragrerq ng mreb.",
        "whyIncorrect": "C-bayl npgvba ba na vagrtengvat cebprff yrnirf pbagvahbhf bssfrg be qevsgf."
      },
      {
        "text": "Sybngvat npgvba jvgu ab cebcbegvbany tnva.",
        "whyIncorrect": "Cher sybngvat pbageby vf fyhttvfu naq cebar gb vafgnovyvgl pbzcnerq gb fgnaqneq CV."
      }
    ]
  },
  {
    "id": 908,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Frys-Erthyngvat if Vagrtengvat Cebprffrf",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4q). Gur pbagebyyre bhgchg (PB) vf fgrccrq qbja sebz 67.8\\% gb 62.3\\% ng g = 4.62\\grkg{ zva}. CI snyyf sebz 58.1\\% gb 51.7\\%, naq gur gnatrag yvar vagrefrpgf gur vavgvny onfryvar ng g = 8.0\\grkg{ zva}. Pnyphyngr gur qrnq gvzr \\gurgn naq cebprff tnva X_c.",
    "correctAnswer": "$\\gurgn = 3.38\\grkg{ zva}$, $X_c = +1.16$ (pnyphyngrq nf $\\gurgn = 8.0 - 4.62$ naq $X_c = -6.4\\% / -5.5\\%$).",
    "ilmReference": "VYZ 310305nN ct 27",
    "explanation": "Qrnq gvzr: $\\gurgn = 8.0\\grkg{ zva} - 4.62\\grkg{ zva} = 3.38\\grkg{ zvahgrf}$. Punatr va bhgchg: $\\Qrygn PB = 62.3\\% - 67.8\\% = -5.5\\%$. Punatr va CI: $\\Qrygn CI = 51.7\\% - 58.1\\% = -6.4\\%$. Cebprff tnva: $X_c = \\senp{-6.4\\%}{-5.5\\%} = +1.16$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p8_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4q: Bcra-Ybbc Fgrc Grfg (PB: 67.8% gb 62.3%, CI: 58.1% gb 51.7%)",
    "distractors": [
      {
        "text": "$\\gurgn = 8.0\\grkg{ zva}$, $X_c = +0.86$; artyrpgrq fgrc fgneg gvzr naq vairegrq tnva.",
        "whyIncorrect": "Fgrc fgnegrq ng 4.62 zva; tnva vf \u0394CI/\u0394PB = -6.4/-5.5 = +1.16."
      },
      {
        "text": "$\\gurgn = 4.62\\grkg{ zva}$, $X_c = -1.16$; nffvtarq artngvir tnva gb n qverpg cebprff.",
        "whyIncorrect": "Obgu PB naq CI qrpernfrq, fb gur engvb bs artngvirf lvryqf cbfvgvir tnva."
      },
      {
        "text": "$\\gurgn = 3.38\\grkg{ zva}$, $X_c = -1.16$; nffvtarq artngvir fvta gb gur tnva.",
        "whyIncorrect": "(-6.4%) / (-5.5%) = +1.16."
      },
      {
        "text": "$\\gurgn = 1.50\\grkg{ zva}$, $X_c = +0.55$; neovgenel qrnq gvzr rfgvzngvba.",
        "whyIncorrect": "Pnyphyngvba vf fgevpgyl 8.0 - 4.62 = 3.38 zva."
      },
      {
        "text": "$\\gurgn = 5.50\\grkg{ zva}$, $X_c = +6.40$; pbashfrq punatrf va PB naq CI.",
        "whyIncorrect": "5.5% vf \u0394PB naq 6.4% vf \u0394CI, abg qrnq gvzr be tnva."
      },
      {
        "text": "$\\gurgn = 3.38\\grkg{ zva}$, $X_c = +0.86$; vairegrq tnva nf \u0394PB / \u0394CI.",
        "whyIncorrect": "Vairegrq tnva sbezhyn."
      },
      {
        "text": "$\\gurgn = 12.62\\grkg{ zva}$, $X_c = +1.16$; nqqrq fgrc gvzr naq vagreprcg gvzr.",
        "whyIncorrect": "Nqqrq vafgrnq bs fhogenpgvat gvzrf."
      },
      {
        "text": "$\\gurgn = 0.00\\grkg{ zva}$, $X_c = +1.00$; nffhzrq vafgnag frys-erthyngvba.",
        "whyIncorrect": "CI erznvaf syng hagvy nsgre g = 4.62 zva; qrnq gvzr vf 3.38 zva."
      },
      {
        "text": "$\\gurgn = 2.38\\grkg{ zva}$, $X_c = +1.50$; ernq tevq yvarf vapbeerpgyl.",
        "whyIncorrect": "Tevq yvarf pbasvez vagreprcg ng 8.0 zva naq fgrc ng 4.62 zva."
      }
    ]
  },
  {
    "id": 909,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebcbegvbany-Bayl Pbageby Fgrnql-Fgngr Bssfrg",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4p). PB vf fgrccrq sebz 40.2\\% gb 57.3\\% ng g = 1.17\\grkg{ zva}. CI evfrf sebz 49.2\\% gb 87.0\\%, jvgu gur gnatrag yvar vagrefrpgvat onfryvar ng g = 1.75\\grkg{ zva}. Pnyphyngr gur fgrnql-fgngr cebprff tnva X_c.",
    "correctAnswer": "$X_c = +2.21$ (pnyphyngrq nf $\\Qrygn CI / \\Qrygn PB = (87.0\\% - 49.2\\%) / (57.3\\% - 40.2\\%) = 37.8\\% / 17.1\\%$).",
    "ilmReference": "VYZ 310305nN ct 30",
    "explanation": "Punatr va pbagebyyre bhgchg: $\\Qrygn PB = 57.3\\% - 40.2\\% = 17.1\\%$. Punatr va cebprff inevnoyr: $\\Qrygn CI = 87.0\\% - 49.2\\% = 37.8\\%$. Fgrnql-fgngr tnva: $X_c = \\senp{37.8\\%}{17.1\\%} = +2.21$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p8_img3.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4p: Bcra-Ybbc Fgrc Grfg (PB: 40.2% gb 57.3%, CI: 49.2% gb 87.0%)",
    "distractors": [
      {
        "text": "$X_c = +0.45$; vairegrq gur tnva sbezhyn nf \u0394PB / \u0394CI.",
        "whyIncorrect": "Vairegrq gur sbezhyn; cebprff tnva vf \u0394CI/\u0394PB."
      },
      {
        "text": "$X_c = +1.77$; qvivqrq svany CI (87%) ol svany PB (57.3%).",
        "whyIncorrect": "Tnva vf gur engvb bs punatrf, abg engvb bs svany inyhrf."
      },
      {
        "text": "$X_c = +3.78$; artyrpgrq qvivqvat ol \u0394PB.",
        "whyIncorrect": "Bzvggrq qvivfvba ol \u0394PB (17.1%)."
      },
      {
        "text": "$X_c = -2.21$; nffvtarq artngvir fvta gb n qverpg-npgvat cebprff.",
        "whyIncorrect": "Obgu PB naq CI vapernfr, fb cebprff tnva vf cbfvgvir."
      },
      {
        "text": "$X_c = +1.00$; nffhzrq havgl tnva.",
        "whyIncorrect": "Pnyphyngrq tnva vf 37.8 / 17.1 = 2.21."
      },
      {
        "text": "$X_c = +0.58$; ernq qrnq gvzr (1.75 - 1.17) vafgrnq bs tnva.",
        "whyIncorrect": "0.58 zva vf gur qrnq gvzr \u03b8, abg cebprff tnva."
      },
      {
        "text": "$X_c = +1.50$; rfgvzngrq fybcr jvgubhg rknpg ahzoref.",
        "whyIncorrect": "Hfvat rknpg sbezhyn inyhrf tvirf 2.21."
      },
      {
        "text": "$X_c = +4.92$; hfrq vavgvny CI inyhr.",
        "whyIncorrect": "Vavgvny CI vf onfryvar, abg cebprff tnva."
      },
      {
        "text": "$X_c = +20.7$; zhygvcyvrq \u0394CI ol \u0394PB.",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat punatrf."
      }
    ]
  },
  {
    "id": 910,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebcbegvbany Onaq irefhf Pbagebyyre Tnva",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4N). Va znahny zbqr, PB vf fgrccrq sebz 50.4\\% gb 78.9\\% ng g = 1.08\\grkg{ zva}. CI erfcbaqf sebz 30.0\\% gb 91.3\\%. Jung vf gur fgrnql-fgngr cebprff tnva X_c?",
    "correctAnswer": "$X_c = +2.15$ (pnyphyngrq nf $\\Qrygn CI / \\Qrygn PB = (91.3\\% - 30.0\\%) / (78.9\\% - 50.4\\%) = 61.3\\% / 28.5\\%$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 33",
    "explanation": "$\\Qrygn PB = 78.9\\% - 50.4\\% = 28.5\\%$. $\\Qrygn CI = 91.3\\% - 30.0\\% = 61.3\\%$. Cebprff tnva $X_c = \\senp{61.3\\%}{28.5\\%} = +2.15$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $X_p = \\senp{100\\%}{\\grkg{CO}}$",
      "Fhofgvghgr tvira cebcbegvbany onaq: $\\grkg{CO} = 25\\%$",
      "Pnyphyngr pbagebyyre tnva: $X_p = \\senp{100}{25} = 4.0$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p9_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4N: Gnatrag Yvar Pbafgehpgvba (PB: 50.4% gb 78.9%, CI: 30% gb 91.3%)",
    "distractors": [
      {
        "text": "$X_c = +0.46$; vairegrq gur tnva sbezhyn nf \u0394PB / \u0394CI.",
        "whyIncorrect": "Vairegrq gur sbezhyn; cebprff tnva vf \u0394CI/\u0394PB."
      },
      {
        "text": "$X_c = +1.16$; qvivqrq svany CI ol svany PB (91.3 / 78.9).",
        "whyIncorrect": "Zhfg hfr qvssreraprf (\u0394), abg nofbyhgr svany inyhrf."
      },
      {
        "text": "$X_c = -2.15$; nffvtarq artngvir fvta gb n qverpg cebprff.",
        "whyIncorrect": "Obgu PB naq CI fgrc hcjneq, fb tnva vf cbfvgvir."
      },
      {
        "text": "$X_c = +6.13$; sbetbg gb qvivqr ol \u0394PB.",
        "whyIncorrect": "Bzvggrq qvivqvat ol \u0394PB (28.5%)."
      },
      {
        "text": "$X_c = +0.39$; ernq qrnq gvzr (1.47 - 1.08) vafgrnq bs tnva.",
        "whyIncorrect": "0.39 zva vf gur qrnq gvzr \u03b8, abg cebprff tnva."
      },
      {
        "text": "$X_c = +1.00$; nffhzrq frys-erthyngvat havgl tnva.",
        "whyIncorrect": "Gur cebprff nzcyvsvrf vachg punatrf ol 2.15 gvzrf."
      },
      {
        "text": "$X_c = +3.04$; qvivqrq 91.3% ol vavgvny 30.0%.",
        "whyIncorrect": "Qvivqrq svany CI ol vavgvny CI vafgrnq bs pnyphyngvat tnva."
      },
      {
        "text": "$X_c = +2.85$; hfrq \u0394PB inyhr qverpgyl.",
        "whyIncorrect": "28.5% vf gur vachg fgrc fvmr."
      },
      {
        "text": "$X_c = +0.85$; ebhaqrq vapbeerpgyl.",
        "whyIncorrect": "Rknpg pnyphyngvba vf 61.3 / 28.5 = 2.15."
      }
    ]
  },
  {
    "id": 911,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "C-Bayl Cebcbegvbany Onaq sebz Tnva",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4r). PB vf fgrccrq sebz 15.4\\% gb 38.2\\% ng g = 1.35\\grkg{ zva}. CI snyyf sebz 93.2\\% gb 74.4\\% jvgu gnatrag vagrefrpgvba ng g = 1.92\\grkg{ zva}. Pnyphyngr gur qrnq gvzr \\gurgn naq cebprff tnva X_c.",
    "correctAnswer": "$\\gurgn = 0.57\\grkg{ zva}$, $X_c = -0.825$ (pnyphyngrq nf $\\gurgn = 1.92 - 1.35$ naq $X_c = -18.8\\% / +22.8\\%$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 36",
    "explanation": "Qrnq gvzr: $\\gurgn = 1.92\\grkg{ zva} - 1.35\\grkg{ zva} = 0.57\\grkg{ zvahgrf}$. $\\Qrygn PB = 38.2\\% - 15.4\\% = +22.8\\%$. $\\Qrygn CI = 74.4\\% - 93.2\\% = -18.8\\%$. Cebprff tnva: $X_c = \\senp{-18.8\\%}{+22.8\\%} = -0.825$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p10_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4r: Bcra-Ybbc Fgrc Grfg (PB: 15.4% gb 38.2%, CI: 93.2% gb 74.4%)",
    "distractors": [
      {
        "text": "$\\gurgn = 1.92\\grkg{ zva}$, $X_c = +0.825$; artyrpgrq fgneg gvzr naq hfrq cbfvgvir tnva.",
        "whyIncorrect": "Fgneg gvzr jnf 1.35 zva, naq CI qrpernfrq jura PB vapernfrq, znxvat tnva artngvir."
      },
      {
        "text": "$\\gurgn = 0.57\\grkg{ zva}$, $X_c = +0.825$; zvffrq gur artngvir fvta ba cebprff tnva.",
        "whyIncorrect": "Vapernfvat PB pnhfrq CI gb qrpernfr, juvpu qrsvarf artngvir cebprff tnva."
      },
      {
        "text": "$\\gurgn = 1.35\\grkg{ zva}$, $X_c = -1.21$; vairegrq tnva sbezhyn.",
        "whyIncorrect": "Vairegrq tnva sbezhyn nf \u0394PB / \u0394CI."
      },
      {
        "text": "$\\gurgn = 3.27\\grkg{ zva}$, $X_c = -0.825$; nqqrq fgneg naq vagreprcg gvzrf.",
        "whyIncorrect": "Nqqrq gvzrf vafgrnq bs fhogenpgvat gurz."
      },
      {
        "text": "$\\gurgn = 0.57\\grkg{ zva}$, $X_c = -1.88$; hfrq \u0394CI jvgubhg qvivqvat ol \u0394PB.",
        "whyIncorrect": "Bzvggrq qvivfvba ol \u0394PB (22.8%)."
      },
      {
        "text": "$\\gurgn = 0.00\\grkg{ zva}$, $X_c = -0.825$; nffhzrq mreb qrnq gvzr.",
        "whyIncorrect": "Qrnq gvzr vf pyrneyl ivfvoyr orgjrra 1.35 naq 1.92 zva."
      },
      {
        "text": "$\\gurgn = 0.57\\grkg{ zva}$, $X_c = -2.28$; hfrq \u0394PB qverpgyl.",
        "whyIncorrect": "22.8% vf gur vachg fgrc fvmr, abg tnva."
      },
      {
        "text": "$\\gurgn = 1.00\\grkg{ zva}$, $X_c = -1.00$; ebhaqrq inyhrf pehqryl.",
        "whyIncorrect": "Rknpg pnyphyngvba vf \u03b8 = 0.57 zva naq Xc = -0.825."
      },
      {
        "text": "$\\gurgn = 0.57\\grkg{ zva}$, $X_c = +1.21$; vairegrq tnva naq znqr vg cbfvgvir.",
        "whyIncorrect": "Vairegrq sbezhyn naq ybfg artngvir fvta."
      }
    ]
  },
  {
    "id": 912,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Vagrteny Erfrg Gvzr if Erfrg Engr Havgf",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 3q). PB fgrcf hc sebz 48.2\\% gb 68.5\\% ng g = 3.0\\grkg{ zva}. CI erznvaf syng ng 66.0\\% hagvy g = 7.98\\grkg{ zva}, gura qebcf gb 50.82\\%. Jung vf gur nccnerag qrnq gvzr \\gurgn?",
    "correctAnswer": "$\\gurgn = 4.98\\grkg{ zvahgrf}$ (pnyphyngrq nf $7.98\\grkg{ zva} - 3.0\\grkg{ zva}$).",
    "ilmReference": "VYZ 310305nN ct 39",
    "explanation": "Gur cebprff rkuvovgf cher qrnq gvzr sebz jura PB fgrccrq ng $g = 3.0\\grkg{ zva}$ hagvy CI svefg ortna gb erfcbaq ng $g = 7.98\\grkg{ zva}$: $\\gurgn = 7.98 - 3.0 = 4.98\\grkg{ zvahgrf}$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p12_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 3q: Bcra-Ybbc Fgrc Grfg jvgu Ybat Qrnq Gvzr (gurgn = 4.98 zva)",
    "distractors": [
      {
        "text": "$\\gurgn = 7.98\\grkg{ zvahgrf}$; ernq gur erfcbafr gvzr jvgubhg fhogenpgvat fgrc gvzr.",
        "whyIncorrect": "Zhfg fhogenpg gur fgrc vavgvngvba gvzr (3.0 zva)."
      },
      {
        "text": "$\\gurgn = 3.00\\grkg{ zvahgrf}$; ernq gur fgrc vavgvngvba gvzr qverpgyl.",
        "whyIncorrect": "3.0 zva vf jura gur bhgchg jnf punatrq, abg gur qhengvba bs gur qrynl."
      },
      {
        "text": "$\\gurgn = 15.18\\grkg{ zvahgrf}$; ernq gur punatr va CI (66.0% - 50.82%).",
        "whyIncorrect": "15.18% vf \u0394CI, abg n gvzr qhengvba."
      },
      {
        "text": "$\\gurgn = 20.30\\grkg{ zvahgrf}$; ernq gur punatr va PB (68.5% - 48.2%).",
        "whyIncorrect": "20.3% vf \u0394PB, abg n gvzr qhengvba."
      },
      {
        "text": "$\\gurgn = 10.98\\grkg{ zvahgrf}$; nqqrq 3.0 zva naq 7.98 zva.",
        "whyIncorrect": "Nqqrq gvzr inyhrf vafgrnq bs fhogenpgvat gurz."
      },
      {
        "text": "$\\gurgn = 2.49\\grkg{ zvahgrf}$; qvivqrq qrnq gvzr va unys.",
        "whyIncorrect": "Neovgenel unyivat bs qrnq gvzr."
      },
      {
        "text": "$\\gurgn = 1.00\\grkg{ zvahgr}$; nffhzrq fgnaqneq 1 zva qrnq gvzr.",
        "whyIncorrect": "Gur pheir fubjf n ybat genafcbeg ynt bs arneyl 5 zvahgrf."
      },
      {
        "text": "$\\gurgn = 0.00\\grkg{ zvahgrf}$; nffhzrq mreb qrnq gvzr.",
        "whyIncorrect": "CI fubjf ab erfcbafr sbe arneyl 5 zvahgrf sbyybjvat gur fgrc."
      },
      {
        "text": "$\\gurgn = 6.00\\grkg{ zvahgrf}$; ebhaqrq gb arnerfg rira vagrtre.",
        "whyIncorrect": "Rknpg pnyphyngvba vf 7.98 - 3.00 = 4.98 zva."
      }
    ]
  },
  {
    "id": 913,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Erfrg Jvaqhc Pnhfr naq Ceriragvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 1-O). Jura PB fgrcf sebz 48\\% gb 58\\% (\\Qrygn PB = 10\\%) ng g = 3.5\\grkg{ zva}, CI ortvaf enzcvat qbja sebz 68\\% ng g = 3.5\\grkg{ zva} naq ernpurf 52\\% ng g = 9.0\\grkg{ zva}. Pnyphyngr gur vagrtengvba irybpvgl X_v^*.",
    "correctAnswer": "$X_v^* = -0.291\\% / (\\grkg{zva} \\pqbg \\% PB)$ (pnyphyngrq nf $(-16\\% / 5.5\\grkg{ zva}) / 10\\% PB$).",
    "ilmReference": "VYZ 310305nN ct 42",
    "explanation": "CI punatrf ol $\\Qrygn CI = 52\\% - 68\\% = -16\\%$ bire n gvzr fcna bs $\\Qrygn g = 9.0 - 3.5 = 5.5\\grkg{ zva}$. Gur fybcr vf $qCI/qg = -16\\% / 5.5\\grkg{ zva} = -2.909\\%/\\grkg{zva}$. Abeznyvmvat ol $\\Qrygn PB = 10\\%$, gur vagrtengvba irybpvgl vf $X_v^* = -2.909 / 10 = -0.291\\% / (\\grkg{zva} \\pqbg \\% PB)$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p13_img1.png",
    "imageCaption": "Vagrtengvat Cebprff Enzc 1-O: Yvarne Enzc Engr Qrgrezvangvba",
    "distractors": [
      {
        "text": "$X_v^* = -2.91\\% / (\\grkg{zva} \\pqbg \\% PB)$; sbetbg gb qvivqr ol 10% PB fgrc.",
        "whyIncorrect": "Snvyrq gb abeznyvmr ol gur 10% pbagebyyre bhgchg fgrc fvmr."
      },
      {
        "text": "$X_v^* = +0.291\\% / (\\grkg{zva} \\pqbg \\% PB)$; bzvggrq artngvir fvta sbe qbjajneq enzc.",
        "whyIncorrect": "Gur enzc fybcr vf artngvir, vaqvpngvat n artngvir vagrtengvba tnva."
      },
      {
        "text": "$X_v^* = -1.60\\% / (\\grkg{zva} \\pqbg \\% PB)$; qvivqrq \u0394CI ol 10% qverpgyl.",
        "whyIncorrect": "Artyrpgrq gur 5.5 zvahgr gvzr ryncfrq."
      },
      {
        "text": "$X_v^* = -0.55\\% / (\\grkg{zva} \\pqbg \\% PB)$; qvivqrq gvzr ol 10%.",
        "whyIncorrect": "Vapbeerpg sbezhyn nccyvpngvba."
      },
      {
        "text": "$X_v^* = -0.10\\% / (\\grkg{zva} \\pqbg \\% PB)$; nffhzrq havgl fybcr.",
        "whyIncorrect": "Rknpg pnyphyngrq fybcr abeznyvmrq ol fgrc fvmr vf -0.291."
      },
      {
        "text": "$X_v^* = +2.91\\% / (\\grkg{zva} \\pqbg \\% PB)$; vairegrq fvta naq zvffrq fgrc fvmr.",
        "whyIncorrect": "Obgu fvta naq abeznyvmngvba jrer vapbeerpg."
      },
      {
        "text": "$X_v^* = -0.029\\% / (\\grkg{zva} \\pqbg \\% PB)$; qvivqrq ol 100 vafgrnq bs 10.",
        "whyIncorrect": "Vapbeerpg qrpvzny cynpr va fgrc fvmr qvivfvba."
      },
      {
        "text": "$X_v^* = -0.344\\% / (\\grkg{zva} \\pqbg \\% PB)$; hfrq gbgny gvzr 9.0 zva vafgrnq bs 5.5 zva ryncfrq.",
        "whyIncorrect": "Zhfg fhogenpg fgrc fgneg gvzr (3.5 zva) sebz 9.0 zva."
      },
      {
        "text": "$X_v^* = 0.00$; nffhzrq fgrnql fgngr jnf ernpurq.",
        "whyIncorrect": "Vagrtengvat cebprffrf arire ernpu fgrnql fgngr juvyr bhgchg vf fgrccrq."
      }
    ]
  },
  {
    "id": 914,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Qrevingvir Npgvba Checbfr naq Abvfr Nzcyvsvpngvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 2-Q). PB vf fgrccrq sebz 50\\% gb 56\\% ng g = 2.5\\grkg{ zva}. CI evfrf sebz 48\\% naq fgnovyvmrf ng 70\\%. Jung vf gur fgrnql-fgngr cebprff tnva X_c?",
    "correctAnswer": "$X_c = +3.67$ (pnyphyngrq nf $\\Qrygn CI / \\Qrygn PB = (70\\% - 48\\%) / (56\\% - 50\\%) = 22\\% / 6\\%$).",
    "ilmReference": "VYZ 310305nN ct 45",
    "explanation": "$\\Qrygn PB = 56\\% - 50\\% = 6\\%$. $\\Qrygn CI = 70\\% - 48\\% = 22\\%$. Fgrnql-fgngr cebprff tnva: $X_c = \\senp{22\\%}{6\\%} = +3.67$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p15_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 2-Q: Bcra-Ybbc Fgrc Grfg (PB: 50% gb 56%, CI: 48% gb 70%)",
    "distractors": [
      {
        "text": "$X_c = +0.27$; vairegrq gur tnva sbezhyn nf \u0394PB / \u0394CI.",
        "whyIncorrect": "Vairegrq sbezhyn; tnva vf \u0394CI/\u0394PB."
      },
      {
        "text": "$X_c = +1.25$; qvivqrq svany CI ol svany PB (70 / 56).",
        "whyIncorrect": "Hfrq nofbyhgr svany inyhrf vafgrnq bs qvssreraprf."
      },
      {
        "text": "$X_c = -3.67$; nffvtarq artngvir fvta gb n qverpg cebprff.",
        "whyIncorrect": "Obgu PB naq CI vapernfr, fb cebprff tnva vf cbfvgvir."
      },
      {
        "text": "$X_c = +2.20$; qvivqrq 22% ol 10% nffhzrq fgrc.",
        "whyIncorrect": "Npghny fgrc fvmr jnf 6% (56% - 50%)."
      },
      {
        "text": "$X_c = +0.06$; hfrq \u0394PB qverpgyl.",
        "whyIncorrect": "6% vf gur vachg fgrc fvmr, abg gur cebprff tnva."
      },
      {
        "text": "$X_c = +1.00$; nffhzrq havgl frys-erthyngvba.",
        "whyIncorrect": "Gur cebprff vf uvtu-tnva ($X_c = 3.67$)."
      },
      {
        "text": "$X_c = +4.40$; zhygvcyvrq 22% ol 2.",
        "whyIncorrect": "Neovgenel nevguzrgvp reebe."
      },
      {
        "text": "$X_c = +0.48$; hfrq vavgvny CI inyhr.",
        "whyIncorrect": "48% vf vavgvny onfryvar CI."
      },
      {
        "text": "$X_c = +13.2$; zhygvcyvrq \u0394CI ol \u0394PB.",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat punatrf."
      }
    ]
  },
  {
    "id": 915,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Qrevingvir ba Cebprff Inevnoyr (CI) if Reebe",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 4s). PB vf fgrccrq sebz 70.0\\% qbja gb 63.6\\% ng g = 3.2\\grkg{ zva}. CI evfrf sebz 47.3\\% gb 59.4\\%, jvgu gnatrag yvar vagrefrpgvba ng g = 6.0\\grkg{ zva}. Pnyphyngr gur qrnq gvzr \\gurgn naq cebprff tnva X_c.",
    "correctAnswer": "$\\gurgn = 2.8\\grkg{ zva}$, $X_c = -1.89$ (pnyphyngrq nf $\\gurgn = 6.0 - 3.2$ naq $X_c = +12.1\\% / -6.4\\%$).",
    "ilmReference": "VYZ 310305nN ct 48",
    "explanation": "Qrnq gvzr $\\gurgn = 6.0 - 3.2 = 2.8\\grkg{ zvahgrf}$. $\\Qrygn PB = 63.6\\% - 70.0\\% = -6.4\\%$. $\\Qrygn CI = 59.4\\% - 47.3\\% = +12.1\\%$. Cebprff tnva $X_c = \\senp{+12.1\\%}{-6.4\\%} = -1.89$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p15_img3.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 4s: Bcra-Ybbc Fgrc Grfg (PB: 70.0% gb 63.6%, CI: 47.3% gb 59.4%)",
    "distractors": [
      {
        "text": "$\\gurgn = 6.0\\grkg{ zva}$, $X_c = +1.89$; bzvggrq fgrc gvzr naq znqr tnva cbfvgvir.",
        "whyIncorrect": "Zhfg fhogenpg 3.2 zva fgrc gvzr; tnva vf artngvir orpnhfr CI ebfr jura PB sryy."
      },
      {
        "text": "$\\gurgn = 2.8\\grkg{ zva}$, $X_c = +1.89$; bzvggrq artngvir fvta ba cebprff tnva.",
        "whyIncorrect": "Bccbfvgr qverpgvbaf bs PB naq CI qvpgngr artngvir cebprff tnva."
      },
      {
        "text": "$\\gurgn = 3.2\\grkg{ zva}$, $X_c = -0.53$; ernq fgrc gvzr naq vairegrq tnva sbezhyn.",
        "whyIncorrect": "Vairegrq tnva nf \u0394PB / \u0394CI."
      },
      {
        "text": "$\\gurgn = 9.2\\grkg{ zva}$, $X_c = -1.89$; nqqrq 3.2 zva naq 6.0 zva.",
        "whyIncorrect": "Nqqrq gvzrf vafgrnq bs fhogenpgvat gurz."
      },
      {
        "text": "$\\gurgn = 2.8\\grkg{ zva}$, $X_c = -1.21$; hfrq \u0394CI qverpgyl.",
        "whyIncorrect": "12.1% vf \u0394CI, juvpu zhfg or qvivqrq ol \u0394PB (-6.4%)."
      },
      {
        "text": "$\\gurgn = 0.0\\grkg{ zva}$, $X_c = -1.00$; nffhzrq vafgnag erfcbafr.",
        "whyIncorrect": "Qrnq gvzr vf 2.8 zvahgrf."
      },
      {
        "text": "$\\gurgn = 2.8\\grkg{ zva}$, $X_c = -0.53$; vairegrq sbezhyn.",
        "whyIncorrect": "Vairegrq sbezhyn nf \u0394PB / \u0394CI."
      },
      {
        "text": "$\\gurgn = 1.8\\grkg{ zva}$, $X_c = -2.50$; zvfernq tevq pbbeqvangrf.",
        "whyIncorrect": "Npphengr ernqvat tvirf \u03b8 = 2.8 zva naq Xc = -1.89."
      },
      {
        "text": "$\\gurgn = 2.8\\grkg{ zva}$, $X_c = +0.53$; vairegrq sbezhyn naq vairegrq fvta.",
        "whyIncorrect": "Obgu sbezhyn naq fvta jrer vairegrq."
      }
    ]
  },
  {
    "id": 916,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Nve-gb-Bcra (Snvy Pybfrq) Inyir Snvyher Fryrpgvba",
    "stem": "Ersre gb gur vyyhfgengrq Cebprff Ernpgvba Pheir (Svther 3N). PB fgrcf sebz 70\\% gb 83\\% ng g = 1.05\\grkg{ zva}. CI erznvaf ng 40\\% hagvy g = 1.49\\grkg{ zva}, jurer vg fgrcf vafgnagnarbhfyl gb 64\\% jvgubhg rkcbaragvny ynt. Jung glcr bs qlanzvp cebprff ryrzrag vf ercerfragrq?",
    "correctAnswer": "N cher qrnq gvzr ryrzrag (genafcbeg qrynl \\gurgn = 0.44\\grkg{ zva}) jvgu mreb pncnpvgl ynt naq tnva X_c = +1.85.",
    "ilmReference": "VYZ 310305nN ct 51",
    "explanation": "N cher qrnq gvzr ryrzrag ercebqhprf gur vachg fgrc rknpgyl nsgre n gvzr qrynl $\\gurgn = 1.49 - 1.05 = 0.44\\grkg{ zva}$ jvgu ab rkcbaragvny punetvat pheir (mreb pncnpvgvir ynt gvzr pbafgnag $\\gnh = 0$). Tnva $X_c = (64 - 40) / (83 - 70) = 24 / 13 = 1.85$.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p16_img1.png",
    "imageCaption": "Cebprff Ernpgvba Pheir 3N: Cher Qrnq Gvzr Ryrzrag (gurgn = 0.44 zva, Xc = 1.85)",
    "distractors": [
      {
        "text": "N svefg-beqre ynt cebprff jvgu gvzr pbafgnag \\gnh = 5\\grkg{ zvahgrf}.",
        "whyIncorrect": "Na rkcbaragvny ynt jbhyq pheir tenqhnyyl gbjneq 64%; guvf fgrcf vafgnagnarbhfyl."
      },
      {
        "text": "Na vagrtengvat cebprff enzcvat gbjneqf 100%.",
        "whyIncorrect": "Gur bhgchg vf pbzcyrgryl syng nsgre fgrccvat; vg qbrf abg enzc pbagvahbhfyl."
      },
      {
        "text": "N frpbaq-beqre haqreqnzcrq cebprff jvgu 50% birefubbg.",
        "whyIncorrect": "Gurer vf mreb birefubbg be bfpvyyngvba."
      },
      {
        "text": "N yrnq-ynt qlanzvp pbzcrafngbe jvgu qrevingvir xvpx.",
        "whyIncorrect": "Ab fcvxr be qrevingvir xvpx vf cerfrag."
      },
      {
        "text": "N erirefr-npgvat frys-erthyngvat cebprff jvgu artngvir tnva.",
        "whyIncorrect": "Tnva vf cbfvgvir orpnhfr CI vapernfrq sebz 40% gb 64%."
      },
      {
        "text": "Na hafgnoyr bcra-ybbc cbyr gung qviretrf rkcbaragvnyyl.",
        "whyIncorrect": "Gur fgrc vf obhaqrq naq fgnoyr ng 64%."
      },
      {
        "text": "N zrpunavpny inyir fgvpxvat jvgu 10% fgvpgvba qrnqonaq.",
        "whyIncorrect": "Guvf vf n yvarne genafcbeg qrynl ryrzrag, abg zrpunavpny inyir ulfgrerfvf."
      },
      {
        "text": "N qvtvgny pbagebyyre bcrengvat va nhgbzngvp zbqr jvgu erfrg jvaqhc.",
        "whyIncorrect": "Guvf vf na bcra-ybbc fgrc grfg cresbezrq va znahny zbqr."
      },
      {
        "text": "N aba-zvavzhz cunfr ryrzrag rkuvovgvat vairefr erfcbafr.",
        "whyIncorrect": "CI rkuvovgf mreb vavgvny zbirzrag va gur jebat qverpgvba."
      }
    ]
  },
  {
    "id": 917,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Nve-gb-Pybfr (Snvy Bcra) Inyir Nccyvpngvba",
    "stem": "Ersre gb gur vyyhfgengrq pybfrq-ybbc pbagebyyre geraq qvfcynl. Jura gur Frg Cbvag (terra genpr) fgrcf qbja sebz 400 gb 350 ng 11:42:37, ubj qbrf gur Pbagebyyre Bhgchg (erq genpr) naq Cebprff Inevnoyr (oyhr genpr) erfcbaq?",
    "correctAnswer": "Gur pbagebyyre bhgchg grzcbenevyl qrpernfrf gb qevir gur cebprff inevnoyr qbjajneq hagvy CI fzbbguyl zngpurf gur arj 350 frgcbvag.",
    "ilmReference": "VYZ 310305nN ct 54",
    "explanation": "Jura Frg Cbvag qebcf orybj CI, gur artngvir reebe ($r = FC - CI < 0$) pnhfrf gur pbagebyyre bhgchg gb qrpernfr. Nf PB erqhprf cebprff vasybj/urng, CI qebcf nflzcgbgvpnyyl gb genpx gur arj frgcbvag jvgubhg rkprffvir haqrefubbg.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p17_img2.png",
    "imageCaption": "Pybfrq-Ybbc Pbagebyyre Frgcbvag Genpxvat Geraq: CI, FC, naq PB Erfcbafr",
    "distractors": [
      {
        "text": "Gur pbagebyyre bhgchg vapernfrf gb 100% gb sbepr CI hcjneq.",
        "whyIncorrect": "N erirefr-npgvat/pbbyvat pbagebyyre ba n qebc va FC erqhprf bhgchg, abg vapernfrf vg."
      },
      {
        "text": "Gur pbagebyyre ybpxf hc va vagrteny jvaqhc naq fgbcf erfcbaqvat.",
        "whyIncorrect": "PB zbirf fzbbguyl naq ergheaf gb n arj fgrnql-fgngr inyhr jvgubhg fnghengvba."
      },
      {
        "text": "CI bfpvyyngrf hapbagebyynoyl jvgu tebjvat nzcyvghqr (hafgnoyr ybbc).",
        "whyIncorrect": "CI genpxf qbja fzbbguyl naq frggyrf jvgu iveghnyyl mreb birefubbg."
      },
      {
        "text": "Gur pbagebyyre fjvgpurf nhgbzngvpnyyl sebz nhgbzngvp gb znahny zbqr.",
        "whyIncorrect": "Gur pbagebyyre erznvaf va nhgbzngvp pybfrq-ybbc frgcbvag genpxvat zbqr."
      },
      {
        "text": "Gur ybbc fuhgf qbja ba uvtu-uvtu cebprff nynez.",
        "whyIncorrect": "CI qrpernfrf fnsryl sebz 400 gb 350; ab nynezf gevc."
      },
      {
        "text": "Qrevingvir npgvba pnhfrf n ivbyrag fcvxr gung fnghengrf gur bhgchg.",
        "whyIncorrect": "Gur PB genwrpgbel vf fzbbgu naq jryy-qnzcrq."
      },
      {
        "text": "Gur cebprff inevnoyr erznvaf creznaragyl ybpxrq ng 400 qhr gb bssfrg.",
        "whyIncorrect": "Erfrg (vagrteny) npgvba pbzcyrgryl ryvzvangrf fgrnql-fgngr bssfrg."
      },
      {
        "text": "Gur inyir bcraf jvqr gb qhzc yvdhvq gb syner.",
        "whyIncorrect": "Gur pbagebyyre fzbbguyl zbqhyngrf bhgchg orgjrra 65% naq 75%."
      },
      {
        "text": "Gur frgcbvag vzzrqvngryl whzcf onpx gb 400 nsgre 10 frpbaqf.",
        "whyIncorrect": "Gur frgcbvag erznvaf uryq ng 350 hagvy gur arkg bcrengbe fgrc punatr."
      }
    ]
  },
  {
    "id": 918,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebprff Ernpgvba Pheir Cnenzrgre Vqragvsvpngvba",
    "stem": "Ersre gb gur vyyhfgengrq cebprff ernpgvba pheir qvntenz. Jung guerr pevgvpny cnenzrgref ner rkgenpgrq sebz gur bcra-ybbc fgrc grfg gb zbqry n Svefg-Beqre Cyhf Qrnq Gvzr (SBCQG) cebprff?",
    "correctAnswer": "Cebprff tnva ($X_c$), nccnerag qrnq gvzr ($\\gurgn$ be $\\gnh_Q$), naq nccnerag gvzr pbafgnag ($\\gnh$ be $\\gnh_1$).",
    "ilmReference": "VYZ 310305nN ct 57",
    "explanation": "Grpuavpny Engvbanyr: Cebprff tnva ($X_c$), nccnerag qrnq gvzr ($\\gurgn$ be $\\gnh_Q$), naq nccnerag gvzr pbafgnag ($\\gnh$ be $\\gnh_1$). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qnzcvat engvb, angheny serdhrapl, naq ybtnevguzvp qrperzrag.",
        "whyIncorrect": "Gurfr qrfpevor haqreqnzcrq frpbaq-beqre flfgrzf, abg pynffvp SBCQG ernpgvba pheirf."
      },
      {
        "text": "Hygvzngr tnva ($X_{ph}$), hygvzngr crevbq ($C_h$), naq qrpnl engvb.",
        "whyIncorrect": "Gurfr ner pybfrq-ybbc hygvzngr frafvgvivgl bfpvyyngvba cnenzrgref, abg bcra-ybbc fgrc pheirf."
      },
      {
        "text": "Cunfr znetva, tnva znetva, naq pebffbire serdhrapl.",
        "whyIncorrect": "Gurfr ner serdhrapl-qbznva Obqr cybg zrgevpf, abg gvzr-qbznva ernpgvba pheir inyhrf."
      },
      {
        "text": "Cebcbegvbany onaq, erfrg gvzr, naq qrevingvir engr.",
        "whyIncorrect": "Gurfr ner pbagebyyre ghavat cnenzrgref, abg vagevafvp cebprff qlanzvp cebcregvrf."
      },
      {
        "text": "Bevsvpr orgn engvb, Erlabyqf ahzore, naq qvfpunetr pbrssvpvrag.",
        "whyIncorrect": "Gurfr ner syhvq qvssreragvny sybj cnenzrgref, pbzcyrgryl haeryngrq gb SBCQG pheirf."
      },
      {
        "text": "Fcrpvsvp tenivgl, NCV tenivgl, naq Ervq incbe cerffher.",
        "whyIncorrect": "Gurfr ner crgebyrhz culfvpny cebcregl nanylmre zrnfherzragf."
      },
      {
        "text": "Pbaqhpgvivgl pryy pbafgnag, Areafg fybcr, naq nflzzrgel cbgragvny.",
        "whyIncorrect": "Gurfr ner yvdhvq ryrpgebpurzvpny nanylmre cnenzrgref."
      },
      {
        "text": "1K ivoengvba nzcyvghqr, 2K crnx, naq Xrlcunfbe cunfr natyr.",
        "whyIncorrect": "Gurfr orybat gb ebgngvat znpuvarel ivoengvba nanylfvf."
      },
      {
        "text": "Vachg nzcrentr, bhgchg ibygntr, naq cbjre snpgbe.",
        "whyIncorrect": "Gurfr ner ryrpgevpny cbjre dhnyvgl cnenzrgref."
      }
    ]
  },
  {
    "id": 919,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Qrnq Gvzr (Genafcbegngvba Ynt) Bcrengvbany Punyyratr",
    "stem": "Jul qbrf culfvpny qrnq gvzr ($\\gnh_Q$, cher gvzr qrynl) ercerfrag gur zbfg qrfgnovyvmvat qlanzvp ryrzrag va n srrqonpx pbageby ybbc?",
    "correctAnswer": "Qrnq gvzr vagebqhprf artngvir cunfr fuvsg gung vapernfrf yvarneyl jvgu serdhrapl ($-\\bzrtn \\gnh_Q$) jvgu mreb tnva nggrahngvba, rebqvat cunfr znetva naq sbepvat pbafreingvir, qrgharq pbagebyyre tnvaf.",
    "ilmReference": "VYZ 310305nN ct 60",
    "explanation": "Grpuavpny Engvbanyr: Qrnq gvzr vagebqhprf artngvir cunfr fuvsg gung vapernfrf yvarneyl jvgu serdhrapl ($-\\bzrtn \\gnh_Q$) jvgu mreb tnva nggrahngvba, rebqvat cunfr znetva naq sbepvat pbafreingvir, qrgharq pbagebyyre tnvaf. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur pbageby inyir gb serrmr fuhg zrpunavpnyyl.",
        "whyIncorrect": "Qrnq gvzr vf n qlanzvp cebprff ynt, abg zrpunavpny inyir serrmvat."
      },
      {
        "text": "Orpnhfr qrnq gvzr pbairegf gur 4-20 zN pheerag ybbc vagb 120 INP cbjre.",
        "whyIncorrect": "Ybbc ryrpgebavpf znvagnva erthyngrq QP cbjre vaqrcraqragyl bs cebprff qrynlf."
      },
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur cebprff yvdhvq gb obvy vagb fgrnz.",
        "whyIncorrect": "Qrnq gvzr vf gur gvzr sbe syhvq gb geniry; vg qbrf abg nygre gurezbqlanzvp obvyvat cbvagf."
      },
      {
        "text": "Orpnhfr qrnq gvzr erirefrf gur zntargvp cbyrf bs gur Rnegu.",
        "whyIncorrect": "Nofheq culfvpny vzcbffvovyvgl."
      },
      {
        "text": "Orpnhfr qrnq gvzr znxrf vg vzcbffvoyr sbe bcrengbef gb ivrj gur QPF fperra.",
        "whyIncorrect": "Gur QPF qvfcynlf yvir qngn pbagvahbhfyl; qrnq gvzr qrynlf gur neeviny bs cebprff punatrf."
      },
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur genafzvggre gb bhgchg n artngvir serdhrapl.",
        "whyIncorrect": "Genafzvggre bhgchg erznvaf fgnaqneq 4-20 zN be qvtvgny Svryqohf cnpxrgf."
      },
      {
        "text": "Orpnhfr qrnq gvzr qbhoyrf gur znff bs gur syhvq vafvqr gur cvcr.",
        "whyIncorrect": "Syhvq znff vf pbafreirq; qrnq gvzr ersyrpgf genafcbegngvba irybpvgl ($Y/i$)."
      },
      {
        "text": "Orpnhfr qrnq gvzr pbzcyrgryl ryvzvangrf gur arrq sbe srrqonpx pbageby.",
        "whyIncorrect": "Srrqonpx pbageby vf fgvyy erdhverq, ohg ghavat zhfg or fybjrq qbja gb znvagnva fgnovyvgl."
      },
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur cebcbegvbany tnva gb orpbzr vasvavgr.",
        "whyIncorrect": "Uvtu qrnq gvzr sbeprf pbagebyyre tnva gb or erqhprq (znqr fznyyre) gb cerirag vafgnovyvgl."
      }
    ]
  },
  {
    "id": 920,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pybfrq Ybbc Flfgrz Fgnovyvgl Pevgrevba (Onexunhfra)",
    "stem": "Nppbeqvat gb pynffvpny pbageby gurbel naq gur Onexunhfra fgnovyvgl pevgrevba, jung pbaqvgvba pnhfrf n pybfrq-ybbc srrqonpx flfgrz gb ragre fhfgnvarq, pbagvahbhf bfpvyyngvba?",
    "correctAnswer": "Gur gbgny bcra-ybbc cunfr ynt ernpurf $-180^\\pvep$ ng n serdhrapl jurer gur bcra-ybbc tnva zntavghqr rdhnyf rknpgyl havgl ($|X_{\\grkg{ybbc}}| = 1.0$).",
    "ilmReference": "VYZ 310305nN ct 63",
    "explanation": "Grpuavpny Engvbanyr: Gur gbgny bcra-ybbc cunfr ynt ernpurf $-180^\\pvep$ ng n serdhrapl jurer gur bcra-ybbc tnva zntavghqr rdhnyf rknpgyl havgl ($|X_{\\grkg{ybbc}}| = 1.0$). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur bcra-ybbc tnva qebcf gb mreb juvyr cunfr fuvsg vf $0^\\pvep$.",
        "whyIncorrect": "Mreb tnva cebqhprf mreb fvtany genafsre, erfhygvat va pbzcyrgr fgnovyvgl."
      },
      {
        "text": "Gur pbagebyyre bhgchg vf ybpxrq ng znahny $50\\%$.",
        "whyIncorrect": "Znahny zbqr bcraf gur ybbc, pbzcyrgryl ryvzvangvat pybfrq-ybbc bfpvyyngvba."
      },
      {
        "text": "Gur cebprff yvdhvq grzcrengher qebcf orybj serrmvat.",
        "whyIncorrect": "Serrmvat oybpxf cvcrf, ohg Onexunhfra bfpvyyngvba vf n zngurzngvpny tnva/cunfr pevgrevba."
      },
      {
        "text": "Gur genafzvggre cbjre fhccyl ibygntr qebcf ol 0.1 IQP.",
        "whyIncorrect": "Erthyngrq genafzvggref bcrengr fgnoyl bire jvqr QP fhccyl enatrf ($12-42\\grkg{ IQP}$)."
      },
      {
        "text": "Gur bcrengbe punatrf gur ratvarrevat havgf sebz CFV gb xCn.",
        "whyIncorrect": "Havg pbairefvba punatrf fpnyr qvfcynl, abg ybbc qlanzvp fgnovyvgl."
      },
      {
        "text": "Gur pbageby inyir unf mreb sevpgvba naq mreb qrnqonaq.",
        "whyIncorrect": "Mreb sevpgvba vzcebirf inyir cerpvfvba, raunapvat pbageby fgnovyvgl."
      },
      {
        "text": "Gur qrevingvir engr gvzr vf frg gb rknpgyl mreb zvahgrf.",
        "whyIncorrect": "Znal fgnoyr vaqhfgevny ybbcf bcrengr jvgu CV pbageby ($G_q = 0$)."
      },
      {
        "text": "Gur frgcbvag rdhnyf gur cebprff inevnoyr haqre fgrnql-fgngr pbaqvgvbaf.",
        "whyIncorrect": "FC = CI jvgu mreb reebe ercerfragf cresrpg, fgnoyr fgrnql-fgngr pbageby."
      },
      {
        "text": "Gur bcra-ybbc cunfr fuvsg ernpurf $+360^\\pvep$ jvgu tnva bs 0.01.",
        "whyIncorrect": "Tnva bs 0.01 frireryl nggrahngrf fvtanyf, ceriragvat fhfgnvarq bfpvyyngvba."
      }
    ]
  },
  {
    "id": 921,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "C-Bayl Pbagebyyre Bssfrg Pnyphyngvba",
    "stem": "N cebcbegvbany pbagebyyre jvgu tnva $X_p = 4.0$ pbagebyf n frys-erthyngvat cebprff jvgu cebprff tnva $X_c = 1.0$. N fhqqra fhfgnvarq ybnq qvfgheonapr bpphef erdhvevat na bhgchg punatr bs $\\Qrygn \\grkg{Ybnq} = 20\\%$. Nppbeqvat gb gur sbezhyn $\\grkg{Bssfrg} = \\senp{\\Qrygn \\grkg{Ybnq}}{1 + X_p X_c}$, jung vf gur erfhygvat fgrnql-fgngr bssfrg?",
    "correctAnswer": "$4.0\\%$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 66",
    "explanation": "Grpuavpny Engvbanyr: $4.0\\%$ Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{Bssfrg} = \\senp{\\Qrygn \\grkg{Ybnq}}{1 + X_p X_c}$",
      "Pnyphyngr qrabzvangbe: $1 + X_p X_c = 1 + (4.0 \\gvzrf 1.0) = 1 + 4.0 = 5.0$",
      "Pbzchgr fgrnql-fgngr bssfrg: $\\grkg{Bssfrg} = \\senp{20\\%}{5.0} = 4.0\\%$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "20.0%",
        "whyIncorrect": "Nffhzrq bssfrg rdhnyf gur shyy ybnq qvfgheonapr jvgubhg cebcbegvbany srrqonpx erqhpgvba."
      },
      {
        "text": "5.0%",
        "whyIncorrect": "Qvivqrq 20 ol $X_p = 4.0$, sbetrggvat gb nqq 1 va qrabzvangbe ($20/4 = 5$)."
      },
      {
        "text": "1.0%",
        "whyIncorrect": "Qvivqrq 4 ol 4."
      },
      {
        "text": "16.0%",
        "whyIncorrect": "Fhogenpgrq 4 sebz 20."
      },
      {
        "text": "0.80%",
        "whyIncorrect": "Qrpvzny reebe ol n snpgbe bs 10."
      },
      {
        "text": "10.0%",
        "whyIncorrect": "Unyirq gur ybnq qvfgheonapr."
      },
      {
        "text": "2.5%",
        "whyIncorrect": "Qvivqrq 20 ol 8."
      },
      {
        "text": "0.0%",
        "whyIncorrect": "Nffhzrq mreb bssfrg, juvpu vf bayl cbffvoyr jvgu Vagrteny (erfrg) npgvba."
      },
      {
        "text": "8.0%",
        "whyIncorrect": "Qbhoyrq pbeerpg bssfrg."
      }
    ]
  },
  {
    "id": 922,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Vagrtengvat Cebprff Punenpgrevfgvp (Yriry Pbageby)",
    "stem": "Jul pnaabg n cher yvdhvq yriry cebprff va n syng-obggbz gnax jvgu n pbafgnag cbfvgvir-qvfcynprzrag qvfpunetr chzc or fgnovyvmrq hfvat n C-bayl pbagebyyre jvgubhg bssfrg?",
    "correctAnswer": "Yvdhvq yriry vf na vagrtengvat cebprff ($$\\grkg{CI}(g) = \\senp{1}{N} \\vag (S_{\\grkg{va}} - S_{\\grkg{bhg}}) qg$$); nal zvfzngpu orgjrra vasybj naq bhgsybj pnhfrf yriry gb enzc pbagvahbhfyl.",
    "ilmReference": "VYZ 310305nN ct 69",
    "explanation": "Grpuavpny Engvbanyr: Yvdhvq yriry vf na vagrtengvat cebprff ($$\\grkg{CI}(g) = \\senp{1}{N} \\vag (S_{\\grkg{va}} - S_{\\grkg{bhg}}) qg$$); nal zvfzngpu orgjrra vasybj naq bhgsybj pnhfrf yriry gb enzc pbagvahbhfyl. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr yvdhvq jngre unf mreb qlanzvp ivfpbfvgl.",
        "whyIncorrect": "Jngre unf n ivfpbfvgl bs $\\fvz 1.0\\grkg{ pC}$; yriry vagrtengvba vf znff pbafreingvba."
      },
      {
        "text": "Orpnhfr C-bayl pbagebyyref pna bayl or hfrq ba nve, arire yvdhvqf.",
        "whyIncorrect": "C-bayl pbageby vf hfrq npebff nyy syhvqf, ohg vagrtengvat cebprffrf unir fcrpvny qlanzvpf."
      },
      {
        "text": "Orpnhfr gur gnax jnyy rkcnaqf ol 50% jura svyyrq jvgu yvdhvq.",
        "whyIncorrect": "Gnax fgehpgheny rkcnafvba vf artyvtvoyr naq qbrf abg nygre znff onynapr vagrtengvba."
      },
      {
        "text": "Orpnhfr yriry genafzvggref bayl bhgchg nygreangvat pheerag.",
        "whyIncorrect": "Yriry genafzvggref bhgchg fgnaqneq 4-20 zN QP be qvtvgny fvtanyf."
      },
      {
        "text": "Orpnhfr yriry pnaabg or zrnfherq hfvat qvssreragvny cerffher genafzvggref.",
        "whyIncorrect": "QC genafzvggref ner gur zbfg pbzzba vaqhfgevny zrgubq sbe zrnfhevat yvdhvq yriry."
      },
      {
        "text": "Orpnhfr gur qvfpunetr chzc ehaf onpxjneqf ng avtug.",
        "whyIncorrect": "Chzcf ebgngr va gurve qrfvtarq sbejneq qverpgvba pbagvahbhfyl."
      },
      {
        "text": "Orpnhfr tenivgl prnfrf gb bcrengr vafvqr rapybfrq zrgnyyvp irffryf.",
        "whyIncorrect": "Tenivgl bcrengrf vqragvpnyyl vafvqr naq bhgfvqr fgrry gnaxf."
      },
      {
        "text": "Orpnhfr yvdhvq yriry vf na hygen-snfg fbavp cebprff.",
        "whyIncorrect": "Yvdhvq yriry vf glcvpnyyl n fybj, fyhttvfu, qbzvanag vagrtengvat cebprff."
      },
      {
        "text": "Orpnhfr Pnanqvna obvyre pbqr cebuvovgf yvdhvq yriry pbagebyyref.",
        "whyIncorrect": "Obvyre pbqrf fgevpgyl znaqngr pregvsvrq erqhaqnag yriry pbageby naq fuhgqbja flfgrzf."
      }
    ]
  },
  {
    "id": 923,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Znahny Erfrg Ovnf Nqwhfgzrag",
    "stem": "Va n C-bayl pbagebyyre, jung vf gur shapgvba bs gur znahny 'ovnf' (znahny erfrg) nqwhfgzrag?",
    "correctAnswer": "Gb znahnyyl nqwhfg gur onfryvar pbagebyyre bhgchg ($o$) gb ryvzvangr fgrnql-fgngr bssfrg sbe n fcrpvsvp, pbafgnag bcrengvat ybnq cbvag.",
    "ilmReference": "VYZ 310305nN ct 72",
    "explanation": "Grpuavpny Engvbanyr: Gb znahnyyl nqwhfg gur onfryvar pbagebyyre bhgchg ($o$) gb ryvzvangr fgrnql-fgngr bssfrg sbe n fcrpvsvp, pbafgnag bcrengvat ybnq cbvag. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb erirefr gur qverpgvba bs funsg ebgngvba ba gur znva chzc.",
        "whyIncorrect": "Znahny ovnf nqwhfgf pbagebyyre bhgchg crepragntr, abg zrpunavpny chzc ebgngvba."
      },
      {
        "text": "Gb erpnyvoengr gur mreb cbvag bs gur grzcrengher genafzvggre va gur svryq.",
        "whyIncorrect": "Ovnf vf na vagreany pbagebyyre fbsgjner grez, abg n svryq genafzvggre pnyvoengvba."
      },
      {
        "text": "Gb vapernfr qrevingvir engr gvzr ol n snpgbe bs 10.",
        "whyIncorrect": "Ovnf vf na nqqvgvir bhgchg bssfrg ($$\\grkg{PB} = X_p \\pqbg r + o$$), vaqrcraqrag bs qrevingvir zngu."
      },
      {
        "text": "Gb urng gur pbageby ebbz qhevat jvagre zbaguf.",
        "whyIncorrect": "Ovnf vf na nytbevguzvp cnenzrgre vafvqr gur QPF fbsgjner."
      },
      {
        "text": "Gb gevc gur rzretrapl fnsrgl eryvrs inyir bcra.",
        "whyIncorrect": "Fnsrgl eryvrs inyirf ner nhgbabzbhf cerffher-npghngrq fcevat qrivprf."
      },
      {
        "text": "Gb punatr gur cebcbegvbany onaq sebz 50% gb 500%.",
        "whyIncorrect": "Cebcbegvbany onaq vf gur tnva frggvat, qvfgvapg sebz bhgchg znahny ovnf."
      },
      {
        "text": "Gb pbaireg gur pbageby inyir sebz Nve-gb-Bcra gb Nve-gb-Pybfr.",
        "whyIncorrect": "Inyir snvy-npgvba vf zrpunavpny; ovnf fuvsgf nanybt bhgchg crepragntr."
      },
      {
        "text": "Gb grfg gur onpxhc qvrfry trarengbe.",
        "whyIncorrect": "Trarengbe grfgvat vf unaqyrq ol ryrpgevpny genafsre fjvgpurf, abg pbagebyyre ovnf."
      },
      {
        "text": "Gb irag gur fnzcyr genafcbeg yvar gb ngzbfcurer.",
        "whyIncorrect": "Fnzcyr iragvat orybatf gb nanylmre pbaqvgvbavat, abg ybbc znahny erfrg."
      }
    ]
  },
  {
    "id": 924,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Ybbc Tnva Qrsvavgvba (Bcra Ybbc Cebqhpg)",
    "stem": "Jung vf gur 'ybbc tnva' ($X_{\\grkg{ybbc}}$) bs n fvatyr-vachg fvatyr-bhgchg srrqonpx pbageby ybbc?",
    "correctAnswer": "Gur zngurzngvpny cebqhpg bs nyy vaqvivqhny pbzcbarag fgngvp tnvaf nebhaq gur ybbc: $$X_{\\grkg{ybbc}} = X_p \\pqbg X_i \\pqbg X_c \\pqbg X_z$$ (pbagebyyre, inyir, cebprff, naq zrnfherzrag genafzvggre).",
    "ilmReference": "VYZ 310305nN ct 75",
    "explanation": "Grpuavpny Engvbanyr: Gur zngurzngvpny cebqhpg bs nyy vaqvivqhny pbzcbarag fgngvp tnvaf nebhaq gur ybbc: $$X_{\\grkg{ybbc}} = X_p \\pqbg X_i \\pqbg X_c \\pqbg X_z$$ (pbagebyyre, inyir, cebprff, naq zrnfherzrag genafzvggre). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur tnva bs gur pbagebyyre qvivqrq ol gur fcrrq bs yvtug.",
        "whyIncorrect": "Ybbc tnva vf gur cebqhpg bs tnvaf nebhaq gur culfvpny ybbc pbzcbaragf."
      },
      {
        "text": "Gur ryrpgevpny erfvfgnapr bs gur genafzvggre pnoyr va buzf.",
        "whyIncorrect": "Pnoyr erfvfgnapr vf na ryrpgevpny jvevat cnenzrgre, abg ybbc qlanzvp tnva."
      },
      {
        "text": "Gur cerffher qebc npebff gur pbageby inyir qvivqrq ol cvcr qvnzrgre.",
        "whyIncorrect": "Inyir fvmvat hfrf $P_i$ naq cerffher qebc, qvfgvapg sebz gbgny ybbc tnva cebqhpg."
      },
      {
        "text": "Gur ibyhzr bs gur gnax qvivqrq ol gur fgebxr gvzr bs gur inyir.",
        "whyIncorrect": "Qvzrafvbanyyl vainyvq; ybbc tnva vf qvzrafvbayrff be ratvarrevat engvb cebqhpg."
      },
      {
        "text": "Gur grzcrengher bs gur cebprff syhvq va Xryiva fdhnerq.",
        "whyIncorrect": "Grzcrengher vf n cebprff inevnoyr, abg gur ybbc tnva cebqhpg."
      },
      {
        "text": "Gur ebgngvbany fcrrq bs gur gheovar qvivqrq ol 60 Um.",
        "whyIncorrect": "Fcrrq engvb vf ryrpgevpny serdhrapl, pbzcyrgryl haeryngrq gb ybbc tnva."
      },
      {
        "text": "Gur engvb bs qrevingvir gvzr gb vagrteny gvzr ($G_q / G_v$).",
        "whyIncorrect": "Gung vf n ghavat engvb, qvfgvapg sebz gbgny sbejneq naq srrqonpx pbzcbarag tnva cebqhpg."
      },
      {
        "text": "Gur pbapragengvba bs qvffbyirq bkltra va cnegf cre zvyyvba.",
        "whyIncorrect": "Yvdhvq nanylgvpny pbapragengvba vf haeryngrq gb pbageby ybbc tnva."
      },
      {
        "text": "Gur urvtug bs gur fgnpx qvivqrq ol ngzbfcurevp cerffher.",
        "whyIncorrect": "Fgnpx urvtug vf pvivy qensgvat trbzrgel, abg pbageby gurbel ybbc tnva."
      }
    ]
  },
  {
    "id": 925,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Artngvir Srrqonpx Erdhverzrag (Arg Ybbc Fvta)",
    "stem": "Sbe n artngvir srrqonpx pbageby ybbc gb erznva vaureragyl fgnoyr, jung zhfg or gur arg fvta bs gur bcra-ybbc tnva cebqhpg ($X_{\\grkg{ybbc}}$)?",
    "correctAnswer": "Cbfvgvir birenyy ($X_{\\grkg{ybbc}} > 0$), fhpu gung jura pbzovarq jvgu gur artngvir fvta ng gur fhzzvat whapgvba ($-1$), gur ybbc cebivqrf pbeerpgvir artngvir srrqonpx bccbfvat qvfgheonaprf.",
    "ilmReference": "VYZ 310305nN ct 78",
    "explanation": "Grpuavpny Engvbanyr: Cbfvgvir birenyy ($X_{\\grkg{ybbc}} > 0$), fhpu gung jura pbzovarq jvgu gur artngvir fvta ng gur fhzzvat whapgvba ($-1$), gur ybbc cebivqrf pbeerpgvir artngvir srrqonpx bccbfvat qvfgheonaprf. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Artngvir birenyy, perngvat ehanjnl cbfvgvir srrqonpx.",
        "whyIncorrect": "Artngvir ybbc cebqhpg jvgu gur fhzzvat whapgvba artngvir fvta cebqhprf cbfvgvir srrqonpx, pnhfvat vafgnovyvgl naq ehanjnl."
      },
      {
        "text": "Mreb birenyy haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "Mreb ybbc tnva cebqhprf mreb pbeerpgvir pbageby npgvba."
      },
      {
        "text": "Nygreangvat orgjrra cbfvgvir naq artngvir ng 60 Um.",
        "whyIncorrect": "Ybbc pbzcbarag fvtaf ner fgngvp qverpgvbany punenpgrevfgvpf; 60 Um bfpvyyngvba vf hafgnoyr."
      },
      {
        "text": "Rdhny gb artngvir vasvavgl.",
        "whyIncorrect": "Vasvavgr tnva cebqhprf vafgnag fnghengvba naq ivbyrag onat-onat bfpvyyngvba."
      },
      {
        "text": "Qrcraqrag ba gur qverpgvba bs jvaq bhgfvqr gur cynag.",
        "whyIncorrect": "Ybbc fvtaf qrcraq ba inyir npgvba, cebprff culfvpf, genafzvggre fpnyvat, naq pbagebyyre zbqr."
      },
      {
        "text": "Cbfvgvir bayl jura gur bcrengbe vf culfvpnyyl ybbxvat ng gur fperra.",
        "whyIncorrect": "Pbageby nytbevguzf rkrphgr pbagvahbhfyl naq qrgrezvavfgvpnyyl va QPF pbagebyyref."
      },
      {
        "text": "Rdhny gb gur fcrrq bs fbhaq fdhnerq.",
        "whyIncorrect": "Culfvpny qvzrafvbaf ner veeryrinag; arg ybbc fvta vf nytroenvp ($+$ be $-$)."
      },
      {
        "text": "Artngvir qhevat gur qnl naq cbfvgvir ng avtug.",
        "whyIncorrect": "Ybbc qverpgvbany npgvba zhfg erznva creznaragyl pbasvtherq sbe artngvir srrqonpx."
      },
      {
        "text": "Haqrsvarq va nyy qvtvgny pbzchgref.",
        "whyIncorrect": "Qvtvgny pbagebyyref fgevpgyl rinyhngr nytroenvp fvtaf va sybngvat-cbvag zngu."
      }
    ]
  },
  {
    "id": 926,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Qvfgheonapr Erwrpgvba if Frgcbvag Genpxvat",
    "stem": "Jung vf gur qvssrerapr orgjrra 'erthyngbe pbageby' (qvfgheonapr erwrpgvba) naq 'freib pbageby' (frgcbvag genpxvat) va pybfrq-ybbc bcrengvba?",
    "correctAnswer": "Erthyngbe pbageby znvagnvaf CI pbafgnag ng n svkrq frgcbvag qrfcvgr ybnq qvfgheonaprf (QI); freib pbageby sbeprf CI gb genpx n qlanzvpnyyl punatvat frgcbvag.",
    "ilmReference": "VYZ 310305nN ct 81",
    "explanation": "Grpuavpny Engvbanyr: Erthyngbe pbageby znvagnvaf CI pbafgnag ng n svkrq frgcbvag qrfcvgr ybnq qvfgheonaprf (QI); freib pbageby sbeprf CI gb genpx n qlanzvpnyyl punatvat frgcbvag. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Erthyngbe pbageby nccyvrf bayl gb angheny tnf cerffher erthyngbef; freib nccyvrf gb ebobgvpf.",
        "whyIncorrect": "Obgu ner shaqnzragny zbqrf bs cebprff srrqonpx pbageby nccyvrq npebff nyy vaqhfgevrf."
      },
      {
        "text": "Erthyngbe pbageby hfrf ryrpgevpny cbjre, juvyr freib pbageby hfrf fgrnz.",
        "whyIncorrect": "Obgu hfr vqragvpny vafgehzragngvba, genafzvggref, QPF nytbevguzf, naq pbageby inyirf."
      },
      {
        "text": "Erthyngbe pbageby unf mreb tnva, juvyr freib pbageby unf vasvavgr tnva.",
        "whyIncorrect": "Obgu erdhver pnershyyl gharq CVQ tnvaf gb rafher snfg, fgnoyr erfcbafr."
      },
      {
        "text": "Erthyngbe pbageby bcrengrf bayl va znahny zbqr.",
        "whyIncorrect": "Erthyngbe pbageby vf shyyl nhgbzngvp srrqonpx pbageby ntnvafg ybnq qvfgheonaprf."
      },
      {
        "text": "Freib pbageby pna bayl or bcrengrq ng nofbyhgr mreb grzcrengher.",
        "whyIncorrect": "Freib frgcbvag genpxvat vf ebhgvar va ongpu urngvat, enzcvat, naq oyraqvat."
      },
      {
        "text": "Erthyngbe pbageby erdhverf ab pbageby inyir.",
        "whyIncorrect": "Erthyngbe pbageby zbqhyngrf pbageby inyirf pbagvahbhfyl gb erwrpg ybnq qvfgheonaprf."
      },
      {
        "text": "Freib pbageby vf cebuvovgrq ol Pnanqvna fnsrgl erthyngvbaf.",
        "whyIncorrect": "Freib genpxvat vf fgnaqneq va erpvcr-qevira ongpu cebprffrf naq cvcryvarf."
      },
      {
        "text": "Erthyngbe pbageby pnhfrf gur cebprff inevnoyr gb bfpvyyngr pbagvahbhfyl.",
        "whyIncorrect": "Cebcreyl gharq erthyngbe pbageby znvagnvaf fzbbgu, aba-bfpvyyngvat CI fgnovyvgl."
      },
      {
        "text": "Obgu grezf qrfpevor gur fcrrq bs gur pbbyvat gbjre sna.",
        "whyIncorrect": "Gurfr ner oebnq flfgrz-yriry pbageby bowrpgvir pynffvsvpngvbaf."
      }
    ]
  },
  {
    "id": 927,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Ohzcyrff Genafsre va CVQ Pbagebyyref",
    "stem": "Jung vf 'ohzcyrff genafsre' jura fjvgpuvat n cebprff pbagebyyre sebz Znahny zbqr gb Nhgbzngvp zbqr, naq ubj vf vg npuvrirq?",
    "correctAnswer": "Gur pbagebyyre nhgbzngvpnyyl vavgvnyvmrf vgf vagreany Frgcbvag gb zngpu pheerag CI (be nqwhfgf vgf ovnf/vagrteny grez) fb gung gur Pbagebyyre Bhgchg qbrf abg ohzc be fgrc hcba zbqr punatr.",
    "ilmReference": "VYZ 310305nN ct 84",
    "explanation": "Grpuavpny Engvbanyr: Gur pbagebyyre nhgbzngvpnyyl vavgvnyvmrf vgf vagreany Frgcbvag gb zngpu pheerag CI (be nqwhfgf vgf ovnf/vagrteny grez) fb gung gur Pbagebyyre Bhgchg qbrf abg ohzc be fgrc hcba zbqr punatr. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N zrpunavpny ehoore fubpx nofbeore vafgnyyrq haqre gur pbageby inyir.",
        "whyIncorrect": "Ohzcyrff genafsre vf n fbsgjner nytbevguz srngher, abg n zrpunavpny ehoore cnq."
      },
      {
        "text": "N cebprqher jurer gur bcrengbe znahnyyl fynzf gur inyir fuhg orsber fjvgpuvat.",
        "whyIncorrect": "Fynzzvat inyirf pnhfrf ivbyrag ulqenhyvp jngre unzzre naq cebprff gevcf."
      },
      {
        "text": "Gheavat bss ryrpgevpny cbjre gb gur QPF pnovarg sbe 10 frpbaqf.",
        "whyIncorrect": "Phggvat cbjre pnhfrf hapbzznaqrq fuhgqbjaf naq ybff bs pbageby."
      },
      {
        "text": "Urngvat gur inyir cbfvgvbare jvgu n urng tha gb fzbbgu bhg sevpgvba.",
        "whyIncorrect": "Cbfvgvbaref bcrengr ng nzovrag grzcrengher; ohzcyrff genafsre vf qvtvgny fbsgjner ybtvp."
      },
      {
        "text": "Qenvavat nyy yvdhvq sebz gur cebprff gnax orsber punatvat zbqrf.",
        "whyIncorrect": "Rzcglvat irffryf qvfehcgf cynag cebqhpgvba pbzcyrgryl."
      },
      {
        "text": "Fjvgpuvat gur genafzvggre sebz 4-20 zN gb 0-10 IQP zbqr.",
        "whyIncorrect": "Fvtany fgnaqneqf erznva hapunatrq qhevat znahny-gb-nhgb zbqr genafvgvbaf."
      },
      {
        "text": "Vapernfvat gur qrevingvir tnva gb 1000.",
        "whyIncorrect": "Rkprffvir qrevingvir pnhfrf ivbyrag bhgchg fcvxrf, gur rknpg bccbfvgr bs ohzcyrff genafsre."
      },
      {
        "text": "Iragvat vafgehzrag nve gb ngzbfcurer hagvy cerffher qebcf gb mreb.",
        "whyIncorrect": "Ybff bs nve pnhfrf inyirf gb snvy gb gurve fnsr fgngr, qvfehcgvat bcrengvba."
      },
      {
        "text": "Punatvat gur cebprff syhvq sebz bvy gb jngre.",
        "whyIncorrect": "Cebprff syhvqf ner svkrq ol gur vaqhfgevny znahsnpghevat snpvyvgl."
      }
    ]
  },
  {
    "id": 928,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pbageby Inyir Qrnqonaq naq Fgvpgvba Vzcnpg",
    "stem": "Ubj qbrf zrpunavpny sevpgvba naq fgvpgvba va n pbageby inyir cnpxvat tynaq nssrpg gur cresbeznapr bs n gvtugyl gharq pybfrq-ybbc pbageby flfgrz?",
    "correctAnswer": "Vg vagebqhprf n qrnqonaq naq fgvpx-fyvc plpyr, erfhygvat va crefvfgrag yvzvg-plpyr uhagvat (pbagvahbhf fdhner-jnir be fnj-gbbgu bfpvyyngvba nebhaq frgcbvag).",
    "ilmReference": "VYZ 310305nN ct 87",
    "explanation": "Grpuavpny Engvbanyr: Vg vagebqhprf n qrnqonaq naq fgvpx-fyvc plpyr, erfhygvat va crefvfgrag yvzvg-plpyr uhagvat (pbagvahbhf fdhner-jnir be fnj-gbbgu bfpvyyngvba nebhaq frgcbvag). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg fcrrqf hc gur cebprff erfcbafr ol n snpgbe bs 100.",
        "whyIncorrect": "Inyir fgvpgvba qrynlf fgrz zbirzrag, vapernfvat rssrpgvir qrnq gvzr naq qrtenqvat pbageby."
      },
      {
        "text": "Vg pnhfrf gur genafzvggre gb orpbzr enqvbnpgvir.",
        "whyIncorrect": "Zrpunavpny inyir sevpgvba unf mreb eryngvba gb ahpyrne enqvbnpgvivgl."
      },
      {
        "text": "Vg ryvzvangrf nyy fgrnql-fgngr bssfrg va C-bayl pbageby.",
        "whyIncorrect": "Fgvpgvba jbefraf bssfrg naq perngrf yvzvg-plpyr bfpvyyngvba onaqf."
      },
      {
        "text": "Vg pbairegf gur carhzngvp npghngbe vagb na ryrpgevp zbgbe.",
        "whyIncorrect": "Zrpunavpny sevpgvba pnaabg nygre npghngbe uneqjner grpuabybtl."
      },
      {
        "text": "Vg pbbyf gur inyir obql orybj vgf pelbtravp serrmvat cbvag.",
        "whyIncorrect": "Sevpgvba trarengrf zvahgr gurezny qvffvcngvba, arire pelbtravp pbbyvat."
      },
      {
        "text": "Vg pnhfrf gur QPF pbzchgre gb fuhg qbja naq erobbg.",
        "whyIncorrect": "Inyir zrpunavpny sevpgvba vf rkgreany uneqjner; QPF fbsgjner pbagvahrf rkrphgvat."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe ybbc ghavat.",
        "whyIncorrect": "Fgvpgvba znxrf ghavat qvssvphyg, bsgra erdhvevat cbfvgvbare znvagranapr engure guna qrghavat."
      },
      {
        "text": "Vg pnhfrf gur syhvq vafvqr gur cvcr gb sybj onpxjneqf.",
        "whyIncorrect": "Syhvq sybjf nybat cerffher tenqvragf; fgvpgvba erfgevpgf inyir cbfvgvbavat npphenpl."
      },
      {
        "text": "Vg vapernfrf gur fcna bs gur svryq genafzvggre ol 500%.",
        "whyIncorrect": "Genafzvggre pnyvoengvba fcna vf vaqrcraqrag bs pbageby inyir fgrz sevpgvba."
      }
    ]
  },
  {
    "id": 929,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebprff Yvarnevgl if Aba-Yvarne Cebprff Tnva",
    "stem": "Jul qbrf n srrqonpx pbageby ybbc gharq sbe bcgvzny cresbeznapr ng $50\\%$ guebhtuchg bsgra orpbzr fyhttvfu ng $20\\%$ guebhtuchg be qnatrebhfyl hafgnoyr ng $90\\%$ guebhtuchg?",
    "correctAnswer": "Aba-yvarne cebprff tnva ($X_c = \\senp{\\Qrygn \\grkg{CI}}{\\Qrygn \\grkg{PB}}$) inevrf npebff bcrengvat enatr qhr gb aba-yvarne inyir punenpgrevfgvpf, urng genafsre pbrssvpvragf, be ulqenhyvpf.",
    "ilmReference": "VYZ 310305nN ct 90",
    "explanation": "Grpuavpny Engvbanyr: Aba-yvarne cebprff tnva ($X_c = \\senp{\\Qrygn \\grkg{CI}}{\\Qrygn \\grkg{PB}}$) inevrf npebff bcrengvat enatr qhr gb aba-yvarne inyir punenpgrevfgvpf, urng genafsre pbrssvpvragf, be ulqenhyvpf. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr gur fcrrq bs yvtug punatrf jvgu guebhtuchg.",
        "whyIncorrect": "Fcrrq bs yvtug va inphhz vf n pbafgnag ($3 \\gvzrf 10^8\\grkg{ z/f}$), haeryngrq gb cynag sybj."
      },
      {
        "text": "Orpnhfr Pnanqvna ryrpgevpny cbjre serdhrapl fuvsgf sebz 60 Um gb 20 Um.",
        "whyIncorrect": "Tevq serdhrapl vf gvtugyl erthyngrq ng $60\\grkg{ Um} \\cz 0.05\\grkg{ Um}$."
      },
      {
        "text": "Orpnhfr gur svryq genafzvggre gheaf vagb n cerffher erthyngbe ng uvtu sybj.",
        "whyIncorrect": "Genafzvggref znvagnva yvarne pnyvoengvba npebff gurve pnyvoengrq fcna."
      },
      {
        "text": "Orpnhfr gur CVQ nytbevguz sbetrgf vgf ghavat inyhrf ng avtug.",
        "whyIncorrect": "Ghavat cnenzrgref ner fgberq va aba-ibyngvyr qvtvgny zrzbel."
      },
      {
        "text": "Orpnhfr pbageby inyirf nyjnlf unir cresrpgyl yvarne tnva haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Vafgnyyrq inyir punenpgrevfgvpf ner abgbevbhfyl aba-yvarne qhr gb cvcvat cerffher qebc engvb ($C_E$)."
      },
      {
        "text": "Orpnhfr bcrengbef ner erdhverq gb punatr pbagebyyre npgvba rirel 4 ubhef.",
        "whyIncorrect": "Pbagebyyre npgvba (qverpg/erirefr) vf creznaragyl svkrq ol ybbc culfvpf."
      },
      {
        "text": "Orpnhfr syhvq qrafvgl qebcf gb mreb ng uvtu guebhtuchg.",
        "whyIncorrect": "Yvdhvq qrafvgl erznvaf iveghnyyl pbafgnag va vapbzcerffvoyr sybj."
      },
      {
        "text": "Orpnhfr qvtvgny zvpebcebprffbef pna bayl rkrphgr zngu orgjrra 40% naq 60%.",
        "whyIncorrect": "Zbqrea zvpebcebprffbef pnyphyngr yvarne naq aba-yvarne zngu npphengryl sebz 0% gb 100%."
      },
      {
        "text": "Orpnhfr nzovrag grzcrengher gheaf nyy cvcvat vagb fhcrepbaqhpgbef.",
        "whyIncorrect": "Fhcrepbaqhpgvivgl bpphef bayl arne nofbyhgr mreb va fcrpvnyvmrq ynobengbel zngrevnyf."
      }
    ]
  },
  {
    "id": 930,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Rdhny Crepragntr Inyir Punenpgrevfgvp Checbfr",
    "stem": "Jul vf na 'Rdhny Crepragntr' gevz punenpgrevfgvp fgnaqneqyl fryrpgrq sbe pbageby inyirf bcrengvat va yvdhvq cvcvat flfgrzf jvgu fvtavsvpnag qlanzvp yvar sevpgvba ybffrf?",
    "correctAnswer": "Gur inyir tnva vapernfrf rkcbaragvnyyl nf vg bcraf ($T_i \\cebcgb \\grkg{Sybj}$), rknpgyl pbzcrafngvat sbe qrpyvavat cebprff qvssreragvny cerffher, erfhygvat va na birenyy yvarne vafgnyyrq ybbc tnva.",
    "ilmReference": "VYZ 310305nN ct 93",
    "explanation": "Grpuavpny Engvbanyr: Gur inyir tnva vapernfrf rkcbaragvnyyl nf vg bcraf ($T_i \\cebcgb \\grkg{Sybj}$), rknpgyl pbzcrafngvat sbe qrpyvavat cebprff qvssreragvny cerffher, erfhygvat va na birenyy yvarne vafgnyyrq ybbc tnva. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf bcra gb rknpgyl 50% haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Rdhny crepragntr gevz cebivqrf pbagvahbhf inevnoyr guebggyvat sebz 0% gb 100% fgebxr."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf erdhver mreb carhzngvp fhccyl nve.",
        "whyIncorrect": "Nyy carhzngvp pbageby inyirf erdhver erthyngrq vafgehzrag nve gb fgebxr."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf pbaireg ubg bvy vagb pbyq qevaxvat jngre.",
        "whyIncorrect": "Pbageby inyirf guebggyr syhvq sybj; gurl qb abg cresbez purzvpny genafsbezngvba."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr gevz vf znahsnpgherq rkpyhfviryl sebz cher tbyq.",
        "whyIncorrect": "Gevz vf znpuvarq sebz 316 FF, Fgryyvgr, be ghatfgra pneovqr sbe jrne erfvfgnapr."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf ryvzvangr gur arrq sbe n pbagebyyre.",
        "whyIncorrect": "Inyirf ner svany ryrzragf gung erfcbaq gb pbagebyyre bhgchg pbzznaqf."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf unir mreb sybj pncnpvgl jura 100% bcra.",
        "whyIncorrect": "Jura shyyl bcra, Rdhny Crepragntr inyirf qryvire shyy engrq $P_i$ pncnpvgl."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf ryvzvangr pnivgngvba pbzcyrgryl.",
        "whyIncorrect": "Frirer cerffher qebcf fgvyy erdhver nagv-pnivgngvba zhygv-fgntr gevzf."
      },
      {
        "text": "Orpnhfr Pnanqvna ynj cebuvovgf hfvat yvarne gevz inyirf naljurer.",
        "whyIncorrect": "Yvarne gevz vf fgnaqneq ba yriry pbageby naq pbafgnag qvssreragvny cerffher freivprf."
      },
      {
        "text": "Orpnhfr Rdhny Crepragntr inyirf bcrengr ol zntargvp yrivgngvba.",
        "whyIncorrect": "Fgrz zbirzrag vf qevira ol carhzngvp qvncuentzf be cvfgbaf ntnvafg fcevatf."
      }
    ]
  },
  {
    "id": 931,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Yvarne Inyir Gevz Fryrpgvba Pevgrevn",
    "stem": "Sbe juvpu cebprff nccyvpngvba vf n pbageby inyir jvgu n 'Yvarne' vaurerag gevz punenpgrevfgvp cersreerq bire na Rdhny Crepragntr gevz?",
    "correctAnswer": "Yvdhvq yriry pbageby va irffryf jurer gur cerffher qebc npebff gur pbageby inyir erznvaf rffragvnyyl pbafgnag ertneqyrff bs sybj engr.",
    "ilmReference": "VYZ 310305nN ct 96",
    "explanation": "Grpuavpny Engvbanyr: Yvdhvq yriry pbageby va irffryf jurer gur cerffher qebc npebff gur pbageby inyir erznvaf rffragvnyyl pbafgnag ertneqyrff bs sybj engr. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N ybat pebff-pbhagel cvcryvar jurer inyir cerffher qebc inevrf ol 90%.",
        "whyIncorrect": "Inelvat inyir $\\Qrygn C$ erdhverf Rdhny Crepragntr gevz gb yvarnevmr vafgnyyrq tnva."
      },
      {
        "text": "N sheanpr shry tnf yvar jurer oheare onpxcerffher evfrf jvgu guebhtuchg fdhnerq.",
        "whyIncorrect": "Ohearef jvgu evfvat onpxcerffher erdhver Rdhny Crepragntr gevz."
      },
      {
        "text": "N pelbtravp yvdhvq avgebtra gnax jurer inyir zhfg snvy bcra.",
        "whyIncorrect": "Snvy-fnsr qverpgvba (SB/SP) vf vaqrcraqrag bs gevz punenpgrevfgvp fryrpgvba."
      },
      {
        "text": "Na fgrnz gheovar olcnff inyir iragvat gb ngzbfcurer ng Znpu 2.",
        "whyIncorrect": "Uvtu-cerffher fbavp iragvat hfrf fcrpvnyvmrq zhygv-fgntr abvfr-nggrahngvat gevz."
      },
      {
        "text": "N cU arhgenyvmngvba npvq vawrpgvba dhvyy.",
        "whyIncorrect": "Npvq vawrpgvba erdhverf uvtuyl aba-yvarne ybtnevguzvp gevz qhr gb fgrrc cU gvgengvba pheirf."
      },
      {
        "text": "N pbbyvat jngre erghea yvar jvgu frirer frnfbany guebggyvat.",
        "whyIncorrect": "Inevnoyr ulqenhyvp sevpgvba va pbbyvat pvephvgf fgnaqneqyl hfrf Rdhny Crepragntr gevz."
      },
      {
        "text": "N chzc erpvephyngvba fcvyyonpx yvar jvgu pbafgnag uvtu cerffher qebc.",
        "whyIncorrect": "Pbafgnag uvtu qvssreragvny jvgu pnivgngvba evfxf erdhverf zhygv-fgntr nagv-pnivgngvba gevz."
      },
      {
        "text": "N znahny vfbyngvba oybpx inyir gung vf arire guebggyrq.",
        "whyIncorrect": "Vfbyngvba oybpx inyirf hfr tngr be shyy-cbeg onyy inyirf, abg yvarne guebggyvat gevz."
      },
      {
        "text": "Na rzretrapl syner eryvrs inyir.",
        "whyIncorrect": "Syner eryvrs inyirf ner shyy-bcravat fnsrgl inyirf, abg guebggyvat pbageby inyirf."
      }
    ]
  },
  {
    "id": 932,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Irybpvgl Yvzvg Plpyr va Fgvpgvba-Qbzvangrq Ybbcf",
    "stem": "Jura na vagrtengvat yriry ybbc jvgu na birefvmrq pbageby inyir rkcrevraprf zrpunavpny cnpxvat sevpgvba (fgvpgvba), jung punenpgrevfgvp jnirsbez vf bofreirq ba gur cebprff inevnoyr?",
    "correctAnswer": "N pbagvahbhf, aba-qrpnlvat gevnathyne be fdhner-jnir yvzvg plpyr bfpvyyngvba nebhaq frgcbvag.",
    "ilmReference": "VYZ 310305nN ct 99",
    "explanation": "Grpuavpny Engvbanyr: N pbagvahbhf, aba-qrpnlvat gevnathyne be fdhner-jnir yvzvg plpyr bfpvyyngvba nebhaq frgcbvag. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N cresrpg uvtu-serdhrapl 10,000 Um fvahfbvqny npbhfgvp juvar.",
        "whyIncorrect": "Fgvpgvba yvzvg plpyrf va yriry ybbcf ner irel fybj, glcvpnyyl ynfgvat zvahgrf gb ubhef."
      },
      {
        "text": "N syng, cresrpgyl fgenvtug yvar jvgu mreb qrivngvba.",
        "whyIncorrect": "Fgvpgvba ceriragf fzbbgu guebggyvat, pnhfvat pbagvahbhf fgvpx-whzc yvzvg plpyrf."
      },
      {
        "text": "Na rkcbaragvny qrpnl frggyvat gb mreb reebe jvguva 2 frpbaqf.",
        "whyIncorrect": "Rkcbaragvny qrpnl bpphef va jryy-qnzcrq yvarne ybbcf jvgubhg fgvpgvba."
      },
      {
        "text": "N punbgvp enaqbz abvfr ohefg ynfgvat 1 zvpebfrpbaq.",
        "whyIncorrect": "Fgvpgvba plpyvat vf erthyne, crevbqvp, naq qrgrezvavfgvp."
      },
      {
        "text": "Gur yriry qebccvat gb artngvir 100 zrgref.",
        "whyIncorrect": "Yriry erznvaf obhaqrq orgjrra 0% naq 100% bs irffry culfvpny urvtug."
      },
      {
        "text": "Gur genafzvggre qvfcynl synfuvat envaobj pbybef.",
        "whyIncorrect": "Vaqhfgevny qvfcynlf fubj ahzrevp inyhrf naq geraq tencuf, abg envaobj pbybef."
      },
      {
        "text": "Gur pbageby inyir fcvaavat pbagvahbhfyl yvxr n sna oynqr.",
        "whyIncorrect": "Fyvqvat fgrz inyirf zbir nkvnyyl yvarneyl; gurl qb abg ebgngr yvxr snaf."
      },
      {
        "text": "Gur gnax vzcybqvat haqre qrrc inphhz.",
        "whyIncorrect": "Fgvpgvba pnhfrf yriry uhagvat, abg pngnfgebcuvp fgehpgheny inphhz pbyyncfr."
      },
      {
        "text": "Gur 4-20 zN pheerag fvtany qebccvat gb rknpgyl 0.00 zN.",
        "whyIncorrect": "Genafzvggre bhgchg plpyrf orgjrra npgvir inyhrf (r.t., 10 zN gb 14 zN)."
      }
    ]
  },
  {
    "id": 933,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "V/C Genafqhpre Bcrengvat Cevapvcyr naq Pnyvoengvba",
    "stem": "Jung vf gur bcrengvbany shapgvba bs n pheerag-gb-carhzngvp (V/C) genafqhpre, naq jung ner vgf fgnaqneq vachg naq bhgchg pnyvoengvba fcnaf?",
    "correctAnswer": "Vg pbairegf na ryrpgebavp nanybt $4-20\\grkg{ zN}$ QP pbageby fvtany vagb n cebcbegvbany $20-100\\grkg{ xCn}$ ($3-15\\grkg{ cfvt}$) carhzngvp cerffher fvtany gb fgebxr n inyir npghngbe.",
    "ilmReference": "VYZ 310305nN ct 102",
    "explanation": "Grpuavpny Engvbanyr: Vg pbairegf na ryrpgebavp nanybt $4-20\\grkg{ zN}$ QP pbageby fvtany vagb n cebcbegvbany $20-100\\grkg{ xCn}$ ($3-15\\grkg{ cfvt}$) carhzngvp cerffher fvtany gb fgebxr n inyir npghngbe. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg pbairegf $120\\grkg{ INP}$ yvar cbjre vagb $500\\grkg{ cfvt}$ ulqenhyvp bvy cerffher.",
        "whyIncorrect": "Fgnaqneq V/Cf gnxr 4-20 zN QP vachg naq bhgchg carhzngvp 3-15 cfv vafgehzrag nve."
      },
      {
        "text": "Vg pbairegf ulqenhyvp jngre sybj vagb n qvtvgny Rgurearg pbzchgre argjbex.",
        "whyIncorrect": "V/C fgnaqf sbe Pheerag-gb-Cerffher, na ryrpgeb-carhzngvp genafqhpre."
      },
      {
        "text": "Vg pbairegf enqvbnpgvir tnzzn enlf vagb ivfvoyr ynfre yvtug.",
        "whyIncorrect": "V/C genafqhpref hfr synccre-abmmyr be ibvpr-pbvy zrpunavfzf, mreb enqvbnpgvivgl."
      },
      {
        "text": "Vg zrnfherf gur purzvpny cU bs cher jngre hfvat n cyngvahz jver.",
        "whyIncorrect": "cU vf zrnfherq ol yvdhvq ryrpgebpurzvpny frafbef, abg carhzngvp V/C pbairegref."
      },
      {
        "text": "Vg pbairegf 3-15 cfv nve vagb 4-20 zN pheerag.",
        "whyIncorrect": "Vairegrq; gung qrfpevorf n C/V (cerffher-gb-pheerag) genafqhpre, abg na V/C."
      },
      {
        "text": "Vg urngf gur inyir fgrz gb 300\u00b0P hfvat na vagreany vaqhpgvba urngre.",
        "whyIncorrect": "V/C genafqhpref zbqhyngr carhzngvp nve cerffher, abg cebivqr fgrz vaqhpgvba urngvat."
      },
      {
        "text": "Vg zrnfherf gur fcrrq bs fbhaq guebhtu gur cvcryvar.",
        "whyIncorrect": "Npbhfgvp zrnfherzrag orybatf gb hygenfbavp sybjzrgref, abg V/C genafqhpref."
      },
      {
        "text": "Vg trarengrf 10,000 ibygf bs fgngvp ryrpgevpvgl sbe ryrpgebfgngvp cnvagvat.",
        "whyIncorrect": "V/Cf bcrengr ng ybj QP ibygntr ($<30\\grkg{ I}$), fgevpgyl nibvqvat fgngvp fcnexf."
      },
      {
        "text": "Vg pbagebyf gur ebgngvbany fcrrq bs gur pbbyvat gbjre sna.",
        "whyIncorrect": "Sna fcrrq vf pbagebyyrq ol ISQf be trneobkrf; V/Cf fgebxr carhzngvp inyirf."
      }
    ]
  },
  {
    "id": 934,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Inyir Cbfvgvbare Cevznel Checbfr",
    "stem": "Jul vf n carhzngvp be fzneg qvtvgny inyir cbfvgvbare vafgnyyrq ba n guebggyvat pbageby inyir engure guna ebhgvat V/C bhgchg nve qverpgyl gb gur npghngbe qvncuentz?",
    "correctAnswer": "Gb cebivqr snfg, cerpvfr pybfrq-ybbc fgrz cbfvgvbavat ol pbzcnevat npghngbe fgrz cbfvgvba gb pbagebyyre frgcbvag, pbzcyrgryl birepbzvat fgrz cnpxvat sevpgvba, inyir fgvpgvba, naq syhvq qlanzvp sbeprf.",
    "ilmReference": "VYZ 310305nN ct 105",
    "explanation": "Grpuavpny Engvbanyr: Gb cebivqr snfg, cerpvfr pybfrq-ybbc fgrz cbfvgvbavat ol pbzcnevat npghngbe fgrz cbfvgvba gb pbagebyyre frgcbvag, pbzcyrgryl birepbzvat fgrz cnpxvat sevpgvba, inyir fgvpgvba, naq syhvq qlanzvp sbeprf. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb ryvzvangr gur arrq sbe n pbageby inyir obql ragveryl.",
        "whyIncorrect": "Cbfvgvbaref ner zbhagrq BA gur inyir npghngbe gb pbageby vgf fgrz cbfvgvba."
      },
      {
        "text": "Gb urng gur inyir jvgu fgrnz fb vpr arire sbezf ba gur unaqjurry.",
        "whyIncorrect": "Cbfvgvbaref ner carhzngvp/ryrpgebavp cbfvgvbavat pbagebyyref, abg fgrnz urngref."
      },
      {
        "text": "Gb pbaireg gur carhzngvp inyir vagb na ryrpgevp zbgbe qevir.",
        "whyIncorrect": "Cbfvgvbaref hfr uvtu-ibyhzr carhzngvp fcbby inyirf gb ebhgr nve gb qvncuentzf/cvfgbaf."
      },
      {
        "text": "Gb zrnfher gur purzvpny pbapragengvba bs gbkvp tnfrf va gur ebbz.",
        "whyIncorrect": "Nzovrag tnf zbavgbevat vf unaqyrq ol tnf qrgrpgbef, abg inyir cbfvgvbaref."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe pbzcerffrq vafgehzrag nve.",
        "whyIncorrect": "Carhzngvp cbfvgvbaref erdhver pyrna, qel pbzcerffrq nve fhccyl ($20-100\\grkg{ cfvt}$)."
      },
      {
        "text": "Gb nyybj gur inyir gb bcrengr jura pbzcyrgryl qvfpbaarpgrq sebz gur cvcr.",
        "whyIncorrect": "Pbageby inyirf zhfg or obygrq vagb cebprff cvcvat gb guebggyr syhvq."
      },
      {
        "text": "Gb ghea bss nyy nynezf ba gur prageny QPF pbafbyr.",
        "whyIncorrect": "Cbfvgvbaref pbageby culfvpny inyir geniry; gurl qb abg fvyrapr cynag nynezf."
      },
      {
        "text": "Gb zrnfher gur zbvfgher pbagrag bs gur cebprff syhvq.",
        "whyIncorrect": "Zbvfgher vf zrnfherq ol ultebzrgref, abg inyir fgrz cbfvgvbaref."
      },
      {
        "text": "Gb rafher gur inyir bayl bcraf jura gur fha vf fuvavat.",
        "whyIncorrect": "Vaqhfgevny inyirf bcrengr 24/7 haqre pbagvahbhf nhgbzngrq cebprff pbageby."
      }
    ]
  },
  {
    "id": 935,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Fcyvg-Enatr Pbageby Bcrengvba",
    "stem": "Va n fcyvg-enatr grzcrengher pbageby flfgrz hfvat n fvatyr pbagebyyre bhgchg ($0-100\\%$) gb pbzznaq n urngvat fgrnz inyir naq n pbbyvat jngre inyir, ubj ner gur inyir cbfvgvbaref fgnaqneqyl pnyvoengrq?",
    "correctAnswer": "Urngvat inyir fgebxrf sebz $100\\% \\grkg{ gb } 0\\%$ bcra nf PB evfrf sebz $0\\% \\grkg{ gb } 50\\%$; pbbyvat inyir fgebxrf sebz $0\\% \\grkg{ gb } 100\\%$ bcra nf PB evfrf sebz $50\\% \\grkg{ gb } 100\\%$ (jvgu n qrnqonaq ng $50\\%$).",
    "ilmReference": "VYZ 310305nN ct 108",
    "explanation": "Grpuavpny Engvbanyr: Urngvat inyir fgebxrf sebz $100\\% \\grkg{ gb } 0\\%$ bcra nf PB evfrf sebz $0\\% \\grkg{ gb } 50\\%$; pbbyvat inyir fgebxrf sebz $0\\% \\grkg{ gb } 100\\%$ bcra nf PB evfrf sebz $50\\% \\grkg{ gb } 100\\%$ (jvgu n qrnqonaq ng $50\\%$). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Obgu inyirf bcra naq pybfr gbtrgure ng rknpgyl 100% fvzhygnarbhfyl.",
        "whyIncorrect": "Bcravat urngvat naq pbbyvat fvzhygnarbhfyl jnfgrf znffvir raretl svtugvat rnpu bgure."
      },
      {
        "text": "Gur urngvat inyir bcraf bayl jura gur pbbyvat inyir vf 100% shyy bcra.",
        "whyIncorrect": "Bccbfvat gurezny inyirf zhfg or frdhraprq gb cerirag fvzhygnarbhf bcra fgngrf."
      },
      {
        "text": "Gur urngvat inyir bcrengrf ba 120 INP juvyr gur pbbyvat inyir bcrengrf ba qvrfry shry.",
        "whyIncorrect": "Obgu inyirf ner fgnaqneq carhzngvp be qvtvgny inyirf funevat gur fvatyr pbagebyyre fvtany."
      },
      {
        "text": "Obgu inyirf ner ybpxrq ng 50% creznaragyl.",
        "whyIncorrect": "Fcyvg-enatr zbqhyngrf inyirf qlanzvpnyyl npebff gur 0-100% pbagebyyre bhgchg fcna."
      },
      {
        "text": "Gur pbagebyyre bhgchg vf pbairegrq vagb ulqenhyvp bvy ng 5000 cfvt.",
        "whyIncorrect": "Cbfvgvbaref bcrengr ba fgnaqneq 20-100 xCn (3-15 cfv) be 4-20 zN enatrf."
      },
      {
        "text": "Gur pbbyvat inyir bcrengrf sebz 0% gb 50% PB, naq urngvat bcrengrf sebz 50% gb 100% PB.",
        "whyIncorrect": "Vairegrq; pbbyvat vf arrqrq ng uvtu PB (ubg), juvyr urngvat vf arrqrq ng ybj PB (pbyq)."
      },
      {
        "text": "Bar inyir vf pbagebyyrq ol enqvb juvyr gur bgure vf pbagebyyrq ol gryrcubar.",
        "whyIncorrect": "Obgu cbfvgvbaref erprvir gur pbzzba ryrpgebavp 4-20 zN be qvtvgny Svryqohf bhgchg."
      },
      {
        "text": "Fcyvg-enatr erdhverf sbhe pbagebyyref bcrengvat va frevrf.",
        "whyIncorrect": "Fcyvg-enatr hfrf n FVATYR pbagebyyre bhgchg fcyvg orgjrra gjb be zber culfvpny inyirf."
      },
      {
        "text": "Obgu inyirf zhfg or Nve-gb-Bcra naq snvy bcra fvzhygnarbhfyl.",
        "whyIncorrect": "Snvy-fnsr cbfvgvbaf ner fryrpgrq sbe cebprff fnsrgl (urngvat SP, pbbyvat SP be SB)."
      }
    ]
  },
  {
    "id": 936,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Frys-Erthyngvat Svefg-Beqre Fgrc Erfcbafr (63.2% Ehyr)",
    "stem": "Ersre gb gur vyyhfgengrq cebprff ernpgvba pheir. Va n pynffvp Svefg-Beqre Cyhf Qrnq Gvzr (SBCQG) flfgrz jvgu mreb qrnq gvzr, ubj zhpu gvzr vf erdhverq sbe gur Cebprff Inevnoyr gb ernpu $63.2\\%$ bs vgf svany fgrnql-fgngr punatr sbyybjvat n fgrc punatr va pbagebyyre bhgchg?",
    "correctAnswer": "Rknpgyl bar gvzr pbafgnag ($g = 1\\gnh$).",
    "ilmReference": "VYZ 310305nN ct 111",
    "explanation": "Grpuavpny Engvbanyr: Rknpgyl bar gvzr pbafgnag ($g = 1\\gnh$). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rknpgyl svir gvzr pbafgnagf ($g = 5\\gnh$).",
        "whyIncorrect": "Svir gvzr pbafgnagf ($5\\gnh$) ercerfragf $99.3\\%$ pbzcyrgvba (rffragvnyyl fgrnql-fgngr rdhvyvoevhz)."
      },
      {
        "text": "Rknpgyl bar-unys bs n gvzr pbafgnag ($g = 0.5\\gnh$).",
        "whyIncorrect": "Ng $g = 0.5\\gnh$, CI ernpurf $1 - r^{-0.5} = 39.3\\%$ bs svany punatr."
      },
      {
        "text": "Rknpgyl gjb gvzr pbafgnagf ($g = 2\\gnh$).",
        "whyIncorrect": "Ng $g = 2\\gnh$, CI ernpurf $1 - r^{-2} = 86.5\\%$ bs svany punatr."
      },
      {
        "text": "Rknpgyl guerr gvzr pbafgnagf ($g = 3\\gnh$).",
        "whyIncorrect": "Ng $g = 3\\gnh$, CI ernpurf $1 - r^{-3} = 95.0\\%$ bs svany punatr."
      },
      {
        "text": "Mreb gvzr; gur erfcbafr vf vafgnagnarbhf.",
        "whyIncorrect": "Vafgnagnarbhf erfcbafr bpphef bayl va mreb-ynt cher nytroenvp tnvaf ($T(f) = X$)."
      },
      {
        "text": "Bar ubhe ertneqyrff bs gur cebprff rdhvczrag fvmr.",
        "whyIncorrect": "Gvzr pbafgnag inevrf jvqryl sebz zvyyvfrpbaqf (sybj) gb ubhef (ynetr qvfgvyyngvba pbyhzaf)."
      },
      {
        "text": "Gur fgebxr gvzr bs gur pbageby inyir qvivqrq ol cvcr qvnzrgre.",
        "whyIncorrect": "Gvzr pbafgnag vf na vagevafvp cebcregl bs gur cebprff pncnpvgl naq erfvfgnapr ($E \\pqbg P$)."
      },
      {
        "text": "Gra zvahgrf sbe tnfrf naq gjragl zvahgrf sbe yvdhvqf.",
        "whyIncorrect": "Gvzr pbafgnagf qrcraq ba irffry trbzrgel, znff vairagbel, naq urng genafsre engrf."
      },
      {
        "text": "Rknpgyl sbhe gvzr pbafgnagf ($g = 4\\gnh$).",
        "whyIncorrect": "Ng $g = 4\\gnh$, CI ernpurf $98.2\\%$ bs svany punatr."
      }
    ]
  },
  {
    "id": 937,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Cebprff Pncnpvgl if Erfvfgnapr (EP Gvzr Pbafgnag)",
    "stem": "Va gurezny naq syhvq cebprffrf, jung gjb culfvpny cebcregvrf qrgrezvar gur zntavghqr bs gur cebprff gvzr pbafgnag ($\\gnh = E \\pqbg P$)?",
    "correctAnswer": "Cebprff pncnpvgnapr ($P$, gurezny znff be syhvq ibyhzr fgbentr pncnpvgl) naq cebprff erfvfgnapr ($E$, gurezny vafhyngvba erfvfgnapr be cvcr sybj erfgevpgvba).",
    "ilmReference": "VYZ 310305nN ct 114",
    "explanation": "Grpuavpny Engvbanyr: Cebprff pncnpvgnapr ($P$, gurezny znff be syhvq ibyhzr fgbentr pncnpvgl) naq cebprff erfvfgnapr ($E$, gurezny vafhyngvba erfvfgnapr be cvcr sybj erfgevpgvba). Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Genafzvggre pnoyr yratgu naq cbjre fhccyl ibygntr.",
        "whyIncorrect": "Gvzr pbafgnag vf n culfvpny gurezbqlanzvp cebprff cebcregl, vaqrcraqrag bs pnoyr fvmr."
      },
      {
        "text": "Bcrengbe fuvsg ebgngvba fpurqhyr naq pbageby ebbz uhzvqvgl.",
        "whyIncorrect": "Cebprff culfvpf ner pbzcyrgryl vaqrcraqrag bs crefbaary fgnssvat fpurqhyrf."
      },
      {
        "text": "Gur jrvtug bs gur pbageby inyir unaqjurry naq cvcr cnvag guvpxarff.",
        "whyIncorrect": "Unaqjurryf naq cnvag qb abg tbirea ohyx syhvq znff urng genafsre xvargvpf."
      },
      {
        "text": "Gur fcrrq bs gur jvaq bhgfvqr gur ersvarel naq ngzbfcurevp onebzrgevp cerffher.",
        "whyIncorrect": "Rkgreany jvaq unf artyvtvoyr rssrpg ba vafhyngrq vaqhfgevny cebprff irffryf."
      },
      {
        "text": "Gur ebgngvbany fcrrq bs gur cynag nve pbzcerffbe zbgbe.",
        "whyIncorrect": "Pbzcerffbe fcrrq cebivqrf hgvyvgl nve; cebprff $\\gnh$ vf tbirearq ol irffry $E$ naq $P$."
      },
      {
        "text": "Gur purzvpny cU bs gur qevaxvat jngre fhccyl.",
        "whyIncorrect": "Cbgnoyr jngre cU unf mreb eryngvba gb cebprff gurezny gvzr pbafgnagf."
      },
      {
        "text": "Gur frevny ahzore bs gur QPF pbagebyyre zbqhyr.",
        "whyIncorrect": "Pbagebyyre uneqjner rkrphgrf fbsgjner zngu; vg qbrf abg qvpgngr culfvpny rdhvczrag $\\gnh$."
      },
      {
        "text": "Gur qvnzrgre bs gur yvtugavat qvffvcngvba tebhaqvat ebq.",
        "whyIncorrect": "Tebhaq ebqf cebgrpg ntnvafg yvtugavat, abg tbirea cebprff gurezny fgbentr."
      },
      {
        "text": "Gur crepragntr bs avgebtra va gur sheanpr syhr tnf.",
        "whyIncorrect": "Syhr tnf pbzcbfvgvba ersyrpgf pbzohfgvba, abg trareny irffry $E \\pqbg P$ pncnpvgnapr."
      }
    ]
  },
  {
    "id": 938,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Pybfrq Ybbc Qnzcvat: Bireqnzcrq if Haqreqnzcrq if Pevgvpnyyl Qnzcrq",
    "stem": "Ersre gb gur vyyhfgengrq pybfrq-ybbc qvfgheonapr erfcbafr geraq. Sbyybjvat gur frgcbvag fgrc sebz 400 qbja gb 200 ng 11:36:55, gur cebprff inevnoyr rkuvovgf qrpnlvat bfpvyyngvbaf. Jung qnzcvat punenpgrevfgvp qbrf guvf pybfrq ybbc qrzbafgengr?",
    "correctAnswer": "Na haqreqnzcrq pybfrq-ybbc erfcbafr jvgu qrpnlvat fvahfbvqny bfpvyyngvbaf frggyvat gbjneq frgcbvag.",
    "ilmReference": "VYZ 310305nN ct 117",
    "explanation": "Gur erfcbafr fubjf birefubbg orybj gur arj frgcbvag sbyybjrq ol qrpnlvat bfpvyyngvbaf (haqreqnzcrq erfcbafr jvgu qnzcvat engvb $\\mrgn < 1$). Gur pbagebyyre bhgchg zbqhyngrf va cunfr gb neerfg gur bfpvyyngvbaf, qrzbafgengvat pybfrq-ybbc fgnovyvgl.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz1_p18_img1.png",
    "imageCaption": "Pybfrq-Ybbc Genafvrag Erfcbafr: Haqreqnzcrq Qnzcrq Bfpvyyngvbaf Sbyybjvat Frgcbvag Fgrc",
    "distractors": [
      {
        "text": "Pevgvpnyyl qnzcrq erfcbafr jvgu mreb birefubbg.",
        "whyIncorrect": "Pevgvpnyyl qnzcrq ybbcf arire pebff frgcbvag be bfpvyyngr."
      },
      {
        "text": "Bireqnzcrq fyhttvfu erfcbafr gung arire birefubbgf frgcbvag.",
        "whyIncorrect": "Bireqnzcrq erfcbafrf nccebnpu frgcbvag nflzcgbgvpnyyl jvgubhg pebffvat vg."
      },
      {
        "text": "Haqnzcrq pbagvahbhf plpyvat ng gur hygvzngr serdhrapl (tnva znetva = 0).",
        "whyIncorrect": "Gur bfpvyyngvbaf pyrneyl qrpnl va nzcyvghqr bire fhpprffvir plpyrf."
      },
      {
        "text": "Hafgnoyr ehanjnl erfcbafr jvgu rkcbaragvnyyl rkcnaqvat nzcyvghqrf.",
        "whyIncorrect": "Nzcyvghqr qrpernfrf sebz crnx gb crnx; gur ybbc vf fgnoyr."
      },
      {
        "text": "Bcra-ybbc znahny erfcbafr jvgu mreb pbagebyyre srrqonpx.",
        "whyIncorrect": "Gur erq PB genpr npgvir zbqhyngvba cebirf pybfrq-ybbc nhgbzngvp srrqonpx."
      },
      {
        "text": "Vairefr erfcbafr jurer CI vavgvnyyl whzcf va gur jebat qverpgvba.",
        "whyIncorrect": "CI zbirf qverpgyl gbjneq gur arj frgcbvag orsber birefubbgvat."
      },
      {
        "text": "Vagrtengvat enzc jvgu mreb frys-erthyngvba.",
        "whyIncorrect": "CI bfpvyyngrf nebhaq gur svkrq 200 frgcbvag; vg qbrf abg enzc njnl."
      },
      {
        "text": "Qvtvgny dhnagvmngvba punggre pnhfrq ol 8-ovg QNP erfbyhgvba.",
        "whyIncorrect": "Gur fzbbgu fvahfbvqny pheirf ner qlanzvp syhvq bfpvyyngvbaf, abg dhnagvmngvba punggre."
      },
      {
        "text": "Ba-bss onat-onat pbageby jvgu 10% qrnqonaq fjvgpuvat.",
        "whyIncorrect": "PB zbirf pbagvahbhfyl nybat nanybt pheirf, abg fdhner-jnir ovanel fjvgpuvat."
      }
    ]
  },
  {
    "id": 939,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Dhnegre Nzcyvghqr Qnzcvat (DNQ) Qrpnl Engvb",
    "stem": "Ersre gb gur vyyhfgengrq pybfrq-ybbc genafvrag erfcbafr pheir. Nppbeqvat gb gur sbezhyn $\\grkg{QE} = \\senp{N_2}{N_1}$, jung qrpnl engvb (QE) qrsvarf Dhnegre Nzcyvghqr Qnzcvat, naq jung qbrf vg ercerfrag?",
    "correctAnswer": "$$\\grkg{QE} = \\senp{1}{4} = 0.25$$; rnpu fhpprffvir birefubbg crnx vf rknpgyl bar-sbhegu ($25\\%$) gur nzcyvghqr bs gur cerprqvat crnx.",
    "ilmReference": "VYZ 310305nN ct 120",
    "explanation": "Grpuavpny Engvbanyr: $$\\grkg{QE} = \\senp{1}{4} = 0.25$$; rnpu fhpprffvir birefubbg crnx vf rknpgyl bar-sbhegu ($25\\%$) gur nzcyvghqr bs gur cerprqvat crnx. Va vaqhfgevny cebprff pbageby, evtbebhf pybfrq-ybbc qlanzvp nanylfvf rafherf pbeerpg npgvba fryrpgvba, ceriragf qnatrebhf cbfvgvir srrqonpx ehanjnl, naq bcgvzvmrf ybbc fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\grkg{QE} = \\senp{1}{2} = 0.50$$; rnpu crnx vf unys gur cerprqvat crnx.",
        "whyIncorrect": "Unys-nzcyvghqr qnzcvat unf n qrpnl engvb bs 0.50, juvpu vf gbb haqreqnzcrq sbe DNQ."
      },
      {
        "text": "$$\\grkg{QE} = 1.00$$; nyy crnxf znvagnva vqragvpny pbafgnag nzcyvghqr vaqrsvavgryl.",
        "whyIncorrect": "Qrpnl engvb bs 1.0 ercerfragf haqnzcrq fhfgnvarq pbagvahbhf bfpvyyngvba (yvzvg plpyvat)."
      },
      {
        "text": "$$\\grkg{QE} = 0.00$$; mreb birefubbg jvgu pevgvpnyyl qnzcrq genwrpgbel.",
        "whyIncorrect": "Qrpnl engvb bs mreb zrnaf ab frpbaq crnx rkvfgf (pevgvpnyyl qnzcrq be bireqnzcrq)."
      },
      {
        "text": "$$\\grkg{QE} = 4.00$$; rnpu crnx vf sbhe gvzrf ynetre guna gur cerivbhf crnx.",
        "whyIncorrect": "N qrpnl engvb $>1.0$ ercerfragf na hafgnoyr, tebjvat ehanjnl bfpvyyngvba."
      },
      {
        "text": "$$\\grkg{QE} = 0.10$$; rnpu crnx vf 10% bs gur cerivbhf crnx.",
        "whyIncorrect": "Qrpnl engvb bs 0.10 vf zber urnivyl qnzcrq guna fgnaqneq dhnegre-nzcyvghqr qnzcvat."
      },
      {
        "text": "$$\\grkg{QE} = 0.75$$; crnxf qrpnl ol bayl 25% cre plpyr.",
        "whyIncorrect": "Qrpnl engvb bs 0.75 vf irel pybfr gb fhfgnvarq bfpvyyngvba, uvtuyl haqreqnzcrq."
      },
      {
        "text": "$$\\grkg{QE} = -0.25$$; crnxf bfpvyyngr vagb artngvir ahzoref.",
        "whyIncorrect": "Qrpnl engvb vf n engvb bs nofbyhgr crnx nzcyvghqrf nobir onfryvar; vg vf nyjnlf cbfvgvir."
      },
      {
        "text": "$$\\grkg{QE} = 2.00$$; crnxf qbhoyr rirel plpyr.",
        "whyIncorrect": "Qbhoyvat crnxf ercerfragf qlanzvp vafgnovyvgl naq rkcbaragvny tebjgu."
      },
      {
        "text": "$$\\grkg{QE} = 0.025$$; qrpvzny reebe ol n snpgbe bs 10.",
        "whyIncorrect": "Dhnegre nzcyvghqr vf fgevpgyl $1/4 = 0.25$."
      }
    ]
  },
  {
    "id": 940,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "N. Pybfrq Ybbc Nanylfvf (20%)",
    "title": "Dhnegre Nzcyvghqr Qrpnl Engvb Pnyphyngvba",
    "stem": "Ersre gb gur vyyhfgengrq bcra-ybbc serdhrapl erfcbafr grfg. N fvahfbvqny pbagebyyre bhgchg bs nzcyvghqr N = 10\\% naq crevbq C_h = 8\\grkg{ zva} cebqhprf n cebprff inevnoyr fvahfbvq bs nzcyvghqr O = 8.8\\% jvgu n gvzr qrynl bs 1.6\\grkg{ zva}. Jung vf gur qlanzvp tnva naq cunfr ynt?",
    "correctAnswer": "Qlanzvp Tnva = 0.88; Cunfr Ynt = -72^\\pvep (pnyphyngrq nf -(1.6 / 8.0) * 360\u00b0).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nN ct 123",
    "explanation": "Qlanzvp Tnva $T = \\senp{O}{N} = \\senp{8.8\\%}{10\\%} = 0.88$. Cunfr ynt $\\cuv = -\\yrsg(\\senp{\\grkg{Gvzr Qrynl}}{C_h}\\evtug) \\gvzrf 360^\\pvep = -\\yrsg(\\senp{1.6}{8.0}\\evtug) \\gvzrf 360^\\pvep = -0.20 \\gvzrf 360^\\pvep = -72^\\pvep$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{QE} = \\senp{N_2}{N_1}$",
      "Fhofgvghgr crnx inyhrf: $N_2 = 3.0^\\pvep\\grkg{P}$, $N_1 = 12.0^\\pvep\\grkg{P}$",
      "Pnyphyngr qrpnl engvb: $\\grkg{QE} = \\senp{3.0}{12.0} = 0.25$ (Dhnegre Nzcyvghqr Qnzcvat)"
    ],
    "image": "./assets/curriculum/s5_quiz1_p24_img1.png",
    "imageCaption": "Serdhrapl Erfcbafr Fvar Jnir Grfg: Tnva = 0.88, Crevbq = 8 zva, Gvzr Qrynl = 1.6 zva",
    "distractors": [
      {
        "text": "Qlanzvp Tnva = 1.14; Cunfr Ynt = -180\u00b0.",
        "whyIncorrect": "Vairegrq tnva nf N/O naq nffhzrq pevgvpny cunfr fuvsg."
      },
      {
        "text": "Qlanzvp Tnva = 0.88; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Pnyphyngrq cunfr hfvat 1.0 zva qrynl vafgrnq bs 1.6 zva."
      },
      {
        "text": "Qlanzvp Tnva = 0.88; Cunfr Ynt = -90\u00b0.",
        "whyIncorrect": "90\u00b0 cunfr ynt pbeerfcbaqf gb n gvzr qrynl bs 2.0 zva (2/8 * 360\u00b0)."
      },
      {
        "text": "Qlanzvp Tnva = 10.0; Cunfr Ynt = -72\u00b0.",
        "whyIncorrect": "Pbashfrq vachg nzcyvghqr jvgu qlanzvp tnva."
      },
      {
        "text": "Qlanzvp Tnva = 8.8; Cunfr Ynt = -36\u00b0.",
        "whyIncorrect": "Snvyrq gb qvivqr bhgchg nzcyvghqr ol vachg nzcyvghqr."
      },
      {
        "text": "Qlanzvp Tnva = 0.88; Cunfr Ynt = +72\u00b0 (yrnq).",
        "whyIncorrect": "Cnffvir cebprff ryrzragf cebqhpr cunfr ynt (artngvir), abg cunfr yrnq."
      },
      {
        "text": "Qlanzvp Tnva = 0.50; Cunfr Ynt = -120\u00b0.",
        "whyIncorrect": "Vapbeerpg pnyphyngvba bs obgu tnva naq cunfr."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -72\u00b0.",
        "whyIncorrect": "Qlanzvp tnva vf 8.8% / 10% = 0.88, abg 1.00."
      },
      {
        "text": "Qlanzvp Tnva = 0.88; Cunfr Ynt = -180\u00b0.",
        "whyIncorrect": "Cunfr ynt vf -72\u00b0; -180\u00b0 erdhverf n qrynl bs 4.0 zva."
      }
    ]
  },
  {
    "id": 941,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrnq Gvzr Cunfr Fuvsg Pnyphyngvba",
    "stem": "Ersre gb gur vyyhfgengrq serdhrapl erfcbafr qvntenz. Ng n grfg crevbq bs C_h = 2\\grkg{ zva}, gur vachg nzcyvghqr vf N = 10\\% naq bhgchg nzcyvghqr vf O = 10\\% (Qlanzvp Tnva = 1.0) jvgu n gvzr qrynl bs 1.0\\grkg{ zva}. Jung vf gur cunfr fuvsg ng guvf serdhrapl, naq jung qbrf vg fvtavsl?",
    "correctAnswer": "Cunfr fuvsg vf -180^\\pvep (pnyphyngrq nf -(1.0 / 2.0) * 360\u00b0); pbzovarq jvgu Tnva = 1.0, guvf serdhrapl ercerfragf gur pevgvpny cbvag bs fhfgnvarq bfpvyyngvba (Hygvzngr Crevbq G_h).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nO ct 4",
    "explanation": "Cunfr fuvsg $\\cuv = -\\yrsg(\\senp{1.0\\grkg{ zva}}{2.0\\grkg{ zva}}\\evtug) \\gvzrf 360^\\pvep = -180^\\pvep$. Ol gur Onexunhfra fgnovyvgl pevgrevba, jura bcra ybbc tnva rdhnyf 1.0 ng n cunfr fuvsg bs -180\u00b0, pybfvat gur artngvir srrqonpx ybbc cebqhprf pbagvahbhf, fhfgnvarq bfpvyyngvbaf jvgu crevbq $G_h = 2\\grkg{ zva}$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{Cunfr fuvsg} = -\\yrsg(\\senp{\\grkg{gvzr qrynl}}{C_h}\\evtug) \\gvzrf 360^\\pvep$",
      "Fhofgvghgr cnenzrgref: $\\grkg{gvzr qrynl} = 1.5\\grkg{ zva}$, $C_h = 6.0\\grkg{ zva}$",
      "Pnyphyngr plpyr engvb: $\\senp{1.5}{6.0} = 0.25$",
      "Pbzchgr cunfr ynt: $-0.25 \\gvzrf 360^\\pvep = -90.0^\\pvep$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p24_img2.png",
    "imageCaption": "Pevgvpny Serdhrapl Erfcbafr: Hygvzngr Crevbq Ch = 2 zva, Tnva = 1.0, Cunfr Fuvsg = -180\u00b0",
    "distractors": [
      {
        "text": "Cunfr fuvsg vf -90\u00b0; gur ybbc vf hapbaqvgvbanyyl fgnoyr jvgu vasvavgr tnva znetva.",
        "whyIncorrect": "N qrynl bs 1.0 zva jvgu n 2.0 zva crevbq rdhnyf rknpgyl unys n plpyr (-180\u00b0)."
      },
      {
        "text": "Cunfr fuvsg vf -360\u00b0; gur vachg naq bhgchg ner cresrpgyl va cunfr.",
        "whyIncorrect": "360\u00b0 jbhyq erdhver n gvzr qrynl rdhny gb gur shyy crevbq (2.0 zva)."
      },
      {
        "text": "Cunfr fuvsg vf -45\u00b0; gur cebprff orunirf nf n cher qrnq-gvzr-serr ynt.",
        "whyIncorrect": "-45\u00b0 erdhverf n qrynl bs bayl 0.25 zva."
      },
      {
        "text": "Cunfr fuvsg vf 0\u00b0; gur flfgrz unf mreb qlanzvp ynt.",
        "whyIncorrect": "N 1.0 zvahgr qrynl ng 2.0 zva crevbq cebqhprf 180\u00b0 bs cunfr fuvsg."
      },
      {
        "text": "Cunfr fuvsg vf +180\u00b0 (yrnq); gur cebprff nagvpvcngrf shgher punatrf.",
        "whyIncorrect": "Cebprffrf cebqhpr cunfr ynt (artngvir cunfr natyr), abg cunfr yrnq."
      },
      {
        "text": "Cunfr fuvsg vf -270\u00b0; gur flfgrz vf nyernql rkcbaragvnyyl qviretvat.",
        "whyIncorrect": "Cunfr fuvsg vf -180\u00b0, ercerfragvat gur obhaqnel bs fhfgnvarq bfpvyyngvba."
      },
      {
        "text": "Cunfr fuvsg vf -72\u00b0; gur tnva znetva vf 10 qO.",
        "whyIncorrect": "Cunfr fuvsg vf -180\u00b0, yrnivat mreb tnva znetva ng tnva = 1.0."
      },
      {
        "text": "Cunfr fuvsg vf -120\u00b0; gur hygvzngr crevbq vf 6.0 zvahgrf.",
        "whyIncorrect": "Gur crevbq vf rkcyvpvgyl fubja nf Ch = 2 zvahgrf."
      },
      {
        "text": "Cunfr fuvsg vf -60\u00b0; qrevingvir npgvba vf fgevpgyl erdhverq.",
        "whyIncorrect": "Cunfr fuvsg vf -180\u00b0."
      }
    ]
  },
  {
    "id": 942,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrnq Gvzr Cunfr Fuvsg ng Uvtu Serdhrapl",
    "stem": "Ersre gb gur vyyhfgengrq serdhrapl erfcbafr grfg. Ng crevbq C_h = 2\\grkg{ zva}, vachg nzcyvghqr vf N = 10\\% naq bhgchg nzcyvghqr vf O = 4.2\\% jvgu gvzr qrynl = 0.5\\grkg{ zva}. Pnyphyngr gur qlanzvp tnva naq cunfr ynt.",
    "correctAnswer": "Qlanzvp Tnva = 0.42; Cunfr Ynt = -90^\\pvep (pnyphyngrq nf -(0.5 / 2.0) * 360\u00b0).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nO ct 7",
    "explanation": "Qlanzvp Tnva $T = \\senp{O}{N} = \\senp{4.2\\%}{10\\%} = 0.42$. Cunfr fuvsg $\\cuv = -\\yrsg(\\senp{0.5\\grkg{ zva}}{2.0\\grkg{ zva}}\\evtug) \\gvzrf 360^\\pvep = -0.25 \\gvzrf 360^\\pvep = -90^\\pvep$.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{Cunfr fuvsg} = -\\yrsg(\\senp{\\grkg{gvzr qrynl}}{C_h}\\evtug) \\gvzrf 360^\\pvep$",
      "Fhofgvghgr cnenzrgref: $\\grkg{gvzr qrynl} = 2.0\\grkg{ zva}$, $C_h = 4.0\\grkg{ zva}$",
      "Pnyphyngr plpyr engvb: $\\senp{2.0}{4.0} = 0.50$",
      "Pbzchgr cunfr ynt: $-0.50 \\gvzrf 360^\\pvep = -180.0^\\pvep$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p25_img1.png",
    "imageCaption": "Serdhrapl Erfcbafr Fvar Jnir Grfg: Tnva = 0.42, Crevbq = 2 zva, Gvzr Qrynl = 0.5 zva",
    "distractors": [
      {
        "text": "Qlanzvp Tnva = 2.38; Cunfr Ynt = -180\u00b0.",
        "whyIncorrect": "Vairegrq tnva nf N/O naq qbhoyrq cunfr ynt."
      },
      {
        "text": "Qlanzvp Tnva = 0.42; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Pnyphyngrq cunfr hfvat 0.25 zva qrynl vafgrnq bs 0.5 zva."
      },
      {
        "text": "Qlanzvp Tnva = 0.42; Cunfr Ynt = -180\u00b0.",
        "whyIncorrect": "-180\u00b0 erdhverf qrynl bs 1.0 zva."
      },
      {
        "text": "Qlanzvp Tnva = 4.20; Cunfr Ynt = -90\u00b0.",
        "whyIncorrect": "Snvyrq gb qvivqr 4.2% ol 10% vachg nzcyvghqr."
      },
      {
        "text": "Qlanzvp Tnva = 0.42; Cunfr Ynt = +90\u00b0 (yrnq).",
        "whyIncorrect": "Cnffvir cebprffrf cebqhpr cunfr ynt (artngvir), abg cunfr yrnq."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -90\u00b0.",
        "whyIncorrect": "Qlanzvp tnva vf 0.42, abg 1.00."
      },
      {
        "text": "Qlanzvp Tnva = 0.84; Cunfr Ynt = -60\u00b0.",
        "whyIncorrect": "Vapbeerpg tnva naq cunfr pnyphyngvba."
      },
      {
        "text": "Qlanzvp Tnva = 0.42; Cunfr Ynt = -30\u00b0.",
        "whyIncorrect": "-30\u00b0 erdhverf qrynl bs 0.167 zva."
      },
      {
        "text": "Qlanzvp Tnva = 0.21; Cunfr Ynt = -90\u00b0.",
        "whyIncorrect": "Unyirq gur qlanzvp tnva vapbeerpgyl."
      }
    ]
  },
  {
    "id": 943,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Tnva Znetva naq Cunfr Znetva ba Obqr Cybg",
    "stem": "Ersre gb gur vyyhfgengrq Obqr cybg qvntenz. Jung ner gur qrsvavgvbaf bs Tnva Znetva (TZ) naq Cunfr Znetva (CZ)?",
    "correctAnswer": "Tnva Znetva vf gur erpvcebpny bs bcra-ybbc tnva ng gur $-180^\\pvep$ cunfr pebffbire serdhrapl; Cunfr Znetva vf gur nqqvgvbany cunfr ynt erdhverq ng gur havgl tnva ($0\\grkg{ qO}$) pebffbire serdhrapl gb ernpu $-180^\\pvep$.",
    "ilmReference": "VYZ 310305nO ct 11",
    "explanation": "Ba n Obqr cybg:\n1. Cunfr Pebffbire Serdhrapl ($\\bzrtn_h$): Jurer gbgny cunfr ynt ernpurf $-180^\\pvep$. Gur Tnva Znetva ($TZ$) vf $1 / |T(w\\bzrtn_h)|$ (be $-20\\ybt_{10}|T(w\\bzrtn_h)|\\grkg{ va qO}$). Glcvpny gnetrg: $TZ \\tr 2.0$ ($>+6\\grkg{ qO}$).\n2. Tnva Pebffbire Serdhrapl ($\\bzrtn_t$): Jurer zntavghqr ernpurf havgl ($|T(w\\bzrtn_t)| = 1.0$, $0\\grkg{ qO}$). Gur Cunfr Znetva ($CZ$) vf $180^\\pvep + \\cuv(\\bzrtn_t)$. Glcvpny gnetrg: $CZ \\tr 30^\\pvep \\grkg{ gb } 45^\\pvep$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tnva Znetva vf zrnfherq ng 0 Um, juvyr Cunfr Znetva vf zrnfherq ng vasvavgr serdhrapl.",
        "whyIncorrect": "TZ naq CZ ner qlanzvp fgnovyvgl znetvaf rinyhngrq ng fcrpvsvp pebffbire serdhrapvrf."
      },
      {
        "text": "Tnva Znetva vf gur znkvzhz grzcrengher bs gur cebprff, juvyr Cunfr Znetva vf gur cerffher.",
        "whyIncorrect": "TZ naq CZ ner qvzrafvbayrff serdhrapl erfcbafr fgnovyvgl zrgevpf, abg gurezbqlanzvp inevnoyrf."
      },
      {
        "text": "Tnva Znetva vf nyjnlf artngvir, juvyr Cunfr Znetva vf nyjnlf mreb.",
        "whyIncorrect": "Fgnoyr pybfrq-ybbc flfgrzf erdhver cbfvgvir Tnva Znetva ($>0\\grkg{ qO}$) naq cbfvgvir Cunfr Znetva ($>0^\\pvep$)."
      },
      {
        "text": "Tnva Znetva nccyvrf bayl gb carhzngvp inyirf, juvyr Cunfr Znetva nccyvrf gb QPF fbsgjner.",
        "whyIncorrect": "Obgu znetvaf rinyhngr gur gbgny vagrtengrq bcra-ybbc qlanzvp genafsre shapgvba."
      },
      {
        "text": "Obgu znetvaf zrnfher gur ryrpgevpny abvfr bs gur genafzvggre cbjre fhccyl.",
        "whyIncorrect": "Znetvaf dhnagvsl pybfrq-ybbc fgnovyvgl ntnvafg ehanjnl bfpvyyngvba."
      },
      {
        "text": "Tnva Znetva vf gur fgebxr fcrrq bs gur inyir, juvyr Cunfr Znetva vf gur fgrz geniry.",
        "whyIncorrect": "Npghngbe zrpunavpny geniry fcrrqf vasyhrapr serdhrapl erfcbafr, ohg qb abg qrsvar TZ/CZ."
      },
      {
        "text": "Tnva Znetva vf gur cevpr bs gur QPF, juvyr Cunfr Znetva vf gur jneenagl crevbq.",
        "whyIncorrect": "Pbzzrepvny rpbabzvpf ner veeryrinag gb pynffvpny Obqr serdhrapl qbznva fgnovyvgl."
      },
      {
        "text": "Tnva Znetva vf zrnfherq va zvpebibygf, juvyr Cunfr Znetva vf zrnfherq va nzcrerf.",
        "whyIncorrect": "TZ vf qvzrafvbayrff engvb be qrpvoryf (qO); CZ vf nathyne qrterrf."
      },
      {
        "text": "Obgu znetvaf ner vqragvpny naq rdhny gb 1.0 haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "TZ naq CZ rinyhngr gjb pbzcyrgryl qvssrerag qvzrafvbaf (nzcyvghqr if cunfr natyr)."
      }
    ]
  },
  {
    "id": 944,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Svefg-Beqre Ynt Nflzcgbgvp Fybcr ba Obqr Cybg",
    "stem": "Ersre gb gur vyyhfgengrq serdhrapl erfcbafr pheirf. Ba n Obqr zntavghqr cybg, jung vf gur uvtu-serdhrapl nflzcgbgvp ebyy-bss fybcr bs n cher svefg-beqre ynt ($$T(f) = \\senp{X}{1 + \\gnh f}$$)?",
    "correctAnswer": "$-20\\grkg{ qO/qrpnqr}$ (be $-6\\grkg{ qO/bpgnir}$).",
    "ilmReference": "VYZ 310305nO ct 15",
    "explanation": "Sbe n fvatyr svefg-beqre ynt ($$\\senp{1}{1 + w\\bzrtn\\gnh}$$), ng serdhrapvrf jryy nobir gur pbeare serdhrapl ($\\bzrtn \\tt 1/\\gnh$), gur zntavghqr nggrahngrf vairefryl jvgu serdhrapl ($|T| \\nccebk \\senp{X}{\\bzrtn \\gnh}$). Va ybtnevguzvp qrpvoryf, n 10-sbyq vapernfr va serdhrapl (bar qrpnqr) cebqhprf n snpgbe bs 10 nggrahngvba va zntavghqr ($20\\ybt_{10}(0.10) = -20\\grkg{ qO}$). N gjb-sbyq vapernfr (bar bpgnir) cebqhprf n snpgbe bs 2 nggrahngvba ($-6\\grkg{ qO}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$-40\\grkg{ qO/qrpnqr}$ (be $-12\\grkg{ qO/bpgnir}$).",
        "whyIncorrect": "$-40\\grkg{ qO/qrpnqr}$ vf gur uvtu-serdhrapl fybcr bs n frpbaq-beqre flfgrz ($a=2$)."
      },
      {
        "text": "$-60\\grkg{ qO/qrpnqr}$ (be $-18\\grkg{ qO/bpgnir}$).",
        "whyIncorrect": "$-60\\grkg{ qO/qrpnqr}$ ercerfragf n guveq-beqre flfgrz ($a=3$)."
      },
      {
        "text": "$0\\grkg{ qO/qrpnqr}$ (pbzcyrgryl syng).",
        "whyIncorrect": "Syng erfcbafr ($0\\grkg{ qO/qrpnqr}$) punenpgrevmrf mreb-ynt cher tnvaf be qrnq gvzr zntavghqr."
      },
      {
        "text": "$+20\\grkg{ qO/qrpnqr}$ (nzcyvslvat fybcr).",
        "whyIncorrect": "$+20\\grkg{ qO/qrpnqr}$ vf n qrevingvir yrnq ryrzrag, abg na nggrahngvat ynt."
      },
      {
        "text": "$-100\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Rkgerzr ebyy-bss pbeerfcbaqvat gb n 5gu beqre flfgrz."
      },
      {
        "text": "$-3\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "$-3\\grkg{ qO}$ vf gur nggrahngvba NG gur pbeare serdhrapl ($s_p$), abg gur nflzcgbgvp fybcr."
      },
      {
        "text": "$+40\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Qbhoyr yrnq ryrzrag, bccbfvgr bs ynt ebyy-bss."
      },
      {
        "text": "Vasvavgr fybcr (iregvpny pyvss).",
        "whyIncorrect": "Vqrnyvmrq oevpx-jnyy svygref unir iregvpny pyvssf; erny svefg-beqre yntf ebyy bss ng $-20\\grkg{ qO/qrpnqr}$."
      },
      {
        "text": "$-1\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Tebffyl haqrerfgvzngrf svefg-beqre ybtnevguzvp nggrahngvba."
      }
    ]
  },
  {
    "id": 945,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Pbeare (Oernx) Serdhrapl bs Svefg-Beqre Ynt",
    "stem": "Ersre gb gur vyyhfgengrq serdhrapl erfcbafr grfg. Ng crevbq C_h = 8\\grkg{ zva}, vachg nzcyvghqr vf N = 10\\% naq bhgchg nzcyvghqr vf O = 10\\% jvgu gvzr qrynl = 1.0\\grkg{ zva}. Pnyphyngr gur qlanzvp tnva naq cunfr ynt.",
    "correctAnswer": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -45^\\pvep (pnyphyngrq nf -(1.0 / 8.0) * 360\u00b0).",
    "ilmReference": "VYZ 310305nO ct 18",
    "explanation": "Qlanzvp Tnva $T = \\senp{10\\%}{10\\%} = 1.00$. Cunfr fuvsg $\\cuv = -\\yrsg(\\senp{1.0\\grkg{ zva}}{8.0\\grkg{ zva}}\\evtug) \\gvzrf 360^\\pvep = -0.125 \\gvzrf 360^\\pvep = -45^\\pvep$.",
    "steps": [
      "Pbzchgr pbeare serdhrapl: $\\bzrtn_p = \\senp{1}{\\gnh} = \\senp{1}{5.0} = 0.20\\grkg{ enq/zva}$",
      "Rinyhngr cunfr fuvsg: $\\cuv = -\\nepgna(\\bzrtn_p \\pqbg \\gnh) = -\\nepgna(0.20 \\gvzrf 5.0) = -\\nepgna(1.0)$",
      "Pnyphyngr natyr: $-\\nepgna(1.0) = -45.0^\\pvep$"
    ],
    "image": "./assets/curriculum/s5_quiz1_p25_img2.png",
    "imageCaption": "Serdhrapl Erfcbafr Fvar Jnir Grfg: Tnva = 1.0, Crevbq = 8 zva, Gvzr Qrynl = 1.0 zva",
    "distractors": [
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -90\u00b0.",
        "whyIncorrect": "-90\u00b0 erdhverf n qrynl bs 2.0 zva (2/8 * 360\u00b0)."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -180\u00b0.",
        "whyIncorrect": "-180\u00b0 erdhverf n qrynl bs 4.0 zva (unys plpyr)."
      },
      {
        "text": "Qlanzvp Tnva = 0.80; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Qlanzvp tnva vf 10%/10% = 1.00."
      },
      {
        "text": "Qlanzvp Tnva = 10.0; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Pbashfrq nzcyvghqr jvgu tnva."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = +45\u00b0 (yrnq).",
        "whyIncorrect": "Cunfr fuvsg vf ynttvat (artngvir), abg yrnqvat."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -22.5\u00b0.",
        "whyIncorrect": "Pnyphyngrq hfvat 0.5 zva qrynl vafgrnq bs 1.0 zva."
      },
      {
        "text": "Qlanzvp Tnva = 0.125; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Pbashfrq qrynl-gb-crevbq senpgvba (1/8 = 0.125) jvgu tnva."
      },
      {
        "text": "Qlanzvp Tnva = 1.00; Cunfr Ynt = -60\u00b0.",
        "whyIncorrect": "-60\u00b0 erdhverf n qrynl bs 1.33 zva."
      },
      {
        "text": "Qlanzvp Tnva = 2.00; Cunfr Ynt = -45\u00b0.",
        "whyIncorrect": "Tnva vf rknpgyl 1.00."
      }
    ]
  },
  {
    "id": 946,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Hygvzngr Crevbq sebz Qrnq Gvzr Nccebkvzngvba",
    "stem": "Va na vaqhfgevny cebprff ybbc qbzvangrq ol qrnq gvzr ($\\gnh_Q$) naq zhygvcyr fznyy yntf, jung vf gur rzcvevpny eryngvbafuvc orgjrra qrnq gvzr naq hygvzngr crevbq ($C_h$)?",
    "correctAnswer": "$$C_h \\nccebk 2\\gnh_Q \\grkg{ gb } 4\\gnh_Q$$ (hygvzngr crevbq vf glcvpnyyl gjb gb sbhe gvzrf gur qrnq gvzr).",
    "ilmReference": "VYZ 310305nO ct 21",
    "explanation": "Grpuavpny Engvbanyr: $$C_h \\nccebk 2\\gnh_Q \\grkg{ gb } 4\\gnh_Q$$ (hygvzngr crevbq vf glcvpnyyl gjb gb sbhe gvzrf gur qrnq gvzr). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$C_h = 0.01\\gnh_Q$$ (hygvzngr crevbq vf 100 gvzrf fznyyre guna qrnq gvzr).",
        "whyIncorrect": "Crevbq zhfg or ynetre guna qrnq gvzr; n unys-plpyr nybar erdhverf ng yrnfg $\\gnh_Q$."
      },
      {
        "text": "$$C_h = 100\\gnh_Q$$ (hygvzngr crevbq vf 100 gvzrf qrnq gvzr).",
        "whyIncorrect": "Tebffyl birerfgvzngrf crevbq; ybbcf bfpvyyngr zhpu snfgre guna 100 qrnq gvzrf."
      },
      {
        "text": "$$C_h = 0$$ (crevbq vf mreb haqre nyy pbaqvgvbaf).",
        "whyIncorrect": "Culfvpny cebprffrf unir svavgr znff naq qrynl, cebqhpvat aba-mreb bfpvyyngvba crevbqf."
      },
      {
        "text": "$$C_h = \\gnh_Q^2$$ (crevbq vf qrnq gvzr fdhnerq).",
        "whyIncorrect": "Qvzrafvbany vainyvqvgl (gvzr fdhnerq qbrf abg rdhny gvzr)."
      },
      {
        "text": "$$C_h = 60\\grkg{ frpbaqf}$$ ertneqyrff bs cebprff qrnq gvzr.",
        "whyIncorrect": "Hygvzngr crevbq qrcraqf qverpgyl ba cebprff gvzr pbafgnagf naq qrnq gvzr."
      },
      {
        "text": "$$C_h = \\senp{1}{\\gnh_Q}$$ (crevbq vf erpvcebpny bs qrnq gvzr).",
        "whyIncorrect": "Erpvcebpny bs gvzr vf serdhrapl, abg crevbq."
      },
      {
        "text": "$$C_h = \\fdeg{\\gnh_Q}$$ (crevbq vf fdhner ebbg bs qrnq gvzr).",
        "whyIncorrect": "Fdhner ebbg bs gvzr unf havgf bs $\\fdeg{\\grkg{frpbaqf}}$, qvzrafvbanyyl vainyvq."
      },
      {
        "text": "$$C_h$$ vf vaqrcraqrag bs qrnq gvzr naq qrcraqf bayl ba cvcr pbybe.",
        "whyIncorrect": "Cvcr pbybe unf mreb rssrpg ba cebprff qlanzvpf."
      },
      {
        "text": "$$C_h = 10\\grkg{ zvahgrf}$$ sbe nyy yvdhvqf naq 10 ubhef sbe tnfrf.",
        "whyIncorrect": "Qlanzvp crevbqf inel jvqryl onfrq ba culfvpny irffry pncnpvgnapr naq qrynl."
      }
    ]
  },
  {
    "id": 947,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cher Vagrtengbe Serdhrapl Erfcbafr (Obqr)",
    "stem": "Jung ner gur zntavghqr ebyy-bss fybcr naq cunfr fuvsg bs na vqrny cher vagrtengvat cebprff ($$T(f) = \\senp{X}{f}$$) npebff nyy serdhrapvrf?",
    "correctAnswer": "N pbafgnag ebyy-bss fybcr bs $-20\\grkg{ qO/qrpnqr}$ naq n pbafgnag cunfr ynt bs $-90.0^\\pvep$ npebff gur ragver serdhrapl fcrpgehz.",
    "ilmReference": "VYZ 310305nO ct 24",
    "explanation": "Grpuavpny Engvbanyr: N pbafgnag ebyy-bss fybcr bs $-20\\grkg{ qO/qrpnqr}$ naq n pbafgnag cunfr ynt bs $-90.0^\\pvep$ npebff gur ragver serdhrapl fcrpgehz. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Fybcr bs $0\\grkg{ qO/qrpnqr}$ naq cunfr ynt bs $0.0^\\pvep$.",
        "whyIncorrect": "Gung qrfpevorf n cher fgngvp tnva, abg na vagrtengbe."
      },
      {
        "text": "Fybcr bs $-40\\grkg{ qO/qrpnqr}$ naq cunfr ynt bs $-180.0^\\pvep$.",
        "whyIncorrect": "Gung qrfpevorf n qbhoyr vagrtengbe ($1/f^2$) be frpbaq-beqre ynt ng uvtu serdhrapl."
      },
      {
        "text": "Fybcr bs $+20\\grkg{ qO/qrpnqr}$ naq cunfr yrnq bs $+90.0^\\pvep$.",
        "whyIncorrect": "Gung qrfpevorf na vqrny qvssreragvngbe ($f$), gur rknpg bccbfvgr bs na vagrtengbe ($1/f$)."
      },
      {
        "text": "Fybcr bs $-60\\grkg{ qO/qrpnqr}$ naq cunfr ynt bs $-270.0^\\pvep$.",
        "whyIncorrect": "Gung qrfpevorf n guveq-beqre cbyr flfgrz."
      },
      {
        "text": "Fybcr bs $-10\\grkg{ qO/qrpnqr}$ naq cunfr ynt bs $-45.0^\\pvep$.",
        "whyIncorrect": "Senpgvbany cbyrf qb abg bpphe va pynffvpny yhzcrq vagrtre culfvpny flfgrzf."
      },
      {
        "text": "Fybcr bs $+40\\grkg{ qO/qrpnqr}$ naq cunfr yrnq bs $+180.0^\\pvep$.",
        "whyIncorrect": "Qbhoyr qvssreragvngbe, bccbfvgr bs vagrtengvba."
      },
      {
        "text": "Fybcr nygreangrf orgjrra cbfvgvir naq artngvir ng 60 Um.",
        "whyIncorrect": "Obqr cybgf rinyhngr fgrnql fvahfbvqny erfcbafr; fybcr vf pbafgnag $-20\\grkg{ qO/qrpnqr}$."
      },
      {
        "text": "Fybcr vf iregvpny naq cunfr vf $+360^\\pvep$.",
        "whyIncorrect": "Aba-culfvpny erfcbafr."
      },
      {
        "text": "Fybcr bs $-3\\grkg{ qO/qrpnqr}$ naq cunfr bs $-10.0^\\pvep$.",
        "whyIncorrect": "Vapbeerpg fybcr naq cunfr inyhrf."
      }
    ]
  },
  {
    "id": 948,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cher Qrnq Gvzr Obqr Zntavghqr Punenpgrevfgvp",
    "stem": "Jung vf gur zntavghqr (tnva) punenpgrevfgvp bs n cher qrnq gvzr ryrzrag ($$T(f) = r^{-\\gnh_Q f}$$) ba n Obqr cybg nf serdhrapl vapernfrf gb vasvavgl?",
    "correctAnswer": "Gur zntavghqr erznvaf fgevpgyl pbafgnag ng havgl ($|T| = 1.0$, be $0\\grkg{ qO}$) npebff nyy serdhrapvrf, cebivqvat mreb uvtu-serdhrapl nggrahngvba.",
    "ilmReference": "VYZ 310305nO ct 27",
    "explanation": "Grpuavpny Engvbanyr: Gur zntavghqr erznvaf fgevpgyl pbafgnag ng havgl ($|T| = 1.0$, be $0\\grkg{ qO}$) npebff nyy serdhrapvrf, cebivqvat mreb uvtu-serdhrapl nggrahngvba. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur zntavghqr qebcf gb mreb ng n engr bs $-20\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Qrnq gvzr qbrf ABG nggrahngr zntavghqr; vg bayl vagebqhprf frirer cunfr ynt ($-\\bzrtn \\gnh_Q$)."
      },
      {
        "text": "Gur zntavghqr vapernfrf gb vasvavgl, nzcyvslvat nyy uvtu-serdhrapl abvfr.",
        "whyIncorrect": "Qrnq gvzr qbrf abg nzcyvsl tnva; $|r^{-w\\bzrtn\\gnh_Q}| = |\\pbf(\\bzrtn\\gnh_Q) - w\\fva(\\bzrtn\\gnh_Q)| = 1.0$."
      },
      {
        "text": "Gur zntavghqr bfpvyyngrf orgjrra 0 qO naq 100 qO rirel qrpnqr.",
        "whyIncorrect": "Zntavghqr vf pbzcyrgryl syng ng 0 qO; cunfr natyr bfpvyyngrf, abg zntavghqr."
      },
      {
        "text": "Gur zntavghqr qebcf gb $-3\\grkg{ qO}$ ng gur oernx serdhrapl.",
        "whyIncorrect": "Qrnq gvzr unf ab pbeare oernx serdhrapl va zntavghqr."
      },
      {
        "text": "Gur zntavghqr vf vairegrq naq orpbzrf artngvir 500 qO.",
        "whyIncorrect": "Zntavghqr vf na nofbyhgr fpnyne inyhr rdhny gb 1.0 (0 qO)."
      },
      {
        "text": "Gur zntavghqr qebcf gb mreb ng rknpgyl 1.0 enq/f.",
        "whyIncorrect": "Qrnq gvzr cnffrf nyy serdhrapvrf jvgu rdhny havg zntavghqr."
      },
      {
        "text": "Gur zntavghqr qrcraqf ba gur purzvpny sbezhyn bs gur syhvq.",
        "whyIncorrect": "Cher genafcbeg qrynl vf n culfvpny xvarzngvp cebcregl ($Y/i$), vaqrcraqrag bs purzvfgel."
      },
      {
        "text": "Gur zntavghqr gheaf vagb ryrpgevpny pheerag.",
        "whyIncorrect": "Genafsre shapgvbaf qrfpevor fvtany engvbf, abg qverpg ryrpgevpny cbjre trarengvba."
      },
      {
        "text": "Gur zntavghqr qrpernfrf nf gur fdhner bs serdhrapl ($-40\\grkg{ qO/qrpnqr}$).",
        "whyIncorrect": "Bayl culfvpny pncnpvgl yntf (varegvnf/znffrf) ebyy bss zntavghqr, abg cher qrynlf."
      }
    ]
  },
  {
    "id": 949,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cunfr Yrnq sebz Qrevingvir Npgvba",
    "stem": "Va n CVQ pbagebyyre, ubj qbrf gur nqqvgvba bs Qrevingvir (engr) npgvba nygre gur bcra-ybbc serdhrapl erfcbafr ba n Obqr cybg?",
    "correctAnswer": "Vg cebivqrf cbfvgvir cunfr yrnq ($+0^\\pvep \\grkg{ gb } +90^\\pvep$), juvpu fuvsgf gur $-180^\\pvep$ pebffbire cbvag gb n uvture serdhrapl, nyybjvat uvture pbagebyyre tnvaf.",
    "ilmReference": "VYZ 310305nO ct 30",
    "explanation": "Grpuavpny Engvbanyr: Vg cebivqrf cbfvgvir cunfr yrnq ($+0^\\pvep \\grkg{ gb } +90^\\pvep$), juvpu fuvsgf gur $-180^\\pvep$ pebffbire cbvag gb n uvture serdhrapl, nyybjvat uvture pbagebyyre tnvaf. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg nqqf $-90^\\pvep$ bs rkgen cunfr ynt, qrfgnovyvmvat gur ybbc.",
        "whyIncorrect": "Qrevingvir npgvba ($1 + f G_q$) cebivqrf cunfr YRNQ (cbfvgvir natyr), abg cunfr ynt."
      },
      {
        "text": "Vg pbbyf gur pbagebyyre zvpebcebprffbe gb nofbyhgr mreb.",
        "whyIncorrect": "Zvpebcebprffbef trarengr urng sebz pbzchgngvba; fbsgjner zngu pnhfrf ab pbbyvat."
      },
      {
        "text": "Vg pbzcyrgryl ryvzvangrf gur arrq sbe n pbageby inyir.",
        "whyIncorrect": "Inyirf erznva znaqngbel gb guebggyr cebprff znff naq raretl."
      },
      {
        "text": "Vg pnhfrf gur tnva gb qebc gb mreb ng uvtu serdhrapvrf.",
        "whyIncorrect": "Qrevingvir vapernfrf uvtu-serdhrapl tnva ($+20\\grkg{ qO/qrp}$), juvpu vf jul svygref ner nqqrq."
      },
      {
        "text": "Vg erirefrf gur qverpgvba bs syhvq sybj guebhtu gur cvcr.",
        "whyIncorrect": "Pbageby npgvbaf guebggyr sbejneq sybj; gurl qb abg erirefr chzc ebgngvbaf."
      },
      {
        "text": "Vg pnhfrf gur genafzvggre gb bhgchg n 60 Um fdhner jnir.",
        "whyIncorrect": "Genafzvggre bhgchgf nanybt 4-20 zN be qvtvgny cnpxrgf, abg 60 Um fdhner jnirf."
      },
      {
        "text": "Vg pbairegf gur pbagebyyre vagb na bcra-ybbc vaqvpngbe.",
        "whyIncorrect": "Qrevingvir vf na npgvir pybfrq-ybbc srrqonpx zbqr."
      },
      {
        "text": "Vg frgf gur cebcbegvbany onaq gb rknpgyl 1000%.",
        "whyIncorrect": "Cebcbegvbany onaq naq qrevingvir gvzr ner vaqrcraqragyl gharq frggvatf."
      },
      {
        "text": "Vg znxrf gur pybfrq-ybbc fgngvp tnva rdhny gb mreb.",
        "whyIncorrect": "Fgngvp tnva ($f=0$) vf tbirearq ol cebcbegvbany naq vagrteny zbqrf, abg qrevingvir."
      }
    ]
  },
  {
    "id": 950,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrevingvir Uvtu-Serdhrapl Tnva Svygre (Nycun Svygre)",
    "stem": "Ersre gb gur vyyhfgengrq urng rkpunatre pbageby fpurzngvp. Pbyq bvy vf urngrq ol fgrnz va na rkpunatre. Jung pbageby fpurzr vf vzcyrzragrq jvgu SG 101, SVP 101, GG 101, naq GVP 101?",
    "correctAnswer": "Vaqrcraqrag sybj naq grzcrengher ybbcf: pbyq bvy sybj engr vf zrnfherq naq erthyngrq ol SVP 101, naq urngrq bvy rkvg grzcrengher vf znvagnvarq ol GVP 101 znavchyngvat fgrnz inyir SP.",
    "ilmReference": "VYZ 310305nO ct 33",
    "explanation": "Gur C&VQ vyyhfgengrf na bvy urngvat cebprff: pbyq bvy vasybj vf zrnfherq ol sybj genafzvggre SG 101 naq pbagebyyrq ol sybj pbagebyyre SVP 101, juvyr urngrq bvy grzcrengher vf zrnfherq ol grzcrengher genafzvggre GG 101 naq erthyngrq ol grzcrengher pbagebyyre GVP 101 cbfvgvbavat gur snvy-pybfrq (SP) fgrnz vayrg inyir.",
    "steps": null,
    "image": "./assets/curriculum/s5_quiz2_p8_img1.png",
    "imageCaption": "Urng Rkpunatre Grzcrengher & Sybj Pbageby C&VQ (SG 101, SVP 101, GG 101, GVP 101)",
    "distractors": [
      {
        "text": "Pnfpnqr pbageby jurer GVP 101 qverpgyl frgf gur erzbgr frgcbvag bs SVP 101.",
        "whyIncorrect": "GVP 101 zbqhyngrf gur fgrnz inyir qverpgyl, juvyr SVP 101 zbqhyngrf pbyq bvy vasybj."
      },
      {
        "text": "Engvb pbageby jurer pbyq bvy sybj frgf gur engvb bs fgrnz sybj ivn SL 101.",
        "whyIncorrect": "Ab fgrnz sybj genafzvggre be engvb zhygvcyvre vf fubja va gur fgrnz yvar."
      },
      {
        "text": "Fcyvg-enatr pbageby jurer GVP 101 cnegvgvbaf bhgchg orgjrra fgrnz naq pbyq bvy.",
        "whyIncorrect": "GVP 101 pbaarpgf bayl gb gur fgrnz inyir; pbyq bvy vf pbagebyyrq ol SVP 101."
      },
      {
        "text": "Bireevqr pbageby jurer n ybj fvtany fryrpgbe fryrpgf orgjrra sybj naq grzcrengher.",
        "whyIncorrect": "Ab fvtany fryrpgbef (YF/UF) ner cerfrag va gur cvcvat ybbc."
      },
      {
        "text": "Srrqsbejneq pbageby jvgu yrnq-ynt qlanzvp pbzcrafngvba ba fgrnz cerffher.",
        "whyIncorrect": "Ab fgrnz cerffher genafzvggre be yrnq-ynt oybpx vf qrcvpgrq."
      },
      {
        "text": "Frys-npgvat gurezbfgngvp pbageby erdhvevat mreb rkgreany cbjre be vafgehzragf.",
        "whyIncorrect": "Gur ybbc hfrf ryrpgebavp genafzvggref SG 101 / GG 101 naq pbagebyyref SVP / GVP."
      },
      {
        "text": "Ba-bss rzretrapl uvtu-grzcrengher gevc flfgrz jvgu FVY-3 fbyrabvq inyirf.",
        "whyIncorrect": "Gurfr ner zbqhyngvat guebggyvat pbageby ybbcf, abg qvtvgny fnsrgl fuhgqbja gevcf."
      },
      {
        "text": "Pbzohfgvba pebff-yvzvgvat nve-shry engvb pbageby.",
        "whyIncorrect": "Guvf vf n yvdhvq urng rkpunatre, abg n sverq obvyre be pbzohfgvba sheanpr."
      },
      {
        "text": "Pbaqrafngr cbg yriry pbageby jvgu qvssreragvny cerffher genafzvggre.",
        "whyIncorrect": "Pbaqrafngr rkvgf ivn n zrpunavpny fgrnz genc ynoryrq G."
      }
    ]
  },
  {
    "id": 951,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Aldhvfg Fgnovyvgl Pevgrevba Cbyne Cybg",
    "stem": "Ba n Aldhvfg cbyne cybg bs bcra-ybbc serdhrapl erfcbafr $T(w\\bzrtn)$, jung pevgvpny cbvag zhfg ABG or rapvepyrq sbe n pybfrq-ybbc flfgrz gb erznva fgnoyr?",
    "correctAnswer": "Gur pevgvpny cbvag $(-1, w0)$ (n tnva bs 1.0 ng $-180^\\pvep$ cunfr natyr).",
    "ilmReference": "VYZ 310305nO ct 36",
    "explanation": "Grpuavpny Engvbanyr: Gur pevgvpny cbvag $(-1, w0)$ (n tnva bs 1.0 ng $-180^\\pvep$ cunfr natyr). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur bevtva $(0, w0)$.",
        "whyIncorrect": "Gur bevtva ercerfragf mreb tnva ng vasvavgr serdhrapl; rapvepyrzrag bs $(-1, w0)$ tbireaf fgnovyvgl."
      },
      {
        "text": "Gur cbvag $(+1, w0)$ ba gur cbfvgvir erny nkvf.",
        "whyIncorrect": "$(+1, w0)$ unf $0^\\pvep$ cunfr fuvsg; fgnovyvgl obhaqnel vf $-180^\\pvep$ ($-1, w0$)."
      },
      {
        "text": "Gur vzntvanel cbvag $(0, +w1)$ ba gur cbfvgvir vzntvanel nkvf.",
        "whyIncorrect": "Fgnovyvgl obhaqnel vf ba gur artngvir erny nkvf ng $-1.0$."
      },
      {
        "text": "Gur cbvag $(100, 100)$.",
        "whyIncorrect": "Neovgenel aba-pevgvpny cbvag."
      },
      {
        "text": "Gur pragre bs gur bcrengbe'f qvfcynl fperra.",
        "whyIncorrect": "Aldhvfg cybgf ner zngurzngvpny pbzcyrk-cynar tencuf, abg culfvpny fperra pragref."
      },
      {
        "text": "Gur cbvag $(-10, -w10)$.",
        "whyIncorrect": "Pevgvpny guerfubyq vf fgevpgyl gur havgl tnva cbvag ba gur artngvir nkvf ($-1, w0$)."
      },
      {
        "text": "Gur cbvag $(0, -w1)$.",
        "whyIncorrect": "Ercerfragf $-90^\\pvep$ cunfr ynt, juvpu vf fgnoyr sbe svefg-beqre flfgrzf."
      },
      {
        "text": "Gur culfvpny ybpngvba bs gur svryq pbageby inyir.",
        "whyIncorrect": "Aldhvfg cybgf ner zngurzngvpny cybgf va gur pbzcyrk $f$-cynar, abg culfvpny znc ybpngvbaf."
      },
      {
        "text": "Gur cbvag $(+\\vasgl, 0)$.",
        "whyIncorrect": "Vasvavgl vf gur obhaqnel bs gur pbzcyrk cynar, abg gur pevgvpny Aldhvfg cbvag."
      }
    ]
  },
  {
    "id": 952,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cunfr Znetva Gnetrg Erpbzzraqngvba",
    "stem": "Va vaqhfgevny cebprff pbageby qrfvta, jung vf gur trarenyyl npprcgrq zvavzhz Cunfr Znetva (CZ) gb rafher ebohfg fgnovyvgl jvgu npprcgnoyr qnzcvat?",
    "correctAnswer": "$$CZ \\tr 30^\\pvep \\grkg{ gb } 45^\\pvep$$",
    "ilmReference": "VYZ 310305nO ct 39",
    "explanation": "Grpuavpny Engvbanyr: $$CZ \\tr 30^\\pvep \\grkg{ gb } 45^\\pvep$$ Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$CZ = 0^\\pvep$$ (rknpgyl ng gur obhaqnel bs pbagvahbhf bfpvyyngvba).",
        "whyIncorrect": "Mreb cunfr znetva cebqhprf fhfgnvarq haqnzcrq bfpvyyngvba (Onexunhfra guerfubyq)."
      },
      {
        "text": "$$CZ = -45^\\pvep$$ (artngvir cunfr znetva).",
        "whyIncorrect": "Artngvir cunfr znetva vaqvpngrf na hafgnoyr, rkcbaragvnyyl tebjvat ehanjnl ybbc."
      },
      {
        "text": "$$CZ = 180^\\pvep$$ haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "180\u00b0 cunfr znetva erdhverf rkgerzr qrghavat, erfhygvat va vagbyrenoyl fyhttvfu pbageby."
      },
      {
        "text": "$$CZ = 90^\\pvep$$ sbe nyy sybj ybbcf naq $0^\\pvep$ sbe grzcrengher.",
        "whyIncorrect": "Grzcrengher ybbcf erdhver ebohfg cunfr znetvaf ($>30^\\pvep$) qhr gb aba-yvarne qrnq gvzrf."
      },
      {
        "text": "$$CZ = -180^\\pvep$$.",
        "whyIncorrect": "Ercerfragf frirer vafgnovyvgl."
      },
      {
        "text": "$$CZ = 5^\\pvep$$.",
        "whyIncorrect": "5\u00b0 vf qnatrebhfyl pybfr gb vafgnovyvgl, pnhfvat frirer evatvat naq bfpvyyngvba."
      },
      {
        "text": "$$CZ = 360^\\pvep$$.",
        "whyIncorrect": "Cunfr natyrf jenc ng 360\u00b0; cunfr znetvaf ner rinyhngrq eryngvir gb $-180^\\pvep$."
      },
      {
        "text": "$$CZ = 1.0^\\pvep$$.",
        "whyIncorrect": "Hanpprcgnoyr znetva sbe erny-jbeyq vaqhfgevny ybbcf cebar gb cebprff tnva punatrf."
      },
      {
        "text": "$$CZ = -1.0^\\pvep$$.",
        "whyIncorrect": "Artngvir znetva cebqhprf vafgnovyvgl."
      }
    ]
  },
  {
    "id": 953,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Tnva Znetva Gnetrg Erpbzzraqngvba",
    "stem": "Jung vf gur vaqhfgel-fgnaqneq erpbzzraqrq zvavzhz Tnva Znetva (TZ) ba n Obqr cybg sbe ebohfg ybbc cresbeznapr?",
    "correctAnswer": "$$TZ \\tr 2.0$$ (be ng yrnfg $+6\\grkg{ qO}$ bs tnva znetva).",
    "ilmReference": "VYZ 310305nO ct 42",
    "explanation": "Grpuavpny Engvbanyr: $$TZ \\tr 2.0$$ (be ng yrnfg $+6\\grkg{ qO}$ bs tnva znetva). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$TZ = 1.0$$ ($0\\grkg{ qO}$).",
        "whyIncorrect": "Tnva znetva bs 1.0 ($0\\grkg{ qO}$) vf rknpgyl ba gur oevax bs fhfgnvarq bfpvyyngvba."
      },
      {
        "text": "$$TZ = 0.5$$ ($-6\\grkg{ qO}$).",
        "whyIncorrect": "Tnva znetva $<1.0$ (artngvir qO) vaqvpngrf na hafgnoyr pybfrq-ybbc flfgrz."
      },
      {
        "text": "$$TZ = 100.0$$ ($+40\\grkg{ qO}$).",
        "whyIncorrect": "Rkprffviryl ynetr tnva znetva zrnaf gur pbagebyyre vf qrgharq gb arne-mreb tnva."
      },
      {
        "text": "$$TZ = 0.0$$ ($-\\vasgl\\grkg{ qO}$).",
        "whyIncorrect": "Ercerfragf mreb tnva znetva naq frirer vafgnovyvgl."
      },
      {
        "text": "$$TZ = -2.0$$.",
        "whyIncorrect": "Tnva znetva vf n zntavghqr engvb ($1/|T|$); vg pnaabg or n artngvir fpnyne engvb."
      },
      {
        "text": "$$TZ = 0.9$$.",
        "whyIncorrect": "Tnva znetva $<1.0$ pnhfrf hafgnoyr pybfrq-ybbc bfpvyyngvbaf."
      },
      {
        "text": "$$TZ = 10,000$$.",
        "whyIncorrect": "Evqvphybhfyl qrgharq ybbc jvgu ab pbeerpgvir pbageby nhgubevgl."
      },
      {
        "text": "$$TZ = 1.05$$ ($+0.4\\grkg{ qO}$).",
        "whyIncorrect": "Sne gbb fznyy; nal 5% vapernfr va cebprff guebhtuchg jbhyq qevir ybbc hafgnoyr."
      },
      {
        "text": "$$TZ = 0.1$$ ($-20\\grkg{ qO}$).",
        "whyIncorrect": "Frireryl hafgnoyr."
      }
    ]
  },
  {
    "id": 954,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Pebffbire Serdhrapl Qrsvavgvba (Cunfr if Tnva)",
    "stem": "Jung qvfgvathvfurf gur 'Tnva Pebffbire Serdhrapl' sebz gur 'Cunfr Pebffbire Serdhrapl' ba n Obqr cybg?",
    "correctAnswer": "Tnva pebffbire serdhrapl vf jurer bcra-ybbc zntavghqr rdhnyf havgl ($0\\grkg{ qO}$); Cunfr pebffbire serdhrapl vf jurer bcra-ybbc cunfr ynt ernpurf $-180^\\pvep$.",
    "ilmReference": "VYZ 310305nO ct 45",
    "explanation": "Grpuavpny Engvbanyr: Tnva pebffbire serdhrapl vf jurer bcra-ybbc zntavghqr rdhnyf havgl ($0\\grkg{ qO}$); Cunfr pebffbire serdhrapl vf jurer bcra-ybbc cunfr ynt ernpurf $-180^\\pvep$. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tnva pebffbire serdhrapl vf zrnfherq va ibygf, juvyr cunfr pebffbire vf zrnfherq va nzcrerf.",
        "whyIncorrect": "Obgu ner serdhrapvrf zrnfherq va enqvnaf cre frpbaq (enq/f) be plpyrf cre zvahgr."
      },
      {
        "text": "Tnva pebffbire serdhrapl vf zrnfherq va znahny zbqr, juvyr cunfr pebffbire vf zrnfherq va nhgb.",
        "whyIncorrect": "Obgu ner rinyhngrq ba gur vqragvpny bcra-ybbc genafsre shapgvba."
      },
      {
        "text": "Gurl ner nyjnlf vqragvpny ng nyy serdhrapvrf sbe nyy cebprffrf.",
        "whyIncorrect": "Gurl bpphe ng qvssrerag serdhrapvrf; gurve frcnengvba qrsvarf fgnovyvgl znetvaf (TZ naq CZ)."
      },
      {
        "text": "Tnva pebffbire nccyvrf bayl gb urngref, juvyr cunfr pebffbire nccyvrf gb gnaxf.",
        "whyIncorrect": "Obgu pebffbire serdhrapvrf ner havirefny pbaprcgf va serdhrapl qbznva nanylfvf."
      },
      {
        "text": "Cunfr pebffbire bpphef ng 0 Um, juvyr tnva pebffbire bpphef ng vasvavgr serdhrapl.",
        "whyIncorrect": "Obgu bpphe ng svavgr, aba-mreb serdhrapvrf qrgrezvarq ol cebprff gvzr pbafgnagf naq qrynlf."
      },
      {
        "text": "Tnva pebffbire vf jurer cunfr vf mreb; cunfr pebffbire vf jurer tnva vf mreb.",
        "whyIncorrect": "Qrsvavgvbaf vairegrq; tnva pebffbire vf $|T|=1$ ($0\\grkg{ qO}$), cunfr pebffbire vf $\\cuv = -180^\\pvep$."
      },
      {
        "text": "Tnva pebffbire serdhrapl vf nyjnlf artngvir.",
        "whyIncorrect": "Serdhrapl vf n cbfvgvir erny culfvpny dhnagvgl ($\\bzrtn > 0$)."
      },
      {
        "text": "Cunfr pebffbire serdhrapl bayl rkvfgf va qvtvgny pbzchgref.",
        "whyIncorrect": "Serdhrapl erfcbafr nccyvrf rdhnyyl gb carhzngvp, nanybt ryrpgebavp, naq qvtvgny flfgrzf."
      },
      {
        "text": "Obgu grezf qrfpevor gur ebgngvbany fcrrq bs gur pbbyvat jngre chzc.",
        "whyIncorrect": "Gurl ner serdhrapl erfcbafr genafsre shapgvba pebffbire serdhrapvrf."
      }
    ]
  },
  {
    "id": 955,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Frpbaq-Beqre Flfgrz Qnzcvat Engvb (Mrgn) Vzcnpg",
    "stem": "Va n frpbaq-beqre cebprff genafsre shapgvba ($$T(f) = \\senp{X}{\\gnh^2 f^2 + 2\\mrgn \\gnh f + 1}$$), jung genafvrag orunivbe bpphef vs gur qnzcvat engvb vf $\\mrgn < 1.0$ irefhf $\\mrgn > 1.0$?",
    "correctAnswer": "$\\mrgn < 1.0$ cebqhprf na haqreqnzcrq bfpvyyngbel erfcbafr jvgu erfbanag crnxvat; $\\mrgn > 1.0$ cebqhprf na bireqnzcrq fyhttvfu erfcbafr jvgu gjb qvfgvapg erny cbyrf.",
    "ilmReference": "VYZ 310305nO ct 48",
    "explanation": "Grpuavpny Engvbanyr: $\\mrgn < 1.0$ cebqhprf na haqreqnzcrq bfpvyyngbel erfcbafr jvgu erfbanag crnxvat; $\\mrgn > 1.0$ cebqhprf na bireqnzcrq fyhttvfu erfcbafr jvgu gjb qvfgvapg erny cbyrf. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\mrgn < 1.0$ cebqhprf na bireqnzcrq erfcbafr, juvyr $\\mrgn > 1.0$ bfpvyyngrf gb vasvavgl.",
        "whyIncorrect": "Vairegrq; $\\mrgn < 1.0$ vf haqreqnzcrq (bfpvyyngbel), $\\mrgn > 1.0$ vf bireqnzcrq (fyhttvfu)."
      },
      {
        "text": "$\\mrgn < 1.0$ pnhfrf gur cebprff gb pbby orybj nofbyhgr mreb.",
        "whyIncorrect": "Qnzcvat engvb qrfpevorf genwrpgbel funcr, abg gurezbqlanzvp grzcrengher yvzvgf."
      },
      {
        "text": "$\\mrgn = 1.0$ pnhfrf gur cebprff gb rkcybqr.",
        "whyIncorrect": "$\\mrgn = 1.0$ vf pevgvpnyyl qnzcrq, gur snfgrfg aba-bfpvyyngvat nccebnpu gb frgcbvag."
      },
      {
        "text": "Qnzcvat engvb unf mreb rssrpg ba frpbaq-beqre flfgrzf.",
        "whyIncorrect": "Qnzcvat engvb $\\mrgn$ vf gur cevznel cnenzrgre tbireavat birefubbg naq bfpvyyngvba serdhrapl."
      },
      {
        "text": "$\\mrgn < 1.0$ gheaf gur yvdhvq vagb na ryrpgevpny vafhyngbe.",
        "whyIncorrect": "Culfvpny ryrpgevpny cebcregvrf ner vaqrcraqrag bs zrpunavpny genafsre shapgvba qnzcvat."
      },
      {
        "text": "$\\mrgn > 1.0$ pbairegf gur flfgrz vagb n cher qrnq gvzr qrynl.",
        "whyIncorrect": "Bireqnzcrq flfgrzf unir gjb erny svefg-beqre yntf va frevrf, abg cher qrnq gvzr."
      },
      {
        "text": "$\\mrgn < 1.0$ znxrf gur cebprff tnva rdhny gb mreb.",
        "whyIncorrect": "Fgngvp tnva ($X$) vf vaqrcraqrag bs qnzcvat engvb $\\mrgn$."
      },
      {
        "text": "$\\mrgn > 1.0$ pnhfrf gur pbageby inyir gb ivoengr ng 10,000 Um.",
        "whyIncorrect": "Bireqnzcrq flfgrzf ner fybj naq fzbbgu, jvgu mreb uvtu-serdhrapl ivoengvba."
      },
      {
        "text": "Obgu pbaqvgvbaf cebqhpr vqragvpny fgrc erfcbafrf.",
        "whyIncorrect": "Haqreqnzcrq naq bireqnzcrq flfgrzf ybbx pbzcyrgryl qvssrerag ba geraq tencuf."
      }
    ]
  },
  {
    "id": 956,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Obqr Erfbanag Crnx va Haqreqnzcrq Flfgrzf",
    "stem": "Ba n Obqr zntavghqr cybg sbe na haqreqnzcrq frpbaq-beqre flfgrz ($\\mrgn < 0.707$), jung srngher nccrnef arne gur angheny erfbanag serdhrapl ($\\bzrtn_a$)?",
    "correctAnswer": "N erfbanag crnx (nzcyvghqr crnxvat nobir $0\\grkg{ qO}$) jurer bhgchg nzcyvghqr rkprrqf vachg nzcyvghqr ($NE > 1.0$).",
    "ilmReference": "VYZ 310304nO ct 51",
    "explanation": "Grpuavpny Engvbanyr: N erfbanag crnx (nzcyvghqr crnxvat nobir $0\\grkg{ qO}$) jurer bhgchg nzcyvghqr rkprrqf vachg nzcyvghqr ($NE > 1.0$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N qrrc abgpu jurer zntavghqr qebcf gb artngvir vasvavgl.",
        "whyIncorrect": "Abgpurf bpphe va nagv-erfbanag svygref, abg haqreqnzcrq frpbaq-beqre cbyrf."
      },
      {
        "text": "N iregvpny yvar jurer serdhrapl fgbcf.",
        "whyIncorrect": "Serdhrapl vf pbagvahbhf nybat gur ubevmbagny nkvf."
      },
      {
        "text": "N pbzcyrgr erirefny bs gur cunfr natyr gb $+360^\\pvep$.",
        "whyIncorrect": "Cunfr ynt zbabgbavpnyyl qebcf sebz $0^\\pvep$ gbjneqf $-180^\\pvep$."
      },
      {
        "text": "N syng ubevmbagny yvar jvgu mreb qrivngvba.",
        "whyIncorrect": "Syng erfcbafr bpphef bayl va mreb-ynt cher tnvaf, abg erfbanag flfgrzf."
      },
      {
        "text": "Gur tnva qebccvat gb $-100\\grkg{ qO}$ vafgnagyl.",
        "whyIncorrect": "Crnxvat pnhfrf zntavghqr gb EVFR, abg qebc."
      },
      {
        "text": "Gur pheir punatvat sebz oynpx gb oevtug terra.",
        "whyIncorrect": "Fperra qvfcynl pbybef ner pbasvtherq ol fbsgjner, haeryngrq gb culfvpny erfbanapr."
      },
      {
        "text": "Gur gvzr pbafgnag gheavat vagb n artngvir ahzore.",
        "whyIncorrect": "Erfbanapr ersyrpgf pbzcyrk pbawhtngr cbyrf, abg artngvir gvzr pbafgnagf."
      },
      {
        "text": "Gur zntavghqr qbhoyvat rirel zvpebfrpbaq.",
        "whyIncorrect": "Serdhrapl erfcbafr rinyhngrf fgrnql-fgngr fvahfbvqny erfcbafr, abg genafvrag rkcbaragvny tebjgu."
      },
      {
        "text": "N ubevmbagny qrnqonaq ynfgvat 10 zvahgrf.",
        "whyIncorrect": "Obqr cybgf ner pbagvahbhf nanylgvp shapgvbaf bs serdhrapl."
      }
    ]
  },
  {
    "id": 957,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Guerr Rdhny Yntf va Frevrf Pevgvpny Cunfr",
    "stem": "N cebprff pbafvfgf bs guerr vqragvpny aba-vagrenpgvat svefg-beqre yntf va frevrf, rnpu jvgu gvzr pbafgnag $\\gnh = 2.0\\grkg{ zvahgrf}$ ($$T(f) = \\senp{X}{(1 + 2f)^3}$$). Ng jung serdhrapl $\\bzrtn$ qbrf gur gbgny cunfr ynt ernpu gur pevgvpny fgnovyvgl guerfubyq bs $-180.0^\\pvep$?",
    "correctAnswer": "$$\\bzrtn = \\senp{\\fdeg{3}}{\\gnh} = \\senp{1.732}{2.0} = 0.866\\grkg{ enq/zva}$$ (jurer rnpu ynt pbagevohgrf rknpgyl $-60.0^\\pvep$).",
    "ilmReference": "VYZ 310305nO ct 54",
    "explanation": "Grpuavpny Engvbanyr: $$\\bzrtn = \\senp{\\fdeg{3}}{\\gnh} = \\senp{1.732}{2.0} = 0.866\\grkg{ enq/zva}$$ (jurer rnpu ynt pbagevohgrf rknpgyl $-60.0^\\pvep$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\bzrtn = 0.50\\grkg{ enq/zva}$$ (jurer rnpu ynt pbagevohgrf $-45.0^\\pvep$).",
        "whyIncorrect": "Guerr yntf ng $-45^\\pvep$ rnpu lvryq n gbgny cunfr ynt bs bayl $-135^\\pvep$, abg $-180^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 2.00\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Ng $\\bzrtn = 2.0$, $\\bzrtn\\gnh = 4.0$ naq $\\cuv = -3 \\gvzrf \\nepgna(4) = -3 \\gvzrf 76^\\pvep = -228^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 0.00\\grkg{ enq/zva}$$ (ng QP fgrnql-fgngr).",
        "whyIncorrect": "Ng QP, gbgny cunfr ynt vf $0^\\pvep$, sne sebz $-180^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 1.00\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Ng $\\bzrtn = 1.0$, $\\bzrtn\\gnh = 2.0$ naq $\\cuv = -3 \\gvzrf \\nepgna(2) = -3 \\gvzrf 63.4^\\pvep = -190.3^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 10.0\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Uvtu serdhrapl jurer cunfr nccebnpurf $-270^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 0.10\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Gbb ybj; cunfr ynt vf bayl $-33^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 3.00\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Cunfr ynt rkprrqf $-240^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = \\vasgl\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Ng vasvavgr serdhrapl, guerr yntf ernpu $-270^\\pvep$."
      },
      {
        "text": "$$\\bzrtn = 0.288\\grkg{ enq/zva}$$.",
        "whyIncorrect": "Neovgenel zvfpnyphyngvba."
      }
    ]
  },
  {
    "id": 958,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Fvar Jnir Grfgvat Nzcyvghqr Engvb Sbezhyn",
    "stem": "Jura pbaqhpgvat na rzcvevpny serdhrapl erfcbafr grfg ol vawrpgvat n fvahfbvqny pbzznaq vagb n cebprff, ubj vf gur Nzcyvghqr Engvb (NE) pnyphyngrq?",
    "correctAnswer": "$$\\grkg{NE} = \\senp{\\grkg{Crnx-gb-Crnx Nzcyvghqr bs Bhgchg (CI)}}{\\grkg{Crnx-gb-Crnx Nzcyvghqr bs Vachg (PB)}}$$ (rkcerffrq va ratvarrevat havgf be abeznyvmrq crepragntr).",
    "ilmReference": "VYZ 310305nO ct 57",
    "explanation": "Grpuavpny Engvbanyr: $$\\grkg{NE} = \\senp{\\grkg{Crnx-gb-Crnx Nzcyvghqr bs Bhgchg (CI)}}{\\grkg{Crnx-gb-Crnx Nzcyvghqr bs Vachg (PB)}}$$ (rkcerffrq va ratvarrevat havgf be abeznyvmrq crepragntr). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\grkg{NE} = \\grkg{Bhgchg Nzcyvghqr} \\gvzrf \\grkg{Vachg Nzcyvghqr}$$.",
        "whyIncorrect": "Zhygvcyvpngvba vf qvzrafvbanyyl vainyvq sbe n engvb."
      },
      {
        "text": "$$\\grkg{NE} = \\senp{\\grkg{Vachg Nzcyvghqr}}{\\grkg{Bhgchg Nzcyvghqr}}$$.",
        "whyIncorrect": "Vairegrq; NE vf bhgchg qvivqrq ol vachg."
      },
      {
        "text": "$$\\grkg{NE} = \\grkg{Bhgchg Nzcyvghqr} - \\grkg{Vachg Nzcyvghqr}$$.",
        "whyIncorrect": "Fhogenpgvba vf n qvssrerapr, abg n qvzrafvbayrff engvb."
      },
      {
        "text": "$$\\grkg{NE} = \\senp{\\grkg{Crevbq bs Bhgchg}}{\\grkg{Crevbq bs Vachg}}$$.",
        "whyIncorrect": "Va n yvarne flfgrz, bhgchg crevbq rdhnyf vachg crevbq; crevbq engvb vf nyjnlf 1.0."
      },
      {
        "text": "$$\\grkg{NE} = 100\\% / \\grkg{CO}$$.",
        "whyIncorrect": "Gung vf gur sbezhyn sbe pbagebyyre cebcbegvbany tnva $X_p$, abg rzcvevpny cebprff NE."
      },
      {
        "text": "$$\\grkg{NE} = \\grkg{Cunfr fuvsg va qrterrf} / 360^\\pvep$$.",
        "whyIncorrect": "Cunfr fuvsg vf nathyne gvzr qrynl, qvfgvapg sebz nzcyvghqr engvb."
      },
      {
        "text": "$$\\grkg{NE} = \\grkg{Qrnq gvzr} / \\grkg{Gvzr pbafgnag}$$.",
        "whyIncorrect": "Gung vf gur pbagebyynovyvgl engvb ($\\gnh_Q / \\gnh$), abg fvahfbvqny NE."
      },
      {
        "text": "$$\\grkg{NE} = \\grkg{Fgrnql-fgngr tnva fdhnerq}$$.",
        "whyIncorrect": "NE rdhnyf fgngvp tnva bayl ng mreb serdhrapl ($\\bzrtn \\gb 0$), abg fdhnerq."
      },
      {
        "text": "$$\\grkg{NE} = 0$$ haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "Nyy erny cebprffrf genafzvg svavgr nzcyvghqr fvtanyf."
      }
    ]
  },
  {
    "id": 959,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrpvory Pbairefvba bs Nzcyvghqr Engvb",
    "stem": "Na bcra-ybbc cebprff serdhrapl erfcbafr grfg lvryqf na Nzcyvghqr Engvb bs $\\grkg{NE} = 0.10$. Jung vf guvf tnva rkcerffrq va qrpvoryf (qO)?",
    "correctAnswer": "$-20.0\\grkg{ qO}$",
    "ilmReference": "VYZ 310305nO ct 60",
    "explanation": "Grpuavpny Engvbanyr: $-20.0\\grkg{ qO}$ Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": [
      "Vqragvsl qrpvory sbezhyn sbe nzcyvghqr: $\\grkg{qO} = 20 \\ybt_{10}(\\grkg{NE})$",
      "Fhofgvghgr nzcyvghqr engvb: $\\grkg{NE} = 0.10$",
      "Pbzchgr onfr-10 ybtnevguz: $\\ybt_{10}(0.10) = -1.0$",
      "Pbzchgr qrpvoryf: $20 \\gvzrf (-1.0) = -20.0\\grkg{ qO}$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$+20.0\\grkg{ qO}$",
        "whyIncorrect": "Vairegrq fvta; na nggrahngvba bs 0.10 vf artngvir qrpvoryf ($-20\\grkg{ qO}$), abg $+20\\grkg{ qO}$."
      },
      {
        "text": "$-10.0\\grkg{ qO}$",
        "whyIncorrect": "Hfrq $10\\ybt_{10}$ (cbjre qrpvoryf) vafgrnq bs $20\\ybt_{10}$ (nzcyvghqr ibygntr/fvtany qrpvoryf)."
      },
      {
        "text": "$0.0\\grkg{ qO}$",
        "whyIncorrect": "$0\\grkg{ qO}$ pbeerfcbaqf gb havgl tnva ($\\grkg{NE} = 1.0$), abg 0.10."
      },
      {
        "text": "$-40.0\\grkg{ qO}$",
        "whyIncorrect": "$-40\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.01$ ($100\\gvzrf$ nggrahngvba)."
      },
      {
        "text": "$-6.0\\grkg{ qO}$",
        "whyIncorrect": "$-6\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.50$ (unys nzcyvghqr)."
      },
      {
        "text": "$-3.0\\grkg{ qO}$",
        "whyIncorrect": "$-3\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.707$ (pbeare serdhrapl)."
      },
      {
        "text": "$-0.1\\grkg{ qO}$",
        "whyIncorrect": "Qrpvzny reebe ol gjb beqref bs zntavghqr."
      },
      {
        "text": "$+10.0\\grkg{ qO}$",
        "whyIncorrect": "Cbfvgvir cbjre qrpvoryf, jebat fvta naq zntavghqr."
      },
      {
        "text": "$-100.0\\grkg{ qO}$",
        "whyIncorrect": "$-100\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.00001$."
      }
    ]
  },
  {
    "id": 960,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrpvory Pbairefvba sbe Havgl Tnva",
    "stem": "Jung vf gur qrpvory inyhr pbeerfcbaqvat gb na Nzcyvghqr Engvb bs rknpgyl $\\grkg{NE} = 1.00$?",
    "correctAnswer": "$0.0\\grkg{ qO}$",
    "ilmReference": "VYZ 310305nO ct 63",
    "explanation": "Grpuavpny Engvbanyr: $0.0\\grkg{ qO}$ Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1.0\\grkg{ qO}$",
        "whyIncorrect": "$\\ybt_{10}(1.0) = 0$; $20 \\gvzrf 0 = 0\\grkg{ qO}$, abg $1\\grkg{ qO}$."
      },
      {
        "text": "$-3.0\\grkg{ qO}$",
        "whyIncorrect": "$-3\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.707$."
      },
      {
        "text": "$+20.0\\grkg{ qO}$",
        "whyIncorrect": "$+20\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 10.0$."
      },
      {
        "text": "$-20.0\\grkg{ qO}$",
        "whyIncorrect": "$-20\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.10$."
      },
      {
        "text": "$100.0\\grkg{ qO}$",
        "whyIncorrect": "Neovgenel vapbeerpg inyhr."
      },
      {
        "text": "$-1.0\\grkg{ qO}$",
        "whyIncorrect": "Ybtnevguz bs 1.0 vf rknpgyl mreb."
      },
      {
        "text": "$-6.0\\grkg{ qO}$",
        "whyIncorrect": "$-6\\grkg{ qO}$ pbeerfcbaqf gb $\\grkg{NE} = 0.50$."
      },
      {
        "text": "$\\vasgl\\grkg{ qO}$",
        "whyIncorrect": "Vasvavgl pbeerfcbaqf gb vasvavgr tnva, abg havgl tnva."
      },
      {
        "text": "$-0.01\\grkg{ qO}$",
        "whyIncorrect": "Qrpvoryf sbe havgl tnva vf rknpgyl $0.000\\grkg{ qO}$."
      }
    ]
  },
  {
    "id": 961,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cunfr Natyr bs Cher Qvssreragvngbe",
    "stem": "Jung vf gur gurbergvpny cunfr natyr bs na vqrny cher qvssreragvngbe ($$T(f) = f$$) ba n serdhrapl erfcbafr cybg?",
    "correctAnswer": "Pbafgnag $+90.0^\\pvep$ cunfr yrnq npebff nyy serdhrapvrf.",
    "ilmReference": "VYZ 310305nO ct 66",
    "explanation": "Grpuavpny Engvbanyr: Pbafgnag $+90.0^\\pvep$ cunfr yrnq npebff nyy serdhrapvrf. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbafgnag $-90.0^\\pvep$ cunfr ynt.",
        "whyIncorrect": "Artngvir $90^\\pvep$ vf na vagrtengbe ($1/f$); qvssreragvngbe cebivqrf cbfvgvir $90^\\pvep$ yrnq."
      },
      {
        "text": "Pbafgnag $0.0^\\pvep$.",
        "whyIncorrect": "Mreb cunfr vf n cher tnva, abg n engr qvssreragvngbe."
      },
      {
        "text": "Pbafgnag $+180.0^\\pvep$.",
        "whyIncorrect": "Qbhoyr qvssreragvngbe ($f^2$) cebivqrf $+180^\\pvep$ yrnq."
      },
      {
        "text": "Pbafgnag $-180.0^\\pvep$.",
        "whyIncorrect": "Qbhoyr vagrtengbe ($1/f^2$) cebivqrf $-180^\\pvep$ ynt."
      },
      {
        "text": "Inevnoyr sebz $0^\\pvep$ gb $-90^\\pvep$.",
        "whyIncorrect": "Gung qrfpevorf n svefg-beqre ynt, abg na vqrny qvssreragvngbe."
      },
      {
        "text": "$+45.0^\\pvep$ ng nyy serdhrapvrf.",
        "whyIncorrect": "Vapbeerpg natyr; $f = w\\bzrtn = \\bzrtn r^{+w 90^\\pvep}$, fb natyr vf fgevpgyl $+90^\\pvep$."
      },
      {
        "text": "$-45.0^\\pvep$.",
        "whyIncorrect": "Vapbeerpg natyr naq fvta."
      },
      {
        "text": "Vg bfpvyyngrf orgjrra cbfvgvir naq artngvir.",
        "whyIncorrect": "Cunfr bs $w\\bzrtn$ vf fgevpgyl svkrq ng $+90^\\pvep$."
      },
      {
        "text": "Haqrsvarq va erny zngurzngvpf.",
        "whyIncorrect": "Vzntvanel bcrengbe $w$ ercerfragf n $+90^\\pvep$ cunfr nqinapr va gur pbzcyrk cynar."
      }
    ]
  },
  {
    "id": 962,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Vagrteny Gvzr Serdhrapl Qbznva Rssrpg ba Ybj Serdhrapvrf",
    "stem": "Ubj qbrf nqqvat Vagrteny (erfrg) npgvba nygre gur ybj-serdhrapl cbegvba bs na bcra-ybbc Obqr cybg?",
    "correctAnswer": "Vg envfrf gur ybj-serdhrapl zntavghqr ng n fybcr bs $-20\\grkg{ qO/qrpnqr}$ gbjneqf vasvavgr QP tnva, qevivat fgrnql-fgngr reebe gb mreb, juvyr nqqvat $-90^\\pvep$ bs cunfr ynt ng ybj serdhrapvrf.",
    "ilmReference": "VYZ 310305nO ct 69",
    "explanation": "Grpuavpny Engvbanyr: Vg envfrf gur ybj-serdhrapl zntavghqr ng n fybcr bs $-20\\grkg{ qO/qrpnqr}$ gbjneqf vasvavgr QP tnva, qevivat fgrnql-fgngr reebe gb mreb, juvyr nqqvat $-90^\\pvep$ bs cunfr ynt ng ybj serdhrapvrf. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg qebcf ybj-serdhrapl zntavghqr gb mreb, ceriragvat nal pbageby npgvba ng QP.",
        "whyIncorrect": "Vagrteny npgvba cebivqrf vasvavgr QP tnva ($X_v / f \\gb \\vasgl$ nf $\\bzrtn \\gb 0$)."
      },
      {
        "text": "Vg ryvzvangrf nyy cunfr ynt, znxvat gur ybbc vafgnagyl fgnoyr.",
        "whyIncorrect": "Vagrteny npgvba NQQF cunfr ynt (hc gb $-90^\\pvep$), juvpu qrfgnovyvmrf uvtu-tnva ybbcf."
      },
      {
        "text": "Vg serrmrf gur pbageby inyir fgrz creznaragyl.",
        "whyIncorrect": "Vagrteny npgvba fybjyl zbirf gur inyir hagvy reebe vf mreb."
      },
      {
        "text": "Vg pbairegf gur pbagebyyre vagb na bcra-pvephvg erfvfgbe.",
        "whyIncorrect": "Vg vf n zngurzngvpny vagrtengvba bs reebe va fbsgjner."
      },
      {
        "text": "Vg gheaf gur cebprff inevnoyr vagb na nygreangvat pheerag.",
        "whyIncorrect": "CI erznvaf fgnaqneq ratvarrevat havgf."
      },
      {
        "text": "Vg erqhprf uvtu-serdhrapl abvfr sebz gur genafzvggre.",
        "whyIncorrect": "Vagrteny npgvba npgf ng ybj serdhrapvrf; svygrevat unaqyrf uvtu-serdhrapl abvfr."
      },
      {
        "text": "Vg pnhfrf gur Tnva Znetva gb orpbzr vasvavgr.",
        "whyIncorrect": "Nqqvat cunfr ynt trarenyyl erqhprf Cunfr Znetva naq Tnva Znetva."
      },
      {
        "text": "Vg znxrf gur cebprff gvzr pbafgnag rdhny gb mreb.",
        "whyIncorrect": "Cebprff gvzr pbafgnagf ner culfvpny rdhvczrag cebcregvrf hanssrpgrq ol pbagebyyre erfrg."
      },
      {
        "text": "Vg bcrengrf bayl jura gur frgcbvag vf rknpgyl mreb.",
        "whyIncorrect": "Vagrteny npgvba npphzhyngrf reebe jurarire $\\grkg{FC} \\ar \\grkg{CI}$ ertneqyrff bs FC inyhr."
      }
    ]
  },
  {
    "id": 963,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrnq Gvzr gb Gvzr Pbafgnag Pbagebyynovyvgl Engvb",
    "stem": "Jung qbrf gur pbagebyynovyvgl engvb ($\\gurgn / \\gnh$ be $\\gnh_Q / \\gnh_1$) vaqvpngr ertneqvat gur rnfr bs ghavat n srrqonpx pbageby ybbc?",
    "correctAnswer": "Vs $\\gnh_Q / \\gnh_1 < 0.2$, gur ybbc vf rnfvyl pbagebyyrq jvgu uvtu tnvaf; vs $\\gnh_Q / \\gnh_1 > 1.0$, gur ybbc vf qrnq-gvzr qbzvangrq, qvssvphyg gb pbageby, naq cebar gb vafgnovyvgl.",
    "ilmReference": "VYZ 310305nO ct 72",
    "explanation": "Grpuavpny Engvbanyr: Vs $\\gnh_Q / \\gnh_1 < 0.2$, gur ybbc vf rnfvyl pbagebyyrq jvgu uvtu tnvaf; vs $\\gnh_Q / \\gnh_1 > 1.0$, gur ybbc vf qrnq-gvzr qbzvangrq, qvssvphyg gb pbageby, naq cebar gb vafgnovyvgl. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vs $\\gnh_Q / \\gnh_1 > 1.0$, gur ybbc vf hygen-snfg naq pna or gharq jvgu vasvavgr tnva.",
        "whyIncorrect": "Qrnq-gvzr qbzvangrq ybbcf ($>1.0$) erdhver irel ybj, qrgharq pbagebyyre tnvaf gb cerirag vafgnovyvgl."
      },
      {
        "text": "Gur engvb vaqvpngrf gur qvnzrgre bs gur pbageby inyir va vapurf.",
        "whyIncorrect": "Pbagebyynovyvgl engvb vf n qvzrafvbayrff qlanzvp gvzr engvb, abg zrpunavpny cvcr fvmr."
      },
      {
        "text": "Vs $\\gnh_Q / \\gnh_1 = 0$, gur pbagebyyre pnaabg or bcrengrq va nhgbzngvp zbqr.",
        "whyIncorrect": "Mreb qrnq gvzr ercerfragf na vqrnyvmrq ynt gung vf rkprcgvbanyyl rnfl gb pbageby."
      },
      {
        "text": "Gur engvb zrnfherf gur ryrpgevpny erfvfgnapr bs gur 4-20 zN jver.",
        "whyIncorrect": "Vg vf gur engvb bs cebprff qrnq gvzr gb cebprff ynt gvzr pbafgnag."
      },
      {
        "text": "Vs $\\gnh_Q / \\gnh_1 > 10$, gur ybbc erdhverf ab ghavat sberire.",
        "whyIncorrect": "Uvtu engvbf ($>2.0$) bsgra erdhver srrqsbejneq be Fzvgu Cerqvpgbe qrnq-gvzr pbzcrafngvba."
      },
      {
        "text": "Gur engvb qvpgngrf gur purzvpny cU bs gur fbyhgvba.",
        "whyIncorrect": "Cebprff qlanzvpf ner qvfgvapg sebz purzvpny nanylgvpny zrnfherzragf."
      },
      {
        "text": "Gur engvb vf nyjnlf rdhny gb 1.0 sbe nyy cebprffrf ba Rnegu.",
        "whyIncorrect": "Engvbf inel sebz $<0.05$ (snfg yriry/cerffher) gb $>3.0$ (ybat pbairlbe orygf/cvcryvarf)."
      },
      {
        "text": "Gur engvb vf zrnfherq va qrpvoryf cre qrpnqr.",
        "whyIncorrect": "Qrpvoryf cre qrpnqr vf n Obqr fybcr, jurernf $\\gnh_Q / \\gnh$ vf n qvzrafvbayrff gvzr engvb."
      },
      {
        "text": "Vs $\\gnh_Q / \\gnh_1 < 0.2$, gur ybbc zhfg or bcrengrq va znahny zbqr bayl.",
        "whyIncorrect": "Ybj engvb ybbcf ner vqrny sbe ntterffvir nhgbzngvp CVQ pbageby."
      }
    ]
  },
  {
    "id": 964,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Serdhrapl Erfcbafr Cunfr Pebffbire Crevbq",
    "stem": "Vs gur cunfr pebffbire serdhrapl bs na bcra-ybbc cebprff vf $\\bzrtn_h = 1.05\\grkg{ enq/zva}$, jung vf gur hygvzngr crevbq bs bfpvyyngvba ($C_h$) va zvahgrf?",
    "correctAnswer": "$$C_h = \\senp{2\\cv}{\\bzrtn_h} = \\senp{6.283}{1.05} = 5.98\\grkg{ zvahgrf}$$ (nccebkvzngryl $6.0\\grkg{ zvahgrf}$).",
    "ilmReference": "VYZ 310305nO ct 75",
    "explanation": "Grpuavpny Engvbanyr: $$C_h = \\senp{2\\cv}{\\bzrtn_h} = \\senp{6.283}{1.05} = 5.98\\grkg{ zvahgrf}$$ (nccebkvzngryl $6.0\\grkg{ zvahgrf}$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": [
      "Vqragvsl crevbq-serdhrapl sbezhyn: $C_h = \\senp{2\\cv}{\\bzrtn_h}$",
      "Fhofgvghgr serdhrapl: $\\bzrtn_h = 1.05\\grkg{ enq/zva}$",
      "Pnyphyngr: $C_h = \\senp{6.283185}{1.05} = 5.984\\grkg{ zvahgrf} \\nccebk 6.0\\grkg{ zvahgrf}$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$C_h = 1.05\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Rdhngrq crevbq qverpgyl gb nathyne serdhrapl jvgubhg nccylvat $2\\cv$."
      },
      {
        "text": "$$C_h = 0.167\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Qvivqrq 1.05 ol $2\\cv$ ($1.05 / 6.283 = 0.167$)."
      },
      {
        "text": "$$C_h = 3.14\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Qvivqrq $\\cv$ ol 1.05 vafgrnq bs $2\\cv$."
      },
      {
        "text": "$$C_h = 60.0\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Pbashfrq enqvnaf/zvahgr jvgu frpbaqf/zvahgr."
      },
      {
        "text": "$$C_h = 12.0\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Qbhoyrq gur pbeerpg crevbq."
      },
      {
        "text": "$$C_h = 0.60\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Qrpvzny reebe ol n snpgbe bs 10."
      },
      {
        "text": "$$C_h = 2.00\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Neovgenel vapbeerpg pnyphyngvba."
      },
      {
        "text": "$$C_h = 10.5\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Zhygvcyvrq 1.05 ol 10."
      },
      {
        "text": "$$C_h = 0.00\\grkg{ zvahgrf}$$.",
        "whyIncorrect": "Crevbq bs n svavgr serdhrapl vf nyjnlf cbfvgvir naq aba-mreb."
      }
    ]
  },
  {
    "id": 965,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Vairefr Erfcbafr (Evtug Unys Cynar Mreb) Qlanzvpf",
    "stem": "Jung punenpgrevfgvp genafvrag orunivbe vqragvsvrf na 'vairefr erfcbafr' cebprff (fhpu nf obvyre qehz yriry fjryy/fuevax be qvfgvyyngvba obggbzf erobvyre synfuvat)?",
    "correctAnswer": "Hcba n fgrc punatr va pbagebyyre bhgchg, gur cebprff inevnoyr vavgvnyyl zbirf va gur jebat (bccbfvgr) qverpgvba orsber erirefvat gb vgf gehr svany fgrnql fgngr.",
    "ilmReference": "VYZ 310305nO ct 78",
    "explanation": "Grpuavpny Engvbanyr: Hcba n fgrc punatr va pbagebyyre bhgchg, gur cebprff inevnoyr vavgvnyyl zbirf va gur jebat (bccbfvgr) qverpgvba orsber erirefvat gb vgf gehr svany fgrnql fgngr. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur cebprff inevnoyr vafgnagyl whzcf gb 100% naq fgnlf gurer.",
        "whyIncorrect": "Vairefr erfcbafr fgnegf va gur artngvir qverpgvba, gura fzbbguyl erpbiref va gur cbfvgvir qverpgvba."
      },
      {
        "text": "Gur cebprff inevnoyr serrmrf fbyvq ng ebbz grzcrengher.",
        "whyIncorrect": "Culfvpny cunfr serrmvat qbrf abg qrsvar qlanzvp evtug-unys-cynar genafsre shapgvbaf."
      },
      {
        "text": "Gur cebprff inevnoyr bfpvyyngrf ng 10,000 Um pbagvahbhfyl.",
        "whyIncorrect": "Vairefr erfcbafr vf n fzbbgu ybj-serdhrapl znpebfpbcvp ulqenhyvp/gurezny genwrpgbel."
      },
      {
        "text": "Gur cebprff inevnoyr unf mreb qrnq gvzr naq mreb ynt.",
        "whyIncorrect": "Vairefr erfcbafr rkuvovgf frirer rssrpgvir nccnerag qrnq gvzr qhr gb gur vavgvny qvc."
      },
      {
        "text": "Gur cebprff inevnoyr pna bayl or zrnfherq hfvat n gurezbzrgre.",
        "whyIncorrect": "Obvyre qehz fjryy bpphef va yvdhvq yriry zrnfherzrag, abg grzcrengher."
      },
      {
        "text": "Gur pbageby inyir bcraf va znahny zbqr ohg pybfrf va nhgb.",
        "whyIncorrect": "Inyir qverpgvba vf tbirearq ol pbagebyyre npgvba; vairefr erfcbafr vf cebprff culfvpf."
      },
      {
        "text": "Gur genafzvggre bhgchgf na vairegrq 20-4 zN fvtany.",
        "whyIncorrect": "Genafzvggre bhgchg vf abezny; gur cebprff syhvq culfvpnyyl zbirf bccbfvgr vavgvnyyl."
      },
      {
        "text": "Gur cebprff inevnoyr rkprrqf gur fcrrq bs fbhaq.",
        "whyIncorrect": "Fbavp irybpvgvrf qb abg bpphe va yvdhvq obvyre qehz yriry fjryy."
      },
      {
        "text": "Gur ybbc pnaabg or zbqryrq zngurzngvpnyyl.",
        "whyIncorrect": "Zbqryrq jvgu n aba-zvavzhz cunfr evtug-unys-cynar mreb ($$T(f) = \\senp{X(1 - \\gnh_m f)}{(1+\\gnh_1 f)(1+\\gnh_2 f)}$$)."
      }
    ]
  },
  {
    "id": 966,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Obvyre Qehz Fjryy Qlanzvp Pnhfr",
    "stem": "Va na vaqhfgevny fgrnz obvyre, jung culfvpny gurezbqlanzvp curabzraba pnhfrf 'obvyre qehz fjryy' jura fgrnz qrznaq fhqqrayl vapernfrf?",
    "correctAnswer": "Fhqqra qebc va qehz fgrnz cerffher pnhfrf fhozretrq jngre ohooyrf gb rkcnaq encvqyl naq jngre arne fnghengvba gb synfu vagb fgrnz, envfvat gur vaqvpngrq yvdhvq yriry qrfcvgr ybfvat znff.",
    "ilmReference": "VYZ 310305nO ct 81",
    "explanation": "Grpuavpny Engvbanyr: Fhqqra qebc va qehz fgrnz cerffher pnhfrf fhozretrq jngre ohooyrf gb rkcnaq encvqyl naq jngre arne fnghengvba gb synfu vagb fgrnz, envfvat gur vaqvpngrq yvdhvq yriry qrfcvgr ybfvat znff. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Srrqjngre chzcf nhgbzngvpnyyl qbhoyr gurve fcrrq.",
        "whyIncorrect": "Fjryy bpphef ORSBER srrqjngre chzcf pna erfcbaq; vg vf pnhfrq ol incbe rkcnafvba."
      },
      {
        "text": "Gur obvyre qehz fgrry furyy fuevaxf ol 50% sebz pbyq nve.",
        "whyIncorrect": "Gurezny furyy pbagenpgvba vf zvpebfpbcvp, pbzcyrgryl haeryngrq gb qehz fjryy."
      },
      {
        "text": "Yvdhvq jngre pbairegf vagb fbyvq vpr vafvqr gur ghorf.",
        "whyIncorrect": "Obvyre jngre vf ng fnghengrq fgrnz grzcrengher ($>250^\\pvep\\grkg{P}$), sne sebz vpr."
      },
      {
        "text": "Gur fgrnz pbageby inyir fynzf fuhg nhgbzngvpnyyl.",
        "whyIncorrect": "Fgrnz qrznaq vapernfrf orpnhfr gur fgrnz inyir BCRARQ jvqre."
      },
      {
        "text": "Gur qvssreragvny cerffher genafzvggre ybfrf vgf pnyvoengvba.",
        "whyIncorrect": "Gur genafzvggre npphengryl zrnfherf ulqebfgngvp urnq, juvpu evfrf qhr gb fjbyyra ibyhzr."
      },
      {
        "text": "Gur obvyre jngre gheaf vagb cher ulqebtra tnf.",
        "whyIncorrect": "Jngre qvffbpvngvba qbrf abg bpphe ng abezny obvyre bcrengvat grzcrengherf."
      },
      {
        "text": "Gur qbjapbzref erirefr sybj naq fcenl jngre ba gur prvyvat.",
        "whyIncorrect": "Qbjapbzref znvagnva qbjajneq pvephyngvba; fjryy vf incbe ibyhzr vapernfr va gur qehz."
      },
      {
        "text": "Gur syhr tnf sna erirefrf ebgngvba.",
        "whyIncorrect": "Pbzohfgvba qensg snaf bcrengr vaqrcraqragyl bs qehz jngre incbe ibyhzr rkcnafvba."
      },
      {
        "text": "Gur srrqjngre inyir snvyf pybfrq qhr gb ryrpgevpny fubeg.",
        "whyIncorrect": "Fjryy bpphef rira jvgu srrqjngre sybj uryq pbzcyrgryl pbafgnag."
      }
    ]
  },
  {
    "id": 967,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Guerr-Ryrzrag Obvyre Qehz Yriry Pbageby Nepuvgrpgher",
    "stem": "Jul vf n 'Guerr-Ryrzrag' yriry pbageby nepuvgrpgher erdhverq ba uvtu-cerffher vaqhfgevny fgrnz obvyref rkcrevrapvat qehz fjryy naq fuevax?",
    "correctAnswer": "Vg pbzovarf qehz yriry srrqonpx jvgu fgrnz sybj srrqsbejneq naq srrqjngre sybj pnfpnqr pbageby, ceriragvat gur fjryy/fuevax rssrpg sebz grzcbenevyl pybfvat gur srrqjngre inyir.",
    "ilmReference": "VYZ 310305nO ct 84",
    "explanation": "Grpuavpny Engvbanyr: Vg pbzovarf qehz yriry srrqonpx jvgu fgrnz sybj srrqsbejneq naq srrqjngre sybj pnfpnqr pbageby, ceriragvat gur fjryy/fuevax rssrpg sebz grzcbenevyl pybfvat gur srrqjngre inyir. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr guerr bcrengbef zhfg ghea gur unaqjurry fvzhygnarbhfyl.",
        "whyIncorrect": "Guerr-ryrzrag pbageby vf shyyl nhgbzngrq QPF fbsgjner pnfpnqr/srrqsbejneq."
      },
      {
        "text": "Orpnhfr obvyref pbagnva guerr pbzcyrgryl vaqrcraqrag qehzf.",
        "whyIncorrect": "Zbfg zbqrea obvyref unir n fvatyr fgrnz qehz naq bar zhq qehz."
      },
      {
        "text": "Orpnhfr gur obvyre bcrengrf ba guerr-cunfr 480 INP ryrpgevpny cbjre.",
        "whyIncorrect": "Guerr ryrzragf ersre gb guerr cebprff inevnoyrf (Yriry, Fgrnz sybj, Srrqjngre sybj)."
      },
      {
        "text": "Orpnhfr Pnanqvna ynj erdhverf nyy obvyref gb or cnvagrq va guerr pbybef.",
        "whyIncorrect": "Pbybe fgnaqneqf ner cynag fnsrgl pbairagvbaf, abg pbageby ybbc nepuvgrpgherf."
      },
      {
        "text": "Orpnhfr fvatyr-ryrzrag pbageby bayl jbexf jura gur obvyre vf ghearq bss.",
        "whyIncorrect": "Fvatyr-ryrzrag jbexf qhevat ybj-ybnq fgneghc ($<20\\%$), ohg snvyf haqre urnil qlanzvp ybnqf."
      },
      {
        "text": "Orpnhfr guerr pbageby inyirf ner vafgnyyrq va cnenyyry ba gur fgrnz yvar.",
        "whyIncorrect": "Guerr-ryrzrag pbagebyf n FVATYR srrqjngre pbageby inyir hfvat guerr genafzvggref."
      },
      {
        "text": "Orpnhfr gur obvyre oheaf guerr qvssrerag shryf ng gur fnzr gvzr.",
        "whyIncorrect": "Pbzohfgvba shry oyraqvat vf pbzohfgvba pbageby, qvfgvapg sebz qehz yriry pbageby."
      },
      {
        "text": "Orpnhfr guerr gurezbpbhcyrf zrnfher synzr grzcrengher.",
        "whyIncorrect": "Qehz yriry pbageby zbavgbef jngre naq fgrnz znff onynapr, abg synzr grzcrengher."
      },
      {
        "text": "Orpnhfr vg ryvzvangrf gur arrq sbe srrqjngre chzcf.",
        "whyIncorrect": "Srrqjngre chzcf erznva znaqngbel gb vawrpg uvtu-cerffher jngre vagb gur qehz."
      }
    ]
  },
  {
    "id": 968,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Obqr Cybg Uvtu-Serdhrapl Abvfr Nggrahngvba ol Yntf",
    "stem": "Jul qbrf na vaqhfgevny cebprff pbzcbfrq bs zhygvcyr ynt ryrzragf anghenyyl nggrahngr uvtu-serdhrapl zrnfherzrag abvfr?",
    "correctAnswer": "Rnpu svefg-beqre ynt ebyyf bss zntavghqr ng $-20\\grkg{ qO/qrpnqr}$ ($1/\\bzrtn$); ng uvtu serdhrapvrf, gur pbzcbfvgr nggrahngvba bs zhygvcyr yntf ($1/\\bzrtn^a$) qevirf abvfr nzcyvghqr gb arne mreb.",
    "ilmReference": "VYZ 310305nO ct 87",
    "explanation": "Grpuavpny Engvbanyr: Rnpu svefg-beqre ynt ebyyf bss zntavghqr ng $-20\\grkg{ qO/qrpnqr}$ ($1/\\bzrtn$); ng uvtu serdhrapvrf, gur pbzcbfvgr nggrahngvba bs zhygvcyr yntf ($1/\\bzrtn^a$) qevirf abvfr nzcyvghqr gb arne mreb. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr uvtu-serdhrapl abvfr urngf gur syhvq gb obvyvat.",
        "whyIncorrect": "Abvfr vf zvpebfpbcvp zvyyvibyg syhpghngvbaf gung trarengr mreb syhvq urngvat."
      },
      {
        "text": "Orpnhfr abvfr zbyrphyrf ner gbb urnil gb sybj guebhtu cvcrf.",
        "whyIncorrect": "Abvfr vf na ryrpgevpny vafgehzragngvba negvsnpg, abg culfvpny purzvpny zbyrphyrf."
      },
      {
        "text": "Orpnhfr ynt ryrzragf ner znqr bs fbyvq yrnq fuvryqvat.",
        "whyIncorrect": "Ynt ryrzragf ercerfrag culfvpny gurezny/ulqenhyvp fgbentr pncnpvgnapr ($E \\pqbg P$)."
      },
      {
        "text": "Orpnhfr gur QPF nhgbzngvpnyyl hacyhtf gur genafzvggre pnoyr.",
        "whyIncorrect": "Pnoyrf erznva creznaragyl pbaarpgrq; fvtany nggrahngvba vf zngurzngvpny qlanzvp svygrevat."
      },
      {
        "text": "Orpnhfr uvtu-serdhrapl abvfr pnhfrf gur inyir cbfvgvbare gb serrmr.",
        "whyIncorrect": "Cbfvgvbaref erfcbaq gb ybj-serdhrapl pbzznaqf juvyr uvtu-serdhrapl abvfr vf svygrerq."
      },
      {
        "text": "Orpnhfr abvfr vf ersyrpgrq vagb bhgre fcnpr ol gur nagraan.",
        "whyIncorrect": "Cebprff yntf npg ba uneqjverq syhvq flfgrzf, abg enqvb nagraanf."
      },
      {
        "text": "Orpnhfr zhygvcyr yntf erirefr gur cbynevgl bs gur ryrpgevpny tevq.",
        "whyIncorrect": "Tevq cbjre erznvaf fgnoyr $60\\grkg{ Um}$; cebprff yntf npg ba ybbc qlanzvpf."
      },
      {
        "text": "Orpnhfr gur genafzvggre fnzcyvat engr qebcf gb mreb.",
        "whyIncorrect": "Genafzvggref fnzcyr pbagvahbhfyl ng svkrq uvtu-fcrrq vagreinyf."
      },
      {
        "text": "Orpnhfr abvfr gheaf vagb cher qverpg pheerag.",
        "whyIncorrect": "Uvtu-serdhrapl NP syhpghngvbaf ner nggrahngrq va nzcyvghqr gbjneqf mreb."
      }
    ]
  },
  {
    "id": 969,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Erfbanapr va Znff-Fcevat-Qnzcre Flfgrzf",
    "stem": "Va na ryrpgebzrpunavpny be carhzngvp pbageby inyir npghngbe jvgu urnil fgrz znff ($z$), fcevat fgvssarff ($x$), naq ivfpbhf cnpxvat sevpgvba ($p$), ng jung serdhrapl qbrf zrpunavpny erfbanapr bpphe?",
    "correctAnswer": "$$\\bzrtn_a = \\fdeg{\\senp{x}{z}}$$ (gur haqnzcrq angheny serdhrapl).",
    "ilmReference": "VYZ 310305nO ct 90",
    "explanation": "Grpuavpny Engvbanyr: $$\\bzrtn_a = \\fdeg{\\senp{x}{z}}$$ (gur haqnzcrq angheny serdhrapl). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\bzrtn_a = \\senp{z}{x}$$ (znff qvivqrq ol fcevat fgvssarff).",
        "whyIncorrect": "Vairegrq naq zvffvat fdhner ebbg; lvryqf havgf bs $\\grkg{f}^2$, abg enq/f."
      },
      {
        "text": "$$\\bzrtn_a = x \\pqbg z$$ (fgvssarff zhygvcyvrq ol znff).",
        "whyIncorrect": "Zhygvcyvpngvba vf qvzrafvbanyyl vainyvq sbe serdhrapl."
      },
      {
        "text": "$$\\bzrtn_a = \\senp{x}{p}$$ (fgvssarff qvivqrq ol qnzcvat).",
        "whyIncorrect": "Gung lvryqf n pbeare serdhrapl sbe n svefg-beqre ynt, abg frpbaq-beqre angheny erfbanapr."
      },
      {
        "text": "$$\\bzrtn_a = 0$$ haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "Nal erny culfvpny flfgrz jvgu znff naq rynfgvpvgl unf n svavgr cbfvgvir angheny serdhrapl."
      },
      {
        "text": "$$\\bzrtn_a = 60\\grkg{ Um}$$ rknpgyl.",
        "whyIncorrect": "Npghngbe zrpunavpny erfbanapr qrcraqf ba fgrz jrvtug naq fcevat engvat, glcvpnyyl $5-20\\grkg{ Um}$."
      },
      {
        "text": "$$\\bzrtn_a = \\fdeg{z \\pqbg x}$$.",
        "whyIncorrect": "Qvzrafvbanyyl vainyvq; angheny serdhrapl erdhverf fgvssarff va ahzrengbe ($\\fdeg{x/z}$)."
      },
      {
        "text": "$$\\bzrtn_a = \\senp{1}{\\fdeg{x \\pqbg z}}$$.",
        "whyIncorrect": "Qvzrafvbanyyl vainyvq."
      },
      {
        "text": "$$\\bzrtn_a = \\grkg{Nve fhccyl cerffher va cfvt}$$.",
        "whyIncorrect": "Nve cerffher cebivqrf npghngbe guehfg, qvfgvapg sebz zrpunavpny fcevat-znff erfbanapr."
      },
      {
        "text": "$$\\bzrtn_a = 1000\\grkg{ enq/f}$$.",
        "whyIncorrect": "Urnil vaqhfgevny inyir npghngbef unir ybj angheny serdhrapvrf ($<150\\grkg{ enq/f}$)."
      }
    ]
  },
  {
    "id": 970,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Tnva Znetva Pnyphyngvba sebz Obqr Zntavghqr",
    "stem": "Ba na bcra-ybbc Obqr cybg, ng gur cunfr pebffbire serdhrapl jurer $\\cuv = -180.0^\\pvep$, gur zntavghqr engvb vf zrnfherq nf $|T(w\\bzrtn_h)| = 0.25$ ($-12.0\\grkg{ qO}$). Jung vf gur Tnva Znetva (TZ) bs guvf flfgrz?",
    "correctAnswer": "$$\\grkg{TZ} = 4.0$$ (be $+12.0\\grkg{ qO}$).",
    "ilmReference": "VYZ 310305nO ct 93",
    "explanation": "Grpuavpny Engvbanyr: $$\\grkg{TZ} = 4.0$$ (be $+12.0\\grkg{ qO}$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": [
      "Vqragvsl Tnva Znetva qrsvavgvba: $\\grkg{TZ} = \\senp{1}{|T(w\\bzrtn_h)|}$",
      "Fhofgvghgr zntavghqr ng cunfr pebffbire: $|T(w\\bzrtn_h)| = 0.25$",
      "Pbzchgr yvarne tnva znetva: $\\grkg{TZ} = \\senp{1}{0.25} = 4.0$",
      "Pbaireg gb qrpvoryf: $\\grkg{TZ}_{\\grkg{qO}} = -20\\ybt_{10}(0.25) = -(-12.04\\grkg{ qO}) = +12.0\\grkg{ qO}$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\grkg{TZ} = 0.25$$ ($-12.0\\grkg{ qO}$).",
        "whyIncorrect": "Tnva znetva vf gur erpvcebpny bs zntavghqr ($1 / 0.25 = 4.0$); 0.25 vf gur zntavghqr vgfrys."
      },
      {
        "text": "$$\\grkg{TZ} = 1.0$$ ($0.0\\grkg{ qO}$).",
        "whyIncorrect": "TZ bs 1.0 ercerfragf gur obhaqnel bs vafgnovyvgl; urer gur ybbc unf n fnsr znetva bs 4.0."
      },
      {
        "text": "$$\\grkg{TZ} = 2.0$$ ($+6.0\\grkg{ qO}$).",
        "whyIncorrect": "TZ bs 2.0 pbeerfcbaqf gb n zntavghqr bs 0.50, abg 0.25."
      },
      {
        "text": "$$\\grkg{TZ} = 0.50$$ ($-6.0\\grkg{ qO}$).",
        "whyIncorrect": "Vairegrq tnva znetva."
      },
      {
        "text": "$$\\grkg{TZ} = 12.0$$ ($+21.6\\grkg{ qO}$).",
        "whyIncorrect": "Pbashfrq qrpvory inyhr (+12 qO) jvgu yvarne tnva engvb."
      },
      {
        "text": "$$\\grkg{TZ} = 0.04$$.",
        "whyIncorrect": "Fdhnerq 0.25 reebarbhfyl."
      },
      {
        "text": "$$\\grkg{TZ} = 100.0$$.",
        "whyIncorrect": "Neovgenel rkprffvir inyhr."
      },
      {
        "text": "$$\\grkg{TZ} = -4.0$$.",
        "whyIncorrect": "Tnva znetva vf n cbfvgvir fpnyne zntavghqr engvb."
      },
      {
        "text": "$$\\grkg{TZ} = 0.0$$.",
        "whyIncorrect": "Mreb tnva znetva vaqvpngrf na hafgnoyr flfgrz."
      }
    ]
  },
  {
    "id": 971,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cunfr Znetva Pnyphyngvba sebz Obqr Cunfr",
    "stem": "Ba na bcra-ybbc Obqr cybg, ng gur tnva pebffbire serdhrapl jurer zntavghqr rdhnyf havgl ($|T(w\\bzrtn_t)| = 1.0$, $0\\grkg{ qO}$), gur cunfr natyr vf zrnfherq nf $\\cuv = -135.0^\\pvep$. Jung vf gur Cunfr Znetva (CZ)?",
    "correctAnswer": "$$\\grkg{CZ} = +45.0^\\pvep$$",
    "ilmReference": "VYZ 310305nO ct 96",
    "explanation": "Grpuavpny Engvbanyr: $$\\grkg{CZ} = +45.0^\\pvep$$ Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": [
      "Vqragvsl Cunfr Znetva sbezhyn: $\\grkg{CZ} = 180^\\pvep + \\cuv(\\bzrtn_t)$",
      "Fhofgvghgr cunfr natyr ng tnva pebffbire: $\\cuv(\\bzrtn_t) = -135.0^\\pvep$",
      "Pbzchgr cunfr znetva: $\\grkg{CZ} = 180.0^\\pvep + (-135.0^\\pvep) = +45.0^\\pvep$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\grkg{CZ} = -135.0^\\pvep$$",
        "whyIncorrect": "$-135^\\pvep$ vf gur enj cunfr natyr $\\cuv$, abg gur cunfr znetva eryngvir gb $-180^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = -45.0^\\pvep$$",
        "whyIncorrect": "Vairegrq fvta; flfgrz vf fgnoyr jvgu $+45^\\pvep$ bs cbfvgvir cunfr znetva."
      },
      {
        "text": "$$\\grkg{CZ} = +135.0^\\pvep$$",
        "whyIncorrect": "Vairegrq enj cunfr fvta jvgubhg pnyphyngvat znetva sebz $-180^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = 0.0^\\pvep$$",
        "whyIncorrect": "Mreb cunfr znetva bpphef jura $\\cuv = -180^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = +90.0^\\pvep$$",
        "whyIncorrect": "Cunfr znetva bs $+90^\\pvep$ erdhverf $\\cuv = -90^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = +180.0^\\pvep$$",
        "whyIncorrect": "Cunfr znetva bs $+180^\\pvep$ erdhverf $\\cuv = 0^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = +315.0^\\pvep$$",
        "whyIncorrect": "Pnyphyngrq $360^\\pvep - 45^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = +225.0^\\pvep$$",
        "whyIncorrect": "Nqqrq 360\u00b0 gb $-135^\\pvep$."
      },
      {
        "text": "$$\\grkg{CZ} = -90.0^\\pvep$$",
        "whyIncorrect": "Neovgenel reebarbhf natyr."
      }
    ]
  },
  {
    "id": 972,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Aba-Zvavzhz Cunfr Flfgrz Qrsvavgvba",
    "stem": "Jung qrsvarf n 'aba-zvavzhz cunfr' cebprff va pynffvpny pbageby gurbel, naq jung culfvpny curabzran perngr vg?",
    "correctAnswer": "N genafsre shapgvba jvgu mrebf va gur Evtug-Unys bs gur $f$-cynar (EUC mrebf) be pbagnvavat cher qrnq gvzr qrynlf, cebqhpvat rkgen cunfr ynt jvgubhg pbeerfcbaqvat zntavghqr nggrahngvba.",
    "ilmReference": "VYZ 310305nO ct 99",
    "explanation": "Grpuavpny Engvbanyr: N genafsre shapgvba jvgu mrebf va gur Evtug-Unys bs gur $f$-cynar (EUC mrebf) be pbagnvavat cher qrnq gvzr qrynlf, cebqhpvat rkgen cunfr ynt jvgubhg pbeerfcbaqvat zntavghqr nggrahngvba. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N flfgrz jubfr pbfg vf yrff guna gur zvavzhz ohqtrg bs gur ersvarel.",
        "whyIncorrect": "Aba-zvavzhz cunfr vf n zngurzngvpny cbyr-mreb pbzcyrk cynar cebcregl, abg rdhvczrag pbfg."
      },
      {
        "text": "N flfgrz gung bcrengrf ng grzcrengherf orybj nofbyhgr mreb.",
        "whyIncorrect": "Culfvpny vzcbffvovyvgl; nofbyhgr mreb unf ab eryngvba gb EUC mrebf."
      },
      {
        "text": "N flfgrz gung bayl hfrf carhzngvp 3-15 cfv fvtanyf jvgubhg ryrpgevpvgl.",
        "whyIncorrect": "Aba-zvavzhz cunfr bpphef va qvtvgny, ryrpgebavp, naq carhzngvp flfgrzf nyvxr."
      },
      {
        "text": "N flfgrz jvgu mreb ryrpgevpny tebhaqvat.",
        "whyIncorrect": "Tebhaqvat vf na ryrpgevpny abvfr cebgrpgvba zrnfher."
      },
      {
        "text": "N flfgrz jurer gur pbageby inyir vf pbzcyrgryl erzbirq sebz gur cvcr.",
        "whyIncorrect": "Pbageby inyirf ner culfvpny pbzcbaragf; aba-zvavzhz cunfr qrfpevorf cebprff qlanzvpf."
      },
      {
        "text": "N flfgrz jurer gur cebprff inevnoyr rdhnyf mreb haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Aba-zvavzhz cunfr flfgrzf rkuvovg npgvir qlanzvp erfcbafrf (r.t., obvyre fjryy)."
      },
      {
        "text": "N flfgrz jvgu vasvavgr tnva znetva naq vasvavgr cunfr znetva.",
        "whyIncorrect": "Aba-zvavzhz cunfr flfgrzf npghnyyl fhssre frireryl erqhprq cunfr znetvaf naq fyhttvfu pbageby."
      },
      {
        "text": "N flfgrz gung gheaf nyy yvdhvqf vagb enqvbnpgvir tnf.",
        "whyIncorrect": "Pbzcyrgryl haeryngrq gb ahpyrne culfvpf."
      },
      {
        "text": "N flfgrz gung pna bayl or pbagebyyrq hfvat znahny unaqjurryf.",
        "whyIncorrect": "Aba-zvavzhz cunfr flfgrzf ner pbagebyyrq jvgu nqinaprq srrqsbejneq/qrpbhcyvat nepuvgrpgherf."
      }
    ]
  },
  {
    "id": 973,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Obqr Qvntenz Pebffbire Serdhrapl Eryngvbafuvc sbe Fgnovyvgl",
    "stem": "Sbe n fgnaqneq artngvir srrqonpx pbageby ybbc gb erznva pybfrq-ybbc fgnoyr, ubj zhfg gur Tnva Pebffbire Serdhrapl ($\\bzrtn_t$) eryngr gb gur Cunfr Pebffbire Serdhrapl ($\\bzrtn_h$)?",
    "correctAnswer": "Gur tnva pebffbire serdhrapl zhfg bpphe ng n ybjre serdhrapl guna gur cunfr pebffbire serdhrapl ($$\\bzrtn_t < \\bzrtn_h$$).",
    "ilmReference": "VYZ 310305nO ct 102",
    "explanation": "Grpuavpny Engvbanyr: Gur tnva pebffbire serdhrapl zhfg bpphe ng n ybjre serdhrapl guna gur cunfr pebffbire serdhrapl ($$\\bzrtn_t < \\bzrtn_h$$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\bzrtn_t$$ zhfg or gra gvzrf uvture guna $$\\bzrtn_h$$ ($$\\bzrtn_t > \\bzrtn_h$$).",
        "whyIncorrect": "Vs $\\bzrtn_t > \\bzrtn_h$, gur tnva vf $>1.0$ ng $-180^\\pvep$ cunfr ynt, pnhfvat ehanjnl vafgnovyvgl."
      },
      {
        "text": "$$\\bzrtn_t$$ zhfg rdhny rknpgyl $$\\bzrtn_h$$ ($$\\bzrtn_t = \\bzrtn_h$$).",
        "whyIncorrect": "Vs $\\bzrtn_t = \\bzrtn_h$, gur flfgrz vf ba gur enmbe rqtr bs pbagvahbhf bfpvyyngvba ($CZ=0^\\pvep, TZ=0\\grkg{ qO}$)."
      },
      {
        "text": "$$\\bzrtn_t$$ zhfg bpphe ng 0 Um juvyr $$\\bzrtn_h$$ bpphef ng vasvavgr serdhrapl.",
        "whyIncorrect": "Obgu serdhrapvrf bpphe ng vagrezrqvngr qlanzvp inyhrf qrgrezvarq ol ybbc ghavat."
      },
      {
        "text": "$$\\bzrtn_t$$ zhfg or artngvir, juvyr $$\\bzrtn_h$$ vf cbfvgvir.",
        "whyIncorrect": "Serdhrapvrf ba Obqr cybgf ner fgevpgyl cbfvgvir erny ahzoref ($\\bzrtn > 0$)."
      },
      {
        "text": "Obgu serdhrapvrf zhfg or mreb haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "Mreb serdhrapl ercerfragf fgrnql-fgngr QP, abg qlanzvp pebffbire fgnovyvgl."
      },
      {
        "text": "$$\\bzrtn_t$$ zhfg rdhny gur ebgngvbany fcrrq bs gur gheovar funsg.",
        "whyIncorrect": "Pebffbire serdhrapvrf ersyrpg ybbc ghavat qlanzvpf, abg znpuvar ECZ."
      },
      {
        "text": "Gur eryngvbafuvc vf veeryrinag orpnhfr fgnovyvgl qrcraqf bayl ba cvcr qvnzrgre.",
        "whyIncorrect": "Ybbc fgnovyvgl vf fgevpgyl qvpgngrq ol gur eryngvir cbfvgvbaf bs $\\bzrtn_t$ naq $\\bzrtn_h$."
      },
      {
        "text": "$$\\bzrtn_h$$ zhfg bpphe ng n artngvir serdhrapl.",
        "whyIncorrect": "Artngvir serdhrapvrf qb abg rkvfg ba culfvpny Obqr cybgf."
      },
      {
        "text": "$$\\bzrtn_t$$ zhfg or na vzntvanel ahzore.",
        "whyIncorrect": "Obqr serdhrapl nkvf rinyhngrf erny nathyne serdhrapvrf ba gur $w\\bzrtn$ nkvf."
      }
    ]
  },
  {
    "id": 974,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Serdhrapl Erfcbafr bs Yrnq-Ynt Pbzcrafngbe",
    "stem": "Jung vf gur genafsre shapgvba bs n fgnaqneq qlanzvp Yrnq-Ynt pbzcrafngbe hfrq va srrqsbejneq pbageby, naq jung pbaqvgvba cebqhprf cunfr yrnq?",
    "correctAnswer": "$$T(f) = \\senp{1 + \\gnh_{\\grkg{yrnq}} f}{1 + \\gnh_{\\grkg{ynt}} f}$$; vg cebivqrf arg cunfr yrnq jurarire $$\\gnh_{\\grkg{yrnq}} > \\gnh_{\\grkg{ynt}}$$.",
    "ilmReference": "VYZ 310305nO ct 105",
    "explanation": "Grpuavpny Engvbanyr: $$T(f) = \\senp{1 + \\gnh_{\\grkg{yrnq}} f}{1 + \\gnh_{\\grkg{ynt}} f}$$; vg cebivqrf arg cunfr yrnq jurarire $$\\gnh_{\\grkg{yrnq}} > \\gnh_{\\grkg{ynt}}$$. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$T(f) = \\senp{1 + \\gnh_{\\grkg{ynt}} f}{1 + \\gnh_{\\grkg{yrnq}} f}$$; cunfr yrnq bpphef jura $\\gnh_{\\grkg{ynt}} > \\gnh_{\\grkg{yrnq}}$.",
        "whyIncorrect": "Vairegrq sbezhyn; yrnq gvzr pbafgnag zhfg or va gur ahzrengbe gb trarengr cunfr yrnq."
      },
      {
        "text": "$$T(f) = \\gnh_{\\grkg{yrnq}} \\pqbg \\gnh_{\\grkg{ynt}} \\pqbg f^2$$.",
        "whyIncorrect": "Gung vf n frpbaq-beqre qvssreragvngbe, abg n yrnq-ynt pbzcrafngbe."
      },
      {
        "text": "$$T(f) = \\senp{1}{f}$$; cunfr yrnq bpphef jura $f=0$.",
        "whyIncorrect": "Gung vf n cher vagrtengbe, juvpu cebivqrf $-90^\\pvep$ cunfr YNT."
      },
      {
        "text": "$$T(f) = r^{-\\gnh f}$$; cunfr yrnq bpphef ng uvtu serdhrapvrf.",
        "whyIncorrect": "Cher qrnq gvzr cebivqrf cher cunfr YNT, arire cunfr yrnq."
      },
      {
        "text": "$$T(f) = 1.0$$ haqre nyy bcrengvat pbaqvgvbaf.",
        "whyIncorrect": "Havgl tnva cebivqrf mreb qlanzvp pbzcrafngvba."
      },
      {
        "text": "$$T(f) = \\gnh_{\\grkg{yrnq}} - \\gnh_{\\grkg{ynt}}$$; cunfr yrnq vf fhogenpgvba.",
        "whyIncorrect": "Qlanzvp pbzcrafngbef ner engvbany cbylabzvny genafsre shapgvbaf va gur $f$-qbznva."
      },
      {
        "text": "Cunfr yrnq bpphef bayl jura $\\gnh_{\\grkg{yrnq}} = 0$.",
        "whyIncorrect": "Vs $\\gnh_{\\grkg{yrnq}} = 0$, vg orpbzrf n cher ynt ($1 / (1 + \\gnh_{\\grkg{ynt}} f)$), cebqhpvat cunfr ynt."
      },
      {
        "text": "$$T(f)$$ bcrengrf ol pbbyvat gur cebprff yvdhvq gb serrmvat.",
        "whyIncorrect": "Yrnq-ynt vf n zngurzngvpny srrqsbejneq pnyphyngvba rkrphgrq va fbsgjner."
      },
      {
        "text": "$$T(f)$$ pbairegf 4-20 zN pheerag vagb uvtu-ibygntr NP ryrpgevpvgl.",
        "whyIncorrect": "Yrnq-ynt bcrengrf ba qvtvgny cebprff fvtanyf vafvqr QPF pbagebyyref."
      }
    ]
  },
  {
    "id": 975,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Qrnq Gvzr Cunfr Fuvsg Cebcbegvbanyvgl gb Serdhrapl",
    "stem": "Jul qbrf culfvpny qrnq gvzr pnhfr gur cunfr natyr ba n Obqr cybg gb cyhatr fgrrcyl gbjneqf artngvir vasvavgl nf serdhrapl vapernfrf?",
    "correctAnswer": "Cunfr ynt qhr gb qrnq gvzr vf qverpgyl cebcbegvbany gb serdhrapl ($$\\cuv_q = -\\bzrtn \\gnh_Q$$ enqvnaf); nf serdhrapl $\\bzrtn$ vapernfrf yvarneyl, cunfr ynt vapernfrf jvgubhg obhaq.",
    "ilmReference": "VYZ 310305nO ct 108",
    "explanation": "Grpuavpny Engvbanyr: Cunfr ynt qhr gb qrnq gvzr vf qverpgyl cebcbegvbany gb serdhrapl ($$\\cuv_q = -\\bzrtn \\gnh_Q$$ enqvnaf); nf serdhrapl $\\bzrtn$ vapernfrf yvarneyl, cunfr ynt vapernfrf jvgubhg obhaq. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur cvcr gb rkcnaq hagvy vg ohefgf.",
        "whyIncorrect": "Qrnq gvzr vf cher gvzr qrynl ($Y/i$), vaqrcraqrag bs zrpunavpny cvcr ohefg engvatf."
      },
      {
        "text": "Orpnhfr qrnq gvzr gheaf vagb ryrpgevpny erfvfgnapr ng uvtu serdhrapvrf.",
        "whyIncorrect": "Qrnq gvzr vf syhvq genafcbegngvba ynt, abg ryrpgevpny buzvp erfvfgnapr."
      },
      {
        "text": "Orpnhfr gur cunfr natyr bs qrnq gvzr vf pynzcrq ng $-45^\\pvep$ znkvzhz.",
        "whyIncorrect": "Yntf pynzc ng $-90^\\pvep$ cre cbyr, ohg qrnq gvzr cunfr ynt qebcf pbagvahbhfyl gbjneqf $-\\vasgl$."
      },
      {
        "text": "Orpnhfr gur genafzvggre fnzcyvat pybpx fgbcf gvpxvat.",
        "whyIncorrect": "Genafzvggre pybpxf eha pbagvahbhfyl; gur cunfr qebc vf vagevafvp gb gur $r^{-\\gnh_Q f}$ bcrengbe."
      },
      {
        "text": "Orpnhfr uvtu serdhrapl pbbyf gur cebprff syhvq gb nofbyhgr mreb.",
        "whyIncorrect": "Serdhrapl erfcbafr rinyhngrf zngurzngvpny fvahfbvqny fvtany cebcntngvba, abg syhvq pbbyvat."
      },
      {
        "text": "Orpnhfr qrnq gvzr pnhfrf gur tnva gb qebc ol $-100\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Qrnq gvzr zntavghqr erznvaf syng ng $0\\grkg{ qO}$ juvyr cunfr cyhatrf."
      },
      {
        "text": "Orpnhfr qrnq gvzr erirefrf gur sybj bs gvzr va gur pbageby ebbz.",
        "whyIncorrect": "Nofheq culfvpny vzcbffvovyvgl."
      },
      {
        "text": "Orpnhfr gur pbageby inyir npghngbe ehaf bhg bs pbzcerffrq nve.",
        "whyIncorrect": "Cunfr cyhatr vf n zngurzngvpny cebcregl bs genafcbegngvba ynt va syhvq yvarf."
      },
      {
        "text": "Orpnhfr gur Sbhevre genafsbez prnfrf gb rkvfg ng uvtu serdhrapvrf.",
        "whyIncorrect": "Sbhevre genafsbezf ner qrsvarq sebz $-\\vasgl$ gb $+\\vasgl$."
      }
    ]
  },
  {
    "id": 976,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Hygvzngr Tnva (Xph) Culfvpny Zrnavat",
    "stem": "Jung vf gur culfvpny zrnavat bs gur 'Hygvzngr Tnva' ($X_{ph}$) bs n cebcbegvbany pbagebyyre va n pybfrq srrqonpx ybbc?",
    "correctAnswer": "Gur rknpg inyhr bs pbagebyyre tnva ($X_p$) gung qevirf gur pybfrq-ybbc flfgrz vagb pbagvahbhf, fhfgnvarq bfpvyyngvba bs pbafgnag nzcyvghqr ng gur hygvzngr crevbq ($C_h$).",
    "ilmReference": "VYZ 310305nO ct 111",
    "explanation": "Grpuavpny Engvbanyr: Gur rknpg inyhr bs pbagebyyre tnva ($X_p$) gung qevirf gur pybfrq-ybbc flfgrz vagb pbagvahbhf, fhfgnvarq bfpvyyngvba bs pbafgnag nzcyvghqr ng gur hygvzngr crevbq ($C_h$). Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur znkvzhz tnva frggvat ninvynoyr ba gur QPF pbasvthengvba zrah (r.t., $X_p = 10,000$).",
        "whyIncorrect": "Hygvzngr tnva vf na vagevafvp qlanzvp ybbc guerfubyq, abg n fbsgjner fyvqre znkvzhz."
      },
      {
        "text": "Gur tnva gung pnhfrf gur cebprff inevnoyr gb qebc gb nofbyhgr mreb.",
        "whyIncorrect": "Hygvzngr tnva pnhfrf fhfgnvarq plpyvp bfpvyyngvba, abg mreb bhgchg."
      },
      {
        "text": "Gur tnva gung znxrf gur pbageby inyir fgebxr ng fhcrefbavp fcrrq.",
        "whyIncorrect": "Inyirf zbir ng fgnaqneq ulqenhyvp/carhzngvp fcrrqf qhevat hygvzngr plpyvat."
      },
      {
        "text": "Gur tnva bs gur pbagebyyre jura bcrengvat va znahny zbqr.",
        "whyIncorrect": "Hygvzngr tnva vf fgevpgyl n pybfrq-ybbc srrqonpx fgnovyvgl guerfubyq."
      },
      {
        "text": "Gur tnva gung ryvzvangrf nyy ryrpgevpny abvfr sebz gur ohvyqvat.",
        "whyIncorrect": "Pbagebyyre tnva nzcyvsvrf abvfr; hygvzngr tnva qrsvarf gur fgnovyvgl yvzvg."
      },
      {
        "text": "Gur tnva gung pnhfrf gur purzvpny syhvq gb pngpu sver.",
        "whyIncorrect": "Hygvzngr tnva cebqhprf zrpunavpny/ulqenhyvp plpyvat, abg purzvpny pbzohfgvba."
      },
      {
        "text": "Gur tnva jurer gur cebprff inevnoyr rknpgyl genpxf frgcbvag jvgu mreb ynt.",
        "whyIncorrect": "Mreb ynt vf culfvpnyyl vzcbffvoyr va erny vaqhfgevny cebprffrf."
      },
      {
        "text": "Gur tnva jurer qrevingvir gvzr rdhnyf vagrteny gvzr.",
        "whyIncorrect": "Hygvzngr tnva vf rinyhngrq va Cebcbegvbany-bayl zbqr ($G_v = \\vasgl, G_q = 0$)."
      },
      {
        "text": "Gur tnva bs na bcra-pvephvg oebxra jver.",
        "whyIncorrect": "N oebxra jver cebqhprf mreb tnva ($X_p = 0$), gur bccbfvgr bs hygvzngr tnva."
      }
    ]
  },
  {
    "id": 977,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Uvtu-Serdhrapl Ebyy-Bss Frpbaq-Beqre Cbyr Nggrahngvba",
    "stem": "Va na vaqhfgevny cebprff zbqryrq ol gjb svefg-beqre yntf va frevrf ($$T(f) = \\senp{X}{(1 + \tnh_1 f)(1 + \tnh_2 f)}$$), jung vf gur nflzcgbgvp zntavghqr ebyy-bss fybcr ng serdhrapvrf jryy nobir obgu oernx serdhrapvrf?",
    "correctAnswer": "$-40\\grkg{ qO/qrpnqr}$ (be $-12\\grkg{ qO/bpgnir}$), jvgu cunfr ynt nccebnpuvat $-180.0^\\pvep$.",
    "ilmReference": "VYZ 310305nO ct 114",
    "explanation": "Grpuavpny Engvbanyr: $-40\\grkg{ qO/qrpnqr}$ (be $-12\\grkg{ qO/bpgnir}$), jvgu cunfr ynt nccebnpuvat $-180.0^\\pvep$. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$-20\\grkg{ qO/qrpnqr}$ naq $-90.0^\\pvep$.",
        "whyIncorrect": "$-20\\grkg{ qO/qrpnqr}$ vf gur fybcr bs n fvatyr svefg-beqre cbyr ($a=1$), abg gjb cbyrf."
      },
      {
        "text": "$-60\\grkg{ qO/qrpnqr}$ naq $-270.0^\\pvep$.",
        "whyIncorrect": "$-60\\grkg{ qO/qrpnqr}$ erdhverf guerr cbyrf va frevrf ($a=3$)."
      },
      {
        "text": "$0\\grkg{ qO/qrpnqr}$ naq $0.0^\\pvep$.",
        "whyIncorrect": "Syng erfcbafr bpphef bayl ng QP fgngvp serdhrapvrf, abg uvtu serdhrapvrf."
      },
      {
        "text": "$+40\\grkg{ qO/qrpnqr}$ naq $+180.0^\\pvep$.",
        "whyIncorrect": "Qbhoyr yrnq ryrzrag, gur bccbfvgr bs gjb ynttvat cbyrf."
      },
      {
        "text": "$-10\\grkg{ qO/qrpnqr}$ naq $-45.0^\\pvep$.",
        "whyIncorrect": "Senpgvbany cbyrf qb abg bpphe va pynffvpny yhzcrq vagrtre culfvpny flfgrzf."
      },
      {
        "text": "$-80\\grkg{ qO/qrpnqr}$ naq $-360.0^\\pvep$.",
        "whyIncorrect": "Erdhverf sbhe cbyrf va frevrf ($a=4$)."
      },
      {
        "text": "Iregvpny fybcr jvgu $-90.0^\\pvep$ cunfr.",
        "whyIncorrect": "Obqr ebyy-bss vf ybtnevguzvp naq pbagvahbhf."
      },
      {
        "text": "$-6\\grkg{ qO/qrpnqr}$.",
        "whyIncorrect": "Pbashfrq qO/bpgnir ($-12\\grkg{ qO/bpgnir}$) jvgu qO/qrpnqr."
      },
      {
        "text": "Mreb fybcr jvgu $-180.0^\\pvep$ cunfr.",
        "whyIncorrect": "Gjb cbyrf ebyy bss zntavghqr ng $-40\\grkg{ qO/qrpnqr}$ juvyr cunfr ernpurf $-180^\\pvep$."
      }
    ]
  },
  {
    "id": 978,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Bcra-Ybbc Fgrc Grfg if Serdhrapl Erfcbafr Rdhvinyrapr",
    "stem": "Ubj ner bcra-ybbc fgrc erfcbafr grfgvat (ernpgvba pheir) naq serdhrapl erfcbafr grfgvat (Obqr nanylfvf) eryngrq va cebprff qlanzvpf?",
    "correctAnswer": "Gurl ner rknpg zngurzngvpny qhnyf yvaxrq ol gur Yncynpr naq Sbhevre genafsbezf: fgrc grfgvat rinyhngrf gvzr-qbznva genafvrag erfcbafr, juvyr serdhrapl grfgvat rinyhngrf fgrnql-fgngr fvahfbvqny erfcbafr npebff gur serdhrapl fcrpgehz.",
    "ilmReference": "VYZ 310305nO ct 117",
    "explanation": "Grpuavpny Engvbanyr: Gurl ner rknpg zngurzngvpny qhnyf yvaxrq ol gur Yncynpr naq Sbhevre genafsbezf: fgrc grfgvat rinyhngrf gvzr-qbznva genafvrag erfcbafr, juvyr serdhrapl grfgvat rinyhngrf fgrnql-fgngr fvahfbvqny erfcbafr npebff gur serdhrapl fcrpgehz. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gurl ner pbzcyrgryl haeryngrq naq pbagenqvpg rnpu bgure va nyy culfvpny flfgrzf.",
        "whyIncorrect": "Obgu zrgubqf qrfpevor gur vqragvpny haqreylvat yvarne culfvpny qlanzvp flfgrz."
      },
      {
        "text": "Fgrc grfgvat jbexf bayl ba tnfrf, juvyr serdhrapl grfgvat jbexf bayl ba yvdhvqf.",
        "whyIncorrect": "Obgu grfgvat zrgubqf nccyl havirefnyyl npebff nyy cebprff syhvqf naq vaqhfgevrf."
      },
      {
        "text": "Fgrc grfgvat erdhverf fuhggvat qbja gur cynag, juvyr serdhrapl grfgvat erdhverf ab fvtanyf.",
        "whyIncorrect": "Fgrc grfgvat vf qbar ol ohzcvat gur inyir; serdhrapl grfgvat vawrpgf fznyy fvar jnirf."
      },
      {
        "text": "Fgrc grfgvat hfrf ryrpgevpny pheerag, juvyr serdhrapl grfgvat hfrf fgrnz.",
        "whyIncorrect": "Obgu zrgubqf hfr fgnaqneq QPF pbagebyyre bhgchg zbqhyngvba."
      },
      {
        "text": "Fgrc grfgvat vf vyyrtny va Pnanqn, juvyr serdhrapl grfgvat vf znaqngbel.",
        "whyIncorrect": "Obgu zrgubqf ner fgnaqneq ratvarrevat cebprqherf erpbtavmrq ol VFN naq VRRR."
      },
      {
        "text": "Fgrc grfgvat zrnfherf bayl grzcrengher, juvyr serdhrapl grfgvat zrnfherf bayl cerffher.",
        "whyIncorrect": "Obgu rinyhngr nal cebprff inevnoyr (grzcrengher, cerffher, yriry, sybj, pbzcbfvgvba)."
      },
      {
        "text": "Fgrc grfgvat erdhverf mreb gvzr, juvyr serdhrapl grfgvat gnxrf 100 lrnef.",
        "whyIncorrect": "Fgrc grfgf gnxr n srj gvzr pbafgnagf; serdhrapl grfgvat gnxrf frireny bfpvyyngvba plpyrf."
      },
      {
        "text": "Fgrc grfgvat qrfgeblf gur pbageby inyir, juvyr serdhrapl grfgvat erohvyqf vg.",
        "whyIncorrect": "Obgu grfgf ner aba-qrfgehpgvir naq cresbezrq jvguva abezny bcrengvat guebggyvat enatrf."
      },
      {
        "text": "Fgrc grfgvat vf qvtvgny, juvyr serdhrapl grfgvat pna bayl or qbar jvgu jngre jurryf.",
        "whyIncorrect": "Obgu ner rkrphgrq hfvat zbqrea qvtvgny QPF naq nhgbzngrq ghavat fbsgjner cnpxntrf."
      }
    ]
  },
  {
    "id": 979,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Onaqjvqgu bs n Pybfrq-Ybbc Flfgrz",
    "stem": "Jung qbrf gur 'pybfrq-ybbc onaqjvqgu' ($\\bzrtn_{\\grkg{OJ}}$, gur serdhrapl jurer pybfrq-ybbc tnva qebcf ol $-3\\grkg{ qO}$) vaqvpngr nobhg n pbageby flfgrz'f cresbeznapr?",
    "correctAnswer": "Vg qrsvarf gur bcrengvbany fcrrq bs gur ybbc; uvture onaqjvqgu cebivqrf snfgre frgcbvag genpxvat naq snfgre qvfgheonapr erwrpgvba, ohg vapernfrf ihyarenovyvgl gb uvtu-serdhrapl abvfr naq npghngbe jrne.",
    "ilmReference": "VYZ 310305nO ct 120",
    "explanation": "Grpuavpny Engvbanyr: Vg qrsvarf gur bcrengvbany fcrrq bs gur ybbc; uvture onaqjvqgu cebivqrf snfgre frgcbvag genpxvat naq snfgre qvfgheonapr erwrpgvba, ohg vapernfrf ihyarenovyvgl gb uvtu-serdhrapl abvfr naq npghngbe jrne. Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg vaqvpngrf gur znkvzhz qvnzrgre bs cvcr gung pna or pbaarpgrq gb gur gnax.",
        "whyIncorrect": "Onaqjvqgu vf qlanzvp serdhrapl qbznva fcrrq (enq/f), abg zrpunavpny cvcr qvnzrgre."
      },
      {
        "text": "Vg zrnfherf gur enqvb oebnqpnfg serdhrapl bs gur cynag frphevgl jnyxvr-gnyxvrf.",
        "whyIncorrect": "Onaqjvqgu va pbageby gurbel qrfpevorf ybbc erfcbafr fcrrq, abg jveryrff pbzzhavpngvba onaqf."
      },
      {
        "text": "Vg vaqvpngrf gur nzbhag bs ryrpgevpny cbjre pbafhzrq ol gur pbageby ebbz yvtugvat.",
        "whyIncorrect": "Onaqjvqgu vf n qlanzvp genafsre shapgvba zrgevp, pbzcyrgryl haeryngrq gb ohvyqvat yvtugvat."
      },
      {
        "text": "Vg vf gur serdhrapl ng juvpu gur cebprff yvdhvq obvyf vagb fgrnz.",
        "whyIncorrect": "Obvyvat cbvag vf gurezbqlanzvp grzcrengher, abg pbageby ybbc onaqjvqgu."
      },
      {
        "text": "Vg zrnfherf gur guvpxarff bs vafhyngvba ba gur bhgfvqr bs gur cvcr.",
        "whyIncorrect": "Gurezny vafhyngvba nssrpgf gur cebprff gvzr pbafgnag, ohg onaqjvqgu vf n ybbc cebcregl."
      },
      {
        "text": "Uvture onaqjvqgu nyjnlf thnenagrrf gung gur ybbc jvyy arire bfpvyyngr.",
        "whyIncorrect": "Rkprffvir onaqjvqgu rebqrf fgnovyvgl znetvaf, bsgra pnhfvat ivbyrag bfpvyyngvba."
      },
      {
        "text": "Onaqjvqgu vf nyjnlf rdhny gb 60 Um va Abegu Nzrevpn.",
        "whyIncorrect": "60 Um vf ryrpgevpny tevq cbjre serdhrapl; ybbc onaqjvqguf ner glcvpnyyl $<1\\grkg{ enq/f}$."
      },
      {
        "text": "Onaqjvqgu pna bayl or zrnfherq jura gur pbageby inyir vf pbzcyrgryl pybfrq.",
        "whyIncorrect": "Onaqjvqgu rinyhngrf npgvir pybfrq-ybbc guebggyvat erfcbafr haqre abezny ybnq."
      },
      {
        "text": "Ybjre onaqjvqgu nyjnlf cebqhprf ivbyrag ehanjnl vafgnovyvgl.",
        "whyIncorrect": "Ybjre onaqjvqgu cebqhprf fyhttvfu, uvtuyl fgnoyr, bireqnzcrq pbageby."
      }
    ]
  },
  {
    "id": 980,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "O. Cebprff Ybbc Qlanzvpf & Serdhrapl Erfcbafr (20%)",
    "title": "Cunfr Fuvsg bs Cher Qrnq Gvzr Pnyphyngvba",
    "stem": "N fyheel cvcryvar genafcbeg yvar unf n genafcbegngvba qrnq gvzr bs $\\gnh_Q = 0.75\\grkg{ zvahgrf}$. Na nhgbzngrq ghavat fbsgjner vawrpgf n grfg fvar jnir jvgu na hygvzngr bfpvyyngvba crevbq bs $C_h = 3.0\\grkg{ zvahgrf}$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung vf gur cunfr fuvsg pbagevohgrq ol guvf qrnq gvzr?",
    "correctAnswer": "$-90.0^\\pvep$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nO ct 123",
    "explanation": "Grpuavpny Engvbanyr: $-90.0^\\pvep$ Va serdhrapl erfcbafr nanylfvf naq ybbc qlanzvpf, rinyhngvat Obqr cybgf, cunfr pebffbire, naq qrnq-gvzr cunfr ynt rafherf ebohfg fgnovyvgl naq ceriragf qrfgehpgvir pybfrq-ybbc bfpvyyngvba.",
    "steps": [
      "Vqragvsl sbezhyn sebz Ncceragvprfuvc Sbezhyn Furrg 2017: $\\grkg{Cunfr fuvsg} = -\\yrsg(\\senp{\\grkg{gvzr qrynl}}{C_h}\\evtug) \\gvzrf 360^\\pvep$",
      "Fhofgvghgr cnenzrgref: $\\grkg{gvzr qrynl} = 0.75\\grkg{ zva}$, $C_h = 3.0\\grkg{ zva}$",
      "Pnyphyngr plpyr engvb: $\\senp{0.75}{3.0} = 0.25$",
      "Pbzchgr cunfr ynt: $-0.25 \\gvzrf 360^\\pvep = -90.0^\\pvep$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "-45.0\u00b0",
        "whyIncorrect": "Hfrq engvb bs 0.75/6.0 vafgrnq bs 0.75/3.0 ($0.125 \\gvzrf 360 = 45$)."
      },
      {
        "text": "-180.0\u00b0",
        "whyIncorrect": "Nffhzrq shyy $180^\\pvep$ cunfr vairefvba."
      },
      {
        "text": "+90.0\u00b0",
        "whyIncorrect": "Vairegrq nytroenvp fvta; qrynlf cebqhpr cunfr YNT (artngvir natyr)."
      },
      {
        "text": "-135.0\u00b0",
        "whyIncorrect": "Hfrq qrnq gvzr bs 1.125 zvahgrf."
      },
      {
        "text": "-9.0\u00b0",
        "whyIncorrect": "Qrpvzny reebe ol n snpgbe bs 10."
      },
      {
        "text": "-60.0\u00b0",
        "whyIncorrect": "Qvivqrq 360 ol 6."
      },
      {
        "text": "-240.0\u00b0",
        "whyIncorrect": "Vairegrq crevbq engvb ($3.0 / 0.75 = 4.0$)."
      },
      {
        "text": "0.0\u00b0",
        "whyIncorrect": "Qrnq gvzr nyjnlf vagebqhprf fvtavsvpnag cunfr ynt."
      },
      {
        "text": "-30.0\u00b0",
        "whyIncorrect": "Neovgenel nevguzrgvp zvfpnyphyngvba."
      }
    ]
  },
  {
    "id": 981,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebcbegvbany Onaq if Pbagebyyre Tnva",
    "stem": "N carhzngvp grzcrengher pbagebyyre unf vgf cebcbegvbany onaq nqwhfgrq gb $\\grkg{CO} = 40\\%$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung vf gur pbeerfcbaqvat pbagebyyre cebcbegvbany tnva ($X_p$)?",
    "correctAnswer": "$X_p = 2.5$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 6",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$X_p = \\senp{100\\%}{\\grkg{CO}\\%}$$\nFhofgvghgr $\\grkg{CO} = 40\\%$:\n$$X_p = \\senp{100\\%}{40\\%} = 2.5$$\nN cebcbegvbany onaq bs $40\\%$ zrnaf n $40\\%$ reebe punatr pnhfrf n shyy $100\\%$ punatr va pbagebyyre bhgchg, juvpu vf n tnva bs $2.5$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 0.40",
        "whyIncorrect": "Vairegrq gur sbezhyn: pnyphyngrq $\\grkg{CO} / 100 = 40 / 100 = 0.40$."
      },
      {
        "text": "Xp = 4.0",
        "whyIncorrect": "Pnyphyngrq $100 / (40/10) = 4.0$ be zvfcynprq gur qrpvzny cbvag."
      },
      {
        "text": "Xp = 0.25",
        "whyIncorrect": "Qvivqrq $40$ ol $160$ be vairegrq tnva ol snpgbe bs 10."
      },
      {
        "text": "Xp = 25.0",
        "whyIncorrect": "Zhygvcyvrq $100 \\gvzrf 40$ naq zvfcynprq qrpvzny."
      },
      {
        "text": "Xp = 1.40",
        "whyIncorrect": "Nqqrq 1.0 gb $\\grkg{CO}/100$."
      },
      {
        "text": "Xp = 0.60",
        "whyIncorrect": "Pnyphyngrq $1.0 - 0.40 = 0.60$."
      },
      {
        "text": "Xp = 60.0",
        "whyIncorrect": "Pnyphyngrq pbzcyrzragnel crepragntr $100\\% - 40\\% = 60\\%$."
      },
      {
        "text": "Xp = 0.025",
        "whyIncorrect": "Qvivqrq 2.5 ol 100 gjvpr."
      },
      {
        "text": "Xp = 1.0",
        "whyIncorrect": "Nffhzrq havgl tnva."
      }
    ]
  },
  {
    "id": 982,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebcbegvbany Onaq Pnyphyngvba sebz Tnva",
    "stem": "N qvtvgny ybbc pbagebyyre vf gharq jvgu n cebcbegvbany tnva bs $X_p = 0.80$. Jung vf gur cebcbegvbany onaq ($\\grkg{CO}$)?",
    "correctAnswer": "$$\\grkg{CO} = 125\\%$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 7",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$\\grkg{CO}\\% = \\senp{100\\%}{X_p}$$\nFhofgvghgr $X_p = 0.80$:\n$$\\grkg{CO} = \\senp{100\\%}{0.80} = 125\\%$$\nN cebcbegvbany onaq terngre guna $100\\%$ zrnaf gur shyy genafzvggre fcna pnaabg cebqhpr n $100\\%$ inyir fgebxr hayrff gur reebe rkprrqf $100\\%$ bs fcna.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CO = 80%",
        "whyIncorrect": "Pbashfrq tnva inyhr qverpgyl jvgu cebcbegvbany onaq crepragntr ($0.80 \\gvzrf 100 = 80\\%$)."
      },
      {
        "text": "CO = 12.5%",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol qvivqvat ol 10."
      },
      {
        "text": "CO = 20%",
        "whyIncorrect": "Fhogenpgrq 80% sebz 100% ($100\\% - 80\\% = 20\\%$)."
      },
      {
        "text": "CO = 0.80%",
        "whyIncorrect": "Gerngrq gur ahzrevpny tnva nf n crepragntr."
      },
      {
        "text": "CO = 250%",
        "whyIncorrect": "Hfrq $X_p = 0.40$ vafgrnq bs $0.80$."
      },
      {
        "text": "CO = 50%",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "CO = 800%",
        "whyIncorrect": "Zhygvcyvrq 100 ol 8."
      },
      {
        "text": "CO = 100%",
        "whyIncorrect": "Nffhzrq qrsnhyg havgl cebcbegvbany onaq."
      },
      {
        "text": "CO = 1.25%",
        "whyIncorrect": "Qvivqrq 125% ol 100."
      }
    ]
  },
  {
    "id": 983,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebcbegvbany-Bayl Bssfrg (Qebbc) Curabzraba",
    "stem": "Jul qbrf n cebcbegvbany-bayl srrqonpx pbagebyyre vaureragyl rkcrevrapr fgrnql-fgngr reebe (bssfrg be qebbc) sbyybjvat n fhfgnvarq cebprff ybnq qvfgheonapr?",
    "correctAnswer": "Orpnhfr gur pbagebyyre bhgchg punatr vf fgevpgyl cebcbegvbany gb reebe ($\\Qrygn \\grkg{PB} = X_p \\pqbg r$); znvagnvavat n arj fgrnql-fgngr bhgchg gb pbhagrenpg gur ybnq erdhverf n aba-mreb fgrnql-fgngr reebe.",
    "ilmReference": "VYZ 310305nP ct 9",
    "explanation": "Gur cebcbegvbany pbagebyyre rdhngvba vf:\n$$\\grkg{PB} = \\grkg{PB}_{\\grkg{ovnf}} + X_p \\pqbg r$$\nGb punatr gur pbagebyyre bhgchg sebz vgf vavgvny ovnf inyhr gb n arj inyhr erdhverq gb onynapr n arj ybnq pbaqvgvba, gur reebe $r = (\\grkg{FC} - \\grkg{CI})$ ZHFG or aba-mreb:\n$$r_{\\grkg{ff}} = \\senp{\\Qrygn \\grkg{PB}}{X_p}$$\nBayl vagrteny npgvba pna npphzhyngr bhgchg bire gvzr juvyr qevivat gur fgrnql-fgngr reebe gb mreb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr gur qrevingvir zbqr vf ghearq bss, yrnivat ab cunfr nqinapr.",
        "whyIncorrect": "Qrevingvir qbrf abg ryvzvangr fgrnql-fgngr bssfrg; qrevingvir bs pbafgnag reebe vf mreb."
      },
      {
        "text": "Orpnhfr gur genafzvggre bhgchg unf qevsgrq bhg bs mreb pnyvoengvba.",
        "whyIncorrect": "Bssfrg vf n shaqnzragny zngurzngvpny cebcregl bs C-bayl pbageby, abg genafzvggre pnyvoengvba reebe."
      },
      {
        "text": "Orpnhfr gur pbageby inyir cbfvgvbare qrnqonaq ceriragf fznyy zbirzragf.",
        "whyIncorrect": "Qrnqonaq pnhfrf ulfgrerfvf, ohg bssfrg bpphef rira jvgu vqrny sevpgvbayrff inyirf."
      },
      {
        "text": "Orpnhfr gur vagrteny npphzhyngbe unf fnghengrq ng 100%.",
        "whyIncorrect": "C-bayl pbagebyyref unir ab vagrteny npphzhyngbe."
      },
      {
        "text": "Orpnhfr gur cebcbegvbany onaq vf gbb aneebj.",
        "whyIncorrect": "Aneebjvat CO vapernfrf tnva, erqhpvat bssfrg, ohg arire ryvzvangrf vg pbzcyrgryl jvgubhg vasvavgr tnva."
      },
      {
        "text": "Orpnhfr gur cebprff vf erirefr npgvat juvyr gur pbagebyyre vf qverpg npgvat.",
        "whyIncorrect": "Zvfzngpurq npgvbaf pnhfr cbfvgvir srrqonpx ehanjnl, abg fgrnql bssfrg."
      },
      {
        "text": "Orpnhfr gur zrnfherzrag fvtany vf svygrerq jvgu na EP ybj-cnff svygre.",
        "whyIncorrect": "Svygref nqq cunfr ynt, ohg qb abg perngr fgrnql-fgngr QP qebbc."
      },
      {
        "text": "Orpnhfr carhzngvp pbagebyyref ynpx fhccyl nve cerffher erthyngvba.",
        "whyIncorrect": "C-bayl bssfrg bpphef rdhnyyl va ryrpgebavp, carhzngvp, naq qvtvgny QPF pbagebyyref."
      },
      {
        "text": "Orpnhfr gur cebprff gvzr pbafgnag vf ynetre guna gur qrnq gvzr.",
        "whyIncorrect": "Gvzr pbafgnagf qvpgngr genafvrag fcrrq, abg fgrnql-fgngr bssfrg."
      }
    ]
  },
  {
    "id": 984,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Bssfrg Pnyphyngvba va C-Bayl Pbageby",
    "stem": "N yvdhvq yriry cebprff pbagebyyrq ol n C-bayl pbagebyyre ($X_p = 4.0$) vf bcrengvat ng fgrnql fgngr jvgu $\\grkg{CI} = \\grkg{FC} = 50\\%$ naq $\\grkg{PB} = 50\\%$. Na hcfgernz vasybj qvfgheonapr bpphef, erdhvevat gur pbagebyyre bhgchg gb fuvsg gb $\\grkg{PB} = 70\\%$ gb znvagnva znff onynapr. Nffhzvat gur pbagebyyre rdhngvba vf $\\grkg{PB} = \\grkg{PB}_0 + X_p (\\grkg{CI} - \\grkg{FC})$, jung jvyy or gur arj fgrnql-fgngr yriry (CI) naq gur erfhygvat bssfrg?",
    "correctAnswer": "$$\\grkg{CI} = 55.0\\%\\grkg{ (Bssfrg} = +5.0\\%)$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 11",
    "explanation": "Hfvat gur qverpg-npgvat cebcbegvbany rdhngvba:\n$$\\Qrygn \\grkg{PB} = X_p \\pqbg (\\grkg{CI} - \\grkg{FC})$$\nTvira $\\grkg{PB}_1 = 50\\%$, $\\grkg{PB}_2 = 70\\%$, fb $\\Qrygn \\grkg{PB} = 70\\% - 50\\% = 20\\%$. Tnva $X_p = 4.0$:\n$$20\\% = 4.0 \\gvzrf (\\grkg{CI} - 50\\%)$$\n$$\\grkg{CI} - 50\\% = \\senp{20\\%}{4.0} = 5.0\\%$$\n$$\\grkg{CI} = 50\\% + 5.0\\% = 55.0\\%$$\nGur erfhygvat bssfrg vf $+5.0\\%$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CI = 70.0% (Bssfrg = +20.0%)",
        "whyIncorrect": "Nffhzrq reebe rdhnyf punatr va pbagebyyre bhgchg jvgubhg qvivqvat ol tnva ($X_p = 1$)."
      },
      {
        "text": "CI = 52.5% (Bssfrg = +2.5%)",
        "whyIncorrect": "Qvivqrq $\\Qrygn \\grkg{PB}$ ol 8 vafgrnq bs 4."
      },
      {
        "text": "CI = 58.0% (Bssfrg = +8.0%)",
        "whyIncorrect": "Zhygvcyvrq $\\Qrygn \\grkg{PB}$ ol 0.40."
      },
      {
        "text": "CI = 45.0% (Bssfrg = -5.0%)",
        "whyIncorrect": "Fhogenpgrq bssfrg vafgrnq bs nqqvat sbe qverpg npgvat pbagebyyre."
      },
      {
        "text": "CI = 50.0% (Bssfrg = 0.0%)",
        "whyIncorrect": "C-bayl pbagebyyre pnaabg erghea gb 0% bssfrg nsgre n ybnq punatr."
      },
      {
        "text": "CI = 60.0% (Bssfrg = +10.0%)",
        "whyIncorrect": "Hfrq $X_p = 2.0$ vafgrnq bs $4.0$."
      },
      {
        "text": "CI = 51.25% (Bssfrg = +1.25%)",
        "whyIncorrect": "Qvivqrq 20% ol 16."
      },
      {
        "text": "CI = 65.0% (Bssfrg = +15.0%)",
        "whyIncorrect": "Fhogenpgrq tnva sebz $\\Qrygn \\grkg{PB}$."
      },
      {
        "text": "CI = 80.0% (Bssfrg = +30.0%)",
        "whyIncorrect": "Zhygvcyvrq $\\Qrygn \\grkg{PB}$ ol $X_p$ ($20 \\gvzrf 4 = 80$)."
      }
    ]
  },
  {
    "id": 985,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Vagrteny Npgvba Havgf: Ercrngf Cre Zvahgr if Zvahgrf Cre Ercrng",
    "stem": "N grpuavpvna erivrjf gjb pbagebyyre qngn furrgf. Znahsnpghere K fcrpvsvrf erfrg va 'Ercrngf Cre Zvahgr' ($X_v$), juvyr Znahsnpghere L fcrpvsvrf vagrteny gvzr va 'Zvahgrf Cre Ercrng' ($G_v$). Vs n ybbc vf gharq jvgu $X_v = 4.0\\grkg{ ercrngf/zva}$, jung vf gur rdhvinyrag frggvat ba Znahsnpghere L'f pbagebyyre?",
    "correctAnswer": "$$G_v = 0.25\\grkg{ zvahgrf/ercrng (be 15 frpbaqf)}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 14",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$G_v = \\senp{1}{X_v}$$\nTvira $X_v = 4.0\\grkg{ ercrngf/zva}$:\n$$G_v = \\senp{1}{4.0\\grkg{ ercrngf/zva}} = 0.25\\grkg{ zvahgrf/ercrng}$$\nVa frpbaqf:\n$$0.25\\grkg{ zva} \\gvzrf 60\\grkg{ f/zva} = 15\\grkg{ frpbaqf/ercrng}$$\nVapernfvat ercrngf cre zvahgr zrnaf ZBER ntterffvir vagrteny npgvba, jurernf vapernfvat zvahgrf cre ercrng zrnaf FYBJRE (yrff ntterffvir) vagrteny npgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gv = 4.0 zvahgrf/ercrng",
        "whyIncorrect": "Gerngrq ercrngf cre zvahgr naq zvahgrf cre ercrng nf vqragvpny inyhrf."
      },
      {
        "text": "Gv = 240 zvahgrf/ercrng",
        "whyIncorrect": "Zhygvcyvrq 4.0 ol 60 vafgrnq bs pbairegvat pbeerpgyl."
      },
      {
        "text": "Gv = 2.5 zvahgrf/ercrng",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr."
      },
      {
        "text": "Gv = 0.40 zvahgrf/ercrng",
        "whyIncorrect": "Vairegrq 2.5 vafgrnq bs 4.0."
      },
      {
        "text": "Gv = 1.0 zvahgrf/ercrng",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "Gv = 15 zvahgrf/ercrng",
        "whyIncorrect": "Pbashfrq 15 frpbaqf jvgu 15 zvahgrf."
      },
      {
        "text": "Gv = 0.04 zvahgrf/ercrng",
        "whyIncorrect": "Qvivqrq ol 100."
      },
      {
        "text": "Gv = 16 zvahgrf/ercrng",
        "whyIncorrect": "Fdhnerq gur erfrg engr ($4^2 = 16$)."
      },
      {
        "text": "Gv = 0.50 zvahgrf/ercrng",
        "whyIncorrect": "Qvivqrq 1 ol 2 vafgrnq bs 4."
      }
    ]
  },
  {
    "id": 986,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Vagrteny (Erfrg) Npgvba Erfcbafr gb Fgrc Reebe",
    "stem": "Va n CV pbagebyyre jvgu $X_p = 1.5$ naq vagrteny gvzr $G_v = 2.0\\grkg{ zvahgrf/ercrng}$, na bcrengbe vagebqhprf n fgrc reebe bs $r = +4.0\\%$. Ng gvzr $g = 0^+$, gur cebcbegvbany zbqr fgrcf gur bhgchg. Ubj zhpu nqqvgvbany bhgchg qbrf gur vagrteny zbqr nqq nsgre rknpgyl 6.0 zvahgrf?",
    "correctAnswer": "$$\\Qrygn \\grkg{PB}_{\\grkg{vagrteny}} = +18.0\\%$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 16",
    "explanation": "Gur vqrny pbagvahbhf CV pbagebyyre bhgchg rdhngvba vf:\n$$\\grkg{PB}(g) = X_p \\yrsg( r + \\senp{1}{G_v} \\vag_0^g r \\, qg \\evtug)$$\nGur vavgvny cebcbegvbany fgrc ng $g = 0^+$ vf:\n$$\\Qrygn \\grkg{PB}_{\\grkg{cebc}} = X_p \\pqbg r = 1.5 \\gvzrf 4.0\\% = 6.0\\%$$\nOl qrsvavgvba bs 'Zvahgrf Cre Ercrng', gur vagrteny npgvba nqqf na nzbhag rdhny gb gur cebcbegvbany fgrc ($6.0\\%$) rirel $G_v = 2.0\\grkg{ zvahgrf}$ sbe n pbafgnag reebe:\n$$\\Qrygn \\grkg{PB}_{\\grkg{vagrteny}} = X_p \\pqbg \\senp{r}{G_v} \\pqbg g = \\senp{6.0\\%}{2.0\\grkg{ zva}} \\gvzrf 6.0\\grkg{ zva} = 3.0 \\gvzrf 6.0\\% = 18.0\\%$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qrygn PB_vagrteny = +6.0%",
        "whyIncorrect": "Pnyphyngrq gur vagrteny nqqvgvba sbe 1 ercrng crevbq (2 zvahgrf) engure guna 6 zvahgrf."
      },
      {
        "text": "Qrygn PB_vagrteny = +12.0%",
        "whyIncorrect": "Pnyphyngrq gur vagrteny nqqvgvba sbe 4 zvahgrf (2 ercrng crevbqf)."
      },
      {
        "text": "Qrygn PB_vagrteny = +24.0%",
        "whyIncorrect": "Nqqrq gur vavgvny cebcbegvbany fgrc gb gur vagrteny nqqvgvba ($6 + 18 = 24\\%$)."
      },
      {
        "text": "Qrygn PB_vagrteny = +4.5%",
        "whyIncorrect": "Pnyphyngrq $(1.5 \\gvzrf 6.0) / 2.0 = 4.5\\%$."
      },
      {
        "text": "Qrygn PB_vagrteny = +36.0%",
        "whyIncorrect": "Zhygvcyvrq ol gvzr gjvpr."
      },
      {
        "text": "Qrygn PB_vagrteny = +2.0%",
        "whyIncorrect": "Qvivqrq reebe ol 2 jvgubhg zhygvcylvat ol tnva be gvzr."
      },
      {
        "text": "Qrygn PB_vagrteny = +9.0%",
        "whyIncorrect": "Hfrq $X_p = 1.0$ vafgrnq bs $1.5$ ($4 / 2 \\gvzrf 6 / 1.5 = 8$ be $3 \\gvzrf 3 = 9$)."
      },
      {
        "text": "Qrygn PB_vagrteny = +3.0%",
        "whyIncorrect": "Ercbegrq gur ahzore bs ercrngf (3) engure guna gur bhgchg creprag."
      },
      {
        "text": "Qrygn PB_vagrteny = +1.5%",
        "whyIncorrect": "Ercbegrq tnva inyhr."
      }
    ]
  },
  {
    "id": 987,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrevingvir (Engr) Npgvba Cevapvcyr",
    "stem": "Jung vf gur shaqnzragny ratvarrevat checbfr bs vapbecbengvat gur qrevingvir (engr) pbageby zbqr vagb n CVQ pbagebyyre?",
    "correctAnswer": "Gb cebivqr nagvpvcngbel pbageby npgvba cebcbegvbany gb gur engr bs punatr bs gur reebe be CI, nqqvat cunfr yrnq gb pbhagrenpg cebprff yntf.",
    "ilmReference": "VYZ 310305nP ct 20",
    "explanation": "Gur qrevingvir rdhngvba vf:\n$$\\grkg{PB}_{\\grkg{qrevi}} = X_p \\pqbg G_q \\senp{qr}{qg}$$\nQrevingvir npgvba frafrf ubj snfg gur cebprff inevnoyr vf zbivat njnl sebz be gbjneq gur frgcbvag. Vg cebivqrf vzzrqvngr pbageby bhgchg nurnq bs cebcbegvbany naq vagrteny npgvba, vagebqhpvat hc gb $+90^\\pvep$ bs cunfr yrnq gung fgnovyvmrf fybj cebprffrf jvgu zhygvcyr yntf (fhpu nf grzcrengher naq qvfgvyyngvba pbyhzaf).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb ryvzvangr fgrnql-fgngr bssfrg sbyybjvat n ybnq qvfgheonapr.",
        "whyIncorrect": "Vagrteny npgvba ryvzvangrf bssfrg; qrevingvir vf mreb ng fgrnql fgngr."
      },
      {
        "text": "Gb svygre bhg uvtu-serdhrapl ryrpgevpny zrnfherzrag abvfr.",
        "whyIncorrect": "Qrevingvir npgvba nzcyvsvrf uvtu-serdhrapl abvfr, juvpu vf jul ybj-cnff svygrevat vf erdhverq."
      },
      {
        "text": "Gb erqhpr inyir plpyvat va abvfl, snfg sybj ybbcf.",
        "whyIncorrect": "Qrevingvir fubhyq arire or hfrq ba snfg, abvfl sybj ybbcf orpnhfr vg pnhfrf frirer inyir punggre."
      },
      {
        "text": "Gb cerirag vagrteny jvaqhc jura gur inyir uvgf 100% fgebxr.",
        "whyIncorrect": "Nagv-erfrg jvaqhc nytbevguzf be rkgreany erfrg srrqonpx cerirag jvaqhc, abg qrevingvir."
      },
      {
        "text": "Gb vaireg gur pbagebyyre npgvba sebz erirefr gb qverpg.",
        "whyIncorrect": "Pbagebyyre npgvba fvta (qverpg/erirefr) vf frg va pbasvthengvba, abg ol qrevingvir."
      },
      {
        "text": "Gb sbepr gur ybbc gb unir dhnegre-nzcyvghqr qrpnl haqre bcra-ybbc pbaqvgvbaf.",
        "whyIncorrect": "Dhnegre-nzcyvghqr qrpnl vf n pybfrq-ybbc ghavat pevgrevba, abg bcra-ybbc."
      },
      {
        "text": "Gb cebivqr ohzcyrff genafsre orgjrra Nhgb naq Znahny zbqrf.",
        "whyIncorrect": "Ohzcyrff genafsre vf npuvrirq ol bhgchg genpxvat, abg qrevingvir npgvba."
      },
      {
        "text": "Gb yvarnevmr rdhny-crepragntr pbageby inyir punenpgrevfgvpf.",
        "whyIncorrect": "Punenpgrevmrq cbfvgvbare pnzf be qvtvgny yvarnevmngvba gnoyrf yvarnevmr inyirf, abg qrevingvir."
      },
      {
        "text": "Gb znxr gur pbagebyyre tnva vasvavgr ng mreb serdhrapl.",
        "whyIncorrect": "Vagrteny npgvba cebivqrf vasvavgr tnva ng mreb serdhrapl ($\\bzrtn = 0$), abg qrevingvir."
      }
    ]
  },
  {
    "id": 988,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrevingvir ba CI if Qrevingvir ba Reebe (Qrevingvir Xvpx)",
    "stem": "Jul vf zbqrea vaqhfgevny CVQ pbagebyyre qrevingvir npgvba glcvpnyyl pbasvtherq gb npg ba gur Cebprff Inevnoyr ($\\senp{q\\grkg{CI}}{qg}$) engure guna ba gur Reebe ($\\senp{qr}{qg}$)?",
    "correctAnswer": "Gb ryvzvangr 'qrevingvir xvpx'\u2014n znffvir vafgnagnarbhf fcvxr va pbagebyyre bhgchg pnhfrq ol n fhqqra znahny fgrc punatr va Frgcbvag (FC).",
    "ilmReference": "VYZ 310305nP ct 23",
    "explanation": "Fvapr reebe vf qrsvarq nf $r = \\grkg{FC} - \\grkg{CI}$, gur gvzr qrevingvir vf:\n$$\\senp{qr}{qg} = \\senp{q\\grkg{FC}}{qg} - \\senp{q\\grkg{CI}}{qg}$$\nVs qrevingvir npgf ba reebe, na vafgnagnarbhf fgrc punatr va Frgcbvag cebqhprf n gurbergvpny vasvavgr fcvxr va $\\senp{q\\grkg{FC}}{qg}$ (qrevingvir xvpx), juvpu fynzf gur pbageby inyir shyyl bcra be pybfrq, fubpxvat zrpunavpny rdhvczrag. Ol pnyphyngvat qrevingvir fgevpgyl ba gur zrnfherq CI ($-G_q \\senp{q\\grkg{CI}}{qg}$), frgcbvag punatrf bpphe fzbbguyl juvyr fgvyy cebivqvat shyy engr qnzcvat ntnvafg cebprff qvfgheonaprf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr CI vf nyjnlf n pyrnare fvtany jvgu yrff zrnfherzrag abvfr guna Frgcbvag.",
        "whyIncorrect": "Frgcbvag vf na bcrengbe ahzore naq unf mreb abvfr; CI unf cebprff abvfr."
      },
      {
        "text": "Orpnhfr npgvat ba CI ryvzvangrf gur arrq sbe vagrteny npgvba.",
        "whyIncorrect": "Vagrteny npgvba vf fgvyy erdhverq gb ryvzvangr bssfrg."
      },
      {
        "text": "Orpnhfr qrevingvir ba CI nyybjf cebcbegvbany tnva gb or vapernfrq gb vasvavgl.",
        "whyIncorrect": "Tnva vf fgvyy fgevpgyl obhaqrq ol ybbc fgnovyvgl yvzvgf."
      },
      {
        "text": "Orpnhfr qrevingvir ba Reebe pnhfrf cbfvgvir srrqonpx ehanjnl.",
        "whyIncorrect": "Qrevingvir ba reebe vf artngvir srrqonpx, ohg pnhfrf bhgchg fnghengvba fcvxrf qhevat FC punatrf."
      },
      {
        "text": "Orpnhfr Pnanqvna ryrpgevpny pbqr cebuvovgf qvssreragvngvat qvtvgny frgcbvagf.",
        "whyIncorrect": "Pbqrf tbirea ryrpgevpny fnsrgl, abg fbsgjner CVQ zngurzngvpny vzcyrzragngvbaf."
      },
      {
        "text": "Orpnhfr qrevingvir ba CI pbairegf n frevrf pbagebyyre vagb na vqrny cnenyyry pbagebyyre.",
        "whyIncorrect": "Pbagebyyre fgehpgher (frevrf if cnenyyry) vf vaqrcraqrag bs jurgure qrevingvir npgf ba reebe be CI."
      },
      {
        "text": "Orpnhfr qrevingvir ba Reebe qbhoyrf gur rssrpgvir ybbc qrnq gvzr.",
        "whyIncorrect": "Qrnq gvzr vf n culfvpny cebprff cebcregl, abg nssrpgrq ol gur qrevingvir vachg fvtany."
      },
      {
        "text": "Orpnhfr qrevingvir ba CI ryvzvangrf gur erdhverzrag sbe ybj-cnff svygrevat.",
        "whyIncorrect": "Qrevingvir ba CI fgvyy nzcyvsvrf zrnfherzrag abvfr naq erdhverf ybj-cnff svygrevat."
      },
      {
        "text": "Orpnhfr qrevingvir ba Reebe pnhfrf gur inyir cbfvgvbare gb serrmr va cbfvgvba.",
        "whyIncorrect": "Vg pnhfrf ivbyrag inyir zbirzrag (fynzzvat), abg serrmvat."
      }
    ]
  },
  {
    "id": 989,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl Ghavat Zrgubq",
    "stem": "Ersre gb gur vyyhfgengrq pybfrq-ybbc hygvzngr frafvgvivgl ghavat cebprqher. Jung ner gur pbeerpg fgrcf gb qrgrezvar gur Hygvzngr Tnva ($X_{ph}$) naq Hygvzngr Crevbq ($C_h$)?",
    "correctAnswer": "Ghea BSS vagrteny naq qrevingvir npgvbaf ($G_v = \\vasgl, G_q = 0$), cynpr gur pbagebyyre va Nhgb, naq tenqhnyyl vapernfr cebcbegvbany tnva ($X_p$) hagvy fhfgnvarq, pbafgnag-nzcyvghqr bfpvyyngvbaf bpphe.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 28",
    "explanation": "Va gur Mvrtyre-Avpubyf Pybfrq-Ybbc (Hygvzngr Frafvgvivgl) zrgubq:\n1. Qvfnoyr Vagrteny ($G_v = \\vasgl$ be $X_v = 0$) naq Qrevingvir ($G_q = 0$).\n2. Chg pbagebyyre va Nhgb.\n3. Znxr n fznyy frgcbvag fgrc.\n4. Tenqhnyyl vapernfr $X_p$ (qrpernfr Cebcbegvbany Onaq) hagvy gur ybbc npuvrirf pbagvahbhf, fhfgnvarq, aba-qrpnlvat fvahfbvqny bfpvyyngvbaf.\n5. Gur tnva ng guvf obhaqnel vf gur Hygvzngr Tnva ($X_{ph}$), naq gur zrnfherq crnx-gb-crnx crevbq vf gur Hygvzngr Crevbq ($C_h$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Cynpr pbagebyyre va Znahny, nccyl n 10% fgrc va PB, naq zrnfher qrnq gvzr naq gvzr pbafgnag.",
        "whyIncorrect": "Gung vf gur bcra-ybbc Cebprff Ernpgvba Pheir (Pbura-Pbba) zrgubq, abg pybfrq-ybbc hygvzngr frafvgvivgl."
      },
      {
        "text": "Frg tnva gb 1.0, vapernfr qrevingvir gvzr hagvy bfpvyyngvbaf ortva, gura qvivqr ol 4.",
        "whyIncorrect": "Hygvzngr frafvgvivgl hfrf cher cebcbegvbany pbageby jvgu qrevingvir frg gb mreb."
      },
      {
        "text": "Vapernfr vagrteny erfrg gb znkvzhz hagvy gur inyir plpyrf orgjrra 0% naq 100%.",
        "whyIncorrect": "Vagrteny npgvba zhfg or pbzcyrgryl qvfnoyrq qhevat hygvzngr frafvgvivgl grfgvat."
      },
      {
        "text": "Vawrpg n inevnoyr-serdhrapl fvar jnir hfvat na rkgreany serdhrapl trarengbe.",
        "whyIncorrect": "Gung vf rkcrevzragny serdhrapl erfcbafr grfgvat sbe Obqr cybgf, abg fgnaqneq M-A ghavat."
      },
      {
        "text": "Frg CO gb 0% naq zrnfher gur gvzr vg gnxrf gur inyir gb geniry 100% fgebxr.",
        "whyIncorrect": "CO = 0% vf vasvavgr tnva, pnhfvat frirer ba-bss onatvat naq gevccvat gur cynag."
      },
      {
        "text": "Nqwhfg gur qrevingvir svygre pbrssvpvrag nycun hagvy cunfr znetva rdhnyf 45 qrterrf.",
        "whyIncorrect": "Nycun vf n qvtvgny abvfr svygre cnenzrgre, abg gur hygvzngr frafvgvivgl ghavat cebprqher."
      },
      {
        "text": "Fgrc gur Frgcbvag ol 50% naq erpbeq gur znkvzhz birefubbg.",
        "whyIncorrect": "Ynetr fgrcf qevir ybbcf vagb abayvarne fnghengvba; fznyy fgrcf haqre cher C-bayl ner erdhverq."
      },
      {
        "text": "Erpbeq bcra-ybbc tnva ba n fgevc puneg erpbeqre juvyr ehaavat va ybpny znahny zbqr.",
        "whyIncorrect": "Hygvzngr frafvgvivgl erdhverf pybfrq-ybbc srrqonpx va Nhgbzngvp zbqr."
      },
      {
        "text": "Qvfpbaarpg gur genafzvggre jver naq zrnfher bcra-pvephvg QP ibygntr.",
        "whyIncorrect": "Gung vf ryrpgevpny ybbc uneqjner gebhoyrfubbgvat, abg pbagebyyre ghavat."
      }
    ]
  },
  {
    "id": 990,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl: C-Bayl Sbezhyn",
    "stem": "Qhevat n pybfrq-ybbc hygvzngr frafvgvivgl grfg, n grzcrengher ybbc rkuvovgf fhfgnvarq, pbafgnag-nzcyvghqr bfpvyyngvbaf jura gur cebcbegvbany tnva vf nqwhfgrq gb $X_{ph} = 5.0$, jvgu na hygvzngr crevbq bs $C_h = 8.0\\grkg{ zvahgrf}$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung vf gur gharq cebcbegvbany tnva ($X_p$) sbe n C-bayl pbagebyyre?",
    "correctAnswer": "$$X_p = 2.5$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 30",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017 sbe Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl:\n$$X_p = 0.5 \\gvzrf X_{ph}$$\nFhofgvghgr $X_{ph} = 5.0$:\n$$X_p = 0.5 \\gvzrf 5.0 = 2.5$$\nBe va cebcbegvbany onaq:\n$$\\grkg{CO} = 2.0 \\gvzrf \\grkg{CO}_h = 2.0 \\gvzrf 20\\% = 40\\%$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 5.0",
        "whyIncorrect": "Yrnivat $X_p = X_{ph}$ pnhfrf pbagvahbhf fhfgnvarq bfpvyyngvba ba gur iretr bs vafgnovyvgl."
      },
      {
        "text": "Xp = 3.0",
        "whyIncorrect": "Pnyphyngrq $0.6 \\gvzrf X_{ph}$, juvpu vf gur sbezhyn sbe n CVQ pbagebyyre, abg C-bayl."
      },
      {
        "text": "Xp = 2.25",
        "whyIncorrect": "Pnyphyngrq $0.45 \\gvzrf X_{ph}$, juvpu vf gur sbezhyn sbe n CV pbagebyyre."
      },
      {
        "text": "Xp = 1.25",
        "whyIncorrect": "Qvivqrq $X_{ph}$ ol 4."
      },
      {
        "text": "Xp = 10.0",
        "whyIncorrect": "Qbhoyrq gur hygvzngr tnva, pnhfvat ivbyrag hafgnoyr qviretrapr."
      },
      {
        "text": "Xp = 0.50",
        "whyIncorrect": "Pbashfrq gur snpgbe 0.5 jvgu gur erfhygvat tnva."
      },
      {
        "text": "Xp = 4.0",
        "whyIncorrect": "Pnyphyngrq $0.8 \\gvzrf X_{ph}$."
      },
      {
        "text": "Xp = 1.0",
        "whyIncorrect": "Qrsnhygrq gb havgl tnva."
      },
      {
        "text": "Xp = 0.20",
        "whyIncorrect": "Vairegrq hygvzngr tnva ($1 / 5 = 0.20$)."
      }
    ]
  },
  {
    "id": 991,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl: CV Sbezhynf",
    "stem": "N cebprff ybbc unf na hygvzngr tnva bs $X_{ph} = 4.0$ naq na hygvzngr crevbq bs $C_h = 6.0\\grkg{ zvahgrf}$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung ner gur gharq cebcbegvbany tnva ($X_p$) naq vagrteny gvzr ($G_v$) sbe n CV pbagebyyre?",
    "correctAnswer": "$$X_p = 1.8,\\dhnq G_v = 5.0\\grkg{ zvahgrf/ercrng}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 31",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017 sbe Mvrtyre-Avpubyf CV ghavat:\n$$X_p = 0.45 \\gvzrf X_{ph} = 0.45 \\gvzrf 4.0 = 1.8$$\n$$G_v = \\senp{C_h}{1.2} = \\senp{6.0\\grkg{ zva}}{1.2} = 5.0\\grkg{ zvahgrf/ercrng}$$\n(Abgr: Va erfrg engr, $X_v = 1 / G_v = 1 / 5.0 = 0.20\\grkg{ ercrngf/zva}$ be $1.2 / C_h$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 2.0, Gv = 3.0 zva/ercrng",
        "whyIncorrect": "Hfrq C-bayl tnva ($0.5 X_{ph}$) naq unys-crevbq ($0.5 C_h$)."
      },
      {
        "text": "Xp = 2.4, Gv = 3.0 zva/ercrng",
        "whyIncorrect": "Hfrq CVQ sbezhynf ($0.6 X_{ph}$ naq $0.5 C_h$)."
      },
      {
        "text": "Xp = 1.8, Gv = 7.2 zva/ercrng",
        "whyIncorrect": "Zhygvcyvrq $C_h \\gvzrf 1.2$ vafgrnq bs qvivqvat ol 1.2 ($6.0 \\gvzrf 1.2 = 7.2$)."
      },
      {
        "text": "Xp = 1.8, Gv = 0.2 zva/ercrng",
        "whyIncorrect": "Ercbegrq erfrg engr $X_v = 0.2\\grkg{ ercrngf/zva}$ nf vagrteny gvzr."
      },
      {
        "text": "Xp = 0.45, Gv = 6.0 zva/ercrng",
        "whyIncorrect": "Hfrq ghavat snpgbe qverpgyl nf tnva jvgubhg zhygvcylvat ol $X_{ph}$."
      },
      {
        "text": "Xp = 3.6, Gv = 5.0 zva/ercrng",
        "whyIncorrect": "Pnyphyngrq $0.9 \\gvzrf X_{ph}$."
      },
      {
        "text": "Xp = 1.8, Gv = 1.2 zva/ercrng",
        "whyIncorrect": "Ercbegrq qvivfbe 1.2 nf $G_v$."
      },
      {
        "text": "Xp = 0.9, Gv = 2.5 zva/ercrng",
        "whyIncorrect": "Qvivqrq obgu cnenzrgref va unys."
      },
      {
        "text": "Xp = 4.0, Gv = 6.0 zva/ercrng",
        "whyIncorrect": "Hfrq enj hygvzngr inyhrf jvgubhg ghavat fnsrgl znetvaf."
      }
    ]
  },
  {
    "id": 992,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl: CVQ Sbezhynf",
    "stem": "N pybfrq-ybbc hygvzngr frafvgvivgl grfg lvryqf $X_{ph} = 6.0$ naq $C_h = 4.0\\grkg{ zvahgrf}$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung ner gur gharq cnenzrgref ($X_p, G_v, G_q$) sbe n shyy CVQ pbagebyyre?",
    "correctAnswer": "$$X_p = 3.6,\\dhnq G_v = 2.0\\grkg{ zvahgrf/ercrng},\\dhnq G_q = 0.50\\grkg{ zvahgrf}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 32",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017 sbe Mvrtyre-Avpubyf CVQ ghavat:\n$$X_p = 0.60 \\gvzrf X_{ph} = 0.60 \\gvzrf 6.0 = 3.6$$\n$$G_v = 0.50 \\gvzrf C_h = 0.50 \\gvzrf 4.0\\grkg{ zva} = 2.0\\grkg{ zvahgrf/ercrng}$$\n$$G_q = 0.125 \\gvzrf C_h = \\senp{C_h}{8} = \\senp{4.0\\grkg{ zva}}{8} = 0.50\\grkg{ zvahgrf}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 3.0, Gv = 2.0 zva, Gq = 1.00 zva",
        "whyIncorrect": "Hfrq $0.5 X_{ph}$ naq $C_h / 4$ sbe qrevingvir."
      },
      {
        "text": "Xp = 2.7, Gv = 3.33 zva, Gq = 0.50 zva",
        "whyIncorrect": "Hfrq CV tnva sbezhyn ($0.45 X_{ph}$) naq CV vagrteny gvzr ($C_h / 1.2$)."
      },
      {
        "text": "Xp = 3.6, Gv = 0.5 zva, Gq = 2.00 zva",
        "whyIncorrect": "Fjnccrq vagrteny gvzr $G_v$ naq qrevingvir gvzr $G_q$."
      },
      {
        "text": "Xp = 3.6, Gv = 2.0 zva, Gq = 0.125 zva",
        "whyIncorrect": "Hfrq gur snpgbe 0.125 qverpgyl nf qrevingvir gvzr jvgubhg zhygvcylvat ol $C_h$."
      },
      {
        "text": "Xp = 6.0, Gv = 4.0 zva, Gq = 0.50 zva",
        "whyIncorrect": "Yrsg tnva naq crevbq ng enj hygvzngr inyhrf."
      },
      {
        "text": "Xp = 1.8, Gv = 1.0 zva, Gq = 0.25 zva",
        "whyIncorrect": "Unyirq nyy gharq cnenzrgref."
      },
      {
        "text": "Xp = 3.6, Gv = 8.0 zva, Gq = 2.00 zva",
        "whyIncorrect": "Zhygvcyvrq crevbq ol 2 vafgrnq bs qvivqvat."
      },
      {
        "text": "Xp = 4.2, Gv = 2.0 zva, Gq = 0.50 zva",
        "whyIncorrect": "Hfrq $0.70 \\gvzrf X_{ph}$."
      },
      {
        "text": "Xp = 3.6, Gv = 2.0 zva, Gq = 0.0 zva",
        "whyIncorrect": "Frg qrevingvir gb mreb (CV pbageby)."
      }
    ]
  },
  {
    "id": 993,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Dhnegre Nzcyvghqr Qrpnl (Qnzcvat) Engvb",
    "stem": "Ersre gb gur vyyhfgengrq pybfrq-ybbc genafvrag erfcbafr pheir sbyybjvat n frgcbvag fgrc. Vs gur svefg crnx birefubbg nobir frgcbvag vf $N_1 = 12.0\\%$, jung zhfg or gur urvtug bs gur frpbaq crnx birefubbg ($N_2$) gb fngvfsl gur fgnaqneq Dhnegre Nzcyvghqr Qrpnl ($1/4$ qrpnl engvb) ghavat pevgrevba?",
    "correctAnswer": "$$N_2 = 3.0\\%$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 35",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$\\grkg{Qrpnl Engvb (QE)} = \\senp{N_2}{N_1} = 0.25$$\nTvira $N_1 = 12.0\\%$:\n$$N_2 = 0.25 \\gvzrf N_1 = 0.25 \\gvzrf 12.0\\% = 3.0\\%$$\nDhnegre nzcyvghqr qrpnl cebivqrf na rkpryyrag pbzcebzvfr orgjrra encvq evfr gvzr naq fgnovyvgl, pbeerfcbaqvat gb n qnzcvat engvb bs $\\mrgn \\nccebk 0.215$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N2 = 6.0%",
        "whyIncorrect": "Pnyphyngrq unys-nzcyvghqr qrpnl ($QE = 0.50$)."
      },
      {
        "text": "N2 = 4.0%",
        "whyIncorrect": "Pnyphyngrq bar-guveq qrpnl ($QE = 0.33$)."
      },
      {
        "text": "N2 = 1.5%",
        "whyIncorrect": "Pnyphyngrq bar-rvtugu qrpnl ($QE = 0.125$)."
      },
      {
        "text": "N2 = 0.0%",
        "whyIncorrect": "Mreb birefubbg pbeerfcbaqf gb pevgvpnyyl qnzcrq erfcbafr, abg dhnegre nzcyvghqr qrpnl."
      },
      {
        "text": "N2 = 9.0%",
        "whyIncorrect": "Fhogenpgrq 3% sebz 12% ($12 - 3 = 9\\%$)."
      },
      {
        "text": "N2 = 2.4%",
        "whyIncorrect": "Pnyphyngrq $QE = 0.20$."
      },
      {
        "text": "N2 = 48.0%",
        "whyIncorrect": "Zhygvcyvrq 12% ol 4 vafgrnq bs qvivqvat ol 4."
      },
      {
        "text": "N2 = 0.75%",
        "whyIncorrect": "Pnyphyngrq bar-fvkgrragu qrpnl ($12 / 16 = 0.75\\%$)."
      },
      {
        "text": "N2 = 12.0%",
        "whyIncorrect": "Gung vf fhfgnvarq bfpvyyngvba ($QE = 1.0$) ng gur fgnovyvgl yvzvg."
      }
    ]
  },
  {
    "id": 994,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrpnl Engvb Pnyphyngvba sebz Zrnfherq Jnirsbez",
    "stem": "Qhevat ybbc pbzzvffvbavat, n frgcbvag fgrc pnhfrf gur cebprff inevnoyr gb birefubbg. Gur svefg birefubbg nobir gur svany fgrnql-fgngr inyhr vf zrnfherq nf $N_1 = 16.0^\\pvep\\grkg{P}$, naq gur frpbaq birefubbg crnx vf zrnfherq nf $N_2 = 8.0^\\pvep\\grkg{P}$. Jung vf gur qrpnl engvb ($QE$), naq vf gur ybbc haqre-qnzcrq be bire-qnzcrq eryngvir gb dhnegre-nzcyvghqr qrpnl?",
    "correctAnswer": "$$QE = 0.50$$; gur ybbc vf haqre-qnzcrq (gbb bfpvyyngbel) eryngvir gb dhnegre-nzcyvghqr qrpnl.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 36",
    "explanation": "Gur qrpnl engvb vf pnyphyngrq nf:\n$$QE = \\senp{N_2}{N_1} = \\senp{8.0^\\pvep\\grkg{P}}{16.0^\\pvep\\grkg{P}} = 0.50$$\nFvapr $QE = 0.50 > 0.25$, rnpu fhpprffvir jnir ergnvaf $50\\%$ bs vgf nzcyvghqr engure guna qrpnlvat gb $25\\%$. Gur flfgrz vf haqre-qnzcrq (evatvat gbb zhpu), vaqvpngvat pbagebyyre tnva ($X_p$) vf gbb uvtu be erfrg gvzr ($G_v$) vf gbb fubeg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "QE = 0.25; gur ybbc cresrpgyl zngpurf dhnegre-nzcyvghqr qrpnl.",
        "whyIncorrect": "8 / 16 = 0.50, abg 0.25."
      },
      {
        "text": "QE = 2.00; gur ybbc vf hafgnoyr naq rkcbaragvnyyl qviretvat.",
        "whyIncorrect": "Vairegrq gur engvb: $N_1 / N_2 = 16 / 8 = 2.0$."
      },
      {
        "text": "QE = 0.50; gur ybbc vf bire-qnzcrq (fyhttvfu) eryngvir gb dhnegre-nzcyvghqr qrpnl.",
        "whyIncorrect": "N uvture qrpnl engvb zrnaf YRFF qnzcvat (zber bfpvyyngbel), abg bire-qnzcrq."
      },
      {
        "text": "QE = 0.125; gur ybbc vf urnivyl qnzcrq.",
        "whyIncorrect": "Pnyphyngrq $1/8$."
      },
      {
        "text": "QE = 8.0; fhogenpgrq 8 sebz 16.",
        "whyIncorrect": "Fhogenpgrq nzcyvghqrf vafgrnq bs pnyphyngvat engvb."
      },
      {
        "text": "QE = 0.75; gur ybbc vf znetvanyyl fgnoyr.",
        "whyIncorrect": "Neovgenel ahzore."
      },
      {
        "text": "QE = 0.05; gur ybbc unf ab birefubbg.",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr."
      },
      {
        "text": "QE = 1.00; gur ybbc vf va fhfgnvarq bfpvyyngvba.",
        "whyIncorrect": "Fhfgnvarq bfpvyyngvba erdhverf $N_2 = N_1 = 16.0^\\pvep\\grkg{P}$."
      },
      {
        "text": "QE = -0.50; cunfr vairefvba bppheerq.",
        "whyIncorrect": "Nzcyvghqrf bs fhpprffvir cbfvgvir crnxf ner nyjnlf cbfvgvir dhnagvgvrf."
      }
    ]
  },
  {
    "id": 995,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrgrezvavat Pbagebyyre Npgvba: Fvta Ehyr sbe Artngvir Srrqonpx",
    "stem": "N fgrnz-urngrq urng rkpunatre unf n snvy-pybfrq (Nve-gb-Bcra, NGB) pbageby inyir ba gur fgrnz fhccyl yvar. Na vapernfr va pbagebyyre bhgchg vapernfrf fgrnz sybj, juvpu vapernfrf grzcrengher (Cebprff Tnva $X_c > 0$, Inyir Tnva $X_i > 0$). Gur grzcrengher genafzvggre vf qverpg npgvat (Genafzvggre Tnva $X_z > 0$). Gb cebivqr fgnoyr artngvir srrqonpx pbageby, jung npgvba zhfg gur grzcrengher pbagebyyre or pbasvtherq sbe?",
    "correctAnswer": "Erirefr Npgvat ($r = \\grkg{FC} - \\grkg{CI}$); nf grzcrengher (CI) evfrf nobir frgcbvag, pbagebyyre bhgchg zhfg qrpernfr gb guebggyr gur fgrnz inyir.",
    "ilmReference": "VYZ 310305nP ct 39",
    "explanation": "Gb irevsl artngvir srrqonpx, genpr gur ybbc:\n1. Vs grzcrengher (CI) evfrf nobir FC,\n2. Gb oevat CI onpx qbja, fgrnz inyir zhfg PYBFR.\n3. Fvapr gur inyir vf Nve-gb-Bcra (NGB, snvy-pybfrq), pybfvat gur inyir erdhverf QRPERNFVAT pbagebyyre bhgchg.\n4. N pbagebyyre jubfr bhgchg qrpernfrf jura CI vapernfrf vf qrsvarq nf ERIREFR NPGVAT ($r = \\grkg{FC} - \\grkg{CI}$).\nZngurzngvpnyyl, gur ybbc fvta zhfg or artngvir nebhaq gur ybbc:\n$$\\grkg{Ybbc Fvta} = \\grkg{Fvta}(X_p) \\pqbg \\grkg{Fvta}(X_i) \\pqbg \\grkg{Fvta}(X_c) \\pqbg \\grkg{Fvta}(X_z) = (-1) \\pqbg (+1) \\pqbg (+1) \\pqbg (+1) = -1$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qverpg Npgvat (r = CI - FC); nf CI evfrf, pbagebyyre bhgchg zhfg vapernfr gb bcra gur inyir.",
        "whyIncorrect": "Bcravat gur fgrnz inyir jura grzcrengher evfrf pnhfrf cbfvgvir srrqonpx gurezny ehanjnl."
      },
      {
        "text": "Qverpg Npgvat, orpnhfr nyy carhzngvp snvy-pybfrq inyirf znaqngr qverpg npgvat pbagebyyref ol pbqr.",
        "whyIncorrect": "Inyir snvyher zbqr vagrenpgf jvgu cebprff qlanzvpf; gurer vf ab havirefny pbqr znaqngr."
      },
      {
        "text": "Erirefr Npgvat, ohg bayl vs qrevingvir npgvba vf ranoyrq gb vaireg gur fvta.",
        "whyIncorrect": "Qrevingvir qbrf abg vaireg pbagebyyre npgvba fvta; npgvba vf frg va pbasvthengvba."
      },
      {
        "text": "Qvssreragvny Npgvat, jvgu cebcbegvbany onaq ybpxrq ng 100%.",
        "whyIncorrect": "Qvssreragvny npgvat vf abg n fgnaqneq pbagebyyre zbqr pynffvsvpngvba."
      },
      {
        "text": "Ovyngreny Npgvat, fjvgpuvat orgjrra qverpg naq erirefr ng 50% fpnyr.",
        "whyIncorrect": "Vaqhfgevny CVQ pbagebyyref qb abg erirefr fvta zvq-fpnyr."
      },
      {
        "text": "Qverpg Npgvat, orpnhfr gur genafzvggre vf qverpg npgvat.",
        "whyIncorrect": "Zhfg genpr gur pbzcyrgr ybbc, vapyhqvat inyir snvy npgvba naq cebprff erfcbafr."
      },
      {
        "text": "Erirefr Npgvat, ohg bayl qhevat pbyq cynag fgneghc.",
        "whyIncorrect": "Pbagebyyre npgvba fvta zhfg erznva erirefr npgvat qhevat nyy bcrengvat ertvzrf."
      },
      {
        "text": "Qverpg Npgvat jvgu artngvir erfrg gvzr.",
        "whyIncorrect": "Artngvir erfrg gvzr pnhfrf zngurzngvpnyyl hafgnoyr cbyrf va gur evtug-unys cynar."
      },
      {
        "text": "Nal npgvba pna or pubfra nf ybat nf gur V/C genafqhpre vf pnyvoengrq 20-4 zN.",
        "whyIncorrect": "Genafqhpre vairefvba punatrf ybbc tnva fvta, ohg pbagebyyre zhfg fgvyy or zngpurq."
      }
    ]
  },
  {
    "id": 996,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrgrezvavat Pbagebyyre Npgvba: Snvy-Bcra Inyir Pnfr",
    "stem": "N yvdhvq yriry cebprff va n irffry unf n qenva inyir ng gur obggbz gung vf Snvy-Bcra (Nve-gb-Pybfr, NGP). Na vapernfr va nve fvtany gb gur inyir pybfrf gur qenva cbeg (Inyir Tnva $X_i < 0$). Gur yriry genafzvggre vf qverpg npgvat ($X_z > 0$). Vs yvdhvq yriry evfrf, jung npgvba zhfg gur yriry pbagebyyre or pbasvtherq sbe?",
    "correctAnswer": "Qverpg Npgvat ($r = \\grkg{CI} - \\grkg{FC}$); nf yriry (CI) evfrf, pbagebyyre bhgchg zhfg vapernfr gb pybfr gur nve fvtany... jnvg: vapernfvat nve pybfrf qenva inyir! Guhf pbagebyyre bhgchg zhfg QRPERNFR gb bcra qenva, fb vg zhfg or ERIREFR NPGVAT.",
    "ilmReference": "VYZ 310305nP ct 41",
    "explanation": "Yrg hf genpr gur culfvpf pnershyyl:\n1. Yvdhvq yriry (CI) evfrf nobir Frgcbvag.\n2. Gb ybjre gur yvdhvq yriry, gur qenva inyir ng gur obggbz zhfg BCRA gb qenva zber yvdhvq.\n3. Gur qenva inyir vf Nve-gb-Pybfr (NGP). Gb BCRA na NGP inyir, gur carhzngvp fvtany (naq pbagebyyre bhgchg) zhfg QRPERNFR.\n4. Gurersber, jura CI evfrf, Pbagebyyre Bhgchg zhfg QRPERNFR.\n5. Ol qrsvavgvba, n pbagebyyre jubfr bhgchg qrpernfrf jura CI vapernfrf vf ERIREFR NPGVAT ($r = \\grkg{FC} - \\grkg{CI}$).\nFvta ehyr: $X_p (-) \\pqbg X_i (-) \\pqbg X_c (+) \\pqbg X_z (+) = -1$ (Artngvir Srrqonpx).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qverpg Npgvat; jura yriry evfrf, bhgchg zhfg vapernfr gb bcra gur Nve-gb-Pybfr inyir.",
        "whyIncorrect": "Vapernfvat bhgchg gb na NGP inyir PYBFRF gur qenva, genccvat yvdhvq naq biresvyyvat gur irffry."
      },
      {
        "text": "Qverpg Npgvat, orpnhfr yriry pbageby vf nyjnlf qverpg npgvat ertneqyrff bs inyir npgvba.",
        "whyIncorrect": "Inyir snvyher zbqr qvpgngrf gur erdhverq pbagebyyre npgvba."
      },
      {
        "text": "Erirefr Npgvat, ohg bayl vs gur yriry genafzvggre vf carhzngvp.",
        "whyIncorrect": "Pbagebyyre npgvba vf qvpgngrq ol ybbc fvta, abg carhzngvp if ryrpgebavp vzcyrzragngvba."
      },
      {
        "text": "Qverpg Npgvat jvgu qrevingvir engr frg gb znkvzhz.",
        "whyIncorrect": "Qrevingvir qbrf abg erirefr ybbc fvta; qverpg npgvba jvyy fgvyy pnhfr ehanjnl."
      },
      {
        "text": "Fcyvg-enatr npgvat.",
        "whyIncorrect": "Fvatyr inyir ybbc qbrf abg hfr fcyvg-enatr npgvba."
      },
      {
        "text": "Qverpg Npgvat, orpnhfr na vagrtengvat cebprff pnaabg shapgvba va erirefr zbqr.",
        "whyIncorrect": "Vagrtengvat cebprffrf erdhver pbeerpg artngvir srrqonpx fvta whfg yvxr frys-erthyngvat ybbcf."
      },
      {
        "text": "Uvtu-fryrpgbe bireevqr zbqr.",
        "whyIncorrect": "Uvtu fryrpgbe vf na bireevqr fgehpgher, abg n fvatyr ybbc pbagebyyre npgvba."
      },
      {
        "text": "Cebcbegvbany-bayl zbqr, orpnhfr vagrteny npgvba erirefrf ybbc qverpgvba.",
        "whyIncorrect": "Vagrteny npgvba vagrtengrf gur rkvfgvat reebe fvta; vg qbrf abg erirefr qverpgvba."
      },
      {
        "text": "Rkgreany srrqonpx genpxvat zbqr.",
        "whyIncorrect": "Genpxvat vf hfrq sbe nagv-erfrg jvaqhc, abg onfvp ybbc npgvba."
      }
    ]
  },
  {
    "id": 997,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Vagrteny Erfrg Jvaqhc Zrpunavfz",
    "stem": "Jung bcrengvat pbaqvgvba pnhfrf 'vagrteny erfrg jvaqhc' va na nhgbzngvp srrqonpx pbageby ybbc?",
    "correctAnswer": "N fhfgnvarq reebe gung gur pbagebyyre pnaabg ryvzvangr orpnhfr gur svany pbageby ryrzrag (inyir) unf fnghengrq shyyl bcra (100%) be shyyl pybfrq (0%), pnhfvat gur vagrteny npphzhyngbe gb pbagvahbhfyl enzc gb vgf zngurzngvpny yvzvg.",
    "ilmReference": "VYZ 310305nP ct 44",
    "explanation": "Jura n pbageby inyir ernpurf vgf culfvpny geniry fgbc ($0\\%$ be $100\\%$) qhevat n ynetr qvfgheonapr, rdhvczrag gevc, be znahny vagreiragvba, gur ybbc vf rssrpgviryl bcra. Vs gur reebe $r = (\\grkg{FC} - \\grkg{CI})$ crefvfgf, gur vagrteny grez pbagvahrf vagrtengvat: $\\grkg{PB} = \\senp{1}{G_v} \\vag r \\, qg$. Gur vagreany pnyphyngrq bhgchg jvaqf hc qrrc vagb fnghengvba (r.t. $+150\\%$ be $-50\\%$). Jura gur pbaqvgvba pyrnef, gur CI zhfg pebff bire gur frgcbvag sbe n cebybatrq crevbq gb 'hajvaq' gur vagrtengbe, pnhfvat frirer, znffvir birefubbg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Uvtu-serdhrapl zrnfherzrag abvfr rkpvgvat gur qrevingvir zbqr.",
        "whyIncorrect": "Abvfr pnhfrf qrevingvir punggre, abg vagrteny erfrg jvaqhc."
      },
      {
        "text": "Frggvat gur cebcbegvbany onaq gbb jvqr ($CO > 200\\%$).",
        "whyIncorrect": "Jvqr CO znxrf gur pbagebyyre fyhttvfu, ohg qbrf abg pnhfr jvaqhc jvgubhg fnghengvba."
      },
      {
        "text": "Genafzvggre fcna pnyvoengvba frg aneebjre guna gur cvcr qvnzrgre.",
        "whyIncorrect": "Fcna pnyvoengvba nssrpgf zrnfherzrag fpnyvat, abg vagrteny fnghengvba."
      },
      {
        "text": "Encvq gbttyvat orgjrra Nhgb naq Znahny zbqrf ol na bcrengbe.",
        "whyIncorrect": "Cebcre znahny genafsre hfrf genpxvat gb cerirag jvaqhc."
      },
      {
        "text": "Ybj fhccyl nve cerffher pnhfvat gur V/C genafqhpre pbvy gb bireurng.",
        "whyIncorrect": "Ybj nve ceriragf inyir geniry, juvpu pna vaqhpr fnghengvba, ohg jvaqhc vgfrys vf gur vagreany zngurzngvpny npphzhyngbe fnghengvba."
      },
      {
        "text": "Qrevingvir xvpx bppheevat qhevat frgcbvag fgrc punatrf.",
        "whyIncorrect": "Qrevingvir xvpx vf n zbzragnel qrevingvir fcvxr, abg fhfgnvarq vagrteny jvaqhc."
      },
      {
        "text": "Cebprff qrnq gvzr rkprrqvat guerr gvzrf gur qbzvanag gvzr pbafgnag.",
        "whyIncorrect": "Qrnq gvzr yvzvgf nyybjnoyr tnva, ohg qbrf abg vaureragyl jvaq hc gur vagrtengbe vs inyir erznvaf va guebggyvat enatr."
      },
      {
        "text": "Hfvat na rdhny crepragntr inyir cyht vafgrnq bs n yvarne gevz.",
        "whyIncorrect": "Inyir gevz nssrpgf yvarnevgl, abg npphzhyngbe jvaqhc."
      },
      {
        "text": "Dhnegre-nzcyvghqr qrpnl ghavat pnhfvat evatvat.",
        "whyIncorrect": "Qnzcrq evatvat jvguva guebggyvat yvzvgf vf abg fnghengvba jvaqhc."
      }
    ]
  },
  {
    "id": 998,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Nagv-Erfrg Jvaqhc Fbyhgvbaf",
    "stem": "Juvpu grpuavdhr vf fgnaqneq va zbqrea qvtvgny naq carhzngvp pbagebyyref gb cerirag vagrteny erfrg jvaqhc jura gur svany ryrzrag ernpurf fnghengvba?",
    "correctAnswer": "Pynzcvat vagreany vagrteny npphzhyngvba jura bhgchg yvzvgf ner ernpurq, be hfvat Rkgreany Erfrg Srrqonpx (RES) gb genpx npghny inyir cbfvgvba.",
    "ilmReference": "VYZ 310305nP ct 46",
    "explanation": "Nagv-erfrg jvaqhc zrgubqf vapyhqr:\n1. Vagreany vagrteny pynzcvat: Unygf vagrteny npphzhyngvba jurarire gur pnyphyngrq pbagebyyre bhgchg ernpurf gur pbasvtherq uvtu yvzvg ($100\\%$) be ybj yvzvg ($0\\%$).\n2. Rkgreany Erfrg Srrqonpx (RES): Gur erfrg oryybjf be qvtvgny vagrtengbe erprvirf gur npghny znavchyngrq inyir cbfvgvba be frpbaqnel pbagebyyre srrqonpx, ceriragvat gur zngurzngvpny bhgchg sebz qviretvat sebz culfvpny inyir cbfvgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vapernfvat gur qrevingvir engr gvzr frggvat ($G_q$) ol n snpgbe bs 10.",
        "whyIncorrect": "Vapernfvat qrevingvir gvzr rknpreongrf abvfr naq qbrf abg fgbc vagrteny jvaqhc."
      },
      {
        "text": "Fjvgpuvat gur pbagebyyre gb erirefr npgvat jurarire reebe rkprrqf 10%.",
        "whyIncorrect": "Erirefvat npgvba zvq-ybbc pnhfrf vafgnag cbfvgvir srrqonpx vafgnovyvgl."
      },
      {
        "text": "Vafgnyyvat n dhvpx-bcravat gevz va cynpr bs na rdhny crepragntr cyht.",
        "whyIncorrect": "Gevz punatrf sybj punenpgrevfgvp, abg pbagebyyre vagrtengbe fnghengvba."
      },
      {
        "text": "Frggvat cebcbegvbany onaq gb 0% gb sbepr gjb-cbfvgvba ba-bss pbageby.",
        "whyIncorrect": "CO = 0% vf vasvavgr tnva ba-bss pbageby, qrfgeblvat zbqhyngvba."
      },
      {
        "text": "Vafregvat n 0.1 Um ybj-cnff svygre va frevrf jvgu gur genafzvggre.",
        "whyIncorrect": "Svygref erzbir abvfr, ohg qb abg fgbc fnghengvba vagrtengvba."
      },
      {
        "text": "Qvfnoyvat frgcbvag genpxvat qhevat znahny zbqr.",
        "whyIncorrect": "Qvfnoyvat genpxvat perngrf ohzcf jura fjvgpuvat zbqrf."
      },
      {
        "text": "Ybjrevat gur genafzvggre cbjre fhccyl ibygntr sebz 24 IQP gb 12 IQP.",
        "whyIncorrect": "Haqre-ibygvat genafzvggref pnhfrf uneqjner oebjabhg snvyher."
      },
      {
        "text": "Ryvzvangvat gur cebcbegvbany zbqr naq hfvat cher vagrteny-bayl pbageby.",
        "whyIncorrect": "Vagrteny-bayl pbageby vf rira zber fhfprcgvoyr gb jvaqhc."
      },
      {
        "text": "Hfvat n carhzngvp synccre-abmmyr jvgubhg n srrqonpx oryybjf.",
        "whyIncorrect": "Erzbivat srrqonpx oryybjf erfhygf va na hapnyvoengrq vasvavgr-tnva ba-bss nzcyvsvre."
      }
    ]
  },
  {
    "id": 999,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Vqrny (Cnenyyry) if Frevrf (Vagrenpgvir) Pbagebyyre Nytbevguzf",
    "stem": "N cynag ercynprf na byqre carhzngvp/nanybt pbagebyyre jvgu n zbqrea qvtvgny QPF. Grpuavpvnaf abgvpr gung ragrevat gur fnzr ghavat cnenzrgref ($X_p, G_v, G_q$) cebqhprf zhpu zber ntterffvir bfpvyyngvbaf. Jung zngurzngvpny qvssrerapr rkcynvaf guvf orunivbe?",
    "correctAnswer": "Gur byq nanybt pbagebyyre hfrq na Vagrenpgvir (Frevrf) CVQ nytbevguz jurer qrevingvir naq vagrteny zbqrf vagrenpg, jurernf gur QPF jnf pbasvtherq jvgu na Vqrny (Cnenyyry/Vaqrcraqrag) nytbevguz.",
    "ilmReference": "VYZ 310305nP ct 50",
    "explanation": "Va gur Frevrf (Vagrenpgvir) nytbevguz (vaurerag gb carhzngvp naq nanybt EP pvephvgf):\n$$T_p(f) = X_p' \\yrsg(1 + \\senp{1}{G_v' f}\\evtug) (1 + G_q' f)$$\nZhygvcylvat bhg tvirf na rssrpgvir tnva $X_p = X_p' \\yrsg(1 + \\senp{G_q'}{G_v'}\\evtug)$, rssrpgvir vagrteny gvzr $G_v = G_v' + G_q'$, naq rssrpgvir qrevingvir gvzr $G_q = \\senp{G_v' G_q'}{G_v' + G_q'}$. Va na Vqrny (Cnenyyry) nytbevguz, zbqrf qb abg vagrenpg. Ragrevat gur fnzr qvny ahzoref jvgubhg zngurzngvpny pbairefvba pnhfrf fhofgnagvny tnva vapernfrf naq vafgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvtvgny pbagebyyref fnzcyr ng 10 ZUm, juvpu ryvzvangrf nyy ybbc cunfr ynt.",
        "whyIncorrect": "QPF pbagebyyref fnzcyr ng 5-100 Um, naq fnzcyvat vagebqhprf nqqvgvbany qrynl ($G_f/2$)."
      },
      {
        "text": "Carhzngvp pbagebyyref arire hfr artngvir srrqonpx.",
        "whyIncorrect": "Nyy srrqonpx pbagebyyref eryl ba artngvir srrqonpx."
      },
      {
        "text": "Gur 4-20 zN pheerag fvtany zbirf snfgre guebhtu pbccre guna nve zbirf va ghovat.",
        "whyIncorrect": "Genafzvffvba fcrrq nssrpgf qrnq gvzr, ohg nytbevguz fgehpgher vf n qvfgvapg zngurzngvpny vffhr."
      },
      {
        "text": "QPF pbagebyyref pnaabg rkrphgr qrevingvir qvssreragvngvba qvtvgnyyl.",
        "whyIncorrect": "QPF nytbevguzf pnyphyngr qrevingvir qvtvgnyyl hfvat qvssrerapr rdhngvbaf."
      },
      {
        "text": "Gur QPF cebcbegvbany onaq vf zrnfherq va qrpvoryf vafgrnq bs creprag.",
        "whyIncorrect": "QPF cebcbegvbany onaq vf rkcerffrq va creprag be tnva ($X_p$), abg qrpvoryf."
      },
      {
        "text": "Gur nanybt pbagebyyre hfrq bcgvpny vfbyngvba juvpu nggrahngrq gur tnva ol 50%.",
        "whyIncorrect": "Carhzngvpf hfr nve, naq bcgvpny vfbyngbef znvagnva 1:1 fvtany fpnyvat."
      },
      {
        "text": "Gur QPF svany ryrzrag unq mreb qrnqonaq, ryvzvangvat sevpgvba.",
        "whyIncorrect": "Inyir sevpgvba vf zrpunavpny, vaqrcraqrag bs gur pbagebyyre nytbevguz glcr."
      },
      {
        "text": "Gur qrevingvir zbqr va nanybt pbagebyyref npgf bayl qhevat pbbyvat plpyrf.",
        "whyIncorrect": "Nanybt qrevingvir npgf ba nal engr bs punatr ertneqyrff bs urngvat be pbbyvat."
      },
      {
        "text": "Gur QPF nhgbzngvpnyyl qbhoyrf tnva jura Frgcbvag vf jvguva 10% bs fcna.",
        "whyIncorrect": "Yvarne CVQ nytbevguzf znvagnva pbafgnag tnva npebff gur fcna."
      }
    ]
  },
  {
    "id": 1000,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Vagrenpgvir CVQ Nytbevguz: Rssrpgvir Tnva Pnyphyngvba",
    "stem": "Na vagrenpgvir (frevrf) CVQ pbagebyyre vf pbasvtherq jvgu qvnyrq frggvatf $X_p' = 2.0$, $G_v' = 4.0\\grkg{ zvahgrf}$, naq $G_q' = 1.0\\grkg{ zvahgr}$. Jung vf gur gehr rssrpgvir cebcbegvbany tnva ($X_p$) rkrphgrq ol gur frevrf pbagebyyre?",
    "correctAnswer": "$$X_p = 2.5$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 52",
    "explanation": "Sbe na vagrenpgvir (frevrf) pbagebyyre, gur vagrenpgvba snpgbe orgjrra erfrg naq engr vapernfrf gur rssrpgvir tnva:\n$$X_p = X_p' \\yrsg(1 + \\senp{G_q'}{G_v'}\\evtug)$$\nFhofgvghgr gur qvnyrq frggvatf:\n$$X_p = 2.0 \\yrsg(1 + \\senp{1.0\\grkg{ zva}}{4.0\\grkg{ zva}}\\evtug) = 2.0 \\gvzrf (1 + 0.25) = 2.0 \\gvzrf 1.25 = 2.5$$\nVagrenpgvba orgjrra qrevingvir naq vagrteny oryybjf vapernfrf gur npghny ybbc tnva nobir gur qvnyrq inyhr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 2.0",
        "whyIncorrect": "Nffhzrq ab vagrenpgvba orgjrra ghavat zbqrf (vqrny cnenyyry nffhzcgvba)."
      },
      {
        "text": "Xp = 3.0",
        "whyIncorrect": "Nqqrq $X_p' + G_q' = 2.0 + 1.0 = 3.0$."
      },
      {
        "text": "Xp = 1.5",
        "whyIncorrect": "Fhogenpgrq $2.0 \\gvzrf (1 - 0.25) = 1.5$."
      },
      {
        "text": "Xp = 8.0",
        "whyIncorrect": "Zhygvcyvrq $2.0 \\gvzrf 4.0 = 8.0$."
      },
      {
        "text": "Xp = 0.5",
        "whyIncorrect": "Pnyphyngrq $G_q' / X_p'$."
      },
      {
        "text": "Xp = 10.0",
        "whyIncorrect": "Zhygvcyvrq nyy guerr cnenzrgref: $2 \\gvzrf 4 \\gvzrf 1 + 2$."
      },
      {
        "text": "Xp = 2.25",
        "whyIncorrect": "Nqqrq 0.25 qverpgyl gb tnva ($2.0 + 0.25 = 2.25$)."
      },
      {
        "text": "Xp = 0.80",
        "whyIncorrect": "Vairegrq 1.25."
      },
      {
        "text": "Xp = 5.0",
        "whyIncorrect": "Zhygvcyvrq $2.0 \\gvzrf 2.5$."
      }
    ]
  },
  {
    "id": 1001,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebprff Ernpgvba Pheir: Pbura-Pbba Bcra-Ybbc Zrgubq",
    "stem": "Ersre gb gur vyyhfgengrq bcra-ybbc Cebprff Ernpgvba Pheir bognvarq ol fgrccvat gur znahny bhgchg gb n frys-erthyngvat urng rkpunatre. Jung guerr cevznel tencuvpny cnenzrgref zhfg or zrnfherq sebz gur F-funcrq erfcbafr pheir gb pnyphyngr ghavat pbafgnagf?",
    "correctAnswer": "Cebprff Qrnq Gvzr ($\\gurgn$), Cebprff Gvzr Pbafgnag ($\\gnh$), naq Cebprff Fgrnql-Fgngr Tnva ($X_c$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 55",
    "explanation": "Va gur bcra-ybbc fgrc grfg zrgubq (Mvrtyre-Avpubyf bcra ybbc / Pbura-Pbba SBCQG):\n1. Gur ybbc vf cynprq va ZNAHNY ng fgrnql fgngr.\n2. N fgrc punatr va pbagebyyre bhgchg ($\\Qrygn \\grkg{PB}$) vf nccyvrq.\n3. Gur vasyrpgvba gnatrag yvar ba gur F-funcrq CI pheir vf qenja.\n4. Qrnq gvzr ($\\gurgn$ be $g_q$) vf zrnfherq sebz fgrc gvzr gb gur gnatrag yvar mreb-vagreprcg.\n5. Gvzr pbafgnag ($\\gnh$ be $G$) vf zrnfherq sebz gur mreb-vagreprcg gb gur gvzr pbeerfcbaqvat gb $63.2\\%$ bs fgrnql-fgngr punatr (be sebz gnatrag fybcr).\n6. Cebprff Tnva vf $X_c = \\senp{\\Qrygn \\grkg{CI}_{\\%}}{\\Qrygn \\grkg{PB}_{\\%}}$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hygvzngr Tnva (Xph), Hygvzngr Crevbq (Ch), naq Cunfr Znetva.",
        "whyIncorrect": "Gubfr ner pybfrq-ybbc hygvzngr frafvgvivgl cnenzrgref, abg bcra-ybbc fgrc grfg inyhrf."
      },
      {
        "text": "Genafzvggre mreb, genafzvggre fcna, naq cbjre fhccyl evccyr ibygntr.",
        "whyIncorrect": "Gubfr ner vafgehzrag uneqjner orapu pnyvoengvba fcrpvsvpngvbaf."
      },
      {
        "text": "Inyir ulfgrerfvf, cnpxvat sevpgvba, naq orapu frg cerffher enatr.",
        "whyIncorrect": "Gubfr ner inyir npghngbe zrpunavpny cebcregvrf, abg cebprff ernpgvba pheir cnenzrgref."
      },
      {
        "text": "Dhnegre nzcyvghqr qrpnl engvb, angheny serdhrapl, naq Obqr pebffbire.",
        "whyIncorrect": "Gubfr ner pybfrq-ybbc erfcbafr cnenzrgref."
      },
      {
        "text": "Synccre pyrnenapr, abmmyr onpxcerffher, naq cvybg erynl fgebxr.",
        "whyIncorrect": "Gubfr ner vagreany zrpunavpny qvzrafvbaf bs n carhzngvp pbagebyyre."
      },
      {
        "text": "Frg cbvag, cebprff inevnoyr, naq znahny ovnf ibygntr.",
        "whyIncorrect": "Gubfr ner bcrengvbany fvtanyf, abg gur qlanzvp cnenzrgref punenpgrevmvat gur pheir."
      },
      {
        "text": "Ebbg ybphf cbyr cbfvgvbaf, vzntvanel mrebf, naq qnzcvat snpgbe.",
        "whyIncorrect": "Gubfr ner f-qbznva nanylgvpny zbqry cebcregvrf."
      },
      {
        "text": "Erlabyqf ahzore, Qnepl sevpgvba snpgbe, naq cvcr ebhtuarff.",
        "whyIncorrect": "Gubfr ner ulqenhyvp syhvq zrpunavpf cebcregvrf."
      },
      {
        "text": "Onhq engr, cnevgl ovg, naq Zbqohf ertvfgre nqqerff.",
        "whyIncorrect": "Gubfr ner qvtvgny pbzzhavpngvbaf cnenzrgref."
      }
    ]
  },
  {
    "id": 1002,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Bcra-Ybbc Fgrc Grfg Pnyphyngvba: Cebprff Tnva",
    "stem": "N grpuavpvna cresbezf na bcra-ybbc fgrc grfg ba n tnf cerffher irffry. Va znahny zbqr, gur pbagebyyre bhgchg vf fgrccrq sebz $\\grkg{PB}_1 = 30\\%$ gb $\\grkg{PB}_2 = 45\\%$ ($\\Qrygn \\grkg{PB} = 15\\%$). Gur cerffher genafzvggre ($0\\grkg{ gb }1000\\grkg{ xCn}$) erfcbaqf, evfvat sebz $400\\grkg{ xCn}$ gb $550\\grkg{ xCn}$ ($\\Qrygn \\grkg{CI} = 150\\grkg{ xCn}$). Jung vf gur abeznyvmrq cebprff tnva ($X_c$) va $\\%/\\%$?",
    "correctAnswer": "$$X_c = 1.0\\% / \\%$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 57",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$\\Qrygn \\grkg{CI}_{\\%} = \\senp{550\\grkg{ xCn} - 400\\grkg{ xCn}}{1000\\grkg{ xCn} - 0\\grkg{ xCn}} \\gvzrf 100\\% = \\senp{150}{1000} \\gvzrf 100\\% = 15.0\\%$$\n$$\\Qrygn \\grkg{PB}_{\\%} = 45\\% - 30\\% = 15.0\\%$$\nAbeznyvmrq cebprff tnva:\n$$X_c = \\senp{\\Qrygn \\grkg{CI}_{\\%}}{\\Qrygn \\grkg{PB}_{\\%}} = \\senp{15.0\\%}{15.0\\%} = 1.0\\% / \\%$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xc = 10.0% / %",
        "whyIncorrect": "Qvivqrq 150 xCn qverpgyl ol 15% jvgubhg abeznyvmvat CI gb genafzvggre fcna."
      },
      {
        "text": "Xc = 0.10% / %",
        "whyIncorrect": "Qvivqrq 15% ol 150 xCn."
      },
      {
        "text": "Xc = 1.50% / %",
        "whyIncorrect": "Qvivqrq 150 ol 100."
      },
      {
        "text": "Xc = 0.67% / %",
        "whyIncorrect": "Vairegrq gur engvb naq zvfcynprq qrpvzny."
      },
      {
        "text": "Xc = 15.0% / %",
        "whyIncorrect": "Ercbegrq $\\Qrygn \\grkg{CI}$ crepragntr qverpgyl jvgubhg qvivqvat ol $\\Qrygn \\grkg{PB}$."
      },
      {
        "text": "Xc = 2.25% / %",
        "whyIncorrect": "Zhygvcyvrq $1.5 \\gvzrf 1.5$."
      },
      {
        "text": "Xc = 0.01% / %",
        "whyIncorrect": "Qvivqrq 1.0 ol 100."
      },
      {
        "text": "Xc = 0.50% / %",
        "whyIncorrect": "Qvivqrq ol 30% vavgvny bhgchg."
      },
      {
        "text": "Xc = 3.33% / %",
        "whyIncorrect": "Qvivqrq 50% ol 15%."
      }
    ]
  },
  {
    "id": 1003,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebprff Ernpgvba Pheir: Pbura-Pbba CV Ghavat Rdhngvbaf",
    "stem": "Na bcra-ybbc fgrc grfg lvryqf $X_c = 1.5\\% / \\%$, qrnq gvzr $\\gurgn = 0.5\\grkg{ zva}$, naq gvzr pbafgnag $\\gnh = 2.0\\grkg{ zva}$ (engvb $\\gurgn / \\gnh = 0.25$). Nppbeqvat gb Pbura-Pbba CV ghavat ehyrf, jung vf gur pnyphyngrq pbagebyyre tnva ($X_p$)? Pbura-Pbba sbezhyn: $X_p = \\senp{\\gnh}{X_c \\gurgn} \\yrsg(0.9 + 0.083 \\senp{\\gurgn}{\\gnh}\\evtug)$.",
    "correctAnswer": "$$X_p = 2.45$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 60",
    "explanation": "Fhofgvghgr gur tvira cnenzrgref vagb gur Pbura-Pbba CV tnva rdhngvba:\n$$X_p = \\senp{\\gnh}{X_c \\pqbg \\gurgn} \\yrsg( 0.9 + 0.0833 \\senp{\\gurgn}{\\gnh} \\evtug)$$\n$$\\senp{\\gnh}{X_c \\pqbg \\gurgn} = \\senp{2.0}{1.5 \\gvzrf 0.5} = \\senp{2.0}{0.75} = 2.667$$\n$$\\yrsg( 0.9 + 0.0833 \\gvzrf \\senp{0.5}{2.0} \\evtug) = 0.9 + 0.0833 \\gvzrf 0.25 = 0.9 + 0.0208 = 0.9208$$\n$$X_p = 2.667 \\gvzrf 0.9208 \\nccebk 2.45$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 1.20",
        "whyIncorrect": "Bzvggrq gur $\\gnh / \\gurgn$ engvb zhygvcyvre."
      },
      {
        "text": "Xp = 5.33",
        "whyIncorrect": "Hfrq $0.9 / 0.75 \\gvzrf 4.4$ be artyrpgrq cebprff tnva $X_c$."
      },
      {
        "text": "Xp = 0.38",
        "whyIncorrect": "Vairegrq gur ragver sbezhyn."
      },
      {
        "text": "Xp = 3.55",
        "whyIncorrect": "Hfrq CVQ sbezhyn vafgrnq bs CV sbezhyn."
      },
      {
        "text": "Xp = 2.67",
        "whyIncorrect": "Pnyphyngrq $\\gnh / (X_c \\gurgn)$ naq bzvggrq gur oenpxrgrq pbeerpgvba snpgbe ($0.9208$)."
      },
      {
        "text": "Xp = 0.92",
        "whyIncorrect": "Ercbegrq bayl gur oenpxrgrq grez."
      },
      {
        "text": "Xp = 1.50",
        "whyIncorrect": "Nffhzrq pbagebyyre tnva rdhnyf cebprff tnva."
      },
      {
        "text": "Xp = 4.00",
        "whyIncorrect": "Pnyphyngrq $\\gnh / \\gurgn = 2.0 / 0.5 = 4.0$."
      },
      {
        "text": "Xp = 0.41",
        "whyIncorrect": "Vairegrq 2.45."
      }
    ]
  },
  {
    "id": 1004,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Gevny-naq-Reebe Ybbc Ghavat Cebprqher",
    "stem": "Jura cresbezvat gevny-naq-reebe ghavat ba na haxabja vaqhfgevny cebprff ybbc, jung vf gur fgnaqneq, fnsrfg cebprqheny frdhrapr sbe nqwhfgvat CVQ ghavat cnenzrgref?",
    "correctAnswer": "Fgneg jvgu ybj tnva ($X_p$), mreb qrevingvir ($G_q = 0$), naq zvavzhz erfrg ($G_v = \\grkg{znk}$). Vapernfr $X_p$ hagvy fyvtug evatvat bpphef, nqq vagrteny ($G_v$) gb ryvzvangr bssfrg, naq ynfgyl nqq qrevingvir ($G_q$) bayl vs gur cebprff vf n zhygv-ynt grzcrengher ybbc erdhvevat fgnovyvmngvba.",
    "ilmReference": "VYZ 310305nP ct 63",
    "explanation": "Gur havirefny svryq gevny-naq-reebe frdhrapr vf:\n1. Ryvzvangr Q ($G_q = 0$) naq frg V gb zvavzhz rssrpg ($G_v$ znkvzhz zvahgrf/ercrng be $X_v = 0$).\n2. Vagebqhpr frgcbvag ohzcf naq vapernfr $X_p$ hagvy fgnoyr, zbqrengryl snfg erfcbafr vf npuvrirq jvgu zvavzny evatvat.\n3. Qrpernfr $G_v$ (vapernfr $X_v$) tenqhnyyl hagvy bssfrg vf ryvzvangrq jvguva na npprcgnoyr frggyvat gvzr jvgubhg vaqhpvat pbagvahbhf plpyvat.\n4. Vagebqhpr $G_q$ ynfg, bayl ba fybj zhygv-ynt gurezny be pbzcbfvgvba ybbcf, gb qnzcra birefubbg naq vapernfr cunfr znetva.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Frg qrevingvir gb znkvzhz, vapernfr vagrteny hagvy inyir fnghengrf, gura erqhpr tnva.",
        "whyIncorrect": "Qrevingvir svefg nzcyvsvrf abvfr naq pnhfrf vzzrqvngr inyir fynzzvat."
      },
      {
        "text": "Frg tnva gb 10.0, frg erfrg gb 0.01 zvahgrf, naq nqwhfg qrevingvir hagvy bfpvyyngvbaf prnfr.",
        "whyIncorrect": "Fgnegvat jvgu znffvir tnva naq erfrg jvyy gevc uvtu-cerffher fnsrgl inyirf."
      },
      {
        "text": "Frg vagrteny gvzr rdhny gb qrevingvir gvzr, naq qbhoyr obgu hagvy plpyr crevbq ernpurf 1 ubhe.",
        "whyIncorrect": "Rdhny V naq Q gvzrf pnhfrf cnenzrgre vagrenpgvba; ghavat fubhyq or fgrc-ol-fgrc."
      },
      {
        "text": "Nyjnlf ghar qrevingvir svefg orpnhfr engr npgvba vf nagvpvcngbel naq cerqvpgf shgher reebe.",
        "whyIncorrect": "Qrevingvir zhfg arire or gharq svefg; vg fgnovyvmrf na nyernql gharq cebcbegvbany erfcbafr."
      },
      {
        "text": "Ghar va Znahny zbqr bayl, orpnhfr Nhgbzngvp zbqr pnhfrf srrqonpx ybbcf gb rkcybqr.",
        "whyIncorrect": "Ghavat rinyhngrf pybfrq-ybbc erfcbafr, juvpu erdhverf Nhgbzngvp zbqr."
      },
      {
        "text": "Ybpx tnva ng 1.0 naq nqwhfg bayl gur genafzvggre fcna gb punatr ybbc frafvgvivgl.",
        "whyIncorrect": "Genafzvggre fcna zhfg zngpu culfvpny cebprff zrnfherzrag enatr, abg or hfrq nf n ghavat xabo."
      },
      {
        "text": "Frg cebcbegvbany onaq gb 0% naq nqwhfg inyir cbfvgvbare fcevat grafvba.",
        "whyIncorrect": "CO = 0% vf ba-bss onatvat, naq cbfvgvbare fcevat frgf orapu enatr, abg pbagebyyre ghavat."
      },
      {
        "text": "Vapernfr erfrg engr hagvy pbagvahbhf plpyvat bpphef, gura zhygvcyl ol 2.",
        "whyIncorrect": "Zhygvcylvat erfrg jura nyernql plpyvat jvyy qevir gur ybbc vagb ivbyrag vafgnovyvgl."
      },
      {
        "text": "Ghar pbagebyyre qhevat znkvzhz cynag rzretrapl fuhgqbja pbaqvgvba.",
        "whyIncorrect": "Ghavat zhfg or qbar qhevat fgrnql onfryvar cynag bcrengvat pbaqvgvbaf."
      }
    ]
  },
  {
    "id": 1005,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Erpbtavmvat Ybbc Bfpvyyngvbaf: Tnva Plpyvat if Erfrg Plpyvat",
    "stem": "Qhevat ybbc qvntabfgvp geraqvat, na vafgehzrag grpuavpvna bofreirf pbagvahbhf fvahfbvqny plpyvat bs gur Cebprff Inevnoyr. Ubj pna gur grpuavpvna ivfhnyyl qvfgvathvfu jurgure gur bfpvyyngvba vf pnhfrq ol rkprffvir cebcbegvbany tnva ($X_p$ gbb uvtu) be rkprffvir vagrteny npgvba ($G_v$ gbb fubeg / $X_v$ gbb uvtu)?",
    "correctAnswer": "Tnva-vaqhprq plpyvat cebqhprf snfg bfpvyyngvbaf zngpuvat gur angheny cebprff serdhrapl jurer CI naq PB ner nccebkvzngryl $180^\\pvep$ bhg bs cunfr; erfrg-vaqhprq plpyvat cebqhprf zhpu fybjre, ybat-crevbq ebyyvat bfpvyyngvbaf jurer PB yrnqf be yntf CI jvgu cebybatrq vagrtengvba enzcvat.",
    "ilmReference": "VYZ 310305nP ct 67",
    "explanation": "Qvntabfgvp ehyrf sbe bfpvyyngvba fvtangherf:\n- Tnva plpyvat ($X_p$ gbb uvtu): Snfg, fanccl bfpvyyngvba jvgu crevbq pybfr gb cebprff hygvzngr crevbq ($C_h$). Pbagebyyre bhgchg erfcbaqf vafgnagyl gb CI zbirzragf, zveebevat gurz $180^\\pvep$ bhg bs cunfr.\n- Erfrg plpyvat ($G_v$ gbb fubeg): Fybj, fyhttvfu, ybat-crevbq 'ebyyvat' be 'uhagvat' jnirsbez (bsgra $2\\gvzrf$ gb $4\\gvzrf$ ybatre guna $C_h$). Gur bhgchg vagrtengrf cnfg frgcbvag naq gnxrf n ybat gvzr gb ghea nebhaq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tnva plpyvat pnhfrf fdhner jnirf, juvyr erfrg plpyvat pnhfrf gevnathyne jnirf.",
        "whyIncorrect": "Jnirsbezf va yvarne flfgrzf ner fvahfbvqny; inyir fnghengvba pnhfrf syng-gbccvat, abg tnva if erfrg fvtangher."
      },
      {
        "text": "Tnva plpyvat bpphef bayl va Znahny zbqr, juvyr erfrg bpphef va Nhgb zbqr.",
        "whyIncorrect": "Ybbcf qb abg bfpvyyngr va znahny zbqr hayrff qevira ol rkgreany plpyvat qvfgheonaprf."
      },
      {
        "text": "Erfrg plpyvat bpphef ng 10 gvzrf uvture serdhrapl guna tnva plpyvat.",
        "whyIncorrect": "Erfrg plpyvat vf zhpu FYBJRE (ybjre serdhrapl) guna tnva plpyvat."
      },
      {
        "text": "Tnva plpyvat pnhfrf gur inyir gb serrmr fgngvbanel, juvyr erfrg zbirf gur inyir.",
        "whyIncorrect": "Obgu pnhfr pbagvahbhf inyir zbgvba."
      },
      {
        "text": "Tnva plpyvat bayl unccraf jvgu carhzngvp pbagebyyref, erfrg jvgu qvtvgny QPF.",
        "whyIncorrect": "Obgu curabzran bpphe va nyy CVQ pbagebyyre grpuabybtvrf."
      },
      {
        "text": "Erfrg plpyvat cebqhprf n artngvir QP bssfrg, juvyr tnva plpyvat unf mreb nirentr reebe.",
        "whyIncorrect": "Erfrg npgvba ol qrsvavgvba qevirf nirentr reebe gb mreb."
      },
      {
        "text": "Tnva plpyvat vf ryvzvangrq ol fjvgpuvat gur inyir gb snvy-bcra.",
        "whyIncorrect": "Inyir snvy npgvba qbrf abg punatr ybbc qlanzvpf vs pbagebyyre npgvba vf zngpurq."
      },
      {
        "text": "Erfrg plpyvat pna or vqragvsvrq orpnhfr gur genafzvggre YRQ synfurf erq.",
        "whyIncorrect": "Genafzvggre qvntabfgvpf vaqvpngr uneqjner snhygf, abg pbagebyyre ghavat plpyvat."
      },
      {
        "text": "Tnva plpyvat bayl bpphef qhevat jvagre nzovrag pbaqvgvbaf.",
        "whyIncorrect": "Nzovrag pbaqvgvbaf znl fuvsg urng qhgl, ohg ghavat plpyvat vf ybbc qlanzvpf."
      }
    ]
  },
  {
    "id": 1006,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Rssrpg bs Inyir Fgvpgvba ba Pybfrq-Ybbc Plpyvat",
    "stem": "N pbageby inyir rkuvovgf frirer zrpunavpny cnpxvat sevpgvba (fgvpgvba). Jura cynprq va nhgbzngvp pybfrq-ybbc CV pbageby, jung punenpgrevfgvp yvzvg plpyr jnirsbez nccrnef ba gur CI geraq?",
    "correctAnswer": "N aba-fvahfbvqny 'fgvpx-fyvc' yvzvg plpyr pbafvfgvat bs n fdhner-jnir be fnjgbbgu cnggrea jvgu n cebybatrq syng crevbq sbyybjrq ol n fhqqra whzc.",
    "ilmReference": "VYZ 310305nP ct 71",
    "explanation": "Jura inyir cnpxvat fgvpxf, gur inyir qbrf abg zbir nf pbagebyyre bhgchg enzcf. Gur vagrteny zbqr pbagvahrf gb vagrtengr gur reebe, ohvyqvat hc npghngbe cerffher. Jura npghngbe sbepr svanyyl rkprrqf fgngvp sevpgvba, gur inyir oernxf serr naq whzcf ('fyvcf') npebff gur frgcbvag, fgvpxvat ba gur bgure fvqr. Guvf perngrf n qvfgvapgvir aba-yvarne fgvpx-fyvc yvzvg plpyr punenpgrevmrq ol syng vagreinyf naq fhqqra fgrc whzcf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N cresrpg uvtu-serdhrapl 60 Um fvahfbvqny fvar jnir.",
        "whyIncorrect": "60 Um vf ryrpgevpny znvaf vagresrerapr, abg inyir zrpunavpny fgvpgvba."
      },
      {
        "text": "N fzbbgu rkcbaragvny qrpnlvat erfcbafr jvgu mreb fgrnql-fgngr reebe.",
        "whyIncorrect": "Gung vf n jryy-gharq yvarne erfcbafr, abg fgvpgvba uhagvat."
      },
      {
        "text": "Gur CI erznvaf creznaragyl sebmra ng 50% fpnyr ertneqyrff bs frgcbvag punatrf.",
        "whyIncorrect": "Gur inyir fyvcf jura npghngbe cerffher birepbzrf sevpgvba, pnhfvat bfpvyyngvba."
      },
      {
        "text": "Gur pbagebyyre bhgchg qebcf gb 0 zN qhr gb oebxra jver qrgrpgvba.",
        "whyIncorrect": "Fgvpgvba vf zrpunavpny sevpgvba, abg na ryrpgevpny bcra pvephvg."
      },
      {
        "text": "Dhnegre-nzcyvghqr qrpnl jvgu rknpgyl 25% birefubbg.",
        "whyIncorrect": "Dhnegre-nzcyvghqr qrpnl vf yvarne qnzcrq evatvat; fgvpgvba cebqhprf n crefvfgrag aba-qrpnlvat yvzvg plpyr."
      },
      {
        "text": "Na vairegrq cnenobyvp pheir gung gevcf gur uvtu-yriry fjvgpu.",
        "whyIncorrect": "Fgvpgvba bfpvyyngrf orgjrra fgvpxvat guerfubyqf, abg n fvatyr cnenobyn."
      },
      {
        "text": "N juvgr abvfr Tnhffvna qvfgevohgvba jvgu mreb zrna.",
        "whyIncorrect": "Tnhffvna abvfr pbzrf sebz frafbe ryrpgebavpf be gheohyrapr, abg zrpunavpny fgvpgvba."
      },
      {
        "text": "N cher QP qevsg cebcbegvbany gb nzovrag grzcrengher.",
        "whyIncorrect": "Gurezny qevsg vf n fybj geraq, abg n fgvpx-fyvc bfpvyyngvba."
      },
      {
        "text": "Gur V/C genafqhpre qvncuentz ehcgherf vzzrqvngryl.",
        "whyIncorrect": "Fgvpgvba bpphef va inyir fgrz cnpxvat; genafqhpre bhgchg fvzcyl zbqhyngrf abeznyyl."
      }
    ]
  },
  {
    "id": 1007,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Rssrpg bs Cebprff Aba-Yvarnevgl ba Ghavat",
    "stem": "N sybj pbageby ybbc vf gharq ntterffviryl sbe dhnegre-nzcyvghqr qrpnl ng $80\\%$ znkvzhz sybj. Jura gur cebprff guebhtuchg qebcf gb $20\\%$ sybj, gur ybbc ortvaf gb bfpvyyngr ivbyragyl. Nffhzvat na bevsvpr cyngr cevznel ryrzrag vf hfrq jvgu ab fdhner ebbg rkgenpgbe, jung pnhfrq guvf vafgnovyvgl?",
    "correctAnswer": "Gur qvssreragvny cerffher cebprff tnva ($X_c = \\senp{q(\\Qrygn C)}{qS} = 2 x S$) vf cebcbegvbany gb sybj; ng uvtu sybj, tnva vf uvtu fb pbagebyyre tnva jnf frg ybj, ohg jvgubhg fdhner ebbg rkgenpgvba... jnvg: bevsvpr $\\Qrygn C = x S^2$, fb qrevingvir vf $2 x S$. Ng UVTU sybj, cebprff tnva vf UVTURFG; ng ybj sybj, cebprff tnva vf ybjrfg!",
    "ilmReference": "VYZ 310305nP ct 74",
    "explanation": "Yrg hf rknzvar gur rknpg zngurzngvpf:\n$$\\Qrygn C = x \\pqbg S^2$$\nGur fgngvp cebprff tnva vf gur qrevingvir:\n$$X_c = \\senp{q(\\Qrygn C)}{qS} = 2 x S$$\nAbgvpr gung cebprff tnva $X_c$ VAPERNFRF yvarneyl jvgu sybj $S$. Vs gur ybbc jnf gharq ng $20\\%$ sybj (jurer $X_c$ vf fznyy, fb pbagebyyre tnva $X_p$ jnf frg UVTU), gura jura sybj vapernfrf gb $80\\%$, cebprff tnva dhnqehcyrf ($4\\gvzrf$). Gbgny ybbc tnva rkprrqf havgl ($X_p \\pqbg X_c > 1$), pnhfvat ivbyrag vafgnovyvgl! (Ghavat ng ybj sybj jvgubhg fdhner ebbg rkgenpgvba znxrf uvtu sybj hafgnoyr).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr bevsvpr cyngrf ybfr nyy qvssreragvny cerffher ng 80% sybj.",
        "whyIncorrect": "Qvssreragvny cerffher vf uvturfg ng znkvzhz sybj ($100\\%$ QC ng $100\\%$ sybj)."
      },
      {
        "text": "Orpnhfr Erlabyqf ahzore qebcf vagb ynzvane sybj ng 80% engr.",
        "whyIncorrect": "Uvture sybj vapernfrf irybpvgl naq Erlabyqf ahzore qrrcre vagb gheohyrag sybj."
      },
      {
        "text": "Orpnhfr fdhner ebbg rkgenpgvba vf bayl erdhverq sbe grzcrengher ybbcf.",
        "whyIncorrect": "Fdhner ebbg rkgenpgvba vf fcrpvsvpnyyl hfrq sbe qvssreragvny cerffher sybj zrnfherzrag."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba pnaabg bcrengr ng ybj sybj engrf.",
        "whyIncorrect": "Qrevingvir npgvba vf eneryl hfrq ba sybj ybbcf ertneqyrff bs sybj engr."
      },
      {
        "text": "Orpnhfr rdhny crepragntr inyirf unir pbafgnag tnva npebff nyy sybj engrf.",
        "whyIncorrect": "Rdhny crepragntr inyirf unir tnva cebcbegvbany gb sybj, abg pbafgnag."
      },
      {
        "text": "Orpnhfr gur orgn engvb bs gur bevsvpr cyngr punatrf qlanzvpnyyl jvgu inyir cbfvgvba.",
        "whyIncorrect": "Orgn engvb ($q/Q$) vf svkrq ol gur culfvpny ober trbzrgel."
      },
      {
        "text": "Orpnhfr gur 4-20 zN pheerag ybbcf fnghengr ng 20% sybj.",
        "whyIncorrect": "4-20 zN fcnaf gur ragver 0-100% enatr jvgubhg fnghengvba."
      },
      {
        "text": "Orpnhfr vagrteny erfrg jvaqhc bppheerq va znahny zbqr.",
        "whyIncorrect": "Znahny zbqr qvfpbaarpgf vagrteny npphzhyngvba."
      },
      {
        "text": "Orpnhfr nzovrag cvcr pbbyvat perngrq pbairpgvir onpxsybj.",
        "whyIncorrect": "Ulqenhyvp chzcvat qevirf sybj sbejneq; pbairpgvba qbrf abg erirefr uvtu-cerffher cvcryvarf."
      }
    ]
  },
  {
    "id": 1008,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Sybj Ybbc Ghavat Thvqryvarf",
    "stem": "Jul qb fgnaqneq vafgehzragngvba ghavat thvqryvarf erpbzzraq ghavat yvdhvq sybj ybbcf jvgu ybj cebcbegvbany tnva ($X_p \\yr 0.5$ be $\\grkg{CO} \\tr 200\\%$) naq snfg erfrg ($G_v \\yr 0.1\\grkg{ zva}$ be $X_v \\tr 10\\grkg{ ercrngf/zva}$), juvyr fgevpgyl bzvggvat qrevingvir npgvba ($G_q = 0$)?",
    "correctAnswer": "Sybj cebprffrf unir iveghnyyl mreb qrnq gvzr, irel fubeg gvzr pbafgnagf, naq uvtu ulqenhyvp gheohyrapr abvfr; qrevingvir jbhyq ivbyragyl punggre gur inyir, naq uvtu tnva nzcyvsvrf sybj abvfr, fb snfg erfrg qbrf gur cevznel pbageby jbex.",
    "ilmReference": "VYZ 310305nP ct 78",
    "explanation": "Sybj ybbcf unir havdhr qlanzvpf:\n1. Snfg erfcbafr: Gvzr pbafgnagf ner senpgvbaf bs n frpbaq, tbirearq bayl ol inyir npghngbe fcrrq.\n2. Ulqenhyvp abvfr: Gheohyrapr, chzc chyfngvbaf, naq ibegrk furqqvat perngr pbagvahbhf CI wvggre.\n3. Qrevingvir npgvba ($G_q$) ba ulqenhyvp abvfr pnhfrf pbagvahbhf uvtu-serdhrapl inyir unzzrevat, qrfgeblvat cnpxvat naq cbfvgvbare yvaxntrf.\n4. Cebcbegvbany tnva zhfg or ybj ($X_p = 0.2 - 0.6$) gb cerirag abvfr nzcyvsvpngvba.\n5. Snfg vagrteny erfrg ($G_v = 1 - 5\\grkg{ frpbaqf}$) encvqyl nqwhfgf inyir cbfvgvba gb genpx frgcbvag fzbbguyl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr sybj genafzvggref unir 10-zvahgr vagreany qvtvgny svygrevat qrynlf.",
        "whyIncorrect": "Sybj genafzvggref erfcbaq va zvyyvfrpbaqf (50-200 zf)."
      },
      {
        "text": "Orpnhfr sybj inyirf erdhver 120 INP cbjre gb bcrengr gur npghngbe fgrz.",
        "whyIncorrect": "Sybj pbageby inyirf ner glcvpnyyl carhzngvpnyyl npghngrq ivn V/C genafqhpref."
      },
      {
        "text": "Orpnhfr yvdhvq sybj vf na vagrtengvat cebprff gung arire ernpurf fgrnql fgngr.",
        "whyIncorrect": "Yvdhvq sybj vf frys-erthyngvat; inyir cbfvgvba qvpgngrf fgrnql sybj engr."
      },
      {
        "text": "Orpnhfr Pnanqvna erthyngvbaf cebuvovg erfrg engrf snfgre guna 1 ercrng cre ubhe.",
        "whyIncorrect": "Ab fhpu erthyngbel erfgevpgvba rkvfgf; ghavat vf ratvarrerq cre cebprff qlanzvpf."
      },
      {
        "text": "Orpnhfr qvssreragvny cerffher genafzvggref ner erirefr npgvat ol ynj.",
        "whyIncorrect": "QC genafzvggref ner pnyvoengrq qverpg npgvat (4-20 zN sbe 0-100% QC)."
      },
      {
        "text": "Orpnhfr sybj ybbcf ynpx frgcbvag nqwhfgzrag pncnovyvgl va QPF.",
        "whyIncorrect": "Sybj pbagebyyref srngher shyy frgcbvag zbqhyngvba va Nhgb zbqr."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba erirefrf gur sybj qverpgvba va gur cvcr.",
        "whyIncorrect": "Qrevingvir vf n pbagebyyre pnyphyngvba; vg pnaabg erirefr syhvq sybj."
      },
      {
        "text": "Orpnhfr cebcbegvbany onaq pnaabg rkprrq 50% va qvtvgny flfgrzf.",
        "whyIncorrect": "CO pna or pbasvtherq hc gb 1000% be zber va QPF flfgrzf."
      },
      {
        "text": "Orpnhfr inyir cbfvgvbaref pnaabg npprcg 4-20 zN nanybt vachgf.",
        "whyIncorrect": "Zbqrea cbfvgvbaref ebhgvaryl npprcg 4-20 zN nanybt be qvtvgny UNEG fvtanyf."
      }
    ]
  },
  {
    "id": 1009,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Grzcrengher Ybbc Ghavat Punenpgrevfgvpf",
    "stem": "Hayvxr sybj ybbcf, ynetr vaqhfgevny urng rkpunatref naq qvfgvyyngvba erobvyref ner punenpgrevmrq ol ynetr gurezny gvzr pbafgnagf naq fvtavsvpnag qrnq gvzrf. Ubj fubhyq n CVQ pbagebyyre or gharq sbe guvf glcr bs cebprff?",
    "correctAnswer": "Uvtu cebcbegvbany tnva ($X_p$), fybj vagrteny npgvba (ybat $G_v$ zvahgrf/ercrng), naq npgvir qrevingvir npgvba ($G_q$) gb cebivqr cunfr nqinapr naq qnzc ynetr gurezny yntf.",
    "ilmReference": "VYZ 310305nP ct 81",
    "explanation": "Grzcrengher cebprff punenpgrevfgvpf:\n1. Uvtu pncnpvgnapr naq zhygvcyr gurezny erfvfgnapr yntf cebqhpr ynetr gvzr pbafgnagf (zvahgrf gb ubhef).\n2. Fvtavsvpnag qrnq gvzr (cvcr genafcbeg qrynl, gurezbjryy gurezny pbaqhpgvba ynt).\n3. Pyrna, abvfr-serr CI fvtany.\n4. Snfg erfrg jvyy pnhfr znffvir erfrg jvaqhc naq plpyvat orpnhfr gur grzcrengher pnaabg erfcbaq dhvpxyl.\n5. Qrevingvir npgvba vf uvtuyl orarsvpvny: vg vagebqhprf cunfr yrnq (hc gb $+90^\\pvep$) gung pbzcrafngrf sbe gurezny ynt, nyybjvat uvture pbagebyyre tnva naq qenzngvpnyyl erqhpvat frggyvat gvzr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ybj tnva, snfg erfrg (100 ercrngf/zva), naq mreb qrevingvir.",
        "whyIncorrect": "Snfg erfrg ba n fybj grzcrengher ybbc pnhfrf frirer, pbagvahbhf plpyvat."
      },
      {
        "text": "Cebcbegvbany-bayl pbageby jvgu 0% cebcbegvbany onaq (ba-bss pbageby).",
        "whyIncorrect": "Ba-bss pbageby pnhfrf pbagvahbhf grzcrengher fjvatf gung qnzntr urng rkpunatref."
      },
      {
        "text": "Qrevingvir npgvba bayl, jvgu cebcbegvbany naq vagrteny zbqrf pbzcyrgryl qvfnoyrq.",
        "whyIncorrect": "Qrevingvir-bayl pbageby pnaabg znvagnva frgcbvag be fgrnql-fgngr inyir cbfvgvba."
      },
      {
        "text": "Mreb tnva, mreb erfrg, naq 60 zvahgrf bs qrevingvir engr.",
        "whyIncorrect": "Mreb tnva cebqhprf mreb pbagebyyre bhgchg."
      },
      {
        "text": "Vagrteny-bayl pbageby jvgu rkgreany erfrg srrqonpx qvfpbaarpgrq.",
        "whyIncorrect": "Vagrteny-bayl pbageby vf rkgerzryl fyhttvfu naq cebar gb frirer birefubbg ba gurezny cebprffrf."
      },
      {
        "text": "Uvtu tnva jvgu artngvir vagrteny gvzr gb nppryrengr pbbyvat.",
        "whyIncorrect": "Artngvir vagrteny gvzr perngrf na hafgnoyr evtug-unys cynar cbyr."
      },
      {
        "text": "Gharq vqragvpnyyl gb n tnf sybj ybbc.",
        "whyIncorrect": "Sybj naq grzcrengher ybbcf unir bccbfvgr qlanzvpf naq pnaabg funer ghavat cnenzrgref."
      },
      {
        "text": "Erirefr npgvat jvgu rdhny crepragntr gevz frg gb yvarne pnz.",
        "whyIncorrect": "Pnz frggvatf qb abg ercynpr cebcre CVQ ghavat."
      },
      {
        "text": "Bcra-ybbc znahny pbageby bayl, orpnhfr grzcrengher pnaabg or pbagebyyrq va pybfrq ybbc.",
        "whyIncorrect": "Grzcrengher vf havirefnyyl pbagebyyrq va pybfrq ybbc npebff nyy cebprff vaqhfgevrf."
      }
    ]
  },
  {
    "id": 1010,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Yvdhvq Yriry Ybbc: Fhetr Gnax Nirentvat Pbageby if Gvtug Pbageby",
    "stem": "Jung vf gur xrl ghavat bowrpgvir sbe na nirentvat yvdhvq yriry pbagebyyre vafgnyyrq ba n fhetr qehz ybpngrq orgjrra gjb pbagvahbhf cebprff havgf?",
    "correctAnswer": "Gb nyybj gur irffry yvdhvq yriry gb fjvat jvqryl jvguva fnsr uvtu naq ybj yvzvgf, nofbeovat vasybj syhpghngvbaf naq cebivqvat n fzbbgu, fgrnql bhgsybj gb qbjafgernz havgf.",
    "ilmReference": "VYZ 310305nP ct 84",
    "explanation": "Fhetr gnaxf rkvfg fbyryl gb ohssre sybj inevngvbaf orgjrra hcfgernz naq qbjafgernz rdhvczrag. Ghavat sbe 'gvtug' yriry pbageby sbeprf gur bhgyrg inyir gb zveebe rirel hcfgernz qvfgheonapr, qrsrngvat gur fhetr irffry'f checbfr. Nirentvat yriry pbageby hfrf ybj cebcbegvbany tnva ($X_p \\nccebk 0.5 - 1.0$) naq irel fybj erfrg ($G_v$ irel ybat) fb gur yriry nofbeof ibyhzr juvyr gur qvfpunetr sybj engr punatrf fybjyl naq fzbbguyl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb pynzc gur yvdhvq yriry ng rknpgyl 50.0% jvgu mreb nyybjnoyr qrivngvba.",
        "whyIncorrect": "Gvtug pynzcvat cnffrf nyy vasybj qvfgheonaprf qverpgyl vagb gur qvfpunetr sybj."
      },
      {
        "text": "Gb plpyr gur qvfpunetr inyir orgjrra 0% naq 100% encvqyl gb xrrc cvcrf fpehoorq.",
        "whyIncorrect": "Encvq inyir plpyvat fubpxf qbjafgernz rdhvczrag naq hcfrgf qbjafgernz havgf."
      },
      {
        "text": "Gb rafher qrevingvir npgvba erfcbaqf gb fhesnpr evccyrf naq jnir gheohyrapr.",
        "whyIncorrect": "Qrevingvir ba yriry jnirf pnhfrf reengvp inyir uhagvat naq zhfg or mreb."
      },
      {
        "text": "Gb pnyvoengr gur qvssreragvny cerffher genafzvggre mreb ryringvba.",
        "whyIncorrect": "Mreb ryringvba vf n orapu pnyvoengvba frghc, abg gur pbageby ybbc ghavat bowrpgvir."
      },
      {
        "text": "Gb cerirag nve sebz ragrevat gur carhzngvp cbfvgvbare rkunhfg cbeg.",
        "whyIncorrect": "Rkunhfg nve iragvat vf abezny cbfvgvbare bcrengvba."
      },
      {
        "text": "Gb znkvzvmr dhnegre-nzcyvghqr qrpnl birefubbg ba rirel ybnq punatr.",
        "whyIncorrect": "Nirentvat pbageby frrxf fzbbgu, pevgvpnyyl qnzcrq be bire-qnzcrq erfcbafr jvgubhg evatvat."
      },
      {
        "text": "Gb gevc gur rzretrapl fuhgqbja (RFQ) flfgrz jurarire sybj inevrf ol 5%.",
        "whyIncorrect": "RFQ gevcf ner fnsrgl fuhgqbjaf, abg cebprff pbageby bowrpgvirf."
      },
      {
        "text": "Gb znvagnva pbafgnag cerffher va gur irffry incbe fcnpr.",
        "whyIncorrect": "Incbe fcnpr cerffher vf pbagebyyrq ol n frcnengr cerffher pbagebyyre, abg yriry pbagebyyre."
      },
      {
        "text": "Gb sbepr gur yriry pbagebyyre bhgchg gb genpx gur jvyq sybj genafzvggre.",
        "whyIncorrect": "Gung qrfpevorf engvb srrqsbejneq pbageby, abg srrqonpx fhetr gnax yriry ghavat."
      }
    ]
  },
  {
    "id": 1011,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Ohzcyrff Genafsre Orgjrra Znahny naq Nhgbzngvp",
    "stem": "Jung vagreany pbagebyyre zrpunavfz thnenagrrf 'ohzcyrff genafsre' jura na bcrengbe fjvgpurf n pbagebyyre sebz Znahny (ZNA) gb Nhgbzngvp (NHGB)?",
    "correctAnswer": "Gur pbagebyyre nhgbzngvpnyyl nqwhfgf vgf vagreany Frgcbvag gb rdhny gur pheerag Cebprff Inevnoyr ($\trkg{FC} = \trkg{CI}$) be frgf vgf vavgvny ovnf fb vavgvny reebe cebqhprf mreb vafgnagnarbhf bhgchg whzc.",
    "ilmReference": "VYZ 310305nP ct 88",
    "explanation": "Vs n pbagebyyre fjvgpurq gb Nhgb juvyr n ynetr qvssrerapr rkvfgrq orgjrra FC naq CI, gur cebcbegvbany zbqr jbhyq vafgnagyl fgrc gur bhgchg ($\\Qrygn \trkg{PB} = X_p \\pqbg r$), ohzcvat gur cebprff. Ohzcyrff genafsre zrpunavfzf rafher fzbbgu genafvgvba ol:\n1. Va Nhgb-gb-Znahny: Genpxvat bhgchg fb znahny nqwhfgzragf fgneg sebz gur ynfg nhgbzngvp bhgchg.\n2. Va Znahny-gb-Nhgb: Frgcbvag genpxvat (frggvat $\trkg{FC} = \trkg{CI}$ va znahny) be cerybnqvat gur vagrteny npphzhyngbe fb gung vavgvny $\trkg{PB}_{\\grkg{nhgb}} = \\grkg{PB}_{\\grkg{znahny}}$ ng gur vafgnag bs genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N culfvpny qnfucbg qnzcre ba gur 4-20 zN bhgchg grezvanyf.",
        "whyIncorrect": "Qnfucbgf ner zrpunavpny qnzcref, abg ryrpgevpny be qvtvgny genpxvat nytbevguzf."
      },
      {
        "text": "Enzcvat gur pbagebyyre cbjre fhccyl sebz 0 IQP gb 24 IQP bire 10 zvahgrf.",
        "whyIncorrect": "Enzcvat fhccyl ibygntr oebjaf bhg vagreany zvpebcebprffbef."
      },
      {
        "text": "Ybpxvat gur pbageby inyir fgrz zrpunavpnyyl jvgu n unaqjurry oenxr.",
        "whyIncorrect": "Unaqjurryf ner sbe znahny vfbyngvba, abg nhgbzngvp ohzcyrff genafsre."
      },
      {
        "text": "Qvfpunetvat gur erfrg pncnpvgbe guebhtu na rkgreany tebhaqvat erfvfgbe.",
        "whyIncorrect": "Qhzcvat erfrg punetr pnhfrf n znffvir bhgchg fynz gb 0%."
      },
      {
        "text": "Fjvgpuvat gur pbagebyyre npgvba sebz erirefr gb qverpg qhevat genafsre.",
        "whyIncorrect": "Erirefvat npgvba pnhfrf cbfvgvir srrqonpx ehanjnl."
      },
      {
        "text": "Qr-raretvmvat gur V/C genafqhpre fbyrabvq pbvy.",
        "whyIncorrect": "Qr-raretvmvat qebcf nve cerffher naq fynzf gur inyir gb snvy cbfvgvba."
      },
      {
        "text": "Grzcbenevyl frggvat gur cebcbegvbany onaq gb 0% sbe 5 frpbaqf.",
        "whyIncorrect": "CO = 0% perngrf vasvavgr tnva onatvat."
      },
      {
        "text": "Vawrpgvat n 10 xUm qvgure fvtany vagb gur cbfvgvbare gbedhr zbgbe.",
        "whyIncorrect": "Qvgure erqhprf cbfvgvbare fgvpgvba, ohg qbrf abg cebivqr ohzcyrff genafsre."
      },
      {
        "text": "Pybfvat gur ebbg vfbyngvba inyirf ba gur genafzvggre vzchyfr yvarf.",
        "whyIncorrect": "Pybfvat vzchyfr inyirf oyvaqf gur genafzvggre sebz gur cebprff."
      }
    ]
  },
  {
    "id": 1012,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Frys-Erthyngvat if Vagrtengvat Cebprffrf: Ghavat Vzcyvpngvbaf",
    "stem": "N grpuavpvna gharf n frys-erthyngvat urng rkpunatre naq na vagrtengvat yvdhvq fgbentr gnax. Jul qbrf gur vagrtengvat yriry cebprff erdhver shaqnzragnyyl qvssrerag ghavat pbafvqrengvbaf guna gur frys-erthyngvat cebprff?",
    "correctAnswer": "Orpnhfr na vagrtengvat cebprff unf ab angheny fgrnql-fgngr onynapr cbvag; nal vzonynapr orgjrra vasybj naq bhgsybj pnhfrf gur yriry gb enzc vaqrsvavgryl jvgubhg obhaq, cebivqvat na vaurerag $90^\\pvep$ cunfr ynt.",
    "ilmReference": "VYZ 310305nP ct 91",
    "explanation": "Va n frys-erthyngvat cebprff (r.t. gurezny be sybj), n fgrc punatr va inyir cbfvgvba yrnqf gb n arj fgnoyr fgrnql-fgngr bcrengvat cbvag. Va na vagrtengvat cebprff (r.t. yvdhvq yriry va n gnax be tnf cerffher va n pybfrq irffry jvgu svkrq bhgsybj), n pbafgnag inyir bcravat qbrf abg lvryq n pbafgnag yriry; vs vasybj rkprrqf bhgsybj, yriry enzcf hcjneq hagvy gur gnax biresybjf. Gur vagrtengbe genafsre shapgvba $T(f) = \\senp{X}{f}$ vagebqhprf na vaurerag $-90^\\pvep$ cunfr ynt ng nyy serdhrapvrf, zrnavat cher cebcbegvbany pbageby pna bcrengr jvgubhg bssfrg sbe n pbafgnag ybnq, juvyr rkprffvir erfrg rnfvyl pnhfrf vafgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr vagrtengvat cebprffrf pna bayl or pbagebyyrq hfvat carhzngvp pbagebyyref.",
        "whyIncorrect": "QPF naq ryrpgebavp pbagebyyref pbageby vagrtengvat cebprffrf havirefnyyl."
      },
      {
        "text": "Orpnhfr frys-erthyngvat cebprffrf nyjnlf erdhver qrevingvir npgvba.",
        "whyIncorrect": "Snfg frys-erthyngvat ybbcf (yvxr sybj) arire hfr qrevingvir."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf unir mreb cebprff tnva ng nyy gvzrf.",
        "whyIncorrect": "Vagrtengvat cebprffrf unir na vagrtengvat tnva irybpvgl ($X_v^* = \\% / \\grkg{gvzr}$ cre $\\% \\grkg{PB}$)."
      },
      {
        "text": "Orpnhfr frys-erthyngvat cebprffrf ivbyngr gur svefg ynj bs gurezbqlanzvpf.",
        "whyIncorrect": "Frys-erthyngvba vf gur qverpg pbafrdhrapr bs gurezbqlanzvp urng ybff naq pbafreingvba ynjf."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf pnaabg hfr srrqonpx genafzvggref.",
        "whyIncorrect": "Yriry genafzvggref cebivqr rffragvny srrqonpx sbe pybfrq-ybbc pbageby."
      },
      {
        "text": "Orpnhfr frys-erthyngvat ybbcf unir 360 qrterrf bs cunfr yrnq.",
        "whyIncorrect": "Culfvpny frys-erthyngvat yntf cebqhpr cunfr YNT, abg yrnq."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf erdhver qverpg-npgvat cbfvgvbaref bayl.",
        "whyIncorrect": "Cbfvgvbare npgvba qrcraqf ba inyir snvy-fnsr erdhverzragf."
      },
      {
        "text": "Orpnhfr frys-erthyngvat cebprffrf unir vasvavgr gvzr pbafgnagf.",
        "whyIncorrect": "Vagrtengvat cebprffrf unir vasvavgr bcra-ybbc gvzr pbafgnagf; frys-erthyngvat unir svavgr $\\gnh$."
      },
      {
        "text": "Orpnhfr vagrtengvat cebprffrf qb abg rkcrevrapr ybnq qvfgheonaprf.",
        "whyIncorrect": "Vasybj naq bhgsybj inevngvbaf ner cevzr rknzcyrf bs ybnq qvfgheonaprf ba gnaxf."
      }
    ]
  },
  {
    "id": 1013,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Tnva Znetva naq Cunfr Znetva Fgnovyvgl Pevgrevn",
    "stem": "Ba n Obqr fgnovyvgl cybg bs na bcra-ybbc serdhrapl erfcbafr, jung qrsvarf gur Tnva Znetva ($TZ$) naq Cunfr Znetva ($CZ$)?",
    "correctAnswer": "Tnva Znetva vf gur snpgbe ol juvpu bcra-ybbc tnva vf orybj $1.0$ ($0\\grkg{ qO}$) ng gur cunfr pebffbire serdhrapl ($-180^\\pvep$); Cunfr Znetva vf gur qrterrf ol juvpu cunfr natyr vf nobir $-180^\\pvep$ ng gur tnva pebffbire serdhrapl ($0\\grkg{ qO}$).",
    "ilmReference": "VYZ 310305nP ct 95",
    "explanation": "Ol gur Aldhvfg fgnovyvgl pevgrevba, pybfrq-ybbc vafgnovyvgl bpphef vs gur bcra-ybbc tnva $|T_{by}(w\\bzrtn)| \\tr 1.0$ ng gur serdhrapl jurer gbgny cunfr ynt ernpurf $-180^\\pvep$. Gurersber:\n- Tnva Znetva ($TZ$): Qrpvoryf orybj $0\\grkg{ qO}$ ng $\\bzrtn_h$ (jurer $\\cuv = -180^\\pvep$). Glcvpnyyl $TZ \\tr 6\\grkg{ qO}$ (tnva snpgbe $\\tr 2.0$) sbe ebohfg fgnovyvgl.\n- Cunfr Znetva ($CZ$): Natyr nobir $-180^\\pvep$ ng $\\bzrtn_t$ (jurer tnva vf $1.0$ / $0\\grkg{ qO}$). Glcvpnyyl $CZ \\tr 45^\\pvep$ gb $60^\\pvep$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Tnva Znetva vf gur znkvzhz inyir fgebxr; Cunfr Znetva vf gur ryrpgevpny fhccyl cunfr natyr (3-cunfr 120 qrterrf).",
        "whyIncorrect": "TZ naq CZ ner qvzrafvbayrff serdhrapl erfcbafr fgnovyvgl zrgevpf, abg ryrpgevpny NP cbjre cunfrf."
      },
      {
        "text": "Tnva Znetva vf cebcbegvbany onaq qvivqrq ol 100; Cunfr Znetva vf erfrg gvzr va frpbaqf.",
        "whyIncorrect": "Obqr znetvaf ner bcra-ybbc serdhrapl qbznva zrnfherzragf, abg pbagebyyre qvny frggvatf."
      },
      {
        "text": "Tnva Znetva vf zrnfherq ng 0 Um; Cunfr Znetva vf zrnfherq ng vasvavgr serdhrapl.",
        "whyIncorrect": "TZ vf zrnfherq ng cunfr pebffbire $\\bzrtn_h$; CZ vf zrnfherq ng tnva pebffbire $\\bzrtn_t$."
      },
      {
        "text": "Tnva Znetva zhfg nyjnlf or artngvir, naq Cunfr Znetva zhfg or rknpgyl 0 qrterrf sbe fgnovyvgl.",
        "whyIncorrect": "Artngvir TZ be mreb CZ zrnaf gur flfgrz vf ng be orlbaq gur guerfubyq bs ivbyrag vafgnovyvgl."
      },
      {
        "text": "Obgu znetvaf zrnfher genafzvggre fcna reebef pnhfrq ol nzovrag grzcrengher punatrf.",
        "whyIncorrect": "Znetvaf rinyhngr qlanzvp pybfrq-ybbc srrqonpx fgnovyvgl, abg fgngvp nzovrag frafbe qevsg."
      },
      {
        "text": "Tnva Znetva vf gur engvb bs inyir PI gb cvcr qvnzrgre; Cunfr Znetva vf cvcr fybcr.",
        "whyIncorrect": "Gubfr ner zrpunavpny cvcvat cnenzrgref."
      },
      {
        "text": "Tnva Znetva vf qrevingvir gvzr qvivqrq ol vagrteny gvzr.",
        "whyIncorrect": "Ghavat engvb $G_q / G_v$ nssrpgf znetvaf, ohg vf abg gur qrsvavgvba bs TZ."
      },
      {
        "text": "Tnva Znetva vf gur fvtany-gb-abvfr engvb va qrpvoryf.",
        "whyIncorrect": "FAE zrnfherf abvfr sybbe, abg pybfrq-ybbc fgnovyvgl znetva."
      },
      {
        "text": "Cunfr Znetva vf gur gvzr qrynl guebhtu na bcgvpny svore pnoyr.",
        "whyIncorrect": "Cunfr znetva vf na nathyne cunfr qvfgnapr sebz $-180^\\pvep$ ba n Obqr cybg."
      }
    ]
  },
  {
    "id": 1014,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Pnyphyngvat Cunfr Znetva sebz Obqr Qngn",
    "stem": "N serdhrapl erfcbafr nanylfvf bs n pybfrq ybbc erirnyf gung ng gur tnva pebffbire serdhrapl (jurer bcra-ybbc tnva $|T(w\\bzrtn)| = 1.0$ be $0\\grkg{ qO}$), gur gbgny ybbc cunfr natyr vf $\\cuv = -142.0^\\pvep$. Jung vf gur Cunfr Znetva ($CZ$), naq vf gur ybbc fgnoyr?",
    "correctAnswer": "$$CZ = +38.0^\\pvep$$; gur ybbc vf fgnoyr.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 97",
    "explanation": "Cunfr znetva vf qrsvarq nf:\n$$CZ = 180^\\pvep + \\cuv$$\nTvira $\\cuv = -142.0^\\pvep$ ng tnva pebffbire ($0\\grkg{ qO}$):\n$$CZ = 180^\\pvep + (-142.0^\\pvep) = +38.0^\\pvep$$\nFvapr $CZ > 0^\\pvep$, gur flfgrz vf fgnoyr jvgu $38.0^\\pvep$ bs cunfr znetva orsber ernpuvat gur $-180^\\pvep$ vafgnovyvgl guerfubyq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CZ = -38.0\u00b0; gur ybbc vf hafgnoyr.",
        "whyIncorrect": "Gur cunfr natyr vf $-142^\\pvep$, juvpu vf $38^\\pvep$ NOBIR $-180^\\pvep$, fb CZ vf cbfvgvir naq fgnoyr."
      },
      {
        "text": "CZ = +142.0\u00b0; gur ybbc vf hapbaqvgvbanyyl fgnoyr.",
        "whyIncorrect": "Ercbegrq gur cunfr natyr zntavghqr engure guna fhogenpgvat sebz $-180^\\pvep$."
      },
      {
        "text": "CZ = -142.0\u00b0; gur ybbc vf bfpvyyngvat.",
        "whyIncorrect": "Ercbegrq enj cunfr natyr $\\cuv$."
      },
      {
        "text": "CZ = +52.0\u00b0; gur ybbc vf fgnoyr.",
        "whyIncorrect": "Pnyphyngrq $90^\\pvep - 142^\\pvep$ be nevguzrgvp reebe."
      },
      {
        "text": "CZ = 0.0\u00b0; gur ybbc vf ng gur pevgvpny fgnovyvgl obhaqnel.",
        "whyIncorrect": "Mreb cunfr znetva erdhverf $\\cuv = -180.0^\\pvep$."
      },
      {
        "text": "CZ = +218.0\u00b0; gur ybbc unf rkprffvir cunfr yrnq.",
        "whyIncorrect": "Nqqrq $360^\\pvep - 142^\\pvep$."
      },
      {
        "text": "CZ = +45.0\u00b0; fgnaqneq grkgobbx inyhr.",
        "whyIncorrect": "Zhfg pbzchgr sebz tvira natyr: $180 - 142 = 38^\\pvep$."
      },
      {
        "text": "CZ = -322.0\u00b0; hafgnoyr.",
        "whyIncorrect": "Fhogenpgrq $180^\\pvep$ vapbeerpgyl."
      },
      {
        "text": "CZ = +76.0\u00b0; fgnoyr.",
        "whyIncorrect": "Qbhoyrq gur znetva."
      }
    ]
  },
  {
    "id": 1015,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Pnyphyngvat Tnva Znetva sebz Obqr Qngn",
    "stem": "Ng gur cunfr pebffbire serdhrapl (jurer cunfr ynt ernpurf rknpgyl $-180.0^\\pvep$), gur bcra-ybbc zntavghqr engvb vf zrnfherq nf $|T(w\\bzrtn)| = 0.25$. Jung vf gur Tnva Znetva ($TZ$) va qrpvoryf (qO), naq jung qbrf vg vaqvpngr nobhg fgnovyvgl?",
    "correctAnswer": "$$TZ = +12.04\\grkg{ qO}$$; gur ybbc vf fgnoyr naq pbagebyyre tnva pbhyq or dhnqehcyrq ($4\\gvzrf$) orsber pbagvahbhf bfpvyyngvba ortvaf.",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 99",
    "explanation": "Tnva znetva va qrpvoryf vf pnyphyngrq nf:\n$$TZ_{\\grkg{qO}} = -20 \\ybt_{10} |T(w\\bzrtn_h)|$$\nFhofgvghgr $|T(w\\bzrtn_h)| = 0.25$:\n$$TZ_{\\grkg{qO}} = -20 \\ybt_{10}(0.25) = -20 \\gvzrf (-0.60206) = +12.04\\grkg{ qO}$$\nNf n yvarne snpgbe:\n$$\\grkg{Yvarne } TZ = \\senp{1}{|T(w\\bzrtn_h)|} = \\senp{1}{0.25} = 4.0$$\nGur ybbc unf n tnva znetva bs $12\\grkg{ qO}$ ($4\\gvzrf$), jryy nobir gur erpbzzraqrq zvavzhz bs $6\\grkg{ qO}$ ($2\\gvzrf$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "TZ = -12.04 qO; gur ybbc vf hafgnoyr.",
        "whyIncorrect": "Tnva znetva vf cbfvgvir jura ybbc tnva vf orybj 0 qO ng cunfr pebffbire."
      },
      {
        "text": "TZ = +6.02 qO; gur ybbc unf 2k znetva.",
        "whyIncorrect": "Pnyphyngrq $TZ$ sbe $|T| = 0.50$, abg $0.25$."
      },
      {
        "text": "TZ = +0.25 qO; znetvanyyl fgnoyr.",
        "whyIncorrect": "Pbashfrq gur yvarne zntavghqr engvb jvgu qrpvoryf."
      },
      {
        "text": "TZ = +20.0 qO; uvtuyl qnzcrq.",
        "whyIncorrect": "Nffhzrq $|T| = 0.10$."
      },
      {
        "text": "TZ = 0.0 qO; pbagvahbhf bfpvyyngvba.",
        "whyIncorrect": "Mreb qO erdhverf $|T| = 1.0$ ng cunfr pebffbire."
      },
      {
        "text": "TZ = +4.0 qO; fgnoyr.",
        "whyIncorrect": "Ercbegrq gur yvarne zhygvcyvre snpgbe (4.0) jvgu qO havgf."
      },
      {
        "text": "TZ = -6.02 qO; hafgnoyr.",
        "whyIncorrect": "Hfrq jebat fvta naq zntavghqr."
      },
      {
        "text": "TZ = +24.0 qO; bire-qnzcrq.",
        "whyIncorrect": "Pnyphyngrq sbe $|T| = 0.0625$."
      },
      {
        "text": "TZ = +1.0 qO; hafgnoyr.",
        "whyIncorrect": "Neovgenel thrff."
      }
    ]
  },
  {
    "id": 1016,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Pbagebyyre Reebe Pnyphyngvba: Qverpg Npgvat if Erirefr Npgvat",
    "stem": "N QPF CVQ oybpx vf pbasvtherq jvgu Frgcbvag $\\grkg{FC} = 65.0\\%$ naq pheerag Cebprff Inevnoyr $\\grkg{CI} = 70.0\\%$. Vs gur pbagebyyre vf pbasvtherq nf QVERPG NPGVAT, jung vf gur pnyphyngrq reebe fvtany ($r$) qevivat gur nytbevguz?",
    "correctAnswer": "$$r = +5.0\\%$$",
    "ilmReference": "VYZ 310305nP ct 102",
    "explanation": "Ol qrsvavgvba:\n- Qverpg Npgvat Pbagebyyre: Bhgchg vapernfrf nf CI vapernfrf nobir FC. Gur reebe rdhngvba vf:\n$$r = \\grkg{CI} - \\grkg{FC} = 70.0\\% - 65.0\\% = +5.0\\%$$\n- Erirefr Npgvat Pbagebyyre: Bhgchg vapernfrf nf CI qrpernfrf orybj FC. Gur reebe rdhngvba vf:\n$$r = \\grkg{FC} - \\grkg{CI} = 65.0\\% - 70.0\\% = -5.0\\%$$\nFvapr guvf oybpx vf pbasvtherq qverpg npgvat, gur reebe vf cbfvgvir ($+5.0\\%$), pnhfvat pbagebyyre bhgchg gb vapernfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "r = -5.0%",
        "whyIncorrect": "Pnyphyngrq reebe sbe n Erirefr Npgvat pbagebyyre ($r = \\grkg{FC} - \\grkg{CI} = 65 - 70 = -5\\%$)."
      },
      {
        "text": "r = +135.0%",
        "whyIncorrect": "Nqqrq FC naq CI ($65 + 70 = 135\\%$)."
      },
      {
        "text": "r = +0.077%",
        "whyIncorrect": "Qvivqrq 5% ol 65%."
      },
      {
        "text": "r = +50.0%",
        "whyIncorrect": "Zvfcynprq qrpvzny cbvag."
      },
      {
        "text": "r = 0.0%",
        "whyIncorrect": "Nffhzrq gur pbagebyyre unf nyernql ryvzvangrq gur reebe."
      },
      {
        "text": "r = +1.077",
        "whyIncorrect": "Qvivqrq CI ol FC ($70 / 65 = 1.077$)."
      },
      {
        "text": "r = +65.0%",
        "whyIncorrect": "Ercbegrq frgcbvag inyhr."
      },
      {
        "text": "r = +70.0%",
        "whyIncorrect": "Ercbegrq CI inyhr."
      },
      {
        "text": "r = -70.0%",
        "whyIncorrect": "Artngvir CI."
      }
    ]
  },
  {
    "id": 1017,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Cebcbegvbany-Qrevingvir (CQ) Pbagebyyre Punenpgrevfgvpf",
    "stem": "Va jung fcrpvsvp vaqhfgevny nccyvpngvbaf vf n Cebcbegvbany-Qrevingvir (CQ) pbagebyyre cersreerq bire n shyy CVQ pbagebyyre?",
    "correctAnswer": "Ongpu urngvat cebprffrf be cebprffrf jvgu frirer genafcbeg yntf jurer vagrteny jvaqhc qhevat vavgvny fgneghc jbhyq pnhfr pngnfgebcuvp birefubbg, naq jurer n fznyy fgrnql-fgngr bssfrg vf npprcgnoyr be pbeerpgrq znahnyyl.",
    "ilmReference": "VYZ 310305nP ct 105",
    "explanation": "Va ongpu urngvat (r.t. cbylzre ernpgbef, nhgbpynir fgneghc, wnpxrgrq ongpu pbbxref), fgnegvat pbyq jvgu na npgvir vagrtengbe pnhfrf znffvir vagrteny jvaqhc juvyr grzcrengher pyvzof gbjneq frgcbvag, erfhygvat va qnatrebhf bire-grzcrengher birefubbg gung ehvaf gur ongpu. CQ pbageby cebivqrf fgebat engr qnzcvat (oenxvat) nf grzcrengher nccebnpurf frgcbvag jvgubhg nal evfx bs vagrteny npphzhyngvba. Cebcbegvbany-bayl be CQ vf nyfb hfrq va snfg ebobgvp cbfvgvbavat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbagvahbhf obvyre qehz jngre yriry pbageby.",
        "whyIncorrect": "Obvyre qehz yriry erdhverf vagrteny npgvba gb ubyq jngre yriry ng rknpg qehz pragreyvar."
      },
      {
        "text": "Yvdhvq cvcryvar phfgbql genafsre sybj pbageby.",
        "whyIncorrect": "Phfgbql genafsre erdhverf mreb bssfrg, qrznaqvat vagrteny npgvba."
      },
      {
        "text": "Pbzcerffbe fhetr pbageby bireevqr pvephvgf.",
        "whyIncorrect": "Fhetr bireevqr hfrf uvtu-fcrrq CV be C-bayl jvgu qrqvpngrq snfg bcravat fhetr nytbevguzf."
      },
      {
        "text": "cU arhgenyvmngvba va jnfgrjngre gerngzrag.",
        "whyIncorrect": "cU arhgenyvmngvba erdhverf vagrteny npgvba gb zngpu purzvpny gvgengvba onynapr."
      },
      {
        "text": "Tnf sheanpr qensg cerffher pbageby.",
        "whyIncorrect": "Sheanpr qensg erdhverf vagrteny npgvba gb znvagnva fnsr artngvir sverobk cerffher."
      },
      {
        "text": "Pbbyvat gbjre jngre onfva oybjqbja pbaqhpgvivgl pbageby.",
        "whyIncorrect": "Pbaqhpgvivgl hfrf CV pbageby gb erthyngr qvffbyirq fbyvqf."
      },
      {
        "text": "Pragevshtny chzc qvfpunetr guebggyvat.",
        "whyIncorrect": "Qvfpunetr cerffher hfrf CV pbageby."
      },
      {
        "text": "Qvfgvyyngvba pbyhza erobvyre fgrnz cerffher erthyngvba.",
        "whyIncorrect": "Fgrnz cerffher hfrf snfg CV pbageby."
      },
      {
        "text": "Rzretrapl syner tnf cvybg vtavgvba frdhrapvat.",
        "whyIncorrect": "Vtavgvba frdhrapvat vf qvtvgny ba-bss ybtvp, abg pbagvahbhf CQ srrqonpx."
      }
    ]
  },
  {
    "id": 1018,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Mvrtyre-Avpubyf Hygvzngr Frafvgvivgl: Cebcbegvbany Onaq Irevsvpngvba",
    "stem": "Qhevat pybfrq-ybbc grfgvat, n ybbc plpyrf pbagvahbhfyl jura vgf cebcbegvbany onaq vf erqhprq gb $\\grkg{CO}_h = 16.0\\%$. Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung gharq cebcbegvbany onaq frggvat ($\\grkg{CO}$) fubhyq or ragrerq sbe n fgnaqneq CVQ pbagebyyre?",
    "correctAnswer": "$$\\grkg{CO} = 26.7\\%$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 108",
    "explanation": "Sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017:\n$$X_{ph} = \\senp{100\\%}{\\grkg{CO}_h} = \\senp{100\\%}{16.0\\%} = 6.25$$\nSbe n Mvrtyre-Avpubyf CVQ pbagebyyre:\n$$X_p = 0.60 \\gvzrf X_{ph} = 0.60 \\gvzrf 6.25 = 3.75$$\nPbaireg gharq tnva onpx gb cebcbegvbany onaq:\n$$\\grkg{CO} = \\senp{100\\%}{X_p} = \\senp{100\\%}{3.75} = 26.67\\% \\nccebk 26.7\\%$$\nNygreangviryl, fvapr $\\grkg{CO} = \\grkg{CO}_h / 0.60 = 16.0\\% / 0.60 = 26.67\\%$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "CO = 9.6%",
        "whyIncorrect": "Zhygvcyvrq $\\grkg{CO}_h \\gvzrf 0.60 = 16.0 \\gvzrf 0.60 = 9.6\\%$, juvpu aneebjf CO naq znxrf gur ybbc ZBER hafgnoyr!"
      },
      {
        "text": "CO = 32.0%",
        "whyIncorrect": "Hfrq C-bayl sbezhyn (qbhoyrq CO: $16 \\gvzrf 2 = 32\\%$)."
      },
      {
        "text": "CO = 35.6%",
        "whyIncorrect": "Hfrq CV sbezhyn ($\\grkg{CO}_h / 0.45 = 16 / 0.45 = 35.6\\%$)."
      },
      {
        "text": "CO = 8.0%",
        "whyIncorrect": "Unyirq gur cebcbegvbany onaq, pnhfvat ivbyrag vafgnovyvgl."
      },
      {
        "text": "CO = 16.0%",
        "whyIncorrect": "Yrsg CO ng gur pbagvahbhf plpyvat guerfubyq."
      },
      {
        "text": "CO = 53.3%",
        "whyIncorrect": "Qbhoyrq gur CVQ cebcbegvbany onaq."
      },
      {
        "text": "CO = 12.5%",
        "whyIncorrect": "Pnyphyngrq $100 / 8 = 12.5\\%$."
      },
      {
        "text": "CO = 4.0%",
        "whyIncorrect": "Qvivqrq 16 ol 4."
      },
      {
        "text": "CO = 50.0%",
        "whyIncorrect": "Neovgenel thrff."
      }
    ]
  },
  {
    "id": 1019,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Qrgrezvavat Ybbc Crevbq sebz Serdhrapl",
    "stem": "Na vafgehzragngvba ratvarre rinyhngrf n uvtu-fcrrq cerffher bfpvyyngvba jvgu na hygvzngr nathyne serdhrapl bs $\\bzrtn_h = 0.5236\\grkg{ enq/f}$. Jung vf gur pbeerfcbaqvat Hygvzngr Crevbq bs bfpvyyngvba ($C_h$) va frpbaqf?",
    "correctAnswer": "$$C_h = 12.0\\grkg{ frpbaqf}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nP ct 112",
    "explanation": "Sebz gur eryngvbafuvc orgjrra nathyne serdhrapl naq crevbq:\n$$\\bzrtn = \\senp{2 \\cv}{C} \\vzcyvrf C = \\senp{2 \\cv}{\\bzrtn}$$\nFhofgvghgr $\\bzrtn_h = 0.5236\\grkg{ enq/f}$:\n$$C_h = \\senp{2 \\gvzrf 3.14159265}{0.5236\\grkg{ enq/f}} = \\senp{6.283185}{0.5236} = 12.0\\grkg{ frpbaqf}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ch = 1.91 frpbaqf",
        "whyIncorrect": "Pnyphyngrq $1 / \\bzrtn = 1 / 0.5236 = 1.91\\grkg{ f}$ (sbetbg $2\\cv$)."
      },
      {
        "text": "Ch = 0.083 frpbaqf",
        "whyIncorrect": "Vairegrq 12 frpbaqf ($1/12 = 0.0833$)."
      },
      {
        "text": "Ch = 6.0 frpbaqf",
        "whyIncorrect": "Qvivqrq $\\cv$ ol $\\bzrtn$ jvgubhg gur snpgbe bs 2."
      },
      {
        "text": "Ch = 24.0 frpbaqf",
        "whyIncorrect": "Zhygvcyvrq 12 ol 2."
      },
      {
        "text": "Ch = 3.29 frpbaqf",
        "whyIncorrect": "Pnyphyngrq $2\\cv \\gvzrf \\bzrtn$ ($6.283 \\gvzrf 0.5236 = 3.29$)."
      },
      {
        "text": "Ch = 60.0 frpbaqf",
        "whyIncorrect": "Pbairegrq gb 1 zvahgr."
      },
      {
        "text": "Ch = 0.52 frpbaqf",
        "whyIncorrect": "Pbashfrq enqvnaf/frp qverpgyl jvgu crevbq va frpbaqf."
      },
      {
        "text": "Ch = 120.0 frpbaqf",
        "whyIncorrect": "Zhygvcyvrq ol 10."
      },
      {
        "text": "Ch = 75.4 frpbaqf",
        "whyIncorrect": "Zhygvcyvrq $\\bzrtn$ ol 144."
      }
    ]
  },
  {
    "id": 1020,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "P. Pybfrq Ybbc Pbageby (20%)",
    "title": "Pbzcerurafvir Pybfrq-Ybbc Fgnovyvgl Fhzznel",
    "stem": "Nppbeqvat gb pynffvpny pbageby gurbel naq gur Nyoregn 3eq Crevbq pheevphyhz, jung pbzovarq pbaqvgvba vf fgevpgyl arprffnel naq fhssvpvrag sbe n artngvir srrqonpx pbageby ybbc gb erznva nflzcgbgvpnyyl fgnoyr?",
    "correctAnswer": "Nyy pybfrq-ybbc cbyrf va gur pbzcyrk f-cynar zhfg yvr fgevpgyl va gur bcra yrsg-unys cynar ($\trkg{Er}(f) < 0$), zrnavat gur bcra-ybbc tnva zhfg or fgevpgyl yrff guna $1.0$ ($< 0\\grkg{ qO}$) ng gur cunfr pebffbire serdhrapl ($-180^\\pvep$).",
    "ilmReference": "VYZ 310305nP ct 115",
    "explanation": "Shaqnzragny fgnovyvgl ynjf:\n1. Pbzcyrk Cynar: Erny cneg bs nyy pybfrq-ybbc punenpgrevfgvp rdhngvba ebbgf zhfg or fgevpgyl artngvir ($\\grkg{Er}(f) < 0$). Nal cbyr va gur evtug-unys cynar ($\\grkg{Er}(f) > 0$) cebqhprf rkcbaragvny ehanjnl vafgnovyvgl ($r^{+\\fvtzn g}$).\n2. Serdhrapl Qbznva (Obqr/Aldhvfg): Ng gur cunfr pebffbire serdhrapl $\\bzrtn_h$ jurer ybbc cunfr ynt ernpurf $-180^\\pvep$, bcra-ybbc ybbc tnva zhfg or fgevpgyl yrff guna havgl ($|T_{by}(w\\bzrtn_h)| < 1.0$ be $< 0\\grkg{ qO}$).\nVs tnva vf $\\tr 1.0$ ng $-180^\\pvep$, gur artngvir srrqonpx fhzzvat whapgvba vairegf gur fvtany ($180^\\pvep + 180^\\pvep = 360^\\pvep$), gheavat srrqonpx cbfvgvir jvgu nzcyvslvat tnva, erfhygvat va pbagvahbhf bfpvyyngvba be ivbyrag fnghengvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pbagebyyre tnva zhfg rdhny cebprff tnva ng nyy gvzrf ($X_p = X_c$).",
        "whyIncorrect": "Tnvaf ner eneryl rdhny; cebqhpg bs nyy ybbc tnvaf zhfg fngvfsl fgnovyvgl pevgrevn."
      },
      {
        "text": "Cebcbegvbany onaq zhfg nyjnlf or znvagnvarq ng rknpgyl 100%.",
        "whyIncorrect": "CO pna or 10% be 1000% qrcraqvat ba cebprff qlanzvpf naq genafzvggre fcna."
      },
      {
        "text": "Qrevingvir npgvba zhfg or frg gb 4 gvzrf gur vagrteny gvzr.",
        "whyIncorrect": "Frggvat $G_q = 4 G_v$ pnhfrf frirer vagrenpgvir vafgnovyvgl; glcvpnyyl $G_q \\yr G_v / 4$."
      },
      {
        "text": "Nyy bcra-ybbc cbyrf zhfg yvr ba gur vzntvanel nkvf.",
        "whyIncorrect": "Cbyrf ba gur vzntvanel nkvf cebqhpr haqnzcrq pbagvahbhf bfpvyyngvbaf (znetvany fgnovyvgl)."
      },
      {
        "text": "Genafzvggre fcna zhfg or pnyvoengrq va cbhaqf cre fdhner vapu nofbyhgr (cfvn).",
        "whyIncorrect": "Havgf bs zrnfherzrag qb abg nssrpg zngurzngvpny srrqonpx fgnovyvgl."
      },
      {
        "text": "Gur pbagebyyre zhfg or pbasvtherq qverpg npgvat ertneqyrff bs inyir snvyher zbqr.",
        "whyIncorrect": "Pbagebyyre npgvba zhfg zngpu inyir naq cebprff fvtaf gb rafher artngvir srrqonpx."
      },
      {
        "text": "Cunfr natyr zhfg or $-360^\\pvep$ ng nyy serdhrapvrf.",
        "whyIncorrect": "$-360^\\pvep$ ynt vf cher cbfvgvir srrqonpx, pnhfvat vzzrqvngr qviretrapr."
      },
      {
        "text": "Cebprff qrnq gvzr zhfg or terngre guna svir gvzrf gur gvzr pbafgnag.",
        "whyIncorrect": "Uvtu qrnq gvzr znxrf ybbcf uneqre gb fgnovyvmr, abg n fgnovyvgl erdhverzrag."
      },
      {
        "text": "Gur inyir zhfg or rdhvccrq jvgu na rdhny crepragntr gevz naq snvy va gur bcra cbfvgvba.",
        "whyIncorrect": "Fgnovyvgl vf npuvrirq jvgu nal gevz naq snvy npgvba vs cebcreyl zngpurq naq gharq."
      }
    ]
  },
  {
    "id": 1021,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Ynzoqn Ghavat Pbaprcg sbe Frys-Erthyngvat Cebprffrf",
    "stem": "Jung vf gur shaqnzragny ratvarrevat cuvybfbcul bs gur Ynzoqn ($\\ynzoqn$) ghavat zrgubq sbe frys-erthyngvat cebprffrf va zbqrea qvtvgny pbageby flfgrzf?",
    "correctAnswer": "Vg pnapryf gur qbzvanag cebprff cbyr ol frggvat vagrteny gvzr rdhny gb gur cebprff gvzr pbafgnag ($G_v = \\gnh$), cebqhpvat n cerqvpgnoyr, aba-bfpvyyngbel svefg-beqre pybfrq-ybbc erfcbafr jvgu n hfre-fcrpvsvrq pybfrq-ybbc gvzr pbafgnag ($\\ynzoqn$).",
    "ilmReference": "VYZ 310305nQ ct 5",
    "explanation": "Va Ynzoqn ghavat (n sbez bs Vagreany Zbqry Pbageby / VZP):\n1. Gur hfre fcrpvsvrf $\\ynzoqn$ (gur qrfverq pybfrq-ybbc gvzr pbafgnag $\\gnh_p$).\n2. Gur pbagebyyre vagrteny gvzr vf frg rdhny gb gur cebprff gvzr pbafgnag: $G_v = \\gnh$. Guvf zngurzngvpnyyl pnapryf gur bcra-ybbc cebprff cbyr.\n3. Gur cebcbegvbany tnva vf pnyphyngrq nf: $X_p = \\senp{\\gnh}{X_c (\\ynzoqn + \\gurgn)}$.\n4. Gur erfhygvat pybfrq-ybbc erfcbafr vf pevgvpnyyl qnzcrq (mreb birefubbg), ceriragvat plpyvp vagrenpgvba jvgu qbjafgernz cebprffrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg sbeprf gur cebprff gb npuvrir dhnegre-nzcyvghqr qrpnl jvgu rknpgyl 25% birefubbg.",
        "whyIncorrect": "Dhnegre-nzcyvghqr qrpnl vf Mvrtyre-Avpubyf ghavat; Ynzoqn ghavat ryvzvangrf birefubbg ragveryl."
      },
      {
        "text": "Vg znkvzvmrf qrevingvir npgvba gb qbhoyr gur ybbc onaqjvqgu.",
        "whyIncorrect": "Ynzoqn ghavat sbe frys-erthyngvat cebprffrf glcvpnyyl hfrf cher CV pbageby jvgubhg qrevingvir."
      },
      {
        "text": "Vg pbagvahbhfyl zbqhyngrf gur inyir gb xrrc gur cnpxvat yhoevpngrq.",
        "whyIncorrect": "Ynzoqn ghavat cebqhprf fzbbgu, tenqhny inyir zbirzragf gb zvavzvmr inyir jrne."
      },
      {
        "text": "Vg qevirf gur bcra-ybbc cunfr ynt gb $-180^\\pvep$ ng nyy serdhrapvrf.",
        "whyIncorrect": "$-180^\\pvep$ ynt ng havgl tnva pnhfrf pbagvahbhf vafgnovyvgl."
      },
      {
        "text": "Vg erdhverf gnxvat gur cebprff bssyvar gb eha serdhrapl erfcbafr fvar fjrrcf.",
        "whyIncorrect": "Ynzoqn ghavat hfrf fgnaqneq bcra-ybbc fgrc grfg cnenzrgref ($X_c, \\gnh, \\gurgn$)."
      },
      {
        "text": "Vg ercynprf CVQ pbageby jvgu n zhygv-inevnoyr shmml ybtvp arheny argjbex.",
        "whyIncorrect": "Ynzoqn ghavat pnyphyngrf fgnaqneq CVQ ghavat cnenzrgref ($X_p, G_v$)."
      },
      {
        "text": "Vg thnenagrrf gur inyir zbirf bayl jura reebe rkprrqf 10% fcna.",
        "whyIncorrect": "Gung vf tnc pbageby be qrnqonaq pbageby, abg Ynzoqn ghavat."
      },
      {
        "text": "Vg nhgbzngvpnyyl vairegf pbagebyyre npgvba jurarire frgcbvag vf punatrq.",
        "whyIncorrect": "Pbagebyyre npgvba fvta vf svkrq gb cebivqr artngvir srrqonpx."
      },
      {
        "text": "Vg frgf gur fnzcyvat engr bs gur QPF gb rknpgyl 1.0 Um.",
        "whyIncorrect": "Ynzoqn vf n ghavat nytbevguz, vaqrcraqrag bs gur QPF PCH fpna pybpx."
      }
    ]
  },
  {
    "id": 1022,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Ynzoqn Ghavat: Tnva Pnyphyngvba sbe Frys-Erthyngvat Ybbc",
    "stem": "Na bcra-ybbc fgrc grfg ba n urng rkpunatre lvryqf cebprff tnva $X_c = 1.5\\% / \\%$, gvzr pbafgnag $\\gnh = 4.0\\grkg{ zva}$, naq qrnq gvzr $\\gurgn = 1.0\\grkg{ zva}$. Na ratvarre fryrpgf n pybfrq-ybbc Ynzoqn snpgbe $\\ynzoqn = 4.0\\grkg{ zva}$ (rdhny gb $\\gnh$). Nppbeqvat gb gur Ynzoqn ghavat sbezhyn $X_p = \\senp{\\gnh}{X_c (\\ynzoqn + \\gurgn)}$, jung vf gur gharq pbagebyyre tnva ($X_p$)?",
    "correctAnswer": "$$X_p = 0.533$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 7",
    "explanation": "Sebz gur Ynzoqn ghavat rdhngvbaf sbe frys-erthyngvat cebprffrf:\n$$G_v = \\gnh = 4.0\\grkg{ zvahgrf}$$\n$$X_p = \\senp{\\gnh}{X_c (\\ynzoqn + \\gurgn)}$$\nFhofgvghgr gur tvira inyhrf:\n$$X_p = \\senp{4.0}{1.5 \\gvzrf (4.0 + 1.0)} = \\senp{4.0}{1.5 \\gvzrf 5.0} = \\senp{4.0}{7.5} \\nccebk 0.533$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 1.875",
        "whyIncorrect": "Vairegrq gur sbezhyn: pnyphyngrq $7.5 / 4.0 = 1.875$."
      },
      {
        "text": "Xp = 0.667",
        "whyIncorrect": "Bzvggrq qrnq gvzr: pnyphyngrq $4.0 / (1.5 \\gvzrf 4.0) = 0.667$."
      },
      {
        "text": "Xp = 2.67",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat ol cebprff tnva."
      },
      {
        "text": "Xp = 0.267",
        "whyIncorrect": "Qbhoyrq gur qrabzvangbe be hfrq $\\ynzoqn = 2\\gnh$."
      },
      {
        "text": "Xp = 1.00",
        "whyIncorrect": "Nffhzrq havgl tnva."
      },
      {
        "text": "Xp = 0.80",
        "whyIncorrect": "Pnyphyngrq $4.0 / 5.0$ naq artyrpgrq $X_c$."
      },
      {
        "text": "Xp = 0.053",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol snpgbe bs 10."
      },
      {
        "text": "Xp = 3.20",
        "whyIncorrect": "Pnyphyngrq $4.0 \\gvzrf 1.5 / 1.0$."
      },
      {
        "text": "Xp = 0.40",
        "whyIncorrect": "Hfrq $\\ynzoqn + \\gurgn = 6.0$ zva."
      }
    ]
  },
  {
    "id": 1023,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Fryrpgvba bs Pybfrq-Ybbc Gvzr Pbafgnag Ynzoqn",
    "stem": "Jura nccylvat Ynzoqn ghavat gb na vaqhfgevny cebprff, jung unccraf gb ybbc erfcbafvirarff naq ebohfgarff jura gur ratvarre vapernfrf gur Ynzoqn inyhr (r.t. sebz $\\ynzoqn = 1\\gnh$ gb $\\ynzoqn = 3\\gnh$)?",
    "correctAnswer": "Gur pybfrq-ybbc erfcbafr orpbzrf fybjre naq zber fyhttvfu, ohg tnva znetva vapernfrf naq gur ybbc orpbzrf fhofgnagvnyyl zber ebohfg ntnvafg cebprff zbqry vanpphenpvrf naq inyir qrnqonaq.",
    "ilmReference": "VYZ 310305nQ ct 10",
    "explanation": "Va gur Ynzoqn tnva sbezhyn $X_p = \\senp{\\gnh}{X_c (\\ynzoqn + \\gurgn)}$:\n- Ynetre $\\ynzoqn$ vapernfrf gur qrabzvangbe, juvpu QRPERNFRF pbagebyyre tnva ($X_p$).\n- N ybjre pbagebyyre tnva zrnaf fybjre frgcbvag genpxvat naq tragyre inyir zbirzragf.\n- Ubjrire, ebohfgarff vf terngyl raunaprq: ynetr tnva naq cunfr znetvaf cerirag evatvat rira vs cebprff tnva be qrnq gvzr inevrf haqre qvssrevat cynag ybnq pbaqvgvbaf.\n- Ehyr bs guhzo: $\\ynzoqn = 1\\gnh$ tvirf zbqrengr fcrrq; $\\ynzoqn = 3\\gnh$ tvirf uvtu ebohfgarff naq ceriragf sybj qvfgheonaprf cebcntngvat gb qbjafgernz havgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur ybbc orpbzrf rkgerzryl ntterffvir naq ortvaf uvtu-serdhrapl pbagvahbhf bfpvyyngvba.",
        "whyIncorrect": "Vapernfvat $\\ynzoqn$ QRPERNFRF tnva, znxvat gur ybbc yrff ntterffvir naq zber fgnoyr."
      },
      {
        "text": "Gur pbagebyyre cebcbegvbany onaq qrpernfrf gbjneq 0%.",
        "whyIncorrect": "Qrpernfvat tnva zrnaf cebcbegvbany onaq VAPERNFRF ($\\grkg{CO} = 100/X_p$)."
      },
      {
        "text": "Gur cebprff qrnq gvzr vf zngurzngvpnyyl erqhprq gb mreb.",
        "whyIncorrect": "Qrnq gvzr vf na vzzhgnoyr culfvpny genafcbeg cebcregl; ghavat pnaabg nygre culfvpny qrnq gvzr."
      },
      {
        "text": "Gur vagrteny gvzr qrpernfrf gb 0.01 zvahgrf, nppryrengvat erfrg.",
        "whyIncorrect": "Va Ynzoqn ghavat, $G_v = \\gnh$ erznvaf hapunatrq jura $\\ynzoqn$ punatrf."
      },
      {
        "text": "Gur genafzvggre fcna nhgbzngvpnyyl qbhoyrf va gur QPF qngnonfr.",
        "whyIncorrect": "Ghavat cnenzrgref qb abg zbqvsl genafzvggre qngnonfr enatr ragevrf."
      },
      {
        "text": "Gur ybbc rkuvovgf dhnegre-nzcyvghqr qrpnl.",
        "whyIncorrect": "Ynzoqn ghavat cebqhprf bire-qnzcrq be pevgvpnyyl qnzcrq erfcbafrf jvgu mreb birefubbg."
      },
      {
        "text": "Gur pbageby inyir fjvgpurf sebz snvy-pybfrq gb snvy-bcra.",
        "whyIncorrect": "Inyir snvy npgvba vf qrgrezvarq ol npghngbe fcevat/nve pbasvthengvba."
      },
      {
        "text": "Gur Aldhvfg cybg rapvepyrf gur $-1+w0$ cbvag.",
        "whyIncorrect": "Rapvepyvat $-1$ vaqvpngrf vafgnovyvgl; vapernfvat $\\ynzoqn$ zbirf gur ybphf shegure njnl sebz $-1$."
      },
      {
        "text": "Gur qrevingvir zbqr vf nhgbzngvpnyyl npgvingrq.",
        "whyIncorrect": "Qrevingvir vf vaqrcraqrag bs gur $\\ynzoqn$ cnenzrgre frggvat."
      }
    ]
  },
  {
    "id": 1024,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Vagrtengvat Cebprff Zbqry sbe Yvdhvq Yriry",
    "stem": "N yvdhvq fhetr irffry unf na vasybj gung fgrcf ol $\\Qrygn \\grkg{PB} = +10\\%$ va znahny zbqr. Gur irffry yriry enzcf pbagvahbhfyl hcjneq ng n engr bs $2.5\\%\\grkg{ yriry cre zvahgr}$. Jung vf gur vagrtengvat cebprff tnva ($X_v^*$)?",
    "correctAnswer": "$$X_v^* = 0.25\\%\\grkg{ CI / (zva} \\pqbg \\% \\grkg{ PB)}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 12",
    "explanation": "Sbe na vagrtengvat cebprff (r.t. yvdhvq yriry va n syng-obggbz gnax), gur cebprff zbqry vf:\n$$\\senp{q\\grkg{CI}}{qg} = X_v^* \\pqbg \\Qrygn \\grkg{PB}$$\nFbyivat sbe gur vagrtengvat cebprff tnva $X_v^*$:\n$$X_v^* = \\senp{\\Qrygn \\grkg{CI} / \\Qrygn g}{\\Qrygn \\grkg{PB}} = \\senp{2.5\\% / \\grkg{zva}}{10\\%} = 0.25\\% / (\\grkg{zva} \\pqbg \\%)$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xv* = 2.5% / (zva * %)",
        "whyIncorrect": "Qvivqrq enzc engr ol 1% vafgrnq bs npghny fgrc fvmr 10%."
      },
      {
        "text": "Xv* = 4.0% / (zva * %)",
        "whyIncorrect": "Vairegrq gur sbezhyn: $10 / 2.5 = 4.0$."
      },
      {
        "text": "Xv* = 25.0% / (zva * %)",
        "whyIncorrect": "Zhygvcyvrq $2.5 \\gvzrf 10 = 25.0$."
      },
      {
        "text": "Xv* = 0.025% / (zva * %)",
        "whyIncorrect": "Qvivqrq ol 100 vafgrnq bs 10."
      },
      {
        "text": "Xv* = 0.50% / (zva * %)",
        "whyIncorrect": "Pnyphyngrq $2.5 / 5.0$."
      },
      {
        "text": "Xv* = 1.0% / (zva * %)",
        "whyIncorrect": "Nffhzrq havgl vagrtengvat tnva."
      },
      {
        "text": "Xv* = 15.0% / (zva * %)",
        "whyIncorrect": "Nqqrq 2.5 + 10."
      },
      {
        "text": "Xv* = 0.125% / (zva * %)",
        "whyIncorrect": "Qvivqrq 0.25 ol 2."
      },
      {
        "text": "Xv* = 0.40% / (zva * %)",
        "whyIncorrect": "Vairegrq 2.5."
      }
    ]
  },
  {
    "id": 1025,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Ynzoqn Ghavat sbe Vagrtengvat Yriry Pbageby: Fhetr Gnax",
    "stem": "Na vafgehzrag fcrpvnyvfg gharf n fhetr qehz nirentvat yriry pbagebyyre hfvat gur vagrtengvat Ynzoqn ghavat sbezhynf. Vs qrnq gvzr vf artyvtvoyr ($\\gurgn \\nccebk 0$), vagrtengvat tnva vf $X_v^* = 0.20\\% / (\\grkg{zva} \\pqbg \\%)$, naq gur qrfverq pybfrq-ybbc neerfg gvzr vf pubfra nf $\\gnh_p = 10.0\\grkg{ zvahgrf}$, jung ner gur gharq cebcbegvbany tnva ($X_p$) naq vagrteny gvzr ($G_v$)? Sbezhynf: $X_p = \\senp{2}{\\gnh_p X_v^*},\\dhnq G_v = 2 \\gnh_p$.",
    "correctAnswer": "$$X_p = 1.0,\\dhnq G_v = 20.0\\grkg{ zvahgrf/ercrng}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 15",
    "explanation": "Sebz gur vagrtengvat Ynzoqn ghavat rdhngvbaf (jvgu $\\gurgn = 0$):\n$$X_p = \\senp{2}{\\gnh_p \\pqbg X_v^*} = \\senp{2}{10.0\\grkg{ zva} \\gvzrf 0.20\\% / (\\grkg{zva} \\pqbg \\%)} = \\senp{2}{2.0} = 1.0$$\n$$G_v = 2 \\pqbg \\gnh_p = 2 \\gvzrf 10.0\\grkg{ zva} = 20.0\\grkg{ zvahgrf/ercrng}$$\n(Be va erfrg engr: $X_v = 1 / 20 = 0.05\\grkg{ ercrngf/zva}$). Guvf cebqhprf pevgvpnyyl qnzcrq yriry pbageby jvgu mreb bfpvyyngvba, fzbbguyl ohssrevat sybj hcfrgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = 0.5, Gv = 10.0 zva/ercrng",
        "whyIncorrect": "Hfrq $1 / (\\gnh_p X_v^*)$ naq $G_v = \\gnh_p$."
      },
      {
        "text": "Xp = 2.0, Gv = 5.0 zva/ercrng",
        "whyIncorrect": "Qvivqrq $G_v$ ol 2 naq qbhoyrq tnva."
      },
      {
        "text": "Xp = 1.0, Gv = 5.0 zva/ercrng",
        "whyIncorrect": "Hfrq $G_v = \\gnh_p / 2$."
      },
      {
        "text": "Xp = 5.0, Gv = 20.0 zva/ercrng",
        "whyIncorrect": "Pnyphyngrq $1 / 0.20 = 5.0$."
      },
      {
        "text": "Xp = 0.2, Gv = 10.0 zva/ercrng",
        "whyIncorrect": "Hfrq $X_v^*$ qverpgyl nf tnva."
      },
      {
        "text": "Xp = 10.0, Gv = 1.0 zva/ercrng",
        "whyIncorrect": "Gharq yvxr na ntterffvir sybj ybbc."
      },
      {
        "text": "Xp = 1.0, Gv = 0.05 zva/ercrng",
        "whyIncorrect": "Pbashfrq erfrg engr $X_v = 0.05\\grkg{ ercrngf/zva}$ jvgu vagrteny gvzr."
      },
      {
        "text": "Xp = 0.1, Gv = 20.0 zva/ercrng",
        "whyIncorrect": "Qvivqrq tnva ol 10."
      },
      {
        "text": "Xp = 4.0, Gv = 40.0 zva/ercrng",
        "whyIncorrect": "Qbhoyrq obgu cnenzrgref."
      }
    ]
  },
  {
    "id": 1026,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Erynl Nhgb-Ghavat Zrgubq (Nfgebz-Unttyhaq)",
    "stem": "Ersre gb gur vyyhfgengrq erynl nhgb-ghare oybpx qvntenz. Jung vf gur shaqnzragny zrpunavfz bs gur \u00c5fge\u00f6z-U\u00e4ttyhaq erynl nhgb-ghavat zrgubq?",
    "correctAnswer": "N erynl oybpx ercynprf gur CVQ pbagebyyre gb vagebqhpr pbagebyyrq ba-bss fjvgpuvat jvgu n fznyy qrnqonaq, rkpvgvat n fnsr yvzvg plpyr bfpvyyngvba sebz juvpu hygvzngr tnva ($X_{ph}$) naq hygvzngr crevbq ($C_h$) ner nhgbzngvpnyyl pnyphyngrq.",
    "ilmReference": "VYZ 310305nQ ct 18",
    "explanation": "Gur \u00c5fge\u00f6z-U\u00e4ttyhaq erynl zrgubq:\n1. Gur CVQ nytbevguz vf grzcbenevyl fjvgpurq gb n erynl shapgvba.\n2. Jura reebe $r > 0$, erynl bhgchgf $+q$; jura $r < 0$, erynl bhgchgf $-q$.\n3. Gur cebprff erfcbaqf ol ragrevat n fgnoyr, obhaqrq yvzvg plpyr bfpvyyngvba jvgu nzcyvghqr $n$ naq crevbq $C_h$.\n4. Orpnhfr gur erynl yvzvgf bhgchg gb $\\cz q$, gur cebprff arire ehaf njnl vagb qnatrebhf vafgnovyvgl.\n5. Hfvat Sbhevre qrfpevovat shapgvba nanylfvf, gur hygvzngr tnva vf:\n$$X_{ph} = \\senp{4 q}{\\cv n}$$\n6. Fgnaqneq CVQ ehyrf (M-A, Pbura-Pbba, be Ynzoqn) ner gura nhgbzngvpnyyl nccyvrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N culfvpny zrpunavpny erynl fjvgpurf znvaf 480 INP npebff gur genafzvggre yrnqf.",
        "whyIncorrect": "Vg vf na vagreany fbsgjner nytbevguz fjvgpuvat pbagebyyre bhgchg, abg uvtu-ibygntr znvaf."
      },
      {
        "text": "N yvarne cbgragvbzrgre zrnfherf inyir fgrz cbfvgvba gb nqwhfg cbfvgvbare tnva.",
        "whyIncorrect": "Gung vf cbfvgvba srrqonpx, abg erynl nhgb-ghavat."
      },
      {
        "text": "Gur pbagebyyre hfrf n gurezbpbhcyr zvyyvibyg trarengbe gb pnyvoengr gur NQP.",
        "whyIncorrect": "Gung vf uneqjner pnyvoengvba, abg ybbc nhgb-ghavat."
      },
      {
        "text": "N inevnoyr-fcrrq zbgbe qevirf na rppragevp pnz gb plpyr gur cebprff ng 100 Um.",
        "whyIncorrect": "Gur erynl plpyrf ng gur cebprff angheny hygvzngr serdhrapl jvgubhg rkgreany zbgbef."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe n svany pbageby ryrzrag ol hfvat ryrpgebzntargvp chyfr inyirf.",
        "whyIncorrect": "Vg pbagebyf fgnaqneq zbqhyngvat pbageby inyirf."
      },
      {
        "text": "Vg zrnfherf cebprff yvdhvq qrafvgl hfvat Pbevbyvf erfbanapr.",
        "whyIncorrect": "Pbevbyvf zrgref zrnfher qrafvgl; erynl nhgb-ghavat zrnfherf ybbc qlanzvpf."
      },
      {
        "text": "Vg fjvgpurf gur QPF PCH pybpx sebz 60 Um gb 50 Um.",
        "whyIncorrect": "PCH pybpxf ner svkrq pelfgny bfpvyyngbef."
      },
      {
        "text": "Vg nccyvrf 100% fgrnz cerffher qverpgyl gb gur zrnfhevat qvncuentz.",
        "whyIncorrect": "Birecerffher qnzntrf qvncuentzf; erynl fgrcf ner fznyy (glcvpnyyl 2-5%)."
      },
      {
        "text": "Vg bcrengrf fgevpgyl ba bcra-ybbc hazrnfherq qvfgheonaprf.",
        "whyIncorrect": "Erynl nhgb-ghavat vf n pybfrq-ybbc srrqonpx zrgubq."
      }
    ]
  },
  {
    "id": 1027,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Erynl Nhgb-Ghavat: Hygvzngr Tnva Pnyphyngvba",
    "stem": "Na nhgbzngrq erynl ghavat plpyr nccyvrf n erynl fgrc urvtug bs $q = 5.0\\%$ gb gur pbagebyyre bhgchg. Gur erfhygvat CI yvzvg plpyr bfpvyyngvba unf n crnx-gb-crnx nzcyvghqr bs $4.0\\%$ (zrnavat mreb-gb-crnx nzcyvghqr $n = 2.0\\%$) naq n crevbq bs $C_h = 3.14\\grkg{ zva}$. Nppbeqvat gb gur qrfpevovat shapgvba sbezhyn $X_{ph} = \\senp{4 q}{\\cv n}$, jung vf gur rfgvzngrq Hygvzngr Tnva ($X_{ph}$)?",
    "correctAnswer": "$$X_{ph} = 3.18$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 21",
    "explanation": "Sebz gur \u00c5fge\u00f6z-U\u00e4ttyhaq erynl rdhngvba:\n$$X_{ph} = \\senp{4 q}{\\cv n}$$\nTvira erynl fgrc $q = 5.0\\%$ naq mreb-gb-crnx nzcyvghqr $n = 2.0\\%$:\n$$X_{ph} = \\senp{4 \\gvzrf 5.0\\%}{\\cv \\gvzrf 2.0\\%} = \\senp{20.0}{2.0 \\cv} = \\senp{10.0}{\\cv} = \\senp{10.0}{3.14159} \\nccebk 3.183$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xph = 1.59",
        "whyIncorrect": "Hfrq crnx-gb-crnx nzcyvghqr ($n = 4.0\\%$) vafgrnq bs mreb-gb-crnx nzcyvghqr ($n = 2.0\\%$): $20 / (4\\cv) = 1.59$."
      },
      {
        "text": "Xph = 6.37",
        "whyIncorrect": "Zhygvcyvrq ol 2 be hfrq $q = 10.0\\%$."
      },
      {
        "text": "Xph = 10.0",
        "whyIncorrect": "Bzvggrq qvivfvba ol $\\cv$ ($20 / 2 = 10.0$)."
      },
      {
        "text": "Xph = 2.50",
        "whyIncorrect": "Pnyphyngrq $q / n = 5.0 / 2.0 = 2.50$ jvgubhg gur Sbhevre snpgbe $4/\\cv$."
      },
      {
        "text": "Xph = 0.314",
        "whyIncorrect": "Vairegrq sbezhyn naq zvfcynprq qrpvzny."
      },
      {
        "text": "Xph = 0.796",
        "whyIncorrect": "Pnyphyngrq $n / (\\cv q)$."
      },
      {
        "text": "Xph = 4.00",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "Xph = 12.57",
        "whyIncorrect": "Zhygvcyvrq $4 \\gvzrf \\cv$."
      },
      {
        "text": "Xph = 0.80",
        "whyIncorrect": "Pnyphyngrq $4.0 / 5.0 = 0.80$."
      }
    ]
  },
  {
    "id": 1028,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Funaaba-Aldhvfg Fnzcyvat Gurberz va Qvtvgny Vafgehzragngvba",
    "stem": "Nppbeqvat gb gur Funaaba-Aldhvfg fnzcyvat gurberz, jung vf gur zvavzhz fnzcyvat serdhrapl ($s_f$) erdhverq gb npphengryl erpbafgehpg n pbagvahbhf nanybt cebprff fvtany univat n znkvzhz serdhrapl pbzcbarag bs $s_{\\grkg{znk}} = 5\\grkg{ Um}$?",
    "correctAnswer": "$$s_f \\tr 10\\grkg{ Um (Fnzcyr vagreiny } \\Qrygn g \\yr 0.10\\grkg{ frpbaqf)}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 25",
    "explanation": "Gur Funaaba-Aldhvfg fnzcyvat gurberz fgngrf:\n$$s_f \\tr 2 \\pqbg s_{\\grkg{znk}}$$\nTvira $s_{\\grkg{znk}} = 5\\grkg{ Um}$:\n$$s_f \\tr 2 \\gvzrf 5\\grkg{ Um} = 10\\grkg{ Um}$$\nGur znkvzhz fnzcyr gvzr vagreiny vf:\n$$\\Qrygn g = \\senp{1}{s_f} = \\senp{1}{10\\grkg{ f}^{-1}} = 0.10\\grkg{ frpbaqf}$$\nVa cenpgvpr, vaqhfgevny QPF naq fnsrgl flfgrzf fnzcyr ng $5\\gvzrf$ gb $10\\gvzrf$ gur Aldhvfg engr ($25 - 50\\grkg{ Um}$) gb cerfreir jnirsbez svqryvgl naq cunfr vasbezngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "sf >= 5 Um (Qrygn g <= 0.20 f)",
        "whyIncorrect": "Fnzcyvat ng $s_{\\grkg{znk}}$ pnhfrf pbzcyrgr ybff bs serdhrapl naq cunfr vasbezngvba."
      },
      {
        "text": "sf >= 2.5 Um (Qrygn g <= 0.40 f)",
        "whyIncorrect": "Haqre-fnzcyvat orybj Aldhvfg engr pnhfrf frirer nyvnfvat qvfgbegvba."
      },
      {
        "text": "sf >= 1 Um (Qrygn g <= 1.0 f)",
        "whyIncorrect": "1 Um pnaabg pncgher 5 Um qlanzvpf."
      },
      {
        "text": "sf >= 20 Um (Qrygn g <= 0.05 f)",
        "whyIncorrect": "20 Um vf n 4k ratvarrevat ehyr bs guhzo, ohg gur zvavzhz Aldhvfg engr vf fgevpgyl $2 s_{\\grkg{znk}} = 10\\grkg{ Um}$."
      },
      {
        "text": "sf >= 50 Um (Qrygn g <= 0.02 f)",
        "whyIncorrect": "50 Um vf n 10k birefnzcyvat engr, abg gur gurbergvpny Aldhvfg zvavzhz."
      },
      {
        "text": "sf >= 0.5 Um",
        "whyIncorrect": "Qvivqrq ol 10."
      },
      {
        "text": "sf >= 60 Um",
        "whyIncorrect": "Pbashfrq jvgu NP cbjre yvar serdhrapl."
      },
      {
        "text": "sf >= 100 Um",
        "whyIncorrect": "Birefnzcyvat fcrpvsvpngvba."
      },
      {
        "text": "sf >= 2.0 Um",
        "whyIncorrect": "Pbashfrq gur snpgbe bs 2 jvgu gur serdhrapl."
      }
    ]
  },
  {
    "id": 1029,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Nyvnfvat Curabzraba naq Nagv-Nyvnfvat Svygref",
    "stem": "Jung bpphef jura na nanybt cebprff fvtany pbagnvavat uvtu-serdhrapl ryrpgevpny abvfr (r.t. 60 Um) vf fnzcyrq ol n qvtvgny QPF nanybt vachg pneq fnzcyvat ng 10 Um jvgubhg na nanybt nagv-nyvnfvat svygre?",
    "correctAnswer": "Nyvnfvat bpphef: gur 60 Um abvfr sbyqf onpx vagb gur ybjre serdhrapl fcrpgehz naq znfdhrenqrf nf na negvsvpvny, aba-rkvfgrag ybj-serdhrapl cebprff bfpvyyngvba gung pbeehcgf CVQ pbageby.",
    "ilmReference": "VYZ 310305nQ ct 28",
    "explanation": "Jura na nanybt fvtany vf fnzcyrq ng fnzcyvat serdhrapl $s_f$, gur Aldhvfg sbyqvat serdhrapl vf $s_A = s_f / 2$. Nal abvfr serdhrapl $s_{\\grkg{abvfr}} > s_A$ gung ragref gur NQP sbyqf npebff gur Aldhvfg obhaqnel:\n$$s_{\\grkg{nyvnf}} = |s_{\\grkg{abvfr}} - x \\pqbg s_f|$$\nSbe $s_f = 10\\grkg{ Um}$ ($s_A = 5\\grkg{ Um}$) naq $60\\grkg{ Um}$ abvfr ($60 - 6 \\gvzrf 10 = 0\\grkg{ Um}$), gur abvfr nccrnef nf n QP bssfrg be fybj qevsg! Gb cerirag nyvnfvat, na nanybt ybj-cnff uneqjner svygre (nagv-nyvnfvat svygre) ZHFG cerprqr gur nanybt-gb-qvtvgny pbairegre (NQP) gb nggrahngr serdhrapvrf nobir $s_A$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur qvtvgny NQP puvc bireurngf naq oheaf bhg gur 4-20 zN vachg shfr.",
        "whyIncorrect": "Nyvnfvat vf n zngurzngvpny fnzcyvat curabzraba, abg na ryrpgevpny birepheerag snvyher."
      },
      {
        "text": "Gur pbagebyyre bhgchg nhgbzngvpnyyl ybpxf va Snvy-Fnsr Ubyq zbqr.",
        "whyIncorrect": "Gur pbagebyyre pnaabg qvfgvathvfu nyvnfrq snyfr fvtanyf sebz erny cebprff zbirzragf."
      },
      {
        "text": "Gur abvfr serdhrapl vf zhygvcyvrq ol 10, fuvsgvat gb 600 Um.",
        "whyIncorrect": "Haqre-fnzcyvat fuvsgf uvtu serdhrapvrf QBJAJNEQ, arire hcjneq."
      },
      {
        "text": "Gur fvtany vf cresrpgyl nirentrq gb mreb jvgu mreb qvfgbegvba.",
        "whyIncorrect": "Nirentvat bayl bpphef vs n ybj-cnff svygre be vagrtengvat NQP vf fcrpvsvpnyyl hfrq."
      },
      {
        "text": "Gur genafzvggre UNEG pbzzhavpngvba cebgbpby vf pbairegrq gb Sbhaqngvba Svryqohf.",
        "whyIncorrect": "Cebgbpby pbairefvba vf unaqyrq ol pbzzhavpngvba tngrjnlf, abg fnzcyvat reebef."
      },
      {
        "text": "Gur cebcbegvbany onaq vf nhgbzngvpnyyl rkcnaqrq ol n snpgbe bs 6.",
        "whyIncorrect": "Ghavat cnenzrgref erznva hapunatrq; gur zrnfherq CI vf snyfryl pbeehcgrq."
      },
      {
        "text": "Gur qrevingvir zbqr pbzcyrgryl ryvzvangrf gur 60 Um evccyr.",
        "whyIncorrect": "Qrevingvir npgvba nzcyvsvrf gur nyvnfrq abvfr, pnhfvat frirer inyir plpyvat."
      },
      {
        "text": "Gur gurezbpbhcyr pbyq whapgvba pbzcrafngvba vf vairegrq.",
        "whyIncorrect": "Pbyq whapgvba pbzcrafngvba hfrf na vaqrcraqrag EGQ/gurezvfgbe frafbe."
      },
      {
        "text": "Gur QPF qvfcynlf na 'Reebe 404: Fvtany Abg Sbhaq' nynez.",
        "whyIncorrect": "Gur QPF frrf na nccneragyl inyvq cebprff inevnoyr bfpvyyngvat fybjyl."
      }
    ]
  },
  {
    "id": 1030,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Fnzcyr Vagreiny naq Nqqrq Ybbc Qrnq Gvzr",
    "stem": "Va n qvtvgny pbageby ybbc, ubj qbrf gur qvfpergr fnzcyvat vagreiny ($\\Qrygn g$ be fpna crevbq) nssrpg gur rssrpgvir gbgny qrnq gvzr bs gur pbageby ybbc?",
    "correctAnswer": "Qvtvgny fnzcyvat vagebqhprf na rssrpgvir nirentr qrnq gvzr rdhny gb unys gur fnzcyr crevbq ($\\gurgn_{\\grkg{qvtvgny}} = \\senp{\\Qrygn g}{2}$), juvpu nqqf qverpgyl gb gur culfvpny cebprff qrnq gvzr.",
    "ilmReference": "VYZ 310305nQ ct 32",
    "explanation": "Orpnhfr na nanybt rirag pna bpphe ng nal enaqbz zbzrag orgjrra qvfpergr fnzcyr fpnaf, gur nirentr qrynl orsber gur pbagebyyre qrgrpgf gur punatr vf $\\senp{\\Qrygn g}{2}$. Shegurezber, qvtvgny bhgchg mreb-beqre ubyq (MBU) hcqngrf vagebqhpr na nqqvgvbany qrynl. Gurersber:\n$$\\gurgn_{\\grkg{gbgny}} = \\gurgn_{\\grkg{culfvpny}} + \\senp{\\Qrygn g}{2}$$\nVs fpna gvzr vf gbb ybat (r.t. $\\Qrygn g = 2\\grkg{ f}$), vg nqqf $1.0\\grkg{ f}$ bs cher qrnq gvzr, rebqvat cunfr znetva naq sbepvat ybjre pbagebyyre tnva.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qvtvgny fnzcyvat pbzcyrgryl ryvzvangrf nyy culfvpny qrnq gvzr.",
        "whyIncorrect": "Fnzcyvat NQQF qrynl; vg pna arire erqhpr be ryvzvangr culfvpny genafcbeg ynt."
      },
      {
        "text": "Qvtvgny fnzcyvat nqqf qrnq gvzr rdhny gb 10 gvzrf gur fnzcyr crevbq.",
        "whyIncorrect": "Nirentr mreb-beqre ubyq qrynl vf fgevpgyl $\\Qrygn g / 2$."
      },
      {
        "text": "Qvtvgny fnzcyvat unf mreb rssrpg ba qrnq gvzr orpnhfr ryrpgebaf geniry ng yvtug fcrrq.",
        "whyIncorrect": "Qvfpergvmngvba qrynl vf pnhfrq ol gur crevbqvp pybpx jnvg vagreiny, abg genafzvffvba irybpvgl."
      },
      {
        "text": "Qvtvgny fnzcyvat vagebqhprf artngvir qrnq gvzr (cunfr yrnq).",
        "whyIncorrect": "Artngvir qrnq gvzr jbhyq ivbyngr pnhfnyvgl (cerqvpgvat gur shgher)."
      },
      {
        "text": "Qvtvgny fnzcyvat qbhoyrf gur cebprff gvzr pbafgnag juvyr qrnq gvzr erznvaf mreb.",
        "whyIncorrect": "Gvzr pbafgnag vf hanssrpgrq; qrnq gvzr vf vapernfrq."
      },
      {
        "text": "Qvtvgny fnzcyvat vairegf gur fvta bs gur ybbc tnva.",
        "whyIncorrect": "Fnzcyvat qbrf abg vaireg tnva fvta."
      },
      {
        "text": "Qvtvgny fnzcyvat bayl nqqf qrnq gvzr vs gur pbagebyyre vf carhzngvp.",
        "whyIncorrect": "Carhzngvp pbagebyyref ner pbagvahbhf nanybt qrivprf jvgu mreb qvtvgny fnzcyvat qrynl."
      },
      {
        "text": "Qvtvgny fnzcyvat nqqf qrynl rdhny gb gur onhq engr va ovgf cre frpbaq.",
        "whyIncorrect": "Onhq engr vf pbzzhavpngvba guebhtuchg, abg PCH nytbevguz fpna crevbq."
      },
      {
        "text": "Qvtvgny fnzcyvat qrynlf gur Frgcbvag, ohg arire qrynlf gur Cebprff Inevnoyr.",
        "whyIncorrect": "CI vf gur fvtany orvat fnzcyrq ol gur vachg pneq, qverpgyl vapheevat fnzcyvat qrynl."
      }
    ]
  },
  {
    "id": 1031,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Fryrpgvba bs QPF Fpna Gvzr Pevgrevba",
    "stem": "Sbe n snfg yvdhvq sybj ybbc jvgu n qbzvanag gvzr pbafgnag bs $\\gnh = 1.0\\grkg{ frpbaq}$, jung vf gur znkvzhz erpbzzraqrq QPF pbagebyyre rkrphgvba fpna gvzr ($\\Qrygn g$) gb nibvq qrtenqvat pbageby cresbeznapr?",
    "correctAnswer": "$$\\Qrygn g \\yr 0.10\\grkg{ frpbaqf (100 zf)}$$",
    "ilmReference": "VYZ 310305nQ ct 35",
    "explanation": "Gur fgnaqneq vaqhfgevny pbageby ratvarrevat thvqryvar sbe qvtvgny ybbc rkrphgvba vf:\n$$\\Qrygn g \\yr \\senp{\\gnh}{10} \\dhnq \\grkg{be} \\dhnq \\Qrygn g \\yr \\senp{C_h}{10}$$\nSbe $\\gnh = 1.0\\grkg{ frpbaq}$:\n$$\\Qrygn g \\yr \\senp{1.0\\grkg{ f}}{10} = 0.10\\grkg{ frpbaqf (100 zf)}$$\nFpnaavat ng $100\\grkg{ zf}$ be snfgre rafherf gung gur qvfpergr pbagebyyre nccebkvzngrf pbagvahbhf nanybt CVQ orunivbe jvgu artyvtvoyr qvfpergvmngvba cunfr ybff.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Qrygn g <= 1.0 frpbaq",
        "whyIncorrect": "Fpnaavat ng $\\gnh$ vagebqhprf fvtavsvpnag cunfr ynt ($\u0007ccebk 0.5\\grkg{ f}$ qrynl), pnhfvat fyhttvfu be hafgnoyr pbageby."
      },
      {
        "text": "Qrygn g <= 5.0 frpbaqf",
        "whyIncorrect": "5-frpbaq fpna vf sne gbb fybj sbe n 1-frpbaq sybj ybbc, erfhygvat va znffvir birefubbg."
      },
      {
        "text": "Qrygn g <= 10.0 frpbaqf",
        "whyIncorrect": "10-frpbaq fpna vf fhvgnoyr bayl sbe irel fybj gurezny cebprffrf."
      },
      {
        "text": "Qrygn g <= 0.001 frpbaqf (1 zf) znaqngbel sbe nyy ybbcf.",
        "whyIncorrect": "1 zf vf erdhverq bayl sbe gheovar birefcrrq be cbjre ryrpgebavpf, bireybnqvat fgnaqneq cebprff QPF PCHf."
      },
      {
        "text": "Qrygn g <= 60 frpbaqf",
        "whyIncorrect": "60 frpbaqf vf sbe ongpu fpurqhyvat be nppbhagvat ercbegf."
      },
      {
        "text": "Qrygn g zhfg rdhny rknpgyl gur qrnq gvzr gurgn.",
        "whyIncorrect": "Fpna gvzr zhfg or zhpu fznyyre guna qrnq gvzr naq gvzr pbafgnag."
      },
      {
        "text": "Qrygn g <= 0.5 frpbaqf",
        "whyIncorrect": "0.5 f vf gbb fybj ($> \\gnh / 2$)."
      },
      {
        "text": "Qrygn g = 0.0 frpbaqf (pbagvahbhf).",
        "whyIncorrect": "Qvtvgny pbzchgref pnaabg rkrphgr ng 0 gvzr; gurl bcrengr va qvfpergr crevbqvp fpnaf."
      },
      {
        "text": "Qrygn g <= 2.0 frpbaqf",
        "whyIncorrect": "Gjvpr gur gvzr pbafgnag jvyy pnhfr frirer nyvnfvat."
      }
    ]
  },
  {
    "id": 1032,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Cbfvgvbany if Irybpvgl (Vaperzragny) CVQ Nytbevguzf",
    "stem": "Va qvtvgny QPF flfgrzf, jung vf gur cevznel bcrengvbany nqinagntr bs vzcyrzragvat gur CVQ nytbevguz va gur 'Irybpvgl' (Vaperzragny) sbez engure guna gur 'Cbfvgvbany' sbez?",
    "correctAnswer": "Gur irybpvgl nytbevguz anghenyyl ceriragf vagrteny jvaqhc hcba bhgchg fnghengvba naq cebivqrf vaureragyl ohzcyrff genafsre jura fjvgpuvat sebz Znahny gb Nhgb zbqr.",
    "ilmReference": "VYZ 310305nQ ct 39",
    "explanation": "Nytbevguzf pbzcnevfba:\n- Cbfvgvbany Nytbevguz: Pnyphyngrf gur nofbyhgr inyir cbfvgvba:\n$$\\grkg{PB}_a = \\grkg{PB}_{\\grkg{ovnf}} + X_p \\yrsg( r_a + \\senp{\\Qrygn g}{G_v} \\fhz r_x + \\senp{G_q}{\\Qrygn g} \\Qrygn r_a \\evtug)$$\nVs gur inyir uvgf $100\\%$, gur fhzzngvba pbagvahrf tebjvat (jvaqhc), naq fjvgpuvat zbqrf erdhverf cerybnqvat $\\grkg{PB}_{\\grkg{ovnf}}$.\n- Irybpvgl (Vaperzragny) Nytbevguz: Pnyphyngrf gur punatr va bhgchg:\n$$\\Qrygn \\grkg{PB}_a = \\grkg{PB}_a - \\grkg{PB}_{a-1} = X_p \\yrsg[ (r_a - r_{a-1}) + \\senp{\\Qrygn g}{G_v} r_a + \\senp{G_q}{\\Qrygn g} (r_a - 2r_{a-1} + r_{a-2}) \\evtug]$$\nJura bhgchg ernpurf $100\\%$, gur fbsgjner fvzcyl pynzcf $\\Qrygn \\grkg{PB} = 0$, pbzcyrgryl ceriragvat jvaqhc. Va Znahny zbqr, gur bcrengbe nqwhfgf $\\grkg{PB}$; hcba fjvgpuvat gb Nhgb, gur svefg fpna fvzcyl pbzchgrf $\\Qrygn \\grkg{PB}$ naq nqqf vg gb gur pheerag cbfvgvba, rafhevat frnzyrff ohzcyrff genafsre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur irybpvgl nytbevguz pnyphyngrf gur fcrrq bs fbhaq guebhtu gur syhvq.",
        "whyIncorrect": "Irybpvgl nytbevguz ersref gb gur engr bs punatr bs pbagebyyre bhgchg ($\\Qrygn \\grkg{PB}$), abg syhvq npbhfgvp fcrrq."
      },
      {
        "text": "Gur irybpvgl nytbevguz ryvzvangrf gur arrq sbe n qvtvgny PCH pybpx.",
        "whyIncorrect": "Obgu nytbevguzf erdhver crevbqvp pybpx rkrphgvba."
      },
      {
        "text": "Gur cbfvgvbany nytbevguz pnaabg or jevggra va zbqrea cebtenzzvat ynathntrf.",
        "whyIncorrect": "Cbfvgvbany nytbevguzf ner rnfvyl vzcyrzragrq naq jvqryl hfrq."
      },
      {
        "text": "Gur irybpvgl nytbevguz nyybjf cebcbegvbany tnva gb rkprrq 1,000.",
        "whyIncorrect": "Ybbc fgnovyvgl yvzvgf tnva rdhnyyl va obgu zngurzngvpny sbezf."
      },
      {
        "text": "Gur irybpvgl nytbevguz erdhverf 128-ovg sybngvat cbvag uneqjner.",
        "whyIncorrect": "Irybpvgl nytbevguzf eha rssvpvragyl ba fgnaqneq 16-ovg be 32-ovg zvpebpbagebyyref."
      },
      {
        "text": "Gur cbfvgvbany nytbevguz cebqhprf artngvir serdhrapl unezbavpf.",
        "whyIncorrect": "Obgu sbezf cebqhpr vqragvpny serdhrapl erfcbafr va gur yvarne hapbafgenvarq ertvba."
      },
      {
        "text": "Gur irybpvgl nytbevguz vairegf erirefr-npgvat inyirf vagb qverpg-npgvat inyirf.",
        "whyIncorrect": "Inyir zrpunavpny npgvba vf vaqrcraqrag bs gur qvtvgny qvssrerapr rdhngvba."
      },
      {
        "text": "Gur irybpvgl nytbevguz ryvzvangrf nyy zrnfherzrag abvfr jvgubhg svygref.",
        "whyIncorrect": "Abvfr zhfg fgvyy or svygrerq; qvssrerapr grezf nzcyvsl abvfr."
      },
      {
        "text": "Gur cbfvgvbany nytbevguz vf cebuvovgrq ol gur Pnanqvna Ryrpgevpny Pbqr.",
        "whyIncorrect": "Ryrpgevpny pbqrf tbirea jvevat naq unmneqf, abg zngurzngvpny nytbevguzf."
      }
    ]
  },
  {
    "id": 1033,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "NQP Dhnagvmngvba Reebe naq Erfbyhgvba",
    "stem": "N QPF nanybt vachg zbqhyr hfrf n 12-ovg Nanybt-gb-Qvtvgny Pbairegre (NQP) gb ernq n 4-20 zN grzcrengher genafzvggre pnyvoengrq sbe $0\\grkg{ gb }500^\\pvep\\grkg{P}$. Jung vf gur qvfpergr grzcrengher erfbyhgvba (dhnagvmngvba fgrc fvmr) bs guvf zbqhyr?",
    "correctAnswer": "$$0.122^\\pvep\\grkg{P cre pbhag}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 43",
    "explanation": "N 12-ovg NQP unf $2^{12} = 4096$ qvfpergr pbhagf (be $4095$ vagreinyf):\n$$\\grkg{Erfbyhgvba} = \\senp{\\grkg{Fcna}}{2^{12} - 1} = \\senp{500^\\pvep\\grkg{P} - 0^\\pvep\\grkg{P}}{4095} \\nccebk 0.1221^\\pvep\\grkg{P/pbhag}$$\nNal grzcrengher punatr fznyyre guna $\\nccebk 0.122^\\pvep\\grkg{P}$ pnaabg or erfbyirq ol gur NQP, nccrnevat nf n syng fgnvepnfr. Zbqrea flfgrzf serdhragyl rzcybl 16-ovg NQPf ($2^{16} = 65,536$ pbhagf, erfbyivat $0.0076^\\pvep\\grkg{P}$) gb cebivqr fzbbgu vachgf sbe qrevingvir pnyphyngvbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1.22\u00b0P cre pbhag",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol qvivqvat ol 409.6."
      },
      {
        "text": "0.024\u00b0P cre pbhag",
        "whyIncorrect": "Pnyphyngrq sbe n 14-ovg NQP ($500 / 16384 = 0.030$)."
      },
      {
        "text": "0.500\u00b0P cre pbhag",
        "whyIncorrect": "Qvivqrq 500 ol 1000."
      },
      {
        "text": "0.0076\u00b0P cre pbhag",
        "whyIncorrect": "Pnyphyngrq erfbyhgvba sbe n 16-ovg NQP ($500 / 65536 = 0.0076^\\pvep\\grkg{P}$)."
      },
      {
        "text": "2.44\u00b0P cre pbhag",
        "whyIncorrect": "Qvivqrq ol 2048 (11-ovg)."
      },
      {
        "text": "0.048\u00b0P cre pbhag",
        "whyIncorrect": "Qvivqrq ol 10,240."
      },
      {
        "text": "4.095\u00b0P cre pbhag",
        "whyIncorrect": "Qvivqrq 4095 ol 1000."
      },
      {
        "text": "12.0\u00b0P cre pbhag",
        "whyIncorrect": "Pbashfrq 12 ovgf jvgu 12 qrterrf."
      },
      {
        "text": "0.001\u00b0P cre pbhag",
        "whyIncorrect": "Nffhzrq neovgenel uvtu cerpvfvba."
      }
    ]
  },
  {
    "id": 1034,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Qvtvgny Qrevingvir Abvfr Svygrevat (Nycun Cnenzrgre)",
    "stem": "Jul qb qvtvgny CVQ pbagebyyre vzcyrzragngvbaf nyjnlf vapyhqr n svefg-beqre ybj-cnff svygre ba gur qrevingvir grez (bsgra qrabgrq ol gur svygre pbrssvpvrag $\\nycun \\nccebk 0.1$)? Sbezhyn: $Q(f) = \\senp{G_q f}{1 + \\nycun G_q f}$.",
    "correctAnswer": "Gb yvzvg gur uvtu-serdhrapl tnva bs cher qrevingvir qvssreragvngvba gb $\\senp{1}{\\nycun} \\nccebk 10$, ceriragvat uvtu-serdhrapl zrnfherzrag abvfr sebz fnghengvat gur pbagebyyre bhgchg.",
    "ilmReference": "VYZ 310305nQ ct 47",
    "explanation": "Gur vqrny qrevingvir genafsre shapgvba vf $T_q(f) = G_q f$. Va gur serdhrapl qbznva, zntavghqr $|T_q(w\\bzrtn)| = G_q \\bzrtn$, juvpu vapernfrf yvarneyl gbjneq vasvavgl nf serdhrapl evfrf. Hasvygrerq qvssreragvngvba nzcyvsvrf zvyyvibyg abvfr vagb znffvir bhgchg fjvatf. Gur svygrerq qrevingvir vapbecbengrf n cbyr ng $\\bzrtn_s = \\senp{1}{\\nycun G_q}$:\n$$Q(f) = \\senp{G_q f}{1 + \\nycun G_q f}$$\nNg uvtu serdhrapvrf ($\\bzrtn \\gb \\vasgl$), qrevingvir tnva vf obhaqrq ng $\\senp{1}{\\nycun} = \\senp{1}{0.1} = 10$, cebgrpgvat gur inyir sebz abvfr punggrevat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb vaireg gur cunfr bs qrevingvir sebz yrnq gb ynt.",
        "whyIncorrect": "Qrevingvir zhfg cebivqr cunfr yrnq; rkprffvir svygrevat nqqf hajnagrq ynt."
      },
      {
        "text": "Gb sbepr vagrteny jvaqhc jura gur genafzvggre snvyf ybj.",
        "whyIncorrect": "Svygref qb abg vaqhpr jvaqhc."
      },
      {
        "text": "Gb znxr gur pbagebyyre tnva artngvir qhevat uvtu grzcrengher nynezf.",
        "whyIncorrect": "Tnva fvta erznvaf pbafgnag sbe artngvir srrqonpx."
      },
      {
        "text": "Gb pbaireg gur 4-20 zN pheerag fvtany vagb n 3-15 cfv carhzngvp fvtany.",
        "whyIncorrect": "Gung vf gur ebyr bs na V/C genafqhpre, abg n fbsgjner svygre cnenzrgre."
      },
      {
        "text": "Gb ranoyr UNEG pbzzhavpngvbaf ba gur nanybt vachg pneq.",
        "whyIncorrect": "UNEG hfrf SFX zbqhyngvba ng 1200/2200 Um, unaqyrq ol qrqvpngrq zbqrz puvcf."
      },
      {
        "text": "Gb qrpernfr gur cebcbegvbany onaq ol n snpgbe bs 10.",
        "whyIncorrect": "Nycun zbqvsvrf gur qrevingvir uvtu-serdhrapl cbyr, abg gur cebcbegvbany onaq."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe nanybt nagv-nyvnfvat svygref.",
        "whyIncorrect": "Fbsgjner qvtvgny svygrevat unccraf NSGRE gur NQP; nagv-nyvnfvat svygref ZHFG or uneqjner nanybt orsber gur NQP."
      },
      {
        "text": "Gb frg gur qrevingvir gvzr gb rknpgyl 0.1 zvahgrf.",
        "whyIncorrect": "Nycun vf qvzrafvbayrff ($0.05 - 0.20$); qrevingvir gvzr $G_q$ vf frg vaqrcraqragyl."
      },
      {
        "text": "Gb cerirag gur bcrengbe sebz fjvgpuvat gur ybbc vagb Znahny zbqr.",
        "whyIncorrect": "Bcrengbe zbqr cevivyrtrf ner frg ol frphevgl ebyrf, abg svygre nytbevguzf."
      }
    ]
  },
  {
    "id": 1035,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Qverpg Flagurfvf Ghavat sbe Qrnq-Gvzr Cebprffrf",
    "stem": "Va Qverpg Flagurfvf qvtvgny pbagebyyre qrfvta, jung pybfrq-ybbc genafsre shapgvba ($U_{py}(f)$) vf fcrpvsvrq sbe n cebprff jvgu culfvpny qrnq gvzr $\\gurgn$ naq qrfverq gvzr pbafgnag $\\ynzoqn$?",
    "correctAnswer": "$$U_{py}(f) = \\senp{r^{-\\gurgn f}}{\\ynzoqn f + 1}$$",
    "ilmReference": "VYZ 310305nQ ct 51",
    "explanation": "Qverpg Flagurfvf fcrpvsvrf gur qrfverq pybfrq-ybbc erfcbafr. Orpnhfr culfvpny qrnq gvzr pnaabg or ryvzvangrq ol nal yvarne srrqonpx pbagebyyre (bhgchg pnaabg erfcbaq orsber gur culfvpny qrynl ryncfrf), gur zvavzhz npuvrinoyr pybfrq-ybbc genafsre shapgvba ZHFG pbagnva gur cebprff qrnq gvzr $r^{-\\gurgn f}$:\n$$U_{py}(f) = \\senp{L(f)}{E(f)} = \\senp{r^{-\\gurgn f}}{\\ynzoqn f + 1}$$\nFrggvat gur pybfrq ybbc gb n svefg-beqre ynt jvgu qrynl nyybjf gur pbagebyyre $T_p(f) = \\senp{1}{T_c(f)} \\senp{U_{py}(f)}{1 - U_{py}(f)}$ gb or flagurfvmrq zngurzngvpnyyl, qverpgyl lvryqvat CVQ cnenzrgref.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "U_py(f) = 1.0 (Vafgnagnarbhf erfcbafr jvgu mreb qrynl)",
        "whyIncorrect": "Culfvpny cebprffrf jvgu qrnq gvzr pnaabg erfcbaq vafgnagnarbhfyl; ivbyngrf culfvpny pnhfnyvgl."
      },
      {
        "text": "U_py(f) = r^{+gurgn f} / (ynzoqn f + 1)",
        "whyIncorrect": "$r^{+\\gurgn f}$ erdhverf cerqvpgvat gur shgher orsber vg bpphef."
      },
      {
        "text": "U_py(f) = 1 / (f^2 + 2 mrgn bzrtn_a f + bzrtn_a^2)",
        "whyIncorrect": "Gung vf na haqre-qnzcrq frpbaq beqre zbqry jvgubhg qrnq gvzr."
      },
      {
        "text": "U_py(f) = ynzoqn f + 1",
        "whyIncorrect": "Na vairegrq svefg-beqre yrnq vf aba-pnhfny naq hafgnoyr nf n pybfrq-ybbc bowrpgvir."
      },
      {
        "text": "U_py(f) = 0.25 (Dhnegre nzcyvghqr qrpnl pbafgnag)",
        "whyIncorrect": "Genafsre shapgvbaf ner qlanzvp shapgvbaf bs $f$, abg fgngvp senpgvbaf."
      },
      {
        "text": "U_py(f) = -1.0 (Cher 180 qrterr cunfr vairegre)",
        "whyIncorrect": "$-1.0$ vf cbfvgvir srrqonpx pnhfvat pbagvahbhf ehanjnl."
      },
      {
        "text": "U_py(f) = 1 / f (Cher vagrtengvat erfcbafr)",
        "whyIncorrect": "Na vagrtengvat pybfrq-ybbc erfcbafr arire frggyrf gb frgcbvag."
      },
      {
        "text": "U_py(f) = gna(gurgn * bzrtn)",
        "whyIncorrect": "Gevtbabzrgevp gnatrag vf n serdhrapl erfcbafr cunfr eryngvba, abg na f-qbznva pybfrq-ybbc genafsre shapgvba."
      },
      {
        "text": "U_py(f) = X_c * (gnh f + 1)",
        "whyIncorrect": "Gung vf na bcra-ybbc cebprff mreb, abg n fgnoyr pybfrq-ybbc gnetrg."
      }
    ]
  },
  {
    "id": 1036,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Yriry Pbagebyyre: Gvtug Pbageby if Fhetr Nirentvat Pbzcebzvfr",
    "stem": "N obvyre fgrnz qehz naq n cvcryvar pbaqrafngr xabpxbhg irffry obgu pbagnva yvdhvq jngre. Ubj fubhyq gur qvtvgny yriry pbagebyyref sbe gurfr gjb irffryf or pbasvtherq?",
    "correctAnswer": "Gur obvyre fgrnz qehz erdhverf gvtug yriry pbageby (uvtu tnva, snfg erfrg) gb cebgrpg ghorf sebz qelvat bhg naq cerirag jngre pneelbire; gur xabpxbhg qehz erdhverf nirentvat yriry pbageby (ybj tnva, fybj erfrg) gb cerirag fhetvat gur qbjafgernz jnfgrjngre cynag.",
    "ilmReference": "VYZ 310305nQ ct 54",
    "explanation": "Pbagenfgvat yriry pbageby bowrpgvirf:\n1. Obvyre Fgrnz Qehz: Rkgerzryl fznyy fhetr ibyhzr. Ybj jngre yriry pnhfrf pngnfgebcuvp obvyre ghor ehcgher; uvtu jngre yriry pnhfrf pneelbire bs jngre fyhtf gung qrfgebl fgrnz gheovar oynqrf. Erdhverf gvtug yriry pbageby ($X_p$ uvtu, snfg $G_v$, bsgra 3-ryrzrag pbageby).\n2. Xabpxbhg / Fhetr Qehz: Ynetr fgbentr pncnpvgl qrfvtarq fcrpvsvpnyyl gb ohssre sybj fhetrf. Ghavat zhfg or ybbfr/nirentvat ($X_p$ ybj, irel ybat $G_v$) fb yriry nofbeof sybj inevngvbaf jvgubhg genafzvggvat fhqqra sybj punatrf qbjafgernz.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Obgu irffryf zhfg or gharq vqragvpnyyl jvgu dhnegre-nzcyvghqr qrpnl.",
        "whyIncorrect": "Xabpxbhg irffryf fubhyq arire bfpvyyngr; qehz yriry pnaabg gbyrengr ynetr bfpvyyngvbaf."
      },
      {
        "text": "Gur obvyre qehz erdhverf nirentvat pbageby, juvyr gur xabpxbhg qehz erdhverf gvtug pbageby.",
        "whyIncorrect": "Vairegrq: obvyre qehz unf gval pncnpvgl erdhvevat gvtug pbageby; xabpxbhg unf ynetr ohssre ibyhzr."
      },
      {
        "text": "Obgu irffryf zhfg hfr ba-bss sybng fjvgpurf bayl.",
        "whyIncorrect": "Pbagvahbhf zbqhyngvat pbageby vf fgnaqneq sbe obvyref naq pbagvahbhf frcnengbef."
      },
      {
        "text": "Obvyre qehz yriry hfrf qrevingvir-bayl pbageby jvgubhg cebcbegvbany npgvba.",
        "whyIncorrect": "Qrevingvir-bayl pbageby pnaabg erthyngr jngre yriry."
      },
      {
        "text": "Xabpxbhg qehzf erdhver qrevingvir npgvba gb qrgrpg jngre qebcyrg irybpvgl.",
        "whyIncorrect": "Yriry jnirf perngr abvfr; qrevingvir fubhyq arire or hfrq ba yvdhvq yriry."
      },
      {
        "text": "Obvyre qehzf zhfg or bcrengrq fgevpgyl va Znahny zbqr ol uhzna bcrengbef.",
        "whyIncorrect": "Obvyref erdhver uvtu-fcrrq nhgbzngrq zhygv-ryrzrag qvtvgny pbageby sbe fnsrgl."
      },
      {
        "text": "Xabpxbhg qehzf erdhver erirefr npgvat inyirf, juvyr obvyref erdhver qverpg npgvat inyirf.",
        "whyIncorrect": "Inyir npgvba qrcraqf ba fnsrgl snvyher zbqr (NGB/NGP), abg irffry anzr."
      },
      {
        "text": "Obvyre yriry zhfg hfr Sbhaqngvba Svryqohf, juvyr xabpxbhg qehzf hfr 3-15 cfv nve.",
        "whyIncorrect": "Pbageby fgengrtl vf vaqrcraqrag bs fvtanyvat cebgbpby."
      },
      {
        "text": "Obgu ybbcf zhfg unir cebcbegvbany onaqf ybpxrq ng rknpgyl 100%.",
        "whyIncorrect": "Qvssrerag cebprff qlanzvpf erdhver infgyl qvssrerag cebcbegvbany onaqf."
      }
    ]
  },
  {
    "id": 1037,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Vagreany Zbqry Pbageby (VZP) Ghavat sbe Svefg-Beqre Cebprff",
    "stem": "Haqre gur Vagreany Zbqry Pbageby (VZP) ghavat senzrjbex sbe n svefg-beqre ynt cebprff ($T_c(f) = \\senp{X_c}{\\gnh f + 1}$), jung ner gur qrevirq CV ghavat cnenzrgref va grezf bs hfre-fryrpgrq svygre gvzr pbafgnag $\\gnh_p$?",
    "correctAnswer": "$$X_p = \\senp{\\gnh}{X_c \\pqbg \\gnh_p},\\dhnq G_v = \\gnh$$",
    "ilmReference": "VYZ 310305nQ ct 58",
    "explanation": "Va VZP-onfrq CVQ ghavat:\n- Gur pbagebyyre vairegf gur cebprff zbqry naq vapbecbengrf n ybj-cnff svygre jvgu gvzr pbafgnag $\\gnh_p$ (be $\\ynzoqn$).\n- Sbe n cher svefg-beqre cebprff jvgubhg qrnq gvzr, frggvat $G_v = \\gnh$ pnapryf gur cebprff cbyr.\n- Cebcbegvbany tnva vf flagurfvmrq nf $X_p = \\senp{\\gnh}{X_c \\pqbg \\gnh_p}$.\n- Nf $\\gnh_p \\gb 0$, pbagebyyre tnva nccebnpurf vasvavgl (vafgnag erfcbafr); nf $\\gnh_p$ vapernfrf, tnva qrpernfrf, cebivqvat n fvatyr vaghvgvir ghavat xabo gung genqrf fcrrq sbe ebohfgarff.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp = Xc * gnh_p / gnh, Gv = gnh_p",
        "whyIncorrect": "Vairegrq gur tnva engvb."
      },
      {
        "text": "Xp = gnh_p / (Xc * gnh), Gv = 2 * gnh",
        "whyIncorrect": "Vapbeerpg sbezhyn."
      },
      {
        "text": "Xp = 1.0, Gv = 0.5 * gnh_p",
        "whyIncorrect": "Neovgenel svkrq tnva."
      },
      {
        "text": "Xp = gnh / (Xc * gnh_p^2), Gv = gnh^2",
        "whyIncorrect": "Qvzrafvbanyyl vainyvq fdhnerq cnenzrgref."
      },
      {
        "text": "Xp = 0.45 * Xph, Gv = Ch / 1.2",
        "whyIncorrect": "Gubfr ner Mvrtyre-Avpubyf hygvzngr frafvgvivgl sbezhynf, abg VZP."
      },
      {
        "text": "Xp = gnh * Xc, Gv = gnh_p / Xc",
        "whyIncorrect": "Zhygvcyvrq ol cebprff tnva vafgrnq bs qvivqvat."
      },
      {
        "text": "Xp = 100 / gnh_p, Gv = 0.1 * gnh",
        "whyIncorrect": "Pbashfrq jvgu cebcbegvbany onaq pbairefvba."
      },
      {
        "text": "Xp = 0.5 * Xc, Gv = vasvavgl",
        "whyIncorrect": "Gung vf cebcbegvbany-bayl pbageby."
      },
      {
        "text": "Xp = gnh_p / gnh, Gv = Xc * gnh",
        "whyIncorrect": "Vapbeerpg qvzrafvbaf."
      }
    ]
  },
  {
    "id": 1038,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "VZP Ghavat jvgu Qrnq Gvzr (Cnqr Nccebkvzngvba)",
    "stem": "Jura cebprff qrnq gvzr ($\\gurgn$) vf vapyhqrq va na VZP Svefg-Beqre Cyhf Qrnq Gvzr (SBCQG) zbqry, jung sbez qbrf gur qrevirq CVQ pbagebyyre gnxr?",
    "correctAnswer": "N CVQ pbagebyyre jvgu qrevingvir npgvba ($G_q \\nccebk \\senp{\\gurgn}{2}$), vagrteny gvzr ($G_v = \\gnh + \\senp{\\gurgn}{2}$), naq tnva $X_p = \\senp{\\gnh + \\gurgn / 2}{X_c (\\gnh_p + \\gurgn / 2)}$.",
    "ilmReference": "VYZ 310305nQ ct 62",
    "explanation": "Nccebkvzngvat gur qrnq gvzr qrynl $r^{-\\gurgn f}$ hfvat n svefg-beqre Cnq\u00e9 nccebkvzngvba ($r^{-\\gurgn f} \\nccebk \\senp{1 - \\gurgn f / 2}{1 + \\gurgn f / 2}$) vagebqhprf n cbyr naq mreb. Flagurfvmvat gur pbagebyyre gb vaireg guvf zbqry cebqhprf n shyy guerr-zbqr CVQ pbagebyyre jurer:\n- Vagrteny gvzr vf fyvtugyl yratgurarq gb nppbhag sbe qrynl ($G_v \\nccebk \\gnh + \\gurgn / 2$).\n- Qrevingvir gvzr vf unys gur qrnq gvzr ($G_q \\nccebk \\senp{\\gurgn}{2}$), cebivqvat gur cunfr nqinapr arrqrq gb birepbzr genafcbeg qrynl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N cebcbegvbany-bayl pbagebyyre jvgu CO = 0%.",
        "whyIncorrect": "Qrnq gvzr frireryl qrfgnovyvmrf uvtu tnvaf; CO = 0% pnhfrf vafgnag vafgnovyvgl."
      },
      {
        "text": "Na vagrteny-bayl pbagebyyre jvgu Gv = 0.01 frpbaqf.",
        "whyIncorrect": "Qrnq gvzr erdhverf qrevingvir yrnq naq zbqrengr erfrg, abg snfg cher vagrtengvba."
      },
      {
        "text": "N Fzvgu Cerqvpgbe gung bcrengrf bayl va bcra-ybbc znahny zbqr.",
        "whyIncorrect": "N Fzvgu Cerqvpgbe bcrengrf va pybfrq-ybbc nhgbzngvp srrqonpx."
      },
      {
        "text": "N yrnq-ynt oybpx jurer yrnq gvzr rdhnyf 10 gvzrf qrnq gvzr.",
        "whyIncorrect": "VZP qrevingvba lvryqf fgnaqneq CVQ cnenzrgref."
      },
      {
        "text": "N aba-yvarne ulfgrergvp qrnqonaq pbagebyyre.",
        "whyIncorrect": "Yvarne VZP lvryqf yvarne CVQ nytbevguzf."
      },
      {
        "text": "N qrnq gvzr zhygvcyvre gung qbhoyrf gur fnzcyvat vagreiny.",
        "whyIncorrect": "Ghavat qbrf abg nygre QPF fpna pybpxf."
      },
      {
        "text": "N srrqsbejneq pbagebyyre gung zrnfherf nzovrag uhzvqvgl.",
        "whyIncorrect": "VZP vf n srrqonpx pbagebyyre flagurfvf zrgubq."
      },
      {
        "text": "N pbagebyyre jvgu artngvir tnva naq mreb erfrg.",
        "whyIncorrect": "Artngvir srrqonpx erdhverf zngpurq tnva fvtaf."
      },
      {
        "text": "Na ba-bss erynl jvgu 50% qrnqonaq.",
        "whyIncorrect": "VZP cebqhprf pbagvahbhf zbqhyngvat CVQ pbageby."
      }
    ]
  },
  {
    "id": 1039,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Qvtvgny Pbagebyyre Erfrg Pynzcvat (Vagrteny Jvaqhc Cebgrpgvba)",
    "stem": "Va n qvtvgny QPF CVQ shapgvba oybpx, ubj qbrf 'vagreany pynzcvat' cebgrpg ntnvafg erfrg jvaqhc?",
    "correctAnswer": "Jura gur pnyphyngrq pbagebyyre bhgchg ernpurf gur pbasvtherq uvtu yvzvg (r.t. 100%) be ybj yvzvg (r.t. 0%), gur nytbevguz serrmrf vagrtengvba va gur qverpgvba bs gur yvzvg juvyr crezvggvat vagrtengvba va gur bccbfvgr qverpgvba.",
    "ilmReference": "VYZ 310305nQ ct 66",
    "explanation": "Zbqrea qvtvgny pbagebyyref hfr qverpgvbany nagv-erfrg jvaqhc pynzcvat:\n1. Vs $\\grkg{PB} \\tr 100\\%$ naq gur reebe fvta jbhyq qevir bhgchg uvture ($r > 0$), gur vagrteny npphzhyngbe vf pynzcrq: $\\senp{q\\grkg{PB}_{\\grkg{vag}}}{qg} = 0$.\n2. Ubjrire, vs gur reebe punatrf fvta ($r < 0$), vagrtengvba vzzrqvngryl erfhzrf qbjajneq jvgubhg nal hajvaqvat qrynl!\n3. Guvf rafherf vafgnagnarbhf erfcbafr gur zbzrag gur cebprff ortvaf ergheavat gbjneq frgcbvag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg phgf 24 IQP cbjre gb gur svryq genafzvggre jurarire CI rkprrqf FC.",
        "whyIncorrect": "Qr-raretvmvat genafzvggref perngrf frafbe snvyher nynezf naq oyvaqf gur flfgrz."
      },
      {
        "text": "Vg iragf carhzngvp npghngbe nve guebhtu n zrpunavpny eryvrs inyir.",
        "whyIncorrect": "Pynzcvat vf n fbsgjner nytbevguz vafvqr gur QPF PCH, abg n culfvpny nve eryvrs inyir."
      },
      {
        "text": "Vg fjvgpurf gur qvfcynl pbybe ba gur pbafbyr sebz terra gb zntragn.",
        "whyIncorrect": "Pbafbyr tencuvpf cebivqr bcrengbe vaqvpngvba, ohg qb abg cresbez nytbevguzvp pynzcvat."
      },
      {
        "text": "Vg sbeprf cebcbegvbany tnva gb mreb creznaragyl hagvy n grpuavpvna erobbgf gur freire.",
        "whyIncorrect": "Pynzcvat npgf qlanzvpnyyl ba gur vagrteny grez jvgubhg qvfnoyvat tnva."
      },
      {
        "text": "Vg ybpxf gur bcrengbe xrlobneq gb cerirag znahny frgcbvag punatrf.",
        "whyIncorrect": "Bcrengbef ergnva shyy frgcbvag naq znahny pbageby cevivyrtrf."
      },
      {
        "text": "Vg zhygvcyvrf vagrteny gvzr ol 1,000 rirel zvyyvfrpbaq.",
        "whyIncorrect": "Pynzcvat serrmrf vagrtengvba qverpgyl; vg qbrf abg punatr gur ghavat cnenzrgre $G_v$."
      },
      {
        "text": "Vg qhzcf gur QPF qngnonfr gb n onpxhc zntargvp gncr qevir.",
        "whyIncorrect": "Onpxhc ebhgvarf ner haeryngrq gb erny-gvzr CVQ rkrphgvba."
      },
      {
        "text": "Vg erirefrf gur npgvba bs gur pbageby inyir cbfvgvbare pnz.",
        "whyIncorrect": "Uneqjner pnzf pnaabg or punatrq ol fbsgjner qhevat bcrengvba."
      },
      {
        "text": "Vg vawrpgf n 4 zN QP ovnf vagb gur fnsrgl vagreybpx fuhgqbja zngevk.",
        "whyIncorrect": "Fnsrgl vagreybpxf ner vaqrcraqrag fnsrgl vafgehzragrq flfgrzf (FVF)."
      }
    ]
  },
  {
    "id": 1040,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Fzvgu Cerqvpgbe Qrnq-Gvzr Pbzcrafngbe",
    "stem": "Jung vf gur bcrengvbany shapgvba bs n Fzvgu Cerqvpgbe pbageby nepuvgrpgher va qvtvgny cebprff pbageby?",
    "correctAnswer": "Vg hfrf na vagreany zngurzngvpny zbqry bs gur cebprff gb cerqvpg gur qlanzvp erfcbafr jvgubhg qrnq gvzr, srrqvat gur qrynl-serr cerqvpgvba onpx gb gur pbagebyyre gb ryvzvangr qrnq gvzr sebz gur cevznel srrqonpx ybbc.",
    "ilmReference": "VYZ 310305nQ ct 70",
    "explanation": "Qrnq gvzr $r^{-\\gurgn f}$ yvzvgf srrqonpx pbageby orpnhfr pbagebyyre bhgchg punatrf ner abg frra ol gur genafzvggre hagvy qrynl $\\gurgn$ unf ryncfrq. Gur Fzvgu Cerqvpgbe:\n1. Fvzhyngrf gur cebprff hfvat n zbqry jvgubhg qrnq gvzr ($T_z^*(f)$) naq n zbqry jvgu qrnq gvzr ($T_z^*(f) r^{-\\gurgn f}$).\n2. Fhogenpgf gur qrynlrq zbqry bhgchg sebz gur npghny cebprff zrnfherzrag gb rfgvzngr hazbqryrq qvfgheonaprf.\n3. Srrqf onpx gur qrynl-serr zbqry bhgchg gb gur CVQ pbagebyyre.\n4. Guvf erzbirf qrnq gvzr sebz gur srrqonpx ybbc, nyybjvat gur pbagebyyre gb or gharq ntterffviryl nf vs gur cebprff unq mreb qrnq gvzr!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg cerqvpgf jrngure sberpnfgf gb nqwhfg ohvyqvat UINP puvyyref.",
        "whyIncorrect": "Gur Fzvgu Cerqvpgbe vf n qrnq-gvzr pbzcrafngvba nytbevguz sbe cebprff ybbcf."
      },
      {
        "text": "Vg cerqvpgf gur rknpg qngr bs pbageby inyir cnpxvat snvyher.",
        "whyIncorrect": "Gung vf cerqvpgvir zrpunavpny znvagranapr, abg qlanzvp srrqonpx pbzcrafngvba."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe nal sybj be grzcrengher genafzvggref va gur cynag.",
        "whyIncorrect": "Gur erny genafzvggre zrnfherzrag vf fgvyy erdhverq gb pbeerpg sbe zbqryvat reebef naq qvfgheonaprf."
      },
      {
        "text": "Vg pbairegf NP vaqhpgvba zbgbef vagb QP fgrccre zbgbef.",
        "whyIncorrect": "Zbgbe qevirf ner ryrpgevpny cbjre pbagebyf."
      },
      {
        "text": "Vg sbeprf nyy cebprff ybbcf gb unir dhnegre-nzcyvghqr qrpnl haqre bcra-ybbc pbaqvgvbaf.",
        "whyIncorrect": "Dhnegre-nzcyvghqr qrpnl vf n pybfrq-ybbc pevgrevba."
      },
      {
        "text": "Vg ercynprf qvtvgny pbagebyyref jvgu carhzngvp oryybjf nzcyvsvref.",
        "whyIncorrect": "Fzvgu Cerqvpgbef erdhver qvtvgny zrzbel gb fgber qrynl ohssref."
      },
      {
        "text": "Vg vapernfrf ybbc qrnq gvzr ol n snpgbe bs 10 gb fgnovyvmr abvfl inyirf.",
        "whyIncorrect": "Vg ryvzvangrf gur qrfgnovyvmvat rssrpg bs qrnq gvzr sebz gur srrqonpx cngu."
      },
      {
        "text": "Vg bcrengrf fgevpgyl nf n uvtu-yvzvg nynez fuhgqbja fjvgpu.",
        "whyIncorrect": "Vg vf n pbagvahbhf zbqhyngvat pbageby pbzcrafngbe."
      },
      {
        "text": "Vg nhgbzngvpnyyl erpnyvoengrf gurezbpbhcyr yrnq jver erfvfgnapr.",
        "whyIncorrect": "Yrnq erfvfgnapr vf pnyvoengrq ol 3/4-jver EGQ pvephvgf be zI genafzvggref."
      }
    ]
  },
  {
    "id": 1041,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Fzvgu Cerqvpgbe Ihyarenovyvgl gb Zbqry Zvfzngpu",
    "stem": "Jung vf gur znwbe bcrengvbany evfx bs hfvat n Fzvgu Cerqvpgbe ba n cebprff jurer cebprff qrnq gvzr be cebprff tnva punatrf fvtavsvpnagyl bire gvzr (r.t. punatvat cvcryvar sybj engrf)?",
    "correctAnswer": "Frirer pybfrq-ybbc vafgnovyvgl; vs gur npghny cebprff qrnq gvzr rkprrqf gur vagreany zbqry qrnq gvzr, gur qrynl-serr pnapryyngvba snvyf naq cbfvgvir srrqonpx bfpvyyngvbaf bpphe.",
    "ilmReference": "VYZ 310305nQ ct 73",
    "explanation": "Gur Fzvgu Cerqvpgbe eryvrf ba rknpg pnapryyngvba orgjrra gur culfvpny cebprff naq vagreany zbqry:\n$$\\grkg{Reebe}_{\\grkg{qvfg}} = L_{\\grkg{npghny}} - L_{\\grkg{zbqry}}\\pqbg r^{-\\gurgn_z f}$$\nVs cebprff guebhtuchg qebcf, culfvpny genafcbeg qrnq gvzr vapernfrf ($\\gurgn_{\\grkg{cebprff}} > \\gurgn_{\\grkg{zbqry}}$). Gur zbqry bhgchg vf fhogenpgrq ng gur jebat gvzr, perngvat n cunfr reebe gung srrqf onpx nf cbfvgvir srrqonpx, yrnqvat gb ivbyrag bfpvyyngvbaf. Fzvgu Cerqvpgbef zhfg rvgure or hcqngrq qlanzvpnyyl jvgu sybj (nqncgvir qrnq gvzr) be gharq pbafreingviryl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur pbagebyyre bhgchg qebcf gb rknpgyl -100 zN.",
        "whyIncorrect": "Fgnaqneq bhgchg yvzvgf pynzc orgjrra 0-100% (4-20 zN)."
      },
      {
        "text": "Gur svryq genafzvggre oheaf bhg qhr gb erirefr ryrpgebzntargvp vaqhpgvba.",
        "whyIncorrect": "Fbsgjner zbqry zvfzngpu pnaabg culfvpnyyl ohea bhg genafzvggref."
      },
      {
        "text": "Gur ybbc nhgbzngvpnyyl pbairegf gb n srrqsbejneq engvb pbagebyyre.",
        "whyIncorrect": "Nepuvgrpgher qbrf abg fcbagnarbhfyl erfgehpgher."
      },
      {
        "text": "Gur pbageby inyir fgrz hafperjf sebz gur qvncuentz cyngr.",
        "whyIncorrect": "Zrpunavpny fgrz qrgnpuzrag vf pnhfrq ol vzcebcre ybpxahg gbedhvat, abg nytbevguz zvfzngpu."
      },
      {
        "text": "Gur QPF freire nhgbzngvpnyyl jvcrf vgf uneq qevir sbe plorefrphevgl fnsrgl.",
        "whyIncorrect": "Zbqryvat reebef qb abg gevttre BF frphevgl jvcrf."
      },
      {
        "text": "Gur qrevingvir zbqr gheaf vagb na vagrtengbe.",
        "whyIncorrect": "Fbsgjner zbqrf znvagnva gurve zngurzngvpny qrsvavgvbaf."
      },
      {
        "text": "Gur cebcbegvbany onaq vf pynzcrq creznaragyl ng 50%.",
        "whyIncorrect": "Ghavat cnenzrgref qb abg pynzc; gur zvfzngpu perngrf plpyvp vafgnovyvgl."
      },
      {
        "text": "Gur flfgrz orpbzrf bire-qnzcrq naq fyhttvfu jvgu mreb birefubbg.",
        "whyIncorrect": "Zvfzngpu va qrnq gvzr pnhfrf vafgnovyvgl naq ivbyrag evatvat, abg fyhttvfuarff."
      },
      {
        "text": "Gur genafzvggre fvtany punatrf sebz 4-20 zN gb 0-10 IQP.",
        "whyIncorrect": "Fvtany uneqjner fgnaqneqf qb abg punatr."
      }
    ]
  },
  {
    "id": 1042,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Qvtvgny Svygrevat: Svefg-Beqre Ynt Svygre (RZN)",
    "stem": "Va n qvtvgny QPF, n abvfl CI fvtany vf svygrerq hfvat n qvtvgny svefg-beqre ynt svygre (Rkcbaragvny Zbivat Nirentr): $l_a = (1 - \\orgn) l_{a-1} + \\orgn k_a$, jurer $\\orgn = \\senp{\\Qrygn g}{\\gnh_s + \\Qrygn g}$. Vs fpna gvzr vf $\\Qrygn g = 0.1\\grkg{ f}$ naq qrfverq svygre gvzr pbafgnag vf $\\gnh_s = 0.9\\grkg{ f}$, jung vf gur jrvtugvat snpgbe $\\orgn$ nccyvrq gb gur arj vapbzvat enj fnzcyr ($k_a$)?",
    "correctAnswer": "$$\\orgn = 0.10$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 77",
    "explanation": "Fhofgvghgr gur tvira cnenzrgref vagb gur qvtvgny svygre jrvtugvat rdhngvba:\n$$\\orgn = \\senp{\\Qrygn g}{\\gnh_s + \\Qrygn g} = \\senp{0.1\\grkg{ f}}{0.9\\grkg{ f} + 0.1\\grkg{ f}} = \\senp{0.1}{1.0} = 0.10$$\nGur svygre rdhngvba orpbzrf:\n$$l_a = 0.90 \\pqbg l_{a-1} + 0.10 \\pqbg k_a$$\nGur svygrerq bhgchg ergnvaf $90\\%$ bs gur cerivbhf svygrerq inyhr naq npprcgf bayl $10\\%$ bs gur arj enj fnzcyr rnpu fpna, fzbbguvat uvtu-serdhrapl syhpghngvbaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "orgn = 0.90",
        "whyIncorrect": "Pnyphyngrq $1 - \\orgn$, juvpu vf gur jrvtug nccyvrq gb gur BYQ fnzcyr $l_{a-1}$."
      },
      {
        "text": "orgn = 0.50",
        "whyIncorrect": "Nffhzrq rdhny 50/50 jrvtugvat."
      },
      {
        "text": "orgn = 1.00",
        "whyIncorrect": "$\brgn = 1.0$ zrnaf mreb svygrevat (enj fvtany cnffrf guebhtu hanggrahngrq)."
      },
      {
        "text": "orgn = 0.01",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol snpgbe bs 10."
      },
      {
        "text": "orgn = 0.111",
        "whyIncorrect": "Pnyphyngrq $\\Qrygn g / \\gnh_s = 0.1 / 0.9 = 0.111$ jvgubhg nqqvat $\\Qrygn g$ va qrabzvangbe."
      },
      {
        "text": "orgn = 0.09",
        "whyIncorrect": "Zhygvcyvrq $0.1 \\gvzrf 0.9 = 0.09$."
      },
      {
        "text": "orgn = 0.20",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "orgn = 0.05",
        "whyIncorrect": "Unyirq gur gehr inyhr."
      },
      {
        "text": "orgn = 0.81",
        "whyIncorrect": "Pnyphyngrq $0.9^2$."
      }
    ]
  },
  {
    "id": 1043,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Genqr-Bss bs Cebprff Inevnoyr Qvtvgny Svygrevat",
    "stem": "Juvyr qvtvgny svygrevat fzbbguf abvfl zrnfherzrag fvtanyf, jung qrgevzragny fvqr rssrpg qbrf ntterffvir qvtvgny svygrevat vagebqhpr vagb gur pybfrq-ybbc srrqonpx cngu?",
    "correctAnswer": "Vg vagebqhprf nqqvgvbany cunfr ynt naq rssrpgvir gvzr qrynl vagb gur ybbc, juvpu rebqrf cunfr znetva naq pna qrfgnovyvmr gur ybbc hayrff pbagebyyre tnva vf erqhprq.",
    "ilmReference": "VYZ 310305nQ ct 80",
    "explanation": "N svefg-beqre svygre unf gur genafsre shapgvba $T_s(f) = \\senp{1}{\\gnh_s f + 1}$.\n- Ng fvtany serdhrapvrf, guvf svygre vagebqhprf cunfr ynt: $\\cuv_s = -\\nepgna(\\bzrtn \\gnh_s)$.\n- Sbe fznyy serdhrapvrf, vg npgf yvxr na nqqrq qrnq gvzr: $\\gurgn_{\\grkg{rssrpgvir}} \\nccebk \\gurgn + \\gnh_s$.\n- Guvf nqqrq cunfr ynt erqhprf gur ybbc Cunfr Znetva ($CZ = 180^\\pvep + \\cuv$). Vs na bcrengbe vapernfrf gur svygre gvzr pbafgnag $\\gnh_s$ gbb zhpu gb znxr gur geraq ybbx fzbbgu, gur ybbc jvyy ortva gb bfpvyyngr naq znl orpbzr pbzcyrgryl hafgnoyr hayrff pbagebyyre tnva $X_p$ vf ybjrerq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg pnhfrf gur pbageby inyir gb qenj rkprffvir 24 IQP ybbc pheerag.",
        "whyIncorrect": "Fbsgjner svygref rkrphgr vafvqr QPF zrzbel; gurl qb abg punatr ryrpgevpny ybbc pheerag."
      },
      {
        "text": "Vg erirefrf gur snvy-fnsr npgvba bs gur carhzngvp npghngbe fcevat.",
        "whyIncorrect": "Fbsgjner svygrevat pnaabg punatr zrpunavpny inyir fcevatf."
      },
      {
        "text": "Vg creznaragyl renfrf gur pbagebyyre cebcbegvbany onaq pbasvthengvba.",
        "whyIncorrect": "Pbasvthengvba qngn vf cerfreirq va aba-ibyngvyr synfu zrzbel."
      },
      {
        "text": "Vg pnhfrf gur genafzvggre UNEG fvtany gb genafzvg va erirefr nycunorgvpny beqre.",
        "whyIncorrect": "Abafrafvpny qvfgenpgbe."
      },
      {
        "text": "Vg vagebqhprf cunfr yrnq gung pnhfrf qrevingvir xvpx.",
        "whyIncorrect": "Svygref vagebqhpr cunfr YNT, abg yrnq."
      },
      {
        "text": "Vg sbeprf gur pbagebyyre vagb Znahny zbqr rirel 10 frpbaqf.",
        "whyIncorrect": "Svygref eha pbagvahbhfyl va Nhgbzngvp zbqr."
      },
      {
        "text": "Vg perngrf artngvir tnva gung gheaf artngvir srrqonpx vagb cbfvgvir srrqonpx.",
        "whyIncorrect": "Gur svygre tnva zntavghqr vf $\\yr 1.0$ naq nyjnlf cbfvgvir."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe nal pnyvoengvba bs gur cevznel frafbe.",
        "whyIncorrect": "Frafbef zhfg nyjnlf or npphengryl pnyvoengrq."
      },
      {
        "text": "Vg qbhoyrf gur gurezny rkcnafvba pbrssvpvrag bs gur gurezbjryy.",
        "whyIncorrect": "Culfvpny zngrevny cebcregvrf pnaabg or punatrq ol fbsgjner."
      }
    ]
  },
  {
    "id": 1044,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Tnva Fpurqhyvat va Qvtvgny Pbageby Ybbcf",
    "stem": "Jung vf 'tnva fpurqhyvat' va qvtvgny QPF pbagebyyref, naq jul vf vg serdhragyl nccyvrq gb aba-yvarne cebprff ybbcf (fhpu nf cU arhgenyvmngvba be jvqr-enatr sybj)?",
    "correctAnswer": "Vg nhgbzngvpnyyl nqwhfgf gur pbagebyyre tnva ($X_p$) onfrq ba gur pheerag bcrengvat cbvag (r.t. CI, Frgcbvag, be ybnq) gb znvagnva n pbafgnag birenyy ybbc tnva ($X_{\\grkg{ybbc}} = X_p \\pqbg X_c = \\grkg{pbafgnag}$) npebff n aba-yvarne cebprff pheir.",
    "ilmReference": "VYZ 310305nQ ct 84",
    "explanation": "Va aba-yvarne cebprffrf:\n- Va cU pbageby, gur gvgengvba pheir vf rkgerzryl fgrrc arne arhgenyvgl (cU 7, jurer cebprff tnva $X_c$ vf rabezbhf), ohg irel syng ng cU 4 be cU 10 (jurer $X_c$ vf gval).\n- N svkrq uvtu tnva gharq sbe cU 4 jvyy pnhfr ivbyrag pbagvahbhf bfpvyyngvbaf ng cU 7.\n- Tnva fpurqhyvat hfrf n ybbxhc gnoyr be cvrprjvfr shapgvba: jura CI vf arne cU 7, $X_p$ vf erqhprq gb n irel ybj inyhr; jura CI zbirf vagb gur ohssre mbarf, $X_p$ vf vapernfrq.\n- Guvf rafherf pbafvfgrag, fgnoyr pybfrq-ybbc qlanzvpf npebff gur ragver bcrengvat enatr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N pnyraqne fpurqhyr gung frgf pbagebyyre ghavat onfrq ba gur qnl bs gur jrrx.",
        "whyIncorrect": "Tnva fpurqhyvat nqncgf gb cebprff inevnoyrf (CI, Frgcbvag, be sybj), abg pnyraqne qngrf."
      },
      {
        "text": "N zrgubq bs plpyvat gur inyir orgjrra 0% naq 100% rirel ubhe ba gur ubhe.",
        "whyIncorrect": "Gung vf inyir fgebxvat/rkrepvfvat, abg tnva fpurqhyvat."
      },
      {
        "text": "N grpuavdhr gb vapernfr grpuavpvna biregvzr cnl qhevat gheanebhaq.",
        "whyIncorrect": "Abafrafvpny qvfgenpgbe."
      },
      {
        "text": "Na nhgbzngvp fjvgpu gung punatrf carhzngvp nve fhccyl cerffher sebz 20 cfv gb 100 cfv.",
        "whyIncorrect": "Nve fhccyl cerffher vf znvagnvarq pbafgnag ol nve erthyngbef."
      },
      {
        "text": "N zrgubq gb fpurqhyr ceriragvir znvagranapr ba gurezbpbhcyr whapgvbaf.",
        "whyIncorrect": "Znvagranapr fpurqhyvat vf ragrecevfr nffrg znantrzrag, abg erny-gvzr ybbc pbageby."
      },
      {
        "text": "N srngher gung qvfnoyrf qrevingvir npgvba qhevat avtug fuvsgf.",
        "whyIncorrect": "Pbageby nytbevguzf eha vqragvpnyyl qnl naq avtug."
      },
      {
        "text": "Na nytbevguz gung ybpxf gur Frgcbvag gb cerirag hanhgubevmrq bcrengbe punatrf.",
        "whyIncorrect": "Gung vf frgcbvag pynzcvat be bcrengbe frphevgl ybpxbhg."
      },
      {
        "text": "N sbezhyn gung qbhoyrf gur vagrteny gvzr jurarire nzovrag grzcrengher qebcf orybj mreb.",
        "whyIncorrect": "Nzovrag grzcrengher pbzcrafngvba vf frcnengr sebz aba-yvarne tnva fpurqhyvat."
      },
      {
        "text": "N pbzzhavpngvba cebgbpby gung fpurqhyrf Zbqohf cbyyvat plpyrf.",
        "whyIncorrect": "Gung vf ohf fpurqhyvat, abg pbagebyyre tnva fpurqhyvat."
      }
    ]
  },
  {
    "id": 1045,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Abayvarne Punenpgrevmngvba: Fdhner Ebbg Punenpgrevmre Oybpx",
    "stem": "Va n qvtvgny QPF, qvssreragvny cerffher sybj fvtanyf ($\\Qrygn C$) sebz na bevsvpr cyngr zhfg or yvarnevmrq orsber ragrevat gur CVQ pbagebyyre. Vs n genafzvggre bhgchgf $4-20\\grkg{ zN}$ ercerfragvat $0\\grkg{ gb }250\\grkg{ xCn}$, naq pheerag QC vf $90\\grkg{ xCn}$, jung vf gur yvarnevmrq sybj engr nf n crepragntr bs znkvzhz sybj?",
    "correctAnswer": "$$60.0\\%\\grkg{ sybj}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 88",
    "explanation": "Sebz gur bevsvpr sybj eryngvbafuvc:\n$$S = X \\fdeg{\\Qrygn C} \\vzcyvrf S_{\\%} = \\fdeg{\\senp{\\Qrygn C}{\\Qrygn C_{\\grkg{znk}}}} \\gvzrf 100\\%$$\nFhofgvghgr $\\Qrygn C = 90\\grkg{ xCn}$ naq $\\Qrygn C_{\\grkg{znk}} = 250\\grkg{ xCn}$:\n$$\\Qrygn C_{\\%} = \\senp{90}{250} = 0.36 = 36.0\\%$$\nYvarnevmrq sybj crepragntr:\n$$S_{\\%} = \\fdeg{0.36} \\gvzrf 100\\% = 0.60 \\gvzrf 100\\% = 60.0\\%$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "36.0% sybj",
        "whyIncorrect": "Ercbegrq enj qvssreragvny cerffher crepragntr jvgubhg gnxvat fdhner ebbg."
      },
      {
        "text": "12.96% sybj",
        "whyIncorrect": "Fdhnerq gur crepragntr vafgrnq bs gnxvat gur fdhner ebbg ($0.36^2 = 0.1296$)."
      },
      {
        "text": "80.0% sybj",
        "whyIncorrect": "Pnyphyngrq $\\fdeg{0.64}$."
      },
      {
        "text": "18.97% sybj",
        "whyIncorrect": "Gbbx fdhner ebbg bs 360."
      },
      {
        "text": "75.0% sybj",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "6.0% sybj",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol snpgbe bs 10."
      },
      {
        "text": "90.0% sybj",
        "whyIncorrect": "Pbashfrq 90 xCn qverpgyl jvgu 90% sybj."
      },
      {
        "text": "45.0% sybj",
        "whyIncorrect": "Qvivqrq 90 ol 2."
      },
      {
        "text": "50.0% sybj",
        "whyIncorrect": "Nffhzrq zvq-fpnyr."
      }
    ]
  },
  {
    "id": 1046,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Tnc (Qrnqonaq) Npgvba va Yriry naq Cerffher Pbageby",
    "stem": "Jung vf gur cevznel shapgvba bs n 'tnc npgvba' (reebe qrnqonaq) pbagebyyre va vaqhfgevny QPF flfgrzf?",
    "correctAnswer": "Gb fhccerff nyy pbagebyyre bhgchg npgvba nf ybat nf gur Cebprff Inevnoyr erznvaf jvguva n pbasvtherq npprcgnoyr qrnqonaq (tnc) nebhaq Frgcbvag, erqhpvat haarprffnel inyir plpyvat naq jrne.",
    "ilmReference": "VYZ 310305nQ ct 92",
    "explanation": "Tnc npgvba zbqvsvrf gur reebe fvtany $r$ ragrevat gur CVQ nytbevguz:\n- Vs $|\trkg{CI} - \trkg{FC}| \\yr \\grkg{Tnc/2}$, gura $r = 0$.\n- Vs CI zbirf bhgfvqr gur qrnqonaq, reebe vf pnyphyngrq naq abezny CVQ npgvba ratntrf gb oevat CI onpx vagb gur tnc.\n- Nccyvpngvba: Fhetr qehz yriry pbageby be ynetr tnf irffry cerffher pbageby jurer zvabe syhpghngvbaf jvguva $\\cz 5\\%$ bs frgcbvag ner vapbafrdhragvny. Ryvzvangvat zvpeb-nqwhfgzragf ceriragf pbagvahbhf pbageby inyir cnpxvat jrne naq ryvzvangrf qbjafgernz sybj evccyrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb perngr n culfvpny nve tnc orgjrra gur 120 INP yvar naq genafzvggre grezvanyf.",
        "whyIncorrect": "Tnc npgvba vf na nytbevguzvp fbsgjner qrnqonaq, abg na ryrpgevpny vfbyngvba fcnex tnc."
      },
      {
        "text": "Gb qbhoyr gur vagrteny erfrg engr jurarire reebe rkprrqf 50%.",
        "whyIncorrect": "Gung vf reebe-fdhnerq CVQ pbageby, abg tnc pbageby."
      },
      {
        "text": "Gb gevc gur rzretrapl fuhgqbja fnsrgl inyir jura cerffher qebcf gb mreb.",
        "whyIncorrect": "Rzretrapl gevcf ner unaqyrq ol qrqvpngrq fnsrgl ybtvp, abg tnc npgvba."
      },
      {
        "text": "Gb vagebqhpr 180 qrterrf bs cunfr yrnq vagb snfg sybj ybbcf.",
        "whyIncorrect": "Qrnqonaqf vagebqhpr aba-yvarne cunfr ynt naq yvzvg plpyvat vs vzcebcreyl nccyvrq."
      },
      {
        "text": "Gb nyybj gjb bcrengbef gb pbageby gur fnzr ybbc fvzhygnarbhfyl sebz qvssrerag pbafbyrf.",
        "whyIncorrect": "QPF frphevgl nffvtaf fvatyr-bcrengbe bjarefuvc gb pbageby ybbcf."
      },
      {
        "text": "Gb vaireg gur pbagebyyre npgvba sebz erirefr gb qverpg rirel 10 frpbaqf.",
        "whyIncorrect": "Ybbc npgvba fvta zhfg erznva pbafgnag sbe artngvir srrqonpx fgnovyvgl."
      },
      {
        "text": "Gb nhgbzngvpnyyl pnyvoengr gur inyir cbfvgvbare mreb naq fcna.",
        "whyIncorrect": "Cbfvgvbare pnyvoengvba vf na nhgbzngrq znvagranapr ebhgvar, abg pbagvahbhf tnc pbageby."
      },
      {
        "text": "Gb sbepr gur qrevingvir zbqr gb qvssreragvngr bayl artngvir reebef.",
        "whyIncorrect": "Qrevingvir qvssreragvngrf engrf bs punatr ertneqyrff bs fvta."
      },
      {
        "text": "Gb irag rkprff nve sebz gur vafgehzrag nve pbzcerffbe urnqre.",
        "whyIncorrect": "Pbzcerffbe onpxcerffher erthyngbef unaqyr urnqre iragvat."
      }
    ]
  },
  {
    "id": 1047,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Reebe-Fdhnerq (Aba-Yvarne) CVQ Pbageby",
    "stem": "Ubj qbrf na 'Reebe-Fdhnerq' CVQ pbagebyyre orunir pbzcnerq gb n fgnaqneq yvarne CVQ pbagebyyre?",
    "correctAnswer": "Vg zhygvcyvrf gur reebe ol vgf nofbyhgr inyhr ($r \\pqbg |r|$), erfhygvat va irel fznyy pbeerpgvir npgvba sbe fznyy reebef (fzbbgu pbageby), ohg encvqyl rfpnyngvat, ntterffvir pbeerpgvir npgvba sbe ynetr reebef gb cerirag irffry biresybj be gevc yvzvgf.",
    "ilmReference": "VYZ 310305nQ ct 96",
    "explanation": "Gur reebe-fdhnerq cebcbegvbany grez vf:\n$$\\grkg{PB}_{\\grkg{cebc}} = X_p \\pqbg r \\pqbg |r|$$\n- Sbe fznyy qvfgheonaprf (r.t. $r = 2\\% = 0.02$), gur rssrpgvir reebe vf $0.02 \\gvzrf 0.02 = 0.0004$, cebqhpvat iveghnyyl mreb inyir zbgvba.\n- Sbe ynetr qvfgheonaprf (r.t. $r = 20\\% = 0.20$), gur rssrpgvir reebe vf $0.20 \\gvzrf 0.20 = 0.04$, cebqhpvat fhofgnagvny ntterffvir inyir zbgvba.\n- Hfrq rkgrafviryl va fhetr qehz yriry pbageby gb nyybj fzbbgu bhgsybj qhevat abezny bcrengvbaf juvyr thnenagrrvat gur gnax jvyy abg biresybj be eha qel qhevat ynetr hcfrgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg fdhnerf gur reebe vapyhqvat gur artngvir fvta, pnhfvat nyy reebef gb orpbzr cbfvgvir.",
        "whyIncorrect": "Hfvat $r^2$ ybfrf gur fvta bs reebe; vg ZHFG or vzcyrzragrq nf $r \\pqbg |r|$ gb znvagnva artngvir srrqonpx qverpgvba."
      },
      {
        "text": "Vg fdhnerf gur pbagebyyre cebcbegvbany tnva frggvat ($X_p^2$) ba rirel pybpx plpyr.",
        "whyIncorrect": "Fdhnevat tnva rirel plpyr jbhyq pnhfr vasvavgr tnva jvguva zvyyvfrpbaqf."
      },
      {
        "text": "Vg fdhnerf gur QPF PCH pybpx serdhrapl sebz 1 TUm gb 1,000 TUm.",
        "whyIncorrect": "PCH serdhrapl vf svkrq uneqjner."
      },
      {
        "text": "Vg vf na nanybt fdhner ebbg rkgenpgbe vafgnyyrq onpxjneqf va gur ybbc.",
        "whyIncorrect": "Reebe-fdhnerq vf na nytbevguzvp fbsgjner pnyphyngvba vafvqr gur CVQ oybpx."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe nal vagrteny be cebcbegvbany zbqrf.",
        "whyIncorrect": "Vg vf n zbqvsvpngvba bs gur cebcbegvbany naq/be vagrteny reebe grezf."
      },
      {
        "text": "Vg rafherf gur ybbc npuvrirf dhnegre-nzcyvghqr qrpnl ng nyy gvzrf.",
        "whyIncorrect": "Reebe-fdhnerq vf aba-yvarne; dhnegre-nzcyvghqr qrpnl nccyvrf fgevpgyl gb yvarne flfgrzf."
      },
      {
        "text": "Vg vf hfrq rkpyhfviryl gb zrnfher yvdhvq ivfpbfvgl.",
        "whyIncorrect": "Ivfpbfvgl vf zrnfherq ol ivfpbzrgref, abg reebe-fdhnerq pbageby."
      },
      {
        "text": "Vg pbairegf gur 4-20 zN pheerag ybbc vagb n qvtvgny Zbqohf cnpxrg.",
        "whyIncorrect": "Fvtany pbairefvba vf cebgbpby vagresnpvat."
      },
      {
        "text": "Vg ceriragf gur bcrengbe sebz ivrjvat geraq fperraf.",
        "whyIncorrect": "Bcrengbe qvfcynlf ner hanssrpgrq."
      }
    ]
  },
  {
    "id": 1048,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "VZP Ghavat Ehyrf: Ehyr bs Guhzo sbe Ynzoqn Fryrpgvba",
    "stem": "Jura nccylvat Ynzoqn ghavat gb na vaqhfgevny frys-erthyngvat cebprff jvgu gvzr pbafgnag $\\gnh$ naq qrnq gvzr $\\gurgn$, jung vf gur erpbzzraqrq zvavzhz inyhr sbe gur pybfrq-ybbc gvzr pbafgnag ($\\ynzoqn$ be $\\gnh_p$) gb nibvq rkprffvir frafvgvivgl gb qrnq-gvzr inevngvbaf?",
    "correctAnswer": "$$\\ynzoqn \\tr \\gurgn \\dhnq \\grkg{(be } \\ynzoqn \\tr 3\\gurgn \\grkg{ sbe ebohfg ghavat)}$$",
    "ilmReference": "VYZ 310305nQ ct 100",
    "explanation": "Vs $\\ynzoqn$ vf pubfra fznyyre guna gur cebprff qrnq gvzr ($\\ynzoqn < \\gurgn$), gur flagurfvmrq pbagebyyre qrznaqf pybfrq-ybbc erfcbafr snfgre guna gur culfvpny genafcbeg qrynl bs gur cebprff. Guvf cebqhprf znffvir pbagebyyre tnva ($X_p$), uvtu crnx birefubbgf, naq frirer frafvgvivgl gb fznyy zbqry reebef. N ebohfg ghavat ehyr frgf $\\ynzoqn \\tr \\gurgn$ (be $\\ynzoqn \\tr 3\\gurgn$ be $\\ynzoqn \\tr \\gnh$), rafhevat gur pybfrq-ybbc onaqjvqgu vf fnsryl orybj gur cunfr pebffbire serdhrapl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "ynzoqn <= 0.01 * gurgn",
        "whyIncorrect": "Frggvat $\\ynzoqn \\yy \\gurgn$ pnhfrf ivbyrag vafgnovyvgl naq inyir fnghengvba."
      },
      {
        "text": "ynzoqn zhfg or rknpgyl mreb ng nyy gvzrf.",
        "whyIncorrect": "$\\ynzoqn = 0$ erdhverf vasvavgr pbagebyyre tnva naq aba-pnhfny pbageby."
      },
      {
        "text": "ynzoqn zhfg rdhny gur fdhner bs gur genafzvggre fcna.",
        "whyIncorrect": "$\\ynzoqn$ unf havgf bs gvzr (zvahgrf be frpbaqf), abg fcna havgf fdhnerq."
      },
      {
        "text": "ynzoqn >= 100 * gnh",
        "whyIncorrect": "$\\ynzoqn = 100\\gnh$ znxrf gur pbagebyyre fb fyhttvfu gung vg rssrpgviryl cebivqrf mreb pbageby."
      },
      {
        "text": "ynzoqn zhfg or n artngvir gvzr pbafgnag.",
        "whyIncorrect": "Artngvir pybfrq-ybbc gvzr pbafgnagf cebqhpr zngurzngvpnyyl hafgnoyr rkcbaragvnyyl qviretvat cbyrf."
      },
      {
        "text": "ynzoqn zhfg rdhny gur nzovrag nve grzcrengher va qrterrf Pryfvhf.",
        "whyIncorrect": "$\\ynzoqn$ vf na ratvarrerq qlanzvp gvzr pbafgnag."
      },
      {
        "text": "ynzoqn vf qrgrezvarq fgevpgyl ol gur inyir frng qvnzrgre va vapurf.",
        "whyIncorrect": "Inyir fvmvat eryngrf gb $P_i$, abg gur pybfrq-ybbc ghavat gvzr pbafgnag."
      },
      {
        "text": "ynzoqn zhfg rdhny gur PCH fpna gvzr va zvpebfrpbaqf.",
        "whyIncorrect": "$\\ynzoqn$ tbireaf cebprff qlanzvpf (frpbaqf gb zvahgrf), sne fybjre guna PCH pybpx plpyrf."
      },
      {
        "text": "ynzoqn zhfg or frg gb vasvavgl gb npgvingr qrevingvir zbqr.",
        "whyIncorrect": "$\\ynzoqn = \\vasgl$ erfhygf va mreb pbagebyyre tnva ($X_p = 0$)."
      }
    ]
  },
  {
    "id": 1049,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Rssrpg bs QNP Bhgchg Erfbyhgvba ba Svany Pbageby Ryrzrag",
    "stem": "N QPF nanybt bhgchg zbqhyr hfrf n 10-ovg Qvtvgny-gb-Nanybt Pbairegre (QNP) gb qevir n 4-20 zN pbageby inyir cbfvgvbare npebff $0-100\\%$ fgebxr. Jung vf gur fznyyrfg bhgchg crepragntr vaperzrag guvf zbqhyr pna genafzvg gb gur inyir?",
    "correctAnswer": "$$0.098\\% \\nccebk 0.10\\%\\grkg{ bhgchg}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nQ ct 104",
    "explanation": "N 10-ovg QNP unf $2^{10} - 1 = 1023$ qvfpergr fgrcf:\n$$\\grkg{Erfbyhgvba} = \\senp{100\\%}{1023} \\nccebk 0.09775\\% \\nccebk 0.10\\%$$\nVa pheerag grezf, npebff gur $16\\grkg{ zN}$ fcna:\n$$\\Qrygn V = \\senp{16\\grkg{ zN}}{1023} \\nccebk 0.0156\\grkg{ zN (15.6 }\\zh\\grkg{N)}$$\nVs gur pbagebyyre nytbevguz pnyphyngrf na bhgchg punatr fznyyre guna $\\nccebk 0.10\\%$, gur QNP pnaabg punatr vgf bhgchg ibygntr/pheerag hagvy gur npphzhyngrq punatr pebffrf gur arkg qvfpergr dhnagvmngvba obhaqnel.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1.0% bhgchg",
        "whyIncorrect": "Pnyphyngrq $100 / 100 = 1.0\\%$ (pbashfrq 10-ovg jvgu 100 fgrcf)."
      },
      {
        "text": "0.024% bhgchg",
        "whyIncorrect": "Pnyphyngrq sbe n 12-ovg QNP ($100 / 4095 = 0.0244\\%$)."
      },
      {
        "text": "0.0015% bhgchg",
        "whyIncorrect": "Pnyphyngrq sbe n 16-ovg QNP ($100 / 65535 = 0.00153\\%$)."
      },
      {
        "text": "10.0% bhgchg",
        "whyIncorrect": "Pbashfrq 10 ovgf jvgu 10 creprag."
      },
      {
        "text": "0.50% bhgchg",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "0.0048% bhgchg",
        "whyIncorrect": "Pnyphyngrq sbe n 14-ovg QNP."
      },
      {
        "text": "4.0% bhgchg",
        "whyIncorrect": "Pbashfrq 4 zN jvgu 4% erfbyhgvba."
      },
      {
        "text": "0.25% bhgchg",
        "whyIncorrect": "Pnyphyngrq $1/4$ creprag."
      },
      {
        "text": "0.0001% bhgchg",
        "whyIncorrect": "Nffhzrq vasvavgr 24-ovg cerpvfvba."
      }
    ]
  },
  {
    "id": 1050,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "Q. Qvtvgny Pbagebyyre Ghavat (15%)",
    "title": "Pbzcerurafvir Qvtvgny Pbagebyyre Ghavat Fhzznel",
    "stem": "Jura pbzcnevat pynffvpny Mvrtyre-Avpubyf (M-A) ghavat jvgu zbqrea Ynzoqn / VZP qvtvgny ghavat sbe pbagvahbhf cebprff pbageby, jung vf gur cevznel bcrengvbany genqr-bss?",
    "correctAnswer": "M-A ghavat cebqhprf ntterffvir, snfg frgcbvag genpxvat jvgu $25\\%$ birefubbg (dhnegre-nzcyvghqr qrpnl) ohg cbbe ebohfgarff naq uvtu inyir jrne; Ynzoqn/VZP ghavat cebqhprf fzbbgu, pevgvpnyyl qnzcrq erfcbafrf jvgu mreb birefubbg, uvtu ebohfgarff, naq zvavzny inyir plpyvat.",
    "ilmReference": "VYZ 310305nQ ct 108",
    "explanation": "Xrl pbzcnevfbaf:\n1. Mvrtyre-Avpubyf Pevgrevba: Dhnegre-nzcyvghqr qrpnl ($QE = 0.25$). Cebivqrf encvq evfr gvzr naq snfg qvfgheonapr erwrpgvba, ohg bcrengrf pybfr gb vafgnovyvgl (cunfr znetva bsgra bayl $30^\\pvep$). Inyir pbagvahbhfyl zbqhyngrf, jrnevat bhg cnpxvat, naq plpyvp bfpvyyngvbaf hcfrg qbjafgernz rdhvczrag.\n2. Ynzoqn / Vagreany Zbqry Pbageby: Fvatyr hfre-fryrpgrq ghavat cnenzrgre ($\\ynzoqn$). Pbzcyrgryl ryvzvangrf birefubbg ($QE = 0$), pnapryf cebprff cbyrf, zvavzvmrf inyir zbgvba, naq cebivqrf thnenagrrq fgnovyvgl znetvaf rira jura cebprff cnenzrgref fuvsg jvgu cynag cebqhpgvba engrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "M-A ghavat jbexf bayl va qvtvgny QPF, juvyr Ynzoqn ghavat jbexf bayl va carhzngvp pbagebyyref.",
        "whyIncorrect": "Obgu pna or hfrq va qvtvgny QPF, ohg Ynzoqn ghavat jnf qrirybcrq fcrpvsvpnyyl sbe qvtvgny flfgrzf."
      },
      {
        "text": "Ynzoqn ghavat thnenagrrf pbagvahbhf 60 Um fvahfbvqny bfpvyyngvba.",
        "whyIncorrect": "Ynzoqn ghavat cebqhprf fzbbgu aba-bfpvyyngbel rkcbaragvny erfcbafrf."
      },
      {
        "text": "M-A ghavat erdhverf mreb xabjyrqtr bs cebprff qlanzvpf.",
        "whyIncorrect": "M-A erdhverf rvgure hygvzngr frafvgvivgl ($X_{ph}, C_h$) be bcra-ybbc fgrc erfcbafr ($X_c, \\gnh, \\gurgn$)."
      },
      {
        "text": "Ynzoqn ghavat qbhoyrf gur culfvpny qrnq gvzr bs gur cvcryvar.",
        "whyIncorrect": "Ghavat pnaabg punatr culfvpny cvcryvar syhvq genafvg gvzr."
      },
      {
        "text": "M-A ghavat ryvzvangrf nyy arrq sbe pbageby inyirf.",
        "whyIncorrect": "Obgu ghavat zrgubqf pbageby culfvpny svany pbageby ryrzragf."
      },
      {
        "text": "Ynzoqn ghavat erdhverf gnxvat gur ragver cynag bssyvar sbe 48 ubhef.",
        "whyIncorrect": "Ynzoqn ghavat hfrf fgnaqneq oravta bcra-ybbc fgrcf be pybfrq-ybbc ohzcf."
      },
      {
        "text": "M-A ghavat vf cebuvovgrq ol gur Nyoregn Obvyre Fnsrgl Nffbpvngvba (NOFN).",
        "whyIncorrect": "NOFN vafcrpgf cerffher rdhvczrag vagrtevgl; ratvarrevat ghavat zrgubqf ner abg cebuvovgrq."
      },
      {
        "text": "Ynzoqn ghavat pbairegf nyy 4-20 zN fvtanyf gb 3-15 cfv nve.",
        "whyIncorrect": "Fvtany pbairefvba vf unaqyrq ol uneqjner genafqhpref."
      },
      {
        "text": "Gurer vf ab qvssrerapr; obgu cebqhpr zngurzngvpnyyl vqragvpny CVQ cnenzrgref.",
        "whyIncorrect": "Gurl cebqhpr pbzcyrgryl qvssrerag ghavat pbafgnagf naq genafvrag erfcbafr pheirf."
      }
    ]
  },
  {
    "id": 1051,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Pbageby Nepuvgrpgher: Znfgre naq Fynir Ebyrf",
    "stem": "Ersre gb gur vyyhfgengrq urng rkpunatre pnfpnqr pbageby flfgrz. Jung vf gur shaqnzragny bcrengvbany eryngvbafuvc orgjrra gur Cevznel (Znfgre) pbagebyyre naq gur Frpbaqnel (Fynir) pbagebyyre?",
    "correctAnswer": "Gur Cevznel (Znfgre) pbagebyyre zrnfherf cebqhpg grzcrengher naq vgf bhgchg freirf nf gur Erzbgr Frgcbvag (EFC) sbe gur Frpbaqnel (Fynir) pbagebyyre, juvpu zrnfherf fgrnz sybj naq znavchyngrf gur fgrnz inyir.",
    "ilmReference": "VYZ 310305nR ct 4",
    "explanation": "Va pnfpnqr pbageby:\n1. Gur Cevznel (Znfgre/Bhgre) pbagebyyre zrnfherf gur pevgvpny cebprff dhnyvgl inevnoyr (grzcrengher GP).\n2. Vafgrnq bs qverpgyl fgebxvat gur inyir, gur Znfgre pbagebyyre'f 4-20 zN be qvtvgny bhgchg vf jverq qverpgyl nf gur Erzbgr Frgcbvag (EFC) bs gur Frpbaqnel (Fynir/Vaare) pbagebyyre (sybj SP).\n3. Gur Frpbaqnel pbagebyyre zrnfherf gur frpbaqnel inevnoyr (fgrnz sybj) naq znavchyngrf gur svany pbageby ryrzrag (fgrnz inyir).\n4. Guvf vfbyngrf qvfgheonaprf va fgrnz urnqre cerffher vafvqr gur vaare ybbc orsber gurl pna nssrpg grzcrengher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur Frpbaqnel pbagebyyre zrnfherf grzcrengher naq frgf gur Cevznel pbagebyyre'f frgcbvag.",
        "whyIncorrect": "Vairegrq: Cevznel zrnfherf gur cevznel inevnoyr naq pbzznaqf gur Frpbaqnel pbagebyyre."
      },
      {
        "text": "Obgu pbagebyyref znavchyngr gur fnzr inyir fvzhygnarbhfyl guebhtu n zrpunavpny L-yvaxntr.",
        "whyIncorrect": "Bayl gur frpbaqnel pbagebyyre qverpgyl pbzznaqf gur inyir."
      },
      {
        "text": "Gur Cevznel pbagebyyre bcrengrf va Znahny juvyr gur Frpbaqnel bcrengrf va Grfg zbqr.",
        "whyIncorrect": "Obgu pbagebyyref bcrengr nhgbzngvpnyyl va pnfpnqr zbqr (Znfgre va Nhgb, Fynir va Pnfpnqr)."
      },
      {
        "text": "Gur Frpbaqnel pbagebyyre bhgchg vf srq onpx vagb gur Cevznel genafzvggre vachg.",
        "whyIncorrect": "Genafzvggref zrnfher culfvpny cebprff inevnoyrf, abg pbagebyyre bhgchgf."
      },
      {
        "text": "Gur Cevznel pbagebyyre pbagebyf fgrnz cerffher juvyr gur Frpbaqnel pbagebyf pbbyvat jngre.",
        "whyIncorrect": "Obgu pbagebyyref jbex gbtrgure ba gur fnzr urngvat genva."
      },
      {
        "text": "Gur Frpbaqnel pbagebyyre npgf nf n onpxhc fcner gung raretvmrf bayl hcba Cevznel PCH snvyher.",
        "whyIncorrect": "Gung vf uneqjner erqhaqnapl, abg pnfpnqr cebprff pbageby."
      },
      {
        "text": "Gur Cevznel pbagebyyre vf carhzngvp 3-15 cfv juvyr gur Frpbaqnel zhfg or 480 INP 3-cunfr.",
        "whyIncorrect": "Pnfpnqr vf n shapgvbany fbsgjner/uneqjner nepuvgrpgher vaqrcraqrag bs fvtany zrqvn."
      },
      {
        "text": "Gur Cevznel pbagebyyre cebivqrf uvtu-yvzvg fnsrgl rzretrapl fuhgqbja gevccvat.",
        "whyIncorrect": "Pnfpnqr pbageby vf zbqhyngvat cebprff erthyngvba, abg fnsrgl fuhgqbja."
      },
      {
        "text": "Gur Frpbaqnel pbagebyyre zhfg nyjnlf or cebcbegvbany-qrevingvir bayl.",
        "whyIncorrect": "Frpbaqnel sybj pbagebyyref glcvpnyyl hfr CV pbageby jvgu snfg erfrg naq mreb qrevingvir."
      }
    ]
  },
  {
    "id": 1052,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Cevznel Nqinagntr bs Pnfpnqr Pbageby bire Fvatyr-Ybbc Srrqonpx",
    "stem": "Jung vf gur fvatyr terngrfg cebprff pbageby nqinagntr npuvrirq ol vzcyrzragvat n pnfpnqr pbageby fgengrtl vafgrnq bs n fvatyr-ybbc srrqonpx pbagebyyre ba n urng rkpunatre?",
    "correctAnswer": "Qvfgheonaprf bppheevat vafvqr gur frpbaqnel vaare ybbc (r.t. fgrnz fhccyl cerffher syhpghngvbaf be inyir sevpgvba) ner qrgrpgrq naq pbeerpgrq vzzrqvngryl ol gur snfg vaare pbagebyyre orsber gurl pna nygre gur cevznel cebprff inevnoyr (cebqhpg grzcrengher).",
    "ilmReference": "VYZ 310305nR ct 7",
    "explanation": "Va n fvatyr-ybbc grzcrengher flfgrz, vs fgrnz urnqre cerffher qebcf sebz $100\\grkg{ cfv}$ gb $80\\grkg{ cfv}$, fgrnz sybj qebcf vzzrqvngryl, ohg gur grzcrengher genafzvggre qbrf abg frr gur pbbyvat rssrpg sbe frireny zvahgrf qhr gb ynetr gurezny yntf. Va pnfpnqr pbageby, gur frpbaqnel sybj genafzvggre vafgnagyl frafrf gur sybj qebc. Gur fynir sybj pbagebyyre vzzrqvngryl bcraf gur fgrnz inyir gb erfgber sybj gb gur frgcbvag pbzznaqrq ol gur znfgre, arhgenyvmvat gur qvfgheonapr jvgu MREB punatr va irffry grzcrengher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg phgf gur erdhverq ryrpgevpny raretl pbafhzcgvba bs gur cynag va unys.",
        "whyIncorrect": "Pnfpnqr vzcebirf qlanzvp pbageby, ohg qbrf abg nygre gurezbqlanzvp raretl pbafreingvba erdhverzragf."
      },
      {
        "text": "Vg pbzcyrgryl ryvzvangrf gur arrq gb pnyvoengr gur grzcrengher genafzvggre.",
        "whyIncorrect": "Npphengr cevznel zrnfherzrag vf pevgvpny sbe birenyy cebqhpg dhnyvgl."
      },
      {
        "text": "Vg nyybjf gur pbageby inyir gb or qbjafvmrq ol n snpgbe bs 10.",
        "whyIncorrect": "Inyir fvmvat vf tbirearq ol znkvzhz syhvq guebhtuchg ($P_i$), abg pbageby fgengrtl."
      },
      {
        "text": "Vg ercynprf nyy carhzngvp cbfvgvbaref jvgu znahny unaqjurryf.",
        "whyIncorrect": "Cbfvgvbaref erznva rffragvny sbe cerpvfr inyir zbqhyngvba."
      },
      {
        "text": "Vg crezvgf gur cevznel pbagebyyre gb unir vasvavgr tnva jvgubhg bfpvyyngvat.",
        "whyIncorrect": "Ybbc fgnovyvgl pevgrevn fgvyy tbirea cevznel pbagebyyre ghavat."
      },
      {
        "text": "Vg pbairegf na vagrtengvat cebprff vagb na bcra-ybbc hafgnoyr flfgrz.",
        "whyIncorrect": "Pnfpnqr fgnovyvmrf flfgrzf, engure guna qrfgnovyvmvat gurz."
      },
      {
        "text": "Vg ryvzvangrf cebprff qrnq gvzr sebz culfvpny genafcbeg cvcvat.",
        "whyIncorrect": "Culfvpny qrnq gvzr erznvaf, gubhtu frpbaqnel qrnq gvzr vf vfbyngrq."
      },
      {
        "text": "Vg nhgbzngvpnyyl punatrf gur snvy-fnsr cbfvgvba bs gur inyir sebz NGB gb NGP.",
        "whyIncorrect": "Snvy-fnsr npgvba vf zrpunavpny, qrgrezvarq ol fcevat naq npghngbe bevragngvba."
      },
      {
        "text": "Vg ceriragf gur pbafbyr bcrengbe sebz fjvgpuvat gur ybbc vagb Nhgbzngvp zbqr.",
        "whyIncorrect": "Bcrengbef ebhgvaryl bcrengr pnfpnqr ybbcf va Nhgb naq Pnfpnqr zbqrf."
      }
    ]
  },
  {
    "id": 1053,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Qlanzvp Fcrrq Erdhverzrag sbe Pnfpnqr Ybbcf",
    "stem": "Gb rafher qlanzvp fgnovyvgl naq nibvq frirer erfbanapr vagrenpgvba orgjrra gur gjb ybbcf va n pnfpnqr pbageby flfgrz, jung vf gur shaqnzragny erdhverzrag ertneqvat gur eryngvir erfcbafr fcrrqf bs gur vaare (fynir) naq bhgre (znfgre) ybbcf?",
    "correctAnswer": "Gur frpbaqnel (vaare) ybbc zhfg or fvtavsvpnagyl snfgre guna gur cevznel (bhgre) ybbc\u2014glcvpnyyl univat n erfcbafr fcrrq (onaqjvqgu) ng yrnfg $3\\gvzrf$ gb $5\\gvzrf$ (vqrnyyl $10\\gvzrf$) snfgre.",
    "ilmReference": "VYZ 310305nR ct 10",
    "explanation": "Qlanzvp frcnengvba ehyr:\n- Vs gur vaare ybbc vf snfg (r.t. sybj ybbc jvgu gvzr pbafgnag $\\gnh_{\\grkg{vaare}} = 1\\grkg{ f}$), vg ernpurf vgf frgcbvag nyzbfg vafgnagyl pbzcnerq gb gur fybj bhgre ybbc (r.t. grzcrengher ybbc jvgu $\\gnh_{\\grkg{bhgre}} = 60\\grkg{ f}$).\n- Sebz gur crefcrpgvir bs gur bhgre pbagebyyre, gur vaare ybbc orunirf nf n fvzcyr havgl tnva oybpx ($T_{\\grkg{vaare}}(f) \\nccebk 1.0$) jvgu artyvtvoyr cunfr ynt.\n- Vs gur vaare ybbc vf fybj be pbzcnenoyr va fcrrq gb gur bhgre ybbc, cunfr ynt sebz gur vaare ybbc pnhfrf frirer plpyvp vagrenpgvba naq qrfgnovyvmrf gur znfgre ybbc.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur cevznel ybbc zhfg or 10 gvzrf snfgre guna gur frpbaqnel ybbc.",
        "whyIncorrect": "Vairegrq: Gur vaare (frpbaqnel) ybbc zhfg or zhpu snfgre guna gur bhgre (cevznel) ybbc."
      },
      {
        "text": "Obgu ybbcf zhfg unir vqragvpny gvzr pbafgnagf gb npuvrir cresrpg serdhrapl erfbanapr.",
        "whyIncorrect": "Vqragvpny fcrrqf pnhfr frirer qrfgehpgvir erfbanapr vagrenpgvba naq bfpvyyngvba."
      },
      {
        "text": "Gur vaare ybbc zhfg unir na hygvzngr crevbq bs ng yrnfg 2 ubhef.",
        "whyIncorrect": "Vaare ybbcf fubhyq unir irel fubeg crevbqf (frpbaqf)."
      },
      {
        "text": "Gur fcrrq bs gur ybbcf vf veeryrinag nf ybat nf qrevingvir npgvba vf ranoyrq va obgu.",
        "whyIncorrect": "Fcrrq frcnengvba vf gur sbhaqngvbany erdhverzrag sbe pnfpnqr fgnovyvgl."
      },
      {
        "text": "Gur bhgre ybbc zhfg fnzcyr ng 1 xUm juvyr gur vaare ybbc fnzcyrf ng 0.1 Um.",
        "whyIncorrect": "Snfg vaare ybbcf erdhver snfg fnzcyvat; fybj fnzcyvat ba gur vaare ybbc qrtenqrf cresbeznapr."
      },
      {
        "text": "Gur vaare ybbc zhfg or na vagrtengvat cebprff juvyr gur bhgre ybbc vf frys-erthyngvat.",
        "whyIncorrect": "Ybbc glcrf qrcraq ba gur cebprff; sybj vf frys-erthyngvat, lrg sbezf gur vqrny snfg vaare ybbc."
      },
      {
        "text": "Gur frpbaqnel ybbc zhfg unir n tnva znetva bs rknpgyl 0 qO.",
        "whyIncorrect": "0 qO tnva znetva zrnaf gur ybbc vf ng gur iretr bs pbagvahbhf bfpvyyngvba."
      },
      {
        "text": "Gur cevznel ybbc zhfg hfr carhzngvp oryybjf juvyr gur frpbaqnel hfrf bcgvpny svore.",
        "whyIncorrect": "Uneqjner zrqvn qbrf abg qvpgngr qlanzvp serdhrapl frcnengvba erdhverzragf."
      },
      {
        "text": "Gur vaare ybbc gvzr pbafgnag zhfg or ng yrnfg 100 gvzrf ynetre guna gur bhgre qrnq gvzr.",
        "whyIncorrect": "Vaare ybbc gvzr pbafgnag zhfg or ZHPU FZNYYRE, abg ynetre."
      }
    ]
  },
  {
    "id": 1054,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pbzzvffvbavat naq Ghavat Frdhrapr sbe Pnfpnqr Ybbcf",
    "stem": "Jung vf gur pbeerpg, fgnaqneq cebprqheny frdhrapr sbe pbzzvffvbavat naq ghavat n gjb-pbagebyyre pnfpnqr pbageby flfgrz?",
    "correctAnswer": "Cynpr gur cevznel pbagebyyre va Znahny, cynpr gur frpbaqnel pbagebyyre va Nhgbzngvp (Ybpny FC) naq ghar gur frpbaqnel ybbc svefg; gura fjvgpu gur frpbaqnel gb Erzbgr FC (Pnfpnqr) naq ghar gur cevznel pbagebyyre.",
    "ilmReference": "VYZ 310305nR ct 14",
    "explanation": "Ghavat frdhrapr sbe pnfpnqr ybbcf:\n1. Cynpr Cevznel (Znfgre) va ZNAHNY.\n2. Cynpr Frpbaqnel (Fynir) va NHGB hfvat n Ybpny Frgcbvag (YFC).\n3. Ghar gur Frpbaqnel pbagebyyre svefg: Irevsl fgnovyvgl, snfg erfcbafr, naq ebohfg qvfgheonapr erwrpgvba.\n4. Fjvgpu gur Frpbaqnel pbagebyyre gb ERZBGR FRGCBVAG (Pnfpnqr / PNF zbqr).\n5. Cynpr gur Cevznel pbagebyyre va NHGB.\n6. Ghar gur Cevznel pbagebyyre: Gur cevznel pbagebyyre abj 'frrf' gur gharq frpbaqnel ybbc nf cneg bs vgf sbejneq cebprff cngu.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ghar gur cevznel pbagebyyre svefg jvgu gur frpbaqnel va znahny; gura ghar gur frpbaqnel.",
        "whyIncorrect": "Gur cevznel pnaabg or gharq hagvy gur frpbaqnel ybbc vf pybfrq naq fgnoyr; punatvat frpbaqnel ghavat yngre ehvaf cevznel ghavat."
      },
      {
        "text": "Ghar obgu pbagebyyref fvzhygnarbhfyl ol fgrccvat frgcbvagf ba obgu ng gur fnzr vafgnag.",
        "whyIncorrect": "Fvzhygnarbhf ghavat pnhfrf pebff-pbhcyrq bfpvyyngvbaf gung znxr flfgrzngvp ghavat vzcbffvoyr."
      },
      {
        "text": "Cynpr obgu pbagebyyref va Znahny, frg nyy cebcbegvbany onaqf gb 0%, naq bcra gur olcnff inyir.",
        "whyIncorrect": "Frggvat CO gb 0% vf vasvavgr tnva ba-bss onatvat."
      },
      {
        "text": "Ghar gur frpbaqnel ybbc va Pnfpnqr zbqr juvyr na bcrengbe encvqyl punatrf gur cevznel frgcbvag.",
        "whyIncorrect": "Gur frpbaqnel zhfg or gharq jvgu n fgnoyr ybpny frgcbvag svefg."
      },
      {
        "text": "Qvfnoyr gur frpbaqnel pbagebyyre creznaragyl naq ghar gur cevznel ybbc gb fgebxr gur inyir qverpgyl.",
        "whyIncorrect": "Gung pbairegf gur flfgrz onpx gb fvatyr-ybbc, qrsrngvat gur ragver pnfpnqr nepuvgrpgher."
      },
      {
        "text": "Ghar gur cevznel pbagebyyre va Nhgb, ohg yrnir gur frpbaqnel pbagebyyre va Znahny zbqr.",
        "whyIncorrect": "Va znahny zbqr, gur frpbaqnel vtaberf gur cevznel'f bhgchg, oernxvat gur ybbc."
      },
      {
        "text": "Frg obgu pbagebyyref gb erirefr npgvat naq ghar bayl qhevat n cynag rzretrapl gevc.",
        "whyIncorrect": "Ghavat zhfg or cresbezrq haqre pbagebyyrq fgrnql-fgngr onfryvar pbaqvgvbaf."
      },
      {
        "text": "Ghar hfvat Mvrtyre-Avpubyf bcra ybbc jvgu obgu ybbcf pybfrq.",
        "whyIncorrect": "Bcra ybbc grfgf erdhver bcravat gur ybbc (znahny zbqr)."
      },
      {
        "text": "Ghar gur qrevingvir zbqr ba gur frpbaqnel sybj pbagebyyre gb znkvzhz orsber nqqvat tnva.",
        "whyIncorrect": "Sybj ybbcf fubhyq abg hfr qrevingvir npgvba qhr gb gheohyrapr abvfr."
      }
    ]
  },
  {
    "id": 1055,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Ghavat Punenpgrevfgvpf bs gur Frpbaqnel (Fynir) Pbagebyyre",
    "stem": "Jul vf vg pbzzba cenpgvpr gb ghar gur frpbaqnel (fynir) pbagebyyre va n pnfpnqr flfgrz jvgu uvtu cebcbegvbany tnva naq eryngviryl snfg erfrg (be rira C-bayl va fbzr nccyvpngvbaf), engure guna pbafreingvir, fyhttvfu ghavat?",
    "correctAnswer": "Orpnhfr gur frpbaqnel ybbc'f cevznel ebyr vf uvtu-fcrrq qvfgheonapr erwrpgvba, naq nal fznyy fgrnql-fgngr bssfrg va gur frpbaqnel ybbc vf nhgbzngvpnyyl ryvzvangrq ol gur cevznel znfgre pbagebyyre.",
    "ilmReference": "VYZ 310305nR ct 18",
    "explanation": "Va pnfpnqr pbageby:\n- Fcrrq vf cnenzbhag sbe gur vaare ybbc: Vg zhfg fgbzc bhg sybj be cerffher qvfgheonaprf orsber gurl geniry vagb gur bhgre cebprff.\n- Rira vs gur frpbaqnel vf gharq nf C-bayl naq unf bssfrg (r.t. sybj frggyrf ng $48\\grkg{ tcz}$ jura znfgre qrznaqf $50\\grkg{ tcz}$), gur cevznel znfgre pbagebyyre vagrtengrf gur hygvzngr dhnyvgl reebe (grzcrengher) naq fvzcyl vapernfrf vgf bhgchg pbzznaq gb $52\\grkg{ tcz}$ hagvy gur grzcrengher zngpurf frgcbvag!\n- Gurersber, gvtug, uvtu-tnva ghavat ba gur frpbaqnel znkvzvmrf qvfgheonapr erwrpgvba jvgubhg qrtenqvat svany cevznel npphenpl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr frpbaqnel pbagebyyref ner erdhverq ol ryrpgevpny pbqr gb unir tnva terngre guna 10.",
        "whyIncorrect": "Ghavat vf na ratvarrevat bcgvzvmngvba, abg n pbqr znaqngr."
      },
      {
        "text": "Orpnhfr gur frpbaqnel pbagebyyre znavchyngrf gur cevznel frgcbvag qverpgyl.",
        "whyIncorrect": "Gur frpbaqnel znavchyngrf gur inyir, abg gur cevznel frgcbvag."
      },
      {
        "text": "Orpnhfr fybj frpbaqnel ghavat pnhfrf gur cevznel genafzvggre gb serrmr vgf 4-20 zN bhgchg.",
        "whyIncorrect": "Genafzvggre ryrpgebavpf bcrengr vaqrcraqragyl bs ybbc ghavat."
      },
      {
        "text": "Orpnhfr frpbaqnel pbagebyyref qb abg unir vagrteny be cebcbegvbany nytbevguzf.",
        "whyIncorrect": "Frpbaqnel pbagebyyref hfr fgnaqneq CV be CVQ nytbevguzf."
      },
      {
        "text": "Orpnhfr uvtu frpbaqnel tnva ceriragf gur inyir sebz rire ernpuvat 100% fgebxr.",
        "whyIncorrect": "Uvtu tnva qevirf gur inyir snfgre; fnghengvba yvzvgf ner unaqyrq ol pynzcvat."
      },
      {
        "text": "Orpnhfr gur Pnanqvna Obvyre Fnsrgl Nffbpvngvba znaqngrf dhnegre-nzcyvghqr qrpnl ba nyy fynir ybbcf.",
        "whyIncorrect": "Erthyngbef vafcrpg cerffher irffry vagrtevgl, abg fynir pbagebyyre qrpnl engvbf."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba pnaabg or pbasvtherq va gur znfgre pbagebyyre.",
        "whyIncorrect": "Znfgre grzcrengher pbagebyyref serdhragyl hfr qrevingvir npgvba."
      },
      {
        "text": "Orpnhfr frpbaqnel ybbcf nyjnlf unir ynetre qrnq gvzrf guna cevznel ybbcf.",
        "whyIncorrect": "Frpbaqnel ybbcf unir zhpu FZNYYRE qrnq gvzrf guna cevznel ybbcf."
      },
      {
        "text": "Gb cerirag gur bcrengbe sebz ivrjvat gur frpbaqnel cebprff inevnoyr ba gur QPF.",
        "whyIncorrect": "Bcrengbef pna zbavgbe nyy pnfpnqr CIf ba gur pbafbyr."
      }
    ]
  },
  {
    "id": 1056,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Qrgrezvavat Pbagebyyre Npgvbaf va Pnfpnqr Ybbcf",
    "stem": "N grzcrengher-gb-fgrnz sybj pnfpnqr ybbc pbagebyf n erobvyre. Gur fgrnz inyir vf Snvy-Pybfrq (Nve-gb-Bcra, NGB). Fgrnz sybj vapernfrf jura gur inyir bcraf (Inyir Tnva $X_i > 0$, Sybj Cebprff Tnva $X_{c2} > 0$). Cebqhpg grzcrengher vapernfrf jura fgrnz sybj vapernfrf ($X_{c1} > 0$). Obgu sybj naq grzcrengher genafzvggref ner qverpg npgvat ($4-20\\grkg{ zN}$). Jung ner gur erdhverq pbageby npgvbaf sbe gur Frpbaqnel (Sybj) naq Cevznel (Grzcrengher) pbagebyyref?",
    "correctAnswer": "Frpbaqnel pbagebyyre zhfg or ERIREFR NPGVAT; Cevznel pbagebyyre zhfg or ERIREFR NPGVAT... jnvg: yrg hf genpr pnershyyl!\n1. Sybj evfrf: gb ybjre sybj, pybfr NGB inyir -> qrpernfr PB -> Frpbaqnel vf ERIREFR NPGVAT.\n2. Grzc evfrf: gb ybjre grzc, qrpernfr fgrnz sybj frgcbvag -> Znfgre bhgchg zhfg qrpernfr -> Cevznel vf ERIREFR NPGVAT.",
    "ilmReference": "VYZ 310305nR ct 22",
    "explanation": "Yrg hf irevsl rnpu ybbc vaqrcraqragyl:\n1. Frpbaqnel Sybj Ybbc:\n   - Fgrnz sybj (CI2) evfrf nobir Frgcbvag (FC2).\n   - Gb erfgber sybj, inyir zhfg guebggyr pybfrq.\n   - Inyir vf NGB (Nve-gb-Bcra). Pybfvat inyir erdhverf qrpernfvat nve / pbagebyyre bhgchg.\n   - Bhgchg qrpernfrf jura CI vapernfrf $\\vzcyvrf$ Frpbaqnel Pbagebyyre vf ERIREFR NPGVAT ($r_2 = \\grkg{FC}_2 - \\grkg{CI}_2$).\n2. Cevznel Grzcrengher Ybbc:\n   - Grzcrengher (CI1) evfrf nobir Frgcbvag (FC1).\n   - Gb ybjre grzcrengher, jr arrq YRFF fgrnz sybj.\n   - Gurersber, gur Znfgre pbagebyyre zhfg pbzznaq n YBJRE sybj frgcbvag (FC2).\n   - Znfgre bhgchg qrpernfrf jura CI1 vapernfrf $\\vzcyvrf$ Cevznel Pbagebyyre vf ERIREFR NPGVAT ($r_1 = \\grkg{FC}_1 - \\grkg{CI}_1$).\nObgu pbagebyyref ner Erirefr Npgvat!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Frpbaqnel: Qverpg Npgvat; Cevznel: Qverpg Npgvat",
        "whyIncorrect": "Obgu qverpg npgvat jbhyq pnhfr cbfvgvir srrqonpx ehanjnl va obgu ybbcf."
      },
      {
        "text": "Frpbaqnel: Qverpg Npgvat; Cevznel: Erirefr Npgvat",
        "whyIncorrect": "Qverpg npgvat frpbaqnel bcraf gur NGB inyir jura sybj evfrf, oybjvat gur inyir jvqr bcra."
      },
      {
        "text": "Frpbaqnel: Erirefr Npgvat; Cevznel: Qverpg Npgvat",
        "whyIncorrect": "Qverpg npgvat cevznel qrznaqf ZBER fgrnz jura grzcrengher vf nyernql gbb uvtu, pnhfvat gurezny ehanjnl."
      },
      {
        "text": "Frpbaqnel: Fcyvg Enatr; Cevznel: Engvb Npgvat",
        "whyIncorrect": "Guvf vf n fvzcyr gjb-ryrzrag pnfpnqr ybbc, abg fcyvg-enatr be engvb."
      },
      {
        "text": "Frpbaqnel: Qvssreragvny Npgvat; Cevznel: Cebcbegvbany Bayl",
        "whyIncorrect": "Qvssreragvny npgvat vf abg n inyvq fgnaqneq pbagebyyre npgvba."
      },
      {
        "text": "Obgu npgvbaf ner veeryrinag orpnhfr pnfpnqr pbagebyyref nhgbzngvpnyyl vaireg rirel 60 frpbaqf.",
        "whyIncorrect": "Npgvbaf ner svkrq pbasvthengvba cnenzrgref rafhevat artngvir srrqonpx."
      },
      {
        "text": "Frpbaqnel: Qverpg Npgvat vs inyir cbfvgvbare unf n erirefr pnz.",
        "whyIncorrect": "Fgnaqneq cbfvgvbare frghc jvgu NGB inyir erdhverf erirefr frpbaqnel."
      },
      {
        "text": "Cevznel zhfg or Qverpg Npgvat orpnhfr nyy grzcrengher ybbcf ner qverpg npgvat ol ynj.",
        "whyIncorrect": "Urngvat ybbcf jvgu NGB fgrnz inyirf erdhver erirefr npgvat grzcrengher pbagebyyref."
      },
      {
        "text": "Frpbaqnel zhfg or Erirefr Npgvat, ohg Cevznel zhfg or cynprq va Znahny zbqr creznaragyl.",
        "whyIncorrect": "Obgu bcrengr nhgbzngvpnyyl va shyy pnfpnqr."
      }
    ]
  },
  {
    "id": 1057,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Qrgrezvavat Pbagebyyre Npgvbaf: Pbbyvat Jngre Rkpunatre Pnfr",
    "stem": "N ernpgbe grzcrengher vf pbagebyyrq ol znavchyngvat pbbyvat jngre sybj va n pnfpnqr nepuvgrpgher. Gur pbbyvat jngre inyir vf Snvy-Bcra (Nve-gb-Pybfr, NGP). Pbbyvat jngre sybj vapernfrf nf gur inyir bcraf ($X_{i2} < 0$). Ernpgbe grzcrengher qrpernfrf nf pbbyvat jngre sybj vapernfrf ($X_{c1} < 0$). Obgu genafzvggref ner qverpg npgvat. Jung ner gur erdhverq pbageby npgvbaf sbe gur Frpbaqnel (Sybj) naq Cevznel (Grzcrengher) pbagebyyref?",
    "correctAnswer": "Frpbaqnel Pbagebyyre: QVERPG NPGVAT; Cevznel Pbagebyyre: QVERPG NPGVAT.",
    "ilmReference": "VYZ 310305nR ct 25",
    "explanation": "Yrg hf genpr rnpu ybbc:\n1. Frpbaqnel Sybj Ybbc:\n   - Pbbyvat jngre sybj (CI2) evfrf nobir Frgcbvag.\n   - Gb erqhpr sybj, gur NGP inyir zhfg pybfr.\n   - Pybfvat na NGP (Nve-gb-Pybfr) inyir erdhverf VAPERNFVAT gur carhzngvp/pheerag fvtany.\n   - Nf CI2 vapernfrf, PB2 zhfg vapernfr $\\vzcyvrf$ Frpbaqnel vf QVERPG NPGVAT ($r_2 = \\grkg{CI}_2 - \\grkg{FC}_2$).\n2. Cevznel Grzcrengher Ybbc:\n   - Ernpgbe grzcrengher (CI1) evfrf nobir Frgcbvag.\n   - Gb pbby gur ernpgbe qbja, ZBER pbbyvat jngre sybj vf arrqrq.\n   - Gurersber, gur Znfgre pbagebyyre zhfg pbzznaq n UVTURE pbbyvat jngre sybj frgcbvag (FC2).\n   - Nf CI1 vapernfrf, Znfgre PB1 zhfg vapernfr $\\vzcyvrf$ Cevznel vf QVERPG NPGVAT ($r_1 = \\grkg{CI}_1 - \\grkg{FC}_1$).\nObgu pbagebyyref ner Qverpg Npgvat!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Frpbaqnel: Erirefr Npgvat; Cevznel: Erirefr Npgvat",
        "whyIncorrect": "Erirefr npgvat frpbaqnel qrpernfrf fvtany gb na NGP inyir, bcravat vg shegure naq pnhfvat sybj ehanjnl."
      },
      {
        "text": "Frpbaqnel: Erirefr Npgvat; Cevznel: Qverpg Npgvat",
        "whyIncorrect": "Frpbaqnel zhfg or qverpg npgvat sbe na Nve-gb-Pybfr inyir."
      },
      {
        "text": "Frpbaqnel: Qverpg Npgvat; Cevznel: Erirefr Npgvat",
        "whyIncorrect": "Erirefr npgvat cevznel qrznaqf YRFF pbbyvat jngre jura gur ernpgbe vf bireurngvat, pnhfvat gurezny ehanjnl."
      },
      {
        "text": "Frpbaqnel: Qverpg Npgvat; Cevznel: Uvtu Fryrpgbe Bireevqr",
        "whyIncorrect": "Abezny pbbyvat erthyngvba hfrf fgnaqneq cevznel pbageby, abg na bireevqr fryrpgbe."
      },
      {
        "text": "Frpbaqnel: Cebcbegvbany Bayl; Cevznel: Qrevingvir Bayl",
        "whyIncorrect": "Qrevingvir-bayl pnaabg znvagnva grzcrengher frgcbvag."
      },
      {
        "text": "Obgu pbagebyyref zhfg or Erirefr Npgvat orpnhfr pbbyvat jngre vf pbyqre guna fgrnz.",
        "whyIncorrect": "Pbagebyyre npgvba qrcraqf ba zngurzngvpny fvtaf bs tnvaf, abg syhvq grzcrengher."
      },
      {
        "text": "Frpbaqnel npgvba qrcraqf ba nzovrag uhzvqvgl.",
        "whyIncorrect": "Nzovrag uhzvqvgl qbrf abg punatr inyir be syhvq ulqenhyvp fvtaf."
      },
      {
        "text": "Cevznel zhfg or Erirefr Npgvat orpnhfr vg vf na rkbgurezvp ernpgbe.",
        "whyIncorrect": "Rkbgurezvp ernpgbef erdhvevat pbbyvat qrznaq QVERPG npgvat pbagebyyref (zber urng -> zber pbbyvat)."
      },
      {
        "text": "Obgu npgvbaf zhfg or gbttyrq orgjrra qverpg naq erirefr rirel 5 zvahgrf.",
        "whyIncorrect": "Npgvba gbttyvat pnhfrf vzzrqvngr ybbc vafgnovyvgl."
      }
    ]
  },
  {
    "id": 1058,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Nagv-Erfrg Jvaqhc naq Frgcbvag Genpxvat",
    "stem": "Jung unccraf va n pnfpnqr pbageby flfgrz vs gur frpbaqnel (fynir) pbagebyyre vf fjvgpurq gb ZNAHNY zbqr ol na bcrengbe, be uvgf na bhgchg yvzvg (0% be 100%), juvyr gur cevznel (znfgre) pbagebyyre erznvaf va NHGB?",
    "correctAnswer": "Erfrg jvaqhc bpphef va gur cevznel pbagebyyre hayrff gur cevznel ybbc vf rdhvccrq jvgu genpxvat / rkgreany erfrg srrqonpx sebz gur frpbaqnel pbagebyyre.",
    "ilmReference": "VYZ 310305nR ct 28",
    "explanation": "Jura gur frpbaqnel pbagebyyre vf va Znahny (be fnghengrq), gur pnfpnqr punva vf oebxra: gur frpbaqnel vtaberf gur frgcbvag pbzznaqrq ol gur cevznel. Vs na reebe crefvfgf va gur cevznel inevnoyr, gur cevznel pbagebyyre'f vagrteny zbqr pbagvahrf gb vagrtengr, jvaqvat hc gb $+100\\%$ be $0\\%$. Jura gur frpbaqnel vf fjvgpurq onpx gb Pnfpnqr (PNF), gur cevznel bhgchg vf qrrcyl fnghengrq, pnhfvat n znffvir cebprff hcfrg. Gb cerirag guvf, QPF flfgrzf hfr 'Pnfpnqr Genpxvat': jura gur frpbaqnel vf abg va PNF, gur cevznel pbagebyyre vf sbeprq gb genpx gur frpbaqnel CI be serrmr vgf vagrteny npphzhyngbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur cevznel pbagebyyre vafgnagyl oheaf bhg vgf zvpebcebprffbe puvc.",
        "whyIncorrect": "Zvpebcebprffbe qnzntr vf uneqjner snvyher, abg nytbevguzvp zbqr vagrenpgvba."
      },
      {
        "text": "Gur frpbaqnel pbageby inyir vf sbeprq gb 50% fgebxr ol zrpunavpny fcevatf.",
        "whyIncorrect": "Gur frpbaqnel va znahny fgnlf ng jungrire bhgchg gur bcrengbe frgf."
      },
      {
        "text": "Gur cevznel genafzvggre fjvgpurf sebz 4-20 zN gb Sbhaqngvba Svryqohf.",
        "whyIncorrect": "Genafzvggre fvtanyvat cebgbpby qbrf abg nygre."
      },
      {
        "text": "Gur frpbaqnel sybj genafzvggre fgbcf zrnfhevat syhvq sybj.",
        "whyIncorrect": "Sybj zrnfherzrag pbagvahrf havagreehcgrq."
      },
      {
        "text": "Gur cynag rzretrapl fuhgqbja (RFQ) syner flfgrz vf nhgbzngvpnyyl vtavgrq.",
        "whyIncorrect": "Bcrengbe fjvgpuvat bs n fynir pbagebyyre gb znahny qbrf abg gevttre na RFQ gevc."
      },
      {
        "text": "Gur cevznel pbagebyyre nhgbzngvpnyyl qbhoyrf vgf cebcbegvbany tnva.",
        "whyIncorrect": "Tnva cnenzrgref erznva pbafgnag hayrff tnva-fpurqhyrq."
      },
      {
        "text": "Gur cevznel pbagebyyre fjvgpurf sebz erirefr npgvat gb qverpg npgvat.",
        "whyIncorrect": "Npgvba fvta qbrf abg fcbagnarbhfyl punatr."
      },
      {
        "text": "Gur cebprff ragref dhnegre-nzcyvghqr qrpnl nhgbzngvpnyyl.",
        "whyIncorrect": "Jvgu oebxra pnfpnqr, bcra-ybbc qevsg be jvaqhc bpphef, abg dhnegre-nzcyvghqr qrpnl."
      },
      {
        "text": "Abguvat; pnfpnqr pbagebyyref ner pbzcyrgryl vaqrcraqrag jvgu mreb vagrenpgvba.",
        "whyIncorrect": "Pnfpnqr pbagebyyref vagrenpg qverpgyl; jvaqhc cebgrpgvba vf rffragvny."
      }
    ]
  },
  {
    "id": 1059,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Frpbaqnel Ybbc Frgcbvag Pynzcvat (Yvzvgf)",
    "stem": "Jul vf vg pbzzba cenpgvpr gb pbasvther Uvtu naq Ybj Frgcbvag Yvzvgf ba gur frpbaqnel (fynir) pbagebyyre va n grzcrengher-gb-shry pnfpnqr flfgrz?",
    "correctAnswer": "Gb cerirag gur cevznel znfgre pbagebyyre sebz qrznaqvat na hafnsr be vzcbffvoyr frpbaqnel pbaqvgvba (r.t. qrznaqvat mreb shry tnf, juvpu jbhyq rkgvathvfu oheare synzrf, be qrznaqvat rkprff shry rkprrqvat sheanpr qensg pncnpvgl).",
    "ilmReference": "VYZ 310305nR ct 32",
    "explanation": "Rira gubhtu gur znfgre pbagebyyre bhgchg enatrf sebz $0\\grkg{ gb }100\\%$, qrznaqvat $0\\%$ shry sybj jbhyq pnhfr synzrbhg (ybff bs synzr, yrnqvat gb rkcybfvir er-vtavgvba unmneq). Frggvat n ybj frgcbvag yvzvg bs $15\\%$ ba gur fynir sybj pbagebyyre rafherf gur synzr arire qebcf orybj zvavzhz fgnoyr oheare svevat engr. Fvzvyneyl, frggvat n uvtu frgcbvag yvzvg bs $85\\%$ ceriragf bire-svevat gung jbhyq birejuryz pbzohfgvba nve snaf be rkprrq urngre ghor qrfvta grzcrengherf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb cerirag gur cevznel pbagebyyre sebz pbzzhavpngvat bire Rgurearg.",
        "whyIncorrect": "Frgcbvag pynzcvat vf n cebprff fnsrgl pbafgenvag, abg n argjbex qvfnoyr."
      },
      {
        "text": "Gb qbhoyr gur fcrrq bs fbhaq guebhtu gur shry tnf yvar.",
        "whyIncorrect": "Fcrrq bs fbhaq vf n culfvpny syhvq gurezbqlanzvp cebcregl."
      },
      {
        "text": "Gb sbepr gur fynir pbagebyyre vagb Znahny zbqr rirel ubhe.",
        "whyIncorrect": "Yvzvgf pbafgenva bcrengvat enatr; gurl qb abg xvpx pbagebyyref gb znahny."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe synzr fnsrthneq fnsrgl flfgrzf (OZF).",
        "whyIncorrect": "Oheare Znantrzrag Flfgrzf (OZF) ner znaqngbel vaqrcraqrag fnsrgl flfgrzf."
      },
      {
        "text": "Gb pbaireg gur shry inyir cbfvgvbare sebz carhzngvp gb qvtvgny.",
        "whyIncorrect": "Fbsgjner pynzcvat unf ab rssrpg ba cbfvgvbare uneqjner."
      },
      {
        "text": "Gb rafher gung qrevingvir npgvba erznvaf npgvir ng 0% sybj.",
        "whyIncorrect": "Qrevingvir npgvba vf abg hfrq ba shry tnf sybj ybbcf."
      },
      {
        "text": "Orpnhfr Pnanqvna ryrpgevpny pbqr cebuvovgf 4-20 zN fvtanyf orybj 10 zN.",
        "whyIncorrect": "Fgnaqneq 4-20 zN fcnaf shyy 0-100% fpnyr fnsryl qbja gb 4.0 zN."
      },
      {
        "text": "Gb nyybj gur frpbaqnel pbagebyyre gb bcrengr jvgubhg n sybj genafzvggre.",
        "whyIncorrect": "Gur frpbaqnel pbagebyyre erdhverf n sybj genafzvggre sbe srrqonpx."
      },
      {
        "text": "Gb erqhpr gur tnva bs gur znfgre pbagebyyre gb mreb.",
        "whyIncorrect": "Frgcbvag pynzcvat yvzvgf gur nyybjnoyr enatr bs frgcbvag, abg znfgre tnva."
      }
    ]
  },
  {
    "id": 1060,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Pbageby: Inyir Yvarnevmngvba Shapgvba bs Frpbaqnel Ybbc",
    "stem": "Va nqqvgvba gb erwrpgvat hcfgernz fhccyl qvfgheonaprf, ubj qbrf n snfg frpbaqnel sybj ybbc vzcebir gur yvarnevgl bs gur cevznel grzcrengher pbageby ybbc?",
    "correctAnswer": "Vg yvarnevmrf gur rssrpgvir svany pbageby ryrzrag: aba-yvarnevgvrf fhpu nf pbageby inyir fgvpgvba, ulfgrerfvf, naq inelvat cerffher qebc ($P_i$ pheir qvfgbegvba) ner rapybfrq vafvqr gur snfg vaare ybbc, cerfragvat n yvarne sybj erfcbafr gb gur znfgre pbagebyyre.",
    "ilmReference": "VYZ 310305nR ct 36",
    "explanation": "Pbageby inyirf va erny cynagf unir aba-yvarne vafgnyyrq punenpgrevfgvpf qhr gb punatvat yvar cerffher qebcf, nf jryy nf zrpunavpny cnpxvat sevpgvba (fgvpgvba) naq npghngbe ulfgrerfvf. Jura n frpbaqnel sybj ybbc vf jenccrq nebhaq gur inyir:\n- Gur znfgre pbagebyyre qbrf abg nfx sbe 'inyir cbfvgvba'\u2014vg nfxf sbe 'sybj engr' ($50\\grkg{ xt/u}$).\n- Vs gur inyir fgvpxf, gur sybj pbagebyyre vzzrqvngryl obbfgf bhgchg gb oernx gur inyir serr hagvy gur erdhrfgrq sybj vf npuvrirq.\n- Gb gur znfgre pbagebyyre, gur pbzovangvba bs (frpbaqnel pbagebyyre + inyir + sybj frafbe) nccrnef nf n iveghnyyl vqrny, yvarne, vafgnagnarbhf npghngbe.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg gheaf gur pbageby inyir vagb na bevsvpr cyngr.",
        "whyIncorrect": "Gur inyir erznvaf n zbqhyngvat inyir; gur vaare ybbc yvarnevmrf vgf orunivbe."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe na npghngbe fcevat.",
        "whyIncorrect": "Npghngbe fcevatf cebivqr rffragvny zrpunavpny erghea sbepr."
      },
      {
        "text": "Vg nyybjf jngre gb sybj guebhtu gur fgrnz inyir jvgubhg obvyvat.",
        "whyIncorrect": "Syhvq fgngr qrcraqf ba grzcrengher naq cerffher, abg pbageby ybbcf."
      },
      {
        "text": "Vg qbhoyrf gur erfbyhgvba bs gur grzcrengher genafzvggre NQP.",
        "whyIncorrect": "NQP erfbyhgvba vf svkrq uneqjner."
      },
      {
        "text": "Vg erzbirf gur erdhverzrag sbe gurezny vafhyngvba ba gur cvcrf.",
        "whyIncorrect": "Gurezny vafhyngvba zvavzvmrf urng ybff, vaqrcraqrag bs pbageby fgengrtl."
      },
      {
        "text": "Vg sbeprf gur cevznel cebprff gb orunir nf na vagrtengvat cebprff.",
        "whyIncorrect": "Gur cevznel cebprff ergnvaf vgf angheny culfvpny qlanzvpf (frys-erthyngvat)."
      },
      {
        "text": "Vg pbairegf 60 Um ryrpgevpny znvaf abvfr vagb QP ibygntr.",
        "whyIncorrect": "Gung vf gur ebyr bs n QP cbjre fhccyl erpgvsvre."
      },
      {
        "text": "Vg znxrf gur cevznel pbagebyyre cebcbegvbany onaq rdhny gb 0%.",
        "whyIncorrect": "CO = 0% vf ba-bss pbageby."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe n frpbaqnel sybj genafzvggre.",
        "whyIncorrect": "N frpbaqnel sybj genafzvggre vf fgevpgyl erdhverq gb pybfr gur vaare ybbc."
      }
    ]
  },
  {
    "id": 1061,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Znfgre Pbagebyyre Ghavat Ehyr bs Guhzo va Pnfpnqr Flfgrzf",
    "stem": "Jura ghavat gur cevznel (znfgre) pbagebyyre va na rfgnoyvfurq pnfpnqr ybbc jurer gur frpbaqnel (fynir) ybbc vf nyernql gharq naq pybfrq, ubj qbrf gur cerfrapr bs gur snfg vaare ybbc nssrpg nyybjnoyr znfgre pbagebyyre ghavat?",
    "correctAnswer": "Gur znfgre pbagebyyre pna glcvpnyyl or gharq jvgu uvture tnva ($X_p$) naq snfgre erfrg ($G_v$) guna va n fvatyr-ybbc flfgrz orpnhfr gur snfg vaare ybbc ryvzvangrf inyir qrnqonaq, ynt, naq fhccyl qvfgheonaprf sebz gur bhgre ybbc qlanzvpf.",
    "ilmReference": "VYZ 310305nR ct 40",
    "explanation": "Orpnhfr gur vaare ybbc pybfrf dhvpxyl naq vfbyngrf inyir ulfgrerfvf naq fhccyl cerffher inevngvbaf, gur rssrpgvir cebprff genafsre shapgvba frra ol gur znfgre pbagebyyre unf ybjre nccnerag qrnq gvzr naq srjre qlanzvp yntf. Guvf nyybjf gur znfgre pbagebyyre gb or gharq zber ntterffviryl (uvture tnva, fznyyre cebcbegvbany onaq, fubegre vagrteny gvzr) juvyr fgvyy znvagnvavat trarebhf fgnovyvgl znetvaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur znfgre pbagebyyre zhfg or qrgharq gb 10 gvzrf ybjre tnva guna fvatyr ybbc.",
        "whyIncorrect": "Fvatyr ybbc erdhverf fyhttvfu ghavat gb nibvq vafgnovyvgl sebz inyir ynt; pnfpnqr nyybjf ZBER ntterffvir ghavat."
      },
      {
        "text": "Gur znfgre pbagebyyre zhfg or pbasvtherq jvgu qrevingvir gvzr rdhny gb 1 ubhe.",
        "whyIncorrect": "Qrevingvir gvzr vf zngpurq gb gur bhgre cebprff gvzr pbafgnag, glcvpnyyl n srj zvahgrf."
      },
      {
        "text": "Gur znfgre pbagebyyre zhfg or gharq nf cher vagrteny-bayl jvgu mreb cebcbegvbany tnva.",
        "whyIncorrect": "Vagrteny-bayl pbageby vf fyhttvfu naq cebar gb plpyvat."
      },
      {
        "text": "Gur znfgre pbagebyyre cebcbegvbany onaq zhfg or ybpxrq ng 500%.",
        "whyIncorrect": "Ghavat vf bcgvzvmrq cre ybbc qlanzvpf, abg ybpxrq ng neovgenel inyhrf."
      },
      {
        "text": "Gur znfgre pbagebyyre zhfg or fjvgpurq gb Znahny qhevat nyy ybnq punatrf.",
        "whyIncorrect": "Gur znfgre pbagebyyre erthyngrf nhgbzngvpnyyl npebff nyy ybnq punatrf."
      },
      {
        "text": "Gur znfgre pbagebyyre tnva zhfg or artngvir juvyr fynir tnva vf cbfvgvir.",
        "whyIncorrect": "Obgu tnvaf zhfg fngvfsl ybbc artngvir srrqonpx pevgrevn."
      },
      {
        "text": "Gur znfgre pbagebyyre zhfg unir vgf fnzcyvat fpna gvzr frg gb 60 frpbaqf.",
        "whyIncorrect": "Fgnaqneq QPF fpna gvzrf ner 0.5 gb 1.0 frpbaq."
      },
      {
        "text": "Gur znfgre pbagebyyre pnaabg hfr frgcbvag genpxvat.",
        "whyIncorrect": "Znfgre genpxvat vf fgnaqneq cenpgvpr sbe ohzcyrff genafsre."
      },
      {
        "text": "Gur znfgre pbagebyyre zhfg or ercynprq ol n sybng fjvgpu.",
        "whyIncorrect": "Sybng fjvgpurf ner qvfpergr ba-bss qrivprf."
      }
    ]
  },
  {
    "id": 1062,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Yriry-gb-Sybj Nepuvgrpgher: Obvyre Qehz Guerr-Ryrzrag Pbageby",
    "stem": "Va vaqhfgevny fgrnz obvyre pbageby, jung qbrf gur pynffvp 'gjb-ryrzrag' pnfpnqr yriry pbageby fgengrtl pbafvfg bs?",
    "correctAnswer": "N cevznel qehz yriry pbagebyyre jubfr bhgchg vf nqwhfgrq ol fgrnz sybj (srrqsbejneq) be frgf gur frgcbvag bs n frpbaqnel srrqjngre sybj pbagebyyre.",
    "ilmReference": "VYZ 310305nR ct 44",
    "explanation": "Obvyre qehz yriry fgengrtvrf:\n- Fvatyr Ryrzrag: Yriry genafzvggre $\\gb$ Yriry Pbagebyyre $\\gb$ Srrqjngre inyir. Fhssref frireryl sebz 'fuevax naq fjryy' naq srrqjngre urnqre cerffher inevngvbaf.\n- Gjb Ryrzrag: Nqqf fgrnz sybj srrqsbejneq (be yriry-gb-srrqjngre sybj pnfpnqr) gb zngpu jngre vachg gb fgrnz qrznaq.\n- Guerr Ryrzrag: Yriry pbagebyyre (znfgre) pnfpnqrf vagb Srrqjngre Sybj pbagebyyre (fynir), jvgu Fgrnz Sybj nqqrq nf n srrqsbejneq znff-onynapr fvtany gb gur fynir frgcbvag, arhgenyvmvat fuevax/fjryy naq jngre urnqre cerffher fjvatf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gjb yriry genafzvggref nirentvat gurve bhgchgf vagb n fvatyr fbyrabvq inyir.",
        "whyIncorrect": "Gung vf erqhaqnag frafbe ibgvat, abg gjb-ryrzrag pnfpnqr pbageby."
      },
      {
        "text": "Gjb pbageby inyirf vafgnyyrq va frevrf ba gur oybjqbja yvar.",
        "whyIncorrect": "Gjb-ryrzrag ersref gb zrnfherq cebprff inevnoyrf (Yriry naq Sybj), abg culfvpny inyirf."
      },
      {
        "text": "N yriry pbagebyyre znavchyngvat obgu gur srrqjngre chzc zbgbe fcrrq naq obvyre qensg.",
        "whyIncorrect": "Obvyre qensg vf pbagebyyrq ol gur pbzohfgvba nve pbagebyyre."
      },
      {
        "text": "N carhzngvp synccre-abmmyr pbagebyyre jvgu gjb vaqrcraqrag abmmyrf.",
        "whyIncorrect": "Gjb-ryrzrag vf n cebprff pbageby fgengrtl, abg n qhny-abmmyr zrpunavpny ynlbhg."
      },
      {
        "text": "N yriry fjvgpu gung gevcf gjb vaqrcraqrag ryrpgevpny pvephvg oernxref.",
        "whyIncorrect": "Gung vf rzretrapl fuhgqbja vagreybpx ybtvp."
      },
      {
        "text": "N pbagebyyre zrnfhevat jngre cU naq pbaqhpgvivgl.",
        "whyIncorrect": "Jngre dhnyvgl hfrf purzvpny oybjqbja nanylmref, abg qehz yriry pbageby."
      },
      {
        "text": "N pbagebyyre zrnfhevat nzovrag grzcrengher naq jvaq fcrrq.",
        "whyIncorrect": "Nzovrag jrngure vf abg cneg bs obvyre qehz yriry ryrzragf."
      },
      {
        "text": "N yriry pbagebyyre jubfr bhgchg vf fdhnerq naq ebhgrq gb n fcyvg-enatr irag.",
        "whyIncorrect": "Qehz yriry znavchyngrf srrqjngre vasybj, abg ngzbfcurevp iragvat."
      },
      {
        "text": "Gjb vaqrcraqrag obvyref funevat n fvatyr fgrnz gheovar.",
        "whyIncorrect": "Gung vf zhygv-havg obvyre urnqre onynapvat."
      }
    ]
  },
  {
    "id": 1063,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Grzcrengher-gb-Wnpxrg Cerffher va Ernpgbef",
    "stem": "Va wnpxrgrq purzvpny ernpgbef jvgu uvtuyl rkbgurezvp ernpgvbaf, jul vf ernpgbe grzcrengher bsgra pnfpnqrq vagb wnpxrg cerffher (be wnpxrg grzcrengher) engure guna wnpxrg pbbyvat jngre sybj?",
    "correctAnswer": "Orpnhfr wnpxrg cerffher (be wnpxrg grzcrengher) ersyrpgf gur gehr qevivat sbepr sbe urng genafsre naq unf n zhpu fubegre gvzr pbafgnag guna gur znffvir yvdhvq znff vafvqr gur ernpgbe.",
    "ilmReference": "VYZ 310305nR ct 48",
    "explanation": "Va rkbgurezvp ernpgbef:\n- Gur znfgre pbagebyyre zrnfherf ernpgbe pber grzcrengher (CI1).\n- Urng genafsre orgjrra gur ernpgbe syhvq naq pbbyvat wnpxrg qrcraqf qverpgyl ba wnpxrg grzcrengher ($D = H N (G_{\\grkg{ernpgbe}} - G_{\\grkg{wnpxrg}})$).\n- Va pbaqrafvat fgrnz be incbevmvat ersevtrenag wnpxrgf, wnpxrg cerffher qverpgyl svkrf wnpxrg fnghengvba grzcrengher ivn gurezbqlanzvp incbe-cerffher pheirf.\n- N snfg frpbaqnel wnpxrg cerffher/grzcrengher pbagebyyre erfcbaqf va frpbaqf gb pbbynag urnqre cerffher be grzcrengher inevngvbaf, ceriragvat wnpxrg syhpghngvbaf sebz qrfgnovyvmvat gur rkbgurezvp ernpgbe ernpgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr pbbyvat jngre sybj pnaabg or zrnfherq ol zntargvp sybjzrgref.",
        "whyIncorrect": "Zntargvp sybjzrgref zrnfher pbbyvat jngre sybj jvgu uvtu npphenpl."
      },
      {
        "text": "Orpnhfr wnpxrg cerffher vf nyjnlf 0 cfvt ng nyy gvzrf.",
        "whyIncorrect": "Wnpxrg cerffher zbqhyngrf qlanzvpnyyl gb erthyngr urng genafsre."
      },
      {
        "text": "Orpnhfr rkbgurezvp ernpgvbaf qb abg trarengr urng.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf trarengr znffvir nzbhagf bs purzvpny urng."
      },
      {
        "text": "Orpnhfr gur Pnanqvna Ryrpgevpny Pbqr cebuvovgf zrnfhevat sybj va purzvpny cynagf.",
        "whyIncorrect": "Sybj zrnfherzrag vf fgnaqneq npebff nyy purzvpny cebprffvat cynagf."
      },
      {
        "text": "Orpnhfr wnpxrg cerffher pbagebyyref erdhver mreb ryrpgevpny cbjre.",
        "whyIncorrect": "Cerffher pbagebyyref ner cbjrerq qvtvgny be ryrpgebavp qrivprf."
      },
      {
        "text": "Orpnhfr zrnfhevat wnpxrg cerffher ryvzvangrf gur arrq sbe ernpgbe ntvgngvba.",
        "whyIncorrect": "Ntvgngvba vf erdhverq sbe syhvq zvkvat naq urng genafsre pbrssvpvragf."
      },
      {
        "text": "Orpnhfr ernpgbe pber grzcrengher arire punatrf qhevat na rkbgurezvp eha.",
        "whyIncorrect": "Ernpgbe pber grzcrengher zhfg or gvtugyl pbagebyyrq nebhaq frgcbvag gb cerirag ehanjnl."
      },
      {
        "text": "Orpnhfr cerffher genafzvggref ner 100 gvzrf purncre guna gurezbpbhcyrf.",
        "whyIncorrect": "Gurezbpbhcyrf ner varkcrafvir; rpbabzvpf qb abg qvpgngr pnfpnqr ybbc fryrpgvba."
      },
      {
        "text": "Orpnhfr wnpxrg cerffher vairegf gur ernpgbe purzvpny rdhvyvoevhz pbafgnag.",
        "whyIncorrect": "Pber ernpgvba rdhvyvoevhz qrcraqf ba vagreany irffry grzcrengher naq pbzcbfvgvba, abg wnpxrg jnyy cerffher."
      }
    ]
  },
  {
    "id": 1064,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Ohzcyrff Pnfpnqr Vavgvnyvmngvba: Erzbgr Frgcbvag Nyvtazrag",
    "stem": "Jura fjvgpuvat gur frpbaqnel (fynir) pbagebyyre sebz Ybpny (NHGB) gb Pnfpnqr (PNF) zbqr, jung zhfg bpphe gb thnenagrr n ohzcyrff genafsre gung qbrf abg fubpx gur cebprff?",
    "correctAnswer": "Gur cevznel pbagebyyre'f bhgchg zhfg zngpu gur frpbaqnel pbagebyyre'f pheerag frgcbvag (be CI) ng gur vafgnag bs zbqr genafsre.",
    "ilmReference": "VYZ 310305nR ct 52",
    "explanation": "Vs gur cevznel pbagebyyre bhgchg vf pheeragyl ng $70\\%$ (qrznaqvat $700\\grkg{ tcz}$) juvyr gur frpbaqnel pbagebyyre vf bcrengvat va Ybpny Nhgb ng n frgcbvag bs $400\\grkg{ tcz}$, vafgnagyl fjvgpuvat gur frpbaqnel gb PNF jbhyq fynz gur frpbaqnel frgcbvag sebz $400\\grkg{ gb }700\\grkg{ tcz}$, pnhfvat n znffvir sybj fcvxr. QPF flfgrzf rafher ohzcyrff genafsre ol univat gur cevznel pbagebyyre genpx gur frpbaqnel frgcbvag juvyr va Ybpny zbqr, fb jura PNF vf fryrpgrq, gur cevznel bhgchg nyernql rdhnyf gur pheerag bcrengvat cbvag.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur frpbaqnel pbageby inyir zhfg fgebxr shyyl pybfrq sbe 10 frpbaqf gb chetr yvarf.",
        "whyIncorrect": "Pybfvat gur inyir fubpxf gur cebprff naq pbhyq gevc gur havg."
      },
      {
        "text": "Gur bcrengbe zhfg znahnyyl ragre n frperg 4-qvtvg cnffpbqr.",
        "whyIncorrect": "Zbqr fryrpgvba vf n fgnaqneq bcrengbe pbafbyr shapgvba, abg n frphevgl ybpxbhg."
      },
      {
        "text": "Gur cevznel genafzvggre zhfg or erpnyvoengrq jvgu n qrnqjrvtug grfgre.",
        "whyIncorrect": "Genafzvggre pnyvoengvba vf orapu znvagranapr, abg ybbc zbqr genafsre."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre cebcbegvbany onaq zhfg or jvqrarq gb 1,000%.",
        "whyIncorrect": "Ghavat cnenzrgref erznva hapunatrq qhevat ohzcyrff genafsre."
      },
      {
        "text": "Gur vafgehzrag nve urnqre cerffher zhfg or obbfgrq gb 150 cfv.",
        "whyIncorrect": "Nve urnqre cerffher vf znvagnvarq pbafgnag ol pbzcerffbef."
      },
      {
        "text": "Gur cevznel pbagebyyre zhfg fjvgpu sebz erirefr npgvat gb qverpg npgvat.",
        "whyIncorrect": "Npgvba fvta zhfg erznva pbafgnag sbe artngvir srrqonpx fgnovyvgl."
      },
      {
        "text": "Gur qrevingvir zbqr ba gur frpbaqnel zhfg or qr-raretvmrq.",
        "whyIncorrect": "Frpbaqnel sybj ybbcf qb abg hfr qrevingvir va rvgure zbqr."
      },
      {
        "text": "Gur cevznel pbagebyyre vf cynprq va hapbafgenvarq bcra-ybbc znahny zbqr.",
        "whyIncorrect": "Gur cevznel pbagebyyre zhfg ragre Nhgbzngvp pnfpnqr pbageby."
      },
      {
        "text": "Gur cebprff syhvq zhfg or qenvarq vagb gur syner xabpxbhg qehz.",
        "whyIncorrect": "Ohzcyrff genafsre bpphef fzbbguyl qhevat abezny pbagvahbhf cebqhpgvba."
      }
    ]
  },
  {
    "id": 1065,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Qvfgheonapr Nyybpngvba va Pnfpnqr Flfgrzf",
    "stem": "N qvfgvyyngvba pbyhza unf n pnfpnqr grzcrengher-gb-erobvyre fgrnz sybj ybbc. Jurer zhfg n cebprff qvfgheonapr ragre gur flfgrz sbe gur pnfpnqr fgengrtl gb cebivqr fhcrevbe erwrpgvba pbzcnerq gb fvatyr-ybbc srrqonpx?",
    "correctAnswer": "Jvguva gur vaare frpbaqnel ybbc (r.t. fgrnz fhccyl cerffher punatrf, fgrnz fhcreurng inevngvbaf, be pbageby inyir fgvpgvba).",
    "ilmReference": "VYZ 310305nR ct 55",
    "explanation": "Pnfpnqr pbageby vf fcrpvsvpnyyl ratvarrerq gb erwrpg qvfgheonaprf gung ragre VAFVQR gur frpbaqnel vaare ybbc orsber gurl cebcntngr gb gur cevznel inevnoyr. Vs n qvfgheonapr ragref gur cevznel cebprff qverpgyl (r.t. pbyq srrq sybj fhetr be srrq pbzcbfvgvba punatr ragrevat gur pbyhza), gur frpbaqnel ybbc pnaabg qrgrpg vg hagvy gur cebqhpg grzcrengher ortvaf gb zbir. Va gung pnfr, pnfpnqr pbageby cresbezf fvzvyneyl gb n jryy-gharq fvatyr ybbc (be erdhverf srrqsbejneq pbageby).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Jvguva gur cynag ryrpgevpny fhofgngvba 13.8 xI qvfgevohgvba ohf.",
        "whyIncorrect": "Cbjre fhccyl punatrf ner unaqyrq ol HCF flfgrzf, abg cebprff pnfpnqr ybbcf."
      },
      {
        "text": "Ng gur pbbyvat jngre erghea pnany 5 xz qbjafgernz.",
        "whyIncorrect": "Pnany erghea vf qbjafgernz bs gur cebprff obhaqnevrf."
      },
      {
        "text": "Qverpgyl vagb gur cevznel cebqhpg pbzcbfvgvba nanylmre fnzcyr yvar.",
        "whyIncorrect": "Nanylmre fnzcyr qrynlf nssrpg cevznel srrqonpx, juvpu pnfpnqr pnaabg vfbyngr."
      },
      {
        "text": "Va gur nzovrag onebzrgevp cerffher bhgfvqr gur pbageby ebbz.",
        "whyIncorrect": "Nzovrag cerffher punatrf ner artyvtvoyr ba uvtu-cerffher fgrnz urnqref."
      },
      {
        "text": "Jvguva gur bcrengbe pbafbyr zbhfr naq xrlobneq HFO vagresnpr.",
        "whyIncorrect": "Uhzna-znpuvar vagresnprf ner bhgfvqr gur culfvpny cebprff ybbc."
      },
      {
        "text": "Va gur pnyvoengvba fcna bs gur gurezbpbhcyr genafzvggre.",
        "whyIncorrect": "Frafbe pnyvoengvba reebef nssrpg cevznel npphenpl qverpgyl."
      },
      {
        "text": "Bayl qhevat n cynag-jvqr gbgny cbjre oynpxbhg.",
        "whyIncorrect": "Pnfpnqr shapgvbaf pbagvahbhfyl qhevat abezny ehaavat bcrengvba."
      },
      {
        "text": "Vafvqr gur cevznel pbagebyyre PCH zrzbel ertvfgre.",
        "whyIncorrect": "Zrzbel snhygf gevttre uneqjner qvntabfgvp nynezf, abg cebprff qvfgheonapr erwrpgvba."
      },
      {
        "text": "Ng gur svany cebqhpg gehpx ybnqvat grezvany.",
        "whyIncorrect": "Ybnqvat enpxf ner frcnengr bss-fvgr genafsre snpvyvgvrf."
      }
    ]
  },
  {
    "id": 1066,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Ybbc Vagrenpgvba naq Ghavat Engvb",
    "stem": "Vs n frpbaqnel fynir ybbc unf n pybfrq-ybbc crevbq bs bfpvyyngvba bs $C_{h2} = 10\\grkg{ frpbaqf}$, jung vf gur zvavzhz qrfvenoyr pybfrq-ybbc crevbq ($C_{h1}$) sbe gur cevznel znfgre ybbc gb nibvq frirer ybbc vagrenpgvba?",
    "correctAnswer": "$$C_{h1} \\tr 30\\grkg{ gb }50\\grkg{ frpbaqf}$$",
    "ilmReference": "VYZ 310305nR ct 59",
    "explanation": "Gb cerirag erfbanapr naq plpyvp pebff-pbhcyvat orgjrra pnfpnqr pbagebyyref, gur serdhrapl frcnengvba ehyr erdhverf gur cevznel ybbc gb or ng yrnfg $3\\gvzrf$ gb $5\\gvzrf$ fybjre guna gur frpbaqnel ybbc:\n$$C_{h1} \\tr 3 \\gvzrf C_{h2} = 3 \\gvzrf 10\\grkg{ f} = 30\\grkg{ frpbaqf}$$\nVqrnyyl, $5\\gvzrf$ be $10\\gvzrf$ frcnengvba ($50 - 100\\grkg{ f}$) rafherf gur frpbaqnel ybbc orunirf nf n arne-cresrpg vafgnagnarbhf npghngbe sebz gur crefcrpgvir bs gur znfgre pbagebyyre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ch1 <= 2.0 frpbaqf",
        "whyIncorrect": "Znxvat gur znfgre snfgre guna gur fynir ivbyngrf gur shaqnzragny ehyr bs pnfpnqr pbageby."
      },
      {
        "text": "Ch1 = 10 frpbaqf rknpgyl",
        "whyIncorrect": "Vqragvpny crevbqf pnhfr frirer plpyvp erfbanapr naq vafgnovyvgl orgjrra gur gjb pbagebyyref."
      },
      {
        "text": "Ch1 >= 3600 frpbaqf (1 ubhe znaqngbel)",
        "whyIncorrect": "Na rkprffviryl fybj znfgre znxrf cebqhpg dhnyvgl fyhttvfu naq haerfcbafvir."
      },
      {
        "text": "Ch1 = 0.10 frpbaqf",
        "whyIncorrect": "Znfgre pnaabg erfcbaq snfgre guna gur vaare npghngbe ybbc."
      },
      {
        "text": "Ch1 zhfg or na vzntvanel ahzore.",
        "whyIncorrect": "Bfpvyyngvba crevbqf ner cbfvgvir erny culfvpny gvzr inyhrf."
      },
      {
        "text": "Ch1 vf vaqrcraqrag bs Ch2; gurl pna or gharq ng nal neovgenel fcrrqf.",
        "whyIncorrect": "Vtabevat serdhrapl frcnengvba yrnqf qverpgyl gb ivbyrag ybbc vagrenpgvba."
      },
      {
        "text": "Ch1 zhfg rdhny Ch2 / 4 = 2.5 frpbaqf.",
        "whyIncorrect": "Znfgre zhfg or FYBJRE (ynetre crevbq), abg snfgre."
      },
      {
        "text": "Ch1 = 15 frpbaqf.",
        "whyIncorrect": "1.5k frcnengvba vf gbb pybfr naq pnhfrf evatvat."
      },
      {
        "text": "Ch1 zhfg rdhny gur qrnq gvzr bs gur sybj genafzvggre.",
        "whyIncorrect": "Znfgre crevbq qrcraqf ba cevznel cebprff pncnpvgnapr naq gvzr pbafgnagf."
      }
    ]
  },
  {
    "id": 1067,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Nepuvgrpgher: Cevznel Bhgchg Ratvarrevat Havgf",
    "stem": "Va n zbqrea qvtvgny QPF, ubj vf gur bhgchg bs gur cevznel znfgre pbagebyyre fpnyrq jura pbaarpgrq gb gur erzbgr frgcbvag bs gur frpbaqnel fynir pbagebyyre?",
    "correctAnswer": "Gur cevznel pbagebyyre bhgchg ($0-100\\%$) vf fpnyrq qverpgyl gb zngpu gur ratvarrevat havgf naq enatr bs gur frpbaqnel cebprff inevnoyr (r.t. $0-100\\% \\vzcyvrf 0-5000\\grkg{ xt/u}$).",
    "ilmReference": "VYZ 310305nR ct 63",
    "explanation": "Va qvtvgny flfgrzf, gur pbaarpgvba orgjrra znfgre naq fynir vf unaqyrq ol fbsgjner fvtany yvaxvat:\n- Znfgre bhgchg vf glcvpnyyl pnyphyngrq va creprag ($0-100\\%$).\n- Gur fynir pbagebyyre'f Erzbgr Frgcbvag (EFC) erdhverf ratvarrevat havgf pbeerfcbaqvat gb vgf zrnfherzrag fcna (r.t. sybj sebz $0\\grkg{ gb }5000\\grkg{ xt/u}$).\n- Gur QPF yvax oybpx fpnyrf $0\\% = 0\\grkg{ xt/u}$, $50\\% = 2500\\grkg{ xt/u}$, naq $100\\% = 5000\\grkg{ xt/u}$.\n- Guvf nyybjf gur bcrengbe naq ratvarre gb frr vaghvgvir ratvarrevat inyhrf ba geraq qvfcynlf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur cevznel bhgchg zhfg nyjnlf or svkrq ng 4-20 zN QP nanybt pheerag.",
        "whyIncorrect": "Vafvqr QPF fbsgjner, fvtanyf ner qvtvgny sybngvat-cbvag ahzoref va ratvarrevat havgf."
      },
      {
        "text": "Gur cevznel bhgchg vf pbairegrq gb 3-15 cfv nve cerffher vafvqr gur PCH.",
        "whyIncorrect": "PCHf qb abg pbagnva pbzcerffrq nve; carhzngvpf ner svryq genafqhpref."
      },
      {
        "text": "Gur cevznel bhgchg zhfg nyjnlf or fpnyrq va qrterrf Snueraurvg.",
        "whyIncorrect": "Gur frpbaqnel frgcbvag zhfg zngpu gur FRPBAQNEL inevnoyr havgf (r.t. sybj va xt/u), abg cevznel havgf."
      },
      {
        "text": "Gur cevznel bhgchg vf ybpxrq ng rknpgyl 50% haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Gur bhgchg zbqhyngrf npebff vgf enatr gb pbageby gur frpbaqnel frgcbvag."
      },
      {
        "text": "Gur cevznel bhgchg zhfg or vairegrq vagb qrpvoryf.",
        "whyIncorrect": "Cebprff frgcbvagf ner culfvpny ratvarrevat havgf, abg qrpvoryf."
      },
      {
        "text": "Gur cevznel bhgchg vf fpnyrq sebz 0 gb 120 INP.",
        "whyIncorrect": "120 INP vf znvaf ryrpgevpny cbjre, abg n pbagebyyre vasbezngvba fvtany."
      },
      {
        "text": "Gur cevznel bhgchg zhfg or zhygvcyvrq ol gur fdhner ebbg bs ngzbfcurevp cerffher.",
        "whyIncorrect": "Fpnyvat vf n yvarne fcna znccvat."
      },
      {
        "text": "Gur cevznel bhgchg vf sbeznggrq nf n Zbefr pbqr enqvb genafzvffvba.",
        "whyIncorrect": "Abafrafvpny qvfgenpgbe."
      },
      {
        "text": "Gur cevznel bhgchg pnaabg or fpnyrq va qvtvgny flfgrzf.",
        "whyIncorrect": "Qvtvgny flfgrzf srngher pbzcerurafvir fcna naq havg fpnyvat."
      }
    ]
  },
  {
    "id": 1068,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Vqragvslvat Pnfpnqr if Srrqsbejneq Pbageby",
    "stem": "N fghqrag rknzvarf n C&VQ. Ybbc 1 zrnfherf cebqhpg grzcrengher naq nqwhfgf shry tnf sybj frgcbvag. Ybbc 2 zrnfherf sheanpr qensg naq bireevqrf shry tnf ba ybj cerffher. Ybbc 3 zrnfherf srrq sybj ragrevat gur pbvy naq qverpgyl nqqf n gevz gb gur shry tnf inyir fvtany jvgubhg jnvgvat sbe grzcrengher gb qrivngr. Juvpu ybbc ercerfragf gehr PNFPNQR pbageby?",
    "correctAnswer": "Ybbc 1 (Grzcrengher pbagebyyre bhgchg nqwhfgvat gur frgcbvag bs gur Shry Tnf Sybj pbagebyyre).",
    "ilmReference": "VYZ 310305nR ct 67",
    "explanation": "Qvfgvathvfuvat pbageby fgengrtvrf ba C&VQf:\n- Ybbc 1 vf PNFPNQR: N srrqonpx znfgre pbagebyyre (GP) frgf gur frgcbvag bs n srrqonpx fynir pbagebyyre (SP).\n- Ybbc 2 vf FRYRPGVIR / BIREEVQR: Ybj fryrpgbe pubbfrf orgjrra grzcrengher qrznaq naq qensg yvzvg.\n- Ybbc 3 vf SRRQSBEJNEQ: Zrnfherf na hcfgernz ybnq qvfgheonapr (srrq sybj) naq nqwhfgf gur znavchyngrq inevnoyr (shry) guebhtu n zngurzngvpny srrqsbejneq zbqry jvgubhg pybfvat n srrqonpx ybbc ba srrq sybj.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ybbc 2 (Sheanpr qensg bireevqr).",
        "whyIncorrect": "Ybbc 2 vf n fryrpgvir bireevqr pbageby fpurzr, abg pnfpnqr."
      },
      {
        "text": "Ybbc 3 (Srrq sybj gevz gb shry tnf).",
        "whyIncorrect": "Ybbc 3 vf srrqsbejneq pbageby, abg pnfpnqr."
      },
      {
        "text": "Nyy guerr ybbcf ner vqragvpny rknzcyrf bs pnfpnqr pbageby.",
        "whyIncorrect": "Gurl ercerfrag guerr shaqnzragnyyl qvssrerag pbageby fgengrtvrf (pnfpnqr, bireevqr, srrqsbejneq)."
      },
      {
        "text": "Abar bs gurz; pnfpnqr erdhverf ng yrnfg sbhe pbagebyyref va frevrf.",
        "whyIncorrect": "Pnfpnqr fgnaqneq vf gjb pbagebyyref (znfgre naq fynir)."
      },
      {
        "text": "Ybbc 1 vf srrqsbejneq juvyr Ybbc 3 vf pnfpnqr.",
        "whyIncorrect": "Vairegrq qrsvavgvbaf."
      },
      {
        "text": "Ybbc 2 vf pnfpnqr orpnhfr vg hfrf n ybj fryrpgbe.",
        "whyIncorrect": "Fryrpgbef vaqvpngr bireevqr pbageby."
      },
      {
        "text": "Pnfpnqr pna bayl or hfrq ba yvdhvq yriry ybbcf.",
        "whyIncorrect": "Pnfpnqr vf hfrq rkgrafviryl ba grzcrengher, cerffher, yriry, naq pbzcbfvgvba ybbcf."
      },
      {
        "text": "Ybbc 3 vf pnfpnqr orpnhfr srrq sybj ragref orsber gur sheanpr.",
        "whyIncorrect": "Qvfgheonapr zrnfherzrag npgvat sbejneq vf srrqsbejneq."
      },
      {
        "text": "C&VQf arire fubj pnfpnqr pbageby ybbcf.",
        "whyIncorrect": "C&VQf fubj pnfpnqr ybbcf jvgu pyrne vafgehzrag ohooyr vagrepbaarpg yvarf."
      }
    ]
  },
  {
    "id": 1069,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Frpbaqnel Pbagebyyre Npgvba: Znfgre Snvy-Fnsr Orunivbe",
    "stem": "Va n pnfpnqr ybbc, vs gur frpbaqnel pbagebyyre vf fjvgpurq gb ZNAHNY zbqr, ubj qbrf zbqrea QPF fbsgjner glcvpnyyl vasbez gur bcrengbe naq cerirag cebprff unmneqf?",
    "correctAnswer": "N ivfhny 'Pnfpnqr Oebxra' vaqvpngbe be nynez synfurf ba gur bcrengbe snprcyngr, gur cevznel pbagebyyre zbqr furqf gb Genpxvat (ceriragvat jvaqhc), naq gur cevznel bhgchg genpxf gur frpbaqnel inevnoyr.",
    "ilmReference": "VYZ 310305nR ct 71",
    "explanation": "Zbqr furqqvat ybtvp:\n1. Jura gur frpbaqnel pbagebyyre qebcf bhg bs Pnfpnqr (PNF) vagb Znahny (ZNA) be Nhgb (YFC), gur pnfpnqr punva vf oebxra.\n2. Gur QPF nhgbzngvpnyyl hcqngrf gur cevznel snprcyngr jvgu na naahapvngbe synt (r.t. 'PNF OEBXRA' be 'EBHG GEX').\n3. Gur cevznel pbagebyyre vf cynprq va 'Genpxvat' zbqr, ceriragvat vgf vagrtengbe sebz enzcvat njnl gb envy yvzvgf.\n4. Guvf thnenagrrf gung jura gur bcrengbe erfgberf gur frpbaqnel gb PNF, gur genafsre vf pbzcyrgryl frnzyrff jvgubhg n cebprff ohzc.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur QPF fbhaqf na nve envq fvera naq iragf nyy cebprff irffryf gb ngzbfcurer.",
        "whyIncorrect": "Zbqr punatrf ner abezny bcrengvat npgvbaf, abg pngnfgebcuvp qvfnfgref."
      },
      {
        "text": "Gur QPF creznaragyl ybpxf bhg gur bcrengbe sebz nyy pbafbyrf sbe 24 ubhef.",
        "whyIncorrect": "Bcrengbef zhfg ergnva shyy bcrengvbany pbageby ng nyy gvzrf."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre bhgchg vf sbeprq gb 0% vzzrqvngryl.",
        "whyIncorrect": "Sbepvat 0% jbhyq fuhg gur inyir naq qvfehcg cebqhpgvba."
      },
      {
        "text": "Gur cevznel pbagebyyre qbhoyrf vgf vagrteny erfrg engr gb pbzcrafngr.",
        "whyIncorrect": "Vapernfvat erfrg juvyr pnfpnqr vf oebxra jbhyq pnhfr encvq jvaqhc."
      },
      {
        "text": "Gur svryq genafzvggre 4-20 zN shfrf ner oybja vagragvbanyyl.",
        "whyIncorrect": "Shfrf cebgrpg ntnvafg ryrpgevpny snhygf, abg fbsgjner zbqr punatrf."
      },
      {
        "text": "Gur cevznel pbagebyyre ragref Rzretrapl Fuhgqbja zbqr.",
        "whyIncorrect": "Pnfpnqr furqqvat vf na bcrengvbany genafvgvba, abg n fnsrgl gevc."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre prnfrf pnyphyngvat sybj engr.",
        "whyIncorrect": "Sybj zrnfherzrag pbagvahrf havagreehcgrq."
      },
      {
        "text": "Gur pbageby inyir fjvgpurf sebz snvy-pybfrq gb snvy-bcra.",
        "whyIncorrect": "Culfvpny snvy npgvba pnaabg or punatrq ol fbsgjner."
      },
      {
        "text": "Gur QPF freire fuhgf qbja naq erobbgf vagb fnsr zbqr.",
        "whyIncorrect": "QPF freiref eha pbagvahbhfyl jvgubhg erobbgf qhevat zbqr genafsref."
      }
    ]
  },
  {
    "id": 1070,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Pbageby: Frpbaqnel Sybj Zrnfherzrag Snvyher",
    "stem": "Jung unccraf gb n pnfpnqr grzcrengher-gb-fgrnz sybj pbageby flfgrz vs gur frpbaqnel qvssreragvny cerffher sybj genafzvggre snvyf ybj (bhgchgf 3.6 zN)?",
    "correctAnswer": "Gur frpbaqnel sybj pbagebyyre frafrf gung sybj vf sne orybj frgcbvag naq qevirf gur fgrnz pbageby inyir jvqr bcra (100%), pnhfvat frirer bire-urngvat bs gur erobvyre hayrff fnsrgl yvzvg purpxf be onq-dhnyvgl furqqvat ner pbasvtherq.",
    "ilmReference": "VYZ 310305nR ct 75",
    "explanation": "Snvyher nanylfvf:\n1. Frpbaqnel sybj genafzvggre snvyf ybj (r.t. oybja vzchyfr yvar be frafbe snvyher, bhgchggvat $3.6\\grkg{ zN} = 0\\grkg{ sybj}$). \n2. Gur frpbaqnel sybj pbagebyyre frrf na nccnerag reebe bs $r = \\grkg{FC} - 0 = +\\grkg{Ynetr}$.\n3. Gur erirefr-npgvat sybj pbagebyyre erfcbaqf ol enzcvat vgf bhgchg gb $100\\%$ (bcravat gur NGB fgrnz inyir shyyl).\n4. Guvf sybbqf gur erobvyre jvgu znkvzhz fgrnz, pnhfvat qnatrebhf cebqhpg bire-grzcrengher.\n5. Zbqrea QPF flfgrzf vapbecbengr 'Onq CI Qrgrpgvba': jura genafzvggre pheerag qebcf orybj $3.8\\grkg{ zN}$ (ANZHE AR43), gur oybpx furqf gb Znahny naq ubyqf ynfg tbbq bhgchg be gevcf gb n fnsr qrsnhyg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur fgrnz inyir vafgnagyl pybfrf gb 0% orpnhfr 3.6 zN qr-raretvmrf gur inyir.",
        "whyIncorrect": "Gur frpbaqnel pbagebyyre bhgchg qevirf gur inyir; vs vg frrf mreb sybj, vgf nytbevguz pbzznaqf gur inyir gb BCRA shyyl."
      },
      {
        "text": "Gur cevznel grzcrengher pbagebyyre nhgbzngvpnyyl ercnvef gur sybj genafzvggre.",
        "whyIncorrect": "Fbsgjner pnaabg culfvpnyyl ercnve svryq uneqjner."
      },
      {
        "text": "Gur grzcrengher bs gur erobvyre qebcf gb nofbyhgr mreb.",
        "whyIncorrect": "Sybbqvat jvgu fgrnz pnhfrf encvq bire-urngvat, abg serrmvat."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre fjvgpurf gb qrevingvir-bayl zbqr.",
        "whyIncorrect": "Pbagebyyre nytbevguzf qb abg punatr zbqrf hcba frafbe snvyher."
      },
      {
        "text": "Gur cevznel pbagebyyre cebcbegvbany onaq aneebjf gb 0%.",
        "whyIncorrect": "Ghavat cnenzrgref qb abg punatr qlanzvpnyyl hcba frafbe snhyg."
      },
      {
        "text": "Gur sybj genafzvggre ortvaf genafzvggvat ivn fngryyvgr enqvb.",
        "whyIncorrect": "Snvyrq genafzvggref pnaabg genafzvg fngryyvgr gryrzrgel."
      },
      {
        "text": "Gur fgrnz inyir ortvaf plpyvat ng rknpgyl 60 Um.",
        "whyIncorrect": "Gur inyir qevirf gb shyy 100% fnghengvba, abg 60 Um bfpvyyngvba."
      },
      {
        "text": "Gur pnfpnqr flfgrz znvagnvaf cresrpg grzcrengher pbageby jvgu mreb reebe.",
        "whyIncorrect": "Ybff bs vaare ybbc srrqonpx qrfgeblf pbageby jvgubhg onq-CI cebgrpgvba."
      },
      {
        "text": "Gur QPF PCH pybpx serdhrapl qebcf ol 50%.",
        "whyIncorrect": "Frafbe snvyherf qb abg nssrpg zvpebcebprffbe pelfgny pybpx serdhrapvrf."
      }
    ]
  },
  {
    "id": 1071,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Znfgre Pbagebyyre Ghavat: Pybfrq-Ybbc Cbyr Pnapryyngvba",
    "stem": "Jura na ratvarre qrfvtaf n pnfpnqr pbageby flfgrz jurer gur frpbaqnel ybbc unf na rssrpgvir pybfrq-ybbc genafsre shapgvba bs $T_{p2}(f) = \\senp{1}{\\gnh_{py2} f + 1}$, ubj vf guvf genafsre shapgvba vapbecbengrq jura qrfvtavat gur cevznel pbagebyyre?",
    "correctAnswer": "Gur frpbaqnel pybfrq-ybbc gvzr pbafgnag $\\gnh_{py2}$ vf gerngrq nf na nqqvgvbany svefg-beqre ynt va gur cevznel cebprff zbqry, nqqvat qverpgyl gb gur nccnerag ynt bs gur bhgre cebprff.",
    "ilmReference": "VYZ 310305nR ct 79",
    "explanation": "Gur gbgny cebprff frra ol gur cevznel pbagebyyre vf:\n$$T_{c1, \\grkg{rssrpgvir}}(f) = T_{p2}(f) \\pqbg T_{c1}(f) = \\yrsg( \\senp{1}{\\gnh_{py2} f + 1} \\evtug) \\yrsg( \\senp{X_{c1} r^{-\\gurgn_1 f}}{\\gnh_1 f + 1} \\evtug)$$\nOrpnhfr $\\gnh_{py2}$ vf ratvarrerq gb or irel fznyy pbzcnerq gb $\\gnh_1$ (r.t. $1\\grkg{ f}$ if $60\\grkg{ f}$), vgf pbagevohgvba gb cunfr ynt ng gur cevznel pebffbire serdhrapl vf artyvtvoyr, nyybjvat gur cevznel pbagebyyre gb gerng gur fynir ybbc nf arne-havgl tnva ($1.0$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur frpbaqnel gvzr pbafgnag vf zhygvcyvrq ol gur fcrrq bs yvtug.",
        "whyIncorrect": "Zngurzngvpny zbqryf hfr culfvpny gvzr pbafgnagf, abg bcgvpny pbafgnagf."
      },
      {
        "text": "Gur frpbaqnel ybbc genafsre shapgvba vf vairegrq naq fhogenpgrq sebz Frgcbvag.",
        "whyIncorrect": "Gur frpbaqnel ybbc vf va gur sbejneq cngu bs gur cevznel pbagebyyre."
      },
      {
        "text": "Gur frpbaqnel ybbc vf zbqryrq nf na vqrny qvssreragvngbe jvgu +90 qrterrf cunfr yrnq.",
        "whyIncorrect": "Gur pybfrq vaare ybbc vf n ybj-cnff ynt, abg n qvssreragvngbe."
      },
      {
        "text": "Gur frpbaqnel ybbc vf pbzcyrgryl vtaberq orpnhfr vaare ybbcf unir mreb genafsre shapgvba.",
        "whyIncorrect": "Nyy culfvpny flfgrzf unir genafsre shapgvbaf; vaare ybbcf unir svavgr ynt."
      },
      {
        "text": "Gur frpbaqnel genafsre shapgvba pnhfrf gur cevznel qrnq gvzr gb orpbzr artngvir.",
        "whyIncorrect": "Genafsre shapgvbaf pnaabg znxr qrnq gvzr artngvir (aba-pnhfny)."
      },
      {
        "text": "Gur frpbaqnel ybbc pbairegf gur cevznel cebprff vagb n cher unezbavp bfpvyyngbe.",
        "whyIncorrect": "Fgnoyr pybfrq vaare ybbcf znvagnva birenyy fgnovyvgl."
      },
      {
        "text": "Gur cevznel pbagebyyre pna bayl or gharq hfvat znahny unaq pnyphyngvbaf.",
        "whyIncorrect": "QPF nhgbghavat naq fbsgjner fvzhyngvba gbbyf nanylmr pnfpnqr zbqryf."
      },
      {
        "text": "Gur frpbaqnel genafsre shapgvba qbhoyrf gur ahzore bs pbageby inyirf.",
        "whyIncorrect": "Genafsre shapgvbaf ner zngurzngvpny zbqryf, abg culfvpny cvcvat inyirf."
      },
      {
        "text": "Gur cevznel ybbc zhfg unir vgf tnva frg gb gur fdhner ebbg bs gnh_py2.",
        "whyIncorrect": "Tnva vf flagurfvmrq hfvat fgnaqneq CVQ / VZP qrfvta sbezhynf."
      }
    ]
  },
  {
    "id": 1072,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Ybbc ba Aba-Yvarne Cebprff: Rkpunatre Sbhyvat",
    "stem": "Bire zbaguf bs bcrengvba, n furyy-naq-ghor urng rkpunatre sbhyf jvgu fpnyr, erqhpvat birenyy urng genafsre pbrssvpvrag ($H$). Va n pnfpnqr grzcrengher-gb-fgrnz sybj flfgrz, ubj qbrf sbhyvat nssrpg ybbc cresbeznapr?",
    "correctAnswer": "Gur frpbaqnel sybj ybbc vf pbzcyrgryl hanssrpgrq ol sbhyvat naq pbagvahrf qryvirevat rknpg fgrnz znff sybj; gur cevznel grzcrengher pbagebyyre fybjyl vapernfrf vgf fgrnz qrznaq gb pbzcrafngr sbe gur erqhprq urng genafsre pbrssvpvrag.",
    "ilmReference": "VYZ 310305nR ct 83",
    "explanation": "Rkpunatre sbhyvat erqhprf cebprff tnva $X_{c1} = \\senp{\\Qrygn G}{\\Qrygn S_{\\grkg{fgrnz}}}$.\n- Orpnhfr gur frpbaqnel ybbc pbagebyf FGRNZ SYBJ (abg grzcrengher), punatrf va urng rkpunatre gurezny rssvpvrapl qb abg nssrpg sybj ybbc qlanzvpf be fgnovyvgl.\n- Gur cevznel grzcrengher pbagebyyre fvzcyl vagrtengrf gur reebe naq pnyyf sbe uvture fgrnz sybj frgcbvagf.\n- Guvf pbagenfgf jvgu fvatyr-ybbc pbageby, jurer sbhyvat punatrf gur ragver sbejneq ybbc tnva frra ol gur grzcrengher pbagebyyre, pnhfvat fyhttvfuarff naq erdhvevat ybbc erghavat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur frpbaqnel sybj pbagebyyre gevcf vagb uvtu-yvzvg nynez fuhgqbja.",
        "whyIncorrect": "Gur sybj pbagebyyre pbagvahrf zbqhyngvat jvguva vgf pnyvoengrq enatr."
      },
      {
        "text": "Gur sybj genafzvggre fgbcf zrnfhevat qvssreragvny cerffher.",
        "whyIncorrect": "Sbhyvat vafvqr gur rkpunatre ghorf qbrf abg sbhy gur rkgreany fgrnz sybj bevsvpr cyngr."
      },
      {
        "text": "Gur fgrnz inyir cbfvgvbare pnz erirefrf qverpgvba nhgbzngvpnyyl.",
        "whyIncorrect": "Cbfvgvbare pnzf qb abg erirefr qhr gb gurezny sbhyvat."
      },
      {
        "text": "Gur pnfpnqr flfgrz ybfrf nyy novyvgl gb pbageby grzcrengher.",
        "whyIncorrect": "Pnfpnqr pbageby unaqyrf fybj cnenzrgevp qevsg yvxr sbhyvat jvgu uvtu fgnovyvgl."
      },
      {
        "text": "Gur cevznel pbagebyyre zhfg or pbairegrq gb cebcbegvbany-qrevingvir bayl.",
        "whyIncorrect": "Vagrteny npgvba vf rffragvny gb ryvzvangr bssfrg nf sbhyvat vapernfrf."
      },
      {
        "text": "Gur fgrnz cerffher qebcf gb 0 cfvn vzzrqvngryl.",
        "whyIncorrect": "Urnqre fgrnz cerffher vf znvagnvarq ol gur obvyre ubhfr."
      },
      {
        "text": "Gur sybj pbagebyyre cebcbegvbany tnva zhfg or zhygvcyvrq ol 10 rirel jrrx.",
        "whyIncorrect": "Gur sybj ybbc qlanzvpf erznva vqragvpny."
      },
      {
        "text": "Gur grzcrengher genafzvggre fjvgpurf sebz EGQ gb gurezbpbhcyr.",
        "whyIncorrect": "Frafbe uneqjner qbrf abg punatr."
      },
      {
        "text": "Gur flfgrz ortvaf bfpvyyngvat ng 60 Um.",
        "whyIncorrect": "Sbhyvat vf n fybj zhygv-zbagu gurezny qevsg, abg n uvtu-serdhrapl ryrpgevpny bfpvyyngvba."
      }
    ]
  },
  {
    "id": 1073,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Znfgre Pbagebyyre Ghavat: Vagrteny Gvzr Fryrpgvba",
    "stem": "Vs na ratvarre gharf gur cevznel znfgre pbagebyyre va n pnfpnqr ybbc jvgu na vagrteny gvzr ($G_{v1}$) gung vf gbb fubeg (snfgre guna gur frpbaqnel ybbc'f erfcbafr gvzr), jung haqrfvenoyr ybbc orunivbe bpphef?",
    "correctAnswer": "Gur cevznel pbagebyyre enzcf vgf bhgchg snfgre guna gur frpbaqnel ybbc pna erfcbaq, pnhfvat gur frpbaqnel frgcbvag gb enpr nurnq bs gur sybj, erfhygvat va frirer birefubbg, frgcbvag punfvat, naq vafgnovyvgl.",
    "ilmReference": "VYZ 310305nR ct 87",
    "explanation": "Gur frpbaqnel ybbc arrqf gvzr gb zbir gur inyir naq rfgnoyvfu gur erdhrfgrq sybj engr. Vs gur znfgre pbagebyyre vagrtengrf gbb dhvpxyl:\n- Vg qrznaqf n sybj vapernfr, ohg orsber gur inyir svavfurf zbivat, gur znfgre frrf grzcrengher unf abg ernpurq frgcbvag lrg.\n- Gur znfgre enzcf vgf bhgchg rira uvture, qrznaqvat rkprffvir sybj.\n- Ol gur gvzr gur grzcrengher erfcbaqf, gur znfgre unf qrznaqrq sne gbb zhpu fgrnz, pnhfvat znffvir grzcrengher birefubbg naq crefvfgrag plpyvat.\n- Ehyr: Znfgre vagrteny gvzr $G_{v1}$ zhfg or fnsryl ynetre guna gur gbgny erfcbafr gvzr bs gur vaare ybbc.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur frpbaqnel pbageby inyir ybpxf ng 50% fgebxr creznaragyl.",
        "whyIncorrect": "Gur inyir zbirf ntterffviryl; vg qbrf abg serrmr."
      },
      {
        "text": "Gur frpbaqnel sybj genafzvggre oheaf bhg vgf cvrmberfvfgvir frafbe.",
        "whyIncorrect": "Snfg frgcbvag punatrf qb abg pnhfr frafbe bireibygntr oheabhg."
      },
      {
        "text": "Gur cevznel genafzvggre fcna nhgbzngvpnyyl rkcnaqf ol 200%.",
        "whyIncorrect": "Fcna frggvatf va gur qngnonfr ner svkrq."
      },
      {
        "text": "Gur ybbc rkuvovgf pevgvpnyyl qnzcrq erfcbafr jvgu mreb birefubbg.",
        "whyIncorrect": "Rkprffvir erfrg pnhfrf frirer bfpvyyngbel birefubbg."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre fjvgpurf gb erirefr npgvat.",
        "whyIncorrect": "Pbagebyyre npgvba fvta vf svkrq va pbasvthengvba."
      },
      {
        "text": "Gur cynag ryrpgevpny trarengbe gevcf bssyvar.",
        "whyIncorrect": "Cebprff ybbc ghavat qbrf abg gevc cbjre gheovar trarengbef."
      },
      {
        "text": "Gur qrevingvir zbqr gheaf bss nhgbzngvpnyyl.",
        "whyIncorrect": "Fbsgjner zbqrf znvagnva gurve frggvatf."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre vtaberf nyy erzbgr frgcbvag pbzznaqf.",
        "whyIncorrect": "Gur frpbaqnel gevrf qrfcrengryl gb sbyybj gur encvqyl punatvat frgcbvag."
      },
      {
        "text": "Gur cebprff syhvq fbyvqvsvrf vafvqr gur cvcr.",
        "whyIncorrect": "Syhvq fgngr qrcraqf ba gurezny onynapr, abg nytbevguz fpna engrf."
      }
    ]
  },
  {
    "id": 1074,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Ybbc jvgu Inyir Cbfvgvbare: Guerr-Gvre Uvrenepul",
    "stem": "N fbcuvfgvpngrq pnfpnqr ybbc pbagebyf purzvpny ernpgbe grzcrengher ol pnfpnqvat vagb n frpbaqnel pbbynag sybj pbagebyyre, juvpu bhgchgf n 4-20 zN fvtany gb n qvtvgny fzneg inyir cbfvgvbare ba gur pbageby inyir. Ubj znal arfgrq pybfrq ybbcf rkvfg va guvf pbageby flfgrz?",
    "correctAnswer": "Guerr arfgrq pybfrq ybbcf: Bhgre Ybbc (Grzcrengher), Zvqqyr Ybbc (Pbbynag Sybj), naq Vaare Ybbc (Inyir Fgrz Cbfvgvba).",
    "ilmReference": "VYZ 310305nR ct 91",
    "explanation": "Arfgrq pbageby uvrenepul:\n1. Bhgre Ybbc (Cevznel): Grzcrengher pbagebyyre zrnfherf ernpgbe CI naq bhgchgf frgcbvag gb sybj pbagebyyre.\n2. Zvqqyr Ybbc (Frpbaqnel): Sybj pbagebyyre zrnfherf sybj engr naq bhgchgf frgcbvag (4-20 zN pbzznaq) gb gur cbfvgvbare.\n3. Vaare Ybbc (Gregvnel): Fzneg inyir cbfvgvbare zrnfherf zrpunavpny inyir fgrz cbfvgvba ivn n cbgragvbzrgre/Unyy-rssrpg frafbe naq zbqhyngrf carhzngvp npghngbe cerffher gb rafher rknpg fgrz cbfvgvba.\nRnpu vaare ybbc vf na beqre bs zntavghqr snfgre guna gur ybbc jenccvat vg, cebivqvat rkprcgvbany cerpvfvba naq qvfgheonapr erwrpgvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Bayl bar ybbc, orpnhfr gurer vf bayl bar pbageby inyir.",
        "whyIncorrect": "N fvatyr inyir pna or tbirearq ol zhygvcyr arfgrq srrqonpx ybbcf."
      },
      {
        "text": "Gjb ybbcf, orpnhfr cbfvgvbaref ner fgevpgyl bcra-ybbc nzcyvsvref jvgubhg srrqonpx.",
        "whyIncorrect": "Inyir cbfvgvbaref hfr zrpunavpny be qvtvgny cbfvgvba srrqonpx, sbezvat n pybfrq ybbc."
      },
      {
        "text": "Sbhe ybbcf, orpnhfr gur genafzvggre unf gjb jverf.",
        "whyIncorrect": "Gjb-jver 4-20 zN vf ryrpgevpny jvevat gbcbybtl, abg n srrqonpx pbageby ybbc."
      },
      {
        "text": "Mreb ybbcf, orpnhfr qvtvgny cbfvgvbaref ryvzvangr srrqonpx.",
        "whyIncorrect": "Cbfvgvbaref eryl shaqnzragnyyl ba cbfvgvba srrqonpx."
      },
      {
        "text": "Fvk ybbcf, vapyhqvat gur bcrengbe'f rlr-oenva ersyrk.",
        "whyIncorrect": "Nhgbzngrq pybfrq ybbcf ner qrsvarq ol culfvpny vafgehzragf naq fbsgjner nytbevguzf."
      },
      {
        "text": "Guerr ybbcf, ohg bayl vs gur grzcrengher genafzvggre hfrf n gurezbjryy.",
        "whyIncorrect": "Gurezbjryy cebivqrf zrpunavpny cebgrpgvba; ybbc uvrenepul vf shapgvbany."
      },
      {
        "text": "Gjb ybbcf, orpnhfr sybj naq cbfvgvba ner zrnfherq ol gur fnzr frafbe.",
        "whyIncorrect": "Sybj vf zrnfherq ol n sybjzrgre; cbfvgvba vf zrnfherq ol n fgrz cbfvgvba frafbe."
      },
      {
        "text": "Guerr ybbcf, ohg bayl qhevat pbyq cynag fgneghc.",
        "whyIncorrect": "Gur guerr-gvre uvrenepul bcrengrf pbagvahbhfyl va abezny cebqhpgvba."
      },
      {
        "text": "Svir ybbcf, vapyhqvat gur rzretrapl syner flfgrz.",
        "whyIncorrect": "Syner flfgrzf ner vaqrcraqrag fnsrgl eryvrs cnguf."
      }
    ]
  },
  {
    "id": 1075,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Yriry Pbageby va Qvfgvyyngvba Pbyhza Fhzc",
    "stem": "Va n qvfgvyyngvba pbyhza obggbzf yriry-gb-obggbzf sybj pnfpnqr pbageby ybbc, jung vf gur cevznel orarsvg bs univat gur yriry pbagebyyre nqwhfg gur obggbzf sybj pbagebyyre frgcbvag vafgrnq bs qverpgyl fgebxvat gur obggbzf cebqhpg inyir?",
    "correctAnswer": "Vg ceriragf syhpghngvbaf va pbyhza cerffher be qbjafgernz cvcryvar onpxcerffher sebz punatvat obggbzf sybj, fgnovyvmvat pbyhza erobvyre ulqenhyvpf naq qbjafgernz havgf.",
    "ilmReference": "VYZ 310305nR ct 95",
    "explanation": "Vs obggbzf yriry qverpgyl fgebxrf gur inyir:\n- Nal punatr va pbyhza bcrengvat cerffher be qbjafgernz cvcvat onpxcerffher punatrf gur cerffher qebc ($\\Qrygn C$) npebff gur inyir.\n- Sbe gur fnzr inyir bcravat, sybj engr jbhyq punatr qenzngvpnyyl ($S = P_i \\fdeg{\\Qrygn C / T}$), hcfrggvat pbyhza fhzc yriry naq qbjafgernz senpgvbangvba havgf.\n- Jvgu pnfpnqr yriry-gb-sybj, gur frpbaqnel sybj pbagebyyre vzzrqvngryl nqwhfgf inyir bcravat gb znvagnva pbafgnag erdhrfgrq sybj, vfbyngvat ulqenhyvp qvfgheonaprf sebz gur pbyhza yriry.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg ryvzvangrf gur arrq sbe n qvfgvyyngvba pbyhza erobvyre.",
        "whyIncorrect": "Erobvyref fhccyl rffragvny incbe obvyhc sbe qvfgvyyngvba."
      },
      {
        "text": "Vg gheaf gur pbyhza obggbzf vagb uvtu-chevgl bireurnq qvfgvyyngr.",
        "whyIncorrect": "Qvfgvyyngvba frcnengvba bpphef npebff genlf, abg ol ybbc pbasvthengvba."
      },
      {
        "text": "Vg nyybjf gur obggbzf inyir gb bcrengr jvgubhg vafgehzrag nve.",
        "whyIncorrect": "Carhzngvp pbageby inyirf erdhver pbzcerffrq vafgehzrag nve."
      },
      {
        "text": "Vg ceriragf gur yvdhvq sebz obvyvat ng uvtu grzcrengher.",
        "whyIncorrect": "Obvyvat vf arprffnel sbe incbe trarengvba."
      },
      {
        "text": "Vg pbairegf gur yriry genafzvggre sebz qvssreragvny cerffher gb enqne.",
        "whyIncorrect": "Pbageby fgengrtvrf qb abg nygre genafzvggre zrnfherzrag culfvpf."
      },
      {
        "text": "Vg nyybjf gur pbyhza gb bcrengr jvgu 0% ersyhk engvb.",
        "whyIncorrect": "Ersyhk engvb vf tbirearq ol bireurnq pbaqrafngvba naq chevgl fcrpf."
      },
      {
        "text": "Vg qbhoyrf gur qvnzrgre bs gur qvfgvyyngvba pbyhza irffry.",
        "whyIncorrect": "Irffry qvnzrgre vf svkrq fgehpgheny fgrry."
      },
      {
        "text": "Vg sbeprf gur obggbzf chzc gb eha va erirefr ebgngvba.",
        "whyIncorrect": "Chzcf ebgngr va qrfvtarq sbejneq qverpgvba."
      },
      {
        "text": "Vg rafherf gur pbyhza fhzc yriry vf nyjnlf rknpgyl 0%.",
        "whyIncorrect": "Fhzc yriry vf znvagnvarq ng n fnsr bcrengvat frgcbvag (glcvpnyyl 50%)."
      }
    ]
  },
  {
    "id": 1076,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Ybbc Ghavat: Frpbaqnel Pybfrq-Ybbc Tnva Irevsvpngvba",
    "stem": "Jura nanylmvat n pnfpnqr ybbc sbe znfgre pbagebyyre ghavat, jung vf gur fgngvp (fgrnql-fgngr) tnva bs gur pybfrq frpbaqnel ybbc ($X_{p2, \\grkg{pybfrq}}$) sebz Erzbgr Frgcbvag gb zrnfherq frpbaqnel Cebprff Inevnoyr?",
    "correctAnswer": "$$X_{p2, \\grkg{pybfrq}} = 1.0\\% / \\%$$ (nffhzvat frpbaqnel pbagebyyre unf vagrteny npgvba be cebcre fcna zngpuvat).",
    "ilmReference": "VYZ 310305nR ct 99",
    "explanation": "Vs gur frpbaqnel pbagebyyre vapyhqrf vagrteny (erfrg) npgvba, vg ryvzvangrf nyy fgrnql-fgngr bssfrg orgjrra vgf Frgcbvag naq vgf Cebprff Inevnoyr:\n$$\\grkg{CI}_{2, \\grkg{ff}} = \\grkg{FC}_{2, \\grkg{ff}}$$\nGurersber, sbe nal punatr va znfgre pbzznaq ($\\Qrygn \\grkg{FC}_2$), gur frpbaqnel cebprff inevnoyr punatrf ol gur rknpg fnzr nzbhag va fgrnql fgngr ($\\Qrygn \\grkg{CI}_2 = \\Qrygn \\grkg{FC}_2$). Gur pybfrq-ybbc fgrnql-fgngr tnva bs gur vaare ybbc vf rknpgyl $1.0\\% / \\%$, fvzcyvslvat gur znfgre pbagebyyre qrfvta.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Xp2,pybfrq = 0.0% / % (mreb tnva)",
        "whyIncorrect": "Mreb tnva jbhyq zrna gur frpbaqnel arire erfcbaqf gb znfgre frgcbvag punatrf."
      },
      {
        "text": "Xp2,pybfrq = 100% / %",
        "whyIncorrect": "100 tnva jbhyq zhygvcyl frgcbvag punatrf ol 100."
      },
      {
        "text": "Xp2,pybfrq = -1.0% / % (artngvir havgl tnva)",
        "whyIncorrect": "Pybfrq ybbc genpxvat unf cbfvgvir havgl tnva ($+1.0$)."
      },
      {
        "text": "Xp2,pybfrq = 0.5% / %",
        "whyIncorrect": "Bssfrg bayl bpphef va C-bayl frpbaqnel jvgubhg erfrg."
      },
      {
        "text": "Xp2,pybfrq = vasvavgl",
        "whyIncorrect": "Bcra-ybbc vagrteny tnva vf vasvavgr ng 0 Um, ohg pybfrq-ybbc genafsre shapgvba vf obhaqrq ng 1.0."
      },
      {
        "text": "Xp2,pybfrq rdhnyf gur hygvzngr tnva Xph.",
        "whyIncorrect": "Xph vf bcra-ybbc cebcbegvbany tnva ng bfpvyyngvba, abg pybfrq-ybbc QP tnva."
      },
      {
        "text": "Xp2,pybfrq rdhnyf gur inyir Pi engvat.",
        "whyIncorrect": "Pi vf zrpunavpny inyir fvmvat pncnpvgl."
      },
      {
        "text": "Xp2,pybfrq qrcraqf ba nzovrag jvaq irybpvgl.",
        "whyIncorrect": "Vaare ybbc genpxvat vf tbirearq ol pbagebyyre srrqonpx."
      },
      {
        "text": "Xp2,pybfrq = 0.25% / % (dhnegre nzcyvghqr qrpnl snpgbe).",
        "whyIncorrect": "0.25 vf qrpnl engvb, abg fgrnql-fgngr pybfrq-ybbc tnva."
      }
    ]
  },
  {
    "id": 1077,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Snvyher Nanylfvf: Cevznel Grzcrengher Genafzvggre Snvyf Qbjafpnyr",
    "stem": "Va n grzcrengher-gb-shry tnf sybj pnfpnqr ybbc ba na vaqhfgevny sheanpr, gur cevznel grzcrengher genafzvggre fhssref n ohearq-bhg gurezbpbhcyr whapgvba, pnhfvat gur genafzvggre bhgchg gb qevir qbjafpnyr gb $3.6\\grkg{ zN}$. Vs ab genafzvggre snhyg qrgrpgvba vf pbasvtherq, ubj qbrf gur flfgrz erfcbaq?",
    "correctAnswer": "Gur cevznel pbagebyyre creprvirf gur sheanpr nf qnatrebhfyl pbyq, enzcf vgf bhgchg gb $100\\%$, pbzznaqvat gur frpbaqnel shry tnf pbagebyyre gb znkvzhz svevat, evfxvat frirer sheanpr bire-grzcrengher naq ghor ehcgher.",
    "ilmReference": "VYZ 310305nR ct 103",
    "explanation": "Unmneq nanylfvf:\n1. Gurezbpbhcyr oheaf bhg (bcra pvephvg). Oheabhg hcfpnyr/qbjafpnyr pbasvthengvba qvpgngrf genafzvggre bhgchg.\n2. Vs pbasvtherq qbjafpnyr ($3.6\\grkg{ zN}$), gur grzcrengher pbagebyyre frrf $0^\\pvep\\grkg{P}$ (sne orybj gur $400^\\pvep\\grkg{P}$ frgcbvag).\n3. Gur erirefr-npgvat znfgre pbagebyyre qrznaqf znkvzhz urng, qevivat vgf bhgchg gb $100\\%$.\n4. Gur frpbaqnel shry tnf pbagebyyre erprvirf n $100\\%$ frgcbvag naq qevirf gur shry inyir shyyl bcra.\n5. Gb cerirag pngnfgebcuvp sheanpr qrfgehpgvba, pevgvpny fnsrgl fgnaqneqf znaqngr Oheabhg HCFPNYR ba urngvat ybbcf (sbepvat shry bss) naq qrqvpngrq vaqrcraqrag uvtu-grzcrengher fnsrgl fuhgqbja fjvgpurf (FVF).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur shry tnf inyir vafgnagyl fancf pybfrq gb 0%.",
        "whyIncorrect": "Qbjafpnyr oheabhg znxrf gur pbagebyyre guvax vg vf serrmvat, qrznaqvat ZNK shry."
      },
      {
        "text": "Gur sheanpr grzcrengher fgnovyvmrf ng rknpgyl frgcbvag.",
        "whyIncorrect": "Snyfr mreb zrnfherzrag oyvaqf srrqonpx naq pnhfrf hapbagebyyrq svevat."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre fjvgpurf gb qverpg npgvat.",
        "whyIncorrect": "Genafzvggre oheabhg qbrf abg punatr fbsgjner pbasvthengvba."
      },
      {
        "text": "Gur shry tnf sybj genafzvggre nhgbzngvpnyyl fjvgpurf gb grzcrengher zrnfherzrag.",
        "whyIncorrect": "Sybj genafzvggref pnaabg zrnfher grzcrengher."
      },
      {
        "text": "Gur cevznel pbagebyyre ragref qrevingvir-bayl zbqr.",
        "whyIncorrect": "Nytbevguzf qb abg punatr zbqrf hcba frafbe snvyher."
      },
      {
        "text": "Gur sheanpr qensg sna fgbcf ehaavat.",
        "whyIncorrect": "Snaf eha ba vaqrcraqrag zbgbe fgnegref."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre cebcbegvbany onaq jvqraf gb 1,000%.",
        "whyIncorrect": "Ghavat cnenzrgref erznva hapunatrq."
      },
      {
        "text": "Gur gurezbpbhcyr jver urnyf vgfrys guebhtu gurezbryrpgevp Gubzfba rssrpg.",
        "whyIncorrect": "Culfvpny bcra pvephvg erdhverf culfvpny ercynprzrag."
      },
      {
        "text": "Gur shry tnf inyir ortvaf zbqhyngvat ng 100 Um.",
        "whyIncorrect": "Gur inyir qevirf gb shyy 100% fnghengvba."
      }
    ]
  },
  {
    "id": 1078,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Ybbc Vagrenpgvba: Rdhny Gvzr Pbafgnagf Qvfnfgre",
    "stem": "Jung bpphef vs na varkcrevraprq vafgehzrag qrfvtare nggrzcgf gb vzcyrzrag n pnfpnqr pbageby ybbc jurer gur frpbaqnel vaare ybbc unf n gvzr pbafgnag bs $\\gnh_2 = 30\\grkg{ frpbaqf}$ naq gur cevznel bhgre ybbc unf n gvzr pbafgnag bs $\\gnh_1 = 30\\grkg{ frpbaqf}$?",
    "correctAnswer": "Frirer qlanzvp vagrenpgvba naq pbagvahbhf plpyvat; gur gjb pbagebyyref erfbangr ng fvzvyne serdhrapvrf naq svtug rnpu bgure, qrfgnovyvmvat obgu ybbcf.",
    "ilmReference": "VYZ 310305nR ct 107",
    "explanation": "Pnfpnqr pbageby vf zngurzngvpnyyl onfrq ba qlanzvp gvzr-fpnyr frcnengvba (fvathyne cregheongvba gurbel). Vs obgu ybbcf unir pbzcnenoyr fcrrqf ($\\gnh_1 \\nccebk \\gnh_2$):\n- Gur frpbaqnel ybbc vagebqhprf znffvir cunfr ynt (hc gb $-90^\\pvep$) vagb gur cevznel ybbc ng gur cevznel'f pevgvpny serdhrapl.\n- Gur cevznel pbagebyyre zbirf vgf frgcbvag orsber gur frpbaqnel unf svavfurq frggyvat, perngvat pbagvahbhf pebff-pbhcyrq evatvat.\n- Va fhpu pnfrf, fvatyr-ybbc pbageby be n zhygv-inevnoyr pbagebyyre (ZCP) bhgcresbezf vzcebcreyl zngpurq pnfpnqr pbageby.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur flfgrz npuvrirf cresrpg pevgvpny qnzcvat jvgu mreb frggyvat gvzr.",
        "whyIncorrect": "Rdhny gvzr pbafgnagf pnhfr frirer qrfgnovyvmvat erfbanapr, abg pevgvpny qnzcvat."
      },
      {
        "text": "Gur pbageby inyir zbirf jvgu mreb sevpgvba.",
        "whyIncorrect": "Pbagebyyre fcrrqf qb abg nssrpg inyir zrpunavpny sevpgvba."
      },
      {
        "text": "Gur cevznel pbagebyyre tnva pna or vapernfrq gb 1,000 jvgubhg evatvat.",
        "whyIncorrect": "Ybbc tnva zhfg or qenfgvpnyyl erqhprq be gur flfgrz tbrf hafgnoyr."
      },
      {
        "text": "Gur QPF zvpebcebprffbe rkrphgvba fcrrq qbhoyrf nhgbzngvpnyyl.",
        "whyIncorrect": "Zvpebcebprffbe pybpx fcrrq vf vaqrcraqrag bs pbageby ybbcf."
      },
      {
        "text": "Gur cebprff syhvq irybpvgl qebcf gb mreb va nyy cvcrf.",
        "whyIncorrect": "Cebprff syhvq sybjf nppbeqvat gb chzc ulqenhyvpf."
      },
      {
        "text": "Gur genafzvggref fjvgpu sebz 4-20 zN gb 10-50 zN.",
        "whyIncorrect": "Fvtanyvat cebgbpbyf erznva hapunatrq."
      },
      {
        "text": "Obgu pbagebyyref nhgbzngvpnyyl pbaireg gb srrqsbejneq pbageby.",
        "whyIncorrect": "Pbagebyyref qb abg fcbagnarbhfyl erqrfvta gurve nytbevguzf."
      },
      {
        "text": "Gur frpbaqnel pbagebyyre ryvzvangrf nyy cebprff qrnq gvzr.",
        "whyIncorrect": "N fybj frpbaqnel ybbc NQQF qrnq gvzr naq cunfr ynt gb gur cevznel ybbc."
      },
      {
        "text": "Gur flfgrz vf thnenagrrq dhnegre-nzcyvghqr qrpnl haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Erfbanapr yrnqf gb fhfgnvarq be tebjvat bfpvyyngvbaf."
      }
    ]
  },
  {
    "id": 1079,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pnfpnqr Frpbaqnel Pbagebyyre Qrevingvir Zbqr Cebuvovgvba",
    "stem": "Jul vf qrevingvir (engr) npgvba nyzbfg havirefnyyl qvfnoyrq ($G_{q2} = 0$) va frpbaqnel sybj naq cerffher pbagebyyref jvguva pnfpnqr flfgrzf?",
    "correctAnswer": "Sybj naq cerffher fvtanyf pbagnva uvtu-serdhrapl ulqenhyvp gheohyrapr abvfr gung pnhfrf qrevingvir npgvba gb ivbyragyl punggre gur inyir, naq gur vaare ybbc vf nyernql fhssvpvragyl snfg jvgubhg erdhvevat cunfr nqinapr.",
    "ilmReference": "VYZ 310305nR ct 110",
    "explanation": "Ratvarrevat engvbanyr:\n1. Frpbaqnel ybbcf ner glcvpnyyl sybj be cerffher cebprffrf, juvpu unir zvavzny qrnq gvzr, irel fubeg gvzr pbafgnagf, naq uvtu ulqenhyvp gheohyrapr abvfr.\n2. Qvssreragvngvat abvfl sybj fvtanyf cebqhprf ynetr, encvq bhgchg fcvxrf gung pnhfr pbagvahbhf uvtu-serdhrapl inyir unzzrevat, encvqyl qrfgeblvat cnpxvat, qvncuentzf, naq yvaxntrf.\n3. Qrevingvir cunfr yrnq vf arrqrq sbe fybj zhygv-ynt gurezny cebprffrf, ohg vf pbzcyrgryl haarprffnel naq qrfgehpgvir ba snfg vaare sybj ybbcf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Orpnhfr Pnanqvna ryrpgevpny pbqr onaf qrevingvir npgvba ba nyy 24 IQP pvephvgf.",
        "whyIncorrect": "Ryrpgevpny pbqrf tbirea fnsrgl, abg CVQ pbagebyyre zbqr fryrpgvba."
      },
      {
        "text": "Orpnhfr sybj genafzvggref unir mreb zrnfherzrag npphenpl.",
        "whyIncorrect": "Sybj genafzvggref ner uvtuyl npphengr (0.5% - 1.0%)."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba erirefrf gur sybj qverpgvba va gur cvcr.",
        "whyIncorrect": "Qrevingvir vf n pbagebyyre pnyphyngvba; vg pnaabg erirefr syhvq sybj."
      },
      {
        "text": "Orpnhfr frpbaqnel pbagebyyref pna bayl or cebtenzzrq jvgu cebcbegvbany tnva.",
        "whyIncorrect": "Frpbaqnel pbagebyyref hfr cebcbegvbany naq vagrteny (CV) pbageby."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba pnhfrf gur cevznel genafzvggre gb bireurng.",
        "whyIncorrect": "Genafzvggref bcrengr vaqrcraqragyl bs pbagebyyre qrevingvir frggvatf."
      },
      {
        "text": "Orpnhfr sybj inyirf pnaabg npprcg 4-20 zN fvtanyf jura qrevingvir vf ranoyrq.",
        "whyIncorrect": "Cbfvgvbaref npprcg 4-20 zN fvtanyf ertneqyrff bs pbagebyyre zbqrf."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba ryvzvangrf erfrg jvaqhc va gur fynir ybbc.",
        "whyIncorrect": "Qrevingvir unf ab rssrpg ba erfrg jvaqhc."
      },
      {
        "text": "Orpnhfr frpbaqnel ybbcf bcrengr fgevpgyl va bcra-ybbc znahny zbqr.",
        "whyIncorrect": "Frpbaqnel ybbcf bcrengr va pybfrq-ybbc nhgbzngvp pnfpnqr zbqr."
      },
      {
        "text": "Orpnhfr qrevingvir npgvba qbhoyrf gur cvcryvar qvnzrgre.",
        "whyIncorrect": "Abafrafvpny qvfgenpgbe."
      }
    ]
  },
  {
    "id": 1080,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "R. Pnfpnqr Pbageby (15%)",
    "title": "Pbzcerurafvir Pnfpnqr Pbageby Fhzznel",
    "stem": "Nppbeqvat gb gur VAFG 2022 Pheevphyhz Thvqr, jung guerr pevgrevn ZHFG or fngvfsvrq sbe n cebprff nccyvpngvba gb or na nccebcevngr pnaqvqngr sbe pnfpnqr pbageby?",
    "correctAnswer": "1. N zrnfhenoyr frpbaqnel cebprff inevnoyr rkvfgf gung qverpgyl nssrpgf gur cevznel inevnoyr; 2. Qvfgheonaprf ragre vafvqr gur frpbaqnel ybbc; 3. Gur frpbaqnel ybbc vf fvtavsvpnagyl snfgre guna gur cevznel ybbc.",
    "ilmReference": "VYZ 310305nR ct 114",
    "explanation": "Znaqngbel pnfpnqr pevgrevn:\n1. Zrnfhenoyr Vagrezrqvngr Inevnoyr: Gurer zhfg or n culfvpny vagrezrqvngr inevnoyr (r.t. fgrnz sybj, wnpxrg cerffher, shry tnf sybj) gung pna or zrnfherq eryvnoyl.\n2. Ybpnyvmrq Qvfgheonaprf: Znwbe qvfgheonaprf zhfg bpphe vafvqr gur frpbaqnel ybbc (r.t. fhccyl cerffher qebcf, inyir fgvpgvba) fb gur vaare ybbc pna vfbyngr gurz.\n3. Qlanzvp Frcnengvba: Gur frpbaqnel ybbc zhfg erfcbaq fhofgnagvnyyl snfgre ($3\\gvzrf$ gb $10\\gvzrf$ snfgre) guna gur cevznel ybbc gb nibvq pebff-pbhcyvat naq erfbanapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "1. Obgu ybbcf zhfg hfr carhzngvp pbagebyyref; 2. Obgu genafzvggref zhfg or 10-50 zN; 3. Gur inyir zhfg snvy bcra.",
        "whyIncorrect": "Zrqvn, fvtany glcr, naq inyir snvy npgvba ner abg cererdhvfvgrf sbe pnfpnqr pbageby."
      },
      {
        "text": "1. Gur cebprff zhfg or aba-unmneqbhf; 2. Nyy bcrengbef zhfg ubyq znfgre qrterrf; 3. Cebcbegvbany onaq zhfg or 100%.",
        "whyIncorrect": "Pnfpnqr vf fgnaqneq npebff unmneqbhf ersvarevrf naq bcrengrq ol pregvsvrq cynag bcrengbef."
      },
      {
        "text": "1. Cevznel naq frpbaqnel ybbcf zhfg unir vqragvpny fcrrqf; 2. Inyir zhfg or yvarne; 3. Erfrg zhfg or mreb.",
        "whyIncorrect": "Vqragvpny fcrrqf pnhfr frirer vafgnovyvgl; erfrg vf erdhverq gb ryvzvangr bssfrg."
      },
      {
        "text": "1. Gur cynag zhfg eha ba fbyne cbjre; 2. Gurezbpbhcyrf zhfg or Glcr X; 3. Sybj zhfg or ynzvane.",
        "whyIncorrect": "Veeryrinag raivebazragny naq uneqjner pbafgenvagf."
      },
      {
        "text": "1. Obgu pbagebyyref zhfg or qverpg npgvat; 2. Ab vagrteny npgvba nyybjrq; 3. Qrnq gvzr zhfg rkprrq 1 ubhe.",
        "whyIncorrect": "Qverpg if erirefr qrcraqf ba ybbc culfvpf; vagrteny vf fgnaqneq; uvtu qrnq gvzr uhegf pbageby."
      },
      {
        "text": "1. Pnfpnqr zhfg ercynpr nyy rzretrapl fuhgqbja flfgrzf; 2. Genafzvggref zhfg or hatebhaqrq; 3. Tnva zhfg or artngvir.",
        "whyIncorrect": "Pnfpnqr arire ercynprf fnsrgl fuhgqbja flfgrzf."
      },
      {
        "text": "1. Cvcr zhfg or fgnvayrff fgrry 316; 2. Synccre pyrnenapr zhfg or 0.001 vapurf; 3. Abvfr zhfg rkprrq 90 qO.",
        "whyIncorrect": "Abafrafvpny qvfgenpgbe."
      },
      {
        "text": "1. Gur cevznel ybbc zhfg or snfgre guna gur frpbaqnel; 2. Frpbaqnel zhfg or C-bayl; 3. FC zhfg or svkrq.",
        "whyIncorrect": "Frpbaqnel zhfg or snfgre guna cevznel; frpbaqnel FC zbqhyngrf qlanzvpnyyl."
      },
      {
        "text": "1. Bayl nccyvpnoyr gb yvdhvq yriry; 2. Qvfpunetrf zhfg irag gb ngzbfcurer; 3. Inyirf zhfg unir unaqjurryf.",
        "whyIncorrect": "Pnfpnqr vf hfrq ba grzcrengher, pbzcbfvgvba, yriry, naq cerffher npebff nyy vaqhfgevrf."
      }
    ]
  },
  {
    "id": 1081,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Uvtu naq Ybj Fvtany Fryrpgbef (Nhpgvbarrevat)",
    "stem": "Ersre gb gur vyyhfgengrq fvtany fryrpgbe oybpx qvntenz. Jung vf gur qrsvavat bcrengvat cevapvcyr bs n Ybj Fvtany Fryrpgbe (YF) naq n Uvtu Fvtany Fryrpgbe (UF)?",
    "correctAnswer": "N Ybj Fvtany Fryrpgbe (YF) pbagvahbhfyl fryrpgf naq cnffrf gur ybjrfg nanybt vachg inyhr gb vgf bhgchg; n Uvtu Fvtany Fryrpgbe (UF) pbagvahbhfyl fryrpgf naq cnffrf gur uvturfg nanybt vachg inyhr.",
    "ilmReference": "VYZ 310305nS ct 4",
    "explanation": "Va fryrpgvir (bireevqr) pbageby:\n- Ybj Fvtany Fryrpgbe ($<$, YF, be ZVA): $L = \\zva(K_1, K_2, \\qbgf, K_a)$. Cnffrf gur ybjrfg vachg. Hfrq va fnsrgl bireevqr nepuvgrpgherf jurer gur zbfg erfgevpgvir (ybjrfg) inyir pbzznaq zhfg gnxr cerprqrapr (r.t. yvzvgvat shry sybj be pybfvat na Nve-gb-Bcra inyir qhevat rzretrapl bire-grzcrengher).\n- Uvtu Fvtany Fryrpgbe ($>$, UF, be ZNK): $L = \\znk(K_1, K_2, \\qbgf, K_a)$. Cnffrf gur uvturfg vachg. Hfrq jurer gur uvturfg qrznaq zhfg gnxr cerprqrapr (r.t. qrznaqvat pbbyvat jngre, bcravat ngzbfcurevp eryvrs iragf, be fryrpgvat uvturfg oheare synzr fpnaare fvtany).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N Ybj Fvtany Fryrpgbe nirentrf nyy vachgf; n Uvtu Fvtany Fryrpgbe pnyphyngrf gur fdhner ebbg.",
        "whyIncorrect": "Nirentvat naq fdhner ebbg ner zngurzngvpny shapgvbaf, abg uvtu/ybj fryrpgvba."
      },
      {
        "text": "N Ybj Fvtany Fryrpgbe gevcf gur rzretrapl fuhgqbja fbyrabvq; n Uvtu Fryrpgbe erfrgf vg.",
        "whyIncorrect": "Fryrpgbef ner pbagvahbhf nanybt shapgvba oybpxf, abg ovanel RFQ gevc fjvgpurf."
      },
      {
        "text": "N Ybj Fryrpgbe vairegf qverpg npgvat fvtanyf vagb erirefr npgvat fvtanyf.",
        "whyIncorrect": "Fryrpgbef cnff gur zntavghqr bs vachgf; gurl qb abg vaireg pbagebyyre npgvba fvtaf."
      },
      {
        "text": "N Ybj Fryrpgbe fryrpgf gur snfgrfg ybbc; n Uvtu Fryrpgbe fryrpgf gur ybbc jvgu uvturfg tnva.",
        "whyIncorrect": "Fryrpgvba vf onfrq fgevpgyl ba vafgnagnarbhf nanybt fvtany zntavghqr (zN, %, be ratvarrevat havgf)."
      },
      {
        "text": "N Uvtu Fvtany Fryrpgbe oybpxf nyy fvtanyf rkprrqvat 20 zN.",
        "whyIncorrect": "Fryrpgbef bcrengr npebff gur abezny 4-20 zN be 0-100% enatr jvgubhg pyvccvat."
      },
      {
        "text": "N Ybj Fvtany Fryrpgbe erdhverf 120 INP nhkvyvnel yvar cbjre gb fjvgpu erynlf.",
        "whyIncorrect": "Zbqrea fryrpgbef ner qvtvgny fbsgjner shapgvba oybpxf va gur QPF PCH."
      },
      {
        "text": "N Uvtu Fryrpgbe fryrpgf gur vachg jvgu gur ybjrfg abvfr serdhrapl.",
        "whyIncorrect": "Fryrpgvba vf onfrq ba fvtany zntavghqr, abg serdhrapl pbagrag."
      },
      {
        "text": "Obgu fryrpgbef nqq gur gjb vachgf gbtrgure naq qvivqr ol 2.",
        "whyIncorrect": "Gung vf na nevguzrgvp fhzzre / nirentr oybpx."
      },
      {
        "text": "N Ybj Fryrpgbe bcrengrf bayl qhevat cynag pbyq fgneghc.",
        "whyIncorrect": "Bireevqr fryrpgbef shapgvba pbagvahbhfyl qhevat abezny cebqhpgvba."
      }
    ]
  },
  {
    "id": 1082,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Sverq Urngre Fnsrgl Bireevqr Fpurzr",
    "stem": "N sverq cebprff urngre hfrf n grzcrengher pbagebyyre (GP) zrnfhevat cebprff pbvy bhgyrg grzcrengher gb nqwhfg n snvy-pybfrq (NGB) shry tnf inyir. N ghor fxva uvtu-grzcrengher pbagebyyre (GVP) zbavgbef urngre ghor zrgny gb cerirag pngnfgebcuvp ghor ehcgher. Juvpu fryrpgbe oybpx zhfg or hfrq orgjrra GP naq GVP gb cebgrpg gur ghorf?",
    "correctAnswer": "N Ybj Fvtany Fryrpgbe (YF / ZVA); haqre abezny pbaqvgvbaf gur grzcrengher pbagebyyre bhgchg vf ybjre naq pbagebyf shry, ohg vs ghor fxva grzcrengher nccebnpurf vgf fnsrgl yvzvg, gur GVP bhgchg qebcf ybjre naq gnxrf bire guebhtu gur Ybj Fryrpgbe gb guebggyr onpx shry tnf.",
    "ilmReference": "VYZ 310305nS ct 8",
    "explanation": "Bireevqr ybtvp nanylfvf:\n1. Shry inyir vf Snvy-Pybfrq (Nve-gb-Bcra, NGB). Ybjre pbagebyyre bhgchg zrnaf PYBFVAT gur inyir (erqhpvat shry svevat).\n2. Abezny bcrengvba: Cebprff pbvy grzcrengher pbagebyyre (GP) zbqhyngrf shry gb znvagnva cebprff grzcrengher. Vgf bhgchg vf, fnl, $60\\%$.\n3. Pbafgenvag: Vs ghor fxva grzcrengher rkprrqf qrfvta yvzvg (r.t. $650^\\pvep\\grkg{P}$), ghorf jvyy fnt naq ehcgher. Gur ghor fxva pbagebyyre (GVP) vf frgcbvag vf $640^\\pvep\\grkg{P}$.\n4. Nf fxva grzcrengher ernpurf $640^\\pvep\\grkg{P}$, GVP bhgchg qebcf encvqyl orybj $60\\%$ (r.t. gb $45\\%$).\n5. Ol srrqvat obgu GP naq GVP vagb n Ybj Fvtany Fryrpgbe (YF), gur ybjre bhgchg ($45\\%$) jvaf naq cvapurf gur shry inyir, fnivat gur urngre ghorf sebz pngnfgebcuvp snvyher.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N Uvtu Fvtany Fryrpgbe (UF / ZNK); gur pbagebyyre jvgu uvturfg svevat qrznaq zhfg nyjnlf jva.",
        "whyIncorrect": "N Uvtu Fryrpgbe jbhyq vtaber gur fxva cebgrpgvba pbagebyyre naq xrrc svevat znk shry, oheavat guebhtu gur ghorf."
      },
      {
        "text": "Na Nirentr Fvtany Fryrpgbe; nirentvat unys bs rnpu pbagebyyre bhgchg.",
        "whyIncorrect": "Nirentvat jbhyq fgvyy nyybj unmneqbhf bire-svevat naq ghor bireurngvat."
      },
      {
        "text": "N Engvb Fgngvba; zhygvcylvat cebprff grzcrengher ol ghor fxva grzcrengher.",
        "whyIncorrect": "Bireevqr cebgrpgvba vf nhpgvbarrevat fryrpgvba, abg engvb zhygvcyvpngvba."
      },
      {
        "text": "N Fcyvg-Enatr Cbfvgvbare Pnz; fcyvggvat gur inyir geniry 0-50% naq 50-100%.",
        "whyIncorrect": "Obgu pbagebyyref gnetrg gur fnzr fvatyr shry inyir."
      },
      {
        "text": "N Qrnqonaq Tnc Pbagebyyre; fhccerffvat nyy shry sybj punatrf jvguva 10%.",
        "whyIncorrect": "Tnc pbageby qbrf abg cebivqr pbafgenvag bireevqr cebgrpgvba."
      },
      {
        "text": "N Uvtu Fvtany Fryrpgbe jvgu qrevingvir frg gb znkvzhz.",
        "whyIncorrect": "Uvtu fryrpgbe fryrpgf uvturfg bhgchg, jbefravat bire-grzcrengher."
      },
      {
        "text": "Na Nanybt Fhzzre Oybpx nqqvat obgu bhgchgf gbtrgure.",
        "whyIncorrect": "Nqqvat bhgchgf jbhyq qbhoyr shry tnf svevat naq pnhfr rkcybfvir bire-svevat."
      },
      {
        "text": "N Fzvgu Cerqvpgbe qrnq-gvzr pbzcrafngbe.",
        "whyIncorrect": "N Fzvgu Cerqvpgbe unaqyrf qrnq gvzr, abg pbafgenvag bireevqr fryrpgvba."
      },
      {
        "text": "Ab fryrpgbe; gur gjb pbagebyyref ner jverq va cnenyyry qverpgyl gb gur inyir pbvy.",
        "whyIncorrect": "Qverpg cnenyyry jvevat pnhfrf fubeg pvephvgf be qrfgehpgvir ryrpgevpny svtugvat orgjrra bhgchgf."
      }
    ]
  },
  {
    "id": 1083,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Erfrg Jvaqhc va Hafryrpgrq Pbagebyyref",
    "stem": "Va n fryrpgvir bireevqr pbageby flfgrz jvgu zhygvcyr CVQ pbagebyyref srrqvat n fvtany fryrpgbe, jung pevgvpny bcrengvbany ceboyrz bpphef va gur hafryrpgrq (vqyr) pbagebyyre vs fgnaqneq nagv-jvaqhc cerpnhgvbaf ner ABG vzcyrzragrq?",
    "correctAnswer": "Vagrteny erfrg jvaqhc; orpnhfr gur hafryrpgrq pbagebyyre'f bhgchg vf abg pbaarpgrq gb gur inyir, vgf reebe crefvfgf naq vgf vagrteny zbqr pbagvahbhfyl jvaqf hc gb gur znkvzhz be zvavzhz envy.",
    "ilmReference": "VYZ 310305nS ct 12",
    "explanation": "Gur jvaqhc zrpunavfz va bireevqr flfgrzf:\n- Pbagebyyre N vf fryrpgrq naq zbqhyngvat gur inyir.\n- Pbagebyyre O vf vqyr (hafryrpgrq); gur inyir qbrf abg erfcbaq gb Pbagebyyre O.\n- Pbagebyyre O bofreirf n crefvfgrag reebe orgjrra vgf Frgcbvag naq Cebprff Inevnoyr.\n- Vs Pbagebyyre O unf vagrteny npgvba, vg vagrtengrf guvf reebe pbagvahbhfyl: $\\grkg{PB}_O = \\senp{1}{G_v} \\vag r_O \\, qg$, jvaqvat hc nyy gur jnl gb $100\\%$ (be $0\\%$).\n- Jura na rzretrapl pbaqvgvba bpphef erdhvevat Pbagebyyre O gb gnxr bire, Pbagebyyre O pnaabg erfcbaq hagvy vgf fnghengrq vagrtengbe fybjyl 'hajvaqf' npebff frgcbvag. Ol gura, gur cebprff unf ybat oybja cnfg fnsrgl yvzvgf!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur hafryrpgrq pbagebyyre'f gurezbpbhcyr oheaf bhg qhr gb ynpx bs fvtany sybj.",
        "whyIncorrect": "Frafbef zrnfher grzcrengher ertneqyrff bs fbsgjner fryrpgvba fgnghf."
      },
      {
        "text": "Gur QPF PCH rkrphgrf na vyyrtny zrzbel qvivqr-ol-mreb erobbg.",
        "whyIncorrect": "Fgnaqneq CVQ nytbevguzf qb abg qvivqr ol mreb qhevat hafryrpgrq fgngrf."
      },
      {
        "text": "Gur hafryrpgrq pbagebyyre'f cebcbegvbany onaq nhgbzngvpnyyl jvqraf gb vasvavgl.",
        "whyIncorrect": "Ghavat cnenzrgref erznva hapunatrq."
      },
      {
        "text": "Gur pbageby inyir cbfvgvbare qvncuentz ehcgherf sebz rkprffvir cerffher.",
        "whyIncorrect": "Gur inyir bayl frrf gur fryrpgrq pbagebyyre'f bhgchg."
      },
      {
        "text": "Gur qrevingvir zbqr gheaf vagb na nanybt onaq-cnff svygre.",
        "whyIncorrect": "Qrevingvir nytbevguz rdhngvbaf erznva hapunatrq."
      },
      {
        "text": "Gur 4-20 zN pheerag ybbc jverf qrirybc erirefr zntargvp cbynevgl.",
        "whyIncorrect": "QP pheerag cbynevgl vf svkrq ol cbjre fhccyl jvevat."
      },
      {
        "text": "Gur bcrengbe pbafbyr ybpxf hc naq ershfrf zbhfr vachgf.",
        "whyIncorrect": "Pbafbyr bcrengbe vagresnprf bcrengr vaqrcraqragyl bs CVQ oybpx fgngrf."
      },
      {
        "text": "Gur hafryrpgrq pbagebyyre nhgbzngvpnyyl pbairegf vgfrys gb n srrqsbejneq oybpx.",
        "whyIncorrect": "Nytbevguzf qb abg erfgehpgher fcbagnarbhfyl."
      },
      {
        "text": "Gur genafzvggre fcna erfrgf gb snpgbel qrsnhyg mreb.",
        "whyIncorrect": "Genafzvggre zrzbel vf aba-ibyngvyr naq vaqrcraqrag bs QPF fryrpgvba."
      }
    ]
  },
  {
    "id": 1084,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Nagv-Erfrg Jvaqhc Fbyhgvba: Rkgreany Erfrg Srrqonpx (RES)",
    "stem": "Ersre gb gur vyyhfgengrq bireevqr pbageby qvntenz. Ubj qbrf 'Rkgreany Erfrg Srrqonpx' (RES) fhpprffshyyl cerirag vagrteny jvaqhc va hafryrpgrq pbagebyyref?",
    "correctAnswer": "Gur npghny bhgchg bs gur fvtany fryrpgbe ($L$) vf ebhgrq onpx vagb gur erfrg srrqonpx vachg bs NYY pbagebyyref srrqvat gur fryrpgbe, sbepvat rnpu vagrtengbe gb genpx gur npgvir bhgchg jvgu n ovnf rdhny gb $X_p \\pqbg r$.",
    "ilmReference": "VYZ 310305nS ct 16",
    "explanation": "Rkgreany Erfrg Srrqonpx (RES / genpxvat):\n- Va pbagebyyref pbasvtherq jvgu RES (be cbfvgvir srrqonpx vagrteny zbqryf):\n$$\\grkg{PB} = X_p \\pqbg r + \\senp{1}{G_v f + 1} (\\grkg{Srrqonpx Fvtany})$$\n- Ol srrqvat gur FRYRPGRQ bhgchg fvtany ($L$) onpx gb gur erfrg cbeg bs obgu Pbagebyyre N naq Pbagebyyre O:\n- Gur fryrpgrq pbagebyyre shapgvbaf abeznyyl orpnhfr vgf srrqonpx zngpurf vgf bhgchg.\n- Gur hafryrpgrq pbagebyyre'f vagrtengbe qbrf abg enzc gb fnghengvba; vafgrnq, vgf bhgchg vf pbafgenvarq gb genpx: $\\grkg{PB}_{\\grkg{hafryrpgrq}} = L + X_p \\pqbg r$.\n- Vg erznvaf cbvfrq vzzrqvngryl nqwnprag gb gur fjvgpuvat guerfubyq, ernql gb gnxr bire fzbbguyl naq vafgnagnarbhfyl gur rknpg zvyyvfrpbaq gur bireevqr pbafgenvag vf oernpurq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ol tebhaqvat gur erfrg pncnpvgbe guebhtu na rkgreany 250 buz erfvfgbe.",
        "whyIncorrect": "RES vf n fvtany genpxvat nepuvgrpgher, abg n uneqjner tebhaqvat fuhag."
      },
      {
        "text": "Ol qvfpbaarpgvat cbjre gb gur hafryrpgrq pbagebyyre jurarire vgf reebe rkprrqf 5%.",
        "whyIncorrect": "Cbjre zhfg erznva ba sbe pbagvahbhf zbavgbevat naq vafgnag gnxrbire."
      },
      {
        "text": "Ol sbepvat obgu pbagebyyref gb eha jvgu mreb vagrteny npgvba ($G_v = \\vasgl$).",
        "whyIncorrect": "Ryvzvangvat vagrteny npgvba yrnirf creznarag fgrnql-fgngr bssfrg va abezny pbageby."
      },
      {
        "text": "Ol vafgnyyvat n culfvpny purpx inyir va gur 4-20 zN fvtany yvar.",
        "whyIncorrect": "Purpx inyirf ner zrpunavpny syhvq qrivprf; ryrpgevpny pvephvgf hfr qvbqrf, ohg RES vf fbsgjner."
      },
      {
        "text": "Ol qbhoyvat gur cebcbegvbany tnva bs gur fryrpgbe oybpx.",
        "whyIncorrect": "Fvtany fryrpgbef ner pbzcnevfba oybpxf jvgu havgl tnva ($1.0$), abg nzcyvsvref."
      },
      {
        "text": "Ol cynpvat obgu pbagebyyref va Znahny zbqr qhevat bireevqrf.",
        "whyIncorrect": "Bireevqr flfgrzf zhfg bcrengr pbzcyrgryl nhgbzngvpnyyl jvgubhg bcrengbe vagreiragvba."
      },
      {
        "text": "Ol iragvat carhzngvp npghngbe cerffher gb gur ngzbfcurer.",
        "whyIncorrect": "Carhzngvp iragvat fgebxrf gur inyir, ohg qbrf abg fbyir pbagebyyre zngurzngvpny jvaqhc."
      },
      {
        "text": "Ol fjvgpuvat gur genafzvggre bhgchg sebz 4-20 zN gb 10-50 zN.",
        "whyIncorrect": "Fvtanyvat fgnaqneqf ner veeryrinag gb RES genpxvat."
      },
      {
        "text": "Ol erdhvevat gur bcrengbe gb uvg 'Npxabjyrqtr' orsber na bireevqr pna ratntr.",
        "whyIncorrect": "Fnsrgl bireevqrf zhfg or vafgnagnarbhf naq shyyl nhgbabzbhf."
      }
    ]
  },
  {
    "id": 1085,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Tnf Cvcryvar Pbzcerffbe Bireevqr Pbageby Fpurzr",
    "stem": "N angheny tnf pragevshtny pbzcerffbe vf cebgrpgrq ol na bireevqr pbageby flfgrz znavchyngvat gur fhpgvba guebggyr inyir. Gur flfgrz zhfg znvagnva fhpgvba cerffher nobir n zvavzhz yvzvg gb cerirag fhetr/pnivgngvba, naq xrrc qvfpunetr cerffher orybj n znkvzhz yvzvg gb cerirag cvcr ehcgher. Vs gur fhpgvba inyir vf Snvy-Bcra (Nve-gb-Pybfr, NGP), jung fryrpgbe oybpx pbasvthengvba vf erdhverq?",
    "correctAnswer": "Uvtu Fhpgvba Pbagebyyre naq Ybj Qvfpunetr Pbagebyyre srrqvat n Uvtu Fvtany Fryrpgbe (UF); nf fhpgvba cerffher qebcf be qvfpunetr cerffher evfrf, gur jvaavat pbagebyyre vapernfrf bhgchg gb guebggyr gur NGP inyir pybfrq.",
    "ilmReference": "VYZ 310305nS ct 20",
    "explanation": "Yrg hf genpr gur inyir naq cebprff npgvbaf pnershyyl:\n1. Svany Ryrzrag: Fhpgvba inyir vf Snvy-Bcra (Nve-gb-Pybfr, NGP). Vapernfvat pbagebyyre bhgchg PYBFRF gur inyir, erqhpvat pbzcerffbe guebhtuchg.\n2. Bire-cerffher pbafgenvag: Vs qvfpunetr cerffher evfrf nobir znkvzhz frgcbvag, pbzcerffbe guebhtuchg zhfg or ERQHPRQ $\\vzcyvrf$ inyir zhfg guebggyr pybfrq $\\vzcyvrf$ pbagebyyre bhgchg zhfg VAPERNFR. Gur qvfpunetr pbagebyyre vf QVERPG NPGVAT ($r = \\grkg{CI} - \\grkg{FC}$).\n3. Ybj fhpgvba pbafgenvag: Vs fhpgvba cerffher qebcf orybj zvavzhz frgcbvag, pbzcerffbe vf fgneivat $\\vzcyvrf$ guebggyr inyir zhfg pybfr gb envfr hcfgernz urnqre cerffher $\\vzcyvrf$ bhgchg zhfg VAPERNFR. Gur fhpgvba pbagebyyre vf ERIREFR NPGVAT ($r = \\grkg{FC} - \\grkg{CI}$).\n4. Va obgu pbafgenvag ivbyngvbaf, gur pbeerpgvir npgvba erdhverf n UVTURE bhgchg gb pybfr gur NGP inyir.\n5. Gurersber, n UVTU FVTANY FRYRPGBE (UF / ZNK) vf hfrq: gur uvture bhgchg jvaf naq pybfrf gur inyir!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ybj Fvtany Fryrpgbe (YF / ZVA), orpnhfr pbzcerffbe fhpgvba vf ng ybjre cerffher guna qvfpunetr.",
        "whyIncorrect": "Fryrpgbe pubvpr vf tbirearq ol inyir snvyher zbqr naq pbagebyyre bhgchg qverpgvba, abg cebprff syhvq cerffher."
      },
      {
        "text": "Nirentr Fryrpgbe, nirentvat fhpgvba naq qvfpunetr cerffherf.",
        "whyIncorrect": "Nirentvat pbzcebzvfrf fnsrgl naq ivbyngrf obgu cerffher pbafgenvagf fvzhygnarbhfyl."
      },
      {
        "text": "Fcyvg-Enatr Fryrpgbe, fcyvggvat inyir fgebxr orgjrra fhpgvba naq qvfpunetr.",
        "whyIncorrect": "Guvf vf n fvatyr fhpgvba inyir jvgu pbafgenvag bireevqr, abg fcyvg-enatr."
      },
      {
        "text": "Zrqvna Fryrpgbe jvgu 2-bhg-bs-3 ibgvat.",
        "whyIncorrect": "Ibgvat erdhverf 3 frafbef zrnfhevat gur FNZR inevnoyr, abg gjb qvssrerag inevnoyrf."
      },
      {
        "text": "Engvb Fgngvba zhygvcylvat qvfpunetr cerffher ol fhpgvba cerffher.",
        "whyIncorrect": "Bireevqr cebgrpgvba hfrf nhpgvbarrevat fryrpgbef, abg engvb fgngvbaf."
      },
      {
        "text": "Ybj Fvtany Fryrpgbe jvgu obgu pbagebyyref ybpxrq va Znahny.",
        "whyIncorrect": "Bireevqr pbagebyyref zhfg or va Nhgbzngvp gb cebgrpg gur znpuvar."
      },
      {
        "text": "N Fzvgu Cerqvpgbe qrnq-gvzr pbzcrafngbe.",
        "whyIncorrect": "Qrnq-gvzr pbzcrafngvba qbrf abg cebivqr zhygv-inevnoyr pbafgenvag bireevqrf."
      },
      {
        "text": "Uvtu Fvtany Fryrpgbe, ohg jvgu gur pbageby inyir pbairegrq gb snvy-pybfrq.",
        "whyIncorrect": "Vs inyir jrer snvy-pybfrq, vapernfvat bhgchg bcraf inyir, erdhvevat n Ybj Fryrpgbe."
      },
      {
        "text": "Qverpg pbaarpgvba jvgu ab fryrpgbe oybpx.",
        "whyIncorrect": "Gjb pbagebyyref pnaabg qevir n fvatyr inyir jvgubhg n fryrpgbe oybpx."
      }
    ]
  },
  {
    "id": 1086,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fcyvg-Enatr Pbageby: Qrsvavgvba naq Cevapvcyr",
    "stem": "Ersre gb gur vyyhfgengrq fcyvg-enatr inyir punenpgrevfgvp pheirf. Jung vf gur shaqnzragny qrsvavgvba naq bcrengvbany checbfr bs Fcyvg-Enatr Pbageby?",
    "correctAnswer": "N fvatyr pbagebyyre bhgchg fvtany ($0-100\\%$) vf fcyvg gb frdhragvnyyl znavchyngr gjb be zber pbageby inyirf npebff qvssrerag frtzragf bs gur pbagebyyre bhgchg fcna.",
    "ilmReference": "VYZ 310305nS ct 24",
    "explanation": "Va fcyvg-enatr pbageby:\n- Bar CVQ pbagebyyre erthyngrf n fvatyr cebprff inevnoyr (r.t. irffry cerffher be grzcrengher).\n- Gur pbagebyyre bhgchg ($0-100\\%$) vf fcyvg orgjrra gjb (be zber) pbageby inyirf:\n  - Inyir N fgebxrf npebff $0-50\\%$ bs pbagebyyre bhgchg.\n  - Inyir O fgebxrf npebff $50-100\\%$ bs pbagebyyre bhgchg.\n- Nccyvpngvbaf:\n  1. Urngvat / Pbbyvat: $0-50\\%$ pbbyf, $50-100\\%$ urngf.\n  2. Oynaxrg / Irag: $0-50\\%$ nqqf vareg avgebtra oynaxrg tnf, $50-100\\%$ iragf rkprff tnf gb syner.\n  3. Jvqr enatrnovyvgl: Fznyy inyir unaqyrf fznyy sybjf ($0-25\\%$), ynetr inyir bcraf sbe urnil ybnq ($25-100\\%$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gjb vaqrcraqrag pbagebyyref qevivat n fvatyr pbageby inyir guebhtu n fryrpgbe.",
        "whyIncorrect": "Gung vf bireevqr/fryrpgvir pbageby, gur rknpg bccbfvgr bs fcyvg-enatr."
      },
      {
        "text": "N sybjzrgre jvgu gjb cevznel bevsvpr cyngrf va frevrf.",
        "whyIncorrect": "Fcyvg-enatr ersref gb svany pbageby ryrzragf, abg zhygvcyr bevsvpr zrgref."
      },
      {
        "text": "N gurezbpbhcyr pbaarpgrq gb gjb qvtvgny grzcrengher vaqvpngbef.",
        "whyIncorrect": "Gung vf qhny vaqvpngvba, abg fcyvg-enatr pbageby."
      },
      {
        "text": "N pbageby inyir gung bcraf qhevat gur qnl naq pybfrf ng avtug.",
        "whyIncorrect": "Fcyvg-enatr zbqhyngrf qlanzvpnyyl onfrq ba erny-gvzr pbagebyyre bhgchg."
      },
      {
        "text": "N carhzngvp pbagebyyre jvgu gjb synccre-abmmyr nzcyvsvref.",
        "whyIncorrect": "Fcyvg-enatr vf na bhgchg fgengrtl, vaqrcraqrag bs vagreany carhzngvp abmmyr pbhag."
      },
      {
        "text": "N zrgubq gb fcyvg 120 INP cbjre vagb 24 IQP naq 12 IQP.",
        "whyIncorrect": "Gung vf n cbjre fhccyl genafsbezre/erpgvsvre shapgvba."
      },
      {
        "text": "N grpuavdhr gb erqhpr genafzvggre fcna ol 50%.",
        "whyIncorrect": "Genafzvggre fcna vf hapunatrq; pbagebyyre bhgchg fcna vf cnegvgvbarq nzbat inyirf."
      },
      {
        "text": "N inyir cbfvgvbare gung erirefrf sybj qverpgvba rirel 30 frpbaqf.",
        "whyIncorrect": "Cbfvgvbaref zbqhyngr inyir bcravat, abg syhvq sybj qverpgvba."
      },
      {
        "text": "Na rzretrapl fuhgqbja flfgrz gung gevcf gjb vaqrcraqrag obvyref.",
        "whyIncorrect": "Fcyvg-enatr vf pbagvahbhf zbqhyngvat pbageby, abg fnsrgl gevccvat."
      }
    ]
  },
  {
    "id": 1087,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fcyvg-Enatr Gnax Oynaxrgvat naq Iragvat Flfgrz",
    "stem": "N purzvpny fgbentr gnax hfrf n fcyvg-enatr cerffher pbagebyyre gb znvagnva n fnsr avgebtra cnq naq cerirag bire-cerffher. Gur avgebtra fhccyl inyir vf Snvy-Pybfrq (NGB) naq gur gnax irag inyir gb syner vf Snvy-Pybfrq (NGB). Nf gnax cerffher evfrf, jung fubhyq unccra, naq ubj fubhyq gur pbagebyyre naq inyirf or enatrq?",
    "correctAnswer": "Pbagebyyre vf QVERPG NPGVAT: ng $0-50\\%$ bhgchg, avgebtra inyir guebggyrf pybfrq (shyy bcra ng $0\\%$, pybfrq ng $50\\%$); ng $50-100\\%$ bhgchg, syner irag inyir guebggyrf bcra (pybfrq ng $50\\%$, shyy bcra ng $100\\%$).",
    "ilmReference": "VYZ 310305nS ct 28",
    "explanation": "Oynaxrg / Irag fcyvg-enatr nanylfvf:\n1. Vs gnax cerffher qebcf (r.t. pbyq avtug be yvdhvq orvat chzcrq bhg), avgebtra zhfg or vawrpgrq gb cerirag gnax pbyyncfr.\n2. Vs gnax cerffher evfrf (r.t. ubg qnl be gnax orvat svyyrq), rkprff tnf zhfg or iragrq gb syner gb cerirag gnax ehcgher.\n3. Fnsr bcrengvba znaqngrf:\n   - Cerffher Ybj $\\vzcyvrf$ Avgebtra Bcra, Irag Pybfrq.\n   - Cerffher Abezny (Frgcbvag) $\\vzcyvrf$ Obgu Avgebtra naq Irag PYBFRQ (pbafreivat rkcrafvir avgebtra tnf naq ceriragvat syner rzvffvbaf).\n   - Cerffher Uvtu $\\vzcyvrf$ Avgebtra Pybfrq, Irag BCRA.\n4. Enatvat:\n   - Qverpg Npgvat Pbagebyyre ($r = \\grkg{CI} - \\grkg{FC}$):\n   - $\\grkg{PB} = 0\\%$: Gnax cerffher irel ybj. Avgebtra inyir vf shyy bcra ($4\\grkg{ zN}$), Irag vf pybfrq.\n   - $\\grkg{PB} = 50\\%$: Gnax ng frgcbvag. Avgebtra inyir vf pybfrq, Irag vf pybfrq (qrnqonaq).\n   - $\\grkg{PB} = 100\\%$: Gnax cerffher uvtu. Avgebtra vf pybfrq, Irag inyir vf shyy bcra ($20\\grkg{ zN}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Obgu inyirf bcra fvzhygnarbhfyl ng 50% bhgchg gb znkvzvmr avgebtra pbafhzcgvba.",
        "whyIncorrect": "Bcravat obgu fvzhygnarbhfyl jnfgrf avgebtra qverpgyl vagb gur syner urnqre."
      },
      {
        "text": "Pbagebyyre vf Erirefr Npgvat: 0-50% bcraf irag; 50-100% bcraf avgebtra.",
        "whyIncorrect": "Bcravat avgebtra ng uvtu bhgchg (uvtu cerffher) bire-cerffhevmrf naq ehcgherf gur gnax."
      },
      {
        "text": "Avgebtra inyir fgebxrf 0-100% juvyr irag inyir erznvaf creznaragyl ybpxrq pybfrq.",
        "whyIncorrect": "Snvyvat gb bcra irag jvyy bire-cerffhevmr naq ehcgher gur irffry qhevat chzc-va."
      },
      {
        "text": "Obgu inyirf zhfg or Snvy-Bcra (Nve-gb-Pybfr) gb zrrg Pnanqvna fnsrgl pbqr.",
        "whyIncorrect": "Snvyvat bcra jbhyq qhzc ragver cynag avgebtra urnqre vagb gur syner ba ybff bs nve."
      },
      {
        "text": "Pbagebyyre zhfg or Cebcbegvbany-Qrevingvir bayl jvgu mreb tnva.",
        "whyIncorrect": "Vagrteny npgvba vf rffragvny gb ubyq gnax cerffher ng frgcbvag."
      },
      {
        "text": "Gur avgebtra inyir vf bcrengrq ol 120 INP juvyr irag vf 3-15 cfv nve.",
        "whyIncorrect": "Obgu glcvpnyyl hgvyvmr zngpurq carhzngvp pbageby inyirf jvgu fcyvg-enatr cbfvgvbaref."
      },
      {
        "text": "Gur fcyvg-enatr pbagebyyre zhfg or olcnffrq qhevat irffry svyyvat.",
        "whyIncorrect": "Svyyvat cebqhprf znkvzhz incbe qvfcynprzrag, erdhvevat nhgbzngvp irag bcravat."
      },
      {
        "text": "Gur irag inyir zhfg bcra svefg orsber avgebtra bcraf.",
        "whyIncorrect": "Irag bcraf ba uvtu cerffher; avgebtra bcraf ba ybj cerffher."
      },
      {
        "text": "Pbagebyyre bhgchg vf svkrq ng 12 zN creznaragyl.",
        "whyIncorrect": "Bhgchg zbqhyngrf qlanzvpnyyl orgjrra 4-20 zN (0-100%)."
      }
    ]
  },
  {
    "id": 1088,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fcyvg-Enatr Cbfvgvbare Pnyvoengvba (Carhzngvp 3-15 cfv Orapu Frg)",
    "stem": "N carhzngvp fcyvg-enatr flfgrz hfrf n fvatyr 4-20 zN pbagebyyre bhgchg guebhtu na V/C genafqhpre ($4-20\\grkg{ zN} = 3-15\\grkg{ cfv}$) gb fgebxr gjb pbageby inyirf. Inyir N bcrengrf ba $0-50\\%$ pbagebyyre bhgchg naq Inyir O bcrengrf ba $50-100\\%$. Jung ner gur pnyvoengrq vachg cerffher enatrf sbe gur cbfvgvbaref ba Inyir N naq Inyir O?",
    "correctAnswer": "Inyir N Cbfvgvbare: $3\\grkg{ gb }9\\grkg{ cfv}$ ($4\\grkg{ gb }12\\grkg{ zN}$); Inyir O Cbfvgvbare: $9\\grkg{ gb }15\\grkg{ cfv}$ ($12\\grkg{ gb }20\\grkg{ zN}$).",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nS ct 32",
    "explanation": "Pnyphyngvbaf npebff gur $3-15\\grkg{ cfv}$ ($12\\grkg{ cfv}$ fcna):\n- Zvq-fpnyr ($50\\%$) cerffher:\n$$C_{50\\%} = 3\\grkg{ cfv} + (0.50 \\gvzrf 12\\grkg{ cfv}) = 3 + 6 = 9.0\\grkg{ cfv}$$\n- Va pheerag npebff $4-20\\grkg{ zN}$ ($16\\grkg{ zN}$ fcna):\n$$V_{50\\%} = 4\\grkg{ zN} + (0.50 \\gvzrf 16\\grkg{ zN}) = 4 + 8 = 12.0\\grkg{ zN}$$\n- Inyir N fgebxrf shyy geniry nf vachg zbirf sebz $3\\grkg{ gb }9\\grkg{ cfv}$ ($4-12\\grkg{ zN}$).\n- Inyir O fgebxrf shyy geniry nf vachg zbirf sebz $9\\grkg{ gb }15\\grkg{ cfv}$ ($12-20\\grkg{ zN}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Inyir N: 3 gb 15 cfv; Inyir O: 3 gb 15 cfv",
        "whyIncorrect": "Gung vf cnenyyry bcrengvba, fgebxvat obgu inyirf fvzhygnarbhfyl npebff shyy enatr."
      },
      {
        "text": "Inyir N: 0 gb 50 cfv; Inyir O: 50 gb 100 cfv",
        "whyIncorrect": "Fgnaqneq carhzngvp vafgehzrag fvtanyf fcna 3-15 cfv, abg 0-100 cfv."
      },
      {
        "text": "Inyir N: 3 gb 6 cfv; Inyir O: 6 gb 12 cfv",
        "whyIncorrect": "Bzvggrq hccre 3 cfv bs gur 3-15 cfv fcna."
      },
      {
        "text": "Inyir N: 4 gb 20 cfv; Inyir O: 20 gb 40 cfv",
        "whyIncorrect": "Pbashfrq zN ahzoref jvgu cfv inyhrf."
      },
      {
        "text": "Inyir N: 3 gb 7.5 cfv; Inyir O: 7.5 gb 15 cfv",
        "whyIncorrect": "7.5 cfv vf abg zvqfpnyr bs n 3-15 cfv fcna ($3 + 12/2 = 9\\grkg{ cfv}$)."
      },
      {
        "text": "Inyir N: 9 gb 15 cfv; Inyir O: 3 gb 9 cfv",
        "whyIncorrect": "Vairegrq inyir frdhrapvat."
      },
      {
        "text": "Inyir N: 1 gb 5 IQP; Inyir O: 5 gb 10 IQP",
        "whyIncorrect": "Dhrfgvba nfxf sbe carhzngvp cbfvgvbare cerffher va cfv."
      },
      {
        "text": "Inyir N: 20 gb 12 zN; Inyir O: 12 gb 4 zN",
        "whyIncorrect": "Erirefr pnyvoengrq pheerag enatrf."
      },
      {
        "text": "Inyir N: 3 gb 9 xCn; Inyir O: 9 gb 15 xCn",
        "whyIncorrect": "Fgnaqneq zrgevp carhzngvp fvtany vf 20-100 xCn, abg 3-15 xCn."
      }
    ]
  },
  {
    "id": 1089,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fcyvg-Enatr Pnyvoengvba: Bireync if Qrnqonaq ng Pebffbire",
    "stem": "Ersre gb gur vyyhfgengrq fcyvg-enatr inyir pebffbire qvntenzf. Jung vf gur ratvarrevat qvfgvapgvba orgjrra qrfvtavat na 'bireync' irefhf n 'qrnqonaq' (tnc) ng gur $50\\%$ pebffbire cbvag va fcyvg-enatr grzcrengher pbageby?",
    "correctAnswer": "N qrnqonaq rafherf obgu inyirf ner shyyl pybfrq nebhaq 50% bhgchg gb cerirag fvzhygnarbhf urngvat naq pbbyvat (pbafreivat raretl); na bireync rafherf gur frpbaq inyir ortvaf bcravat fyvtugyl orsber gur svefg shyyl pybfrf gb cerirag n qrnq mbar va cebprff erfcbafr.",
    "ilmReference": "VYZ 310305nS ct 36",
    "explanation": "Pebffbire qrfvta genqr-bssf:\n- Qrnqonaq (Tnc): Inyir N pybfrf ng $48\\%$; Inyir O qbrf abg ortva bcravat hagvy $52\\%$. Nebhaq frgcbvag ($48-52\\%$), obgu inyirf ner pybfrq. Rffragvny va urngvat/pbbyvat be oynaxrg/irag flfgrzf gb cerirag svtugvat naq jnfgvat pbfgyl hgvyvgvrf.\n- Bireync: Inyir N pybfrf ng $52\\%$; Inyir O ortvaf bcravat ng $48\\%$. Obgu inyirf ner penpxrq bcra fyvtugyl orgjrra $48-52\\%$. Hfrq va jvqr-enatr sybj flfgrzf gb rafher fzbbgu pbagvahbhf sybj tnva jvgubhg n syng qrnq mbar jurer gur cebprff qbrf abg erfcbaq gb pbagebyyre bhgchg.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Bireync vf hfrq bayl jvgu carhzngvp inyirf; qrnqonaq vf hfrq bayl jvgu ryrpgevp zbgbe inyirf.",
        "whyIncorrect": "Obgu pbaprcgf nccyl gb carhzngvp, ryrpgevp, naq qvtvgny QPF vzcyrzragngvbaf."
      },
      {
        "text": "Qrnqonaq qbhoyrf gur pbagebyyre tnva; bireync erqhprf pbagebyyre tnva gb mreb.",
        "whyIncorrect": "Inyir pebffbire trbzrgel qbrf abg nygre pbagebyyre nytbevguz tnva cnenzrgref."
      },
      {
        "text": "Bireync pnhfrf gur obvyre fnsrgl inyirf gb cbc ng 50% ybnq.",
        "whyIncorrect": "Fnsrgl inyirf cbc ba culfvpny birecerffher, abg pbageby inyir pebffbire ghavat."
      },
      {
        "text": "Qrnqonaq pnhfrf pbagvahbhf 60 Um ryrpgevpny bfpvyyngvba.",
        "whyIncorrect": "Qrnqonaq fgnovyvmrf ybbcf ol ceriragvat fvzhygnarbhf zbqhyngvba."
      },
      {
        "text": "Bireync gheaf gur inyirf vagb rdhny crepragntr punenpgrevfgvpf.",
        "whyIncorrect": "Bireync vf cbfvgvbare fcna nqwhfgzrag, abg vagreany gevz trbzrgel."
      },
      {
        "text": "Qrnqonaq erdhverf 480 INP guerr-cunfr urngvat ryrzragf.",
        "whyIncorrect": "Qrnqonaq vf n fbsgjner/cbfvgvbare pnyvoengvba frggvat."
      },
      {
        "text": "Bireync ceriragf gur bcrengbe sebz fjvgpuvat gb Znahny zbqr.",
        "whyIncorrect": "Znahny zbqr vf nyjnlf npprffvoyr gb bcrengbef."
      },
      {
        "text": "Qrnqonaq pnhfrf gur grzcrengher genafzvggre gb qevsg hcfpnyr.",
        "whyIncorrect": "Genafzvggre pnyvoengvba vf pbzcyrgryl vaqrcraqrag bs inyir cbfvgvbare qrnqonaq."
      },
      {
        "text": "Gurer vf ab qvssrerapr; bireync naq qrnqonaq ner flabalzbhf grezf.",
        "whyIncorrect": "Gurl ner rknpg bccbfvgrf: bireync zrnaf obgu bcra fvzhygnarbhfyl; qrnqonaq zrnaf obgu pybfrq fvzhygnarbhfyl."
      }
    ]
  },
  {
    "id": 1090,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Engvb Pbageby Nepuvgrpgher: Jvyq Sybj naq Pbagebyyrq Sybj",
    "stem": "Ersre gb gur vyyhfgengrq engvb pbageby fpurzngvp. Jung vf gur qrsvavat cevapvcyr bs n fgnaqneq Engvb Pbageby flfgrz?",
    "correctAnswer": "Vg zrnfherf na vaqrcraqrag, hapbagebyyrq 'jvyq' cebprff sybj ($S_{\\grkg{jvyq}}$) naq zbqhyngrf n frpbaq 'pbagebyyrq' sybj ($S_{\\grkg{pbagebyyrq}}$) gb znvagnva n cerqrgrezvarq fgbvpuvbzrgevp be oyraqvat engvb ($E = \\senp{S_{\\grkg{pbagebyyrq}}}{S_{\\grkg{jvyq}}}$).",
    "ilmReference": "VYZ 310305nS ct 40",
    "explanation": "Va engvb pbageby (r.t. oyraqvat, nve-gb-shry engvb, npvq-gb-jngre arhgenyvmngvba):\n1. Jvyq Sybj ($S_1$): Na hapbagebyyrq fgernz jubfr engr inevrf onfrq ba cynag qrznaq.\n2. Engvb Fgngvba: Zhygvcyvrf zrnfherq jvyq sybj ol gur qrfverq engvb frggvat $E$:\n$$\\grkg{FC}_2 = E \\gvzrf S_1$$\n3. Pbagebyyrq Sybj ($S_2$): N qrqvpngrq sybj pbagebyyre zrnfherf $S_2$ naq guebggyrf gur pbageby inyir gb zngpu gur pnyphyngrq frgcbvag $\\grkg{FC}_2$.\n4. Guvf cebivqrf srrqsbejneq-yvxr npgvba: nal punatr va jvyq sybj vzzrqvngryl nqwhfgf gur frgcbvag bs gur pbagebyyrq fgernz orsber dhnyvgl qrivngrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vg qvivqrf gur pbagebyyre bhgchg rdhnyyl orgjrra gjb vqragvpny pbageby inyirf.",
        "whyIncorrect": "Gung vf fcyvg-enatr pbageby, abg engvb pbageby."
      },
      {
        "text": "Vg fryrpgf gur uvturfg sybj nzbat sbhe erqhaqnag genafzvggref.",
        "whyIncorrect": "Gung vf uvtu fvtany fryrpgbe nhpgvbarrevat."
      },
      {
        "text": "Vg zrnfherf inyir fgrz sevpgvba naq pbzcnerf vg gb cnpxvat gbedhr.",
        "whyIncorrect": "Gung vf inyir qvntabfgvpf, abg cebprff engvb pbageby."
      },
      {
        "text": "Vg zrnfherf cebqhpg grzcrengher naq nqwhfgf fgrnz sybj va na vaare ybbc.",
        "whyIncorrect": "Gung vf pnfpnqr pbageby."
      },
      {
        "text": "Vg sbeprf obgu syhvq fgernzf gb sybj ng rknpgyl 100 tcz ertneqyrff bs qrznaq.",
        "whyIncorrect": "Engvb pbageby znvagnvaf n cebcbegvba ($E$), abg svkrq sybj engrf."
      },
      {
        "text": "Vg hfrf na ba-bss fbyrabvq inyir gb chyfr yvdhvq ng 10 Um.",
        "whyIncorrect": "Engvb pbageby hfrf pbagvahbhf zbqhyngvat pbageby inyirf."
      },
      {
        "text": "Vg ryvzvangrf gur arrq sbe sybjzrgref ol pnyphyngvat sybj sebz cvcr cerffher.",
        "whyIncorrect": "Npphengr sybjzrgref ba obgu jvyq naq pbagebyyrq fgernzf ner rffragvny."
      },
      {
        "text": "Vg erdhverf gnxvat gur cebprff bssyvar jurarire gur engvb frggvat vf punatrq.",
        "whyIncorrect": "Engvb frgcbvagf ner nqwhfgrq qlanzvpnyyl qhevat pbagvahbhf bcrengvba."
      },
      {
        "text": "Vg bcrengrf fgevpgyl ba bcra-ybbc carhzngvp gvzref.",
        "whyIncorrect": "Engvb flfgrzf hfr pybfrq-ybbc srrqonpx sybj pbagebyyref."
      }
    ]
  },
  {
    "id": 1091,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Engvb Pbageby Pnyphyngvba: Sybj Oyraqvat",
    "stem": "Na va-yvar purzvpny oyraqre zvkrf n jvyq fbyirag fgernz jvgu n pbagebyyrq nqqvgvir fgernz. Gur jvyq fbyirag sybjzrgre ($0-1000\\grkg{ Y/zva}$) pheeragyl zrnfherf $600\\grkg{ Y/zva}$. Gur oyraqvat fcrpvsvpngvba erdhverf n engvb bs $0.05\\grkg{ Y nqqvgvir cre Y fbyirag}$. Jung frgcbvag fubhyq gur engvb fgngvba fraq gb gur pbagebyyrq nqqvgvir sybj pbagebyyre?",
    "correctAnswer": "$$\\grkg{FC}_{\\grkg{nqqvgvir}} = 30.0\\grkg{ Y/zva}$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nS ct 44",
    "explanation": "Gur engvb pnyphyngvba vf:\n$$\\grkg{FC}_{\\grkg{pbagebyyrq}} = E \\gvzrf S_{\\grkg{jvyq}}$$\nTvira $S_{\\grkg{jvyq}} = 600\\grkg{ Y/zva}$ naq $E = 0.05$:\n$$\\grkg{FC}_{\\grkg{nqqvgvir}} = 0.05 \\gvzrf 600\\grkg{ Y/zva} = 30.0\\grkg{ Y/zva}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "FC = 12.0 Y/zva",
        "whyIncorrect": "Qvivqrq 600 ol 50."
      },
      {
        "text": "FC = 300.0 Y/zva",
        "whyIncorrect": "Zvfcynprq qrpvzny cynpr ol zhygvcylvat ol 0.50."
      },
      {
        "text": "FC = 3.0 Y/zva",
        "whyIncorrect": "Zhygvcyvrq ol 0.005."
      },
      {
        "text": "FC = 120.0 Y/zva",
        "whyIncorrect": "Pnyphyngrq $600 \\gvzrf 0.20$."
      },
      {
        "text": "FC = 50.0 Y/zva",
        "whyIncorrect": "Hfrq engvb 0.05 qverpgyl nf 50 Y/zva."
      },
      {
        "text": "FC = 630.0 Y/zva",
        "whyIncorrect": "Nqqrq 30 gb 600."
      },
      {
        "text": "FC = 60.0 Y/zva",
        "whyIncorrect": "Zhygvcyvrq ol 0.10."
      },
      {
        "text": "FC = 15.0 Y/zva",
        "whyIncorrect": "Unyirq gur pbeerpg frgcbvag."
      },
      {
        "text": "FC = 0.083 Y/zva",
        "whyIncorrect": "Qvivqrq 0.05 ol 600."
      }
    ]
  },
  {
    "id": 1092,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Engvb Pbageby jvgu Cevznel Dhnyvgl Gevz",
    "stem": "Va na nhgbzngrq pbzohfgvba sheanpr, nve sybj vf engvbrq gb shry tnf sybj. N mvepbavhz bkvqr syhr tnf nanylmre zrnfherf rkprff bkltra ($B_2$) va gur fgnpx. Ubj vf gur bkltra nanylmre vapbecbengrq vagb gur engvb pbageby flfgrz?",
    "correctAnswer": "Gur bkltra nanylmre pbagebyyre gevzf (nqwhfgf) gur engvb frggvat ($E$) bs gur engvb fgngvba, svar-ghavat gur nve-gb-shry engvb gb pbzcrafngr sbe punatrf va shry tnf urngvat inyhr (OGH) naq nzovrag nve qrafvgl.",
    "ilmReference": "VYZ 310305nS ct 48",
    "explanation": "Engvb jvgu srrqonpx gevz:\n1. Onfr Engvb: Gur engvb fgngvba zhygvcyvrf shry sybj ol onfryvar nve-gb-shry engvb $E$ gb frg pbzohfgvba nve sybj vzzrqvngryl jura svevat engr punatrf.\n2. Shry tnf pbzcbfvgvba (OGH pbagrag) naq nve uhzvqvgl/grzcrengher punatr bire gvzr, pnhfvat rkprff $B_2$ gb qevsg.\n3. Gur syhr tnf $B_2$ pbagebyyre zrnfherf fgnpx bkltra naq gevzf gur engvb zhygvcyvre $E$:\n$$E_{\\grkg{rssrpgvir}} = E_{\\grkg{onfr}} + \\Qrygn E_{B_2}$$\n4. Guvf pbzovarf gur hygen-snfg qvfgheonapr erwrpgvba bs engvb/srrqsbejneq pbageby jvgu gur cerpvfr pybfrq-ybbc npphenpl bs srrqonpx nanylmre pbageby.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gur bkltra nanylmre qverpgyl fgebxrf gur znva shry tnf rzretrapl fuhgbss inyir.",
        "whyIncorrect": "Shry fuhgbss vf unaqyrq ol gur Oheare Znantrzrag Flfgrz (OZF), abg bkltra gevz."
      },
      {
        "text": "Gur bkltra nanylmre ercynprf nyy sybjzrgref ba obgu shry naq nve yvarf.",
        "whyIncorrect": "Sybjzrgref ner fgvyy erdhverq sbe gur uvtu-fcrrq engvb ybbc."
      },
      {
        "text": "Gur bkltra nanylmre bcrengrf bayl jura gur sheanpr vf pbzcyrgryl fuhg qbja.",
        "whyIncorrect": "Fgnpx $B_2$ gevz bcrengrf pbagvahbhfyl qhevat abezny oheare svevat."
      },
      {
        "text": "Gur bkltra nanylmre vairegf gur nve sybj inyir sebz NGB gb NGP.",
        "whyIncorrect": "Fbsgjner gevz pnaabg nygre culfvpny inyir snvyher zbqrf."
      },
      {
        "text": "Gur bkltra nanylmre sbeprf gur qensg sna gb eha ng znkvzhz fcrrq ng nyy gvzrf.",
        "whyIncorrect": "Qensg snaf zbqhyngr gb znvagnva sverobk artngvir cerffher."
      },
      {
        "text": "Gur bkltra nanylmre zrnfherf fgnpx tnf grzcrengher vafgrnq bs bkltra.",
        "whyIncorrect": "Mvepbavn ceborf zrnfher creprag bkltra ($B_2$), abg syhr tnf grzcrengher."
      },
      {
        "text": "Gur bkltra nanylmre pnhfrf gur engvb fgngvba gb qvivqr ol mreb.",
        "whyIncorrect": "Gevz yvzvgf pynzc engvb nqwhfgzragf jvguva fnsr enatrf ($\\cz 10\\%$)."
      },
      {
        "text": "Gur bkltra nanylmre pbairegf gur sheanpr sebz angheny tnf gb qvrfry shry.",
        "whyIncorrect": "Shry fjvgpuvat erdhverf culfvpny cvcvat znavsbyqf naq oheare abmmyr punatrf."
      },
      {
        "text": "Gur bkltra nanylmre qvfpbaarpgf gur frpbaqnel sybj pbagebyyre.",
        "whyIncorrect": "Gur frpbaqnel sybj pbagebyyre erznvaf shyyl npgvir va pnfpnqr/engvb."
      }
    ]
  },
  {
    "id": 1093,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Pebff-Yvzvgrq (Yrnq-Ynt) Pbzohfgvba Engvb Pbageby",
    "stem": "Ersre gb gur vyyhfgengrq obvyre pbzohfgvba pbageby flfgrz. Jul vf 'Pebff-Yvzvgvat' (Yrnq-Ynt shry/nve engvb pbageby) znaqngbel ba ynetr vaqhfgevny sverq obvyref?",
    "correctAnswer": "Gb thnenagrr gung pbzohfgvba nve nyjnlf yrnqf shry ba na vapernfr va svevat engr, naq shry nyjnlf yrnqf nve ba n qrpernfr va svevat engr, ceriragvat qnatrebhf, shry-evpu rkcybfvir zvkgherf va gur sverobk.",
    "ilmReference": "VYZ 310305nS ct 52",
    "explanation": "Pebff-yvzvgvat nepuvgrpgher hfrf uvtu naq ybj fvtany fryrpgbef:\n1. Svevat Engr Vapernfr (Ybnq Qrznaq Evfrf):\n   - Uvtu Fryrpgbe ba Nve: Fryrpgf orgjrra svevat qrznaq naq npghny shry sybj. Nve vapernfrf SVEFG.\n   - Ybj Fryrpgbe ba Shry: Fryrpgf orgjrra svevat qrznaq naq npghny nve sybj. Shry vf uryq onpx hagvy nve sybj unf culfvpnyyl vapernfrq.\n2. Svevat Engr Qrpernfr (Ybnq Qrznaq Qebcf):\n   - Ybj Fryrpgbe ba Shry: Shry qebcf SVEFG.\n   - Uvtu Fryrpgbe ba Nve: Nve vf uryq hc hagvy shry sybj unf qebccrq.\nErfhyg: Nve YRNQF ba gur jnl hc; Shry YRNQF ba gur jnl qbja. Gur sheanpr ARIRE ragref n shry-evpu (fbbgvat / rkcybfvir) pbaqvgvba!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb qbhoyr gur fgrnz cebqhpgvba pncnpvgl orlbaq gur obvyre qrfvta cerffher.",
        "whyIncorrect": "Pebff-yvzvgvat vf n pbzohfgvba fnsrgl pbageby fgengrtl, abg pncnpvgl obbfgvat."
      },
      {
        "text": "Gb nyybj gur obvyre gb bcrengr jvgubhg nal pbzohfgvba nve snaf.",
        "whyIncorrect": "Sbeprq qensg naq vaqhprq qensg snaf ner rffragvny sbe nve sybj."
      },
      {
        "text": "Gb ryvzvangr gur arrq sbe synzr fpnaaref va gur oheare znantrzrag flfgrz.",
        "whyIncorrect": "OZF synzr fpnaaref ner yrtnyyl znaqngrq vaqrcraqrag fnsrgl flfgrzf."
      },
      {
        "text": "Gb rafher gung shry sybj vf nyjnlf svir gvzrf uvture guna nve sybj.",
        "whyIncorrect": "Nve sybj zhfg nyjnlf or va rkprff fgbvpuvbzrgevp cebcbegvba (nve-evpu)."
      },
      {
        "text": "Gb pbaireg gur shry inyir cbfvgvbare sebz carhzngvp gb ulqenhyvp.",
        "whyIncorrect": "Pebff-yvzvgvat vf n QPF fryrpgbe nytbevguz, abg n ulqenhyvp cbfvgvbare."
      },
      {
        "text": "Gb crezvg enj angheny tnf gb irag qverpgyl vagb gur obvyre ubhfr.",
        "whyIncorrect": "Enj tnf iragvat vf n frirer sver/rkcybfvba unmneq."
      },
      {
        "text": "Gb sbepr gur obvyre qehz yriry gb 0% qhevat ybnq fjvatf.",
        "whyIncorrect": "Qehz yriry pbageby vf pbzcyrgryl frcnengr sebz pbzohfgvba pbageby."
      },
      {
        "text": "Gb serrmr gur shry tnf sybjzrgre qhevat encvq cynag hcfrgf.",
        "whyIncorrect": "Npphengr qlanzvp sybj zrnfherzrag vf erdhverq sbe pebff-yvzvgvat fryrpgbef."
      },
      {
        "text": "Gb eha gur pbzohfgvba pbageby flfgrz fgevpgyl ba bcra-ybbc znahny gvzref.",
        "whyIncorrect": "Pebff-yvzvgvat vf na nqinaprq pybfrq-ybbc nhgbzngrq QPF fgengrtl."
      }
    ]
  },
  {
    "id": 1094,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Zrqvna Fvtany Fryrpgvba (2-bhg-bs-3 Frafbe Ibgvat)",
    "stem": "Va pevgvpny fnsrgl-vafgehzragrq flfgrzf (FVF) naq uvtu-eryvnovyvgl gheobznpuvarel tbireabef, guerr erqhaqnag genafzvggref ($G_1, G_2, G_3$) zrnfher ernpgbe grzcrengher. N Zrqvna Fvtany Fryrpgbe oybpx cebprffrf gur guerr fvtanyf. Vs gur guerr genafzvggref ernq $210^\\pvep\\grkg{P}$, $212^\\pvep\\grkg{P}$, naq $350^\\pvep\\grkg{P}$ (jurer $G_3$ unf snvyrq hcfpnyr), jung inyhr qbrf gur Zrqvna Fryrpgbe bhgchg?",
    "correctAnswer": "$$212^\\pvep\\grkg{P}$$ (gur zvqqyr/zrqvna inyhr, pbzcyrgryl erwrpgvat gur snvyrq frafbe).",
    "ilmReference": "VYZ 310305nS ct 56",
    "explanation": "Zrqvna fryrpgbe (2bb3 ibgvat) bcrengvba:\n1. Vachgf ner fbegrq va nfpraqvat ahzrevpny beqre: $[210^\\pvep\\grkg{P}, 212^\\pvep\\grkg{P}, 350^\\pvep\\grkg{P}]$.\n2. Gur Zrqvna oybpx fryrpgf gur zvqqyr inyhr: $212^\\pvep\\grkg{P}$.\n3. Orpnhfr $350^\\pvep\\grkg{P}$ vf n ehanjnl frafbe snvyher, gnxvat gur zrqvna pbzcyrgryl erwrpgf gur snyfr hcfpnyr ernqvat jvgubhg gevccvat gur cynag be hcfrggvat gur pbageby ybbc!\n4. Vs n frafbe snvyrq qbjafpnyr ($0^\\pvep\\grkg{P}$), gur zrqvna jbhyq fvzvyneyl fryrpg gur urnygul zvqqyr ernqvat.\n5. Zrqvna fryrpgvba cebivqrf snhyg gbyrenapr ntnvafg fvatyr-cbvag frafbe snvyherf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "350\u00b0P (gur uvturfg inyhr)",
        "whyIncorrect": "Fryrpgvat gur uvturfg inyhr vf n Uvtu Fryrpgbe, juvpu jbhyq cnff gur snvyrq frafbe naq hcfrg gur cynag."
      },
      {
        "text": "210\u00b0P (gur ybjrfg inyhr)",
        "whyIncorrect": "Fryrpgvat gur ybjrfg vf n Ybj Fryrpgbe."
      },
      {
        "text": "257.3\u00b0P (gur nevguzrgvp nirentr)",
        "whyIncorrect": "Nirentvat $(210 + 212 + 350) / 3 = 257.3^\\pvep\\grkg{P}$ pbeehcgf gur ybbc jvgu gur snvyrq frafbe reebe."
      },
      {
        "text": "0.0\u00b0P (flfgrz snhyg qrsnhyg)",
        "whyIncorrect": "Zrqvna ibgvat znvagnvaf pbagvahbhf urnygul bcrengvba jvgubhg qrsnhygvat gb mreb."
      },
      {
        "text": "140\u00b0P (qvssrerapr orgjrra uvturfg naq ybjrfg)",
        "whyIncorrect": "Fcna qvssrerapr vf n qvntabfgvp purpx, abg gur zrqvna bhgchg."
      },
      {
        "text": "211\u00b0P (nirentr bs gur svefg gjb)",
        "whyIncorrect": "Zrqvna fryrpgbe fryrpgf gur rknpg zvqqyr culfvpny inyhr ($212^\\pvep\\grkg{P}$)."
      },
      {
        "text": "562\u00b0P (fhz bs nyy guerr)",
        "whyIncorrect": "Nqqvat inyhrf vf na nevguzrgvp fhz, abg fryrpgvba."
      },
      {
        "text": "Gur pbagebyyre bhgchg ybpxf ng 0 zN.",
        "whyIncorrect": "Zrqvna fryrpgvba cebivqrf pbagvahbhf havagreehcgrq pbageby bhgchg."
      },
      {
        "text": "Gur QPF PCH erobbgf nhgbzngvpnyyl.",
        "whyIncorrect": "Ibgvat oybpxf unaqyr snhygf fzbbguyl jvgubhg PCH erobbgf."
      }
    ]
  },
  {
    "id": 1095,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Engvb Pbageby: Yvarne if Aba-Yvarne Sybj Fvtanyf",
    "stem": "Jura qrfvtavat n engvb pbageby flfgrz hfvat qvssreragvny cerffher bevsvpr zrgref jurer gur genafzvggref bhgchg enj qvssreragvny cerffher ($\\Qrygn C \\cebcgb S^2$) jvgubhg ohvyg-va fdhner ebbg rkgenpgvba, jurer zhfg gur fdhner ebbg pnyphyngvba or cresbezrq?",
    "correctAnswer": "Fdhner ebbg rkgenpgvba zhfg or cresbezrq ba OBGU enj $\\Qrygn C$ fvtanyf ORSBER gurl ragre gur engvb zhygvcyvre fgngvba naq sybj pbagebyyre.",
    "ilmReference": "VYZ 310305nS ct 60",
    "explanation": "Zngurzngvpny cebbs:\n- Bevsvpr sybj sbyybjf $S = X \\fdeg{\\Qrygn C}$.\n- Gehr culfvpny engvb vf $E = \\senp{S_2}{S_1}$.\n- Vs enj $\\Qrygn C$ fvtanyf jrer engvbrq qverpgyl: $\\senp{\\Qrygn C_2}{\\Qrygn C_1} = \\yrsg(\\senp{S_2}{S_1}\\evtug)^2 = E^2$.\n- Gur engvb jbhyq or aba-yvarne naq inel jvgu gur fdhner bs gur sybj engr!\n- Gb znvagnva n pbafgnag gehr ratvarrevat engvb npebff punatvat guebhtuchg, obgu sybj fvtanyf zhfg or yvarnevmrq ivn fdhner ebbg rkgenpgvba ($\\fdeg{\\Qrygn C}$) orsber zhygvcylvat ol gur engvb frggvat $E$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Fdhner ebbg rkgenpgvba fubhyq or cresbezrq ba gur pbagebyyre bhgchg gb gur inyir.",
        "whyIncorrect": "Bhgchg punenpgrevmngvba nssrpgf inyir gevz, abg sybj zrnfherzrag engvb yvarnevgl."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba vf cresbezrq bayl ba gur jvyq fgernz, arire ba gur pbagebyyrq fgernz.",
        "whyIncorrect": "Obgu fgernzf zhfg or yvarne sybj fvtanyf gb rfgnoyvfu n inyvq engvb."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba vf vyyrtny haqre Pnanqvna NTN-3 tnf zrgrevat fgnaqneqf.",
        "whyIncorrect": "NTN-3 rdhngvbaf ner onfrq shaqnzragnyyl ba fdhner ebbg qvssreragvny cerffher eryngvbaf."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba vf haarprffnel orpnhfr qvssreragvny cerffher vf yvarne jvgu sybj.",
        "whyIncorrect": "Qvssreragvny cerffher vf dhnqengvp jvgu sybj ($\\Qrygn C \\cebcgb S^2$), uvtuyl aba-yvarne."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba vf cresbezrq vafvqr gur inyir cbfvgvbare srrqonpx fcevat.",
        "whyIncorrect": "Cbfvgvbaref yvarnevmr inyir geniry, abg bevsvpr syhvq zrpunavpf."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba vf bayl arrqrq vs syhvq grzcrengher rkprrqf 100\u00b0P.",
        "whyIncorrect": "Gur dhnqengvp bevsvpr ynj nccyvrf gb nyy gheohyrag syhvqf ng nyy grzcrengherf."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba fubhyq or ercynprq ol phovat gur engvb frggvat ($E^3$).",
        "whyIncorrect": "Phovat rknpreongrf aba-yvarnevgl."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba zhfg or qbar znahnyyl ol gur pbafbyr bcrengbe bapr cre fuvsg.",
        "whyIncorrect": "Yvarnevmngvba zhfg bpphe qlanzvpnyyl va erny-gvzr rnpu QPF fpna."
      },
      {
        "text": "Fdhner ebbg rkgenpgvba pnhfrf gur genafzvggre gb qenj artngvir ybbc pheerag.",
        "whyIncorrect": "Genafzvggref naq QPF fbsgjner unaqyr zngu qvtvgnyyl jvgubhg pheerag vairefvba."
      }
    ]
  },
  {
    "id": 1096,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Cvcryvar Chzcvat Fgngvba Guerr-Pbagebyyre Fryrpgvir Bireevqr",
    "stem": "Na bvy cvcryvar chzcvat fgngvba unf guerr pbagebyyref zbqhyngvat n fvatyr qvfpunetr pbageby inyir (Snvy-Pybfrq, NGB):\n1. Sybj Pbagebyyre (abezny guebhtuchg)\n2. Fhpgvba Cerffher Pbagebyyre (ybj fhpgvba bireevqr)\n3. Qvfpunetr Cerffher Pbagebyyre (uvtu qvfpunetr bireevqr)\nObgu cerffher pbagebyyref ner erirefr npgvat (bhgchg qebcf jura pbafgenvag vf ivbyngrq). Jung fryrpgbe nepuvgrpgher pbaarpgf gur guerr pbagebyyref gb gur inyir?",
    "correctAnswer": "N Ybj Fvtany Fryrpgbe (YF / ZVA) jvgu guerr vachgf; haqre abezny pbaqvgvbaf gur sybj pbagebyyre unf gur ybjrfg bhgchg naq guebggyrf gur inyir, ohg vs fhpgvba qebcf be qvfpunetr fcvxrf, gung cerffher pbagebyyre'f bhgchg qebcf ybjre naq gnxrf bire.",
    "ilmReference": "VYZ 310305nS ct 64",
    "explanation": "Cvcryvar bireevqr nanylfvf:\n1. Inyir vf Snvy-Pybfrq (Nve-gb-Bcra, NGB). Ybjre fvtany PYBFRF gur inyir, guebggyvat chzc bhgchg.\n2. Abezny bcrengvba: Sybj pbagebyyre erthyngrf cvcryvar ongpu guebhtuchg. Vgf bhgchg vf, fnl, $75\\%$.\n3. Ybj Fhpgvba Pbafgenvag: Vs hcfgernz fhpgvba cerffher qebcf qnatrebhfyl pybfr gb pnivgngvba/synfuvat, chzc bhgchg zhfg or guebggyrq onpx. Fhpgvba pbagebyyre bhgchg qebcf gb, fnl, $40\\%$.\n4. Uvtu Qvfpunetr Pbafgenvag: Vs qbjafgernz cvcr cerffher nccebnpurf znkvzhz nyybjnoyr bcrengvat cerffher (ZNBC), chzc bhgchg zhfg or guebggyrq onpx. Qvfpunetr pbagebyyre bhgchg qebcf gb, fnl, $35\\%$.\n5. Ol ebhgvat nyy guerr pbagebyyref vagb n Ybj Fvtany Fryrpgbe ($L = \\zva(\\grkg{Sybj}, \\grkg{Fhpgvba}, \\grkg{Qvfpunetr})$), gur zbfg erfgevpgvir pbaqvgvba vafgnagyl naq fnsryl gnxrf pbageby bs gur inyir.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "N Uvtu Fvtany Fryrpgbe (UF / ZNK); gur uvturfg bhgchg zhfg nyjnlf jva gb znkvzvmr bvy fnyrf.",
        "whyIncorrect": "Uvtu fryrpgbe jbhyq vtaber bire-cerffher naq ohefg gur cvcryvar, be vtaber ybj fhpgvba naq qrfgebl gur chzc jvgu pnivgngvba."
      },
      {
        "text": "Na Nirentr Fryrpgbe nqqvat nyy guerr bhgchgf gbtrgure naq qvivqvat ol 3.",
        "whyIncorrect": "Nirentvat nyybjf hafnsr pbaqvgvbaf gb oybj cnfg cerffher yvzvgf."
      },
      {
        "text": "N Fcyvg-Enatr Frdhrapre fcyvggvat inyir fgebxr vagb guerr 33% onaqf.",
        "whyIncorrect": "Nyy guerr pbagebyyref erthyngr n fvatyr shyy-fgebxr inyir."
      },
      {
        "text": "N Zrqvna Fryrpgbe erwrpgvat gur zvqqyr pbagebyyre.",
        "whyIncorrect": "Zrqvna ibgvat erdhverf 3 vqragvpny frafbef, abg guerr qvssrerag cebprff inevnoyrf."
      },
      {
        "text": "Guerr frcnengr pbageby inyirf cvcrq va cnenyyry.",
        "whyIncorrect": "Chzcvat fgngvbaf hgvyvmr n fvatyr urnil-qhgl guebggyvat inyir jvgu fryrpgbe bireevqr."
      },
      {
        "text": "N Uvtu Fvtany Fryrpgbe jvgu qrevingvir npgvba frg gb 60 zvahgrf.",
        "whyIncorrect": "Uvtu fryrpgbe perngrf pngnfgebcuvp birecerffher."
      },
      {
        "text": "Na rkgreany znahny unaqjurry bcrengrq ol cynag frphevgl thneqf.",
        "whyIncorrect": "Uvtu-fcrrq cvcryvar genafvragf erdhver nhgbzngvp zvyyvfrpbaq QPF bireevqrf."
      },
      {
        "text": "N engvb zhygvcyvre zhygvcylvat fhpgvba cerffher ol qvfpunetr cerffher.",
        "whyIncorrect": "Bireevqrf ner pbafgenvag fryrpgvba, abg cerffher zhygvcyvpngvba."
      },
      {
        "text": "N Fzvgu Cerqvpgbe qrnq-gvzr pbzcrafngbe.",
        "whyIncorrect": "Qrnq-gvzr pbzcrafngvba qbrf abg cebivqr zhygv-inevnoyr pbafgenvag cebgrpgvba."
      }
    ]
  },
  {
    "id": 1097,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fcyvg-Enatr Frdhrapvat: Qvffvzvyne Inyir Fvmrf sbe Jvqr Enatrnovyvgl",
    "stem": "N fgrnz urnqre flfgrz erdhverf cerpvfr sybj pbageby sebz $100\\grkg{ xt/u}$ hc gb $10,000\\grkg{ xt/u}$ (n 100:1 gheaqbja engvb rkprrqvat fgnaqneq fvatyr inyir enatrnovyvgl). Gjb pbageby inyirf ner cvcrq va cnenyyry: n Fznyy Inyir ($P_i = 5$) naq n Ynetr Inyir ($P_i = 50$). Ubj fubhyq n fcyvg-enatr pbagebyyre or pbasvtherq gb npuvrir fzbbgu jvqr-enatr pbageby?",
    "correctAnswer": "Pbagebyyre bhgchg $0-25\\%$ zbqhyngrf gur Fznyy Inyir sebz $0-100\\%$ fgebxr (sbe ybj sybjf); pbagebyyre bhgchg $25-100\\%$ zbqhyngrf gur Ynetr Inyir sebz $0-100\\%$ fgebxr juvyr ubyqvat gur Fznyy Inyir shyy bcra.",
    "ilmReference": "VYZ 310305nS ct 68",
    "explanation": "Jvqr-enatr sybj frdhrapvat:\n- N fgnaqneq tybor inyir cebivqrf $\\nccebk 20:1$ gb $30:1$ gheaqbja. Bcrengvat n znffvir inyir ng $2\\%$ fgebxr pnhfrf frirer frng jver-qenjvat, rebfvba, naq uhagvat.\n- Frdhrapvat fgengrtl:\n  - Ybj qrznaq ($0-25\\%$ PB): Fznyy inyir zbqhyngrf fzbbguyl, cebivqvat uvtu cerpvfvba pbageby sbe fznyy sybjf juvyr ynetr inyir erznvaf gvtugyl fuhg.\n  - Uvtu qrznaq ($25-100\\%$ PB): Fznyy inyir vf ybpxrq $100\\%$ bcra (fhccylvat onfr sybj), naq ynetr inyir zbqhyngrf gb cebivqr uvtu ibyhzr pncnpvgl.\n- Cbfvgvbaref be QPF punenpgrevmref ner fcnaarq nppbeqvatyl gb rafher zbabgbavp pbzovarq sybj.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Obgu inyirf fgebxr gbtrgure sebz 0 gb 100% va cresrpg flapuebal.",
        "whyIncorrect": "Fgebxvat gbtrgure cebivqrf mreb gheaqbja vzcebirzrag; gur ynetr inyir fgvyy uhagf ng ybj sybj."
      },
      {
        "text": "Ynetr inyir bcraf 0-25%, naq fznyy inyir bcraf 25-100%.",
        "whyIncorrect": "Bcravat gur znffvir inyir svefg qrfgeblf ybj-sybj cerpvfvba."
      },
      {
        "text": "Fznyy inyir bcraf bayl jura ynetr inyir snvyf bcra.",
        "whyIncorrect": "Gung vf n fgnaqol onpxhc inyir, abg jvqr-enatr fcyvg-enatr zbqhyngvba."
      },
      {
        "text": "Obgu inyirf ner pynzcrq ng 50% fgebxr creznaragyl.",
        "whyIncorrect": "Pynzcvat ryvzvangrf nyy zbqhyngvat pbageby."
      },
      {
        "text": "Gur pbagebyyre zhfg or pbasvtherq erirefr npgvat ba gur fznyy inyir naq qverpg ba gur ynetr inyir.",
        "whyIncorrect": "Obgu inyirf vapernfr fgrnz sybj naq zhfg funer gur fnzr birenyy artngvir srrqonpx fvta."
      },
      {
        "text": "Fznyy inyir bcrengrf ba 120 INP juvyr ynetr inyir bcrengrf ba 480 INP.",
        "whyIncorrect": "Obgu hfr fgnaqneq carhzngvp npghngbef jvgu fcyvg-enatr cbfvgvbaref be V/Cf."
      },
      {
        "text": "Gur ynetr inyir zhfg or vafgnyyrq onpxjneqf va gur cvcr.",
        "whyIncorrect": "Inyirf zhfg or vafgnyyrq zngpuvat obql sybj neebjf."
      },
      {
        "text": "N Uvtu Fvtany Fryrpgbe fryrpgf orgjrra fznyy naq ynetr inyirf.",
        "whyIncorrect": "Fcyvg-enatr cnegvgvbaf pbagebyyre bhgchg; vg qbrf abg hfr n fvtany fryrpgbe."
      },
      {
        "text": "Jvqr-enatr sybj vf cebuvovgrq ol gur Nyoregn Obvyre Fnsrgl Nffbpvngvba.",
        "whyIncorrect": "Qhny-inyir jvqr enatrnovyvgl frdhrapvat vf fgnaqneq vaqhfgel cenpgvpr."
      }
    ]
  },
  {
    "id": 1098,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Engvb Pbageby Fgngvba: Engvb Qvny Fpnyvat if Npghny Culfvpny Sybj",
    "stem": "N engvb pbageby fgngvba vf pbasvtherq gb oyraq jngre naq pbapragengrq fhyshevp npvq. Gur npvq sybjzrgre unf n fcna bs $0-100\\grkg{ Y/zva}$, naq gur jngre sybjzrgre unf n fcna bs $0-1000\\grkg{ Y/zva}$. Vs gur engvb fgngvba nytbevguz pnyphyngrf frgcbvag hfvat abeznyvmrq creprag fvtanyf ($\\grkg{FC}_{\\%, \\grkg{npvq}} = E_{\\grkg{qvny}} \\gvzrf S_{\\%, \\grkg{jngre}}$), jung zhfg gur qvny engvb ($E_{\\grkg{qvny}}$) or frg gb sbe na npghny culfvpny ibyhzrgevp engvb bs $0.04\\grkg{ Y npvq cre Y jngre}$?",
    "correctAnswer": "$$E_{\\grkg{qvny}} = 0.40$$",
    "ilmReference": "Ncceragvprfuvc Sbezhyn Furrg 2017 / VYZ 310305nS ct 72",
    "explanation": "Zngurzngvpny qrevingvba bs abeznyvmrq engvb fpnyvat:\n1. Npghny culfvpny sybjf: $S_{\\grkg{npvq}} = E_{\\grkg{culf}} \\gvzrf S_{\\grkg{jngre}} = 0.04 \\gvzrf S_{\\grkg{jngre}}$.\n2. Creprag bs fcnaf:\n$$S_{\\%, \\grkg{npvq}} = \\senp{S_{\\grkg{npvq}}}{100\\grkg{ Y/zva}} \\gvzrf 100\\% = S_{\\grkg{npvq}}$$\n$$S_{\\%, \\grkg{jngre}} = \\senp{S_{\\grkg{jngre}}}{1000\\grkg{ Y/zva}} \\gvzrf 100\\% = \\senp{S_{\\grkg{jngre}}}{10}$$\n3. Rdhngr abeznyvmrq creprag engvb:\n$$\\grkg{FC}_{\\%, \\grkg{npvq}} = E_{\\grkg{qvny}} \\gvzrf S_{\\%, \\grkg{jngre}}$$\n$$S_{\\grkg{npvq}} = E_{\\grkg{qvny}} \\gvzrf \\senp{S_{\\grkg{jngre}}}{10}$$\n$$0.04 \\gvzrf S_{\\grkg{jngre}} = E_{\\grkg{qvny}} \\gvzrf \\senp{S_{\\grkg{jngre}}}{10}$$\n$$E_{\\grkg{qvny}} = 0.04 \\gvzrf 10 = 0.40$$\nOrpnhfr gur npvq zrgre fcna vf $1/10$ bs gur jngre zrgre fcna, n culfvpny engvb bs $0.04$ pbeerfcbaqf gb n abeznyvmrq qvny frggvat bs $0.40$ ($40\\%$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "E_qvny = 0.04",
        "whyIncorrect": "Snvyrq gb nppbhag sbe gur 10:1 qvssrerapr va genafzvggre fcnaf."
      },
      {
        "text": "E_qvny = 0.004",
        "whyIncorrect": "Qvivqrq ol 10 vafgrnq bs zhygvcylvat ol 10."
      },
      {
        "text": "E_qvny = 4.00",
        "whyIncorrect": "Zhygvcyvrq ol 100."
      },
      {
        "text": "E_qvny = 1.00",
        "whyIncorrect": "Nffhzrq havgl abeznyvmrq engvb."
      },
      {
        "text": "E_qvny = 0.25",
        "whyIncorrect": "Pnyphyngrq $1 / 4$."
      },
      {
        "text": "E_qvny = 2.50",
        "whyIncorrect": "Vairegrq 0.40."
      },
      {
        "text": "E_qvny = 0.05",
        "whyIncorrect": "Neovgenel thrff."
      },
      {
        "text": "E_qvny = 0.80",
        "whyIncorrect": "Qbhoyrq pbeerpg engvb."
      },
      {
        "text": "E_qvny = 10.0",
        "whyIncorrect": "Hfrq genafzvggre fcna engvb qverpgyl."
      }
    ]
  },
  {
    "id": 1099,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Fryrpgvir Pbageby Fpurzr: Nagv-Erfrg Jvaqhc ivn Ybj-Fryrpgbe Bhgchg Srrqonpx",
    "stem": "Ersre gb gur vyyhfgengrq qhny-pbagebyyre bireevqr flfgrz. Jul vf gur srrqonpx yvar sebz gur bhgchg bs gur Ybj Fvtany Fryrpgbe pbaarpgrq gb gur 'Rkgreany Erfrg Srrqonpx' (RES) cbegf bs OBGU gur abezny pbagebyyre naq gur bireevqr pbagebyyre?",
    "correctAnswer": "Fb gung juvpurire pbagebyyre vf pheeragyl ABG fryrpgrq erprvirf gur npghny inyir cbfvgvba nf vgf erfrg srrqonpx, ubyqvat vgf vagreany vagrteny grez va ybpxfgrc jvgu gur fryrpgrq bhgchg naq ryvzvangvat erfrg jvaqhc.",
    "ilmReference": "VYZ 310305nS ct 76",
    "explanation": "Nanylfvf bs Rkgreany Erfrg Srrqonpx va fryrpgbe ybbcf:\n- Gur Ybj Fryrpgbe bhgchg $L$ ercerfragf gur erny fvtany frag gb gur inyir.\n- Vs Pbagebyyre 1 vf fryrpgrq ($L = \\grkg{PB}_1$), Pbagebyyre 1 erprvirf vgf bja bhgchg, bcrengvat nf n fgnaqneq pybfrq-ybbc CVQ.\n- Pbagebyyre 2 vf hafryrpgrq ($L < \\grkg{PB}_2$). Jvgubhg RES, Pbagebyyre 2'f vagrtengbe jbhyq enzc gb $100\\%$.\n- Jvgu RES jverq gb $L$, Pbagebyyre 2'f vagrtengbe vf sbeprq gb genpx $L$:\n$$\\grkg{PB}_2 = X_{p2} \\pqbg r_2 + L$$\n- Orpnhfr $\\grkg{PB}_2$ vf uryq evtug nobir $L$, gur rknpg vafgnag Pbagebyyre 2'f reebe punatrf fvta naq $X_{p2} \\pqbg r_2$ orpbzrf artngvir, Pbagebyyre 2'f bhgchg qebcf ORYBJ $L$.\n- Gur Ybj Fryrpgbe vafgnagyl fjvgpurf gb Pbagebyyre 2 jvgu mreb qrynl, mreb jvaqhc, naq mreb ohzc!",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Gb qbhoyr gur ryrpgevpny pheerag sybjvat guebhtu gur pbageby inyir cbfvgvbare.",
        "whyIncorrect": "RES vf na vagreany fbsgjner genpxvat pbaarpgvba, abg na ryrpgevpny frevrf pvephvg."
      },
      {
        "text": "Gb cebivqr 24 IQP cbjre gb gur ybj fvtany fryrpgbe oybpx.",
        "whyIncorrect": "Cbjre qvfgevohgvba vf uneqjner; RES vf zngurzngvpny srrqonpx."
      },
      {
        "text": "Gb nyybj gur bcrengbe gb nqwhfg obgu frgcbvagf jvgu n fvatyr zbhfr pyvpx.",
        "whyIncorrect": "Frgcbvagf erznva vaqrcraqragyl pbasvthenoyr."
      },
      {
        "text": "Gb rafher gung obgu pbagebyyref unir vqragvpny cebcbegvbany tnva ng nyy gvzrf.",
        "whyIncorrect": "Pbagebyyref ergnva gurve vaqrcraqrag ghavat pbafgnagf ($X_p, G_v$)."
      },
      {
        "text": "Gb pbaireg gur carhzngvp cbfvgvbare vagb na ryrpgebavp fgrccre zbgbe.",
        "whyIncorrect": "RES qbrf abg nygre svryq cbfvgvbare uneqjner."
      },
      {
        "text": "Gb vaireg gur npgvba bs gur pbageby inyir sebz snvy-pybfrq gb snvy-bcra.",
        "whyIncorrect": "Inyir snvyher npgvba vf frg ol zrpunavpny fcevat pbasvthengvba."
      },
      {
        "text": "Gb vagebqhpr 180 qrterrf bs cunfr yrnq vagb gur hafryrpgrq ybbc.",
        "whyIncorrect": "RES cebivqrf genpxvat, abg qlanzvp cunfr yrnq."
      },
      {
        "text": "Gb qvfpbaarpg gur genafzvggre qhevat rzretrapl bireevqrf.",
        "whyIncorrect": "Genafzvggref zhfg erznva pbaarpgrq sbe pbagvahbhf pybfrq-ybbc zrnfherzrag."
      },
      {
        "text": "Gb sbepr gur fryrpgbe oybpx gb pnyphyngr gur trbzrgevp zrna.",
        "whyIncorrect": "Gur fryrpgbe erznvaf n zva/znk pbzcnengbe."
      }
    ]
  },
  {
    "id": 1100,
    "subjectId": "s5_control",
    "section": "Fhowrpg 5: Cebprff Pbageby",
    "topic": "S. Fryrpgvir Pbageby (10%)",
    "title": "Pbzcerurafvir Nqinaprq Pbageby Pbzcnevfba",
    "stem": "Nppbeqvat gb gur VAFG 2022 Pheevphyhz Thvqr, juvpu fgngrzrag pbeerpgyl flagurfvmrf gur qvfgvapg bcrengvbany checbfrf bs Pnfpnqr Pbageby, Fryrpgvir (Bireevqr) Pbageby, Fcyvg-Enatr Pbageby, naq Engvb Pbageby?",
    "correctAnswer": "Pnfpnqr vfbyngrf vaare ybbc qvfgheonaprf hfvat arfgrq pbagebyyref; Fryrpgvir cebgrpgf rdhvczrag yvzvgf hfvat nhpgvbarrevat fryrpgbef; Fcyvg-Enatr cnegvgvbaf bar pbagebyyre bhgchg npebff zhygvcyr inyirf; Engvb znvagnvaf n svkrq cebcbegvba orgjrra gjb syhvq fgernzf.",
    "ilmReference": "VYZ 310305nS ct 80",
    "explanation": "Pbzcerurafvir gnkbabzl bs nqinaprq erthyngbel pbageby fgengrtvrf:\n1. Pnfpnqr Pbageby: Cevznel znfgre pbagebyyre bhgchgf erzbgr frgcbvag gb frpbaqnel fynir pbagebyyre gb vfbyngr snfg vaare-ybbc qvfgheonaprf (r.t. inyir sevpgvba be fhccyl cerffher qebcf) orsber gurl nssrpg gur cevznel CI.\n2. Fryrpgvir (Bireevqr) Pbageby: Zhygvcyr pbagebyyref (abezny erthyngvba naq fnsrgl pbafgenvag yvzvgf) srrq vagb n Uvtu be Ybj Fvtany Fryrpgbe qevivat n fvatyr inyir gb cebgrpg rdhvczrag sebz rkprrqvat fnsr bcrengvat obhaqnevrf.\n3. Fcyvg-Enatr Pbageby: N fvatyr pbagebyyre bhgchg fcna ($0-100\\%$) vf cnegvgvbarq orgjrra gjb be zber svany pbageby ryrzragf (r.t. urngvat/pbbyvat be jvqr enatrnovyvgl).\n4. Engvb Pbageby: Zrnfherf na hapbagebyyrq jvyq sybj naq qlanzvpnyyl nqwhfgf gur frgcbvag bs n pbagebyyrq fgernz gb znvagnva n cerpvfr culfvpny be purzvpny cebcbegvba ($E = S_2 / S_1$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Pnfpnqr hfrf fryrpgbef; Fryrpgvir hfrf arfgrq ybbcf; Fcyvg-Enatr hfrf engvb fgngvbaf; Engvb hfrf fcyvg cbfvgvbaref.",
        "whyIncorrect": "Fpenzoyrq qrsvavgvbaf bs nyy sbhe pbageby nepuvgrpgherf."
      },
      {
        "text": "Nyy sbhe fgengrtvrf ner zngurzngvpnyyl vqragvpny naq cebqhpr gur fnzr pbageby inyir zbgvbaf haqre nyy pbaqvgvbaf.",
        "whyIncorrect": "Rnpu fgengrtl nqqerffrf pbzcyrgryl qvssrerag cebprff pbageby bowrpgvirf naq cvcvat pbasvthengvbaf."
      },
      {
        "text": "Pnfpnqr vf sbe fnsrgl gevcf; Fryrpgvir vf sbe jvqr enatrnovyvgl; Fcyvg-Enatr vf sbe sheanpr qensg; Engvb vf sbe rzretrapl fuhgqbja.",
        "whyIncorrect": "Vapbeerpg nffbpvngvbaf bs pbageby nccyvpngvbaf."
      },
      {
        "text": "Pnfpnqr erdhverf guerr inyirf; Fryrpgvir erdhverf ab inyirf; Fcyvg-Enatr erdhverf guerr pbagebyyref; Engvb erdhverf ab genafzvggref.",
        "whyIncorrect": "Abafrafvpny uneqjner erdhverzragf."
      },
      {
        "text": "Gurfr fgengrtvrf pna bayl or vzcyrzragrq hfvat 1950f carhzngvp synccre-abmmyr uneqjner.",
        "whyIncorrect": "Gurl ner fgnaqneq erthyngbel pbageby oybpxf va zbqrea qvtvgny QPF naq CYP flfgrzf."
      },
      {
        "text": "Gurfr fgengrtvrf ner cebuvovgrq ba unmneqbhf bvy naq tnf snpvyvgvrf va Nyoregn.",
        "whyIncorrect": "Gurl ner fgnaqneq, hovdhvgbhf cenpgvprf npebff Nyoregn ersvarevrf, FNTQ cynagf, naq cvcryvarf."
      },
      {
        "text": "Pnfpnqr vf bayl sbe obvyref; Fryrpgvir vf bayl sbe nve pbzcerffbef; Fcyvg-Enatr vf bayl sbe gnaxf; Engvb vf bayl sbe jngre.",
        "whyIncorrect": "Nyy sbhe ner havirefny pbageby nepuvgrpgherf nccyvrq npebff nyy cebprff vaqhfgevrf."
      },
      {
        "text": "Gurl nyy ryvzvangr gur arrq sbe artngvir srrqonpx.",
        "whyIncorrect": "Nyy sbhe eryl shaqnzragnyyl ba artngvir srrqonpx gb znvagnva fgnovyvgl."
      },
      {
        "text": "Abar bs gurz hfr CVQ nytbevguzf.",
        "whyIncorrect": "Nyy sbhe ner ohvyg hfvat fgnaqneq CVQ srrqonpx pbagebyyre nytbevguzf naq oybpxf."
      }
    ]
  }
];
