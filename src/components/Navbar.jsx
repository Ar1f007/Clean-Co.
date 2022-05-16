import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useId } from 'react';
import { Dropdown, ToggleTheme } from '../components';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export const Navbar = ({ children }) => {
  const id = useId();

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-0 lg:px-20">
        {/* <!-- Navbar --> */}

        <div className="w-full navbar bg-base-100">
          <div className="flex-1 px-2 mx-2 text-2xl">Clean Co.</div>
          <div className="flex-none lg:hidden">
            <ToggleTheme />
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              {/* <!-- Navbar menu content here --> */}
              {links.map(({ name, path }) => (
                <li key={`${id}-${name}`}>
                  <NavLink to={path} className="rounded-lg">
                    {name}
                  </NavLink>
                </li>
              ))}

              <Dropdown largeDevice={true} />
              <ToggleTheme />
            </ul>
          </div>
        </div>

        {/* <!-- Page content here --> */}
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 gap-y-1 overflow-y-auto w-max md:w-40 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {links.map(({ name, path }) => (
            <li key={`${id}-${name}`}>
              <NavLink to={path} className="rounded-lg">
                {name}
              </NavLink>
            </li>
          ))}

          <Dropdown />
        </ul>
      </div>
    </div>
  );
};
