import { Locale } from '@/lib/i18n'
import { Dispatch, SetStateAction, useMemo } from 'react'
import {
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const studentGrowthData = [
  { year: '2015', students: 2500 },
  { year: '2016', students: 5000 },
  { year: '2017', students: 20000 },
  { year: '2018', students: 20000 },
  { year: '2019', students: 10000 },
  { year: '2020', students: 5000 },
  { year: '2021', students: 8000 },
  { year: '2022', students: 7500 },
  { year: '2023', students: 8000 },
  { year: '2024', students: 8500 },
  { year: '2025', students: 9000 },
]

const schoolsData = [
  { year: '2015', schools: 5 },
  { year: '2016', schools: 10 },
  { year: '2019', schools: 25 },
  { year: '2021', schools: 5 },
  { year: '2023', schools: 10 },
  { year: '2025', schools: 10 },
]

const awardsData = [
  { year: '2016', awards: 500 },
  { year: '2018', awards: 1000 },
  { year: '2019', awards: 1500 },
  { year: '2020', awards: 2000 },
  { year: '2021', awards: 1800 },
  { year: '2022', awards: 1400 },
  { year: '2024', awards: 1000 },
]

interface ChartProps {
  activeChart: number
  setActiveChart: Dispatch<SetStateAction<number>>
  lang: Locale
}

function AchievementsChart({ activeChart = 0, setActiveChart, lang }: ChartProps) {
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      charts: [
        {
          title: 'نمو عدد الطلاب',
          description: 'زيادة مستمرة في عدد الطلاب المستفيدين من برامجنا',
        },
        {
          title: 'تطور عدد المدارس',
          description: 'نمو عدد المدارس المشاركة في برامجنا التطويرية',
        },
        {
          title: 'توزيع البرامج التعليمية',
          description: 'تنوع البرامج التعليمية المقدمة لتلبية احتياجات مختلفة',
        },
        {
          title: 'تطور أعداد الطلاب المتخرجين',
          description: 'زيادة عدد الطلاب المتخرجين من مدارس ومراكز الجمعية',
        },
      ],
      programsDistributionData: [
        { name: 'التعليم الرسمي', value: 45 },
        { name: 'التعليم غير الرسمي والمهارات', value: 20 },
        { name: 'الأنشطة والدعم النفسي', value: 15 },
        { name: 'برامج تقنية', value: 10 },
        { name: 'جودة التعليم', value: 10 },
      ],
      ariaLabel: 'عرض المخطط',
    },
    en: {
      charts: [
        {
          title: 'Growth in the Number of Students',
          description: 'A continuous increase in the number of students benefiting from our programs',
        },
        {
          title: 'Development in the Number of Schools',
          description: 'Growth in the number of schools participating in our development programs',
        },
        {
          title: 'Distribution of Educational Programs',
          description: 'A variety of educational programs designed to meet different needs',
        },
        {
          title: 'Development in the Number of Graduated Students',
          description: 'An increase in the number of students graduating from the association’s schools and centers',
        },
      ],
      programsDistributionData: [
        { name: 'Formal Education', value: 45 },
        { name: 'Non-Formal Education and Skills', value: 20 },
        { name: 'Activities and Psychological Support', value: 15 },
        { name: 'Technical Programs', value: 10 },
        { name: 'Education Quality', value: 10 },
      ],
      ariaLabel: 'Show chart',
    },
  }

  const t = content[lang]

  const chartData = useMemo(
    () => [
      {
        title: t.charts[0].title,
        description: t.charts[0].description,
        chart: (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={studentGrowthData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#203441" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#203441" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
              <YAxis stroke="rgba(255,255,255,0.7)" direction="ltr" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(32, 52, 65, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ color: 'white', fontWeight: 'bold' }}
              />
              <Area
                type="monotone"
                dataKey="students"
                stroke="#203441"
                fillOpacity={1}
                fill="url(#studentGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ),
      },
      {
        title: t.charts[1].title,
        description: t.charts[1].description,
        chart: (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={schoolsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
              <YAxis stroke="rgba(255,255,255,0.7)" direction="ltr" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(57, 87, 111, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ color: 'white', fontWeight: 'bold' }}
              />
              <Bar dataKey="schools" fill="#39576f" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ),
      },
      {
        title: t.charts[2].title,
        description: t.charts[2].description,
        chart: (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <Pie
                direction="ltr"
                data={t.programsDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {t.programsDistributionData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      index === 0
                        ? 'oklch(0.837 0.128 66.29)'
                        : index === 1
                          ? 'oklch(0.917 0.08 205.041)'
                          : index === 2
                            ? '#203441'
                            : index === 3
                              ? '#04f353'
                              : '#f910ad'
                    }
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(71, 108, 134, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ color: 'white', fontWeight: 'bold' }}
              />
            </PieChart>
          </ResponsiveContainer>
        ),
      },
      {
        title: t.charts[3].title,
        description: t.charts[3].description,
        chart: (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart
              data={awardsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
              <YAxis stroke="rgba(255,255,255,0.7)" direction="ltr" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(96, 96, 96, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ color: 'white', fontWeight: 'bold' }}
              />
              <Line
                type="monotone"
                dataKey="awards"
                stroke="#606060"
                strokeWidth={3}
                dot={{ r: 6, fill: '#606060', strokeWidth: 2, stroke: 'white' }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        ),
      },
    ],
    [t]
  )

  return (
    <div className="my-24" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-white/20 overflow-hidden">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{chartData[activeChart].title}</h3>
          <p className="text-white/80">{chartData[activeChart].description}</p>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {chartData[activeChart].chart}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {chartData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeChart === index ? 'bg-white w-6' : 'bg-white/40'
              }`}
              onClick={() => setActiveChart(index)}
              aria-label={`${t.ariaLabel} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementsChart