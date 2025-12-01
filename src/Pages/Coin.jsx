import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header/Header";
import Loader from "../Components/Common/Loader/Loader";
import { CoinObject } from "../Functions/CoinObject";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import List from "../Components/Dashboard/List/List";
import { GetCoinData } from "../Functions/GetCoinData";
import { getCoinPrice } from "../Functions/GetCoinPrice";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { ConvertDate } from "../Functions/ConvertDate";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import { settingChartData } from "../Functions/SettingChartData";
import TogglePriceType from "../Components/Coin/PriceType/PriceType";

export default function Coin() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState(null);
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');


  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await GetCoinData(id);
    if (data) {
      CoinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days, priceType);
      if (prices && prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDays= async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const prices = await getCoinPrice(id, e.target.value, priceType);
      if (prices && prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
  }


  const handlePriceTypeChange = async (event, newType) => {
    if (!newType) return; // Prevent deselecting all options
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrice(id, days, newType);
      if (prices && prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper" style={{padding: ".5rem .5rem"}}>
            <SelectDays days={days} handleDays={handleDays} />
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}
