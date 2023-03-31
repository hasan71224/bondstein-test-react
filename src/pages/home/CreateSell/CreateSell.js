import React from 'react';
import './CreateSell.css';
import group1 from '../../../assets/Group-1.png'
const CreateSell = () => {
    return (
        <div className='create-section'>
            {/* <div className='create-sell'>
                <div className='create-img'>
                    <img src={group1} alt="" />
                </div>
                <div className='create-content'>
                    <h1>Create and sell your NFTs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button>Sign Up Now</button>
                </div>
            </div> */}
            <div class="grid grid-cols-2 gap-4 create-section">
                <div>
                    <img src={group1} alt="" />
                </div>
                
                <div className='create-contents'>
                    <h1 className='uppercase'>Create and <br /> sell your NFTs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button>Sign Up Now</button>
                </div>
            </div>
        </div>
    );
};

export default CreateSell;