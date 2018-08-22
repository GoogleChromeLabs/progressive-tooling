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

import { h, Component } from 'preact';
import { ThemeProvider } from 'emotion-theming';

import { Header, Section, CardScroll, Footer } from 'src/components';
import { colors } from 'src/core';
import tools from 'src/tools';

const primaryTheme = {
  name: 'primary',
  primary: colors.black,
  secondary: colors.purple,
  tertiary: colors.white,
  border: colors.grey2,
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.grey,
  logo: colors.purple
};

const secondaryTheme = {
  name: 'secondary',
  primary: colors.white,
  secondary: colors.white,
  tertiary: colors.purple,
  border: colors.white,
  backgroundPrimary: colors.purple,
  backgroundSecondary: colors.purple,
  logo: colors.white
};

export default class App extends Component {
  onListChange = () => {
    this.setState(
      {
        horizontalScroll: !this.state.horizontalScroll
      },
      () =>
        localStorage.setItem('horizontalScroll', this.state.horizontalScroll)
    );
  };

  onThemeChange = () => {
    this.setState(
      {
        theme: this.state.theme === 'primary' ? 'secondary' : 'primary'
      },
      () => localStorage.setItem('theme', this.state.theme)
    );
  };

  constructor() {
    super();
    if (typeof window !== 'undefined') {
      this.state = {
        theme: localStorage.getItem('theme') || 'primary',
        horizontalScroll: localStorage.getItem('horizontalScroll')
          ? JSON.parse(localStorage.getItem('horizontalScroll'))
          : true
      };
    } else {
      this.state = {
        theme: 'primary',
        horizontalScroll: true
      };
    }
  }

  renderSection(toolType, theme) {
    const { title, subtitle, tools } = toolType;
    const { horizontalScroll } = this.state;

    return (
      <Section heading={title} subHeading={subtitle}>
        <CardScroll horizontalScroll={horizontalScroll} tools={tools} />
      </Section>
    );
  }

  render() {
    const { theme, horizontalScroll } = this.state;

    return (
      <ThemeProvider
        theme={theme === 'primary' ? primaryTheme : secondaryTheme}
      >
        <div id="app">
          <Header
            listChecked={!horizontalScroll}
            themeChecked={theme === 'secondary'}
            onListChange={this.onListChange}
            onThemeChange={this.onThemeChange}
          />
          {Object.keys(tools).map(toolType =>
            this.renderSection(tools[toolType], theme)
          )}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}
