//Requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`Tabla de ${base}`.green)
    console.log('================'.green)

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } *  ${ i } =${ base*i }`);
    }

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduciod ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } *  ${ i } =${ base*i }\n`;


        }

        fs.writeFile(`tablas/tabla-${ base } hasta ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)

            else
                resolve(`tabla-${base} hasta ${limite}.txt`);

        });


    });

}
module.exports = {
    crearArchivo,
    listarTabla
}