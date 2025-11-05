import { Brain, Heart, Home, School, Star, Users } from 'lucide-react'

export interface Activity {
  id: string
  title: string
  importance: string
  goal: string
  image: string
}

export interface Program {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  slug: string
  activities: Activity[]
  icon: string
}

export const psychologicalSupportData = {
  ar: {
    title: 'مشروع الحماية والدعم النفسيّ للأطفال',
    subtitle: 'رعاية شاملة لضحايا الحرب من الأيتام والأطفال في مدارسنا ومراكزنا التعليميّة',
    description: `في أعقاب حرب مدمّرة دامت 14 عامًا، تضرّر الأطفال – وخاصّة الأيتام – نفسيًّا واجتماعيًّا بشكل عميق. ومن هنا، أطلقت جمعيّة تطوير التعليم برنامجًا متكاملًا للحماية والدعم النفسيّ منذ بداية تأسيسها في مدارسها ومراكزها، يستند إلى رؤية إنسانيّة وتربويّة تهدف إلى:
    • توفير بيئة آمنة ومُساندة تُخفّف آثار الصدمات.
    • تمكين الأطفال نفسيًّا واجتماعيًّا.
    • تعزيز قدراتهم على التكيّف والتفاعل السليم مع محيطهم.
    
    يتكوّن المشروع من ستة برامج تخصّصيّة تُنفّذ عبر كادر مؤهّل وبشراكات محلّيّة ودوليّة، وقد أثبتت التجربة أثرها الإيجابيّ في تحسين صحّة الأطفال النفسيّة والسلوكيّة، ورفع وعي المعلمين والأسر.`,
    programs: [
      {
        id: '1',
        title: 'الدعم النفسيّ الاجتماعيّ (PSS)',
        shortDescription: 'يعزّز الصحّة النفسيّة والاندماج الاجتماعيّ للأطفال.',
        fullDescription: `يهدف هذا البرنامج إلى تعزيز الصحة النفسية والاندماج الاجتماعي للأطفال المتأثرين بالحرب، من خلال تطوير وعيهم الذاتي وتمكينهم من التعبير عن مشاعرهم بطريقة آمنة وصحيّة. ويوفّر أنشطة موجهة تُركّز على: فهم المشاعر، والتعامل مع التوتر، وبناء الثقة بالنفس، والتواصل مع الآخرين.
    
    يُنفّذ البرنامج في بيئة داعمة ضمن المدارس والمراكز، ويعتمد على أدوات فنّيّة وتعبيريّة مناسبة للمرحلة العمريّة، بإشراف مختصّين في الصحّة النفسيّة والدعم الاجتماعيّ.`,
        slug: 'psychosocial-support',
        icon: Heart,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-purple-500 to-indigo-600',
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-1',
            title: 'مهرجان العودة إلى المدرسة',
            importance: 'تخفيف القلق والارتباك عند بداية العام الدراسيّ.',
            goal: 'خلق جو مرح آمن يُشعر الأطفال بالترحيب والانتماء.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-2',
            title: 'مهرجان فرحة عيد',
            importance: 'تعويض الحرمان العاطفي الناتج عن الحرب.',
            goal: 'تعزيز الفرح والشعور بالمساواة والاندماج المجتمعيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-3',
            title: 'الإفطارات الرمضانيّة',
            importance: 'تعزيز الروابط بين الأطفال ومجتمعهم في المناسبات الدينيّة.',
            goal: 'ترسيخ مشاعر الألفة والتكافل الاجتماعيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-4',
            title: 'معارض الرسم والوسائل والأشغال اليدويّة',
            importance: 'قناة فنّيّة للتعبير عن المشاعر الكامنة.',
            goal: 'تمكين الأطفال من التواصل مع الذات بطريقة آمنة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-5',
            title: 'الرحلات الترفيهيّة والعلميّة',
            importance: 'تنفيس عن الضغوط النفسية وتحفيز المعرفة.',
            goal: 'توفير بيئة تعلّم ممتعة تُعزّز التفاعل الإيجابيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-6',
            title: 'المسابقات العلميّة والرياضيّة',
            importance: 'تعزيز الشعور بالنجاح والانتماء المدرسيّ.',
            goal: 'دعم الثقة بالنفس وتقدير الذات لدى الطفل.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-7',
            title: 'محفظة النقاط التحفيزيّة',
            importance: 'تشجيع السلوك الإيجابيّ والمتواصل.',
            goal: 'تحفيز الأطفال على الالتزام والانضباط الذاتيّ.',
          },
        ],
      },
      {
        id: '2',
        title: 'الحماية من المخاطر والعنف والانتهاكات',
        shortDescription: 'بناء وعي وقائيّ وتمكين الأطفال من الدفاع عن أنفسهم.',
        fullDescription: `يُعنى هذا البرنامج بتزويد الأطفال بالمعرفة والمهارات التي تُمكّنهم من التعرّف على العنف والانتهاكات بمختلف أشكالها (الجسدية، النفسية، الجنسية، والإهمال)، وبناء وعي وقائيّ يحفظ كرامتهم وسلامتهم. يرتكز البرنامج على أنشطة تفاعليّة تُعلّم الأطفال حقوقهم، وطرق حماية أنفسهم، وكيفيّة طلب المساعدة عند الحاجة.
    
    كما يعزّز البرنامج الثقة بالنفس والقدرة على الرفض والتبليغ، ويشمل إنشاء آليّات داخل المدارس والمراكز للإبلاغ الآمن والاستجابة السريعة، ضمن بيئة تربويّة داعمة ومُهيّأة نفسيًّا.`,
        slug: 'protection-from-risks',
        icon: Brain,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-red-500 to-rose-600',

        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-1',
            title: 'جلسات التوعية',
            importance: 'تمكين الأطفال من التعرف على أشكال العنف وحمايتهم منها.',
            goal: 'تعليم الأطفال حقوقهم وطرق حماية أنفسهم وطلب المساعدة عند الحاجة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-2',
            title: 'الدفاع المدنيّ',
            importance: 'تمكين الأطفال من التعامل مع الحالات الطارئة البسيطة بشكل سريع وفعّال.',
            goal: 'تعليم الأطفال المهارات الأساسية للإسعافات الأولية، مثل كيفية التعامل مع الجروح والحروق أو الإغماء، لضمان سلامتهم في المواقف الطارئة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-3',
            title: 'الإسعافات الأوليّة',
            importance: 'تمكين الأطفال من التعامل مع الحالات الطارئة البسيطة بشكل سريع وفعّال.',
            goal: 'تعليم الأطفال المهارات الأساسية للإسعافات الأولية، مثل كيفية التعامل مع الجروح والحروق أو الإغماء، لضمان سلامتهم في المواقف الطارئة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-4',
            title: 'مواصلات الأيتام',
            importance: 'تأمين وسيلة نقل آمنة للأيتام لضمان وصولهم إلى المدرسة بشكل منتظم.',
            goal: 'توفير خدمة المواصلات للأيتام لضمان عدم انقطاع تعليمهم.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-5',
            title: 'العيادة الطبّيّة المدرسيّة',
            importance: 'تقديم الرعاية الصحية الأساسية للطلاب والحفاظ على صحتهم.',
            goal: 'توفير اللقاحات، معالجة القمل، وتنفيذ حملات التفتيش للعناية بالنظافة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-6',
            title: 'مدوّنة السلوك',
            importance: 'وضع إطار واضح لضبط السلوك المدرسي.',
            goal: 'تعزيز ثقافة الأمان والانضباط الذاتي.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-7',
            title: 'اللجان الطلابيّة (نظافة – انضباط)',
            importance: 'تعزيز حس المسؤولية لدى الأطفال.',
            goal: 'إشراكهم في مراقبة بيئتهم المدرسية والمساهمة في حمايتها.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-8',
            title: 'الاستبيانات المنتظمة',
            importance: 'الكشف المبكر عن المشكلات.',
            goal: 'توفير استجابة مبكّرة لأي مشكلة أو انتهاك أو تحدٍّ نفسي.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-9',
            title: 'صندوق الشكاوى',
            importance: 'تعزيز ثقة الأطفال بأنفسهم وقدرتهم على الرفض والإبلاغ ضمن بيئة آمنة وداعمة.',
            goal: 'إنشاء آليات للإبلاغ الآمن والاستجابة السريعة في المدارس والمراكز لضمان حماية الأطفال.',
          },
        ],
      },
      {
        id: '3',
        title: 'بناء الشخصيّة وتعزيز القيم',
        shortDescription:
          'تعزيز الثقة بالنفس وغرس القيم الإيجابيّة، وتمكين الطفل من مهارات الحياة والتفاعل المجتمعيّ.',
        fullDescription: `يهدف هذا البرنامج إلى دعم الأطفال في تشكيل هويّة شخصيّة متوازنة، وتنمية الثقة بالنفس والمرونة النفسيّة، مع التركيز على غرس القيم الأخلاقيّة والإنسانيّة مثل التعاون، والاحترام، والصدق، وتحمّل المسؤوليّة. ويُساعد الأطفال على اكتشاف نقاط قوّتهم وتقدير ذواتهم، وتطوير مهارات الحياة مثل حلّ المشكلات، اتّخاذ القرار، وبناء علاقات إيجابيّة.
    
    يُنفَّذ البرنامج عبر أنشطة تفاعليّة وفنّيّة ومسرحيّة، وجلسات تحفيزيّة، ضمن بيئة مشجّعة تُنمّي الإيجابيّة والانتماء، وتُعزّز من قدرة الطفل على مواجهة التحدّيات اليوميّة بثبات ونضج.`,
        slug: 'character-building',
        icon: Star,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-emerald-500 to-teal-600',
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-1',
            title: 'اللوحات القيميّة',
            importance: 'تذكير بصري يومي بالقيم التربوية.',
            goal: 'ترسيخ السلوكيات الإيجابية في المدرسة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-2',
            title: 'الإذاعة المدرسيّة',
            importance: 'تعزيز القيم والتماسك المجتمعي عبر محتوى موجّه.',
            goal: 'ترسيخ الرسائل الأخلاقية والتربوية في محيط الطفل.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-3',
            title: 'المسرحيّات الهادفة',
            importance: 'وسيلة تفاعليّة لغرس القيم وتعزيز الفهم الأخلاقيّ والاجتماعيّ.',
            goal: 'بناء شخصيّة الطفل وتنمية وعيه من خلال تمثيل المواقف بطريقة مؤثّرة وممتعة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-4',
            title: 'المعلم الصغير',
            importance: 'غرس روح المساعدة والمسؤولية الشخصية.',
            goal: 'دعم التعلم التعاوني بين الأطفال.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-5',
            title: 'المسابقات العلمية والرياضية',
            importance: 'نشر قيم المنافسة العادلة والإصرار.',
            goal: 'تعزيز الروح الرياضيّة والتكافل داخل المجتمع المدرسيّ.',
          },
        ],
      },
      {
        id: '4',
        title: 'المعالجة الجماعيّة والوقاية النفسيّة',
        shortDescription: 'يعالج الصدمات النفسيّة عبر تدخّلات جماعيّة وفرديّة منظّمة.',
        fullDescription: `يُركّز هذا البرنامج على تقديم استجابات نفسيّة منظّمة للأطفال الذين تعرّضوا لصدمات مباشرة كالفقد، والنزوح، أو العنف، من خلال جلسات جماعيّة آمنة تُوفّر مساحة للتفريغ والمشاركة؛ بهدف تفكيك أثر الصدمة وإعادة تأطير التجربة بطريقة تساعد الطفل على استيعابها دون أن تبقى عبئًا داخليًّا طويل الأمد. باستخدام أدوات متنوعة مثل السرد القصصيّ، والتعبير الفنّيّ، والحركة، ويُراعى فيه الفروق العمريّة والثقافيّة.
    
    كما يتضمن البرنامج جانبًا وقائيًّا عبر رصد الأطفال الأكثر عرضة للخطر، وتقديم تدخّلات مبكّرة تقي من تفاقم الأعراض النفسيّة وتُعزّز التكيّف الإيجابيّ مع الواقع.`,
        slug: 'group-therapy',
        icon: Users,
        color: 'from-amber-500 to-orange-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-1',
            title: 'جلسات الإرشاد الفرديّة والجماعيّة',
            importance: 'توفير دعم نفسي متخصص للمتأثرين بالحرب.',
            goal: 'تمكين الأطفال من تجاوز التجارب الصادمة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-2',
            title: 'جلسات التفريغ الجماعيّ',
            importance: 'توفير دعم نفسي متخصّص للمتأثرين بالحرب.',
            goal: 'تمكين الأطفال من تجاوز التجارب الصادمة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-3',
            title: 'السرد القصصيّ والعلاج بالفنّ',
            importance: 'يساعد على التعبير عن المشاعر والأفكار بطريقة غير لفظيّة.',
            goal: 'إعادة بناء التجارب السلبيّة وتحويلها إلى فرص للشفاء.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-4',
            title: 'أنشطة الحركة والرقص العلاجيّ',
            importance: 'يتيح للأطفال التعبير عن مشاعرهم جسديًّا.',
            goal: 'تخفيف التوتّر والقلق باستخدام الحركة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-5',
            title: 'رصد الأطفال المعرّضين للخطر',
            importance: 'يساعد في التدخّل المبكّر لمنع تفاقم الأعراض النفسيّة.',
            goal: 'تقديم دعم نفسيّ مبكر وتعزيز التكيّف الإيجابيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-6',
            title: 'زيارات منزليّة لفريق الدعم النفسيّ',
            importance: 'فهم الظروف المحيطة بالطفل عن كثب.',
            goal: 'تقديم دعم نفسيّ مخصص وفعّال.',
          },
        ],
      },
      {
        id: '5',
        title: 'تمكين الكوادر التعليميّة',
        shortDescription: 'تهيئة المعلّمين لدورهم النفسيّ والاجتماعيّ في بيئة الحرب وما بعدها.',
        fullDescription: `يُعنى هذا البرنامج بإعداد المعلّمين والمربّين ليكونوا دَعمًا نفسيًّا وتربويًّا فعّالًا للأطفال في بيئة الحرب وما بعدها، عبر تزويدهم بالأدوات والمعارف التي تُمكّنهم من رصد الاضطرابات النفسيّة المبكّرة، وتقديم تدخّلات أوّليّة مناسبة داخل الصفّ. وذلك بتدريبهم على الإسعاف النفسي الأولي (PFA)، وبناء بيئة صفّيّة آمنة وعادلة نفسيًّا، والتواصل المتعاطف مع الأطفال المتأثرين بالحرب.
    
    كما يُوفّر مسارًا موازيًا لدعم الكادر نفسه، عبر جلسات "تفريغ مهنيّ" تُعالج الضغط النفسيّ الناتج عن العمل في بيئات هشّة، بما يعزّز من صحّة المعلّم النفسيّة واستقراره، ويجعله أكثر قدرة على أداء دوره التربويّ والإنسانيّ بكفاءة.`,
        slug: 'teacher-empowerment',
        color: 'from-pink-500 to-rose-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        icon: School,
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-1',
            title: 'المعلّم الداعم',
            importance:
              'تدريب المعلمين على التدخّلات النفسيّة الأوّليّة والتعامل مع الطلاب لدعمهم نفسيًّا.',
            goal: 'تمكين المعلمين من تقديم الدعم النفسيّ الفوريّ وخلق بيئة تعليميّة آمنة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-2',
            title: 'المعلّم إنسان',
            importance: 'دعم الكادر التربويّ للتخفيف من الضغوط المهنيّة وتحسين صحّتهم النفسيّة.',
            goal: 'توفير جلسات تفريغ نفسيّ للكادر التعليميّ لتحسين أدائهم المهنيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-3',
            title: 'حقيبة المعلم',
            importance: 'دعم المعلم بوسائل تعليميّة وأدوات تنظيميّة.',
            goal: 'تحسين جودة العمليّة التعليميّة والدعم النفسيّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-4',
            title: 'عيديّة المعلم',
            importance: 'تعزيز معنويات الكادر التربويّ.',
            goal: 'إشعار المعلم بقيمته التربويّة والإنسانيّة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-5',
            title: 'سلّة غذائيّة للمعلمين',
            importance: 'تخفيف الضغوط المعيشية عن المعلمين.',
            goal: 'دعم الاستقرار المهنيّ والنفسيّ للكادر التربويّ.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-6',
            title: 'الاستبيانات المنتظمة',
            importance: 'تقييم احتياجات الكادر ومناخ المدرسة.',
            goal: 'تطوير البرامج التربويّة بناءً على معطيات دقيقة.',
          },
        ],
      },
      {
        id: '6',
        title: 'شراكة الأسرة والمجتمع',
        shortDescription: 'تمكين البيئة الداعمة حول الطفل وتفعيل تواصل المدرسة مع الأسرة والمجتمع.',
        fullDescription: `ينطلق هذا البرنامج من أهمّيّة تكامل الأدوار بين المدرسة والأسرة والمجتمع، بهدف تمكين البيئة المحيطة بالطفل خلال الحرب وبعدها لتكون مصدر دعم وأمان نفسيّ واجتماعيّ. يعمل البرنامج على تعزيز وعي أولياء الأمور بأساليب التربية الداعمة وغير العنيفة، وتفعيل قنوات التواصل الفعّال بين الأهل والمعلّمين، إلى جانب تشكيل لجان حماية مجتمعيّة داخل المدارس تضمّ معلّمين وطلّابًا وأسرًا لرصد الانتهاكات والتدخّل المبكّر.
    
    ويسعى البرنامج إلى خلق شبكة حماية متكاملة تحيط بالطفل وتدعم تعافيه ونموّه في بيئة آمنة ومتعاونة.`,
        slug: 'family-community-partnership',
        icon: Home,
        color: 'from-blue-500 to-cyan-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-1',
            title: 'توعية الأسرة',
            importance: 'تعزيز وعي الأسرة بأساليب التربية الآمنة والتعاون مع المدرسة.',
            goal: 'تنظيم ورش توعية للأهالي حول التربية الآمنة وتعزيز التواصل مع المدرسة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-2',
            title: 'اجتماعات أولياء الأمور مع الكادر التعليمي',
            importance: 'إشراك الأسرة في القرار التربويّ.',
            goal: 'بناء تواصل فعّال يدعم الطفل نفسيًّا وأكاديميًّا.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-3',
            title: 'زيارات منزلية',
            importance: 'خلق جسر ثقة بين المدرسة والعائلة.',
            goal: 'تحسين التفاعل الأسريّ مع احتياجات الطفل.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-4',
            title: 'حقيبة الطالب المدرسية',
            importance: 'دعم الأسر المحتاجة وتشجيع الأطفال على الالتزام بالمدرسة.',
            goal: 'إزالة العوائق المادّيّة عن العمليّة التعليميّة.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-5',
            title: 'كسوة العيد وكسوة الشتاء',
            importance: 'توفير احتياجات أساسيّة تعزز كرامة الطفل.',
            goal: 'إشعار الطفل بالكرامة والأمان وكسر شعور الحرمان لديه.',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Child Protection and Psychological Support Project',
    subtitle: 'Comprehensive care for war victims, orphans, and children in our schools and educational centers.',
    description: `In the wake of a devastating 14-year war, children—especially orphans—have been deeply affected psychologically and socially. Since its establishment, the Education Development Association has launched a comprehensive Psychological Protection and Support program in its schools and centers, based on a humanitarian and educational vision that aims to:
    • Provide a safe and supportive environment to mitigate the effects of trauma.
    • Empower children psychologically and socially.
    • Enhance their ability to adapt and interact healthily with their environment.
    
    The project consists of six specialized programs implemented by qualified staff and through local and international partnerships. Experience has proven its positive impact on improving children's psychological and behavioral health, and raising the awareness of teachers and families.`,
    programs: [
      {
        id: '1',
        title: 'Psychosocial Support (PSS)',
        shortDescription: 'Promotes children\'s psychological health and social integration.',
        fullDescription: `This program aims to enhance the psychological health and social integration of war-affected children by developing their self-awareness and empowering them to express their feelings in a safe and healthy way. It provides targeted activities focused on: understanding emotions, coping with stress, building self-confidence, and communicating with others.
    
    The program is implemented in a supportive environment within schools and centers, relying on artistic and expressive tools appropriate for the age group, and supervised by specialists in psychological health and social support.`,
        slug: 'psychosocial-support',
        icon: Heart,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-purple-500 to-indigo-600',
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-1',
            title: 'Back-to-School Festival',
            importance: 'Alleviating anxiety and confusion at the start of the academic year.',
            goal: 'Creating a safe, joyful atmosphere that makes children feel welcomed and included.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-2',
            title: 'Eid Joy Festival',
            importance: 'Compensating for the emotional deprivation resulting from the war.',
            goal: 'Promoting joy, a sense of equality, and community integration.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-3',
            title: 'Ramadan Iftars (Communal Dinners)',
            importance: 'Strengthening bonds between children and their community during religious occasions.',
            goal: 'Consolidating feelings of friendship and social solidarity.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-4',
            title: 'Exhibitions of Drawing, Media, and Handicrafts',
            importance: 'An artistic channel for expressing underlying emotions.',
            goal: 'Empowering children to connect with themselves in a safe way.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-5',
            title: 'Recreational and Scientific Trips',
            importance: 'Relieving psychological stress and stimulating knowledge.',
            goal: 'Providing an enjoyable learning environment that fosters positive interaction.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-6',
            title: 'Scientific and Sports Competitions',
            importance: 'Boosting a sense of success and school belonging.',
            goal: 'Supporting the child\'s self-confidence and self-esteem.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '1-7',
            title: 'Motivational Points Portfolio',
            importance: 'Encouraging positive and continuous behavior.',
            goal: 'Motivating children toward commitment and self-discipline.',
          },
        ],
      },
      {
        id: '2',
        title: 'Protection from Risks, Violence, and Abuse',
        shortDescription: 'Building preventative awareness and empowering children to defend themselves.',
        fullDescription: `This program is concerned with equipping children with the knowledge and skills that enable them to recognize violence and abuse in all its forms (physical, psychological, sexual, and neglect), and to build preventative awareness that preserves their dignity and safety. The program relies on interactive activities that teach children their rights, methods of self-protection, and how to seek help when needed.
    
    The program also enhances self-confidence and the ability to refuse and report, and includes establishing mechanisms within schools and centers for safe reporting and rapid response, within a supportive and psychologically prepared educational environment.`,
        slug: 'protection-from-risks',
        icon: Brain,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-red-500 to-rose-600',

        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-1',
            title: 'Awareness Sessions',
            importance: 'Empowering children to recognize and protect themselves from forms of violence.',
            goal: 'Teaching children their rights, how to protect themselves, and how to ask for help when needed.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-2',
            title: 'Civil Defense',
            importance: 'Enabling children to deal with simple emergency situations quickly and effectively.',
            goal: 'Teaching children basic first aid skills, such as how to handle wounds, burns, or fainting, to ensure their safety in emergency situations.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-3',
            title: 'First Aid',
            importance: 'Enabling children to deal with simple emergency situations quickly and effectively.',
            goal: 'Teaching children basic first aid skills, such as how to handle wounds, burns, or fainting, to ensure their safety in emergency situations.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-4',
            title: 'Orphan Transportation',
            importance: 'Securing safe transportation for orphans to ensure their regular school attendance.',
            goal: 'Providing transportation service for orphans to ensure continuity of their education.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-5',
            title: 'School Medical Clinic',
            importance: 'Providing essential primary healthcare to students and maintaining their health.',
            goal: 'Providing vaccinations, treating lice, and implementing inspection campaigns for cleanliness care.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-6',
            title: 'Code of Conduct',
            importance: 'Establishing a clear framework for regulating school behavior.',
            goal: 'Fostering a culture of safety and self-discipline.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-7',
            title: 'Student Committees (Cleanliness – Discipline)',
            importance: 'Promoting a sense of responsibility among children.',
            goal: 'Involving them in monitoring their school environment and contributing to its protection.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-8',
            title: 'Regular Questionnaires',
            importance: 'Early detection of problems.',
            goal: 'Providing an early response to any psychological challenge, abuse, or problem.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '2-9',
            title: 'Complaints Box',
            importance: 'Fostering children\'s self-confidence and their ability to refuse and report in a safe and supportive environment.',
            goal: 'Establishing mechanisms for safe reporting and rapid response in schools and centers to ensure child protection.',
          },
        ],
      },
      {
        id: '3',
        title: 'Character Building and Value Promotion',
        shortDescription:
          'Boosting self-confidence, instilling positive values, and empowering the child with life skills and social interaction.',
        fullDescription: `This program aims to support children in forming a balanced personal identity, developing self-confidence and psychological resilience, with a focus on instilling moral and human values such as cooperation, respect, honesty, and taking responsibility. It helps children discover their strengths, appreciate themselves, and develop life skills such as problem-solving, decision-making, and building positive relationships.
    
    The program is implemented through interactive, artistic, and theatrical activities, and motivational sessions, within an encouraging environment that promotes positivity and belonging, and enhances the child's ability to face daily challenges with steadiness and maturity.`,
        slug: 'character-building',
        icon: Star,
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        color: 'from-emerald-500 to-teal-600',
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-1',
            title: 'Value Boards',
            importance: 'Daily visual reminder of educational values.',
            goal: 'Consolidating positive behaviors in the school.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-2',
            title: 'School Radio Broadcasts',
            importance: 'Promoting values and social cohesion through guided content.',
            goal: 'Reinforcing moral and educational messages in the child\'s environment.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-3',
            title: 'Purposeful Theatrical Plays',
            importance: 'An interactive way to instill values and enhance moral and social understanding.',
            goal: 'Building the child\'s personality and developing their awareness by simulating situations in an influential and enjoyable way.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-4',
            title: 'Little Teacher',
            importance: 'Instilling the spirit of helpfulness and personal responsibility.',
            goal: 'Supporting cooperative learning among children.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '3-5',
            title: 'Scientific and Sports Competitions',
            importance: 'Spreading the values of fair competition and perseverance.',
            goal: 'Promoting sportsmanship and solidarity within the school community.',
          },
        ],
      },
      {
        id: '4',
        title: 'Group Therapy and Psychological Prevention',
        shortDescription: 'Addresses psychological trauma through structured group and individual interventions.',
        fullDescription: `This program focuses on providing structured psychological responses to children who have experienced direct trauma such as loss, displacement, or violence, through safe group sessions that offer a space for emotional release and sharing; aiming to deconstruct the effect of the trauma and reframe the experience in a way that helps the child process it without it remaining a long-term internal burden. Using diverse tools such as storytelling, artistic expression, and movement, while taking into account age and cultural differences.
    
    The program also includes a preventative aspect by monitoring children most at risk, and providing early interventions that prevent the escalation of psychological symptoms and promote positive coping with reality.`,
        slug: 'group-therapy',
        icon: Users,
        color: 'from-amber-500 to-orange-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-1',
            title: 'Individual and Group Counseling Sessions',
            importance: 'Providing specialized psychological support for those affected by the war.',
            goal: 'Empowering children to overcome traumatic experiences.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-2',
            title: 'Group Debriefing Sessions',
            importance: 'Providing specialized psychological support for those affected by the war.',
            goal: 'Empowering children to overcome traumatic experiences.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-3',
            title: 'Storytelling and Art Therapy',
            importance: 'Helps in expressing feelings and thoughts non-verbally.',
            goal: 'Rebuilding negative experiences and turning them into opportunities for healing.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-4',
            title: 'Movement and Therapeutic Dance Activities',
            importance: 'Allows children to express their feelings physically.',
            goal: 'Relieving tension and anxiety using movement.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-5',
            title: 'Monitoring At-Risk Children',
            importance: 'Helps in early intervention to prevent the escalation of psychological symptoms.',
            goal: 'Providing early psychological support and promoting positive coping.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '4-6',
            title: 'Home Visits by the Psychological Support Team',
            importance: 'Closely understanding the child\'s surrounding circumstances.',
            goal: 'Providing customized and effective psychological support.',
          },
        ],
      },
      {
        id: '5',
        title: 'Empowering Educational Staff',
        shortDescription: 'Preparing teachers for their psychological and social role in the wartime and post-war environment.',
        fullDescription: `This program is concerned with preparing teachers and educators to be effective psychological and educational support for children in the wartime and post-war environment, by providing them with tools and knowledge that enable them to monitor early psychological disturbances and provide appropriate initial interventions inside the classroom. This is done by training them in Psychological First Aid (PFA), building a safe and psychologically fair classroom environment, and empathetic communication with war-affected children.
    
    It also provides a parallel track to support the staff themselves, through "professional debriefing" sessions that address the psychological pressure resulting from working in fragile environments, thereby promoting the teacher's psychological health and stability, making them more capable of performing their educational and humanitarian role efficiently.`,
        slug: 'teacher-empowerment',
        color: 'from-pink-500 to-rose-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        icon: School,
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-1',
            title: 'The Supportive Teacher',
            importance:
              'Training teachers on primary psychological interventions and dealing with students to support them psychologically.',
            goal: 'Empowering teachers to provide immediate psychological support and create a safe learning environment.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-2',
            title: 'The Teacher is Human',
            importance: 'Supporting the educational staff to alleviate professional stress and improve their psychological health.',
            goal: 'Providing psychological debriefing sessions for the educational staff to improve their professional performance.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-3',
            title: 'Teacher Kit',
            importance: 'Supporting the teacher with educational aids and organizational tools.',
            goal: 'Improving the quality of the educational process and psychological support.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-4',
            title: 'Teacher Eid Bonus/Gift',
            importance: 'Boosting the morale of the educational staff.',
            goal: 'Making the teacher feel their educational and humanitarian value.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-5',
            title: 'Food Basket for Teachers',
            importance: 'Alleviating the living pressures on teachers.',
            goal: 'Supporting the professional and psychological stability of the educational staff.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '5-6',
            title: 'Regular Questionnaires',
            importance: 'Assessing staff needs and school climate.',
            goal: 'Developing educational programs based on accurate data.',
          },
        ],
      },
      {
        id: '6',
        title: 'Family and Community Partnership',
        shortDescription: 'Empowering the supportive environment around the child and activating school communication with family and community.',
        fullDescription: `This program stems from the importance of integrating roles among the school, family, and community, with the aim of empowering the child\'s surrounding environment during and after the war to be a source of psychological and social support and safety. The program works to enhance parents\' awareness of supportive and non-violent parenting methods, and to activate effective communication channels between parents and teachers, in addition to forming community protection committees within schools that include teachers, students, and families to monitor abuse and provide early intervention.
    
    The program seeks to create a comprehensive protection network that surrounds the child and supports their recovery and growth in a safe and cooperative environment.`,
        slug: 'family-community-partnership',
        icon: Home,
        color: 'from-blue-500 to-cyan-600',
        image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
        activities: [
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-1',
            title: 'Family Awareness',
            importance: 'Enhancing family awareness of safe parenting methods and cooperation with the school.',
            goal: 'Organizing awareness workshops for parents on safe parenting and promoting communication with the school.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-2',
            title: 'Parent Meetings with Educational Staff',
            importance: 'Involving the family in educational decision-making.',
            goal: 'Building effective communication that supports the child psychologically and academically.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-3',
            title: 'Home Visits',
            importance: 'Creating a bridge of trust between the school and the family.',
            goal: 'Improving family interaction with the child\'s needs.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-4',
            title: 'Student School Kit',
            importance: 'Supporting needy families and encouraging children to commit to school.',
            goal: 'Removing financial obstacles from the educational process.',
          },
          {
            image: "https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg",
            id: '6-5',
            title: 'Eid and Winter Clothing',
            importance: 'Providing essential needs that enhance the child\'s dignity.',
            goal: 'Making the child feel dignity and security and breaking their sense of deprivation.',
          },
        ],
      },
    ],
  },
}

export type PsychologicalSupportData = typeof psychologicalSupportData["en"]["programs"][0]

