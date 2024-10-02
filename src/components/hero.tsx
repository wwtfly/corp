import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  imgURL: StaticImageData;
  altTXT: string;
  content: string;
}
export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      {/* 背景图片 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgURL}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altTXT}
        />
        {/* 透明渐变 */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      {/* 文字居中设置 */}
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-4xl">{props.content}</h1>
      </div>
    </div>
  );
}
