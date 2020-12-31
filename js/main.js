function main() {
  init()
}

function init() {
  // Array con toda la lista vehiculos
  listaVehiculos = crearAutos();
  // Mostrar en consola la lista de vehiculos
  
  // Ordena precio de vehiculos de menor a mayor
  listaVehiculos.sort(function(a, b){
    return a.precio - b.precio;
  })
  // Vehiculo mas caro de la lista
  vehiculoMasCaro = encontrarVehiculoMasCaro(listaVehiculos);
  // Vehiculo mas barato de la lista
  vehiculoMasBarato = encontrarVehiculoMasBarato(listaVehiculos);
  // Vehiculo que contiene Y en su modelo
  vehiculoQueContieneY = encontrarModeloConY(listaVehiculos);
  
  // Lista de vehiculos de mayor a menor precio
  precioVehiculosMayorAMenor = listaVehiculos.reverse();
  // Mostrar en consola: vehiculo más caro, vehiculo más barato, vehiculo con letra Y en su modelo
  
  // Mostrar en consola: precios de vehiculos de mayor a menor
}


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

// Crear lista de autos
function crearAutos() {
  return [
    new Auto("Peugeot", "206", 4, 200000.00),
    new Moto("Honda", "Titan", "125cc", 60000.00),
    new Auto("Peugeot", "208", 5, 250000.00),
    new Moto("Yamaha", "YBR", "160cc", 80500.50)
  ]
}

// Encontrar vehiculo más caro en la lista
function encontrarVehiculoMasCaro(lista) {
  lista.sort(function(a, b){
    return a.precio - b.precio;
  })
  return lista[lista.length - 1];
}

// Encontrar vehiculo más barato en la lista
function encontrarVehiculoMasBarato(lista) {
  lista.sort(function(a, b){
    return a.precio - b.precio;
  })
  return lista[0];
}

// Encontrar vehiculo que contiene Y en su modelo
function encontrarModeloConY(lista) {
  for(var i = 0; i < lista.length; i++) {
    if (lista[i]["modelo"].includes("Y")) {
      return lista[i];
    }
  }
}

main();