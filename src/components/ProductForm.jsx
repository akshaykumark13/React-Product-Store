import React, { useState } from "react";
import { validate } from "../utils/Validators";

export default function ProductForm({ onSubmit, initialValues = {} }) {
  const [formValues, setFormValues] = useState({
    title: initialValues.title || "",
    price: initialValues.price || "",
    description: initialValues.description || "",
    category: initialValues.category || "",
    image: initialValues.image || "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          className={`form-control ${formErrors.title ? "is-invalid" : ""}`}
        />
        {formErrors.title && (
          <div className="invalid-feedback">{formErrors.title}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          value={formValues.price}
          onChange={handleChange}
          className={`form-control ${formErrors.price ? "is-invalid" : ""}`}
        />
        {formErrors.price && (
          <div className="invalid-feedback">{formErrors.price}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
          className={`form-control ${
            formErrors.description ? "is-invalid" : ""
          }`}
          rows={3}
        ></textarea>
        {formErrors.description && (
          <div className="invalid-feedback">{formErrors.description}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          value={formValues.category}
          onChange={handleChange}
          className={`form-control ${formErrors.category ? "is-invalid" : ""}`}
        />
        {formErrors.category && (
          <div className="invalid-feedback">{formErrors.category}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          name="image"
          value={formValues.image}
          onChange={handleChange}
          className={`form-control ${formErrors.image ? "is-invalid" : ""}`}
        />
        {formErrors.image && (
          <div className="invalid-feedback">{formErrors.image}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Save Product
      </button>
    </form>
  );
}
