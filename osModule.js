const os = require("os");

const totalmem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " MB";

const freemem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB";

function OS() {
  this.nombre = os.hostname();
  this.tipo = os.type();
  this.version = os.version();
  this.arquitectura = os.arch();
  this.cpus = os.cpus().length;
  this.memoriatotal = totalmem;
  this.memorialibre = freemem;
}

const miSistemaOperativo = new OS();
console.log(miSistemaOperativo);
