import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #ffffff;

  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  padding: 15px;
`;

const DivN = styled.div`
  background-image: url("../n-background.png");
  background-repeat: no-repeat;
  background-size: 30% 100%;
  background-position: left;
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

const Punderline = styled.p`
  text-decoration: underline;
  font-size: 1.4vw;
  cursor: pointer;
`;

const PportoTitle = styled.p`
  font-size: 1.4vw;
`;

const PportoCompany = styled.h1`
  font-size: 3.2vw;
  font-weight: 600;
`;

const Divpicture1 = styled.div`
  margin: -2rem 0 0 0;
`;

const Divpicture2 = styled.div`
  margin: 0 -10rem 0 -4rem;
`;

const Divpicture3 = styled.div`
  margin: 0 0 0 -22rem;
  @media (max-width: 1700px) {
    margin: 0 0 0 -12rem;
  }

  @media (max-width: 1280px) {
    margin: 0 0 0 -12rem;
  }
  @media (max-width: 1100px) {
    margin: 0 0 0 -6rem;
  }
  @media (max-width: 768px) {
    margin: 0 0 0 -2rem;
  }
`;

const Portfolio = (props) => {
  return (
    <Div className="container-fluid">
      <div className="row mb-5">
        <div className="col-md-10 mb-5 align-self-start ps-5 pt-0 ">
          <Pmoto>WORKFLOW </Pmoto>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-5 ps-5 pt-0">
          <PworkflowDesc>
            It is particularly important for us that you as a customer are
            actively involved in creative processes and that you know at all
            times which step we are about to take next. Learn more about our
            workflow and our communication with you as a customer here.
          </PworkflowDesc>
        </div>
        <div className="col-md-6 mb-5 ps-5 pt-0">
          <ul className="list-unstyled">
            <li className="h3 mb-5">
              How we deal with projects from start to finish
            </li>
            <li>
              <PworkflowDesc>
                The key to successful collaboration and results that are
                perfectly tailored to you is clear goal setting and the
                elimination of misunderstandings.
              </PworkflowDesc>
            </li>
          </ul>
        </div>
      </div>

      <DivN className="row mb-6">
        <div className="col-md-6 mb-5  ps-5 pt-5 ">
          <div className="row">
            <div className="col-md-12">
              <img src="../workflow-bg.png" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5 ps-5 pt-0">
          <ul className="list-unstyled">
            <li className="mb-5">
              <PworkflowDesc>
                Before each project, we therefore obtain detailed information
                from you about what you expect from our service, what your goals
                are and what you particularly value. Our experts will also be
                happy to advise you on this step with their extensive specialist
                knowledge.
              </PworkflowDesc>
            </li>
            <li className="mb-5">
              <PworkflowDesc>
                As soon as your expectations have been clarified, we get down to
                work. We actively involve you, the customer, in the processes so
                that you always know where your project currently stands.
              </PworkflowDesc>
            </li>
            <li className="mb-5">
              <BlearnMore className="rounded  border-0">
                <ul className="list-inline mt-2">
                  <li className="list-inline-item  pt-1">
                    <PlearnMore>LEARN MORE</PlearnMore>
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
            <li className="mb-5">
              <Punderline>How we communicate with the client</Punderline>
            </li>
            <li>
              <Punderline>Stages of the process</Punderline>
            </li>
          </ul>
        </div>
      </DivN>
      <div className="row mb-5">
        <div className="col-md-6 mb-5 align-self-start ps-5 pt-0 ">
          <Pmoto>PORTFOLIO </Pmoto>
        </div>
        <div className="col-md-4 mb-5 align-self-start ps-5 pt-0 ">
          <PworkflowDesc>
            Take a look at our most successful projects and see for yourself our
            skills and the results that speak for themselves.
          </PworkflowDesc>
        </div>
        <div className="col-md-2 mb-5 align-self-start ps-5 pt-0 ">
          <ul className="list-inline">
            <li className="list-inline-item">
              <img src="../arrow-left.png" className="img-fluid me-xl-3" />
            </li>
            <li className="list-inline-item">
              <img src="../arrow-right.png" className="img-fluid ms-xl-3" />
            </li>
          </ul>
        </div>
      </div>
      {props.portfolios.map((e, i, a) => (
        <div className="row mb-5" key={i}>
          {/* LEFT CONTENT */}
          <div
            className={`col-md-6 mb-5 align-self-start  ps-5 pt-0 text-uppercase ${
              i % 2 === 0 ? "" : "order-1"
            }`}
          >
            <div className="col-md-12 text-muted">
              <PportoTitle>{e.service}</PportoTitle>
            </div>
            <div className="col-md-6">
              <PportoCompany>{e.title} </PportoCompany>
            </div>
            <div className="col-md-12">
              {e.companyAchievements.map((e, i, a) => (
                <ul className="list-unstyled" key={i}>
                  <li>
                    <PworkflowDesc>{`${e.no}. ${e.achievement}`}</PworkflowDesc>
                  </li>
                </ul>
              ))}
              <BlearnMore className="rounded d-block border-0">
                <ul className="list-inline mt-2">
                  <li className="list-inline-item me-xl-5 me-md-1">
                    <PlearnMore>CASE STUDY</PlearnMore>
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

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <div className="row">
              <Divpicture1 className="col-md-4">
                <img src={e.img[0]} className="img-fluid" />
              </Divpicture1>
              <Divpicture2 className="col-md-4">
                <img
                  src={e.img[1]}
                  className="img-fluid"
                  style={{ maxWidth: "200%" }}
                />
              </Divpicture2>
              <Divpicture3 className="col-md-4">
                <img src={e.img[2]} className="img-fluid" />
              </Divpicture3>
            </div>
          </div>
        </div>
      ))}
    </Div>
  );
};

export default Portfolio;
