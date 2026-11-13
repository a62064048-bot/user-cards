import { Empty } from 'antd';
import UserCard from './UserCard.jsx';

const users = [
  {
    name: 'Анна Смирнова',
    age: 24,
    city: 'Алматы',
    Active: true,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop&crop=faces',
  },
  {
    name: 'Данияр Ахметов',
    age: 29,
    city: 'Астана',
    Active: true,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop&crop=faces',
  },
  {
    name: 'Мария Иванова',
    age: 31,
    city: 'Шымкент',
    Active: false,
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&h=240&fit=crop&crop=faces',
  },
  {
    name: 'Тимур Нурланов',
    age: 26,
    city: 'Караганда',
    Active: true,
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&h=240&fit=crop&crop=faces',
  },
  {
    name: 'Алия Касымова',
    age: 22,
    city: 'Актобе',
    Active: false,
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&h=240&fit=crop&crop=faces',
  },
  {
    name: 'Руслан Беков',
    age: 34,
    city: 'Павлодар',
    Active: true,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces',
  },
];

export default function UserList() {
  return (
    <section className="users-section" aria-labelledby="page-title">
      <header className="page-heading">
        <p className="page-heading__eyebrow">НАШЕ СООБЩЕСТВО</p>
        <h1 id="page-title">Пользователи</h1>
        <p className="page-heading__subtitle">Познакомьтесь с участниками нашего сообщества</p>
      </header>
      {users.length ? (
        <div className="users-grid">
          {users.map((user) => (
            <UserCard key={user.name} user={user} />
          ))}
        </div>
      ) : (
        <Empty description="Пользователей пока нет" />
      )}
    </section>
  );
}
