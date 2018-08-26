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
import { withTheme } from 'emotion-theming';

import { Switch } from 'src/components';
import { ListSvg } from 'src/icons';

import {
  HeaderDiv,
  SwitchContainerDiv,
  ListSwitchControlDiv,
  ChangeColorSwitchControlDiv,
  ChangeColorsSvgContainer
} from './header.style';
import { ChangeColorsSvg } from '../../icons';

const HeaderComponent = ({
  theme,
  listChecked,
  themeChecked,
  onListChange,
  onThemeChange
}) => (
  <HeaderDiv>
    <SwitchContainerDiv>
      <ListSwitchControlDiv>
        <ListSvg color={theme.logo} />
        <Switch checked={listChecked} onChange={onListChange} />
      </ListSwitchControlDiv>
      <ChangeColorSwitchControlDiv>
        <ChangeColorsSvgContainer>
          <ChangeColorsSvg color={theme.logo} />
        </ChangeColorsSvgContainer>
        <Switch checked={themeChecked} onChange={onThemeChange} />
      </ChangeColorSwitchControlDiv>
    </SwitchContainerDiv>
  </HeaderDiv>
);

export const Header = withTheme(HeaderComponent);
