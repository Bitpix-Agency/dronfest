<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBitpixlimitedDronfestSponsors2 extends Migration
{
    public function up()
    {
        Schema::table('bitpixlimited_dronfest_sponsors', function($table)
        {
            $table->integer('sort_order')->default(1)->change();
        });
    }
    
    public function down()
    {
        Schema::table('bitpixlimited_dronfest_sponsors', function($table)
        {
            $table->integer('sort_order')->default(null)->change();
        });
    }
}
