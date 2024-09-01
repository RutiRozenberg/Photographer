import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchServices } from "../store/features/services.slice";
import { Box, Typography, useTheme } from "@mui/material";
import { Helmet } from 'react-helmet';

export default function Services() {

  const services = useAppSelector(state => state.service.services);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Racheli - Services</title>
      </Helmet>
      
      <Box
        sx={{
          width: '100%',
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 40%, ${theme.palette.primary.dark} 80%)`,
          paddingTop: '10vh',
          paddingBottom: '10vh',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: theme.palette.secondary.dark,
            fontSize: '3rem',
            letterSpacing: '0.1em',
            fontWeight: 700,
          }}
        >
          Our Services
        </Typography>
      </Box>
      {services.map((service) => (
        <div key={service.id}>{service.name}</div>
      ))}
    </>
  )
}

