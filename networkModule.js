const red = require("os");

function obtenerDatosDeRed() {
  const interfaces = red.networkInterfaces();
  const datosDeRed = [];

  for (const interfaz in interfaces) {
    interfaces[interfaz].forEach((info) => {
      const interfazDatos = {
        Interfaz: interfaz,
        Familia: info.family,
        Dirección: info.address,
        Interno: info.internal,
      };
      datosDeRed.push(interfazDatos);
    });
  }

  return datosDeRed;
}

const datosDeRed = obtenerDatosDeRed();

function NET() {
  this.datosDeRed = datosDeRed;
}

const miSistemaOperativo = new NET();
console.log(miSistemaOperativo);
