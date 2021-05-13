const slider = document.querySelector(".rango");
const pagesViews = document.querySelector("#pageviews");
const price = document.querySelector("#price");
let promoSwitch = document.querySelector("#switch");

// Modificar vistas y precio del mes
function printPageViews (){
    if(slider.value == "0"){
        pagesViews.textContent = "10K";
        price.textContent = "8";
    }else if(slider.value == "25"){
        pagesViews.textContent = "50K";
        price.textContent = "12";
    }else if(slider.value == "50"){
        pagesViews.textContent = "100K";
        price.textContent = "16";
    }else if(slider.value == "75"){
        pagesViews.textContent = "500K";
        price.textContent = "24";
    }else if(slider.value == "100"){
        pagesViews.textContent = "1M";
        price.textContent = "36";
    };
};

// Animar Fondo de Slider
slider.addEventListener("input", function (){
    let x = slider.value;
    // let color = "linear-gradient(90deg, hsl(174, 77%, 80%) " + x + "%, hsl(224, 65%, 95%) " + x + "%);"
    let color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${x}%, hsl(224, 65%, 95%) ${x}%`;
    console.log(color);
    slider.style.background = color;

    printPageViews ();
});

// Descuento al activar el checkbox
promoSwitch.addEventListener("input", function(){
    if(promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printPageViews ();
    };
});