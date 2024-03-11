export const PHONE_REGEX = /(0[3|5|7|8|9]|3|5|7|9)+([0-9]{8})\b/g;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const formatPrice = (price: number) => {
  const code = "VND";
  const locales = "it-IT";
  const options = {
    style: "currency",
    currency: code,
  };

  return price.toLocaleString(locales, options).replace("VND", "VNĐ");
};

export const convertObjectToFormData = (dataObject: any) => {
  const formData = new FormData();

  Object.keys(dataObject).forEach((key) => {
    formData.append(key, dataObject[key]);
  });

  return formData;
};
