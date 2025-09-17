// ===== OPTIMIZED PORTFOLIO JAVASCRIPT - PERFORMANCE FOCUSED =====
// Professional Skills Data Configuration
const skillsData = {
    "Software & Development Skills": {
        description: "Technical expertise in programming languages, frameworks, and development tools",
        skills: [
            {
                name: "html",
                description:
                    "Crafting clean and semantic web pages using modern HTML5 standards, accessibility best practices, and responsive layout structures.",
                color: "#E44D26",
                type: "svg",
                rating: 90,
                certifications: ["HTML5 Mastery - Angela Yu (Udemy)"],
                icon: `<img src="img/icon skills/7016965741557996995.svg" alt="HTML Icon" class="skill-icon" />`,
            },
            {
                name: "CSS",
                description:
                    "Styling beautiful and responsive websites using modern CSS3 techniques including Flexbox, Grid, transitions, and animations.",
                color: "#264de4",
                type: "img",
                rating: 90,
                certifications: ["Udemy - Angela Yu's Web Development Bootcamp"],
                icon: `<img src="img/icon skills/367592651557997006.svg" />`,
            },
            {
                name: "JavaScript",
                description: "Interactive experiences, DOM manipulation, and logic building using modern JavaScript (ES6+).",
                color: "#F7DF1E",
                type: "img",
                rating: 90,
                certifications: ["JavaScript Bootcamp by Angela Yu (Udemy)"],
                icon: `<img src="img/icon skills/13691885491579517854.svg" />`,
            },
            {
                name: "Python",
                description:
                    "Versatile programming for web development, automation, data science, and machine learning applications with clean, readable code.",
                color: "#3776AB",
                type: "svg",
                rating: 80,
                certifications: ["Python Developer Certification", "Data Science with Python"],
                icon: `<img src="img/icon skills/15774175881551942290.svg" />`,
            },
            {
                name: "Flutter",
                description:
                    "Cross-platform app development with beautiful UIs and strong performance using Dart and Flutter. Over 120+ screens built for clients and final-year student projects.",
                color: "#02569B",
                type: "img",
                rating: 100,
                certifications: ["Flutter Developer (Self-Taught & Practical Experience)"],
                icon: `<img src="img/icon skills/icons8-flutter.svg" />`,
            },
            {
                name: "C",
                description:
                    "Developing low-level software and understanding computer architecture using C programming for systems and embedded development.",
                color: "#A8B9CC",
                type: "svg",
                rating: 70,
                certifications: ["C Programming Basics", "Pointers and Memory Management"],
                icon: `<img src="img/icon skills/11526589111536208090 (1).svg" width="48" height="48" />`,
            },
            {
                name: "Git",
                description:
                    "Version control mastery with advanced branching strategies, collaborative workflows, and CI/CD integration.",
                color: "#F05032",
                type: "svg",
                rating: 90,
                certifications: ["Git Version Control Expert", "DevOps Fundamentals"],
                icon: `<img src="img/icon skills/8347720961540553611.svg" />`,
            },
            {
                name: "SQL",
                description:
                    "Designing and querying relational databases using SQL for structured data, normalization, and optimized performance.",
                color: "#336791",
                type: "svg",
                rating: 85,
                certifications: ["Relational Database Design", "SQL Query Mastery"],
                icon: `<img src="img/icon skills/14321892661553750211.svg "alt="SQL Icon" width="48" height="48" />`,
            },
            {
                name: "Bootstrap",
                description:
                    "Crafting responsive and modern websites using Bootstrap's powerful grid system, utility classes, and pre-designed components.",
                color: "#7952B3",
                type: "svg",
                rating: 85,
                certifications: ["Bootstrap Mastery Certificate", "Responsive Design Pro"],
                icon: `<img src="img/icon skills/6870940341536207300.svg" class="skill-icon" />`,
            },
            {
                name: "Odoo",
                description: "Developing and customizing ERP applications for business management using Odoo framework.",
                color: "#874EAD",
                type: "svg",
                rating: 80,
                certifications: ["Odoo Developer Fundamentals"],
                icon: `<img src="img/icon skills/13539613351553750363.svg" class="skill-icon">`,
            },
            {
                name: "WordPress",
                description: "Building and managing dynamic websites and blogs using WordPress CMS.",
                color: "#21759B",
                type: "svg",
                rating: 50,
                certifications: ["WordPress Site Builder"],
                icon: `<img src="img/icon skills/13276460671530099345.svg" class="skill-icon">`,
            },
        ],
    },
    "Creative & Productivity Tools": {
        description:
            "Expertise in design, video editing, and office productivity software for diverse creative and professional tasks.",
        skills: [
            {
                name: "Figma",
                description: "Designing modern UI/UX interfaces and prototypes collaboratively using Figma's versatile tools.",
                color: "#F24E1E",
                type: "svg",
                rating: 95,
                certifications: ["Udemy – UI/UX Design with Figma"],
                icon: `<img src="img/icon skills/icons8-figma.svg" class="skill-icon" />`,
            },
            {
                name: "Illustrator",
                description: "Creating vector illustrations, logos, and visual assets with precision using Adobe Illustrator.",
                color: "#FF9A00",
                type: "svg",
                rating: 90,
                certifications: ["Adobe Basics – Self-taught"],
                icon: `<img src="img/icon skills/adobe-illustrator-svgrepo-com.svg" alt="Illustrator Icon" class="skill-icon" />`,
            },
            {
                name: "After Effects",
                description: "Animating visuals and crafting motion graphics and video effects for reels and digital content.",
                color: "#9966FF",
                type: "svg",
                rating: 92,
                certifications: ["YouTube + Projects – Self-practice"],
                icon: `<img src="img/icon skills/adobe-after-effects-svgrepo-com.svg" alt="After Effects Icon" class="skill-icon" />`,
            },
            {
                name: "Premiere Pro",
                description: "Editing professional videos and creating high-quality content with Adobe Premiere Pro.",
                color: "#EA77FF",
                type: "svg",
                rating: 85,
                certifications: ["Practical Experience – Client Projects"],
                icon: `<img src="img/icon skills/adobe-premiere-svgrepo-com.svg" class="skill-icon" />`,
            },
            {
                name: "CapCut",
                description: "Fast video editing for mobile-focused content with effects, transitions, and creative popups.",
                color: "#00C4B4",
                type: "svg",
                rating: 88,
                certifications: ["CapCut Advanced Tutorial Series"],
                icon: `<img src="img/icon skills/capcut-svgrepo-com.svg" alt="CapCut Icon" class="skill-icon" />`,
            },
            {
                name: "InShot",
                description: "Creating simple social media videos with quick edits, filters, and transitions on mobile.",
                color: "#FF6B6B",
                type: "svg",
                rating: 80,
                certifications: ["Personal Projects – Reels & Shorts"],
                icon: `<img src="img/icon skills/inshot-seeklogo-2.svg" alt="InShot Icon" class="skill-icon" />`,
            },
            {
                name: "Canva",
                description:
                    "Designing creative posts, presentations, and templates using Canva's intuitive drag & drop tools.",
                color: "#00C4CC",
                type: "svg",
                rating: 90,
                certifications: ["Canva for Creators – Online"],
                icon: `<img src="img/icon skills/canva-icon.svg" class="skill-icon" />`,
            },
            {
                name: "Microsoft Word",
                description: "Document creation, formatting, and professional text layout for reports and academic work.",
                color: "#2B579A",
                type: "svg",
                rating: 90,
                certifications: ["Word Essentials Certification"],
                icon: `<img src="img/icon skills/ms-word-svgrepo-com.svg" class="skill-icon">`,
            },
            {
                name: "Microsoft Excel",
                description: "Data analysis, charts, and formulas for tracking, budgeting, and automation tasks.",
                color: "#217346",
                type: "svg",
                rating: 88,
                certifications: ["Excel Data Management Certification"],
                icon: `<img src="img/icon skills/excel-svgrepo-com.svg" class="skill-icon">`,
            },
            {
                name: "Microsoft PowerPoint",
                description: "Professional presentations with animations, layouts, and visuals for meetings and lectures.",
                color: "#D24726",
                type: "svg",
                rating: 85,
                certifications: ["PowerPoint Presentation Mastery"],
                icon: `<img src="img/icon skills/powerpoint-svgrepo-com.svg" alt="PowerPoint Icon" class="skill-icon">`,
            },
        ],
    },
    "Guidance & Personal Skills": {
        description: "Leadership, communication, and specialized guidance capabilities that enhance team collaboration",
        skills: [
            {
                name: "Leadership",
                description:
                    "Leading cross-functional teams, mentoring junior developers, and driving projects to successful completion with strategic vision.",
                color: "#4ECDC4",
                type: "text",
                rating: 85,
                certifications: ["Certified Scrum Master", "Leadership Excellence Program"],
                icon: '<img src="img/icon skills/leadership-svgrepo-com.svg" alt="Leadership Icon" class="skill-icon">',
            },
            {
                name: "Hajj & Umrah Guidance",
                description:
                    "Providing comprehensive spiritual guidance and practical support for pilgrimage journeys, including logistics and religious protocols.",
                color: "#45B7D1",
                type: "text",
                rating: 95,
                certifications: ["Certified Hajj Guide", "Islamic Studies Diploma"],
                icon: '<img src="img/icon skills/kaaba-svgrepo-com.svg" alt="Hajj & Umrah Icon" class="skill-icon">',
            },
            {
                name: "Problem Solving",
                description:
                    "Analytical thinking and creative problem-solving for complex technical challenges, with systematic debugging and optimization approaches.",
                color: "#96CEB4",
                type: "text",
                rating: 92,
                certifications: ["Critical Thinking Certification", "Systems Analysis"],
                icon: '<img src="img/icon skills/think-creative-thinking-svgrepo-com.svg" alt="Problem Solving Icon" class="skill-icon">',
            },
            {
                name: "Team Collaboration",
                description:
                    "Working effectively in agile environments, fostering cooperation across departments, and building strong professional relationships.",
                color: "#FFEAA7",
                type: "text",
                rating: 90,
                certifications: ["Agile Team Collaboration", "Cross-Cultural Communication"],
                icon: '<img src="img/icon skills/slack-svgrepo-com (1).svg" alt="Team Collaboration Icon" class="skill-icon">',
            },
            {
                name: "Project Management",
                description:
                    "Planning, organizing, and delivering complex projects on time and within scope using modern methodologies and tools.",
                color: "#DDA0DD",
                type: "text",
                rating: 87,
                certifications: ["PMP Certification", "Agile Project Management"],
                icon: `<img src="img/icon skills/jira-svgrepo-com.svg" alt="Project Management Icon" class="skill-icon">`,
            },
        ],
    },
}

