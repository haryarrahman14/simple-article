import { DashboardTabList } from '@/Components/shared/dashboard/dashboard-tab-list';
import { DashboardTabsArticle } from '@/Components/shared/dashboard/dashboard-tabs-article';
import { DashboardTabsFavorite } from '@/Components/shared/dashboard/dashboard-tabs-favorite';
import ArticleLayout from '@/Layouts/ArticleLayout';
import { Tabs } from '@/components/ui/tabs';
import { Article } from '@/models/article';
import { Category } from '@/models/category';

function News({
    categories,
    articles,
    articleRecommendation
}: {
    categories: Category[];
    articles: Article[];
    articleRecommendation: Article[];
}) {
    return (
        <ArticleLayout title="News" categories={categories}>
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="articles" className="h-full space-y-6">
                    <DashboardTabList />
                    <DashboardTabsArticle articles={articles} articleRecommendation={articleRecommendation} />
                    <DashboardTabsFavorite />
                </Tabs>
            </div>
        </ArticleLayout>
    );
}

export default News;
