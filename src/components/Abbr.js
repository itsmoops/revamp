
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalAbbr = styled.abbr`
    ${props => getStyleProps(props)}
`;

const Abbr = props => {
    return (
        <FunctionalAbbr { ...props }>
            {props.children}
        </FunctionalAbbr>
    )
};

export default Abbr;
  