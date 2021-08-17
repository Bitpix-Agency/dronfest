<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBitpixlimitedDronfestArtists2 extends Migration
{
    public function up()
    {
        Schema::table('bitpixlimited_dronfest_artists', function($table)
        {
            $table->string('stage')->nullable();
            $table->time('time')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bitpixlimited_dronfest_artists', function($table)
        {
            $table->dropColumn('stage');
            $table->dropColumn('time');
        });
    }
}
