import { Request, Response } from 'express';
const axios = require('axios').default;


export class Time {
  async time(req: Request, res: Response) {
  const regiao = req.params.id 
  try {
    const { data } = await axios.get(`https://api.hgbrasil.com/weather?woeid=455867format=json-cors&key=917e1d9a`);
    const hours = data.results.time
    const date = data.results.date
    var datename = data.results.forecast[0].weekday
    const conditions = data.results.description
    const temperature = data.results.temp
    const tempmax = data.results.forecast[0].max
    const tempmin = data.results.forecast[0].min
    const sunrise = data.results.sunrise
    const sunset = data.results.sunset

    const city = data.results.city
    const humidity = data.results.humidity
    const wind_speedy = data.results.wind_speedy

    if(datename == "Sáb"){
      datename = "Sábado"
    }else if(datename == "Dom"){
      datename = "Domingo"
    }else if(datename == "Seg"){
      datename = "Segunda-Feira"
    }else if(datename == "Ter"){
      datename = "Terça-Feira"
    }else if(datename == "Qua"){
      datename = "Quarta-Feira"
    }else if(datename == "Qui"){
      datename = "Quinta-Feira"
    }else if(datename == "Sex"){
      datename = "Sexta-Feira"
    }

    const hoursNumber = parseInt(hours)
    var msg = ""

    if (hoursNumber >= 1 && hoursNumber < 12) {
          msg = "Bom dia"
      } else if (hoursNumber >= 12 && hoursNumber < 18) {
          msg = "Boa tarde"
      } else {
          msg = "Boa Noite"
      }

   
    return res.status(201).json({
      date: {
        datename,
        date,
        hours,
        sunrise,
        sunset
    },
    city:{
        city,
        humidity: `${humidity}%`,
        temperature: `${temperature}ºC`,
        tempmax: `${tempmax}ºC`,        
        tempmin: `${tempmin}ºC`,
        wind_speedy,
        conditions
    },
    mensage: msg
    })
  
    
  } catch (error) {
    console.log(error)
  }
  } 
}