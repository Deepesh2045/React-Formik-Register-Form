import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required.").trim(),
  firstName: Yup.string()
    .required("First name is required.")
    .trim()
    .max(55, "First name must be at 55 character."),
  lastName: Yup.string()
    .required("Last name is required.")
    .trim()
    .max(55, "Last name must be at 55 character."),
  password: Yup.string().required("Password is required.").trim(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required."),
  gender: Yup.string().required("Gender is required."),
  location: Yup.string().required("Location is required.").trim(),
  role: Yup.string().required("Role is required"),
});
