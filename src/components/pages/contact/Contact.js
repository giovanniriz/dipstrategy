import styled from "styled-components";

const Form = styled.div`
  background-color: #060606;
  width: 600px;
  height: 400px;
  padding: 50px;
  @media (max-width: 1280px) {
    width: 500px;
    height: 300px;
  }
`;

const DivBlackBG = styled.div`
  background-image: url("../dipstrategy-bg-2.png"),
    url("../dipstrategy-bg-2.1.png");

  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
`;

const PworkflowDesc = styled.p`
  font-size: 1vw;
  font-weight: 600;
`;

const Pnumber = styled.p`
  font-size: 1.4vw;
  font-weight: 400;
`;

const Pmoto = styled.h1`
  font-size: 4.7vw;
  font-weight: 600;
`;

const PAboutUs = styled.p`
  font-size: 0.6vw;
  font-weight: 600;
`;

const Pservices = styled.p`
  font-size: 1.4vw;
  color: #b6b6b6;
`;

const Pdesc = styled.p`
  font-size: 1vw;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
`;

const BlearnMore = styled.button`
  width: 10.8vw;
  height: 50px;
  background: #fffe55;
`;

const PlearnMore = styled.p`
  color: #000000;
  font-size: 0.8vw;
  font-weight: 600;
`;

const Punderline = styled.p`
  text-decoration: underline;
  font-size: 1.4vw;
  cursor: pointer;
`;

const PportoTitle = styled.p`
  font-size: 1.4vw;
`;

const PportoCompany = styled.h1`
  font-size: 2.2vw;
  font-weight: 600;
`;

const PteamName = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
`;

const PteamStatus = styled.p`
  font-size: 0.8vw;
  font-weight: 400;
`;

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12 mb-5  ps-5 text-dark">
            <Pmoto>Get In Touch</Pmoto>
          </div>
          <div className="col-md-10 ps-5 mb-5">
            <PworkflowDesc>
              Looking to talk to us directly, or planning an office visit? As
              Digital Agency, Dipstrategy start by understanding your business
              need to comes up with any solutions. That's why it is important
              for us to hear your story. When it come to listening to your
              story, we are all ears.
            </PworkflowDesc>
          </div>
          <div className="col-md-10 ps-5">
            <PworkflowDesc>
              Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia
            </PworkflowDesc>
          </div>
          <div className="col-md-10 ps-5 mb-5">
            <PportoCompany>
              P. +62 21 858 3944 info@dipstrategy.co.id
            </PportoCompany>
          </div>
          <div className="col-md-10 ps-5">
            <ul className="list-inline">
              <PteamStatus>
                <li className="list-inline-item">FACEBOOK</li>
                <li className="list-inline-item">TWITTER</li>
                <li className="list-inline-item">INSTAGRAM</li>
                <li className="list-inline-item">LINKEDIN</li>
              </PteamStatus>
            </ul>
          </div>
        </div>
        <div className="col-md-6 align-self-center">
          <Form className="row">
            <div className="mb-3 col-md-12 border-bottom ps-0">
              <input
                className="form-control bg-transparent text-white border-0 ps-0"
                type="text"
                id="name"
                required
                placeholder="Name"
              />
            </div>
            <div className="mb-3 col-md-12 border-bottom ps-0">
              <input
                className="form-control text-white bg-transparent border-0 ps-0"
                type="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-3 col-md-12 border-bottom  pb-md-0 ps-0">
              <textarea
                className="form-control text-white bg-transparent border-0 ps-0 "
                id="message"
                required
                placeholder="Message"
              />
            </div>
            <div className="col-md-12 ps-0  align-self-end ">
              <BlearnMore className="rounded d-block border-0 pt-1">
                <ul className="list-inline mt-2">
                  <li className="list-inline-item me-xl-5 me-md-1">
                    <PlearnMore>Submit</PlearnMore>
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="../arrow-black-mini.png"
                      className="img-fluid"
                      style={{ maxWidth: "100%" }}
                    />
                  </li>
                </ul>
              </BlearnMore>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
