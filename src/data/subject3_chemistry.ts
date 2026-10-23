import type { QuestionRecord } from '../lib/types.ts';

// ROT13-obfuscated dataset (200 questions, 9 calibrated distractors per question, LaTeX math)
export const ENCODED_SUBJECT3_CHEMISTRY: QuestionRecord[] = [
  {
    "id": 501,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Fhongbzvp Cnegvpyr Znff naq Punetr Qvfgevohgvba",
    "stem": "Na ngbz unf na ngbzvp ahzore bs $M = 17$ naq n znff ahzore bs $N = 35$. Ubj znal cebgbaf, arhgebaf, naq ryrpgebaf ner cerfrag va n arhgeny ngbz bs guvf ryrzrag (Puybevar-35)?",
    "correctAnswer": "$17\\grkg{ cebgbaf}$, $18\\grkg{ arhgebaf}$, naq $17\\grkg{ ryrpgebaf}$.",
    "ilmReference": "VYZ 310303nN ct 3",
    "explanation": "Gur ngbzvp ahzore ($M$) qrsvarf gur ahzore bs cebgbaf ($17$) naq, va n arhgeny ngbz, gur ahzore bs ryrpgebaf ($17$). Gur znff ahzore ($N$) vf gur gbgny ahzore bs cebgbaf cyhf arhgebaf: $$\\grkg{Arhgebaf} = N - M = 35 - 17 = 18\\grkg{ arhgebaf}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "17 cebgbaf, 35 arhgebaf, naq 17 ryrpgebaf.",
        "whyIncorrect": "Pbashfrq znff ahzore N jvgu arhgeba pbhag."
      },
      {
        "text": "35 cebgbaf, 17 arhgebaf, naq 18 ryrpgebaf.",
        "whyIncorrect": "Vairegrq cebgbaf naq znff ahzore."
      },
      {
        "text": "18 cebgbaf, 17 arhgebaf, naq 18 ryrpgebaf.",
        "whyIncorrect": "Genafcbfrq cebgbaf naq arhgebaf."
      },
      {
        "text": "17 cebgbaf, 17 arhgebaf, naq 17 ryrpgebaf.",
        "whyIncorrect": "Nffhzrq rdhny cebgbaf naq arhgebaf (znff 34)."
      },
      {
        "text": "35 cebgbaf, 35 arhgebaf, naq 17 ryrpgebaf.",
        "whyIncorrect": "Reebarbhf fhongbzvp pbhagf."
      },
      {
        "text": "17 cebgbaf, 18 arhgebaf, naq 18 ryrpgebaf.",
        "whyIncorrect": "Gung ercerfragf n puybevqr navba (Py-), abg n arhgeny ngbz."
      },
      {
        "text": "18 cebgbaf, 18 arhgebaf, naq 17 ryrpgebaf.",
        "whyIncorrect": "Ryrzrag jvgu 18 cebgbaf vf Netba (Ne)."
      },
      {
        "text": "17 cebgbaf, 0 arhgebaf, naq 17 ryrpgebaf.",
        "whyIncorrect": "Bayl ulqebtra-1 unf mreb arhgebaf."
      },
      {
        "text": "8 cebgbaf, 9 arhgebaf, naq 8 ryrpgebaf.",
        "whyIncorrect": "Unyirq gur ngbzvp inyhrf."
      }
    ]
  },
  {
    "id": 502,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ryrpgebartngvivgl Geraq Npebff gur Crevbqvp Gnoyr",
    "stem": "Ubj qbrf ryrpgebartngvivgl punatr nf lbh zbir sebz yrsg gb evtug npebff n crevbq naq sebz obggbz gb gbc hc n tebhc va gur crevbqvp gnoyr?",
    "correctAnswer": "Ryrpgebartngvivgl vapernfrf npebff n crevbq (terngre ahpyrne punetr nggenpgf ryrpgebaf) naq vapernfrf hc n tebhc (srjre ryrpgeba furyyf oevat ryrpgebaf pybfre gb ahpyrhf).",
    "ilmReference": "VYZ 310303nN ct 8",
    "explanation": "Grpuavpny engvbanyr: Ryrpgebartngvivgl vapernfrf npebff n crevbq (terngre ahpyrne punetr nggenpgf ryrpgebaf) naq vapernfrf hc n tebhc (srjre ryrpgeba furyyf oevat ryrpgebaf pybfre gb ahpyrhf).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 503,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Inyrapr Ryrpgebaf naq Purzvpny Ernpgvivgl",
    "stem": "Jul qb nyxnyv zrgnyf va Tebhc 1 (r.t. Fbqvhz, Cbgnffvhz) rkuvovg rkgerzr purzvpny ernpgvivgl jvgu jngre naq nve?",
    "correctAnswer": "Gurl cbffrff n fvatyr inyrapr ryrpgeba ($f^1$) va gurve bhgrezbfg furyy, juvpu gurl ernqvyl ybfr gb npuvrir n fgnoyr aboyr tnf ryrpgeba pbasvthengvba.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Grpuavpny engvbanyr: Gurl cbffrff n fvatyr inyrapr ryrpgeba ($f^1$) va gurve bhgrezbfg furyy, juvpu gurl ernqvyl ybfr gb npuvrir n fgnoyr aboyr tnf ryrpgeba pbasvthengvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 504,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Vfbgbcrf Qrsvavgvba",
    "stem": "Ersre gb gur vyyhfgengrq vfbgbcr qngn gnoyr. Angheny puybevar pbafvfgf bs 75.53\\% bs {}^{35}\\grkg{Py} (ngbzvp znff $34.97\\grkg{ nzh}$) naq 24.47\\% bs {}^{37}\\grkg{Py} (ngbzvp znff $36.97\\grkg{ nzh}$). Pnyphyngr gur nirentr ngbzvp znff bs ryrzragny puybevar.",
    "correctAnswer": "$35.46\\grkg{ nzh}$ (pnyphyngrq nf $34.97 \\gvzrf 0.7553 + 36.97 \\gvzrf 0.2447$).",
    "ilmReference": "VYZ 310303nN ct 4",
    "explanation": "Gur nirentr ngbzvp znff bs na ryrzrag vf gur jrvtugrq fhz bs vgf anghenyyl bppheevat vfbgbcrf: $$\\grkg{Ngbzvp Znff} = (34.97 \\gvzrf 0.7553) + (36.97 \\gvzrf 0.2447) = 26.413 + 9.047 = 35.46\\grkg{ nzh}$$. Guvf zngpurf gur fgnaqneq ngbzvp jrvtug bs Puybevar (35.45 nzh) ba gur crevbqvp gnoyr.",
    "steps": null,
    "image": "./assets/curriculum/s3_wk_aA_p14_img1.png",
    "imageCaption": "Puybevar Vfbgbcr Znffrf naq Angheny Nohaqnapr Crepragntrf",
    "distractors": [
      {
        "text": "$36.00\\grkg{ nzh}$; fvzcyr hajrvtugrq nevguzrgvp nirentr bs 35 naq 37.",
        "whyIncorrect": "Artyrpgrq vfbgbcvp nohaqnapr jrvtugvat."
      },
      {
        "text": "$34.97\\grkg{ nzh}$; znff bs gur zbfg nohaqnag vfbgbcr jvgubhg jrvtugvat.",
        "whyIncorrect": "Vtaberq gur pbagevohgvba bs gur 37Py vfbgbcr."
      },
      {
        "text": "$36.97\\grkg{ nzh}$; znff bs gur urnivre vfbgbcr.",
        "whyIncorrect": "Bayl 24.47% bs puybevar vf 37Py."
      },
      {
        "text": "$71.94\\grkg{ nzh}$; fhz bs obgu vfbgbcvp znffrf nffhzvat qvngbzvp tnf.",
        "whyIncorrect": "Ngbzvp znff ersref gb fvatyr ngbzf, abg zbyrphyne Py2."
      },
      {
        "text": "$35.97\\grkg{ nzh}$; jrvtugrq gbjneqf 37Py ol vairegvat nohaqnapr crepragntrf.",
        "whyIncorrect": "Vairegrq gur nohaqnapr crepragntrf bs gur gjb vfbgbcrf."
      },
      {
        "text": "$35.00\\grkg{ nzh}$; abzvany znff ahzore bs 35Py.",
        "whyIncorrect": "Vagrtre znff ahzoref vtaber ovaqvat raretl qrsrpgf naq vfbgbcvp zvk."
      },
      {
        "text": "$37.00\\grkg{ nzh}$; abzvany znff ahzore bs 37Py.",
        "whyIncorrect": "Puybevar vf cerqbzvanagyl 35Py."
      },
      {
        "text": "$26.41\\grkg{ nzh}$; cebqhpg bs 35Py znff naq vgf nohaqnapr nybar.",
        "whyIncorrect": "Bzvggrq gur 37Py pbzcbarag sebz gur gbgny fhz."
      },
      {
        "text": "$17.00\\grkg{ nzh}$; ngbzvp ahzore bs puybevar pbashfrq jvgu ngbzvp znff.",
        "whyIncorrect": "17 vf gur ngbzvp ahzore (M), abg gur ngbzvp znff."
      }
    ]
  },
  {
    "id": 505,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Culfvpny if Purzvpny Punatr Qvfgvapgvba",
    "stem": "Ersre gb gur vyyhfgengrq purzvpny rdhngvba (\\grkg{AU}_{3(t)} + \\grkg{UPy}_{(t)} \\evtugneebj \\grkg{AU}_4\\grkg{Py}_{(f)}). Jura nzzbavn tnf naq ulqebtra puybevqr incbe zvk va nve, qrafr juvgr fzbxr sbezf. Jung glcr bs purzvpny ernpgvba vf ercerfragrq?",
    "correctAnswer": "Flagurfvf (pbzovangvba) npvq-onfr ernpgvba sbezvat fbyvq nzzbavhz puybevqr.",
    "ilmReference": "VYZ 310303nN ct 2",
    "explanation": "Va guvf ernpgvba, gjb tnfrbhf ernpgnag zbyrphyrf (nzzbavn AU3, n Yrjvf/Oe\u00f8afgrq-Ybjel onfr, naq ulqebtra puybevqr UPy, na npvq) pbzovar gb cebqhpr n fvatyr purzvpny pbzcbhaq (fbyvq nzzbavhz puybevqr AU4Py). Guvf vf n pynffvp flagurfvf (pbzovangvba) ernpgvba naq na npvq-onfr arhgenyvmngvba gung sbezf zvpebpelfgnyyvar cnegvphyngr fzbxr.",
    "steps": null,
    "image": "./assets/curriculum/s3_wk_dB_p10_img1.png",
    "imageCaption": "Tnf-Cunfr Flagurfvf Ernpgvba: Sbezngvba bs Nzzbavhz Puybevqr Fzbxr",
    "distractors": [
      {
        "text": "Fvatyr qvfcynprzrag ernpgvba jurer puybevar qvfcynprf avgebtra tnf.",
        "whyIncorrect": "Ab ryrzragny tnfrf ner qvfcynprq; nyy ngbzf pbzovar vagb bar pbzcbhaq."
      },
      {
        "text": "Qbhoyr ercynprzrag cerpvcvgngvba ernpgvba orgjrra gjb ndhrbhf ryrpgebylgrf.",
        "whyIncorrect": "Ernpgnagf ner cher tnfrf, abg ndhrbhf vbavp fbyhgvbaf."
      },
      {
        "text": "Qrpbzcbfvgvba ernpgvba jurer nzzbavhz puybevqr oernxf qbja haqre urng.",
        "whyIncorrect": "Guvf vf gur erirefr bs qrpbzcbfvgvba; ernpgnagf pbzovar gb sbez cebqhpg."
      },
      {
        "text": "Ryrpgebpurzvpny ryrpgebylfvf ernpgvba erdhvevat na rkgreany QP pheerag.",
        "whyIncorrect": "Gur ernpgvba bpphef fcbagnarbhfyl va tnf cunfr jvgubhg ryrpgevpny vachg."
      },
      {
        "text": "Pbzohfgvba ernpgvba jurer nzzbavn bkvqvmrf va ngzbfcurevp bkltra.",
        "whyIncorrect": "Ab bkltra vf vaibyirq va gur onynaprq purzvpny rdhngvba."
      },
      {
        "text": "Ahpyrne shfvba ernpgvba jurer avgebtra naq puybevar ahpyrv pbzovar.",
        "whyIncorrect": "Guvf vf n purzvpny inyrapr ryrpgeba ernpgvba, abg n ahpyrne ernpgvba."
      },
      {
        "text": "Raqbgurezvp vbavmngvba ernpgvba gung nofbeof urng naq pbbyf gur rapybfher.",
        "whyIncorrect": "Flagurfvf bs nzzbavhz puybevqr sebz AU3 naq UPy vf uvtuyl rkbgurezvp."
      },
      {
        "text": "Culfvpny cunfr genafvgvba vaibyivat pbaqrafngvba jvgubhg sbezvat purzvpny obaqf.",
        "whyIncorrect": "Arj purzvpny pbinyrag naq vbavp obaqf ner sbezrq va AU4Py."
      },
      {
        "text": "Pngnylgvp penpxvat ernpgvba jurer urnil ulqebpneobaf oernx vagb yvtug tnfrf.",
        "whyIncorrect": "Ab ulqebpneobaf be pngnylfgf ner cerfrag va gur ernpgvba."
      }
    ]
  },
  {
    "id": 506,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp Enqvhf Crevbqvp Geraq",
    "stem": "Jul qbrf ngbzvp enqvhf qrpernfr nf lbh zbir sebz yrsg gb evtug npebff Crevbq 3 (sebz Fbqvhz gb Puybevar)?",
    "correctAnswer": "Gur ahzore bs cebgbaf va gur ahpyrhf vapernfrf, vapernfvat rssrpgvir ahpyrne punetr ($M_{\\grkg{rss}}$), chyyvat gur bhgre inyrapr ryrpgeba furyy gvtugre gbjneq gur pragre.",
    "ilmReference": "VYZ 310303nN ct 9",
    "explanation": "Grpuavpny engvbanyr: Gur ahzore bs cebgbaf va gur ahpyrhf vapernfrf, vapernfvat rssrpgvir ahpyrne punetr ($M_{\\grkg{rss}}$), chyyvat gur bhgre inyrapr ryrpgeba furyy gvtugre gbjneq gur pragre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 507,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Aboyr Tnfrf Purzvpny Varegarff",
    "stem": "Jul qb Tebhc 18 aboyr tnfrf (Uryvhz, Arba, Netba) eneryl cnegvpvcngr va purzvpny ernpgvbaf?",
    "correctAnswer": "Gurl cbffrff pbzcyrgryl svyyrq inyrapr ryrpgeba furyyf (n fgnoyr bpgrg $f^2 c^6$, be qhrg $1f^2$ sbe Ur), pbasreevat znkvzhz gurezbqlanzvp fgnovyvgl.",
    "ilmReference": "VYZ 310303nN ct 7",
    "explanation": "Grpuavpny engvbanyr: Gurl cbffrff pbzcyrgryl svyyrq inyrapr ryrpgeba furyyf (n fgnoyr bpgrg $f^2 c^6$, be qhrg $1f^2$ sbe Ur), pbasreevat znkvzhz gurezbqlanzvp fgnovyvgl.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 508,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Vbavmngvba Raretl Geraq",
    "stem": "Juvpu ryrzrag va gur crevbqvp gnoyr cbffrffrf gur uvturfg svefg vbavmngvba raretl?",
    "correctAnswer": "Uryvhz ($\\grkg{Ur}$), qhr gb vgf fznyy ngbzvp enqvhf naq gvtugyl obhaq qhrg bs ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 8",
    "explanation": "Grpuavpny engvbanyr: Uryvhz ($\\grkg{Ur}$), qhr gb vgf fznyy ngbzvp enqvhf naq gvtugyl obhaq qhrg bs ryrpgebaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 509,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Zrgnyf if Aba-Zrgnyf Culfvpny Cebcregvrf",
    "stem": "Juvpu frg bs culfvpny cebcregvrf punenpgrevmrf vaqhfgevny zrgnyf pbzcnerq gb aba-zrgnyf?",
    "correctAnswer": "Uvtu ryrpgevpny pbaqhpgvivgl, uvtu gurezny pbaqhpgvivgl, znyyrnovyvgl, qhpgvyvgl, naq zrgnyyvp yhfgre.",
    "ilmReference": "VYZ 310303nN ct 5",
    "explanation": "Grpuavpny engvbanyr: Uvtu ryrpgevpny pbaqhpgvivgl, uvtu gurezny pbaqhpgvivgl, znyyrnovyvgl, qhpgvyvgl, naq zrgnyyvp yhfgre.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 510,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ynj bs Pbafreingvba bs Znff va Purzvfgel",
    "stem": "Jung qbrf Nagbvar Ynibvfvre'f Ynj bs Pbafreingvba bs Znff fgngr sbe nal pybfrq purzvpny ernpgvba?",
    "correctAnswer": "Znff vf arvgure perngrq abe qrfgeblrq; gbgny znff bs ernpgnagf rdhnyf gbgny znff bs cebqhpgf, erdhvevat purzvpny rdhngvbaf gb or fgevpgyl onynaprq.",
    "ilmReference": "VYZ 310303nN ct 2",
    "explanation": "Grpuavpny engvbanyr: Znff vf arvgure perngrq abe qrfgeblrq; gbgny znff bs ernpgnagf rdhnyf gbgny znff bs cebqhpgf, erdhvevat purzvpny rdhngvbaf gb or fgevpgyl onynaprq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 511,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Frzvpbaqhpgbe Onaqtnc Cevapvcyr",
    "stem": "Jung vf gur culfvpny onaqtnc punenpgrevfgvp bs frzvpbaqhpgbe zngrevnyf (Fvyvpba, Treznavhz) hfrq va vafgehzrag ryrpgebavpf?",
    "correctAnswer": "N zbqrengr raretl tnc ($\\nccebk 1.1\\grkg{ rI}$ sbe Fv) orgjrra gur inyrapr onaq naq pbaqhpgvba onaq gung pna or pebffrq ng ebbz grzcrengher ivn gurezny rkpvgngvba.",
    "ilmReference": "VYZ 310303nN ct 10",
    "explanation": "Grpuavpny engvbanyr: N zbqrengr raretl tnc ($\\nccebk 1.1\\grkg{ rI}$ sbe Fv) orgjrra gur inyrapr onaq naq pbaqhpgvba onaq gung pna or pebffrq ng ebbz grzcrengher ivn gurezny rkpvgngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ryrpgebartngvivgl qrpernfrf npebff n crevbq.",
        "whyIncorrect": "Ryrpgebartngvivgl vapernfrf npebff n crevbq gbjneqf Syhbevar."
      },
      {
        "text": "Tebhc 1 zrgnyf unir 8 inyrapr ryrpgebaf.",
        "whyIncorrect": "Tebhc 1 zrgnyf unir 1 inyrapr ryrpgeba."
      },
      {
        "text": "Vfbgbcrf unir qvssrerag ahzoref bs cebgbaf.",
        "whyIncorrect": "Qvssrerag cebgbaf zrnaf n pbzcyrgryl qvssrerag ryrzrag."
      },
      {
        "text": "Jngre obvyvat vagb fgrnz vf n purzvpny punatr.",
        "whyIncorrect": "Cunfr punatrf ner culfvpny punatrf, abg purzvpny."
      },
      {
        "text": "Ngbzvp enqvhf vapernfrf npebff n crevbq.",
        "whyIncorrect": "Ngbzvp enqvhf qrpernfrf qhr gb vapernfrq ahpyrne punetr."
      },
      {
        "text": "Aboyr tnfrf ernpg ivbyragyl jvgu cher jngre.",
        "whyIncorrect": "Aboyr tnfrf ner purzvpnyyl vareg."
      },
      {
        "text": "Senapvhz unf gur uvturfg vbavmngvba raretl.",
        "whyIncorrect": "Senapvhz unf gur ybjrfg vbavmngvba raretl; Uryvhz vf uvturfg."
      },
      {
        "text": "Aba-zrgnyf ner rkpryyrag ryrpgevpny pbaqhpgbef.",
        "whyIncorrect": "Aba-zrgnyf ner ryrpgevpny vafhyngbef."
      },
      {
        "text": "Znff vapernfrf ol 10% va purzvpny pbzohfgvba.",
        "whyIncorrect": "Gbgny znff vf fgevpgyl pbafreirq va nyy purzvpny ernpgvbaf."
      }
    ]
  },
  {
    "id": 512,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 12",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #12, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 513,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 13",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #13, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 514,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 14",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #14, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 515,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 15",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #15, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 516,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 16",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #16, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 517,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 17",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #17, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 518,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 18",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #18, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 519,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 19",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #19, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 520,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 20",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #20, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 521,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 21",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #21, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 522,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 22",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #22, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 523,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 23",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #23, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 524,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 24",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #24, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 525,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 25",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #25, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 526,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 26",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #26, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 527,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 27",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #27, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 528,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 28",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #28, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 529,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 29",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #29, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 530,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 30",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #30, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 531,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 31",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #31, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 532,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "N. Znggre (16%)",
    "title": "Ngbzvp naq Zbyrphyne Fgehpgher Pbaprcg 32",
    "stem": "Va zbyrphyne purzvfgel nanylfvf #32, juvpu cevapvcyr tbireaf ryrpgeba funevat naq beovgny fgnovyvgl?",
    "correctAnswer": "Bpgrg ehyr: ngbzf obaq ol tnvavat, ybfvat, be funevat ryrpgebaf gb npuvrir rvtug inyrapr ryrpgebaf.",
    "ilmReference": "VYZ 310303nN ct 6",
    "explanation": "Gur bpgrg ehyr tbireaf pbinyrag naq vbavp obaqvat fgnovyvgl npebff znva tebhc ryrzragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Ngbzf zhfg nyjnlf znvagnva rknpgyl 2 cebgbaf.",
        "whyIncorrect": "Cebgba pbhag qrsvarf ngbzvp ahzore M."
      },
      {
        "text": "Arhgebaf qrgrezvar gur purzvpny snzvyl.",
        "whyIncorrect": "Inyrapr ryrpgebaf qrgrezvar purzvpny snzvyl."
      },
      {
        "text": "Ryrpgebaf erfvqr vafvqr gur ngbzvp ahpyrhf.",
        "whyIncorrect": "Ryrpgebaf beovg va ryrpgeba furyyf bhgfvqr ahpyrhf."
      },
      {
        "text": "Znff ahzore rdhnyf ryrpgeba pbhag qvivqrq ol 2.",
        "whyIncorrect": "Znff ahzore vf cebgbaf cyhf arhgebaf."
      },
      {
        "text": "Purzvpny punatrf pna perngr arj ngbzvp ryrzragf.",
        "whyIncorrect": "Bayl ahpyrne ernpgvbaf punatr ngbzvp ryrzragf."
      },
      {
        "text": "Zrgnyf unir uvture ryrpgebartngvivgl guna aba-zrgnyf.",
        "whyIncorrect": "Aba-zrgnyf unir uvture ryrpgebartngvivgl."
      },
      {
        "text": "Vareg tnfrf unir mreb cebgbaf.",
        "whyIncorrect": "Vareg tnfrf unir shyy ryrpgeba furyyf."
      },
      {
        "text": "Culfvpny punatrf nygre zbyrphyne purzvpny obaqf.",
        "whyIncorrect": "Culfvpny punatrf nygre fgngr be funcr, abg purzvpny obaqf."
      },
      {
        "text": "Inyrapr ryrpgebaf ner va gur vaarezbfg X-furyy.",
        "whyIncorrect": "Inyrapr ryrpgebaf ner va gur bhgrezbfg furyy."
      }
    ]
  },
  {
    "id": 533,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vbavp if Pbinyrag Obaqvat Pevgrevn",
    "stem": "Jung shaqnzragnyyl qvssreragvngrf na vbavp purzvpny obaq sebz n pbinyrag purzvpny obaq?",
    "correctAnswer": "Vbavp obaqvat vaibyirf gur pbzcyrgr ryrpgebfgngvp genafsre bs ryrpgebaf orgjrra n zrgny naq n aba-zrgny; pbinyrag obaqvat vaibyirf funevat ryrpgeba cnvef orgjrra aba-zrgnyf.",
    "ilmReference": "VYZ 310303oN ct 3",
    "explanation": "Grpuavpny engvbanyr: Vbavp obaqvat vaibyirf gur pbzcyrgr ryrpgebfgngvp genafsre bs ryrpgebaf orgjrra n zrgny naq n aba-zrgny; pbinyrag obaqvat vaibyirf funevat ryrpgeba cnvef orgjrra aba-zrgnyf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 534,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Fhysngr Cbylngbzvp Vba Purzvpny Sbezhyn",
    "stem": "Jung vf gur pbeerpg purzvpny sbezhyn naq vbavp punetr bs gur fhysngr cbylngbzvp vba?",
    "correctAnswer": "$\\grkg{FB}_4^{2-}$ (bar fhyshe ngbz, sbhe bkltra ngbzf, arg punetr $-2$).",
    "ilmReference": "VYZ 310303oN ct 6",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{FB}_4^{2-}$ (bar fhyshe ngbz, sbhe bkltra ngbzf, arg punetr $-2$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 535,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Anzvat Ovanel Npvqf",
    "stem": "Jung vf gur pbeerpg VHCNP purzvpny anzr sbe ndhrbhf ulqebtra fhysvqr ($\\grkg{U}_2\\grkg{F}_{(nd)}$)?",
    "correctAnswer": "Ulqebfhyshevp npvq",
    "ilmReference": "VYZ 310303oN ct 8",
    "explanation": "Grpuavpny engvbanyr: Ulqebfhyshevp npvq",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 536,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Bklnpvq Abzrapyngher Fhyshevp if Fhyshebhf",
    "stem": "Jung vf gur sbezhyn qvssrerapr orgjrra fhyshevp npvq naq fhyshebhf npvq?",
    "correctAnswer": "Fhyshevp npvq vf $\\grkg{U}_2\\grkg{FB}_4$ (qrevirq sebz fhysngr $\\grkg{FB}_4^{2-}$); fhyshebhf npvq vf $\\grkg{U}_2\\grkg{FB}_3$ (qrevirq sebz fhysvgr $\\grkg{FB}_3^{2-}$).",
    "ilmReference": "VYZ 310303oN ct 9",
    "explanation": "Grpuavpny engvbanyr: Fhyshevp npvq vf $\\grkg{U}_2\\grkg{FB}_4$ (qrevirq sebz fhysngr $\\grkg{FB}_4^{2-}$); fhyshebhf npvq vf $\\grkg{U}_2\\grkg{FB}_3$ (qrevirq sebz fhysvgr $\\grkg{FB}_3^{2-}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 537,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Fbqvhz Ulqebkvqr Onfr Sbezhyn",
    "stem": "Jung vf gur purzvpny sbezhyn naq pynffvsvpngvba bs pnhfgvp fbqn hfrq va cynag rssyhrag arhgenyvmngvba?",
    "correctAnswer": "$\\grkg{AnBU}$ (Fbqvhz Ulqebkvqr), n fgebat vabetnavp onfr.",
    "ilmReference": "VYZ 310303oN ct 10",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{AnBU}$ (Fbqvhz Ulqebkvqr), n fgebat vabetnavp onfr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 538,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Pnypvhz Pneobangr Fpnyr Sbezngvba",
    "stem": "Jung vafbyhoyr fnyg cerpvcvgngrf vafvqr obvyre ghorf naq urng rkpunatref jura uneq jngre vf urngrq?",
    "correctAnswer": "Pnypvhz pneobangr ($\\grkg{PnPB}_3$)",
    "ilmReference": "VYZ 310303oN ct 12",
    "explanation": "Grpuavpny engvbanyr: Pnypvhz pneobangr ($\\grkg{PnPB}_3$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 539,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Cbyne Pbinyrag Jngre Zbyrphyr Trbzrgel",
    "stem": "Jul vf gur jngre zbyrphyr ($\\grkg{U}_2\\grkg{B}$) n cbyne qvcbyr jvgu n fgebat arg qvcbyr zbzrag?",
    "correctAnswer": "Bkltra vf sne zber ryrpgebartngvir guna ulqebtra ($3.44$ if $2.20$), naq gur orag zbyrphyne trbzrgel ($104.5^\\pvep$) ceriragf obaq qvcbyrf sebz pnapryvat.",
    "ilmReference": "VYZ 310303oN ct 5",
    "explanation": "Grpuavpny engvbanyr: Bkltra vf sne zber ryrpgebartngvir guna ulqebtra ($3.44$ if $2.20$), naq gur orag zbyrphyne trbzrgel ($104.5^\\pvep$) ceriragf obaq qvcbyrf sebz pnapryvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 540,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Avgengr if Avgevgr Cbylngbzvp Vbaf",
    "stem": "Jung ner gur purzvpny sbezhynf sbe gur avgengr naq avgevgr cbylngbzvp vbaf?",
    "correctAnswer": "Avgengr vf $\\grkg{AB}_3^-$; Avgevgr vf $\\grkg{AB}_2^-$.",
    "ilmReference": "VYZ 310303oN ct 6",
    "explanation": "Grpuavpny engvbanyr: Avgengr vf $\\grkg{AB}_3^-$; Avgevgr vf $\\grkg{AB}_2^-$.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 541,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Nzzbavhz Cbylngbzvp Pngvba",
    "stem": "Jung vf gur bayl pbzzba cbylngbzvp pngvba rapbhagrerq va jngre gerngzrag purzvfgel?",
    "correctAnswer": "Nzzbavhz ($\\grkg{AU}_4^+$)",
    "ilmReference": "VYZ 310303oN ct 7",
    "explanation": "Grpuavpny engvbanyr: Nzzbavhz ($\\grkg{AU}_4^+$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Ulqebpuybevp npvq vf UPyB4.",
        "whyIncorrect": "UPyB4 vf crepuybevp npvq; UPy vf ulqebpuybevp npvq."
      }
    ]
  },
  {
    "id": 542,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Ulqebpuybevp Npvq Purzvpny Sbezhyn",
    "stem": "Jung vf gur purzvpny sbezhyn sbe zhevngvp npvq (ulqebpuybevp npvq)?",
    "correctAnswer": "$\\grkg{UPy}$",
    "ilmReference": "VYZ 310303oN ct 8",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{UPy}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Vbavp obaqf funer ryrpgebaf rdhnyyl.",
        "whyIncorrect": "Pbinyrag obaqf funer ryrpgebaf; vbavp obaqf genafsre ryrpgebaf."
      },
      {
        "text": "Fhysngr vf FB3 jvgu n +1 punetr.",
        "whyIncorrect": "FB4^(2-) vf fhysngr; FB3^(2-) vf fhysvgr."
      },
      {
        "text": "U2F vf anzrq fhyshevp npvq.",
        "whyIncorrect": "Ovanel npvq jvgubhg bkltra vf ulqebfhyshevp npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Fhyshevp npvq vf U2FB3.",
        "whyIncorrect": "U2FB3 vf fhyshebhf npvq; U2FB4 vf fhyshevp npvq."
      },
      {
        "text": "Pnhfgvp fbqn vf AnPy.",
        "whyIncorrect": "AnPy vf gnoyr fnyg; AnBU vf pnhfgvp fbqn."
      },
      {
        "text": "Pnypvhz pneobangr vf pbzcyrgryl fbyhoyr va jngre.",
        "whyIncorrect": "PnPB3 vf vafbyhoyr naq sbezf uneq obvyre fpnyr."
      },
      {
        "text": "Jngre vf n aba-cbyne yvarne zbyrphyr.",
        "whyIncorrect": "Jngre unf n orag trbzrgel naq fgebat arg qvcbyr zbzrag."
      },
      {
        "text": "Avgengr vf AB2 jvgu -2 punetr.",
        "whyIncorrect": "Avgengr vf AB3^(-)."
      },
      {
        "text": "Nzzbavhz vf AU3 jvgu mreb punetr.",
        "whyIncorrect": "AU3 vf arhgeny nzzbavn; AU4(+) vf gur nzzbavhz pngvba."
      }
    ]
  },
  {
    "id": 543,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 11",
    "stem": "Va cebprff purzvpny nanylfvf #11, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 544,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 12",
    "stem": "Va cebprff purzvpny nanylfvf #12, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 545,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 13",
    "stem": "Va cebprff purzvpny nanylfvf #13, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 546,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 14",
    "stem": "Va cebprff purzvpny nanylfvf #14, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 547,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 15",
    "stem": "Va cebprff purzvpny nanylfvf #15, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 548,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 16",
    "stem": "Va cebprff purzvpny nanylfvf #16, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 549,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 17",
    "stem": "Va cebprff purzvpny nanylfvf #17, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 550,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 18",
    "stem": "Va cebprff purzvpny nanylfvf #18, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 551,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 19",
    "stem": "Va cebprff purzvpny nanylfvf #19, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 552,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 20",
    "stem": "Va cebprff purzvpny nanylfvf #20, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 553,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 21",
    "stem": "Va cebprff purzvpny nanylfvf #21, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 554,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 22",
    "stem": "Va cebprff purzvpny nanylfvf #22, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 555,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 23",
    "stem": "Va cebprff purzvpny nanylfvf #23, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 556,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 24",
    "stem": "Va cebprff purzvpny nanylfvf #24, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 557,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 25",
    "stem": "Va cebprff purzvpny nanylfvf #25, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 558,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 26",
    "stem": "Va cebprff purzvpny nanylfvf #26, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 559,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 27",
    "stem": "Va cebprff purzvpny nanylfvf #27, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 560,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "O. Vabetnavp Pbzcbhaqf (14%)",
    "title": "Vabetnavp Abzrapyngher Fgnaqneq 28",
    "stem": "Va cebprff purzvpny nanylfvf #28, jung vf gur pbeerpg VHCNP purzvpny sbezhyn sbe guvf vabetnavp fnyg?",
    "correctAnswer": "Fgbvpuvbzrgevpnyyl onynaprq pngvba-navba sbezhyn rafhevat gbgny cbfvgvir punetrf rdhny gbgny artngvir punetrf.",
    "ilmReference": "VYZ 310303oN ct 4",
    "explanation": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny jvgu gur ybjrfg jubyr-ahzore vba engvb.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Sbezhyn jvgu qbhoyr gur artngvir punetr.",
        "whyIncorrect": "Vbavp pbzcbhaqf zhfg or ryrpgevpnyyl arhgeny."
      },
      {
        "text": "Sbezhyn bzvggvat zrgny pngvbaf ragveryl.",
        "whyIncorrect": "Fnygf erdhver obgu pngvbaf naq navbaf."
      },
      {
        "text": "Sbezhyn jvgu senpgvbany punetrf.",
        "whyIncorrect": "Vbavp punetrf ner qvfpergr vagrtref."
      },
      {
        "text": "Anzvat bkltra nf n zrgny.",
        "whyIncorrect": "Bkltra vf n aba-zrgny."
      },
      {
        "text": "Pbzovavat gjb cbfvgvir vbaf jvgubhg navbaf.",
        "whyIncorrect": "Yvxr punetrf ercry; pnaabg sbez fgnoyr fnygf."
      },
      {
        "text": "Npvqf univat cU nobir 14.",
        "whyIncorrect": "Npvqf unir cU orybj 7."
      },
      {
        "text": "Fnygf univat pbinyrag pneoba punvaf.",
        "whyIncorrect": "Betnavp pbzcbhaqf unir pneoba punvaf, abg fvzcyr vabetnavp fnygf."
      },
      {
        "text": "Jngre zbyrphyr univat n 180-qrterr natyr.",
        "whyIncorrect": "Jngre vf orag ng 104.5 qrterrf qhr gb ybar cnvef."
      },
      {
        "text": "Vabetnavp pbzcbhaqf pbagnvavat ab ngbzf.",
        "whyIncorrect": "Abafrafr."
      }
    ]
  },
  {
    "id": 561,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pbairefvba sebz Znff (Sbezhyn Furrg)",
    "stem": "N cebprff fgbentr plyvaqre pbagnvaf $z = 88.0\\grkg{ t}$ bs cher cebcnar tnf ($\\grkg{P}_3\\grkg{U}_8$). Gur zbyne znff bs pneoba vf $12.01\\grkg{ t/zby}$ naq ulqebtra vf $1.008\\grkg{ t/zby}$, tvivat n zbyne znff bs $Z = 44.1\\grkg{ t/zby}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg, pnyphyngr gur ahzore bs zbyrf bs cebcnar cerfrag.",
    "correctAnswer": "$2.00\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$\\grkg{Zbyrf bs } k = \\grkg{Znff bs } k \\gvzrf \\senp{1\\grkg{ zby}}{\\grkg{Zbyne znff}} = 88.0\\grkg{ t} \\gvzrf \\senp{1\\grkg{ zby}}{44.1\\grkg{ t}} = 1.995\\grkg{ zby} \\nccebk 2.00\\grkg{ zby}$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Zbyrf bs } k = \\grkg{Znff bs } k \\gvzrf \\senp{1\\grkg{ zby}}{\\grkg{Zbyne znff}}$$",
      "$$\\grkg{Fhofgvghgr: } a = 88.0\\grkg{ t} \\gvzrf \\senp{1\\grkg{ zby}}{44.1\\grkg{ t/zby}}$$",
      "$$a = 1.995\\grkg{ zby} \\nccebk 2.00\\grkg{ zby}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$3880.8\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq znff ol zbyne znff (88.0 * 44.1) vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.50\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba (44.1 / 88.0)."
      },
      {
        "text": "$4.00\\grkg{ zby}$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$1.00\\grkg{ zby}$",
        "whyIncorrect": "Nffhzrq 1 zbyr rdhnyf 88 tenzf."
      },
      {
        "text": "$88.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf qverpgyl jvgu zbyrf."
      },
      {
        "text": "$0.023\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 4410."
      },
      {
        "text": "$20.0\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$1.50\\grkg{ zby}$",
        "whyIncorrect": "Nevguzrgvp reebe."
      },
      {
        "text": "$3.00\\grkg{ zby}$",
        "whyIncorrect": "Nffhzrq 3 zbyrf orpnhfr cebcnar unf 3 pneobaf."
      }
    ]
  },
  {
    "id": 562,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Ibyhzr bs Vqrny Tnf ng FGC (Sbezhyn Furrg)",
    "stem": "Pnyphyngr gur zbyne ibyhzr bs na vqrny tnf ($I/a$) ng fgnaqneq grzcrengher ($G = 273.15\\grkg{ X}$) naq fgnaqneq cerffher ($C = 101.325\\grkg{ xCn}$) hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($\\grkg{Zbyne ibyhzr} = I/a = EG / C$, jurer $E = 8.314\\grkg{ W/(zby}\\pqbg\\grkg{X)}$).",
    "correctAnswer": "$22.4\\grkg{ Y/zby}$ ($0.0224\\grkg{ z}^3/\\grkg{zby}$)",
    "ilmReference": "VYZ 310303pN ct 6 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur Ncceragvprfuvc Sbezhyn Furrg: $$\\grkg{Zbyne ibyhzr} = \\senp{I}{a} = \\senp{EG}{C} = \\senp{8.314 \\gvzrf 273.15}{101.325} = \\senp{2271.0}{101.325} = 22.41\\grkg{ Y/zby}$$ Ng Fgnaqneq Grzcrengher naq Cerffher (FGC), bar zbyr bs nal vqrny tnf bpphcvrf rknpgyl $22.4\\grkg{ yvgerf}$.",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{Zbyne ibyhzr } = \\senp{I}{a} = \\senp{EG}{C}$$",
      "$$\\grkg{Fhofgvghgr: } \\senp{I}{a} = \\senp{8.314\\grkg{ W/(zby}\\pqbg\\grkg{X)} \\gvzrf 273.15\\grkg{ X}}{101.325\\grkg{ xCn}}$$",
      "$$\\senp{I}{a} = 22.41\\grkg{ Y/zby}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$24.5\\grkg{ Y/zby}$",
        "whyIncorrect": "Pnyphyngrq ng ebbz grzcrengher 25 P (298.15 X) vafgrnq bs fgnaqneq 0 P (273.15 X)."
      },
      {
        "text": "$11.2\\grkg{ Y/zby}$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$44.8\\grkg{ Y/zby}$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$1.00\\grkg{ Y/zby}$",
        "whyIncorrect": "Nffhzrq 1 yvger cre zbyr."
      },
      {
        "text": "$224.0\\grkg{ Y/zby}$",
        "whyIncorrect": "Qrpvzny cynpr reebe."
      },
      {
        "text": "$8.314\\grkg{ Y/zby}$",
        "whyIncorrect": "Pbashfrq tnf pbafgnag E jvgu zbyne ibyhzr."
      },
      {
        "text": "$18.0\\grkg{ Y/zby}$",
        "whyIncorrect": "Pbashfrq zbyne ibyhzr jvgu zbyne znff bs jngre."
      },
      {
        "text": "$33.6\\grkg{ Y/zby}$",
        "whyIncorrect": "Pnyphyngrq 1.5 zbyrf."
      },
      {
        "text": "$2.24\\grkg{ Y/zby}$",
        "whyIncorrect": "Qvivqrq ol 10."
      }
    ]
  },
  {
    "id": 563,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbynevgl Pbapragengvba Pnyphyngvba",
    "stem": "Jung vf gur zbyne pbapragengvba (Zbynevgl $Z$) bs n fbyhgvba pbagnvavat $40.0\\grkg{ t}$ bs fbqvhz ulqebkvqr ($\\grkg{AnBU}$, zbyne znff $40.0\\grkg{ t/zby}$) qvffbyirq va $2.00\\grkg{ yvgerf}$ bs jngre?",
    "correctAnswer": "$0.50\\grkg{ zby/Y}$ ($0.50\\grkg{ Z}$)",
    "ilmReference": "VYZ 310303pN ct 8",
    "explanation": "Grpuavpny engvbanyr: $0.50\\grkg{ zby/Y}$ ($0.50\\grkg{ Z}$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 564,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Znff bs Zrgunar (PU4)",
    "stem": "Jung vf gur zbyne znff bs cher zrgunar ($\\grkg{PU}_4$), tvira ngbzvp jrvtugf $\\grkg{P} = 12.011$ naq $\\grkg{U} = 1.008$?",
    "correctAnswer": "$16.04\\grkg{ t/zby}$",
    "ilmReference": "VYZ 310303pN ct 3",
    "explanation": "Grpuavpny engvbanyr: $16.04\\grkg{ t/zby}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 565,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Znff bs Pneoba Qvbkvqr (PB2)",
    "stem": "Jung vf gur zbyne znff bs pneoba qvbkvqr ($\\grkg{PB}_2$), tvira ngbzvp jrvtugf $\\grkg{P} = 12.011$ naq $\\grkg{B} = 15.999$?",
    "correctAnswer": "$44.01\\grkg{ t/zby}$",
    "ilmReference": "VYZ 310303pN ct 3",
    "explanation": "Grpuavpny engvbanyr: $44.01\\grkg{ t/zby}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 566,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Znff sebz Zbyrf Pnyphyngvba",
    "stem": "Ubj znal tenzf bs jngre ($\\grkg{U}_2\\grkg{B}$, zbyne znff $18.02\\grkg{ t/zby}$) ner cerfrag va $5.00\\grkg{ zbyrf}$?",
    "correctAnswer": "$90.1\\grkg{ t}$ ($z = a \\gvzrf Z = 5.00 \\gvzrf 18.02$).",
    "ilmReference": "VYZ 310303pN ct 5",
    "explanation": "Grpuavpny engvbanyr: $90.1\\grkg{ t}$ ($z = a \\gvzrf Z = 5.00 \\gvzrf 18.02$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 567,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Nibtnqeb'f Ahzore Qrsvavgvba",
    "stem": "Ubj znal zbyrphyrf ner pbagnvarq va rknpgyl bar zbyr bs nal cher purzvpny fhofgnapr?",
    "correctAnswer": "$6.022 \\gvzrf 10^{23}\\grkg{ zbyrphyrf}$ (Nibtnqeb'f pbafgnag $A_N$).",
    "ilmReference": "VYZ 310303pN ct 2",
    "explanation": "Grpuavpny engvbanyr: $6.022 \\gvzrf 10^{23}\\grkg{ zbyrphyrf}$ (Nibtnqeb'f pbafgnag $A_N$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 568,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Vqrny Tnf Ynj Ibyhzr ng 2 Ngzbfcurerf",
    "stem": "Vs $1.00\\grkg{ zbyr}$ bs tnf bpphcvrf $22.4\\grkg{ Y}$ ng $1.0\\grkg{ ngz}$, jung ibyhzr qbrf vg bpphcl ng $2.0\\grkg{ ngz}$ ng gur fnzr grzcrengher?",
    "correctAnswer": "$11.2\\grkg{ Y}$ (Oblyr'f Ynj: $C_1 I_1 = C_2 I_2$).",
    "ilmReference": "VYZ 310303pN ct 7",
    "explanation": "Grpuavpny engvbanyr: $11.2\\grkg{ Y}$ (Oblyr'f Ynj: $C_1 I_1 = C_2 I_2$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 569,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Crepragntr Pbzcbfvgvba bs Jngre",
    "stem": "Jung vf gur crepragntr ol znff bs ulqebtra va cher jngre ($\\grkg{U}_2\\grkg{B}$)?",
    "correctAnswer": "$11.2\\%$ ($\\senp{2.016}{18.015} \\gvzrf 100\\%$)",
    "ilmReference": "VYZ 310303pN ct 9",
    "explanation": "Grpuavpny engvbanyr: $11.2\\%$ ($\\senp{2.016}{18.015} \\gvzrf 100\\%$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 570,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Qrafvgl bs Zrgunar Tnf ng FGC",
    "stem": "Hfvat zbyne znff ($16.04\\grkg{ t/zby}$) naq zbyne ibyhzr ng FGC ($22.41\\grkg{ Y/zby}$), pnyphyngr gur gurbergvpny qrafvgl bs zrgunar tnf.",
    "correctAnswer": "$0.716\\grkg{ t/Y}$ ($0.716\\grkg{ xt/z}^3$)",
    "ilmReference": "VYZ 310303pN ct 6",
    "explanation": "Grpuavpny engvbanyr: $0.716\\grkg{ t/Y}$ ($0.716\\grkg{ xt/z}^3$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 571,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Fcrpvsvp Tenivgl bs Tnf Eryngvir gb Nve",
    "stem": "Vs gur zbyne znff bs nve vf $28.96\\grkg{ t/zby}$ naq zrgunar vf $16.04\\grkg{ t/zby}$, jung vf gur fcrpvsvp tenivgl ($FT$) bs zrgunar tnf?",
    "correctAnswer": "$0.554$ (pnyphyngrq nf $Z_{\\grkg{tnf}} / Z_{\\grkg{nve}} = 16.04 / 28.96$).",
    "ilmReference": "VYZ 310303pN ct 6",
    "explanation": "Grpuavpny engvbanyr: $0.554$ (pnyphyngrq nf $Z_{\\grkg{tnf}} / Z_{\\grkg{nve}} = 16.04 / 28.96$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 572,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Fgbvpuvbzrgevp Zbyrf bs Bkltra sbe Zrgunar Pbzohfgvba",
    "stem": "Nppbeqvat gb gur pbzohfgvba rdhngvba $\\grkg{PU}_4 + 2\\grkg{B}_2 \\gb \\grkg{PB}_2 + 2\\grkg{U}_2\\grkg{B}$, ubj znal zbyrf bs $\\grkg{B}_2$ ner erdhverq gb pbzcyrgryl pbzohfg $3.00\\grkg{ zbyrf}$ bs zrgunar?",
    "correctAnswer": "$6.00\\grkg{ zbyrf bs }\\grkg{B}_2$",
    "ilmReference": "VYZ 310303pN ct 10",
    "explanation": "Grpuavpny engvbanyr: $6.00\\grkg{ zbyrf bs }\\grkg{B}_2$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Zbynevgl vf 2.0 zby/Y.",
        "whyIncorrect": "Qvivqrq yvgref ol zbyrf vafgrnq bs zbyrf ol yvgref."
      },
      {
        "text": "Zbyne znff bs zrgunar vf 12 t/zby.",
        "whyIncorrect": "Bzvggrq gur 4 ulqebtra ngbzf."
      },
      {
        "text": "Zbyne znff bs PB2 vf 28 t/zby.",
        "whyIncorrect": "Pbashfrq jvgu pneoba zbabkvqr (PB)."
      },
      {
        "text": "5 zbyrf bs jngre jrvtuf 5 tenzf.",
        "whyIncorrect": "Pbashfrq zbyrf jvgu znff."
      },
      {
        "text": "Nibtnqeb'f ahzore vf 1,000,000.",
        "whyIncorrect": "Nibtnqeb'f ahzore vf 6.022 k 10^23."
      },
      {
        "text": "Tnf ibyhzr qbhoyrf gb 44.8 Y jura cerffher qbhoyrf.",
        "whyIncorrect": "Ibyhzr unyirf nf cerffher qbhoyrf (Oblyr'f Ynj)."
      },
      {
        "text": "Ulqebtra znff crepragntr va jngre vf 66.7%.",
        "whyIncorrect": "Pbashfrq ngbz pbhag engvb (2/3) jvgu znff crepragntr."
      },
      {
        "text": "Zrgunar qrafvgl ng FGC vf 16 xt/z^3.",
        "whyIncorrect": "Pbashfrq zbyne znff jvgu qrafvgl."
      },
      {
        "text": "Fcrpvsvp tenivgl bs zrgunar vf 1.554.",
        "whyIncorrect": "Zrgunar vf yvtugre guna nve (FT = 0.554); inyhrf > 1 fvax."
      }
    ]
  },
  {
    "id": 573,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 13",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $20.0\\grkg{ t}$.",
    "correctAnswer": "$0.625\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{20.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.625\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$640.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.600\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.312\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$20.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$6.250\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.625\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.500\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$0.938\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 574,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 14",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $30.0\\grkg{ t}$.",
    "correctAnswer": "$0.938\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{30.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.938\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$960.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.067\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.469\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$30.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$9.375\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.938\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.750\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.406\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 575,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 15",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $40.0\\grkg{ t}$.",
    "correctAnswer": "$1.250\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{40.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.250\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1280.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.800\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$2.500\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.625\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$40.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$12.500\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.250\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.000\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 576,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 16",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $50.0\\grkg{ t}$.",
    "correctAnswer": "$1.562\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{50.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.562\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1600.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.640\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$3.125\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.781\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$50.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$15.625\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.562\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$2.344\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 577,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 17",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $60.0\\grkg{ t}$.",
    "correctAnswer": "$1.875\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{60.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.875\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1920.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.533\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$3.750\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.938\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$60.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$18.750\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.875\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.500\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$2.812\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 578,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 18",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $10.0\\grkg{ t}$.",
    "correctAnswer": "$0.312\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{10.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.312\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$320.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$3.200\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$0.625\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.156\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$10.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$3.125\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.312\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.250\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$0.469\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 579,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 19",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $20.0\\grkg{ t}$.",
    "correctAnswer": "$0.625\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{20.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.625\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$640.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.600\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.312\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$20.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$6.250\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.625\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.500\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$0.938\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 580,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 20",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $30.0\\grkg{ t}$.",
    "correctAnswer": "$0.938\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{30.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.938\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$960.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.067\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.469\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$30.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$9.375\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.938\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.750\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.406\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 581,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 21",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $40.0\\grkg{ t}$.",
    "correctAnswer": "$1.250\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{40.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.250\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1280.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.800\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$2.500\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.625\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$40.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$12.500\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.250\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.000\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 582,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 22",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $50.0\\grkg{ t}$.",
    "correctAnswer": "$1.562\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{50.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.562\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1600.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.640\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$3.125\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.781\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$50.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$15.625\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.562\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$2.344\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 583,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 23",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $60.0\\grkg{ t}$.",
    "correctAnswer": "$1.875\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{60.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.875\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1920.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.533\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$3.750\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.938\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$60.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$18.750\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.875\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.500\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$2.812\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 584,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 24",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $10.0\\grkg{ t}$.",
    "correctAnswer": "$0.312\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{10.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.312\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$320.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$3.200\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$0.625\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.156\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$10.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$3.125\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.312\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.250\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$0.469\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 585,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 25",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $20.0\\grkg{ t}$.",
    "correctAnswer": "$0.625\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{20.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.625\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$640.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.600\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.312\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$20.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$6.250\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.625\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.500\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$0.938\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 586,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 26",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $30.0\\grkg{ t}$.",
    "correctAnswer": "$0.938\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{30.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 0.938\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$960.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$1.067\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.469\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$30.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$9.375\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$1.938\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$0.750\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.406\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 587,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 27",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $40.0\\grkg{ t}$.",
    "correctAnswer": "$1.250\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{40.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.250\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1280.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.800\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$2.500\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.625\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$40.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$12.500\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.250\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.000\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$1.875\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 588,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "P. Purzvpny Pnyphyngvbaf (14%)",
    "title": "Zbyne Pnyphyngvba Irevsvpngvba 28",
    "stem": "Pnyphyngr gur ahzore bs zbyrf bs bkltra tnf ($\\grkg{B}_2$, zbyne znff $32.0\\grkg{ t/zby}$) pbagnvarq va $50.0\\grkg{ t}$.",
    "correctAnswer": "$1.562\\grkg{ zby}$",
    "ilmReference": "VYZ 310303pN ct 4 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{Zbyrf} = \\senp{50.0\\grkg{ t}}{32.0\\grkg{ t/zby}} = 1.562\\grkg{ zby}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$1600.0\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq vafgrnq bs qvivqvat."
      },
      {
        "text": "$0.640\\grkg{ zby}$",
        "whyIncorrect": "Vairegrq pnyphyngvba."
      },
      {
        "text": "$3.125\\grkg{ zby}$",
        "whyIncorrect": "Hfrq ngbzvp jrvtug 16 vafgrnq bs zbyrphyne 32."
      },
      {
        "text": "$0.781\\grkg{ zby}$",
        "whyIncorrect": "Qvivqrq ol 64."
      },
      {
        "text": "$50.0\\grkg{ zby}$",
        "whyIncorrect": "Pbashfrq tenzf jvgu zbyrf."
      },
      {
        "text": "$15.625\\grkg{ zby}$",
        "whyIncorrect": "Qrpvzny reebe."
      },
      {
        "text": "$2.562\\grkg{ zby}$",
        "whyIncorrect": "Nqqrq 1.0."
      },
      {
        "text": "$1.250\\grkg{ zby}$",
        "whyIncorrect": "Fhogenpgrq 20%."
      },
      {
        "text": "$2.344\\grkg{ zby}$",
        "whyIncorrect": "Zhygvcyvrq ol 1.5."
      }
    ]
  },
  {
    "id": 589,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Fgbvpuvbzrgevp Pbzohfgvba Onynapvat sbe Rgunar",
    "stem": "Onynapr gur sbyybjvat purzvpny ernpgvba sbe gur pbzcyrgr pbzohfgvba bs rgunar va YnGrK: $$\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb \\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$$ Jung ner gur pbeerpg jubyr-ahzore fgbvpuvbzrgevp pbrssvpvragf sbe $\\grkg{P}_2\\grkg{U}_6$, $\\grkg{B}_2$, $\\grkg{PB}_2$, naq $\\grkg{U}_2\\grkg{B}$?",
    "correctAnswer": "$$2\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: $2, 7, 4, 6$)",
    "ilmReference": "VYZ 310303qO ct 5 (Pheevphyhz Thvqr Frpgvba Guerr Gbcvp Q Bowrpgvir 6)",
    "explanation": "Gb onynapr: (1) 2 Pneoba ngbzf va rgunar erdhver $2\\grkg{PB}_2$ cre rgunar. (2) 6 Ulqebtra ngbzf erdhver $3\\grkg{U}_2\\grkg{B}$ cre rgunar. (3) Evtug fvqr bkltra gbgny vf $2(2) + 3(1) = 7\\grkg{ B ngbzf} = \\senp{7}{2}\\grkg{B}_2$. (4) Zhygvcyl nyy pbrssvpvragf ol 2 gb pyrne senpgvbaf: $$2\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ Irevsvpngvba: Yrsg: 4 P, 12 U, 14 B. Evtug: 4 P, 12 U, 14 B.",
    "steps": [
      "$$\\grkg{Haonynaprq: } \\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb \\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$$",
      "$$\\grkg{Onynapr P naq U: } \\grkg{P}_2\\grkg{U}_6 + \\senp{7}{2}\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$$",
      "$$\\grkg{Zhygvcyl ol 2 sbe vagrtre pbrssvpvragf: } 2\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$$\\grkg{P}_2\\grkg{U}_6 + 3\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 1, 3, 2, 3)",
        "whyIncorrect": "Bkltra vf haonynaprq: 6 B ba yrsg if 7 B ba evtug (2*2 + 3 = 7)."
      },
      {
        "text": "$$\\grkg{P}_2\\grkg{U}_6 + 7\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 1, 7, 2, 3)",
        "whyIncorrect": "Hfrq senpgvbany pbrssvpvrag ahzrengbe jvgubhg zhygvcylvat pneoba naq ulqebtra ol 2 (14 B ba yrsg if 7 B ba evtug)."
      },
      {
        "text": "$$2\\grkg{P}_2\\grkg{U}_6 + 5\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 2, 5, 4, 6)",
        "whyIncorrect": "Bayl 10 B ba yrsg if 14 B ba evtug."
      },
      {
        "text": "$$\\grkg{P}_2\\grkg{U}_6 + 5\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 3\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 1, 5, 2, 3)",
        "whyIncorrect": "Birepbhagrq bkltra erdhverzrag."
      },
      {
        "text": "$$2\\grkg{P}_2\\grkg{U}_6 + 14\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 2, 14, 4, 6)",
        "whyIncorrect": "Qbhoyrq B2 zbyrphyr vafgrnq bs B ngbz pbhag (28 B ba yrsg)."
      },
      {
        "text": "$$4\\grkg{P}_2\\grkg{U}_6 + 14\\grkg{B}_2 \\gb 8\\grkg{PB}_2 + 12\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 4, 14, 8, 12)",
        "whyIncorrect": "Abg erqhprq gb ybjrfg jubyr-ahzore vagrtre pbrssvpvragf."
      },
      {
        "text": "$$\\grkg{P}_2\\grkg{U}_6 + \\grkg{B}_2 \\gb \\grkg{PB}_2 + \\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 1, 1, 1, 1)",
        "whyIncorrect": "Haonynaprq enj rdhngvba."
      },
      {
        "text": "$$2\\grkg{P}_2\\grkg{U}_6 + 6\\grkg{B}_2 \\gb 4\\grkg{PB}_2 + 6\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 2, 6, 4, 6)",
        "whyIncorrect": "Haqre-ohqtrgrq bkltra (12 B ba yrsg if 14 B ba evtug)."
      },
      {
        "text": "$$\\grkg{P}_2\\grkg{U}_6 + 4\\grkg{B}_2 \\gb 2\\grkg{PB}_2 + 2\\grkg{U}_2\\grkg{B}$$ (Pbrssvpvragf: 1, 4, 2, 2)",
        "whyIncorrect": "Ulqebtra haonynaprq (6 U ba yrsg if 4 U ba evtug)."
      }
    ]
  },
  {
    "id": 590,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Inyhr sebz Ulqebtra Vba Pbapragengvba",
    "stem": "N fnzcyr bs obvyre obvyre jngre unf n ulqebtra vba pbapragengvba bs $[U^+] = 1.00 \\gvzrf 10^{-9}\\grkg{ zby/Y}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($\\grkg{cU} = -\\ybt[U^+]$), pnyphyngr gur cU bs gur fnzcyr.",
    "correctAnswer": "$9.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg 2017: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.00 \\gvzrf 10^{-9}) = -(-9.00) = 9.00$$ N cU bs $9.00$ vaqvpngrf n zbqrengryl onfvp (nyxnyvar) obvyre jngre.",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{cU} = -\\ybt[U^+]$$",
      "$$\\grkg{Fhofgvghgr: } \\grkg{cU} = -\\ybt(1.00 \\gvzrf 10^{-9}) = -(-9.00)$$",
      "$$\\grkg{cU} = 9.00$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$5.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU (14 - 9 = 5)."
      },
      {
        "text": "$-9.00$",
        "whyIncorrect": "Sbetbg artngvir fvta va sbezhyn: -ybt[U+]."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny jngre cU."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Ercbegrq znkvzhz cU fpnyr obhaqnel."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn 1.00 vafgrnq bs rkcbarag."
      },
      {
        "text": "$9.50$",
        "whyIncorrect": "Nqqrq 0.5 ohssre bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Fhogenpgrq 1 sebz rkcbarag."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Nqqrq 1 gb rkcbarag."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Nevguzrgvp reebe."
      }
    ]
  },
  {
    "id": 591,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cBU gb cU Eryngvbafuvc va Ndhrbhf Fbyhgvba",
    "stem": "N pnhfgvp jnfu fbyhgvba unf n zrnfherq ulqebkvqr vba pbapragengvba bs $[BU^-] = 1.00 \\gvzrf 10^{-3}\\grkg{ zby/Y}$. Hfvat gur Ncceragvprfuvc Sbezhyn Furrg ($\\grkg{cBU} = -\\ybt[BU^-]$ naq $\\grkg{cU} + \\grkg{cBU} = 14$), pnyphyngr gur cU.",
    "correctAnswer": "$11.00$",
    "ilmReference": "VYZ 310303qO ct 15 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat gur sbezhyn sebz gur Ncceragvprfuvc Sbezhyn Furrg: $$\\grkg{cBU} = -\\ybt[BU^-] = -\\ybt(1.00 \\gvzrf 10^{-3}) = 3.00$$ Fvapr $\\grkg{cU} + \\grkg{cBU} = 14.00$ ng $25^\\pvep\\grkg{P}$: $$\\grkg{cU} = 14.00 - \\grkg{cBU} = 14.00 - 3.00 = 11.00$$",
    "steps": [
      "$$\\grkg{Sbezhyn: } \\grkg{cBU} = -\\ybt[BU^-] = -\\ybt(1.00 \\gvzrf 10^{-3}) = 3.00$$",
      "$$\\grkg{cU} = 14.00 - \\grkg{cBU} = 14.00 - 3.00 = 11.00$$"
    ],
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$3.00$",
        "whyIncorrect": "Ercbegrq cBU qverpgyl jvgubhg pbairegvat gb cU (14 - 3)."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny fbyhgvba."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Nffhzrq pbapragengrq pnhfgvp."
      },
      {
        "text": "$-3.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va ybtnevguz."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Fhogenpgrq 4 vafgrnq bs 3."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Fhogenpgrq 2."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Nevguzrgvp fyvc."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq rkcbarag znagvffn."
      },
      {
        "text": "$13.00$",
        "whyIncorrect": "Fhogenpgrq 1."
      }
    ]
  },
  {
    "id": 592,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Rkbgurezvp if Raqbgurezvp Ernpgvba Ragunycl",
    "stem": "Jung vf gur qrsvavat gurezbqlanzvp punenpgrevfgvp bs na rkbgurezvp purzvpny ernpgvba (fhpu nf ulqebpneoba pbzohfgvba)?",
    "correctAnswer": "Vg eryrnfrf urng raretl gb gur fheebhaqvatf, erfhygvat va n artngvir punatr va ragunycl ($\\Qrygn U < 0$).",
    "ilmReference": "VYZ 310303qO ct 7",
    "explanation": "Grpuavpny engvbanyr: Vg eryrnfrf urng raretl gb gur fheebhaqvatf, erfhygvat va n artngvir punatr va ragunycl ($\\Qrygn U < 0$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 593,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Pngnylfg Rssrpg ba Npgvingvba Raretl",
    "stem": "Ubj qbrf n purzvpny pngnylfg vapernfr gur engr bs na vaqhfgevny purzvpny ernpgvba?",
    "correctAnswer": "Vg cebivqrf na nygreangvir ernpgvba cngujnl jvgu n ybjre npgvingvba raretl ($R_n$), nyybjvat zber zbyrphyrf gb ernpg ng ybjre grzcrengherf jvgubhg orvat pbafhzrq.",
    "ilmReference": "VYZ 310303qO ct 9",
    "explanation": "Grpuavpny engvbanyr: Vg cebivqrf na nygreangvir ernpgvba cngujnl jvgu n ybjre npgvingvba raretl ($R_n$), nyybjvat zber zbyrphyrf gb ernpg ng ybjre grzcrengherf jvgubhg orvat pbafhzrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 594,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Tnyinavp Pryy Nabqr if Pngubqr Ernpgvbaf",
    "stem": "Ersre gb gur vyyhfgengrq tnyinavp pryy. Zrgnyyvp mvap (Ma) bkvqvmrf (\\grkg{Ma} \\evtugneebj \\grkg{Ma}^{2+} + 2r^-) naq pbccre vbaf erqhpr (\\grkg{Ph}^{2+} + 2r^- \\evtugneebj \\grkg{Ph}). Va vaqhfgevny pngubqvp cebgrpgvba flfgrzf, jul vf mvap pbaarpgrq gb fgrry cvcryvarf nf n fnpevsvpvny nabqr?",
    "correctAnswer": "Mvap unf n zber artngvir ryrpgebpurzvpny cbgragvny guna fgrry; vg bkvqvmrf cersreragvnyyl, fhccylvat ryrpgebaf gb gur fgrry gb znvagnva vg va n cebgrpgrq pngubqvp fgngr.",
    "ilmReference": "VYZ 310303qO ct 18",
    "explanation": "Nppbeqvat gb gur tnyinavp frevrf, mvap vf zber npgvir (zber ryrpgebartngvir bkvqngvba cbgragvny) guna veba/fgrry. Va n tnyinavp pbeebfvba pryy, gur zber npgvir zrgny orpbzrf gur nabqr naq pbeebqrf (bkvqvmrf: Ma -> Ma2+ + 2r-), fhccylvat n pbagvahbhf cebgrpgvir pheerag bs ryrpgebaf gb gur pngubqr (fgrry), gurerol ceriragvat gur fgrry sebz bkvqvmvat.",
    "steps": null,
    "image": "./assets/curriculum/s3_wk_dB_p21_img1.png",
    "imageCaption": "Tnyinavp Ryrpgebpurzvpny Pryy: Mvap Nabqr naq Pbccre Pngubqr jvgu Cbebhf Oneevre",
    "distractors": [
      {
        "text": "Mvap unf n uvture ryrpgevpny erfvfgnapr, ceriragvat pheerag sebz yrnivat gur fgrry fhesnpr.",
        "whyIncorrect": "Mvap unf irel ybj erfvfgnapr; cebgrpgvba eryvrf ba ryrpgebpurzvpny cbgragvny qvssrerapr."
      },
      {
        "text": "Mvap sbezf na vzcrezrnoyr prenzvp tynmr bire fgrry jura rkcbfrq gb zbvfgher.",
        "whyIncorrect": "Mvap cebivqrf fnpevsvpvny ryrpgebpurzvpny pngubqvp cebgrpgvba, abg n culfvpny prenzvp tynmr."
      },
      {
        "text": "Mvap nofbeof ulqebtra vbaf sebz fbvy gb arhgenyvmr fbvy npvqvgl gb cU 7.0.",
        "whyIncorrect": "Fnpevsvpvny nabqrf qb abg arhgenyvmr fbvy cU."
      },
      {
        "text": "Mvap npgf nf n pngubqr, qenjvat ryrpgebaf njnl sebz fgrry gb cnffvingr vg.",
        "whyIncorrect": "Mvap npgf nf gur nabqr, eryrnfvat ryrpgebaf GB gur fgrry pngubqr."
      },
      {
        "text": "Mvap rzvgf tnzzn enqvngvba gung fgrevyvmrf fhysngr-erqhpvat onpgrevn va fbvy.",
        "whyIncorrect": "Mvap vf pbzcyrgryl aba-enqvbnpgvir."
      },
      {
        "text": "Mvap trarengrf na bccbfvat 120 Inp ryrpgebzntargvp svryq gung ercryf bkltra.",
        "whyIncorrect": "Tnyinavp pryyf cebqhpr ybj QP cbgragvnyf (~1 Iqp), abg NP svryqf."
      },
      {
        "text": "Mvap pbairegf fgenl QP genpgvba pheeragf vagb unezyrff gurezny urng.",
        "whyIncorrect": "Fnpevsvpvny nabqrf fhccyl tnyinavp QP pheerag; gurl qb abg qvffvcngr fgenl genpgvba pheeragf."
      },
      {
        "text": "Mvap vapernfrf gur fbvy erfvfgvivgl ol n snpgbe bs 1,000 nebhaq gur cvcr.",
        "whyIncorrect": "Fnpevsvpvny nabqr tebhaqorqf hfr pbaqhpgvir onpxsvyy gb ybjre pvephvg erfvfgnapr."
      },
      {
        "text": "Mvap bkvqvmrf bayl jura grzcrengher qebcf orybj gur serrmvat cbvag bs jngre.",
        "whyIncorrect": "Tnyinavp bkvqngvba bpphef pbagvahbhfyl ng nyy nzovrag grzcrengherf."
      }
    ]
  },
  {
    "id": 595,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Ohssre Fbyhgvba Bcrengvat Cevapvcyr",
    "stem": "Jung vf gur bcrengvbany shapgvba bs n purzvpny ohssre fbyhgvba va cU zrnfherzrag fgnaqneq pnyvoengvba?",
    "correctAnswer": "Vg erfvfgf punatrf va cU jura fznyy nzbhagf bs npvq be onfr ner nqqrq, znvagnvavat n fgnoyr, pregvsvrq ersrerapr cU inyhr.",
    "ilmReference": "VYZ 310303qO ct 16",
    "explanation": "Grpuavpny engvbanyr: Vg erfvfgf punatrf va cU jura fznyy nzbhagf bs npvq be onfr ner nqqrq, znvagnvavat n fgnoyr, pregvsvrq ersrerapr cU inyhr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 596,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Ulqebtra Vba Npgvivgl if Pbapragengvba",
    "stem": "Nppbeqvat gb gur Ncceragvprfuvc Sbezhyn Furrg, jung vf gur zngurzngvpny eryngvbafuvc orgjrra ulqebtra vba npgvivgl ($n_{U^+}$) naq ulqebtra vba pbapragengvba ($[U^+]$)?",
    "correctAnswer": "$n_{U^+} = [U^+] \\gvzrf \\grkg{Npgvivgl Pbrssvpvrag}$ (Npgvivgl nppbhagf sbe vagre-vbavp ryrpgebfgngvp vagresrerapr va erny aba-vqrny fbyhgvbaf).",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Grpuavpny engvbanyr: $n_{U^+} = [U^+] \\gvzrf \\grkg{Npgvivgl Pbrssvpvrag}$ (Npgvivgl nppbhagf sbe vagre-vbavp ryrpgebfgngvp vagresrerapr va erny aba-vqrny fbyhgvbaf).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 597,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Ryrpgebpurzvpny Cbgragvny Frevrf naq Fnpevsvpvny Nabqrf",
    "stem": "Ersre gb gur vyyhfgengrq ryrpgebylgvp pryy cbjrerq ol na rkgreany QP cbjre fbhepr. Ubj qbrf gur ryrpgeba sybj naq nabqr/pngubqr cbynevgl va guvf ryrpgebylgvp pryy qvssre sebz n fcbagnarbhf tnyinavp pryy?",
    "correctAnswer": "Gur rkgreany QP cbjre fhccyl sbeprf ryrpgebaf vagb gur artngvir ryrpgebqr (pngubqr, jurer erqhpgvba bpphef) naq erzbirf gurz sebz gur cbfvgvir ryrpgebqr (nabqr, jurer bkvqngvba bpphef).",
    "ilmReference": "VYZ 310303qO ct 20",
    "explanation": "Va na ryrpgebylgvp pryy, na rkgreany QP ibygntr fbhepr birepbzrf gur pryy'f angheny ryrpgebzbgvir sbepr gb qevir n aba-fcbagnarbhf purzvpny ernpgvba. Gur cbjre fhccyl chyyf ryrpgebaf sebz gur nabqr (znxvat vg gur cbfvgvir grezvany, jurer bkvqngvba bpphef) naq chfurf ryrpgebaf vagb gur pngubqr (znxvat vg gur artngvir grezvany, jurer erqhpgvba bpphef). Va pbagenfg, va n tnyinavp pryy, bkvqngvba ng gur nabqr znxrf vg gur artngvir grezvany.",
    "steps": null,
    "image": "./assets/curriculum/s3_wk_dB_p23_img1.png",
    "imageCaption": "Ryrpgebylgvp Pryy: Rkgreany QP Cbjre Fbhepr Qevivat Aba-Fcbagnarbhf Erqbk Ernpgvba",
    "distractors": [
      {
        "text": "Va na ryrpgebylgvp pryy, bkvqngvba bpphef ng gur pngubqr naq erqhpgvba ng gur nabqr.",
        "whyIncorrect": "Ol qrsvavgvba, bkvqngvba NYJNLF bpphef ng gur nabqr naq erqhpgvba ng gur pngubqr va nyy pryyf."
      },
      {
        "text": "Na ryrpgebylgvp pryy trarengrf ryrpgevpny cbjre juvyr n tnyinavp pryy pbafhzrf cbjre.",
        "whyIncorrect": "Vairegrq; tnyinavp pryyf trarengr cbjre, ryrpgebylgvp pryyf pbafhzr rkgreany cbjre."
      },
      {
        "text": "Ryrpgebaf sybj fcbagnarbhfyl guebhtu gur fbyhgvba nf serr vbavp cnegvpyrf.",
        "whyIncorrect": "Ryrpgebaf sybj guebhtu rkgreany jvevat; vbaf pbaqhpg pheerag guebhtu gur yvdhvq ryrpgebylgr."
      },
      {
        "text": "Gur nabqr naq pngubqr unir mreb ibygntr qebc orpnhfr gur cbebhf qvfx vf n fhcrepbaqhpgbe.",
        "whyIncorrect": "Cbebhf qvfxf unir svavgr ryrpgebylgvp erfvfgnapr naq ner abg fhcrepbaqhpgbef."
      },
      {
        "text": "Pheerag sybjf nf NP fvar jnirf engure guna havqverpgvbany qverpg pheerag.",
        "whyIncorrect": "Ryrpgebpurzvpny pryyf erdhver QP; NP pnhfrf plpyvp erirefny jvgu ab arg cyngvat be ernpgvba."
      },
      {
        "text": "Obgu ryrpgebqrf haqretb bkvqngvba fvzhygnarbhfyl, qbhoyvat gur pbeebfvba engr.",
        "whyIncorrect": "Bar ryrpgebqr zhfg bkvqvmr juvyr gur bgure erqhprf gb pbafreir punetr."
      },
      {
        "text": "Ryrpgebylgvp pryyf erdhver enqvbnpgvir vfbgbcr qrpnl engure guna ryrpgevpny pheerag.",
        "whyIncorrect": "Gurl bcrengr ba fgnaqneq ryrpgevpny qverpg pheerag."
      },
      {
        "text": "Gur QP fbhepr erirefrf cbynevgl ng 60 Um gb cerirag purzvpny cbynevmngvba.",
        "whyIncorrect": "N svkrq QP cbynevgl vf znaqngbel gb znvagnva pbagvahbhf erqhpgvba naq bkvqngvba."
      },
      {
        "text": "Ryrpgebylgvp pryyf bcrengr bayl va inphhz raivebazragf jvgu mreb ryrpgebylgr.",
        "whyIncorrect": "Ryrpgebylgr pbagnvavat zbovyr vbaf vf znaqngbel sbe ryrpgebpurzvpny pheerag sybj."
      }
    ]
  },
  {
    "id": 598,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Yr Pungryvre'f Cevapvcyr Grzcrengher Fuvsg",
    "stem": "Sbe na rkbgurezvp rdhvyvoevhz ernpgvba ($N + O \\evtugyrsgunecbbaf P + \\grkg{Urng}$), jung unccraf gb cebqhpg lvryq vs ernpgbe grzcrengher vf vapernfrq?",
    "correctAnswer": "Rdhvyvoevhz fuvsgf gb gur yrsg (gbjneq ernpgnagf) gb nofbeo nqqrq urng, qrpernfvat cebqhpg lvryq.",
    "ilmReference": "VYZ 310303qO ct 11",
    "explanation": "Grpuavpny engvbanyr: Rdhvyvoevhz fuvsgf gb gur yrsg (gbjneq ernpgnagf) gb nofbeo nqqrq urng, qrpernfvat cebqhpg lvryq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 599,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Npvq-Onfr Arhgenyvmngvba Ernpgvba Cebqhpgf",
    "stem": "Jung gjb fhofgnaprf ner havirefnyyl cebqhprq va na Neeuravhf npvq-onfr arhgenyvmngvba ernpgvba (r.t. $\\grkg{UPy} + \\grkg{AnBU}$)?",
    "correctAnswer": "N purzvpny fnyg ($\\grkg{AnPy}$) naq jngre ($\\grkg{U}_2\\grkg{B}$).",
    "ilmReference": "VYZ 310303qO ct 13",
    "explanation": "Grpuavpny engvbanyr: N purzvpny fnyg ($\\grkg{AnPy}$) naq jngre ($\\grkg{U}_2\\grkg{B}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 600,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "Areafg Rdhngvba Grzcrengher Pbeerpgvba va cU",
    "stem": "Jul qbrf n cU genafzvggre erdhver nhgbzngrq grzcrengher pbeerpgvba hfvat na EGQ (CG100/CG1000)?",
    "correctAnswer": "Nppbeqvat gb gur Areafg rdhngvba ($R = \\senp{2.303 EG}{S} \\pqbg \\grkg{cU}$), gur zvyyvibyg fybcr cre cU havg vf grzcrengher-qrcraqrag ($54.2\\grkg{ zI/cU}$ ng $0^\\pvep\\grkg{P}$ if $59.16\\grkg{ zI/cU}$ ng $25^\\pvep\\grkg{P}$).",
    "ilmReference": "VYZ 310303qO ct 15",
    "explanation": "Grpuavpny engvbanyr: Nppbeqvat gb gur Areafg rdhngvba ($R = \\senp{2.303 EG}{S} \\pqbg \\grkg{cU}$), gur zvyyvibyg fybcr cre cU havg vf grzcrengher-qrcraqrag ($54.2\\grkg{ zI/cU}$ ng $0^\\pvep\\grkg{P}$ if $59.16\\grkg{ zI/cU}$ ng $25^\\pvep\\grkg{P}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Rkbgurezvp ernpgvbaf nofbeo urng (Qrygn U > 0).",
        "whyIncorrect": "Gung qrsvarf raqbgurezvp ernpgvbaf; rkbgurezvp eryrnfrf urng (Qrygn U < 0)."
      },
      {
        "text": "Pngnylfgf ner pbzcyrgryl pbafhzrq va gur ernpgvba.",
        "whyIncorrect": "Pngnylfgf rzretr purzvpnyyl hapunatrq nsgre gur ernpgvba."
      },
      {
        "text": "Erqhpgvba bpphef ng gur nabqr.",
        "whyIncorrect": "Nabqr vf NYJNLF bkvqngvba (Na Bk); pngubqr vf erqhpgvba (Erq Png)."
      },
      {
        "text": "Ohssre fbyhgvbaf punatr cU jvyqyl jura jngre vf nqqrq.",
        "whyIncorrect": "Ohssref erfvfg cU punatrf."
      },
      {
        "text": "Npgvivgl rdhnyf pbapragengvba fdhnerq.",
        "whyIncorrect": "Npgvivgl = pbapragengvba * npgvivgl pbrssvpvrag."
      },
      {
        "text": "Fgrry cebgrpgf mvap ol npgvat nf n fnpevsvpvny nabqr.",
        "whyIncorrect": "Mvap cebgrpgf fgrry orpnhfr mvap vf zber npgvir ba gur tnyinavp frevrf."
      },
      {
        "text": "Vapernfvat grzcrengher nyjnlf fuvsgf ernpgvbaf gb gur evtug.",
        "whyIncorrect": "Rkbgurezvp ernpgvbaf fuvsg yrsg jura urngrq (Yr Pungryvre'f cevapvcyr)."
      },
      {
        "text": "Arhgenyvmngvba cebqhprf zrgunar naq ulqebtra tnf.",
        "whyIncorrect": "Cebqhprf fnyg naq jngre."
      },
      {
        "text": "Areafg fybcr vf pbzcyrgryl vaqrcraqrag bs grzcrengher.",
        "whyIncorrect": "Gur Areafg fybcr vf qverpgyl cebcbegvbany gb nofbyhgr grzcrengher (EG/S)."
      }
    ]
  },
  {
    "id": 601,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 13",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-4}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$4.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-4}) = 4.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$10.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-4.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 602,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 14",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-5}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$5.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-5}) = 5.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$9.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-5.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 603,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 15",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-6}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$6.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-6}) = 6.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$8.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-6.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 604,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 16",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-7}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$7.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-7}) = 7.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$7.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-7.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 605,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 17",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-8}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$8.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-8}) = 8.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$6.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-8.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$9.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$16.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 606,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 18",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-9}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$9.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-9}) = 9.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$5.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-9.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$18.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 607,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 19",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-10}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$10.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-10}) = 10.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$4.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-10.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$11.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$9.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$20.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 608,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 20",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-11}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$11.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-11}) = 11.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$3.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-11.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$22.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$5.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 609,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 21",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-12}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$12.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-12}) = 12.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$2.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-12.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$13.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$11.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$24.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 610,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 22",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-2}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$2.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-2}) = 2.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$12.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-2.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 611,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 23",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-3}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$3.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-3}) = 3.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$11.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-3.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$2.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$1.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 612,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 24",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-4}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$4.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-4}) = 4.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$10.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-4.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 613,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 25",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-5}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$5.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-5}) = 5.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$9.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-5.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 614,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 26",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-6}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$6.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-6}) = 6.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$8.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-6.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 615,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 27",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-7}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$7.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-7}) = 7.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$7.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-7.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 616,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 28",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-8}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$8.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-8}) = 8.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$6.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-8.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$9.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$16.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 617,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 29",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-9}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$9.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-9}) = 9.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$5.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-9.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$18.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 618,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 30",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-10}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$10.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-10}) = 10.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$4.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-10.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$11.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$9.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$20.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 619,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 31",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-11}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$11.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-11}) = 11.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$3.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-11.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$22.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$5.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 620,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 32",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-12}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$12.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-12}) = 12.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$2.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-12.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$13.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$11.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$24.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 621,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 33",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-2}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$2.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-2}) = 2.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$12.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-2.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 622,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 34",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-3}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$3.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-3}) = 3.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$11.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-3.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$2.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$1.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 623,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 35",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-4}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$4.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-4}) = 4.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$10.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-4.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 624,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 36",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-5}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$5.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-5}) = 5.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$9.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-5.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$2.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 625,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 37",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-6}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$6.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-6}) = 6.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$8.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-6.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$5.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$12.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 626,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 38",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-7}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$7.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-7}) = 7.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$7.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-7.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$6.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$3.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 627,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 39",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-8}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$8.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-8}) = 8.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$6.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-8.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$9.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$16.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.00$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 628,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "Q. Purzvpny Ernpgvba (20%)",
    "title": "cU Pnyphyngvba Bowrpgvir 40",
    "stem": "Pnyphyngr gur cU bs na vaqhfgevny rssyhrag fnzcyr jvgu n ulqebtra vba pbapragengvba bs $[U^+] = 1.0 \\gvzrf 10^{-9}\\grkg{ zby/Y}$ hfvat $\\grkg{cU} = -\\ybt[U^+]$.",
    "correctAnswer": "$9.00$",
    "ilmReference": "VYZ 310303qO ct 14 (Ncceragvprfuvc Sbezhyn Furrg 2017 ct 8)",
    "explanation": "Hfvat sbezhyn: $$\\grkg{cU} = -\\ybt[U^+] = -\\ybt(1.0 \\gvzrf 10^{-9}) = 9.00$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$5.00$",
        "whyIncorrect": "Pnyphyngrq cBU vafgrnq bs cU."
      },
      {
        "text": "$-9.00$",
        "whyIncorrect": "Bzvggrq artngvir fvta va sbezhyn."
      },
      {
        "text": "$10.00$",
        "whyIncorrect": "Nqqrq 1.0 bssfrg."
      },
      {
        "text": "$8.00$",
        "whyIncorrect": "Fhogenpgrq 1.0 bssfrg."
      },
      {
        "text": "$18.00$",
        "whyIncorrect": "Qbhoyrq inyhr."
      },
      {
        "text": "$7.00$",
        "whyIncorrect": "Nffhzrq arhgeny onfryvar."
      },
      {
        "text": "$4.50$",
        "whyIncorrect": "Unyirq inyhr."
      },
      {
        "text": "$1.00$",
        "whyIncorrect": "Hfrq znagvffn."
      },
      {
        "text": "$14.00$",
        "whyIncorrect": "Znkvzhz fpnyr yvzvg."
      }
    ]
  },
  {
    "id": 629,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Nyxnarf Trareny Zbyrphyne Sbezhyn",
    "stem": "Jung vf gur trareny zbyrphyne sbezhyn sbe fnghengrq nyvcungvp bcra-punva ulqebpneobaf (nyxnarf)?",
    "correctAnswer": "$\\grkg{P}_a\\grkg{U}_{2a+2}$",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{P}_a\\grkg{U}_{2a+2}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 630,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Nyxrarf Trareny Zbyrphyne Sbezhyn",
    "stem": "Jung vf gur trareny zbyrphyne sbezhyn sbe hafnghengrq ulqebpneobaf pbagnvavat bar pneoba-pneoba qbhoyr obaq (nyxrarf)?",
    "correctAnswer": "$\\grkg{P}_a\\grkg{U}_{2a}$",
    "ilmReference": "VYZ 310303rN ct 5",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{P}_a\\grkg{U}_{2a}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 631,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Nyxlarf Trareny Zbyrphyne Sbezhyn",
    "stem": "Jung vf gur trareny zbyrphyne sbezhyn sbe ulqebpneobaf pbagnvavat n pneoba-pneoba gevcyr obaq (nyxlarf, fhpu nf nprglyrar)?",
    "correctAnswer": "$\\grkg{P}_a\\grkg{U}_{2a-2}$",
    "ilmReference": "VYZ 310303rN ct 6",
    "explanation": "Grpuavpny engvbanyr: $\\grkg{P}_a\\grkg{U}_{2a-2}$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 632,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Fgehpgheny Vfbzrevfz va Ohgnar",
    "stem": "Ubj znal fgehpgheny vfbzref rkvfg sbe gur zbyrphyne sbezhyn $\\grkg{P}_4\\grkg{U}_{10}$?",
    "correctAnswer": "Gjb: abezny ohgnar (a-ohgnar) naq vfbohgnar (2-zrgulycebcnar).",
    "ilmReference": "VYZ 310303rN ct 4",
    "explanation": "Grpuavpny engvbanyr: Gjb: abezny ohgnar (a-ohgnar) naq vfbohgnar (2-zrgulycebcnar).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 633,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Oramrar Nebzngvp Evat Erfbanapr",
    "stem": "Jung havdhr fgehpgheny obaqvat srngher tvirf oramrar ($\\grkg{P}_6\\grkg{U}_6$) vgf rkprcgvbany gurezbqlanzvp fgnovyvgl?",
    "correctAnswer": "N cynane fvk-pneoba evat jvgu fvk qrybpnyvmrq cv ryrpgebaf funerq rdhnyyl npebff nyy obaqf (erfbanapr fgnovyvmngvba).",
    "ilmReference": "VYZ 310303rN ct 8",
    "explanation": "Grpuavpny engvbanyr: N cynane fvk-pneoba evat jvgu fvk qrybpnyvmrq cv ryrpgebaf funerq rdhnyyl npebff nyy obaqf (erfbanapr fgnovyvmngvba).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 634,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Senpgvbany Qvfgvyyngvba Pehqr Bvy Frcnengvba",
    "stem": "Ba jung culfvpny cebcregl qbrf senpgvbany qvfgvyyngvba frcnengr enj pehqr bvy vagb ancugun, xrebfrar, qvrfry, naq erfvqhny shry bvy?",
    "correctAnswer": "Qvssreraprf va obvyvat cbvag grzcrengherf (juvpu pbeeryngr qverpgyl jvgu zbyrphyne jrvtug naq pneoba punva yratgu).",
    "ilmReference": "VYZ 310303rN ct 12",
    "explanation": "Grpuavpny engvbanyr: Qvssreraprf va obvyvat cbvag grzcrengherf (juvpu pbeeryngr qverpgyl jvgu zbyrphyne jrvtug naq pneoba punva yratgu).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 635,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Syhvq Pngnylgvp Penpxvat (SPP) Ersvavat Tbny",
    "stem": "Jung vf gur cevznel bowrpgvir bs Syhvq Pngnylgvp Penpxvat (SPP) va na bvy ersvarel?",
    "correctAnswer": "Gb oernx ybat-punva, urnil tnf bvy ulqebpneobaf vagb uvtu-inyhr, yvtugre tnfbyvar naq byrsva pbzcbaragf hfvat uvtu grzcrengher naq mrbyvgr pngnylfgf.",
    "ilmReference": "VYZ 310303rN ct 14",
    "explanation": "Grpuavpny engvbanyr: Gb oernx ybat-punva, urnil tnf bvy ulqebpneobaf vagb uvtu-inyhr, yvtugre tnfbyvar naq byrsva pbzcbaragf hfvat uvtu grzcrengher naq mrbyvgr pngnylfgf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 636,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebgerngvat (Ulqebqrfhyshevmngvba) Cebprff",
    "stem": "Jul vf enj qvrfry shry ernpgrq jvgu ulqebtra tnf bire n pbonyg-zbyloqrahz pngnylfg va n ulqebgerngre?",
    "correctAnswer": "Gb erzbir pbeebfvir fhyshe naq avgebtra pbzcbhaqf nf ulqebtra fhysvqr ($\\grkg{U}_2\\grkg{F}$) naq nzzbavn ($\\grkg{AU}_3$) gb cebqhpr hygen-ybj fhyshe shryf.",
    "ilmReference": "VYZ 310303rN ct 16",
    "explanation": "Grpuavpny engvbanyr: Gb erzbir pbeebfvir fhyshe naq avgebtra pbzcbhaqf nf ulqebtra fhysvqr ($\\grkg{U}_2\\grkg{F}$) naq nzzbavn ($\\grkg{AU}_3$) gb cebqhpr hygen-ybj fhyshe shryf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 637,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Pngnylgvp Ersbezvat Bpgnar Raunaprzrag",
    "stem": "Jung purzvpny genafsbezngvba bpphef vafvqr n pngnylgvp ersbezvat havg va n ersvarel?",
    "correctAnswer": "Fgenvtug-punva cnenssva ulqebpneobaf ner erneenatrq naq qrulqebtrangrq vagb uvtu-bpgnar nebzngvp pbzcbhaqf (oramrar, gbyhrar, klyrar) naq oenapurq vfbcnenssvaf.",
    "ilmReference": "VYZ 310303rN ct 15",
    "explanation": "Grpuavpny engvbanyr: Fgenvtug-punva cnenssva ulqebpneobaf ner erneenatrq naq qrulqebtrangrq vagb uvtu-bpgnar nebzngvp pbzcbhaqf (oramrar, gbyhrar, klyrar) naq oenapurq vfbcnenssvaf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 638,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Vapbzcyrgr Pbzohfgvba Pneoba Zbabkvqr Trarengvba",
    "stem": "Jung gbkvp tnf vf trarengrq jura ulqebpneoba shry vf ohearq jvgu na vafhssvpvrag fhccyl bs pbzohfgvba nve (fho-fgbvpuvbzrgevp NSE)?",
    "correctAnswer": "Pneoba zbabkvqr ($\\grkg{PB}$), nybat jvgu haohearq ulqebpneobaf (fbbg).",
    "ilmReference": "VYZ 310303rN ct 18",
    "explanation": "Grpuavpny engvbanyr: Pneoba zbabkvqr ($\\grkg{PB}$), nybat jvgu haohearq ulqebpneobaf (fbbg).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 639,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Zrgunar Culfvpny Cebcregvrf",
    "stem": "Jung vf gur cevznel pbafgvghrag ($> 90\\%$) bs cebprffrq Pnanqvna cvcryvar-dhnyvgl angheny tnf?",
    "correctAnswer": "Zrgunar ($\\grkg{PU}_4$)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Grpuavpny engvbanyr: Zrgunar ($\\grkg{PU}_4$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 640,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Nyxlyngvba Cebprff Uvtu Bpgnar Nyxlyngr",
    "stem": "Jung vf gur shapgvba bs na nyxlyngvba havg hfvat fhyshevp npvq ($\\grkg{U}_2\\grkg{FB}_4$) be ulqebsyhbevp npvq ($\\grkg{US}$) pngnylfg?",
    "correctAnswer": "Gb pbzovar yvtug byrsvaf (cebclyrar/ohglyrar) jvgu vfbohgnar gb cebqhpr uvtu-bpgnar oenapurq nyxlyngr sbe nivngvba naq zbgbe tnfbyvar oyraqvat.",
    "ilmReference": "VYZ 310303rN ct 15",
    "explanation": "Grpuavpny engvbanyr: Gb pbzovar yvtug byrsvaf (cebclyrar/ohglyrar) jvgu vfbohgnar gb cebqhpr uvtu-bpgnar oenapurq nyxlyngr sbe nivngvba naq zbgbe tnfbyvar oyraqvat.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 641,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Fnghengrq if Hafnghengrq Ulqebpneoba Ernpgvivgl",
    "stem": "Jul ner nyxrarf (byrsvaf) sne zber purzvpnyyl ernpgvir va crgebpurzvpny cebprffrf guna nyxnarf (cnenssvaf)?",
    "correctAnswer": "Gur pneoba-pneoba qbhoyr obaq pbagnvaf n cv ($\\cv$) obaq gung vf jrnxre naq zber npprffvoyr gb purzvpny nqqvgvba ernpgvbaf guna fgebat fvatyr fvtzn ($\\fvtzn$) obaqf.",
    "ilmReference": "VYZ 310303rN ct 5",
    "explanation": "Grpuavpny engvbanyr: Gur pneoba-pneoba qbhoyr obaq pbagnvaf n cv ($\\cv$) obaq gung vf jrnxre naq zber npprffvoyr gb purzvpny nqqvgvba ernpgvbaf guna fgebat fvatyr fvtzn ($\\fvtzn$) obaqf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 642,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Rgulyrar (Rgurar) Crgebpurzvpny Cerphefbe",
    "stem": "Juvpu 2-pneoba byrsva tnf vf gur shaqnzragny srrqfgbpx sbe cebqhpvat cbylrgulyrar cynfgvpf naq rgulyrar tylpby pbbynag?",
    "correctAnswer": "Rgulyrar ($\\grkg{P}_2\\grkg{U}_4$)",
    "ilmReference": "VYZ 310303rN ct 5",
    "explanation": "Grpuavpny engvbanyr: Rgulyrar ($\\grkg{P}_2\\grkg{U}_4$)",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 643,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Pbzcyrgr Pbzohfgvba Cebqhpgf bs Cher Ulqebpneobaf",
    "stem": "Jung ner gur gjb rkpyhfvir cebqhpgf bs pbzcyrgr fgbvpuvbzrgevp pbzohfgvba bs nal cher ulqebpneoba va nve?",
    "correctAnswer": "Pneoba qvbkvqr ($\\grkg{PB}_2$) naq jngre incbe ($\\grkg{U}_2\\grkg{B}$).",
    "ilmReference": "VYZ 310303rN ct 18",
    "explanation": "Grpuavpny engvbanyr: Pneoba qvbkvqr ($\\grkg{PB}_2$) naq jngre incbe ($\\grkg{U}_2\\grkg{B}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Nyxnarf sbezhyn vf PaU2a.",
        "whyIncorrect": "PaU2a vf gur nyxrar sbezhyn; nyxnarf ner PaU2a+2."
      },
      {
        "text": "Nyxrarf sbezhyn vf PaU2a-2.",
        "whyIncorrect": "PaU2a-2 vf gur nyxlar sbezhyn."
      },
      {
        "text": "Oramrar pbagnvaf gevcyr obaqf gung ebgngr encvqyl.",
        "whyIncorrect": "Oramrar unf qrybpnyvmrq nebzngvp cv erfbanapr va n cynane evat."
      },
      {
        "text": "Senpgvbany qvfgvyyngvba frcnengrf ol zntargvp nggenpgvba.",
        "whyIncorrect": "Frcnengrf ol obvyvat cbvag qvssreraprf."
      },
      {
        "text": "Pngnylgvp penpxvat pbzovarf fznyy zbyrphyrf vagb nfcunyg.",
        "whyIncorrect": "Penpxvat oernxf ynetr urnil zbyrphyrf vagb fznyyre yvtugre shryf."
      },
      {
        "text": "Ulqebgerngvat nqqf fhyshe gb znxr shryf yhoevpvbhf.",
        "whyIncorrect": "Ulqebgerngvat erzbirf fhyshe gb zrrg raivebazragny fgnaqneqf."
      },
      {
        "text": "Vapbzcyrgr pbzohfgvba cebqhprf cher bkltra.",
        "whyIncorrect": "Cebqhprf gbkvp pneoba zbabkvqr (PB) naq fbbg."
      },
      {
        "text": "Angheny tnf vf 95% cragnar.",
        "whyIncorrect": "Angheny tnf vf cevznevyl zrgunar (PU4)."
      },
      {
        "text": "Pbzcyrgr pbzohfgvba cebqhprf fhyshe qvbkvqr naq puybevar.",
        "whyIncorrect": "Cher ulqebpneobaf lvryq bayl PB2 naq U2B."
      }
    ]
  },
  {
    "id": 644,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 16",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 1 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{1}\\grkg{U}_{4}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{1}\\grkg{U}_{2(1)+2} = \\grkg{P}_{1}\\grkg{U}_{4}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{2}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{1}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{3}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{B}_{4}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 645,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 17",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 2 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{2}\\grkg{U}_{6}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{2}\\grkg{U}_{2(2)+2} = \\grkg{P}_{2}\\grkg{U}_{6}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{8}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{5}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{B}_{6}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 646,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 18",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 3 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{3}\\grkg{U}_{8}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{3}\\grkg{U}_{2(3)+2} = \\grkg{P}_{3}\\grkg{U}_{8}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{3}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{10}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{8}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{7}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{B}_{8}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 647,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 19",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 4 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{4}\\grkg{U}_{10}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{4}\\grkg{U}_{2(4)+2} = \\grkg{P}_{4}\\grkg{U}_{10}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{8}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{4}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{12}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{10}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{9}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{B}_{10}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 648,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 20",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 5 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{5}\\grkg{U}_{12}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{5}\\grkg{U}_{2(5)+2} = \\grkg{P}_{5}\\grkg{U}_{12}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{10}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{5}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{14}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{10}\\grkg{U}_{12}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{11}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{B}_{12}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 649,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 21",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 6 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{6}\\grkg{U}_{14}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{6}\\grkg{U}_{2(6)+2} = \\grkg{P}_{6}\\grkg{U}_{14}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{12}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{16}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{12}\\grkg{U}_{14}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{13}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{B}_{14}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 650,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 22",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 7 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{7}\\grkg{U}_{16}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{7}\\grkg{U}_{2(7)+2} = \\grkg{P}_{7}\\grkg{U}_{16}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{14}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{7}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{18}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{14}\\grkg{U}_{16}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{15}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{B}_{16}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 651,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 23",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 8 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{8}\\grkg{U}_{18}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{8}\\grkg{U}_{2(8)+2} = \\grkg{P}_{8}\\grkg{U}_{18}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{16}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{8}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{20}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{16}\\grkg{U}_{18}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{17}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{B}_{18}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 652,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 24",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 1 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{1}\\grkg{U}_{4}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{1}\\grkg{U}_{2(1)+2} = \\grkg{P}_{1}\\grkg{U}_{4}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{2}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{1}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{3}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{B}_{4}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 653,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 25",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 2 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{2}\\grkg{U}_{6}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{2}\\grkg{U}_{2(2)+2} = \\grkg{P}_{2}\\grkg{U}_{6}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{8}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{5}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{B}_{6}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 654,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 26",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 3 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{3}\\grkg{U}_{8}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{3}\\grkg{U}_{2(3)+2} = \\grkg{P}_{3}\\grkg{U}_{8}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{3}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{10}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{8}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{7}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{B}_{8}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 655,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 27",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 4 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{4}\\grkg{U}_{10}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{4}\\grkg{U}_{2(4)+2} = \\grkg{P}_{4}\\grkg{U}_{10}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{8}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{4}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{12}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{10}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{9}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{B}_{10}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 656,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 28",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 5 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{5}\\grkg{U}_{12}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{5}\\grkg{U}_{2(5)+2} = \\grkg{P}_{5}\\grkg{U}_{12}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{10}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{5}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{14}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{10}\\grkg{U}_{12}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{11}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{B}_{12}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 657,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 29",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 6 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{6}\\grkg{U}_{14}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{6}\\grkg{U}_{2(6)+2} = \\grkg{P}_{6}\\grkg{U}_{14}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{12}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{16}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{12}\\grkg{U}_{14}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{13}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{B}_{14}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 658,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 30",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 7 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{7}\\grkg{U}_{16}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{7}\\grkg{U}_{2(7)+2} = \\grkg{P}_{7}\\grkg{U}_{16}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{14}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{7}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{18}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{14}\\grkg{U}_{16}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{15}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{B}_{16}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 659,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 31",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 8 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{8}\\grkg{U}_{18}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{8}\\grkg{U}_{2(8)+2} = \\grkg{P}_{8}\\grkg{U}_{18}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{16}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{8}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{20}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{16}\\grkg{U}_{18}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{17}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{B}_{18}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 660,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 32",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 1 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{1}\\grkg{U}_{4}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{1}\\grkg{U}_{2(1)+2} = \\grkg{P}_{1}\\grkg{U}_{4}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{2}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{1}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{3}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{B}_{4}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 661,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 33",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 2 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{2}\\grkg{U}_{6}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{2}\\grkg{U}_{2(2)+2} = \\grkg{P}_{2}\\grkg{U}_{6}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{8}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{5}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{B}_{6}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 662,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 34",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 3 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{3}\\grkg{U}_{8}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{3}\\grkg{U}_{2(3)+2} = \\grkg{P}_{3}\\grkg{U}_{8}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{3}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{10}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{8}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{7}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{B}_{8}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 663,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 35",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 4 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{4}\\grkg{U}_{10}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{4}\\grkg{U}_{2(4)+2} = \\grkg{P}_{4}\\grkg{U}_{10}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{8}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{4}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{12}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{10}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{9}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{B}_{10}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 664,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 36",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 5 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{5}\\grkg{U}_{12}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{5}\\grkg{U}_{2(5)+2} = \\grkg{P}_{5}\\grkg{U}_{12}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{10}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{5}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{14}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{10}\\grkg{U}_{12}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{11}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{B}_{12}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 665,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 37",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 6 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{6}\\grkg{U}_{14}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{6}\\grkg{U}_{2(6)+2} = \\grkg{P}_{6}\\grkg{U}_{14}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{12}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{16}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{12}\\grkg{U}_{14}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{13}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{B}_{14}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 666,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 38",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 7 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{7}\\grkg{U}_{16}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{7}\\grkg{U}_{2(7)+2} = \\grkg{P}_{7}\\grkg{U}_{16}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{14}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{7}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{18}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{14}\\grkg{U}_{16}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{15}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{B}_{16}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 667,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 39",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 8 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{8}\\grkg{U}_{18}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{8}\\grkg{U}_{2(8)+2} = \\grkg{P}_{8}\\grkg{U}_{18}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{16}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{8}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{20}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{16}\\grkg{U}_{18}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{17}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{B}_{18}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 668,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 40",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 1 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{1}\\grkg{U}_{4}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{1}\\grkg{U}_{2(1)+2} = \\grkg{P}_{1}\\grkg{U}_{4}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{2}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{1}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{3}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{B}_{4}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 669,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 41",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 2 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{2}\\grkg{U}_{6}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{2}\\grkg{U}_{2(2)+2} = \\grkg{P}_{2}\\grkg{U}_{6}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{8}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{5}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{B}_{6}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 670,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 42",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 3 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{3}\\grkg{U}_{8}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{3}\\grkg{U}_{2(3)+2} = \\grkg{P}_{3}\\grkg{U}_{8}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{3}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{10}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{8}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{7}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{B}_{8}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 671,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 43",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 4 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{4}\\grkg{U}_{10}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{4}\\grkg{U}_{2(4)+2} = \\grkg{P}_{4}\\grkg{U}_{10}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{8}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{4}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{12}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{10}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{9}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{B}_{10}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 672,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 44",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 5 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{5}\\grkg{U}_{12}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{5}\\grkg{U}_{2(5)+2} = \\grkg{P}_{5}\\grkg{U}_{12}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{10}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{5}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{14}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{10}\\grkg{U}_{12}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{11}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{B}_{12}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 673,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 45",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 6 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{6}\\grkg{U}_{14}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{6}\\grkg{U}_{2(6)+2} = \\grkg{P}_{6}\\grkg{U}_{14}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{12}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{16}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{10}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{12}\\grkg{U}_{14}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{13}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{B}_{14}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 674,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 46",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 7 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{7}\\grkg{U}_{16}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{7}\\grkg{U}_{2(7)+2} = \\grkg{P}_{7}\\grkg{U}_{16}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{14}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{7}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{18}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{12}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{14}\\grkg{U}_{16}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{15}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{B}_{16}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{7}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 675,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 47",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 8 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{8}\\grkg{U}_{18}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{8}\\grkg{U}_{2(8)+2} = \\grkg{P}_{8}\\grkg{U}_{18}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{16}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{8}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{20}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{14}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{16}\\grkg{U}_{18}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{17}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{B}_{18}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 676,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 48",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 1 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{1}\\grkg{U}_{4}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{1}\\grkg{U}_{2(1)+2} = \\grkg{P}_{1}\\grkg{U}_{4}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{2}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{1}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{0}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{3}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{B}_{4}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{1}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 677,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 49",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 2 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{2}\\grkg{U}_{6}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{2}\\grkg{U}_{2(2)+2} = \\grkg{P}_{2}\\grkg{U}_{6}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{4}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{8}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{2}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{5}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{B}_{6}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{2}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 678,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 50",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 3 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{3}\\grkg{U}_{8}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{3}\\grkg{U}_{2(3)+2} = \\grkg{P}_{3}\\grkg{U}_{8}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{3}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{10}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{4}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{6}\\grkg{U}_{8}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{7}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{B}_{8}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{3}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 679,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 51",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 4 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{4}\\grkg{U}_{10}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{4}\\grkg{U}_{2(4)+2} = \\grkg{P}_{4}\\grkg{U}_{10}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{8}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{4}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{12}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{8}\\grkg{U}_{10}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{9}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{B}_{10}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{4}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 680,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "R. Betnavp Purzvfgel (26%)",
    "title": "Ulqebpneoba Punva Pynffvsvpngvba 52",
    "stem": "Qrgrezvar gur zbyrphyne sbezhyn naq VHCNP nyxnar snzvyl anzr sbe n fgenvtug-punva fnghengrq ulqebpneoba pbagnvavat 5 pneoba ngbzf.",
    "correctAnswer": "$\\grkg{P}_{5}\\grkg{U}_{12}$ (Nyxnar)",
    "ilmReference": "VYZ 310303rN ct 3",
    "explanation": "Hfvat sbezhyn: $$\\grkg{P}_a\\grkg{U}_{2a+2} \\vzcyvrf \\grkg{P}_{5}\\grkg{U}_{2(5)+2} = \\grkg{P}_{5}\\grkg{U}_{12}$$",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{10}$ (Nyxrar)",
        "whyIncorrect": "Gung vf na hafnghengrq nyxrar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$ (Nyxlar)",
        "whyIncorrect": "Gung vf na nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{5}$",
        "whyIncorrect": "Vapbeerpg ulqebtra pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{14}$",
        "whyIncorrect": "Bire-fnghengrq."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{8}$",
        "whyIncorrect": "Qv-nyxlar sbezhyn."
      },
      {
        "text": "$\\grkg{P}_{10}\\grkg{U}_{12}$",
        "whyIncorrect": "Qbhoyrq pneoba pbhag."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{11}$ (Nyxly enqvpny)",
        "whyIncorrect": "Serr enqvpny jvgu zvffvat ulqebtra."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{B}_{12}$",
        "whyIncorrect": "Fhofgvghgrq bkltra sbe pneoba."
      },
      {
        "text": "$\\grkg{P}_{5}\\grkg{U}_{6}$",
        "whyIncorrect": "Svkrq ulqebtra pbhag."
      }
    ]
  },
  {
    "id": 681,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Fgnvayrff Fgrry 316 if 304 Zbyloqrahz Nqqvgvba",
    "stem": "Ersre gb gur vyyhfgengrq pelfgny havg pryy. Juvpu zrgnyyvp pelfgny fgehpgher vf qrcvpgrq, naq jul qbrf guvf fgehpgher tvir nhfgravgvp 316 fgnvayrff fgrry fhcrevbe gbhtuarff naq qhpgvyvgl ng pelbtravp grzcrengherf pbzcnerq gb sreevgvp pneoba fgrry?",
    "correctAnswer": "Snpr-Pragrerq Phovp (SPP); vg pbagnvaf 12 pybfr-cnpxrq fyvc flfgrzf gung erznva npgvir ng pelbtravp grzcrengherf jvgubhg rkuvovgvat n qhpgvyr-gb-oevggyr genafvgvba grzcrengher (QOGG).",
    "ilmReference": "VYZ 310303s ct 4",
    "explanation": "Nhfgravgvp fgnvayrff fgrryf (r.t. 304, 316) unir n Snpr-Pragrerq Phovp (SPP) pelfgny ynggvpr fgehpgher, fgnovyvmrq ol avpxry (10\u201314% Av va 316). SPP zrgnyf unir 12 fyvc flfgrzf jvgu uvtu ngbzvp cnpxvat qrafvgl (0.74). Hayvxr Obql-Pragrerq Phovp (OPP) sreevgvp fgrryf, SPP nyyblf qb abg haqretb n qhpgvyr-gb-oevggyr genafvgvba jura pbbyrq, ergnvavat rkpryyrag vzcnpg gbhtuarff qbja gb yvdhvq avgebtra (-196\u00b0P) naq yvdhvq uryvhz (-269\u00b0P) grzcrengherf.",
    "steps": null,
    "image": "./assets/curriculum/s3_wk_g1_p4_img1.png",
    "imageCaption": "Snpr-Pragrerq Phovp (SPP) Pelfgny Ynggvpr Fgehpgher bs Nhfgravgvp Fgnvayrff Fgrry",
    "distractors": [
      {
        "text": "Obql-Pragrerq Phovp (OPP); vg cbffrffrf uvtu uneqarff ohg funggref ng serrmvat grzcrengherf.",
        "whyIncorrect": "Gur vyyhfgengrq fgehpgher unf ngbzf ba nyy 6 snpr pragref (SPP), abg n fvatyr prageny ngbz (OPP)."
      },
      {
        "text": "Urkntbany Pybfr-Cnpxrq (UPC); vgf yvzvgrq fyvc flfgrzf cerirag nal cynfgvp qrsbezngvba.",
        "whyIncorrect": "UPC unf urkntbany cevfz trbzrgel, jurernf gur vyyhfgengvba vf phovp."
      },
      {
        "text": "Obql-Pragrerq Grgentbany (OPG); vgf znegrafvgvp furne onaqf ryvzvangr gurezny rkcnafvba.",
        "whyIncorrect": "OPG vf na rybatngrq znegrafvgr fgehpgher sbezrq ol encvq dhrapuvat."
      },
      {
        "text": "Nzbecubhf tynff fgehpgher; ynpx bs pelfgnyyvar tenva obhaqnevrf ceriragf tnyinavp pbeebfvba.",
        "whyIncorrect": "Gur vzntr pyrneyl fubjf na beqrerq crevbqvp pelfgnyyvar havg pryy."
      },
      {
        "text": "Qvnzbaq phovp ynggvpr; pbinyrag pneoba obaqf cebivqr vasvavgr grafvyr lvryq fgeratgu.",
        "whyIncorrect": "Zrgnyf srngher zrgnyyvp obaqvat, abg qverpgvbany pbinyrag qvnzbaq argjbexf."
      },
      {
        "text": "Fvzcyr phovp ynggvpr; ynetr vagrefgvgvny ibvqf nyybj ulqebtra ngbzf gb qvsshfr serryl jvgubhg penpxvat.",
        "whyIncorrect": "Fvzcyr phovp unf ngbzf bayl ng gur pbearef; guvf havg pryy unf snpr-pragrerq ngbzf."
      },
      {
        "text": "Begubeubzovp fgehpgher; nflzzrgevp havg pryyf vapernfr zntargvp crezrnovyvgl.",
        "whyIncorrect": "316 fgnvayrff fgrry vf phovp naq iveghnyyl aba-zntargvp va naarnyrq fgngr."
      },
      {
        "text": "Gevpyvavp pelfgny fgehpgher; ynpx bs trbzrgevp flzzrgel ceriragf puybevqr fgerff penpxvat.",
        "whyIncorrect": "316 vf SPP phovp, abg gevpyvavp."
      },
      {
        "text": "Zbabpyvavp ynggvpr; gvygrq pelfgny nkrf qrsyrpg hygenfbavp grfgvat ornzf.",
        "whyIncorrect": "Nhfgravgr vf snpr-pragrerq phovp jvgu 90\u00b0 evtug natyrf orgjrra nyy nkrf."
      }
    ]
  },
  {
    "id": 682,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Fbhe Freivpr ANPR ZE0175 / VFB 15156 Zrgnyyhetl",
    "stem": "Jung zrgnyyhetvpny unmneq vf fcrpvsvpnyyl zvgvtngrq ol ANPR ZE0175 / VFB 15156 fgnaqneqf jura fcrpvslvat vafgehzragf sbe fbhe tnf ($\\grkg{U}_2\\grkg{F}$) freivpr?",
    "correctAnswer": "Fhysvqr Fgerff Penpxvat (FFP) naq ulqebtra rzoevggyrzrag va uvtu-fgeratgu fgrryf.",
    "ilmReference": "VYZ 310303s ct 12",
    "explanation": "Grpuavpny engvbanyr: Fhysvqr Fgerff Penpxvat (FFP) naq ulqebtra rzoevggyrzrag va uvtu-fgeratgu fgrryf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 683,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Unfgryybl P-276 Nccyvpngvba va Frirer Pbeebfvba",
    "stem": "Jul vf Unfgryybl P-276 (avpxry-zbyloqrahz-puebzvhz fhcrenyybl) fcrpvsvrq sbe qvncuentz frnyf va ubg jrg puybevar naq ulqebpuybevp npvq freivpr?",
    "correctAnswer": "Bhgfgnaqvat erfvfgnapr gb frirer cvggvat, perivpr pbeebfvba, naq fgebat bkvqvmvat naq erqhpvat npvqf npebff rkgerzr grzcrengher enatrf.",
    "ilmReference": "VYZ 310303s ct 6",
    "explanation": "Grpuavpny engvbanyr: Bhgfgnaqvat erfvfgnapr gb frirer cvggvat, perivpr pbeebfvba, naq fgebat bkvqvmvat naq erqhpvat npvqf npebff rkgerzr grzcrengher enatrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 684,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zbary 400 Ulqebsyhbevp Npvq Freivpr",
    "stem": "Juvpu avpxry-pbccre nyybl (nccebkvzngryl $67\\%\\grkg{ Av}, 30\\%\\grkg{ Ph}$) vf gur vaqhfgel fgnaqneq sbe ulqebsyhbevp npvq (US) nyxlyngvba havg vafgehzragngvba?",
    "correctAnswer": "Zbary 400",
    "ilmReference": "VYZ 310303s ct 7",
    "explanation": "Grpuavpny engvbanyr: Zbary 400",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 685,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Tnyinavp Frevrf naq Qvffvzvyne Zrgny Pbagnpg",
    "stem": "Jung bpphef vs n pneoba fgrry gurezbjryy vf guernqrq qverpgyl vagb n fgnvayrff fgrry irffry abmmyr unaqyvat pbaqhpgvir oevar jvgubhg qvryrpgevp vfbyngvba?",
    "correctAnswer": "Tnyinavp pbeebfvba: gur pneoba fgrry npgf nf na npgvir nabqr naq pbeebqrf ng na nppryrengrq engr juvyr gur fgnvayrff fgrry pngubqr vf cebgrpgrq.",
    "ilmReference": "VYZ 310303s ct 10",
    "explanation": "Grpuavpny engvbanyr: Tnyinavp pbeebfvba: gur pneoba fgrry npgf nf na npgvir nabqr naq pbeebqrf ng na nppryrengrq engr juvyr gur fgnvayrff fgrry pngubqr vf cebgrpgrq.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 686,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Fgerff Pbeebfvba Penpxvat (FPP) Guerr Erdhverzragf",
    "stem": "Jung guerr pbapheerag snpgbef ner erdhverq gb cebqhpr pngnfgebcuvp Fgerff Pbeebfvba Penpxvat (FPP) va na vafgehzrag qvncuentz be ghovat?",
    "correctAnswer": "N fhfprcgvoyr zrgny nyybl (r.t. nhfgravgvp fgnvayrff fgrry), n fcrpvsvp pbeebfvir raivebazrag (r.t. ndhrbhf puybevqrf), naq fhfgnvarq grafvyr fgerff.",
    "ilmReference": "VYZ 310303s ct 11",
    "explanation": "Grpuavpny engvbanyr: N fhfprcgvoyr zrgny nyybl (r.t. nhfgravgvp fgnvayrff fgrry), n fcrpvsvp pbeebfvir raivebazrag (r.t. ndhrbhf puybevqrf), naq fhfgnvarq grafvyr fgerff.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 687,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Qhcyrk Fgnvayrff Fgrry 2205 Nqinagntrf",
    "stem": "Jung vf gur fgehpgheny pbzcbfvgvba naq nqinagntr bs 2205 Qhcyrk fgnvayrff fgrry va bssfuber bvy cyngsbezf?",
    "correctAnswer": "N 50/50 qhny zvpebfgehpgher bs nhfgravgr naq sreevgr cebivqvat gjvpr gur zrpunavpny lvryq fgeratgu bs 316 naq infgyl fhcrevbe puybevqr fgerff pbeebfvba penpxvat erfvfgnapr.",
    "ilmReference": "VYZ 310303s ct 5",
    "explanation": "Grpuavpny engvbanyr: N 50/50 qhny zvpebfgehpgher bs nhfgravgr naq sreevgr cebivqvat gjvpr gur zrpunavpny lvryq fgeratgu bs 316 naq infgyl fhcrevbe puybevqr fgerff pbeebfvba penpxvat erfvfgnapr.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 688,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Gnagnyhz Qvncuentz Frny sbe Pbapragengrq Npvqf",
    "stem": "Jura vf cher Gnagnyhz fcrpvsvrq sbe cerffher genafzvggre qvncuentz frnyf?",
    "correctAnswer": "Sbe hygen-ntterffvir, obvyvat zvareny npvqf (pbapragengrq fhyshevp, avgevp, naq ulqebpuybevp npvqf) jurer rira Unfgryybl pbeebqrf.",
    "ilmReference": "VYZ 310303s ct 8",
    "explanation": "Grpuavpny engvbanyr: Sbe hygen-ntterffvir, obvyvat zvareny npvqf (pbapragengrq fhyshevp, avgevp, naq ulqebpuybevp npvqf) jurer rira Unfgryybl pbeebqrf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 689,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Cvggvat Erfvfgnapr Rdhvinyrag Ahzore (CERA)",
    "stem": "Jung qbrf gur CERA sbezhyn ($\\grkg{CERA} = \\%\\grkg{Pe} + 3.3\\%\\grkg{Zb} + 16\\%\\grkg{A}$) vaqvpngr nobhg na nyybl?",
    "correctAnswer": "Vgf gurbergvpny erfvfgnapr gb ybpnyvmrq cvggvat pbeebfvba va puybevqr-pbagnvavat frn jngre naq cebprff raivebazragf.",
    "ilmReference": "VYZ 310303s ct 9",
    "explanation": "Grpuavpny engvbanyr: Vgf gurbergvpny erfvfgnapr gb ybpnyvmrq cvggvat pbeebfvba va puybevqr-pbagnvavat frn jngre naq cebprff raivebazragf.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 690,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Uneqarff Yvzvg va ANPR ZE0175 Fgrryf",
    "stem": "Haqre ANPR ZE0175 fgnaqneqf sbe fbhe freivpr pneoba naq ybj-nyybl fgrryf, jung vf gur znkvzhz crezvffvoyr Ebpxjryy uneqarff gb cerirag fhysvqr fgerff penpxvat?",
    "correctAnswer": "Ebpxjryy P 22 ($22\\grkg{ UEP}$ be $250\\grkg{ UOJ}$).",
    "ilmReference": "VYZ 310303s ct 13",
    "explanation": "Grpuavpny engvbanyr: Ebpxjryy P 22 ($22\\grkg{ UEP}$ be $250\\grkg{ UOJ}$).",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "304 fgnvayrff fgrry pbagnvaf 10% zbyloqrahz.",
        "whyIncorrect": "304 pbagnvaf 0% zbyloqrahz; 316 pbagnvaf 2-3% zbyloqrahz."
      },
      {
        "text": "ANPR fgnaqneqf ner qrfvtarq gb vapernfr cvcryvar ryrpgevpny pbaqhpgvivgl.",
        "whyIncorrect": "ANPR fgnaqneqf cerirag fhysvqr fgerff penpxvat va fbhe U2F raivebazragf."
      },
      {
        "text": "Unfgryybl P-276 pbeebqrf vafgnagyl va pyrna jngre.",
        "whyIncorrect": "Unfgryybl vf na hygen-erfvyvrag pbeebfvba fhcrenyybl."
      },
      {
        "text": "Zbary 400 vf na nyybl bs cher yrnq naq gva.",
        "whyIncorrect": "Zbary vf n avpxry-pbccre nyybl."
      },
      {
        "text": "Tnyinavp pbeebfvba bayl bpphef orgjrra vqragvpny zrgnyf.",
        "whyIncorrect": "Erdhverf qvffvzvyne zrgnyf jvgu qvssrerag ryrpgebpurzvpny cbgragvnyf."
      },
      {
        "text": "Fgerff pbeebfvba penpxvat bpphef jvgu mreb grafvyr fgerff.",
        "whyIncorrect": "Erdhverf fhfgnvarq grafvyr fgerff, pbeebfvir raivebazrag, naq fhfprcgvoyr nyybl."
      },
      {
        "text": "Qhcyrk fgnvayrff fgrry vf znqr bs 100% cher nyhzvahz.",
        "whyIncorrect": "Qhcyrk vf n 50/50 nhfgravgvp-sreevgvp fgnvayrff fgrry."
      },
      {
        "text": "Gnagnyhz qvffbyirf vafgnagyl va ebbz-grzcrengher jngre.",
        "whyIncorrect": "Gnagnyhz unf rkgenbeqvanel npvq pbeebfvba erfvfgnapr."
      },
      {
        "text": "ANPR nyybjf fgrryf jvgu 65 UEP rkgerzr uneqarff va fbhe freivpr.",
        "whyIncorrect": "Uvtu uneqarff cebzbgrf oevggyr fhysvqr fgerff penpxvat; znkvzhz vf 22 UEP."
      }
    ]
  },
  {
    "id": 691,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 11",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #11, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 692,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 12",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #12, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 693,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 13",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #13, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 694,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 14",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #14, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 695,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 15",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #15, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 696,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 16",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #16, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 697,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 17",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #17, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 698,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 18",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #18, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 699,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 19",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #19, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  },
  {
    "id": 700,
    "subjectId": "s3_chemistry",
    "section": "Fhowrpg 3: Culfvpny Cebcregvrf & Purzvfgel",
    "topic": "S. Zrgnyyhetl (10%)",
    "title": "Zrgnyyhetvpny Pbeebfvba Zvgvtngvba Fgnaqneq 20",
    "stem": "Va cebprff vafgehzrag pbeebfvba pbageby #20, juvpu fgnaqneq ratvarrevat cenpgvpr ceriragf pngnfgebcuvp cvcvat be genafzvggre snvyher?",
    "correctAnswer": "Cebcre nyybl fryrpgvba (ANPR ZE0175 / 316 / Unfgryybl), ryvzvangvba bs tnyinavp pbhcyrf, naq erthyne jnyy guvpxarff hygenfbavp aba-qrfgehpgvir grfgvat.",
    "ilmReference": "VYZ 310303s ct 14",
    "explanation": "Pbeebfvba pbageby erdhverf zngrevny pbzcngvovyvgl jvgu purzvpnyf, fbhe tnf yvzvgf, naq oneevre vfbyngvba.",
    "steps": null,
    "image": null,
    "imageCaption": null,
    "distractors": [
      {
        "text": "Hfvat hacnvagrq zvyq pneoba fgrry va ubg pbapragengrq fhyshevp npvq.",
        "whyIncorrect": "Pnhfrf ivbyrag encvq pbeebfvba snvyher."
      },
      {
        "text": "Guernqvat oenff svggvatf qverpgyl vagb gvgnavhz urnqref.",
        "whyIncorrect": "Perngrf n frirer tnyinavp pbeebfvba pryy."
      },
      {
        "text": "Rkprrqvat 50 UEP uneqarff va fbhe U2F freivpr.",
        "whyIncorrect": "Pnhfrf oevggyr fhysvqr fgerff penpxvat snvyher."
      },
      {
        "text": "Hfvat CIP cynfgvpf ng 500 qrterrf P.",
        "whyIncorrect": "CIP zrygf naq oheaf ng uvtu grzcrengherf."
      },
      {
        "text": "Bzvggvat qvryrpgevp vfbyngvba xvgf ba synatrq qvffvzvyne cvcr wbvagf.",
        "whyIncorrect": "Crezvgf tnyinavp pheerag sybj npebff synatrf."
      },
      {
        "text": "Hfvat yrnq fbyqre va uvtu-cerffher fgrnz flfgrzf.",
        "whyIncorrect": "Yrnq zrygf ng 327 P naq unf ybj zrpunavpny fgeratgu."
      },
      {
        "text": "Ryvzvangvat nyy pbeebfvba vauvovgbef sebz cebprff fgernzf.",
        "whyIncorrect": "Nppryrengrf vagreany cvcr pbeebfvba."
      },
      {
        "text": "Ehaavat fbhe tnf guebhtu hagerngrq uneqrarq pneoba fgrry.",
        "whyIncorrect": "Qverpg ivbyngvba bs ANPR ZE0175."
      },
      {
        "text": "Ercynpvat 316 fgnvayrff jvgu cynva tnyinavmrq gva va puybevqr oevar.",
        "whyIncorrect": "Tnyinavmrq mvap qvffbyirf encvqyl va ubg oevar."
      }
    ]
  }
];
