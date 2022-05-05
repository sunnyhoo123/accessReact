import React, { forwardRef } from 'react';
import theme from '@bit/mik-technology.core.theme';
import PropTypes from 'prop-types';
import Text from '@bit/mik-technology.core.text';
import { Input, Wrapper, Label } from './TextArea.styles';
/**
 * Represents an input in forms.
 */
function TextArea(
  {
    label,
    id,
    footnote,
    type = 'text',
    errorMessage = '',
    handleChange,
    handleBlur,
    value,
    width,
    inputHeight,
    inputRows,
    disableFields,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    maxWidth,
    ...rest
  },
  ref
) {
  return (
    <Wrapper
      width={width}
      height={inputHeight}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
    >
      {label && (
        <Label htmlFor={id} color={errorMessage}>
          {label}
        </Label>
      )}
      <Input
        id={id}
        ref={ref}
        name={id}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        width={width}
        height={inputHeight}
        rows={inputRows}
        disabled={disableFields}
        borderColor={errorMessage}
        {...rest}
      />
      {footnote && (
        <Text size="small" color={theme.colors.gray['600']} pl="16px">
          {footnote}
        </Text>
      )}
      <Text size="small" color="semantics.error" pl="16px">
        {errorMessage}
      </Text>
    </Wrapper>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  footnote: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  inputHeight: PropTypes.number,
  inputRows: PropTypes.number,
  marginRight: PropTypes.string,
  disableFields: PropTypes.bool,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginBottom: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default forwardRef(TextArea);
