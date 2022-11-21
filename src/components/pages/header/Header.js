import styled from "styled-components";

const P = styled.p`
  cursor: pointer;
  font-size: 0.8vw;
`;

const Pnumber = styled.p`
  font-size: 1.4vw;
  font-weight: 400;
`;

const Pmoto = styled.p`
  font-size: 6vw;
  font-weight: 600;
  color: #000000;
`;

const PAboutUs = styled.p`
  font-size: 0.6vw;
  font-weight: 600;
`;

const Dot = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 20px;
  border: 0.5px solid white;
`;

const DotFill = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 20px;
  background: #ffffff;
`;

const Ul = styled.ul`
  margin: -4rem 0 0 10rem;
  @media (max-width: 1300px) and (min-width: 768px) {
    margin: -3rem 0 0 3rem;
  }
`;

const Header = (props) => {
  const Div = styled.div`
    background-image: url(${props.content.background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    background-attachment: fixed;
  `;
  return (
    <Div className="container-fluid">
      <div className="row">
        <div className="col-md-4 ps-5 pt-4">
          <img
            src="../dipstrategy-logo.png"
            style={{ cursor: "pointer" }}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8 pt-5 pe-5">
          <ul className="list-inline float-end ">
            <li className="list-inline-item pe-md-2 pe-xl-4 text-warning ">
              <P className="font-weight-bold">HOME</P>
            </li>
            <li className="list-inline-item pe-md-2 pe-xl-4 text-white">
              <P>SERVICES •</P>
            </li>
            <li className="list-inline-item pe-md-2 pe-xl-4 text-white">
              <P>WORK FLOW •</P>
            </li>
            <li className="list-inline-item pe-md-2 pe-xl-4 text-white">
              <P>PORTFOLIO •</P>
            </li>
            <li className="list-inline-item pe-md-2 pe-xl-4 text-white">
              <P>ABOUT US •</P>
            </li>
            <li className="list-inline-item pe-md-3 pe-xl-5 text-white">
              <P>OUR VALUE •</P>
            </li>
            <li className="list-inline-item pe-4">
              <Pnumber className="font-weight-bold">+62 21 858 3944</Pnumber>
            </li>
          </ul>
        </div>
        <div className="col-md-10 text-uppercase align-self-end ps-5">
          {props.content.id === 1 && (
            <Pmoto>{props.content.description.substring(0, 16)} </Pmoto>
          )}
          {props.content.id === 2 && (
            <Pmoto>{props.content.description.substring(0, 13)} </Pmoto>
          )}
        </div>
        <div className=" col-md-2">
          <img src="../dipstrategy-initial.png" className="img-fluid" />
          <Ul className="list-inline position-absolute">
            <li className="list-inline-item">
              <DotFill />
            </li>
            <li className="list-inline-item">
              <Dot />
            </li>
            <li className="list-inline-item">
              <Dot />
            </li>
            <li className="list-inline-item">
              <Dot />
            </li>
          </Ul>
        </div>
        <div className="col-md-10 text-uppercase pt-0 align-self-start ps-5">
          {props.content.id === 1 && (
            <Pmoto>{props.content.description.substring(17, 35)}</Pmoto>
          )}
          {props.content.id === 2 && (
            <Pmoto>{props.content.description.substring(14, 25)}</Pmoto>
          )}
        </div>
        <div className="col-md-1 align-self-center ps-5 pe-0">
          <PAboutUs>ABOUT US</PAboutUs>
        </div>
        <div className="col-md-1 ps-0">
          <img src="../arrow.png" className="img-fluid mt-1" />
        </div>
      </div>
    </Div>
  );
};

export default Header;
