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
  containerStyle,
  forPhoneOnly,
  forTabletPortraitOnly,
  forTabletLandscapeOnly
} from 'src/shared';

export const ContainerDiv = styled('div')`
  background-color: ${props => props.backgroundColor};
  border-bottom: ${props =>
    props.theme.name === 'primary'
      ? `5px solid ${props.theme.border}`
      : `2px solid ${props.theme.border}`};
  display: flex;
  justify-content: space-around;
  ${containerStyle};

  &:first-of-type {
    border-right: ${props =>
      props.theme.name === 'primary'
        ? `5px solid ${props.theme.border}`
        : `2px solid ${props.theme.border}`};
  }

  ${forPhoneOnly} {
    display: none;
  }
`;

export const ToolTypeDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 200px;
  max-width: 200px;

  ${forTabletPortraitOnly} {
    min-height: 150px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  ${forTabletLandscapeOnly} {
    min-height: 175px;

    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ToolTypeP = styled('p')`
  color: ${props => props.theme.primary};
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  text-align: center;

  ${forTabletPortraitOnly} {
    font-size: 16px;
  }

  ${forTabletLandscapeOnly} {
    font-size: 18px;
  }
`;
