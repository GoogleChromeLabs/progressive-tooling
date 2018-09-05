import styled, { css } from 'preact-emotion';

export const TooltipWrapper = styled('div')`
  position: relative;
`;

export const TooltipSpan = styled('span')`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  position: absolute;
  width: max-content;

  ${({ pointing }) =>
    pointing === 'top left' &&
    css`
      top: -30px;
      right: 0;
    `}

  ${({ pointing }) =>
    pointing === 'top right' &&
    css`
      top: -30px;
      left: 0;
    `}

  ${({ pointing }) =>
    pointing === 'bottom left' &&
    css`
      bottom: -30px;
      right: 0;
    `}

  ${({ pointing }) =>
    pointing === 'bottom right' &&
    css`
      bottom: -30px;
      left: 0;
    `}
`;
