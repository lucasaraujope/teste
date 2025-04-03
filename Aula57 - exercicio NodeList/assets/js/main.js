const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')
const constainer = document.querySelector('.container')

const estiloBody = getComputedStyle(document.body)
const backGroundColorBody = estiloBody.backgroundColor
console.log(backGroundColorBody)


for(let p of ps){
   p.style.backgroundColor = backGroundColorBody
   p.style.color = '#ffffff'
}