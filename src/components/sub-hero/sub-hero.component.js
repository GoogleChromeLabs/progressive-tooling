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

import { ContainerDiv, ToolTypeDiv, ToolTypeP } from './sub-hero.style';
import {
  CheckSvg,
  CodeSvg,
  LaptopSvg,
  PackageSvg,
  TerminalSvg
} from 'src/icons';

const SubHeroComponent = ({
  theme,
  backgroundColor = theme.backgroundPrimary
}) => (
  <ContainerDiv backgroundColor={backgroundColor}>
    <ToolTypeDiv>
      <PackageSvg size={80} viewBox="0 0 1000 900" color={theme.tertiary} />
      <ToolTypeP>Package</ToolTypeP>
    </ToolTypeDiv>
    <ToolTypeDiv>
      <TerminalSvg size={80} viewBox="0 0 14 16" color={theme.tertiary} />
      <ToolTypeP>CLI</ToolTypeP>
    </ToolTypeDiv>
    <ToolTypeDiv>
      <CheckSvg size={80} color={theme.tertiary} />
      <ToolTypeP>CI</ToolTypeP>
    </ToolTypeDiv>
    <ToolTypeDiv>
      <CodeSvg size={78} color={theme.tertiary} />
      <ToolTypeP>
        API
        <br />
        (Web/Server)
      </ToolTypeP>
    </ToolTypeDiv>
    <ToolTypeDiv>
      <LaptopSvg size={80} color={theme.tertiary} />
      <ToolTypeP>Website/GUI</ToolTypeP>
    </ToolTypeDiv>
  </ContainerDiv>
);

export const SubHero = withTheme(SubHeroComponent);
