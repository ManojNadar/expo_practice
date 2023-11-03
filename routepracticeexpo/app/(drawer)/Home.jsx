import { View, Text, _View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function Home() {
  const [food, setFood] = useState([]);

  //   console.log(food);
  const getFoodData = async () => {
    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
      params: {
        "nutrition-type": "cooking",
        "category[0]": "generic-foods",
        "health[0]": "alcohol-free",
      },
      headers: {
        "X-RapidAPI-Key": "a8c015a484msh9d6aceac1ac1d6cp1b5e69jsna13d6fb113f2",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response.data.hints);
      setFood(response.data.hints);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getFoodData();
  }, []);
  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}>
        Home
      </Text>

      <View>
        <Text>HI MANOj</Text>
        <Text>What do you want for dinner</Text>
      </View>
      <View>
        <TextInput
          placeholder="search food"
          style={{ borderWidth: 2, width: 250 }}
        />
      </View>

      <View>
        <Text>Categories</Text>

        <ScrollView horizontal style={{ width: "100%", borderWidth: 1 }}>
          <Text style={{ width: 100, textAlign: "center" }}>Burger</Text>
          <Text style={{ width: 100, textAlign: "center" }}>Pizza</Text>
          <Text style={{ width: 100, textAlign: "center" }}>Chicken</Text>
          <Text style={{ width: 100, textAlign: "center" }}>Tandoori</Text>
        </ScrollView>
      </View>

      <Text>Most Popular</Text>
      <View>
        <FlatList
          //   horizontal
          keyExtractor={(key) => key.food?.foodId}
          data={food}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#A1A1A1",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                margin: 1,
                height: 120,
                width: 150,
              }}
            >
              {/* <Text>{item?.food?.category}</Text> */}

              <Image
                width={150}
                height={120}
                source={{ uri: `${item?.food?.image}` }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

// {food?.map((item) => (
//     <View key={item.food.foodId}>
//       <Text>{item.food.category}</Text>
//     </View>
//   ))}
