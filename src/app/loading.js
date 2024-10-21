const Loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-6xl font-bold text-white mb-8 animate-bounce drop-shadow-lg">Loading...</h1>

      {/* Custom Animated Circles Loader */}
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-white rounded-full animate-ping shadow-md"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-pulse shadow-md"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-ping shadow-md"></div>
      </div>

      <p className="text-white text-lg mt-8 animate-pulse opacity-90">Please wait, we’re fetching your content!</p>
    </div>
  );
};

export default Loading;
