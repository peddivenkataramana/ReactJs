import React from "react";

export default function Form() {
  const [data, setdata] = React.useState({
    Frst: "",
    Last: "",
    texta: "",
    check: true,
    empl: "",
    fav: "",
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

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted:", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handle} name="Frst" />
        <input type="text" onChange={handle} name="Last" />
        <textarea name="texta" onChange={handle} />
        <input
          type="checkbox"
          id="is"
          checked={data.check}
          onChange={handle}
          name="check"
        />
        <label htmlFor="is">Are you a friend?</label>
        <input
          type="radio"
          id="unempl"
          name="empl"
          onChange={handle}
          value="unempl"
        />
        <label htmlFor="unempl">Unemployed</label>
        <input
          type="radio"
          id="part"
          name="empl"
          onChange={handle}
          value="part"
        />
        <label htmlFor="part">Part-time</label>

        <select value={data.fav} onChange={handle} name="fav">
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
