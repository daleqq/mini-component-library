import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  position: relative;
  display: block;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  height: ${24 / 16}rem;
  border: none;
  padding-left: 24px;
  font-weight: 700;
  color: inherit;
  width: var(--width);
  border-bottom: var(--borderBottom);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const STYLES = {
  small: {
    '--borderBottom': '1px solid black',
    '--fontSize': '14px'
  },
  large: {
    '--borderBottom': '2px solid black',
    '--fontSize': '18px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const currentStyle = STYLES[size];
  
  return (
    <Wrapper style={currentStyle}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': 16 + 'px'}}>
        <Icon id={icon} size={16} />
      </IconWrapper>
      <Input placeholder={placeholder} style={{'--width': width + 'px'}} />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

export default IconInput;
