import * as yup from "yup";
let validation = yup.object().shape({
  message: yup.string().required("Bu alan zorunludur."),
  fullName: yup.string().required("Bu alan zorunludur."),
  subject: yup.string().required("Bu alan zorunludur."),
  phone: yup.string().required("Bu alan zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email adresi girin")
    .required("Bu alan zorunludur"),
});

export default validation;
