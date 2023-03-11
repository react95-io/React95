import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { Theme } from '../types';
import { useUtilsElement } from './React95Provider';

type Props = React.ComponentProps<typeof SCThemeProvider> & {
  theme: Theme;
};

export function getDisabledFilterId(theme: Theme) {
  return `disabled-filter--${theme.name}`;
}
export function ThemeProvider({ theme, ...otherProps }: Props) {
  const utilsElement = useUtilsElement();

  React.useLayoutEffect(() => {
    if (utilsElement) {
      const filterId = getDisabledFilterId(theme);
      const filter = document.getElementById(filterId);
      if (!filter) {
        // const disabledFilter = `
        // <filter id="${filterId}">
        // <feColorMatrix
        //     type="matrix"
        //     values="1 0 0 0 0
        //             0 1 0 0 0
        //             0 0 1 0 0
        //             -21.25 -71.54 -7.21 40 0"
        //     result="remove-bright-pixels"
        // />
        // <feFlood flood-color="${theme.materialTextDisabled}" result="color" />
        // <feComposite in="color" in2="remove-bright-pixels" operator="in" />
        // <feDropShadow
        //     dx="1"
        //     dy="1"
        //     stdDeviation="0"
        //     flood-color="${theme.materialTextDisabledShadow}"
        // />
        // </filter>

        // `;
        const disabledFilter = `
        <filter id="${filterId}">
        <feOffset in="SourceGraphic" dx="1" dy="1" result="one"/>
        <feOffset in="SourceGraphic" dx="-1" dy="-1" result="two"/>
        <feComposite in="one" in2="two" operator="in" result="swag"/>
        <feDropShadow dx="1" dy="1" stdDeviation="0" flood-color="red" result="outline-one"/>
        <feDropShadow dx="-1" dy="-1" stdDeviation="0" flood-color="red" result="outline-two"/>
        <feComposite in="outline-one" in2="outline-two" operator="over" result="outline"/>
        <feComposite in="outline" in2="swag" operator="out" result="outline-result"/>

        <feColorMatrix
        in="SourceGraphic"
type="matrix"
values="1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        -21.25 -71.54 -7.21 50 0"
result="remove-bright-pixels"
/>
<feComposite in="outline-result" in2="remove-bright-pixels" operator="over" result="haha"/>
<feFlood flood-color="${theme.materialTextDisabled}" result="color" />
<feComposite in="color" in2="haha" operator="in" />
<feDropShadow
dx="1"
dy="1"
stdDeviation="0"
flood-color="${theme.materialTextDisabledShadow}"
/> 

        </filter>

        `;
        const svg = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        );
        svg.innerHTML = disabledFilter;
        utilsElement.appendChild(svg);
      }
    }
  }, [theme, utilsElement]);
  return <SCThemeProvider theme={theme} {...otherProps} />;
}