// ===== OPTIMIZED MY WORK SECTION - PERFORMANCE FOCUSED =====
let projectsCache = null
let isInitialized = false
// Removed unused currentScrollDirection
let lastScrollY = 0

// Optimized project loading with error handling
async function initializeOptimizedWorkSection() {
    if (isInitialized) return

    const projectsGallery = document.getElementById("projectsGallery")
    const worksContainer = document.querySelector(".works-container")
    if (!projectsGallery || !worksContainer) {
        console.warn("Projects gallery or works container not found")
        return
    }

    // Create a wrapper for the gallery and arrows
    const projectsGalleryWrapper = document.createElement("div")
    projectsGalleryWrapper.className = "projects-gallery-wrapper"
    worksContainer.appendChild(projectsGalleryWrapper)

    // Move the projectsGallery into the new wrapper
    projectsGalleryWrapper.appendChild(projectsGallery)

    try {
        // Show loading state
        projectsGallery.innerHTML = '<div class="loading-placeholder">Loading projects...</div>'

        // Fetch projects with timeout
        if (!projectsCache) {
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

            try {
                const response = await fetch("projects.json", {
                    signal: controller.signal,
                })
                clearTimeout(timeoutId)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                projectsCache = await response.json()
            } catch (error) {
                if (error.name === "AbortError") {
                    throw new Error("Request timeout - please check your connection")
                }
                throw error
            }
        }

        if (!Array.isArray(projectsCache) || projectsCache.length === 0) {
            throw new Error("No valid project data found")
        }

        // Clear loading state and render projects
        projectsGallery.innerHTML = ""

        // Use requestAnimationFrame for smooth rendering
        requestAnimationFrame(() => {
            renderProjectCards(projectsGallery, projectsCache)
            isInitialized = true
            setupHorizontalScrollArrows(projectsGallery, projectsGalleryWrapper) // Setup arrows after rendering
        })
    } catch (error) {
        console.error("Error loading projects:", error)
        showProjectError(projectsGallery, error.message)
    }
}

