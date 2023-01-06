import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.query};
  }

  &.active {
    color: ${p => p.theme.colors.active};
  }
`;
