import { TextElementChild } from "@/models/article";

const TextComponent = ({ element }: { element: TextElementChild }) => {
  switch (element.tagname) {
    case "h1":
      return (
        <h2 className="text-2xl font-semibold mb-4">
          {element.children?.[0]?.content}
        </h2>
      );
    case "p":
      return <p className="mb-4">{element.children?.[0]?.content}</p>;
    default:
      return null;
  }
};

export default TextComponent;
