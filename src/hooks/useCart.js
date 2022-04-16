import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* action */
import {
  countProducts,
  startAddToCart,
  startDeleteOneFromCart,
  startIsProductAddedToCart,
} from '../context/actions/shoppingCart';

/**
 *
 * @param {function} setShowModal handle modal function
 * @param {string} size product size
 * @return {object}
 */
export const useCart = (setShowModal, size) => {
  const dispatch = useDispatch();

  /* Component states */
  const [loadingAction, setLoadingAction] = useState(false);
  const [product, setProduct] = useState(null);
  const [productExist, setProductExist] = useState(false);

  /* Redux: global states */
  const { detailsData } = useSelector((state) => state.products);
  const { total } = useSelector((state) => state.shoppingCart);
  const { uid } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (uid) {
      setLoadingAction(true);
      dispatch(
        startAddToCart({
          userId: uid,
          productId: detailsData._id,
          quantity: 1,
          size,
        })
      );
      dispatch(countProducts(total + 1));

      setProductExist(true);
      setLoadingAction(false);
    } else {
      setShowModal(true);
    }
  };

  const handleRemoveFromCart = () => {
    if (uid) {
      setLoadingAction(true);

      dispatch(startDeleteOneFromCart(detailsData._id, uid));

      dispatch(countProducts(total - 1));
      setProductExist(false);
      setLoadingAction(false);
    }
  };

  const onAction = () => {
    if (!loadingAction) {
      if (productExist) {
        handleRemoveFromCart();
      } else {
        handleAddToCart();
      }
    }
  };

  useEffect(() => {
    setProduct(detailsData);
  }, [detailsData]);

  useEffect(() => {
    verifyProduct();
  }, [product]);

  /* check if the product has been added to cart */
  const verifyProduct = async () => {
    if (product !== null && uid) {
      const { _id } = product;

      const { exist } = await startIsProductAddedToCart(
        _id,
        uid
      );

      setProductExist(exist);
    }
  };

  return {
    loadingAction,
    productExist,
    onAction,
  };
};
