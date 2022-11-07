
function initialize()
{
    bodyStyle = document.body.style;
    footer = document.getElementById("footer-content");
    toggle = document.getElementById("toggle-btn");
    sliderIcon = document.getElementById("slider-icon");
    checkIfToggled();
    setMode();
}
function checkIfToggled()
{
    if (localStorage.getItem("isDark") == "true")
    {
        // Remove unnecessary transition animations from repeating after you toggle dark mode and switch to another web page
        sliderIcon.style.transition = "none";
        sliderIcon.style.right = "85px";
        toggle.checked = true;
    }
    else
    {
        toggle.checked = false;
    }
}
function setMode()
{
    // If it's dark mode switch to light mode and vice versa
    toggle.checked ? darkMode() : lightMode();
}
function lightMode()
{
    bodyStyle.backgroundColor = "#F7F5E6";
    bodyStyle.color = "black";
    footer.style.color = "black";
    footer.style.backgroundColor = "#E8E8E8";
    // stores a variable named isDark between all web pages 
    localStorage.setItem("isDark", false);
}
function darkMode()
{
    bodyStyle.backgroundColor = "#333A56";
    bodyStyle.color = "#FFFFFF";
    footer.style.color = "white";
    footer.style.backgroundColor = "#39445c";
    localStorage.setItem("isDark", true);
}
window.addEventListener('DOMContentLoaded', (event) => 
{
    console.log('DOM fully loaded and parsed');
    initialize();
    document.getElementById('toggle-btn').addEventListener("click", (event) => 
    {
      
        // returns rgb instead of hex //also can't set var to document.body.style.backgroundColor
        console.log(bodyStyle.backgroundColor)
        // re add the transition to toggle dark mode
        sliderIcon.style.transition = "all 0.35s ease-in";
        setMode();
    });
});


function reveal() 
{
    var reveals = document.querySelectorAll(".shrinked-images");
  
    for (var i = 0; i < reveals.length; i++) 
    {
    
      var windowHeight = window.innerHeight;
      // element distance from the viewport's top 
      var elementTop = reveals[i].getBoundingClientRect().top;
      // set each element visibile area to 400px 
      //(increase it to make the element visible when most of it's content is within the window)
      var elementVisible = 350;

      //If the element is within the window view then reveal the element  
      elementTop < windowHeight - elementVisible ?
      reveals[i].classList.add("active") :  
      reveals[i].classList.remove("active");
    }
  }
  
// call reveal when the window is scrolled
window.addEventListener("scroll", reveal);