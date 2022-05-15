import { useState } from "react";

// const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6b38ea75acc26996180a238979867806&safe_search=1&page=${page}&format=json&nojsoncallback=1`
// const API_KEY  = process.env.API_KEY

export const getTrendingImages = async(page)=>{
    const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6b38ea75acc26996180a238979867806&safe_search=1&page=${page}&format=json&nojsoncallback=1`
    try{
        const res = await fetch(`${baseURL}`, {
            // headers:{
            //     Authorization: `Client-ID ${API_KEY}`,
            // },
        });
        if (!res.ok){
          console.error("failed", res.status);
                                                                             
          return;
        }
        const json= await res.json(); 
        return json ;
    }
    catch (error){
        console.error("error in making request", error);
        }
}
// Return the Searched Images 
export const getSearchedImages = async(query , page)=>{
 
   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b38ea75acc26996180a238979867806&tags=${query}&page=${page}format=json&nojsoncallback=1`;

    try{
        const res = await fetch(url, {});
        if (!res.ok){
          console.error("failed", res.status);
                                                                             
          return;
        }
        const json= await res.json(); 
        return json ;
    }
    catch (error){
        console.error("error in making request", error);
        }
}

export const getPage = async(page , query)=>{
    var url = "";
    console.log(query);
    // if(query != null){
    //     url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b38ea75acc26996180a238979867806&tags=cat&page=${page}&format=json&nojsoncallback=1`;
    //     console.log(url);
    // }
    // else
    // {
        url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6b38ea75acc26996180a238979867806&page=${page}&safe_search=3&format=json&nojsoncallback=1`
        
    // 
     try{
         const res = await fetch(url, {});
         if (!res.ok){
           console.error("failed", res.status);
                                                                              
           return;
         }
         const json= await res.json(); 
         return json ;
     }
     catch (error){
         console.error("error in making request", error);
         }
 }