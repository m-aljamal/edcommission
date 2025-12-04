interface SectionProps {
  children: React.ReactNode;
  lineStyle?: boolean;
}

function Sectiontitle({ children, lineStyle }: SectionProps) {
  if (lineStyle) {
    return (
      <div className="flex items-center gap-2 mt-10 mb-10">
        <h3 className="text-xl font-bold text-[#203441]">{children}</h3>
        <div className="h-0.5 flex-1 bg-gray-200"></div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-xl  font-bold text-[#203441] mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
        <span>{children}</span>
      </h3>
    </div>
  );
}

export default Sectiontitle;
