  function main() {
    init()
  }

  function init() {
    // Crear lista de autos
    listaVehiculos = crearAutos();
    // Asignar variables
    const imprimirListaVehiculos = imprimirMensaje(listaVehiculos);
    const vehiculoMasCaro = encontrarVehiculoMasCaro(listaVehiculos);
    const vehiculoMasBarato = encontrarVehiculoMasBarato(listaVehiculos);
    const modeloConY = encontrarModeloConY(listaVehiculos)
    const imprimirListaVehiculosOrdenada = imprimirMensajeOrdenado(listaVehiculos);
    console.log(`
${imprimirListaVehiculos}
=============================
Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}
Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${modeloConY.marca} ${modeloConY.modelo} ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(modeloConY.precio).replace(/\xa0/g, "")}
=============================
Vehículos ordenados por precio de mayor a menor:
${imprimirListaVehiculosOrdenada}
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
    aString() {
      return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(this.precio).replace(/\xa0/g, "")} \n`
    }
    aStringPrecioOrdenado() {
      return `${this.marca} ${this.modelo} \n`
    }
  }

  // Clase Moto
  class Moto extends Vehiculo {
    constructor (marca, modelo, cilindrada, precio) {
      super(marca, modelo, precio);
      this.cilindrada = cilindrada;
    }
    aString() {
      return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(this.precio).replace(/\xa0/g, "")} \n`
    }
    aStringPrecioOrdenado() {
      return `${this.marca} ${this.modelo} \n`
    }
  }

  // Crear lista de autos
  const crearAutos = () => {
    return [
      new Auto("Peugeot", "206", 4, 200000.00),
      new Moto("Honda", "Titan", "125cc", 60000.00),
      new Auto("Peugeot", "208", 5, 250000.00),
      new Moto("Yamaha", "YBR", "160cc", 80500.50)
    ]
  }

  // Encontrar vehiculo más caro en la lista
  const encontrarVehiculoMasCaro = (lista) => {
    lista.sort(function(a, b){
      return a.precio - b.precio;
    })
    return lista[lista.length - 1];
  }

  // Encontrar vehiculo más barato en la lista}
  const encontrarVehiculoMasBarato = (lista) => {
    lista.sort(function(a, b){
      return a.precio - b.precio;
    })
    return lista[0];
  }

  // Encontrar vehiculo que contiene Y en su modelo
  const encontrarModeloConY = (lista) => {
    for(const vehiculo of lista) {
      if(vehiculo["modelo"].includes("Y")) {
        return vehiculo;
      }
    }
  }

  const imprimirMensaje = (array) => {
    let message = "";
    for (const vehiculo of array) {
      message += vehiculo.aString()
    }
    return message;
  }

  const imprimirMensajeOrdenado = (array) => {
    let message = "";
    for (const vehiculo of array) {
      message += vehiculo.aStringPrecioOrdenado()
    }
    return message;
  }

  main()