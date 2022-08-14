export const Filter = filter => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={filter.filter} />
    </label>
  );
};
