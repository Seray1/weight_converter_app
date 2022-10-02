let inputField = document.getElementById("input-el")
let ConvertBtn = document.getElementById("btn-el")
let meterTab = document.getElementById("meter-el")
let feetTab = document.getElementById("feet-el")
let literTab = document.getElementById("liter-el")
let gallonTab = document.getElementById("gallon-el")
let kilosTab = document.getElementById("kilos-el")
let poundsTab = document.getElementById("pounds-el")
let shegeTab = document.getElementById("shege-el")
let godAbegTab = document.getElementById("godAbeg-el")



const meterToFeet = 3.281 //divide to get feet to meter
const littersToGallons = 3.785 //multiply to get gallons to liters
const kilogramsToPounds = 2.205 // divide to get pounds to kilogram
const shegeToGodabeg = 1.534 // divide


 
 
ConvertBtn.addEventListener("click",function(){
   let inputNum = inputField.value
   let feet = inputNum / meterToFeet
   let meter = inputNum * meterToFeet
   let liters = inputNum * littersToGallons
   let gallons = inputNum / littersToGallons
   let kilogram = inputNum / kilogramsToPounds
   let pounds = inputNum  * kilogramsToPounds
   let shege = inputNum / shegeToGodabeg
   let godAbeg = inputNum * shegeToGodabeg
   

   meterTab.textContent =`${inputNum} meters = ${ meter.toFixed(3)} feet`
   feetTab.textContent = ` ${inputNum} feet = ${feet.toFixed(3)} meters`
   literTab.textContent =`${inputNum} liters = ${gallons.toFixed(3)} gallons `
   gallonTab.textContent = `${inputNum} gallons = ${liters.toFixed(3)} liters`
   kilosTab.textContent =`${inputNum} kilos = ${pounds.toFixed(3)} pounds`
   poundsTab.textContent = `${inputNum} pounds = ${kilogram.toFixed(3)} kilos`
   shegeTab.textContent =`${inputNum} Shs/s = ${godAbeg.toFixed(3)} godAbeg`
   godAbegTab.textContent = `${inputNum} godAbeg = ${shege.toFixed(3)} Shs/s`

})



