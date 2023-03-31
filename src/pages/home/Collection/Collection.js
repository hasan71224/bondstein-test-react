import React from 'react';
import './Collection.css';
import img1 from '../../../assets/collection-1.png';
import collection2 from '../../../assets/collection-2.png';
import collection3 from '../../../assets/collection-3.png';
import collection4 from '../../../assets/collection-4.png';
import person1 from '../../../assets/person-1.png';
import person2 from '../../../assets/person-2.png';
import person3 from '../../../assets/person-3.png';
import person4 from '../../../assets/person-4.png';
import person5 from '../../../assets/person-5.png';
import person6 from '../../../assets/person-6.png';
import ethereum from '../../../assets/ethereum 2.png';
import ethereum3 from '../../../assets/ethereum 3.png';

const Collection = () => {
    return (
        <div className='container-section'>
            <div className="grid-section">
                <div className='first-div'>
                    <div className='image1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='person-1 flex mt-5'>
                        <div className='person-img'>
                            <img src={person1} alt="" />
                        </div>
                        <div className='image-name flex'>
                            <div className='person-text mx-1'>
                                <h4>The Futr Abstr</h4>
                                <p>10 in the stock</p>
                            </div>

                            <div className='highest-bid'>
                                <div>
                                    <h5>Highest Bid</h5>
                                </div>
                                <div className='ethereum flex'>
                                    <img src={ethereum} alt="" />
                                    <p>0.25 ETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* ============================================================== */}



                <div className='second-column'>
                    <div className='first-row flex'>
                        <div className='collection-2'>
                            <img src={collection2} alt="" />
                        </div>
                        <div className='collection-texts'>
                            <div className='collection-name'>
                                <h2>The Futr Abstr</h2>
                            </div>
                            <div className='collection-person '>
                                <div className='person-img2'>
                                    <img src={person1} alt="" />
                                </div>
                                <div className='green-ethereum'>
                                    <img src={ethereum3} alt="" />
                                    <p>0.25 ETH</p>
                                </div>
                                <div className='one-eight'>
                                    <p>1 of 8</p>
                                </div>
                            </div>
                            <div className='place-button'>
                                <button>Place a bid</button>
                            </div>
                        </div>
                    </div>

                    <div className='first-row flex'>
                        <div className='collection-2'>
                            <img src={collection3} alt="" />
                        </div>
                        <div className='collection-texts'>
                            <div className='collection-name'>
                                <h2>The Futr Abstr</h2>
                            </div>
                            <div className='collection-person '>
                                <div className='person-img2'>
                                    <img src={person1} alt="" />
                                </div>
                                <div className='green-ethereum'>
                                    <img src={ethereum3} alt="" />
                                    <p>0.25 ETH</p>
                                </div>
                                <div className='one-eight'>
                                    <p>1 of 8</p>
                                </div>
                            </div>
                            <div className='place-button'>
                                <button>Place a bid</button>
                            </div>
                        </div>
                    </div>

                    <div className='first-row flex'>
                        <div className='collection-2'>
                            <img src={collection4} alt="" />
                        </div>
                        <div className='collection-texts'>
                            <div className='collection-name'>
                                <h2>The Futr Abstr</h2>
                            </div>
                            <div className='collection-person '>
                                <div className='person-img2'>
                                    <img src={person1} alt="" />
                                </div>
                                <div className='green-ethereum'>
                                    <img src={ethereum3} alt="" />
                                    <p>0.25 ETH</p>
                                </div>
                                <div className='one-eight'>
                                    <p>1 of 8</p>
                                </div>
                            </div>
                            <div className='place-button'>
                                <button>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>

{/* ============================================ */}

                <div className='third-column'>
                    <div className='collection-title'>
                        <h3>Top Collections over </h3>
                        <p>Last 7 days</p>
                    </div>

                    <div className='collection-list flex items-center gap-3'>
                        <h4>1</h4>
                        <div className='collection-img'>
                            <img src={person2} alt="" />
                        </div>
                        <div className='crypto'>
                            <h4>CryptoFunks</h4>
                            <div className='crypto-img flex items-center gap-1'>
                                <img src={ethereum} alt="" />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h5>+26.52%</h5>
                    </div>

                    <div className='collection-list flex items-center gap-3'>
                        <h4>2</h4>
                        <div className='collection-img'>
                            <img src={person3} alt="" />
                        </div>
                        <div className='crypto'>
                            <h4>CryptoFunks</h4>
                            <div className='crypto-img flex items-center gap-1'>
                                <img src={ethereum} alt="" />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h5 className='text-color'>+26.52%</h5>
                    </div>

                    <div className='collection-list flex items-center gap-3'>
                        <h4>3</h4>
                        <div className='collection-img'>
                            <img src={person4} alt="" />
                        </div>
                        <div className='crypto'>
                            <h4>CryptoFunks</h4>
                            <div className='crypto-img flex items-center gap-1'>
                                <img src={ethereum} alt="" />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h5>+26.52%</h5>
                    </div>

                    <div className='collection-list flex items-center gap-3'>
                        <h4>4</h4>
                        <div className='collection-img'>
                            <img src={person5} alt="" />
                        </div>
                        <div className='crypto'>
                            <h4>CryptoFunks</h4>
                            <div className='crypto-img flex items-center gap-1'>
                                <img src={ethereum} alt="" />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h5>+26.52%</h5>
                    </div>

                    <div className='collection-list-5 flex items-center gap-3'>
                        <h4>5</h4>
                        <div className='collection-img'>
                            <img src={person6} alt="" />
                        </div>
                        <div className='crypto'>
                            <h4>CryptoFunks</h4>
                            <div className='crypto-img flex items-center gap-1'>
                                <img src={ethereum} alt="" />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h5 className='text-color'>+26.52%</h5>
                    </div>



                </div>


                
            </div>
        </div>
    );
};

export default Collection;