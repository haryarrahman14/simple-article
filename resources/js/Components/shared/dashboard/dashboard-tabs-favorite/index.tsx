import { ArticleEmptyPlaceholder } from "@/components/shared/article/article-empty-placeholder";
import { Separator } from "@radix-ui/react-menubar";
import { TabsContent } from "@radix-ui/react-tabs";

export function DashboardTabsFavorite() {
  return (
    <TabsContent
      value="favorites"
      className="h-full flex-col border-none p-0 data-[state=active]:flex"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Your Favorites
          </h2>
          <p className="text-sm text-muted-foreground">
            Articles you{`'`}ve marked as favorites.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <ArticleEmptyPlaceholder />
    </TabsContent>
  );
}
