
function initialize()
{
    bodyStyle = document.body.style;
    footer = document.getElementById("footer-content");
    toggle = document.getElementById("check-btn");
    console.log(toggle.checked);

    checkIfToggled();
    setMode();
}
function checkIfToggled()
{
    if (localStorage.getItem("isDark") == "true")
    {
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
    document.getElementById('check-btn').addEventListener("click", (event) => 
    {
      
        // returns rgb instead of hex //also can't set var to document.body.style.backgroundColor
        console.log(bodyStyle.backgroundColor)

        setMode();
    });
});
