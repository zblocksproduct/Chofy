import React, { useState } from "react";

import Footer from "../../components/footer/index";
import Modal from "../../components/modal";
export default function ChofyLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <img src="/image 2.png" alt="" className="w-[100%]" />
      </div>
      <div
        className=" sm:bg-cover"
        style={{
          backgroundImage: "url(/frame-39.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sm:px-[24px] px-[16px] pt-[63px]">
          <p className="myFont max-w-[1110px] m-auto text-center sm:leading-[100px] leading-[46px] xl:text-[84px]  text-[40px] text-[#59341E]">
            Chocolate Lovers, Rejoice!
          </p>
          <p className="max-w-[930px] m-auto text-[24px] text-center sm:mt-[40px] mt-[24px]">
            As a Chofy Member with all six Flavor Journeys, you get exclusive
            access to our new chocolate tasting tour! Sample chocolates from top
            chocolatiers, learn chocolate history, and take home a souvenir bar
            or two...
          </p>
          <p className="font-semibold text-[24px] text-center mt-8">
            Click below to access this limited-time offer:
          </p>
          <div
            onClick={openModal}
            className="sm:max-w-[276px] cursor-pointer max-w-[328px] text-[20px] font-semibold w-[100%] h-[56px] rounded-full text-white m-auto sm:mt-[38px] mt-[16px] bg-[#E18091] flex justify-center items-center"
          >
            Claim Your Tickets
          </div>
          <div className="xl:max-w-[1110px] max-w-[700px] w-[100%] m-auto flex md:flex-row flex-col items-center sm:mt-[60px] mt-[32px]  justify-center">
            <img
              src="/image-13.png"
              alt=""
              className="xl:w-[540px] sm:w-[354px] xl:h-[360px] sm:h-[233px] w-[328px] h-[221px] m-auto"
            />
            <img
              src="/image-14.png"
              alt=""
              className="md:ml-[30px] xl:w-[540px] sm:w-[354px] xl:h-[360px] sm:h-[233px] w-[328px] h-[221px] md:mt-0 mt-4"
            />
          </div>
          <p className="max-w-[680px] w-[100%] text-[#737373] sm:text-[16px] text-[14px] m-auto text-center font-medium sm:mt-[60px] mt-[32px]  pb-[64px] px-[16px]">
            By continuing, you accept the zblocks Platform{" "}
            <span className="text-[#FF7337]"> Terms and Conditions</span> &nbsp;
            and agree to be contacted via email.
          </p>
        </div>
      </div>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-center ">
          <img src="/motivation-2.png" alt="" className="h-[80px] w-[80px]" />
        </div>
        <p className="text-[24px] font-bold text-center text-[#333333]">
          Success!
        </p>
        <p className="text-center">
          {" "}
          <span className="font-semibold text-[#0075FF]">Click here</span> to
          download your Tasting Tour tickets.{" "}
        </p>
        <img src="/image-4.png" alt="" className="mt-[10px] sm:block hidden" />
      </Modal>
    </div>
  );
}
