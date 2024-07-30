import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Form3({ user, setUser }) {
  const handleDropdown = (e) => {
    setUser({ ...user, countryCode: e.target.value });
  };

  const handleTerms = (e) => {
    setUser({ ...user, acceptTermsAndCondition: JSON.parse(e.target.checked) });
  };

  const handlePhone = (e) => {
    if (e.target.value.length < 11)
      setUser({ ...user, phoneNumber: e.target.value.replace(/[^0-9]/g, "") });
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user.countryCode}
          label="Select"
          onChange={handleDropdown}
        >
          <MenuItem value={"+91"}>+91</MenuItem>
          <MenuItem value={"+1"}>+1</MenuItem>
        </Select>
        <TextField
          fullWidth
          required
          type="tel"
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={user.phoneNumber}
          onChange={handlePhone}
        />
      </div>
      <FormControlLabel
        required
        control={<Checkbox value={user.acceptTermsAndCondition} onChange={handleTerms} />}
        label="I accept the terms and conditions"
      />
    </div>
  );
}

Form3.propTypes = {
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
};

export default Form3;
