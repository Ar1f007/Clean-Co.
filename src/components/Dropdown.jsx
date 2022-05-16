import { Link } from 'react-router-dom';

export const Dropdown = ({ largeDevice }) => {
  return (
    <>
      {largeDevice ? (
        <li className="dropdown dropdown-hover dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-outline rounded-lg border-primary hover:btn-primary m-1"
          >
            Book Now
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Item 1</Link>
            </li>
            <li>
              <Link to="/">Item 2</Link>
            </li>
          </ul>
        </li>
      ) : (
        <li className="dropdown dropdown-right">
          <label
            tabIndex="0"
            className="btn btn-outline rounded-lg border-primary hover:btn-primary m-1"
          >
            Book Now
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max"
          >
            <li>
              <Link to="/">Item 3</Link>
            </li>
            <li>
              <Link to="/">Item 2</Link>
            </li>
          </ul>
        </li>
      )}
    </>
  );
};
