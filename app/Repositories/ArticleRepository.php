<?php 

namespace App\Repositories;

use App\Models\Article;
use App\Repositories\Contracts\ArticleRepositoryInterface;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function all()
    {
        return Article::all();
    }

    public function allRecommendation() {
        // get random 5 articles
        return Article::inRandomOrder()->limit(5)->get();
    }

    public function find($id)
    {
        return Article::find($id);
    }

    public function create(array $data)
    {
        return Article::create($data);
    }

    public function update($id, array $data)
    {
        return Article::find($id)->update($data);
    }

    public function delete($id)
    {
        return Article::destroy($id);
    }
}