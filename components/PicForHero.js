import Image from "next/image";
import styles from "./PicForHero.module.css";

const PicForHero = ({ src, alt }) => {
  return (
    <div className={styles.picture}>
      <Image src={src} width={300} height={300} alt={alt} />
    </div>
  );
};

export default PicForHero;
