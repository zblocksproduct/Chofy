import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/index";
import Modal from "../../components/modal";
export default function Chofy() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="max-w-[1900px] m-auto xl:px-[210px] px-[24px]"
        style={{ backgroundImage: "url(/hero.png)" }}
      >
        <div className="pb-[90px]">
          <img
            src="logo.svg"
            alt=""
            className="xl:w-[252px] sm:w-[224px] w-[158px] xl:h-[167px] sm:h-[149px] h-[105px]  m-auto pt-7 sm:block hidden"
          />
          <img
            src="logo1.png"
            alt=""
            className="m-auto w-[140px] pt-7 sm:hidden"
          />
          <div className="grid sm:grid-cols-3 grid-cols-2  xl:gap-12 sm:gap-8 gap-4 sm:mt-[11px] mt-[39px]">
            <div>
              <img
                src="/image-8.png"
                alt=""
                className="sm:h-[466px] h-[222px]"
              />
            </div>
            <div>
              <img
                src="/image-6.png"
                alt=""
                className="sm:h-[466px] h-[222px] sm:mt-[100px]"
              />
            </div>
            <div className="sm:block hidden">
              <img
                src="/image-7.png"
                alt=""
                className="sm:h-[466px] h-[222px]"
              />
            </div>
          </div>
          <div className="sm:hidden">
            <img
              src="/image-7.png"
              alt=""
              className="sm:h-[466px] h-[222px] m-auto mt-4"
            />
          </div>
          <div className="sm:block hidden">
            <img
              src="/frame-32.png"
              alt=""
              className="h-[34px] w-4 m-auto mt-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className="sm:pb-[60px] pb-[20px] sm:bg-cover"
        style={{
          backgroundImage: "url(/frame-29.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm:px-[24px] px-[16px] sm:pt-[90px] pt-[63px]">
          <p className="myFont max-w-[920px] m-auto text-center sm:leading-[100px] leading-[46px] xl:text-[94px] sm:text-[78px] text-[42px] text-[#59341E]">
            Start Your Flavor Journey Today!
          </p>
          <p className="max-w-[1100px] m-auto sm:text-[24px] text-[20px] text-center mt-[20px]">
            Join our <span className="font-bold "> Flavor Journey</span> Loyalty
            Program and get rewards for your love of chocolate.
          </p>
          <p className="max-w-[1100px] m-auto sm:text-[24px] text-[20px] text-center">
            Claim your <span className="font-bold ">Blueberry & Nibs </span>
            Flavor Journey, to start receiving tasty rewards!
          </p>
        </div>
        <div className="sm:flex justify-center mt-5 max-w-[700px] m-auto">
          <div
            onClick={() => {
              window.location.href =
              "https://wallettest.zblocks.io?gift=41c7c0fe169c55ed434682429989&hint=google";
            }}
            className="max-w-[317px] w-[100%] cursor-pointer  m-auto h-[56px] bg-[#59341E] flex justify-center items-center rounded-full"
          >
            <img src="/microsoft.png" alt="" />
            <p className="text-[20px] text-white ml-1 font-medium">
              Continue with Microsoft
            </p>
          </div>
          <div
            onClick={() => {
              window.location.href =
              "https://wallettest.zblocks.io?gift=41c7c0fe169c55ed434682429989&hint=google";
            }}
            className="max-w-[317px] w-[100%] cursor-pointer h-[56px] bg-[#59341E] flex justify-center items-center rounded-full sm:ml-6 m-auto sm:mt-0 mt-4"
          >
            <img src="/google.png" alt="" />
            <p className="text-[20px] text-white ml-1 font-medium">
              Continue with Google
            </p>
          </div>
        </div>
        <div className="mt-[40px] max-w-[1000px] m-auto sm:px-[24px] px-4">
          <img src="/Mask group.png" alt="" className=" object-contain" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/frame-36.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="max-w-[1100px] m-auto text-center sm:text-[56px] text-[32px] myFont text-[#59341E] sm:leading-[66px] leading-[38px] pt-[50px]">
          Collect all Flavor Journeys and win a Chofy Tasting Tour
        </p>
        <div className="w-[100%] overflow-scroll pl-4 myScroll">
          <div className="sm:w-[1100px] w-[920px] m-auto sm:mt-[60px] mt-[32px] flex items-center">
            <div>
              <img
                src="/Rasberry.png"
                alt=""
                className="sm:w-[350px] sm:h-[410px] w-[290px] h-[339px]"
              />
            </div>
            <div>
              <img
                src="/Caramel 1.png"
                alt=""
                className="sm:ml-[30px] ml-4 sm:w-[350px] sm:h-[410px] w-[290px] h-[339px]"
              />
            </div>
            <div>
              <img
                src="/coco.png"
                alt=""
                className="sm:ml-[30px] ml-4 sm:w-[350px] sm:h-[410px] w-[290px] h-[339px]"
              />
            </div>
          </div>
        </div>
        <p className="max-w-[680px] w-[100%] sm:text-[16px] text-[14px] m-auto text-center font-medium sm:mt-[60px] mt-[32px] sm:pb-[120px] pb-[64px] px-[16px]">
          By continuing, you accept the zblocks Platform{" "}
          <span className="text-[#FF7337]"> Terms and Conditions</span> &nbsp;
          and agree to be contacted via email.
        </p>
      </div>
      <Footer />
    </div>
  );
}
