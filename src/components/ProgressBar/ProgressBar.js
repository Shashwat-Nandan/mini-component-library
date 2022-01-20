/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    "--height": 24 + "px",
    "--width": 370 + "px",
    "--borderRadius": 8 + "px"
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
  return <ButtonBase style={style}><FIllButton /></ButtonBase>;
};

const ButtonBase = styled.div`
  width: 370px;
  border: 1px solid ${COLORS.transparentGray15};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const FIllButton = styled(ButtonBase)`
  width: 185px;
  background-color: ${COLORS.primary};
  padding: 2px;
`;

export default ProgressBar;
