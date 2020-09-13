module.exports = {
hora: function hora () {
          const pene = new Date
          horas = pene.getHours()
          minutos = pene.getMinutes()
          segundos = pene.getSeconds()
          
          if(segundos < 10){
          segundos = `0${segundos}`
          }
          
          if(minutos < 10){
          minutos = `0${minutos}`
          }
          
          if(horas < 10){
          horas = `0${horas}`
          
          }
          
          return `${horas}:${minutos}:${segundos}`

        }
}
       