function renderProjectCards(container, projects) {
    const fragment = document.createDocumentFragment()

    projects.forEach((project, index) => {
        const card = createOptimizedProjectCard(project, index)
        fragment.appendChild(card)
    })

    container.appendChild(fragment)
}

function createOptimizedProjectCard(project, index) {
    const card = document.createElement("div")
    card.className = "project-card"
    // Add staggered entrance animation
    card.style.animationDelay = `${index * 0.15}s`
    card.style.opacity = "0"
    card.style.transform = "translateX(40px)" // Changed from translateY

    let mediaHtml = ""
    const mediaUrl = project.image

    if (mediaUrl) {
        const extension = mediaUrl.split(".").pop().toLowerCase()

        if (extension === "mp4" || extension === "webm" || extension === "ogg") {
            // Optimized video with Safari compatibility
            mediaHtml = `
    <video class="project-media" 
           autoplay loop muted playsinline 
           preload="metadata"
           webkit-playsinline="true"
           src="${mediaUrl}">
    </video>
  `
        } else if (extension === "json") {
            // Optimized Lottie with immediate start and Safari compatibility
            mediaHtml = `
    <lottie-player class="project-media" 
                  src="${mediaUrl}" 
                  background="transparent" 
                  speed="1" 
                  loop 
                  autoplay
                  renderer="svg"
                  loading="eager"
                  style="width: 100%; height: 100%;">
    </lottie-player>
  `
        } else if (
            extension === "gif" ||
            extension === "jpg" ||
            extension === "jpeg" ||
            extension === "png" ||
            extension === "svg"
        ) {
            // Optimized image loading
            mediaHtml = `
      <img class="project-media" 
           src="${mediaUrl}" 
           alt="${project.title}"
           loading="lazy"
           decoding="async" />
    `
        } else {
            // Default fallback
            mediaHtml = `
      <img class="project-media" 
           src="${mediaUrl}" 
           alt="${project.title}"
           loading="lazy"
           decoding="async" />
    `
        }
    } else {
        mediaHtml = `<div class="project-media-placeholder">No Media Available</div>`
    }

    card.innerHTML = `
<div class="project-image">
  ${mediaHtml}
  <div class="project-info-icon" onclick="downloadProjectPDF('${project.title}')" title="Download PDF">
    i
  </div>
</div>
<div class="project-description">
  <h3>${project.title}</h3>
  <p>${project.description}</p>
</div>
`

    // Trigger entrance animation after a short delay
    setTimeout(
        () => {
            card.style.opacity = "1"
            card.style.transform = "translateX(0)" // Changed from translateY
            card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        },
        100 + index * 150,
    )

    return card
}

