import { Link } from "react-router";
import { blogDetails } from "../utils/data";

const BlogSection = () => {
  const featuredBlogs = blogDetails.filter(blog => blog.featured);

  return (
    <div className="blog-page">
      <div className="container">
        <h2>Our Blogs</h2>
        <div className="grid grid-three-cols">
          {featuredBlogs.map((blog) => (
            <Link to={`/blogs/${blog.slug}`} key={blog.id} className="single-blog">
              <div className='blog-img'>
                <img src={blog.img} alt={blog.alt} />
                <div className='blog-date'>
                  <strong>{blog.date}</strong>
                  <span>{blog.month}</span>
                </div>
                <div className='blog-content'>
                  <div>By {blog.publishedBy} - {blog.date} {blog.month} {blog.year}</div>
                  <h3>{blog.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;






// import { blogDetails } from "../utils/data";

// const BlogSection = () => {
//   const featuredBlogs = blogDetails.filter(blog => blog.featured);

//   return (
//     <div className="blog-page">
//       <div className="container">
//         <h2>Our Blogs</h2>
//         <div className="grid grid-three-cols">
//           {featuredBlogs.map((item, id) =>
//             <div key={id} className="single-blog">
//               <div className='blog-img'>
//                 <img src={item.img} alt="Blog Details Loading..." />
//                 <div className='blog-date'>
//                   <strong>{item.date}</strong>
//                   <span>{item.month}</span>
//                 </div>
//                 <div className='blog-content'>
//                   <div>By {item.writter} - {item.date} {item.month} {item.year}</div>
//                   <h3>{item.heading}</h3>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// };

// export default BlogSection;