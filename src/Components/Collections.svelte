<script>
  import img1 from '../lib/images/img1.jpg'
  import img2 from '../lib/images/img2.jpg'
</script>

<div>

    <section class="bg-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold  sm:text-3xl">New Collection</h2>
      
            <p class="mx-auto mt-4 max-w-md ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>
      
          <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="/" class="group relative block">
                <img
                  src={img1}
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">Casual Trainers</h3>
      
                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
      
            <li>
              <a href="/" class="group relative block">
                <img
                  src={img2}
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>
      
                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
      
            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="/" class="group relative block">
                <img
                  src={img2}
                  alt=""
                  class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>
      
                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
</div>