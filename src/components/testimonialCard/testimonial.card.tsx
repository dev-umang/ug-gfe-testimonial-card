import { FC } from "react";
import "./testimonialCard.scss";

type Props = {
  username: string;
  displayName: string;
  avatar: string;
  children: string;
};

const TestimonialCard: FC<Props> = ({
  username,
  displayName,
  avatar,
  children,
}) => (
  <section className="card">
    <div className="card-header">
      <img height="48" width="48" src={avatar} alt="profile" />
      <div>
        <h1 className="name">{displayName}</h1>
        <span className="user-id">{username}</span>
      </div>
    </div>
    <p style={{ color: "#525252" }}>{children}</p>
  </section>
);

export default TestimonialCard;
