import React from "react";
import Wrapper from "../../components/Wrapper";
import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <Wrapper>
      <div className="flex items-center gap-[100px]">
        <div>
          <dotlottie-player
            src="https://lottie.host/c267c477-4047-4e31-965e-1eb05fcf3593/7UFnaU9TAo.json"
            background="transparent"
            speed="1"
            style={{ width: "400px", height: "400px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className=" mt-[50px] rounded ">
          <h1 className="font-medium text-3xl">Login</h1>
          <p className="text-gray-600 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos dolorem vel cupiditate laudantium dicta.
          </p>

          <Form layout="vertical">
            <div className="mt-8 grid lg:grid-cols-1 gap-4">
              <div>
                <Form.Item
                  label="Email"
                  name="userEmail"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label="Password"
                  name="password"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </Form.Item>
              </div>
            </div>

            <div className="space-x-4 mt-8">
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ backgroundColor: "#000", height: "40px" }}
                  className="px-8"
                >
                  Login
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
