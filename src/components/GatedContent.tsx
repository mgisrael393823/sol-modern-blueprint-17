
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
        <div className="relative cursor-pointer group transition-all duration-300">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/95">
            <div className="text-center p-6 transform transition-all duration-300 group-hover:scale-105">
              <Mail className="w-12 h-12 text-purple-500 mx-auto mb-4 animate-bounce" />
              <p className="text-xl font-medium text-gray-900 mb-2">Gated Content</p>
              <p className="text-sm text-gray-500">Click to request access</p>
            </div>
          </div>
          <div className="opacity-40 transition-opacity duration-300 group-hover:opacity-30">
            {children}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-purple-900">Unlock Full Access</DialogTitle>
          <DialogDescription className="space-y-4 pt-4">
            <p className="text-gray-700">
              To view {title}, please email:{" "}
              <a
                href="mailto:misrael00@gmail.com"
                className="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
              >
                misrael00@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              (We typically respond within 1 business day.)
            </p>
            <div className="pt-2">
              <Tooltip>
                <TooltipTrigger className="text-sm text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  Why is this gated?
                </TooltipTrigger>
                <TooltipContent className="bg-purple-50 border-purple-100">
                  <p className="max-w-xs text-gray-700">
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

