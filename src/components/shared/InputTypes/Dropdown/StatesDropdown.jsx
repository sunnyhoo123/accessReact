import PropTypes from 'prop-types';
import Text from '@bit/mik-technology.core.text';
import { Select } from '@chakra-ui/react';
import { statesArray } from 'constants/US-States';

import Dropdown from 'components/shared/InputTypes/Dropdown/Dropdown';
import { Wrapper, Label } from 'components/shared/InputTypes/TextField/TextField.styles';

/**
 * Represents a select dropdown in forms.
 */
function StatesDropdown({
  label,
  id,
  width,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  errorMessage = '',
  handleChange,
  handleBlur,
  value,
  ...rest
}) {
  return (
    <Dropdown
      label={label}
      id={id}
      width={width}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      errorMessage={errorMessage}
      handleChange={handleChange}
      handleBlur={handleBlur}
      value={value}
      {...rest}
    >
      {statesArray.map((state) => {
        return <option key={`state-${state}`} value={state} label={state} />;
      })}
    </Dropdown>
  );
}

StatesDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginBottom: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StatesDropdown;
