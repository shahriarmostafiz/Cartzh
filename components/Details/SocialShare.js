"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    EmailShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon, TwitterShareButton,

    PinterestShareButton,
    PinterestIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon,
} from 'next-share'
// import Image from "next/image";

const SocialShare = ({ name, pageUrl }) => {
    const pathName = usePathname()
    const url = pageUrl ?? `https://zh-kart.vercel.app${pathName}`
    return (


        <div className="flex gap-4 ">
            <FacebookShareButton
                url={url}
                hashtag={'#LWS-Kart'}

            >
                {/* <span className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"> */}

                <FacebookIcon size={32} round />
                {/* <i className="fa-brands fa-facebook-f" /> */}
                {/* </span> */}
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                title={name}
            >
                <TwitterIcon size={32} round />

                {/* <i className="fa-brands fa-twitter" /> */}

            </TwitterShareButton>
            <PinterestShareButton
                url={url}
                media={"name"}
            >
                {/* <span
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"

                > */}
                <PinterestIcon size={32} round />

                {/* </span> */}

            </PinterestShareButton>
        </div>

    );
};

export default SocialShare;