import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ list }) => {
  console.log(list);
  const imgList = list.map((item) => {
    return (
      <ImageGalleryItem
        key={item.id}
        pageUrl={item.previewURL}
        largeUrl={item.largeImageURL}
        tags={item.tags}
      />
    );
  });
  return <ul className={styles.List}>{imgList}</ul>;
};

export default ImageGallery;
