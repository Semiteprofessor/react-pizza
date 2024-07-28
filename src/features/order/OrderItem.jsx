import { formatCurrency } from "../../utils/helpers";
import PropType from "prop-types";

const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropType.shape({
    quantity: PropType.number.isRequired,
    name: PropType.string.isRequired,
    totalPrice: PropType.number.isRequired,
  }),
  isLoadingIngredients: PropType.bool.isRequired,
  ingredients: PropType.arrayOf(PropType.string).isRequired,
};

export default OrderItem;
