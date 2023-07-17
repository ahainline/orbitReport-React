const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            const active = (data.operational) ? 'Active' : 'Inactive';
            return <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{active}</td>
            </tr>
          })}
        </tbody>
      </table>
  );
};

export default Table;