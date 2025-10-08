"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FeatureVideo({
  src,
  className,
  gradientPosition,
  height,
  width,
  mode = "horiontal",
  ...props
}) {
  const videoId = src.split(".")[0]; // Extract the video ID from the file name
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  if (!src) return null;

  const videoEle = (
    <>
      <video
        ref={videoRef}
        id={videoId}
        height={height}
        width={width}
        title={props.title || src}
        className={"relative  object-contain w-full h-full " + className}
        src={src}
        loop
        muted
        playsInline
        {...props}
      />
      <div
        className={`absolute ${
          gradientPosition || ""
        } w-full h-1/2 from-white to-transparent`}
      />
    </>
  );
  const imageEle = (
    <img
      src={src}
      alt={src}
      className={"object-contain w-full h-full rounded-xl  " + className}
    />
  );
  return (
    <div
      className={cn(
        "relative   overflow-hidden border border-zinc-200 rounded-xl",

        mode == "horizontal"
          ? " min-h-[160px] w-full  min-w-[240px] md:min-h-[200px] md:min-w-[240px] max-h-[240px] md:max-h-[500px]"
          : "shadow-md w-fit mx-auto p-1 bg-gray-50/50"
      )}
    >
      {!src.includes("mp4") ? imageEle : videoEle}
    </div>
  );
}
