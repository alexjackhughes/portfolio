export default function Footer() {
  const date = new Date();

  return (
    <footer className="footer is-primary">
      <div className="content has-text-centered">
        <p>
          Built with <i className="fad fa-heart-circle has-text-danger" />
        </p>
        <p>Alexander Jack Hughes © {date.getFullYear()}</p>
      </div>
    </footer>
  );
}
