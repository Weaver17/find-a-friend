import LatestList from "@/components/lists/latest-list";
import { H1Custom } from "@/components/typeography/custom";

export default function Home() {
    return (
        <div className="client-page">
            <H1Custom className="text-center">
                Latest Potential Friends
            </H1Custom>
            <div className="w-5/6 mx-auto">
                <LatestList />
            </div>
        </div>
    );
}
