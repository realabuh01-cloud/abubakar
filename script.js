/* ============================================
   PROJECT 1 — ABOUT ME PORTFOLIO
   Vanilla JavaScript
   ============================================ */

/* ---------- Theme Management ---------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ---------- Typing Effect ---------- */
const nameEl = document.getElementById('typed-name');
const fullName = 'Abubakar';
let nameIdx = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting && nameIdx < fullName.length) {
    nameIdx++;
    nameEl.textContent = fullName.slice(0, nameIdx);
    setTimeout(typeLoop, 100);
  } else if (isDeleting && nameIdx > 0) {
    nameIdx--;
    nameEl.textContent = fullName.slice(0, nameIdx);
    setTimeout(typeLoop, 50);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeLoop, isDeleting ? 1500 : 500);
  }
}
typeLoop();

/* ---------- Animated Counter ---------- */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

/* ---------- Skill Bar Animation ---------- */
function animateSkills() {
  document.querySelectorAll('.skill-item').forEach(item => {
    const level = item.dataset.level;
    const fill = item.querySelector('.skill-fill');
    if (fill && !fill.style.width) {
      fill.style.width = `${level}%`;
    }
  });
}

/* ---------- Intersection Observer for Reveals ---------- */
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Trigger specific animations when their sections appear
      if (entry.target.id === 'home') animateCounters();
      if (entry.target.id === 'skills') animateSkills();
    }
  });
}, observerOptions);

// Add reveal class to sections
document.querySelectorAll('.section, .hero').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ---------- Active Nav Link on Scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));

/* ---------- Project Card Tilt Effect ---------- */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ---------- Contact Form ---------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-text');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  // Simulate sending (replace with real backend integration)
  setTimeout(() => {
    btn.textContent = '✓ Sent!';
    formStatus.textContent = 'Thanks! I\'ll get back to you soon.';
    formStatus.className = 'form-status success';
    contactForm.reset();

    setTimeout(() => {
      btn.textContent = originalText;
    }, 2500);
  }, 1200);
});

/* ---------- Back to Top Visibility ---------- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.opacity = window.scrollY > 400 ? '1' : '0.7';
});

/* ---------- Console Easter Egg ---------- */
console.log(
  '%c👋 Hey there!',
  'font-size: 24px; font-weight: bold; color: #6366f1;'
);
console.log(
  '%cLike the portfolio? Let\'s connect!',
  'font-size: 14px; color: #ec4899;'
);
console.log('%chttps://github.com/yourname', 'color: #06b6d4;');
