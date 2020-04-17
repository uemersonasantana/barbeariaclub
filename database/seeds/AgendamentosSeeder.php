<?php

use Illuminate\Database\Seeder;

class AgendamentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('agendamentos')->insert(['descricao'=>'CORTE CABELO','dataagendamento'=>now(),'cliente_id'=>1,'barbeiro_id'=>2,'user_id'=>1,'empresa_id'=>1]);
        DB::table('agendamentos')->insert(['descricao'=>'CORTE BARBA','dataagendamento'=>now(),'cliente_id'=>2,'barbeiro_id'=>1,'user_id'=>1,'empresa_id'=>1]);
    }
}
