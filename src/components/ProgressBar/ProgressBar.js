/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    "--height": 24 + "px",
    "--width": 370 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px"
  },
  medium:{
    "--height": 12 + "px",
    "--width": 370 + "px",
    "--borderRadius": 4 + "px"
  },
  small: {
    "--height": 8 + "px",
    "--width": 370 + "px",
    "--borderRadius": 4 + "px"
  }
};

const ProgressBar = ({ value, size }) => {

  let style = SIZES[size];
  return <Wrapper style={style}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100">
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Bar style={{'--width': value + '%'}}/>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  border: 1px solid ${COLORS.transparentGray15};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  height: inherit;
  border-radius:4px 0 0 4px;
`;

export default ProgressBar;
