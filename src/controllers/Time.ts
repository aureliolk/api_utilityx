import { Request, Response } from 'express';
const axios = require('axios').default;


export class Time {
  async time(req: Request, res: Response) {
  const regiao = req.params.id 
  try {
    const { data } = await axios.get(`http://worldtimeapi.org/api/timezone/America/${regiao}`);
    const fulldate = data.datetime.split(/[".","T"]+/);
    const date = new Date(fulldate[0])
                .toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                })
                .split("/");

            const dias = new Array(
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado"
            );
          
          const day = dias[data.day_of_week]
          const time = fulldate[1].split(":");
          const timepizza = `${time[0]} ":" ${time[1]}`;
          
          var msg = ""
          
          if (timepizza >= "0100" && timepizza < "1200") {
              msg = "Bom dia"
          } else if (timepizza >= "1200" && timepizza < "1800") {
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