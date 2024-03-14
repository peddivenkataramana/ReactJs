import React from "react";

export default function App() {
  const [data, setdata] = React.useState({});
  console.log(data);
  React.useEffect(function () {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((dataa) => setdata(dataa));
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
