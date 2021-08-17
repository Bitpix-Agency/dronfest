<?php namespace BitpixLimited\Dronfest\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBitpixlimitedDronfestVideos extends Migration
{
    public function up()
    {
        Schema::create('bitpixlimited_dronfest_videos', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name');
            $table->text('url')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bitpixlimited_dronfest_videos');
    }
}
