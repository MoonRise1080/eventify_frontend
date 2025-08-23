import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({ className = "", ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      <DialogPrimitive.Content
        className={`fixed left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl ${className}`}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}
export function DialogHeader({ className = "", ...props }) {
  return <div className={`mb-4 ${className}`} {...props} />
}
export function DialogTitle({ className = "", ...props }) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />
}
