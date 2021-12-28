# Landing Page Project for egFWD's Professional Web Devlopment Program

## Table of Contents:

-   ***Features***
-   ***References***

### Features:

-   **Dynamic Navigation**: Navigation list is created dynamically using javascript. After the page loads, the code loops through all available sections and creats a list item with a link corresponding to each of the sections.

-   **Smooth Scrolling**: The regular behavior of navigation links is replaced by smooth scrolling using the **scrollIntoView()** method.

-   **Active Section**: The section currently in focus is marked by a red border and a black backround. This was done by utilizing the **Intersection Observer API**, using CSS for styling and Javascript to add/remove an active class to the sections as necessary.

### References:

-   [scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

-   [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
