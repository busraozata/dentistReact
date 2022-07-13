import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "./Validations";
export default function FormArea() {
  return (
    <div className="form">
      <Formik
        initialValues={{
          fullName: "",
          subject: "",
          phone: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const data = {
              id: "",
              fullName: values.fullName,
              subject: values.subject,
              phone: values.phone,
              email: values.email,
              message: values.message,
            };
            await axios
              .post(`http://localhost:3000/ContactData`, data)
              .then((res) => {
                console.log(res);
                console.log(res.data);
              });
            toast.success("Başarılı");
            resetForm({ values: "" });
          } catch (error) {
            toast.error("Hata!", error);
          }
        }}
        validationSchema={validation}
      >
        {(formik) => (
          <Form>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="İsim Soyisim"
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                    <span className="error">{formik.errors.fullName}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div>
                  <InputMask
                    id="phone"
                    name="phone"
                    type="text"
                    mask="(999) 999 99 99"
                    placeholder="Telefon "
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  ></InputMask>
                  {formik.errors.phone && formik.touched.phone && (
                    <span className="error">{formik.errors.phone}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Soru Başlığı"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.errors.subject && formik.touched.subject && (
                    <span className="error">{formik.errors.subject}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E - Mail"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="error">{formik.errors.email}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Mesaj Yazın"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.errors.message && formik.touched.message && (
                    <span className="error">{formik.errors.message}</span>
                  )}
                </div>
              </div>
              <div className="button-area">
                <button type="submit" className="button">
                  Gönder
                </button>
              </div>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
