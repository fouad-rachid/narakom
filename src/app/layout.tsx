import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className=" max-w-screen-md mx-auto lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar/>
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray  bg-pink-600 h-screen ">{children}</div>
          <div className="hidden lg:flex ml-2 xl:ml-4 flex-1 bg-purple-800 h-screen">
            <RightBar/>
          </div>
        </div>
      </body>
    </html>
  );
}
