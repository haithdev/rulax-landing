import { GET_DATA_URL } from "constants/api";
import moment from "moment";
import { convertObjectToFormData } from "constants/common";
const formatDate = () => {
  var date = new Date();
  const convertDate = moment(date).format("DD/MM/YYYY - HH:MM:SS");
  return convertDate;
};
class GoogleServices {
  putDataToGGSheet({ user_name = "", address = "", phone = "", email = "" }) {
    const formData = convertObjectToFormData({
      Name: user_name,
      Address: address,
      Phone: phone,
      Email: email,
      Time: formatDate(),
    });
    return fetch(`${GET_DATA_URL}`, {
      method: "POST",
      body: formData,
    });
  }
}

export default new GoogleServices();
