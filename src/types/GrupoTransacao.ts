import { transacao } from "./Transacao.js"

export type GrupoTransacao = {
    label:string,
    transacoes: transacao [];
}