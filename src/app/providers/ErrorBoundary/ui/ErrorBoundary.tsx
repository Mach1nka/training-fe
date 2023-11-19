import type { ErrorInfo, ReactNode } from 'react';
import React, { Suspense } from 'react';

import { PageError } from '@/widgets/PageError';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <Suspense fallback={null}>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}
