export default function HostingRegisterItemTitle({ text, require }) {
  return (
    <div className="text-lg font-semibold">
      <span className="text-gray-600">{text}</span>
      {require ? <span className="text-red-500 ml-1">*</span> : ""}
    </div>
  );
}
