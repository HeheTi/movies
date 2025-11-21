import styled from 'styled-components';

export const TextInfo = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;

  span {
    color: ${p => p.theme.colors.query};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
