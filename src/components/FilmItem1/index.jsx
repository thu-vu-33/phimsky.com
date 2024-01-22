import React from "react";

import { Text } from "components";

const FilmItem1 = (props) => {
  console.log("#DEBUG", props);
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-blue_gray-100 h-96 w-full"
          style={{ backgroundImage: `url(${props?.image})` }}
        ></div>
        <Text
          className="mt-2.5 text-[15px] text-gray-300"
          size="txtRobotoRegular15Gray300"
        >
          {props?.vietnames}
        </Text>
        <Text
          className="mt-1.5 text-[15px] text-gray-600"
          size="txtRobotoRegular15"
        >
          {props?.english}
        </Text>
      </div>
    </>
  );
};

FilmItem1.defaultProps = {
  vietnames: "Ragna Crimson",
  english: "Ragna Crimson",
  image:
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
};

export default FilmItem1;
