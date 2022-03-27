import Image from "next/image";

const PicForHero = ({ src, alt }) => {
  return (
    <div className='picture'>
      <Image src={src} width={300} height={300} alt={alt} />
    </div>
  );
};

export default PicForHero;
