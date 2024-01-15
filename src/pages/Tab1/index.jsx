import React from "react";

import { ToastContainer, toast } from "react-toastify";

import { getUsersFromReqresInApi } from "service/api";

import { Button, Img, Input, Text } from "components";
import FilmItem1 from "components/FilmItem1";
import Header1 from "components/Header1";

import "react-toastify/dist/ReactToastify.css";

const Tab1Page = () => {
  const [usersData, setUsersData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    getUsersFromReqresInApi(req)
      .then((res) => {
        setUsersData(res?.data);

        toast.success("OK");
      })
      .catch((err) => {
        console.error(err);
        toast.error("FAIL");
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto p-2 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1849px] mb-[506px] mx-auto md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full" />
          <div className="bg-blue_gray-900_72 flex flex-col items-center justify-end mt-[26px] p-3 rounded-[5px] w-[74%] md:w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Loại phim:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[135px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Thể loại:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[149px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Quốc gia:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[143px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Năm:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[170px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Thời lượng:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[129px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Sắp xếp:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[149px] text-base text-white-A700"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Hiển thị:
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Input
                  name="rectangle"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="rectangleone"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="rectangletwo"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="rectanglethree"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="rectanglefour"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Input
                  name="rectanglefive"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 h-10 md:w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Img
                  className="h-[25px] md:mt-0 mt-1 w-[25px]"
                  src="images/img_frame_black_900.svg"
                  alt="frame"
                />
                <Img
                  className="h-[25px] md:mt-0 mt-1 w-[25px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start mt-3 w-[73%] md:w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
              {usersData?.data?.map((usersElement, index) => {
                return (
                  <React.Fragment key={`usersElement${index}`}>
                    <FilmItem1
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      vietnames={usersElement?.["first_name"]}
                      english={usersElement?.["last_name"]}
                      image={usersElement?.avatar}
                    />
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row items-start justify-between w-[24%] sm:w-full">
                <Button
                  className="border border-indigo-400 border-solid cursor-pointer h-10 text-base text-center w-10"
                  color="indigo_400"
                  variant="fill"
                >
                  1
                </Button>
                <Button className="cursor-pointer h-10 text-base text-center w-10">
                  2
                </Button>
                <Button className="!text-gray-300 cursor-pointer h-10 text-base text-center w-10">
                  3
                </Button>
                <Button className="cursor-pointer h-10 text-base text-center w-10">
                  4
                </Button>
                <Button className="cursor-pointer h-10 text-base text-center w-10">
                  5
                </Button>
                <Text
                  className="mt-3.5 text-base text-black-900 text-center"
                  size="txtRobotoRegular16Black900"
                >
                  …
                </Text>
                <Button className="cursor-pointer min-w-[44px] text-[15px] text-center">
                  967
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2 items-center justify-between w-[16%] sm:w-full">
                <Button className="!text-gray-600 cursor-pointer min-w-[107px] text-[15px] text-center">
                  Trang trước
                </Button>
                <Button className="!text-gray-600 cursor-pointer min-w-[94px] text-[15px] text-center">
                  Trang sau
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Tab1Page;
