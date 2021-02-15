import SlideShow from "./SlideShow";
import List from "./List";
import Comments from "./Comments";
import './styles.scss';

function App() {
  return (
    <div className="App">
      <SlideShow />
      <List />
      <Comments />
      <footer>Copyright © 2021 FaradayFuture.love. All rights reserved.</footer>
    </div>
  );
}

export default App;
