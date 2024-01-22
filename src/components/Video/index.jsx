import VideoJS from "../VideoPlayer/video-player";
import { useRef } from "react";
import videojs from "video.js";

const Video = ({ video }) => {
  //   const { order, title, status, link, previewImageLink } = video;

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://wisey.app/videos/win-your-life-back-course/lesson-5/AppleHLS1/lesson-5.m3u8",
        type: "application/vnd.apple.mpegurl",
      },
    ],
  };
  console.log(videoJsOptions.sources[0].src);
  const playerRef = useRef(null);
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};

export default Video;
