export type DogStatus = "Reviewing" | "Funding" | "In treatment" | "Improving" | "Completed" | "Memorial";

export type BudgetItem = {
  title: string;
  description: string;
  amountCents: number;
};

export type TreatmentUpdate = {
  title: string;
  date: string;
  content: string;
  type: "medical" | "funding" | "milestone";
};

export type Dog = {
  id: string;
  name: string;
  slug: string;
  breed: string;
  age: string;
  sex: string;
  location: string;
  country: string;
  diseaseType: string;
  diagnosisSummary: string;
  story: string;
  treatmentPlan: string;
  fundingGoalCents: number;
  amountRaisedCents: number;
  currency: "USD";
  status: DogStatus;
  urgency: "Critical" | "High" | "Moderate";
  coverImageUrl: string;
  diagnosisFiles: string[];
  budgetItems: BudgetItem[];
  updates: TreatmentUpdate[];
  supporters: string[];
};

export const dogs: Dog[] = [
  {
    id: "0c34b53a-5ddf-49b8-b32e-cf7a1b38a1f1",
    name: "Max",
    slug: "max-golden-retriever-lymphoma",
    breed: "Golden Retriever",
    age: "7 years",
    sex: "Male",
    location: "Hong Kong",
    country: "Hong Kong",
    diseaseType: "Lymphoma",
    diagnosisSummary:
      "Veterinary records indicate lymphoma with additional monitoring recommended before each care phase.",
    story:
      "Max is a calm 7-year-old Golden Retriever in Hong Kong. His family is seeking support for veterinary-supervised treatment and case-based personalized protein care planning.",
    treatmentPlan:
      "The published plan supports diagnostics, treatment preparation, monitoring visits, and follow-up care under licensed veterinary guidance.",
    fundingGoalCents: 1800000,
    amountRaisedCents: 1145000,
    currency: "USD",
    status: "Funding",
    urgency: "Critical",
    coverImageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=85",
    diagnosisFiles: ["Oncology consultation summary", "Bloodwork panel", "Imaging report"],
    budgetItems: [
      {
        title: "Diagnostics and staging",
        description: "Bloodwork, imaging review, pathology consultation, and case documentation.",
        amountCents: 420000
      },
      {
        title: "Treatment support preparation",
        description: "Case-based care plan materials and veterinary-supervised preparation.",
        amountCents: 760000
      },
      {
        title: "Monitoring and follow-up",
        description: "Follow-up exams, lab monitoring, and owner update documentation.",
        amountCents: 620000
      }
    ],
    updates: [
      {
        title: "Case accepted for publication",
        date: "2026-05-28",
        type: "milestone",
        content: "Owner consent and veterinary diagnosis materials were reviewed for the public campaign."
      },
      {
        title: "Initial diagnostics funded",
        date: "2026-06-04",
        type: "funding",
        content: "Early donations have covered the first diagnostic review and baseline bloodwork support."
      }
    ],
    supporters: ["Wendy C.", "Anonymous", "Mika L.", "The Chen Family"]
  },
  {
    id: "8a678ed0-9b1d-4986-857d-a4e1a5bf61df",
    name: "Luna",
    slug: "luna-shiba-kidney-failure",
    breed: "Shiba Inu",
    age: "5 years",
    sex: "Female",
    location: "Tokyo, Japan",
    country: "Japan",
    diseaseType: "Kidney failure",
    diagnosisSummary:
      "Luna has chronic kidney disease requiring continued monitoring, medication support, and nutritional management.",
    story:
      "Luna still greets clinic staff with a small tail wag. Her campaign helps fund a veterinary-supervised care plan and recurring monitoring.",
    treatmentPlan:
      "Funds support lab testing, renal care visits, prescription nutrition, medication support, and owner-facing progress updates.",
    fundingGoalCents: 950000,
    amountRaisedCents: 285000,
    currency: "USD",
    status: "In treatment",
    urgency: "High",
    coverImageUrl:
      "https://images.unsplash.com/photo-1596273312170-9e8a7c0b536a?auto=format&fit=crop&w=1400&q=85",
    diagnosisFiles: ["Renal panel", "Urinalysis summary", "Medication plan"],
    budgetItems: [
      {
        title: "Renal monitoring",
        description: "Recurring bloodwork and urinalysis for care plan adjustment.",
        amountCents: 320000
      },
      {
        title: "Medication and nutrition",
        description: "Prescription nutrition and medication support as directed by the veterinarian.",
        amountCents: 410000
      },
      {
        title: "Clinic follow-up",
        description: "Follow-up exams, owner education, and treatment update documentation.",
        amountCents: 220000
      }
    ],
    updates: [
      {
        title: "Monitoring schedule published",
        date: "2026-06-01",
        type: "medical",
        content: "The clinic provided a 6-week monitoring cadence for Luna's public case plan."
      }
    ],
    supporters: ["Anonymous", "Kai T.", "Nora P."]
  },
  {
    id: "941b5b7b-1a0c-407b-9c78-1f2e37f3e7f4",
    name: "Bella",
    slug: "bella-mixed-breed-heart-failure",
    breed: "Mixed breed",
    age: "9 years",
    sex: "Female",
    location: "Austin, United States",
    country: "United States",
    diseaseType: "Heart failure",
    diagnosisSummary:
      "Bella has advanced cardiac disease and needs continued cardiology follow-up, imaging, and medication support.",
    story:
      "Bella was adopted as a senior dog and remains deeply bonded to her family. Her campaign focuses on steady care support, not guaranteed outcomes.",
    treatmentPlan:
      "The care budget supports cardiology appointments, echocardiography, medication, and documented quality-of-life monitoring.",
    fundingGoalCents: 1200000,
    amountRaisedCents: 905000,
    currency: "USD",
    status: "Improving",
    urgency: "Moderate",
    coverImageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=85",
    diagnosisFiles: ["Cardiology report", "Echocardiogram summary", "Medication history"],
    budgetItems: [
      {
        title: "Cardiology review",
        description: "Specialist visits and echocardiogram review.",
        amountCents: 480000
      },
      {
        title: "Medication support",
        description: "Veterinarian-prescribed cardiac medication support.",
        amountCents: 420000
      },
      {
        title: "Quality-of-life monitoring",
        description: "Follow-up checks, caregiver guidance, and progress updates.",
        amountCents: 300000
      }
    ],
    updates: [
      {
        title: "Medication plan adjusted",
        date: "2026-05-30",
        type: "medical",
        content: "Bella's veterinarian adjusted her medication plan after a scheduled cardiology review."
      },
      {
        title: "New update from family",
        date: "2026-06-08",
        type: "milestone",
        content: "Bella is resting more comfortably at home and will continue scheduled monitoring."
      }
    ],
    supporters: ["Maria G.", "Anonymous", "Owen R.", "Priya S.", "James K."]
  }
];

export function getDogBySlug(slug: string) {
  return dogs.find((dog) => dog.slug === slug);
}

export const filterOptions = {
  diseaseTypes: Array.from(new Set(dogs.map((dog) => dog.diseaseType))),
  countries: Array.from(new Set(dogs.map((dog) => dog.country))),
  urgencies: Array.from(new Set(dogs.map((dog) => dog.urgency))),
  statuses: Array.from(new Set(dogs.map((dog) => dog.status)))
};
