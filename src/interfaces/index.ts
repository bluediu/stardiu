import { CSSProperties, ReactElement } from 'react';

export interface IStylesProps {
  className?: string;
  style?: CSSProperties;
}

export interface IReactNodeProps {
  children: ReactElement | ReactElement[];
}
