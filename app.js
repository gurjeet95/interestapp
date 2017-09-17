const form = document.getElementById('tipForm')
let amountbox = document.getElementById('amount')
const ratebox = document.getElementById('rate')
const fromdaybox = document.getElementById('fromday')
const frommonthbox = document.getElementById('frommonth')
const fromyearbox = document.getElementById('fromyear')
const todaybox = document.getElementById('today')
const tomonthbox = document.getElementById('tomonth')
const toyearbox = document.getElementById('toyear')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let totalinterest=0
  let amount = Number(amountbox.value)
  const rate = ratebox.value
  const fromday=Number(fromdaybox.value)
  const today=Number(todaybox.value)
  const frommonth=Number(frommonthbox.value)
  const tomonth=Number(tomonthbox.value)
  const fromyear=Number(fromyearbox.value)
  const toyear=Number(toyearbox.value)
  let years=Number((toyear-fromyear)*12)
  let months=Number(tomonth-frommonth)
  let days=Number(today-fromday)
  let totalmonths=(years+months)
  let totaldays=Number((totalmonths*30)+(days))
  let j=Math.floor(Number(totalmonths/6))
  for(let i=0;i<=j;i++){
  	let interest
  	let amountround=Number((amount/100)*rate)
  	 if(totaldays>=180){
         interest=amountround*6
  	}
  	else{
         interest=Number((amountround/30)*totaldays)
  	}
  	amount=Number(amount+interest)
  	amount.toFixed(2)
  	totalinterest=Number(totalinterest+interest)
  	totaldays=totaldays-180
  	console.log(totaldays)
     }

  showdata(amount,totalinterest)
})


function showdata(amount,totalinterest){
let label1=document.createElement("label")
label1.textContent = "total amount"
let text1=document.createElement('input')
text1.setAttribute("type", "text")
text1.value = amount
let label2=document.createElement('label')
label2.textContent="total interest"
let text2=document.createElement('input')
text2.setAttribute("type", "text")
text2.value = totalinterest
let div1=document.getElementById('output')
div1.appendChild(label1)
div1.appendChild(text1)
div1.appendChild(label2)
div1.appendChild(text2)


}