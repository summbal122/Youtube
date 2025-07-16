export const LOGO = "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500";
export const SHORTS_LOGO ="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg";
export const SUBS_LOGO ="https://images.squarespace-cdn.com/content/v1/577dee1fc534a5d5bcf56161/1470045573203-75VJ6HHOOKWBUPLW00TP/image-asset.png";
export const PLAYLIST_LOGO="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd88a8EOeMF8pYXxNevzPYUrqXCWUbogDu6kIpf6-C7DAbZRM3HWzPocU&s=10";
export const WATCH_LATER_LOGO ="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-icon-download-in-svg-png-gif-file-formats--material-design-icons-google-action-vol-4-pack-user-interface-1513853.png";
export const YOUR_VIDEOS_LOGO ="https://img.icons8.com/ios7/512/youtube-play.png";
export const TRENDING_LOGO="https://static.vecteezy.com/system/resources/previews/000/580/752/non_2x/fire-flame-logo-template-vector-icon-oil-gas-and-energy-logo.jpg";
export const GAMING_LOGO ="https://cdn-icons-png.flaticon.com/512/7708/7708371.png";
export const NEWS_LOGO ="https://t4.ftcdn.net/jpg/01/03/95/35/360_F_103953529_PCEL52QBWBkKnoXD2l9ZFNOEcdm5PARf.jpg";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`
export const YOUTUBE_COMMENTS = (videoId, apiKey) =>
  `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}&maxResults=85`;
export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?url=https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const OFFSET_LIVE_CHAT = 15;