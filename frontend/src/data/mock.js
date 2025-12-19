// Mock data for Denova Interiors Website

export const companyInfo = {
  name: "Denova Interiors",
  tagline: "A division of Denova Creations",
  primaryPhone: "+91 99643 55525",
  email: "admin@denovacreations.com",
  address: "373/2, Begur – Hulimavu Rd, Opp. Rejoice Apartment, Classic Paradise Layout, Begur, Bengaluru, Karnataka 560114",
  serviceArea: "Bengaluru (all zones) and nearby locations",
  rating: 4.9,
  projectsCompleted: 150,
  deliveryTimeline: "45-60 days"
};

export const services = [
  {
    id: 1,
    title: "Residential Interiors",
    description: "Transform your home into a personalized sanctuary with our comprehensive residential interior design solutions.",
    icon: "Home",
    features: ["Living Room Design", "Bedroom Interiors", "Kitchen Modular Solutions", "Bathroom Renovation"]
  },
  {
    id: 2,
    title: "Apartment Interiors",
    description: "Maximize space efficiency and style in your apartment with our smart design approaches.",
    icon: "Building2",
    features: ["Space Optimization", "Modern Aesthetics", "Storage Solutions", "Balcony Design"]
  },
  {
    id: 3,
    title: "Villa Interiors",
    description: "Luxury villa interiors that reflect grandeur and sophisticated living standards.",
    icon: "Castle",
    features: ["Grand Living Spaces", "Premium Materials", "Custom Furniture", "Landscape Integration"]
  },
  {
    id: 4,
    title: "Corporate & Commercial",
    description: "Professional workspace designs that enhance productivity and brand identity.",
    icon: "Briefcase",
    features: ["Office Interiors", "Retail Spaces", "Conference Rooms", "Reception Areas"]
  },
  {
    id: 5,
    title: "Renovation Projects",
    description: "Breathe new life into existing spaces with our expert renovation services.",
    icon: "Wrench",
    features: ["Complete Makeover", "Structural Changes", "Modern Upgrades", "Cost-Effective Solutions"]
  },
  {
    id: 6,
    title: "Turnkey Solutions",
    description: "End-to-end interior solutions from concept to completion, hassle-free.",
    icon: "Key",
    features: ["Design & Planning", "Material Procurement", "Execution", "Handover"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    category: "Apartment",
    location: "Whitefield, Bengaluru",
    area: "1650 sq.ft",
    duration: "2.5 months",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    description: "Contemporary design with warm wood tones and modern functionality."
  },
  {
    id: 2,
    title: "Luxury Villa Interior",
    category: "Villa",
    location: "Sarjapur Road, Bengaluru",
    area: "4200 sq.ft",
    duration: "60 days",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Premium villa interiors with Italian marble and custom woodwork."
  },
  {
    id: 3,
    title: "Compact 2BHK Design",
    category: "Apartment",
    location: "Electronic City, Bengaluru",
    area: "1100 sq.ft",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    description: "Space-optimized design with smart storage solutions."
  },
  {
    id: 4,
    title: "Corporate Office Space",
    category: "Commercial",
    location: "Koramangala, Bengaluru",
    area: "3500 sq.ft",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern workspace design promoting collaboration and productivity."
  },
  {
    id: 5,
    title: "Traditional Home Renovation",
    category: "Renovation",
    location: "Jayanagar, Bengaluru",
    area: "2200 sq.ft",
    duration: "3.5 months",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Complete renovation blending traditional aesthetics with modern amenities."
  },
  {
    id: 6,
    title: "Premium 4BHK Apartment",
    category: "Apartment",
    location: "HSR Layout, Bengaluru",
    area: "2400 sq.ft",
    duration: "55 days",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Elegant interiors with premium finishes and custom lighting."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Whitefield, Bengaluru",
    rating: 5,
    text: "Exceptional work by Denova Interiors! They transformed our 3BHK into a dream home. The attention to detail and quality of materials exceeded our expectations.",
    projectType: "3BHK Apartment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Sarjapur Road, Bengaluru",
    rating: 5,
    text: "Professional team with excellent design sense. They completed our villa interior within the promised timeline. Highly recommend their services!",
    projectType: "Villa Interior",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 3,
    name: "Arun Menon",
    location: "Electronic City, Bengaluru",
    rating: 5,
    text: "Best decision we made was choosing Denova for our apartment. Budget-friendly options without compromising on quality. Truly impressed!",
    projectType: "2BHK Apartment",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    id: 4,
    name: "Lakshmi Venkatesh",
    location: "Jayanagar, Bengaluru",
    rating: 5,
    text: "Our old house looks brand new after the renovation. The team was courteous, punctual, and delivered exactly what was promised.",
    projectType: "Home Renovation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
  }
];

export const processSteps = [
  {
    step: 1,
    title: "Consultation & Site Visit",
    description: "Free initial consultation to understand your vision, requirements, and budget. Our team visits the site for detailed measurements.",
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Design & Planning",
    description: "Our designers create detailed 2D/3D layouts and material boards. We present multiple design options for your approval.",
    duration: "5-7 days"
  },
  {
    step: 3,
    title: "Material Selection",
    description: "Choose from our curated selection of premium materials, finishes, and fixtures within your budget range.",
    duration: "3-5 days"
  },
  {
    step: 4,
    title: "Execution & Installation",
    description: "Our skilled craftsmen bring the design to life with precision and attention to detail. Regular progress updates provided.",
    duration: "6-10 weeks"
  },
  {
    step: 5,
    title: "Quality Check & Handover",
    description: "Thorough quality inspection before final handover. We ensure every detail meets our high standards.",
    duration: "2-3 days"
  }
];

export const faqs = [
  {
    question: "What is the typical project timeline?",
    answer: "Most projects are completed within 45-60 days, depending on the scope and complexity. We provide a detailed timeline during the initial consultation."
  },
  {
    question: "Do you offer budget-friendly options?",
    answer: "Yes, we offer solutions across various budget ranges without compromising on quality. We work with you to optimize costs while achieving your design goals."
  },
  {
    question: "What areas in Bengaluru do you serve?",
    answer: "We serve all zones of Bengaluru and nearby locations including Whitefield, Electronic City, Sarjapur Road, HSR Layout, Koramangala, Jayanagar, and more."
  },
  {
    question: "Do you provide warranty on your work?",
    answer: "Yes, we provide warranty on all our installations and workmanship. Specific warranty terms are discussed and documented for each project."
  },
  {
    question: "Can I see your previous work before deciding?",
    answer: "Absolutely! We encourage site visits to our completed projects. We also have a comprehensive portfolio of past work available for viewing."
  }
];

// Material Guide Information
export const materialGuide = {
  plywood: {
    title: "Plywood Guide",
    description: "Plywood forms the core structure of your furniture. Choosing the right grade ensures durability and longevity.",
    types: [
      {
        name: "BWR (Boiling Water Resistant)",
        description: "Ideal for kitchens and bathrooms. Resistant to moisture and humidity.",
        recommended: "Kitchen cabinets, bathroom vanities, wash areas",
        priceRange: "₹65-85 per sq.ft"
      },
      {
        name: "BWP (Boiling Water Proof)",
        description: "Marine-grade plywood with highest water resistance. Best for wet areas.",
        recommended: "Outdoor furniture, balcony storage, high-moisture areas",
        priceRange: "₹85-120 per sq.ft"
      },
      {
        name: "MR (Moisture Resistant)",
        description: "Good for dry areas with moderate humidity resistance.",
        recommended: "Wardrobes, TV units, bedroom furniture",
        priceRange: "₹45-65 per sq.ft"
      },
    ],
    brands: ["Century", "Greenply", "Kitply", "Archid", "Duro"]
  },
  laminates: {
    title: "Laminate Guide",
    description: "Laminates provide the finishing touch and define the visual appeal of your furniture.",
    types: [
      {
        name: "High Pressure Laminate (HPL)",
        description: "Premium finish with excellent scratch and heat resistance.",
        recommended: "Kitchen countertops, high-traffic surfaces",
        priceRange: "₹1,200-2,500 per sheet"
      },
      {
        name: "Decorative Laminate",
        description: "Wide variety of colors and patterns. Good durability for general use.",
        recommended: "Wardrobes, TV units, wall panels",
        priceRange: "₹800-1,500 per sheet"
      },
      {
        name: "Acrylic Laminate",
        description: "High-gloss finish for modern, contemporary look.",
        recommended: "Modular kitchens, modern furniture",
        priceRange: "₹1,500-3,000 per sheet"
      },
      {
        name: "PVC Laminate",
        description: "Waterproof and easy to maintain. Ideal for humid areas.",
        recommended: "Bathrooms, kitchens, balcony furniture",
        priceRange: "₹600-1,200 per sheet"
      }
    ],
    brands: ["Merino", "Greenlam", "Century", "Royale Touche", "Virgo"]
  },
  hardware: {
    title: "Hardware Guide",
    description: "Quality hardware ensures smooth functionality and long life of your furniture.",
    types: [
      {
        name: "Hinges",
        description: "Soft-close hinges prevent slamming and extend cabinet life.",
        recommended: "All cabinets and doors",
        brands: ["Hettich", "Hafele", "Ebco", "Godrej"]
      },
      {
        name: "Drawer Channels",
        description: "Ball-bearing channels for smooth, silent operation.",
        recommended: "All drawers, especially kitchen and wardrobes",
        brands: ["Hettich", "Hafele", "Ebco", "Sleekline"]
      },
      {
        name: "Handles & Knobs",
        description: "Choose based on style - modern, contemporary, or classic.",
        recommended: "Personalize based on design theme",
        brands: ["Hafele", "Dorset", "Ozone", "Ipsa"]
      },
      {
        name: "Basket & Organizers",
        description: "Maximize storage efficiency in kitchens and wardrobes.",
        recommended: "Modular kitchens, walk-in wardrobes",
        brands: ["Hettich", "Hafele", "Kaff", "Ebco"]
      }
    ]
  },
  colorGuidance: {
    title: "Color Selection Tips",
    tips: [
      {
        title: "Consider Natural Light",
        description: "Rooms with less natural light benefit from lighter shades like whites, creams, and soft pastels. Well-lit rooms can handle darker, bolder colors."
      },
      {
        title: "60-30-10 Rule",
        description: "Use 60% dominant color (walls/large furniture), 30% secondary color (curtains/accent furniture), and 10% accent color (décor/accessories)."
      },
      {
        title: "Warm vs Cool Tones",
        description: "Warm colors (beige, cream, wood tones) create cozy spaces. Cool colors (grey, blue, white) create modern, spacious feel."
      },
      {
        title: "Test Before Committing",
        description: "Always view laminate samples in your actual space lighting. Colors appear different under natural vs artificial light."
      },
      {
        title: "Timeless Combinations",
        description: "White + Wood, Grey + Yellow accents, Beige + Brown, Navy + Gold are timeless combinations that age well."
      },
      {
        title: "Kitchen Color Tips",
        description: "Light upper cabinets with darker lower cabinets create visual balance. Neutral countertops offer flexibility for future changes."
      }
    ],
    popularPalettes: [
      {
        name: "Modern Minimal",
        colors: ["White", "Light Grey", "Oak Wood", "Black accents"],
        bestFor: "Apartments, compact spaces"
      },
      {
        name: "Warm Contemporary",
        colors: ["Beige", "Walnut Brown", "Cream", "Gold accents"],
        bestFor: "Living rooms, bedrooms"
      },
      {
        name: "Bold & Elegant",
        colors: ["Charcoal Grey", "Navy Blue", "White", "Brass accents"],
        bestFor: "Feature walls, statement furniture"
      },
      {
        name: "Natural Earthy",
        colors: ["Sage Green", "Terracotta", "Natural Wood", "Off-white"],
        bestFor: "Eco-friendly, organic designs"
      }
    ]
  }
};

export const projectCategories = [
  "All",
  "Apartment",
  "Villa",
  "Commercial",
  "Renovation"
];
