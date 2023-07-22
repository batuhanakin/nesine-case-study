import React, { useEffect, useState } from "react";

import { getBets } from "../api/api";
import { ContextType, useBasket } from "../store/BasketProvider";

export const BetPages = () => {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(false);
  const value = useBasket();
  const { items, addBetToBasket } = value as ContextType;

  useEffect(() => {
    setLoading(true);
    getBets().then((response) => {
      setBets(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("items on store", items);
  }, [items]);

  return loading ? (
    <>loading</>
  ) : (
    <>
      {bets?.map((data: any, index) => (
        <div
          key={data.N + index}
          onClick={(e: any) => {
            addBetToBasket({ bet: e });
          }}
        >
          {data.N}
        </div>
      ))}
    </>
  );
};
