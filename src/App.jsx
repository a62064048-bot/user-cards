import { ConfigProvider } from 'antd';
import UserList from './components/UserList.jsx';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6258e8',
          borderRadius: 16,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
      }}
    >
      <main className="page-shell">
        <UserList />
      </main>
    </ConfigProvider>
  );
}
