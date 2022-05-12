const baseURL = "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6b38ea75acc26996180a238979867806&safe_search=1&format=json&nojsoncallback=1"
const API_KEY  = process.env.API_KEY

export const getTrendingImages = async()=>{
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
export const getSearchedImages = async(query)=>{
 
   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b38ea75acc26996180a238979867806&tags=${query}&format=json&nojsoncallback=1`;

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