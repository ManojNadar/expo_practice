import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";

const width = Dimensions.get("window");
const height = Dimensions.get("window");

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useLocalSearchParams();
  const router = useRouter();
  // console.log(id, "Singleproduct id");
  // console.log(singleProduct);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setSingleProduct({});
      });
  }, [id]);

  return (
    <View style={{ flex: 1, width: width, height: height }}>
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

      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 400 }}
        source={{ uri: singleProduct.image }}
      />
      <Text style={{ textAlign: "center", marginTop: 3, fontSize: 25 }}>
        {singleProduct.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 3,
          fontSize: 15,
          paddingHorizontal: 15,
        }}
      >
        {singleProduct.description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderWidth: 2,
          borderColor: "red",
          position: "absolute",
          width: "100%",
          bottom: 0,
          paddingVertical: 20,
        }}
      >
        <View>
          <Pressable>
            <Text>Heart</Text>
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text>Add To Cart</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => router.push("cart")}>
            <Text>Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SingleProduct;
