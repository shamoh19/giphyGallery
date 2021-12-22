import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Gif,
  Grid
} from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ");

const GridItem = ({ onGifClick }: { onGifClick: any }) => {
  const fetchGifs = (offset: number) =>
    giphyFetch.trending({ offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
}

export default GridItem;
