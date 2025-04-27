
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail } from "lucide-react";

interface GatedContentProps {
  children: React.ReactNode;
  title: string;
}

const GatedContent = ({ children, title }: GatedContentProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center p-4">
              <Mail className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-lg font-medium text-gray-900">Gated Content</p>
              <p className="text-sm text-gray-500 mt-1">Click to request access</p>
            </div>
          </div>
          <div className="opacity-50">{children}</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Unlock Full Access</DialogTitle>
          <DialogDescription className="space-y-4 pt-4">
            <p>
              To view {title}, please email:{" "}
              <a
                href="mailto:misrael00@gmail.com"
                className="text-purple-600 hover:underline"
              >
                misrael00@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              (We typically respond within 1 business day.)
            </p>
            <div className="pt-2">
              <Tooltip>
                <TooltipTrigger className="text-sm text-purple-600 hover:underline">
                  Why is this gated?
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    These sections include proprietary strategies and frameworks we
                    reserve for select clients.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GatedContent;
