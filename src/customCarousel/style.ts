import styled from 'styled-components';

type StyledCarouselProps = { 
  width: number;
  height: number;
};

export const StyledCarousel = styled.div<StyledCarouselProps>`
  display: flex;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
`;

export const StyledCarouselItem = styled.img<StyledCarouselProps>`
  max-width: 100%;
  height: ${({ height }) => `${height}px`};
  flex-shrink: 0;
`;

export const StyledControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const StyledPrevButton = styled(StyledControlButton)`
  left: 0;
`;

export const StyledNextButton = styled(StyledControlButton)`
  right: 0;
`;
