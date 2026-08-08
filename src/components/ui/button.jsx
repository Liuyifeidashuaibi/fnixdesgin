import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn 风格 Button primitive（source-owned）。
 * 视觉令牌来自 seed token 派生的 .btn 系列样式，保证明暗外观一致。
 */
const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      outline: "btn-outline",
      ghost: "border-0 bg-transparent text-paper/70 hover:text-gold",
      link: "link-under !p-0 !border-0",
    },
    size: {
      default: "",
      sm: "!py-2.5 !px-5 !text-[13px]",
      lg: "!py-4 !px-8 !text-[15px]",
      icon: "!p-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, children, ...props },
  ref
) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
      ref,
      ...props,
    });
  }
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export { buttonVariants };
