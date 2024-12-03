import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Banner } from "../types/banner";
interface BannerProp {
  bannerData: Banner[];
}
export const BannerCarousel: FC<BannerProp> = ({ bannerData }) => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="flex justify-center items-center">
      <button>
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
      <button>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};
