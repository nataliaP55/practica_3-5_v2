class Tarjeta{

    #titulo= "def titulo";
    #imagen= "def imagen";
    #descripcion= "def descripcion";
    #nombreBoton= "def boton";


    /**
     * Construye un elemento Tajeta
     * @param {string} titulo de la tarjeta
     * @param {string} imagen de la tarjeta URL
     */
    constructor(titulo,imagen){
        this.#titulo=titulo;
        this.#imagen=imagen;

    }

    getHtml(){
        return `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;

    }


}

export {Tarjeta};



