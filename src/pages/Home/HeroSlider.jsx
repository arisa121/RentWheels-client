import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const HeroSlider = () => {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white px-5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Drive Your Dream Car Today
              </h1>
              <p className="text-lg md:text-xl mb-6">
                RentWheels connects you with trusted local car owners for an
                affordable and hassle-free rental experience.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
                Browse Cars
              </button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white px-5"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/X7yZNMt7/bailey-mahon-JMpdblr-HTr-Q-unsplash.jpg')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Explore Without Limits
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Whether it's a business trip or weekend adventure, RentWheels
                helps you find the perfect car — anytime, anywhere.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
                Get Started
              </button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white px-5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1200&q=80')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Easy Booking, Reliable Cars
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Book your ride in minutes — with transparent pricing and
                verified providers ensuring a smooth experience every time.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
                Book Now
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
