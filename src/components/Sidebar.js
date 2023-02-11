import Image from "next/image";
import Link from "next/link";
import { FaChartPie } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag, HiOutlineTicket } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { BsCoin, BsBoundingBox } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPeopleOutline, IoTicketOutline } from "react-icons/io5";
import { VscSignOut, VscReferences } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image
        src="/image/swoplogo.png"
        alt="swop-logo"
        className="sidebar-logo"
        height={30}
        width={132}
      />
      <ul className="sideber-menu">
        <li className="active-menu">
          <Link href="/">
            <FaChartPie size={20} /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/users">
            <FiBarChart2 size={20} /> Users
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <AiOutlineShoppingCart size={20} />
            Orders
          </Link>
        </li>
        <li>
          <Link href="/products">
            <HiOutlineShoppingBag size={20} />
            Products
          </Link>
        </li>
        <li>
          <Link href="/cupon">
            <IoTicketOutline size={20} /> Cupon
          </Link>
        </li>
        <li>
          <Link href="/block-chain">
            <BsBoundingBox size={20} /> BlockChain
          </Link>
        </li>
        <li>
          <Link href="/referrals">
            <VscReferences size={20} /> Referrals
          </Link>
        </li>
        <li>
          <Link href="/support">
            <BiSupport size={20} /> Support
          </Link>
        </li>
        <li>
          <Link href="/financials">
            <BsCoin size={20} />
            Financials
          </Link>
        </li>
        <li>
          <Link href="/enterprises-leads">
            <MdOutlineLeaderboard size={20} />
            Enterprises Leads
          </Link>
        </li>
        <li>
          <Link href="/subscribers">
            <IoPeopleOutline size={20} />
            Subscribers
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <VscSignOut size={20} />
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
