import { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : '未知错误';
  const errorStack = error instanceof Error ? error.stack : '';

  return (
    <div
      role="alert"
      style={{ padding: '20px', border: '1px solid red', borderRadius: '4px', maxWidth: '800px', margin: '20px auto' }}
    >
      <h3>😵 页面出错了！</h3>
      <p>
        <strong>错误信息：</strong>
        {errorMessage}
      </p>
      <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap', color: '#666' }}>{errorStack}</pre>
      <button onClick={resetErrorBoundary} style={{ marginTop: '10px', padding: '8px 16px' }}>
        重试
      </button>
    </div>
  );
}
