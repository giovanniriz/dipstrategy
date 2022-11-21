import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalChoose = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center mb-5">
          <h3>Which pages you would like to see?</h3>
        </Modal.Body>
        <Modal.Footer className="border">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Button
                  onClick={props.pageFirstChoose}
                  className="btn btn-info float-end text-white"
                >
                  Pages 1
                </Button>
              </div>
              <div className="col-md-6">
                <Button
                  onClick={props.pageSecondChoose}
                  className="btn btn-primary float-start"
                >
                  Pages 2
                </Button>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalChoose;
