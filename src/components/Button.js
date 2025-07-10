const Button = ({ title }) => {
  return (
    <button className="inline-block px-4 py-2 2xl:px-6 2xl:py-3 bg-gray-200 rounded-md mr-1.5 md:mr-2 2xl:mr-4 whitespace-nowrap text-[10px] md:text-xs lg:text-sm  2xl:text-xl font-semibold hover:cursor-pointer">
      {title}
    </button>
  );
};

export default Button;