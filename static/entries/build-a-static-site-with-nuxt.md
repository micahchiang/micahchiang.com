# How To Build A Statically Generated Blog With Nuxt And Deploy It To Github Pages

Written on August 22nd in the year 2018.

---

If you google static site generator and vue, one of the results that will come up is Nuxt. Nuxt is a framework built on top of Vue that offers a number of features one of which is an option to generate a static site from the application you've built.

There are several benefits of opting for a statically generated site including:

1. Security - All generated files are just flat HTML files with css and javascript. When a user requests a page, all they are sent is that flat file. Because there is no build process for the requested asset, common security risks such as cross site scripting become non-factors.
2. Speed - Since there is no processing involved, the server hosting all the static files can just send back a response immediately containing the static file requested.
