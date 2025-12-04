
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#203441] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div 
        className="grid grid-cols-1 md:grid-cols-2  gap-10 "
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 "
        >
          {/* Logo and About Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Logo */}

              <div className="font-bold text-xl">جمعية تطوير التعليم</div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              نعمل على تطوير التعليم وتوفير فرص تعليمية متميزة للطلاب في جميع
              أنحاء المنطقة من خلال برامجنا المبتكرة ومبادراتنا المتنوعة.
            </p>
          </div>

          {/* Quick Links Column */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-bold relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#476c86] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>الرئيسية</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>من نحن</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>خدماتنا</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>المشاريع</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>الأخبار والفعاليات</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>تواصل معنا</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Services Column */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-bold relative inline-block">
              خدماتنا
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#476c86] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>تطوير المناهج</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>تدريب المعلمين</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>المنح الدراسية</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>الكفالات التعليمية</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>بناء المدارس</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold relative inline-block">
              معلومات الاتصال
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#476c86] to-transparent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 ">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300" dir="ltr">
                    +90 531 507 45 47
                  </p>
                 
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">info@edcommission.com</p>
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300" dir="ltr">
                    +90 512 345 6789
                  </p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#182a34] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} جميعة تطوير التعليم. جميع الحقوق محفوظة.
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Separator orientation="vertical" className="h-4 bg-gray-700" />
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                شروط الاستخدام
              </Link>
              <Separator orientation="vertical" className="h-4 bg-gray-700" />
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                خريطة الموقع
              </Link>
            </div>

            {/* <div className="text-gray-400 text-sm flex items-center gap-1">
              <span>صنع بـ</span>
              <Heart size={14} className="text-red-400 fill-red-400" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
