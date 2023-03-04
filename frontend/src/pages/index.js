import Head from "next/head";
import { Inter } from "next/font/google";
import { BiChevronLeft, BiBell, BiPin } from "react-icons/bi";
import Image from "next/image";
import Footer from "@/components/Footer";
import CommonScreen from "@/components/CommonScreen";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const MatchView = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col shadow-2xl rounded-2xl px-4 items-start gap-8">
        <div className="flex flex-row items-center h-[48px]">
          <div className="flex flex-row items-center w-[118.5px] gap-5 px-[9px] pt-[9px] pb-[9px]">
            <BiChevronLeft height={"14px"} width={"24px"} fontSize={"18px"} />
          </div>
          <div className="flex flex-row items-center gap-10 w-[220px]">
            <h1 className="font-semibold mx-auto text-md2">
              Find your partner
            </h1>
          </div>
          <div className="flex flex-row-reverse items-center w-[118.5px] gap-5 px-[9px] pt-[9px] pb-[9px]">
            <BiBell height={"14px"} width={"24px"} fontSize={"18px"} />
          </div>
        </div>
      </div>
      {/* Main body */}
      <div className="flex justify-center items-center flex-col mt-4">
        <div className="relative w-[327px] h-[495px]">
          <Image
            className="self-center object-cover rounded-2xl shadow-2xl"
            alt="name"
            src={"/icons/IMG.png"}
            width={327}
            height={495}
          />
          <div className="absolute text-white top-[352px] left-[16px] h-[89px] w-[191px]">
            <div className="flex flex-col">
              <h1 className="text-3xl decoration-3 mb-1">Kalvin, 23</h1>
              <div className="flex flex-row items-center space-x-2">
                <BiPin />
                <h4>Mumbai</h4>
                <h4>20 Kms Away</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons section */}
      <div className="p-8 items-center justify-center mx-[10%] flex flex-row">
        {/* <div className="flex flex-row"> */}
        <div className="bg-white hover:shadow-2xl shadow-lg mx-4 rounded-full w-[60px] h-[60px]">
          <Image
            className="self-center mx-auto mt-5"
            src="/icons/dislike.PNG"
            alt="Dislike"
            width={24}
            height={24}
          />
        </div>
        {/* </div> */}
        {/* <div className="flex flex-row"> */}
        <div className="bg-white hover:shadow-2xl shadow-lg mx-4 rounded-full w-[71px] h-[71px]">
          <Image
            className="self-center mx-auto mt-5"
            src="/icons/superLike.PNG"
            alt="Dislike"
            width={24}
            height={24}
          />
        </div>
        {/* </div> */}
        {/* <div className="flex flex-row"> */}
        <div className="bg-white hover:shadow-2xl shadow-lg mx-4 rounded-full w-[60px] h-[60px]">
          <Image
            className="self-center mx-auto mt-5"
            src="/icons/like.PNG"
            alt="Dislike"
            width={24}
            height={24}
          />
        </div>
        {/* </div> */}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/create/phone")
    }
  }, [isLoggedIn])
  return (
    <>
      <Head>
        <title>Very good name</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-100 w-[458px]">
        <MatchView />
      </main>
    </>
  );
}
