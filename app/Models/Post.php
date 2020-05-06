<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'text',
    ];

    public function postHistory()
    {
        return $this->hasMany(PostHistory::class);
    }
}
