import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

function Form2({ user, setUser }) {
  return (
    <div>
      <TextField
        fullWidth
        required
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <TextField
        fullWidth
        multiline
        required
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />
    </div>
  );
}

Form2.propTypes = {
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

export default Form2;
