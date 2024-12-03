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
        <img
          src={item.image}
          key={uuidv4()}
          className={`${
            index === active ? "block" : "hidden"
          } w-full h-[400px] object-cover rounded px-10`}
        />
      ))}
      <button>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};
