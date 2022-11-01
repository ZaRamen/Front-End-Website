window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('mode').addEventListener("click", (event) => 
    {
        
        var bodyStyle = document.body.style;
        // returns rgb instead of hex //also can't set var to document.body.style.backgroundColor
        console.log(bodyStyle.backgroundColor)
        if (bodyStyle.backgroundColor != "rgb(54, 57, 63)")
        {
            bodyStyle.backgroundColor = "#36393F";
            bodyStyle.color = "#FFFFFF";
        }
        else
        {   
            bodyStyle.backgroundColor = "white";
            bodyStyle.color = "black";
        }
        

    });
});
