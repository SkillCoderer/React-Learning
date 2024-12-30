function StyledUserInput() {
  return (
    <>
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
    </>
  );
}

export default StyledUserInput;
