<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostsResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostController extends Controller
{
    public function index(): JsonResource
    {
        return PostsResource::collection(Post::all());
    }

    public function show(Post $post): JsonResource
    {
        return new PostsResource($post);
    }

    protected function store(Request $request): JsonResource
    {
        $post = Post::create([
            'title' => $request->title,
            'text' => $request->text,
        ]);

        return new PostsResource($post);
    }

    public function update(Request $request, Post $post)
    {
        $post->update([
            'title' => $request->title,
            'text' => $request->text
        ]);

        return new PostsResource($post);
    }
}
