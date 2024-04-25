import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/react/swiper-react.js';
import { Box, Typography, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BarChartIcon from '@mui/icons-material/BarChart';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

import 'swiper/swiper-bundle.css';

const About = () => {
  return (
    <div className="about-section bg-gradient-to-r from-teal-100 to-cyan-100 py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-8 relative">
          <span className="inline-block relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 animate-ping"></span>
            About Our Predictive System
          </span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          speed={800}
        >
          <SwiperSlide>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <ListItemIcon sx={{ color: '#3f51b5', fontSize: '36px' }}>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Faster & Easier Diagnosis</Typography>}
                secondary={<Typography variant="body2">Say goodbye to lengthy evaluations. Our system analyzes data to provide quick insights.</Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="next">
                  <ArrowForwardIosIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <ListItemIcon sx={{ color: '#3f51b5', fontSize: '36px' }}>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Enhanced Accuracy & Reduced Bias</Typography>}
                secondary={<Typography variant="body2">Machine learning reduces human error for more accurate assessments.</Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="next">
                  <ArrowForwardIosIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <ListItemIcon sx={{ color: '#3f51b5', fontSize: '36px' }}>
                <BloodtypeIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Beyond Weight-Focused</Typography>}
                secondary={<Typography variant="body2">We consider a wider range of health factors for a more comprehensive evaluation.</Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="next">
                  <ArrowForwardIosIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;