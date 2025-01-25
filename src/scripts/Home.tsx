import { FC } from "react"
import TitleBar from "./common/TitleBar"
import { Chip, Divider, Stack, Typography } from "@mui/material"

const Home: FC = () => {
  return (
    <>
      <TitleBar />
      <Stack spacing={2}>
        <Typography variant='h2' textAlign='center'>
          RC Clothing
        </Typography>
        <img src='src/images/rc-big.png' alt='RC Clothing Logo' height={250} width={250} />
        <Typography textAlign='center'>
          Your slogan here
        </Typography>
        <Divider style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <Chip label='Designs' size='small' />
        </Divider>
        <Stack direction='row' justifyContent='center' spacing={6}>
          <Typography>image 1</Typography>
          <Typography>image 2</Typography>
          <Typography>image 3</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Home