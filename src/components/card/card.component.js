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

import {
  CardContainerDiv,
  CardHeaderDiv,
  TitleA,
  ContentDiv,
  LinkA,
  InfoDiv,
  InfoIconsDiv,
  DescriptionDiv,
  InfoDivLarge
} from './card.style';

import {
  CheckSvg,
  CodeSvg,
  FrameworkSvg,
  LaptopSvg,
  PackageSvg,
  TerminalSvg
} from 'src/icons';

import { Tooltip } from '../tooltip';

const ICONS = {
  api: CodeSvg,
  CI: CheckSvg,
  CLI: TerminalSvg,
  dependency: PackageSvg,
  external: LaptopSvg,
  framework: FrameworkSvg
};

const ICON_VIEW_BOX = {
  CLI: '0 0 15 16',
  dependency: '0 0 1000 900'
};

const getIcons = ({ type, path, theme, fullCard }) =>
  type.map(({ key, path, title }) => (
    <Tooltip key={key} title={title}>
      {createElement(
        ICONS[path],
        {
          viewBox: ICON_VIEW_BOX[path],
          size: fullCard ? 40 : 25,
          color: theme
        },
        null
      )}
    </Tooltip>
  ));

const CardComponent = ({ title, description, link, type, fullCard, theme }) => (
  <CardContainerDiv fullCard={fullCard}>
    <DescriptionDiv>
      <CardHeaderDiv extraSpacing={fullCard}>
        <TitleA large={fullCard} href={link} target="_blank" rel="noopener">
          {title}
        </TitleA>
      </CardHeaderDiv>
      {fullCard && <ContentDiv large={fullCard}>{description}</ContentDiv>}
    </DescriptionDiv>
    {!fullCard && <ContentDiv large={fullCard}>{description}</ContentDiv>}
    {fullCard && (
      <InfoDivLarge>
        {getIcons({ type, fullCard, theme: theme.tertiary })}
      </InfoDivLarge>
    )}
    {!fullCard && (
      <InfoDiv>
        <InfoIconsDiv>
          {getIcons({ type, fullCard, theme: theme.tertiary })}
        </InfoIconsDiv>
        <LinkA href={link} target="_blank" rel="noopener">
          View
        </LinkA>
      </InfoDiv>
    )}
  </CardContainerDiv>
);

export const Card = withTheme(CardComponent);
