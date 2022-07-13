export default function ControlPanel(props) {
  return (
    <div className="entry-controls flex gap-[2px] absolute -translate-y-full bg-gray-600 border-2 border-gray-600">
      {props.children}
    </div>
  );
}
