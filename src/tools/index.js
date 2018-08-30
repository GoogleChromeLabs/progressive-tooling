import TOOL_TYPES from './types';

const { external, api, dep, ci, cli, framework } = TOOL_TYPES;

export default {
  accessibility: {
    title: 'Accessibility',
    subtitle:
      'Visualize, audit and test accessibility parameters in your project',
    tools: [
      {
        description: 'An accessibility visualization toolkit',
        link: 'https://github.com/Khan/tota11y',
        title: 'tota11y',
        type: [dep]
      },
      {
        description:
          "CSS file that provides warnings for possible risks and mistakes and can help evaluate a site's quality",
        link: 'https://github.com/ffoodd/a11y.css',
        title: 'a11y.css',
        type: [dep]
      },
      {
        description: 'Color combination contrast tester',
        link: 'https://colorable.jxnblk.com/',
        title: 'Colorable',
        type: [external]
      },
      {
        description: 'Automated accessibility testing using HTML CodeSniffer',
        link: 'https://github.com/pa11y/pa11y',
        title: 'Pa11y',
        type: [dep, cli]
      },
      {
        description:
          'Warns about potential accessibility issues with your React elements',
        link: 'https://github.com/reactjs/react-a11y',
        title: 'React A11y',
        type: [dep, framework]
      },
      {
        description:
          'A library of accessibility-related testing and utility code',
        link: 'https://github.com/GoogleChrome/accessibility-developer-tools',
        title: 'Accessibility Developer Tools',
        type: [dep]
      },
      {
        description:
          'An automated accessibility testing tool which crawls and tests pages to produce detailed reports',
        link: 'https://github.com/liip/TheA11yMachine',
        title: 'TheA11yMachine',
        type: [cli]
      }
    ]
  },
  auditing: {
    title: 'Performance auditing',
    subtitle: 'Audit and test the performance of your web page',
    tools: [
      {
        description:
          'Run tests on actual devices with different locations, browsers, and connection speeds',
        link: 'https://www.webpagetest.org/',
        title: 'WebPageTest',
        type: [external, api]
      },
      {
        description:
          'An open-source auditing tool that you can use to test and improve your webpage',
        link: 'https://developers.google.com/web/tools/lighthouse/',
        title: 'Lighthouse',
        type: [external]
      },
      {
        description:
          'Track and monitor performance of webpages during ongoing development',
        link: 'https://calibreapp.com/',
        title: 'Calibre',
        type: [external]
      },
      {
        description:
          'A devtool for inspecting the performance of React Components',
        link: 'https://github.com/nitin42/react-perf-devtool',
        title: 'React Performance Devtool',
        type: [external, framework]
      },
      {
        description:
          'Monitor web performance and how real users experience your site',
        link: 'https://speedcurve.com/',
        title: 'Speedcurve',
        type: [external]
      },
      {
        description:
          'Service by Netlify that rates your site based on its initial global load times and its security settings',
        link: 'https://testmysite.io/',
        title: 'Testmysite.io',
        type: [external]
      },
      {
        description:
          'An easy way to measure site performances across devices powered by WebPageTest',
        link: 'https://testmysite.withgoogle.com/',
        title: 'Test My Site',
        type: [external]
      },
      {
        description:
          'Get speed field data and suggestions for optimization improvements',
        link: 'https://developers.google.com/speed/pagespeed/insights/',
        title: 'PageSpeed Insights',
        type: [external]
      },
      {
        description:
          'Compare your mobile site speed with 10 other domains as well as estimate your revenue impact',
        link: 'https://www.thinkwithgoogle.com/feature/mobile/',
        title: 'Speed Scorecard',
        type: [external]
      },
      {
        description:
          'Generate a node map visualization of all third-party interactions',
        link: 'http://requestmap.webperf.tools/',
        title: 'Request Map Generator',
        type: [external]
      }
    ]
  },
  'bundle-analysis': {
    title: 'Bundle analysis',
    subtitle: 'Analyze and measure your bundle and package sizes',
    tools: [
      {
        description: 'Find the cost of adding a npm package to your bundle',
        link: 'https://bundlephobia.com/',
        title: 'Bundlephobia',
        type: [external]
      },
      {
        description:
          'Visual Studio Code extension that displays the size of imported packages inline',
        link:
          'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        title: 'Import Cost',
        type: [external]
      },
      {
        description:
          'Visualize the size of webpack output files with a treemap',
        link: 'https://www.npmjs.com/package/webpack-bundle-analyzer',
        title: 'Webpack Bundle Analyzer',
        type: [dep]
      },
      {
        description: 'Visualize the size of parcel output files with a treemap',
        link:
          'https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser',
        title: 'Parcel Plugin Bundle Analyzer',
        type: [dep]
      },
      {
        description: 'CLI dashboard for your webpack dev server',
        link: 'https://github.com/FormidableLabs/webpack-dashboard',
        title: 'Webpack Dashboard',
        type: [cli]
      },
      {
        description: 'Electron Desktop GUI for Webpack Dashboard',
        link: 'https://github.com/FormidableLabs/electron-webpack-dashboard',
        title: 'Electron Webpack Dashboard',
        type: [cli]
      },
      {
        description: 'An intelligent browser based Webpack dashboard',
        link: 'https://github.com/zouhir/jarvis',
        title: 'Jarvis',
        type: [dep]
      },
      {
        description: 'An online visualization tool for webpack bundles',
        link: 'https://chrisbateman.github.io/webpack-visualizer',
        title: 'Webpack Visualizer',
        type: [external]
      },
      {
        description: 'Analyze and debug code bloat through source maps',
        link: 'https://github.com/danvk/source-map-explorer',
        title: 'Source Map Explorer',
        type: [cli]
      },
      {
        description:
          'Tool to help you find source code duplication across your javascript chunks/splits',
        link: 'https://github.com/samccone/bundle-buddy',
        title: 'Bundle Buddy',
        type: [cli]
      },
      {
        description:
          'Tool for monitoring webpack optimization metrics through the development process',
        link: 'https://github.com/webpackmonitor/webpackmonitor',
        title: 'Webpack Monitor',
        type: [dep]
      },
      {
        description: 'Interactive pie chart for webpack stats',
        link: 'https://github.com/alexkuz/webpack-chart',
        title: 'Webpack Chart',
        type: [external]
      }
    ]
  },
  'bundle-budgets': {
    title: 'Bundle budgeting',
    subtitle: 'Set up budgets to keep your bundle sizes in check',
    tools: [
      {
        description: 'Keep an eye on your bundle size through a CI hook',
        link: 'https://github.com/siddharthkp/bundlesize',
        title: 'Bundlesize',
        type: [dep, ci]
      },
      {
        description:
          'Prevent library bloat by having error-checks when including large dependencies',
        link: 'https://github.com/ai/size-limit',
        title: 'size-limit',
        type: [dep]
      },
      {
        description:
          'Automatically track the size of your build artifacts with a CircleCI integration',
        link: 'https://buildsize.org/',
        title: 'BuildSize',
        type: [ci]
      }
    ]
  },
  'image-optimization': {
    title: 'Image optimization',
    subtitle: 'Optimize and compress images',
    tools: [
      {
        description: 'Minify images seamlessly',
        link: 'https://github.com/imagemin/imagemin',
        title: 'ImageMin',
        type: [dep, cli, external]
      },
      {
        description:
          'Reduce JPEG file sizes while retaining quality and compatibility',
        link: 'https://github.com/mozilla/mozjpeg',
        title: 'MozJPEG',
        type: [dep]
      },
      {
        description:
          'Save disk space & bandwidth by compressing images without losing quality',
        link: 'https://imageoptim.com/api',
        title: 'ImageOptim',
        type: [api, external]
      },
      {
        description:
          'A GUI tool for losslessly optimizing PNG and JPG files',
        link: 'https://trimage.org/',
        title: 'Trimage',
        type: [cli, external]
      }
    ]
  },
  'lazy-loading': {
    title: 'Lazy loading',
    subtitle:
      'Asynchronously load elements (DOM nodes, images, components or routes) when needed',
    tools: [
      {
        description:
          'Higher order component for loading components with dynamic imports',
        link: 'https://github.com/jamiebuilds/react-loadable',
        title: 'React Loadable',
        type: [dep]
      },
      {
        description: 'A fast, flexible, and small image lazy loader',
        link: 'https://github.com/malchata/yall.js',
        title: 'yall.js',
        type: [dep]
      },
      {
        description:
          'High performance and SEO friendly lazy loader for images, iframes and more',
        link: 'https://github.com/aFarkas/lazysizes',
        title: 'Lazysizes',
        type: [dep]
      },
      {
        description:
          'Detect if a DOM element intersects with another element such as the document viewport',
        link:
          'https://developers.google.com/web/updates/2016/04/intersectionobserver',
        title: 'Intersection Observer',
        type: [api]
      },
      {
        description:
          'Split bundles for lazy loading using entry points or dynamic imports',
        link: 'https://webpack.js.org/guides/code-splitting/',
        title: 'webpack',
        type: [dep]
      },
      {
        description:
          'Use dynamic imports to split applicatin code into separate bundles',
        link: 'https://parceljs.org/code_splitting.html',
        title: 'Parcel',
        type: [dep]
      }
    ]
  },
  'service-worker': {
    title: 'Service Worker',
    subtitle:
      'Cache static or dynamic assets for offline support using service workers',
    tools: [
      {
        description: 'Set of tools that simplify process of caching assets',
        link: 'https://developers.google.com/web/tools/workbox/',
        title: 'Workbox',
        type: [dep, cli]
      },
      {
        description:
          "Tiny JavaScript library that makes sure your users can always access your site's content",
        link: 'https://github.com/TalAter/UpUp',
        title: 'UpUp',
        type: [dep]
      },
      {
        description:
          'A webpack plugin that uses ServiceWorker (and AppCache) to provide an offline experience',
        link: 'https://github.com/NekR/offline-plugin',
        title: 'Offline Plugin',
        type: [dep]
      },
      {
        description:
          'Node module to generate a ServiceWorker that will precache specific resources',
        link: 'https://github.com/GoogleChromeLabs/sw-precache',
        title: 'Service Worker Precache',
        type: [dep, cli]
      },
      {
        description:
          'Collection of service worker tools for offlining runtime requests',
        link: 'https://github.com/GoogleChromeLabs/sw-toolbox',
        title: 'Service Worker Toolbox',
        type: [dep]
      }
    ]
  },
  fouc: {
    title: 'Flash of invisible/unstyled text',
    subtitle:
      'Tools to minimize unstyled/invisible text rendered to the web page while external styles are still being fetched',
    tools: [
      {
        description:
          'Minimize flash of unstyled text by comparing between a fallback and an intended font',
        link: 'https://meowni.ca/font-style-matcher/',
        title: 'Font style matcher',
        type: [external]
      },
      {
        description:
          'Track download progress and define lazy loading behavior of font faces',
        link:
          'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#the_font_loading_api',
        title: 'CSS Font Loading',
        type: [api]
      },
      {
        description:
          'Control how a font is displayed while it is still being fetched',
        link: 'https://developers.google.com/web/updates/2016/02/font-display',
        title: 'font-display',
        type: [api]
      }
    ]
  },
  ssr: {
    title: 'Server-side rendering/pre-rendering',
    subtitle: 'Send down static HTML to improve perceived load times and SEO',
    tools: [
      {
        description: 'Universal javascript support for Angular',
        link: 'https://github.com/angular/universal',
        title: 'Angular Universal',
        type: [cli]
      },
      {
        description:
          'Zero-configuration framework-agnostic static prerendering for SPAs',
        link: 'https://github.com/stereobooster/react-snap',
        title: 'react-snap',
        type: [dep]
      },
      {
        description:
          'React.js server-side rendering optimization with component memoization and templatization',
        link: 'https://github.com/walmartlabs/react-ssr-optimization',
        title: 'react-ssr-optimization',
        type: [dep]
      },
      {
        description: 'Create a Preact PWA quickly with built-in pre-rendering',
        link: 'https://github.com/walmartlabs/react-ssr-optimization',
        title: 'preact-cli',
        type: [cli]
      },
      {
        description:
          'Add server-side rendering capabilities to a web server using Headless Chrome',
        link: 'https://developers.google.com/web/tools/puppeteer/articles/ssr',
        title: 'Puppeteer',
        type: [dep]
      }
    ]
  }
};
