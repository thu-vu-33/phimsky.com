import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between py-[5px] w-[34%] md:w-full">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
            size="txtDancingScriptRegular35"
          >
            Phim
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
            <Img className="h-4 w-4" src="images/img_search.svg" alt="search" />
            <Text
              className="text-base text-black-900"
              size="txtRobotoRegular16Black900"
            >
              Tìm kiếm
            </Text>
            <Text
              className="sm:ml-[0] ml-[26px] no-underline text-[15px] text-black-900 text-left"
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
            <Text
              className="ml-6 sm:ml-[0] text-base text-black-900"
              size="txtRobotoRegular16Black900"
            >
              FAQ
            </Text>
          </div>
        </div>
        <Text
          className="text-[15px] text-white-A700"
          size="txtRobotoRegular15WhiteA700"
        >
          test1212
        </Text>
      </div>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
