import './App.css'
import ClickButton from "./components/ClickButton.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Tile from "./components/Tile.jsx";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import designer1 from "./assets/brand.png";
import designer2 from "./assets/our_story.png";


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
        <ClickButton text="to the collection" disabled={false} />
        <ClickButton text="shop all bags" disabled={false} />
        <ClickButton text="pre-orders" disabled={true} />
        </nav>
        <main>
        <ProductCard
            isBestseller={true}
            imageURL={bag1}
            name="The handy bag"
            price="400"
        />

        <ProductCard
            isBestseller={true}
            imageURL={bag2}
            name="The stylish bag"
            price="250"
        />

        <ProductCard
            isBestseller={true}
            imageURL={bag3}
            name="The simple bag"
            price="300"
        />

        <ProductCard
            isBestseller={true}
            imageURL={bag4}
            name="The trendy bag"
            price="150"
        />
        </main>
        <footer>
          <Tile imageURL={designer1} className="tile-container"/>

          <Tile className="tile-container"
              title="The Designers"
              paragraphs={[
                "Discover our collection.",
                "Designed with passion.",
              ]}
          />

          <Tile imageURL={designer2} className="tile-container"/>

          <Tile className="tile-container"
              title="Our Philosophy"
              paragraphs={[
                "Quality over quantity.",
                "Timeless design.",
              ]}
          />
        </footer>
      </>
  )
}

export default App
