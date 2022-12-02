import React from 'react';

const Contacts = () => {
  return (

      <div className='container d-flex justify-content-around align-items-center'>
        <div className='text-start'>
          <h3>We are in</h3>
          <ul className='text-danger'>
            <li><a style={{textDecoration:'none'}} href="#">Instagram</a></li>
            <li><a style={{textDecoration:'none'}} href="#">Facebook</a></li>
            <li><a style={{textDecoration:'none'}} href="#">Twitter</a></li>
            <li><a style={{textDecoration:'none'}} href="#">Discord</a></li>
            <li><a style={{textDecoration:'none'}} href="#">VKontakte</a></li>
            <li><a style={{textDecoration:'none'}} href="#">Google+</a></li>
          </ul>
        </div>
        <div className='text-start'>
          <h3>Our Numbers</h3>
          <p>+(123)-456-789</p>
          <p>+(996)-996-996</p>
          <p>+(987)-654-321</p>
          <p>+(111)-222-333</p>
        </div>
        <div className='text-start'>
          <h3>Our mail</h3>
          <p>Something@gmail.com</p>
          <p>SecondSomething@gmail.com</p>
          <p>ThirdSomething@mail.ru</p>
          <p>lastSomething@some.ty</p>
        </div>

      </div>
  );
};

export default Contacts;