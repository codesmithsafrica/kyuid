"use client";
import User from '../../public/user.png'
import Image from "next/image";

export type Model = {
  id: string;
  firstName: string;
  lastName:string;
  role: string;
  subRole: string;
  picFront:string;
  bio: string;
  tags: string[];
  image: string; // URL
};

type Props = {
  model: Model;
};

export default function ModelCard({ model }: Props) {
  const tags= [model?.subRole, model?.role, model?.role]
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          // src={model.image}
             src={model?.picFront?model?.picFront:User.src}
          alt={model.firstName}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-yellow-400/90 dark:bg-yellow-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-900 shadow-sm ring-1 ring-yellow-500/30 dark:ring-yellow-300/30"
        >
          {model?.role}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div  className="flex justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{model?.firstName}{' '}{model?.lastName}</h3>            <span
          
              className=" inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20 "
            >
             {'Available'}
            </span>
        </div>

        <p className="text-sm  text-zinc-600 dark:text-zinc-300 line-clamp-3">
          {model.bio}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
    </article>
  );
}
