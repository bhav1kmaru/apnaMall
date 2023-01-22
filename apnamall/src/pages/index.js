import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import Cart from "./cart/cart";

import Paymentpage from "./cart/paymentpage";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cart />
      <Paymentpage />
    </>
  );
}