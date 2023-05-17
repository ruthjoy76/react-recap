import './App.css'
import Button from "./components/Button";
import User from "./components/User";
import HomePages from "./components/HomePages";


function App() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Tomatoe", id: 2 },
    { title: "Potato", id: 3 },
    { title: "Carrot", id: 4 },
    { title: "Onion", id: 5 },
  ];

  const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";
  return (
    <div>
      <img src={imgUrl} className="avatar" />
      <h1>Welocome to my app</h1>
      <Button />
      <User />
      <HomePages isLoggedIn={true} />
      <div>
        <div>
          <ul>
            {products.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
