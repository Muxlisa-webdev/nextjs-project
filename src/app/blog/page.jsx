'use client';
import "../home.css";
import { useRouter } from "next/navigation";


export default function Blog() {
  const router = useRouter()
  

  return (
    <div className="blogpage-container">
     <h1>BlogPage</h1>
     <button onClick={() =>
       router.push('/blog/oneblog')}>
        Blogning bir turiga o'tish
        </button>
     </div>
  );
};


