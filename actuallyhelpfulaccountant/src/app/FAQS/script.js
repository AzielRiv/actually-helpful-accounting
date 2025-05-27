document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('dropdownBtn');
  const dropdown = document.getElementById('dropdownContent');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    dropdown.hidden = expanded;
    btn.innerHTML = expanded ? '&#9660;' : '&#9650;';
  });
});
