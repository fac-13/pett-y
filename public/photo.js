document.getElementById('open-modal').addEventListener('click', openModal());

function openModal() {
  document.getElementById('myModal').style.display = 'block';
  document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
  })
}

window.onclick = function (event) {
  if (event.target !== document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
}