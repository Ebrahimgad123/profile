"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Cv from "../components/Cv/page"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../public/Image/logoo.jpg";
import img2 from "../../../public/Image/logo2.jpg";
import img3 from "../../../public/Image/pic_extended.jpg";
import Navbar from "../components/Navbar/page";


const images = [img1, img2,img3];

const desc = [
  { 
    "text": "إسمي إبراهيم جاد اعمل كمطور برمجيات متخصص في بناء تطبيقات الويب وتطبيقات الموبايل، حيث أركز على تقديم حلول تقنية متكاملة تجمع بين الأداء العالي وتجربة المستخدم المتميزة. أمتلك خبرة في تطوير الواجهات التفاعلية باستخدام React.js، مع الاستفادة من Framer Motion لإضافة تأثيرات سلسة وديناميكية. في جانب البنية الخلفية، أعمل باستخدام Node.js و Express.js لتطوير أنظمة قوية وقابلة للتوسع، مع الاعتماد على MongoDB كقاعدة بيانات مرنة وفعالة. كما أنني أحرص على تحسين الأداء وتعزيز كفاءة التطبيقات باستخدام Next.js، وأمتلك خبرة في التكامل مع RESTful APIs و GraphQL لضمان تدفق البيانات بسلاسة. شغفي يتمحور حول تطوير برمجيات مبتكرة تلبي احتياجات المستخدمين وتواكب أحدث التطورات في عالم التكنولوجيا."
  }
];
const page = () => {
  return (
    <div>
    <Navbar/>
    <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 p-6 sm:p-10 bg-gradient-to-br from-[#374151] to-purple-600">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl order-first sm:order-none"
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          className="rounded-xl shadow-lg border-2 border-blue-400 touch-pan-y h-90 sm:h-100 md:h-80 lg:h-96"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                width={800}
                height={600}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {desc.map((item, index) => (
        <motion.div
          key={index}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-to-r from-purple-800 to-gray-800 rounded-2xl shadow-lg text-white p-6 text-sm sm:text-lg font-semibold leading-relaxed"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <bdi className="font-[Cairo]">{item.text}</bdi>
        </motion.div>
      ))}

    </div>
    <div >
    <Cv/>
    </div>
     </div>
  )
}

export default page