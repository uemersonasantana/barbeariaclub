<?php

use Illuminate\Database\Seeder;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(['name'=>'fulano','email'=>'fulano@fulano.com','password'=>"$2y$10$79oEfW/vSWQwt4K40/.YleIzqSy8TAJlzGwBUjlgfKSA3HO61aV1K"]);

        DB::table('users')->insert(['id'=>3,'name'=>'Gildasio','email'=>'barbeariaclub.lem@gmail.com','password'=>""]);
        DB::table('users')->insert(['id'=>4,'name'=>'Ismael Ramos','email'=>'djmaell10@gmail.com','password'=>""]);
        DB::table('users')->insert(['id'=>7,'name'=>'Carol Moraes','email'=>'barbeariaclub.lem@gmail.com','password'=>""]);
    }
}
