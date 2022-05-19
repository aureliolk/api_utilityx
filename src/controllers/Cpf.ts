import { Request, Response } from 'express';
import { cpf } from 'cpf-cnpj-validator';
const axios = require('axios').default;
const Cpf = cpf;

export class ValidateCpf {
  async validatecpf(req: Request, res: Response) {
    const { cpf, date } = req.query;
    
    const cpfx: any = cpf
    const formatCpf = Cpf.format(cpfx)
    const validateCpf = Cpf.isValid(formatCpf)

    if(!validateCpf){
      return res.status(403).json({
        msg: 'CPF Invalido'
      })
    }

    if(cpf && date) {
      var formatDate:any = date

      formatDate = formatDate.replace(/[^a-z0-9]/gi,'')
      
      if(formatDate.length < 6) {
        return res.status(200).json({
          msg: 'Data Invalida'
        })
      }


      if(formatDate.length === 6){
      formatDate = `${formatDate.split("")[0]}${formatDate.split("")[1]}/${formatDate.split("")[2]}${formatDate.split("")[3]}/${formatDate.split("")[4]}${formatDate.split("")[5]}`
      }else if(formatDate.length === 8){
        formatDate = `${formatDate.split("")[0]}${formatDate.split("")[1]}/${formatDate.split("")[2]}${formatDate.split("")[3]}/${formatDate.split("")[4]}${formatDate.split("")[5]}${formatDate.split("")[6]}${formatDate.split("")[7]}`

      }

      try {
      const { data } = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&data=${date}&token=119972855rxQKknXbuM216607352`);
      return res.status(200).json({
        data
      });  
      } 
      catch (error) {
       return res.status(500).json({
         msg:error
       })  
      }
    }

    return res.status(201).json({
      cpf: validateCpf,
      ncpf: formatCpf,
      msg: "CPF é Valido"
    })
  }
}