
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let main_cal =  document.querySelector(".main_container");
let main_temp = document.querySelector(".container");
// let btn_convert = document.querySelector(".btn_cal")


// functionality 

// scientific calculator 

btn1.addEventListener("click",()=>{
  main_temp.style.transform = "translateX(700px)";
  main_temp.style.transitionDuration = "3s"; // Corrected
  main_cal.style.transform = "translateX(-8px)"; // Assuming main_temp is defined and refers to the correct element
  main_cal.style.transitionDuration = "3s"; // Corrected
});

// temprature calculator

btn2.addEventListener("click", () => {
  main_cal.style.transform = "translateX(-700px)";
  main_cal.style.transitionDuration = "3s"; // Corrected
  main_temp.style.transform = "translateX(8px)"; // Assuming main_temp is defined and refers to the correct element
  main_temp.style.transitionDuration = "3s"; // Corrected
});

// btn_convert.addEventListener("click",()=>{
//   main_cal.style.display = "none"
// })
