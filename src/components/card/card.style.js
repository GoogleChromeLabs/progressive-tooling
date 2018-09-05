/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import styled from 'preact-emotion';

import {
  forPhoneOnly,
  forTabletPortraitUp,
  forSmallDesktopUp,
  forDesktopUp,
  forLargeDesktopUp,
  growStyle
} from 'src/shared';

export const cardsInViewportPhone = 1;
export const cardsInViewportTablet = 2;
export const cardsInViewportSmallDesktop = 3;
export const cardsInViewportDesktop = 4;

export const CardContainerDiv = styled('div')`
  background: ${props => props.theme.backgroundPrimary};
  padding: 20px;
  margin: ${props => props.fullCard && '0 0 30px'};
  border-radius: 5px;
  height: ${props => !props.fullCard && '200px'};
  min-width: 400px;
  width: 400px;
  position: relative;
  border: 2px solid ${props => props.theme.backgroundSecondary};
  display: ${props => props.fullCard && 'flex'};
  justify-content: ${props => props.fullCard && 'space-between'};
  align-items: ${props => props.fullCard && 'center'};

  ${forPhoneOnly} {
    margin: ${props => !props.fullCard && '0 10px'};
    height: ${props => !props.fullCard && '250px'};
    min-width: ${props =>
    !props.fullCard
      ? `calc(100vw - 7rem / ${cardsInViewportPhone})`
      : '100%'};
    width: ${props =>
    !props.fullCard
      ? `calc(100vw - 7rem / ${cardsInViewportPhone})`
      : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  ${forTabletPortraitUp} {
    margin-right: ${props => !props.fullCard && '20px'};
    min-width: ${props =>
    !props.fullCard
      ? `calc((100vw - 6rem - 35px) / ${cardsInViewportTablet})`
      : '100%'};
    width: ${props =>
    !props.fullCard
      ? `calc((100vw - 6rem - 35px) / ${cardsInViewportTablet})`
      : '100%'};
  }

  ${forSmallDesktopUp} {
    margin-right: ${props => !props.fullCard && '30px'};
    min-width: ${props =>
    !props.fullCard
      ? `calc((100vw - 6rem - 80px) / ${cardsInViewportSmallDesktop})`
      : '100%'};
    width: ${props =>
    !props.fullCard
      ? `calc((100vw - 6rem - 80px) / ${cardsInViewportSmallDesktop})`
      : '100%'};
  }

  ${forDesktopUp} {
    margin-right: ${props => !props.fullCard && '30px'};
    min-width: ${props =>
    !props.fullCard
      ? `calc((100vw - 12rem - 110px) / ${cardsInViewportDesktop})`
      : '100%'};
    width: ${props =>
    !props.fullCard
      ? `calc((100vw - 12rem - 110px) / ${cardsInViewportDesktop})`
      : '100%'};
  }

  ${forLargeDesktopUp} {
    margin-right: ${props => !props.fullCard && '30px'};
    min-width: ${props =>
    !props.fullCard
      ? `calc((100vw - 12rem - 160px) / ${cardsInViewportDesktop})`
      : '100%'};
    width: ${props =>
    !props.fullCard
      ? `calc((100vw - 12rem - 160px) / ${cardsInViewportDesktop})`
      : '100%'};
  }
`;

export const DescriptionDiv = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const CardHeaderDiv = styled('div')`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${props => (props.extraSpacing ? '20px' : '15px')};

  ${forPhoneOnly} {
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const TitleA = styled('a')`
  font-size: ${props => (props.large ? '24px' : '18px')};
  margin: 0;
  font-weight: 600;
  color: ${props => props.theme.backgroundSecondary};
  overflow-wrap: break-word;
  text-decoration: none;
  border-bottom: ${props => `2px solid ${props.theme.backgroundSecondary}`};
  ${growStyle};
`;

export const ContentDiv = styled('div')`
  font-size: ${props => (props.large ? '19px' : '16px')};
  font-weight: 500;
  color: ${props => props.theme.primary};

  ${forPhoneOnly} {
    text-align: center;
  }
`;

export const InfoDiv = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${forTabletPortraitUp} {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 15px;
  }
`;

export const IconsDiv = styled('div')`
  display: flex;
  align-items: center;
`;

export const InfoIconsDiv = styled(IconsDiv)`
  div {
    margin-right: 10px;
  }
`;

export const InfoDivLarge = styled(IconsDiv)`
  div {
    margin-left: 15px;
  }
`;

export const LinkA = styled('a')`
  background-color: ${props => props.theme.tertiary};
  border: none;
  color: ${props => props.theme.secondary};
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  ${growStyle} ${forPhoneOnly} {
    position: initial;
    width: 100px;
  }
`;
