import { Tarjeta } from "./Tarjeta.js";

const unaTarjeta= new Tarjeta ("Nike", "Running");


document.querySelector ("#contenedor-cards").innerHTML=  `
    <div class="row">
        <div class="col">
            ${unaTarjeta.getHtml()}
        </div>
    </div>        
`;