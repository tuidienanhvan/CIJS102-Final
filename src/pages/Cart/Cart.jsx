import React from "react";
import { Alert, Button, Table } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { isDarkMode } = useTheme();
  const { cartItems, incrementCartItem, decrementCartItem } = useCart();

  // Tính tổng giá trị giỏ hàng
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  // Định nghĩa các cột cho antd Table
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span>${parseFloat(price.replace("$", ""))}</span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => decrementCartItem(record.id)}
            className="!rounded-full"
          >
            –
          </Button>
          <span>{quantity}</span>
          <Button
            onClick={() => incrementCartItem(record.id)}
            className="!rounded-full"
          >
            +
          </Button>
        </div>
      ),
    },
    {
      title: "Subtotal",
      key: "subtotal",
      render: (_, record) => (
        <span>
          $
          {parseFloat(record.price.replace("$", "")) * record.quantity}
        </span>
      ),
    },
  ];

  // Custom components để render header và body cell với Tailwind classes theo theme
  const tableComponents = {
    header: {
      cell: ({ children, ...restProps }) => (
        <th
          {...restProps}
          className={`p-2 font-medium border ${
            isDarkMode
              ? "!bg-black !text-white !border-white"
              : "!bg-white !text-black !border-black"
          }`}
        >
          {children}
        </th>
      ),
    },
    body: {
      cell: ({ children, ...restProps }) => (
        <td
          {...restProps}
          className={`p-2 border ${
            isDarkMode
              ? "!bg-black !text-white !border-white"
              : "!bg-white !text-black !border-black"
          }`}
        >
          {children}
        </td>
      ),
    },
  };

  const containerClass = isDarkMode
    ? "!bg-black !text-white"
    : "!bg-white !text-black";

  return (
    <div
      className={`${containerClass} min-h-screen flex flex-col items-center py-8`}
    >
      <h2 className="text-3xl font-bold mb-6">Cart</h2>
      {cartItems.length === 0 ? (
        <Alert message="Your cart is empty." type="info" showIcon />
      ) : (
        <div className="w-full max-w-3xl px-4">
          <Table
            dataSource={cartItems}
            columns={columns}
            rowKey="id"
            pagination={false}
            components={tableComponents}
            className="mb-6"
          />
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Total: ${totalPrice}</span>
            <Button type="primary" className="!rounded-lg !py-3 !px-6">
              Checkout
            </Button>
          </div>
          <div className="text-center">
            <Link to="/home" className="hover:text-red-500 transition">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
