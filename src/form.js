
const pin = document.getElementById('pin')
const responseText = document.getElementById('response')

async function fetchPin() {
  if (pin.value.length === 5) {
    let response = await fetch('https://validate-pin.fly.dev/validate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'PIN=' + pin.value         
      })

    responseText.textContent = await response.text()
  }
}

pin.addEventListener('keyup', fetchPin)