export default function ScrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
