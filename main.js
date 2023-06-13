



//nav-bar
let navBar=document.querySelector(".nav-bar");
let hamMenuIcon=document.querySelector(".fa-bars");
let headCont=document.querySelector("#header-contshow");
let navLi=document.querySelectorAll("li");
console.log(headCont);
hamMenuIcon.addEventListener("click",showNav ) 
function showNav() {
	console.log("dgsg");
  navBar.classList.toggle("active");
  headCont.classList.toggle("active-content");
  hamMenuIcon.classList.toggle("fa-xmark");
};

navLi.forEach(function(nav){
	nav.addEventListener("click",hideNav)
	function hideNav()
	{
		 hamMenuIcon.classList.remove("fa-xmark");
		console.log("ddd");
		  navBar.classList.remove("active");
		   headCont.classList.remove("active-content");
		  
		   
	}
})
//Dark Theme
let drkCLr="#181523";
let logoLight=document.getElementById("logo-light");
let logoDark=document.getElementById("logo-dark");
let clrBtn=document.getElementsByClassName("dark-mode-btn");
let darkIcon=document.querySelectorAll(".fa-moon");

clrBtn[0].addEventListener("click",function(clrChng){
	
	//logo
	logoLight.classList.toggle("logo-none");
	logoDark.classList.toggle("logo-block");
	logoDark.classList.toggle("logo-none");
	
	document.body.classList.toggle("dark-theme");
	//darkIcon[0].classList.remove("fa-moon");
	darkIcon[0].classList.toggle("fa-sun");
	
});
clrBtn[1].addEventListener("click",function(clrChng){
	
	
	logoLight.classList.toggle("logo-none");
	logoDark.classList.toggle("logo-block");
	logoDark.classList.toggle("logo-none");

	document.body.classList.toggle("dark-theme");
	//darkIcon[1].classList.remove("fa-moon");
	darkIcon[1].classList.toggle("fa-sun");
	
	
});
	
	
	
	
	
//back-to-top
let btp=document.querySelector(".back-to-top");
window.onscroll=function() {scrollFun()};

function scrollFun() {
	
	if ( document.documentElement.scrollTop > 20) 
	 {
    btp.style.display = "block";
  } 
  else
	  {
    btp.style.display = "none";
  }
}

//preloader

let loader=document.getElementById("preloader");
window.addEventListener("load",function(){
	loader.style.display="none";
	console.log("svsd")
})

//slider



	





