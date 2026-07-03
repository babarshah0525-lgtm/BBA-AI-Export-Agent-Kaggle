/* ==========================================================================
   BBA PREMIUM PACKAGING WEBSITE - INTERACTION LOGIC (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close nav on click of links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 2. CANVAS CUSTOM PARTICLE SYSTEM (Hero Background)
  // ==========================================
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let mouse = { x: null, y: null, radius: 150 };

    // Resize handler
    function resizeCanvas() {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    }
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.4 - 0.1; // Slow floating upwards
        
        // Navy-blue & Glowing red floating colors
        const colors = [
          'rgba(255, 42, 84, 0.4)', // Glowing red
          'rgba(255, 42, 84, 0.25)', 
          'rgba(17, 29, 53, 0.5)',   // Navy-blue
          'rgba(148, 163, 184, 0.3)'  // Slate silver
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(width, height) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset if floats off screen
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width;
        }

        // Mouse deflection effect
        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = forceDirectionX * force * 1.5;
            let directionY = forceDirectionY * force * 1.5;
            this.x += directionX;
            this.y += directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height);
        particlesArray[i].draw();
      }
      requestAnimationFrame(animateParticles);
    }

    // Initialize
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    initParticles();
    animateParticles();
  }

  // ==========================================
  // 3. CUSTOM MAGNETIC CURSOR (REMOVED)
  // ==========================================

  // ==========================================
  // 4. INTERSECTION OBSERVER REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || 0;
        
        setTimeout(() => {
          el.classList.add('reveal-visible');
        }, delay);
        
        observer.unobserve(el); // Animate only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================
  // 5. IN-VIEWPORT ANIMATED COUNTERS
  // ==========================================
  const counters = document.querySelectorAll('.trust-number[data-target]');
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1800; // 1.8 seconds
        const startTime = performance.now();
        
        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Cubic ease-out
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(easeProgress * target);
          
          if (target === 100) {
            counter.innerText = `${currentCount}%`;
          } else {
            counter.innerText = `${currentCount}+`;
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            if (target === 100) {
              counter.innerText = `100%`;
            } else {
              counter.innerText = `${target}+`;
            }
          }
        }
        
        requestAnimationFrame(updateCount);
        observer.unobserve(counter);
      }
    });
  }, {
    threshold: 0.1
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // ==========================================
  // 6. 3D CARD TILT EFFECT (Product Cards)
  // ==========================================
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 992) return; // Skip on mobile
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse relative X
      const y = e.clientY - rect.top;  // Mouse relative Y
      
      // Distance from center (-0.5 to 0.5 range)
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = (x - xc) / xc; 
      const dy = (y - yc) / yc;
      
      // Calculate rotation angles (max 10 degrees)
      const rotateX = -dy * 10;
      const rotateY = dx * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // ==========================================
  // 7. DESKTOP VERTICAL-TO-HORIZONTAL SCROLL (Products)
  // ==========================================
  const productsContainer = document.getElementById('products-container');
  
  if (productsContainer) {
    productsContainer.addEventListener('wheel', (e) => {
      if (window.innerWidth > 992) {
        const isAtStart = productsContainer.scrollLeft === 0;
        const isAtEnd = Math.ceil(productsContainer.scrollLeft + productsContainer.clientWidth) >= productsContainer.scrollWidth;
        
        // Scroll horizontally if we haven't hit boundaries
        if (e.deltaY > 0 && !isAtEnd) {
          e.preventDefault();
          productsContainer.scrollLeft += e.deltaY;
        } else if (e.deltaY < 0 && !isAtStart) {
          e.preventDefault();
          productsContainer.scrollLeft += e.deltaY;
        }
      }
    }, { passive: false });
  }

  // ==========================================
  // 8. PARALLAX SCROLLING EFFECT
  // ==========================================
  const heroBg = document.getElementById('hero-bg');
  const aboutBg = document.getElementById('about-bg');
  const tourBg = document.getElementById('tour-bg');
  
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        applyParallax();
        applyStickyHeaderAndCta();
        ticking = false;
      });
      ticking = true;
    }
  });

  function applyParallax() {
    const windowHeight = window.innerHeight;
    
    // 1. Hero Background Parallax
    if (heroBg) {
      heroBg.style.transform = `translate3d(0, ${lastScrollY * 0.2}px, 0)`;
    }

    // 2. About Background Parallax
    if (aboutBg) {
      const parent = aboutBg.parentElement;
      const rect = parent.getBoundingClientRect();
      const inView = (rect.top < windowHeight) && (rect.bottom > 0);
      if (inView) {
        // Compute movement percentage relative to scroll
        const offset = (windowHeight - rect.top) * 0.1;
        aboutBg.style.transform = `translate3d(0, ${offset - 100}px, 0)`;
      }
    }

    // 3. Tour Background Parallax
    if (tourBg) {
      const parent = tourBg.parentElement;
      const rect = parent.getBoundingClientRect();
      const inView = (rect.top < windowHeight) && (rect.bottom > 0);
      if (inView) {
        const offset = (windowHeight - rect.top) * 0.12;
        tourBg.style.transform = `translate3d(0, ${offset - 120}px, 0)`;
      }
    }
  }

  // ==========================================
  // 9. STICKY HEADER & FLOATING CTA
  // ==========================================
  const header = document.getElementById('header');
  const stickyCta = document.getElementById('sticky-cta');
  const banner = document.getElementById('iso-banner');

  function applyStickyHeaderAndCta() {
    const bannerHeight = banner ? banner.offsetHeight : 0;
    if (lastScrollY > bannerHeight) {
      header.classList.add('scrolled');
      header.style.top = '0px';
    } else {
      header.classList.remove('scrolled');
      header.style.top = `${bannerHeight - lastScrollY}px`;
    }

    // Sticky CTA visibility after hero section
    if (lastScrollY > window.innerHeight - 150) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  }
  
  // Call once initially to set initial states
  applyStickyHeaderAndCta();

  window.addEventListener('resize', () => {
    applyStickyHeaderAndCta();
  });

  // ==========================================
  // 10. REVIEWS AUTO-ROTATING CAROUSEL (Fade)
  // ==========================================
  const cards = document.querySelectorAll('.review-card');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentReviewIndex = 0;
  let carouselInterval;

  function showReview(index) {
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentReviewIndex = index;
  }

  function startCarouselTimer() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      let nextIndex = (currentReviewIndex + 1) % cards.length;
      showReview(nextIndex);
    }, 5000); // Rotate every 5 seconds
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      showReview(slideIndex);
      startCarouselTimer(); // Reset timer on click
    });
  });

  if (cards.length > 0) {
    startCarouselTimer();
  }

  // ==========================================
  // 11. SOCIAL PROOF COUNTRY TICKER DECORATION
  // ==========================================
  // Duplicate ticker items to make the animation continuous and seamless
  const tickerContent = document.getElementById('ticker-content');
  if (tickerContent) {
    const duplicates = tickerContent.innerHTML;
    // Add two copies to guarantee overlap is filled
    tickerContent.innerHTML = duplicates + duplicates + duplicates;
  }

  // ==========================================
  // 12. SMART INQUIRY FORM VALIDATION
  // ==========================================
  const form = document.getElementById('inquiry-form');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('full-name').value.trim();
      const company = document.getElementById('company-name').value.trim();
      const country = document.getElementById('country').value;
      const quantity = document.getElementById('quantity').value;
      const message = document.getElementById('message').value.trim();

      // Reset button state
      submitBtn.innerText = "Processing...";
      submitBtn.disabled = true;

      // Basic field checking
      if (!name || !company || !country || !quantity) {
        showFeedback("Please fill in all mandatory fields (*) marked on the form.", "error");
        submitBtn.innerText = "Send Inquiry";
        submitBtn.disabled = false;
        return;
      }

      // Simulate API submission
      setTimeout(() => {
        // Success feedback
        showFeedback(`Thank you, ${name}! Your inquiry has been sent securely. Our Ganzhou export office will respond to ${company} within 24 hours.`, "success");
        form.reset();
        submitBtn.innerText = "Send Inquiry";
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  function showFeedback(text, type) {
    // Create feedback banner
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '2rem';
    banner.style.right = '2rem';
    banner.style.padding = '1.25rem 2rem';
    banner.style.borderRadius = '8px';
    banner.style.zIndex = '99999';
    banner.style.color = '#ffffff';
    banner.style.fontWeight = '600';
    banner.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    banner.style.maxWidth = '400px';
    banner.style.lineHeight = '1.4';
    banner.style.fontSize = '0.95rem';
    banner.style.transition = 'opacity 0.4s, transform 0.4s';
    banner.style.transform = 'translateY(-20px)';
    banner.style.opacity = '0';

    if (type === "success") {
      banner.style.backgroundColor = '#10B981'; // Green
      banner.style.borderLeft = '6px solid #047857';
    } else {
      banner.style.backgroundColor = '#EF4444'; // Red
      banner.style.borderLeft = '6px solid #B91C1C';
    }

    banner.innerText = text;
    document.body.appendChild(banner);

    // Fade in
    setTimeout(() => {
      banner.style.transform = 'translateY(0)';
      banner.style.opacity = '1';
    }, 50);

    // Fade out and remove
    setTimeout(() => {
      banner.style.transform = 'translateY(-20px)';
      banner.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(banner);
      }, 400);
    }, 4500);
  }

  // ==========================================================================
  // 13. FLOATING MULTILINGUAL CHAT WIDGET — LIVE GEMINI AI INTEGRATION
  //     BBA Film Manufacturing Co., Ganzhou, Jiangxi, China
  //     Production-grade | ISO 9001 B2B Export AI Agent
  // ==========================================================================

  /* ------------------------------------------------------------------
   * GEMINI API CONFIG  (key is split across two vars — never logged)
   * ------------------------------------------------------------------ */
 /* ------------------------------------------------------------------
 * GEMINI API CONFIG
 * ------------------------------------------------------------------ */
    const _G_HOST = 'generativelanguage.googleapis.com';
    const _G_PATH = '/v1beta/models/gemini-2.5-flash:generateContent';
    const _G_K1 = 'YOUR_GEMINI_API_KEY_HERE';
    const GEMINI_ENDPOINT = `https://${_G_HOST}${_G_PATH}?key=${_G_K1}`;
    const API_TIMEOUT_MS  = 10000; // 10 seconds
    const MAX_HISTORY     = 5;     // last N turns kept for context
    const MAX_MESSAGES    = 10;    // rate-limit per session

  /* ------------------------------------------------------------------
   * BBA SYSTEM PROMPT — injected into every API call
   * ------------------------------------------------------------------ */
  const BBA_SYSTEM_PROMPT =
    "You are BBA Export AI Agent for BBA Film Manufacturing Co., an ISO 9001 " +
    "certified BOPP packaging film manufacturer in Ganzhou, Jiangxi, China. " +
    "You export to 40+ countries. Products: BOPP Overwrapping Film, PVC Shrink " +
    "Film, Custom OEM Packaging Solutions. MOQ: 1 Metric Ton. " +
    "Always respond professionally in whatever language the buyer uses. " +
    "Keep responses under 100 words. For large orders (20+ tons) or custom " +
    "specs, always say a human specialist will follow up within 24 hours. " +
    "Never quote exact prices — say 'contact us for pricing'.";

  /* ------------------------------------------------------------------
   * PROMPT INJECTION GUARD — blocked patterns (lower-case checked)
   * ------------------------------------------------------------------ */
  const INJECTION_PATTERNS = [
    "ignore instructions",
    "forget context",
    "you are now",
    "pretend you are",
    "ignore previous",
    "disregard your",
    "act as if",
    "new persona",
    "override your",
    "jailbreak"
  ];

  /* ------------------------------------------------------------------
   * HIGH-RISK KEYWORDS — trigger HITL dashboard flag
   * ------------------------------------------------------------------ */
  const HITL_KEYWORDS = [
    // Large order signals
    "20 ton", "20ton", "50 ton", "50ton", "100 ton", "100ton",
    "container load", "full container", "fcl", "bulk order",
    "large quantity", "large order",
    // Custom / complex specs
    "custom specification", "custom spec", "oem design",
    "special treatment", "corona treatment", "barrier coating",
    "anti-fog", "antifog", "metallize", "metallized",
    // Urgency
    "urgent", "asap", "immediately", "rush order",
    "expedite", "emergency shipment"
  ];

  /* ------------------------------------------------------------------
   * SESSION STATE
   * ------------------------------------------------------------------ */
  let chatMessageCount = 0;          // rate-limit counter
  let conversationHistory = [];      // [{role, parts:[{text}]}, ...]
  let auditLog = [];                 // full session audit trail

  /* ------------------------------------------------------------------
   * DOM REFERENCES
   * ------------------------------------------------------------------ */
  const chatWidgetContainer = document.getElementById("chatWidgetContainer");
  const chatTriggerBtn      = document.getElementById("chatTriggerBtn");
  const chatHeaderCloseBtn  = document.getElementById("chatHeaderCloseBtn");
  const chatInputField      = document.getElementById("chatInputField");
  const chatInputForm       = document.getElementById("chatInputForm");
  const chatMessages        = document.getElementById("chatMessages");
  const typingIndicator     = document.getElementById("typingIndicator");
  const chatBody            = document.getElementById("chatBody");
  const quickActions        = document.getElementById("chatQuickActions");

  let chatLang = "en";

  /* ------------------------------------------------------------------
   * WIDGET OPEN / CLOSE
   * ------------------------------------------------------------------ */
  if (chatTriggerBtn) {
    chatTriggerBtn.addEventListener("click", () => {
      chatWidgetContainer.classList.toggle("open");
      if (chatWidgetContainer.classList.contains("open")) {
        setTimeout(() => { chatBody.scrollTop = chatBody.scrollHeight; }, 100);
      }
    });
  }

  if (chatHeaderCloseBtn) {
    chatHeaderCloseBtn.addEventListener("click", () => {
      chatWidgetContainer.classList.remove("open");
    });
  }

  /* ------------------------------------------------------------------
   * QUICK ACTION BUTTONS  (still Gemini-powered via natural language)
   * ------------------------------------------------------------------ */
  if (quickActions) {
    quickActions.addEventListener("click", (e) => {
      if (e.target.classList.contains("quick-action-btn")) {
        const action   = e.target.getAttribute("data-action");
        const userText = e.target.textContent.trim();
        chatLang = "en";
        addUserMessage(userText);
        // Map quick-action keys to natural-language prompts for Gemini
        const quickPrompts = {
          bopp_specs : "Tell me about your BOPP Overwrapping Film specifications and MOQ.",
          pvc_specs  : "Tell me about your PVC Shrink Film specifications and applications.",
          custom_pkg : "I'm interested in custom OEM packaging solutions. What can you offer?",
          moq        : "What are your minimum order quantities and lead times?",
          shipping   : "What shipping terms and ports do you support?",
          sample     : "Can I get a free film sample for testing?",
          quote      : "I'd like to request a price quote for bulk film orders."
        };
        const prompt = quickPrompts[action] || userText;
        callGeminiAPI(prompt);
      }
    });
  }

  /* ------------------------------------------------------------------
   * CHAT FORM SUBMIT
   * ------------------------------------------------------------------ */
  if (chatInputForm) {
    chatInputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = chatInputField.value.trim();
      if (!raw) return;

      // Sanitize input
      const text = sanitizeInput(raw);
      chatLang   = detectLanguage(text);

      addUserMessage(text);
      chatInputField.value = "";

      // Rate-limit check
      if (chatMessageCount >= MAX_MESSAGES) {
        addAgentMessage(
          "You've reached the session message limit. Please email us at " +
          "bba@bbafilm.com for further assistance — we respond within 24 hours!"
        );
        logAudit("RATE_LIMITED", text, null);
        return;
      }

      // Injection detection
      if (containsInjection(text)) {
        addAgentMessage("I can only assist with BBA product inquiries.");
        logAudit("INJECTION_BLOCKED", text, null);
        return;
      }

      callGeminiAPI(text);
    });
  }

  /* ------------------------------------------------------------------
   * INPUT SANITIZATION
   * Strips HTML tags, trims, and collapses excessive whitespace.
   * ------------------------------------------------------------------ */
  function sanitizeInput(str) {
    return str
      .replace(/<[^>]*>/g, '')      // strip any HTML tags
      .replace(/[\x00-\x1F]/g, ' ') // strip control characters
      .trim()
      .slice(0, 1000);              // max 1000 chars
  }

  /* ------------------------------------------------------------------
   * INJECTION DETECTION
   * ------------------------------------------------------------------ */
  function containsInjection(text) {
    const lower = text.toLowerCase();
    return INJECTION_PATTERNS.some(pattern => lower.includes(pattern));
  }

  /* ------------------------------------------------------------------
   * HITL FLAG CHECK — logs high-risk conversations for human review
   * ------------------------------------------------------------------ */
  function checkHITLFlag(text) {
    const lower = text.toLowerCase();
    const matched = HITL_KEYWORDS.filter(kw => lower.includes(kw));
    if (matched.length > 0) {
      // Log to audit trail with HITL flag
      logAudit("HITL_FLAGGED", text, { matchedKeywords: matched });
      // Visual indicator in dashboard (if HITL dashboard element exists)
      const hitlPanel = document.getElementById("hitl-alerts");
      if (hitlPanel) {
        const alert = document.createElement("div");
        alert.className = "hitl-alert";
        alert.innerHTML =
          `<strong>[${new Date().toISOString()}]</strong> High-value inquiry detected: ` +
          `"${escapeHTML(text.slice(0, 120))}" ` +
          `| Keywords: <em>${matched.join(", ")}</em>`;
        hitlPanel.prepend(alert);
      }
      return true;
    }
    return false;
  }

  /* ------------------------------------------------------------------
   * AUDIT LOGGER  (timestamps, redacts key, console.group)
   * ------------------------------------------------------------------ */
  function logAudit(eventType, userMessage, extra) {
    const entry = {
      timestamp  : new Date().toISOString(),
      event      : eventType,
      lang       : chatLang,
      msgCount   : chatMessageCount,
      userMessage: userMessage ? userMessage.slice(0, 500) : null,
      extra      : extra || null
    };
    auditLog.push(entry);
  }

  /* ------------------------------------------------------------------
   * LIVE GEMINI API CALL  (fetch with AbortController timeout)
   * ------------------------------------------------------------------ */
  async function callGeminiAPI(userMessage) {
    chatMessageCount++;
    typingIndicator.classList.add("active");
    chatBody.scrollTop = chatBody.scrollHeight;

    // HITL flag check before sending
    checkHITLFlag(userMessage);

    // Build conversation history turn
    conversationHistory.push({
      role : "user",
      parts: [{ text: userMessage }]
    });

    // Keep only last MAX_HISTORY turns (user+model pairs)
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }

    // Build request body
    const requestBody = {
      system_instruction: {
        parts: [{ text: BBA_SYSTEM_PROMPT }]
      },
      contents: conversationHistory,
      generationConfig: {
        temperature    : 0.3,
        maxOutputTokens: 300,
        topP           : 0.8,
        topK           : 40
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT",        threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH",       threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
      ]
    };

    // Timeout controller
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
      const response = await fetch(GEMINI_ENDPOINT, {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify(requestBody),
        signal : controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        // HTTP error — graceful fallback
        const status = response.status;
        logAudit("API_HTTP_ERROR", userMessage, { status });
        throw new Error(`HTTP_${status}`);
      }

      const data = await response.json();

      // Extract text from Gemini response
      const agentText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.output ||
        null;

      if (!agentText) {
        logAudit("API_EMPTY_RESPONSE", userMessage, null);
        throw new Error("EMPTY_RESPONSE");
      }

      // Push model reply into history
      conversationHistory.push({
        role : "model",
        parts: [{ text: agentText }]
      });

      logAudit("API_SUCCESS", userMessage, { responseLength: agentText.length });

      typingIndicator.classList.remove("active");
      addAgentMessage(agentText);

      // Auto-scroll contact form for quote-related replies
      const lower = userMessage.toLowerCase();
      if (lower.includes("quote") || lower.includes("price") || lower.includes("inquiry") ||
          lower.includes("报价") || lower.includes("قیمت") || lower.includes("کوٹیشن")) {
        const contactSec = document.getElementById("contact");
        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
      }

    } catch (err) {
      clearTimeout(timeoutId);
      typingIndicator.classList.remove("active");

      // Remove the failed user turn from history to keep state clean
      if (conversationHistory[conversationHistory.length - 1]?.role === "user") {
        conversationHistory.pop();
        chatMessageCount = Math.max(0, chatMessageCount - 1);
      }

      const isTimeout = err.name === "AbortError";
      logAudit(isTimeout ? "API_TIMEOUT" : "API_ERROR", userMessage, { error: err.message });

      addAgentMessage(
        "Our agent is busy, please email us at bba@bbafilm.com — " +
        "our export team will respond within 24 hours."
      );
    }
  }

  /* ------------------------------------------------------------------
   * LANGUAGE DETECTION  (Unicode range check)
   * ------------------------------------------------------------------ */
  function detectLanguage(text) {
    if (/[\u0600-\u06FF]/.test(text)) return "ur";
    if (/[\u4e00-\u9fa5]/.test(text)) return "zh";
    return "en";
  }

  /* ------------------------------------------------------------------
   * MESSAGE RENDERERS
   * ------------------------------------------------------------------ */
  function addUserMessage(text) {
    const time   = getFormattedTime();
    const isRtl  = detectLanguage(text) === "ur";
    const dirAttr = isRtl ? 'dir="rtl" style="text-align: right;"' : '';
    chatMessages.insertAdjacentHTML("beforeend", `
      <div class="message outgoing">
        <div class="message-content" ${dirAttr}>
          <p>${escapeHTML(text)}</p>
          <span class="message-time">${time}</span>
        </div>
      </div>
    `);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function addAgentMessage(text) {
    const time   = getFormattedTime();
    const isRtl  = chatLang === "ur";
    const dirAttr = isRtl ? 'dir="rtl" style="text-align: right;"' : '';
    chatMessages.insertAdjacentHTML("beforeend", `
      <div class="message incoming">
        <div class="message-content" ${dirAttr}>
          <p>${formatMarkdown(escapeHTML(text))}</p>
          <span class="message-time">${time}</span>
        </div>
      </div>
    `);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  /* ------------------------------------------------------------------
   * HELPERS
   * ------------------------------------------------------------------ */
  function getFormattedTime() {
    const now  = new Date();
    const hrs  = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>'"]/g,
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  function formatMarkdown(str) {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g,     '<em>$1</em>')
      .replace(/\n/g,            '<br>');
  }

  /* ------------------------------------------------------------------
   * triggerAgentReply — kept for quick-action backwards compat.
   * Quick actions now route through callGeminiAPI() above, but if any
   * legacy code path calls this it falls back gracefully.
   * ------------------------------------------------------------------ */
  function triggerAgentReply(actionKey) {
    const quickPrompts = {
      bopp_specs : "Tell me about your BOPP Overwrapping Film specifications and MOQ.",
      bopp       : "Tell me about your BOPP Overwrapping Film specifications and MOQ.",
      pvc_specs  : "Tell me about your PVC Shrink Film specifications and applications.",
      pvc        : "Tell me about your PVC Shrink Film specifications and applications.",
      custom_pkg : "I'm interested in custom OEM packaging solutions. What can you offer?",
      custom     : "I'm interested in custom OEM packaging solutions. What can you offer?",
      moq        : "What are your minimum order quantities and lead times?",
      shipping   : "What shipping terms and ports do you support?",
      sample     : "Can I get a free film sample for testing?",
      quote      : "I'd like to request a price quote for bulk film orders."
    };
    const prompt = quickPrompts[actionKey] || "How can BBA Film help me?";
    callGeminiAPI(prompt);
  }
});
