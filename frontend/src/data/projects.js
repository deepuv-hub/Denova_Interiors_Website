export const projects = [
  {
    id: "kitchen-modern-white-1",
    type: "residential",
    category: "Kitchen",
    title: "Modern White Modular Kitchen",
    location: "Bangalore",
    propertyType: "2BHK Apartment",
    budget: "₹3–5 Lakhs",

images: Array.from({ length: 10 }, (_, i) => 
  `/images/projects/kitchen-modern-white-1/${i + 1}.webp`
  
),

    description:
      "Designed for a compact 2BHK, this kitchen maximizes storage while maintaining a clean and modern aesthetic.",

    highlights: [
      "Soft-close drawers",
      "Space optimized storage",
      "Premium laminate finish"
    ]
  },
  

  {
    id: "wardrobe-sliding-bedroom-1",
    type: "residential",
    category: "Wardrobe",
    title: "Sliding Door Wardrobe",
    location: "Bangalore",
    propertyType: "3BHK Apartment",
    budget: "₹2–4 Lakhs",

    images: Array.from({ length: 10 }, (_, i) => 
      `/images/projects/wardrobe-sliding-bedroom-1/${i + 1}.webp`
    ),
     

    description:
      "Elegant sliding wardrobe designed for maximum storage with minimal space usage.",

    highlights: [
      "Sliding shutters",
      "Loft storage",
      "Matte finish panels"
    ]
  },
  
  {
  id: "office-modern-setup-1",
  type: "commercial",
  category: "Office",
  title: "Modern Office Interior",
  location: "Bangalore",
  propertyType: "Corporate Office",
  budget: "₹10–20 Lakhs",

  images: [
  ...Array.from({ length: 20 }, (_, i) => 
    `/images/projects/office-modern-setup-1/${i + 1}.webp`
  ),
  `/images/projects/office-modern-setup-1/21.jpeg`,
  `/images/projects/office-modern-setup-1/22.webp`
],
  description: "Modern office designed for productivity and collaboration.",

  highlights: [
    "Glass partitions",
    "Open workspace",
    "Ergonomic furniture"
  ]
},

{
  id: "living-room-modern-1",
  type: "residential",
  category: "Living Room",
  title: "Modern Living Room Setup",
  location: "Bangalore",
  propertyType: "3BHK Apartment",

  images: Array.from({ length: 10 }, (_, i) => 
    `/images/projects/living-room-modern-1/${i + 1}.webp`
  ),
},

{
  id: "bedroom-modern-design-1",
  type: "residential",
  category: "Bedroom",
  title: "Modern Bedroom Interior",
  location: "Bangalore",
  propertyType: "2BHK Apartment",
  budget: "₹2–4 Lakhs",

  images: Array.from({ length: 10 }, (_, i) => 
    `/images/projects/bedroom-modern-design-1/${i + 1}.webp`
  ),

  description:
    "A modern bedroom designed for comfort, functionality, and aesthetic appeal with optimized storage and lighting.",

  highlights: [
    "Custom wardrobe integration",
    "Ambient lighting",
    "Minimalist design"
  ]
},

{
  id: "ceiling-false-design-1",
  type: "residential",
  category: "Ceiling",
  title: "False Ceiling Design",
  location: "Bangalore",
  propertyType: "Apartment",
  budget: "₹1–3 Lakhs",

  images: Array.from({ length: 8 }, (_, i) => 
    `/images/projects/ceiling-false-design-1/${i + 1}.webp`
  ),

  description:
    "Elegant false ceiling designs enhancing lighting and spatial aesthetics for modern homes.",

  highlights: [
    "LED strip lighting",
    "Gypsum ceiling work",
    "Modern patterns"
  ]
},

];