import React, { useState } from 'react';
import { HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import rect1 from '../assets/Rectangle 5160.png';
import rect2 from '../assets/Rectangle 5160.png';
import rect3 from '../assets/Rectangle 5160.png';
import rect4 from '../assets/Rectangle 5160.png';

const initialImages = [rect1, rect2, rect3, rect4];


function GalleryWidget() {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages([...images, event.target.result]);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(images.length - imagesPerPage, currentIndex + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < images.length - imagesPerPage;

  return (
    <div className="bg-[#363c43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.4)] w-[720px] p-6">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </div>
        <div className='w-[149px] h-[62px] bg-[#171717] text-white justify-center flex items-center rounded-2xl mr-60'>          
            <p className="font-poppins font-bold">Gallery</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="px-5 py-2 bg-[#ffffff08] hover:bg-[#ffffff12] rounded-full text-white shadow-[4px_4px_8px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.05)] transition-colors flex justify-center items-center font-bold gap-2"
          >
            <span className="text-[18px]">+</span>
            <span className="uppercase text-[11px] tracking-wider">Add Image</span>
          </button>
          <button
            onClick={handlePrevious}
            disabled={!canGoBack}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow transition-all ${
              canGoBack
                ? 'bg-gradient-to-br from-[#303439] to-[#161718] hover:from-[#353a3f] hover:to-[#1b1d1e] text-gray-300'
                : 'bg-[#23262b] text-gray-600 shadow-xl'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoForward}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow transition-all ${
              canGoForward
                ? 'bg-gradient-to-br from-[#303439] to-[#161718] hover:from-[#353a3f] hover:to-[#1b1d1e] text-gray-300'
                : 'bg-[#23262b] text-gray-600 shadow-2xl'
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      
        </div>

      <div className="flex gap-4 justify-center mb-4">
        {visibleImages.map((image, index) => (
          <div
          key={currentIndex + index}
          className="w-[190px] h-[179px] rounded-[18px] overflow-hidden 
                     bg-[#2d3139] transform transition-all duration-300  
                     perspective-origin-top-right
                     hover:scale-105 hover:rotate-2 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"
        >
          <img
            src={image}
            alt={`Gallery image ${currentIndex + index + 1}`}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;

