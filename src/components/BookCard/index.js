import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { width, height } from "../../utils/dimensions";

const BookCard = ({ book, navigate }) => {
  const thumbnail =
    book.volumeInfo.imageLinks &&
    book.volumeInfo.imageLinks.thumbnail !== undefined;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        return navigate("BookDetails", {
          bookId: book.id
        });
      }}
      style={{
        width: width * 0.3,
        height: height * 0.4,
        aspectRatio: 0.75,
        padding: width * 0.02,
        marginBottom: height * 0.02
      }}
    >
      {thumbnail ? (
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            backgroundColor: "#ff0"
          }}
        >
          <Image
            source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
            style={{
              resizeMode: "stretch",
              width: "100%",
              height: "100%"
            }}
          />
        </View>
      ) : (
        <Image
          source={require("../../assets/images/no-thumbnail.jpg")}
          style={{
            flex: 1,
            width: undefined,
            height: undefined
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default BookCard;
