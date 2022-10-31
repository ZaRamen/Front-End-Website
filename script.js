window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('mode').addEventListener("click", (event) => 
    {

        console.log(document.body.style.backgroundColor);
        if (document.body.style.backgroundColor != "beige")
        {
            document.body.style.backgroundColor = "beige";
        }
        else
        {
            document.body.style.backgroundColor = "white";
        }
        

    });

});