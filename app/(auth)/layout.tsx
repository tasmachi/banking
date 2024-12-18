import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          className="ring-4 ring-black-2 rounded-md"
          src="/laptop.png"
          alt="auth image"
          width={500}
          style={{ objectFit: "cover" }}
          height={600}
        />
      </div>
    </main>
  );
}
