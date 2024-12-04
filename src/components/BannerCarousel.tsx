import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Banner } from "../types/banner";
interface BannerProp {
  bannerData: Banner[];
}
export const BannerCarousel: FC<BannerProp> = ({ bannerData }) => {
  const [active, setActive] = useState<number>(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((prev) => (prev + 1) % bannerData.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [bannerData.length]);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() =>
          setActive((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1))
        }
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>

      {bannerData.map((item, index) => (
        <div
          className="relative flex items-center justify-center"
          key={uuidv4()}
        >
          <img
            src={item.image}
            className={`${
              index === active ? "block" : "hidden"
            } w-full h-[400px] object-cover rounded px-10`}
          />
          <h1
            className={`${
              index === active ? "block" : "hidden"
            } text-4xl text-white font-bold absolute`}
          >
            {item.name}
          </h1>
        </div>
      ))}

      <button
        onClick={() => setActive((prev) => prev + (1 % bannerData.length))}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};