function showProjectError(container, message) {
    container.innerHTML = `
<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
  <p>Unable to load projects: ${message}</p>
  <button onclick="retryProjectLoad()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Retry
  </button>
</div>
`
}

function retryProjectLoad() {
    isInitialized = false
    projectsCache = null
    initializeOptimizedWorkSection()
}

// Make retry function globally available
window.retryProjectLoad = retryProjectLoad

// ===== OPTIMIZED SCROLL ANIMATIONS WITH REVERSE SUPPORT =====
function initializeOptimizedScrollAnimations() {
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 0.9],
        rootMargin: "0px 0px -10% 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const element = entry.target
            const isIntersecting = entry.isIntersecting
            const intersectionRatio = entry.intersectionRatio

            // Determine scroll direction
            const currentY = window.pageYOffset
            const scrollingDown = currentY > lastScrollY
            lastScrollY = currentY

            if (isIntersecting && intersectionRatio > 0.1) {
                // Element is entering viewport
                element.classList.remove("animate-out")
                element.classList.add("animate-in")

                // Handle special animations for specific sections
                if (element.querySelector(".about-title")) {
                    setTimeout(() => {
                        const title = element.querySelector(".about-title")
                        if (title) title.classList.add("animate-in")
                    }, 300)
                }

                // Staggered animations for work section
                if (element.classList.contains("projects-gallery")) {
                    const cards = element.querySelectorAll(".project-card")
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = "1"
                            card.style.transform = "translateX(0)" // Changed from translateY
                        }, index * 50)
                    })
                }

                // Skills section animations
                if (element.classList.contains("skill-category")) {
                    const skillItems = element.querySelectorAll(".skill-icon-wrapper")
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animationPlayState = "running"
                        }, index * 80)
                    })
                }
            } else if (!isIntersecting && intersectionRatio === 0) {
                // Element is leaving viewport - add reverse animation
                if (scrollingDown) {
                    // Scrolling down - element going up
                    element.classList.remove("animate-in")
                    element.classList.add("animate-out")
                } else {
                    // Scrolling up - element going down
                    element.classList.remove("animate-in")
                    element.classList.add("animate-out")
                }
            }
        })
    }, observerOptions)

    // Observe all animatable elements
    const animateElements = document.querySelectorAll(
        ".animate-on-scroll, .works-header, .projects-gallery, .skill-category",
    )
    animateElements.forEach((el) => observer.observe(el))
}

