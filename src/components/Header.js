import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, showTask, status}) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={status ? "red" : "green"}
        text={status ? "Close" : "Add"}
        onClick={showTask}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

// Note: you can use CSS in JS
// const headingStyling = {
//   color: "red",
// };
