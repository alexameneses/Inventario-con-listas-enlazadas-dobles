class Inventario {
    constructor() {
        this.primero = null;
    }
    agregar(nuevo) {
        if(this.primero == null) {
            this.primero = nuevo;
            return;
        }
        if(this.buscar(nuevo.codigo) != null)
            return false;

        if(this.primero.codigo > nuevo.codigo) {
            nuevo.siguiente = this.primero;
            this.primero.anterior = nuevo;
            this.primero = nuevo;
            return true;
        }
        
        let aux = this.primero;

        while(aux.siguiente != null && aux.siguiente.codigo < nuevo.codigo){
            aux = aux.siguiente;
        }
        nuevo.anterior = aux;
        nuevo.siguiente = aux.siguiente;

        if(aux.siguiente != null)
            nuevo.siguiente.anterior = nuevo;
        aux.siguiente = nuevo;

    }
    buscar(codigo) {
        if(this.primero == null)
            return null;

        let aux = this.primero;

        while(aux != null && aux.codigo <= codigo) {
            if(aux.codigo == codigo) 
                return aux;
            aux = aux.siguiente;
        }
        
    }
    eliminar(codigo) {
        if(this.primero == null)
            return null;
        
        if(this.primero == codigo && this.primero.siguiente == null) {
            this.primero = null;
            return;
        }
        if(this.primero.codigo == codigo) {
            this.primero = this.primero.siguiente;
            this.primero.anterior = null;
            this.primero.anterior.siguiente = null;
            return;
        }
        let aux = this.primero;
        while(aux.siguiente != null && aux.siguiente.codigo < codigo) {
            aux = aux.siguiente;
        }
        let eliminado = aux.siguiente;

        aux.siguiente = eliminado.siguiente;

        if(aux.siguiente != null)
            aux.siguiente.anterior = aux;

        eliminado.siguiente = null;
        eliminado.anterior = null; 
        
    }
     listar() {
        let aux = this.primero;
        let resultado = "";
        while (aux != null) {
            resultado += aux.infoHtml();
            aux = aux.siguiente;
        }
        if (resultado === "") {
            return "<p>Inventario vacío.</p>";
        }
        return resultado;
    }
    extraerPrimero() {
        if(this.primero == null)
            return null;

        let primero = this.primero;

        this.primero = this.primero.siguiente;
        this.primero.anterior = null;

        primero.siguiente = null;
        return primero;
    }
    extraerUltimo() {
        if(this.primero == null) 
            return null;

        let aux = this.primero;
        if(aux.siguiente == null) {
            this.primero = null;
            return aux;
        }
        while(aux.siguiente.siguiente != null) {
            aux = aux.siguiente;
        }

        let extraido = aux.siguiente;
        aux.siguiente = null;
        return extraido;
    }
    listarInverso() {
        if(this.primero == null)
            return null;
        let aux = this.primero;
        let resultado = "";
        while(aux.siguiente != null) { 
            aux = aux.siguiente;
        }
        while(aux != null) {
            resultado +=aux.infoHtml();
            aux = aux.anterior;
        }
        return resultado;
    }

}