// ===== OPTIMIZED RESIZE HANDLER =====
let resizeTimeout
function handleOptimizedResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
        // Only reinitialize if needed
        if (isInitialized && window.innerWidth !== window.lastWidth) {
            window.lastWidth = window.innerWidth
            // Minimal reinitialization - just update layout
            updateVerticalDesignElementHeight()
            const projectsGallery = document.getElementById("projectsGallery")
            const projectsGalleryWrapper = document.querySelector(".projects-gallery-wrapper")
            if (projectsGallery && projectsGalleryWrapper) {
                updateHorizontalScrollArrowVisibility(projectsGallery, projectsGalleryWrapper) // Update indicator on resize
            }
        }
    }, 250)
}

// Function to update the height of the vertical design element
function updateVerticalDesignElementHeight() {
    const verticalElement = document.querySelector(".vertical-design-element")
    const skillsSection = document.getElementById("skills")

    if (verticalElement && skillsSection) {
        const skillsBottom = skillsSection.offsetTop + skillsSection.offsetHeight
        verticalElement.style.height = `${skillsBottom}px`
    }
}

// Function to update the visibility of horizontal scroll arrows
function updateHorizontalScrollArrowVisibility(projectsGallery, projectsGalleryWrapper) {
    const { scrollWidth, clientWidth, scrollLeft } = projectsGallery
    const isScrollable = scrollWidth > clientWidth

    if (!isScrollable) {
        projectsGalleryWrapper.querySelector(".scroll-arrow.left").classList.add("hidden")
        projectsGalleryWrapper.querySelector(".scroll-arrow.right").classList.add("hidden")
        return
    }

    // Show/hide arrows based on scroll position
    if (scrollLeft <= 5) {
        // Small buffer for start
        projectsGalleryWrapper.querySelector(".scroll-arrow.left").classList.add("hidden")
    } else {
        projectsGalleryWrapper.querySelector(".scroll-arrow.left").classList.remove("hidden")
    }

    if (scrollLeft + clientWidth >= scrollWidth - 5) {
        // Small buffer for end
        projectsGalleryWrapper.querySelector(".scroll-arrow.right").classList.add("hidden")
    } else {
        projectsGalleryWrapper.querySelector(".scroll-arrow.right").classList.remove("hidden")
    }
}

// ===== MAIN APPLICATION INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
    // Store initial width for resize comparison
    window.lastWidth = window.innerWidth

    // Initialize all components with optimized timing
    initializePremiumSkillsSection()
    initializePremiumNavigation()
    initializePremiumInteractions()
    initializeMobileMenu() // Defined globally here
    updateVerticalDesignElementHeight()

    // Initialize optimized scroll animations
    initializeOptimizedScrollAnimations()

    // Initialize work section with slight delay for better UX
    setTimeout(() => {
        initializeOptimizedWorkSection()
    }, 100) // Reduced delay for faster loading
})

// Add optimized resize listener
window.addEventListener("resize", handleOptimizedResize, { passive: true })

// ===== PREMIUM SKILLS SECTION INITIALIZATION =====
function initializePremiumSkillsSection() {
    const skillsGrid = document.getElementById("skillsGrid")
    if (!skillsGrid) return

    skillsGrid.innerHTML = ""

    const categoriesContainer = document.createElement("div")
    categoriesContainer.className = "skills-categories"

    Object.entries(skillsData).forEach(([categoryName, categoryData], categoryIndex) => {
        const categoryElement = createPremiumCategoryElement(categoryName, categoryData, categoryIndex)
        categoriesContainer.appendChild(categoryElement)
    })

    skillsGrid.appendChild(categoriesContainer)
    initializePremiumSkillsObserver()
}

