const QuoteComponent = ({ content }: { content: string }) => {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
      <p>{content}</p>
    </blockquote>
  );
};

export default QuoteComponent;
