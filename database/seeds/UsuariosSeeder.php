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
    }
}
