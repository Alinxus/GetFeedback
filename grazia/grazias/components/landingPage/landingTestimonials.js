import React from "react";
import LandingContainer from "./landingContainer";
import Image from "next/image";

const LandingTestimonials = () => {
  return (
    <div className="text-gray-300" id="testimonials">
      <LandingContainer>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div
            className="aspect-auto p-8 border  rounded-3xl
            bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                <p className="text-sm text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
              libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div
            className="aspect-auto p-8 border  rounded-3xl
            bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                <p className="text-sm text-gray-300">Marketing</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              {" "}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div
            className="aspect-auto p-8 border  rounded-3xl 
            bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                <p className="text-sm text-gray-300">Developer</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div
            className="aspect-auto p-8 border  rounded-3xl 
            bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium  text-gray-700 dark:text-white">Jane Doe</h6>
                <p className="text-sm text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div
            className="aspect-auto p-8 border  rounded-3xl 
            bg-white dark:bg-gray-800 border-gray-700  shadow-gray-600/10 shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                <p className="text-sm text-gray-300">Manager</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div
            className="aspect-auto p-8 border rounded-3xl 
            bg-white dark:bg-gray-800 border-gray-700  shadow-gray-600/10 
           shadow-none"
          >
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/favicon.ico"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                <p className="text-sm text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
};

export default LandingTestimonials;
