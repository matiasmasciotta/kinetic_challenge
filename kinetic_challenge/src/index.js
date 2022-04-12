// Variables y constantes definidas por el challenger
const x1 = 0;
const x2 = 4;
const v1 = 3;
const v2 = 2;

// Procesamiento de datos
console.dir('Initializing tour..');
try {

    // Ejecuto el loop con el recorrido
    for (let i = 1; i <= 10000; i++) {
        // Declaro el canguro1
        let canguro1 = x1 + ( i * v1 );
        // Declaro el canguro2
        let canguro2 = x2 + ( i * v2 );

        // Chequeo si se produce el encuentro entre el canguro1 y el canguro2
        if (canguro1 === canguro2) {
            console.log("SI, position: ", canguro1);
        }
    }

} catch (error) {
    console.error(error);
}

// Salidas
console.dir('finished script!');