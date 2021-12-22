import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Gif,
  Grid
} from "@giphy/react-components";
import React, { useState } from "react";

import GridItem from "../GridItem/GridItem"



const StartingPageContent = () => {
  const [modalGif, setModalGif] = useState();
  return (
    <div>
      <h4>Giphy Gallery</h4>
      <GridItem
        onGifClick={(gif: any, e: React.ChangeEvent<any>) => {
          e.preventDefault();
          setModalGif(gif);
        }}
      />
      {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={200} />
        </div>
      )}
    </div>
  );
}
export default StartingPageContent; 