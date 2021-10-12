import { Box } from "@dracula/dracula-ui";
import Image from "next/image";
import styles from "./ImageHero.module.css";

const ImageHero = ({ src, alt }) => {
  return (
    <Box>
      <div className={styles.container}>
        <div className={styles.picture}>
          <Image
            src='/reapers1.jpg'
            width={300}
            height={300}
            alt='Reapers on the hunt'
          />
        </div>
        <div className={styles.picture}>
          <Image
            src='/negan1.jpg'
            width={300}
            height={300}
            alt='Character of Negan - The Walking Dead'
          />
        </div>
        <div className={styles.picture}>
          <Image
            src='/rosita1.jpg'
            width={300}
            height={300}
            alt='Rosita after clearning Walkers'
          />
        </div>
        <div className={styles.picture}>
          <Image
            src='/carol1.jpg'
            width={300}
            height={300}
            alt='Carol on the Hunt'
          />
        </div>
      </div>
    </Box>
  );
};

export default ImageHero;
