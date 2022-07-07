import * as yup from "yup";
let validation = yup.object().shape({
  message: yup.string().required("Bu alan zorunludur."),
  fullName: yup.string().required("Bu alan zorunludur."),
  gender: yup.string().required("Bu alan zorunludur."),
  phone: yup.string().required("Bu alan zorunludur"),
  department: yup.string().required("Bu alan zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email adresi girin")
    .required("Bu alan zorunludur"),
  date: yup.string().required("Bu alan zorunludur.").nullable(),
});

export default validation;
