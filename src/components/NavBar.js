// import React, { useState, useEffect } from "react";
// import styled, from "styled-components";
// import {
//   createAppContainer,
//   createSwitchNavigator,
//   NavigationComponent,
//   NavigationParams
// } from "react-navigation";

// const navBarButtons = [
//   {
//     key: 0,
//     iconSelected: require("../img/ic_home_blue.png"),
//     iconUnselected: require("../img/ic_home.png"),
//     // selected: true,
//     nav: "Home"
//   },
//   {
//     key: 1,
//     iconSelected: require("../img/ic_friends_blue.png"),
//     iconUnselected: require("../img/ic_friends.png"),
//     // selected: false,
//     nav: "Rate"
//   },
//   {
//     key: 2,
//     iconSelected: require("../img/ic_chat_blue.png"),
//     iconUnselected: require("../img/ic_chat.png"),
//     // selected: false,
//     nav: "Summary"
//   },
//   {
//     key: 3,
//     iconSelected: require("../img/ic_settings_blue.png"),
//     iconUnselected: require("../img/ic_settings.png"),
//     // selected: false,
//     nav: "Settings"
//   }
// ];

// const NavBar = props => {
//   const [selected, setSelected] = useState(null);
//   console.log("rendered:", selected);

//   const selectedMenu = props.navigation.getParam("selectedMenu");
//   useEffect(() => {
//     if (props.default == true) {
//       setSelected(0);
//     } else {
//       setSelected(selectedMenu);
//     }
//   }, [props.default, selectedMenu]);

//   const CreateNavBar = () => {
//     navBarButtons.map(item => {
//       return (
//         <NavDiv>
//           key={item.key}
//           onPress=
//           {() => {
//             console.log(selected);
//             props.navigation.navigate(item.nav, { selectedMenu: item.key });
//           }}
//           >
//           {selected !== item.key && (
//             <>
//               <NavImg source={item.iconUnselected} />
//             </>
//           )}
//           {selected === item.key && (
//             <>
//               <NavImg source={item.iconSelected} />
//             </>
//           )}
//         </NavDiv>
//       );
//     });
//   };

//   return (
//     <div>
//       <CreateNavBar navBarButtons={navBarButtons} />
//     </div>
//   );
// };

// const NavDiv = styled.div`
//   flex: 1,
//   alignItems: 'center',
//   paddingTop: 10
// `;

// const NavImg = styled.img`
//     height: 20,
//     width: 35,
//     resizeMode: 'contain',
//     marginBottom: 8
// `;

// // const NavText = styled.text`
// //     height: 20,
// //     width: 35,
// //     resizeMode: 'contain',
// //     marginBottom: 8
// // `;

// export default NavBar2;
