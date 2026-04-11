import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
    url: string;
    name: string;
};

function SectionAction({ url, name }: Props) {
    return (
        <Link
            href={url}
            className="border-deepspace text-deepspace hover:border-malachite hover:text-malachite text-body mx-auto flex w-fit items-center gap-2 rounded-full border px-6 py-3 font-medium transition-all duration-200 select-none hover:-translate-y-0.5"
        >
            {name}
            <ArrowRight size={18} />
        </Link>
    );
}

export default SectionAction;
