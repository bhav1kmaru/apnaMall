import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";

const UserDisplayComponent = () => {
  const [userInfo, setUserInfo] = useState({});
  // const [isLoggedIn,setIsLoggedIn]=useState(false)
  // const userInfoTemp=JSON.parse(localStorage.getItem('userInfo') || null
  //    console.log(isLoggedIn);
  useEffect(() => {
    const userInfoTemp = JSON.parse(localStorage.getItem("userInfo")) || null;
    if (userInfoTemp) {
      setUserInfo(userInfoTemp);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    setUserInfo({});
    window.location.reload();
    // setIsLoggedIn(false)
  };
  if (!userInfo.email) {
    return (
      <Button colorScheme="blue" size="sm" variant="outline">
        <Link
          href="/login"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <FiLogIn /> Log In/Sign Up
        </Link>
      </Button>
    );
  }
  return (
    <div>
      <Menu>
        <MenuButton>
          <Flex gap="10px" alignItems="center">
            <Text>{userInfo.name || userInfo.email}</Text>
            <Avatar src={userInfo.image} />
          </Flex>
        </MenuButton>
        <MenuList>
          <Text textAlign="center">{userInfo.email}</Text>
          <MenuItem onClick={logout}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserDisplayComponent;
