const nameCompleto= "Daniel Duque Agudelo"
const ficha = 3412768
const notas = [5,4,4.6]

const promedio = (notas[0] +  notas[1] + notas[2]) / 3; 


console.log("====================")
console.log("SISTEMA NOTAS SENA")
console.log("====================")
console.log(`Aprendiz: ${nameCompleto}`);
console.log(`Tu ficha es: ${ficha}`)
console.log(`Tus notas son: ${notas}`);

console.log("====================")
console.log(`Tu promedio es: ${promedio.toFixed(2)}`)
console.log(`Estado: ${promedio >= 3 ? "Aprobado" : "No aprobado"}`)




