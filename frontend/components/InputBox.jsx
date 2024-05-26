/* eslint-disable react/prop-types */
export function InputBox({ label, placeholder, onChange }) {
  return (
    <>
      <div className="font-medium text-sm text-left py-2">{label}</div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full text-sm rounded-lg py-1 px-2 border-2"
          onChange={onChange}
        />
      </div>
    </>
  );
}
