import React from 'react';
import classes from '../css/styles.css';

/*
import { css } from 'glamor';

  let newsItem = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover': {
      color: 'red'
    },
    '@media(max-width: 500px)': {
      color: 'blue'
    }
  });

  let itemGrey = css({
    background: 'lightgrey'
  });
*/

const NewsItem = ({ item }) => {
  return (
    // <div className={`${newsItem} ${itemGrey}`}>
    <div className={classes.news_item}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default NewsItem;
