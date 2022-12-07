// window.addEventListener("load", function() {
// 	console.log("hi");
//     var caption = document.getElementsByTagName("figcaption")[1].innerText;
//     console.log(caption);
//     alert(caption);
// });

var images = document.getElementsByClassName("thumbnail");
console.log(images);


// images[0].addEventListener('click', (event) => {
//     console.log("hover")
//     document.getElementById("display").style.backgroundImage = '<img src="'+images[0].src+'" />';
//     document.getElementById("display").innerHTML =images[0].alt;
//     console.log( images[0]);
//     console.log( document.getElementById("display").innerHTML);
//     // document.getElementById("display"). innerHTML += '<img src="'+images[0].src+'" />';
//   });

  /* This code will happn as soon as the js file is loaded */

/* Get all of the thumbnail images*/
var imgs = document.querySelectorAll("img");
var msg = "Hover over an image below to display the image and the alt text"

/* Loop through the array of images and add four listeners
to each one */
for (let i = 0; i < imgs.length;i++){
	imgs[i].addEventListener("mouseover", show); 
    imgs[i].addEventListener("mouseover", hideorg); 
    imgs[i].addEventListener("mouseout", hide); 
    imgs[i].addEventListener("mouseout", showorg); 
	}


/*These functions execute only when the listener 
detects the event */
function show(){
	console.log("show")
	document.querySelector('#display').style.backgroundImage="url('"+this.src+"')";
	document.querySelector('#display').innerHTML= this.alt;

}

function hide(){
	console.log("hide")
	document.querySelector('#display').style.backgroundImage="url('')";
	document.querySelector('#display').innerHTML= msg;
}

function hideorg(){
    document.querySelector('#thumbs').style.visibility = 'hidden';
}

function showorg(){
    document.querySelector('#thumbs').style.visibility = 'visible';
}