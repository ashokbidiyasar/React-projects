import { useEffect, useState } from "react";

const usePriceConverterInfo = (currency) => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.result === "success") {
          setRates(jsonData.rates || {});
        } else {
          throw new Error("API did not return success");
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [currency]);

  return rates;
};

export default usePriceConverterInfo;
