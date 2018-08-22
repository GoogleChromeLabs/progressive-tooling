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
  ContainerSection,
  SectionHeadingH2,
  SectionSubHeadingP,
  ContentContainerDiv
} from './section.style';

const SectionComponent = ({
  theme,
  heading = '',
  subHeading = '',
  backgroundColor = theme.backgroundPrimary,
  children
}) => (
  <ContainerSection backgroundColor={backgroundColor}>
    <SectionHeadingH2>{heading}</SectionHeadingH2>
    <SectionSubHeadingP>{subHeading}</SectionSubHeadingP>
    <ContentContainerDiv>{children}</ContentContainerDiv>
  </ContainerSection>
);

export const Section = withTheme(SectionComponent);
