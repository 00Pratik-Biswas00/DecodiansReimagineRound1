import React from "react";
import { motion } from "framer-motion";

import Section from "../../sub-components/body/Section";
import MyButton from "../../sub-components/body/MyButton";
import { fadeIn } from "../../sub-components/body/variants.js";

// icons
import { PiArrowSquareOutBold } from "react-icons/pi";

// images
import featureBadge from "../../../assets/FeaturedArtist/feature-artist-badge.webp";
import artistImg from "../../../assets/FeaturedArtist/artistImage.webp";
import painting1 from "../../../assets/FeaturedArtist/img1.webp";
import painting2 from "../../../assets/FeaturedArtist/img2.webp";
import painting3 from "../../../assets/FeaturedArtist/img3.webp";

// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../style/style_swiper.css";
import { EffectCube, Pagination } from "swiper/modules";

// artist's data
export const artistDetail = {
  monthYear: "May 2024",
  profile: {
    name: "Barsha Barik",
    role: "Mixed Media Artist",
    picture: artistImg,
  },
  displayedImage: [
    {
      drawings: painting1,
    },
    {
      drawings: painting2,
    },
    {
      drawings: painting3,
    },
  ],
};

const FeaturedArtist = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem] md:translate-y-[5.25rem]"
      customPaddings
      id="featuredArtist"
    >
      <section className="relative pt-0 md:pt-20 flex items-center justify-center overflow-hidden">
        <div className="md:max-w-[1400px] w-full pb-8 relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]">
          <div className="flex flex-col xl:flex-row items-center justify-between px-10 gap-y-10 gap-x-0">
            {/* heading */}
            <motion.div
              variants={fadeIn("right", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="xl:w-[20%] flex flex-col items-center xl:items-start leading-none gap-y-3"
            >
              <h1 className="font-bold font-montserrat  text-primary-text dark:text-dark-primary-text text-[3rem] lg:text-[4rem] xl:text-[3.5rem] 2xl:text-[4rem] text-center lg:text-left">
                Featured Artist
              </h1>
              <h3 className="text-accent font-bold font-lato text-[1.5rem] lg:text-[2rem] xl:text-[1.7rem] 2xl:text-[2rem] text-center lg:text-left">
                {artistDetail.monthYear}
              </h3>
            </motion.div>

            {/* profile */}
            <div className="flex flex-col md:flex-row gap-x-32 gap-y-10 lg:gap-x-56 xl:gap-x-24 2xl:gap-x-56">
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  variants={fadeIn("zoom", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-col items-center justify-center gap-y-2"
                >
                  {/* image */}
                  <div className="relative">
                    <img
                      src={featureBadge}
                      alt="feature badge"
                      className="w-52"
                    />
                    <div className="absolute top-9 left-9">
                      <img
                        src={artistDetail.profile.picture}
                        alt={artistDetail.profile.name}
                        className="w-[8.5rem] rounded-full"
                      />
                    </div>
                  </div>

                  {/* details */}
                  <div className="flex flex-col items-center justify-center gap-y-1">
                    <div>
                      <h1 className="text-3xl font-montserrat font-extrabold text-primary-text dark:text-dark-primary-text">
                        {artistDetail.profile.name}
                      </h1>
                    </div>
                    <div>
                      <p className="text-xl text-accent font-semibold  font-open_sans">
                        {artistDetail.profile.role}
                      </p>
                    </div>
                  </div>

                  {/* buttons */}
                  <div>
                    <MyButton
                      text="View Profile"
                      className="text-[1.2rem] px-5 py-1 hover-accent3"
                      icon={<PiArrowSquareOutBold />}
                      buttonNameClassName="mr-1"
                    />
                  </div>
                </motion.div>
              </div>

              {/* arts */}
              <motion.div
                variants={fadeIn("left", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className="flex flex-row items-center justify-between"
              >
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  speed={500}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  {artistDetail.displayedImage.map((content, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={content.drawings}
                        alt={`Drawing ${index + 1}`}
                        className=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default FeaturedArtist;
