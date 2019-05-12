import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";
import { Button, ActionButton } from "react-native-material-ui";
import Header from "../../components/Header";
import { styles, favoriteBtn, buyBtn } from "./styles";
import { height } from "../../utils/dimensions";
import { COLORS } from "../../constant/colors";

const BookDetails = props => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const {
    book: { volumeInfo, saleInfo }
  } = props.navigation.state.params;
  const { imageLinks } = volumeInfo;
  const thumbnail = imageLinks && imageLinks.thumbnail !== undefined;
  const {
    navigation: { goBack }
  } = props;
  const amount = saleInfo.listPrice
    ? saleInfo.listPrice.amount
    : saleInfo.retailPrice
    ? saleInfo.retailPrice.amount
    : false;
  return (
    <View>
      <Header backBtn goBack={() => goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.halfTopContainer}>
          <View style={styles.bookCardContainer}>
            <View style={styles.imgContainer}>
              {thumbnail ? (
                <Image
                  source={{ uri: imageLinks.thumbnail }}
                  style={styles.img}
                />
              ) : (
                <Image
                  source={require("../../assets/images/no-thumbnail.jpg")}
                  style={styles.noThumbnailImg}
                />
              )}
            </View>
            <View style={styles.pageCountContainer}>
              <Text style={styles.pageCount}>
                {volumeInfo.pageCount
                  ? `${volumeInfo.pageCount} pages`
                  : "pages not specified"}
              </Text>
            </View>
          </View>
          <View style={styles.topRightContainer}>
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle} numberOfLines={3}>
                {volumeInfo.title}
              </Text>
              <Text style={styles.bookAuthorName}>
                by {volumeInfo.authors ? volumeInfo.authors[0] : "Anonymous"}
              </Text>
            </View>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.price}>{amount ? `${amount}` : "FREE"}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={volumeInfo.averageRating || 0}
                emptyStarColor="rgba(45, 45, 45, 0.5)"
                fullStarColor={COLORS.GREY}
                starSize={height * 0.025}
              />
            </View>
          </View>
        </View>
        <View style={styles.btnsContainer}>
          <Button raised text="BUY" primary style={buyBtn} />
          <ActionButton
            icon={isFavorite ? "favorite" : "favorite-border"}
            onPress={() => setIsFavorite(!isFavorite)}
            style={favoriteBtn}
          />
        </View>
        <View style={styles.halfBottomContainer}>
          <Text style={styles.description}>
            {volumeInfo.description || "No Description..."}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetails;
