import {
    Request,
    Response
} from 'express';
const axios = require('axios').default;


export class Time {
    async time(req: Request, res: Response) {
        const regiao = req.params.id || "Sao_Paulo"
        try {
            const {
                data
            } = await axios.get(`https://api.hgbrasil.com/weather?woeid=455867format=json-cors&key=917e1d9a`);
            const timex = await axios.get(`http://worldtimeapi.org/api/timezone/America/Sao_Paulo`)

            const fulldate = timex.data.datetime.split(/[".","T"]+/);
            const date = new Date(fulldate[0])
                .toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                })
                .split("/");

            const time = fulldate[1].split(":");
            const timepizza = time[0] + ":" + time[1];

            // const date = data.results.date
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

            if (datename == "Sáb") {
                datename = "Sábado"
            } else if (datename == "Dom") {
                datename = "Domingo"
            } else if (datename == "Seg") {
                datename = "Segunda-Feira"
            } else if (datename == "Ter") {
                datename = "Terça-Feira"
            } else if (datename == "Qua") {
                datename = "Quarta-Feira"
            } else if (datename == "Qui") {
                datename = "Quinta-Feira"
            } else if (datename == "Sex") {
                datename = "Sexta-Feira"
            }

            const hoursNumber = parseInt(timepizza)
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
                    day: date[0],
                    month: date[1],
                    age: date[2],
                    fulldate: date[0] + "/" + date[1] + "/" + date[2],
                },
                time: {
                    hours: time[0],
                    minutes: time[1],
                    seconds: time[2],
                    fulltime: time[0] + ":" + time[1] + ":" + time[2],
                },
                city: {
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