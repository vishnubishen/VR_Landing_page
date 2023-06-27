import React from "react";

import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-6 "
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headset
        </h2>
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          <div
            className="relative "
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-offset="300"
          >
            <img src={Headset1} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 ">Metaverse</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text .
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-offset="300"
          >
            <img src={Headset2} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 ">TPCASTT</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text .
              </p>
            </div>
          </div>
          <div
            className="relative "
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-offset="300"
          >
            <img src={Headset3} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 ">AIot</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text .
              </p>
            </div>
          </div>
          <div
            className="relative "
            data-aos="zoom-in"
            data-aos-delay="1300"
            data-aos-offset="300"
          >
            <img src={Headset4} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 ">HoloLens</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
