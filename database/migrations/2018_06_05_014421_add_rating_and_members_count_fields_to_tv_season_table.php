<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRatingAndMembersCountFieldsToTvSeasonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tv_seasons', function (Blueprint $table) {
            $table->float('rating')->nullable();
            $table->bigInteger('members_count')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tv_seasons', function (Blueprint $table) {
            $table->dropColumn('rating');
            $table->dropColumn('members_count');
        });
    }
}
