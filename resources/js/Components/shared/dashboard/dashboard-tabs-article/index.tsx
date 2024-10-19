
import { TabsContent } from "@/components/ui/tabs";
import { DashboardLatestArticle } from "./latest-article";
import { DashboardRecommendedArticle } from "./recommended-article";
import { Article } from "@/models/article";

export function DashboardTabsArticle({
  articles,
  articleRecommendation
}: {
  articles: Article[]
  articleRecommendation: Article[];
}) {
  return (
    <TabsContent value="articles" className="border-none p-0 outline-none">
      <DashboardLatestArticle articles={articles} />
      <DashboardRecommendedArticle articles={articleRecommendation} />
    </TabsContent>
  );
}
