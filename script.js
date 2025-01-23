// Afficher un message de confirmation lors du téléchargement
const links = document.querySelectorAll('a[download]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    alert(`You are downloading: ${e.target.textContent}`);
  });
});
