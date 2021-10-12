import { Box } from "@dracula/dracula-ui";
import styles from "./ImageHero.module.css";

const ImageHero = ({ children }) => {
  return (
    <Box>
      <div className={styles.container}>{children}</div>
    </Box>
  );
};

export default ImageHero;
