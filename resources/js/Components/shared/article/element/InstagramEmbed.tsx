const InstagramEmbed = ({ url }: { url: string }) => {
  return (
    <div className="mb-4">
      <span>
        Instagram Embed:{" "}
        <a
          className="text-blue-500"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK
        </a>
      </span>
    </div>
  );
};

export default InstagramEmbed;
