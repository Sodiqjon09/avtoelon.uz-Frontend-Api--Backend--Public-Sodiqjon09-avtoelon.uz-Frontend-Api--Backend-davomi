// import { NavbarData } from "../../data/navbar/navbar";
// import { useSpring, animated } from "react-spring";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

// function BarsClick() {
//   const styles = useSpring({
//     from: { opacity: 0, transform: "translateY(-20px)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//   });
//   return (
//     <div id="BarsClick">
//       <div>
//         <ul>
//           {NavbarData?.map((car) => (
//             <li key={car.id}>
//               <Link to={car.Link}>{car.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div id="headerTwo">
//         <Link to="post">
//           <animated.button className="btn" style={styles}>
//             <span>
//               <FontAwesomeIcon icon={faPlus} />
//             </span>
//             <span>Sotish</span>
//           </animated.button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default BarsClick;
