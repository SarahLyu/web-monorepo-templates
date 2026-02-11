import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';

import router from './router';

import ErrorFallback from '@/components/error-fallback';

import './style.css';

// 全局兜底：捕获未被组件层级捕获的错误
window.addEventListener('error', event => {
  console.error('全局未捕获错误：', event.error);
});

window.addEventListener('unhandledrejection', event => {
  console.error('全局未捕获Promise错误：', event.reason);
  event.preventDefault();
});

const root = createRoot(document.getElementById('app')!);
root.render(
  // 外层ErrorBoundary：捕获RouterProvider本身的渲染错误
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, info) => console.log('根错误边界捕获：', error, info)}
  >
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>加载中...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);
