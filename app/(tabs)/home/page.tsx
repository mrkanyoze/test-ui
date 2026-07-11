"use client";

import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function HomePage() {
  const [posts] = useState([
    {
      id: "1",
      fullname: "Damian Ochintala",
      username: "damianochintala",
      avatar: "https://i.pravatar.cc/150?u=damian",
      content: "Building the future of African social media one post at a time.",
      likes: 42,
      commentsCount: 12
    }
  ]);

  return (
    <div className="max-w-xl mx-auto pb-20">
      <div className="sticky top-0 bg-white border-b p-4 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0862BC]">Home</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create
        </Button>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
