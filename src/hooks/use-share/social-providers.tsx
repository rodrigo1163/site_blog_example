import { Linkedin, Facebook, Slack, Twitter, AtSign } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider =
  | "linkedin"
  | "facebook"
  | "slack"
  | "twitter"
  | "threads"
  | "clipboard";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.slack.com/sharer?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.text || "")}`,
  },
  twitter: {
    name: "Twitter",
    icon: <Twitter className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.text || "")}`,
  },
  threads: {
    name: "Threads",
    icon: <AtSign className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.threads.com/intent/post?text=${encodeURIComponent(
        config.text || ""
      )} ${encodeURIComponent(config.url)}`,
  },
};
