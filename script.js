const fontSizeInput=document.getElementById("fontsize");
const fontColorInput=document.getElementById("fontcolor");
const buttonElement=document.getElementById("button");

function getCookie(name){
	const value=`; ${document.cookie}`;
	const parts=value.split(`; ${name}=`);
	if(parts.length===2) return parts.pop().split(";").shift();
}

function applyPreferences(size,color){
	if(size){
   document.documentElement.style.setProperty("--fontsize", size);
    fontSizeInput.value = parseInt(size); // remove 'px' for input
  }
  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
    fontColorInput.value = color;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");
  applyPreferences(savedFontSize, savedFontColor);
});

buttonElement.addEventListener("click",function(){
	event.preventDefault();
	const fontSizeValue=fontSizeInput.value;
	const fontColorValue=fontColorInput.value;
	const date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();

  document.cookie = `fontsize=${fontSizeValue}px${expires}; path=/`;
  document.cookie = `fontcolor=${fontColorValue}${expires}; path=/`;

	document.documentElement.style.setProperty("--fontsize", fontSizeValue + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColorValue);
 applyPreferences(fontSizeValue + "px", fontColorValue);

	})
