<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBitpixlimitedDronfestCharities extends Migration
{
    public function up()
    {
        Schema::create('bitpixlimited_dronfest_charities', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('year');
            $table->string('amount')->nullable();
            $table->text('charities')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bitpixlimited_dronfest_charities');
    }
}
