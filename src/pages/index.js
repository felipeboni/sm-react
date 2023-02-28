import { useEffect, useState } from "react";
import { Post } from "./modules/components/feed";
import { FullPage, Slide } from "react-full-page";
import { spacing } from "@mui/system";

export default function Home() {
  const initialSlide = 0;

  const [activeSlider, setActiveSlider] = useState(initialSlide);

  useEffect(() => {
    console.log(activeSlider);
  }, [activeSlider]);

  const [sliders, setSliders] = useState([
    {
      videoUri:
        "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
      likes: 1029859,
      comments: 10748,
      author: "neymarjr",
      description: "lorem ipsum dolor isit amet lorem ipsum dolor isit amet lorem ipsum dolor isit amet lorem ipsum dolor isit amet lorem ipsum dolor isit amet",
    },
    {
      videoUri:
        "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
      likes: 1029859,
      comments: 10748,
      author: "neymarjr",
      description: "lorem ipsum dolor isit amet"
    },
    {
      videoUri:
        "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4",
      likes: 1029859,
      comments: 10748,
      author: "neymarjr",
      description: "lorem ipsum dolor isit amet"
    },
    {
      videoUri:
        "https://assets.mixkit.co/videos/preview/mixkit-man-holding-neon-light-1238-large.mp4",
      likes: 1029859,
      comments: 10748,
      author: "neymarjr",
      description: "lorem ipsum dolor isit amet"
    },
  ]);

  return (
    <>
      <FullPage className="h-12"
        beforeChange={({ to }) => setActiveSlider(to)}
        initialSlide={initialSlide}
      >
        {sliders.map((video, index) => (
          <Slide key={index}>
            <Post props={video} isPlaying={activeSlider === index} />
          </Slide>
        ))}
      </FullPage>
    </>
  );
}
