import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';

import StarRating from "./StarRating.js";

export default function RestaurantCard() {
  return (
    // a Constant width is required, make sure contents inside aren't stretched out
    <Card variant="outlined" sx={{ width: 350 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
            srcSet="https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80 2x"
            loading="lazy"
            alt="grey"
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, mb: 2 }}>
        Insert Restaurant Name Here
      </Typography>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        {/* using 'chip' for tags */}
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          strthfld
        </Chip>

        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          jpn
        </Chip>

        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          $$
        </Chip>

        
        <Divider orientation="vertical" />
        
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary', width: 1 }}>
          <div className="App">
            < StarRating />
          </div>
        </Typography>
      </CardOverflow>
    </Card>
  );
}