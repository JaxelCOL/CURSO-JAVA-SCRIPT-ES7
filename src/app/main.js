"use strict";

function convertir(valor, from, to) {

  // Validar número
  if (isNaN(valor)) {
    console.log("Error: valor no válido");
    return;
  }

  // Celsius → Fahrenheit
  if (from === "C" && to === "F") {
    let resultado = (valor * 9/5) + 32;
    console.log(resultado.toFixed(2) + " F");
    return;
  }

  // Fahrenheit → Celsius
  if (from === "F" && to === "C") {
    let resultado = (valor - 32) * 5/9;
    console.log(resultado.toFixed(2) + " C");
    return;
  }

  // Metros → Kilómetros
  if (from === "m" && to === "km") {
    let resultado = valor / 1000;
    console.log(resultado.toFixed(2) + " km");
    return;
  }

  // Kilómetros → Metros
  if (from === "km" && to === "m") {
    let resultado = valor * 1000;
    console.log(resultado.toFixed(2) + " m");
    return;
  }

  console.log("Error: conversión no soportada");
}

// Pruebas
convertir(100, "C", "F");
convertir(32, "F", "C");
convertir(1500, "m", "km");
convertir("abc", "C", "F");