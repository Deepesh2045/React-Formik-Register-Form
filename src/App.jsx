import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { validationSchema } from "../Validation";
import * as Yup from "yup";
import "./App.css";

const App = () => {
  // For Password function
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [selectedValue, setSelectedValue] = useState("");

  // For Gender Function
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          gender: "",
          location: "",
          role: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              width: "400px",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              background: "white",
              padding: "2rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#E65100", fontWeight: "bold" }}
            >
              Register
            </Typography>

            {/* Email */}
            <FormControl>
              <TextField
                color="warning"
                size="small"
                label="Email"
                {...formik.getFieldProps("email")}
              ></TextField>
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            {/* First Name */}
            <FormControl>
              <TextField
                color="warning"
                size="small"
                label="First Name"
                {...formik.getFieldProps("firstName")}
              ></TextField>
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>
            {/* Last Name */}
            <FormControl>
              <TextField
                color="warning"
                size="small"
                label="Last Name"
                {...formik.getFieldProps("lastName")}
              ></TextField>
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>
            {/* For Password */}
            <FormControl size="small" color="warning">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...formik.getFieldProps("password")}
                label="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            {/* For Confirm Password */}
            <FormControl size="small" color="warning">
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{ background: "white" }}
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...formik.getFieldProps("confirmPassword")}
                label="Password"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <FormHelperText error>
                  {formik.errors.confirmPassword}
                </FormHelperText>
              ) : null}
            </FormControl>
            {/* For Gender */}
            <FormControl size="small" color="warning">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                color="warning"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={handleChange}
                {...formik.getFieldProps("gender")}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>
            {/* For Location */}
            <FormControl>
              <TextField
                color="warning"
                size="small"
                label="Location"
                {...formik.getFieldProps("location")}
              ></TextField>
              {formik.touched.location && formik.errors.location ? (
                <FormHelperText error>{formik.errors.location}</FormHelperText>
              ) : null}
            </FormControl>
            {/* For Role */}
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label" color="warning">
                Role
              </InputLabel>
              <Select
                color="warning"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="role"
                onChange={handleChange}
                {...formik.getFieldProps("role")}
              >
                <MenuItem value={"Buyer"}>Buyer</MenuItem>
                <MenuItem value={"Seller"}>Seller</MenuItem>
              </Select>
              {formik.touched.role && formik.errors.role ? (
                <FormHelperText error>{formik.errors.role}</FormHelperText>
              ) : null}
            </FormControl>
            {/* Sign Up Button */}
            <Button type="submit" variant="contained" color="warning">
              Sign Up
            </Button>
            <Typography
              color="primary"
              sx={{ textDecoration: "underline", color: "black" }}
            >
              Already register? Login
            </Typography>
          </form>
        )}
      </Formik>
    </>
  );
};

export default App;
