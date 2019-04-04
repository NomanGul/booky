import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Header from "../../components/Header";
import { axios } from "../../configs/axios";

export default class BookDetails extends Component {
  state = {
    bookData: {},
    loader: false
  };

  componentDidMount = () => {
    this.getBookData();
  };

  getBookData = async () => {
    this.setState({ loader: true });
    try {
      const { navigation } = this.props;
      const bookId = navigation.getParam("bookId");
      const callBookAPI = await axios.get(`volumes/${bookId}`);
      this.setState({ bookData: callBookAPI.data, loader: false });
      console.log(callBookAPI);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { bookData, loader } = this.state;
    const {
      navigation: { goBack }
    } = this.props;
    return (
      <View>
        <Header backBtn goBack={() => goBack()} />
        <Text> BookData </Text>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {loader ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : bookData.volumeInfo !== undefined ? (
            <View>
              <Text>Book Name: {bookData.volumeInfo.title}</Text>
            </View>
          ) : (
            <Text>Not Found!</Text>
          )}
        </View>
      </View>
    );
  }
}
