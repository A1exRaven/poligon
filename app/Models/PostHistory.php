<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostHistory extends Model
{
    protected $fillable = [
        'text',
        'post_id'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
