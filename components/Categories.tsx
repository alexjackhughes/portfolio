interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => (
  <>
    <div className="tags are-medium">
      {categories.map((category) => (
        <span key={category} className="tag is-medium is-link is-light">
          {category.toLowerCase()}
        </span>
      ))}
    </div>
    <style jsx>{`
      .tags {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </>
);

export default Categories;
