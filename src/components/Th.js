
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalTh = styled.th`
    ${props => getStyleProps(props)}
`;

const Th = props => {
    return (
        <FunctionalTh { ...props }>
            {props.children}
        </FunctionalTh>
    )
};

export default Th;
  