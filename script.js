const fontSizeInput=document.getElementById("fontsize");
const fontColorInput=document.getElementById("fontcolor");
const buttonElement=document.getElementById("button");

buttonElement.addEventListener("click",function(){
	event.preventDefault();
	const fontSizeValue=fontSizeInput.value;
	const fontColorValue=fontColorInput.value;
	document.cookie(`fontsize=${fontSizeValue}px`)
	document.cookie(`fontcolor=${fontColorValue}`)
	 document.documentElement.style.setProperty("--fontsize", fontSizeValue + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColorValue);

	})
