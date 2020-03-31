export class Agendamento {
    constructor(
        public id: string,
        public descricao: string,
        public dataagendamento: string,
        
        public cliente_id: number,
        public barbeiro_id: number,
        public empresa_id: number,
        public user_id: number
    ) {
        
    }
}