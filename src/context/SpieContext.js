import React, { createContext, useState, useEffect } from "react";

import "eventsource-polyfill";

const SpieContext = createContext();

// Create an EventSource instance
const eventSource = new EventSource(
  "https://0e1b-2402-3a80-1fa0-c45a-64ac-d823-7908-2e8d.ngrok-free.app/stream"
);

// Listen for messages
eventSource.onmessage = function (event) {
  console.log("New data:", event.data);
  // Process and display the data
};

// Optional: Handle errors
eventSource.onerror = function (error) {
  console.error("Error:", error);
};

// Close the connection if needed
// eventSource.close();

export const SpieProvider = ({ children }) => {
  return <SpieContext.Provider value={{}}>{children}</SpieContext.Provider>;
};

export default SpieContext;
