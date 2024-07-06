'use client';
import Link from 'next/link';
import Image from 'next/image';
import TextCycle from './TextCycle';
import DownloadButton from './DownloadButton';

export default function About() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-lg">

      <div className="flex flex-col justify-center items-center md:flex-row flex-1 min-w-full">
        <Image src="/images/adaam.png" alt="image of the author" width="500" height="500" className="p-4 flex-1 rounded-lg" />
        <section className="flex flex-1 justify-center items-center">
          <TextCycle />
        </section>
      </div>

      <div className="w-full min-h-32 sm:min-h-40 md:min-h-52 lg:-min-h-60 h-full flex flex-col flex-1 items-center justify-between">
        <DownloadButton />
      </div>
    </div>
  );
}