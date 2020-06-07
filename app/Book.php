<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'name', 'author', 'description', 'rating', 'cover', 'genre', 'count'
    ];

    public function Library()
    {
        return $this->belongstoMany('App\Library','book_infos')->withPivot('quantity');
    }
}
