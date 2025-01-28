import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => {
    console.log(state);
    return false;
  });
  // const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            {/* <Link>
              <Logo width="70px"></Logo>
            </Link> */}
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) => {
              item.authStatus && (
                <li key={item.name}>
                  {/* <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button> */}
                </li>
              );
            })}
            {authStatus && <li>LogoutBtn</li>}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
