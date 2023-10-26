const Table = () => {
  const data = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 25 },
    // Add more data as needed
  ];
  return (
    <div>
      <h1>Table</h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }} align="left">
              Name
            </th>
            <th style={{ border: "1px solid black" }} align="left">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid black" }} align="left">
                  {dt.name}
                </td>
                <td style={{ border: "1px solid black" }} align="left">
                  {dt.age}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
