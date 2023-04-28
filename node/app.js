
const sharp = require('sharp')
const compress_images = require('compress-images')
const fs = require('fs')

let metodo = process.argv[3];
let pathInput = process.argv[2];
let inputvalue = Number(process.argv[4]);
let width = inputvalue;

function resize(pathInput,outputPath, width ) {
    sharp(pathInput).resize({width: width}).toFile(outputPath, (err) => {
        if (err) {
            console.log(err);
            console.log("houve um erro verifique o codigo:  ");
        }else{
            console.log('Imagem redimensionada com sucesso!');
            compress(outputPath, "./compressed/" )

        }
    })
}

function compress(pathInput, outputPath){
    console.log('executando compress');
    console.log("usando pathInput:  "+pathInput)
    console.log("usando pathOutput:  "+outputPath)
    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
console.log("-------------");
console.log("isso é um errro: " +error);
console.log("isso é completed: "+completed);
console.log("isso é statistic: "+statistic);
console.log("-------------");

fs.unlink(pathInput, (err)=>{
    if(err){
        console.log('erro ao apagar imagem antiga:' + err)
    }else{
        console.log(pathInput + " apagado")
    }
})

}
);

}

function rotate(pathInput, inputvalue) {
    sharp(pathInput).rotate(inputvalue).toFile('./temp/output_rotate.jpg', (err) => {
        if (err) {
            console.log(err);
            console.log("houve um erro ao girar imagem");
        }else{
            console.log('Imagem rotacionada com sucesso!')
        }
    })
}

function selectMetodo(metodo, width){
    if(metodo == 're'){
        console.log('resize and compress selecionado')
        resize(pathInput,'./temp/output_resize.jpg', width);
        
    }else if(metodo == 'ro'){
        console.log('rotação selecionado')
        rotate(pathInput, inputvalue);
        
    }else{
        console.log('select metodo não corresponde')
    }
}


selectMetodo(metodo, width);

//console.log("PATH: "+ pathInput,"METODO: "+metodo,"WIDTH: "+ width);



