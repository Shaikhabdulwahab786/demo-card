export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  description: string;

  features: {
    icon: string;
    title: string;
    description: string;
  }[];

  nutrition: {
    servingSize: string;
    calories: number;
    totalFat: string;
    sodium: string;
    totalCarbs: string;
    sugar: string;
    protein: string;
    vitamins: string[];
    minerals: string[];
  };

  traceability: {
    origin: string;
    harvestDate: string;
    batchNumber: string;
    certifications: string[];
    beekeepers?: string; // optional, for honey
    processors?: string; // optional, for other products
    processing: string;
    packaging: string;
  };

  reviews: {
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }[];

  usage: string[];

  sustainability: {
    carbonFootprint: string;
    packaging: string;
    beeWelfare?: string; // optional, for honey
    environmentalImpact: string;
  };
}
