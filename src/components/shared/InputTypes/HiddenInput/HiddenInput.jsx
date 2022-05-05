import { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '@bit/mik-technology.core.text';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { IconEye, IconEyeOff } from '@tabler/icons';
import theme from '@bit/mik-technology.core.theme';
import {
  Input,
  Wrapper,
  Label,
} from 'components/shared/InputTypes/TextField/TextField.styles';
/**
 * Similar to TextField.
 * Represents an input in forms that hides input unless the eyeball is clicked.
 */
function HiddenInput({
  label,
  id,
  showDefault = false,
  errorMessage = '',
  handleChange,
  handleBlur,
  value,
  width,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  SignInPassword,
  ...rest
}) {
  const [show, setShow] = useState(showDefault);
  const handleClick = () => setShow(!show);
  return (
    <Wrapper
      width={width}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      {...rest}
    >
      <Label htmlFor={id} color={errorMessage}>
        {label}
      </Label>
      <InputGroup>
        <Input
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
          id={id}
          name={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          borderColor={errorMessage}
          {...rest}
          style={{
            backgroundColor: SignInPassword && value ? theme.colors.gray['200'] : '',
          }}
        />
        <InputRightElement width="4.5rem" height="3.5rem">
          {show ? (
            <IconEye onClick={handleClick} cursor="pointer" />
          ) : (
            <IconEyeOff onClick={handleClick} cursor="pointer" />
          )}
        </InputRightElement>
      </InputGroup>
      <Text size="small" color="semantics.error" pl="16px">
        {errorMessage}
      </Text>
    </Wrapper>
  );
}

HiddenInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  showDefault: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginLeft: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default HiddenInput;
