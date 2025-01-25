import { FC } from "react"
import TitleBar from "./common/TitleBar"
import { Chip, Divider, Stack, Typography } from "@mui/material"
// @ts-ignore
import rcBig from '../images/rcBig.png'

const Home: FC = () => {
  return (
    <>
      <TitleBar />
      <Stack spacing={2}>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <img src={rcBig} alt='RC Clothing Logo' height={250} width={250} style={{ zIndex: '-5000'}}/>
          <Typography variant='h2'>
            RC Clothing
          </Typography>
        </Stack>
        <Typography textAlign='center'>
          Insert Company Slogan
        </Typography>
        <Divider style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <Chip label='Designs' size='small' />
        </Divider>
        <Stack direction='row' justifyContent='center' spacing={6}>
          <Typography>Clothing Option</Typography>
          <Typography>Clothing Option</Typography>
          <Typography>Clothing Option</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Home