
import { PlusCircledIcon } from "@radix-ui/react-icons";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../ui/context-menu"
import { Skeleton } from "../../ui/skeleton";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { Article } from "@/models/article";
import dayjs from 'dayjs'


interface ArticleThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  article: Article;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ArticleThumbnail({
  article,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ArticleThumbnailProps) {
  const data: any = {};

  const collections: any = data?.data?.data || [];

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Link href={`/article/${article.slug}`}>
              <img
                src={article.thumbnail}
                alt={article.name}
                width={width}
                height={height}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
                  article?.id ? "cursor-pointer" : "cursor-default"
                )}
              />
            </Link>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Reading List</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Collection</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Collection
              </ContextMenuItem>
              <ContextMenuSeparator />
              {collections.map((collection: any) => (
                <ContextMenuItem key={collection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {collection}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Read Later</ContextMenuItem>
          <ContextMenuItem>Share Article</ContextMenuItem>
          <ContextMenuItem>Bookmark</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Report Issue</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{article.name}</h3>
        <p className="text-xs text-muted-foreground">{article.created_at ? dayjs(article.created_at).format('DD MMM YYYY') : '-'}</p>
      </div>
    </div>
  );
}

export function ArticleThumbnailSkeleton({
  width = 250,
  height = 330,
  aspectRatio = "portrait",
}: {
  width?: number;
  height?: number;
  aspectRatio?: "portrait" | "square";
}) {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton
        className={cn(
          "h-auto w-auto ",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
      <div className="space-y-1 text-sm">
        <Skeleton
          className="h-4"
          style={{
            width: `${width}px`,
          }}
        />
        <Skeleton
          className="h-4 w-[200px]"
          style={{
            width: `${(width / 5) * 4}px`,
          }}
        />
        <Skeleton
          className="h-4"
          style={{
            width: `${(width / 5) * 2}px`,
          }}
        />
      </div>
    </div>
  );
}

export const collections = [
  "React Masterpieces",
  "Async Adventures",
  "Component Chronicles",
  "Stateful Stories",
  "Tech Talks",
  "Code Inspirations",
  "JavaScript Gems",
  "Front-End Fundamentals",
  "Modern UI/UX",
  "Programming Paradigms",
  "Algorithm Insights",
  "Web Dev Wisdom",
];
