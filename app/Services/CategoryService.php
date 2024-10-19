<?php

namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService 
{
    protected $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function all()
    {
        $data = $this->categoryRepository->all();

        $data = $data->map(function ($item) {
            $item['icon'] = asset('storage/' . $item['icon']);
            return $item;
        });

        return $data;
    }

    public function find($id)
    {
        return $this->categoryRepository->find($id);
    }

    public function create(array $data)
    {
        return $this->categoryRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->categoryRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->categoryRepository->delete($id);
    }
}