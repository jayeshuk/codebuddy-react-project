import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

function Form1({ user, setUser }) {
  return (
    <div>
      <TextField
        fullWidth
        required
        id="outlined-basic"
        label="Email Id"
        variant="outlined"
        value={user.emailId}
        onChange={(e) => setUser({ ...user, emailId: e.target.value })}
      />
      <TextField
        fullWidth
        required
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
    </div>
  );
}

Form1.propTypes = {
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

export default Form1;
