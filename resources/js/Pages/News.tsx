import ArticleLayout from '@/Layouts/ArticleLayout';
import { Article } from '@/models/article';
import { Head } from '@inertiajs/react';

export default function Welcome({
    articles
}: {
    articles: Article[];
}) {
    return (
        <ArticleLayout>
            <Head title="Portal News" />
            <p>YOOO WASSUP THIS IS PORTAL</p>
        </ArticleLayout>
    );
}
