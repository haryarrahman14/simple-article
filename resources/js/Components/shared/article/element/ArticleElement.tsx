
import ImageComponent from "./ImageElement";
import QuoteComponent from "./QuoteElement";
import TextComponent from "./TextElement";
import InstagramEmbed from "./InstagramEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import { Article, TextElementChild } from "@/models/article";

export default function ArticleElement({
  article,
  element,
}: {
  article: Article;
  element: TextElementChild;
}) {
  const { tagname, parameters } = element;

  const findMediaById = (id: string) => {
    return article.embedded.mediaEmbedded.find((media) => media.id === id);
  };

  switch (tagname) {
    case "h1":
    case "p":
      return <TextComponent element={element} />;
    case "a":
      if (parameters.align) {
        const media = findMediaById(parameters.ref);
        if (media) {
          switch (media.docType) {
            case "ImageProxy":
              return (
                <ImageComponent
                  element={element}
                  mediaList={article.embedded.mediaEmbedded}
                />
              );
            case "Interactive":
              if (media.externalembed?.id?.startsWith("CPDPd6jDJQK")) {
                return <InstagramEmbed url={media?.canonicalURL || ""} />;
              }
              break;
            default:
              return (
                <ImageComponent
                  element={element}
                  mediaList={article.embedded.mediaEmbedded}
                />
              );
          }
        }
      }

      return null;
    case "pullquote":
      return <QuoteComponent content={element.children?.[0]?.content || ""} />;
    case "instagram":
      return <InstagramEmbed url={element.parameters?.url || ""} />;
    case "youtube":
      return <YouTubeEmbed url={element.parameters?.url || ""} />;
    default:
      return null;
  }
}
