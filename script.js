// перше завдання
// result = (0.1 + 0.2).toFixed(1)
// console.log(result)
// console.log(typeof result)

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

