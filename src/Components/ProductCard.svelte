<script>
  import img1 from '../lib/images/img1.jpg'
  import img2 from '../lib/images/img2.jpg'
</script>



<div class="w-[300px] h-[350px] rounded-2xl ">

    <a href="#" class="group block overflow-hidden">
        <div class="relative  sm:h-[250px]">
          <img
            src={img1}
            alt=""
            class="absolute inset-0  w-[300px] object-cover opacity-100 group-hover:opacity-0"
          />
      
          <img
            src={img2}
            alt=""
            class="absolute inset-0  w-[300px] object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
      
        <div class="relative bg-transparent pt-3">
          <h3 class="text-sm group-hover:underline group-hover:underline-offset-4">
            Limited Edition Sports Trainer
          </h3>
      
          <div class=" flex items-center justify-between ">
            <p class="tracking-wide">$189.99</p>
          </div>
        </div>
      </a>
</div>