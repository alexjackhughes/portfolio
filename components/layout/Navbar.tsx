import { useState } from "react";
import Link from "next/link";

interface Props {
  isDark?: boolean;
}

export default function Navbar<Props>({ isDark = false }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span
              className={`navbar-burger burger ${isActive && "is-active"}`}
              data-target="navbarMenuHeroA"
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <Link href="/">
                <a className="navbar-item has-text-weight-bold has-text-dark">
                  HOME
                </a>
              </Link>
              <Link href="/blog">
                <a className="navbar-item has-text-weight-bold has-text-dark">
                  BLOG
                </a>
              </Link>
              <Link href="/contact">
                <span className="navbar-item">
                  <button className="button is-danger is-rounded">
                    <span className="has-text-weight-bold">Let's talk</span>
                    <span className="icon is-medium">
                      <i className="fad fa-paper-plane" />
                    </span>
                  </button>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {isActive && (
          <aside className="menu has-text-right is-hidden-desktop">
            <ul className="menu-list">
              <li>
                <Link href="/">
                  <a className="has-text-weight-bold is-size-2-mobile has-text-dark">
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="has-text-weight-bold is-size-2-mobile has-text-dark">
                    BLOG
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="has-text-weight-bold is-size-2-mobile has-text-dark">
                    MESSAGE
                  </a>
                </Link>
              </li>
            </ul>
          </aside>
        )}
      </nav>
      <style jsx>{`
        .navbar-burger span {
          height: 2px;
          color: $dark;
        }
      `}</style>
    </>
  );
}
