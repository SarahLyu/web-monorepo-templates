// eslint-disable-next-line import/no-absolute-path
import typescriptLogo from '/typescript.svg';
import { Counter } from '../components/counter';
import { Header } from '../components/header';

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
    </a>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

export default App;
