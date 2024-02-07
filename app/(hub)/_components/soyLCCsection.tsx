import { getSoyLCCVideos } from "@/lib/firestore";
import { SoyLCCswipper } from "./soyLCCswipper";

export const SoyLCCsection = async () => {
    const posts = await getSoyLCCVideos();
    return (
        <SoyLCCswipper posts={posts} />
    )
};

