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

import { h } from 'preact';

import { IconWrapper } from './icon-wrapper';

export const LaptopSvg = ({ size, color = '#000000' }) => (
  <IconWrapper size={size} viewBox="0 0 24 21">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <g>
      <path
        fill={color}
        d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"
      />
    </g>
  </IconWrapper>
);
