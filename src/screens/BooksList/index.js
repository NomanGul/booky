import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { height } from "../../utils/dimensions";
import BookCard from "../../components/BookCard";
import ListFooter from "../../components/ListFooter";
import {
  BooksSaga,
  MoreBooksSaga,
  QueryBooksSaga,
  MoreQueryBooksSaga
} from "../../store/actions/books.actions";
import ErrorAlert from "../../components/ErrorAlert";
import NoResultsFound from "../../components/NoResultsFound";
import BooksIndicator from "../../components/BooksIndicator";
import { styles } from "./styles";

const BooksList = props => {
  const [firstMount, setFirstMount] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [queryText, setQueryText] = useState("");
  const [startIndex, setStartIndex] = useState(16);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const { dispatchBooksSaga } = props;
    try {
      await dispatchBooksSaga();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMoreBooks = async () => {
    const { dispatchMoreBooksSaga, dispatchMoreQueryBooksSaga } = props;
    try {
      if (queryText) {
        await dispatchMoreQueryBooksSaga(queryText, startIndex);
        return setStartIndex(startIndex + 15);
      }
      return dispatchMoreBooksSaga(queryText);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = async () => {
    firstMount && setFirstMount(false);
    setRefreshing(true);
    await getBooks();
    return setRefreshing(false);
  };

  const onQuery = async text => {
    const { dispatchQueryBooksSaga } = props;
    // await setStartIndex(1);
    await setQueryText(text);
    if (text) await dispatchQueryBooksSaga(text);
  };

  const closeSearch = () => {
    setQueryText("");
    setStartIndex(1);
  };

  const getItemLayout = (_, index) => ({
    length: height * 0.26,
    offset: height * 0.26 * index,
    index
  });

  const {
    navigation: { navigate },
    booksData,
    loading,
    loadingMore,
    queryBooksData,
    loadingQuery,
    error
  } = props;

  const queryBooksDataCond =
    queryText && queryBooksData.items && queryBooksData.items.length >= 15
      ? true
      : false;

  console.log("queryBooksDataCond@@@>>>>", queryBooksDataCond);

  return (
    <View style={styles.booksListContainer}>
      <Header
        menuToggle={() => console.log("toogggle")}
        query={text => onQuery(text)}
        WillCloseSearch={closeSearch}
      />
      {error ? (
        ErrorAlert(JSON.stringify(error, null, 2))
      ) : queryText &&
        queryBooksData.items &&
        queryBooksData.items.length < 15 &&
        !loadingQuery ? (
        <NoResultsFound />
      ) : (loading && firstMount) || loadingQuery ? (
        <BooksIndicator />
      ) : (
        <View>
          <FlatList
            contentContainerStyle={styles.itemsFlatList}
            numColumns={3}
            data={queryBooksDataCond ? queryBooksData.items : booksData.items}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={({ item }) => (
              <BookCard book={item} navigate={navigate} />
            )}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={handleLoadMoreBooks}
            onEndReachedThreshold={0.7}
            initialNumToRender={9}
            ListFooterComponent={<ListFooter loadMore={loadingMore} />}
            getItemLayout={getItemLayout}
          />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  const {
    booksReducer: {
      booksData,
      loading,
      loadingMore,
      queryBooksData,
      loadingQuery,
      error
    }
  } = state;
  return {
    booksData,
    loading,
    loadingMore,
    queryBooksData,
    loadingQuery,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchBooksSaga: () => dispatch(BooksSaga()),
    dispatchMoreBooksSaga: () => dispatch(MoreBooksSaga()),
    dispatchQueryBooksSaga: queryText => dispatch(QueryBooksSaga(queryText)),
    dispatchMoreQueryBooksSaga: (queryText, startIndex) =>
      dispatch(MoreQueryBooksSaga(queryText, startIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
