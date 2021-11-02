const palindromo = (text)=>{
  text = text.replace(/\s/g,'')
  text = text.toLowerCase()
  let reverseText = text.split("").reverse().join('')
  return text == reverseText
}
let text = "Do geese see God"
console.log(palindromo(text))

