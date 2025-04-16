// Hamburger Menu Toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

// Tournament Dropdowns
document.querySelectorAll('.tournament-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('active');
    const arrow = header.querySelector('.dropdown-arrow');
    if (arrow) {
      arrow.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    }
  });
});

// Filter Dropdown Navigation
document.querySelector('.filter-dropdown')?.addEventListener('change', (e) => {
  const pages = {
    'Academic Achievements': 'academic.html',
    'Athletic Championships': 'athletics.html',
    'Global Training': 'global.html',
    'Research Projects': 'research.html',
    'About Me': 'about.html',
    'Contact': 'contact.html'
  };
  if (pages[e.target.value]) window.location.href = pages[e.target.value];
});

// PDF Viewer for Research Abstracts
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const pdfMap = {
      'Math Extended Essay': 'math_ee.pdf',
      'Math IA': 'math_ia.pdf',
      'Physics IA': 'physics_ia.pdf',
      'Psychology IA': 'psychology_ia.pdf'
    };
    const title = this.parentElement.querySelector('h3').textContent;
    if (pdfMap[title]) {
      window.open(`website_resources/pdfs/${pdfMap[title]}`, '_blank');
    }
  });
});