
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalOption = styled.option`
    ${props => getStyleProps(props)}
`;

const Option = props => {
    return (
        <FunctionalOption { ...props }>
            {props.children}
        </FunctionalOption>
    )
};

export default Option;
  