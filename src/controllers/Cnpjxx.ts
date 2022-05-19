import { Request, Response } from 'express';
import { cnpj } from 'cpf-cnpj-validator';
const Cnpj = cnpj

export class ValidateCnpj {
  async validatecnpj(req: Request, res: Response) {
    const { cnpj } = req.query;
  
    const cnpjx: any = cnpj
    const formatCnpj = Cnpj.format(cnpjx)
    const validateCnpj = Cnpj.isValid(formatCnpj)
    
    if(!validateCnpj){
      return res.status(201).json({
        cnpj: validateCnpj,
        ncnpj: formatCnpj,
        msg: "Cnpj não é Valido"
      })
    }

    return res.status(201).json({
      cnpj: validateCnpj,
      ncnpj: formatCnpj,
      msg: "Cnpj é Valido"
    })
    
  }
}