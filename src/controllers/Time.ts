import {
    Request,
    Response
} from 'express';
const axios = require('axios').default;


export class Time {
    async time(req: Request, res: Response) {
        try {
            const regiao = "Sao_Paulo"
            const { data } = await axios.get(`http://worldtimeapi.org/api/timezone/America/${regiao}`);
            const fulldate = data.datetime.split(/[".","T"]+/);
            const date = new Date(fulldate[0])
                .toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                })
                .split("/");

            const dias = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");
            const day = dias[data.day_of_week];
            const time = fulldate[1].split(":");
            var timepizza:any = `${time[0]} ":" ${time[1]}`;
  
            var msg = ""
            timepizza = parseInt(timepizza)

            if (timepizza >= 1 && timepizza < 12 ) {
                msg = "Bom dia"
            } else if (timepizza >= 12 && timepizza < 18) {
                msg = "Boa tarde"
            } else {
                msg = "Boa Noite"
            }
            

            return res.status(201).json({
                date: {
                    dayname: day,
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
                mensage: msg
            })


        } catch (error) {
            console.log(error)
        }
    }
}