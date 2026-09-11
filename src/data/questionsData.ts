import { MCQQuestion } from '../types';

export const mockQuestions: MCQQuestion[] = [
  {
    id: 'npc-q-01',
    subject: 'Pharmacology',
    topic: 'Autonomic Nervous System & Toxicology',
    question: 'What is the specific antidote for acute paracetamol (acetaminophen) toxicity?',
    options: [
      'Naloxone',
      'N-Acetylcysteine (NAC)',
      'Flumazenil',
      'Atropine sulfate'
    ],
    correctOptionIndex: 1,
    explanation: 'N-Acetylcysteine (NAC) replenishes hepatic glutathione reserves, allowing the toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) to be safely detoxified and excreted.',
    highYieldTip: 'Remember: Naloxone is for Opioids, Flumazenil is for Benzodiazepines, and NAC is for Paracetamol.',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2081 BS',
    difficulty: 'Easy'
  },
  {
    id: 'npc-q-02',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    topic: 'Nepal Drug Act 2035',
    question: 'Under the Nepal Drug Act 2035 B.S., into which schedule/category are narcotic and psychotropic drugs primarily classified for prescription control?',
    options: [
      'Schedule Ka (क / Class A)',
      'Schedule Kha (ख / Class B)',
      'Schedule Ga (ग / Class C)',
      'Schedule Gha (घ / Class D)'
    ],
    correctOptionIndex: 0,
    explanation: 'Under Drug Act 2035 BS and its classifications in Nepal, Category Ka (Class A) encompasses Narcotic, Psychotropic, and poisonous drugs requiring stringent prescription and register logging.',
    highYieldTip: 'Class Ka = Narcotic/Psychotropic, Class Kha = Antibiotics & Hormones (Rx only), Class Ga = General OTC & symptomatic medications.',
    isPastExamQuestion: true,
    examTag: 'NPC License & Loksewa 5th Level',
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-03',
    subject: 'Pharmaceutics',
    topic: 'Tablet Manufacturing & Defects',
    question: 'The partial or complete separation of the top or bottom crowns of a tablet from the main body is termed as:',
    options: [
      'Lamination',
      'Capping',
      'Mottling',
      'Picking'
    ],
    correctOptionIndex: 1,
    explanation: 'Capping is the partial or complete removal or separation of top/bottom crowns from the tablet body, usually caused by air entrapment during compression.',
    highYieldTip: 'Capping = separation of cap/crown. Lamination = separation into two or more distinct layers. Mottling = unequal distribution of color.',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2080 BS',
    difficulty: 'Easy'
  },
  {
    id: 'npc-q-04',
    subject: 'Pharmacology',
    topic: 'Cardiovascular Drugs',
    question: 'Which of the following antihypertensive agents is strictly contraindicated in pregnant women due to fetal renal dysgenesis risk?',
    options: [
      'Methyldopa',
      'Labetalol',
      'Enalapril (ACE Inhibitors)',
      'Nifedipine'
    ],
    correctOptionIndex: 2,
    explanation: 'ACE Inhibitors (like Enalapril, Lisinopril) and ARBs are Category X/D teratogenic in the 2nd and 3rd trimesters, causing oligohydramnios, fetal renal failure, and skull hypoplasia.',
    highYieldTip: 'Drugs of choice for hypertension in pregnancy: Methyldopa, Labetalol, and Hydralazine.',
    isPastExamQuestion: true,
    examTag: 'NPC License & Loksewa 2081',
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-05',
    subject: 'Pharmacognosy',
    topic: 'Alkaloids & Chemical Identification Tests',
    question: 'Dragendorff’s reagent used for the identification of alkaloids is chemically prepared as:',
    options: [
      'Potassium mercuric iodide solution',
      'Potassium bismuth iodide solution',
      'Iodine in potassium iodide solution',
      'Saturated picric acid solution'
    ],
    correctOptionIndex: 1,
    explanation: 'Dragendorff’s reagent is Potassium Bismuth Iodide solution and gives an orange-red or reddish-brown precipitate with alkaloids.',
    highYieldTip: 'Mayer = Potassium Mercuric Iodide (Cream/White ppt), Wagner = Iodine + KI (Reddish brown), Hager = Picric acid (Yellow ppt), Dragendorff = Potassium Bismuth Iodide (Orange-red ppt).',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2079 BS',
    difficulty: 'Hard'
  },
  {
    id: 'npc-q-06',
    subject: 'Hospital & Clinical Pharmacy',
    topic: 'Prescription Latin Terms',
    question: 'What does the Latin prescription abbreviation "q.i.d." signify in medical dispensing?',
    options: [
      'Every four hours',
      'Four times a day',
      'Every other day',
      'Once daily at bedtime'
    ],
    correctOptionIndex: 1,
    explanation: '"q.i.d." stands for "quater in die", which means four times a day. In contrast, "q4h" means every 4 hours.',
    highYieldTip: 'b.i.d = twice daily, t.i.d = thrice daily, q.i.d = four times daily, stat = immediately.',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2081 BS',
    difficulty: 'Easy'
  },
  {
    id: 'npc-q-07',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Spectroscopy & Instrumental Analysis',
    question: 'Beer-Lambert Law relates light absorbance directly to which two physical parameters?',
    options: [
      'Temperature and volume of solution',
      'Solute concentration and path length of cuvette',
      'Molecular weight and refractive index',
      'Viscosity and dielectric constant'
    ],
    correctOptionIndex: 1,
    explanation: 'Beer-Lambert Law states that A = ε · c · l, where A is absorbance, ε is molar absorptivity, c is concentration of analyte, and l is the optical path length.',
    highYieldTip: 'Beer\'s law relates absorbance to concentration; Lambert\'s law relates absorbance to path length.',
    isPastExamQuestion: false,
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-08',
    subject: 'Biopharmaceutics & Pharmacokinetics',
    topic: 'Biopharmaceutics Classification System (BCS)',
    question: 'According to the BCS classification, a Class II drug exhibits which solubility and permeability characteristics?',
    options: [
      'High Solubility, High Permeability',
      'Low Solubility, High Permeability',
      'High Solubility, Low Permeability',
      'Low Solubility, Low Permeability'
    ],
    correctOptionIndex: 1,
    explanation: 'BCS Class II drugs have Low Solubility and High Permeability (e.g., Carbamazepine, Ketoconazole, Ibuprofen). Their bioavailability is limited by dissolution rate.',
    highYieldTip: 'Mnemonic: I = High/High, II = Low Sol/High Perm, III = High Sol/Low Perm, IV = Low/Low.',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2080 BS',
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-09',
    subject: 'Pharmacology',
    topic: 'Antimicrobial Agents',
    question: 'Gray Baby Syndrome in neonates is a well-known fatal adverse effect of which antibiotic due to immature glucuronyl transferase enzyme?',
    options: [
      'Chloramphenicol',
      'Tetracycline',
      'Gentamicin',
      'Vancomycin'
    ],
    correctOptionIndex: 0,
    explanation: 'Neonates have deficient UDP-glucuronyl transferase and inadequate renal excretion, leading to toxic accumulation of Chloramphenicol causing Gray Baby Syndrome (hypotension, cyanosis, cardiovascular collapse).',
    highYieldTip: 'Tetracyclines cause tooth discoloration and bone deformities; Vancomycin causes Red Man Syndrome; Gentamicin causes ototoxicity & nephrotoxicity.',
    isPastExamQuestion: true,
    examTag: 'NPC License & Loksewa 2081',
    difficulty: 'Easy'
  },
  {
    id: 'npc-q-10',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    topic: 'Nepal Pharmacy Council Act 2057',
    question: 'The Nepal Pharmacy Council (NPC) was established in Nepal in which Bikram Sambat year to regulate pharmacy education and professional practice?',
    options: [
      '2045 B.S.',
      '2051 B.S.',
      '2057 B.S.',
      '2062 B.S.'
    ],
    correctOptionIndex: 2,
    explanation: 'The Nepal Pharmacy Council Act was enacted in 2057 B.S. (2000 A.D.) to systematically regulate the pharmacy profession and registration of Pharmacists and Pharmacy Assistants.',
    highYieldTip: 'Key Nepal Acts: Drug Act 2035 BS, Narcotic Drugs Control Act 2033 BS, Nepal Pharmacy Council Act 2057 BS.',
    isPastExamQuestion: true,
    examTag: 'NPC License Core Syllabus',
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-11',
    subject: 'Pharmaceutics',
    topic: 'Sterilization Methods',
    question: 'Which biological indicator organism is standardly used for validation of moist heat sterilization (autoclaving)?',
    options: [
      'Bacillus subtilis',
      'Geobacillus stearothermophilus',
      'Clostridium tetani',
      'Pseudomonas aeruginosa'
    ],
    correctOptionIndex: 1,
    explanation: 'Geobacillus (Bacillus) stearothermophilus spores have exceptional resistance to moist heat and are the globally approved biological indicator for autoclave validation (121°C for 15 min).',
    highYieldTip: 'Autoclave = Geobacillus stearothermophilus; Dry Heat Oven = Bacillus subtilis (atrophaeus); Radiation = Bacillus pumilus; Ethylene Oxide = Bacillus atrophaeus.',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2081 BS',
    difficulty: 'Hard'
  },
  {
    id: 'npc-q-12',
    subject: 'Pharmacology',
    topic: 'Endocrine Pharmacology',
    question: 'Which oral antidiabetic medication is considered first-line therapy for Type 2 Diabetes Mellitus in absence of renal dysfunction?',
    options: [
      'Glimepiride',
      'Metformin',
      'Pioglitazone',
      'Sitagliptin'
    ],
    correctOptionIndex: 1,
    explanation: 'Metformin (a Biguanide) is the first-line pharmacotherapy for Type 2 DM. It reduces hepatic gluconeogenesis and improves insulin sensitivity without causing hypoglycemia or weight gain.',
    highYieldTip: 'Metformin primary rare but severe risk: Lactic Acidosis. Must be held prior to iodinated radiocontrast procedures.',
    isPastExamQuestion: false,
    difficulty: 'Easy'
  },
  {
    id: 'npc-q-13',
    subject: 'Pharmacognosy',
    topic: 'Cardiac Glycosides',
    question: 'Digitalis purpurea contains digitoxin and digoxin, which belong to which chemical group of glycosides?',
    options: [
      'Cardenolides (Steroidal with 5-membered lactone ring)',
      'Bufadienolides (Steroidal with 6-membered lactone ring)',
      'Cyanogenetic glycosides',
      'Anthraquinone glycosides'
    ],
    correctOptionIndex: 0,
    explanation: 'Digitalis leaves contain Cardenolides, which possess a steroidal nucleus (cyclopentanoperhydrophenanthrene) attached to an unsaturated 5-membered lactone ring at C-17.',
    highYieldTip: 'Cardenolides = 5-membered lactone (Digitalis, Strophanthus). Bufadienolides = 6-membered lactone (Squill).',
    isPastExamQuestion: true,
    examTag: 'NPC License Exam 2079 BS',
    difficulty: 'Hard'
  },
  {
    id: 'npc-q-14',
    subject: 'Hospital & Clinical Pharmacy',
    topic: 'Therapeutic Drug Monitoring (TDM)',
    question: 'Which of the following drugs requires routine Therapeutic Drug Monitoring (TDM) owing to its narrow therapeutic index (0.8 - 2.0 ng/mL)?',
    options: [
      'Paracetamol',
      'Amoxicillin',
      'Digoxin',
      'Cetirizine'
    ],
    correctOptionIndex: 2,
    explanation: 'Digoxin has a very narrow therapeutic window (0.8 to 2.0 ng/mL). Hypokalemia markedly increases the risk of life-threatening digoxin-induced cardiac arrhythmias.',
    highYieldTip: 'Narrow therapeutic drugs: Lithium, Digoxin, Phenytoin, Theophylline, Warfarin, Aminoglycosides.',
    isPastExamQuestion: true,
    examTag: 'Loksewa Pharmacy Officer 2080',
    difficulty: 'Medium'
  },
  {
    id: 'npc-q-15',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    topic: 'Department of Drug Administration (DDA)',
    question: 'Under which Ministry of the Government of Nepal does the Department of Drug Administration (DDA) function as the national drug regulatory authority?',
    options: [
      'Ministry of Industry, Commerce and Supplies',
      'Ministry of Health and Population (MoHP)',
      'Ministry of Science and Technology',
      'Ministry of Home Affairs'
    ],
    correctOptionIndex: 1,
    explanation: 'The Department of Drug Administration (DDA / औषधि व्यवस्था विभाग) functions under the Ministry of Health and Population (MoHP), Government of Nepal.',
    highYieldTip: 'DDA was established in 2036 B.S. following the enactment of Drug Act 2035 B.S. Head office in Bijulibazar, Kathmandu.',
    isPastExamQuestion: true,
    examTag: 'Loksewa 5th & 7th Level',
    difficulty: 'Easy'
  }
];
