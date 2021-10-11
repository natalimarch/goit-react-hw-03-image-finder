import { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import { fields } from "./fields";

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" || type === "radio" ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { query } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}></span>
          </button>

          <input
            {...fields.query}
            className={styles.SearchFormInput}
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
