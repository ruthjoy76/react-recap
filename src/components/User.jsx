import "./User.css";

function User() {
  const user = {
    name: "Hedy Lamarr",
    imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imgSize: 90,
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="photo"
        src={user.imgUrl}
        alt={"The photo of" + user.name}
        style={{ width: user.imgSize, height: user.imgSize }}
      />
    </div>
  );
}

export default User;