import { ServiceItem, Testimonial } from "../types";

export const SERVICES: ServiceItem[] = [
  {
    title: "Quantum Resonance Magnetic Analyzer",
    description: "The body has millions of cells that develop, grow, break up and die daily. During cellular breakdown, frequencies are sent from the nucleus of each cell.",
    long_description: "This advanced diagnostic tool reads the subtle electromagnetic frequencies emitted by your cells to identify imbalances before they become illness. A comprehensive health analysis is generated, covering over 40 bodily systems and functions, giving you a complete picture of your current health status.",
    image: "https://kamala-wellness.co.za/wp-content/uploads/2022/06/QRS.jpg",
    benefits: [
      "Full-body health scan",
      "Early imbalance detection",
      "Non-invasive analysis",
      "40+ system assessment"
    ]
  },
  {
    title: "Non-Linear Scanner",
    description: "The Quantum Bacterial and Pathogen Scanner is a biofeedback stress detection system and a stress release system.",
    long_description: "This sophisticated scanner identifies the specific bacteria, pathogens, and environmental stressors affecting your body. Using biofeedback technology, it not only identifies the stressors but also provides a stress release protocol customised to your body's current needs.",
    image: "https://kamala-wellness.co.za/wp-content/uploads/2022/04/Quantum-Bacterial-and-Pathogen-Scanner-212x215-1.png",
    benefits: [
      "Detects hidden pathogens",
      "Biofeedback stress release",
      "Personalised protocol",
      "Rapid results"
    ]
  }
];

export const CORE_VALUES = [
  {
    title: "Whole-Person Care",
    description: "We treat mind, body and spirit as one — never just individual symptoms in isolation."
  },
  {
    title: "Proactive Health",
    description: "Our focus is prevention and strengthening your natural immune system before illness strikes."
  },
  {
    title: "Natural Approach",
    description: "We use the power of nature, frequencies and ancient wisdom supported by modern technology."
  },
  {
    title: "Client-Centred",
    description: "Every treatment plan is personalised. We listen deeply and tailor our care to your unique needs."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    service: "Quantum Resonance",
    text: "I feel completely renewed after my sessions. The team at Kamala Wellness is exceptional — they truly care about your wellbeing.",
    rating: 5
  },
  {
    name: "Johan P.",
    service: "Non-Linear Scanner",
    text: "After years of chronic fatigue, the sessions have given me my energy back. I cannot recommend this enough.",
    rating: 5
  },
  {
    name: "Nadia K.",
    service: "Quantum Resonance",
    text: "The quantum analysis revealed imbalances I had no idea about. My health has improved dramatically since starting treatment.",
    rating: 5
  }
];

export const BOOKING_SERVICES = [
  "Quantum Resonance Magnetic Analyzer",
  "Non-Linear Scanner",
  "Holistic Wellness Consultation"
];

export const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00"
];

export const CONTACT_INFO = {
  phones: ["+27 61 512 4727", "+27 13 010 1762"],
  whatsapp: "27615124727",
  email: "info@kamala-wellness.co.za",
  hours: {
    weekdays: "Mon–Fri: 8AM – 5PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed"
  },
  location: "South Africa (Visit us by appointment)",
  deliveryFee: 150
};
