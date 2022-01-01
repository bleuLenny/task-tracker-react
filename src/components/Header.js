import Button from "./Button";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
     { location.pathname === '/' && <Button
        color={showAdd ? "black" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task  tracker", //Sets default prop
};

Header.propTypes = {
  title: PropTypes.string, //Sets type of title to a string
};

//Example of using CSS inside js
// const headingStyle = {
//   color: "blue",
//   backgroundColor: "red",
// };

export default Header;
