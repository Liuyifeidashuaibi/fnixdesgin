import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn 风格 Badge primitive（source-owned）。
 * 中性无彩色为默认，避免给技术栈词条随机上色。
 */
const badgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "",
      solid: "badge-solid",
      outline: "!bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Badge({ className, variant, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
      style={props?.style}
    />
  );
}

export { badgeVariants };
