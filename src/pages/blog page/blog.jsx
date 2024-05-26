import React from 'react';
import './blog.css';

const Blog = () => {
  const blogs = [
    { id: 1, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-1.jpg', title: 'Lorem ipsum dolor sit',  description: 'Lorem ipsum dolor sit amet elit. Phasellus  nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
    { id: 2, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
    { id: 3, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
    { id: 4, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
    { id: 5, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
    { id: 6, image: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor lorem ipsum dolor sit ament honsu' },
  ];

  return (
    <>
     <div className='menu'>
          <h2 className='tit'>Our Blog</h2>
          <div style={{border:'1px solid #030F27', width:'100px',marginLeft:'560px',marginTop:-35}}></div>
            <h3 className='sub'> <span>Home</span> / <span>Our Blog</span> </h3>
          </div>
    <div className="blog-container">
      
      <h2 className="title">Latest Blog</h2>
            <h3 className="subtitle">Latest From Our Blog</h3>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
           
              <div className="project-info">
                <p>Lorem ipsum dolor sit</p>
                <div className="plus-icon">+</div>
              </div>
              <p className="blog-category">By  <span>Admin</span> in <span>Construction</span> </p>
              <div style={{border:'1px solid #FDBE33', width:'100px',marginLeft:'130px'}}></div>
              <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="pagination-button1">Previous</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button active">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">Next</button>
      </div>
    </div></>
  );
}

export default Blog;
