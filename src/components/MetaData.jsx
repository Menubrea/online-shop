import { Helmet } from 'react-helmet';

/**
 * Function for setting metadata of main components.
 * @param {string} props
 * @returns metadata for page based on values provided in props
 */
export function MetaData(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <meta name='tags' content={props.tags} />
    </Helmet>
  );
}
