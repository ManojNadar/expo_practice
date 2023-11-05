// import { View, Text, Image, Pressable } from "react-native";
// import React, { useState } from "react";

// const cart = () => {
//   //   const [cartProduct, setCartProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   return (
//     <View>
//       {loading ? (
//         <View
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ActivityIndicator size={40} color={"red"} />
//         </View>
//       ) : null}

//       {error ? (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <Text>Error on Cart product</Text>
//         </View>
//       ) : null}

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-around",
//           alignItems: "center",
//           borderColor: "black",
//           borderWidth: 2,
//         }}
//       >
//         <Image
//           resizeMode="contain"
//           style={{ width: 100, height: 50 }}
//           // source={{ uri: singleProduct.image }}
//           source={require("../../assets/favicon.png")}
//         />
//         <Text style={{ textAlign: "center", marginTop: 3 }}>
//           {/* {singleProduct.title} */}
//           Men Clothing
//         </Text>

//         <Pressable style={{ backgroundColor: "red" }}>
//           <Text>Remove</Text>
//         </Pressable>
//       </View>

//       <View>
//         <Text>Total</Text>
//         <Text>Rs. 4000</Text>
//       </View>
//     </View>
//   );
// };

// export default cart;

import { View, Text } from "react-native";
import React from "react";
// import { Drawer } from "expo-router/drawer";

const cart = () => {
  return (
    <View>
      {/* <Drawer.Screen
        name="(tabs)/cart"
        options={{
          headerShown: false,
        }}
      /> */}
      <Text>cart</Text>
    </View>
  );
};

export default cart;
