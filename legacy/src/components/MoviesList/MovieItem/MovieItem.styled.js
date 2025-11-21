import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  transition: transform 250ms ease-in;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  :hover,
  :focus {
    transform: scale3d(0.98, 0.98, 0.98);
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  gap: ${p => p.theme.space[2]}px;

  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  width: 150px;
  height: auto;
  flex-shrink: 0;
`;

export const DescriptionWrapper = styled.div`
  padding: ${p => p.theme.space[2]}px;
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.title};
`;
export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
