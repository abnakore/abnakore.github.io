export default function SkillsMarquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="border-t border-b border-e-border py-4 overflow-hidden">
      <div className="flex gap-11 whitespace-nowrap animate-marquee font-archivo font-bold text-[15px] tracking-[0.02em]">
        {track.map((item, i) => (
          <span key={i} className={i % 2 === 0 ? 'text-e-accent' : 'text-e-dim2'}>
            {item} <span className="mx-3">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}