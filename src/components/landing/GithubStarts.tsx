"use client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/artus-academy/website")
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
        console.log(data.stargazers_count);
      })
      .catch(() => setStars(null));
  }, []);

  return (
    <span className="ml-1 text-muted-foreground text-xs font-medium">
      {stars && (
        <span className="inline-flex gap-1 items-center">
          {stars} <Star className="fill-current size-3" />
        </span>
      )}
    </span>
  );
}
