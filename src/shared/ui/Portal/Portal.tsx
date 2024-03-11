import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  domNode?: HTMLElement;
}

export const Portal: FC<Props> = ({ children, domNode = document.body }) =>
  createPortal(children, domNode);
