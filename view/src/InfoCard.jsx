export default function InfoCard({ icon, text }) {
  return (
    <div className="flex gap-x-4 mt-4 cursor-pointer items-center">
      <div className="">
      {icon || null}
      </div>
      <p className="font-bold">{text}</p>
    </div>
  );
}
