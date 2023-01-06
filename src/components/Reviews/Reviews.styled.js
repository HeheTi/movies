import styled from 'styled-components';

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const AuthorName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
