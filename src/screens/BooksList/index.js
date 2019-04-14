import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import { axios } from "../../configs/axios";

export default class BooksList extends Component {
  state = {
    booksData: [],
    loader: false
  };

  componentDidMount = () => {
    // this.getBooks();
  };

  getBooks = async () => {
    this.setState({ loader: true });
    try {
      const callBooksAPI = await axios.get(
        `volumes?q=design books&maxResults=5&projection=lite`
      );
      this.setState({ booksData: callBooksAPI.data.items, loader: false });
      console.log(callBooksAPI);
      // alert(JSON.stringify(callBooksAPI.data, null, 2));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { booksData, loader } = this.state;
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#ffff00" }}
      >
        <Header menuToggle={() => console.log("toogggle")} />
        <Text> BooksList </Text>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {loader ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            booksData.map(book => {
              return (
                <TouchableOpacity
                  key={book.id}
                  onPress={() => navigate("BookDetails", { bookId: book.id })}
                  style={{
                    // flex: 1,
                    width: "39%",
                    height: "20%",
                    margin: 1,
                    aspectRatio: 1
                  }}
                >
                  <Image
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                    style={{
                      resizeMode: "contain",
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
    );
  }
}
