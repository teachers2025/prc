function newPay()
{   
   const newPay = [0,20000,20600,21200,21800,22460,23120,23780,24500,25220,25940,26720,27500,28280,29130,29980,30830,31750,32670,33590,34580,35570,36560,37640,38720,39800,40970,42140,43310,44570,45830,47090,48440,49790,51140,52600,54060,55520,57100,58680,60260,61960,63660,65360,67190,69020,70850,72810,74770,76730,78820,80910,83000,85240,87480,89720,92110,94500,96890,99430,101970,104510,107210,109910,112610,115500,118390,121280,124380,127480,130580,133900,137220,140540,144150,147760,151370,154980,158880,162780];
   var text="";
   //getting data from user
   var pay = document.getElementById("bpay").value;
   var fitment = document.getElementById("fitment").value;
   //calucate 
     
    var calc = Math.round((pay*0.30392+pay*fitment/100));
    var x=parseInt(pay)+parseInt(calc);
   //compair with array
   var j;
  for(let i=0;i<newPay.length; i++)
  {   
         if(x<newPay[i]) 
          {   j=i;
             text += newPay[i] ; 
            
            document.getElementById("Npay").value = text;break; 
          } 
  }
    document.getElementById("Npay1").value = newPay[j+1]; 
    document.getElementById("Npay2").value = newPay[j+2]; 
   
    //    first pay calucation
    var da=  Math.round(parseInt(text)*0.0728);
       document.getElementById("da").value = da;

   var hra1 =  Math.round(document.getElementById("Npay").value*document.getElementById("hra").value*0.01);
       document.getElementById("hrap").value = hra1;  
    
   var to1=parseInt(text)+parseInt(da)+parseInt(hra1);
        document.getElementById("total1").value = to1;  

//  second pay calucation
       var da1=  Math.round(parseInt(document.getElementById("Npay1").value)*0.0728);
       document.getElementById("da1").value = da1;

   var hra2 =  Math.round(document.getElementById("Npay1").value*document.getElementById("hra").value*0.01);
       document.getElementById("hrap1").value = hra2;
       
       var to2=parseInt(document.getElementById("Npay1").value)+parseInt(da1)+parseInt(hra2);
        document.getElementById("total2").value = to2;  

// third pay calucation

       var da2=  Math.round(parseInt(document.getElementById("Npay2").value)*0.0728);
       document.getElementById("da2").value = da2;

   var hra3 =  Math.round(document.getElementById("Npay2").value*document.getElementById("hra").value*0.01);
       document.getElementById("hrap2").value = hra3;
       
       var to3=parseInt(document.getElementById("Npay2").value)+parseInt(da2)+parseInt(hra3);
        document.getElementById("total3").value = to3;  
}

function showDiv() { document.getElementById('welcomeDiv').style.display = "block";  }
window.addEventListener('contextmenu', function (e) {    e.preventDefault(); }, false);  
