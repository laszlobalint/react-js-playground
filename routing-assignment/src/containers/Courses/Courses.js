import React, { Component } from 'react';

import classes from './Courses.module.css';
import { NavLink, Route } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' },
    ],
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className={classes.Courses}>
          {this.state.courses.map((course) => {
            return (
              <NavLink
                className={classes.Course}
                key={course.id}
                to={{ pathname: `${this.props.match.url}/course/${course.id}`, search: `?title=${course.title}` }}
              >
                {course.title}
              </NavLink>
            );
          })}
        </section>
        <Route path={`${this.props.match.url}/:id`} component={Course} />
      </div>
    );
  }
}

export default Courses;
