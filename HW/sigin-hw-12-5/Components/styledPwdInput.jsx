function StyledPwdInput() {
  return (
    <>
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
    </>
  );
}

export default StyledPwdInput;
