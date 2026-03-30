/* ── terminal.js — Typewriter Terminal Animation ── */

const termLines = [
  { text: '<span class="c-grey">$ </span><span class="c-cyan">node</span> portfolio.js', delay: 300 },
  { text: '<span class="c-green">✓</span> <span class="c-white">Loading Manish Kumar...</span>', delay: 700 },
  { text: '', delay: 1000 },
  { text: '<span class="c-purple">const</span> <span class="c-cyan">dev</span> <span class="c-white">=</span> {', delay: 1200 },
  { text: '&nbsp;&nbsp;<span class="c-orange">name</span><span class="c-white">:</span> <span class="c-green">"Manish Kumar"</span><span class="c-white">,</span>', delay: 1500 },
  { text: '&nbsp;&nbsp;<span class="c-orange">role</span><span class="c-white">:</span> <span class="c-green">"Full-Stack Dev"</span><span class="c-white">,</span>', delay: 1800 },
  { text: '&nbsp;&nbsp;<span class="c-orange">stack</span><span class="c-white">: [</span><span class="c-green">"Python"</span><span class="c-white">,</span><span class="c-green">"React"</span><span class="c-white">],</span>', delay: 2100 },
  { text: '&nbsp;&nbsp;<span class="c-orange">ai</span><span class="c-white">:</span> <span class="c-cyan">true</span><span class="c-white">,</span>', delay: 2400 },
  { text: '&nbsp;&nbsp;<span class="c-orange">open</span><span class="c-white">:</span> <span class="c-cyan">"to opportunities"</span>', delay: 2700 },
  { text: '}<span class="c-white">;</span>', delay: 2900 },
  { text: '', delay: 3100 },
  { text: '<span class="c-grey">$ </span><span class="c-cyan">dev</span><span class="c-white">.hire()</span>', delay: 3300 },
  { text: '<span class="c-green">→ </span><span class="c-white">Ready. Let\'s build something great!</span>', delay: 3700 },
];

const termBody = document.getElementById('termBody');

termLines.forEach(({ text, delay }) => {
  setTimeout(() => {
    const span = document.createElement('span');
    span.className = 'code-line';
    span.innerHTML = text || '&nbsp;';
    span.style.animationDelay = '0s';
    termBody.appendChild(span);
    termBody.scrollTop = termBody.scrollHeight;
  }, delay);
});

// Blinking cursor
setTimeout(() => {
  const cur = document.createElement('span');
  cur.innerHTML = '<span class="c-grey">$ </span><span class="cursor-blink"></span>';
  cur.className = 'code-line';
  cur.style.animationDelay = '0s';
  termBody.appendChild(cur);
}, 4200);

// 3D tilt effect
const term = document.getElementById('terminal');
document.querySelector('.hero-right').addEventListener('mousemove', e => {
  const r = term.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
  const y = -((e.clientY - r.top)  / r.height - 0.5) * 10;
  term.style.transform = `perspective(1000px) rotateY(${-8 + x}deg) rotateX(${4 + y}deg)`;
});
document.querySelector('.hero-right').addEventListener('mouseleave', () => {
  term.style.transform = 'perspective(1000px) rotateY(-8deg) rotateX(4deg)';
});
