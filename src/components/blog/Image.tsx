export default function ImageMdx(props: {
  src: string;
  alt: string;
  title?: string;
}) {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption className="text-center">{props.title}</figcaption>
      </figure>
    );
  } else {
    return <img src={props.src} alt={props.alt} />;
  }
}
