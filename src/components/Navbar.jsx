import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import "../style/Navbar.css";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
export default function Navbar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "white",
      color: "black",
      right: -4,
      top: 5,
      padding: "0 1px",
    },
  }));

  const { productsInCard } = useSelector((store) => store.card);

  const totalProductCount = () => {
    let count = 0;
    for (let i = 0; i < productsInCard.length; i++) {
      count += productsInCard[i].count;
    }
    return count;
  };

  return (
    <div>
      <div className="bg-neutral-950 text-neutral-200" id="navbar-fixed">
        <div
          className="navbar-container container d-flex justify-content-between align-items-center"
          id="navbar"
        >
          <Link to={"/"}>
            <h3>E-Commerce App</h3>
          </Link>
          <Tabs />
          <div className="form d-flex">
            <form action="" className="d-flex">
              <input
                type="text"
                className="form-control w-100 rounded-end-0"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn rounded-start-0 me-4 text-white"
                style={{ backgroundColor: "rgb(90,94,97)" }}
              >
                <IoSearchOutline />
              </button>
            </form>
            <button>
              <IconButton aria-label="cart">
                <StyledBadge
                  badgeContent={totalProductCount()}
                  color="secondary"
                >
                  <CiShoppingBasket
                    className="fs-3 text-white"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                  />
                </StyledBadge>
              </IconButton>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            <Link to={"/categories-electronics"}>Electronics</Link>
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            <Link to={"/categories-jewelery"}>Jewelery</Link>
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            <Link to={"/categories-mens"}> Men's Clothing</Link>
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            <Link to={"/categories-womens"}> Women's Clothing</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <Link to={"/about"}>
          <h4 className="mb-0.5 text-sm font-medium">About Us</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </Link>
        <Link to={"/contact"}>
          <h4 className="mb-0.5 text-sm font-medium">Contact</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </Link>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
