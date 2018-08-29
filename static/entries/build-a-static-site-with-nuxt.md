# How To Build A Statically Generated Blog With Nuxt And Deploy It To Github Pages

Written on August 22nd in the year 2018.

---

If you google static site generator and vue, one of the results that will come up is Nuxt. Nuxt is a framework built on top of Vue that offers a number of features one of which is an option to generate a static site from the application you've built.

There are several benefits of opting for a statically generated site including:

1. Security - All generated files are just flat HTML files with css and javascript. When a user requests a page, all they are sent is that flat file. Because there is no build process for the requested asset, common security risks such as cross site scripting become non-factors.
2. Speed - Since there is no processing involved, the server hosting all the static files can just send back a response immediately containing the static file requested.

In this article we'll go through how to build a personal blog using some of the features Nuxt has to offer. Once we've finished building our blog site, we'll walk through how to deploy it to Github Pages. By the end of our time together, my hope is that you'll have learned a little bit more about Nuxt and Vue, and the process of deploying to Github pages.

### Installing Nuxt

All you need to do to get started with Nuxt is initialize a new Vue project with the Nuxt starter template:

```javascript
vue init nuxt-community/starter-template <project-name>
```

Once this is done, cd into your project directory and install the dependencies using either npm or yarn, both are fine:

```javascript
npm install / yarn install
```

Finally, fire up the project using terminal:

```javascript
npm run dev / yarn dev
```

### A Word on Directory Structure

This article will reference several different directories, so it's worth briefly summarizing what they are and what they will be use for.

- **assets** - Similar to a regular project in that you might put things like images, css, or javascript in here.
- **components** - Contains your Vue components. Unlike what you may find in a regular Vue project, components stored here don't have routes that go to them. These components are used to build your pages.
- **pages** - This directory houses the views and routes for your Nuxt application. Unlike a regular Vue project, you don't have to worry about configuring your router directly, as Nuxt takes care of this for you. The vue components in this directory are built with the components you create in the 'components' directory.
- **static** - Contains static files. For this project, we will use this to keep track of our blog entries.
- **store** - Vuex Store files go here. Creating an `index.js` file here will automatically activate the Vuex option in Nuxt.
- **plugins** - Any sort of plugins you'd want to run before instantiating the root application would be put here.

The above is just a brief rundown of some of the directories we will be addressing later on. You'll notice that some directories aren't mentioned, and that's because they aren't used much in this particular project. For more information, feel free to check out the official Nuxt documentation [here](https://nuxtjs.org/guide).
