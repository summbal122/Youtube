import Button from "./Button";

const OptionsSection  = () => {
  return (
    <div className="sticky z-20 bg-white overflow-x-auto whitespace-nowrap py-2">
      <button className="inline-block text-xs lg:text-sm 2xl:text-xl px-4 py-2 2xl:px-6 2xl:py-3 bg-black text-white rounded-md hover:cursor-pointer mr-1.5 md:mr-2 2xl:mr-4">
        All
      </button>
      <Button title="Music" />
      <Button title="Mixes" />
      <Button title="Irshad kamil" />
      <Button title="Mithoon" />
      <Button title="Lo-fi" />
      <Button title="Arijit Singh" />
      <Button title="Indian pop music" />
      <Button title="T-Series" />
      <Button title="Web Development" />
      <Button title="Pakistani dramas" />
      <Button title="Karan Aujla" />
      <Button title="Computer programming" />
      <Button title="Live" />
      <Button title="Albums" />
      <Button title="Recently uploaded" />
      <Button title="Watched" />
      <Button title="New to you" />
    </div>
  );
};

export default OptionsSection;
