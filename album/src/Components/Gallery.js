import React,{ useEffect, useState } from 'react'
import Image from "./Image";
import Masonry from 'react-masonry-component';
import {getPage, getSearchedImages, getTrendingImages} from "../api/api";
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
  const [page , setPage] = useState(1);

  // function fetchData() {
    // getTrendingImages().then((data) => 
    // {
    //     setImgList(data);
    // },[]);

    // function fetchMore() {
      
      // console.log("Running");
     
    //   getPage(page,query).then((data)=>{
    //     setPage(page + 1);
    //     console.log(data);
    //     setImgList(data);
       
    //   })

      // setTimeout(() => {
      //   setPage(page + 1);
      //   console.log("Running");
      //   getPage(page + 1,query).then((data)=>{
      //     console.log(data);
      //     setImgList(data);
         
      //   })
      // }, 1500);
      
      // console.log("Hello");
      
    // }

  // const handleScroll = (e) => {
  //   if(
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight
  //   )
  //   {
  //     setPage(page+1);
  //     getPage().then((data)=>{
      
  //       setImgList(prevState => ({
  //         ...prevState + data 
  //       }));
  //     })
  //   }
  // }
  

  useEffect(() => {
    getTrendingImages(page).then((data) => 
    {
        
        setImgList(data);
       // console.log(imgList);
    },[]);
    // window.addEventListener("scroll",handleScroll);
  },[]);

  
  useEffect(() => {
      async function fetchData() {
      if(query){
      const data = await getSearchedImages(query,page);
      setImgList(data);
      console.log(data);
      }
    }
      fetchData();
  },[query]);


  // console.log(imgList?.photos.photo.length);
  function load(){
    setPage(page+1);
  }
  
  return <div  >
        <Modal style={modalStyle} isOpen={!!currentImg} onRequestClose={()=> setCurrentImg(null)} >
          <img class="img-preview" src={currentImg} alt="img preview" />
        </Modal>
        <div id="scrollableDiv" className="try1" > 
        <InfiniteScroll
            datalength={imgList?.photos.photo.length} 
            loadMore = {load}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            // scrollableTarget="scrollableDiv"
        >
        <Masonry className='grid-container' options={{ isFitWidth : true}} id="scrollableDiv">
        
           
              {imgList ? imgList.photos.photo.map((pic) => {
              var srcPath = "https://live.staticflickr.com/" + pic.server +"/"+ pic.id + "_" + pic.secret + ".jpg";
              var srcSizePath =  "https://live.staticflickr.com/" + pic.server +"/"+ pic.id + "_" + pic.secret + "_b.jpg";
              return  <Image src={srcPath} key={pic.id} ssrc={srcSizePath}
              handleCLick = {setCurrentImg} 
              />;
              }): <h1>Loading</h1>}
       
        </Masonry>
        </InfiniteScroll>
        </div>
        </div>
       

       
};


export default Gallery;

