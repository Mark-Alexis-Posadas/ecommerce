import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { data };
};
