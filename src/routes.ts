import { Router } from 'express';
import { ValidateCnpj } from './controllers/Cnpj';
import { ValidateCpf } from './controllers/Cpf';
import { Time } from './controllers/Time';
export const routes = Router();

const cpf = new ValidateCpf();
const cnpj = new ValidateCnpj();
const time = new Time();

routes.get('/cpfx/:cpf', cpf.validatecpf);
routes.get('/cpf/', cpf.msgcpf)
routes.get('/cnpjx/:cnpj', cnpj.validatecnpj);
routes.get('/cnpj/', cnpj.msgcnpj);
routes.get('/time/:id', time.time);







