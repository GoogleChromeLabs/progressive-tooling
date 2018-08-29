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

import {
  ContainerDiv,
  TitleH1,
  LogoContainerDiv,
  DescriptionP
} from './hero.style';
import { LogoSvg } from 'src/icons';

const HeroComponent = ({
  theme,
  backgroundColor = theme.backgroundPrimary
}) => (
  <ContainerDiv backgroundColor={backgroundColor}>
    <LogoContainerDiv>
      <LogoSvg size={85} color={theme.logo} />
      <TitleH1>Progressive Tooling</TitleH1>
    </LogoContainerDiv>
    <DescriptionP>
      A list of community-built, third-party tools that can be used to improve
      page performance
    </DescriptionP>
  </ContainerDiv>
);

export const Hero = withTheme(HeroComponent);
