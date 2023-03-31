import React from 'react';
import './Footer.css';
import facebook from '../../../assets/Group.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';

const Footer = () => {
    return (
        <div className='footer-section'>
            <footer class="footer text-base-content footer-top">
                <div className='footer-one'>
                    <span class="footer-title">NFters </span> 
                    <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    <div className='flex gap-4 mt-4'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div> 
                <div>
                    <span class="footer-title">Market Place</span> 
                    <a class="link link-hover">All NFTs</a> 
                    <a class="link link-hover">New</a> 
                    <a class="link link-hover">Art</a> 
                    <a class="link link-hover">Sports</a> 
                    <a class="link link-hover">Utility</a>
                    <a class="link link-hover">Music</a>
                    <a class="link link-hover">Domain Name</a>
                </div> 
                <div>
                    <span class="footer-title">My Account</span> 
                    <a class="link link-hover">Profile</a> 
                    <a class="link link-hover">Favorite</a> 
                    <a class="link link-hover">My Collections</a>
                    <a class="link link-hover">Settings</a>
                </div> 
                <div>
                    <span class="footer-title">Stay in the loop</span> 
                    <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text text-left">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</span>
                    </label> 
                    <div class="relative email-filed">
                        <input type="text" placeholder="Enter your email address.." class="input input-bordered w-full" /> 
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe Now</button>
                    </div>
                    </div>
                </div>
            </footer>
            
            <footer class="footer footer-center p-4 text-base-content copyright">
                <div className='text-center'>
                    <p>Copyright © 2022 Avi Yansah</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;