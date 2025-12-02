function AchievementsHeader() {
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
        <span className="text-white/90 text-sm font-medium">
          تقرير الإنجازات منذ 2015
        </span>
      </div>
      <h2 className="text-4xl font-bold text-white mb-6">
        إنجازاتنا ومشاريعنا
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-secound-blue to-white mx-auto mb-6"></div>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
        نفخر بما حققناه من إنجازات ونسعى دائماً لتطوير مشاريعنا لتحقيق أقصى
        فائدة للطلاب والمجتمع
      </p>
    </div>
  );
}

export default AchievementsHeader;
