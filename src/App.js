import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import ModalChoose from "../src/components/modal/ModalChoose";

function App() {
  const [modalShow, setModalShow] = useState(true);
  const [content, setContent] = useState({});

  const pageFirstChoose = () => {
    setContent({
      id: 1,
      description: "We Assist you in solving tomorrow's problems today",
      background: "dipstrategy-bg.png",
    });
    setModalShow(false);
  };

  const pageSecondChoose = () => {
    setContent({
      id: 2,
      description: "Creating High performance Digital Asset",
      background: "dipstrategy-bg-2.2.png",
    });
    setModalShow(false);
  };

  return (
    <div className="App">
      <ModalChoose
        show={modalShow}
        pageFirstChoose={pageFirstChoose}
        pageSecondChoose={pageSecondChoose}
      />

      {!modalShow && <HomePage content={content} />}
    </div>
  );
}

export default App;
