
import { TabsList, TabsTrigger } from "@/Components/ui/tabs";

export function DashboardTabList() {
  return (
    <div className="space-between flex items-center">
      <TabsList>
        <TabsTrigger value="articles" className="relative">
          Articles
        </TabsTrigger>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="trending" disabled>
          Trending
        </TabsTrigger>
      </TabsList>
    </div>
  );
}
