export const projects = [
  // {
  //   id: 'p1',
  //   title: 'NoteZipper',
  //   description:
  //     'A simple and efficient notes application built using React.js, Bootstrap, Node.js, and MongoDB with full CRUD operations and secure data storage.',
  //   stack: ['React.js', 'Node.js', 'MongoDB', 'Bootstrap'],
  //   github: {
  //     frontend: 'https://github.com/64657/React/tree/d43802bc3cdb3845b2d4d4301580bd8684c8b65e/API%20MERN/frontend',
  //     backend: 'https://github.com/64657/React/tree/d43802bc3cdb3845b2d4d4301580bd8684c8b65e/API%20MERN/backend',
  //   },
  //   previewUrl: 'https://jolly-melomakarona-17a58f.netlify.app/',
  //   featured: true,
  // },

  {
    id: 'p1',
    title: 'Tomato – Food Delivery App',
    description:
      'A full MERN stack food delivery platform with Stripe payment integration, user authentication, order management, and restaurant/menu features.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: {
      frontend: 'https://github.com/64657/FoodDeliveryWebsite/tree/main/frontend',
      backend: 'https://github.com/64657/FoodDeliveryWebsite/tree/main/backend',
    },
    previewUrl: 'https://tomatodel.netlify.app/',
    featured: true,
  },

  {
    id: 'p2',
    title: 'Tomato Admin Panel',
    description:
      'Admin dashboard for managing restaurants, menus, orders, users, and analytics. Built with MERN stack and designed for efficient operations.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: {
      frontend: 'https://github.com/64657/FoodDeliveryWebsite/tree/main/admin',
      backend: 'https://github.com/64657/FoodDeliveryWebsite/tree/main/admin',
    },
    previewUrl: 'https://tomatoadmin.netlify.app/',
    featured: true,
  },

  {
    id: 'p3',
    title: 'Shopper – E-Commerce Website',
    description:
      'A MERN stack e-commerce platform with user authentication, product management, cart system, and a smooth shopping experience.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: {
      frontend: 'https://github.com/64657/Ecommerce/tree/main/frontend',
      backend: 'https://github.com/64657/Ecommerce/tree/main/backend',
    },
    previewUrl: 'https://main--ecomday.netlify.app/',
    featured: false,
  },

  {
    id: 'p4',
    title: 'Shopper Admin Dashboard',
    description:
      'A complete admin interface for the Shopper e-commerce platform, allowing management of users, products, and categories.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: {
      frontend: 'https://github.com/64657/Ecommerce/tree/main/admin',
      backend: 'https://github.com/64657/Ecommerce/tree/main/admin',
    },
    previewUrl: 'https://ecomdashp.netlify.app/',
    featured: false,
  },

  {
    id: 'p5',
    title: 'Employee Management System',
    description:
      'A MERN stack employee management system supporting CRUD operations, secure data handling, and admin login. Admin: admin / admin123.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: {
      frontend: 'https://github.com/64657/DealsDray-Task/tree/main/EmployeeManagementList',
      backend: 'https://github.com/64657/DealsDray-Task/tree/main/Backend',
    },
    previewUrl: 'https://mongoman.netlify.app/',
    featured: false,
  },
];


export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Fastify',
  'Express',
  'PostgreSQL',
  'MySql',
  'MongoDB',
  'Redis',
  'GraphQL',
  'REST APIs',
  'Docker',
  'AWS',
  'Git',
  'Tailwind CSS',
  'Jenkins'
];

export const experience = [
  {
    company: "BookWater Tech Pvt Ltd",
    role: "Software Engineer",
    dates: "Aug 2024 – Present",
    location: "Chennai, India",
    bullets: [
      "Developing mission-critical SaaS modules including order management, user management, account closure workflows, and IoT-enabled quality monitoring dashboards.",
      "Building scalable frontend interfaces using React.js, Material UI, and Redux Toolkit for complex features like QR/barcode-based can tracking, refill order flows, and stock reconciliation.",
      "Designing and maintaining modular RESTful microservices using Fastify, PostgreSQL, and Knex.js for domains such as consumer onboarding, promocode validation, refill order lifecycle, and traceability.",
      "Implemented Distributor → Water Filling Station (WFS) can scanning workflows enabling accurate in-scan and out-scan tracking, improving real-time inventory reliability across the supply chain.",
      "Integrated AWS IoT Core and MQTT/WebSockets to stream real-time TDS (water quality) telemetry into the platform, enhancing transparency and operational safety.",
      "Conducting API testing with Postman and managing seamless API integration in the frontend using Axios, Redux state slices, and clean UI state management patterns.",
      "Contributing to BookWater’s SaaS ecosystem by ensuring traceability, compliance, and quality assurance in IoT-powered drinking water operations."
    ]
  },

  {
    company: "Commodity CRM (React-Flow SaaS Product)",
    role: "Full Stack Developer",
    dates: "Nov 2023 – Mar 2024",
    location: "Chennai, India",
    bullets: [
      "Built responsive UI screens including Login, Signup, Workflow pages, and Admin tools for a workflow automation SaaS platform using React.js and Tailwind CSS.",
      "Developed and integrated APIs using Neo4jGraphQL to support graph-based workflow modeling and user access management.",
      "Contributed to user management, role-based access, and workflow builder features within the SaaS product.",
      "Performed API testing, schema validation, and debugging using Apollo Sandbox to ensure reliability and data integrity.",
      "Collaborated with senior developers to refine product requirements, improve UX, and optimize client-side performance."
    ]
  },

];

export const personalInfo = {
  name: 'Mohammed Faseeullah',
  title: 'Full Stack Developer',
  subtitle: 'MERN Stack | React.js | Node.js | Fastify | PostgreSQL',
  email: 'faseeullah.1998@gmail.com',
  location: 'Available Worldwide',
  bio: `I'm a passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. With a strong foundation in the MERN stack and extensive experience with Node.js, Fastify, and PostgreSQL, I create efficient, maintainable, and user-centric solutions.

My approach combines clean code principles with performance optimization, ensuring applications are both robust and fast. I thrive in collaborative environments and enjoy solving complex technical challenges.`,
  resumeUrl: '/RESUME.pdf',
  social: {
    github: 'https://github.com/64657',
    linkedin: 'https://www.linkedin.com/in/mohammed-faseeullah-a25a71202/',
  },
};
