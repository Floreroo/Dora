module.exports = {

  hora: function Time() {

    Tiempo = new Date()
    Hora = Tiempo.getHours()
    Minuto = Tiempo.getMinutes()

    if (Hora < 10) {
      Hora = `0${Hora}`
    }

    if (Minuto < 10) {
      Minuto = `0${Minuto}`
    }

    return `${Hora}:${Minuto}`
  }

}
