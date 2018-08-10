
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMark = styled.mark`
    ${props => getStyleProps(props)}
`;

const Mark = props => {
    return (
        <FunctionalMark { ...props }>
            {props.children}
        </FunctionalMark>
    )
};

export default Mark;
  