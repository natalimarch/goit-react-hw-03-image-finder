import { Component } from "react";

import styles from "./SearchImages.module.css";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import { fetchImages } from "../Api/api";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

class SearchImages extends Component {
  state = {
    list: [],
    page: 1,
    loading: false,
    error: null,
    query: "",
    total: 0,
    largeImageURL: {},
    showModal: false,
  };

  searchFormSubmit = (query) => {
    this.setState({
      query,
      loading: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        list: [],
      });
      this.makeGallery();
      return;
    }
  }

  makeGallery = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then(({ hits, total }) => {
        this.setState((prevState) => ({
          list: [...prevState.list, ...hits],
          page: prevState.page + 1,
          total,
          isLoading: false,
        }));
        if (page !== 1) {
          this.scroll();
        }

        console.log("state", this.state.list);
        if (total === 0) {
          alert("There are no pictures");
        }
      })
      .catch((error) => alert(error.message))
      .finally(() => this.setState({ isLoading: false }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  showBtnLoadMore = () => {
    return Math.ceil(this.state.total / 12) !== this.state.page - 1;
  };

  onPictureOpen = (largeUrl) => {
    this.setState({ largeImageURL: largeUrl });
  };

  changeModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  render() {
    const { list, total, isLoading, showModal, largeImageURL } = this.state;
    const { searchFormSubmit, makeGallery, onPictureOpen, changeModal } = this;
    return (
      <>
        <Searchbar onSubmit={searchFormSubmit} />
        {list.length !== 0 && (
          <ImageGallery list={list} onPictureOpen={onPictureOpen} />
        )}
        {isLoading && <Loader />}
        {showModal && <Modal onClose={changeModal} largeUrl={largeImageURL} />}
        {this.showBtnLoadMore() && total !== 0 && (
          <Button onClick={makeGallery} />
        )}
      </>
    );
  }
}

export default SearchImages;

// async componentDidMount() {
//   this.setState({ loading: true });
//   this.fetchImages();
// }

// async fetchImages() {
//   const { page, query, list } = this.state;
//   try {
//     const { data } = await getImages({ page, query });
//     console.log(data.hits);
//     this.setState((prevState) => ({
//       list: [...list, ...data.hits],
//       error: null,
//       loading: false,
//       page: prevState.page + 1,
//       total: data.total,
//     }));
//   } catch (error) {
//     this.setState({ error, loading: false });
//   }
// }

// async componentDidUpdate() {
//   const { loading, page } = this.state;

//   if (loading && page > 1) {
//     this.fetchImages();
//   }
// }
