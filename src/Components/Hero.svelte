<script>
  import img1 from '../lib/images/img1.jpg'
  import img2 from '../lib/images/img2.jpg'
</script>


<div>
    <section class="border-solid border-gray-300">
        <div class="mx-auto max-w-screen-xl space-y-8  py-16 gap-8 sm:px-6 lg:space-y-16 lg:px-4 ">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-black p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>
      
                <p class="hidden text-white/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                  sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                  volutpat quisque ut interdum tincidunt duis.
                </p>
      
                <div class="mt-4 md:mt-8">
                  <a
                    href="/"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
      
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src={img1}
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
      
              <img
                alt=""
                src={img2}
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
</div>