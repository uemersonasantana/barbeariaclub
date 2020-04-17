<?php

use Illuminate\Database\Seeder;

class UfsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ufs')->insert(['id'=>11,'nome'=>'Rondônia','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>12,'nome'=>'Acre','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>13,'nome'=>'Amazonas','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>14,'nome'=>'Roraima','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>15,'nome'=>'Pará','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>16,'nome'=>'Amapá','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>17,'nome'=>'Tocantins','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>21,'nome'=>'Maranhão','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>22,'nome'=>'Piauí','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>23,'nome'=>'Ceará','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>24,'nome'=>'Rio Grande do Norte','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>25,'nome'=>'Paraíba','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>26,'nome'=>'Pernambuco','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>27,'nome'=>'Alagoas','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>28,'nome'=>'Sergipe','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>29,'nome'=>'Bahia','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>31,'nome'=>'Minas Gerais','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>32,'nome'=>'Espírito Santo','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>33,'nome'=>'Rio de Janeiro','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>35,'nome'=>'São Paulo','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>41,'nome'=>'Paraná','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>42,'nome'=>'Santa Catarina','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>43,'nome'=>'Rio Grande do Sul','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>50,'nome'=>'Mato Grosso do Sul','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>51,'nome'=>'Mato Grosso','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>52,'nome'=>'Goiás','user_id'=>1]);
        DB::table('ufs')->insert(['id'=>53,'nome'=>'Distrito Federal','user_id'=>1]);
    }
}
