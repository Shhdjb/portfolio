(function () {
  "use strict";

  const roles = ["Developer", "Designer", "Creator"];
  let roleIndex = 0;

  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const roleText = document.getElementById("roleText");
  const yearEl = document.getElementById("year");
  const navLinkEls = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const revealEls = document.querySelectorAll(".reveal");
  const projectModal = document.getElementById("projectModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const projects = {
    agromind: {
      title: "AgroMind – AI-Based Smart Irrigation and Fertilization Decision Support System",
      overview:
        "AgroMind is an intelligent decision support system for precision agriculture that combines crop simulation models, weather data, optimization algorithms, and a mobile application to generate daily irrigation and fertilization recommendations. The system integrates AquaCrop simulations with Genetic Algorithm optimization to improve water efficiency, fertilizer usage, crop performance, biomass production, and profitability.",
      highlight:
        "This project combines AI, optimization, software engineering, and real-world agricultural research, showing the ability to build intelligent systems that support data-driven decision making.",
      problem:
        "Farmers need accurate, data-driven recommendations to improve irrigation and fertilization decisions while reducing water and fertilizer waste.",
      features: [
        "Daily irrigation and nitrogen fertilization recommendations",
        "AquaCrop crop simulation integration",
        "Genetic Algorithm optimization workflow",
        "Weather data integration",
        "AI-generated explanations using Gemini API",
        "AI Plan vs. User Plan comparison",
        "Confidence scores and recommendation insights",
        "Optimization result evaluation",
        "Greenhouse data validation",
        "Mobile interface for farmers",
      ],
      technologies: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Python",
        "REST APIs",
        "Gemini API",
        "AquaCrop",
        "Genetic Algorithms",
        "SQLite/Firebase",
        "Data Processing",
        "Optimization",
      ],
      skillsDemonstrated: [
        "Software Engineering",
        "Mobile Application Development",
        "Backend API Development",
        "System Architecture Design",
        "Data Processing Pipelines",
        "AI Decision Support Systems",
        "Genetic Algorithms",
        "Evolutionary Optimization",
        "Multi-Objective Optimization",
        "Simulation-Based Optimization",
        "Precision Agriculture",
        "Crop Growth Analysis",
        "Weather Data Integration",
        "KPI Calculation",
        "Scenario Analysis",
        "Model Validation",
        "Research and Development",
      ],
      contribution:
        "Developed mobile workflows, integrated AI explanations, connected simulation and optimization outputs, supported result validation, and helped transform complex research outputs into a clear farmer-facing application.",
      testing:
        "Contributed to greenhouse data validation, QA testing, optimization result evaluation, and technical validation of simulation outputs within a research-driven development workflow.",
    },
    campusflow: {
      title: "CampusFlow",
      problem:
        "Academic institutions struggle with fragmented request handling across students, lecturers, secretaries, and administrators, leading to delays, poor visibility, and manual follow-ups.",
      features: [
        "Role-based dashboards for all user types",
        "Request submission, tracking, and status updates",
        "Notifications and reporting system",
        "OpenAI-powered chatbot for academic support",
        "Centralized request management workflow",
      ],
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
        "Jira",
        "Jenkins",
        "OpenAI API",
      ],
      contribution:
        "Built the full-stack academic request management system including backend logic, database design, frontend dashboards, and AI chatbot integration as an academic software engineering project.",
      testing:
        "Applied software testing and quality practices. Used Jenkins for CI/CD pipeline automation and Jira for agile project tracking.",
    },
    compiler: {
      title: "Compiler Construction Project",
      problem:
        "Understanding and implementing the full compilation pipeline requires a hands-on system that transforms source code through analysis, validation, and intermediate code generation.",
      features: [
        "Lexical analysis with Lex",
        "Syntax parsing with Yacc",
        "Abstract Syntax Tree (AST) construction",
        "Symbol table management",
        "Semantic validation",
        "Three-address intermediate code generation",
      ],
      technologies: ["C", "Lex", "Yacc", "AST", "Symbol Table", "Three-Address Code"],
      contribution:
        "Developed a complete compiler for a custom procedural language, implementing each compilation phase from tokenization through intermediate code output.",
      testing:
        "Validated compiler output against test programs covering syntax errors, semantic rules, and correct code generation scenarios.",
    },
    ebook: {
      title: "eBook Library Service",
      problem:
        "Digital libraries need secure, role-aware systems that manage borrowing limits, catalog access, and online payments while protecting user transactions.",
      features: [
        "Multi-role user management (admin, member, guest)",
        "Borrowing limits and loan tracking",
        "eBook catalog and inventory management",
        "PayPal payment integration",
        "SSL-secured transactions",
      ],
      technologies: ["C#", "ASP.NET", "HTML", "CSS", "JavaScript", "SSMS", "PayPal", "SSL"],
      contribution:
        "Designed and developed the full eBook library platform including database schema, user authentication, catalog management, and secure payment workflows.",
      testing:
        "Tested payment flows, role permissions, borrowing rules, and secure HTTPS communication.",
    },
    blockchain: {
      title: "Blockchain Data Processing",
      problem:
        "Centralized data systems are vulnerable to tampering and lack transparency. A decentralized approach can improve data integrity and auditability for real-time processing.",
      features: [
        "Decentralized data storage architecture",
        "Smart contract integration",
        "Real-time Python data processing pipeline",
        "Secure and auditable data management",
      ],
      technologies: ["Blockchain", "Smart Contracts", "Python"],
      contribution:
        "Built the backend processing system integrating blockchain concepts with Python for secure, real-time data management and validation.",
      testing:
        "Validated data integrity across the processing pipeline and tested smart contract interactions with sample datasets.",
    },
    game: {
      title: "Children's Game App",
      problem:
        "Young learners benefit from interactive educational games that combine engaging gameplay with structured learning progression and reliable backend support.",
      features: [
        "Interactive educational gameplay mechanics",
        "Learning logic and progression system",
        "User interaction and feedback features",
        "Backend functionality for data persistence",
      ],
      technologies: ["C#", "Python", "Game Development"],
      contribution:
        "Developed the educational game application including interactive features, learning logic implementation, and backend services for user and progress management.",
      testing:
        "Tested gameplay flows, learning progression logic, and backend data handling for consistency and reliability.",
    },
  };

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Rotating hero roles */
  function cycleRoles() {
    if (!roleText) return;

    roleText.style.opacity = "0";
    roleText.style.transform = "translateY(8px)";

    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleText.textContent = roles[roleIndex];
      roleText.style.opacity = "1";
      roleText.style.transform = "translateY(0)";
    }, 300);
  }

  if (roleText) {
    roleText.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    setInterval(cycleRoles, 2800);
  }

  /* Mobile nav toggle */
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav__links--open");
      navToggle.classList.toggle("nav__toggle--open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinkEls.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav__links--open");
        navToggle.classList.remove("nav__toggle--open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Header scroll effect */
  function onScroll() {
    if (header) {
      header.classList.toggle("header--scrolled", window.scrollY > 50);
    }
    updateActiveNav();
  }

  /* Active nav link highlighting */
  function updateActiveNav() {
    const scrollPos = window.scrollY + header.offsetHeight + 100;

    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    const projectSections = ["featured", "projects"];
    if (projectSections.includes(current)) {
      current = "projects";
    }

    navLinkEls.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${current}`) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Scroll reveal animation */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* Screenshot loader with placeholder fallback */
  function loadScreenshot(container, src, alt, placeholderText) {
    if (!container || !src) {
      if (container && placeholderText) {
        container.innerHTML = `<span class="project-screenshot__placeholder">${placeholderText}</span>`;
      }
      return;
    }

    const img = new Image();
    img.className = "project-screenshot__img";
    img.alt = alt || "Project screenshot";

    img.onload = () => {
      container.innerHTML = "";
      container.appendChild(img);
      container.classList.add("project-screenshot--loaded");
    };

    img.onerror = () => {
      container.classList.remove("project-screenshot--loaded");
      container.innerHTML = `<span class="project-screenshot__placeholder">${placeholderText || "Screenshot"}</span>`;
    };

    img.src = src;
  }

  function initScreenshotAreas() {
    document.querySelectorAll("[data-screenshot]").forEach((el) => {
      if (el.hasAttribute("hidden") && el.id !== "modalScreenshotArea") return;
      loadScreenshot(
        el,
        el.dataset.screenshot,
        el.dataset.screenshotAlt,
        el.dataset.screenshotPlaceholder
      );
    });
  }

  initScreenshotAreas();

  /* Project details modal */
  function buildModalContent(project) {
    const techItems = project.technologies
      .map((tech) => `<li>${tech}</li>`)
      .join("");

    const featureItems = project.features
      .map((feature) => `<li>${feature}</li>`)
      .join("");

    const skillsItems = project.skillsDemonstrated
      ? project.skillsDemonstrated.map((skill) => `<li>${skill}</li>`).join("")
      : "";

    let html = "";

    if (project.overview) {
      html += `
        <div class="modal__section">
          <h4>Overview</h4>
          <p>${project.overview}</p>
        </div>`;
    }

    if (project.highlight) {
      html += `<p class="modal__highlight">${project.highlight}</p>`;
    }

    html += `
      <div class="modal__section">
        <h4>Problem Solved</h4>
        <p>${project.problem}</p>
      </div>
      <div class="modal__section">
        <h4>Main Features</h4>
        <ul>${featureItems}</ul>
      </div>
      <div class="modal__section">
        <h4>Technologies</h4>
        <ul class="modal__tech">${techItems}</ul>
      </div>`;

    if (skillsItems) {
      html += `
        <div class="modal__section">
          <h4>Skills Demonstrated</h4>
          <ul class="modal__skills">${skillsItems}</ul>
        </div>`;
    }

    html += `
      <div class="modal__section">
        <h4>My Contribution</h4>
        <p>${project.contribution}</p>
      </div>
      <div class="modal__section">
        <h4>Testing &amp; QA</h4>
        <p>${project.testing}</p>
      </div>`;

    return html;
  }

  function openModal(projectId) {
    const project = projects[projectId];
    if (!project || !projectModal) return;

    modalTitle.textContent = project.title;
    modalBody.innerHTML = buildModalContent(project);
    projectModal.classList.add("modal--open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    if (!projectModal) return;

    projectModal.classList.remove("modal--open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-project-details]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.getAttribute("data-project-details"));
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal?.classList.contains("modal--open")) {
      closeModal();
    }
  });
})();
