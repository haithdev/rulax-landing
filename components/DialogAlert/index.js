import React from "react";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const propTypes = {};

const DialogAlert = (props) => {
  const {
    header = "Congraturation !",
    content = "Đặt hàng thành công, cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi. Đơn hàng của bạn sẽ sớm được gửi đến !",

    isOpen = false,
    toggle = () => {},
    onClose = () => {},
  } = props;
  //! State

  //! Function

  //! Render
  return (
    <Modal
      backdropTransition={{
        timeout: 1300,
      }}
      modalTransition={{
        timeout: 700,
      }}
      isOpen={isOpen}
      toggle={toggle}
      centered
    >
      <ModalHeader toggle={toggle}>{header}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
};

DialogAlert.propTypes = propTypes;
export default DialogAlert;
