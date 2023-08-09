import React, { useState } from "react";
import { Formik } from "formik";

const AddProduct = () => {
  return (
    <section className="p-10 bg-blue-100">
      <h3 className="title mb-5 text-center text-3xl font-bold text-purple-600">
        Add a Product
      </h3>
      <div className="w-1/2 mx-auto bg-white p-10 rounded-md shadow-md">
        <Formik
          initialValues={{
            userId: "",
            id: "",
            title: "",
            body: "",
          }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((json) => console.log(json));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name="userId"
                className="input"
                placeholder="Enter product userId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userId}
              />
              {errors.userId && touched.userId && errors.userId}

              <input
                type="number"
                name="id"
                className="input"
                placeholder="Enter product id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
              />
              {errors.id && touched.id && errors.id}

              <input
                type="text"
                name="title"
                className="input"
                rows={3}
                placeholder="Enter product title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}

              <input
                type="text"
                name="body"
                className="input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {errors.body && touched.body && errors.body}

              <button
                className="btn_submit"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AddProduct;
