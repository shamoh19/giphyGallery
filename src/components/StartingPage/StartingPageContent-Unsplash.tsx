import React, { useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./StartingPageContent.module.css";


const ImageItem = ({ url, keyIndex, clickHandler }: { url: any, keyIndex: any, clickHandler: any }) => (
  <div className="image-item" key={keyIndex} onClick={() => clickHandler(url)} >
    <img src={url} />
  </div>
);

let StartingPageContent = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);
  const [modalGif, setModalGif] = useState();

  React.useEffect(() => {
    fetchImages();
  }, []);

  const clickHandler = (url: any) => {
    setModalGif(url)
  }

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
      "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        // @ts-ignore
        setImages([...images, ...res.data]);
        setIsLoaded(true);

      });
  };

  return (

    <div className="pContainer">

      <InfiniteScroll
        // @ts-ignore
        dataLength={images}
        next={() => fetchImages(5)}
        hasMore={true}
        loader={
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"
            alt="loading"
          />
        }
      >
        <div className="image-grid" style={{ marginTop: "30px" }}>
          {loaded
            ? images.map((image, index) => (
              <ImageItem
                // @ts-ignore
                url={image.urls.regular}
                // @ts-ignore
                keyIndex={image.id}
                clickHandler={clickHandler}
              />
            ))
            : ""}
        </div>
      </InfiniteScroll>

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
          <img src={modalGif} width={200} />
        </div>
      )}
    </div>



  );
};


export default StartingPageContent; 