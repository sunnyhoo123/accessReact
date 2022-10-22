import React from "react";
import PropTypes from "prop-types";
import theme from "@bit/mik-technology.core.theme";
import Text from "@bit/mik-technology.core.text";
import { IconCaretDown } from "@tabler/icons";
import {
  Wrapper,
  Label,
  StyledSelect,
} from "components/shared/InputTypes/TextField/TextField.styles";
/**
 * Represents a select dropdown in forms.
 */
function Dropdown({
  label,
  id,
  errorMessage = "",
  handleChange,
  handleBlur,
  value,
  width,
  border,
  maxWidth,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  minHeight,
  ...rest
}) {
  return (
    <Wrapper
      width={width}
      maxWidth={maxWidth}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      minHeight={minHeight}
    >
      <Label htmlFor={id} color={errorMessage}>
        {label}
      </Label>
      <StyledSelect
        icon={<IconCaretDown fill={theme.colors.semantics.default} size={20} />}
        id={id}
        name={id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        border={border}
        borderColor={errorMessage ? "semantics.error" : "semantics.default"}
        // iconColor={errorMessage ? 'semantics.error' : 'semantics.default'}
        iconColor={theme.colors.semantics.default}
        isTruncated
        {...rest}
      />
      <Text size="small" color="semantics.error" pl="16px">
        {errorMessage}
      </Text>
    </Wrapper>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  border: PropTypes.string,
  maxWidth: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginBottom: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  minHeight: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dropdown;
