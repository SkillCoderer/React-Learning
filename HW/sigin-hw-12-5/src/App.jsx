function App() {
  return (
    <>
      <body
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          id="userName"
          placeholder="Username"
          style={{
            display: "flex",
            margin: "5px",
            fontFamily: "cursive",
            fontSize: "20px",
          }}
        />
        <input
          type="text"
          id="pwd"
          placeholder="Password"
          style={{
            display: "flex",
            margin: "5px",
            fontFamily: "cursive",
            fontSize: "20px",
          }}
        />
        <button style={{ fontFamily: "cursive", fontSize: "20px" }}>
          Submit
        </button>
      </body>
    </>
  );
}

export default App;
