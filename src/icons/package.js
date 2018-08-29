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

export const PackageSvg = ({ size, viewBox, color = '#000000' }) => (
  <IconWrapper size={size} viewBox={viewBox}>
    <path
      fill={color}
      d="M480 64L0 192v576l480 128 480-128V192L480 64zM63.875 720.934L63.5 288l384.498 102.533.001 432.833L63.875 720.934zM63.5 224l160.254-42.734L640 292.265v.135l-160 42.667L63.5 224zm832.625 496.934L512.001 823.366l.001-432.833L640 356.4v156l128-34.135V322.267L896.5 288l-.375 432.934zM768 258.267v-.125L351.734 147.138 480 112.934 896.5 224 768 258.267z"
    />
  </IconWrapper>
);
