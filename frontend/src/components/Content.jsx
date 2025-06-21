import React from "react"
import { Link } from "react-router-dom"

export default function Content (){
    return(
        <>
        <section className="bg-gdbg">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gdtext sm:text-lg">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gdtext">We didn't reinvent the wheel</h2>
                    <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
                </div>
            </div>
        </section>

        {/**TESTIMONIALS */}
        <section className="bg-gdbg body-font">
        <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
            <div class="mx-auto max-w-screen-sm">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gdtext">Testimonials</h2>
                <p class="mb-8 font-light text-gdtext lg:mb-16 sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
            </div> 

            <div class="flex flex-wrap -m-4" bis_skin_checked="1">
            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>

            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>

            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>
            
            </div>

            <div class="mt-6 pt-6 flex flex-wrap -m-4" bis_skin_checked="1">
            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>

            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>

            <div class=" lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
                <svg class="h-12 mx-auto mb-3 text-gdaccent" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <div class="h-full text-center" bis_skin_checked="1">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"></img>
                <p class="leading-relaxed text-gdtext">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-gdsecondary mt-6 mb-4"></span>
                <h2 class="text-gdtext font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gdtext">Senior Product Designer</p>
                </div>
            </div>
            
            </div>

        </div>
        </section>

        {/**LAST CTA */}
        <section className="bg-gdbg">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gdtext">Let's find more that brings us together.</h2>
                    <p class="mb-8 font-light text-gdtext sm:text-xl">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to="/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gdtext rounded-lg bg-gdsecondary hover:bg-gdprimary hover:text-gdbg focus:ring-4 focus:ring-primary-300 ">
                            Login
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                        <Link to="/signup" class="bg-gdprimary inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gdbg rounded-lg border border-gray-300 hover:bg-gdsecondary hover:text-gdtext focus:ring-4 focus:ring-gray-100 ">
                            Get started
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>  
                    </div>
                </div>
            </div>
        </section>



        {/**TEAM */}
        <section className="bg-gdbg">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gdtext">Our team</h2>
                <p class="font-light text-gdtext sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
            </div> 
            <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="text-center text-gdtext">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"></img>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gdtext">
                        <a href="#">Niya Ross</a>
                    </h3>
                    <p>CEO/Co-founder</p>
                </div>
                
                <div class="text-center text-gdtext">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar"></img>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gdtext">
                        <a href="#">Helene Engels</a>
                    </h3>
                    <p>CTO/Co-founder</p>
                </div>

                <div class="text-center text-gdtext">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"></img>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gdtext">
                        <a href="#">Jese Leos</a>
                    </h3>
                    <p>SEO & Marketing</p>
                </div>

                <div class="text-center text-gdtext">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar"></img>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gdtext">
                        <a href="#">Joseph Mcfall</a>
                    </h3>
                    <p>Sales</p>
                </div>
                
            </div>  
        </div>
        </section>
        </>
    )
 }