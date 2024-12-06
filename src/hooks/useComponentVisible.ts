import { useState, useEffect, useRef } from "react";

export const useComponentVisibile = (initialVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(initialVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
    console.log("test");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
