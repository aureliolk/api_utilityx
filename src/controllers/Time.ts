import { Request, Response } from 'express';

export class Time {
  async time(req: Request, res: Response) {
    res.status(201).json({
      mensage: "Voce atingiu seu limite de Requisição... Entre em contao com ADM WhatsApp 73991121575"
    })
  }
} 