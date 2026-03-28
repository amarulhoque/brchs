// Shared components for all pages
const SCHOOL = {
  name: "Brazendragonj Ram Chandra High School",
  short: "BRCHS",
  address: "Shamarchar Bazar, Derai, Sunamganj",
  estd: "1938",
  phone: "+880 1700-000000",
  email: "brchs1938@gmail.com",
  classes: "Class VI – X"
};

const NAV_ITEMS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Admission", href: "admission.html" },
  { label: "Academic", href: "academic.html" },
  { label: "Teachers", href: "teachers.html" },
  { label: "Notice", href: "notice.html" },
  { label: "Results", href: "results.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Contact", href: "contact.html" },
];

function renderHeader() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.getElementById('site-header').innerHTML = `
    <div class="topbar">
      <div class="topbar-left">
        <span>📞 ${SCHOOL.phone}</span>
        <span>✉️ ${SCHOOL.email}</span>
      </div>
      <div class="topbar-right">
        <span>📍 ${SCHOOL.address}</span>
      </div>
    </div>
    <header>
      <div class="school-logo">🏫</div>
      <div class="school-info">
        <h1>${SCHOOL.name}</h1>
        <p>${SCHOOL.address}</p>
        <p class="estd">Established: ${SCHOOL.estd} &nbsp;|&nbsp; ${SCHOOL.classes} &nbsp;|&nbsp; Affiliated: Bangladesh Board</p>
      </div>
    </header>
    <nav>
      <div class="nav-inner">
        <button class="hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${NAV_ITEMS.map(item => `
            <li><a href="${item.href}" class="${item.href === current ? 'active' : ''}">${item.label}</a></li>
          `).join('')}
        </ul>
      </div>
    </nav>
  `;
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>${SCHOOL.name}</h3>
          <p>A premier secondary educational institution serving the students of Derai, Sunamganj since ${SCHOOL.estd}. Committed to excellence in education and character building.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            ${NAV_ITEMS.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">${SCHOOL.phone}</a></li>
            <li><a href="#">${SCHOOL.email}</a></li>
            <li><a href="#">${SCHOOL.address}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 ${SCHOOL.name} · Estd. ${SCHOOL.estd} · All Rights Reserved</p>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
