import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Demohero = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        navigation={false}
        className="h-[400px] md:h-[600px] lg:h-[500px] rounded-4xl  m-6 w-[99%] "
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] rounded-4xl  ">
            <img
              src={assets.rabbit_img}
              alt="Vacation Ready"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold uppercase mb-4">
                  Vacation <br /> Ready
                </h1>
                <p className="text-sm md:text-lg mb-6">
                  Explore our vacation-ready outfits with fast worldwide
                  shipping.
                </p>
                <Link
                  to="#"
                  className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] rounded-4xl">
            <img
              src={assets.rabbit_img}
              alt="Summer Sale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold uppercase mb-4">
                  Summer <br /> Collection
                </h1>
                <p className="text-sm md:text-lg mb-6">
                  Get the hottest looks for this summer with up to 30% off.
                </p>
                <Link
                  to="#"
                  className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] rounded-4xl">
            <img
              src={assets.rabbit_img}
              alt="Trending Now"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold uppercase mb-4">
                  Trending <br /> Now
                </h1>
                <p className="text-sm md:text-lg mb-6">
                  Discover the latest arrivals in our men's collection.
                </p>
                <Link
                  to="#"
                  className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Demohero;
