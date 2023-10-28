import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export default function ImageGalleryItem({ image, openModal }) {
  function handleClick() {
    const largeImage = image.largeImageURL;
     openModal(largeImage);
  }
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={handleClick}
        data-source={image.largeImageURL}
        className={css['ImageGalleryItem-image']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};
