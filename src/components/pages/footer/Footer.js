import styled from "styled-components";

const Div = styled.div`
  background-color: #fffe55;
`;

const PportoCompany = styled.h1`
  font-size: 1.6vw;
  font-weight: 600;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
`;

const Plink = styled.h1`
  font-size: 1.4vw;
  font-weight: 600;
`;

const PlinkSub = styled.h1`
  font-size: 1vw;
  font-weight: 600;
`;

const PlinkSub2 = styled.h1`
  font-size: 1vw;
  font-weight: 400;
`;

const Pwarn = styled.h1`
  font-size: 0.8vw;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <Div className="container-fluid">
      <div className="row pt-4">
        <div className="col-md-8 ps-5 pe-5 mt-5">
          <div className="row">
            <div className="col-md-3">
              <img src="../bg-footer.png" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-3">
              <PportoCompany>P. +62 21 858 3944</PportoCompany>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Plink>Quick Links</Plink>
                </li>
                <li className="mb-2">
                  <PlinkSub2>SERVICES</PlinkSub2>
                </li>
                <li className="mb-2">
                  <PlinkSub2>WORK FLOW</PlinkSub2>
                </li>
                <li className="mb-2">
                  <PlinkSub2>PORTFOLIO</PlinkSub2>
                </li>
                <li className="mb-2">
                  <PlinkSub2>ABOUT US</PlinkSub2>
                </li>
                <li>
                  <PlinkSub2>OUR VALUE</PlinkSub2>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Plink>Follow</Plink>
                </li>
                <li className="mb-2">
                  <PlinkSub>facebook</PlinkSub>
                </li>
                <li className="mb-2">
                  <PlinkSub>twitter</PlinkSub>
                </li>
                <li className="mb-2">
                  <PlinkSub>instagram</PlinkSub>
                </li>
                <li>
                  <PlinkSub>linkedin</PlinkSub>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="row">
            <div className="col-md-12">
              <Plink>Sign up to our newsletter</Plink>
            </div>
            <div className="col-md-8  align-self-center">
              <form>
                <div className="mb-3 border-bottom pb-2 border-dark">
                  <input
                    className="form-control bg-transparent border-0 ps-0"
                    type="email"
                    id="email"
                    required
                    placeholder="E-MAIL"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-4 ">
              <img
                src="../arrow.png"
                style={{ maxWidth: "100%" }}
                className=" pb-5"
              />
            </div>
            <div className="col-md-8">
              <Pwarn>
                This site is protected by reCAPTHCHA and the{" "}
                <u>Google Privacy Policy</u> and <u>Terms of Service apply.</u>
              </Pwarn>
            </div>
          </div>
        </div>
        <div className="col-md-10 offset-2 mt-4  pb-5">
          <div className="row ps-5">
            <div className="col-md-5 border-top border-dark pt-4 text-start ps-0 ">
              <Pwarn>
                Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital
                Agency Jakarta
              </Pwarn>
            </div>
            <div className="col-md-6 border-top border-dark pt-4 text-end pe-0 ">
              <Pwarn>Privacy Policy</Pwarn>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Footer;
