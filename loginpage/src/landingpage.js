import React from "react";

export default function Land() {
  const [data, setdata] = React.useState({
    email: "",
    password: "",
    conform: "",
    check: false,
  });

  function handle(e) {
    const { name, value, type, checked } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handlesubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className="card">
      <h1>SignUp</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          id="style"
          name="email"
          placeholder="Email"
          onChange={handle}
        ></input>
        <input
          type="text"
          id="style"
          name="password"
          placeholder="Password"
          onChange={handle}
        ></input>
        <input
          type="text"
          id="style"
          name="conform"
          placeholder="Conform Password"
          onChange={handle}
        ></input>
        <div className="check">
          <input
            type="checkbox"
            name="check"
            checked={data.check}
            onChange={handle}
            id="checked"
          />
          <label htmlFor="checked">I want to join the newsletter</label>{" "}
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
