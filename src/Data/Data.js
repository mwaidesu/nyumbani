// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Movers",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  
  
];

// Recent Update Card Data
export const UpdatesData = [
  {
    name: "Pauline Moh",
    noti: "has made a request for Keja move scheduled for 22.09.2022.",
    time: "25 seconds ago",
  },
  {
    name: "Irene Nj",
    noti: "has made a request for Keja move scheduled for 22.09.2022.",
    time: "30 minutes ago",
  },
  {
    name: "Joy Triza",
    noti: "has made a request for Keja move scheduled for 22.09.2022.",
    time: "2 hours ago",
  },
];


{/* <div>
<UilEstate/>
<span>Dashboard</span>
</div>
<div>
<UilClipboardAlt/>
<span>Movers</span>
</div>
<div>
<UilUsersAlt/>
<span>Customers</span>
</div>
</div> */}