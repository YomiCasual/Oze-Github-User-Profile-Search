import { UserLinks } from "../constant";

const FlipCard = ({ user }: { user: Record<string, any> }) => {
  const { id, avatar_url, score, login, type = "", ...rest } = user;
  return (
    <div key={id} className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__inner--front">
          <div className="avatar__image">
            <img src={avatar_url} alt="avatar" />
          </div>
          <h3 className="username"> {login}</h3>
        </div>
        <div className="flip-card__inner--back">
          <div className="card__back">
            <div className="card__back--info">
              <h3>
                <span>Score</span> : {score}
              </h3>
              <h3>
                <span>Type</span> : {type}
              </h3>
            </div>
            <div className="card__back--links">
              {Object.keys(UserLinks).map((link: string) => {
                const name = UserLinks[link];
                const url = rest[link];
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={link}
                    href={url}
                    className="link"
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
