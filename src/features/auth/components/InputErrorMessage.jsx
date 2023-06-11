export default function InputErrorMessage({ message }) {
  return (
    <span className="text-red-500 text-xs flex justify-start m-2">
      {message}
    </span>
  );
}
