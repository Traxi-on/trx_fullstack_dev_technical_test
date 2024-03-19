import React from "react";
import { VehicleProvider } from "../../context/VehicleContext";
import Map from "../../components/Map/Map";
import Search from "../../components/Search/Search";
import VehicleList from "../../components/Vehicle/VehicleList";

const HomeContent = () => {
  return (
    <VehicleProvider>
      <Map />
      <Search />
      <VehicleList />
    </VehicleProvider>
  );
};

export default HomeContent;
