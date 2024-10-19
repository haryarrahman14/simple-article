<?php

namespace App\Services;

use App\Repositories\ArticleRepository;
use App\Repositories\CategoryRepository;

class ArticleService 
{
    protected $articleRepository;
    protected $categoryService;

    public function __construct(ArticleRepository $articleRepository, CategoryRepository $categoryService)
    {
        $this->articleRepository = $articleRepository;
        $this->categoryService = $categoryService;
    }

    public function all()
    {
        $data = $this->articleRepository->all();

        // map category id to category { id, name } and remove category_id
        $data = $data->map(function ($item) {
            $item['category'] = $this->categoryService->find($item['category_id']);
            unset($item['category_id']);
            return $item;
        });

        return $data;
    }

    public function find($id)
    {
        return $this->articleRepository->find($id);
    }

    public function create(array $data)
    {
        $category = $this->categoryService->find($data['category_id']);
        if (!$category) {
            return false;
        }

        return $this->articleRepository->create($data);
    }

    public function update($id, array $data)
    {
        $category = $this->categoryService->find($data['category_id']);
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