import PropTypes from "prop-types";
function ErrorLine({ text }) {
  return (
    <div>
      <p style={styles.error}>{text}</p>
    </div>
  );
}

const styles = {
  error: {
    color: "red",
  },
};

ErrorLine.propTypes = {
  text: PropTypes.string,
};

export default ErrorLine;
