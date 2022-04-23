let numero = prompt("Ingrese un numero mayor a 0 y menor a 100");
//console.log(typeof numero);
numero = parseInt(numero);
let esNumero = Number.isInteger(numero);
//console.log(esNumero);
if(esNumero){
    if(numero >= 0 && numero < 100)
    {
        alert(`El número ${numero} es correcto, revise la consola --> `);
        for(let i = 1; i <= numero; i+= 1){
            if(i%2 == 0){
                console.log(`El número ${i} es par`);
            }
            else{
                console.log(`El número ${i} es impar`);
            }
        }
    }
    else{
        alert(`El número ${numero} NO ES CORRECTO !!`);
    }    
}else{
    alert(`El valor ingresado, NO ES UN NÚMERO !!`);
}