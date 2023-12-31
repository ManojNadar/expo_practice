import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import api from "../ApiConfig/Api";
import { useRouter } from "expo-router";
import { MyContext } from "../Context/FoodContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  // console.log(user);

  const { login } = useContext(MyContext);
  // useEffect(() => {
  //   if (state?.currentuser) {
  //     router.push("/Home");
  //   }
  // }, [state]);

  const handleChange = (text, name) => {
    setUser((prevValue) => ({ ...prevValue, [name]: text }));
  };

  const handleSubmit = async () => {
    const { email, password } = user;

    if (email && password) {
      // console.log(email, password, "from login");
      try {
        const response = await api.post("/login", { user });

        if (response.data.success) {
          alert(response.data.message);
          const userData = response.data.userData;
          const token = response.data.token;

          console.log(userData, token, "from backend");

          // login(userData, token);
          setUser({
            email: "",
            password: "",
          });

          router.push("/Home");
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("All fields are mandatory");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formHeading}>Login</Text>
        <TextInput
          placeholderTextColor="white"
          style={styles.formInput}
          placeholder="Enter email"
          onChangeText={(text) => handleChange(text, "email")}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={(text) => handleChange(text, "password")}
        />

        <Pressable
          onPress={() => navigation.navigate("home")}
          style={styles.formBtn}
        >
          <Text style={styles.formBtnTxt} onPress={handleSubmit}>
            Login
          </Text>
        </Pressable>

        <Text style={styles.newRegForm}>New User ?</Text>
        <Text style={styles.newReg} onPress={() => router.push("/register")}>
          Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 213, 128)",
  },
  form: {
    width: 320,
    height: 310,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },

  formHeading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },
  formInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "white",
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "white",
  },
  formBtn: {
    backgroundColor: "orange",
    width: "90%",
    marginTop: 25,
    paddingTop: 5,
    paddingBottom: 5,
  },
  formBtnTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  newRegForm: {
    color: "white",
    marginTop: 10,
  },

  newReg: {
    color: "orange",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
