import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    
    <OtherElement>{displayedValue}
      <ButtonWrapper>
        <Icon id="chevron-down" size={16}/>
      </ButtonWrapper>  
    </OtherElement>
    </Wrapper>
    
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height:100%;
  opacity:0;
`;

const OtherElement = styled.div`
 font-size: ${16/16}rem;
 padding: 12px 16px;
 padding-right: 52px;
 color: ${COLORS.gray700};
 background-color: ${COLORS.transparentGray15};
 border-radius: 8px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top:0;
  right:0;
`;


export default Select;
