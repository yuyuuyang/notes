part1Checkbox.addEventListener("change",function(){
  console.log("Hi");
  console.log(this);
  var x = document.querySelector("#part2");

  if(this.checked ==true){
    x.style.display="block";
  }else{
    x.style.display="none";
  }
})

repeat.addEventListener("change",function(){
  console.log("here");

  var message1  = document.querySelector("#message1");
  var message2  = document.querySelector("#message2");
  // var message2  = document.getElementbyId("#message2");

  if(this.checked == true){
    message2.value = message1.value.toUpperCase();;
  }else{
    message2.value = "";
  }

})

// part3[4].src = part3[0].src
var part3 = document.querySelectorAll("img");
console.log(part3);

part3[4].addEventListener('mouseover', (event) => {
  part3[4].src = part3[0].src;
});

part3[4].addEventListener('mouseout', (event) => {
  part3[4].src = "";
});



document.addEventListener('keyup', (event) => {
  console.log("keyup");
  part3[4].src = "";

});

document.addEventListener('keydown', (event) => {
  console.log("keydown");
  part3[4].src = part3[0].src;
});


