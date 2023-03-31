import React from 'react';
import './Featured.css';
import img1 from '../../../assets/card-tick-1 1.png';
import img2 from '../../../assets/chart-square 2.png';
import collection1 from '../../../assets/collection-1.png';
import collection2 from '../../../assets/collection-2.png';
import collection3 from '../../../assets/collection-3.png';
import collection4 from '../../../assets/collection-4.png';
import collection5 from '../../../assets/collection-5.png';
import person1 from '../../../assets/person-1.png';

const Featured = () => {
    return (
        <div className='featured'>
        <h1 className='featured-title'>Collection Featured NFTs</h1>
            <div className='section-container'>
                <div>
                    <div className='first-collection'>
                        <div>
                            <img src={collection1} alt="" />
                        </div>
                        <div className='sub-collection'>
                            <img src={collection2} alt="" />
                            <img src={collection3} alt="" />
                            <img src={collection4} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold mb-2'>Amazing Collection</h5>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-8' src={person1} alt="" />
                                <p>by Arkhan</p>
                            </div>
                            <div className='items-button'>
                                <a href="">Total 54 Items</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='first-collection'>
                        <div className='collection-column'>
                            <img src={collection5} alt="" />
                        </div>
                        <div className='sub-collection'>
                            <img src={collection2} alt="" />
                            <img src={collection3} alt="" />
                            <img src={collection4} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold mb-2'>Amazing Collection</h5>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-8' src={person1} alt="" />
                                <p>by Arkhan</p>
                            </div>
                            <div className='items-button'>
                                <a href="">Total 54 Items</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className='first-collection'>
                        <div className='collection-column'>
                            <img src={collection4} alt="" />
                        </div>
                        <div className='sub-collection'>
                            <img src={collection2} alt="" />
                            <img src={collection3} alt="" />
                            <img src={collection4} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold mb-2'>Amazing Collection</h5>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-8' src={person1} alt="" />
                                <p>by Arkhan</p>
                            </div>
                            <div className='items-button'>
                                <a href="">Total 54 Items</a>
                            </div>
                        </div>
                    </div>
                </div>

 
            </div>
        </div>
    );
};

export default Featured;