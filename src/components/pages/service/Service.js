import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-image: url("../dipstrategy-bg-2.png"),
    url("../dipstrategy-bg-2.1.png");
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  padding: 15px;
`;

const P = styled.p`
  font-size: 1.7vw;
  font-weight: 200;
`;

const Pmoto = styled.p`
  font-size: 6vw;
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

const Service = (props) => {
  return (
    <Div className="container-fluid">
      <div className="row  mb-5">
        <div className="col-md-10 mb-5 text-uppercase align-self-start ps-5 pt-0 text-white">
          {props.content.id === 1 && (
            <Pmoto>{props.content.description.substring(36, 50)}</Pmoto>
          )}
          {props.content.id === 2 && (
            <Pmoto>{props.content.description.substring(26, 50)}</Pmoto>
          )}
        </div>
      </div>
      <div className="row invisible" style={{ margin: "6rem 0" }}></div>
      <div className="row mt-5">
        <div className="col-md-5 text-uppercase ps-5 text-white">
          <Pmoto>OUR SERVICES </Pmoto>
        </div>
        <div className="col-md-5 text-white">
          <P>
            We’ve worked with a wide array of clients across the globe to apply
            design fundamentals of elegance, simplicity
          </P>
        </div>
        <div className="col-md-1 text-white pt-5 ps-5 pe-0">
          <PAboutUs className="mt-2">VIEW ALL</PAboutUs>
        </div>
        <div className="col-md-1 ps-0">
          <img src="../arrow-white.png" className="img-fluid mt-1" />
        </div>
      </div>
      {props.services.map((e, i, a) => (
        <div
          style={{
            borderTop: "0.2px solid white",
            maxWidth: "95.2%",
            margin: "0 auto",
          }}
          key={i}
        >
          <div className="accordion " id="accordionExample">
            <div className="card bg-transparent border-0">
              <div className="card-header border-0" id="headingOne">
                <div className="row">
                  <div className="col-md-6 text-white text-uppercase py-5">
                    <Pservices>{e.title}</Pservices>
                  </div>

                  {props.indexServices === i ? (
                    <>
                      <div className="col-md-4 py-5">
                        <Pdesc>{e.shortDescription}</Pdesc>
                      </div>
                      <div className="col-md-2 py-5">
                        <img
                          src="../remove.png"
                          className="btn btn-link float-end"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => props.unCollapseServices()}
                        />
                      </div>

                      <div className="col-md-6 text-white py-5">
                        <img src={e.img[0]} className="img-fluid" />
                      </div>
                      <div className="col-md-6 text-white py-5 align-self-start">
                        <div className="row">
                          {e.img.map((img, i, arr) =>
                            i > 0 ? (
                              <div className="col-md-6" key={i}>
                                <img src={img} className="img-fluid" />
                              </div>
                            ) : (
                              ""
                            )
                          )}
                          <div className={`col-md-8 py-5 `}>
                            <Pdesc>{e.description}</Pdesc>
                          </div>
                          <div className="col-md-4 py-5">
                            <BlearnMore className="rounded d-block mx-auto ">
                              <ul className="list-inline mt-2">
                                <li className="list-inline-item me-5 border-white">
                                  <PlearnMore>LEARN MORE</PlearnMore>
                                </li>
                                <li className="list-inline-item border-white">
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
                    </>
                  ) : (
                    <>
                      <div className="col-md-3 py-5">
                        <Pdesc>{e.shortDescription}</Pdesc>
                      </div>

                      <div className="col-md-2 py-5">
                        <BlearnMore className="rounded float-end">
                          <ul className="list-inline mt-2">
                            <li className="list-inline-item me-3">
                              <PlearnMore>LEARN MORE</PlearnMore>
                            </li>
                            <li className="list-inline-item">
                              <img
                                src="../arrow-black-mini.png"
                                className="img-fluid"
                              />
                            </li>
                          </ul>
                        </BlearnMore>
                      </div>
                      <div className="col-md-1 py-5">
                        {props.indexServices !== i ? (
                          <img
                            src="../add.png"
                            className="btn btn-link float-end img-fluid"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={() => props.collapseServices(i)}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Div>
  );
};

export default Service;
