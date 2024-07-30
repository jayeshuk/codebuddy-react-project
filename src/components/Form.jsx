import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import NavButtons from "./NavButtons";
import { Form1Schema, Form2Schema, Form3Schema } from "../utilities/validationSchema";
import ErrorLine from "./ErrorLine";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });
  const [errors, setErrors] = useState([]);

  const handleValidation = (formData, currentForm) => {
    let schema;

    switch (currentForm) {
      case "form1":
        schema = Form1Schema;
        break;
      case "form2":
        schema = Form2Schema;
        break;
      case "form3":
        schema = Form3Schema;
        break;
      default:
        throw new Error("Unknown form");
    }

    try {
      schema.parse(formData);
      setErrors([]);
      return { isValid: true, errors: null };
    } catch (error) {
      setErrors(error.errors);
      return { isValid: false, errors: error.errors };
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Form 1" {...a11yProps(0)} />
          <Tab label="Form 2" {...a11yProps(1)} />
          <Tab label="Form 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Form1 user={user} setUser={setUser} />
        {errors?.map((error, index) => (
          <ErrorLine key={index} text={error.message} />
        ))}
        <NavButtons
          user={user}
          setUser={setUser}
          formIndex={1}
          handleChange={handleChange}
          handleValidation={handleValidation}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Form2 user={user} setUser={setUser} />
        {errors?.map((error, index) => (
          <ErrorLine key={index} text={error.message} />
        ))}
        <NavButtons
          user={user}
          setUser={setUser}
          formIndex={2}
          handleChange={handleChange}
          handleValidation={handleValidation}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Form3 user={user} setUser={setUser} />
        {errors?.map((error, index) => (
          <ErrorLine key={index} text={error.message} />
        ))}
        <NavButtons
          user={user}
          setUser={setUser}
          formIndex={3}
          handleChange={handleChange}
          handleValidation={handleValidation}
        />
      </CustomTabPanel>
    </Box>
  );
}
