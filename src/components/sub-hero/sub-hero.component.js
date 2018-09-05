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

import { h, createElement } from 'preact';
import { withTheme } from 'emotion-theming';

import { ContainerDiv, ToolTypeDiv, ToolTypeP } from './sub-hero.style';
import {
  CheckSvg,
  CodeSvg,
  FrameworkSvg,
  LaptopSvg,
  PackageSvg,
  TerminalSvg
} from 'src/icons';
import TOOL_TYPES from 'src/tools/types';

const ICONS = {
  api: CodeSvg,
  CI: CheckSvg,
  CLI: TerminalSvg,
  dependency: PackageSvg,
  external: LaptopSvg,
  framework: FrameworkSvg
};

const ICON_VIEW_BOX = {
  CLI: '0 0 14 16',
  dependency: '0 0 1000 900'
};

const toolTypeIcon = ({ path, theme }) => {
  const element = ICONS[path];
  const props = {
    viewBox: ICON_VIEW_BOX[path],
    size: 80,
    color: theme
  };

  return createElement(element, props, null);
};

const SubHeroComponent = ({
  theme,
  backgroundColor = theme.backgroundPrimary
}) => (
  <ContainerDiv backgroundColor={backgroundColor}>
    {Object.values(TOOL_TYPES).map(({ key, path, title }) => (
      <ToolTypeDiv key={key}>
        {toolTypeIcon({ theme: theme.tertiary, path })}
        <ToolTypeP>{title}</ToolTypeP>
      </ToolTypeDiv>
    ))}
  </ContainerDiv>
);

export const SubHero = withTheme(SubHeroComponent);
