import { createRoot } from 'react-dom/client';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { RouterProvider } from 'react-router';

import router from './router';
import './style.css';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : '未知错误';

  return (
    <div role="alert" style={{ padding: '20px', border: '1px solid red', borderRadius: '4px' }}>
      <h3>😵 出错了！</h3>
      <p>错误信息：{errorMessage}</p>
      <button onClick={resetErrorBoundary} style={{ marginTop: '10px' }}>
        重试
      </button>
    </div>
  );
}

createRoot(document.getElementById('app')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={error => console.log('错误：', error)}>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
