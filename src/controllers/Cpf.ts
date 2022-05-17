import { Request, Response } from 'express';
import { cpf } from 'cpf-cnpj-validator';
const Cpf = cpf

export class ValidateCpf {
  async validatecpf(req: Request, res: Response) {
    const { cpf } = req.params;
    const formatCpf = Cpf.format(cpf)
    const validateCpf = Cpf.isValid(formatCpf)
    if (validateCpf) {
      return res.status(201).json({
        cpf: validateCpf,
        ncpf: formatCpf,
        msg: "CPF é Valido"
      })
    }
    return res.status(201).json({
      cpf: validateCpf,
      ncpf: formatCpf,
      msg: "CPF não Valido"
    })
  }

  async msgcpf(req: Request, res: Response) {
    const { cpf } = req.query;
    const cpfx: any = cpf
    const formatCpf = Cpf.format(cpfx)

    return res.status(201).json({
      cpf: formatCpf,
      validCPF: "Voce atingiu seu limite de Requisição... Entre em contao com ADM WhatsApp 73991121575"
    })
  }
}