import React from 'react'
import ServicesCard from './card/page.jsx'
import { TbWorld } from "react-icons/tb";
import { TbUxCircle } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiFilmReel } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
export default function ServicesPart4() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ServicesCard
          Icon={TbWorld}
          title={'تصميم المواقع'}
          description={'ليس هناك حدود للإبداع عندما تتعاون مع فريقنا. نقدم تصاميم مواقع مخصصة تلبي احتياجاتك وتطلعاتك.'}
        />
        <ServicesCard
          Icon={TbUxCircle}
          title={'تصميم واجهات المستخدم'}
          description={'تصاميمنا المخصصة للواجهات تضمن لك إضافة الجمالية والسهولة في الاستخدام لموقعك أو تطبيقك. '}
        />
        <ServicesCard
          Icon={SlScreenSmartphone}
          title={'برمجة تطبيقات '}
          description={'فريقنا المميز يصمم وينفذ تطبيقات مخصصة تناسب احتياجات عملك. سواء كنت بحاجة إلى حلول برمجية مخصصة أو تطبيقات مدمجة. '}
        />
        <ServicesCard
          Icon={HiOutlinePaintBrush}
          title={'الشعارات والهويات البصرية'}
          description={'نقوم بتصميم شعارات وهوية بصرية تعبر عن علامتك التجارية بشكل فريد وجذاب، ما يعزز من تميزك وسط المنافسين. '}
        />
        <ServicesCard
          Icon={PiFilmReel}
          title={'مونتاج الفيديو'}
          description={'فريقنا المختص بالمونتاج يقوم بتحرير الفيديوهات باحترافية عالية، سواء كنت بحاجة إلى فيديو إعلاني أو توضيحي. '}
        />
        <ServicesCard
          Icon={TfiHeadphoneAlt}
          title={'دعم فني وصيانة'}
          description={'من تطوير البرمجيات إلى إصلاح الأعطال وتحديث الأنظمة، نقدم لك جميع خدمات الدعم الفني والصيانة لضمان عمل الأنظمة بسلاسة'}
        />
      </div>
    </>
  )
}
