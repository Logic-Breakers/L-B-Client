export default function HostingRegisterItemTitle({ text, require, mb }) {
  return (
    <div className={`text-lg font-semibold ${mb ? "mb-2" : ""}`}>
      <span>{text}</span>
      {require ? <span className="text-red-500 ml-1">*</span> : ""}
    </div>
  );
}
