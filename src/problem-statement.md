# Question: Build a carousel component

### Requirements:

1. Design and implement a carousel component that:

- Displays a list of images horizontally in a sliding fashion.
- Allows users to navigate between images using left and right arrow buttons.
- Includes pagination buttons below the carousel that:
  - Indicate the current image being displayed.
  - Allow direct navigation to a specific image.

2. The carousel component should:

- Use the provided image URLs dynamically (passed as a prop).
- Support smooth transitions when changing images.
- Ensure infinite looping (navigating left from the first image shows the last image, and vice versa).

### Bonus (Follow-up) Questions

1. Add an autoplay feature that automatically slides to the next image every 3 seconds.

2. Implement a pause on hover functionality for autoplay.

const IMAGES = [
"https://burst.shopifycdn.com/photos/rugged-red-canyon-peaks.jpg?width=450",
"https://burst.shopifycdn.com/photos/abandoned-plane-in-sunflower-field.jpg?width=450",
"https://burst.shopifycdn.com/photos/tall-lighthouse-on-sharp-rocky-shoreline-against-blue-water.jpg?width=450",
"https://burst.shopifycdn.com/photos/drone-view-of-car-driving-through-forest.jpg?width=450",
];
