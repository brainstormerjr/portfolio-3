export default function Chip({ text }: { text: string }) {
  return (
    <div className="px-2 py-1 border-1 border-emerald-200 text-emerald-200 w-fit h-fit group-hover:bg-emerald-200 group-hover:text-black transition-all">
      <p>{text}</p>
    </div>
  );
}
