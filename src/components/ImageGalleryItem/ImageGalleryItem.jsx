import react from "react";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ pageUrl, largeUrl, tags }) => {
  return (
    <li className={styles.Item}>
      <img
        src={pageUrl}
        data-url={largeUrl}
        alt={tags}
        className={styles.Image}
      />
    </li>
  );
};

export default ImageGalleryItem;
