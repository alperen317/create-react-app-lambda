import React from 'react';

const HomePage = () => {
  return (
    <div className='p-5'>
      {/* section */}
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
     
      <img alt="" src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy"
       className="absolute inset-0 h-full w-full object-cover object-center" />
    

      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
  
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1>

        {/* <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div> */}
      </div>
   
    </section>

{/* gallery */}
<h3 className="text-center text-xl font-semibold text-gray-700 mb-8 mt-8">Ürüner</h3>
<div className="mb-5 mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">

  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/image1.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Category 1</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/image2.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Category 2</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/image3.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Category 3</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/image4.jpg" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Category 4</span>
  </a>
 
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/newimage1.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">New Category 1</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/newimage2.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">New Category 2</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/newimage3.jpg" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">New Category 3</span>
  </a>
  <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img alt="" src="https://example.com/newimage4.jpg" loading="lazy"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">New Category 4</span>
  </a>
</div>

<div className="mx-auto mt-32 ">
    <section className="grid md:grid-cols-3 xl:grid-cols-5 gap-4">
    <div className="relative">
  <a href="/" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
    <img src="https://reformsports.com/oajajeel/2020/10/malatya-darende-fifa-futbol-sahasi-2.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

   
    <span className="absolute bg-transparent inset-x-0 top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white rounded-r-lg">
      Halı Saha
    </span>
  </a>


</div>
<div className="relative">
  <a href="/" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
    <img src="https://reformsports.com/oajajeel/2020/10/malatya-darende-fifa-futbol-sahasi-2.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

   
    <span className="absolute bg-transparent inset-x-0 top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white rounded-r-lg">
      Halı Saha
    </span>
  </a>


</div>
<div className="relative">
  <a href="/" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
    <img src="https://reformsports.com/oajajeel/2020/10/malatya-darende-fifa-futbol-sahasi-2.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

   
    <span className="absolute bg-transparent inset-x-0 top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white rounded-r-lg">
      Halı Saha
    </span>
  </a>


</div>
<div className="relative">
  <a href="/" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
    <img src="https://reformsports.com/oajajeel/2020/10/malatya-darende-fifa-futbol-sahasi-2.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

   
    <span className="absolute bg-transparent inset-x-0 top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white rounded-r-lg">
      Halı Saha
    </span>
  </a>


</div>
<div className="relative">
  <a href="/" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
    <img src="https://reformsports.com/oajajeel/2020/10/malatya-darende-fifa-futbol-sahasi-2.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

   
    <span className="absolute bg-transparent inset-x-0 top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white rounded-r-lg">
      Halı Saha
    </span>
  </a>


</div>

      
  
    </section>

  </div>
    </div>
  );
};

export default HomePage;

