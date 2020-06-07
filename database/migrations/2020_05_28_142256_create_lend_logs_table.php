<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLendLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lend_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('book_id');
            $table->foreignId('customer_id');
            $table->foreignId('library_id');
            $table->foreignId('user_id');
            $table->foreignId('user_return_id')->constrained('users')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lend_logs');
    }
}
