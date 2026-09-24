const FINANCIADORES = {
  "Poder Judicial": {
    "vigencia": "15/06/2026",
    "archivo": "documentos/Poder_Judicial_2026-06-15.pdf"
  },
  "APOS La Rioja": {
    "vigencia": "Septiembre 2026 (propuesta)",
    "archivo": "documentos/APOS_La_Rioja_2026-09.pdf"
  },
  "APSOT": {
    "vigencia": "Listado abril 2025",
    "archivo": "documentos/APSOT_2025-04.pdf"
  },
  "ASE-Medifé": {
    "vigencia": "Listado julio 2025",
    "archivo": "documentos/ASE_MEDIFE_2025-07.pdf"
  },
  "OSDE Alto Costo": {
    "vigencia": "Listado junio 2025",
    "archivo": "documentos/OSDE_Alto_Costo_2025-06.pdf"
  },
  "Caja Notarial": {
    "vigencia": "Listado julio 2026",
    "archivo": "documentos/Caja_Notarial_2026-07.pdf"
  },
  "Colegio de Escribanos de la Provincia": {
    "vigencia": "1 de julio (año no informado)",
    "archivo": "documentos/Colegio_Escribanos_Provincia.pdf"
  },
  "FEMÉDICA Alto Costo": {
    "vigencia": "Julio 2026",
    "archivo": "documentos/FEMEDICA_Alto_Costo_2026-07.pdf"
  },
  "IASEP Formosa": {
    "vigencia": "1/9/2025",
    "archivo": "documentos/IASEP_Formosa_2025-09-01.pdf"
  },
  "INSSSEP Chaco": {
    "vigencia": "20/7/2026",
    "archivo": "documentos/INSSSEP_Chaco_2026-07-20.pdf"
  },
  "MEDICUS": {
    "vigencia": "Julio 2026",
    "archivo": "documentos/MEDICUS_2026-07.pdf"
  },
  "OMINT": {
    "vigencia": "Actualización noviembre 2025 (documento base junio 2025)",
    "archivo": "documentos/OMINT_Actualizacion_2025-11.pdf"
  },
  "SEMPRE": {
    "vigencia": "Propuesta (fecha no informada)",
    "archivo": "documentos/SEMPRE_Propuesta.pdf"
  },
  "Swiss Medical": {
    "vigencia": "Propuesta mayo 2026",
    "archivo": "documentos/Swiss_Medical_Propuesta_2026-05.pdf"
  }
};

