export default function obtenerTiempo(fecha) {
    // Fecha proporcionada (2024-02-04 19:57:41)
    const fechaProporcionada = new Date(fecha);
  
    // Fecha actual
    const fechaActual = new Date();
  
    // Obtener la diferencia de milisegundos entre ambas fechas
    const diferenciaEnMilisegundos = fechaActual.getTime() - fechaProporcionada.getTime();
  
    // Convertir la diferencia a unidades de tiempo más legibles
    const segundosPasados = Math.floor(diferenciaEnMilisegundos / 1000);
    const minutosPasados = Math.floor(segundosPasados / 60);
    const horasPasadas = Math.floor(minutosPasados / 60);
    const diasPasados = Math.floor(horasPasadas / 24);
    const mesesPasados = Math.floor(diasPasados / 30.44); // Se usa un valor más preciso para meses
    const añosPasados = Math.floor(mesesPasados / 12);
  
    // Seleccionar la unidad de tiempo adecuada y devolver el mensaje
    if (segundosPasados < 60) {
      return `hace ${segundosPasados} ${(segundosPasados === 1) ? 'segundo' : 'segundos'}`;
    } else if (minutosPasados < 60) {
      return `hace ${minutosPasados} ${(minutosPasados === 1) ? 'minuto' : 'minutos'}`;
    } else if (horasPasadas < 24) {
      return `hace ${horasPasadas} ${(horasPasadas === 1) ? 'hora' : 'horas'}`;
    } else if (diasPasados < 30) {
      return `hace ${diasPasados} ${(diasPasados === 1) ? 'día' : 'días'}`;
    } else if (mesesPasados < 12) {
      return `hace ${mesesPasados} ${(mesesPasados === 1) ? 'mes' : 'meses'}`;
    } else {
      return `hace ${añosPasados} ${(añosPasados === 1) ? 'año' : 'años'}`;
    }
  }