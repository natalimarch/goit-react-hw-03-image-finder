import React from "react";
import LoaderSpin from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";
class Loader extends React.Component {
  render() {
    return (
      <LoaderSpin
        className={styles.Load}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default Loader;
