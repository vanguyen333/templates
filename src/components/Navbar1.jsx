const Navbar1 = () => {
  return (
    <div>
      {/* justify-between makes the 2 divs have space between, the second div to be on the far left */}
      <div className="nav flex gap-10 justify-between py-4 my-4 px-10 bg-orange-200 text-lg">
        <div className="brand">
          <h1 className="text-red-500 font-bold ">Brand Name</h1>
        </div>
        <div className="leftbar flex gap-10 ">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
