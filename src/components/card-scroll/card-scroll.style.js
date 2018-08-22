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

import { forPhoneOnly } from 'src/shared';

export const ScrollContainerDiv = styled('div')`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  min-width: 103%;
  -webkit-overflow-scrolling: touch;
  -webkit-scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
  -webkit-scroll-snap-points-x: repeat(100%);
  scroll-snap-points-x: repeat(100%);
  padding: 0 0 30px 0;

  ${forPhoneOnly} {
    min-width: 110%;
  }
`;

export const ContainerDiv = styled('div')`
  display: flex;
  flex-direction: column;
`;
