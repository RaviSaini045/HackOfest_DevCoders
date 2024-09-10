import React from "react";


export default function ShimmerCard() {

  return (
    <>
      <div className="bg-kaddu-200 m-2 p-2 md:p-5 w-[21rem] md:w-[32rem] mx-auto  rounded-2xl">
        <div className="mx-8">
          <div className="flex justify-between w-full ">
            <div className="flex mt-2 items-center">
              <div className="w-12 h-12 md:h-14 md:w-14 m-1.5 rounded-full bg-gray-300 "></div>
              <div className="items-start">
                <h1 className=" w-28 h-8 my-2 bg-gray-200"></h1>
                <h3 className="text-gray-500 w-16 h-4 bg-gray-200"></h3>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="text-sm md:text-xl">
                <h1 className="w-4 h-2 bg-gray-200"></h1>
                <h2 className="w-4 h-2 bg-gray-200"></h2>
              </div>
            </div>
          </div>

          <div className=" my-4 ">
            <p className="  w-full h-8  bg-gray-200"></p>
            <p className=" w-full h-8 my-4 bg-gray-200"></p>
          </div>

          <div className=" flex justify-center w-full h-[150px] md:h-[350px] bg-slate-200"></div>
          <div className="flex w-full justify-between px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 md:h-10 md:w-10 m-1.5 text-gray-400"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 md:h-10 md:w-10 m-1.5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
