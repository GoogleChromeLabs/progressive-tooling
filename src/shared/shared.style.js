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

import { css } from 'emotion';

import {
  forPhoneOnly,
  forTabletPortraitUp,
  forTabletLandscapeUp,
  forDesktopUp,
  forLargeDesktopUp
} from './spacing.style';

export const containerStyle = css`
  margin-left: auto;
  margin-right: auto;

  ${forPhoneOnly} {
    padding: 4rem 3rem;

    &:first-of-type {
      padding: 8rem 3rem 4rem;
    }
  }

  ${forTabletPortraitUp} {
    padding: 7rem 3rem;
  }

  ${forTabletLandscapeUp} {
    padding: 7rem 3rem;
  }

  ${forDesktopUp} {
    padding: 8rem 6rem;
  }

  ${forLargeDesktopUp} {
    padding: 8rem 8rem;
  }
`;

export const growStyle = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: -webkit-transform .25s ease-out;
  transition: -webkit-transform .25s ease-out;
  transition: transform .25s ease-out;
  transition: transform .25s ease-out, -webkit-transform .25s ease-out; }

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
