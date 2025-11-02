import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className='bg-black text-white p-4'>
      <p className='text-center'>&copy; 2025 Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by Abhijeet</p>
    </div>
  )
}

export default Footer