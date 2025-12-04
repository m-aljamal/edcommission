import Image from 'next/image'
 import { unstable_cache } from 'next/cache'
 import Sectiontitle from '@/components/section-title'

 

export async function AboutView() {
  
   return (
    <div className="space-y-6">
      <Sectiontitle>من نحن</Sectiontitle>

      {/* <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-6">
        <Image src={''} alt="جعية تطوير التعليم" fill className="object-cover" />
      </div> */}

      <p className=" text-main-blue leading-relaxed  ">
        جمعيّة تطوير التعليم هي منظّمة غير حكوميّة وغير ربحيّة، تأسّست عام 2015 في تركيا، وتعمل بشكل
        مستقل ضمن قطاع التعليم في منظّمة الأمم المتّحدة (الأوتشا) وفق مبادئ العمل الإنسانيّ في
        سوريّة والجنوب التركيّ، وتسعى إلى تقديم برامج وخدمات تعليميّة وتنمويّة، مع تركيز خاصّ على
        دعم الفئات الأكثر ضعفًا. تتبنّى الجمعيّة رؤية شاملة لتطوير التعليم، حيث تتعاون بشكل وثيق مع
        خبراء عرب ودوليّين في مجالات التعليم وتطوير المناهج، بهدف توفير تعليم عالي الجودة يراعي
        الاحتياجات المتنوّعة للمتعلّمين ويسهم في بناء مستقبل أفضل للمجتمعات المستهدفة.
      </p>
    </div>
  )
}
