import Image from "next/image";

const Icon = ({
  icon,
  className,
}: Readonly<{ icon: string; className: string }>) => (
  <Image
    className={className}
    width={100}
    height={100}
    src={`/${icon}.svg`}
    alt="icon"
  />
);

export default Icon;
