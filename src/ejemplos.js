"use strict";

/* =====================================================
   EJEMPLOS DE USO: if, for, operadores y tipos
===================================================== */

/* 1, IF con comparación estricta (===) */
const edad = 18;

if (edad === 18) {
  console.log("1) Tienes exactamente 18 años");
}

/* 2. Conversión de texto a número antes de comparar */
const entrada = "10";
const numeroConvertido = Number(entrada); // Convertimos string a number

if (numeroConvertido === 10) {
  console.log("2) El número convertido es 10");
}

/* 3. Uso de AND (&&)
   Ambas condiciones deben cumplirse */
const usuario = "Axel";
const activo = true;

if (usuario === "Axel" && activo === true) {
  console.log("3) Usuario válido y activo");
}

/* 4. Uso de OR (||)
   Con que una condición sea verdadera, entra */
const rol = "admin";

if (rol === "admin" || rol === "superadmin") {
  console.log("4) Tienes permisos especiales");
}

/* 5. Uso de Nullish (??)
   Si el valor es null o undefined, usa el valor por defecto */
const nombre = null;
const nombreFinal = nombre ?? "Invitado";

console.log("5) Bienvenido", nombreFinal);

/* 6. FOR básico
   Repite 5 veces desde 0 hasta 4 */
for (let i = 0; i < 5; i++) {
  console.log("6) Número del ciclo:", i);
}

/* 7. FOR sumando valores */
let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma += i; // suma = suma + i
}

console.log("7) La suma total es:", suma);

/* 8. FOR recorriendo un array */
const numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log("8) Valor del array:", numeros[i]);
}

/* 9. IF dentro de un FOR
   Detectar números pares */
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) { // Si el residuo es 0, es par
    console.log("9)", i, "es número par");
  }
}

/* 10. IF con boolean */
const estaLogueado = true;

if (estaLogueado) {
  console.log("10) Acceso permitido");
} else {
  console.log("10) Acceso denegado");
}

/* uno de prueba: Uso de BigInt */
const numeroGrande = 100n;

if (numeroGrande > 50n) {
  console.log("BONUS) BigInt mayor que 50");
}
