import PageHeader from "../components/PageHeader";
import BlogSection from "../sections/BlogSection";

const Blogs = ()=> {
  return (
    <div className="blog-page">
      <PageHeader
        pageHeading='Masonry With 3 Columns'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <BlogSection />
    </div>
  )
};

export default Blogs;