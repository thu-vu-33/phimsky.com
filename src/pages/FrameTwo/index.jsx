import React from "react";

import { Img, Input, Line, List, Text } from "components";
import FilmItem1 from "components/FilmItem1";
import FilmSuggestion1 from "components/FilmSuggestion1";
import Header1 from "components/Header1";
import Search1 from "components/Search1";
import SeriesFilmSuggestion1 from "components/SeriesFilmSuggestion1";

const FrameTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto p-2 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1849px] mb-[627px] mx-auto md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full" />
          <Search1 className="bg-blue_gray-900_72 flex flex-col items-center justify-end mt-[26px] p-3 rounded-[5px] w-[74%] md:w-full" />
          <div className="flex flex-col font-oswald items-start justify-start mt-2.5 w-[73%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-lime-800 sm:text-xl uppercase"
              size="txtOswaldRegular24"
            >
              Phim đề cử
            </Text>
            <FilmSuggestion1 className="flex md:flex-col flex-row font-roboto gap-4 items-center justify-between mt-[13px] w-full" />
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-[34px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-lime-800 sm:text-xl uppercase"
                size="txtOswaldRegular24"
              >
                Phim lẻ mới cập nhật
              </Text>
              <Text
                className="mb-1 sm:ml-[0] ml-[1052px] sm:mt-0 mt-3 text-base text-blue_gray-100_01"
                size="txtRobotoRegular16"
              >
                Xem tất cả
              </Text>
              <Img
                className="h-4 mb-0.5 sm:ml-[0] ml-[3px] sm:mt-0 mt-[17px]"
                src="images/img_frame.svg"
                alt="frame"
              />
            </div>
            <div className="font-roboto gap-4 md:gap-5 grid grid-cols-5 sm:grid-cols-[repeat(0,_1fr_1344px)_1fr] md:grid-cols-[repeat(2,_1fr_1344px)_1fr] justify-center min-h-[auto] mt-[11px] w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-2 text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Những Ngày Hoàn Hảo
                </Text>
                <Text
                  className="mt-1.5 text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  Perfect Days
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-[9px] text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Điệp Viên Tiger 3
                </Text>
                <Text
                  className="mt-[5px] text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  Tiger 3
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-[9px] text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Lift: Vụ trộm trên không
                </Text>
                <Text
                  className="mt-1 text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  Lift
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-[7px] text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Áp Giải Kẻ Khủng Bố
                </Text>
                <Text
                  className="mt-1 text-base text-gray-600"
                  size="txtRobotoRegular16Gray600"
                >
                  One More Shot
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-[9px] text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Cô gái bệnh
                </Text>
                <Text
                  className="mt-[5px] text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  Sick of Myself
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="mt-2 text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Điệp vụ cuối cùng
                </Text>
                <Text
                  className="mt-1.5 text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  The Bricklayer
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-96 w-full"></div>
                <Text
                  className="text-base text-gray-300"
                  size="txtRobotoRegular16Gray300"
                >
                  Vùng nước nguy hiểm
                </Text>
                <Text
                  className="text-[15px] text-gray-600"
                  size="txtRobotoRegular15"
                >
                  Dangerous Waters
                </Text>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <div className="bg-blue_gray-100 h-96 w-full"></div>
                  <div className="flex h-12 md:h-[25px] justify-end pt-[22px] relative w-[97%]">
                    <Text
                      className="mt-auto mx-auto text-base text-gray-300"
                      size="txtRobotoRegular16Gray300"
                    >
                      Vương giả thiên hạ 3: Ngọn lửa định mệnh
                    </Text>
                    <Text
                      className="absolute bottom-[4%] left-[0] text-[15px] text-gray-600"
                      size="txtRobotoRegular15"
                    >
                      Kingdom III: The Flame of Destiny
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <FilmItem1
                className="flex flex-1 flex-col items-start justify-start w-full"
                vietnames="Con gái của Vua đầm lầy"
                english={<>The Marsh King&#39;s Daughter</>}
              />
              <Line className="self-center h-px bg-blue_gray-800 w-full" />
              <FilmItem1
                className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                vietnames="Biển Sâu / Thâm Hải"
                english="Deep Sea"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-8 w-full">
              <Text
                className="text-2xl md:text-[22px] text-lime-800 sm:text-xl uppercase"
                size="txtOswaldRegular24"
              >
                Phim bộ mới cập nhật
              </Text>
              <Text
                className="mb-1 sm:ml-[0] ml-[1045px] sm:mt-0 mt-3 text-base text-blue_gray-100_01"
                size="txtRobotoRegular16"
              >
                Xem tất cả
              </Text>
              <Img
                className="h-4 mb-0.5 sm:ml-[0] ml-[3px] sm:mt-0 mt-[17px]"
                src="images/img_frame.svg"
                alt="frame_One"
              />
            </div>
            <SeriesFilmSuggestion1 className="font-roboto gap-4 md:gap-5 grid grid-cols-5 sm:grid-cols-[repeat(0,_1fr_1344px)_1fr] md:grid-cols-[repeat(2,_1fr_1344px)_1fr] justify-center min-h-[auto] mt-3 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
