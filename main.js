/* =========================================================
   JOÃO QUEIROZ FISIOTERAPIA — MAIN.JS
   ========================================================= */

'use strict';

// ─── Navbar: scroll effect ───────────────────────────────
(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // trigger on load in case page is already scrolled
  onScroll();
})();


// ─── Mobile Menu ────────────────────────────────────────
(function initMobileMenu() {
  const btn  = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click
  menu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      btn.focus();
    }
  });
})();


// ─── Smooth scroll for anchor links ─────────────────────
(function initSmoothScroll() {
  const NAVBAR_HEIGHT = 72;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
})();


// ─── Intersection Observer: scroll animations ────────────
(function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.specialty-card, .benefit-item, .step, .about__target-item, .testimonial-card'
  );

  if (!elements.length) return;

  // Add animation class
  elements.forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    // Stagger delay by position within parent
    const siblings = el.parentElement
      ? Array.from(el.parentElement.children).filter(c =>
          c.classList.contains(el.classList[0])
        )
      : [];
    const idx = siblings.indexOf(el);
    if (idx >= 0 && idx <= 4) {
      el.classList.add(`delay-${idx + 1}`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();


// ─── Section header animations ───────────────────────────
(function initSectionHeaders() {
  const headers = document.querySelectorAll('.section-header, .about__content, .cta-section__inner > *');

  if (!headers.length) return;

  headers.forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
  );

  headers.forEach(el => observer.observe(el));
})();


// ─── Active nav link on scroll ──────────────────────────
(function initActiveNavLink() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  const OFFSET = 120;

  function updateActiveLink() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(section => {
      const sectionTop    = section.offsetTop - OFFSET;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('navbar__link--active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('navbar__link--active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();


// ─── Footer year ────────────────────────────────────────
(function setCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
})();


// ─── WhatsApp float: hide while CTA section is visible ──
(function initFloatVisibility() {
  const floatBtn  = document.getElementById('whatsapp-float');
  const ctaSection = document.getElementById('contato');
  if (!floatBtn || !ctaSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      floatBtn.style.opacity    = entry.isIntersecting ? '0' : '1';
      floatBtn.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    },
    { threshold: 0.2 }
  );

  observer.observe(ctaSection);
})();


// ─── Micro-interaction: hero badge shimmer on hover ──────
(function initHeroBadge() {
  const badge = document.querySelector('.hero__badge');
  if (!badge) return;

  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'scale(1.03)';
  });
  badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'scale(1)';
  });
  badge.style.transition = 'transform 0.2s ease';
})();


// ─── Specialty cards: tilt on mouse move ────────────────
(function initCardTilt() {
  const cards = document.querySelectorAll('.specialty-card');
  if (!cards.length || window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const tiltX  = ((y - cy) / cy) * 4;
      const tiltY  = ((x - cx) / cx) * -4;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease, box-shadow 0.25s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
})();



// ─── Carrossel de Depoimentos ───────────────────────────
(function initTestimonialsCarousel() {
  const carousel = document.getElementById('testimonialsCarousel');
  const prevBtn  = document.getElementById('testimonialPrev');
  const nextBtn  = document.getElementById('testimonialNext');
  const dotsWrap = document.getElementById('testimonialDots');

  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.testimonial-card'));
  if (!cards.length) return;

  // ── Criar indicadores (dots) ──────────────────────────
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonials__dot' + (i === 0 ? ' testimonials__dot--active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.dataset.index = i;
    dot.addEventListener('click', () => scrollToCard(i));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll('.testimonials__dot'));

  // ── Calcular índice visível ───────────────────────────
  function getActiveIndex() {
    const scrollLeft = carousel.scrollLeft;
    let closest = 0;
    let minDist  = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    return closest;
  }

  // ── Atualizar dots e botões ───────────────────────────
  function updateUI() {
    const idx = getActiveIndex();
    dots.forEach((d, i) => {
      d.classList.toggle('testimonials__dot--active', i === idx);
      d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === cards.length - 1;
  }

  // ── Navegar para um card pelo índice ─────────────────
  function scrollToCard(idx) {
    const card = cards[idx];
    if (!card) return;
    carousel.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }

  // ── Setas ─────────────────────────────────────────────
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollToCard(Math.max(0, getActiveIndex() - 1));
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollToCard(Math.min(cards.length - 1, getActiveIndex() + 1));
    });
  }

  // ── Sincronizar dots com scroll ──────────────────────
  let scrollTimer;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateUI, 80);
  }, { passive: true });

  // ── Drag-to-scroll com Mouse (Apenas Desktop) ─────────
  let isDragging = false;
  let startX     = 0;
  let startScroll = 0;

  carousel.addEventListener('mousedown', (e) => {
    isDragging  = true;
    startX      = e.pageX - carousel.offsetLeft;
    startScroll = carousel.scrollLeft;
    // Removemos os estilos que conflitam com arrastar manualmente
    carousel.style.scrollBehavior = 'auto';
    carousel.style.scrollSnapType = 'none'; 
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x    = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arraste
    carousel.scrollLeft = startScroll - walk;
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    // Devolvemos os estilos nativos após o arraste
    carousel.style.scrollBehavior = 'smooth';
    carousel.style.scrollSnapType = 'x mandatory';
    updateUI();
  };

  carousel.addEventListener('mouseup',    stopDrag);
  carousel.addEventListener('mouseleave', stopDrag);

  // ── Init ──────────────────────────────────────────────
  updateUI();
})();


// ─── Console branding ───────────────────────────────────
console.log(
  '%cJoão Queiroz Fisioterapia 🏃‍♂️\n%cFisioterapia Ortopédica e Esportiva · Salvador - BA',
  'color: #2ABFA0; font-size: 18px; font-weight: bold;',
  'color: #6b7280; font-size: 12px;'
);
