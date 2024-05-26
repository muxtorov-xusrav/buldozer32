import React from 'react';
import './blog.css';

const Blog = () => {
  const blogs = [
    { id: 1, image: 'image1.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
    { id: 2, image: 'image2.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
    { id: 3, image: 'image3.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
    { id: 4, image: 'image1.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
    { id: 5, image: 'image2.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
    { id: 6, image: 'image3.jpg', title: 'Lorem ipsum dolor sit', category: 'Construction', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor' },
  ];

  return (
    <div className="blog-container">
      <h2>Latest From Our Blog</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-category">By Admin in {blog.category}</p>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button active">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
}

export default Blog;
