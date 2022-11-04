
let isDark = false;

function initialize()
{
    bodyStyle = document.body.style;
    footer = document.getElementById("footer-content");
    if (isDark)
    {
        setMode();
    }
}
function setMode()
{
    if (bodyStyle.backgroundColor != "rgb(51, 58, 86)")
    {
        bodyStyle.backgroundColor = "#333A56";
        bodyStyle.color = "#FFFFFF";
        footer.style.color = "white";
        footer.style.backgroundColor = "#39445c";
        isDark = true;
    }
    else
    {   
        bodyStyle.backgroundColor = "#F7F5E6";
        bodyStyle.color = "black";
        footer.style.color = "black";
        footer.style.backgroundColor = "#E8E8E8";
        isDark = false;
    }
}
window.addEventListener('DOMContentLoaded', (event) => 
{
    console.log('DOM fully loaded and parsed');
    
    document.getElementById('mode').addEventListener("click", (event) => 
    {
      
        // returns rgb instead of hex //also can't set var to document.body.style.backgroundColor
        console.log(bodyStyle.backgroundColor)

        setMode();
    });
});
