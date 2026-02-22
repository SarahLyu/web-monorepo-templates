import { useCallback, useEffect, useState } from 'react';

import { Counter } from '@/components/common/Counter';
import { fetchUserInfo } from '@/services';
// eslint-disable-next-line import/no-absolute-path
import typescriptLogo from '/typescript.svg';

const App = () => {
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUser = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const { name } = await fetchUserInfo();
      if (name !== userName) {
        setUserName(name);
      }
    } catch (error) {
      console.error('获取用户信息失败：', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, userName]);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <div>Hello {userName}</div>
      <div className="card">
        <Counter />
      </div>
    </>
  );
};

export default App;
