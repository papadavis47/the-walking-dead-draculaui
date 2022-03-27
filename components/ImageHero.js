import { Box } from "@dracula/dracula-ui";

const ImageHero = ({ children }) => {
  return (
    <Box>
      <div className='container'>{children}</div>
    </Box>
  );
};

export default ImageHero;
