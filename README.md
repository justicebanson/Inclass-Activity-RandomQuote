# Random Quote Generator

## Overview
In this activity, you'll enhance the `Quotable` component to fetch and display random quotes using React. This project will require you to manage component state with React hooks, handle asynchronous events (fetching data from an external API), and update the UI based on user interactions.

## Starting Point
You will start with a pre-configured project that was accepted from GitHub. The initial setup, including necessary dependencies (such as React, a CSS file for styling, and the fetch polyfill if needed), has already been prepared for you. The `Quotable.jsx` file is provided as your base component.

## Objectives

1. **Implement State Management:**
   - Use React's `useState` hook to create state variables that handle:
     - The quote data (an array of fetched quotes).
     - The loading state (to show when data is being fetched).
     - Any error messages from failed API requests.

2. **Fetch Data from an External API:**
   - Enhance the `Quotable` component by implementing an `updateQuote` function that:
     - Uses the `fetch()` method (via a CORS proxy) to retrieve a random quote from the ZenQuotes API.
     - Converts the API response to JSON.
     - Extracts the quote object (ZenQuotes returns an array with one object) and appends it to your state.

3. **Handle User Interactions:**
   - Add a "New Quote" button that, when clicked, calls the `updateQuote` function to fetch and display a new random quote.
   - (Optional) Implement a delete feature to remove a specific quote from the display.

## Detailed Steps

### 1. Review the Starter Code
- Open the provided `Quotable.jsx` file.
- Read through the inline TODO comments to understand what you need to implement.

### 2. State Initialization
- Initialize state for:
  - `quotes` (an array for storing quotes).
  - `loading` (a boolean to indicate whether a fetch request is in progress).
  - `error` (to store any error messages).
- Optionally, initialize a `selectedCategory` state for consistency (even though filtering isn’t required).

### 3. Implement the `updateQuote` Function
- Within the function, set the loading state to `true` and clear any previous error.
- Use `fetch()` to make a GET request to the ZenQuotes API via a CORS proxy.  
  **URL:** `https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random`
- Check if the response is OK. If not, throw an error.
- Convert the response to JSON and extract the first quote object.
- Append the new quote to your `quotes` state.

### 4. Fetch an Initial Quote
- Use the `useEffect` hook with an empty dependency array to call `updateQuote()` when the component mounts.

### 5. Implement the `deleteQuote` Function
- Write a function that takes an index and updates the `quotes` state by filtering out the quote at that index.

### 6. Render the UI
- Render a "New Quote" button that calls `updateQuote` when clicked.
- Conditionally display a loading indicator or an error message if applicable.
- Map over the `quotes` array to render each quote’s content and author, along with a "Delete Quote" button if you choose to implement deletion.

### 7. Test Your Application
- Run your application.
- Verify that an initial quote is fetched on load.
- Confirm that clicking the "New Quote" button fetches and adds new quotes.
- Check that the UI properly displays loading and error messages.
