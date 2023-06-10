import Image from 'next/image'

// shadow-gray-400 
const Cards = (props:any) => {
    const {logoImage, nameSkill,logo,cardShadow,cardBg} = props;
  return (
   <>
   <div className={`w-11/12 flex justify-center sm:justify-start items-center space-x-2  rounded-lg pt-4 pb-4 shadow-lg hover:-translate-y-2 duration-1000 ${cardShadow}
   ${cardBg} `}>
    <Image className='ml-4 rounded duration-1000' width={50} height={50} src={logo} alt="logo"/>
    <span className='pl-5'>
{nameSkill}
    </span>
</div>
   </>
  )
}

export default Cards
