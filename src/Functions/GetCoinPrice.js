import axios from "axios";

export const getCoinPrice = async (id, days, priceType) => {
  const prices = await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      { crossDomain: true }
    )
    .then((response) => {
      return response.data[priceType];
    })
    .catch((error) => {
      console.error("ERROE>>>", error);
    });
  return prices;
};
