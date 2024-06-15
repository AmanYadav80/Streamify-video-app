export const YOUTUBE_API_KEY = "AIzaSyC39lXbEXb2UQqaYTnx59XrhP5WM-5TH10";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_CURRENT_SEARCH_API_KEY =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  YOUTUBE_API_KEY +
  "&q=";
export const YOUTUBE_CHANNEL_API =
  "https://www.googleapis.com/youtube/v3/channels?key=" +
  YOUTUBE_API_KEY +
  "&part=snippet,statistics&id=";
export const YOUTUBE_CURRENT_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";
export const FIREBASE_API_KEY="AIzaSyALebZ1g9KMLeOW-FjpeXzvE3ET-Cf_7DM";
export const FIREBASE_AUTH_DOMAIN="streamify-e3233.firebaseapp.com";
export const FIREBASE_PROJECT_ID="streamify-e3233";
export const FIREBASE_STORAGE_BUCKET="streamify-e3233.appspot.com";
export const FIREBASE_MESSAGING_SENDER_ID="152717118127";
export const FIREBASE_APP_ID="1:152717118127:web:ec803e4fbce39b5649625a";
export const FIREBASE_MEASUREMENT_ID="G-BQMY04QGYM";

export const dummyUsers = [
  {
    name: "John",
    message: "Hey, how's it going?",
  },
  {
    name: "Emily",
    message: "Hi there! I'm excited about this project.",
  },
  {
    name: "Michael",
    message: "Hello everyone!",
  },
  {
    name: "Sarah",
    message: "Nice to meet you all!",
  },
  {
    name: "David",
    message: "Greetings from David!",
  },
  {
    name: "Jessica",
    message: "Hello from Jessica!",
  },
  {
    name: "Chris",
    message: "Hey, what's up?",
  },
  {
    name: "Emma",
    message: "Hi everyone, how are you doing?",
  },
  {
    name: "Daniel",
    message: "Good day, folks!",
  },
  {
    name: "Olivia",
    message: "Hello, nice to be here!",
  },
  {
    name: "James",
    message: "Hey, it's James!",
  },
  {
    name: "Sophia",
    message: "Greetings, everyone!",
  },
  {
    name: "Matthew",
    message: "Howdy!",
  },
  {
    name: "Ava",
    message: "Hello world!",
  },
  {
    name: "Ryan",
    message: "Hi, nice to meet you all!",
  },
  {
    name: "Isabella",
    message: "Hi there, Isabella here!",
  },
  {
    name: "Andrew",
    message: "Greetings from Andrew!",
  },
  {
    name: "Mia",
    message: "Hello from Mia!",
  },
  {
    name: "Ethan",
    message: "Hey, Ethan here!",
  },
  {
    name: "Charlotte",
    message: "Hello, it's Charlotte!",
  },
];
const realUserNames = [
  "JohnSmith",
  "EmilyJohnson",
  "MichaelWilliams",
  "SarahJones",
  "DavidBrown",
  "JessicaDavis",
  "ChrisMiller",
  "EmmaWilson",
  "DanielMoore",
  "OliviaTaylor",
  "JamesAnderson",
  "SophiaThomas",
  "MatthewJackson",
  "AvaWhite",
  "RyanHarris",
  "IsabellaMartinez",
  "AndrewClark",
  "MiaLewis",
  "EthanLee",
  "CharlotteWalker",
];
const randomMessages = [
  "Enjoying the stream!",
  "Great content!",
  "Hello from the live chat!",
  "Who else is watching?",
  "This is awesome!",
  "Loving the stream!",
  "Can't stop watching!",
  "Greetings from the live chat!",
  "Having a blast here!",
  "This is so entertaining!",
  "Sending love from the chat!",
  "Amazing stream!",
  "Keep up the good work!",
  "Having a good time!",
  "Thanks for the stream!",
  "Just joined the chat!",
  "Excited to be here!",
  "The chat is lit!",
  "Hello fellow viewers!",
  "Enjoying the conversation!",
];
export function getRandomName() {
  return realUserNames[Math.floor(Math.random() * realUserNames.length)];
}

export function getRandomMessage() {
  return randomMessages[Math.floor(Math.random() * randomMessages.length)];
}
export const LIVE_CHAT_COUNT = 5;
export function validate(email, password) {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegExp =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailRegExp.test(email);
  const isPasswordValid = passRegExp.test(password);
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not in valid format";
  return null;
}
