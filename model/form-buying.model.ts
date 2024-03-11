import { isObject } from "lodash";

class FormBuyingModel {
  user_name: string;
  address: string;
  phone: string;
  email: string;

  constructor({ user_name = "", address = "", phone = "", email = "" }) {
    this.user_name = user_name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  static parseBodyRequestToPush(values: FormBuyingModel) {
    if (isObject(values)) {
      return {
        user_name: values.user_name,
        address: values.address,
        phone: values.phone,
        email: values.email,
      };
    }

    return {};
  }
}

export default FormBuyingModel;
