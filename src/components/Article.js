
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalArticle = styled.article`
    ${props => getStyleProps(props)}
`;

const Article = props => {
    return (
        <FunctionalArticle { ...props }>
            {props.children}
        </FunctionalArticle>
    )
};

export default Article;
  