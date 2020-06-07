<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LendLog extends Model
{
    protected $fillable = [
        'book_id', 'customer_id', 'library_id', 'user_id', 'status'
    ];

    public function customers()
    {
        return $this->hasOne('App\Customer','id','customer_id');
    }
    
    public function books()
    {
        return $this->hasOne('App\Book','id','book_id');
    }
}
