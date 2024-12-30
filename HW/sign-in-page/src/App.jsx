import StyledButton from "../Components/styledButton";
import StyledUserInput from "../Components/styleduserInput";
import StyledPwdInput from "../Components/styledPwdInput";

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
          <StyledUserInput />
          <StyledPwdInput />
          <StyledButton />
        </div>
      </body>
    </>
  );
}

export default App;
