import PageHeader from '../components/PageHeader';
import { blogDetails } from '../constants';
import blogPageBg from '../assets/8.jpg';

const Blog = () => {
  return (
    <div className="blog-page">
      <PageHeader
        imgPath={blogPageBg}
        pageHeading='Blog Listing'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <div className="container">
        <div className="grid grid-three-cols">
          {blogDetails.map((item, id) =>
            <div key={id} className="single-blog">
              <div className='blog-img'>
                <img src={item.img} alt="Blog Details Loading..." />
                <div className='blog-date'>
                  <strong>{item.date}</strong>
                  <span>{item.month}</span>
                </div>
                <div className='blog-content'>
                  <div>By {item.writter} - {item.date} {item.month} {item.year}</div>
                  <h3>{item.heading}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Blog;