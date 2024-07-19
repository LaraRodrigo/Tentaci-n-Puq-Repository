document.getElementById("buscar_").addEventListener("submit" , function(event) {
    event.preventDefault();
    
    var buscar = document.getElementById("buscas").value;
    if(buscar.toLowerCase() === "pantalones" || buscar.toLowerCase() === "pantalon"){
        window.location.href = "pantalones.html";
    }
    
    else if(buscar.toLowerCase() === "polerones" || buscar.toLowerCase() === "poleron"){
        window.location.href = "polerones.html";
    }
    
    else if(buscar.toLowerCase() === "polera" || buscar.toLowerCase() === "poleras"){
        window.location.href = "poleras.html";
    }

    else if(buscar.toLowerCase() === "chaqueta" || buscar.toLowerCase() === "chaquetas" 
          ||buscar.toLowerCase() === "parkas"   || buscar.toLowerCase() === "parka")
    {
        window.location.href = "chaquetas.html";
    }

    else if(buscar.toLowerCase() === "jockeys" || buscar.toLowerCase() === "jockey"
    || buscar.toLowerCase() === "gorros" || buscar.toLowerCase() === "gorro"){
        window.location.href = "jockeys.html";
    }
})