import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded" };
const variants = {
  fill: {
    indigo_400: "bg-indigo-400 text-black-900",
    teal_300: "bg-teal-300 text-white-A700",
  },
  outline: { gray_300: "border border-gray-300 border-solid text-black-900" },
};
const sizes = { xs: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "outline",
  color = "gray_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["indigo_400", "teal_300", "gray_300"]),
};

export { Button };
