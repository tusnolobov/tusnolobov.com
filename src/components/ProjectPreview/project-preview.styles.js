import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const Container = styled.article`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'preview'
    'info';

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: 1fr;
    gap: 2.4rem;
    grid-template-areas:
      'preview info'
      'preview info';
  }
`;

export const Preview = styled(Img)`
  grid-area: preview;

  width: 100%;
  border-radius: 0.4rem;
`;
export const PreviewSvg = styled.img`
  grid-area: preview;

  width: 100%;
  border-radius: 0.4rem;
`;

export const Info = styled.section`
  grid-area: info;

  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 0;
  justify-items: flex-start;
`;

export const Title = styled.h2`
  margin-top: -0.25em;
  margin-bottom: 0.2em;
  word-break: break-word;
`;

export const Meta = styled.small`
  padding: 0.2rem 1rem;
  margin-bottom: calc(1em / 0.75 * 1.5);
  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.2rem;
`;

export const StyledLink = styled.a`
  padding: 0.8rem 2.4rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  border-radius: 0.4rem;

  & i {
    transition: transform 0.2s ease;
  }

  &:hover i {
    display: inline-block;
    transform: translate(0.8rem, -0.1rem);
  }

  &:after {
    background-color: transparent;
  }
`;
