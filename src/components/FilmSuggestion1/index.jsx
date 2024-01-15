import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const FilmSuggestion1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
          <div
            className="common-pointer bg-blue_gray-100 h-96 w-full"
            onClick={() => navigate("/media")}
          ></div>
          <div className="bg-blue_gray-100 h-96 w-full"></div>
          <div className="bg-blue_gray-100 h-96 w-full"></div>
          <div className="bg-blue_gray-100 h-96 w-full"></div>
          <div className="bg-blue_gray-100 h-96 w-full"></div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2 w-[91%] md:w-full">
          <Text className="text-[15px] text-gray-600" size="txtRobotoRegular15">
            Echo
          </Text>
          <div className="flex flex-col justify-start md:ml-[0] ml-[238px]">
            <Text
              className="mr-[75px] text-[15px] text-gray-400"
              size="txtRobotoRegular15Gray400"
            >
              Percy Jackson và các vị thần trên đỉnh Olympus
            </Text>
            <Text
              className="md:ml-[0] ml-[272px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Đế chế Napoleon
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[150px] text-[15px] text-gray-300"
            size="txtRobotoRegular15Gray300"
          >
            Cô Đi Mà Lấy Chồng Tôi
          </Text>
          <Text
            className="md:ml-[0] ml-[113px] text-base text-gray-300"
            size="txtRobotoRegular16Gray300"
          >
            Địa ngục độc thân
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[90%] md:w-full">
          <Text className="text-[15px] text-gray-600" size="txtRobotoRegular15">
            Echo
          </Text>
          <Text
            className="md:ml-[0] ml-[238px] text-[15px] text-gray-600"
            size="txtRobotoRegular15"
          >
            Percy Jackson and the Olympians
          </Text>
          <Text
            className="md:ml-[0] ml-[46px] text-base text-gray-600"
            size="txtRobotoRegular16Gray600"
          >
            Napoleon
          </Text>
          <Text
            className="md:ml-[0] ml-[203px] text-base text-gray-600"
            size="txtRobotoRegular16Gray600"
          >
            Marry My Husband
          </Text>
          <Text
            className="md:ml-[0] ml-[137px] text-base text-gray-600"
            size="txtRobotoRegular16Gray600"
          >
            Single’s Inferno
          </Text>
        </div>
      </div>
    </>
  );
};

FilmSuggestion1.defaultProps = {};

export default FilmSuggestion1;
