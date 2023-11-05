import {
  FlatList,
  View,
  Text,
  _View,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import CustomBottomTabs from "../CustomBottomTabs";
// import { Drawer } from "expo-router/drawer";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  //   console.log(allProducts);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setAllProducts([]);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <Drawer.Screen /> */}
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 250,
          }}
        >
          <ActivityIndicator size={40} color={"blue"} />
        </View>
      ) : null}
      {error ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Error on Fetching the product</Text>
        </View>
      ) : null}

      {allProducts && (
        <View>
          <FlatList
            data={allProducts}
            keyExtractor={(key) => key.id}
            numColumns={2}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  height: 320,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                  borderWidth: 2,
                  backgroundColor: "white",

                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
                onPress={() => {
                  router.push({
                    pathname: "/SingleProduct",
                    params: { id: item.id },
                  });
                  //   console.log(item.id);
                }}
              >
                <Image
                  resizeMode="contain"
                  width={150}
                  height={250}
                  source={{ uri: item.image }}
                />
                <Text style={{ textAlign: "center" }}>
                  {item.title.slice(0, 15)}..
                </Text>
                <Text style={{ textAlign: "center" }}>Rs. {item.price}</Text>
                <Text style={{ textAlign: "center", color: "orange" }}>
                  *{item?.rating?.rate}
                </Text>
              </Pressable>
            )}
          />
        </View>
      )}

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "orange",
        }}
      >
        <CustomBottomTabs />
      </View>
    </View>
  );
}
