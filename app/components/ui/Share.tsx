import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const Share = ({ url }: { url: string }) => {
  return (
    <>
      <div className="flex items-center mb-4 justify-between">
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
        </div>
      </div>
    </>
  );
};

export default Share;
