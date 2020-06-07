<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Library extends Model
{
    protected $fillable = [
        'name', 'address', 'phone', 'picture'
    ];

    public function Book()
    {
        return $this->belongstoMany('App\Book','book_infos')->withPivot('quantity');
    }
}