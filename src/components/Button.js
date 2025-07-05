const Button = ({ title }) => {
  return (
    <button className="inline-block px-4 py-2 bg-gray-200 rounded-md mr-2 whitespace-nowrap text-sm font-semibold">
      {title}
    </button>
  );
};

export default Button;