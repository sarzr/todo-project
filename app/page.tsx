import HomeLayout from "@/components/home/home-layout";
import Image from "next/image";
import { RiShareBoxLine } from "react-icons/ri";

export default function Home() {
  return (
    <HomeLayout>
      <div className="bg-purpleHome text-white min-h-home sm:min-h-smHome">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between lg:gap-40">
          <div className="pt-5 sm:pt-20 space-y-5 sm:space-y-9 mx-5">
            <h1 className="font-medium text-2xl sm:font-extrabold sm:text-4xl">
              To-do List Template
            </h1>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique ea inventore illo est nesciunt dignissimos sed deleniti
              asperiores quibusdam, aut voluptatibus accusamus amet ex dolore,
              accusantium excepturi at omnis explicabo, labore veritatis magni?
              Dignissimos totam consectetur ratione nemo, distinctio id at enim
              in eaque asperiores? Officiis numquam aliquid libero maxime.
            </p>
            <button className="bg-yellow text-purple px-6 py-2 rounded-full font-medium sm:font-semibold flex gap-3 items-center hover:bg-yellowHover">
              More Templates
              <RiShareBoxLine className="w-5 h-5 font-extrabold" />
            </button>
          </div>
          <Image
            src="/02444.png"
            alt="todo-list-image"
            className="sm:mr-10 mx-auto w-72 h-72 my-5 md:w-[400px] md:h-[400px]"
            width={500}
            height={500}

          />
        </div>
      </div>
    </HomeLayout>
  );
}
