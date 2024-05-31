import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import "./CategoryNav.css";
import Dropdown from "react-bootstrap/Dropdown";
import { MobileModalCancel } from "../../assets/icons";
import {
  SearchIcon,
  Heart,
  Envelop,
  Cart,
  Hamburger,
  SearchMobile
} from "../../assets/icons";
import NavigationModal from "../Modals/NavigationModal";
import { SilverNavIcon, AvatarIcon } from "../../assets/svg/icons";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [currentBalance, setCurrentBalance] = useState("0.00");
  const [notificationDigits, setNotificationDigits] = useState([]);
  const [toSearch, setToSearch] = useState(false);
  // const searchRef = useRef(null)
  const [searchResults, setSearchResults] = useState({});
  const [showModal, setShowModal] = useState(false);
  let searchRef = useRef();


  const searchProducts = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
     
      setToSearch(true);
    }
  };
 
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;

    html.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.position = "relative"; /* [1] */
    body.style.overflow = "hidden"; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;
    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
    scrollBlocked.current = false;
  };

  function MouseOver() {
    setIsHovered(true);
  }
  function MouseOut() {
    setIsHovered(false);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg static navbar-light category-nav">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
          <li className="nav-item navbar-item px-2">
            <span
              className="hamburger-menu"
              onClick={() => {
                setShowModal(true);
                blockScroll();
              }}
            >
              <Hamburger />
            </span>
          </li>
          <li className="nav-item navbar-item image-sizing-mobile">
            <Link to="/" className="nav-link" aria-current="page">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="w-[35%]">
            <a className="nav-link" href="#">
              <div className="relative hidden md:hidden lg:flex form-group has-search hide-search-bar">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                  onKeyUp={searchProducts}
                  ref={searchRef}
                />
                <span className="absolute top-2 left-5">
                  <button
                    onClick={() => {
                      searchProducts(searchRef.current.value);
                    }}
                  >
                    <SearchIcon />
                  </button>
                </span>
              </div>
            </a>
          </li>

          <div
            className="hidden lg:flex items-center gap-2"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            <SilverNavIcon />
            {isHovered && <p>Silver Member</p>}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <li className="flex">
             
              0 Coins
            </li>

            {/* <div className="hidden lg:flex">
              {show ? (
                <AiOutlineEye onClick={() => dispatch(hidePassword())} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => dispatch(showPassword())}
                />
              )}
            </div> */}
          </div>

          <Link to="/" className="text-black px-2.5">
            <li className="nav-item navbar-item ">
              <Heart className="heart-icon-nav" />
            </li>
          </Link>

          <Link
            // to={`/notification/${
            //   getData(myStore)?.data?.customer?.Membership_id
            // }`}
            className="relative text-black px-2.5"
          >
            <span className="absolute text-[12px] text-white -right-2 lg:-right-1.5 -top-3 bg-red-500 rounded-[100%] py-[10%] px-[20%]">
              0{" "}
            </span>
            <Envelop />
          </Link>

          <Link to="/" className="text-black px-2.5">
            <li className="relative">
              <span className="absolute text-sm -right-2 -top-2 bg-add rounded-[100%] py-[10%] px-[20%]">
                {0}
              </span>
              <Cart />
            </li>
          </Link>

          <li className="nav-item navbar-item user-icon-container">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <AvatarIcon /> Hi, Temitope
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>

        <div className="hidden form-group has-search search-mobile ">
          <span className="search-icon">
            <SearchMobile />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
            onKeyDownCapture={searchProducts}
            ref={searchRef}
          />
        </div>
      </nav>

      {showModal ? (
        <div className="absolute gap-8 flex z-30 top-0 w-full h-full bg-[#808080] bg-opacity-10 backdrop-blur-sm lg:hidden">
          <div className="flex w-[90%]">
            <div className="w-[90%]">
              <NavigationModal
                allowScroll={allowScroll}
                setShowModal={setShowModal}
              />
            </div>
            <div
              onClick={() => {
                setShowModal(false);
                allowScroll();
              }}
              className="w-fit h-fit"
            >
              <MobileModalCancel />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryNav;
