import React from 'react';
import './blog.css';

const Blog = () => {
  const blogs = [
    { id: 1, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-1.jpg',  },
    { id: 2, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-2.jpg',  },
    { id: 3, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-3.jpg',  },
    { id: 4, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-1.jpg',  },
    { id: 5, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-2.jpg',  },
    { id: 6, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-3.jpg',  },
    
  ];

  return (
    <>
      <div className='menu'>
        <h2 className='tit'>Our Blog</h2>
        <div style={{ border: '1px solid #030F27', width: '100px', marginLeft: '560px', marginTop: -35 }}></div>
        <h3 className='sub'> <span>Home</span> / <span>Our Blog</span> </h3>
      </div>
      <div className="blog-container">

        <h2 className="tit1">Latest Blog</h2>
        <h3 className="sub1">Latest From Our Blog</h3>
        <div className="blog-grid">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt="" className="blog-img" />

              <div className="info">
                <p>Lorem ipsum dolor sit</p>
                <div className="plus">+</div>
              </div>
              <p className="blogc">By  <span>Admin</span> in <span>Construction</span> </p>
              <div style={{ border: '1px solid #FDBE33', width: '100px', marginLeft: '130px' }}></div>
              <p className="blogd">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
               facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu</p>
            </div>
          ))}
        </div>
        <div className="pag">
          <button className="button1">Previous</button>
          <button className="button">1</button>
          <button className="button active">2</button>
          <button className="button">3</button>
          <button className="button">Next</button>
        </div>
      </div></>
  );
}

export default Blog;
