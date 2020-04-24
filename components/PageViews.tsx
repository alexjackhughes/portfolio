import { numberWithCommas } from "../utils/numberWithCommas";

interface Props {
  views: number;
}

const PageViews: React.FC<Props> = ({ views }) => (
  <p className="has-text-grey is-size-5">{numberWithCommas(views)} views</p>
);

export default PageViews;
