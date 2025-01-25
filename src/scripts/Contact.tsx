import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import TitleBar from "./common/TitleBar";

const Contact: FC = () => {
  return (
    <>
      <TitleBar />
      <Stack>
        <Typography variant='h4'>Contact Us</Typography>
        <div>Coming soon...</div>
      </Stack>
    </>
  )
}

export default Contact;