import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Formik, Form } from "formik";
/* import validation from "./validations";
 */ import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputMask from "react-input-mask";
import validation from "./Validations";
export default function FormArea() {
  return (
    <>
      <div className="form">
        <Formik
          initialValues={{
            fullName: "",
            phone: "",
            email: "",
            message: "",
            gender: "",
            date: "",
            department: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const data = {
                id: "",
                fullName: values.fullName,
                phone: values.phone,
                email: values.email,
                message: values.message,
                date: moment(new Date(values.date)).format("YYYY-MM-DD"),
                gender: values.gender,
                department: values.department,
              };
              console.log(data);
              await axios
                .post(`http://localhost:3000/Appoinment`, data)
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
                <div className="col-lg-6 mb-3">
                  <div className="form-check-group h-100 d-flex flex-column justify-content-center align-items-start">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender"
                          value="Kadın"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label className="form-check-label" htmlFor="gender">
                          Kadın
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender2"
                          value="Erkek"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label className="form-check-label" htmlFor="gender2">
                          Erkek
                        </label>
                      </div>
                    </div>
                    {formik.errors.gender && formik.touched.gender && (
                      <span className="error">{formik.errors.gender}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <DatePicker
                    selected={formik.values.date}
                    dateFormat="dd-MM-yyyy"
                    placeholderText={"DOĞUM TARİHİNİZ"}
                    name="date"
                    id="datepicker"
                    onBlur={formik.handleBlur}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className="form-control"
                    value={formik.values.date}
                    minDate={new Date()}
                    onChange={(date) => formik.setFieldValue("date", date)}
                  />
                  {formik.errors.date && formik.touched.date && (
                    <span className="error">{formik.errors.date}</span>
                  )}
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <select
                      className="form-select"
                      name="department"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.department}
                    >
                      <option hidden>Bölüm Seçiniz</option>
                      <option>Genel Diş Hekimliği</option>
                      <option>Kozmetik diş hekimliği</option>
                      <option>Diş implantları</option>
                      <option>Genel Diş Hekimliği</option>
                      <option>Kozmetik diş hekimliği</option>
                      <option>Diş implantları</option>
                      <option>Genel Diş Hekimliği</option>
                      <option>Kozmetik diş hekimliği</option>
                      <option>Diş implantları</option>
                    </select>

                    <span>Hangi Bölüme Randevu Talep Ediyorsunuz?</span>
                  </div>
                  {formik.errors.department && formik.touched.department && (
                    <span className="error">{formik.errors.department}</span>
                  )}
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
                    Randevu Al
                  </button>
                </div>
                <ToastContainer />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
