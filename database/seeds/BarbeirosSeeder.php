<?php

use Illuminate\Database\Seeder;

class BarbeirosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('barbeiros')->insert(['nome'=>'Dal','email'=>'dal@dal.com','fone'=>'111111','user_id'=>1,'empresa_id'=>1]);
        DB::table('barbeiros')->insert(['nome'=>'Ismael Ramos','email'=>'ismael@ismael.com','fone'=>'22222','user_id'=>1,'empresa_id'=>1]);
    }
}
