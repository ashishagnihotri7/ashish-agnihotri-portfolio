// File: content/skills-data.ts

import { Skill, SkillCategoryData } from "@/types/skills";

export const skillCategories: SkillCategoryData[] = [
  {
    title: "Backend & Systems",
    description: "Core architecture & server-side logic",
    iconName: "Server",
  },
  {
    title: "Databases",
    description: "Data storage, retrieval & management",
    iconName: "Database",
  },
  {
    title: "Frontend & Web",
    description: "Client-side interfaces & experiences",
    iconName: "LayoutTemplate",
  },
  {
    title: "CS Concepts",
    description: "Theoretical foundations & algorithms",
    iconName: "Network",
  },
  {
    title: "Tools & DevOps",
    description: "Development, deployment & version control",
    iconName: "Wrench",
  },
];

export const skillsData: Skill[] = [
  // BACKEND
  {
    id: "java",
    name: "Java (JDK 17+)",
    category: "Backend & Systems",
    proficiency: "Core",
    description:
      "Primary backend language used for building scalable, strongly-typed enterprise applications.",
    projects: ["Smart Document Management", "Employee Management"],
    featured: true,
  },
  {
    id: "spring-boot",
    name: "Spring Boot 3",
    category: "Backend & Systems",
    proficiency: "Core",
    description:
      "Architecting robust microservices, configuring REST controllers, and implementing Spring Security (JWT).",
    projects: ["Smart Document Management", "Employee Management"],
    featured: true,
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "Backend & Systems",
    proficiency: "Core",
    description:
      "Designing decoupled, distributed systems using Netflix Eureka and Spring Cloud API Gateway.",
    projects: ["Smart Document Management", "Employee Management"],
    featured: true,
  },
  {
    id: "rest-api",
    name: "RESTful APIs",
    category: "Backend & Systems",
    proficiency: "Advanced",
    description:
      "Designing stateless endpoints with optimized JSON payloads, DTOs, and global exception handling.",
    projects: ["All Backend Projects"],
  },
  {
    id: "jpa-hibernate",
    name: "JPA / Hibernate",
    category: "Backend & Systems",
    proficiency: "Advanced",
    description:
      "Implementing Object-Relational Mapping to handle complex database entity relationships and queries.",
    projects: ["Smart Document Management"],
  },

  // DATABASES
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases",
    proficiency: "Core",
    description:
      "Designing strict relational schemas, enforcing ACID compliance, and writing optimized join queries.",
    projects: ["Employee Management", "Smart Document Management"],
    featured: true,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Databases",
    proficiency: "Intermediate",
    description:
      "NoSQL document storage for unstructured data and flexible schema design (MERN Stack).",
    projects: ["Cybrom Internship Projects"],
  },

  // FRONTEND
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend & Web",
    proficiency: "Core",
    description:
      "Deep understanding of the DOM, Event Loop, closures, and asynchronous programming (Async/Await).",
    projects: ["Currency Converter", "Interactive Games"],
    featured: true,
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend & Web",
    proficiency: "Advanced",
    description:
      "Building component-driven UIs, managing state hooks, and consuming backend REST APIs.",
    projects: ["Smart Document Management", "Velvet Dusk"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend & Web",
    proficiency: "Intermediate",
    description:
      "Enforcing static typing in JavaScript applications to catch errors at compile-time.",
    projects: ["Portfolio Development"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend & Web",
    proficiency: "Advanced",
    description:
      "Rapidly building responsive, utility-first UI layouts without writing custom CSS files.",
    projects: ["Portfolio", "Currency Converter"],
  },

  // CS CONCEPTS
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    category: "CS Concepts",
    proficiency: "Core",
    description:
      "Focusing on time/space complexity optimization and algorithmic problem solving.",
    projects: ["LeetCode Practice"],
    featured: true,
  },
  {
    id: "oop",
    name: "Object-Oriented Design",
    category: "CS Concepts",
    proficiency: "Core",
    description:
      "Applying inheritance, polymorphism, and encapsulation to write maintainable Java code.",
    projects: ["All Java Projects"],
  },
  {
    id: "system-design",
    name: "System Architecture",
    category: "CS Concepts",
    proficiency: "Intermediate",
    description:
      "Understanding client-server models, load balancing, and decoupling monolithic structures.",
    projects: ["Smart Document Management"],
  },

  // TOOLS & DEVOPS
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools & DevOps",
    proficiency: "Core",
    description:
      "Strict version control, managing feature branches, and maintaining proper commit histories.",
    projects: ["All Projects"],
    featured: true,
  },
  {
    id: "docker",
    name: "Docker",
    category: "Tools & DevOps",
    proficiency: "Intermediate",
    description:
      "Containerizing backend services to ensure consistent environments from development to production.",
    projects: ["Backend Architectures"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools & DevOps",
    proficiency: "Advanced",
    description:
      "Testing, documenting, and simulating REST API endpoints during backend development.",
    projects: ["API Development Workflow"],
  },
];
