import React from 'react';
import './Transection.css';
import img1 from '../../../assets/card-tick-1 1.png';
import img2 from '../../../assets/chart-square 2.png';
const Transection = () => {
    return (
        <div className='transaction'>
            <div className='grid-container'>
                <div>
                    <h2>The amazing NFT art of the world here</h2>
                </div>
                <div>
                    <div className='titles'>
                        <img src={img1} alt="" />
                        <h3>Fast Transaction</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                </div>
                <div>
                    <div className='titles'>
                        <img src={img2} alt="" />
                        <h3>Growth Transaction</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                </div>
            </div>
        </div>
    );
};

export default Transection;