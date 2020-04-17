<?php

use Illuminate\Database\Seeder;

class EmpresasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('empresas')->insert([
            'razaosocial'=>'Dal'
            ,'nomefantasia'=>'dal@dal.com'
            ,'cnpj'=>'111111'
            ,'ie'=>'111111'
            ,'fone1'=>'111111'
            ,'email'=>'barbearia@gmail.com'            
            ,'user_id'=>1
        ]);
    }
}
