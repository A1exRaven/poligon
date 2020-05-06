<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostHistoryController extends Controller
{
    public function index(): JsonResource
    {

    }

    public function show(Post $post): JsonResource
    {
    }

    public function update(Request $request, Post $post)
    {

    }
}
