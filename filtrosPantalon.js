document.getElementById("aplicar").addEventListener("click" , function (event) {
    event.preventDefault();

    var tallas_select = document.querySelector('input[name="tallas"]:checked');
    var color_select = document.querySelector('input[name="colores"]:checked');

    if(tallas_select != null && color_select != null){
        alert("se escogio una talla y un color.....");
    }
})