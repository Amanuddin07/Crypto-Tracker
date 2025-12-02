import { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import SelectCoin from "../Components/Compare/SelectCoins/SelectCoin";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import { CoinObject } from "../Functions/CoinObject";
import { settingChartData } from "../Functions/SettingChartData";
import { GetCoinData } from "../Functions/GetCoinData";
import { getCoinPrice } from "../Functions/GetCoinPrice";
import Loader from "../Components/Common/Loader/Loader";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import LineChart from "../Components/Coin/LineChart/LineChart";
import TogglePriceType from "../Components/Coin/PriceType/PriceType";
import List from "../Components/Dashboard/List/List";

export default function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  async function handleDays(e) {
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrice(crypto1, e.target.value, priceType);
    const prices2 = await getCoinPrice(crypto2, e.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrice(crypto1, days, newType);
    const prices2 = await getCoinPrice(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await GetCoinData(crypto1);
    if (data1) {
      const data2 = await GetCoinData(crypto2);
      CoinObject(setCrypto1Data, data1);
      if (data2) {
        CoinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrice(crypto1, days, priceType);
        const prices2 = await getCoinPrice(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        console.log("Both Prices Fetched", prices1, prices2);

        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (e, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(e.target.value);
      const data = await GetCoinData(e.target.value);
      CoinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrice(crypto1, days, priceType);
      const prices2 = await getCoinPrice(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        // settingChartData(setChartData, prices);
        console.log("Both Prices Fetched", prices1, prices2);
        setIsLoading(false);
      }
    } else {
      setCrypto1(e.target.value);
      const data = await GetCoinData(e.target.value);
      CoinObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div className="container container-fluid">
            <div className="coin-days-flex">
              <SelectCoin
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoinChange={handleCoinChange}
              />
              <SelectDays days={days} handleDays={handleDays} noPTag={true} />
            </div>
          </div>
          
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>

          <div className="grey-wrapper" style={{ padding: ".5rem .5rem" }}>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </div>
      )}
    </div>
  );
}
