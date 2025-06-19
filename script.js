// перше завдання
// let result = (0.1 + 0.2).toFixed(1)
// console.log(result)
// console.log(typeof result)
// let? и Number?  и typeof

let result = Number((0.1 + 0.2).toFixed(1))
console.log(result)
console.log(typeof result)


// друге завдання
let a = Number("1")
let b = 2
let c = (a + b)
console.log(c)
console.log(typeof a)

//третє завдання
const form = document.getElementById("form-1")
const input = document.getElementById("file-input")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const gb = Number(input.value)

  const mb = gb * 1024

  // const files = mb / 820
  // const files = Number((mb / 820).toFixed(0)) 

  const files = Math.floor(mb / 820)

  console.log(files);
})

const form2 = document.getElementById("form-2")
const walletInput = document.getElementById("wallet-input")
const priceInput = document.getElementById("price-input")

form2.addEventListener("submit", (event) => {
  event.preventDefault()

  const wallet = Number(walletInput.value)
  const price = Number(priceInput.value)

  const result1 = Math.floor(wallet / price)

  const result2 = (wallet - (price * result1).toFixed(2))

  console.log("Ви отримаєте " + result1)
  console.log("Ваш залишок " + result2)
})
