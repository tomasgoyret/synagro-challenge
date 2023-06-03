const ProgressBar = ({ value, max }) => {
    const progress = (value / max) * 100;
  
    return (
      <div className="h-4 bg-gray-200 rounded">
        <div
          className="h-full bg-green-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;