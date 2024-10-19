<?php

namespace App\Services;

use App\Repositories\ArticleRepository;
use App\Repositories\CategoryRepository;

class ArticleService 
{
    protected $articleRepository;
    protected $categoryRepository;

    public function __construct(ArticleRepository $articleRepository, CategoryRepository $categoryRepository)
    {
        $this->articleRepository = $articleRepository;
        $this->categoryRepository = $categoryRepository;
    }

    public function all()
    {
        $data = $this->articleRepository->all();

        // map category id to category { id, name } and remove category_id
        $data = $data->map(function ($item) {
            $item['category'] = $this->categoryRepository->find($item['category_id']);
            $item['thumbnail'] = asset('storage/' . $item['thumbnail']);
            unset($item['category_id']);
            return $item;
        });

        return $data;
    }

    public function allRecommendation() 
    {
        $data = $this->articleRepository->allRecommendation();

        // map category id to category { id, name } and remove category_id
        $data = $data->map(function ($item) {
            $item['category'] = $this->categoryRepository->find($item['category_id']);
            $item['thumbnail'] = asset('storage/' . $item['thumbnail']);
            unset($item['category_id']);
            return $item;
        });

        return $data;
    }

    public function find($id)
    {
        return $this->articleRepository->find($id);
    }

    // find by attribute slug
    public function findBySlug($slug)
    {
        $data = $this->articleRepository->where('slug', $slug)->first();

        if (!$data) {
            return false;
        }
        $data['thumbnail'] = asset('storage/' . $data['thumbnail']);
        $data['content'] = str($data['content'])->markdown()->sanitizeHtml();

        return $data;
    }

    public function create(array $data)
    {
        $category = $this->categoryRepository->find($data['category_id']);
        if (!$category) {
            return false;
        }

        return $this->articleRepository->create($data);
    }

    public function update($id, array $data)
    {
        $category = $this->categoryRepository->find($data['category_id']);
        if (!$category) {
            return false;
        }

        return $this->articleRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->articleRepository->delete($id);
    }
}