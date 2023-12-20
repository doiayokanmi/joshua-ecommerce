'use client'

import React, { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const Share = () => {
  const [url, setUrl] =useState(''); 
  useEffect(() => {
    setUrl(window.location.href);
    console.log("Current URL:", url);
  }, [url]);

  return (
    <>
      <div className="flex space-x-4 items-center mb-4 justify-between">
        <span>Share on:</span>

        <div className="flex space-x-2">
          <FacebookShareButton url={`${url}`}>
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={`${url}`}>
            <XIcon size={24} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={`${url}`}>
            <WhatsappIcon size={24} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton url={`${url}`}>
            <TelegramIcon size={24} round={true} />
          </TelegramShareButton>
        </div>
      </div>
    </>
  );
};

export default Share;
