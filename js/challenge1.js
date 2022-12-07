window.addEventListener("load", function() {
	console.log("Good job opening the window");
    var styling =  document.getElementsByTagName("h1")[0];
    console.log(styling);
    styling.style.color = "#6E3DFF";
    styling.style.textAlign = "center";
    styling.style.fontStyle = "cursive";
});


// ondblclick = (event) => {
//   console.log("doubleclick");
//   alert(my_time);
//  };

document.addEventListener("dlbclick",function(){
  console.log("doubleclick");
  var  my_time = new Date()
  alert(my_time);

})


toggle.addEventListener("change",function(){
  var x = document.querySelector("#toggle");
  if(this.checked ==true){
    x.style.display="block";
  }else{
    x.style.display="none";
  }
});
