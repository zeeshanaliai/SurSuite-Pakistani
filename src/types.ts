export type MaterialType = '316L Stainless Steel' | 'High Carbon Steel' | 'Titanium Alloy';

export type CategoryType = 
  | 'Cutting & Dissecting' 
  | 'Grasping & Holding' 
  | 'Clamping & Occluding' 
  | 'Retracting & Exposing';

export type DisciplineType = 'General Surgery' | 'Dental' | 'Orthopedic' | 'Ophthalmic';

export interface ProductSpecification {
  instrumentType: string;
  material: string;
  profile: string;
  finish: string;
  overallLength: string;
  usage: string;
  workingEnd: string;
  sterilization: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  currency: string;
  minOrderQuantity: number;
  material: MaterialType;
  materialTag: string;
  category: CategoryType;
  discipline: DisciplineType;
  dimensions: string;
  image: string;
  thumbnails: string[];
  specifications: ProductSpecification;
  isIsoCertified: boolean;
  isAutoclaveSafe: boolean;
  leadTime: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteRequest {
  productId?: string;
  productName?: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  quantity: number;
  country: string;
  notes: string;
}
