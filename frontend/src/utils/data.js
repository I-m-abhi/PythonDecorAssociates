import serviceImg1 from '../assets/services/interior_design_consultation.png';
import serviceImg2 from '../assets/services/space_planning_concept_development.png';
import serviceImg3 from '../assets/services/custom_design_solutions.png';
import serviceImg4 from '../assets/services/architectural_design_remodeling.png';
import serviceImg5 from '../assets/services/turnkey_project_management.png';
import serviceImg6 from '../assets/services/renovation_remodeling_services.png';

export const serviceDetails = [
  {
    projectImg: serviceImg1,
    imageOf: 'Interior Design Consultation',
    location: 'Personalized Consultations to Transform Your Vision into Reality',
    moreDetails: 'We offer one-on-one expert consultations to understand your vision, style, and needs—guiding you through layout, color, and design choices that perfectly align with your personality.',
    alt: 'Client discussing interior design ideas during consultation with Python Decor expert'
  },
  {
    projectImg: serviceImg2,
    imageOf: 'Space Planning & Concept Development',
    location: 'Optimizing Your Space with Functionality and Beauty',
    moreDetails: 'Our designers plan every inch of your space to ensure smart layout, flow, and usability, turning ideas into detailed, functional, and aesthetically refined design concepts.',
    alt: 'Professional space planning layout and mood board with color and material swatches'
  },
  {
    projectImg: serviceImg3,
    imageOf: 'Custom Design Solutions',
    location: 'Bespoke Designs Reflecting Your Unique Style',
    moreDetails: 'We craft tailor-made interiors using premium materials, personalized finishes, and custom furnishings that reflect your style and elevate your living experience.',
    alt: 'Unique handcrafted interior design elements reflecting client’s personal style'
  },
  {
    projectImg: serviceImg4,
    imageOf: 'Architectural Design & Remodeling',
    location: 'Expand Your Space with Architectural Excellence',
    moreDetails: 'From extensions to full-scale remodeling, our architectural services ensure structural integrity, modern aesthetics, and spatial efficiency in every project we deliver.',
    alt: 'Architectural floor plans and 3D remodeling render of a residential home'
  },
  {
    projectImg: serviceImg5,
    imageOf: 'Turnkey Project Management',
    location: 'End-to-End Management for a Stress-Free Design Experience',
    moreDetails: 'We manage your entire project—from concept to completion—handling contractors, timelines, materials, and quality control to deliver a seamless and stress-free experience.',
    alt: 'Project manager overseeing on-site interior work at a client location'
  },
  {
    projectImg: serviceImg6,
    imageOf: 'Renovation & Remodeling Services',
    location: 'Modernizing Outdated Interiors with Contemporary Designs',
    moreDetails: 'We modernize outdated interiors by integrating innovative layouts, fresh materials, and modern aesthetics that breathe new life into your existing space.',
    alt: 'Before and after of a renovated modern living room transformation'
  },
];

import gs1 from "../assets/projects/Screenshot (37).png";
import gs2 from "../assets/projects/Screenshot (38).png";
import gs3 from "../assets/projects/Screenshot (39).png";
import gs4 from "../assets/projects/Screenshot (40).png";
import gs5 from "../assets/projects/Screenshot (41).png";
import gs6 from "../assets/projects/Screenshot (42).png";
import gs7 from "../assets/projects/Screenshot (43).png";
import gs8 from "../assets/projects/Screenshot (44).png";
import gs9 from "../assets/projects/Screenshot (45).png";

