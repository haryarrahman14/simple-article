
import { Article } from "@/models/article";
import { ArticleThumbnail } from "../../article/article-thumbnail";
import { Separator } from "@/Components/ui/separator";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

export function DashboardRecommendedArticle({
  articles
}: {
  articles: Article[]
}) {
  return (
    <>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recommended for You
        </h2>
        <p className="text-sm text-muted-foreground">
          Articles we think you{`'`}ll like. Updated daily.
        </p>
      </div>

      <Separator className="my-4" />

      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">


            {
              articles &&
              articles.map((article) => (
                <ArticleThumbnail
                  key={article.id}
                  article={article}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
