import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.title};

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.active};
    font-weight: ${p => p.theme.fontWeights.medium};
  }
`;

export const AdditionalInfoWrapper = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.text};
  }

  &::before {
    top: ${p => p.theme.space[3]}px;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const AdditionalLink = styled(NavLink)`
  display: flex;
  align-content: center;
  gap: 10px;
  color: ${p => p.theme.colors.query};

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    font-weight: ${p => p.theme.fontWeights.medium};
  }

  &.active {
    color: ${p => p.theme.colors.active};
    font-weight: ${p => p.theme.fontWeights.medium};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.query};
  }
`;
