interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => (
  <>
    <div className="tags are-medium">
      {categories.map((category) => (
        <span
          key={category}
          className="tag is-medium is-grey has-text-grey has-text-weight-bold"
        >
          {category.toUpperCase()}
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
