
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalRadialGradient = styled.radialGradient`
    ${props => getStyleProps(props)}
`;

const RadialGradient = props => {
    return (
        <FunctionalRadialGradient { ...props }>
            {props.children}
        </FunctionalRadialGradient>
    )
};

export default RadialGradient;
  