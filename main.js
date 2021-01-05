  function main() {
    init()
  }

  function init() {
    // Crear lista de autos
    listaVehiculos = crearAutos();
    // Asignar variables
    let listaVehiculosString = arrayListaVehiculos(listaVehiculos);
    let vehiculoMasCaro = encontrarVehiculoMasCaro(listaVehiculos);
    let vehiculoMasBarato = encontrarVehiculoMasBarato(listaVehiculos);
    let modeloConY = encontrarModeloConY(listaVehiculos)
    let listaVehiculosStringOrdenada = arrayListaVehiculosOrdenados(listaVehiculos);
    // Impresion
    console.log(`
${listaVehiculosString}
=============================
Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${modeloConY.marca} ${modeloConY.modelo} ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(modeloConY.precio).replace(/\xa0/g, "")}
=============================
Vehículos ordenados por precio de mayor a menor:
${listaVehiculosStringOrdenada}
    `);
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
  const arrayListaVehiculos = (lista) => {
    let arrayVacio = []
    // Checkear si es una moto (propiedad cilindrada) o un auto (propiedad puertas)
    for(const vehiculo of lista) {
      if(vehiculo.hasOwnProperty("cilindrada")) {
        arrayVacio.push({
          marca: vehiculo.marca,
          modelo: vehiculo.modelo,
          cilindrada: vehiculo.cilindrada,
          precio: vehiculo.precio
        })
      } else {
        arrayVacio.push({
          marca: vehiculo.marca,
          modelo: vehiculo.modelo,
          puertas: vehiculo.puertas,
          precio: vehiculo.precio
        })
      }
    }
    return imprimirMensaje(arrayVacio)
  }

  // Ordenar lista de autos de mayor a menor precio
  const arrayListaVehiculosOrdenados = (lista) => {
    let arrayVacio = []
    for (const vehiculo of lista) {
      arrayVacio.push({
        marca: vehiculo.marca,
        modelo: vehiculo.modelo
      })
    }
    return imprimirOtroMensaje(arrayVacio);
  }

  const imprimirMensaje = (array) => {
    let mensaje = "";
    for (const item of array) {
      // Checkear si es una moto (propiedad cilindrada) o un auto (propiedad puertas)
      if(item.hasOwnProperty("cilindrada")) {
        mensaje += `Marca: ${item.marca} // Modelo: ${item.modelo} // Cilindrada: ${item.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(item.precio).replace(/\xa0/g, "")} \n`
      } else {
        mensaje += `Marca: ${item.marca} // Modelo: ${item.modelo} // Puertas: ${item.puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(item.precio).replace(/\xa0/g, "")} \n`
      }
    }
    return mensaje;
  }

  const imprimirOtroMensaje = (array) => {
    let mensaje = "";
    for (const item of array) {
      // Checkear si es una moto (propiedad cilindrada) o un auto (propiedad puertas)
      if(item.hasOwnProperty("cilindrada")) {
        mensaje += `${item.marca} ${item.modelo} \n`
      } else {
        mensaje += `${item.marca} ${item.modelo} \n`
      }
    }
    return mensaje;
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
    for(const vehiculo of lista) {
      if(vehiculo["modelo"].includes("Y")) {
        return vehiculo;
      }
    }
  }

  main()