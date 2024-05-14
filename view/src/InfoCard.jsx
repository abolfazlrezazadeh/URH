export default function InfoCard({ icon, text, onClick }) {
  return (
    <div className="flex gap-x-4 mt-4 cursor-pointer items-center" onClick={onClick}>
      <div className="">
      {icon || null}
      </div>
      <p className="font-semibold">{text}</p>
    </div>
  );
}
