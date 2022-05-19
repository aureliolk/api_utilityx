import { Router } from 'express';
import { ValidateCnpj } from './controllers/Cnpj';
import { ValidateCpf } from './controllers/Cpf';
import { Time } from './controllers/Time';
import {Home} from './controllers/Home';

export const routes = Router();

const home = new Home();
const cpf = new ValidateCpf();
const cnpj = new ValidateCnpj();
const time = new Time();


routes.get('/',home.home);
routes.get('/cpf/', cpf.validatecpf);
routes.get('/cnpj/', cnpj.validatecnpj);
routes.get('/time/', time.time);







