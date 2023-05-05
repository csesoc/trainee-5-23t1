import * as React from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { resName } = useParams();
  return <div>Restaurant Page</div>;
};

export default RestaurantPage;
