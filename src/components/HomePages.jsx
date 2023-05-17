function HomePages({ isLoggedIn }) {
  let content;

  if (isLoggedIn) {
    content = <p>You are logged in</p>;
  } else {
    content = <p>You are not logged in</p>;
  }

  return <div>{content}</div>;
}

export default HomePages;