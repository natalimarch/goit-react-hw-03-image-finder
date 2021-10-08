import { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      console.log("Пусто");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };

  handleChange = (e) => {
    const searchInput = e.currentTarget.value;
    this.setState({
      query: searchInput,
    });
  };

  render() {
    const { query } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <>
        <header className={styles.Searchbar}>
          <form onSubmit={handleSubmit} className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}></span>
            </button>

            <input
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
