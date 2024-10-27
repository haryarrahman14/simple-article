<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Technology', 'slug' => 'technology', 'tagline' => 'Latest in Tech', 'icon' => 'https://example.com/icons/tech.png'],
            ['name' => 'Health', 'slug' => 'health', 'tagline' => 'Health and Wellness', 'icon' => 'https://example.com/icons/health.png'],
            ['name' => 'Science', 'slug' => 'science', 'tagline' => 'Discover Science', 'icon' => 'https://example.com/icons/science.png'],
            ['name' => 'Education', 'slug' => 'education', 'tagline' => 'Education for All', 'icon' => 'https://example.com/icons/education.png'],
            ['name' => 'Lifestyle', 'slug' => 'lifestyle', 'tagline' => 'Upgrade Your Life', 'icon' => 'https://example.com/icons/lifestyle.png'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
