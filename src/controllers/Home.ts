import {
    Request,
    Response
} from 'express';

export class Home {
    async home(req: Request, res: Response) {
        return res.status(201).send(
            `
<style>
    .container{
        width: 90%;
        margin:auto;
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    .title.head{
        background: #ebebeb99;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        border-radius: 3px
    }
    h1 {
        width: 90%;
        margin: 1rem auto;
        text-align: center;
    }

    h2.title {
        margin:0;
        font-size: 14px;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    h2.title.method {
        width: 100px;
        text-align: center;
        padding: 2px;
    }
    span.method {
        background: green;
        color: #fff;
        padding: 3px;
        border-radius: 3px;
    }
    h3 {
        margin: 0;
        font-size: 10px;
    }

    .code {
        display: flex;
        flex-direction: column;
        margin:10px 0;
        padding-left:10px;
        gap:10px;
    }
</style>
<h1> Api Utilityx </h1>
<div class="container">
    <div>
        <div class="title head">
        <h2 class="title">Endpoint GET CPF</h2>
        <h2 class="title method"> METHOD: <span class="method"> GET </span> </h2>
        </div>
        <div class="code">
            <h3>VALIDA O CPF</h3>
            <code>https://apiutilityx-production.up.railway.app/cpf/?cpf=00000000000 </code>
            <h3> VALIDA CPF COM DADOS DA RECEITA</h3>
            <code>https://apiutilityx-production.up.railway.app/cpf/?cpf=00000000000&date=00000000 </code>
        </div>
    </div>
    <div>
        <div class="title head">
        <h2 class="title">Endpoint GET CNPJ</h2>
        <h2 class="title method"> METHOD: <span class="method"> GET </span> </h2>
        </div>
        <div class="code">
            <h3>VALIDA O CNPJ</h3>
            <code>https://apiutilityx-production.up.railway.app/cnpj/?cpf=00000000000 </code>
        </div>
    </div>
    <div>
        <div class="title head">
        <h2 class="title"> Endpoint GET TIME </h2>
        <h2 class="title method"> METHOD: <span class="method"> GET </span> </h2>
        </div>

        <div class="code">
            <h3>RETORNA DATA, HORA E CONDIÇÕES DO TEMPO</h3>
            <code>https://apiutilityx-production.up.railway.app/time/ </code>
        </div>
    </div>
    `
        )
    }
}