<?php

namespace App\Http\Controllers;

use App\Services\ArticleService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ArticleController extends Controller
{
    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index()
    {
        return Inertia::render('News', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'articles' => fn() => $this->articleService->all(),
            'articleRecommendation' => fn() => $this->articleService->allRecommendation(),  
        ]);
    }
}
