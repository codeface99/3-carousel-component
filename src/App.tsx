import "./styles.css";

import { Carousel } from "./carousel";

const IMAGES = [
  "https://burst.shopifycdn.com/photos/rugged-red-canyon-peaks.jpg?width=450",
  "https://burst.shopifycdn.com/photos/abandoned-plane-in-sunflower-field.jpg?width=450",
  "https://burst.shopifycdn.com/photos/tall-lighthouse-on-sharp-rocky-shoreline-against-blue-water.jpg?width=450",
  "https://burst.shopifycdn.com/photos/drone-view-of-car-driving-through-forest.jpg?width=450",
];

function App() {
  return <Carousel images={IMAGES} />;
}

export default App;
