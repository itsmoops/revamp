
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalStrong = styled.strong`
    ${props => getStyleProps(props)}
`;

const Strong = props => {
    return (
        <FunctionalStrong { ...props }>
            {props.children}
        </FunctionalStrong>
    )
};

export default Strong;
  