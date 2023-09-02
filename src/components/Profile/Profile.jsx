const Profile = ({ name, picture }) => {
  return (
    <div className="profile">
      <span className="profile__name">{name}</span>
      {picture ? (
        <img className="profile__picture" src={picture} alt={name} />
      ) : (
        <div className="profile__picture-placeholder"></div>
      )}
    </div>
  );
};

export default Profile;
