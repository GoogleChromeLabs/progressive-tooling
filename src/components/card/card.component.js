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

import { CheckSvg, CodeSvg, LaptopSvg, TerminalSvg } from 'src/icons';
import TOOL_TYPES from 'src/tools/types';
import { PackageSvg } from '../../icons';

const getIcons = (type, fullCard, theme) => {
  const size = fullCard ? 40 : 25;
  let icons = [];
  const { external, dep, ci, cli, api } = TOOL_TYPES;

  if (type.includes(external)) {
    icons.push(<LaptopSvg size={size} color={theme.tertiary} />);
  }

  if (type.includes(dep)) {
    icons.push(
      <PackageSvg size={size} viewBox="0 0 1000 900" color={theme.tertiary} />
    );
  }

  if (type.includes(ci)) {
    icons.push(<CheckSvg size={size} color={theme.tertiary} />);
  }

  if (type.includes(cli)) {
    icons.push(
      <TerminalSvg size={size} viewBox="0 0 15 16" color={theme.tertiary} />
    );
  }

  if (type.includes(api)) {
    icons.push(<CodeSvg size={size} color={theme.tertiary} />);
  }

  return icons;
};

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
    {fullCard && <InfoDivLarge>{getIcons(type, fullCard, theme)}</InfoDivLarge>}
    {!fullCard && (
      <InfoDiv>
        <InfoIconsDiv>{getIcons(type, fullCard, theme)}</InfoIconsDiv>
        <LinkA href={link} target="_blank" rel="noopener">
          View
        </LinkA>
      </InfoDiv>
    )}
  </CardContainerDiv>
);

export const Card = withTheme(CardComponent);
