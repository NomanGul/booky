import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "./styles";

const BookCard = ({ book, navigate }) => {
  const { imageLinks } = book.volumeInfo;
  const thumbnail = imageLinks && imageLinks.thumbnail !== undefined;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        return navigate("BookDetails", {
          book
        });
      }}
      style={styles.bookCardContainer}
    >
      {thumbnail ? (
        <View style={styles.imgContainer}>
          <Image source={{ uri: imageLinks.thumbnail }} style={styles.img} />
        </View>
      ) : (
        <Image
          source={require("../../assets/images/no-thumbnail.jpg")}
          style={styles.noThumbnailImg}
        />
      )}
    </TouchableOpacity>
  );
};

export default BookCard;
