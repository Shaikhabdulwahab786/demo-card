export const productData = [{
  id: 1,
  name: "Hedamo Organic Honey",
  shortDescription: "Pure wild honey harvested from organic farms",
  image: "/src/assets/honey-jar.jpg",
  category: "Food",
  price: "$24.99",
  rating: 4.8,
  reviewCount: 127,
  description: "Experience the pure essence of nature with our Hedamo Organic Honey. Carefully harvested from pristine organic farms, this golden treasure captures the natural sweetness and nutritional benefits that only unprocessed honey can provide.",
  
  features: [
    {
      icon: "🌿",
      title: "100% Organic",
      description: "Certified organic honey from pesticide-free farms"
    },
    {
      icon: "🍯", 
      title: "Unprocessed",
      description: "Raw honey with all natural enzymes preserved"
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Sustainably sourced with environmental responsibility"
    },
    {
      icon: "⚡",
      title: "Nutrient-Rich",
      description: "Packed with antioxidants and natural minerals"
    }
  ],

  nutrition: {
    servingSize: "1 tbsp (21g)",
    calories: 64,
    totalFat: "0g",
    sodium: "1mg", 
    totalCarbs: "17g",
    sugar: "16g",
    protein: "0.1g",
    vitamins: ["Vitamin C", "Vitamin B6", "Riboflavin", "Niacin"],
    minerals: ["Calcium", "Iron", "Zinc", "Potassium", "Phosphorus", "Magnesium"]
  },

  traceability: {
    origin: "Organic Farms, Northern California",
    harvestDate: "September 2024",
    batchNumber: "HDM-2024-09-15",
    certifications: ["USDA Organic", "Non-GMO Project Verified", "Fair Trade"],
    beekeepers: "Mountain Valley Apiaries",
    processing: "Cold extracted, never heated above 95°F",
    packaging: "Glass jars with biodegradable labels"
  },

  reviews: [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      comment: "The best honey I've ever tasted! You can really taste the difference in quality. Perfect for my morning tea."
    },
    {
      id: 2,
      author: "Michael R.",
      rating: 5,
      date: "2024-01-10", 
      comment: "Amazing honey with great traceability. Love knowing exactly where it comes from. The flavor is incredible."
    },
    {
      id: 3,
      author: "Emily L.",
      rating: 4,
      date: "2024-01-08",
      comment: "High quality organic honey. Great for baking and cooking. The packaging is beautiful too!"
    }
  ],

  usage: [
    "Perfect sweetener for tea and coffee",
    "Natural energy boost for workouts", 
    "Excellent for baking and cooking",
    "Great for skincare and face masks",
    "Soothing for sore throats"
  ],

  sustainability: {
    carbonFootprint: "Low - Local sourcing reduces transportation",
    packaging: "Recyclable glass jar with biodegradable labels",
    beeWelfare: "Ethical beekeeping practices with bee-first approach",
    environmentalImpact: "Supports local ecosystem and pollinator health"
  }
},
{
    id: 2,
    name: "Golden Valley Almond Butter",
    shortDescription: "Creamy, roasted almond butter with no additives",
    image: "https://images.pexels.com/photos/5060454/pexels-photo-5060454.jpeg",
    category: "Food",
    price: "$18.99",
    rating: 4.7,
    reviewCount: 98,
    description: "Indulge in our Golden Valley Almond Butter made from 100% roasted almonds. Smooth, creamy, and packed with protein, perfect for spreading, baking, or smoothies.",
    features: [
      { icon: "🌰", title: "All-Natural", description: "No preservatives or additives" },
      { icon: "💪", title: "Protein-Rich", description: "High in plant-based protein" },
      { icon: "🌱", title: "Vegan", description: "100% plant-based ingredients" },
      { icon: "♻️", title: "Eco-Friendly", description: "Sustainably sourced almonds" }
    ],
    nutrition: { servingSize: "2 tbsp (32g)", calories: 190, totalFat: "16g", sodium: "0mg", totalCarbs: "6g", sugar: "1g", protein: "7g", vitamins: ["Vitamin E", "Vitamin B2"], minerals: ["Magnesium", "Calcium", "Iron", "Zinc"] },
    traceability: { origin: "California, USA", harvestDate: "August 2024", batchNumber: "GVAB-2024-08-10", certifications: ["USDA Organic", "Non-GMO Project Verified"], processors: "Golden Valley Nut Co.", processing: "Cold-pressed, no additives", packaging: "Glass jars with biodegradable labels" },
    reviews: [
      { id: 1, author: "Laura P.", rating: 5, date: "2024-02-01", comment: "Smooth, creamy, and tastes amazing! Perfect on toast." },
      { id: 2, author: "James K.", rating: 4, date: "2024-01-20", comment: "Great almond flavor, healthy and natural." },
      { id: 3, author: "Mia S.", rating: 5, date: "2024-01-18", comment: "Love it for my morning smoothie! Highly recommend." }
    ],
    usage: ["Spread on toast or crackers", "Add to smoothies or shakes", "Baking ingredient for cookies or cakes", "Healthy snack with fruits", "Energy boost during workouts"],
    sustainability: { carbonFootprint: "Low - Local sourcing reduces transportation", packaging: "Recyclable glass jar with biodegradable labels", environmentalImpact: "Supports sustainable almond farming" }
  },

  {
    id: 3,
    name: "Pure Leaf Green Tea",
    shortDescription: "Refreshing organic green tea leaves from Japan",
    image: "https://images.pexels.com/photos/229493/pexels-photo-229493.jpeg",
    category: "Beverages",
    price: "$14.50",
    rating: 4.9,
    reviewCount: 215,
    description: "Savor the delicate taste of Pure Leaf Green Tea. Sourced from organic Japanese farms, it offers a fresh aroma and natural antioxidants in every cup.",
    features: [
      { icon: "🍃", title: "100% Organic", description: "Grown without chemicals or pesticides" },
      { icon: "💧", title: "Refreshing Flavor", description: "Light, crisp taste for any time of day" },
      { icon: "🌿", title: "Antioxidant-Rich", description: "Supports health and immunity" },
      { icon: "♻️", title: "Sustainable Farming", description: "Eco-conscious cultivation practices" }
    ],
    nutrition: { servingSize: "1 cup (240ml)", calories: 0, totalFat: "0g", sodium: "0mg", totalCarbs: "0g", sugar: "0g", protein: "0g", vitamins: ["Vitamin C", "Vitamin K"], minerals: ["Magnesium", "Potassium", "Calcium"] },
    traceability: { origin: "Shizuoka, Japan", harvestDate: "March 2024", batchNumber: "PLGT-2024-03-05", certifications: ["USDA Organic", "Fair Trade"], processors: "Pure Leaf Tea Co.", processing: "Air-dried, minimally processed", packaging: "Biodegradable tea bags and recyclable box" },
    reviews: [
      { id: 1, author: "Tom H.", rating: 5, date: "2024-03-10", comment: "Super fresh and flavorful. Love the subtle aroma!" },
      { id: 2, author: "Anna W.", rating: 5, date: "2024-02-28", comment: "High-quality tea, perfect for daily consumption." },
      { id: 3, author: "Liam R.", rating: 4, date: "2024-02-25", comment: "Refreshing and healthy, worth every penny." }
    ],
    usage: ["Brew hot for a calming drink", "Use cold for iced green tea", "Add honey or lemon for flavor", "In smoothies for an antioxidant boost", "Perfect for meditation or relaxation"],
    sustainability: { carbonFootprint: "Low - Organic farming reduces emissions", packaging: "Recyclable box with biodegradable tea bags", environmentalImpact: "Supports organic and eco-friendly farming" }
  },

  {
    id: 4,
    name: "Nature's Glow Coconut Oil",
    shortDescription: "Cold-pressed organic virgin coconut oil",
    image: "https://images.pexels.com/photos/7953254/pexels-photo-7953254.jpeg",
    category: "Food & Health",
    price: "$12.99",
    rating: 4.6,
    reviewCount: 142,
    description: "Nature's Glow Coconut Oil is perfect for cooking, skincare, and haircare. 100% organic, cold-pressed to retain natural nutrients and aroma.",
    features: [
      { icon: "🥥", title: "Virgin Oil", description: "Cold-pressed for maximum nutrients" },
      { icon: "🌿", title: "Organic", description: "No chemicals or additives" },
      { icon: "💆", title: "Multi-Purpose", description: "For cooking, skin, and hair" },
      { icon: "♻️", title: "Eco-Friendly", description: "Sustainably sourced coconuts" }
    ],
    nutrition: { servingSize: "1 tbsp (14g)", calories: 120, totalFat: "14g", sodium: "0mg", totalCarbs: "0g", sugar: "0g", protein: "0g", vitamins: ["Vitamin E", "Vitamin K"], minerals: ["Iron", "Magnesium", "Potassium"] },
    traceability: { origin: "Kerala, India", harvestDate: "June 2024", batchNumber: "NGCO-2024-06-12", certifications: ["USDA Organic", "Non-GMO Project Verified"], processors: "Nature's Glow Co.", processing: "Cold-pressed, unrefined", packaging: "Glass jars with biodegradable labels" },
    reviews: [
      { id: 1, author: "Priya S.", rating: 5, date: "2024-06-20", comment: "Perfect for my hair and skin. Smells amazing!" },
      { id: 2, author: "Rohan M.", rating: 4, date: "2024-06-18", comment: "Good quality coconut oil. Great for cooking too." },
      { id: 3, author: "Sana K.", rating: 5, date: "2024-06-15", comment: "Love it! Multipurpose and natural." }
    ],
    usage: ["Cooking and frying", "Skin moisturizer", "Hair mask or scalp treatment", "Oil pulling for oral health", "DIY natural beauty recipes"],
    sustainability: { carbonFootprint: "Low - Local sourcing and minimal processing", packaging: "Recyclable glass jars with eco-friendly labels", environmentalImpact: "Supports ethical farming and local communities" }
  },

  {
    id: 5,
    name: "EverGreen Quinoa",
    shortDescription: "Organic white and red quinoa mix",
    image: "https://images.pexels.com/photos/1640767/pexels-photo-1640767.jpeg",
    category: "Food",
    price: "$10.99",
    rating: 4.8,
    reviewCount: 80,
    description: "EverGreen Quinoa is a nutrient-dense superfood, perfect for salads, bowls, and healthy meals. Certified organic and naturally gluten-free.",
    features: [
      { icon: "🌾", title: "Organic", description: "Grown without pesticides" },
      { icon: "💪", title: "Protein-Rich", description: "Complete plant-based protein source" },
      { icon: "🌱", title: "Gluten-Free", description: "Safe for all diets" },
      { icon: "♻️", title: "Sustainable", description: "Environmentally responsible farming" }
    ],
    nutrition: { servingSize: "1/4 cup (43g)", calories: 160, totalFat: "2.5g", sodium: "0mg", totalCarbs: "29g", sugar: "0g", protein: "6g", vitamins: ["Vitamin B1", "Vitamin B2", "Vitamin B6"], minerals: ["Magnesium", "Iron", "Zinc", "Phosphorus"] },
    traceability: { origin: "Andean Highlands, Peru", harvestDate: "May 2024", batchNumber: "EGQ-2024-05-08", certifications: ["USDA Organic", "Fair Trade"], processors: "EverGreen Foods Co.", processing: "Sun-dried and minimally processed", packaging: "Biodegradable bag" },
    reviews: [
      { id: 1, author: "Lucas T.", rating: 5, date: "2024-05-22", comment: "Quinoa cooks perfectly, tastes fresh, and is super healthy!" },
      { id: 2, author: "Nina R.", rating: 4, date: "2024-05-20", comment: "Love this mix for salads and bowls." },
      { id: 3, author: "Ethan P.", rating: 5, date: "2024-05-18", comment: "Great quality quinoa with a rich nutty flavor." }
    ],
    usage: ["Cook as a side dish or salad base", "Add to soups or stews", "Make breakfast porridge or bowls", "Include in meal prep for protein boost", "Use in gluten-free recipes"],
    sustainability: { carbonFootprint: "Low - Local Andean sourcing", packaging: "Compostable bag with eco-friendly inks", environmentalImpact: "Supports traditional farming and biodiversity" }
  },

  {
    id: 6,
    name: "Sunshine Turmeric Powder",
    shortDescription: "Organic golden turmeric with high curcumin content",
    image: "https://images.pexels.com/photos/27730600/pexels-photo-27730600.jpeg",
    category: "Spices & Supplements",
    price: "$9.50",
    rating: 4.9,
    reviewCount: 130,
    description: "Sunshine Turmeric Powder offers premium quality turmeric sourced from organic farms. Rich in curcumin, perfect for cooking, teas, and wellness drinks.",
    features: [
      { icon: "🌿", title: "100% Organic", description: "Chemical-free turmeric roots" },
      { icon: "💛", title: "High Curcumin", description: "Supports immunity and inflammation" },
      { icon: "🍵", title: "Versatile Use", description: "Ideal for cooking, drinks, and wellness remedies" },
      { icon: "♻️", title: "Eco-Friendly", description: "Sustainably grown and harvested" }
    ],
    nutrition: { servingSize: "1 tsp (3g)", calories: 9, totalFat: "0.3g", sodium: "0mg", totalCarbs: "1.4g", sugar: "0g", protein: "0.3g", vitamins: ["Vitamin C", "Vitamin B6"], minerals: ["Iron", "Potassium", "Manganese"] },
    traceability: { origin: "Kerala, India", harvestDate: "July 2024", batchNumber: "STP-2024-07-05", certifications: ["USDA Organic", "Non-GMO Project Verified"], processors: "Sunshine Spice Co.", processing: "Sun-dried, finely ground", packaging: "Glass jar with biodegradable label" },
    reviews: [
      { id: 1, author: "Aisha K.", rating: 5, date: "2024-07-12", comment: "High-quality turmeric with strong aroma and taste." },
      { id: 2, author: "Daniel W.", rating: 4, date: "2024-07-10", comment: "Perfect for golden milk and curries." },
      { id: 3, author: "Sophia L.", rating: 5, date: "2024-07-08", comment: "Love it! Organic and fresh." }
    ],
    usage: ["Add to curries and soups", "Mix in golden milk or smoothies", "Use for wellness teas", "DIY skincare masks", "Include in seasoning blends"],
    sustainability: { carbonFootprint: "Low - Local organic farms", packaging: "Recyclable glass jar", environmentalImpact: "Supports sustainable turmeric farming" }
  }
]