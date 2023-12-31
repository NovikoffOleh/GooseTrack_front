import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const TaskToolbarStyled = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  top: 75px;
  gap: 15px;
  flex-direction: row;
`;

export const TaskToolbarBtn = styled.button``;

export const Svg = styled.svg`
  width: 14px;
  height: 14px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.textAndIconTodo};
  transition-property: stroke;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }
  @media ${device.tablet} {
    width: 16px;
    height: 16px;
  }
`;

export const TaskModalChangeStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 14px;
  position: absolute;
  top: 10%;
  left: 20%;
  transform: translate(-50%, 30%);
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  width: 115px;
  height: 70px;
  z-index: 10;
  box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.borderDefaultColor};
  border-radius: 8px;
  @media ${device.tablet} {
    width: 147px;
    height: 90px;
    padding: 20px 24px;
  }
`;

export const TaskModalChangeStatusBtn = styled.button`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

export const TaskModalChangeStatusBtnElem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

export const StateStatus = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.2;
  }
`;
