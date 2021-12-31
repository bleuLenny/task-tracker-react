import Button from "./Button";
import { PropTypes } from "prop-types";
const Header = ({ title }) => {
    const onClick = () =>{ //Will toggle form later on
        console.log('Inside Header ') 
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick= {onClick} />
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
