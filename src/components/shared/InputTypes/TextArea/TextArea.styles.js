import styled from '@emotion/styled/macro';
import theme from '@bit/mik-technology.core.theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth || 'unset'};
  width: ${(props) => (props.width ? props.width : 'unset')};
  height: ${(props) => (props.height ? props.height : '170px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '16px')};

  &.states {
    width: ${(props) => (props.width ? props.width : '100px')};
  }
`;

export const Input = styled.textarea`
  border: 1px solid;
  width: ${(props) => (props.width ? props.width : '300px')};
  height: ${(props) => (props.height ? `${props.height}px` : '130px')};
  border-radius: 4px;
  padding: 14px 16px 14px 16px;
  margin-top: 4px;
  margin-bottom: 4px;
  resize: none;
  border-color: ${(props) =>
    props.borderColor
      ? `${theme.colors.semantics.error}`
      : `${theme.colors.semantics.default}`};
  &:focus {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    border-width: 2px;
  }
  &:disabled {
    border-color: ${theme.colors.gray['300']};
    background-color: ${theme.colors.gray['0']};
    color: ${theme.colors.gray['300']};
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 12px;
  padding: 0px 0px 0px 16px;
  color: ${(props) =>
    props.color
      ? `${theme.colors.semantics.error}`
      : `${theme.colors.semantics.default}`};
`;