// Create premium category element
function createPremiumCategoryElement(categoryName, categoryData, categoryIndex) {
    const categoryDiv = document.createElement("div")
    categoryDiv.className = "skill-category animate-on-scroll"
    categoryDiv.style.transitionDelay = `${categoryIndex * 0.2}s`

    const categoryHeader = document.createElement("div")
    categoryHeader.className = "category-header"
    categoryHeader.innerHTML = `
<h3 class="category-title">${categoryName}</h3>
<p class="category-description">${categoryData.description}</p>
`

    const skillsGrid = document.createElement("div")
    skillsGrid.className = "skills-grid"

    categoryData.skills.forEach((skill, index) => {
        const skillElement = createPremiumSkillElement(skill, index)
        skillsGrid.appendChild(skillElement)
    })

    categoryDiv.appendChild(categoryHeader)
    categoryDiv.appendChild(skillsGrid)

    return categoryDiv
}

// Create premium skill element
function createPremiumSkillElement(skill, index) {
    const skillWrapper = document.createElement("div")
    skillWrapper.className = "skill-icon-wrapper"
    skillWrapper.style.color = skill.color

    const iconContent = skill.type === "svg" ? skill.icon : `<span class="text-icon">${skill.icon}</span>`
    const certificationsList = skill.certifications.map((cert) => `<li>${cert}</li>`).join("")

    skillWrapper.innerHTML = `
<div class="skill-icon">${iconContent}</div>
<div class="skill-popup">
  <div class="popup-header">
    <div class="popup-icon" style="color: ${skill.color};">${iconContent}</div>
    <h3 class="popup-title">${skill.name}</h3>
  </div>
  <p class="popup-description">${skill.description}</p>
  <div class="popup-details">
    <div class="popup-certifications">
      <h4>Certifications & Training</h4>
      <ul>${certificationsList}</ul>
    </div>
    <div class="popup-rating">
      <h4>Proficiency</h4>
      <div class="rating-bar">
        <div class="rating-fill" style="width: ${skill.rating}%"></div>
      </div>
      <span class="rating-text">${skill.rating}%</span>
    </div>
  </div>
</div>
`

    return skillWrapper
}

// Premium skills intersection observer
function initializePremiumSkillsObserver() {
    const skillCategories = document.querySelectorAll(".skill-category")
    if (!skillCategories.length) return

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in")

                    const skillItems = entry.target.querySelectorAll(".skill-icon-wrapper")
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animationPlayState = "running"
                        }, index * 100)
                    })
                }
            })
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        },
    )

    skillCategories.forEach((category) => observer.observe(category))
}

// ===== PREMIUM NAVIGATION SYSTEM =====
function initializePremiumNavigation() {
    const navbar = document.querySelector(".navbar")
    const navLinks = document.querySelectorAll(".nav-link")

    // Premium navbar scroll effect
    let ticking = false
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
        ticking = false
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar)
                ticking = true
            }
        },
        { passive: true },
    )

    // Premium smooth scrolling for navigation
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href")
            const currentPath = window.location.pathname.split("/").pop() || "index.html"

            if (href.includes("index.html") && currentPath !== "index.html") {
                return
            }

            if (href.startsWith("#") || (href.includes("index.html") && currentPath === "index.html")) {
                e.preventDefault()
                const targetId = href.split("#")[1]
                const targetSection = document.querySelector(`#${targetId}`)

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    })
                } else if (targetId === "home") {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
            }
        })
    })
}

