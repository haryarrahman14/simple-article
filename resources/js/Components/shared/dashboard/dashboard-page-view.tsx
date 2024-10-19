"use client";

import { Tabs } from "@/components/ui/tabs";
import { DashboardTabList } from "./dashboard-tab-list";
import { DashboardTabsArticle } from "./dashboard-tabs-article";
import { DashboardTabsFavorite } from "./dashboard-tabs-favorite";

export default function DashboardPageView() {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="articles" className="h-full space-y-6">
        <DashboardTabList />
        <DashboardTabsArticle />
        <DashboardTabsFavorite />
      </Tabs>
    </div>
  );
}
