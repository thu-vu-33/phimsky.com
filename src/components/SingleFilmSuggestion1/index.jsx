import React from "react";

import { Text } from "components";

const SingleFilmSuggestion1 = (props) => {
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] w-[88%] md:w-full">
            <Text
              className="text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Những Ngày Hoàn Hảo
            </Text>
            <Text
              className="md:ml-[0] ml-[107px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Điệp Viên Tiger 3
            </Text>
            <Text
              className="md:ml-[0] ml-[151px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Lift: Vụ trộm trên không
            </Text>
            <Text
              className="md:ml-[0] ml-[104px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Áp Giải Kẻ Khủng Bố
            </Text>
            <Text
              className="md:ml-[0] ml-[126px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Cô gái bệnh
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[88%] md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Perfect Days
            </Text>
            <Text
              className="md:ml-[0] ml-[187px] md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Tiger 3
            </Text>
            <Text
              className="md:ml-[0] ml-[225px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Lift
            </Text>
            <Text
              className="md:ml-[0] ml-[250px] text-base text-gray-600"
              size="txtRobotoRegular16Gray600"
            >
              One More Shot
            </Text>
            <Text
              className="md:ml-[0] ml-[165px] md:mt-0 mt-0.5 text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Sick of Myself
            </Text>
          </div>
          <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between mt-[25px] w-full">
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
            <div className="bg-blue_gray-100 h-96 w-full"></div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2 w-[92%] md:w-full">
            <Text
              className="text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Điệp vụ cuối cùng
            </Text>
            <Text
              className="md:ml-[0] ml-[146px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Vùng nước nguy hiểm
            </Text>
            <Text
              className="md:ml-[0] ml-[117px] text-base text-gray-300"
              size="txtRobotoRegular16Gray300"
            >
              Vương giả thiên hạ 3: Ngọn lửa định mệnh
            </Text>
            <Text
              className="text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Con gái của Vua đầm lầy
            </Text>
            <Text
              className="md:ml-[0] ml-[106px] text-[15px] text-gray-300"
              size="txtRobotoRegular15Gray300"
            >
              Biển Sâu / Thâm Hải
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1.5 w-[86%] md:w-full">
            <Text
              className="text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              The Bricklayer
            </Text>
            <Text
              className="md:ml-[0] ml-[177px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Dangerous Waters
            </Text>
            <Text
              className="md:ml-[0] ml-[148px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Kingdom III: The Flame of Destiny
            </Text>
            <Text
              className="md:ml-[0] ml-[47px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              <>The Marsh King&#39;s Daughter</>
            </Text>
            <Text
              className="md:ml-[0] ml-[92px] text-[15px] text-gray-600"
              size="txtRobotoRegular15"
            >
              Deep Sea
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SingleFilmSuggestion1.defaultProps = {};

export default SingleFilmSuggestion1;
