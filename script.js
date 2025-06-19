// перше завдання
// result = (0.1 + 0.2).toFixed(1)
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
const Form = document.getElementById("form-1")
const Input = document.getElementById("file-input")

Form.addEventListener("submit", (event) => {
  event.preventDefault()

  const gb = Number(Input.value)

  const mb = gb * 1024

  // const files = mb / 820
  const files = Number((mb / 820).toFixed(0)) 

  console.log(files);
})

const Form2 = document.getElementById("form-2")
const Wallet = document.getElementById("wallet-input")
const Price = document.getElementById("price-input")

Form2.addEventListener("submit", (event) => {
  event.preventDefault()

  const wallet = Number(Wallet.value)
  const price = Number(Price.value)

  const result1 = (wallet / price).toFixed(0)
  
  const result2 = (wallet - (price * result1).toFixed(2))

  console.log("Ви отримаєте " + result1)
  console.log("Ваш залишок " + result2)
})