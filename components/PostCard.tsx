import { Heart, MessageCircle, Repeat, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PostCard({ post }: { post: any }) {
  return (
    <Card className="mb-6 overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <img src={post.avatar} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{post.fullname}</p>
          <p className="text-sm text-gray-500">@{post.username}</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-[15px] leading-relaxed">{post.content}</p>
      </div>

      <div className="flex justify-around border-t py-3 text-gray-600">
        <button className="flex items-center gap-1 hover:text-red-500 transition">
          <Heart size={20} /> <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500 transition">
          <MessageCircle size={20} /> <span>{post.commentsCount}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-green-500 transition">
          <Repeat size={20} />
        </button>
        <button className="flex items-center gap-1 hover:text-gray-500 transition">
          <Share2 size={20} />
        </button>
      </div>
    </Card>
  );
}
