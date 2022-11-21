import styled from "styled-components";

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

const Pmoto = styled.h1`
  font-size: 4.7vw;
  font-weight: 600;
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

const PteamName = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
`;

const PteamStatus = styled.p`
  font-size: 0.8vw;
  font-weight: 400;
`;

const Card = styled.div`
  width: 15rem;
  @media (max-width: 1100px) {
    width: 10rem;
  }
`;

const About = (props) => {
  return (
    <div className="container-fluid">
      <div className="row " style={{ backgroundColor: "white" }}>
        <div className="col-md-12 mb-5  ps-5  ">
          <Pmoto>ABOUT US </Pmoto>
        </div>
      </div>
      <DivBlackBG className="row">
        <div className="col-md-12 mb-5 pt-5 ps-5">
          <div className="row">
            <div className="col-md-7 text-white pb-5">
              <div className="row">
                <div className="col-md-8">
                  <ul className="list-unstyled">
                    <li>
                      Hardianto is a name of person work in =digital agency
                      based in Jakarta. Founder Novi Hardianto decided to go
                      into business for himself, using his vast experience in
                      software engineering and numerous ancillary fields to help
                      people perfect their web presence and get seen. In setting
                      up the company, he was able to rely on his vast experience
                      from previous entrepreneurial activities and therefore
                      knows what matters
                    </li>
                    <li className="mt-5">
                      <BlearnMore className="rounded d-block border-0">
                        <ul className="list-inline mt-2">
                          <li className="list-inline-item me-xl-5 me-md-1">
                            <PlearnMore>SEE MORE</PlearnMore>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4  pb-5" style={{ margin: "-10rem 0 0 0" }}>
              <img src="../video-play.png" className="img-fluid" />
            </div>
            <div className="col-md-12 mt-5 text-white">
              <div className="row">
                <div className="col-md-10">
                  <Pmoto>OUR MAGIC TEAM </Pmoto>
                </div>
                <div className="col-md-2 align-self-center">
                  <BlearnMore className="rounded d-block border-0">
                    <ul className="list-inline mt-2">
                      <li className="list-inline-item me-xl-5 me-md-1">
                        <PlearnMore>SEE MORE</PlearnMore>
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
              </div>
            </div>
          </div>
        </div>
      </DivBlackBG>
      <div className="row mt-5">
        <div className="col-md-8 mb-5  ps-5  ">
          <PworkflowDesc>
            {" "}
            Wolven D.O.O. is a small digital agency based in Serbia. Founder
            Dave McGowan decided to go into business for himself, using his vast
            experience in software engineering and numerous ancillary fields to
            help people perfect their web presence and get seen.{" "}
          </PworkflowDesc>

          <PworkflowDesc>
            In setting up the company, he was able to rely on his vast
            experience from previous entrepreneurial activities and therefore
            knows what matters
          </PworkflowDesc>
        </div>
        <div className="col-md-4"></div>
        {props.team.map((e, i, a) => (
          <div className="col-md-3 ps-5 border-0 pb-5 pe-5" key={i}>
            <Card className="card ">
              <img
                src={e.picture}
                className="card-img-top img-fluid rounded-0"
                style={{ maxWidth: "100%" }}
              />
              <div
                className="card-body "
                style={{ backgroundColor: "#FFFE55" }}
              >
                <PteamName>{e.name}</PteamName>
                <PteamStatus>{e.position}</PteamStatus>
                <ul className="list-inline">
                  {e.socialMedia.map((e, i, a) => (
                    <li className="list-inline-item" key={i}>
                      <img
                        src={e}
                        className="img-fluid"
                        style={{ maxWidth: "100%" }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
