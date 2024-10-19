
import { MediaEmbedded } from "@/models/article";

const getImageURLByID = (id: string, mediaList: MediaEmbedded[]): string => {
  const mediaItem = mediaList.find((item) => item.id === id);

  return mediaItem ? mediaItem?.media?.image?.primary?.complete?.[0].url : "";
};

const ImageComponent = ({
  element,
  mediaList,
}: {
  element: any;
  mediaList: MediaEmbedded[];
}) => {
  if (!getImageURLByID(element.parameters?.ref ?? "", mediaList)) {
    return null;
  }

  return (
    <div className="mb-4 max-w-[500px] max-h-[500px] overflow-hidden">
      <img
        src={getImageURLByID(element.parameters?.ref ?? "", mediaList)}
        alt={element.alt || "Image"}
        width={1200}
        height={675}
        className="w-full h-auto"
      />
    </div>
  );
};

export default ImageComponent;
