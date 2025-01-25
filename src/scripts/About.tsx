import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import TitleBar from "./common/TitleBar";

const About: FC = () => {
  return (
    <>
      <TitleBar />
      <Stack>
        <Typography variant='h3'>About Us</Typography>
        <div>coming soon...</div>
      </Stack>
    </>
  )
};

export default About;
