  function main() {
    init()
  }

  function init() {
    // Crear lista de autos
    listaVehiculos = crearAutos();
    // Asignar variables
    let listaVehiculosForLoop = imprimirListaVehiculos(listaVehiculos);
    let vehiculoMasCaro = encontrarVehiculoMasCaro(listaVehiculos);
    let vehiculoMasBarato = encontrarVehiculoMasBarato(listaVehiculos);
    let modeloConY = encontrarModeloConY(listaVehiculos)
    // Ordenar lista de autos (Menor a Mayor)
    let listaVehiculosOrdenada = imprimirListaVehiculosOrdenada(listaVehiculos).reverse();
    console.log(
`
Marca: ${listaVehiculosForLoop[0].marca} // Modelo: ${listaVehiculosForLoop[0].modelo} // Puertas: ${listaVehiculosForLoop[0].puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(listaVehiculosForLoop[0].precio).replace(/\xa0/g, "")}
Marca: ${listaVehiculosForLoop[1].marca} // Modelo: ${listaVehiculosForLoop[1].modelo} // Cilindrada: ${listaVehiculosForLoop[1].cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(listaVehiculosForLoop[1].precio).replace(/\xa0/g, "")}
Marca: ${listaVehiculosForLoop[2].marca} // Modelo: ${listaVehiculosForLoop[2].modelo} // Puertas: ${listaVehiculosForLoop[2].puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(listaVehiculosForLoop[2].precio).replace(/\xa0/g, "")}
Marca: ${listaVehiculosForLoop[3].marca} // Modelo: ${listaVehiculosForLoop[3].modelo} // Cilindrada: ${listaVehiculosForLoop[3].cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(listaVehiculosForLoop[3].precio).replace(/\xa0/g, "")}
=============================
Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${modeloConY.marca} ${modeloConY.modelo} ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(modeloConY.precio).replace(/\xa0/g, "")}
=============================
Vehículos ordenados por precio de mayor a menor:
${listaVehiculosOrdenada[0].marca} ${listaVehiculosOrdenada[0].modelo}
${listaVehiculosOrdenada[1].marca} ${listaVehiculosOrdenada[1].modelo}
${listaVehiculosOrdenada[2].marca} ${listaVehiculosOrdenada[2].modelo}
${listaVehiculosOrdenada[3].marca} ${listaVehiculosOrdenada[3].modelo}
`
    );
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
  const imprimirListaVehiculos = (lista) => {
    let arrVacio = []
    for(var i = 0; i < lista.length; i++) {
      if(lista[i].hasOwnProperty("cilindrada")) {
        arrVacio.push({
          marca: lista[i].marca,
          modelo: lista[i].modelo,
          cilindrada: lista[i].cilindrada,
          precio: lista[i].precio
        })
      } else {
        arrVacio.push({
          marca: lista[i].marca,
          modelo: lista[i].modelo,
          puertas: lista[i].puertas,
          precio: lista[i].precio
        })
      }
    }
    return arrVacio;
  }

    // Imprimir lista de autos de mayor a menor precio
    const imprimirListaVehiculosOrdenada = (lista) => {
      let arrVacio = []
      for(var i = 0; i < lista.length; i++) {
        if(lista[i].hasOwnProperty("cilindrada")) {
          arrVacio.push({
            marca: lista[i].marca,
            modelo: lista[i].modelo
          })
        } else {
          arrVacio.push({
            marca: lista[i].marca,
            modelo: lista[i].modelo
          })
        }
      }
      return arrVacio;
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