export default function ControlButton(props) {
  const { colorClass = "bg-gray-300", label, onClick } = props;

  return (
    <button
      className={`${colorClass} px-2 hover:brightness-90 active:brightness-[.8]`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
