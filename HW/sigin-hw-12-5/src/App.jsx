function App() {
  return (
    <>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightgray",
          fontFamily: "gray",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "180px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              margin: "5px",
              fontFamily: "cursive",
            }}
          >
            Login
          </h2>
          <input
            type="text"
            id="userName"
            placeholder="Username"
            style={{
              width: "90%",
              margin: "5px",
              fontFamily: "cursive",
              fontSize: "16px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          />
          <input
            type="password"
            id="pwd"
            placeholder="Password"
            style={{
              width: "90%",
              margin: "5px",
              fontFamily: "cursive",
              fontSize: "16px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          />
          <button
            style={{
              fontFamily: "cursive",
              fontSize: "20px",
              backgroundColor: "lightBlue",
              width: "91.5%",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </div>
      </body>
    </>
  );
}

export default App;
