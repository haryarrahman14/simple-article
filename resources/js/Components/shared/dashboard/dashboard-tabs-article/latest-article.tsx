
import { Separator } from "@/Components/ui/separator";
import { ArticleThumbnail, ArticleThumbnailSkeleton } from "../../article/article-thumbnail";
import { Article } from "@/models/article";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

export function DashboardLatestArticle({
  articles
}: {
  articles: Article[]
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Latest Articles
          </h2>
          <p className="text-sm text-muted-foreground">
            The most recent articles. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {articles &&
              articles?.map((article: Article, index: number) => (
                <ArticleThumbnail
                  key={article.id}
                  article={article}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <Separator className="my-2" />
      <p className="text-xs text-muted-foreground">
        *Note : You can read the full article by left clicking on the image and
        you can also right click to show the article options.
      </p>
      <Separator className="my-2" />
    </>
  );
}
