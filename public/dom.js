function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('close-modal').addEventListener('click', closeModal);
  window.addEventListener('keydown', function (event) {
    if (event.key == "Escape") closeModal();
  })
}

document.getElementById('open-modal').addEventListener('click', openModal);

document.getElementById('open-modal').addEventListener('keydown', function (event) {
  if (event.key == "Enter") openModal();

})

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal')) {
    closeModal();
  }
});
