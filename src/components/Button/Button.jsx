import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ children, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
