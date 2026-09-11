import { StudyNote } from '../types';

export const studyNotesData: StudyNote[] = [
  {
    id: 'note-01',
    title: 'Nepal Pharmacy Council (NPC) License Exam Weightage & Blueprint',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    readTime: '6 min read',
    summary: 'Comprehensive breakdown of marks distribution, subject weightage, negative marking rules, and qualifying criteria for D.Pharm & B.Pharm license candidates.',
    keyPoints: [
      'Total Questions: 100 Objective Multiple Choice Questions (CBT format).',
      'Passing Marks: 50% (Minimum 50 correct answers out of 100).',
      'Negative Marking: No negative marking in current NPC guidelines.',
      'Pharmacology & Therapeutics carries approximately 25-30% weightage.',
      'Pharmaceutics & Hospital Pharmacy accounts for 25-30% weightage.',
      'Nepal Drug Act 2035, NPC Act 2057 & Jurisprudence accounts for 10-15% weightage.',
      'Exam Duration: 120 Minutes (2 hours) at designated CBT centers in Kathmandu.'
    ],
    tableData: {
      headers: ['Subject Domain', 'Typical Questions', 'Priority Level', 'Focus Area'],
      rows: [
        ['Pharmacology & Toxicology', '28 - 32', 'Critical (Highest)', 'MOA, Drug of Choice, Adverse Effects, Antidotes'],
        ['Pharmaceutics & Dispensing', '25 - 30', 'Critical', 'Tablets, Injections, Sterilization, Posology'],
        ['Pharmacy Jurisprudence & Nepal Laws', '12 - 15', 'High', 'Drug Act 2035, NPC Act 2057, Narcotic Act 2033'],
        ['Pharmacognosy & Traditional Herbs', '10 - 12', 'Medium', 'Alkaloid tests, Glycosides, Himalayan herbs (Yarsagumba, Chiraito)'],
        ['Pharmaceutical Chemistry & Analysis', '8 - 10', 'Medium', 'Functional groups, Assay methods, Chromatography'],
        ['Hospital & Clinical Pharmacy', '10 - 12', 'High', 'Prescription reading, TDM, ADR reporting in Nepal']
      ]
    },
    fileSize: '1.2 MB PDF',
    downloadFilename: 'ANPEP_NPC_License_Exam_Blueprint_Guide.pdf',
    lastUpdated: 'Updated for 2082/2083 Session',
    isHighYield: true
  },
  {
    id: 'note-02',
    title: 'Emergency Antidotes & Drug Toxicity Master Reference',
    subject: 'Pharmacology',
    readTime: '5 min read',
    summary: 'High-yield table of toxicities, adverse manifestations, and specific therapeutic antidotes frequently tested in Loksewa and NPC.',
    keyPoints: [
      'Paracetamol Toxicity: N-Acetylcysteine (NAC) within 8-10 hours.',
      'Opioid Overdose: Naloxone (Pure competitive opioid antagonist).',
      'Benzodiazepine Overdose: Flumazenil (Caution: can trigger seizures in chronic users).',
      'Organophosphate Poisoning: Atropine (reverses muscarinic symptoms) + Pralidoxime (2-PAM, oxime to reactivate AChE).',
      'Heparin Induced Bleeding: Protamine Sulfate.',
      'Warfarin Induced Bleeding: Vitamin K1 (Phytonadione) and Fresh Frozen Plasma (FFP).',
      'Digoxin Toxicity: Digoxin-specific Fab antibodies (Digibind).'
    ],
    tableData: {
      headers: ['Poison / Toxic Agent', 'Specific Antidote', 'Mechanism of Antidote'],
      rows: [
        ['Paracetamol (Acetaminophen)', 'N-Acetylcysteine (NAC)', 'Restores hepatic glutathione to neutralize toxic NAPQI'],
        ['Opioids (Morphine, Heroin)', 'Naloxone', 'Competitive μ, κ, δ opioid receptor antagonist'],
        ['Benzodiazepines (Diazepam)', 'Flumazenil', 'Competitive GABAA receptor antagonist'],
        ['Organophosphates (Malathion)', 'Atropine + Pralidoxime', 'Muscarinic antagonist + Cholinesterase reactivator'],
        ['Heparin', 'Protamine Sulfate', 'Chemical neutralization via ionic binding (basic protamine + acidic heparin)'],
        ['Warfarin', 'Vitamin K1 / FFP', 'Promotes hepatic synthesis of factors II, VII, IX, X'],
        ['Methanol / Ethylene glycol', 'Fomepizole / Ethanol', 'Inhibits alcohol dehydrogenase (ADH)'],
        ['Iron Poisoning', 'Deferoxamine', 'Chelates free ferric iron forming ferrioxamine complex'],
        ['Lead / Heavy Metals', 'Calcium Disodium EDTA / Dimercaprol', 'Heavy metal chelation for urinary clearance']
      ]
    },
    fileSize: '880 KB PDF',
    downloadFilename: 'ANPEP_Toxicology_Antidotes_Master_Chart.pdf',
    lastUpdated: 'Revised 2082 BS',
    isHighYield: true
  },
  {
    id: 'note-03',
    title: 'Nepal Drug Act 2035 & Regulatory Bodies Overview',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    readTime: '8 min read',
    summary: 'A concise summary of key provisions, regulatory authority (DDA), national drug policies, and penal consequences in Nepal pharmaceutical practice.',
    keyPoints: [
      'Drug Act 2035 was enacted to ensure the availability of safe, efficacious, and quality medications in Nepal.',
      'Department of Drug Administration (DDA / औषधि व्यवस्था विभाग) established in 2036 BS as the executive authority under MoHP.',
      'National Medicines Laboratory (NML) serves as the primary analytical testing wing.',
      'Pharmacy registration types: Type Ka (Importer/Manufacturer), Type Kha (Wholesale Distributor), Type Ga (Retail Dispensing Chemist).',
      'Sale of Category Ka (Narcotics) without prescription incurs severe penalties under the Narcotic Drugs Control Act 2033 BS.',
      'Nepal Pharmacy Council Act 2057 established the statutory council for registering qualified Pharmacy Assistants and Pharmacists.'
    ],
    tableData: {
      headers: ['Statutory Act in Nepal', 'Bikram Sambat Year', 'Key Mandate & Authority'],
      rows: [
        ['Drug Act', '2035 B.S. (1978 A.D.)', 'Production, import, export, storage, and sales of drugs'],
        ['Narcotic Drugs Control Act', '2033 B.S. (1976 A.D.)', 'Stringent control on illicit narcotic drug manufacture & trade'],
        ['Nepal Pharmacy Council Act', '2057 B.S. (2000 A.D.)', 'Licensing and registration of Pharmacists and Pharmacy Assistants'],
        ['National Drug Policy', '2051 B.S. (1995 A.D.)', 'Promote domestic pharmaceutical manufacturing and rational use'],
        ['Consumer Protection Act', '2075 B.S. (2018 A.D.)', 'Protection against adulteration, over-pricing and fake products']
      ]
    },
    fileSize: '1.5 MB PDF',
    downloadFilename: 'ANPEP_Nepal_Drug_Act_2035_Summary.pdf',
    lastUpdated: 'Updated with latest regulations',
    isHighYield: true
  },
  {
    id: 'note-04',
    title: 'Biological Indicators for Sterilization Techniques',
    subject: 'Pharmaceutics',
    readTime: '4 min read',
    summary: 'High-frequency exam reference for official pharmacopoeial biological indicator organisms used across all sterilization methods.',
    keyPoints: [
      'Sterilization requires validation using resistant bacterial endospores.',
      'Autoclave (Moist Heat): Geobacillus stearothermophilus spores.',
      'Hot Air Oven (Dry Heat): Bacillus subtilis var. niger (Bacillus atrophaeus).',
      'Ionizing Radiation (Gamma / Cobalt 60): Bacillus pumilus.',
      'Ethylene Oxide Gas (EtO): Bacillus atrophaeus.',
      'Membrane Filtration (0.22 μm): Brevundimonas diminuta (Pseudomonas diminuta).'
    ],
    tableData: {
      headers: ['Sterilization Method', 'Standard Conditions', 'Biological Indicator Organism'],
      rows: [
        ['Moist Heat (Autoclave)', '121°C, 15 psi for 15-20 min', 'Geobacillus stearothermophilus (ATCC 7953)'],
        ['Dry Heat (Hot Air Oven)', '160°C for 2 hours / 170°C for 1 hr', 'Bacillus subtilis / Bacillus atrophaeus'],
        ['Radiation (Gamma rays)', '25 kGy (2.5 Mrad)', 'Bacillus pumilus (ATCC 27142)'],
        ['Gaseous (Ethylene Oxide)', '450-1200 mg/L at 29-65°C', 'Bacillus atrophaeus (ATCC 9372)'],
        ['Membrane Filtration', '0.22 micron pore size', 'Brevundimonas diminuta']
      ]
    },
    fileSize: '650 KB PDF',
    downloadFilename: 'ANPEP_Sterilization_Biological_Indicators.pdf',
    lastUpdated: '2082 BS Edition',
    isHighYield: false
  }
];
