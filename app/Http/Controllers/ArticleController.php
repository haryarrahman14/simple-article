<?php

namespace App\Http\Controllers;

use App\Services\ArticleService;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ArticleController extends Controller
{
    protected $articleService;
    protected $categoryService;

    public function __construct(ArticleService $articleService, CategoryService $categoryService)
    {
        $this->articleService = $articleService;
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        return Inertia::render('News', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'categories' => fn() => $this->categoryService->all(),
            'articles' => fn() => $this->articleService->all(),
            'articleRecommendation' => fn() => $this->articleService->allRecommendation(),  
        ]);
    }
}
