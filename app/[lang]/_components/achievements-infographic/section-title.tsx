function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-xl font-bold text-center text-white mb-12">
      <span className="relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></span>
      </span>
    </h3>
  );
}

export default SectionTitle;
