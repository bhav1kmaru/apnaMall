import Image from "next/image";
import React from "react";
import Draw from "./Drawer";
import styles from "./Navbar.module.css";
import { Button } from "@chakra-ui/react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div>
      <div style={{ paddingRight: "10%" }} className={styles.invisible}>
        <Hamburger />
      </div>
      <div className={styles.red}>
        <div className={styles.logo}>
          <Image src="/th.jpg" alt="broken" width="80" height="80"></Image>
        </div>
        <div>
          <Draw />
        </div>
        <div className={styles.mall}>
          <input
            className={styles.search}
            placeholder="Search for a Product, Brand or Category"
          />
        </div>
        <div>
          {" "}
          <Button colorScheme="teal" variant="outline">
            My Orders
          </Button>
        </div>
        <div>
          <Button colorScheme="teal" variant="outline">
            Cart
          </Button>
        </div>
        <div>
          <Button colorScheme="teal" variant="outline">
            Log In/Sign Up
          </Button>
        </div>
        <div>
          <Button colorScheme="teal" variant="outline">
            Team Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
