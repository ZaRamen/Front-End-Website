window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('mode').addEventListener("click", (event) => 
    {
        
        var bodyStyle = document.body.style;
        // returns rgb instead of hex //also can't set var to document.body.style.backgroundColor
        console.log(bodyStyle.backgroundColor)
        if (bodyStyle.backgroundColor != "rgb(51, 58, 86)")
        {
            bodyStyle.backgroundColor = "#333A56";
            bodyStyle.color = "#FFFFFF";
        }
        else
        {   
            bodyStyle.backgroundColor = "#F7F5E6";
            bodyStyle.color = "black";
        }
        

    });
});
