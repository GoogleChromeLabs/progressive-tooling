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

import { forPhoneOnly, forTabletPortraitOnly } from 'src/shared';

export const HeaderDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${props => props.theme.backgroundPrimary};
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 0 30px;

  ${forPhoneOnly} {
    height: 65px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 0 20px;
  }
`;

export const DummyDiv = styled('div')`
  width: 246px;

  ${forPhoneOnly} {
    display: none;
  }

  ${forTabletPortraitOnly} {
    display: none;
  }
`;

export const LogoContainerDiv = styled('div')`
  display: flex;
  align-items: center;
`;

export const TitleH1 = styled('h1')`
  font-size: 24px;
  margin-left: 7px;
  font-weight: 600;
  color: ${props => props.theme.logo};

  ${forPhoneOnly} {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const SwitchContainerDiv = styled('div')`
  display: flex;
`;

export const ListSwitchControlDiv = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 30px;

  ${forPhoneOnly} {
    display: none;
  }

  ${forTabletPortraitOnly} {
    display: none;
  }
`;

export const ChangeColorSwitchControlDiv = styled('div')`
  display: flex;
  align-items: center;
`;

export const ChangeColorsSvgContainer = styled('span')`
  display: flex;

  ${forPhoneOnly} {
    display: none;
  }
`;
