export function validate(values) {
  const errors = {};

  if (!values.title?.trim()) errors.title = "Title is required";
  if (!values.price || isNaN(Number(values.price)))
    errors.price = "Price must be a number";
  if (!values.description?.trim())
    errors.description = "Description is required";
  if (!values.category?.trim()) errors.category = "Category is required";
  if (!values.image?.trim()) errors.image = "Image URL is required";

  return errors;
}

// // validators.js
// // Utility to validate product form fields
// export function validate(values) {
//   const errors = {};

//   // Title
//   if (!values.title?.trim()) {
//     errors.title = "Title is required";
//   }

//   // Price
//   if (!values.price) {
//     errors.price = "Price is required";
//   } else if (isNaN(Number(values.price))) {
//     errors.price = "Price must be a number";
//   } else if (Number(values.price) <= 0) {
//     errors.price = "Price must be greater than zero";
//   }

//   // Description
//   if (!values.description?.trim()) {
//     errors.description = "Description is required";
//   }

//   // Category
//   if (!values.category?.trim()) {
//     errors.category = "Category is required";
//   }

//   // Image
//   if (!values.image?.trim()) {
//     errors.image = "Image URL is required";
//   } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(values.image)) {
//     errors.image = "Enter a valid image URL (jpg, png, webp, gif)";
//   }

//   return errors;
// }
