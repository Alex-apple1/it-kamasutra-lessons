import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fbeautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fcategory%2Fnature&tbnid=6w9q2i93BQOqoM&vet=12ahUKEwjz45T_jYzsAhVHxyoKHQyaDioQMygDegUIARCpAQ..i&docid=LlgDpz1LoiuznM&w=412&h=280&q=image%20nature&ved=2ahUKEwjz45T_jYzsAhVHxyoKHQyaDioQMygDegUIARCpAQ' />;
    </div>
    <div>
      ava + description
    </div>
    <div>
      My post
        <div>
          New post
        </div>
    </div>
    <div className={s.posts}>
      <div className={s.item}>
        post1
      </div>
      <div className={s.item}>
        post2
      </div>
    </div>
  </div>
}

export default Profile;


