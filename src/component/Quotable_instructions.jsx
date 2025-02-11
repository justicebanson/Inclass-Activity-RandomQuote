// src/components/Quotable.jsx
// TODO: Import the necessary hooks from React.
import "./quote.css"; // Ensure you have your CSS set up for styling

function Quotable() {
  // Step 1: Initialize state variables.
  // - "quotes" will hold an array of fetched quote objects.
  // - "loading" tracks whether a fetch request is in progress.
  // - "error" stores any error messages encountered.
  // - "selectedCategory" is for consistency, although ZenQuotes doesn't support categories directly.
  // Array to hold fetched quotes
  // Loading state indicator
  // Error message state
  

  // Step 2: Create a function "updateQuote" to fetch a random quote from the ZenQuotes API.
  // Hints:
  // - Use fetch() to request "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random"
  // - ZenQuotes returns an array with one object; extract the first element.
  // - Append the new quote to the "quotes" array.
  const updateQuote = async () => {
    // TODO: Set the loading state to true here (e.g., call setLoading(true)) to indicate the fetch has started.
    // TODO: Also, reset any previous error by calling setError(null).
    
    try {
      // TODO: Make a GET request to the ZenQuotes API using a CORS proxy.
      // Hint: Use the fetch() method with the URL "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random".
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");

      // TODO: Check if the response is OK (i.e., response.ok === true).
      // Hint: If response.ok is false, throw an error with a message (e.g., "Failed to fetch quote").
      
    } catch (err) {
      // TODO: Update the error state with the error message.
      // Hint: Use setError(err.message) to store the error message so it can be displayed in the UI.
      
    } finally {
      // TODO: Set the loading state to false.
      // Hint: This should be done regardless of success or failure of the API call.
      
    }
  };

  // Step 3: Use useEffect to fetch an initial quote when the component mounts.
  useEffect(() => {
    // TODO: Call updateQuote() so that a quote is fetched on component mount.
  }, []);

  // Step 4: Create a function "deleteQuote" to delete a single quote.
  // Hints:
  // - Use the filter() method to remove the quote at the given index.
  const deleteQuote = (indexToDelete) => {
    // TODO: Update the quotes state by filtering out the quote at indexToDelete.
  };

  return (
    <div className="app-container">
      <h1 className="title">Random Quote Generator</h1>

      {/* Step 5: Render a button to fetch a new quote */}
      {/* TODO: Attach the updateQuote function to the onClick event of this button */}
      <button className="btn1">
        New Quote
      </button>

      {/* Step 6: Display loading and error messages if applicable */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Step 7: Display the list of fetched quotes */}
      <div className="quotes-container">
        {quotes.length === 0 && !loading ? (
          <p>No quotes available. Click "New Quote" to fetch one.</p>
        ) : (
          quotes.map((quote, index) => (
            <div key={quote._id ? quote._id : index} className="quote-card">
              {/* TODO: Display the quote content (e.g., quote.q) */}
              <p className="quote-content">{quote.q}</p>
              {/* TODO: Conditionally display the author if available (e.g., quote.a) */}
              {quote.a && (
                <p className="quote-author">— {quote.a}</p>
              )}
              {/* TODO: Attach the deleteQuote function to the onClick event of this button, passing the current index */}
              <button className="delete-btn">
                Delete Quote
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Quotable;
