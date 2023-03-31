import React from 'react';
import './Discover.css';
import { GalleryData } from "./Gallary";
import { useEffect, useState } from "react";
import images from '../../../assets/discover1.png'

const Discover = () => {

    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);
    useEffect(()=>{
        setData(GalleryData);
        setCollection([... new Set(GalleryData.map((item)=> item.titile))])
      },[]) 
      console.log(data);
    
      const gallery_filter = (itemData) =>{
        const filterData = GalleryData.filter((item)=> item.titile == itemData);
        // console.log('item',itemData);
        setData(filterData);
      }
    

    return (
        <div className="App">

            <div className="galleryWrapper">
                <h1 className='gallary-title'>Discover more NFTs</h1>

                <div className="filterItem">
                    <ul>
                        <li><button onClick={()=> setData(GalleryData)}>All Categories</button></li>
                        {
                        collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
                        }
                    </ul>
                </div>
                <div className="galleryContainer">
                {
                    data.map((item)=> <div  key={item.id} className="galleryItem">
                        <img src={images} />
                    </div> )
                }
                </div>
                <button className='nfts-button'>More NFTs</button>
            </div>
        </div>
    );
};

export default Discover;