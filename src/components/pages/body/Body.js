import About from "../about/About";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";
import Service from "../service/Service";
import Value from "../values/Value";
import { useEffect, useState } from "react";

const Body = (props) => {
  const [services, setServices] = useState([]);
  const [indexServices, setIndexServices] = useState();
  const [portfolios, setPortfolios] = useState([]);
  const [team, setTeam] = useState([]);
  const [values, setValues] = useState([]);

  const collapseServices = (i) => {
    setIndexServices(i);
  };

  const unCollapseServices = (i) => {
    setIndexServices(i);
  };

  const getServices = () => {
    fetch("data-services.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setServices(myJson);
      })
      .catch((err) => console.error(err));
  };

  const getPortfolios = () => {
    fetch("data-portfolio.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPortfolios(myJson);
      })
      .catch((err) => console.error(err));
  };

  const getTeam = () => {
    fetch("data-teams.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTeam(myJson);
      })
      .catch((err) => console.error(err));
  };

  const getValues = () => {
    fetch("data-values.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setValues(myJson);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getServices();
    getPortfolios();
    getTeam();
    getValues();
  }, []);
  return (
    <>
      <Service
        services={services}
        indexServices={indexServices}
        unCollapseServices={unCollapseServices}
        collapseServices={collapseServices}
        content={props.content}
      />
      <Portfolio portfolios={portfolios} />
      <About team={team} />
      <Value values={values} />
      <Contact />
    </>
  );
};

export default Body;
