<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBitpixlimitedDronfestSponsors extends Migration
{
    public function up()
    {
        Schema::table('bitpixlimited_dronfest_sponsors', function($table)
        {
            $table->integer('sort_order');
        });
    }
    
    public function down()
    {
        Schema::table('bitpixlimited_dronfest_sponsors', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
