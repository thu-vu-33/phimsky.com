import React from "react";
import { useLocation } from "react-router-dom";

import { Button, Img, Text } from "components";

const MediaPage = () => {
  let location = useLocation();
  console.log(location.state.name);
  return (
    <>
      <div className="bg-white-A700 flex flex-col justify-start mx-auto pr-[17px] py-[17px] w-full">
        <div className="flex flex-col font-dancingscript items-center max-w-[1903px] mx-auto md:px-5 w-full">
          <div className="h-[827px] relative w-full">
            <Text
              className="mb-[-7.3px] ml-3 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 z-[1]"
              size="txtDancingScriptRegular35"
            >
              PhimSky
            </Text>
            <div className="flex sm:flex-col flex-row font-roboto sm:gap-5 items-start justify-start mb-[undefinedpx] ml-[153px] mt-1.5 w-[23%] z-[1]">
              <Img
                className="h-4 w-4"
                src="images/img_search.svg"
                alt="search"
              />
              <Text
                className="text-base text-black-900"
                size="txtRobotoRegular16Black900"
              >
                Tìm kiếm
              </Text>
              <Text
                className="sm:ml-[0] ml-[27px] text-[15px] text-black-900"
                size="txtRobotoRegular15Black900"
              >
                Phim Hot
              </Text>
              <Text
                className="ml-7 sm:ml-[0] text-[15px] text-black-900"
                size="txtRobotoRegular15Black900"
              >
                Phim Lẻ
              </Text>
              <Text
                className="sm:ml-[0] ml-[25px] sm:mt-0 mt-0.5 text-[15px] text-black-900"
                size="txtRobotoRegular15Black900"
              >
                Phim Bộ
              </Text>
              <Text
                className="sm:ml-[0] ml-[25px] text-base text-black-900"
                size="txtRobotoRegular16Black900"
              >
                Phim Mới
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-start justify-end mt-auto mx-auto md:pr-10 sm:pr-5 pr-[790px] pt-[790px] w-full">
              <div className="bg-white-A700_4c flex flex-col items-start justify-start w-[1%] md:w-full">
                <div className="bg-red-800 h-[3px] w-[3px]"></div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_4c h-[45px] w-full"></div>
        </div>
        <Text
          className="md:ml-[0] ml-[280px] mt-[117px] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700"
          size="txtMerriweatherRegular31"
        >
          Chàng quỷ của tôi (phần 1)
        </Text>
        <Text
          className="md:ml-[0] ml-[280px] mt-[13px] text-[19px] text-gray-400"
          size="txtRobotoRegular19"
        >
          My Demon (season 1)
        </Text>
        <div className="flex flex-row font-roboto items-center justify-start mb-[934px] md:ml-[0] ml-[280px] mt-[78px] md:px-5 w-[15%] md:w-full">
          <Button
            className="border border-solid border-teal-300 cursor-pointer min-w-[73px] text-[15px] text-center"
            color="teal_300"
            variant="fill"
          >
            Tập 1
          </Button>
          <Button
            className="cursor-pointer min-w-[73px] ml-[7px] text-[15px] text-center"
            color="teal_300"
            variant="fill"
          >
            Tập 2
          </Button>
          <div className="border border-solid border-teal-300 flex flex-row items-start justify-center ml-2 p-[7px] rounded w-[41%]">
            <Text
              className="ml-2.5 my-0.5 text-base text-center text-teal-300"
              size="txtRobotoRegular16Teal300"
            >
              Tập
            </Text>
            <Text
              className="mb-1 ml-0.5 text-base text-center text-teal-300"
              size="txtRobotoRegular16Teal300"
            >
              3
            </Text>
            <Text
              className="ml-0.5 mt-1.5 text-base text-center text-teal-300"
              size="txtRobotoRegular16Teal300"
            >
              ...
            </Text>
            <Text
              className="ml-[3px] mr-[9px] mt-0.5 text-[15px] text-center text-teal-300"
              size="txtRobotoRegular15Teal300"
            >
              14
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
