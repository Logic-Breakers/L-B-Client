export default function HostingRegisterItemTitle({ text, require, mb }) {
  return (
    <div className={`text-lg font-semibold ${mb ? "mb-2" : ""}`}>
      <span className="text-gray-600">{text}</span>
      {require ? <span className="text-red-500 ml-1">*</span> : ""}
    </div>
  );
}
