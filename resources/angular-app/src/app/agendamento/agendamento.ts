export class Agendamento {
    constructor(
        public descricao: string,
        public dataagendamento: Date,
        
        public cliente_id: number,
        public barbeiro_id: number,
        public empresa_id?: number,
        public user_id?: number
    ) {
        
    }
}