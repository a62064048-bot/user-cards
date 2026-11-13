import { Avatar, Card, Tag } from 'antd';

export default function UserCard({ user }) {
  const { name, age, city, Active, img } = user;

  return (
    <Card className="user-card" bordered={false}>
      <div className="user-card__topline">
        <Avatar className="user-card__avatar" src={img} alt={name} size={76} />
        {Active === true ? (
          <Tag className="status-tag status-tag--active">Активен</Tag>
        ) : (
          <Tag className="status-tag status-tag--inactive">Неактивен</Tag>
        )}
      </div>
      <div className="user-card__details">
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__meta">{age} лет</p>
        <p className="user-card__city">
          <span aria-hidden="true">⌖</span> {city}
        </p>
      </div>
    </Card>
  );
}
