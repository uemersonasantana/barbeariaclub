<?php

use Illuminate\Database\Seeder;

class ClientesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clientes')->insert([
            'nome'=>'Paulo'
            ,'sobrenome'=>'Souza Ramos'
            ,'apelido'=>'PPP'
            ,'cpf'=>'02154'
            ,'fone1'=>'111111'
            ,'email'=>'paulo@gmail.com'            
            ,'user_id'=>1
            ,'empresa_id'=>1
        ]);
        DB::table('clientes')->insert([
            'nome'=>'Sonia'
            ,'sobrenome'=>'Lima'
            ,'apelido'=>'Soninha'
            ,'cpf'=>'12122210'
            ,'fone1'=>'111111'
            ,'email'=>'sozia@gmail.com'            
            ,'user_id'=>1
            ,'empresa_id'=>1
        ]);
    }
}
