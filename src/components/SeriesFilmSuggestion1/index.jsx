import React from "react";

import { Text } from "components";

const SeriesFilmSuggestion1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] w-[96%] md:w-full">
            <Text
              className="text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Ragna Crimson
            </Text>
            <Text
              className="md:ml-[0] ml-[169px] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Thăng cấp một mình
            </Text>
            <Text
              className="md:ml-[0] ml-[134px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Chàng quỷ của tôi
            </Text>
            <Text
              className="ml-36 md:ml-[0] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Chào mừng đến Samdal-ri
            </Text>
            <Text
              className="md:ml-[0] ml-[86px] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Chệch Quỹ Đạo / Ly Tâm Lực
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[87%] md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Ragna Crimson
            </Text>
            <Text
              className="md:ml-[0] ml-[169px] md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Solo Leveling
            </Text>
            <Text
              className="md:ml-[0] ml-[183px] text-base text-gray-600"
              size="txtRobotoRegular16Gray600"
            >
              My Demon
            </Text>
            <Text
              className="md:ml-[0] ml-[195px] text-base text-gray-600"
              size="txtRobotoRegular16Gray600"
            >
              Welcome to Samdal-ri
            </Text>
            <Text
              className="md:ml-[0] ml-[115px] text-base text-gray-600"
              size="txtRobotoRegular16Gray600"
            >
              Derailment
            </Text>
          </div>
          <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between mt-[26px] w-full">
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1.5 w-[93%] md:w-full">
            <Text
              className="text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Frieren: Phía sau hồi kết
            </Text>
            <Text
              className="ml-28 md:ml-[0] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Echo
            </Text>
            <Text
              className="md:ml-[0] ml-[238px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Monarch: Thế giới quái thú
            </Text>
            <Text
              className="md:ml-[0] ml-[83px] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Reacher
            </Text>
            <Text
              className="md:ml-[0] ml-[216px] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Cuộc Chiến Không Gian
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[90%] md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              <>Frieren: Beyond the Journey&#39;s End</>
            </Text>
            <Text
              className="ml-12 md:ml-[0] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Echo
            </Text>
            <Text
              className="md:ml-[0] ml-[238px] md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Monarch: Legacy of Monsters
            </Text>
            <Text
              className="md:ml-[0] ml-[73px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Reacher
            </Text>
            <Text
              className="md:ml-[0] ml-[216px] text-base text-gray-600"
              size="txtRobotoRegular16Gray600"
            >
              For All Mankind
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SeriesFilmSuggestion1.defaultProps = {};

export default SeriesFilmSuggestion1;
