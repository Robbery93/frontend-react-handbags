import React from 'react';

import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

import './App.css';
import Button from './components/Button';
import Product from './components/Product';
import Tile from "./components/Tile";
import TileParagraph from "./components/TileParagraph";


function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  text="to the collection"
              />
              <Button
                  text="shop all bags"
              />
              <button disabled>pre-orders</button>
          </nav>
          <main>
              <Product
                  label="Best seller"
                  image={handyBag}
                  name="The handy bag"
                  price="400"
              />
              <Product
                  label="Best seller"
                  image={stylishBag}
                  name="The stylish bag"
                  price="250"
              />
              <Product
                  label="Best seller"
                  image={simpleBag}
                  name="The simple bag"
                  price="300"
              />
              <Product
                  label="Best seller"
                  image={trendyBag}
                  name="The trendy bag"
                  price="150"
              />
          </main>
          <footer>
              <Tile
              title="THE BRAND"
              context="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem fuga illum magnam nulla quae temporibus veritatis vitae voluptates voluptatibus?"
              >
                  <TileParagraph
                      context="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem fuga illum magnam nulla quae temporibus veritatis vitae voluptates voluptatibus?"
                  />
              </Tile>
              <Tile
                  image={brand}
                  imageTitle="Brand"
              />
              <Tile
                  image={our_story}
                  imageTitle="Our story"
              />
              <Tile
              title="OUR STORY"
              context="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias delectus deserunt ducimus exercitationem nihil, ratione? Consequuntur deleniti dignissimos est itaque molestiae nam nihil nobis porro praesentium quaerat? Praesentium, quaerat."
              />
          </footer>
      </>
  );
}

export default App;



