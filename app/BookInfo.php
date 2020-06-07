<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookInfo extends Model
{
    protected $fillable = [
        'book_id', 'library_id', 'quantity'
    ];
}
