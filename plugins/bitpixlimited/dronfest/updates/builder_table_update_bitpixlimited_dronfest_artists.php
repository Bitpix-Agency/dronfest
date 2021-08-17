<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBitpixlimitedDronfestArtists extends Migration
{
    public function up()
    {
        Schema::table('bitpixlimited_dronfest_artists', function($table)
        {
            $table->integer('sort_order')->default(0);
        });
    }
    
    public function down()
    {
        Schema::table('bitpixlimited_dronfest_artists', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
