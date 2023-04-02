import React from "react";
import { useParams } from "react-router";
import MainYoutubePage from "./MainPage/MainYoutubePage";
const FullPage = () => {
  const parameters = useParams();
  return (
    <MainYoutubePage
      params={parameters === "new" ? "new" : parameters.pageTitle}
    />
  );
};

export default FullPage;
