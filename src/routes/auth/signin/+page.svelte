<script>
  import img4 from '../../../lib/images/img4.jpg'
</script>

<div>
   

    <div>
        <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->
    
    <section class="">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex justify-centre align-middle h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={img4}
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />
      
            
          </section>
      
          <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
                <div class=" text-teal-600 mt-1 w-full flex py-5 items-center justify-center"> <p class="">welcome back</p></div>
              
      
              <form action="/" class="mt-8 grid grid-cols-6 gap-6">
               

                <a href="/auth/signup" class="col-span-6 mt-1 w-full rounded-md border border-gray-500 bg-grey-600 text-sm text-white shadow-sm flex">
                    <div class="px-4 py-2">
                        <svg class="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>
        
                    <span class="w-5/6 px-4 py-3 font-bold  text-center">Sign in with Google</span>
                </a>
      
                <div class="col-span-6">
                  <label for="Email" class="block text-sm font-medium text-white"> Email </label>
      
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    class="mt-1 w-full rounded-md border-gray-500 border bg-transparent text-lg py-3 px-2 text-whiteshadow-sm"
                  />
                </div>
      
                <div class="col-span-6 ">
                  <label for="Password" class="block text-sm font-medium text-white"> Password </label>
                  <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-500 border bg-transparent text-lg py-3 px-2 text-whiteshadow-sm"
                />
                  
                </div>
      
                
      
               
      
                <div class="col-span-6">
                  <p class="text-sm text-gray-50">
                    By logging in an account, you agree to our
                    <a href="/" class="text-gray-100 underline"> terms and conditions </a>
                    and
                    <a href="/" class="text-gray-100 underline">privacy policy</a>.
                  </p>
                </div>
      
                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Log in
                  </button>
      
                  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Dont have a accout 
                    <a href="/auth/signup" class="text-gray-100 underline">Register</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    
    
    
    
    
     
    </div>
 

</div>