const OptimizedImage = ({
  src,
  alt = "Image",
  width = "100",
  height = "100",
  sizes = "100vw",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      srcSet={`${src} 1x, ${src} 2x`}
    />
  );
};

export default OptimizedImage;
