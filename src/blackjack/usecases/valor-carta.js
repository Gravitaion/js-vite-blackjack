
/**
 * Esta función establece cuanto vale la carta
 * @param {String} carta Ejempolo: 'C1', 'H5', 'A', 'J'
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? ( valor === 'A' ) 
        ? 11 : 10
        : valor * 1;
 }