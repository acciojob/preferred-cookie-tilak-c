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
window.addEventListener("load", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize);
    fontSizeInput.value = parseInt(savedFontSize); // remove px for input
  }
  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }
});