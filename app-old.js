const http = require("http");

//request: solicitud del usuario - response: respuesta al usuario

http
  .createServer((req, res) => {
    //res.writeHead(200, { "contet-type": "application/json" });
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-type": "application/csv" });

    res.write("id, nombre\n");
    res.write("1, Juan\n");
    res.write("2, Daniel\n");
    res.write("3, Maria\n");
    res.end();
  })
  .listen(8080);

console.log(`Escuchando al puerto ${8080}`);
