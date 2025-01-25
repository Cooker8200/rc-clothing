import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import TitleBar from "./common/TitleBar";

const About: FC = () => {
  return (
    <>
      <TitleBar />
      <Stack paddingTop={8}>
        <Typography variant='h3' textAlign='center'>About Us</Typography>
        <Typography paddingLeft={16} paddingTop={6}>
          Coming soon...
        </Typography>
      </Stack>
    </>
  )
};

export default About;
