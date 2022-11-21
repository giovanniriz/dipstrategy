import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #060606;
`;

const Pmoto = styled.h1`
  font-size: 4.7vw;
  font-weight: 600;
`;

const Pservices = styled.p`
  font-size: 1.4vw;
  color: #b6b6b6;
`;

const Values = (props) => {
  return (
    <Div className="container-fluid">
      <div className="row ">
        <div className="col-md-12 mb-5  ps-5 text-white ">
          <Pmoto>OUR VALUES </Pmoto>
        </div>

        {props.values.map((e, i, a) => (
          <div className="col-md-4 mb-5  ps-5 text-white " key={i}>
            <div className="row">
              <div className="col-md-12">
                <Pservices>{e.title} </Pservices>
              </div>
              <div className="col-md-8 border p-5 mt-5">
                <img
                  src={e.img}
                  className="d-block mx-auto"
                  style={{ maxWidth: "100%" }}
                  alt="img"
                />
              </div>
              <div className="col-md-12 ps-0 mt-5">
                <Pservices className="mb-5">{e.description}</Pservices>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default Values;
