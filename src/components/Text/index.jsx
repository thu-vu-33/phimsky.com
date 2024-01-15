import React from "react";

const sizeClasses = {
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtOswaldRegular24: "font-normal font-oswald",
  txtMerriweatherRegular31: "font-merriweather font-normal",
  txtRobotoRegular16Gray300: "font-normal font-roboto",
  txtRobotoRegular15Gray300: "font-normal font-roboto",
  txtRobotoRegular15WhiteA700: "font-normal font-roboto",
  txtRobotoRegular16Gray600: "font-normal font-roboto",
  txtDancingScriptRegular35: "font-dancingscript font-normal",
  txtRobotoRegular15Gray400: "font-normal font-roboto",
  txtRobotoRegular15: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular19: "font-normal font-roboto",
  txtRobotoRegular15Black900: "font-normal font-roboto",
  txtRobotoRegular16Teal300: "font-normal font-roboto",
  txtRobotoRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRegular15Teal300: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
