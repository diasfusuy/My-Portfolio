import React from "react";
import '../components/Blogs.css';

const Blogs = () => {
    const blogPosts = [
        {
          id: 1,
          title: 'Exploring the MERN Stack: A Full Stack Developer’s Guide',
          description:
            'The MERN stack—comprising MongoDB, Express.js, React, and Node.js—is one of the most popular choices for building modern web applications. Its end-to-end JavaScript-based ...',
          author: 'Yusuf Sahin',
          date: 'Oct 11 2024',
          category: 'Software',
        },
        {
          id: 2,
          title: 'Exploring the MERN Stack: A Full Stack Developer’s Guide',
          description:
            'The MERN stack—comprising MongoDB, Express.js, React, and Node.js—is one of the most popular choices for building modern web applications. Its end-to-end JavaScript-based ...',
          author: 'Yusuf Sahin',
          date: 'Oct 11 2024',
          category: 'Software',
        },
        {
          id: 3,
          title: 'Exploring the MERN Stack: A Full Stack Developer’s Guide',
          description:
            'The MERN stack—comprising MongoDB, Express.js, React, and Node.js—is one of the most popular choices for building modern web applications. Its end-to-end JavaScript-based ...',
          author: 'Yusuf Sahin',
          date: 'Oct 11 2024',
          category: 'Software',
        },
      ];
    
      return (
        <div className="blogs-container">
          <h1 className="blogs-title">Blogs</h1>
          <div className="blogs-list">
            {blogPosts.map((blog) => (
              <div className="blog-card" key={blog.id}>
                <div className="blog-image-placeholder"></div>
                <div className="blog-content">
                  <p className="blog-meta">
                    {blog.author} • {blog.date} <span className="blog-category">{blog.category}</span>
                  </p>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                  <button className="blog-button">Continue reading</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Blogs;