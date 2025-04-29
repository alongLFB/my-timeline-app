// src/components/SocialShare.tsx
'use client'; // <--- Mark as Client Component

import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

interface SocialShareProps {
    title?: string; // Optional title for sharing
}

const SocialShare: React.FC<SocialShareProps> = ({ title = "Check out this timeline!" }) => {
  const [shareUrl, setShareUrl] = useState('');

  // Get the current URL only on the client-side
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (!shareUrl) {
    // Don't render buttons until URL is available
    return null;
  }

  const iconSize = 40; // Size for the icons

  return (
    <div className="flex justify-center items-center space-x-4 mt-12 mb-6 py-4 border-t border-gray-200 dark:border-gray-700">
       <span className="text-gray-600 dark:text-gray-400 mr-2 font-medium">Share:</span>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>

      <FacebookShareButton url={shareUrl} hashtag="#timeline">
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>

      <LinkedinShareButton url={shareUrl} title={title} summary={title} source={shareUrl}>
         <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>

       <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
         <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;