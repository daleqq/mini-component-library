import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Selection = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const Chevron = styled(Icon)`
  margin-left: 24px;
`;
const DisplayValue = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: ${COLORS.gray700};

  ${Selection}:focus + & {
    outline: 2px solid -webkit-focus-ring-color;
  }

  ${Selection}:hover + &  {
    color: ${COLORS.black};
  }
`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selection value={value} onChange={onChange}>
        {children}
      </Selection>
      <DisplayValue>
        {displayedValue}
        <Chevron id='chevron-down' />
      </DisplayValue>
      
    </Wrapper>
  );
};

export default Select;
