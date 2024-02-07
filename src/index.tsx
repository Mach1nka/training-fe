import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App';
import { ThemeProvider, StoreProvider, ErrorBoundary } from '@/app/providers';
import '@/shared/config/i18n/i18n';

// eslint-disable-next-line fsd/public-api-module-encapsulation
import '@/app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
