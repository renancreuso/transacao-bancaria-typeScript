import { formatarMoeda, formatarData  } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";




const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoData = document.querySelector(".block-saldo time") as HTMLElement


if(elementoData != null){

   
    elementoData.textContent = formatarData(Conta.getDataAcesso(),FormatoData.DIA_SEMANA_DIA_MES_ANO);
}


renderizarSaldo();

function renderizarSaldo():void{
 
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {

    atualizar(){
        renderizarSaldo()
    }

}

export default SaldoComponent;