// ===== PREMIUM INTERACTIONS SYSTEM =====
function initializePremiumInteractions() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            createUltraSmoothRippleEffect(this, e)
            this.style.transform = "scale(0.95)"
            setTimeout(() => {
                this.style.transform = ""
            }, 150)
        })
    })

    const socialIcons = document.querySelectorAll(".social-icon")
    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${2 + index * 0.12}s`
        icon.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px) scale(1.15)"
        })
        icon.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)"
        })
        icon.addEventListener("click", () => {
            showUltraSmoothNotification(`Opening ${["Instagram", "Twitter", "Facebook", "LinkedIn"][index]} profile...`)
        })
    })

    const professionalBadge = document.querySelector(".professional-badge")
    const idBadge = document.querySelector(".id-badge")
    const realisticBadgeHolder = document.querySelector(".realistic-badge-holder")

    if (idBadge && professionalBadge) {
        idBadge.addEventListener("mouseenter", () => {
            professionalBadge.style.animationPlayState = "paused"
            professionalBadge.style.transform = "translateX(-50%) rotate(0deg) scale(1.15)"
            if (realisticBadgeHolder) {
                realisticBadgeHolder.style.transform = "scale(1.12)"
                realisticBadgeHolder.style.boxShadow = "0 18px 55px rgba(0, 0, 0, 0.22)"
            }
        })

        idBadge.addEventListener("mouseleave", () => {
            professionalBadge.style.animationPlayState = "running"
            professionalBadge.style.transform = "translateX(-50%)"
            if (realisticBadgeHolder) {
                realisticBadgeHolder.style.transform = "scale(1)"
                realisticBadgeHolder.style.boxShadow = ""
            }
        })
    }

    const hireMeBtn = document.querySelector(".hire-me-btn")
    if (hireMeBtn) {
        hireMeBtn.addEventListener("click", (e) => {
            createUltraSmoothRippleEffect(hireMeBtn, e)
            window.location.href = "contact.html"
        })
    }

    const phoneContactElement = document.querySelector(".phone-contact")
    const emailContactElement = document.querySelector(".email-contact")

    if (phoneContactElement) {
        phoneContactElement.addEventListener("click", (e) => {
            createUltraSmoothRippleEffect(phoneContactElement, e)
        })
    }

    if (emailContactElement) {
        emailContactElement.addEventListener("click", (e) => {
            createUltraSmoothRippleEffect(emailContactElement, e)
        })
    }

    const contactBtn = document.querySelector("#contactBtn")
    if (contactBtn) {
        if (window.location.pathname.includes("contact.html")) {
            contactBtn.style.display = "none"
        } else {
            contactBtn.style.display = ""
            contactBtn.classList.add("active")
            const newContactBtn = contactBtn.cloneNode(true)
            contactBtn.parentNode.replaceChild(newContactBtn, contactBtn)

            newContactBtn.addEventListener("click", (e) => {
                e.preventDefault()
                createUltraSmoothRippleEffect(newContactBtn, e)
                window.location.href = "contact.html"
            })
        }
    }
}

// ===== PREMIUM UTILITY FUNCTIONS =====
function createUltraSmoothRippleEffect(button, event) {
    const ripple = document.createElement("span")
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")
    button.appendChild(ripple)

    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove()
        }
    }, 600)
}

// Ultra-smooth notification system
function showUltraSmoothNotification(message) {
    const notification = document.createElement("div")
    notification.style.cssText = `
position: fixed;
top: 20px;
right: 20px;
background: linear-gradient(135deg, #007bff, #0056b3);
color: white;
padding: 16px 24px;
border-radius: 12px;
box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
z-index: 10000;
font-weight: 600;
transform: translateX(400px);
transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`
    notification.textContent = message
    document.body.appendChild(notification)

    requestAnimationFrame(() => {
        notification.style.transform = "translateX(0)"
    })

    setTimeout(() => {
        notification.style.transform = "translateX(400px)"
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification)
            }
        }, 400)
    }, 3000)
}

window.createUltraSmoothRippleEffect = createUltraSmoothRippleEffect
window.showUltraSmoothNotification = showUltraSmoothNotification // Make it globally available for contact-script.js

window.scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

const backgroundShape = document.querySelector(".curved-background-shape")
if (backgroundShape) {
    let ticking = false
    function updateParallax() {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.25
        backgroundShape.style.transform = `rotate(15deg) translateY(${rate}px)`
        ticking = false
    }

    window.addEventListener(
        "scroll",

        () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax)
                ticking = true
            }
        },
        { passive: true },
    )
}

window.addEventListener("load", () => {
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})

// ===== MOBILE MENU FUNCTIONALITY (Defined once here) =====
function initializeMobileMenu() {
    const burgerIcon = document.getElementById("burgerMenuIcon")
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")
    const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon")
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-menu .mobile-nav-link")
    const mobileContactBtn = document.getElementById("mobileContactBtn")

    if (burgerIcon && mobileMenuOverlay && mobileMenuCloseIcon) {
        burgerIcon.addEventListener("click", () => {
            mobileMenuOverlay.classList.add("active")
            burgerIcon.classList.add("active")
            document.body.style.overflow = "hidden"
        })

        mobileMenuCloseIcon.addEventListener("click", () => {
            mobileMenuOverlay.classList.remove("active")
            burgerIcon.classList.remove("active")
            document.body.style.overflow = ""
        })

        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                const href = link.getAttribute("href")
                if (href.startsWith("index.html#")) {
                    e.preventDefault()
                    const targetId = href.split("#")[1]
                    const targetSection = document.querySelector(`#${targetId}`)
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80
                        window.scrollTo({
                            top: offsetTop,
                            behavior: "smooth",
                        })
                    } else if (targetId === "home") {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                }
                mobileMenuOverlay.classList.remove("active")
                burgerIcon.classList.remove("active")
                document.body.style.overflow = ""
            })
        })

        if (mobileContactBtn) {
            mobileContactBtn.addEventListener("click", (e) => {
                createUltraSmoothRippleEffect(mobileContactBtn, e)
                mobileMenuOverlay.classList.remove("active")
                burgerIcon.classList.remove("active")
                document.body.style.overflow = ""
                window.location.href = "contact.html"
            })
        }
    }
}

