

export default function Footer() {
  return (
<footer className="bg-[#0b2653] text-white py-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center items-center text-sm gap-2">
      <span>Copyright © {new Date().getFullYear()} All rights reserved</span>
      <span>
        <a
          href="https://personalbd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Mohammad Rajib Bhuiyan
        </a>
      </span>
    </div>
  </div>
</footer>





  )
}
