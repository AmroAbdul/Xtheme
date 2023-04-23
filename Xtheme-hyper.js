'use strict';

const backgroundColor = '#0B0B0F';
const foregroundColor = '#6B687A';
const borderColor = '#00F0A7';
const cursorColor = '#CCBFFF';
const colors = {
  black: '#06060D',
  red: '#FF0700',
  green: '#00F51E',
  yellow: '#FFDD00',
  blue: '#0731F1',
  magenta: '#D301F0',
  cyan: '#00F0A7',
  white: '#CCBFFF',
  lightBlack: '#06060D',
  lightRed: '#FF0700',
  lightGreen: '#00F51E',
  lightYellow: '#FFDD00',
  lightBlue: '#0731F1',
  lightMagenta: '#D301F0',
  lightCyan: '#00F0A7',
  lightWhite: '#CCBFFF',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};
