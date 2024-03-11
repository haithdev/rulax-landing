/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  FormFeedback,
  Label,
  Row,
  Col,
} from "reactstrap";
import DialogAlert from "../DialogAlert";
import useToggleDialog from "../../hooks/todos/useToggleDialog";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { EMAIL_REGEX, PHONE_REGEX, formatPrice } from "constants/common";
import { useCount } from "../../context/CountProductContext";
import FormBuyingModel from "model/form-buying.model";
import googleServices from "services/googleServices";

const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Vui lòng nhập email")
    .matches(EMAIL_REGEX, "Sai định dạng Email"),
  user_name: Yup.string().required("Vui lòng nhập đúng họ và tên"),
  address: Yup.string().required("Vui lòng nhập địa chỉ"),
  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại")
    .matches(PHONE_REGEX, "Sai định dạng số điện thoại"),
});

const priceDefault = 1200000;

const CheckoutModal = ({ toggle = () => {}, modal = false }) => {
  const { count } = useCount();
  const {
    shouldRender: shouldRenderAlertSuccess,
    open: openAlertSucess,
    toggle: toggleAlertSuccess,
  } = useToggleDialog();

  //! Function
  const onSubmit = async (values, helperFormik) => {
    try {
      const response = await googleServices.putDataToGGSheet(
        FormBuyingModel.parseBodyRequestToPush(values)
      );
      if (response.status === 200) {
        helperFormik.resetForm();
        toggleAlertSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //! Render
  return (
    <div>
      {shouldRenderAlertSuccess && (
        <DialogAlert
          isOpen={openAlertSucess}
          toggle={toggleAlertSuccess}
          onClose={() => {
            toggleAlertSuccess();
            toggle();
          }}
        />
      )}

      <Formik
        initialValues={{
          email: "",
          user_name: "",
          address: "",
          phone: "",
        }}
        validationSchema={validationLoginSchema}
        onSubmit={onSubmit}
      >
        {(propsFormik) => {
          const { errors, touched } = propsFormik;
          const getErrorMsg = (field) => {
            return !!errors[field] && touched[field] && errors[field];
          };

          return (
            <Modal isOpen={modal} toggle={toggle} centered size="lg">
              <ModalHeader toggle={toggle}>Thông tin nhận hàng</ModalHeader>

              <Form
                id="order-form"
                className="homepage-order-form needs-validation"
                noValidate
              >
                <ModalBody>
                  <Row md="2" sm="1" xs="1">
                    <Col>
                      <FormGroup className="position-relative">
                        <Label for="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          onChange={propsFormik.handleChange}
                          onBlur={propsFormik.handleBlur}
                          value={propsFormik.values.email}
                          required
                          invalid={!!getErrorMsg("email")}
                        />
                        {!!getErrorMsg("email") && (
                          <FormFeedback>{getErrorMsg("email")}</FormFeedback>
                        )}
                      </FormGroup>

                      <FormGroup className="position-relative">
                        <Label for="user_name">Họ và tên</Label>
                        <Input
                          id="user_name"
                          name="user_name"
                          type="text"
                          className="form-control"
                          placeholder="Họ và tên"
                          onChange={propsFormik.handleChange}
                          onBlur={propsFormik.handleBlur}
                          value={propsFormik.values.user_name}
                          required
                          invalid={!!getErrorMsg("user_name")}
                        />
                        {!!getErrorMsg("user_name") && (
                          <FormFeedback>
                            {getErrorMsg("user_name")}
                          </FormFeedback>
                        )}
                      </FormGroup>

                      <FormGroup className="position-relative">
                        <Label for="address">Địa chỉ</Label>
                        <Input
                          id="address"
                          name="address"
                          type="text"
                          className="form-control"
                          placeholder="Địa chỉ"
                          onChange={propsFormik.handleChange}
                          onBlur={propsFormik.handleBlur}
                          value={propsFormik.values.address}
                          required
                          invalid={!!getErrorMsg("address")}
                        />
                        {!!getErrorMsg("address") && (
                          <FormFeedback>{getErrorMsg("address")}</FormFeedback>
                        )}
                      </FormGroup>

                      <FormGroup className="position-relative">
                        <Label for="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="text"
                          className="form-control"
                          placeholder="Số điện thoại"
                          onChange={propsFormik.handleChange}
                          onBlur={propsFormik.handleBlur}
                          value={propsFormik.values.phone}
                          required
                          invalid={!!getErrorMsg("phone")}
                        />
                        {!!getErrorMsg("phone") && (
                          <FormFeedback>{getErrorMsg("phone")}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col>
                      <p style={{ fontWeight: "bold" }}>Sản phẩm</p>
                      <Row
                        md="2"
                        sm="1"
                        xs="1"
                        style={{ borderBottom: "1px solid #f2f2f2" }}
                      >
                        <Col>
                          <img
                            src="static/assets/img/product/avt.jpg"
                            alt="Avatar"
                          />
                        </Col>
                        <Col>
                          <p>
                            Đệm Massage toàn thân hồng ngoại RULAX đa điểm rung
                            cao cấp phiên bản 2023- Chất liệu da cao cấp
                          </p>
                        </Col>
                      </Row>
                      <Row className="px-4 pt-2">
                        <Col>
                          <p style={{ fontWeight: "bold" }}>Số lượng:</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>{count}</p>
                        </Col>
                      </Row>
                      <Row
                        className="px-4"
                        style={{ borderBottom: "1px solid #f2f2f2" }}
                      >
                        <Col>
                          <p style={{ fontWeight: "bold" }}>Giá:</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>{formatPrice(priceDefault)}</p>
                        </Col>
                      </Row>
                      <Row className="px-4">
                        <Col>
                          <p style={{ fontWeight: "bold" }}>Tổng:</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p style={{ fontWeight: "bold" }}>
                            {formatPrice(priceDefault * count)}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                  <Button
                    type="submit"
                    disabled={propsFormik.isSubmitting}
                    className="btn btn-success order-btn"
                  >
                    {propsFormik.isSubmitting ? "Loading" : "Đặt Hàng"}
                  </Button>
                </ModalFooter>
              </Form>
            </Modal>
          );
        }}
      </Formik>
    </div>
  );
};

export default CheckoutModal;
