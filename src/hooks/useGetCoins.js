import React, { useState, useEffect } from "react";

function useGetCoins(url) {
  const [item, setItem] = useState();

  const fetchApi = async (req, res) => {
    const response = await fetch(url);
    //console.log(response);
    const responseJSON = await response.json();
    setItem(responseJSON);
    //console.log(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return item;
}

export { useGetCoins };

