import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between ">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            Awesome Experience with Virtual Reality World
          </h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />

          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center "
            data-aos="fade-left"
            data-aos-offset="50"
          >
            <div onClick={() => setIsOpen(true)} className="cursor-pointer ">
              <BsPlayCircleFill className="text-4xl tetx-white/80 hover:text-white  hover:scale-110 transition " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
