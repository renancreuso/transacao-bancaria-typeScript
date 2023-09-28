import { TipoTransacao } from "./TipoTransacao.js";
export type transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}