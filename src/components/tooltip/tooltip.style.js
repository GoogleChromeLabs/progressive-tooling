import styled from 'preact-emotion';

export const TooltipWrapper = styled('div')`
  position: relative;
`;

export const TooltipSpan = styled('span')`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  left: 0;
  padding: 6px 12px;
  position: absolute;
  top: -30px;
  width: max-content;
`;
