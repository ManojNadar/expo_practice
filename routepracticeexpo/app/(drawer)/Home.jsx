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
    <View>
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={40} color={"red"} />
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
                  width: 200,
                  height: 320,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
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
                <Text>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
}
