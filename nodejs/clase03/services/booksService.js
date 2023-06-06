export function getBooksFromDataBase() {
    return ['libro01', 'libro02']
}

export function insertBookInDatabase(codigo, nombre , editorial) {
    // Reglas de negocio 
        // Validacion si el codigo es repetido
        // nombre excede los 30 caracteres
    
    // conexion a DB

    let book = {
        codigo: codigo,
        nombre: nombre,
        editorial: editorial,
        fechaCreacion: new Date()
    
    }

}