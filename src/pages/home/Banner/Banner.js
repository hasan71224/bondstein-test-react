import React from 'react';
import './Banner.css'
import bannerimg from '../../../assets/banner-right-removebg-preview.png'
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="main-content">
                <div className='banner-content'>
                    <h1 className="text-left text-5xl font-bold uppercase banner-title">Discover, and collect Digital Art  NFTs</h1>
                    <p class="py-6 text-left banner-paragraph">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    
                    <div className='button-div'>
                    <button className="btn explore-btn">Explore Now</button>
                    </div>
                    <div className='flex mt-4 art'>
                        <div className='point'>
                            <h2>98K+</h2>
                            <p>Artwork</p>
                        </div>
                        <div className='point'>
                            <h2>12K+</h2>
                            <p>Auction</p>
                        </div>
                        <div className='point'>
                            <h2>15K+</h2>
                            <p>Artist</p>
                        </div>
                    </div>
                </div>

                <div className='banner-img'>
                    <img src={bannerimg} className=" rounded-lg"/>
                </div>


           

            </div>
        </div>



        

    );
};

export default Banner;