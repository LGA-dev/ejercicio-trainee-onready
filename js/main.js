  function main() {
    init()
  }

  function init() {
    // Crear lista de autos
    listaVehiculos = crearAutos();
    // Asignar variables
    let vehiculoMasCaro = encontrarVehiculoMasCaro(listaVehiculos);
    let vehiculoMasBarato = encontrarVehiculoMasBarato(listaVehiculos);
    let modeloConY = encontrarModeloConY(listaVehiculos)
    // Ordenar lista de autos (Menor a Mayor)
    let listaVehiculosOrdenada = listaVehiculos.sort(function(a, b){
      return a.precio - b.precio;
    })
    
    imprimirLista(listaVehiculos);
    console.log(
`
=============================
Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${modeloConY.marca} ${modeloConY.modelo} ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(modeloConY.precio).replace(/\xa0/g, "")}
=============================
Vehículos ordenados por precio de mayor a menor:

`
    );
    imprimirListaOrdenada(listaVehiculosOrdenada);
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

  // Imprimir lista de autos
  function imprimirLista(lista) {
    for(var i = 0; i < lista.length; i++) {
      // Checkear si es un auto (propiedad "puertas")
      if(lista[i].hasOwnProperty("puertas")) {
        console.log(`Marca: ${lista[i].marca} // Modelo: ${lista[i].modelo} // Puertas: ${lista[i].puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(lista[i].precio).replace(/\xa0/g, "")}`)
      } 
      // o si es una moto (propiedad "cilindrada") 
      else {
        console.log(`Marca: ${lista[i].marca} // Modelo: ${lista[i].modelo} // Cilindrada: ${lista[i].cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(lista[i].precio).replace(/\xa0/g, "")}`)
      }
    }
  }

  // Imprimir lista de autos de mayor a menor precio
  function imprimirListaOrdenada(lista) {
    for(var i = 0; i < lista.length; i++) {
      // Checkear si es una moto (propiedad "cilindrada") o un auto (propiedad "puertas")
      if(lista[i].hasOwnProperty("cilindrada")) {
        console.log(`${lista[i].marca} ${lista[i].modelo}`)
      } else {
        console.log(`${lista[i].marca} ${lista[i].modelo}`)
      }
    }
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

  main()