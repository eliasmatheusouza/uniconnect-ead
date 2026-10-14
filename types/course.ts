export type CourseCategory = 
  | 'todos'
  | 'tecnicos'
  | 'competencia'
  | 'sequenciais'
  | 'eja'
  | 'idiomas';

export interface CourseModule {
  title: string;
  lessonsCount: number;
  workloadHours: number;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'tecnicos' | 'competencia' | 'sequenciais' | 'eja' | 'idiomas';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  workload: number;
  modulesCount: number;
  cftRegistration: boolean;
  registrationCouncil?: string; // CFT, CRT, CRA, etc.
  originalPrice: number;
  currentPrice: number;
  installmentCount: number;
  installmentPrice: number;
  discountBadge: string;
  diplomaDelivery?: string;
  badge?: string;
  image: string;
  featured?: boolean;
  modules: CourseModule[];
  careerProspects: string[];
  prerequisites: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  courseInterest?: string;
  notes?: string;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  paymentMethod: 'pix' | 'credit_card' | 'boleto';
  installments?: number;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvv?: string;
}
