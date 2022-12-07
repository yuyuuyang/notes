window.addEventListener("load", function() {
    var print1 = document.querySelector("#billing").innerHTML;
	console.log(print1);
});

var box = document.getElementsByName("useBilling")[0];
console.log(box);
box.addEventListener("change",function(){
    console.log("here");
  
    var message1  = document.querySelector("#billing");
    var message2  = document.querySelector("#home");
    // var message2  = document.getElementbyId("#message2");
  
    if(this.checked == true){
      message2.value = message1.value;
      message2.disabled = true;
    }else{
      message2.value = "";
    }
  
  })