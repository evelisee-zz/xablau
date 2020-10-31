import { DragonListInfo } from '../home.component';


export class ActionDTO {
    nome: string;
    descricao: string;

    constructor({name, desc}: DragonListInfo) {
        this.nome = name;
        this.descricao = desc;
    }
}