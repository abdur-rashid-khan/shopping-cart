// bying phone and increment
const plusBtn=document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const wrapperbtnMins =document.getElementById('wrapperbtnMins');
const phonePrice = document.getElementById('phonePrice');
// byning Case get id 
const caseMinusBtn = document.getElementById('caseMinusBtn');
const  casePlusBtn = document.getElementById('casePlusBtn');
const totalCasePrice = document.getElementById('totalCasePrice');


function totalcalcation(phoneNumber,ads,phoneFixPrice,totalPhonePrice,wrapperbtnMins){
   let getValue=phoneNumber.value;
   let getphonePrice=totalPhonePrice.value;
   getphonePrice=parseInt(getphonePrice);
   let covertphoneFixPrice=parseInt(phoneFixPrice);
   if(ads){
      let totalnum=phoneNumber.value=parseInt(getValue) + 1;
      let totalprice=totalnum * covertphoneFixPrice;
      totalPhonePrice.innerText=totalprice;
      wrapperbtnMins.removeAttribute('disabled');
   }else if(getValue > 0){
      let totalnum=phoneNumber.value=parseInt(getValue) - 1;
      let totalprice=totalnum * covertphoneFixPrice;
      totalPhonePrice.innerText=totalprice;
   }else{
      if(getValue == 0){
         wrapperbtnMins.style.display='none';
      }
      alert('Not Allow Negative value');
      location.replace('index.html');
   }
}

// total bile
let subBil=document.getElementById('sub-bil');
const totalTax =document.getElementById('total-tax');
const totalBilfilde=document.getElementById('total-bil');
const productNum=document.getElementById('productNum');

function totalbil(forPhone,forCash,coundition){
   const tax =document.getElementById('total-tax');
   let getphonePrice= parseInt(forPhone.innerText);
   let getcashingPrice = parseInt(forCash.innerText);
   // console.log(getphonePrice+getcashingPrice);
   if(coundition){
      // console.log(getcashingPrice + getcashingPrice);
      let showsubBil=getcashingPrice+getphonePrice;
      subBil.innerText=showsubBil;
      // total tax
      let totalTax=Math.round(showsubBil/13);
      // console.log(totalTax);
      tax.innerText=totalTax;
      // total bil
      let totalbil=showsubBil+totalTax;
      totalBilfilde.innerText=totalbil;
   }else{
         if(totalBilfilde < 0){
            // let showsubBil=getcashingPrice-getphonePrice;
         let showsubBil=(getphonePrice-getcashingPrice);
         subBil.innerText=showsubBil;
         // total tax
         let totalTax=Math.round(showsubBil/13);
         // console.log(totalTax);
         tax.innerText=totalTax;
         // total bil
         let totalbil=showsubBil - totalTax;
         totalBilfilde.innerText=totalbil;
         }else{
            // let showsubBil=getcashingPrice-getphonePrice;
         let showsubBil= -(-getphonePrice-getcashingPrice);
         subBil.innerText=showsubBil;
         // total tax
         let totalTax=Math.round(showsubBil/13);
         // console.log(totalTax);
         tax.innerText=totalTax;
         // total bil
         let totalbil=showsubBil - totalTax;
         totalBilfilde.innerText=totalbil;
         }
      }
   }

plusBtn.addEventListener('click',function(){
   let phoneFixPrice = 1219;
   let phoneNumber=document.getElementById('productNum');
   totalcalcation(phoneNumber,true,phoneFixPrice,phonePrice,wrapperbtnMins);
   totalbil(phonePrice,totalCasePrice,true);
});
minusBtn.addEventListener('click',function(){
   let phoneFixPrice = 1219;
   let phoneNumber=document.getElementById('productNum');
   totalcalcation(phoneNumber,false,phoneFixPrice,phonePrice,wrapperbtnMins);
   totalbil(phonePrice,totalCasePrice,false);
});
let casewrapperbtnMins =document.getElementById('casewrapperbtnMins');
caseMinusBtn.addEventListener('click',function(){
   const caseNum = document.getElementById('caseNum');
   const caseprice = 59;
   totalcalcation(caseNum,false,caseprice,totalCasePrice,casewrapperbtnMins);
   // totalbil(productNum)
   totalbil(phonePrice,totalCasePrice,false);
});
casePlusBtn.addEventListener('click',function(){
   const caseNum = document.getElementById('caseNum');
   const caseprice = 59;
   totalcalcation(caseNum,true,caseprice,totalCasePrice,casewrapperbtnMins);
   // totalbil(productNum)
   totalbil(phonePrice,totalCasePrice,true);
});
