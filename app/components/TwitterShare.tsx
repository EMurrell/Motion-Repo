type TwitterShareProps = {
  className?: string;
};

export default function TwitterShare({ className }: TwitterShareProps) {
  return (
    <a
      className={` ${className} h-max min-w-max bg-white rounded-full p-2 text-gray-900 transition ease-in-out duration-200 hover:bg-gray-100/80`}
      href="https://twitter.com/intent/tweet?text=Checkout%20this%20resource%20for%20animations%20for%20developers%20by%20%40EMurrell%21&amp;url=https%3A%2F%2Fmotionrepo.com"
      target="_blank"
      rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-black">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    </a>
  );
}
