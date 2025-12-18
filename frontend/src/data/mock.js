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
  deliveryTimeline: "3 months"
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
    duration: "4 months",
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
    duration: "3 months",
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
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
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
    answer: "Most projects are completed within 3 months, depending on the scope and complexity. We provide a detailed timeline during the initial consultation."
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

export const projectCategories = [
  "All",
  "Apartment",
  "Villa",
  "Commercial",
  "Renovation"
];
