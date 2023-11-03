import { View, Text, Image, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

const width = Dimensions.get("window");
const height = Dimensions.get("window");

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useLocalSearchParams();
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
      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 500 }}
        source={{ uri: singleProduct.image }}
      />
      <Text style={{ textAlign: "center", marginTop: 3, fontSize: 25 }}>
        {singleProduct.title}
      </Text>
    </View>
  );
};

export default SingleProduct;
