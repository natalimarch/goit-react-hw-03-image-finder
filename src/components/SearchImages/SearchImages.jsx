import { Component } from "react";

import { getImages } from "../Api/api";

import styles from "./SearchImages.module.css";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class SearchImages extends Component {
  state = {
    list: [],
    page: 1,
    loading: false,
    error: null,
    query: "",
  };

  searchFormSubmit = (query) => {
    this.setState({
      query,
    });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.fetchImages();
  }

  async fetchImages() {
    const { page, query } = this.state;
    try {
      const { data } = await getImages({ page, query });
      console.log(data);
      this.setState({
        list: data.hits,
        error: null,
        loading: false,
        page: page + 1,
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  async componentDidUpdate() {
    const { loading, page } = this.state;
    if (loading && page > 1) {
      try {
        const { data } = await getImages(page, 3);
        this.setState((prevState) => {
          return {
            list: [...prevState.list, ...data],
            error: null,
            loading: false,
            page: page + 1,
          };
        });
      } catch (error) {
        this.setState({ error, loading: false });
      }
    }
  }

  loadMore = () => {
    this.setState({ loading: true });
  };

  render() {
    const { list } = this.state;
    const { searchFormSubmit } = this;
    return (
      <>
        <Searchbar onSubmit={searchFormSubmit} />
        <ImageGallery list={list} />
        <Button />
      </>
    );
  }
}

export default SearchImages;
