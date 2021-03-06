import { Request, Response } from 'express';
import { cnpj } from 'cpf-cnpj-validator';
const consultarCNPJ = require("consultar-cnpj");
const Cnpj = cnpj

export class ValidateCnpj{
  async validatecnpj(req: Request, res: Response){
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

    try {
      const empresa = await consultarCNPJ(cnpjx);
      return res.status(200).json(empresa)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

