import Logo from "../assets/logo_icon.png";
import "../styles/footer.css";

export function Footer() {
  return (
    <div className="footer-container mt-[100px]">
      <div className="mainFooter  text-white">
        <div className="footerLogoDiv">
          <div>
            <div className="title">
              <img src={Logo} alt="" />
              <p>
                DEEP<strong className="logo">FAKE AI</strong>
              </p>
            </div>
            <div className="titleDesc">
              <p>Redefining Reality with Seamless Transformations</p>
              <h4>Deepface 2024</h4>
            </div>
          </div>
        </div>
        <div className="webpageLinksWrapper">
          <div className="webpageLinks">
            <div className="highlighted">
              <h3>Home </h3>
            </div>
            <div>
              <p className="footerPara font-roboto text-base font-[20px] text-left leading-[22.4px]  text-[#77798F]">
                Overview{" "}
              </p>{" "}
            </div>
            <div className="invisible">
              {" "}
              <p>Services </p>
            </div>
            <a href="#">
              <div className="invisible">
                <p>Projects </p>
              </div>
            </a>
          </div>
          <div className="webpageLinks features-res">
            <div className="highlighted ">
              <h3>Features </h3>
            </div>
            <div>
              <p className="footerPara font-roboto text-base font-[20px] text-left leading-[22.4px] text-left text-[#77798F]">
                Face Swap
              </p>{" "}
            </div>
            <div>
              {" "}
              <p className="footerPara font-roboto text-base  leading-[22.4px] font-[20px] text-left text-[#77798F]">
                Voice Change
              </p>
            </div>
            <a href="#">
              <div>
                <p className="invisible">Text to Voice </p>
              </div>
            </a>
          </div>
          <div className="webpageLinks">
            <div className="highlighted">
              <h3>FAQ&apos;s</h3>
            </div>
            <div>
              <p className="footerPara font-roboto text-base leading-[22.4px] font-[20px] text-left text-[#77798F]">
                General Questions
              </p>{" "}
            </div>
            <div>
              {" "}
              <p className="footerPara font-roboto text-base font-[20px] text-left leading-[22.4px]  text-[#77798F]">
                Technical Support
              </p>
            </div>
            <a href="#">
              <div>
                <p className="footerPara footerPara404 font-roboto text-base font-[20px] text-left leading-[22.4px]  text-[#77798F]">
                  {" "}
                  Privacy and Security
                </p>
              </div>
            </a>
          </div>
          <div className="webpageLinks">
            <div className="highlighted">
              <h3>Contact Us</h3>
            </div>
            <div>
              <p className="footerPara font-roboto text-base font-[20px] text-left leading-[22.4px]  text-[#77798F]">
                Support Centre
              </p>{" "}
            </div>
            <div>
              {" "}
              <p className="footerPara font-roboto text-base font-[20px] text-left leading-[22.4px]  text-[#77798F]">
                Feedback
              </p>
            </div>
            <a href="#">
              <div>
                <p className="invisible">Projects </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="lower-footer bg-[#010314]">
        <footer className="h-16 w-full flex items-center justify-between px-4">
          <div className="text-white text-sm">
            © 2024 DeepFake AI. All rights reserved.
          </div>
          <div className="text-white text-sm flex space-x-4">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookies">Cookies</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
