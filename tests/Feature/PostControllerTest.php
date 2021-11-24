<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PostControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function itCreatePost()
    {
        $response = $this->post('/api/posts', [
            'title' => 'my title',
            'description' => 'My description'
        ]);

        $posts = Post::all();
        $post = Post::first();

        $response->assertOk();
        $this->assertEquals(1, $posts->count());
        $this->assertEquals('my title', $post->title);
    }

    /**
     * @test
     */
    public function itValidatesPostFields()
    {
        $response = $this->post('/api/posts', [
            'title' => '',
            'description' => ''
        ]);

        $response->assertSessionHasErrors(['title', 'description']);
    }

}
