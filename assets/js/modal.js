/* ── modal.js — Hire Me Modal Logic ── */

function openModal() {
  const m = document.getElementById('hireModal');
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const m = document.getElementById('hireModal');
  m.style.display = 'none';
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
