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
import { TextInput } from "react-native-gesture-handler";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
        setFullData(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setAllProducts([]);
      });
  }, []);

  const searchInput = (value) => {
    if (value == "") {
      setAllProducts(fullData);
    } else {
      const filterData = allProducts.filter((e) => {
        return e.title.toLowerCase().includes(value.toLowerCase());
      });
      setAllProducts(filterData);
    }
  };

  // const sortDataName = () => {
  //   let sortData = allProducts.sort((a, b) => a.title > b.title);
  //   setAllProducts(sortData);
  // };
  // const sortDataHigh = () => {
  //   let sortData = allProducts.sort((a, b) => a.price - b.price);
  //   setAllProducts(sortData);
  // };
  // const sortDataLow = () => {
  //   let sortData = allProducts.sort((a, b) => (a.price - b.price ? 1 : -1));
  //   setAllProducts(sortData);
  // };
  // const sortDataRatings = () => {
  //   let sortData = allProducts.sort((a, b) =>
  //     a.rating.rate > b.rating.rate ? 1 : -1
  //   );
  //   setAllProducts(sortData);
  // };
  return (
    <View style={{ flex: 1 }}>
      {filterModal ? (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Pressable
            style={{ backgroundColor: "grey", padding: 10 }}
            onPress={() => {
              let sortData = allProducts.sort((a, b) =>
                a.title > b.title ? 1 : -1
              );
              setAllProducts(sortData);
              setFilterModal(false);
            }}
          >
            <Text>Name Sort</Text>
          </Pressable>
          <Pressable
            style={{ backgroundColor: "grey", padding: 10 }}
            onPress={() => {
              setAllProducts(allProducts.sort((a, b) => b.price - a.price));
              setFilterModal(false);
            }}
          >
            <Text>High to low</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setAllProducts(allProducts.sort((a, b) => a.price - b.price));
              setFilterModal(false);
            }}
            style={{ backgroundColor: "grey", padding: 10 }}
          >
            <Text> low to High</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setAllProducts(
                allProducts.sort((a, b) => b.rating.rate - a.rating.rate)
              );
              setFilterModal(false);
            }}
            style={{ backgroundColor: "grey", padding: 10 }}
          >
            <Text>Ratings</Text>
          </Pressable>
        </View>
      ) : null}
      <View>
        <TextInput
          placeholder="Search Product"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(value) => searchInput(value)}
        />

        <Text
          style={{ fontSize: 30, backgroundColor: "orange" }}
          onPress={() => setFilterModal(true)}
        >
          Filter
        </Text>
      </View>

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
