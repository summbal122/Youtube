import Button from "./Button";

const OptionsSection  = () => {
  return (
    <div className="w-full overflow-x-scroll whitespace-nowrap space-x-2 fixed bg-white -mt-6 py-4 z-10">
      <button className="inline-block text-sm px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer">
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