// Function to setup horizontal scroll arrows
function setupHorizontalScrollArrows(projectsGallery, projectsGalleryWrapper) {
    // Remove any existing arrows to prevent duplicates on re-render
    const existingArrows = projectsGalleryWrapper.querySelectorAll(".scroll-arrow")
    existingArrows.forEach((arrow) => arrow.remove())

    const leftArrowHtml = `
  <div class="scroll-arrow left">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
  </div>
`
    const rightArrowHtml = `
  <div class="scroll-arrow right">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
  </div>
`

    projectsGalleryWrapper.insertAdjacentHTML("beforeend", leftArrowHtml)
    projectsGalleryWrapper.insertAdjacentHTML("beforeend", rightArrowHtml)

    const leftArrow = projectsGalleryWrapper.querySelector(".scroll-arrow.left")
    const rightArrow = projectsGalleryWrapper.querySelector(".scroll-arrow.right")

    // Click handlers for arrows
    leftArrow.addEventListener("click", () => {
        projectsGallery.scrollBy({ left: -projectsGallery.clientWidth * 0.7, behavior: "smooth" })
    })
    rightArrow.addEventListener("click", () => {
        projectsGallery.scrollBy({ left: projectsGallery.clientWidth * 0.7, behavior: "smooth" })
    })

    // Initial visibility update and event listeners
    updateHorizontalScrollArrowVisibility(projectsGallery, projectsGalleryWrapper)
    projectsGallery.addEventListener(
        "scroll",
        () => updateHorizontalScrollArrowVisibility(projectsGallery, projectsGalleryWrapper),
        { passive: true },
    )
    window.addEventListener(
        "resize",
        () => updateHorizontalScrollArrowVisibility(projectsGallery, projectsGalleryWrapper),
        { passive: true },
    )
}

// ===== PREMIUM RIPPLE EFFECT STYLES =====
const premiumStyle = document.createElement("style")
premiumStyle.textContent = `
.ripple {
position: absolute;
border-radius: 50%;
background: rgba(255, 255, 255, 0.6);
transform: scale(0);
animation: ultra-smooth-ripple-animation 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
pointer-events: none;
}

@keyframes ultra-smooth-ripple-animation {
to {
  transform: scale(4);
  opacity: 0;
}
}

.loading-placeholder {
grid-column: 1 / -1;
text-align: center;
padding: 60px 20px;
color: #666;
font-size: 18px;
}

.project-card {
opacity: 0;
transform: translateX(30px); /* Changed from translateY */
animation: projectCardAppear 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes projectCardAppear {
to {
  opacity: 1;
  transform: translateX(0); /* Changed from translateY */
}
}
`
document.head.appendChild(premiumStyle)

// ===== Visitor Location Tracking =====
fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
        const visitorData = {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            org: data.org,
            date: new Date().toLocaleString(),
        }

        // إرسال البيانات إلى Formspree
        fetch("https://formspree.io/f/myzpdzyy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitorData),
        }).catch((err) => console.error("خطأ في الإرسال:", err))
    })
    .catch((err) => console.error("خطأ في جلب الموقع:", err))

// ===== PDF DOWNLOAD FUNCTION =====
function downloadProjectPDF(projectTitle) {
    // Create a safe filename from the project title
    const safeFileName = projectTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()
    const pdfFileName = `${safeFileName}.pdf`

    // Create a temporary link element
    const link = document.createElement("a")
    link.href = `pdfs/${pdfFileName}` // Assumes PDFs are in a 'pdfs' folder
    link.download = pdfFileName
    link.style.display = "none"

    // Add to DOM, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// Make the function globally available
window.downloadProjectPDF = downloadProjectPDF
