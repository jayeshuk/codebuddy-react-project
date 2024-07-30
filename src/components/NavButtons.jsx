import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavButtons({ user, setUser, formIndex, handleChange, handleValidation }) {
  const navigate = useNavigate();

  const submitFormDetails = async (formData) => {
    const validation = handleValidation(formData, "form" + formIndex);

    if (!validation.isValid) {
      console.error("Validation errors:", validation.errors);
      return;
    }

    if (formIndex === 3) {
      try {
        const response = await axios.post("https://codebuddy.review/submit", formData);
        if (response.data) {
          setUser({
            emailId: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            countryCode: "",
            phoneNumber: "",
            acceptTermsAndCondition: false,
          });
          handleChange({}, 0);
          navigate("/posts");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Stack spacing={2} direction="row">
        {formIndex !== 1 && (
          <Button variant="text" onClick={() => handleChange({}, formIndex - 1)}>
            Back
          </Button>
        )}
        <Button variant="contained" onClick={() => submitFormDetails(user)}>
          Save
        </Button>
        {formIndex !== 3 && (
          <Button
            variant="outlined"
            onClick={() => {
              const validation = handleValidation(user, "form" + formIndex);

              if (!validation.isValid) {
                console.error("Validation errors:", validation.errors);
                return;
              }

              handleChange({}, formIndex);
            }}
          >
            Save and Next
          </Button>
        )}
      </Stack>
    </div>
  );
}

NavButtons.propTypes = {
  user: PropTypes.shape({
    emailId: PropTypes.string,
    password: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    countryCode: PropTypes.string,
    phoneNumber: PropTypes.string,
    acceptTermsAndCondition: PropTypes.bool,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
  formIndex: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
};

export default NavButtons;
