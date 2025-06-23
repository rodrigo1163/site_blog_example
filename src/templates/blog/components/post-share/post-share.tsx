"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export const PostShare = ({ description, title, url }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounder-lg bg-gray-700">
        <h2 className="hidden md:block mb-6 text-heading-xs text-gray-200">
          Compartilhar
        </h2>

        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="w-fit md:w-full justify-start gap-2"
              onClick={() => provider.action()}
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
