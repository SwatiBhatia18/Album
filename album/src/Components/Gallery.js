import React,{ useEffect, useState } from 'react'
import Image from "./Image";
import Masonry from 'react-masonry-component';
import {getSearchedImages, getTrendingImages} from "../api/api";
import './Gallery.css'
import Modal from 'react-modal';
import InfiniteScroll from 'react-infinite-scroller';

const modalStyle = {
  content: {
    border: "none",
    padding: "none",
    overflow: "none",
    background : "none",
    margin : "20px 10px"
  },
};

const Gallery = ({query})=>{
  const [imgList , setImgList] = useState();
  const [currentImg , setCurrentImg] = useState(null); 

  function fetchData() {
    getTrendingImages().then((data) => 
    {
        setImgList(data);
    },[]);
  
  }
  useEffect(() => {
    getTrendingImages().then((data) => 
    {
        setImgList(data);
       // console.log(imgList);
    },[]);
  },[]);
  useEffect(() => {
      async function fetchData() {
      if(query){
      const data = await getSearchedImages(query);
      setImgList(data);
      console.log(data);
      }
    }
      fetchData();
  },[query]);


  
  return <div>
        <Modal style={modalStyle} isOpen={!!currentImg} onRequestClose={()=> setCurrentImg(null)} >
          <img class="img-preview" src={currentImg} alt="img preview" />
        </Modal>
        <InfiniteScroll
            loadMore={fetchData(query)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
          <Masonry className='grid-container' options={{ isFitWidth : true}} >
              {imgList ? imgList.photos.photo.map((pic) => {
              var srcPath = "https://live.staticflickr.com/" + pic.server +"/"+ pic.id + "_" + pic.secret + ".jpg";
              var srcSizePath =  "https://live.staticflickr.com/" + pic.server +"/"+ pic.id + "_" + pic.secret + "_b.jpg";
              return  <Image src={srcPath} key={pic.id} ssrc={srcSizePath}
              handleCLick = {setCurrentImg} 
              />;
              }): <h1>Loading</h1>}
          </Masonry>
       </InfiniteScroll>

       </div>;
};


export default Gallery;

