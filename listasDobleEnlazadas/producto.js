class Producto {
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.siguiente = null;
        this.anterior = null;
    }
    info(){
        let info = this.codigo + " es un " + this.nombre + " en existencia hay " + this.cantidad + " y  cuesta " + this.costo;
        return info;
    }
    infoHtml(){
        let info = "<p><h3>Código:</p> " + this.codigo + "</h3><p><h4>Nombre: " + this.nombre + " cantidad: " + this.cantidad +" y costo: " + this.costo+ "</h4></p>";
        return info;
    }
}