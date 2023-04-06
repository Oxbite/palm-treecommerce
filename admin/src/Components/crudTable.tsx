type crudType = {
  data: any[];
  heads: [string];
};
export default function Crud({ data, heads }: crudType) {
  const a = 3;
  return (
    <table>
      <thead>
        <tr>
          {heads.map((d) => {
            return <th>{d}</th>;
          })}
          <th>delete</th>
          <th>edit</th>
          <th>archive</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => {
          return (
            <tr>
              {heads.map((e) => {
                return <td>{d[e]}</td>;
              })}
              <td>edit</td>
              <td>delete</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
