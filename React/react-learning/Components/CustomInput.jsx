import FormComponent from "./FormComponent";

function CustomInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Enter-the-Data"
        style={{
          width: "300px",
          height: "20px",
          border: "2px solid red",
          marginBottom: "10px",
        }}
      />
      <br />
    </>
  );
}

export default CustomInput;