const MEDICAMENTOS = [
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ABEMACICLIB",
    "medicamento": "VERZENIO 150 MG COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ALBUMINA HUMANA",
    "medicamento": "INFINITY PHARMA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40 mg / ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ANASTROZOL",
    "medicamento": "ANASTROZOL 1 MG X 1 COMPR KEMEX"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA BIOPROFARMA 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA 15 U LKM FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERTAPENEM",
    "medicamento": "INVANZ 1 G"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INFLIXIMAB",
    "medicamento": "REMICADE 100 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL 5%",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISAVUCONAZOL",
    "medicamento": "ISAVUCONAZOL 200 MG FAX 1 CRESEMBA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISAVUCONAZOL",
    "medicamento": "ISAVUCONAZOL 100 MG FAX 2 CRESEMBA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG CELCTYC AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG RICHET COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG GOBBI COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG MICROSULES COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG FABRA AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "PEMBROX ENVASE 100MG VIAL x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP GLENMARK"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TAMOXIFENO",
    "medicamento": "10MG COMP GADOR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TAMOXIFENO",
    "medicamento": "20MG COMP GADOR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TIMOGLOBULINA",
    "medicamento": "TIMOGLOBULINA 25 MG FCO AM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TOCILIZUMAB",
    "medicamento": "ACTEMRA 200ML – 10366017"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB DERUXTECAN",
    "medicamento": "ENHERTU"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINORELBINE",
    "medicamento": "VINORELBINE 10 MG FCO AMP VINOREL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINORELBINE",
    "medicamento": "VINORELBINE 10 MG FCO AMP VINOREL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FABRA 8 MG AMPOLLAS"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ZAVICEFTA",
    "medicamento": "ZAVICEFTA 2G / 0.5 FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40 mg / ml"
  },
  {
    "financiador": "APSOT",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "APSOT",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "APSOT",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "APSOT",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "APSOT",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "APSOT",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ERTAPENEM",
    "medicamento": "INVANZ 1 G"
  },
  {
    "financiador": "APSOT",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "APSOT",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "APSOT",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "APSOT",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "APSOT",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "APSOT",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "APSOT",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PIPERACILINA + TAZOBACTAM",
    "medicamento": "PIPERACILINA TAZOBACTAM DRAWER 4,5 G f.a"
  },
  {
    "financiador": "APSOT",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINORELBINE",
    "medicamento": "VINOREL 10 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40MG/ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CABAZITAXEL",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 40.000 UI FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINORELBINE",
    "medicamento": "VINOREL 10 MG FCO AMP"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ - 840 mg vial x 1 x 14 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ - 1200 mg vial x 1 x 20 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX - 100 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA - 100 mg iny.liof.f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX - 250mg/vial pvo.liof.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX - 400 mg vial x 1 x 16 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX - 100 mg vial x 1 x 4 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER - 3.5 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX - 3.5 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BRENTUXIMAB",
    "medicamento": "ADCETRIS - 50 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY - F.A.X 1 X 1.5 ML+DILUY.",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX - vial x 20 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX - vial x 100 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML (**) - 100 MG/5 ML VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML (**) - 400 MG/20 ML VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA - 120mg/1.7 ml iny.vial x1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML - 120 MG VIAL X 1 X 2.4 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML - 500 MG VIAL X 1 X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ERIBULINA",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML - VIAL X 1 X 2 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP - 100 MG F.A.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY - 50 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP - 500 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB)100 MG FCO AMP - 100 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE,ACETATO",
    "medicamento": "LECTRUM 22,5 ML KIT - 22,5 ML KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NAB PACLITAXEL",
    "medicamento": "TAYCOVIT A",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI - 150 MG/ML JER.PRELL. X 2",
    "auditoria": "Solo 1.ª vez"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI - 300 mg/15 ml vial x 1",
    "auditoria": "Solo 1.ª vez"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO - 40 mg/4 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO - 100 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OBINUTUZUMABE",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL (**) - 1000 MG / 40 ML VIAL (**)",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS - 300 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCTREOTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE - 20 MG JGA.PRELL.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCTREOTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE - 30 MG JGA.PRELL.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1 - PVO.P/SOL.INY.VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA - 420 mg/14 ml a.x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB+TRASTUZUMAB",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML - 1200/600MG VIAL X1 X15ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB+TRASTUZUMAB",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML - 600/600 VIAL X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 100 MG 10 MG/ML F.A.X 1 X 10 ML - 100 MG 10 MG/ML F.A.X 1 X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RITUXIMAB",
    "medicamento": "NOVEX 100 - 100 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RITUXIMAB",
    "medicamento": "NOVEX 500 - 500 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TOCILIZUMAB",
    "medicamento": "ACTEMRA 200ML – 10366017 - 200MG/10ML F.A.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP - 1 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA - 440 mg f.a. x 1+ solv.",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL - 100 MG VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL - 160 MG VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO - 300 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PANITUMUMAB",
    "medicamento": "VECTIBIX - 100 MG X 5ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE",
    "medicamento": "ELIGARD - 22.5 MG KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE",
    "medicamento": "ELIGARD - 45 MG KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISAVUCONAZOL",
    "medicamento": "CRESEMBA - 200 MG F.A X 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISAVUCONAZOL",
    "medicamento": "CRESEMBA - 100 MG CAPS",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CABAZITAXEL IV",
    "medicamento": "BLACKXELL - 60 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DECITABINE",
    "medicamento": "DETAVI - 50 MG AMPOLLAS",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PLERIXAFOR",
    "medicamento": "REVIXIL - 20 MG FA X 1",
    "auditoria": "No"
  }
];

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "Colegio de Escribanos de la Provincia",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ABEMACICLIB","VERZENIO 150 MG COMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALBUMINA HUMANA","INFINITY PHARMA"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["ANASTROZOL","GONDONAR 1 MG X 1 COMPR"],
  ["ANASTROZOL","ANASTROZOL 1 MG X 1 COMPR KEMEX"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA BIOPROFARMA 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BLEOMICINA","BLEOMICINA 15 U LKM FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 40.000 UI FCO AMP"],
  ["ERTAPENEM","INVANZ 1 G"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INFLIXIMAB","REMICADE 100 MG"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["ISAVUCONAZOL","ISAVUCONAZOL 200 MG FAX 1 CRESEMBA"],
  ["ISAVUCONAZOL","ISAVUCONAZOL 100 MG FAX 2 CRESEMBA"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON 8 MG CELCTYC AMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG RICHET COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG GOBBI COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG MICROSULES COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG FABRA AMP"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMBROLIZUMAB","PEMBROX ENVASE 100MG VIAL x 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PEMETREXED","PEMETREXED 500 GP GLENMARK"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TAMOXIFENO","10MG COMP GADOR"],
  ["TAMOXIFENO","20MG COMP GADOR"],
  ["TIMOGLOBULINA","TIMOGLOBULINA 25 MG FCO AM"],
  ["TOCILIZUMAB","ACTEMRA 200ML – 10366017"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB DERUXTECAN","ENHERTU"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINA 50 MG AMP KEMEX"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"]
].map(([droga, medicamento]) => ({
  financiador: "Swiss Medical",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ANFOTERICINA B LIPOSOMAL","AMBISONE 50 MG FCO AMP"],
  ["ANIDULAFUNGINA","ANIDULAFUNGINA ECALTA 100 MG FC"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HEMODERIVADOS","ALBUMINA HUMANA 20% INFINITY P"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA G 10% SOL.","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["ISAVUCONAZOL","CRESEMBA 100 MG CAPS"],
  ["ISAVUCONAZOL 200 MG LIOFILIZADO","CRESEMBA 200 MG F.A"],
  ["LETERMOVIR","PREVYMIS 240 MG COMP X 28"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["PROTROMPLEX","PROTROMPLEX TOTAL TIM 4 X 600"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TACROLIMUS","PROGRAF 5 MG INY"],
  ["TIMOGLOBULINA 25 MG FCO AM","TIMOGLOBULINA 25 MG FCO AM"],
  ["TIMOGLOBULINA 25 MG FCO AMP","TIMOGLOBULINA 25 MG FCO AMP"],
  ["TOCILIZUMAB 200 MG","ACTEMRA 2OOMG/1OMt FAMP X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "SEMPRE",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA BIOPROFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BLEOMICINA","BLEOMICINA 15 U LKM FCO AMP"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","LEUCOVORINA 50 MG MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON 8 MG CELCTYC AMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG RICHET COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG GOBBI COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG MICROSULES COMP"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["ONDANSETRON","ONDANSETRON 8 MG FABRA AMP"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 GP GLENMARK"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "Caja Notarial",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN VARIFARMA 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL 5%","CIELDOM 5 GR FA X 100 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","50MG INY. F.A. X 1 MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","ENHERTU"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "FEMÉDICA Alto Costo",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ONDANSETRON","ONDANSETRON FABRA 8 MG AMPOLLAS"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "IASEP Formosa",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["TOCILIZUMAB","ACTEMRA 200 ML"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ONDANSETRON","ONDANSETRON FABRA 8 MG AMPOLLAS"],
  ["ZANUBRUTINIB","BRUKINSA 80MG fco. Caps."],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "INSSSEP Chaco",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","50MG INY. F.A. X 1 MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NETUPITANT","AKYNZEO"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCTREOTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "MEDICUS",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALBUMINA HUMANA","INFINITY PHARMA"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMAN","AHEMAX 10.000 UI FCO AMP"],
  ["ERITROPOYECTINA RECOMB.HUMAN","AHEMAX 40.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORM","CAILELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORM","PARLIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORM","PARLIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ANFOTERICINA B","ANFOTERICNA B FADA AMP"],
  ["ANFOTERICINA B","ANFOTERICINA RICHET INY"],
  ["ANFOTERICINA B","ANFOTERICINA NORTHIA AMP"],
  ["POSACONAZOL","NAXOFIL SUSP. ORAL X 105 ML"],
  ["POSACONAZOL","NAXOFIL 100 MG COMP"],
  ["POSACONAZOL","NAXOFIL 100 MG COMP X 24"],
  ["VORICONAZOL","V FEND 200 MG AMP PFIZER"],
  ["VORICONAZOL","200 MG COMP SANDOZ"],
  ["VORICONAZOL","200 MG IV F AMP SANDOZ"],
  ["VORICONAZOL","200 MG COMP RICHET"],
  ["VORICONAZOL","200 MG IV F AMP RICHET"],
  ["VORICONAZOL","200 MG COMP X 10 RICHET"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 FADA"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 RICHET"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 NORTHIA"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 KILAB"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 DRAWER"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 BAGO"],
  ["PIPERACILINA+TAZOBACTAM","PETEZAM 4,5 RIVERO"],
  ["PIPERACILINA+TAZOBACTAM","PIPERAC CAMPUESTO 4,5 KLONAL"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 FABRA"],
  ["VANCOMICINA","VANCOMICINA 500 MG KLONAL FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG FADA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG DRAWER FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG RICHET FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG FABRA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG NORTHIA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG RIVERO FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG CELTYC FCO AMP"],
  ["VANCOMICINA","VANCOMICINA SOL ORAL 25MG/MLX X 140 ML"],
  ["VANCOMICINA","VANCOMICINA SOL ORAL 125MG/5MLX X 140 ML"],
  ["CEFTAZIDIMA+AVIBACTAM","ZAVICEFTA 2GR / 0,5G FCO AMP"],
  ["CEFTAZIDIMA+AVIBACTAM","CEFTAAVI 2G FRASCO AMP"],
  ["MEROPENEM","MEROPENEM 1 GR NORTHIA INY"],
  ["MEROPENEM","MEROPENEM 1 GR FABRA INY"],
  ["MEROPENEM","MEROPENEM 1 GR FADA INY"],
  ["MEROPENEM","KLOPENEM 1 GR KLONAL INY"],
  ["MEROPENEM","MEROPENEM 1 GR RICHET AMP"],
  ["MEROPENEM","MEROPENEM 1 GR DRAWER INY"],
  ["MEROPENEM","MEROPENEM 1GR CELTYC INY"],
  ["ANIDULAFUNGINA","ANIDULAFUNGINA ECALTA 100 MG FCO AMP"],
  ["IMEPENEM+CILASTATINA+RELEBA CTAM","RECARBRIO F/A"]
].map(([droga, medicamento]) => ({
  financiador: "OMINT",
  droga,
  medicamento,
  auditoria: "No informado"
})));
