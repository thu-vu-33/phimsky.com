import React from "react";

import { Text } from "components";

const FilmItem1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100 h-96 w-full"></div>
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
};

export default FilmItem1;
