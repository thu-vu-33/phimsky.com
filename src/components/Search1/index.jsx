import React from "react";

import { Input, Text } from "components";

const Search1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-start justify-start w-[99%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
            <Text
              className="text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Loại phim:
            </Text>
            <Text
              className="md:ml-[0] ml-[150px] text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Thể loại:
            </Text>
            <Text
              className="md:ml-[0] ml-[164px] text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Quốc gia:
            </Text>
            <Text
              className="md:ml-[0] ml-[158px] text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Năm:
            </Text>
            <Text
              className="md:ml-[0] ml-[185px] text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Thời lượng:
            </Text>
            <Text
              className="ml-36 md:ml-[0] text-base text-white-A700"
              size="txtRobotoRegular16WhiteA700"
            >
              Sắp xếp:
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <Input
              name="rectangle"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="rectangle_One"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="rectangle_Two"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="rectangle_Three"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="rectangle_Four"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="rectangle_Five"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex sm:flex-1 h-10 sm:w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

Search1.defaultProps = {};

export default Search1;