export const projectDetails = [
  {
    id: 1,
    slug: "residential-jitendra-kumar-ip-extension",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    vidList: [],
    clientName: "Jitendra Kumar",
    society: "RamaKrishna",
    location: "IP Extension, Delhi",
    badge: "Residential",
    area: "1800 ft²",
    year: "2025",
    time: "3 Months",
    budget: "12 Lakh",
    alt: "Interior design project at RamaKrishna Society, Prateek Grand City."
  },
  {
    id: 2,
    slug: "commercial-mandeep-singh-oh-my-nails-amar-colony",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Mandeep Singh(Oh My Nails)",
    society: "N/A",
    location: "Amar Colony, Lajpat Nagar",
    badge: "Commercial",
    area: "900 ft²",
    year: "2025",
    time: "1 Months",
    budget: "₹10 Lakh",
    alt: "Commercial project in Green Valley, Noida."
  },
  {
    id: 3,
    slug: "residential-manglesh-upadhya-anushree-apartment",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Manglesh Upadhya",
    society: "Anushree Apartment",
    location: "Sector-74, Faridabad",
    badge: "Residential",
    area: "1150 ft²",
    year: "2024",
    time: "2.5 Months",
    budget: "₹10 Lakh",
    alt: "Residential project at Sunshine Residency."
  },
  {
    id: 4,
    slug: "design-only-rajesh-agarwal-ip-extension",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Rajesh Agarwal",
    society: "Ramakrishna",
    location: "IP Extension, Delhi",
    badge: "Design only",
    area: "1800 ft²",
    year: "2025",
    time: "3 Weeks",
    budget: "₹65 Thousand",
    alt: "Interior design project for Palm Greens."
  },
  {
    id: 5,
    slug: "design-consultation-arun-tomar-sector-45",
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Arun Tomar",
    society: "RPS Green Valley",
    location: "Sector 45, Faridabad",
    badge: "Design & Consultation",
    area: "2300 ft²",
    year: "2024",
    time: "1 Months",
    budget: "₹5 Lakh",
    alt: "Large-scale commercial project in Skyline Homes."
  },
  {
    id: 6,
    slug: "residential-rahul-narula-green-field",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Rahul Narula",
    society: "Green Field",
    location: "Sector 42, Faridabad",
    badge: "Residential",
    area: "600 ft²",
    year: "2024",
    time: "3 Months",
    budget: "₹5 Lakh",
    alt: "Beautiful residential interiors at Harmony Heights."
  },
  {
    id: 7,
    slug: "design-only-gaurav-singh-green-field",
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Gaurav Singh",
    society: "Green Field",
    location: "Sector 42, Faridabad",
    badge: "Design only",
    area: "3200 ft²",
    year: "2024",
    time: "1 Months",
    budget: "₹1.5 Lakh",
    alt: "Beautiful residential interiors at Harmony Heights."
  },
  {
    id: 8,
    slug: "design-consultation-ravindra-saharan-sector-82",
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Ravindra Saharan",
    society: "N/A",
    location: "Sector 82, Faridabad",
    badge: "Design & Consultation",
    area: "2800 ft²",
    year: "2024",
    time: "1 Months",
    budget: "₹1.5 Lakh",
    alt: "Beautiful residential interiors at Harmony Heights."
  },
  {
    id: 9,
    slug: "design-only-amit-singh-ushan-aditya-homes",
    featured: true,
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Amit Singh Ushan",
    society: "Aditya Homes",
    location: "Pratap Vihar, Ghaziabad",
    badge: "Design only",
    area: "1200 ft²",
    year: "2024",
    time: "1 Months",
    budget: "₹50 Thousand",
    alt: "Beautiful residential interiors at Harmony Heights."
  },
  {
    id: 10,
    slug: "design-only-amit-chatterjee-tata-lavida",
    imgList: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9],
    clientName: "Amit Chatterjee",
    society: "Tata LaVida",
    location: "Sector 113, Gurgoan",
    badge: "Design only",
    area: "1600 ft²",
    year: "2024",
    time: "1 Months",
    budget: "₹50 Thousand",
    alt: "Beautiful residential interiors at Harmony Heights."
  }
];


// BlogsData
import blogImg1 from '../assets/Blogs/interior_trends_delhi_ncr_2025.png';
import blogImg2 from '../assets/Blogs/colour_texture_trends_ncr.png';
import blogImg3 from '../assets/Blogs/modular_kitchen_noida_remodeling.png';

export const blogDetails = [
  {
    id: 1,
    featured: true,
    img: blogImg1,
    publishedBy: "Python Decor & Associates",
    date: "June 20",
    year: "2025",
    heading: "Top 5 Interior Design Trends in Delhi NCR for 2025:Your Guide to a Stylish, Modern Home",
    title: "Top 5 Interior Design Trends in Delhi NCR for 2025...",
    slug: "interior-design-trends-delhi-2025",
  },
  {
    id: 2,
    featured: true,
    img: blogImg2,
    publishedBy: "Python Decor & Associates",
    date: "June 25",
    year: "2025",
    heading: "Colour & Texture Magic: Wood, Metal & Tile Drenching Trends in NCR Homes",
    title: "Colour & Texture Magic: Wood, Metal & Tile Trends...",
    slug: "color-texture-trends-ncr-homes",
  },
  {
    id: 3,
    featured: true,
    img: blogImg3,
    publishedBy: "Python Decor & Associates",
    date: "June 30",
    year: "2025",
    heading: "Modular Kitchens & Smart Remodeling Ideas for Noida/Greater Noida Residences",
    title: "Modular Kitchens & Smart Remodeling Ideas for...",
    slug: "modular-kitchens-remodeling-noida",
  },
];