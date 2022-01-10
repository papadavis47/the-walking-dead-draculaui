import { Box } from "@dracula/dracula-ui";
import styles from "./ImageHero.module.scss";

const ImageHero = ({ children }) => {
  return (
    <Box>
      <div className={styles.container}>{children}</div>
    </Box>
  );
};

export default ImageHero;
