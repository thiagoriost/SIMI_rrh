/**
 * Función para dar firmato a la fecha que llega desde directus
 * @param fecha dato de entrada para ser ajustado al formato solicitado por el campo
 * @returns string con el formato validado
 */
export const formatoFecha = (fecha: string) => {
  const partes = fecha.split('-');
  const año = partes[0];
  const mes = partes[1].padStart(2, '0'); // Agrega un cero al principio si el mes es de un solo dígito
  const dia = partes[2].padStart(2, '0'); // Agrega un cero al principio si el día es de un solo dígito
  return `${año}-${mes}-${dia}`;
}
