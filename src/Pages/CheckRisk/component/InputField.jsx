const InputField = ({ type, id, name, value, onChange, description }) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-white text-lg">{name.toUpperCase()}:</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-5/6 rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    );
  };

  
export default InputField
   