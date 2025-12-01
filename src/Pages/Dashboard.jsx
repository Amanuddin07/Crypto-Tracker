import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import TabsComponent from "../Components/Dashboard/Tabs/TabsComponent";
import axios from "axios";
import Search from "../Components/Dashboard/Search/Search";
import PaginationComponent from "../Components/Dashboard/Pagination/Pagination";
import Loader from "../Components/Common/Loader/Loader";
import BackToTop from "../Components/Common/BackToTop/BackToTop";
import { get100Coins } from "../Functions/get100Coin";

function Dashboard() {
  const [coins, setCoin] = useState([]);
  const [pageCoins, setPageCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    const prevsIndx = (value - 1) * 10;
    setPageCoins(coins.slice(prevsIndx, prevsIndx + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoin = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoin(myCoins);
      setPageCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoin : pageCoins} />
          {!search && (
            <PaginationComponent page={page} handleChange={handlePageChange} />
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;
