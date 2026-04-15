import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

function BrandBtn({ href, children, variant = "primary" }: Props) {
    const variantStyles =
        variant === "primary"
            ? {
                  wrapper:
                      "border-malachite bg-malachite text-white hover:bg-malachite-rich",
                  circle: "bg-malachite-dim text-malachite",
              }
            : {
                  wrapper:
                      "border-deepspace bg-deepspace text-white hover:bg-deepspace-soft",
                  circle: "bg-deepspace-dim text-deepspace",
              };

    return (
        <Link
            href={href}
            className={`group text-body inline-flex w-fit items-center gap-3 rounded-full border p-1 font-semibold transition-all duration-300 select-none ${variantStyles.wrapper}`}
        >
            <span className="pl-4 whitespace-nowrap">{children}</span>

            <span
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${variantStyles.circle}`}
            >
                <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:rotate-45"
                />
            </span>
        </Link>
    );
}

export default BrandBtn;
