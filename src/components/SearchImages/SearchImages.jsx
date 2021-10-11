import { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

import { fetchImages } from "../../Api/api";

import styles from "../SearchImages/SearchImages.module.css";

class SearchImages extends Component {
  state = {
    list: [],
    page: 1,
    loading: false,
    error: null,
    query: "",
    total: 0,
    largeImageURL: "",
    showModal: false,
  };

  searchFormSubmit = (query) => {
    this.setState({
      query,
      loading: true,
      page: 1,
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        list: [],
        isLoading: true,
      });
      this.makeGallery();
      return;
    }
  }

  makeGallery = async () => {
    const { query, page } = this.state;

    try {
      const data = await fetchImages(query, page);
      const { hits, total } = data;
      this.setState(({ list, page }) => ({
        list: [...list, ...hits],
        page: page + 1,
        total,
        isLoading: false,
      }));
      if (page !== 1) {
        this.scroll();
      }

      // if (!total) {
      //   alert("There are no pictures");
      // }
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
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
    this.setState({ largeImageURL: largeUrl, showModal: true });
  };

  changeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { list, total, isLoading, showModal, largeImageURL } = this.state;
    const { searchFormSubmit, makeGallery, onPictureOpen, changeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchFormSubmit} />
        {!total && <p className={styles.Message}>There are no pictures!</p>}
        {Boolean(list.length) && (
          <ImageGallery list={list} onPictureOpen={onPictureOpen} />
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={changeModal}>
            <img src={largeImageURL} />
          </Modal>
        )}
        {this.showBtnLoadMore() && total && <Button onClick={makeGallery} />}
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
