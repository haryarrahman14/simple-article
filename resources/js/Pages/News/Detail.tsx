import ArticleLayout from "@/Layouts/ArticleLayout";
import { Article } from "@/models/article";
import { Category } from "@/models/category";
import dayjs from 'dayjs'


export default function Detail({
    article,
    categories
}: {
    article: Article
    categories: Category[]
}) {
    console.log({ article })
    return (
        <ArticleLayout title={article?.name} categories={categories}>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{article?.name}</h1>
                <div className="mb-4 max-w-[500px] max-h-[500px] overflow-hidden">
                    <img
                        src={article.thumbnail}
                        alt={article.name}
                        width={1200}
                        height={675}
                        className="w-full h-auto"
                    />
                </div>
                <div className="mb-6">
                    {article?.content}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Created At</h2>
                    <p >{article?.created_at ? dayjs(article?.created_at).format('DD MMM YYYY') : '-'}</p>
                </div>
            </div>

        </ArticleLayout>
    );
}
