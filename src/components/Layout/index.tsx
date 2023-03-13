import { ReactNode } from 'react';

interface LayoutProps {
  width?: string;
  children: ReactNode;
}

import { LayoutContainer } from './styles';

export function Layout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
