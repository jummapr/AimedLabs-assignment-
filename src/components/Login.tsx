import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  return (
    <Login_Components>
      <div className="container">
        <div className="image_container">
          <img src="./login_image.png" alt="login_png" className="image" />
        </div>
        <div className="second_wraper">
          <div className="login_content_wrapper">
            <h2 className="heading">Login</h2>
            <div className="input_wrapper">
              <form>
                <div className="input_box">
                  <label htmlFor="Login-Id" className="label">
                    Login ID
                  </label>
                  <div>
                    <input
                      type="text"
                      id="Login-Id"
                      className="input"
                      placeholder="Login Id"
                    />
                  </div>
                </div>

                <div className="input_box">
                  <label htmlFor="Login-Id" className="label">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isShowPassword ? "text" : "password"}
                      id="Login-Id"
                      className="input"
                      placeholder="Enter Password"
                    />

                    {isShowPassword ? (
                      <AiOutlineEye
                        className="icons"
                        size={25}
                        onClick={() => setIsShowPassword(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="icons"
                        size={25}
                        onClick={() => setIsShowPassword(true)}
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="bottom_content">
              <div className="bottom_content_box">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
              <div className="bottom_content_box">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Agree to{" "}
                  <span style={{ color: "#F78719", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>
                </label>
              </div>
            </div>

            <button className="btn">Submit</button>

            <h3 className="footer_text">
              Don’t have an account?{" "}
              <span style={{ color: "#F78719", cursor: "pointer" }}>
                Register Here
              </span>
            </h3>
          </div>
        </div>
      </div>
    </Login_Components>
  );
};

const Login_Components = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .heading {
    font-weight: 700;
    line-height: 110%;
    font-size: 48px;
  }
  .image_container {
    /* background-color: red; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .image {
    width: 40rem;
    height: 40rem;
  }
  }

  
  .second_wraper {
    width: 100%;
    height: 100%;

    .login_content_wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      .input_wrapper {
        /* width: calc(100% - 40%); */
        display: flex;
        flex-direction: column;
        gap: 1.8rem;

        .input_box {
          display: flex;
          flex-direction: column;
          .label {
            color: #04072f;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
          }
          .input {
            appearance: none;
            display: block;

            width: 100%;
            height: 40px;
            border-radius: 8px;
            padding-left: 0.77rem;
            padding-right: 0.77rem;
            border: 1px solid #737b86;
            font-size: 15px;
          }
          .input:focus {
            outline: none;
            border-color: #1575a7;
          }

          .icons {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            cursor: pointer;
            color: #737b86;
          }

          div {
            margin-top: 10px;
          }
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
      .relative {
        position: relative;
      }
    }
  }

  .bottom_content {
    /* width: calc(100% - 40%); */
    display: flex;
    flex-direction: column;

    .bottom_content_box {
      display: flex;
      flex-direction: row;
      gap: 6px;

      label {
        color: #737b86;
        font-size: 18px;
      }
    }
  }

  .btn {
    width: calc(100% - 55%);
    padding: 9px 20px;
    font-size: 18px;
    border-radius: 8px;
    background-color: #1575a7;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .footer_text {
    color: #04072f;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media(max-width: 768px)  {
    .image_container {
        display: none;
    }

    .input_wrapper {
        width: calc(100% - 20%);

        
    }
    

    .bottom_content {
        width: calc(100% - 20%);
    }
    .btn {
    width: calc(100% - 20%);

    }

  }
 
  @media(min-width: 1024px)  {
    .image_container {
        display: flex;
    }

    .input_wrapper {
        width: calc(100% - 20%);
    }

    .bottom_content {
        width: calc(100% - 20%);
    }
    .btn {
    width: calc(100% - 20%);

    }

  }
  @media(max-width: 1124px)  {
    .image_container {
        display: none;
    }

    .input_wrapper {
        width: calc(100% - 20%);
    }

    .bottom_content {
        width: calc(100% - 20%);
    }
    .btn {
    width: calc(100% - 20%);

    }

  }
  
`;

export default Login;
