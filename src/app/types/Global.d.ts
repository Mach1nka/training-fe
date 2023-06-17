declare module '*.scss' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare const IS_DEV: boolean;
declare const API_URL: string;
declare const PROJECT: 'storybook' | 'jest' | 'frontend';

declare type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
