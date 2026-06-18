import Image from "next/image";

type LogoIconProps = {
  className?: string;
};

export function LogoIcon({ className = "h-4 w-4" }: LogoIconProps) {
  return (
    <Image
      src="/OriginLabs-logo.png"
      alt=""
      width={1254}
      height={1254}
      aria-hidden
      className={`object-contain ${className}`}
    />
  );
}

type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({
  className = "h-8 w-8",
}: LogoMarkProps) {
  return (
    <Image
      src="/OriginLabs-logo.png"
      alt=""
      width={1254}
      height={1254}
      priority
      className={`object-contain ${className}`}
    />
  );
}
