import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QrModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WXACODE =
  "images/wxacode-wenxian-toutiao.jpg";

export function QrModal({ open, onOpenChange }: QrModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="animate-modal-in w-[calc(100vw-2.5rem)] rounded-xl border-hairline bg-card p-8 sm:max-w-sm"
      >
        <DialogHeader className="text-center">
          <DialogTitle className="font-display text-2xl font-semibold text-ink-deep">
            文献头条
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm text-muted-foreground">
            微信小程序
          </DialogDescription>
        </DialogHeader>

        <img
          src={WXACODE}
          alt="文献头条微信小程序码"
          width={224}
          height={224}
          className="mx-auto mt-6 w-56 rounded-lg bg-white p-1.5 shadow-[0_10px_30px_-18px_oklch(0.3_0.05_210/0.6)]"
        />

        <p className="mt-6 text-center text-xs text-muted-foreground">使用微信扫码体验</p>
      </DialogContent>
    </Dialog>
  );
}
