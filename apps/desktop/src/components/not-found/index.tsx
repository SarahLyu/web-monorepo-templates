import { Link } from 'react-router';
import './index.scss';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found-content">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">页面未找到</h2>
      <p className="not-found-desc">你访问的地址不存在或已被移除，请返回首页继续浏览</p>
      <Link to="/" className="not-found-btn">
        回到首页
      </Link>
    </div>
  </div>
);

export default NotFound;
