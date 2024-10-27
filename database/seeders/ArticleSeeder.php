<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Author;
use App\Models\Level;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        // Ensure we have categories, authors, and levels in the database
        $categories = Category::all();
        $authors = Author::all();
        $levels = Level::all();

        for ($i = 0; $i < 25; $i++) {
            $articleContent = implode(' ', $faker->paragraphs(50)); // At least 500 words
            
            Article::create([
                'name' => $faker->sentence(6),
                'slug' => $faker->slug,
                'thumbnail' => $faker->imageUrl(640, 480, 'business', true, 'thumbnail'),
                'content' => $articleContent,
                'category_id' => $categories->random()->id,
                'author_id' => $authors->random()->id,
                'level_id' => $levels->random()->id,
            ]);
        }
    }
}
