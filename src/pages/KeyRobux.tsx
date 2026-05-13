import { Helmet } from "react-helmet-async";
import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";

export default function KeyRobux() {
  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>Buy with Robux - lumin.rest</title>
        <meta name="description" content="Purchase lumin.rest access using Robux on the Roblox catalog." />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f8bfd4" />
        <link rel="canonical" href="https://lumin.rest/key/robux/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lumin.rest/key/robux/" />
        <meta property="og:site_name" content="lumin.rest" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Buy with Robux - lumin.rest" />
        <meta property="og:description" content="Purchase lumin.rest access using Robux on the Roblox catalog." />
        <meta property="og:image" content="https://lumin.rest/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://lumin.rest/key/robux/" />
        <meta name="twitter:title" content="Buy with Robux - lumin.rest" />
        <meta name="twitter:description" content="Purchase lumin.rest access using Robux on the Roblox catalog." />
        <meta name="twitter:image" content="https://lumin.rest/icon.png" />
      </Helmet>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
        )}
      />

      <div className="min-h-screen w-full flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6">
          <BlurFade delay={0.15} inView>
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold">Buy with Robux</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Purchase lumin.rest access directly on the Roblox catalog
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <Card className="w-[340px] flex flex-col border-[#f8bfd4]/30">
              <CardHeader>
                <CardTitle>Robux Purchase</CardTitle>
                <CardDescription>One-time purchase via Roblox catalog</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">Step 1 —</span> Purchase the item on
                  the Roblox catalog using the button below.
                </p>
                <p>
                  <span className="text-foreground font-medium">Step 2 —</span> Open a support
                  ticket in our Discord server and state your Roblox username so we can generate
                  your key.
                </p>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <a
                  href="https://www.roblox.com/catalog/106822048545630/lumin-rest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full cursor-pointer">
                    Buy on Roblox
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://discord.gg/JPDDcCrfgr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full cursor-pointer">
                    Open Support Ticket
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
