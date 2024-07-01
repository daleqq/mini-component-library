/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    '--height': 8 + 'px',
    '--radius': 4 + 'px'
  },
  medium: {
    '--height': 12 + 'px',
    '--radius': 4 + 'px'
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--radius': 8 + 'px'
  }
}

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
  /* trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.value + '%'};
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) => Math.floor(props.value / 100) * 4 + 'px'};
  border-bottom-right-radius: ${(props) => Math.floor(props.value / 100) * 4 + 'px'};
  height: 100%;
`;

const ProgressWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} style={SIZE[size]}>
    <ProgressWrapper>
      <Progress value={value} />
    </ProgressWrapper>
    <VisuallyHidden>{value}</VisuallyHidden>
  </Wrapper>;
};

export default ProgressBar;
