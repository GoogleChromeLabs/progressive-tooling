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

export const SwitchLabel = styled('label')`
  position: relative;
  display: inline-block;
  width: 46px;
	height: 26px;
	margin-left: 5px;

	&:input {
		display:none;
	}
}
`;

export const SliderSpan = styled('span')`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.tertiary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Input = styled('input')`
	&:checked {
		+ ${SliderSpan} {
			background-color: ${props => props.theme.secondary};

			&:before {
				-webkit-transform: translateX(18px);
				-ms-transform: translateX(18px);
				transform: translateX(18px);
			}
		}
	}

	&:focus {
		+ ${SliderSpan} {
			box-shadow: 0 0 1px ${props => props.theme.secondary};
		}
	}
}
`;
