// Clase Vehiculo
class Vehiculo {
  constructor (marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

// Clase Auto
class Auto extends Vehiculo {
  constructor (marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

// Clase Moto
class Moto extends Vehiculo {
  constructor (marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}

// Constantes
const peugeot206 = new Auto("Peugeot", "206", 4, 200.000,00);
const hondaTitan = new Moto("Honda", "Titan", "125cc", 60.000,00);
const peugeot208 = new Auto("Peugeot", "208", 5, 250.000,00);
const yamahaYBR = new Moto("Yamaha", "YBR", "160cc", 80.500,50);

// Array con toda la lista vehiculos
let listaVehiculos = [peugeot206, hondaTitan, peugeot208, yamahaYBR];

// Ordena precio de vehiculos de menor a mayor
listaVehiculos.sort(function(a, b){
  return a.precio - b.precio;
})

// Precio de vehiculos ordenados (Más barato, Más caro, de Mayor a Menor)
const vehiculoMasBarato = listaVehiculos[0];
const vehiculoMasCaro = listaVehiculos[3];
const precioVehiculosMayorAMenor = listaVehiculos.reverse();

// Mensaje a imprimir
console.log(
  `
  Marca: ${peugeot206.marca} // Modelo: ${peugeot206.modelo} // Puertas: ${peugeot206.puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(peugeot206.precio)}
  Marca: ${hondaTitan.marca} // Modelo: ${hondaTitan.modelo} // Cilindrada: ${hondaTitan.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(hondaTitan.precio)}
  Marca: ${peugeot208.marca} // Modelo: ${peugeot208.modelo} // Puertas: ${peugeot208.puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(peugeot208.precio)}
  Marca: ${yamahaYBR.marca} // Modelo: ${yamahaYBR.modelo} // Cilindrada: ${yamahaYBR.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(yamahaYBR.precio)}
  =============================
  Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
  Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
  Vehículo que contiene en el modelo la letra ‘Y’:
  =============================
  Vehículos ordenados por precio de mayor a menor:
  ${precioVehiculosMayorAMenor[0].marca} ${precioVehiculosMayorAMenor[0].modelo}
  ${precioVehiculosMayorAMenor[1].marca} ${precioVehiculosMayorAMenor[1].modelo}
  ${precioVehiculosMayorAMenor[2].marca} ${precioVehiculosMayorAMenor[2].modelo}
  ${precioVehiculosMayorAMenor[3].marca} ${precioVehiculosMayorAMenor[3].modelo}
  `
)
