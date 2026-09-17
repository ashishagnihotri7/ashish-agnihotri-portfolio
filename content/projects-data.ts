// File: content/projects-data.ts

import { Project } from "@/types/projects";

export const projectsData: Project[] = [
  {
    id: "smart-document-management-system",
    title: "Smart Document Management System (SDMS)",
    category: "Full Stack",
    shortDescription:
      "An enterprise-grade platform engineered for secure document storage, AES-256 encryption, and role-based access management.",
    problemStatement:
      "Traditional monolithic applications struggle with insecure enterprise document handling and lack a 'Zero-Trust' environment where data privacy and restricted access are enforced at the foundation.",
    solution:
      "Architected a distributed microservices ecosystem utilizing Spring Cloud (Netflix Eureka, API Gateway) for traffic routing, along with dynamic RBAC and AES-256 encryption at rest.",
    myRole:
      "Full Stack & Backend Developer - Designed the microservices architecture, implemented Spring Security with JWT, and built the React client interface.",
    engineeringDecisions: [
      {
        title: "Why Decoupled Microservices?",
        description:
          "Centralized traffic routing and load-balancing through a Spring Cloud API Gateway allowed independent service scaling and zero system-wide downtime.",
      },
      {
        title: "Cryptographic Security at Rest",
        description:
          "Implemented AES-256 encryption to guarantee that all sensitive enterprise documents stored in the MySQL database remain heavily protected against unauthorized access.",
      },
    ],
    challenges: [
      {
        challenge: "Managing Secure Distributed Communication",
        solution:
          "Configured Netflix Eureka for dynamic service discovery and used API Gateway for secure, centralized request filtration across services.",
      },
    ],
    futureRoadmap: [
      "Integrate Redis Caching for performance optimization",
      "Expand automated testing coverage",
      "Containerize services using Docker",
    ],
    features: [
      "Secure document lifecycle workflows (Upload, Retrieve, Delete)",
      "Dynamic Role-Based Access Control (RBAC) via 'Officer' profiles",
      "AES-256 End-to-End Encryption at rest",
      "Distributed Microservices (Netflix Eureka, API Gateway)",
    ],
    techStack: [
      "Java 17",
      "Spring Boot 3",
      "React.js",
      "MySQL",
      "Spring Cloud",
      "JWT",
      "Spring Security",
    ],
    links: [
      {
        type: "github",
        label: "View Source Code",
        url: "https://lnkd.in/dah6XaUR",
      },
      {
        type: "demo",
        label: "LinkedIn Post & Demo",
        url: "https://www.linkedin.com/posts/ashish-agnihotri-331475339_fullstackdevelopment-java-springboot-activity-7503478105467027456-8Msb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT22pUB3xVP4fPOCln4gbxmge_ldvOgXjk",
      },
    ],
    featured: true,
    year: "2024",
  },

  {
    id: "currency-converter",
    title: "Real-Time Currency Converter (API-Based)",
    category: "Frontend & Web",
    shortDescription:
      "A dynamic web application built during a 14-day JS journey that fetches live exchange rates via third-party APIs for instant conversion.",
    problemStatement:
      "Static financial tools fail to provide accurate, real-time conversions, requiring asynchronous data handling and clean API integration to fetch live exchange rates.",
    solution:
      "Built a responsive currency conversion interface integrating live exchange rate APIs using modern JavaScript async/await patterns for real-time calculation.",
    myRole:
      "Frontend Developer - Implemented asynchronous API calls, DOM rendering, and user input validation.",
    engineeringDecisions: [
      {
        title: "Asynchronous API Fetching",
        description:
          "Utilized modern JavaScript Promises and async/await syntax to handle network requests efficiently without blocking the main UI thread.",
      },
    ],
    challenges: [
      {
        challenge: "Handling Network Latency & API Failures",
        solution:
          "Implemented robust error handling and fallback states to ensure the application remains stable if the currency API experiences downtime.",
      },
    ],
    futureRoadmap: [
      "Add historical currency exchange trend charts",
      "Implement local caching for offline rate availability",
    ],
    features: [
      "Live financial API integration for real-time rates",
      "Asynchronous data handling with error handling",
      "Clean, responsive user interface design",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    links: [
      {
        type: "github",
        label: "View Source Code",
        url: "https://lnkd.in/dxiZ5_47",
      },
      {
        type: "demo",
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/ashish-agnihotri-331475339_javascript-webdevelopment-learningjourney-activity-7443902562023612416-HwEK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT22pUB3xVP4fPOCln4gbxmge_ldvOgXjk",
      },
    ],
    featured: false,
    year: "2024",
  },

  {
    id: "interactive-js-games",
    title: "Interactive JavaScript Games (Tic Tac Toe & RPS)",
    category: "Frontend & Web",
    shortDescription:
      "Interactive browser games built with vanilla JavaScript as part of a hands-on learning journey to master DOM manipulation and state logic.",
    problemStatement:
      "Translating abstract conditional programming logic into responsive user interfaces requires strict state management and clean event handling.",
    solution:
      "Implemented complete game logic for Tic Tac Toe and Stone-Paper-Scissors, featuring player turn tracking, dynamic UI rendering, and randomized computer moves.",
    myRole:
      "Frontend Developer - Built core game algorithms, event listeners, and dynamic UI state updaters.",
    engineeringDecisions: [
      {
        title: "Vanilla JavaScript Architecture",
        description:
          "Avoiding heavy frameworks for simple browser games ensures zero build overhead, maximum execution speed, and deep understanding of DOM APIs.",
      },
    ],
    challenges: [
      {
        challenge: "Managing Complex Win/Draw State Conditions",
        solution:
          "Designed clean algorithmic match-checking loops to instantly evaluate grid states on every user click.",
      },
    ],
    futureRoadmap: [
      "Add score persistence using browser LocalStorage",
      "Implement an AI opponent mode using the Minimax algorithm",
    ],
    features: [
      "Dynamic DOM manipulation and event handling",
      "Randomized computer choice generation for RPS",
      "Real-time turn tracking and win-condition evaluation",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3"],
    links: [
      {
        type: "github",
        label: "View Source Code",
        url: "https://lnkd.in/dxiZ5_47",
      },
      {
        type: "demo",
        label: "Tic Tac Toe Post",
        url: "https://www.linkedin.com/posts/ashish-agnihotri-331475339_javascript-webdevelopment-projects-activity-7444077511162019840-GQPW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT22pUB3xVP4fPOCln4gbxmge_ldvOgXjk",
      },
      {
        type: "demo",
        label: "Stone Paper Scissor Post",
        url: "https://www.linkedin.com/posts/ashish-agnihotri-331475339_javascript-webdevelopment-projects-activity-7444429294048583680-6d6L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT22pUB3xVP4fPOCln4gbxmge_ldvOgXjk",
      },
    ],
    featured: false,
    year: "2024",
  },
];
