/* eslint-disable react/react-in-jsx-scope */
const Filter = ({ search, handle }) => {
  return (
    <div>
            filter shown with <input value={search} onChange={handle} />
    </div>
  )
}

export default Filter