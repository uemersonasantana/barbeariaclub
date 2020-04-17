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
        DB::table('users')->insert(['id'=>1,'name'=>'Uemerson Santana','email'=>'uemerson@icloud.com','password'=>"$2y$10$8fLdTMPPxN5c6XdZcNAGP.z0nur4ZrGyW1fsesN3i/SjH7KOoFg4."]);
        DB::table('users')->insert(['id'=>3,'name'=>'Gildasio','email'=>'barbeariaclub.lem@gmail.com','password'=>"$2y$10$8fLdTMPPxN5c6XdZcNAGP.z0nur4ZrGyW1fsesN3i/SjH7KOoFg4."]);
        DB::table('users')->insert(['id'=>4,'name'=>'Ismael Ramos','email'=>'djmaell10@gmail.com','password'=>"$2y$10$8fLdTMPPxN5c6XdZcNAGP.z0nur4ZrGyW1fsesN3i/SjH7KOoFg4."]);
        DB::table('users')->insert(['id'=>7,'name'=>'Carol Moraes','email'=>'bernardomarques180@gmail.com','password'=>"$2y$10$8fLdTMPPxN5c6XdZcNAGP.z0nur4ZrGyW1fsesN3i/SjH7KOoFg4."]);
    }
}
