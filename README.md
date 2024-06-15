# Streamify

Streamify is a YouTube-like video streaming application built with modern web technologies to provide a seamless and interactive user experience.

## Technologies Used

- **Frontend**: React
- **State Management**: Redux Toolkit
- **UI Design**: Tailwind CSS
- **Data Retrieval**: YouTube API


## Features

- **Advanced Search Bar with Intelligent Debouncing**: The search bar incorporates intelligent debouncing, which optimizes API call frequency by delaying requests until 200ms after the last keystroke. This enhances user experience by reducing unnecessary API calls and improving application responsiveness.
  
- **Dynamic Video Display**: The main component dynamically fetches and displays video cards from the YouTube API. Each card is enriched with detailed information, including subscriber and like counts, offering users a comprehensive viewing experience.
  
- **Intuitive Sidebar Navigation**: A sleek and intuitive sidebar provides seamless navigation through various sections of the application, enhancing user interaction and accessibility.
  
- **Efficient Query Caching**: Implemented caching for each search query ensures that repeated searches retrieve data from the cache rather than making redundant API calls. This significantly reduces load times and server requests.
  
- **Interactive Comments Section**: The comments section for each video supports n-level deep comments, allowing users to engage in threaded discussions with unlimited nested replies. This feature fosters richer community interactions.
  
- **Real-Time Live Chat**: Each video page includes a real-time live chat feature with simulated users, enabling dynamic conversation. The chat system efficiently manages message volume by implementing a buffer that removes old messages, ensuring the interface remains smooth and responsive.
