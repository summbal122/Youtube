import Button from "./Button";

const OptionsSection  = () => {
  return (
    <div className="sticky z-20 bg-white overflow-x-auto whitespace-nowrap mr-4 py-2">
      <button className="inline-block text-sm px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer mr-2">
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
