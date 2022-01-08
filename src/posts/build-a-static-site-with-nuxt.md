# How To Build A Statically Generated Blog With Nuxt And Deploy It To Github Pages

Written on September 24th in the year 2018.

---

If you google static site generator and vue, one of the results that will come up is Nuxt. Nuxt is a framework built on top of Vue that offers a number of features one of which is an option to generate a static site from the application you've built.

There are several benefits of opting for a statically generated site including:

1. Security - All generated files are just flat HTML files with css and javascript. When a user requests a page, all they are sent is that flat file. Because there is no build process for the requested asset, common security risks such as cross site scripting become non-factors.
2. Speed - Since there is no processing involved, the server hosting all the static files can just send back a response immediately containing the static file requested.

In this article we'll go through how to build a personal blog using some of the features Nuxt has to offer. Once we've finished building our blog site, we'll walk through how to deploy it to Github Pages. Please note: this article assumes a working knowledge of Vue itself as well as Vuex. If you're unfamiliar with Vue, the [official docs](https://vuejs.org/v2/guide/) are a great place to start. By the end of our time together, my hope is that you'll have learned a little bit more about Nuxt, and the process of deploying to Github pages.

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

### Displaying Blog Entries on a Page

In Nuxt, each page that is shown to a user is created in the 'pages' directory. These pages are comprised of smaller, potentially reusuable components which are built in the 'components' directory. For our project, we will create a page called index.vue, and populate it with a component called EntriesComponent.vue:

```javascript
<template>
  <div>
    <entries-component> </entries-component>
  </div>
</template>

<script>
import EntriesComponent from '~/components/EntriesComponent';

export default {
    components: {
        EntriesComponent,
    },
    async fetch( {store} ) {
        await store.dispatch('LOAD_ENTRIES');
    }
}
</script>
```

If you've used Vue before then all of this looks pretty standard except potentially one thing and that is the `fetch` method. Nuxt gives it to us for free and it's a way to set store data before components in the **pages** directory are loaded. Perhaps an easier, more familiar way to think about it is as a life-cycle hook for Nuxt, similar to how Vue itself has it's own life-cycle hooks. Within the `fetch` method, we're dispatching a Vuex store action, similar to how you might do so in a regular Vue application. We won't go into much more depth about `fetch` here, but if you can read more about it [in the Nuxt docs](https://nuxtjs.org/api/pages-fetch).

What we will talk more about is what goes on in `EntriesComponent`.

As mentioned earlier, pages are comprised of components built in the components directory. In the previous step, we built our index.vue page and imported EntriesComponent.vue into it for use. Really the one thing EntriesComponent.vue does is display our data by looping through it using the common `v-for` technique provided by Vue:

```javascript
<template>
<main>
    <ul>
        <li
            class="entry__list-item"
            v-for="entry in entries"
            :key="entry.id"
        >
            <nuxt-link
                class="entry__link"
                :to="'/entries/'+entry.slug"
            >
                <h2 class="entry__link-header">
                    {{ entry.title }}
                </h2>
            </nuxt-link>
            <p>{{entry.createdAt}}</p>
        </li>
    </ul>
</main>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'EntriesComponent',
        computed: mapState([
            "entries"
        ])
    }
</script>
```

Two things to mention:

1. `<nuxt-link></nuxt-link>` : this component is provided by Nuxt as a means to navigate between different pages built in the Pages directory. You'll notice in the `:to` attribute a path has been added that corresponds to the page we're trying to navigate to.
2. We have implemented `mapState` which is given to us by Vuex, and mapped it to this vue instance's `computed` property.

Up until this point, we've been talking about the steps required to display a list of blog entries on a page. All of the things mentioned are pieces you'd typically find in a normal Vue project: component construction, Vuex store interaction, etc. With the introduction of EntriesComponent.vue, now is an appropriate time to move from the process of displaying things on a page, and talk a little more specifically about what goes on in our Vuex store, and how Nuxt handles dynamic pages and routes.

### Presenting Individual Entries

Earlier we highlighted `<nuxt-link></nuxt-link>` which allowed us to created routes to each of our entries displayed. You'll notice the path populating the `:to` attribue is `:to="'/entries/'+entry.slug"`. This tips us off to the fact that behind the scenes, Nuxt is creating a dynamic route for each entry we have. Let's create the page that will present each individual entry to the user. In the **pages** directory, we'll create a new directory called entries, enter into it, and create a file called `_slug.vue`. If you've used dynamic routes in Vue Router before, the structure of creating a folder in the pages directory and then adding a file prefixed by an underscore in said directory will yield a familiar result when Nuxt finishes generating the router:

```javascript
router: {
  routes: [
    {
      name: 'entries-slug',
      path: '/entries/:slug?',
      component: 'pages/entries/_slug.vue'
    }
  ];
}
```

So we've created the page that's going to display an individual entry when a user clicks on a link from the entries list. Next we'll take a look at what goes on in there, and that will give us the final piece we need to jump into our Vuex store. In the `_slug.vue` file, we'll add this code:

```javascript
<template>
    <main>
        <div class="home__link-container">
            <nuxt-link to="/">Return Home</nuxt-link>
        </div>
        <div id="wrapper" v-html="post">
        </div>
        <div class="home__link-container">
            <nuxt-link to="/">Return Home</nuxt-link>
        </div>
    </main>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {}
    },
    async fetch({store, route}) {
        await store.dispatch('LOAD_ENTRY', route.params.slug);
    },
    computed: {
        post() {
            let entry = this.$store.state.entry;
            return require(`~/static/entries/${entry}.md`);
        }
    }
}
</script>
```

Initially it may look like there are some unfamiliar features in this file, but upon closer inspection, we realize that all of what is in here we have most likely seen before. We used the `fetch` method Nuxt provides earlier in our EntriesComponent. We've already implemented <nuxt-link> for routing and we've talked about dispatching store actions. So really, the only thing that needs mentioning here is the computed property we've created, `post()`. Assuming you have used Vue computed properties before, all we are doing in here is retrieving the name of the entry we want from the store which is set asynchronously in the fetch method. Once we've retrieved that, we just return a require statement containing the path to our static entry. Finally, we use the Vue attribute, `v-html` to bind the content of the wrapper div to the value of the entry we've loaded in `post()`.

### Maintaining State in Vuex

Now that we have talked about all the pieces that go into displaying an individual entry selected from a list, let's talk about how we manage the state of our application.

In Vue, the suggested way of maintaining state is to use Vuex. We won't go into much depth regarding what exactly Vuex is. Deep down it really is just a glorified object that comes bundled with a set of tools that allows you the developer a simple, predictable, way of maintaining and managing the state of your application. If you'd like to read more about it, feel free to [check out the docs](https://vuex.vuejs.org).

Earlier when we created the file structure for our project, one of the directories we generated was called 'store'. Nuxt provides us with this directory should our project require the use of a state management tool (Vuex), all we have to do is add an `index.js` to it. So, let's add that to our store directory and populate it with this:

```javascript
import Vuex from 'vuex';
import entriesData from '~/static/entriesinfo.json';

const store = () => {
  return new Vuex.Store({
    state: {
      entries: [],
      entry: ''
    },
    mutations: {
      setEntries(state, data) {
        state.entries = data;
      },
      setEntry(state, name) {
        state.entry = name;
      }
    },
    actions: {
      LOAD_ENTRIES({ commit }) {
        const entries = entriesData.entries;
        commit('setEntries', entries);
      },
      LOAD_ENTRY({ commit }, entryName) {
        commit('setEntry', entryName);
      }
    }
  });
};

export default store;
```

We've seen a couple of these things in action already in components mentioned earlier, but let's walk through each bit and talk about what they do.

1. LOAD_ENTRIES: This is an action we've created to help us load the list of our entries. It really is just a function which loads entries from our json data file. Once it has those, it commits a mutation called `setEntries` which in turn sets our store entries array to the data we've retrieved.
2. LOAD_ENTRY: This action takes an entry name that we retrieve from the route params given to use by Vue. It then commits a mutation called `setEntry` that just sets our store 'entry' key to the value of our entry name.

With that, we are done with the majority of our project. In fact, there are only a couple more things that need to be mentioned before we deploy to github pages. Let's go over those things now.

### Managing the Metadata of Our Entries

When talking about state management, I mentioned a json data file. To keep things simple, all we will do is create a json file in our static directory, and populate it with the metadata of each entry we create. There are definitely other ways to do this, but this works for now. Our json file, named "entriesinfo.json" will maintain this structure:

```javascript
{
  "entries": [
    {
      "id": "yourID",
      "title": "yourTitle",
      "createdAt": "theDate",
      "slug": "yourSlug"
    },
  ]
}
```

This is just regular json, and shouldn't need much clarification. Certainly, you can choose your own property names, just be sure to update them wherever they are used in your application.

### Rendering Markdown as HTML

For this piece, we've used a module recommended by Nuxt, [markdownit-loader](https://github.com/nuxt-community/markdownit-loader). Using this module allows us to bind to v-html, similar to what we did in our `_slug.vue` page. Modules are loaded and configured in the nuxt.config.js file. For this project, we've stuck with defaults for most options:

```javascript
/// nuxt.config.js
module.exports = {
  /// other configs,
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    typographer: true,
    injected: true,
    use: ['markdown-it-container', 'markdown-it-attrs']
  }
};
```

### Configuring Routes for Static Rendering

By default, Nuxt does not recognize dynamic routes when running `nuxt generate`. In order to ensure dynamic routes are generated properly, a 'routes' function must be passed to the generate attribute located in the nuxt.config.js file:

```javascript
/// nuxt.config.js
module.exports = {
  /// other configs,
  generate: {
    routes: function() {
      return entriesData.entries.map(entry => {
        return '/entries/' + entry.slug;
      });
    }
  }
};
```

Typically when deploying to github pages you will need to set `/<repo-name>` as the router base. However, since we are going to be using our own domain name, leaving router base as it's default `/` is fine.

### Configuring Github Pages with a Custom Domain

We have one last step to take care of before we finally push our code up to github pages. Typically a github pages site will have a URL that looks something like https://<username>.github.io. That's fine, but in order to truly make your site your own, you really should have a custom domain point to whichever repo your project lives in. So, instead of https://<username>.github.io, you'll have customDomain.com. Lets go through the steps needed to do this now:

1. Purchase a custom domain and register it with a DNS provider (godaddy, google domains, etc.).
2. Add the custom domain to the github repository you want to use in that repository's settings. Settings > GitHub Pages > Custom domain.
3. In your DNS provider's control panel, you should have the option to configure an `A` record for your domain. Github provides four IP addresses when setting up a custom domain to point to github pages repository: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Set up an `A` recrod for each of these. NOTE: these IP addresses may potentially change, so check [this page](https://help.github.com/articles/setting-up-an-apex-domain/) for the current ones, as well as a more detailed guide about setting up `A` records with github pages.

Alright, let's talk about deploying.

### Deploying Your Static Site to Github Pages

Finally, we're ready to deploy our static site to Github Pages. To makes things a little easier, we'll use a node module that allows us to deploy directly from the command line. Go ahead and install the push-dir package:

```javascript
npm install push-dir --save-dev
```

Since we are deploying from the command line, we need to add a script that will allow us to do so in our package.json: `"deploy":"push-dir --dir=dist --branch-gh-pages --cleanup"`.

Now that we have our deploy script ready, all we need to do is first generate our static site by running `npm run generate`. Once this is done, we can run our deploy script and push our generated static site up to github pages. For a more in-depth walkthrough of the deploy process, feel free to check out the [Nuxt faq on deployment](https://nuxtjs.org/faq/github-pages).

### Closing Thoughts

And we're done! With the last step of pushing to GitHub Pages complete, we've officially finished creating our static website. Though this was a relatively simple example of using nuxt to create a static site, I hope you'll find that it covered some topics and processes that can be extended to more advanced use cases. Thanks for reading!
