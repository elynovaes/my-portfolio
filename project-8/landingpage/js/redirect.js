const submit = document.getElementById('mc-embedded-subscribe')
const success = document.getElementById('mce-success-response')

function Test () {
  if (success.innerText.length =! 0) {
    console.log(success)
    window.location = "agradecimento.html";
  }
}

submit.addEventListener('click', function() {
  setTimeout (Test, 1000);
  }
)