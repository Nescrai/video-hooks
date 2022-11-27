import React, { useState, useEffect } from "react";
import SeachBar from "./SeachBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cars");
  // useEffect(() => {
  //   onTermSubmit("cars");
  // }, []);
  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   setVideos(response.data.items);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      <SeachBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
