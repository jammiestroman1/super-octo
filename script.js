// Mobile nav toggle
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Back to top
const toTop = document.getElementById('toTop');
if (toTop) toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Contact form basic validation + redirect to thanks.html
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name')||'').trim();
    const email = String(data.get('email')||'').trim();
    const message = String(data.get('message')||'').trim();
    // micro validation
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || message.length < 5) {
      alert('Please provide your name, a valid email, and a message (5+ chars).');
      return;
    }
    // simulate success
    const q = new URLSearchParams({ name });
    window.location.href = `thanks.html?${q.toString()}`;
  });
}

// Personalize thanks page
const thanks = document.getElementById('thanksMessage');
if (thanks) {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  if (name) thanks.textContent = `Thanks, ${name}! We received your message.`;
}
