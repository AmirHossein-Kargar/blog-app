import Avatar from "@/ui/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Author({author, authorName, readingTime}) {
  return (
    <div>
      <div className="flex items-center justify-between px-5">
        <span className="text-sm">{authorName}</span>
        <Avatar src={author.avatarUrl || "/profile.png"} alt={authorName} />

        <span className="text-sm ml-2">
          {readingTime} min <AccessTimeIcon fontSize="small" />
        </span>
      </div>
    </div>
  );
}
