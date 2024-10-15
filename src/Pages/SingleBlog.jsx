import React from 'react';
import { useParams } from 'react-router-dom';
import PageIndicator from '../Components/PageIndicator';
import blogData from '../Components/Data';
import Faq from '../Components/Faq';


const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <PageIndicator text={blog.title} />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <img
            src={blog.image}
            alt={blog.title}
            className="mb-8 h-60 w-full object-cover"
          />
          <h2 className="text-3xl font-bold">{blog.title}</h2>
          <p className="text-sm text-gray-500">{blog.author} - {blog.date}</p>
          <p className="mt-8">{blog.content}</p>
        </div>
      </section>
      <Faq/>
    
    </>
  );
};

export default SingleBlog;
