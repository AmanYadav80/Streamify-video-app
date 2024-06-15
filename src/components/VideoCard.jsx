function formatViewCount(viewCount) {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "k";
  } else {
    return viewCount.toString();
  }
}
const VideoCard = ({ item }) => {
  const { channelTitle } = item?.snippet;
  const { title } = item?.snippet?.localized;
  const imglink = item?.snippet?.thumbnails?.maxres?.url;
  const views = item?.statistics?.viewCount
    ? formatViewCount(item.statistics.viewCount)
    : "N/A";

  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg border-2 border-grey-100 rounded-xl text-white cursor-pointer">
      <img
        className="rounded-lg object-contain"
        alt="thumbnail"
        src={imglink}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{views} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
