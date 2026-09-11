import { MnemonicCard } from '../types';

export const mnemonicsData: MnemonicCard[] = [
  {
    id: 'mnem-01',
    title: 'First-Line Anti-Tubercular Drugs',
    subject: 'Pharmacology',
    mnemonic: 'R I P E',
    breakdown: [
      { letter: 'R', standsFor: 'Rifampicin', note: 'RNA polymerase inhibitor; causes orange-red discoloration of body secretions.' },
      { letter: 'I', standsFor: 'Isoniazid (INH)', note: 'Inhibits mycolic acid synthesis; causes peripheral neuropathy (co-administer Pyridoxine / Vit B6).' },
      { letter: 'P', standsFor: 'Pyrazinamide', note: 'Active in acidic intracellular pH; causes hyperuricemia (gout) and hepatotoxicity.' },
      { letter: 'E', standsFor: 'Ethambutol', note: 'Inhibits arabinosyl transferase; causes retrobulbar optic neuritis (red-green color blindness).' }
    ],
    clinicalSignificance: 'Mandatory knowledge for NPC License and Loksewa exams. Note: Ethambutol is bacteriostatic, whereas R, I, and P are bactericidal.',
    relatedExamTopic: 'Chemotherapy of Tuberculosis & WHO/Nepal DOTS regimen',
    tags: ['Anti-TB', 'Pharmacology', 'High-Yield']
  },
  {
    id: 'mnem-02',
    title: 'CYP450 Enzyme Inducers (Decrease Drug Levels)',
    subject: 'Pharmacology',
    mnemonic: 'C R A P  G P S',
    breakdown: [
      { letter: 'C', standsFor: 'Carbamazepine', note: 'Antiepileptic; also an auto-inducer' },
      { letter: 'R', standsFor: 'Rifampicin', note: 'Potent inducer of CYP3A4 and P-glycoprotein' },
      { letter: 'A', standsFor: 'Alcohol (Chronic)', note: 'Chronic alcohol use induces CYP2E1' },
      { letter: 'P', standsFor: 'Phenytoin', note: 'Antiepileptic with zero-order kinetics at high doses' },
      { letter: 'G', standsFor: 'Griseofulvin', note: 'Antifungal agent' },
      { letter: 'P', standsFor: 'Phenobarbitone', note: 'Barbiturate enzyme inducer' },
      { letter: 'S', standsFor: 'Smoking / St. John’s Wort', note: 'Polycyclic hydrocarbons in cigarette smoke' }
    ],
    clinicalSignificance: 'Co-administration of inducers with oral contraceptives or Warfarin can lead to therapeutic failure (unwanted pregnancy or thrombosis).',
    relatedExamTopic: 'Drug-Drug Interactions & Pharmacokinetics',
    tags: ['CYP450', 'Metabolism', 'Frequent NPC Question']
  },
  {
    id: 'mnem-03',
    title: 'Alkaloid Chemical Identification Reagents & Colors',
    subject: 'Pharmacognosy',
    mnemonic: 'M-C, W-B, H-Y, D-O',
    breakdown: [
      { letter: 'M-C', standsFor: 'Mayer’s Reagent → Cream / White ppt', note: 'Potassium Mercuric Iodide solution' },
      { letter: 'W-B', standsFor: 'Wagner’s Reagent → Brown / Red-brown ppt', note: 'Iodine in Potassium Iodide solution' },
      { letter: 'H-Y', standsFor: 'Hager’s Reagent → Yellow crystalline ppt', note: 'Saturated Picric Acid solution' },
      { letter: 'D-O', standsFor: 'Dragendorff’s Reagent → Orange-Red ppt', note: 'Potassium Bismuth Iodide solution' }
    ],
    clinicalSignificance: 'Appears in virtually every single Nepal Pharmacy Council Licensure and Loksewa Assistant exam without fail.',
    relatedExamTopic: 'Pharmacognosy Qualitative Chemical Analysis',
    tags: ['Pharmacognosy', 'Lab Tests', 'Reagents']
  },
  {
    id: 'mnem-04',
    title: 'Common Tablet Defects & Root Causes',
    subject: 'Pharmaceutics',
    mnemonic: 'C L A M P S',
    breakdown: [
      { letter: 'C', standsFor: 'Capping', note: 'Separation of top/bottom crowns due to air entrapment or excess fines.' },
      { letter: 'L', standsFor: 'Lamination', note: 'Separation of tablet into two or more distinct horizontal layers.' },
      { letter: 'A', standsFor: 'Attrition / Chipping', note: 'Breaking of tablet edges during handling/coating.' },
      { letter: 'M', standsFor: 'Mottling', note: 'Unequal distribution of color on the tablet surface.' },
      { letter: 'P', standsFor: 'Picking', note: 'Surface material adhering to and being removed from punch face.' },
      { letter: 'S', standsFor: 'Sticking', note: 'Granulation adhering to the die wall.' }
    ],
    clinicalSignificance: 'Industrial pharmacy standard questions for QA/QC and licensing tests.',
    relatedExamTopic: 'Solid Dosage Forms & Industrial Tablet Compression',
    tags: ['Pharmaceutics', 'Manufacturing', 'Defects']
  },
  {
    id: 'mnem-05',
    title: 'Biopharmaceutics Classification System (BCS)',
    subject: 'Biopharmaceutics & Pharmacokinetics',
    mnemonic: 'S - P : (H/H) (L/H) (H/L) (L/L)',
    breakdown: [
      { letter: 'Class I', standsFor: 'High Solubility, High Permeability', note: 'Example: Propranolol, Metoprolol, Paracetamol (Easiest to formulate)' },
      { letter: 'Class II', standsFor: 'Low Solubility, High Permeability', note: 'Example: Carbamazepine, Ketoconazole, Ibuprofen (Dissolution rate-limited)' },
      { letter: 'Class III', standsFor: 'High Solubility, Low Permeability', note: 'Example: Atenolol, Ranitidine, Cimetidine (Permeation rate-limited)' },
      { letter: 'Class IV', standsFor: 'Low Solubility, Low Permeability', note: 'Example: Hydrochlorothiazide, Furosemide, Taxol (Difficult bioavailability)' }
    ],
    clinicalSignificance: 'Determines bio-waiver criteria and formulation strategy.',
    relatedExamTopic: 'Bioavailability, Dissolution Testing & Bio-equivalence',
    tags: ['Biopharmaceutics', 'Formulation', 'BCS']
  },
  {
    id: 'mnem-06',
    title: 'Nepal Drug Act 2035 Schedules & Categorization',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    mnemonic: 'K A - K H A - G A',
    breakdown: [
      { letter: 'Category Ka (क)', standsFor: 'Narcotics & Psychotropics', note: 'Class A: Highly controlled, separate poison cupboard, double lock, prescription retained.' },
      { letter: 'Category Kha (ख)', standsFor: 'Antibiotics & Hormones', note: 'Class B: Prescription-only medications (POM), valid doctor prescription mandatory.' },
      { letter: 'Category Ga (ग)', standsFor: 'OTC & General Remedies', note: 'Class C: Over-the-counter drugs, antacids, vitamins, paracetamol.' }
    ],
    clinicalSignificance: 'Nepal-specific core legal classification enforced by Department of Drug Administration (DDA).',
    relatedExamTopic: 'Drug Act 2035 & Retail Pharmacy Dispensing Rules',
    tags: ['Nepal Law', 'Drug Act 2035', 'Jurisprudence']
  }
];
