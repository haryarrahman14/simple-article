const YouTubeEmbed = ({ url }: { url: string }) => {
  return (
    <div className="mb-4">
      <span>
        YouTube Embed:{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          LINK
        </a>
      </span>
    </div>
  );
};

export default YouTubeEmbed;
