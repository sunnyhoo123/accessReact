import React from "react";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Input, Wrapper, Label, IconWrapper } from "./TextField.styles";
/**
 * Represents an input in forms.
 */
function TextField(
  {
    label,
    footnote,
    customFootnote = null,
    id,
    type = "text",
    errorIcon = null,
    errorMessage = "",
    handleChange,
    handleBlur,
    value,
    width,
    minHeight,
    maxWidth,
    disableFields,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    justifyContent,
    labelPadding,
    inputPadding,
    textAlign,
    icon,
    iconWidth,
    iconClick = () => {},
    leftAligned,
    hideFootnoteOnError = false,
    iconZindex = 2,
    maxLength = 1000,
    SignInEmail,
    ...rest
  },
  ref
) {
  return (
    <Wrapper
      width={width}
      maxWidth={maxWidth}
      minHeight={minHeight}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      justifyContent={justifyContent}
    >
      {label && (
        <Label padding={labelPadding} htmlFor={id} color={errorMessage}>
          {label}
        </Label>
      )}
      <InputGroup>
        <Input
          id={id}
          ref={ref}
          name={id}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          disabled={disableFields}
          borderColor={errorMessage}
          textAlign={textAlign}
          padding={inputPadding}
          maxLength={maxLength}
          {...rest}
          style={{
            backgroundColor: SignInEmail && value ? "#EAEAEA" : "",
          }}
        />
        {icon && (
          <IconWrapper>
            {!leftAligned ? (
              <InputRightElement
                top="unset"
                width={iconWidth || "4.5rem"}
                height="3.25rem"
                onClick={(e) => {
                  iconClick(e);
                }}
                zIndex={iconZindex}
              >
                {icon}
              </InputRightElement>
            ) : (
              <InputLeftElement
                top="unset"
                width="3.5rem"
                height="3.25rem"
                pr="56px"
                onClick={(e) => {
                  iconClick(e);
                }}
              >
                {icon}
              </InputLeftElement>
            )}
          </IconWrapper>
        )}
      </InputGroup>
      {!customFootnote && footnote && !(hideFootnoteOnError && errorMessage) && (
        <Text size="small" color="#757575" pl="16px">
          {footnote}
        </Text>
      )}
      {!footnote && !(hideFootnoteOnError && errorMessage) && customFootnote}
      <Flex alignItems="center" color="#EB003B" pl={errorIcon ? "0px" : "12px"}>
        {errorMessage && errorIcon}
        <Text size="small" wordBreak="normal">
          {errorMessage}
        </Text>
      </Flex>
    </Wrapper>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  footnote: PropTypes.string,
  customFootnote: PropTypes.node,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  errorIcon: PropTypes.node,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  justifyContent: PropTypes.string,
  minHeight: PropTypes.string,
  marginRight: PropTypes.string,
  disableFields: PropTypes.bool,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginBottom: PropTypes.string,
  textAlign: PropTypes.string,
  inputPadding: PropTypes.string,
  labelPadding: PropTypes.string,
  icon: PropTypes.node,
  iconWidth: PropTypes.string,
  iconClick: PropTypes.func,
  hideFootnoteOnError: PropTypes.bool,
  leftAligned: PropTypes.bool,
  iconZindex: PropTypes.string,
  maxLength: PropTypes.number,
};

export default forwardRef(TextField);
