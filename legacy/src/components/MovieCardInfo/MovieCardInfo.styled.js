import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
`;

export const DescrWrapper = styled.div`
  padding-top: ${p => p.theme.space[2]}px;
`;
export const Text = styled.p`
  margin-bottom: 10px;
`;
