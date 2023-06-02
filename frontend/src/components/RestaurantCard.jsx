import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack'
import { useNavigate } from 'react-router-dom';

import Rating from '@mui/material/Rating';

const RestaurantCard = ({ res }) => {
    const navigate = useNavigate();
    return (
        <Card variant="outlined"
            sx={{
              width: 350,
              transition: 'transform .2s',
              '&:hover': {
                  transform: 'scale(1.02)',
                  cursor: 'pointer'
              }
            }}
            onClick={() => navigate('/restaurant/' + res.name)}
        >
            <CardOverflow>
                <AspectRatio ratio="2">
                  <img
                      src={res.image}
                      loading="lazy"
                      alt="grey"
                  />
                </AspectRatio>
            </CardOverflow>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2, mb: 2 }}>
                {res.name}
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
              <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                  <Stack direction={'row'} gap={1}>
                      <Chip
                          variant="outlined"
                          color="primary"
                          size="sm"
                          sx={{ pointerEvents: 'none' }}
                      >
                          {res.tags.suburb}
                      </Chip>

                      {res.tags.cuisine === ''
                          ? <></>
                          : <Chip
                              variant="outlined"
                              color="primary"
                              size="sm"
                              sx={{ pointerEvents: 'none' }}
                          >
                              {res.tags.cuisine}
                          </Chip>
                      }


                          {res.priceRange
                              ? <Chip
                                  variant="outlined"
                                  color="primary"
                                  size="sm"
                                  sx={{ pointerEvents: 'none' }}
                                >
                                  {"$".repeat(res.priceRange)}
                                </Chip>
                              : <></>
                          }

                  </Stack>

                  <Stack direction={'row'} gap={1}>
                      <Divider orientation="vertical" />
                      <Rating name="half-rating" defaultValue={res.rating} precision={0.5} readOnly size={'small'} />
                  </Stack>
              </Stack>
        </CardOverflow>
        </Card>
  );
}

export default RestaurantCard;