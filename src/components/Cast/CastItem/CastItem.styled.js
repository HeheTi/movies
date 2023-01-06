import styled from 'styled-components';

export const Item = styled.li`
  flex-basis: 100%;
  box-shadow: 0 -4px 3px -3px black, 0 4px 3px -3px black;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  background-color: ${p => p.theme.colors.background};
  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 16px * 1) / 2);
  }
  @media screen and (min-width: 720px) {
    flex-basis: calc((100% - 16px * 2) / 3);
  }
  @media screen and (min-width: 960px) {
    flex-basis: calc((100% - 16px * 3) / 4);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 16px * 4) / 5);
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  img {
    height: 100%;
  }
`;

export const DescWrapper = styled.div`
  padding: ${p => p.theme.space[2]}px;
`;

export const TextName = styled.p`
  text-align: center;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Text = styled.p`
  text-align: center;
`;
