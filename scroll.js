/* ── scroll.js — Smooth Scroll & Reveal Logic ── */

// Smooth scroll to section
function smoothTo(id) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const offset = id === 'home' ? 0 : 68;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// Intersection Observer — reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObs.observe(el));

// Skill bars animate on scroll
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const sg = document.getElementById('skillsGrid');
if (sg) skillObs.observe(sg);
