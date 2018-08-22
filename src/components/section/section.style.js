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
  forTabletLandscapeUp,
  forDesktopUp,
  containerStyle
} from 'src/shared';

export const ContainerSection = styled('section')`
  background-color: ${props => props.backgroundColor};
  border-bottom: ${props =>
    props.theme.name === 'primary'
      ? `5px solid ${props.theme.border}`
      : `2px solid ${props.theme.border}`};
  ${containerStyle};
`;

export const SectionHeadingH2 = styled('h2')`
  font-kerning: normal;
  display: block;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: ${props => props.theme.primary};
  line-height: 1.222;
  font-weight: 600;

  ${forPhoneOnly} {
    font-size: 22px;
    text-align: center;
  }

  ${forTabletPortraitUp} {
    font-size: 1.8rem;
  }

  ${forTabletLandscapeUp} {
    font-size: 2rem;
  }

  ${forDesktopUp} {
    width: 60%;
  }
`;

export const SectionSubHeadingP = styled('p')`
  margin-bottom: 0.83333em;
  display: block;
  font-size: 22px;
  margin-bottom: 0.9em;
  color: ${props => props.theme.primary};
  line-height: 1.5;

  ${forPhoneOnly} {
    font-size: 16px;
    text-align: center;
  }

  ${forDesktopUp} {
    width: 60%;
  }
`;

export const ContentContainerDiv = styled('div')`
  margin-top: 6em;

  ${forPhoneOnly} {
    margin-top: 4em;
  }
`;
