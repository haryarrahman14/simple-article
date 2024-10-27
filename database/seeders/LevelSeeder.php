<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Seeder;

class LevelSeeder extends Seeder
{
    public function run(): void
    {
        $levels = [
            ['name' => 'Beginner', 'description' => 'Basic knowledge level'],
            ['name' => 'Intermediate', 'description' => 'Requires some prior knowledge'],
            ['name' => 'Advanced', 'description' => 'For experienced readers'],
            ['name' => 'Expert', 'description' => 'Expert-level insights'],
        ];

        foreach ($levels as $level) {
            Level::create($level);
        }
    }
}
