import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const mobileMenuItem = (
    <>
      <li>
        <Link className="rounded-lg" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" to="/people">
          People
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" to="/publications">
          Publications
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" to="/resource">
          Resources
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" to="/more">
          More
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div class="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar sticky top-0 lg:px-10 shadow-md  z-20">
            <div class="flex-1 text-4xl font-semibold px-2 mx-2">
              <Link to="/">NGIT</Link>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

{/* for laptop  */}
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                <li>
                  <Link className="rounded-lg" to="/resource">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="rounded-lg" to="/more">
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {children}
        </div>

        {/* for mobile */}
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu menu-varticle p-4 overflow-y-auto w-100 bg-base-100">
            {mobileMenuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
