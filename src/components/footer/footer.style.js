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

import { forPhoneOnly, growStyle } from 'src/shared';
import { colors } from 'src/core';

export const FooterDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: ${colors.purple};
  border-top: 1px solid ${colors.white};

  ${forPhoneOnly} {
    height: 70px;
  }
`;

export const LinkA = styled('a')`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  ${growStyle} ${forPhoneOnly} {
    font-size: 14px;
  }
`;
