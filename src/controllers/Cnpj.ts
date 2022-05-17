import { Request, Response } from 'express';
import { cnpj } from 'cpf-cnpj-validator';
const Cnpj = cnpj

export class ValidateCnpj {
  async validatecnpj(req: Request, res: Response) {
    const { cnpj } = req.params;
    const formatCnpj = Cnpj.format(cnpj)
    const validateCnpj = Cnpj.isValid(formatCnpj)
    if (validateCnpj) {
      return res.status(201).json({
        cnpj: validateCnpj,
        ncnpj: formatCnpj,
        msg: "Cnpj é Valido"
      })
    }
    return res.status(201).json({
      cnpj: validateCnpj,
      ncnpj: formatCnpj,
      msg: "Cnpj não é Valido"
    })
  }

  async msgcnpj(req: Request, res: Response) {
    const { cnpj } = req.query;
    const cnpjx: any = cnpj
    const formatCnpj = Cnpj.format(cnpjx)

    return res.status(201).json({
      cnpj: formatCnpj,
      validCNPJ: "Voce atingiu seu limite de Requisição... Entre em contao com ADM WhatsApp 73991121575"
    })
  }
}