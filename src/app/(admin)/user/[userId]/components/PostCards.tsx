import React from 'react';
import PostCard from './PostCard';
import { Grid, Typography } from '@mui/material';

const PostCards = ({ cards }: { cards: any }) => {
  return (
    <>
      <Grid container spacing={2} padding={10}>
        <Typography
          width={'100%'}
          display={'flex'}
          variant="h4"
          justifyContent={'center'}
          paddingBottom={10}
        >
          User Posts
        </Typography>
        {cards?.map((card: any) => (
          <Grid item xs={3} key={card.id}>
            <PostCard card={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostCards;
