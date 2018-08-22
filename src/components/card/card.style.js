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
  border: 2px solid ${props => props.theme.secondary};

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
  color: ${props => props.theme.secondary};
  overflow-wrap: break-word;
  text-decoration: none;
  border-bottom: ${props => `2px solid ${props.theme.secondary}`};
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

export const LinkA = styled('a')`
  position: absolute;
  background-color: ${props => props.theme.secondary};
  border: none;
  color: ${props => props.theme.tertiary};
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: ${props => (props.show ? 'inline-block' : 'none')};
  font-size: 14px;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  ${growStyle} ${forPhoneOnly} {
    position: initial;
    width: 100px;
  }
`;
