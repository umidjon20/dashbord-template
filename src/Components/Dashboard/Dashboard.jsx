import React from 'react'
import { useState } from 'react'

export default function Dashboard() {
  const [status,setStatus] = useState(false)
  const [data,setData] = useState('')


  return (
    // <div className="flex gap-4 mt-4 ">
    //   <div className='border mt-2 shadow-md'>
    //     <div className=''>
    //       <div className='flex flex-col gap-3 px-5 py-5'>
    //         <div>level: ism familya</div>
    //         <span><strong>Narx : </strong>500000</span>
    //         <span><strong>Vaqt : </strong>Toq kunlar - 16:00</span>
    //         <span><strong>Xonalar : </strong>Room #1</span>
    //       </div>
    //     </div>
    //     <div className='flex flex-col '>
    //       <h5 className='text-center'>Gropup n1</h5>
    //       <ul className='flex flex-col gap-3 ml-2 py-3'>
    //           {fake.map((item)=>(
    //             <li className='flex items-center gap-2 py-1'>
    //               <span className='w-2 h-2 bg-red-700 rounded-2xl'></span> 
    //               <span key={item.id}>{item.full_name}</span>

    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <div>
    //     <div className='flex flex-col mt-2 px-2 border shadow-md'>
    //       <h2 className='font-bold mt-2'>Davomat</h2>
    //       <div className='mt-3'>
    //         <div>
    //           <div className='w-[150px]'>Ism</div>
    //           <div>
    //               <ul className='flex flex-col gap-3 ml-2 py-3'>
    //               {fake.map((item)=>(
    //                               <li className='my-2 flex items-center gap-4'
    //                               key={item.id}>
    //                                 <div className='w-[150px]'>{item.full_name}</div>
    //                                 <div className='hover-effect min-w-max px-2 text-center  bg-gray-300 rounded-2xl '>{data}
                                   
    //                                    <div className=' hover-element'>
    //                                     <span 
    //                                     onClick={()=>setStatuss()}className='absolute w-5 h-5 bg-green-600 rounded-full text-white text-center top-1 left-2'>✔</span>
    //                                     <span className='absolute w-5 h-5 bg-green-600 rounded-full text-red-600 text-center top-1 right-2 font-black'>X</span>
    //                                   </div>
    //                                 </div>
    //                                 <div className='hover-effect  bg-gray-300 rounded-2xl  '>
                                   
    //                                <div className=' hover-element'>
    //                             </div>
    //                             </div>
    //                               </li>
    //                             ))}
    //               </ul>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
<section className=''>
<div className='w-full  my-6 flex flex-col justify-center items-center border rounded-lg shadow-md '>
      <div className='mt-4 text-center'>
      <h1 className='text-3xl font-bold tracking-wider'>Raqamlashtirish markazi MCHJ</h1>
      <h2 className='text-xl font-medium text-blue-900 tracking-wide'>Raqamlashtirish markazi moderator paneli</h2>
      </div>
      <div className=' w-96 border rounded-md shadow-2xl text-lg px-3 py-3 font-medium mx-2 text-center mt-3 tracking-wide' >
        Qashqadaryo viloyat hokimligi huzuridagi 'Axborot-Kommunikatsiya texnologiyalarini rivojlantirish markazi davlat unitar korxonasi'
      </div>
      <div className='flex justify-center items-center py-4  mx-2  gap-4'>
        <div className='flex gap-2 flex-shrink '>
        <div className=' border rounded-md shadow-2xl text-lg px-3 py-3 font-medium tracking-wider'>
             Siz bu panelda markaz uchun yangi mijoz qo`shishingiz  va uning ma`lumotlarini yangilashingiz mumkin buladi.Agar siz boshqa ma`lumotlarga o`zgartirish kiritmoqchi bo`lsangiz bosh adminga murojat qilishingiz kerak bo`ladi.
        </div>
        <div className=' border rounded-md shadow-2xl text-lg px-3 py-3 font-medium tracking-wider'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quod at similique sed magnam molestias dolore possimus culpa facilis, et optio sit iusto tenetur expedita atque omnis repellendus voluptatum!
        </div>
          </div>
        <div className='flex  gap-2  flex-shrink'>
        <div className=' border rounded-md shadow-2xl text-lg px-3 py-3 font-medium tracking-wider'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem accusantium reprehenderit ipsa quod qui modi quidem provident animi distinctio? Explicabo aut possimus, aliquid ducimus accusantium rerum nemo inventore non.
        </div>
          <div className=' border rounded-md shadow-2xl text-lg px-3 py-3 font-medium tracking-wider'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quidem. In veniam culpa cumque deleniti officiis consequatur exercitationem ab dolore quibusdam nesciunt, voluptates nostrum saepe tempore asperiores, facilis pariatur repellendus.
          </div>
        </div>
      </div>
      <p className='w-[600px] font-medium tracking-wide text-red-100 border rounded-md bg-gray-600 shadow-md mt-[150px] mb-3  py-2  text-center'>Agar sizda panel ishlashi bo`yicha qandaydir muammo va kamchiliklar kuzatilsa qo`llab quvvatlash bo`limida yozib qoldiring !. </p>

    </div>
</section>
  )
  
}

// eve.holt@reqres.in
// cityslicka
