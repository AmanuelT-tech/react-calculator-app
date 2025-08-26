import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // add number or operator
  const handleClick = (value) => {
    setInput(input + value);
  };

  // clear input
  const handleClear = () => {
    setInput("");
  };

  // calculate result
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // eval = calculates string
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#524747ff", // dark background
        color: "white",
      }}
    >
      <h1>My calculator app</h1>

      {/* Calculator container */}
      <div style={{ marginTop: "20px" }}>
        {/* Display */}
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "right",
            padding: "10px",
            fontSize: "24px",
            width: "250px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          {input || "0"}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 60px)",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {["1", "2", "3", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              style={{ padding: "15px", fontSize: "18px" }}
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              style={{ padding: "15px", fontSize: "18px" }}
            >
              {btn}
            </button>
          ))}
          {["7", "8", "9", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              style={{ padding: "15px", fontSize: "18px" }}
            >
              {btn}
            </button>
          ))}
          {["C", "0", "=", "/"].map((btn) => (
            <button
              key={btn}
              onClick={
                btn === "C"
                  ? handleClear
                  : btn === "="
                  ? handleEqual
                  : () => handleClick(btn)
              }
              style={{ padding: "15px", fontSize: "18px" }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
